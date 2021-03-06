'use strict';
import { commands, window } from 'vscode';
import { Command, Commands, getLastCommand } from './common';
import { Logger } from '../logger';

export class ShowLastQuickPickCommand extends Command {

    constructor() {
        super(Commands.ShowLastQuickPick);
    }

    async execute() {
        const command = getLastCommand();
        if (command === undefined) return undefined;

        try {
            return commands.executeCommand(command.command, ...command.args);
        }
        catch (ex) {
            Logger.error(ex, 'ShowLastQuickPickCommand');
            return window.showErrorMessage(`Unable to show last quick pick. See output channel for more details`);
        }
    }
}