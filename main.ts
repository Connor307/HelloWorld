brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    brick.setStatusLight(StatusLight.GreenFlash);
    brick.showString("Hello World", 1);
    brick.showString("You are living in a simulation", 2);
})