import { input, Input, Component, _decorator, EventGamepad, sys, settings, Settings, __private } from 'cc';
import { WINDOWS } from 'cc/env';
const { ccclass, property } = _decorator;

@ccclass('InputHandler')
export class InputHandler extends Component {

    private currentGamepad = null;

    private gamepadDevice: __private._pal_input__GamepadInputDevice;
    onLoad() {

        // check if gamepad is connected
        if (this.gamepadDevice && this.gamepadDevice.connected) {
            this.currentGamepad = this.gamepadDevice;
            input.on(Input.EventType.GAMEPAD_CHANGE, this.currentInputDevice, this);
        }
        else {
            input.on(Input.EventType.KEY_DOWN, this.currentInputDevice, this);
        }
    }

    private currentInputDevice (event: any) {
        console.log(event);
    }
}


