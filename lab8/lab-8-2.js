"use strict";
let module = (()=>{
    function createBicyclePrototye(){
        return {
            speed: 0,
            applyBrake(s) {
                this.speed -= s;
            },
            speedup(s) {
                this.speed += s;
            }
        }
    }

    function createMountainBikeProtoype(prototype){
        return {
            gear: 1,
            setGear(gear) {
                this.gear = gear;
            },
            __proto__: Object.create(prototype)
        };
    }

    function begin(){
        let bicyclePrototype = createBicyclePrototye();
        let mountainBikePrototype = createMountainBikeProtoype(bicyclePrototype);

        let bicycle = Object.create(bicyclePrototype);
        let mountainBike = Object.create(mountainBikePrototype);

        console.log(bicycle)
        console.log(bicycle.speed)
        bicycle.speedup(1)
        console.log(bicycle.speed)
        bicycle.speedup(2)
        console.log(bicycle.speed)
        bicycle.applyBrake(3)
        console.log(bicycle.speed)
        bicycle.applyBrake(4)
        console.log(bicycle.speed)
        console.log(mountainBike)
        console.log(mountainBike.speed)
        mountainBike.speedup(5)
        console.log(mountainBike.gear)
        mountainBike.setGear(6)
        console.log(mountainBike.gear)
        console.log(mountainBike.speed)
        mountainBike.speedup(7)
        console.log(mountainBike.speed)
        mountainBike.applyBrake(8)
        console.log(mountainBike.speed)
        mountainBike.applyBrake(9)
        console.log(mountainBike.speed)
    };
    return {begin}
})();

module.begin()