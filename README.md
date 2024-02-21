# TS

## Intitulé
```
Vous allez en POO simuler le fonctionnement d'une banque
une banque a une liste de clients
// un compte est associe au client
la banque ou le client peut faire une demande de carte de bleue
// carte bleue (XXXX XXXX XXXX XXXX - XX/XX - XXX, la date d'expiration c'est 5 ans apres la date de creation)
le compte c'est un nombre genere aleatoirement de 7 chiffres, le client pourra deposer, retirer, consulter le solde de son compte
Lorsque la banque enregistre un nouveau client, son compte est creer automatiquement
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


