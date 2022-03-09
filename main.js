let appCar = () => {
    var cars = ['hi'];
    return {
        add(car) {
            cars.push(car);
            console.log(cars)
        },
        delete(index){
            cars.splice(index, 1);
        },
        show(car){
            console.log(cars)
        }
    }
}

const abc = appCar()

abc.add('hilo')
abc.show()

appCar().add('hilo')
appCar().show()
