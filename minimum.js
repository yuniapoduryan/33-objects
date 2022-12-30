let car = {
    brand: 'Toyota',
    model: 'Land cruiser prado',
    year: 2008,
    'average speed': 90,
    'fuel tank': 80,
    'fuel consumption per 100 km': 12,
    drivers: ['mama'],
    showInfo() {
        alert(`${car.brand} ${car.model} ${car.year}\naverage speed: ${car["average speed"]} km/h \nfuel tank: ${car["fuel tank"]} l \nfuel consumption per 100 km: ${this["fuel consumption per 100 km"]} l\ndrivers: ${this.drivers}`)
    },
    addDriver(name) {
        this.drivers.push(name)
    },
    countFuelAndTime(distance) {
        let fuelConsumptionOnTrip = this["fuel consumption per 100 km"] * distance / 100
        let tripTime = distance / this["average speed"]
        alert(`you'll be at your destination in ${tripTime} hours, you need ${fuelConsumptionOnTrip} liters of fuel`)
    }
}