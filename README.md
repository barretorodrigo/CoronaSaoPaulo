# Coronavirus - SP

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) 

Coronavirus at state of São Paulo: Application to show data and chart of coronavirus cases at state of São Paulo, sorting cases by cities.

## Data

You can the production server on [coronasaopaulo](https://coronasaopaulo.herokuapp.com/). This data are the same that state of São Paulo government made available on [Seade](https://www.seade.gov.br/coronavirus/)


## Running local server

Use the [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) to install Coronvavirus-SP.

```bash
cd ./backend
npm install
npm start
```
Now datas are visibles on **http://localhost:3000/all** and **http://localhost:3000/allbycities**.


## Running mobile app

This app is development on React-Native. You need to install [react-native-cli](https://github.com/react-native-community/cli)

```bash
cd ./mobile/CoronaVirusSP/coronaVirus/
npm install
react-native start
```

On another CLI terminal run:
```bash
cd ./mobile/CoronaVirusSP/coronaVirus/
react-native run-android
```

## Screenshots

![screenshot1](https://raw.githubusercontent.com/barretorodrigo/CoronaSaoPaulo/master/screenshots/Screenshot1.png = 100)
![screenshot2](https://raw.githubusercontent.com/barretorodrigo/CoronaSaoPaulo/master/screenshots/Screenshot2.png = 100)
![screenshot3](https://raw.githubusercontent.com/barretorodrigo/CoronaSaoPaulo/master/screenshots/Screenshot3.png = 100)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)