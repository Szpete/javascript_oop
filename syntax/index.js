import { muvelet, muveletLetrehoz } from "./functions.js";

const input1 = document.createElement('input');
document.body.appendChild(input1);
const input2 = document.createElement('input');
document.body.appendChild(input2);
 
 
const button = document.createElement('button');
button.innerText="csinalj";
document.body.appendChild(button);
 
const div = document.createElement('div');
document.body.appendChild(div);
 
button.addEventListener('click', e => {
    const {result} = muvelet(Number(input1.value), Number(input2.value), muveletLetrehoz('+'));
    div.innerText= result
});
 


