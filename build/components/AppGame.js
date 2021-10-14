import Helpers from './Helpers.js';
var AppGame = /** @class */ (function () {
    function AppGame() {
        this.name = 'Tic Tac Toe';
        this.helpers = Helpers;
        this.match = {
            cells: [['Game Cells'], [false, false, false], [false, false, false], [false, false, false]]
        };
    }
    AppGame.init = function () {
        window.TicTacToe = new AppGame();
    };
    return AppGame;
}());
export { AppGame };
//# sourceMappingURL=AppGame.js.map