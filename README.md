# progress-bar-for-react

This is a simple fully customizable react progress bar component

![Image description](./images/progress_bar.png)

### Author

Myron Apostolakis

### Installation

- `npm install --save progress_bar_for_react`

### Import

- import the ProgressBar as follows

`import ProgressBar from "./ProgressBar";`

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

### Demo

You can see a demo in the following [link](https://myapos.github.io/progress-bar-for-react/)

### Fork instructions

You can fork this repository for your own modifications following the bellow steps

- Fork

Please follow the instructions from `https://help.github.com/en/github/getting-started-with-github/fork-a-repo`

- Run in development mode

Use command `npm start` and visit `http://localhost:2222`. Every example in the Examples folder will load.

- Build

Use command `npm run dist`

- Storybook

Use command `npm run storybook`

### License

This is repo is licensed under GNU General Public License v3.0

### Codesandbox examples

[Simple](https://codesandbox.io/s/green-shadow-3370g?file=/src/Simple.js)

### TODO

- Add tests
- Codesandbox examples
