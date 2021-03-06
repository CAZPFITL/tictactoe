import Helpers from './Helpers.js';
import State, { StateProps } from './State.js';

type MatchProps = {
    // cells?: any[]
    cells?: Array<any>;
    players?: Array<any>;
    selectedCell?: any;
    winner?: Array<any>;
}
type CountersProps = {
    stepSize?: number;
    cycle?: number;
    cellsPlayed?: number;
}
export class AppGame {
    readonly name: string;
    readonly helpers: object;
    readonly canvasBounds: any[];
    isFull: boolean;
    state: StateProps;
    match: MatchProps;
    game: object;
    ctx: object;
    counters: CountersProps;
    fullScreen: () => void;
    normalScreen: () => void;

    constructor() {
        this.name = 'Tic Tac Toe';
        this.isFull = false;
        this.state = new State(this) as StateProps;
        this.helpers = Helpers;
        this.counters = {
            stepSize: 20,
            cycle: 0,
            cellsPlayed: 0
        };
        (<any>window).TicTacToe = this;
    }

    static init() {
        new AppGame();
        (<any>window).TicTacToe.state.changeState('load request');
    }

    /**
     * Here you can process any state change from the app, reading "this.state.name" // create canvas -> createCanvas()
     */
    notification() {
        // game.helpers.drawScreen(game.state.state)
        let funct: string = (<any>window).TicTacToe.helpers.getStateFunction();
        console.log('new state:', funct);
        if ((<any>window).TicTacToe[funct]) {
            (<any>window).TicTacToe[funct]();
        }
    }

    loadRequest() {
        console.log('hello from load request');
        (<any>window).TicTacToe.helpers.createCanvas();
        (<any>window).TicTacToe.helpers.fullScreenFunctionality();
        (<any>window).TicTacToe.ctx.canvas.addEventListener('mouseup', (<any>window).TicTacToe.helpers.processClick);
        window.addEventListener('resize', (<any>window).TicTacToe.helpers.getCanvas);
        (<any>window).TicTacToe.state.changeState('new match');
    }
    
    newMatch() {
        console.log('new match');
        const game: any = (<any>window).TicTacToe;
        game.counters = {
            stepSize: 20,
            cycle: 0,
            cellsPlayed: 0
        };
        game.match = {
            cells: [
                [
                    { position: <any[]>[1, 1], state: <boolean>false, player: <boolean>false },
                    { position: <any[]>[2, 1], state: <boolean>false, player: <boolean>false },
                    { position: <any[]>[3, 1], state: <boolean>false, player: <boolean>false }
                ],
                [
                    { position: <any[]>[1, 2], state: <boolean>false, player: <boolean>false },
                    { position: <any[]>[2, 2], state: <boolean>false, player: <boolean>false },
                    { position: <any[]>[3, 2], state: <boolean>false, player: <boolean>false }
                ],
                [
                    { position: <any[]>[1, 3], state: <boolean>false, player: <boolean>false },
                    { position: <any[]>[2, 3], state: <boolean>false, player: <boolean>false },
                    { position: <any[]>[3, 3], state: <boolean>false, player: <boolean>false }
                ]
            ],
            players: [ //TODO: use uuid 4 multiplayer
                { id: <number>0, cellsPlayed: <any[]>[], symbol: <string>'X' },
                { id: <number>1, cellsPlayed: <any[]>[], symbol: <string>'O' }
            ],
            selectedCell: <any>null,
            winner: <any>false,
        };
        game.state.changeState(<string>`player's ${game.counters.cycle + 1} turn`);

    }
    
    matchOver() {
        const game: any = (<any>window).TicTacToe;
        if(game.match.winner) {
            alert(`${game.match.winner.symbol}'s wins!`)
        } else {
            alert('tie')
        }
        console.log('match over');
    }
}