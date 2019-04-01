/* возвращает то, к чему вы хотите разрешить доступ в объекте то */
const car = (function(){
	const maxSpeed = 50;

	const run = function () {
		for (let i = 0; i <= maxSpeed; i++) {
			console.log(`speed is ${i} km/h`);
		}
	};
	return {run};
}());
console.log(car.maxSpeed); /* undefined */
car.run();