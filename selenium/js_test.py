from colorama import Fore
from selenium import webdriver

# Page that we want to test
JS_PAGE = 'http://arnaudbrousseau.github.io/uiuc_tech_talk/debug/js_fixed.html'

# Creates the browser instance and loads the test page
browser = webdriver.Firefox()
browser.get(JS_PAGE)

try:
    # Locates the interesting elements (buttons, textarea)
    buttons = browser.find_elements_by_tag_name('button')
    textarea = browser.find_elements_by_tag_name('textarea')[0]

    # For each button, click it and assert that the textarea's content is okay
    for i, button in enumerate(buttons):
        button.click()
        assert textarea.text == str(i+1)

    # If no exception was thrown, we'll end up here
    print(Fore.GREEN + 'CONGRATZ! Test passes.' + Fore.RESET)

except:
    # If we got an exception, announce the bad news and raise
    print(Fore.RED + 'OH NOES! Failure.' + Fore.RESET)
    raise

finally:
    # Let's not end up with 35 instances of Firefox running
    browser.close()
