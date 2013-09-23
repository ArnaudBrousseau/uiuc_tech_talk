from colorama import Fore
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.keys import Keys
import time


# Get local session of Firefox and loads Yelp
browser = webdriver.Firefox()
browser.implicitly_wait(20)
browser.get('http://www.yelp.com')

# Puts some text for a search query
term_input = browser.find_element_by_name('find_desc')
term_input.clear()
term_input.send_keys('burrito')

# Location matters, too
location_input = browser.find_element_by_name('find_loc')
location_input.clear()
location_input.send_keys('Mission, San Francisco, CA')

# Click "Search"
browser.find_element_by_id('header-search-submit').click()

# Now let's assert there is our favorite Taqueria somewhere on the page
try:
    browser.find_element_by_xpath("//a[contains(.,'El Farolito')]")
    print(Fore.GREEN + 'BOOYAAAAA! Success.' + Fore.RESET)
except NoSuchElementException:
    print(Fore.RED + "Can't find El Farolito :(" + Fore.RESET)
finally:
    browser.close()
