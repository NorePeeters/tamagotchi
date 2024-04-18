input.onButtonPressed(Button.A, function () {
    voeding += 5
})
input.onButtonPressed(Button.B, function () {
    knuffel += 5
})
let dood = 0
let knuffel = 0
let voeding = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.pause(1000)
    voeding += -1
})
basic.forever(function () {
    basic.pause(1000)
    knuffel += -1
})
basic.forever(function () {
    if (knuffel < 10 || voeding < 10) {
        basic.showIcon(IconNames.Sad)
    }
    if (knuffel > 10 && voeding > 10) {
        basic.showIcon(IconNames.Happy)
    }
    if (knuffel < 0 || voeding < 0) {
        dood += 1
    }
})
basic.forever(function () {
    if (dood == 1) {
        basic.showIcon(IconNames.Asleep)
    }
})
