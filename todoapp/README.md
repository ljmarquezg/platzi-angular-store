# Todo List App - Built with Angular

This repository contains a **Todo List Application** developed using **Angular**, leveraging Angular's modern reactive capabilities such as **signals** and **computed effects** for efficient state management. The app provides users with an intuitive interface to manage their daily tasks, and it's deployed on **Firebase** for seamless hosting and backend integration.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.10.

## Key Features:

- **Angular Signals & Computed Effects**:
  - **Signals** are used for managing the app's reactive state, such as tracking the list of tasks and their completion status.
  - **Computed Effects** allow for automatic recalculations, like counting remaining tasks or updating the UI when the task list changes, improving performance and reducing unnecessary change detection.

- **Dynamic Template Rendering**:
  - **NgIf**: Conditional rendering for showing or hiding elements based on the current state (e.g., showing the "No tasks" message when the task list is empty).
  - **NgSwitch**: Used to toggle between different views or states within the app, such as different task filters (All, Active, Completed).
  - **NgFor**: To dynamically render the list of tasks based on the state stored in signals.

- **Firebase Integration**:
  - **Firebase Hosting**: The app is deployed and hosted on Firebase, ensuring fast and secure delivery of the web app.
  - **Firebase Firestore (optional)**: Easily extendable to store and sync tasks data across devices using Firebase Firestore for real-time database capabilities.

## Install dependencies
Run `npm install` to install the project dependencies.

- **Migration to New Syntax in Angular 17**

  - **Introduction**
  - This document serves as a comprehensive guide for migrating your Angular applications to the new syntax introduced in Angular 17. This new syntax brings several enhancements that improve performance, streamline development, and provide better readability. Following this guide will ensure a smooth transition and help you leverage the latest features in your Angular applications.

  - **Migration Steps**
    - Follow these steps to migrate your existing Angular application to the new syntax:
    - 1. **Update Angular CLI**
      - ```npm install -g @angular/cli@latest```
    - 2. **Upgrade Angular Packages**
    - Upgrade your Angular packages to version 17. You can do this using the following command:
    - Ensure that you are using the latest version of the Angular CLI. Run the following command to update:
      - ```ng update @angular/core @angular/cli```
    - 3. **Upgrade Angular Packages**
    - Upgrade your Angular syntax to version 17. You can do this using the following command:
      - ```ng g @angular/core:control-flow```
      
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

## Deploy to Firebase (after configuring Firebase CLI and your project):
Follow these steps to deploy your app to Firebase Hosting:
- #### 1. Install Firebase CLI
  - You need Firebase CLI (a command-line tool) to host your site with Firebase Hosting. Run the following npm command to install or update to the latest version of the CLI:
  `npm install -g firebase-tools`
- #### 2. Initialize the Project
  - Open a terminal window and navigate to a root directory for your web app (if you don’t have one, you should create it).
- #### 3. Login to Google
  - Run `firebase login` command to log in
- #### 4 Start the Project
  - Run `firebase init` command in the root directory of your app:
- ### 5 Deploy to Firebase Hosting
  - When you have everything ready, deploy your web app. Place the static files (e.g., HTML, CSS, and JS) in the app’s deployment directory (the default directory is dist/todoapp/browser). Then, run this command from the root directory of your app:
  `firebase deploy`


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
