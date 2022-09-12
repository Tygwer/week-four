let Random_LR = 0
basic.forever(function () {
    if (AlphaBot2.Ultrasonic() < 20) {
        AlphaBot2.Run(Dir.stop, 150)
        basic.showIcon(IconNames.No)
        Random_LR = randint(0, 1)
        if (Random_LR == 0) {
            AlphaBot2.RunDelay(Dir.turnRight, 70, 2)
        } else {
            AlphaBot2.RunDelay(Dir.turnLeft, 70, 2)
        }
    } else {
        AlphaBot2.Run(Dir.forward, 70)
        basic.showIcon(IconNames.Yes)
    }
})
