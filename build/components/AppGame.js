import Helpers from './Helpers.js';
import State from './State.js';
var AppGame = /** @class */ (function () {
    function AppGame() {
        this.name = 'Tic Tac Toe';
        this.isFull = false;
        this.match = {
            cells: [['Game Cells'], [false, false, false], [false, false, false], [false, false, false]]
        };
        this.state = new State(this);
        this.helpers = Helpers;
        this.counters = {
            stepSize: 20
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
        window.addEventListener('keydown', window.TicTacToe.helpers.processKeyDown);
        window.addEventListener('resize', window.TicTacToe.helpers.getCanvas);
    };
    return AppGame;
}());
export { AppGame };
//# sourceMappingURL=AppGame.js.map