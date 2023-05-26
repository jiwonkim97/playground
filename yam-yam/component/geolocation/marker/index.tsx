import {useEffect} from 'react';

export interface CustomMarkerProps {
  position: {
    lat: number;
    lng: number;
  };
  map: google.maps.Map;
  title: string;
  onClick: Function;
}
const Marker = ({position, map, title, onClick}: CustomMarkerProps) => {
  useEffect(() => {
    const marker = new google.maps.Marker({
      position: position,
      map: map,
      title: title,
      clickable: true,
    });
    marker.addListener('click', onClick);
  }, [position, map, title]);
  return null;
};

export default Marker;
