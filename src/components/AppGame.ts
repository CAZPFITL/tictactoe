import Helpers from './Helpers.js';
import State, { StateProps } from './State.js';

type MatchProps = {
    // cells?: any[]
    cells ?: Array<any>
    players ?: Array<any>
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
    counters: object;
    fullScreen: () => void;
    normalScreen: () => void;

    constructor() {
        this.name = 'Tic Tac Toe';
        this.isFull = false;
        this.match = {
            cells: [
                [{ name: "1-1",state: false, player: false }, { name: "1-2",state: false, player: false }, { name: "1-3",state: false, player: false }], 
                [{ name: "2-1",state: false, player: false }, { name: "2-2",state: false, player: false }, { name: "2-3",state: false, player: false }], 
                [{ name: "3-1",state: false, player: false }, { name: "3-2",state: false, player: false }, { name: "3-3",state: false, player: false }]
            ],
            players: [ //TODO: use uuid to multiplayer
                {id: <number>0, cells: <any[]>[]},
                {id: <number>0, cells: <any[]>[]}
            ]
        };
        this.state = new State(this) as StateProps;
        this.helpers = Helpers;
        this.counters = {
            stepSize: 20
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
        console.log('state:', funct)
        if ((<any>window).TicTacToe[funct]) {
            (<any>window).TicTacToe[funct]()
        }
    }

    loadRequest() {
        console.log('hello from load request');
        (<any>window).TicTacToe.helpers.createCanvas();
        (<any>window).TicTacToe.helpers.fullScreenFunctionality();
        (<any>window).TicTacToe.ctx.canvas.addEventListener('mousedown', (<any>window).TicTacToe.helpers.processClick);
        window.addEventListener('resize', (<any>window).TicTacToe.helpers.getCanvas);
    }
}