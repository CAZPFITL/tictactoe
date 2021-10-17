export default class Canvas {
    /**
     * returns a brand new canvas for the game
     * @returns canvas created
     */
    public static getCanvas(): any {
        const game: any = (<any>window).TicTacToe;
        let canvas: any = document.querySelector('canvas') ?? document.createElement('canvas')
        
        let lastDigitW: number = <number>parseInt(window.innerWidth.toString().slice(-1))
        let lasDigitH: number = <number>parseInt(window.innerHeight.toString().slice(-1))
        
        let Width: number = (window.innerWidth) - lastDigitW
        let Height: number = (window.innerHeight) - lasDigitH
        
        let WidthRef: number = Width > Height ? Height : Width
        let HeightRef: number = Height > Width ? Width : Height
        
        canvas.id = <string>'TicTacToeApp'
        canvas.width = WidthRef
        canvas.height = HeightRef

        game.canvasBounds = <any[]>[WidthRef, HeightRef]

        return canvas
    }

    /**
     * Create canvas in DOM and Snake Global
     */
    public static createCanvas(): void {
        const game: any = (<any>window).TicTacToe;
        let canvas = game.helpers.getCanvas()
        // let screen = game.helpers.getScreen()
        game.ctx = canvas.getContext('2d')
        // document.getElementsByTagName('body')[0].prepend(screen)
        document.getElementsByTagName('body')[0].prepend(canvas)
        game.helpers.requestAnimation()
    }

    /**
     * Request Animation Frame
     * @param {drawing function} draw 
     */
    public static requestAnimation(): void {
        (<any>window).requestAnimationFrame((<any>window).TicTacToe.helpers.draw);
    }

    /**
     * Request Animation Frame
     * @param {drawing function} draw 
     */
    public static drawBoard(): void {
        const game: any = (<any>window).TicTacToe;
        const unitW = game.canvasBounds[0] / 3
        const unitH = (game.canvasBounds[1]) / 3
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
    }

    /**
     * draw game
     */
    public static draw() {
        (<any>window).TicTacToe.helpers.drawBoard();
        // (<any>window).TicTacToe.helpers.clearCanvas()
        // (<any>window).TicTacToe.helpers.drawTarget()
        // (<any>window).TicTacToe.helpers.drawSnake()
        (<any>window).TicTacToe.helpers.requestAnimation();
    }
}