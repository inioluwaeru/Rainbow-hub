const bar = document.getElementById('bar');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const exit = document.getElementById('close');

bar.addEventListener('click', (e) => {
    menu.classList.remove('clean');
    menu.classList.add('appear');
    overlay.classList.remove('hidden')
    // alert( menu[0])
})
exit.addEventListener('click', (e) => {
    menu.classList.add('clean');
    menu.classList.remove('appear');
    overlay.classList.add('hidden')
    // alert( menu[0])
})

overlay.addEventListener('click', (e) => {
    overlay.classList.add('hidden');
    menu.classList.add('clean');
    menu.classList.remove('appear');
})