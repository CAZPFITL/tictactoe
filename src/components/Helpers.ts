import Canvas from './Canvas.js'
export default class Helpers extends Canvas {
    constructor() {
        super()
    }

    /**
     * This functions gives to Snake the fullscreen functionality
     */
    public static fullScreenFunctionality(): void {
        const game: any = (<any>window).TicTacToe;

        // Iniciar pantalla completa
        game.fullScreen = () => {
            game.isFull = !game.isFull;
            var docElm = document.documentElement;
            //W3C   
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
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
            let fistLetter = <string>str.charAt(0).toUpperCase()
            let slicedWord = <string>str.slice(1)
            return <string>fistLetter + slicedWord
        }
    }

    /**
     * returns state function related
     * @returns processed state
     */
    public static getStateFunction(): string {
        const game: any = (<any>window).TicTacToe;

        let func = <any[]>game.state.state.split(' ');
        func[1] = <any[]>game.helpers.capitalize(func[1]);
        return <string>func.join('');
    }

    //fill winner
    //go to match over 
    // read next state from match over 
    public static processClick(e: any): void {
        //VARIABLE DECLARATION
        if ((<any>window).TicTacToe.state.state === 'match over') {
            (<any>window).TicTacToe.state.changeState('load request');
            return;
        }
        const game: any = (<any>window).TicTacToe;
        const adjust = <number>parseFloat(game.ctx.canvas.style.marginLeft.slice(0, -2)); // adjust the e.clientX
        const unitW = <number>game.canvasBounds[0] / 3;
        const unitH = <number>game.canvasBounds[1] / 3;
        const data = <any[]>game.match.cells;
        const i = <number>Math.floor(e.clientY / unitH);
        const j = <number>Math.floor((e.clientX - adjust) / unitW);
        const player = <any>game.match.players[game.counters.cycle];

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
            //LAST CELL SELECTED
            game.match.selectedCell = <object>data[i][j];

            //LIMITS
            if (game.counters.cycle === game.match.players.length) {
                game.counters.cycle = <number>0;
            }

            if (
                (game.match.cells[0][0].player.symbol && game.match.cells[0][0].player.symbol === game.match.cells[0][1].player.symbol && game.match.cells[0][0].player.symbol === game.match.cells[0][2].player.symbol) ||
                (game.match.cells[1][0].player.symbol && game.match.cells[1][0].player.symbol === game.match.cells[1][1].player.symbol && game.match.cells[1][0].player.symbol === game.match.cells[1][2].player.symbol) ||
                (game.match.cells[2][0].player.symbol && game.match.cells[2][0].player.symbol === game.match.cells[2][1].player.symbol && game.match.cells[2][0].player.symbol === game.match.cells[2][2].player.symbol) ||
                (game.match.cells[0][0].player.symbol && game.match.cells[0][0].player.symbol === game.match.cells[1][0].player.symbol && game.match.cells[0][0].player.symbol === game.match.cells[2][0].player.symbol) ||
                (game.match.cells[0][1].player.symbol && game.match.cells[0][1].player.symbol === game.match.cells[1][1].player.symbol && game.match.cells[0][1].player.symbol === game.match.cells[2][1].player.symbol) ||
                (game.match.cells[0][2].player.symbol && game.match.cells[0][2].player.symbol === game.match.cells[1][2].player.symbol && game.match.cells[0][2].player.symbol === game.match.cells[2][2].player.symbol) ||
                (game.match.cells[0][0].player.symbol && game.match.cells[0][0].player.symbol === game.match.cells[1][1].player.symbol && game.match.cells[0][0].player.symbol === game.match.cells[2][2].player.symbol) ||
                (game.match.cells[2][0].player.symbol && game.match.cells[2][0].player.symbol === game.match.cells[1][1].player.symbol && game.match.cells[2][0].player.symbol === game.match.cells[0][2].player.symbol)
            ) {
                game.match.winner = player
                game.state.changeState(<string>`match over`);
            } else if (game.counters.cellsPlayed === 9) {
                game.state.changeState(<string>`match over`);
            } else {
                game.state.changeState(<string>`player${game.counters.cycle + 1} turn`);
            }             
        }
        (<any>window).TicTacToe.helpers.drawBoard(<object>data[i][j]);
    }

    public static drawPlayedBoxes(): void {
        const game: any = (<any>window).TicTacToe;
        const players: any[] = game.match.players;

        players.forEach(player => {
            const cells: any[] = player.cellsPlayed;
            cells.forEach(cell => {
                const position = [cell.position[0], cell.position[1]];
                const unit = [game.canvasBounds[0] / 3, game.canvasBounds[1] / 3];
                const u2 = <number>(unit[0] / 2);
                const space = <number>20;
                if (cell.player.symbol === 'X') 
                {
                    game.ctx.beginPath();
                    game.ctx.moveTo(
                        ((position[0] - 1) * unit[0]) + space, 
                        ((position[1] - 1) * unit[1]) + space
                    );
                    game.ctx.lineTo(
                        ((position[0]) * unit[0]) - space, 
                        ((position[1]) * unit[1]) - space
                    );
                    game.ctx.stroke();
                    
                    game.ctx.moveTo(
                        ((position[0]) * unit[0]) - space, 
                        ((position[1] - 1) * unit[1]) + space
                    );
                    game.ctx.lineTo(
                        ((position[0] - 1) * unit[0]) + space, 
                        ((position[1]) * unit[1]) - space
                    );
                    game.ctx.stroke();
                } else 
                {
                    game.ctx.beginPath();
                    game.ctx.arc(
                        (((position[0] - 1) * unit[0]) + u2), 
                        (((position[1] - 1) * unit[1]) + u2), 
                        u2 - space, 0, 2 * Math.PI
                    );
                    game.ctx.stroke();
                }
            })
        })
    }
}
