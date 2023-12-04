type Hometasks = {
  id: number,
  name?: string,
  subject: string,
}

const HW1 : Hometasks = {
  id: 1,
subject: "Typescript",
}

const HW2 : Hometasks = {
  id: 2,
name: "Homework1",
subject: "Typescript",
}

const HW3 : Hometasks = {
  id: 3,
name: "Homework2",
subject: "Typescript",
}

console.log(HW1, HW2, HW3);


import { concatenation } from './concatenation';

const button = document.querySelector('button');
const input = document.querySelector('input');

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!');
  });
}