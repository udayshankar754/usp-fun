import figlet from 'figlet';
import chalk from 'chalk';

const DEFAULT_COLORS = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'];

function colorizeText(text, colors = DEFAULT_COLORS) {
  let coloredOutput = '';
  let colorIndex = 0;

  for (const char of text) {
    if (char === '\n') {
      coloredOutput += char;
    } else {
      const color = colors[colorIndex % colors.length];
      coloredOutput += chalk[color](char);
      colorIndex++;
    }
  }

  return coloredOutput;
}

/**
 * Prints the given name in figlet style with a colorful gradient effect.
 * 
 * @param {string} text - The text to print
 * @param {Object} options - Optional config
 * @param {string[]} [options.colors] - Array of chalk color names to cycle through
 * @param {string} [options.font] - Figlet font name (default: 'Standard')
 * @returns {Promise<void>}
 */

export async function printNameBeautifully(text, options = {}) {
  const { colors = DEFAULT_COLORS, font = 'Standard' } = options;

  return new Promise((resolve, reject) => {
    figlet.text(text, { font }, (err, data) => {
      if (err) {
        reject(new Error('Figlet error: ' + err.message));
        return;
      }

      console.log(colorizeText(data, colors));
      resolve();
    });
  });
}
