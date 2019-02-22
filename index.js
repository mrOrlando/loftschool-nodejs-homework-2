const http = require('http');
require('dotenv').config();

let intervalId = null;
http
  .createServer(function (res, req) {
    if (!intervalId) {
      intervalId = setInterval(() => {
        console.log(Date());
      }, process.env.INTERVAL_TIME);

      setTimeout(() => {
        clearInterval(intervalId);
        req.end(Date());
      }, process.env.STOP_TIMER_TIME);
    }
  })
  .listen(process.env.SERVER_PORT);

console.log(`HTTP server running on port ${process.env.SERVER_PORT}`); // del
