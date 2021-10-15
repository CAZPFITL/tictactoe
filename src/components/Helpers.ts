import Canvas from './Canvas.js'

export interface HelpersProps {
    test: () => void
}
export default class Helpers extends Canvas {
    test: () => void
    constructor() {
        super()
    }
    /**
     * Static Function Test
     * @param {AppClass} App 
     */
    static test() {
        console.log('Hey, listen!');
    }
}