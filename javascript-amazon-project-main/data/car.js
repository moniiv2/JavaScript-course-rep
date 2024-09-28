class Car {
  #brand
  #model
  speed
  isTrunkOpen

  constructor(carDetails) {
    this.#brand = carDetails.brand
    this.#model = carDetails.model
    this.speed = carDetails.speed
    this.isTrunkOpen = carDetails.isTrunkOpen

    // this.displayInfo()
  }

  displayInfo() {
    console.log(`${this.#brand} ${this.#model}`)
    console.log(`Speed: ${this.speed} km/h`)
    console.log(`is trunk open? - ${this.isTrunkOpen}`)
  }

  go() {
    if (this.isTrunkOpen === true) {
      return 'close trunk first'
    } else {
      return this.speed += 5
    }
  }

  brake() {
    return this.speed -= 5
  }

  openTrunk() {
    if (this.speed > 0) {
      return "can't open trunk while moving"
    } else {
    return this.isTrunkOpen = true
    }
  }

  closeTrunk() {
    if (this.isTrunkOpen === false) {
      return 'trunk is already closed'
    } else {
      return this.isTrunkOpen = false
    }
  }
}

class RaceCar extends Car {
  acceleration

  constructor(carDetails) {
    super(carDetails)

    this.acceleration = carDetails.acceleration
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model}`)
    console.log(`Acceleration: ${this.acceleration} m/s`)
  }

  go() {
    super.go()
    return this.acceleration *= this.speed
  }

  brake() {
    return this.acceleration -= 20
  }

  openTrunk() {
    return "doesn't have a trunk"
  } 
  
  closeTrunk () {
    return "doesn't have a trunk"
  }
}

const myCar =  new Car(
  {brand: 'toyota', model: 'corolla', speed: 0, isTrunkOpen: false}
)
// console.log(myCar.go())
// console.log(myCar.go())
// console.log(myCar.go())
// console.log(myCar.openTrunk())
// console.log(myCar.go())
// console.log(myCar.closeTrunk())
// console.log(myCar.go())
// console.log(myCar.go())
// console.log(myCar)
console.log(myCar.displayInfo())


const mySecondCar = new Car(
  {brand: 'tesla', model: 'model 3', speed: 0, isTrunkOpen: false}
)
// console.log(mySecondCar.go())
// console.log(mySecondCar.go())
// console.log(mySecondCar.go())
// console.log(mySecondCar.brake())
//  console.log(mySecondCar)
 console.log(mySecondCar.displayInfo())


 const myThirdCar = new RaceCar(
  {brand: 'McLaren', model: 'F1', speed: 0, acceleration: 20}
 )
 myThirdCar.go()
 myThirdCar.brake()
 console.log(myThirdCar.displayInfo())