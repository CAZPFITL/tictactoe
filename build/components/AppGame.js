import Helpers from './Helpers.js';
import State from './State.js';
var AppGame = /** @class */ (function () {
    function AppGame() {
        this.name = 'Tic Tac Toe';
        this.isFull = false;
        this.match = {
            cells: [
                [
                    { position: "1-1", state: false, player: false },
                    { position: "1-2", state: false, player: false },
                    { position: "1-3", state: false, player: false }
                ],
                [
                    { position: "2-1", state: false, player: false },
                    { position: "2-2", state: false, player: false },
                    { position: "2-3", state: false, player: false }
                ],
                [
                    { position: "3-1", state: false, player: false },
                    { position: "3-2", state: false, player: false },
                    { position: "3-3", state: false, player: false }
                ]
            ],
            players: [
                { id: 0, cellsPlayed: [], turn: false },
                { id: 1, cellsPlayed: [], turn: false }
            ],
        };
        this.state = new State(this);
        this.helpers = Helpers;
        this.counters = {
            stepSize: 20,
            cycle: 0,
            cellsPlayed: 0
        };
        window.TicTacToe = this;
    }
    AppGame.init = function () {
        new AppGame();
        window.TicTacToe.state.changeState('load request');
    };
    /**
     * Here you can process any state change from the app, reading "this.state.name" // create canvas -> createCanvas()
     */
    AppGame.prototype.notification = function () {
        // game.helpers.drawScreen(game.state.state)
        var funct = window.TicTacToe.helpers.getStateFunction();
        console.log('state:', funct);
        if (window.TicTacToe[funct]) {
            window.TicTacToe[funct]();
        }
    };
    AppGame.prototype.loadRequest = function () {
        console.log('hello from load request');
        window.TicTacToe.helpers.createCanvas();
        window.TicTacToe.helpers.fullScreenFunctionality();
        window.TicTacToe.ctx.canvas.addEventListener('mousedown', window.TicTacToe.helpers.processClick);
        window.addEventListener('resize', window.TicTacToe.helpers.getCanvas);
    };
    AppGame.prototype.matchOver = function () {
        console.log('match over');
    };
    return AppGame;
}());
export { AppGame };
//# sourceMappingURL=AppGame.js.map