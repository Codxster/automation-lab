const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { addMovie } = require('../functions/addMovie')

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Add a Movie', async () => {
    await addMovie(driver)

    await driver.sleep(3000)
})

