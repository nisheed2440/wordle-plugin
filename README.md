# Wordle Solver

Simple wordle solver extension for Google Chrome and Edge Browsers.

If you are on the Wordle app you would see the following when clicking the plugin.

![Wordle Screenshot](/src/assets/Is-Wordle.png)

If you are on some other website you would see the following when clicking on the plugin.
![Not Wordle Screenshot](/src/assets/Not-Wordle.png)

**Note:** The actual plugin is still under and should be available soon in the chrome web store. In the mean time you can try it out locally on you machine.

## Local Setup & Build

1. Clone this repo locally
2. Run `yarn install` in the cloned directory
3. Run `yarn build`. This should create a `dist` folder.

## Installing Locally 
1. Open the Extension Management page by navigating to `chrome://extensions` or `edge://extensions`. 
    - Alternatively, open this page by clicking on the `Extensions` menu button and selecting `Manage Extensions` at the bottom of the menu.
    - Alternatively, open this page by clicking on the `Chrome menu`, hovering over `More Tools` then selecting `Extensions`.

2. Enable Developer Mode by clicking the toggle switch next to Developer mode.

3. Click the Load unpacked button and select the `dist` directory.

![Manage Extensions](/src/assets/entension.png)

Ta-da! The extension has been successfully installed.

### References: 

- [Extensions - Getting started](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
- [Wordle](https://www.nytimes.com/games/wordle/index.html)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)