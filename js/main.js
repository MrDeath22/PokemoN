let list = document.querySelector('.main__list');
let temp1 = document.querySelector('#temp1').content;
let temp2 = document.querySelector('#temp2').content;
let temp3 = document.querySelector('#temp3').content;

let tempFr = document.createDocumentFragment();

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');

btn1.addEventListener('click', () => {
   list.innerHTML = '';

   for (let i of pokemons.slice(0, 30)) {
      let pokemonTemp = temp1.cloneNode(true);
      pokemonTemp.querySelector('.temp__img').src = i.img;
      pokemonTemp.querySelector('.temp__title').textContent = i.name;
      pokemonTemp.querySelector('.temp__num').textContent = i.num;
   
      tempFr.appendChild(pokemonTemp);
   }
   
   list.appendChild(tempFr);
})

btn2.addEventListener('click', () => {
   list.innerHTML = '';

   for (let i of pokemons.slice(30, 60)) {
      let pokemonTemp = temp1.cloneNode(true);
      pokemonTemp.querySelector('.temp__img').src = i.img;
      pokemonTemp.querySelector('.temp__title').textContent = i.name;
      pokemonTemp.querySelector('.temp__num').textContent = i.num;
   
      tempFr.appendChild(pokemonTemp);
   }
   
   list.appendChild(tempFr);
})

btn3.addEventListener('click', () => {
   list.innerHTML = '';

   for (let i of pokemons.slice(60, 90)) {
      let pokemonTemp = temp1.cloneNode(true);
      pokemonTemp.querySelector('.temp__img').src = i.img;
      pokemonTemp.querySelector('.temp__title').textContent = i.name;
      pokemonTemp.querySelector('.temp__num').textContent = i.num;
   
      tempFr.appendChild(pokemonTemp);
   }
   
   list.appendChild(tempFr);
})

for (let i of pokemons.slice(0, 30)) {
   let pokemonTemp = temp1.cloneNode(true);
   pokemonTemp.querySelector('.temp__img').src = i.img;
   pokemonTemp.querySelector('.temp__title').textContent = i.name;
   pokemonTemp.querySelector('.temp__num').textContent = i.num;

   tempFr.appendChild(pokemonTemp);
}

list.appendChild(tempFr);

