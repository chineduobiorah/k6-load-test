import http from 'k6/http';
import {sleep} from 'k6';


export const options = {
  
    vus: 5,
  duration: '3s',
};
export default function () {
  http.get('https://staging.brooi.com/');
  sleep(1);
}