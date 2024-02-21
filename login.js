import { sleep } from 'k6';
import { check } from 'k6/http';

export const options = {
  vus: 100,
  duration: '30s', 
};

export default function () {
 
  const loginUrl = 'https://staging.brooi.com/?tab=login';

  
  const email = 'wajeb63266@evvgo.com';
  const password = 'Poch123#';

  const payload = JSON.stringify({ email, password });

  const loginResponse = check(http.post(url, payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  }), {
    'Successful login': (res) => res.status === 200,
  });

  
}