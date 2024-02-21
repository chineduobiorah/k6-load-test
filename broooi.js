import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '30s',

};

export default function() {
  const accessToken = 'eyJraWQiOiJiblhIVVdhTUR5QzFMNkt1clNHXC80aGdNMmhrM1JIdktZRmpnVlVEXC9JU289IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJhMjU3OGJkMi02NjgxLTRhZDAtOThhZC00NjYxMjNjOWE4NWEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl94VGg1QlZlM2UiLCJjbGllbnRfaWQiOiI3dmduYzdvczR2ZjNwcTB1cW00M2E2aDA2ayIsIm9yaWdpbl9qdGkiOiI1ZmUyNDljZS1iMWY0LTRmZTYtODhkYi1lMTIyOGMyMzg5ZWQiLCJldmVudF9pZCI6IjQ1NzU3MWIyLTllNDAtNDA5Mi1iNjNjLTAxMWUwNjMzZDlmMCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDgzNDQ3MjIsImV4cCI6MTcwODM0ODMyMiwiaWF0IjoxNzA4MzQ0NzIyLCJqdGkiOiJlMjFjZWY2NC04MWUyLTQ0YTEtOGYxMS01NzQwZmRjYjdlNTgiLCJ1c2VybmFtZSI6ImEyNTc4YmQyLTY2ODEtNGFkMC05OGFkLTQ2NjEyM2M5YTg1YSJ9.yQdJV5N9EgW3y1QgYA0rYG-ZdI267qVYrgz5h0K34VT_P81uSw2ljIfRGCPtwVJaZpo_zc8nJOM4AudK5200RN2Y6wJ8k6jqj3HG62luMw0cTW-hjWwPXEk2Mvf5pTLix1U-3PUP6qzOGTwxtU1ct2IO2Yg36BawwlDUqRnvIj82WPK_GVT9wz3MEMIv023p_1pM5AWE0pv7mMbkLw91G2z9rTeyHo2f_CNFaFsfSb1gkFydDJbTosTE70Y9Lf1esih_TzLJlb5DDt0ZqAM6Gw9KzmDCR6XAACW8ZWC-QTD5BoJehcgkNGSlHcLaiGEiM0IjJes6_Mw8dNYk-b8hKQ';
  const query = `
     mutation {
      forgotPassword(request: { email: "iamjosephtunde@gmail.com" }) {
        status
        message
      }
    }
    `;

  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  };

  const res = http.post(
    'https://api.staging.brooi.com/',
    JSON.stringify({ query: query }),
    {
      headers: headers,
    }
  );
  sleep(1);
}