
// document.querySelectorAll('[data-foo="value"]');
const box = document.querySelector('.container');
const emotes = ['😀', '👾', '👿', '👽', '👻', '👮', '💜', '💣', '🦄',
'😀', '👾', '👿', '👽', '👻', '👮', '💜', '💣', '🦄']
.sort(() => .5 - Math.random())

let clicked = [];
let score = 0;

const isWin = () => {
    if(clicked.length !== 2){
        return;
    }

    const card1 = document.querySelector(`[data-id="${clicked[0].id}"]`)
    const card2 = document.querySelector(`[data-id="${clicked[1].id}"]`)

    if(clicked[0].emote === clicked[1].emote){
        score += 2;
        console.log(score);
        card1.parentElement.style.visibility = 'hidden';
        card2.parentElement.style.visibility = 'hidden';
    } 
    setTimeout(() => {
        card1.style.visibility = 'hidden';
        card2.style.visibility = 'hidden';
        clicked = [];
    },2000)
}

const clickBack = (e) => {
    if(clicked.length >= 2){
        return;
    }
    const id = e.target.children[0].dataset.id;
    const emote = e.target.children[0].innerHTML;
    clicked.push({id,emote});
    console.log(clicked);
    e.target.children[0].style.visibility = 'visible';
    isWin();
}

for (let i = 0; i < emotes.length; i++) {
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('parentDiv');
    parentDiv.onclick = clickBack;

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerText = emotes[i];
    card.setAttribute('data-id', i);

    parentDiv.appendChild(card);
    box.appendChild(parentDiv)
}