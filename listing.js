import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  
    vus: 30,
  duration: '3s',
};
export default function () {
  http.get('https://staging.brooi.com/hosting/listings');
  sleep(1);
}