var five = require("johnny-five");
var raspi = require("raspi-io");

var board = new five.Board({
    io: new raspi()
});

board.on('ready', function () {
    console.log('Board ready');

    var temperature = new five.Temperature({
        freq: 1000,
        pin: "GPIO5"
    });

    temperature.on("data", data => {
        console.log("Data changed");
    });
});