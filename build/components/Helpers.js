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
     * This function helps to get the relative coordenate for your game canvas
     * @param {number to be converted} num
     * @returns number converted
     */
    Helpers.getStepSize = function (num) {
        return window.TicTacToe.counters.stepSize * num;
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
    return Helpers;
}(Canvas));
export default Helpers;
//# sourceMappingURL=Helpers.js.map