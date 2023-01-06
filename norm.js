let time = {
    hours: 23,
    minutes: 40,
    seconds: 0,
    show() {
        alert(`${this.hours}:${this.minutes}:${this.seconds}`)
    },
    changeSeconds(addedSeconds) {
        let totalAmountOfSeconds = this.hours * 60 * 60 + this.minutes * 60 + this.seconds + addedSeconds
        this.hours = Math.floor(totalAmountOfSeconds / (60 * 60))
        this.minutes = Math.floor((totalAmountOfSeconds - this.hours * (60 * 60)) / 60)
        this.seconds = (totalAmountOfSeconds - this.hours * (60 * 60) - this.minutes * 60) % 60
    },
    changeMinutes(addedMinutes) {
        let totalAmountOfMinutes = this.hours * 60 + this.minutes + addedMinutes
        this.hours = Math.floor(totalAmountOfMinutes / 60)
        this.minutes = Math.floor(totalAmountOfMinutes - this.hours * 60)
    },
    changeHours(addedHours) {
        this.hours = (this.hours + addedHours) % 24
    }

}
time.changeSeconds(126)
time.changeMinutes(25)
time.changeHours(5)
time.show()