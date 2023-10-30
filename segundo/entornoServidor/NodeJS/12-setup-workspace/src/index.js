/* eslint-disable no-console */
import chalk from 'chalk';

function myFunction(used) {
  if (used) {
    console.log(chalk.red(used));
  }
}
export default myFunction;
