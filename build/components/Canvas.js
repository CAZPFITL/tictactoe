var game = window.TicTacToe;
var Canvas = /** @class */ (function () {
    function Canvas() {
    }
    /**
     * returns a brand new canvas for the game
     * @returns canvas created
     */
    Canvas.getCanvas = function () {
        var _a, _b;
        var canvas = (_a = document.querySelector('canvas')) !== null && _a !== void 0 ? _a : document.createElement('canvas');
        var step = game.counters.stepSize;
        var lastDigitW = parseInt(window.innerWidth.toString().slice(-1));
        var lasDigitH = parseInt(window.innerHeight.toString().slice(-1));
        var Width = (window.innerWidth - step) - lastDigitW;
        var Height = (window.innerHeight - step) - lasDigitH;
        var border = (window.innerHeight - Height) / 2;
        canvas.id = (_b = canvas.id) !== null && _b !== void 0 ? _b : 'TicTacToeApp';
        canvas.width = (Width / step) % 1 === 0 ? Width : Width + step / 2;
        canvas.height = (Height / step) % 1 === 0 ? Height : Height + step / 2;
        canvas.style.borderTop = ((Height / step) % 1 === 0 ? border : border + 0.5) + "px solid #333333";
        Width = (Width / step) % 1 === 0 ? (Width / step) : (Width / step) + 0.5;
        Height = (Height / step) % 1 === 0 ? (Height / step) : (Height / step) + 0.5;
        game.canvasBounds = [Width - 2, Height - 2];
        return canvas;
    };
    return Canvas;
}());
export default Canvas;
//# sourceMappingURL=Canvas.js.map