var five = require("johnny-five");
var raspi = require("raspi-io");

var board = new five.Board({
    io: new raspi()
});

board.on('ready', function () {
    console.log('Board ready');

    var thermometer = new five.Thermometer({
        freq: 1000,
        pin: "GPIO5",
        controller: 'DS18B20'
    });

    thermometer.on("data", data => {
        console.log("Data changed");
        
    });
});