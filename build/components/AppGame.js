import Helpers from './Helpers.js';
import State from './State.js';
var AppGame = /** @class */ (function () {
    function AppGame() {
        this.name = 'Tic Tac Toe';
        this.match = {
            cells: [['Game Cells'], [false, false, false], [false, false, false], [false, false, false]]
        };
        this.state = new State(this);
        this.helpers = Helpers;
        window.TicTacToe = this;
    }
    AppGame.init = function () {
        new AppGame();
        window.TicTacToe.state.changeState('load request');
    };
    return AppGame;
}());
export { AppGame };
//# sourceMappingURL=AppGame.js.map