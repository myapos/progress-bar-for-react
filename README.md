# progress-bar-for-react

This is a simple fully customizable react progress bar component

### Author

Myron Apostolakis

### Usage

- First import the ProgressBar as follows

`import ProgressBar from "./ProgressBar";`

After that you can use it. The option `percentage` is mandatory in order for the ProgressBar to display. When the percentage is equal to 100% the ProgressBar will hide itself.

`<ProgressBar percentage={50} />`

### Supported Options

| Options                        | Description                                                                                                    |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| tooltip='Demo text'            | If this option is set then the 'Demo text' appears as a tooltip on mouse hovering                              |
| fillerExtraStyles={{...}}      | Filler extra styles will override the default styling. Usage: backgroundColor: blue or hex code                |
| progressBarExtraStyles={{...}} | Progress Bar extra styles will override the default styling. Usage: position,height,width,borderRadius, border |

Please see the examples folder for more descriptive usage.

### Demo

### License
