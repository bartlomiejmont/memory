const box = document.querySelector('.container');
const emotes = ['😀', '👾', '👿', '👽', '👻', '👮', '💜', '💣', '🦄',
'😀', '👾', '👿', '👽', '👻', '👮', '💜', '💣', '🦄']
.sort(() => .5 - Math.random())

const hideCard = (e) => {
    console.log(e);
    console.log(`id: ${e.target.dataset.id}`)
    console.log(`emoji: ${e.target.innerText}`)
}

for (let i = 0; i < emotes.length; i++) {
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('parentDiv');

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerText = emotes[i];
    card.setAttribute('data-id', i);
    card.onclick = hideCard;

    parentDiv.appendChild(card);
    box.appendChild(parentDiv)
}