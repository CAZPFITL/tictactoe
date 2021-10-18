var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Canvas from './Canvas.js';
var Helpers = /** @class */ (function (_super) {
    __extends(Helpers, _super);
    function Helpers() {
        return _super.call(this) || this;
    }
    /**
     * This functions gives to Snake the fullscreen functionality
     */
    Helpers.fullScreenFunctionality = function () {
        var game = window.TicTacToe;
        // Iniciar pantalla completa
        game.fullScreen = function () {
            game.isFull = !game.isFull;
            var docElm = document.documentElement;
            //W3C   
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            }
        };
        // Salir de pantalla completa
        game.normalScreen = function () {
            game.isFull = !game.isFull;
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        };
    };
    /**
     * returns a random number
     * @param {Max Limit} max
     * @returns
     */
    Helpers.getRandomInt = function (max) {
        return Math.floor(Math.random() * max);
    };
    /**
     * returns the String capitalized
     * @param {String} str
     * @returns
     */
    Helpers.capitalize = function (str) {
        if (typeof str === 'undefined') {
            return false;
        }
        else {
            var fistLetter = str.charAt(0).toUpperCase();
            var slicedWord = str.slice(1);
            return fistLetter + slicedWord;
        }
    };
    /**
     * returns state function related
     * @returns processed state
     */
    Helpers.getStateFunction = function () {
        var game = window.TicTacToe;
        var func = game.state.state.split(' ');
        func[1] = game.helpers.capitalize(func[1]);
        return func.join('');
    };
    //fill winner
    //go to match over 
    // read next state from match over 
    Helpers.processClick = function (e) {
        //VARIABLE DECLARATION
        if (window.TicTacToe.state.state === 'match over') {
            window.TicTacToe.state.changeState('load request');
            return;
        }
        var game = window.TicTacToe;
        var adjust = parseFloat(game.ctx.canvas.style.marginLeft.slice(0, -2)); // adjust the e.clientX
        var unitW = game.canvasBounds[0] / 3;
        var unitH = game.canvasBounds[1] / 3;
        var data = game.match.cells;
        var i = Math.floor(e.clientY / unitH);
        var j = Math.floor((e.clientX - adjust) / unitW);
        var player = game.match.players[game.counters.cycle];
        //FREE CELL DETECTED
        if (data[i][j] && !data[i][j].state) {
            //DATA UPDATE
            player.cellsPlayed.push(data[i][j]);
            data[i][j].state = true;
            data[i][j].player = player;
            //GETS PLAYERS TURN'S INDEX
            game.counters.cycle++;
            //GETS MATRIX CELLS PLAYED
            game.counters.cellsPlayed++;
            //LAST CELL SELECTED
            game.match.selectedCell = data[i][j];
            //LIMITS
            if (game.counters.cycle === game.match.players.length) {
                game.counters.cycle = 0;
            }
            if ((game.match.cells[0][0].player.symbol && game.match.cells[0][0].player.symbol === game.match.cells[0][1].player.symbol && game.match.cells[0][0].player.symbol === game.match.cells[0][2].player.symbol) ||
                (game.match.cells[1][0].player.symbol && game.match.cells[1][0].player.symbol === game.match.cells[1][1].player.symbol && game.match.cells[1][0].player.symbol === game.match.cells[1][2].player.symbol) ||
                (game.match.cells[2][0].player.symbol && game.match.cells[2][0].player.symbol === game.match.cells[2][1].player.symbol && game.match.cells[2][0].player.symbol === game.match.cells[2][2].player.symbol) ||
                (game.match.cells[0][0].player.symbol && game.match.cells[0][0].player.symbol === game.match.cells[1][0].player.symbol && game.match.cells[0][0].player.symbol === game.match.cells[2][0].player.symbol) ||
                (game.match.cells[0][1].player.symbol && game.match.cells[0][1].player.symbol === game.match.cells[1][1].player.symbol && game.match.cells[0][1].player.symbol === game.match.cells[2][1].player.symbol) ||
                (game.match.cells[0][2].player.symbol && game.match.cells[0][2].player.symbol === game.match.cells[1][2].player.symbol && game.match.cells[0][2].player.symbol === game.match.cells[2][2].player.symbol) ||
                (game.match.cells[0][0].player.symbol && game.match.cells[0][0].player.symbol === game.match.cells[1][1].player.symbol && game.match.cells[0][0].player.symbol === game.match.cells[2][2].player.symbol) ||
                (game.match.cells[2][0].player.symbol && game.match.cells[2][0].player.symbol === game.match.cells[1][1].player.symbol && game.match.cells[2][0].player.symbol === game.match.cells[0][2].player.symbol)) {
                game.state.changeState("match over");
            }
            else if (game.counters.cellsPlayed === 9) {
                game.state.changeState("match over");
            }
            else {
                game.state.changeState("player" + (game.counters.cycle + 1) + " turn");
            }
        }
        window.TicTacToe.helpers.drawBoard(data[i][j]);
    };
    Helpers.drawPlayedBoxes = function () {
        var game = window.TicTacToe;
        var players = game.match.players;
        players.forEach(function (player) {
            var cells = player.cellsPlayed;
            cells.forEach(function (cell) {
                var position = [cell.position[0], cell.position[1]];
                var unit = [game.canvasBounds[0] / 3, game.canvasBounds[1] / 3];
                var u2 = (unit[0] / 2);
                var space = 20;
                if (cell.player.symbol === 'X') {
                    game.ctx.beginPath();
                    game.ctx.moveTo(((position[0] - 1) * unit[0]) + space, ((position[1] - 1) * unit[1]) + space);
                    game.ctx.lineTo(((position[0]) * unit[0]) - space, ((position[1]) * unit[1]) - space);
                    game.ctx.stroke();
                    game.ctx.moveTo(((position[0]) * unit[0]) - space, ((position[1] - 1) * unit[1]) + space);
                    game.ctx.lineTo(((position[0] - 1) * unit[0]) + space, ((position[1]) * unit[1]) - space);
                    game.ctx.stroke();
                }
                else {
                    game.ctx.beginPath();
                    game.ctx.arc((((position[0] - 1) * unit[0]) + u2), (((position[1] - 1) * unit[1]) + u2), u2 - space, 0, 2 * Math.PI);
                    game.ctx.stroke();
                }
            });
        });
    };
    return Helpers;
}(Canvas));
export default Helpers;
//# sourceMappingURL=Helpers.js.map