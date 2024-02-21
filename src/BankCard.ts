export class BankCard {
	private cardId: string;
	private createdAt: Date;
	private expiresAt: Date;
	private cryptogram : number;

	constructor() {
		let result = "";
		for (let i=0; i<4; i++) {
			result += `${Math.floor(Math.random() * 9999)}`;
			if (i<3) {
				result += " ";
			}
		}
		this.cardId = result;

		this.cryptogram  = Math.floor(Math.random() * 999);

		this.createdAt = new Date();

		this.expiresAt = new Date()
		this.expiresAt.setFullYear(this.createdAt.getFullYear()+5);

	}

	getCryptogram () : number {
		return this.cryptogram;
	}

	getCardId () : string {
		return this.cardId;
	}

	getCreationDate () : string {
		let result = "";

		// Jour
		if (this.createdAt.getDate() < 10) {
			result += "0";
 		}
 		result += `${this.createdAt.getDate()}/`;

 		// Mois
		if (this.createdAt.getMonth() < 9) {
			result += "0";
 		}
 		result += `${this.createdAt.getMonth() + 1}/`;

 		// Année
 		result += `${this.createdAt.getFullYear()}`;
		return result;
	}

	getExpirationDate () : string {
		let result = "";

		// Jour
		if (this.expiresAt.getDate() < 10) {
			result += "0";
 		}
 		result += `${this.expiresAt.getDate()}/`;

 		// Mois
		if (this.expiresAt.getMonth() < 9) {
			result += "0";
 		}
 		result += `${this.expiresAt.getMonth() + 1}/`;

 		// Année
 		result += `${this.expiresAt.getFullYear()}`;
		return result;
	}

	toString() : string {
		return `Card ID : ${this.getCardId()}\nCryptogram : ${this.getCryptogram()}\nCreation : ${this.getCreationDate()}\nExpiration : ${this.getExpirationDate()}`;
	}

}