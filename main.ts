input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        . . # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        # # # # #
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
	
})
