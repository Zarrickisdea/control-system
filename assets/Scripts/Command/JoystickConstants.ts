import { EventGamepad, _decorator } from 'cc';
const { ccclass, property } = _decorator

export enum JoystickConstants {
    None = 0,
    ButtonSouth = 1,
    ButtonEast = 2,
    ButtonNorth = 3,
    ButtonWest = 4,
    ButtonShare = 5,
    ButtonOptions = 6,
    ButtonUp = 7,
    ButtonDown = 8,
    ButtonLeft = 9,
    ButtonRight = 10,
    ButtonL1 = 11,
    ButtonR1 = 12,
    ButtonL2 = 13,
    ButtonR2 = 14,
    ButtonLeftStick = 15,
    ButtonRightStick = 16
}

@ccclass('JoystickEvent')
export class JoystickEvent {
    public onButtonPressed(event: EventGamepad) {
        console.log("Joystick Event: ", event)
    }
}

