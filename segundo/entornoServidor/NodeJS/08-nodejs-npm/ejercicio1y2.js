import chalk from 'chalk';
import { faker } from '@faker-js/faker';

console.log(
    chalk.rgb(
        Math.floor(Math.random()*255), 
        Math.floor(Math.random()*255), 
        Math.floor(Math.random()*255)
        ).visible(faker.internet.userName())
);



