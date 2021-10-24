let hluk = 0
pins.servoWritePin(AnalogPin.P1, 0)
basic.forever(function () {
    hluk = smarthome.ReadNoise(AnalogPin.P10)
    if (hluk > 70) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(2000)
    } else {
        pins.servoWritePin(AnalogPin.P0, 100)
        basic.pause(2000)
    }
})
