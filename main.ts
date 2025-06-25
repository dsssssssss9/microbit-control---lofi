bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    receivedString = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (receivedString == "up") {
        basic.showArrow(ArrowNames.North)
    }
    if (receivedString == "down") {
        basic.showArrow(ArrowNames.South)
    }
    if (receivedString == "right") {
        basic.showArrow(ArrowNames.East)
    }
    if (receivedString == "left") {
        basic.showArrow(ArrowNames.West)
    }
    if (receivedString == "stop") {
        basic.showIcon(IconNames.No)
    }
})
let receivedString = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
