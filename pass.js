import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '10s',

};

export default function() {
  const accessToken = 'eyJraWQiOiJiblhIVVdhTUR5QzFMNkt1clNHXC80aGdNMmhrM1JIdktZRmpnVlVEXC9JU289IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI5YmZkNWU0NS0xNmQyLTQ2MWItYTc5Mi1lMDE0ZTU5NTYxZjEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl94VGg1QlZlM2UiLCJjbGllbnRfaWQiOiI3dmduYzdvczR2ZjNwcTB1cW00M2E2aDA2ayIsIm9yaWdpbl9qdGkiOiIxZjhkOWNjMi1hYTc5LTQwMTUtYjExNi1mYWI3NzczNmU5MDIiLCJldmVudF9pZCI6IjJhNDBmMjU0LThjYjQtNDJhNy1hNmRmLWI2NjkyZDAxZjU3ZiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDg1MzgyODIsImV4cCI6MTcwODU0MTg4MiwiaWF0IjoxNzA4NTM4MjgyLCJqdGkiOiI0Y2UzNGU1OC0zYTc4LTRhMTMtYmZjOS0yMDQwYzI1MTdhMjMiLCJ1c2VybmFtZSI6IjliZmQ1ZTQ1LTE2ZDItNDYxYi1hNzkyLWUwMTRlNTk1NjFmMSJ9.FsfQqMiF9CiYD70ALvD_EEwvHhBFEvackPa0nzjul12hTQyIfhOvEhCgn9lIOtlNNK8wRKEZbMjNDt7KK-WpxWFyX6dSAxQtZmj0L-0SW1hDhkUxuxyCfOPhdPm8ZotTmWl07wHps48084VXQ1nC5pr-DsJxwIZZn3RNIUTBSpvnhONm8oVC9uAjRJJtn8WrO-XNXg-eCZ0YnP_C7hB0P8axJXAgMi-80FeSl-mRBeSk3RB9tnhCe3pkrIy3EWxdIe48BlJKvjOK5EziAITA_WD6J7sponyN5e-4vkJWCsSpIh6MS9i-KUxgaOhaJWQgNOUVUbJelhqrqhGu6_ierw';
  const query = `
  mutation StartCheckout{
    startCheckout(request: { 
      listingId: "65bb677d14715a0023a8da03",
      checkout:{
            checkInDate:"02-23-2024",
            checkoutDate:"02-27-2024",
            GuestDetails:{
          }
      }}){
      status
  checkout{
    id
  checkIn
  checkOut
  }
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