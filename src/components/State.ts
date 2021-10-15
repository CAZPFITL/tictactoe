export interface StateProps {
    observers?: any[];
    parentStateOwner?: object;
    state?: string;
    showNotifications?: boolean;
    add(Observer: object);
    remove(Observer: object);
    notify(): () => void;
    changeState(state: string);
}

export default class State {
    observers?: any[];
    parentStateOwner?: object;
    state?: string;
    showNotifications?: boolean;

    constructor(app) {
        this.observers = []
        this.parentStateOwner = app
        this.state = ''
        this.showNotifications = false
        this.add(app)
    }
    /**
     * Add observer to state
     * @param {Observer to be added} Observer 
     */
    add(Observer) {
        this.observers.push(Observer)
        Observer.observable = this.parentStateOwner
    }

    /**
     * Remove Observer from state
     * @param {Observer to be removed} Observer 
     */
    remove(Observer) {
        this.observers = this.observers.filter(fx => fx != Observer)
    }

    /**
     * Notify all the observers
     */
    notify() {
        this.observers.forEach(item => {
            item.notification(this.showNotifications)
        })
    }

    /**
    * Changes the app state from string paramters
    * @param {State to be applied} state 
    */
    changeState(state) {
        this.state = state
        this.notify()
    }
}