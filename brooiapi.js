import http from 'k6/http';
import { sleep } from 'k6';
import {check} from 'k6';


export const options = {
  vus: 3000,
  duration: '30s',
};

export default function () {
    const url = 'https://staging.brooi.com/?tab=login'
    const payload = JSON.stringify({
        email: 'iamjosephtunde@gmail.com',
        password: 'Lambda_12345$$',
     });
    const res = http.get(url,payload);
    check(res, {
        'is status 200': (r) => r.status === 200,
        'is res body has email': (r)=> r.body.includes('iamjosephtunde@gmail.com')
    })
    sleep(1);
  }