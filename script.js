btn.addEventListener('click', () => {
    let input = text.value;
    let color = document.getElementById('color').value;

    if (!input) {
        alert('Enter your note');
        return;
    }

    let card = document.createElement('div');
    card.classList.add('note');
    card.style.backgroundColor = color;

    let del = document.createElement('button');
    del.innerText = 'x';
    del.addEventListener('click', () => {
        card.remove();
    });

    card.appendChild(del);

    let content = document.createElement('div');
    content.textContent = input;
    card.appendChild(content);

    document.querySelector('.notes-container').appendChild(card);

    text.value = '';
});
