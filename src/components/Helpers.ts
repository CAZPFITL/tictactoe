import Canvas from './Canvas.js'
export interface HelpersProps {
    fullScreenFunctionality: () => void;
    getRandomInt: (number) => number;
    capitalize: (string) => string;
    getStepSize: (number) => number;
    getStateFunction: () => string;
}
export default class Helpers extends Canvas {
    fullScreenFunctionality: () => void;
    getRandomInt: (number) => number;
    capitalize: (string) => string;
    getStepSize: (number) => number;
    getStateFunction: () => string;

    constructor() {
        super()
    }

    /**
     * This functions gives to Snake the fullscreen functionality
     */
    static fullScreenFunctionality() {
        const game: any = (<any>window).TicTacToe

        // Iniciar pantalla completa
        game.fullScreen = () => {
            game.isFull = !game.isFull
            var docElm = document.documentElement
            //W3C   
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen()
            }
        }

        // Salir de pantalla completa
        game.normalScreen = () => {
            game.isFull = !game.isFull
            if (document.exitFullscreen) {
                document.exitFullscreen()
            }
        }
    }


    /**
     * returns a random number
     * @param {Max Limit} max 
     * @returns 
     */
    static getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    /**
     * returns the String capitalized
     * @param {String} str 
     * @returns 
     */
    static capitalize(str) {
        if (typeof str === 'undefined') {
            return false
        } else {
            let fistLetter = str.charAt(0).toUpperCase()
            let slicedWord = str.slice(1)
            return fistLetter + slicedWord
        }
    }

    /**
     * This function helps to get the relative coordenate for your game canvas
     * @param {number to be converted} num 
     * @returns number converted
     */
    static getStepSize(num) {
        return (<any>window).TicTacToe.counters.stepSize * num
    }

    /**
     * returns state function related
     * @returns processed state
     */
    static getStateFunction() {
        const game: any = (<any>window).TicTacToe

        let func = game.state.state.split(' ')
        func[1] = game.helpers.capitalize(func[1])
        return func.join('')
    }
}