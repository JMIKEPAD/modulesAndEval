function startingUppercase(string) {
    return string[0].toUpperCase() + string.substring(1);
}



// lastVariableInArray => last variable in array


function splitForCamelCase(string) {

    let output = "";

    for (const char of string) {
        if (char === char.toUpperCase()) {
            output += (" " + char.toLowerCase())
        } else {
            output +=char
        }
    }
    return output;
    
}

module.exports = {startingUppercase, splitForCamelCase}











