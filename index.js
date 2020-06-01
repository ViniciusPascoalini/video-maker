const robots = {
    userInput: require('./robots/user-input.js'),
    text: require('./robots/text.js')
}

async function start() {
    const content = {
        maximumSentences: 7
    }

    robots.userInput(content)
    await robots.text(content)

}

start()