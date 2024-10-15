# Store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.10.


# Installation of Tailwind CSS

To incorporate Tailwind CSS into your Angular application, follow these steps:

## 1. Install Tailwind CSS
Go to the official website [Tailwindcss](https://tailwindcss.com/) and follown the installation instructions.
Run the following command to install Tailwind CSS along with PostCSS and Autoprefixer:

```bash
npm install -D tailwindcss postcss autoprefixer
```

## 2. Install Tailwind Prettier
Install Prettier and the Tailwind CSS plugin to ensure consistent styling across your project:
```bash
npm install -D prettier prettier-plugin-tailwindcss
```

## 3. Include Tailwind Styles
Add the Tailwind styles to your ./src/styles.css file by including the following lines:
```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
