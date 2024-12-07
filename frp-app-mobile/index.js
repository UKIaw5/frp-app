require('web-streams-polyfill/ponyfill'); // Add the polyfill

import { registerRootComponent } from 'expo';
import App from './App';  // Import the main App component

// Register the main component as the entry point for the app
registerRootComponent(App);

