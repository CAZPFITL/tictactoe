import Helpers, { HelpersProps } from './Helpers.js';
import State, { StateProps } from './State.js';
export interface AppGameProps {
    readonly name: string;
    readonly helpers: HelpersProps;
    isFull: boolean;
    state: StateProps;
    match: MatchProps;
    fullScreen: ()=>void;
    normalScreen: ()=>void;
}

type MatchProps = {
    // cells?: any[]
    cells?: Array<any>
}

export class AppGame {
    readonly name: string;
    readonly helpers: HelpersProps;
    isFull: boolean;
    state: StateProps;
    match: MatchProps;
    game: any;
    fullScreen: ()=>void;
    normalScreen: ()=>void;
    constructor() {
        this.name = 'Tic Tac Toe';
        this.isFull = false;
        this.match = {
            cells: [['Game Cells'], [false, false, false], [false, false, false], [false, false, false]]
        };
        this.state = new State(this) as StateProps;
        this.helpers = Helpers as HelpersProps;
        (<any>window).TicTacToe = this as AppGameProps;
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
    }
}