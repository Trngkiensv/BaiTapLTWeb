const elts = document.querySelector('.greeting');
const greetings = [
    "Xin chào!",
    "Chào bạn!",
    "Hi!",
    "Xin chào mọi người!",
    "Chào hỡi các bạn!",
    "Hello!",
    "Hey!"
  ];

const randomIndex = Math.floor(Math.random() * greetings.length); 
var rs = greetings[randomIndex];
elts.textContent = rs;