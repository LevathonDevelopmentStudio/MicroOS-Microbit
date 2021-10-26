input.onPinPressed(TouchPin.P0, function () {
    if (i >= 1) {
        i += 1
        basic.showNumber(a - b)
    }
})
input.onButtonPressed(Button.A, function () {
    if (i == 0) {
        a += -1
        basic.showNumber(a)
    } else {
        if (i == 1) {
            b += -1
            basic.showNumber(b)
        }
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (i >= 1) {
        i += 1
        basic.showNumber(Math.idiv(a, b))
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hello! press A+B to read this again! Welcome to MicroOS! press B for calculator!")
})
input.onButtonPressed(Button.B, function () {
    if (i == 0) {
        a += 1
        basic.showNumber(a)
    } else {
        if (i == 1) {
            b += 1
            basic.showNumber(b)
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (i >= 1) {
        i += 1
        basic.showNumber(a * b)
    }
})
let b = 0
let a = 0
let i = 0
basic.showString("Hello! press A+B to read this again! Welcome to MicroOS! press B for calculator!")
