let Hand = 0
input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # # # . .
            # # # # .
            # # # # .
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 2742, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else if (Hand == 2) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 2474, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1939, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
