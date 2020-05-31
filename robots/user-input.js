function robot(content){
    const readline = require('readline-sync')

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm(){
        return readline.question('Type a Wikipedia search term: ')    
        }
    
    function askAndReturnPrefix(){
        const prefixes = ['who is', 'what is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes)
        const selectedPrefixText = prefixes[selectedPrefixIndex]
    
        return selectedPrefixText 
    }
}

module.exports = robot