import Helpers from './Helpers.js';
import State from './State.js';
var AppGame = /** @class */ (function () {
    function AppGame() {
        this.name = 'Tic Tac Toe';
        this.isFull = false;
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
        console.log('new state:', funct);
        if (window.TicTacToe[funct]) {
            window.TicTacToe[funct]();
        }
    };
    AppGame.prototype.loadRequest = function () {
        console.log('hello from load request');
        window.TicTacToe.helpers.createCanvas();
        window.TicTacToe.helpers.fullScreenFunctionality();
        window.TicTacToe.ctx.canvas.addEventListener('mouseup', window.TicTacToe.helpers.processClick);
        window.addEventListener('resize', window.TicTacToe.helpers.getCanvas);
        window.TicTacToe.state.changeState('new match');
    };
    AppGame.prototype.newMatch = function () {
        console.log('new match');
        var game = window.TicTacToe;
        game.counters = {
            stepSize: 20,
            cycle: 0,
            cellsPlayed: 0
        };
        game.match = {
            cells: [
                [
                    { position: [1, 1], state: false, player: false },
                    { position: [2, 1], state: false, player: false },
                    { position: [3, 1], state: false, player: false }
                ],
                [
                    { position: [1, 2], state: false, player: false },
                    { position: [2, 2], state: false, player: false },
                    { position: [3, 2], state: false, player: false }
                ],
                [
                    { position: [1, 3], state: false, player: false },
                    { position: [2, 3], state: false, player: false },
                    { position: [3, 3], state: false, player: false }
                ]
            ],
            players: [
                { id: 0, cellsPlayed: [], symbol: 'X' },
                { id: 1, cellsPlayed: [], symbol: 'O' }
            ],
            selectedCell: null,
            winner: false,
        };
        game.state.changeState("player's " + (game.counters.cycle + 1) + " turn");
    };
    AppGame.prototype.matchOver = function () {
        var game = window.TicTacToe;
        if (game.match.winner) {
            alert(game.match.winner.symbol + "'s wins!");
        }
        else {
            alert('tie');
        }
        console.log('match over');
    };
    return AppGame;
}());
export { AppGame };
//# sourceMappingURL=AppGame.js.map