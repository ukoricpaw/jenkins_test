abstract class Car {
    speed!: number;

    constructor(instance: Car) {
        this.speed = instance.speed;
    }

    public abstract clone(): Car;
}

class BMW extends Car {
    model!: string;
    constructor(instance: BMW) {
        super(instance);
        this.model = instance.model;
    }
    public clone(): BMW {
        return new BMW(this);
    }
}

const myBmw = new BMW({ speed: 20, model: 'DDD' } as BMW);
const clonedBMW = myBmw.clone();
console.log(myBmw.speed);
console.log(clonedBMW.speed);
