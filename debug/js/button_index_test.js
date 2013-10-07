(function() {
    var SCRIPT_UNDER_TEST = '../js/button_index.js';
    var buttons, textarea, script, i;

    /**
     * Setup function -- appends all necessary DOM elements
     * and inserts script under test
     */
    var setup = function() {
        buttons = [
            document.createElement('button'),
            document.createElement('button')]
        for (var i=0; i < buttons.length; i++) {
            document.body.appendChild(buttons[i]);
        }

        textarea = document.createElement('textarea');
        document.body.appendChild(textarea);

        script = document.createElement('script');
        script.src = SCRIPT_UNDER_TEST;
        document.head.appendChild(script);
    };

    /**
     * Teardown method to cleanup the DOM after we're done
     */
    var teardown = function() {
        for (var i=0; i < buttons.length; i++) {
            document.body.removeChild(buttons[i]);
        }
        document.body.removeChild(textarea);
        document.head.removeChild(script);
    };

    var assert = function(statement, message) {
        var li = document.createElement('li');
        if (!statement) {
            li.className = 'error';
            li.innerText = 'FAILED: ' + message;
        }
        else {
            li.className = 'success';
            li.innerText = 'SUCCESS: ' + message;
        }
        document.getElementById('results').appendChild(li);
    };

    /**
     * Da test
     */
    var testButtonIndex = function() {
        buttons[0].click();
        var expected = '1';
        var actual = document.getElementsByTagName('textarea')[0].innerHTML;
        assert(expected === actual, 'First button yields 1');

        buttons[1].click();
        var expected = '2';
        var actual = document.getElementsByTagName('textarea')[0].innerHTML;
        assert(expected === actual, 'Second button yields 2');
    };

    /** DO EEET! */
    var timeStart = new Date().getTime();
    setup();
    window.onload = function() {
        testButtonIndex();
        teardown();
        var timeEnd = new Date().getTime();
        var runTime = (timeEnd - timeStart) // in ms
        console.log('Test run in ' + runTime + 'ms.');
    };
})();
