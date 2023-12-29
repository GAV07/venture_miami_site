class DateManager {

    #year;
    #month;
    #day;
    #fullDate;
    #UTCDate;

    constructor(d, format='long') {

        let date = new Date(d);

        this.#UTCDate = this.#convertDateToUTC(date);
        this.#year = this.#UTCDate.getFullYear();
        this.#month = this.#UTCDate.toLocaleString('default', {month: format});
        this.#day = this.#UTCDate.getDate();
        this.#fullDate = this.#month + ' ' + this.#day + ', ' + this.#year;
    }

    getMonthName(format='long') {

        if (format === 'short') {
            let date = new Date(this.#UTCDate);
            this.#month = date.toLocaleString('default', {month: format});

            alert('ok')
        }

        return this.#month;
    }

    getDay() {

        return this.#day;
    }

    getWeekDay() {

        return this.#day;
    }

    getFullDate(format = 'long') {

        // if (format === 'short') {
        if (true) {
            let date = new Date(this.#UTCDate);
            this.#month = date.toLocaleString('default', {month: 'short'});
        }
        return this.#month + ' ' + this.#day + ', ' + this.#year;
    }

    #convertDateToUTC(date) {
        return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    }

}

export default DateManager;