radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    KLIK = 1
})
input.onButtonPressed(Button.AB, function () {
    if (KLIK == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        radio.sendString("a")
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
radio.onReceivedString(function (receivedString) {
    KLIK = 0
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        . # . # .
        . . # . .
        `)
})
let KLIK = 0
radio.setGroup(148)
KLIK = 0
basic.forever(function () {
	
})
