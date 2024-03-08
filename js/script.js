// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// num % 3, num % 5,num % 3 && num %5

const wrapper = document.createElement('div'); //create div
wrapper.className = 'd-flex align-content-center flex-wrap'; //add class

let numBox = 100; //max number boxes
let tmpHtml = ''; //string html

for(let i = 1; i <= numBox; i++){

    if (i % 3 === 0 && i % 5 === 0) {
      let content = 'fizzbuzz';
      tmpHtml += ` <div class="box fizzbuzz d-flex justify-content-center align-items-center">${content}</div>`;
    }
    let content = i;
    tmpHtml += ` <div class="box d-flex justify-content-center align-items-center">${content}</div>`;
};

wrapper.innerHTML = tmpHtml; //string html full of boxes in wrapper
const container = document.querySelector('.container'); //take container
container.append(wrapper); //append wrapper in container