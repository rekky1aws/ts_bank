export class Person {
	// TODO : private + getters & setters
	constructor(
		public firstname:string,
		public lastname:string,
		public birthday: Date,
		public city: string,
		public job: string,
		public wage: number ) {}

	get age () : number {
		// Calculer l'age en fonction de la date de naissance
		const today = new Date();
		let age = new Date(today.valueOf() - this.birthday.valueOf());
		return age.getFullYear();
	}

	birthdayToString() : string {
		return `${this.birthday.getDate()}/${this.birthday.getMonth() + 1}/${this.birthday.getFullYear()}`;
	}

	toString () : string {
		return `${this.firstname} ${this.lastname}\nNé(e) le : ${this.birthdayToString()} (${this.age} ans)\n${this.city}\n${this.job}\n${this.wage}€/month`;
	}

	toStringShort () : string {
		return `${this.firstname} ${this.lastname}`;
	}
}