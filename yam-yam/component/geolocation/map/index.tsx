import {Loader} from '@googlemaps/js-api-loader';
import {Dispatch, SetStateAction, useEffect} from 'react';

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || '',
  version: 'weekly',
});
interface MapProps {
  map: google.maps.Map | null;
  setMap: Dispatch<SetStateAction<google.maps.Map | null>>;
}
const GoogleMap = ({map, setMap}: MapProps) => {
  const googleMapClickEvent = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      console.log(event);
      console.log(event.latLng.lat());
      console.log(event.latLng.lng());
    }
  };

  useEffect(() => {
    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: {lat: 37.50098, lng: 127.03623},
        zoom: 18,
      });
      setMap(map);
    });
  }, []);

  useEffect(() => {
    const clickListener = map?.addListener('click', googleMapClickEvent);

    return () => {
      if (clickListener) google.maps.event.removeListener(clickListener);
    };
  }, [map]);

  return null;
};

export default GoogleMap;
