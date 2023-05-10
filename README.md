# UPS Clone React Native App

This is a clone of the UPS (United Parcel Service) app built using React Native. It provides a user interface similar to the original UPS app, allowing users to track packages, view delivery details, and manage their shipments.

## Prerequisites

Before running this app, ensure that you have the following dependencies installed:

- Node.js
- NPM (Node Package Manager)
- Expo CLI (Command Line Interface)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/ups-clone.git
   ```

2. Change into the project directory:

   ```bash
   cd ups-clone
   ```

3. Install the required dependencies using NPM:

   ```bash
   npm install
   ```

## Running the App

To start the app, use the following commands:

1. Change into the `stepzen` directory:

   ```bash
   cd stepzen
   ```

2. Start the StepZen GraphQL server:

   ```bash
   stepzen start
   ```

   This will start the StepZen server and provide a GraphQL API for the app to consume.

3. In a separate terminal, go back to the project root directory:

   ```bash
   cd ..
   ```

4. Start the Expo development server:

   ```bash
   expo start
   ```

   This will open the Expo DevTools in your default browser.

5. In the Expo DevTools, you have multiple options to run the app:

   - Run on Android emulator: Select "Run on Android device/emulator" or press "a" in the terminal to launch the app on an Android emulator.
   - Run on iOS simulator: Select "Run on iOS simulator" or press "i" in the terminal to launch the app on the iOS simulator.
   - Scan the QR code with the Expo Go app: Install the Expo Go app on your Android or iOS device, scan the QR code shown in the Expo DevTools, and wait for the app to load.

   Ensure that your mobile device/emulator is connected to the same network as your development machine.

## Customizing Tailwind CSS

This project utilizes Tailwind CSS for styling. If you need to make changes to the Tailwind configuration, you can follow these steps:

1. Open the `tailwind.config.js` file located in the project root directory.

2. Modify the configuration according to your needs. You can change colors, fonts, spacing, breakpoints, and more.

3. Save the file and run the following command to generate the updated CSS:

   ```bash
   npm run tailwind:dev
   ```

   This command will process the Tailwind CSS classes and generate the updated CSS file used in the app.


## Screenshoots:

#### Customers Screen
![Screenshot_20230510-142024](https://github.com/itsmejay80/ups-clone/assets/40144196/fb58c157-178c-4947-a888-f5a320fcedc0)
![Screenshot_20230510-142108](https://github.com/itsmejay80/ups-clone/assets/40144196/55251c75-f91a-4d6e-828a-df1099e2a330)
![Screenshot_20230510-142038](https://github.com/itsmejay80/ups-clone/assets/40144196/95be7a43-7db5-4581-9f82-ff58ed641414)

#### Orders Screen
![Screenshot_20230510-142118](https://github.com/itsmejay80/ups-clone/assets/40144196/647026c9-7630-46a1-9003-18d8632e3efd)
![Screenshot_20230510-142044](https://github.com/itsmejay80/ups-clone/assets/40144196/82994347-fe99-466c-ac0b-6e5d382db0c3)
![Screenshot_20230510-142054](https://github.com/itsmejay80/ups-clone/assets/40144196/1ec7cadf-1e0a-4c23-81b3-47ce781c0ad3)
