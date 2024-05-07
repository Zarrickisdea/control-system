import { _decorator } from 'cc';
import { Command } from './Command';
import { KeyboardConstants } from './KeyboardConstants';
const { ccclass, property } = _decorator;

@ccclass('MoveForward')
export class MoveForward extends Command {

    public Execute(keyInput: KeyboardConstants) {
        if (keyInput == KeyboardConstants.W) {
            console.log("Moving Forward");
        }
    }
}


