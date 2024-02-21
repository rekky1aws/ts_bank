import { BankCard } from "./BankCard";
import { Person } from "./Person";
import { AccountManager } from "./AccountManager";

const testCard = new BankCard();
const testPerson = new Person("John", "Doe", new Date("2002-03-11"), "Lille", "Web Dev", 0);

const banquePostale = new AccountManager();


banquePostale.addAccount(testPerson);
console.log(banquePostale.listAccounts());


console.log(testCard.toString());
console.log(testPerson.toString());