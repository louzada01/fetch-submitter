const fetch = require("node-fetch");

// Define total votes for loop
var totalVotes = 20;
// Count votes total
var votes = 0;
//Include you fetch request has ben tested
const loop = setInterval(() => {
  fetch(
    "https://docs.google.com/forms/d/e/1FAIpQLSeBRCfYc7nTPQOEf8kdQB1Qh6d-dPwzrbNYSRjiW6TBdIKgMA/formResponse",
    {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9,pt;q=0.8",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        cookie:
          "NID=203=ksL7hjD6B7al6tIbrF1oXAuY98cOLwINUZZXgJ1peaGfSa2zQalk0QZu28ECF9VeKpRMaQ9nnTkwVeu93n7wMoxGa6OmNYdxyeCoip8p0qOX-ICBAw8Zrdc85uViYdlvs-7OcVRv6ji8nl5RrfuRNo4iEOwXWHdPHwgKyQ2o5OA",
      },
      referrer:
        "https://docs.google.com/forms/d/1Spbgf3NjLkwkYwte-GyVSjGygHoefBGcNHOVNUHY3wc/viewform?edit_requested=true&fbzx=1436250122075274652",
      referrerPolicy: "no-referrer-when-downgrade",
      body:
        "entry.1268457184=Op%C3%A7%C3%A3o+2&entry.1533157506=Op%C3%A7%C3%A3o+3&fvv=1&draftResponse=%5Bnull%2Cnull%2C%221436250122075274652%22%5D%0D%0A&pageHistory=0&fbzx=1436250122075274652",
      method: "POST",
      mode: "cors",
    }
  )
    .then((res) => {
      console.log(`${votes} votes.`);
      votes++;
    })
    .catch((err) => console.log(err));
  if (votes >= totalVotes) clearInterval(loop);
}, 500);
