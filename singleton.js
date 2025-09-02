class Singleton {
	static instance;

	constructor() {
		if (Singleton.instance) {
			return Singleton.instance;
		}

		this.id = Math.random();
		this.name = 'Singleton 1';
		Singleton.instance = this;
	}

	static getInstance() {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}
}

const obj1 = Singleton.getInstance();
const obj2 = new Singleton();

console.log({ obj1, obj2, var: obj1 === obj2 });
