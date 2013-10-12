var buttons = document.querySelectorAll('button');
var textarea = document.querySelector('textarea');

/**
 * Solution: create a closure to keep track of the i variable in each handler
 */
for (var i=0; i < buttons.length; i++) {
    (function(i) {
        buttons[i].addEventListener('click', function() {
            textarea.innerHTML = i + 1;
        }, false);
    })(i);
}

/**
 * Another way to fix this (same idea):
 *
 *   for (var i=0; i < buttons.length; i++) {
 *       buttons[i].addEventListener('click', (function(i) {
 *           textarea.innerText = i;
 *       })(i), false);
 *   }
 */
