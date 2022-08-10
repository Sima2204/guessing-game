class GuessingGame {
    constructor() {    }

    setRange(min, max) {
        this.from = min;
        this.till = max;
    }

    guess() {
        this.middle = Math.round((this.from + this.till) / 2 );
        return this.middle;
    }

    lower() {
        this.till = this.middle;
    }

    greater() {
        this.from = this.middle;
    }
}

module.exports = GuessingGame;
