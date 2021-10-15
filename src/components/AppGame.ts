import Helpers from './Helpers.js';
import State, { StateProps } from './State.js';

type MatchProps = {
    // cells?: any[]
    cells?: Array<any>
}
export class AppGame {
    readonly name: string;
    readonly helpers: object;
    isFull: boolean;
    state: StateProps;
    match: MatchProps;
    game: object;
    ctx: object;
    fullScreen: ()=>void;
    normalScreen: ()=>void;
    
    constructor() {
        this.name = 'Tic Tac Toe';
        this.isFull = false;
        this.match = {
            cells: [['Game Cells'], [false, false, false], [false, false, false], [false, false, false]]
        };
        this.state = new State(this) as StateProps;
        this.helpers = Helpers;
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
        let funct: string = this.helpers.getStateFunction()
        console.log('state:', funct)
        if ((<any>window).TicTacToe[funct]) {
            (<any>window).TicTacToe[funct]()
        }
    }

    loadRequest() {
        console.log('hello from load request')
        this.helpers.createCanvas()
        this.helpers.fullScreenFunctionality()
        window.addEventListener('keydown', this.helpers.processKeyDown)
        window.addEventListener('resize', this.helpers.getCanvas);
    }
}