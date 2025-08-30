
# usp-fun

## Description

usp-fun is a lightweight Node.js package that allows you to print text in a beautiful, colorful ASCII art style.
It uses the figlet library to generate ASCII art from your input text and applies a gradient color effect using
chalk. Perfect for adding some fun and visual flair to console outputs in scripts, CLIs, or just for
entertainment!

This package provides a single asynchronous function, `printNameBeautifully`, which handles the rendering and
printing of the stylized text.

## Installation

You can install usp-fun via npm:

```bash
npm install usp-fun
```

Note: This package requires Node.js and has dependencies on figlet and chalk, which will be installed
automatically.

## Usage

Import the package and call the `printNameBeautifully` function with your desired text. It's an async function, so
use `await` or handle the promise.

### Basic Example

```javascript
const { printNameBeautifully } = require('usp-fun');

async function main() {
  await printNameBeautifully('Hello World!');
}

main();
```

This will print "Hello World!" in colorful ASCII art using the default 'Standard' font and a rainbow-like color
gradient (red, yellow, green, cyan, blue, magenta).

### With Options

You can customize the colors and font:

```javascript
const { printNameBeautifully } = require('usp-fun');

async function main() {
  await printNameBeautifully('Custom Fun', {
    colors: ['white', 'gray', 'blackBright'],
    font: 'Big'
  });
}

main();
```

### API Reference

`printNameBeautifully(text, options = {})`

Prints the given text in figlet style with a colorful gradient effect.

**Parameters:**

*   `text` (string): The text to print. Required.
*   `options` (Object): Optional configuration.

    *   `colors` (string[]): Array of chalk color names to cycle through for the gradient effect. Defaults to
`['red', 'yellow', 'green', 'cyan', 'blue', 'magenta']`.
    *   `font` (string): Figlet font name. Defaults to `'Standard'`. For a list of available fonts, refer to the
figlet documentation.

**Returns:** `Promise<void> – Resolves when the text is printed, or rejects on error (e.g., invalid font).`

**Throws:** `Error if figlet encounters an issue (e.g., unknown font).`

## Dependencies

*   `figlet`: For generating ASCII art.
*   `chalk`: For applying colors to the console output.

These are peer dependencies and will be installed when you run `npm install usp-fun`.

## Examples

### Default Usage

**Input:**

```javascript
await printNameBeautifully('USP Fun');
```

**Output (in console, with colors):**

```
text
A colorful ASCII art representation of "USP Fun" in the Standard font.
```

### Custom Colors and Font

**Input:**

```javascript
await printNameBeautifully('Grok It', {
  colors: ['blue', 'cyan'],
  font: 'Slant'
});
```

This will cycle between blue and cyan for a cool, watery gradient effect in the 'Slant' font.

## Tags

*   `ascii-art`
*   `console`
*   `figlet`
*   `chalk`
*   `colorful-text`
*   `fun`
*   `cli-decoration`
*   `text-styling`

## License

MIT License. Feel free to use, modify, and distribute!

## Contributing

If you'd like to contribute, fork the repo, make your changes, and submit a pull request. Issues and feature
requests are welcome!