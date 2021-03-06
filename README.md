# progress-bar-for-react

[![npm version](https://img.shields.io/npm/v/progress_bar_for_react?style=flat-square)](https://www.npmjs.com/package/progress_bar_for_react)

This is a simple fully customizable react progress bar component

![Image description](./images/progress_bar.png)

### Author

Myron Apostolakis

### Installation

- `npm install --save progress_bar_for_react`

### Import

`import ProgressBar from "progress_bar_for_react";`

### Usage

`<ProgressBar percentage={50} />`

The option `percentage` is mandatory in order for the ProgressBar to display. When the percentage is equal to 100% the ProgressBar will hide itself.

### List of supported Options

| Option                         | Description                                                                                                    |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| tooltip='Demo text'            | If this option is set then the 'Demo text' appears as a tooltip on mouse hovering                              |
| fillerExtraStyles={{...}}      | Filler extra styles will override the default styling. Usage: backgroundColor: blue or hex code                |
| progressBarExtraStyles={{...}} | Progress Bar extra styles will override the default styling. Usage: position,height,width,borderRadius, border |

Please see the **src/Examples** folder for more descriptive usage.

### API calls

`onPercentageChange`

It will be triggered when a new percentage is received. Please see examples

### Demo

You can see a demo in the following [link](https://myapos.github.io/progress-bar-for-react/)

### Fork instructions

You can fork this repository for your own modifications following the bellow steps

Please follow the instructions from `https://help.github.com/en/github/getting-started-with-github/fork-a-repo`

### Development

Use command `npm start` and visit `http://localhost:2222`. Every example in the Examples folder will load.

### Build

Use command `npm run dist:demo`

### Storybook

Use command `npm run storybook`

### Codesandbox

- [Simple](https://codesandbox.io/s/green-shadow-3370g?file=/src/Simple.js)
- [Extra Styles](https://codesandbox.io/s/compassionate-sara-friwc?file=/src/App.js)
- [Complex](https://codesandbox.io/s/compassionate-firefly-ofstl?file=/src/App.js)
- [ProgressBarStyles](https://codesandbox.io/s/practical-sanne-zidqd?file=/src/App.js)
- [ToolTip](https://codesandbox.io/s/winter-silence-30mox?file=/src/App.js)
- [ClockedProgressBar](https://codesandbox.io/s/intelligent-taussig-19iz0?file=/src/App.js)

### Testing and Code coverage

This project is tested with Cypress with two ways. The first approach is the combination of cypress and storybook. The storybook is the application that is loaded and used to navigate between stories. There is an
issue with this approach related to coverage. Since the storybook is loaded inside iframes the code cannot be instrumented properly in order to produce the code coverage report through the `window.__coverage__` variable.
It is basic usage is as a quick testing local tool.

The second approach uses the demo app which loads every example in this project and makes assertions about
each test case.

#### Coverage report

[Report](https://138-262743557-gh.circle-artifacts.com/0/coverage/lcov-report/index.html)

### License

This repo is licensed under GNU General Public License v3.0
