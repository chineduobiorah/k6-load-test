import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '3s',

};

export default function() {
  const accessToken = `yJraWQiOiJiblhIVVdhTUR5QzFMNkt1clNHXC80aGdNMmhrM1JIdktZRmpnVlVEXC9JU289IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJhMjU3OGJkMi02NjgxLTRhZDAtOThhZC00NjYxMjNjOWE4NWEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl94VGg1QlZlM2UiLCJjbGllbnRfaWQiOiI3dmduYzdvczR2ZjNwcTB1cW00M2E2aDA2ayIsIm9yaWdpbl9qdGkiOiJiYTk2MTQzNi05MTc0LTQ5ZjktOThmMi0zNDg0NGRmMTdkMjMiLCJldmVudF9pZCI6IjEyNWY4NDRmLTEwNjctNGNjMS05ZmRlLTViZDcxYzIxNzJkYSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDg0OTc4NzksImV4cCI6MTcwODUwMTQ3OSwiaWF0IjoxNzA4NDk3ODc5LCJqdGkiOiI1MmE1NWFhYS00NGVjLTRhZTItYmZjNS1hMWU2MmQ2OWE5ZTAiLCJ1c2VybmFtZSI6ImEyNTc4YmQyLTY2ODEtNGFkMC05OGFkLTQ2NjEyM2M5YTg1YSJ9.k2dbjyUJAjZoyYmxovyec2yMQl6L82AoOYKJZjvrHaxKabwFJ1Ng76t_euSYZ2vLYoca7bBZqsXW1il_ClPVa2RKrHHR4bHwV8zzudbE7mLrY738e86HeV9iQNz6KMlt-PnX8A00wA0LJ3Zh_2hlLSeYZnEPTmAuUv_zQoMb9tm_HmBaV0jLbAw5eaYGW2pTkMmXYGNbQwtR81VArRpC4uEOkxmQVUS6D1Y--Kx0g7r8fCDT3KuIiflWx7H8CHjG7YWgSDq-vdVSt9ZOyOv-yJoJ8mH9YOVGeF48uA6XHJeZcLMlqnlK4AQ7dETw4xgIkpyTKIMoZIQBq3nZW4TNFA`;
  const query = `
  mutation changepassword{changePassword(request: {
    previousPassword: "Lizzy1234#"
    newPassword: "Lizzy123#"
  confirmPassword: "Lizzy123#"
  }){
    status 
  message
  }}
    `;

  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  };

  const res = http.post(
    'https://staging.brooi.com/account-settings/login-and-security',
    JSON.stringify({ query: query }),
    {
      headers: headers,
    }
  );
  sleep(1);
}