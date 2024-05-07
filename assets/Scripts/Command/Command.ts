import { _decorator } from 'cc';
import { KeyboardConstants } from './KeyboardConstants';
const { ccclass, property } = _decorator;

@ccclass('Command')
export abstract class Command {

    private keyInput: KeyboardConstants;

    public abstract Execute(keyInput: KeyboardConstants);

    public SetCommand(newInput: KeyboardConstants) {
        this.keyInput = newInput;
    }

    public Clear() {
        this.keyInput = KeyboardConstants.None;
    }
}

@ccclass('CommandManager')
export default class CommandManager {

    private commands: Array<Command> = [];

    public AddCommand(command: Command) {
        this.commands.push(command);
    }

    public RemoveCommand(command: Command) {
        this.commands.splice(this.commands.indexOf(command), 1);
    }

    public GetCommand(command: Command) {
        return this.commands[this.commands.indexOf(command)];
    }

    public ClearCommand(command: Command) {
        command.Clear();
    }

    public ClearCommands() {
        this.commands = [];
    }
}


