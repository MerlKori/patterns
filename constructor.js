
const User = function (name, age) {
	this.name = name;
	this.age = age;
}
User.prototype.tell = function () {
	console.log(`Hello, my name is ${this.name} and i am ${this.age} years old`);
}

const Roma = new User('Roma', 29);
const Masha = new User('Alex', 26);
Roma.tell();
Masha.tell();

/* Classes */
class Car {
	constructor (mark, maxSpeed) {
		this.mark = mark;
		this.maxSpeed = maxSpeed;
	}
	description () {
		console.log(`It is ${this.mark}, max speed is ${this.maxSpeed} km/h`);
	}
}
const BMW = new Car('BMW', 220);
const Tesla = new Car('Tesla', 230);

BMW.description();
Tesla.description();
