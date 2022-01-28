const { WebSocket } = require("ws");

const ws = new WebSocket("wss://modularizar.com/ws", {
  perMessageDeflate: false,
});

//recommended between 5.5 and 6
  //gauge from 4 to 8, middle at 6
  //const acidity = parseFloat((Math.random() * (5.8 - 6) + 6).toFixed(1));

  //recommended between 1.5 and 2.5
  //gauge from 0.5 to 1,69
  //const ec = parseFloat((Math.random() * (1.2 - 1.4) + 1.4).toFixed(2));

   //recommended 800
  //gauge from 400 to 1200
  //const tds = parseFloat((Math.random() * (1.2 - 1.4) + 1.4).toFixed(2));

  //recommended between 50% and 60%
  //gauge from 0% to 100%
  //const humidity = parseFloat((Math.random() * (50 - 51) + 51).toFixed(2));

setInterval(() => {
  if (ws.OPEN) {
    ws.send(
      JSON.stringify({
        ambientTemperature: parseFloat((Math.random() * (10 - 13) + 25).toFixed(2)),
        ambientHumidity: parseInt((Math.random() * (50 - 75) + 75).toFixed(0)),
        waterTemperature: parseFloat((Math.random() * (20 - 25) + 25).toFixed(2)),
        waterTDS: parseInt((Math.random() * (780 - 800) + 800).toFixed(0)),
        waterPh: parseFloat((Math.random() * (5.8 - 6) + 6).toFixed(1)),
        fireAlarm: false,
      })
    );
  }
}, 3000);

ws.on("message", (data) => console.log(data.toString()));
