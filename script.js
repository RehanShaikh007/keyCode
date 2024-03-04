const heading = document.getElementById("heading");
const keycode = document.getElementById("keycode");


window.addEventListener('keydown', function(r){
heading.innerHTML = `You Pressed "${r.key}"`
keycode.innerText = `${r.keyCode}`
})