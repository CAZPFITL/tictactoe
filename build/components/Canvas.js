var Canvas = /** @class */ (function () {
    function Canvas() {
    }
    /**
     * returns a brand new canvas for the game
     * @returns canvas created
     */
    Canvas.getCanvas = function () {
        var _a;
        var game = window.TicTacToe;
        var canvas = (_a = document.querySelector('canvas')) !== null && _a !== void 0 ? _a : document.createElement('canvas');
        var lastDigitW = parseInt(window.innerWidth.toString().slice(-1));
        var lasDigitH = parseInt(window.innerHeight.toString().slice(-1));
        var Width = (window.innerWidth) - lastDigitW;
        var Height = (window.innerHeight) - lasDigitH;
        var WidthRef = Width > Height ? Height : Width;
        var HeightRef = Height > Width ? Width : Height;
        canvas.id = 'TicTacToeApp';
        canvas.width = WidthRef;
        canvas.height = HeightRef;
        game.canvasBounds = [WidthRef, HeightRef];
        return canvas;
    };
    /**
     * Create canvas in DOM and Snake Global
     */
    Canvas.createCanvas = function () {
        var game = window.TicTacToe;
        var canvas = game.helpers.getCanvas();
        // let screen = game.helpers.getScreen()
        game.ctx = canvas.getContext('2d');
        // document.getElementsByTagName('body')[0].prepend(screen)
        document.getElementsByTagName('body')[0].prepend(canvas);
        game.helpers.requestAnimation();
    };
    /**
     * Request Animation Frame
     * @param {drawing function} draw
     */
    Canvas.requestAnimation = function () {
        window.requestAnimationFrame(window.TicTacToe.helpers.draw);
    };
    /**
     * Request Animation Frame
     * @param {drawing function} draw
     */
    Canvas.drawBoard = function () {
        var game = window.TicTacToe;
        var unitW = game.canvasBounds[0] / 3;
        var unitH = (game.canvasBounds[1]) / 3;
        //Horizontal lines
        game.ctx.beginPath();
        game.ctx.moveTo((unitW * 3), unitH);
        game.ctx.lineTo(0, unitH);
        game.ctx.stroke();
        game.ctx.beginPath();
        game.ctx.moveTo((unitW * 3), (unitH * 2));
        game.ctx.lineTo(0, (unitH * 2));
        game.ctx.stroke();
        //Vertical lines
        game.ctx.moveTo(unitW, (unitH * 3));
        game.ctx.lineTo(unitW, 0);
        game.ctx.stroke();
        game.ctx.beginPath();
        game.ctx.moveTo((unitW * 2), (unitH * 3));
        game.ctx.lineTo((unitW * 2), 0);
        game.ctx.stroke();
    };
    /**
     * draw game
     */
    Canvas.draw = function () {
        window.TicTacToe.helpers.drawBoard();
        // (<any>window).TicTacToe.helpers.clearCanvas()
        // (<any>window).TicTacToe.helpers.drawTarget()
        // (<any>window).TicTacToe.helpers.drawSnake()
        window.TicTacToe.helpers.requestAnimation();
    };
    return Canvas;
}());
export default Canvas;
//# sourceMappingURL=Canvas.js.map