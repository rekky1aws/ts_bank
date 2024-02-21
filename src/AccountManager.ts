import { Account } from "./Account"
import { Person } from "./Person"

export class AccountManager {
	private AccountCollection: Account[] = [];

	constructor() {}

	private generateNewId () : number {
		/*let rndId: number = 0;
		let stopLoop: boolean = false;
		while (!stopLoop) {
			rndId = Math.floor(Math.random()*9999999);
			this.AccountCollection.forEach( (account) => {
				if (account.getId() != rndId) {
					stopLoop = true;
				}
			});
		}*/
		let rndId: number = Math.floor(Math.random() * 1000000) + 1000000;
		return rndId;
	}

	addAccount(client: Person, initialBalance: number = 0) : void {
		const id = this.generateNewId();
		const newClientAccount = new Account(id, client, initialBalance);
		this.AccountCollection.push(newClientAccount);
	}

	listAccounts() : string [] {
		if (this.AccountCollection.length == 0) {
			throw new Error("Cannot list accounts where there isn't any.");
		}

		let result: string[] = [];
		this.AccountCollection.forEach( (account) => {
			result.push(account.getOwnerInfos());
		});

		return result;
	}
}