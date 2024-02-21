# TS Bank

TypeScript fake bank management system.

## Exercise topic
```
The Bank has Clients.
An account is associated to a client.
The bank OR the client can ask for the creation of a bank card.
The bank card must have these informations : XXXX XXXX XXXX XXXX - XX/XX - XXX, and the expiration date should be 5 years after the creation of the card.
Account id is a random 7 digit characters.
Client can withdraw, deposit and view balance.
When the bank registers a new client, the corresponding account is initialized.
```

## Starting
Install all dependencies :
```bash
npm install
```

Start TS Compiler :
```bash
npm run start:build
# or
tsc -w
# or
npm run tsc -w
```

See code execution
```bash
npm run start:run
```

Install fs :
```bash
npm i @types/nodes
```
 -> Use this every time ther is an issue with a lib / package that doesn't have its types.


