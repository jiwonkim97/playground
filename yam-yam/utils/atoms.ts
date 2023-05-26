import {MarkerProps} from '@/pages';
import {atom} from 'recoil';

export const atomMarkerLocation = atom<Array<MarkerProps>>({
  key: 'atom-marker-location',
  default: [{position: {lat: 37.50098, lng: 127.03623}, title: '패스트파이브 역삼 3호점'}],
});
