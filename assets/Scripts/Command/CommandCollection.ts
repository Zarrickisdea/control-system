import { _decorator, Enum } from 'cc';
const { ccclass, property } = _decorator;

export enum CommandType {
    None = 0,
    MoveForward = 1,
    MoveBackward = 2,
    MoveLeft = 3,
    MoveRight = 4,
    Block = 5,
    PrimaryAttack = 6,
    SecondaryAttack = 7,
}

@ccclass('CommandCollection')
export class CommandCollection {
    
    public GetCommand(command: CommandType) {
    }
}


