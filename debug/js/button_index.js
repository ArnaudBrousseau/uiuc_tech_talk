var buttons = document.querySelectorAll('button');
var textarea = document.querySelector('textarea');

for (var i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        textarea.innerHTML = i + 1;
    }, false);
}
