import Helpers, { HelpersProps } from './Helpers.js';
import State, { StateProps } from './State.js';

export interface AppGameProps {
    name: string;
    helpers: object;
    state: StateProps;
    match: MatchProps;
}

type MatchProps = {
    // cells?: any[]
    cells?: Array<any>
}

export class AppGame {
    readonly name: string;
    readonly helpers: HelpersProps;
    state: StateProps;
    match: MatchProps;
    constructor() {
        this.name = 'Tic Tac Toe';
        this.match = {
            cells: [['Game Cells'], [false, false, false], [false, false, false], [false, false, false]]
        };
        this.state = new State(this) as StateProps;
        this.helpers = Helpers as HelpersProps;
        (<any>window).TicTacToe = this as AppGameProps
    }

    static init() {
        new AppGame();
        (<any>window).TicTacToe.state.changeState('load request');
    }
}