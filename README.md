# AddressBookAppSpa

## Running the app
The app requires the [Address Book App Api](https://github.com/rogue-elephant/AddressBookApp.Api) web api to be running on port 5000.
You can clone the repo and run the Api project or you can run the api direct from docker via:

`docker run --rm -it  -p 5000:5000/tcp rogueelephant/address-book-app-api:latest`

Once this is up you should be able to `npm install` and `ng serve` this app and it should connect.

![Demo](docker-api-run-local.gif)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
