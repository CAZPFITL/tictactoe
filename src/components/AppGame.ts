import Helpers from './Helpers.js';
export class AppGame {
    readonly name: string = 'Tic Tac Toe';
    readonly helpers: object = Helpers;
    match: Match;
    constructor() {
        this.match = {
            cells: [['Game Cells'], [false, false, false], [false, false, false], [false, false, false]]
        }
    }

    static init() {
        (<any>window).TicTacToe = new AppGame()

    }
}

type Match = {
    cells?: any[]
    // cells?: Array<any>
}

export interface AppGameProps {
    name: string;
}
