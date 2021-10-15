var game: any = (<any>window).TicTacToe;

export default class Canvas {
    /**
     * returns a brand new canvas for the game
     * @returns canvas created
     */
     static getCanvas() {
        let canvas: any = document.querySelector('canvas') ?? document.createElement('canvas')
        let step: number = game.counters.stepSize
        
        let lastDigitW: number = parseInt(window.innerWidth.toString().slice(-1))
        let lasDigitH: number =  parseInt(window.innerHeight.toString().slice(-1))

        let Width: number = (window.innerWidth - step) - lastDigitW
        let Height: number = (window.innerHeight - step) -lasDigitH
        let border: number = (window.innerHeight - Height) / 2

        canvas.id = canvas.id ?? 'TicTacToeApp'
        canvas.width = (Width / step) % 1 === 0 ? Width : Width + step / 2
        canvas.height = (Height / step) % 1 === 0 ? Height : Height + step / 2
        canvas.style.borderTop = `${(Height / step) % 1 === 0 ? border : border + 0.5}px solid #333333`

        Width = (Width / step) % 1 === 0 ? (Width / step) : (Width / step) + 0.5
        Height = (Height / step) % 1 === 0 ? (Height / step) : (Height / step) + 0.5

        game.canvasBounds = [Width - 2, Height - 2]

        return canvas
    }
}