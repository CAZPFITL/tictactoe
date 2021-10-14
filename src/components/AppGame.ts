export class AppGame {
    name: string;
    constructor() {
        this.name = 'Tic Tac Toe';
    }

    static init() {
        (<any>window).TicTacToe = new AppGame()
    }
}

export interface Person {
    firstName: string;
    lastName: string;
}
