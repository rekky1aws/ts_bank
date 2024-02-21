import { BankCard } from "./BankCard"
import { Person } from "./Person"

export class Account {
	private id: number = 0;
	private card: BankCard | null = null;
	private balance: number;
	private owner: Person;

	constructor(id: number, owner: Person, initialBalance: number = 0) {
		this.setId(id);
		this.balance = initialBalance;
		this.owner = owner;
	}

	setId (id: number) : void {
		if (id < 1000000 || id > 9999999) {
			throw new Error("Given id is the worng size, it must be exactly 7 digits.");
		}
		this.id = id;
	}

	createBankCard () {
		if (!this.card) {
			this.card = new BankCard();
		}
	}

	getId () : number {
		return this.id;
	}

	getBalance () : number {
		return this.balance;
	}

	getOwnerInfos () : string {
		return this.owner.toStringShort();
	}

	withdraw (value: number) : void {
		if (this.balance < value) {
			throw new Error("You can't withdraw more than your balance.");
		}
		this.balance -= value;
	}

	desposit (value: number) : void {
		this.balance += value;
	}


}