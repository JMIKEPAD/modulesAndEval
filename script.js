
// const fs=require('fs')

// fs.readFile('./conf.json', 'utf8' , (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log(data)
//   })
// fetch("./conf.json")
// .then(res => res.json)
// .then(executeConf)



// function executeConf(jsonArray) {
//     for (const object of jsonArray) {
//         let array = object[i];
//         eval(object.code); 
//     }
// }




// const value = 5;

// function mylog(variableToLog, someCode) {
//     eval(someCode);
//     console.log(variableToLog);
// }


// mylog(value, "variableToLog = '6pippo'; console.log('ti ho fregato');");


function helper2() {
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
    return {startingUppercase,splitForCamelCase}
}





const MyMath = require("./myMath");

const helper = require("./caseHelper");

const h2 = helper2()

console.log(MyMath.sum(3, 4));

console.log(MyMath.pow(3, 2));

console.log(Math.pow(3, 2));

console.log(helper.splitForCamelCase("laCasaRosa"))

console.log(h2.splitForCamelCase("laCasaRosa"))


