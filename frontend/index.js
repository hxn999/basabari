const prompt = require('prompt-sync')();

let code = ''



let allVar = []
let totalVar = 0
let variables = {}
while (code != 'exit') {
    let tempMem = []
    let temp = ''
    let varSave = false
    let print = false
    let equal = false
    code = prompt("> ")
    let tokens = code.split(" ")
    let n = tokens.length
    for (let i = 0; i < n; i++) {

        if (tokens[i] === 'uthao') {
            varSave = true
            continue
        }
        if (varSave) {
            totalVar++

            allVar.push(tokens[i])
            variables[tokens[i]] = null

            varSave = false
            continue
        }
        if (tokens[i] === '=') {
            if (tokens[i + 2] == '+' || tokens[i + 2] == '-' || tokens[i + 2] == '*' || tokens[i + 2] == '/')
            {
                switch (tokens[i+2]) {
                    case '+':
                        variables[tokens[i-1]]=variables[tokens[i+1]]+variables[tokens[i+3]]
                    
                        break;
                
                    case '-':
                        variables[tokens[i-1]]=variables[tokens[i+1]]-variables[tokens[i+3]]
                        break;
                    case '*':
                        variables[tokens[i-1]]=variables[tokens[i+1]]*variables[tokens[i+3]]
                        break;
                    case '/':
                        variables[tokens[i-1]]=variables[tokens[i+1]]/variables[tokens[i+3]]
                        break;
                }
            }
            else {
                equal = true
            }
            continue
        }
        if (equal == true) {

            variables[allVar[totalVar - 1]] = parseInt(tokens[i])
            equal = false
            continue
        }
        if (tokens[i] === 'likho') {
            print = true
            continue
        }
        if (print) {
            console.log(`> ${variables[tokens[i]]}`)
            print = false
            continue
        }
    }
    tokens = []

}

