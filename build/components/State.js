var State = /** @class */ (function () {
    function State(app) {
        this.observers = [];
        this.parentStateOwner = app;
        this.state = '';
        this.showNotifications = false;
    }
    /**
     * Add observer to state
     * @param {Observer to be added} Observer
     */
    State.prototype.add = function (Observer) {
        this.observers.push(Observer);
        Observer.observable = this.parentStateOwner;
    };
    /**
     * Remove Observer from state
     * @param {Observer to be removed} Observer
     */
    State.prototype.remove = function (Observer) {
        this.observers = this.observers.filter(function (fx) { return fx != Observer; });
    };
    /**
     * Notify all the observers
     */
    State.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (item) {
            item.notification(_this.showNotifications);
        });
    };
    /**
    * Changes the app state from string paramters
    * @param {State to be applied} state
    */
    State.prototype.changeState = function (state) {
        this.state = state;
        this.notify();
    };
    return State;
}());
export default State;
//# sourceMappingURL=State.js.map