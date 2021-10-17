import Canvas from './Canvas.js'
export default class Helpers extends Canvas {
    constructor() {
        super()
    }

    /**
     * This functions gives to Snake the fullscreen functionality
     */
    public static fullScreenFunctionality(): void {
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
    public static getRandomInt(max): number {
        return Math.floor(Math.random() * max);
    }

    /**
     * returns the String capitalized
     * @param {String} str 
     * @returns 
     */
    public static capitalize(str): string | boolean {
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
    public static getStepSize(num): number {
        console.log('iasdaishdsad')
        return (<any>window).TicTacToe.counters.stepSize * num
    }

    /**
     * returns state function related
     * @returns processed state
     */
    public static getStateFunction(): string {
        const game: any = (<any>window).TicTacToe;

        let func: any[] = game.state.state.split(' ');
        func[1] = game.helpers.capitalize(func[1]);
        return <string>func.join('');
    }


    public static processClick(e: any): void {
        //VARIABLE DECLARATION
        const game: any = (<any>window).TicTacToe;
        let data = <any[]>game.match.cells;
        let unit = <any>game.canvasBounds[0] / 3;
        let i = <number>Math.floor(e.clientY / unit);
        let j = <number>Math.floor(e.clientX / unit);
        let player = <any>game.match.players[game.counters.cycle];
        
        //FREE CELL DETECTED
        if (data[i][j] && !data[i][j].state) {
            //DATA UPDATE
            player.cellsPlayed.push(<object>data[i][j]);
            data[i][j].state = <boolean>true;
            data[i][j].player = <object>player;
            
            //GETS PLAYERS TURN'S INDEX
            game.counters.cycle++;
            //GETS MATRIX CELLS PLAYED
            game.counters.cellsPlayed++;
            
            //LIMITS
            if (game.counters.cycle === game.match.players.length) {
                game.counters.cycle = <number>0;
            }
            if (game.counters.cellsPlayed === 9) {
                game.state.changeState('match over')
            }
        }
        (<any>window).TicTacToe.helpers.drawBoard();
    }
}
