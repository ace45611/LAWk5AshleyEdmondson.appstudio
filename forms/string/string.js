//create variable named 'quoteString'
let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."

//Uses 'toUpperCase' string method to change the text in 'quoteString' to all upper case
console.log(quoteString.toUpperCase())

//creates variable 'authorString'
let authorString =  "- Henry Ford"

/*Uses the string method concat() to create a new string variable 'completeString'
that holds a new string created by adding 'authorString'  to the end of 'quoteString'
*/

let completeString = quoteString.concat(authorString)
console.log(completeString)

/*
Creates a new variable 'found' that uses the string method 'includes()' 
to determine if "Henry" is in 'completeString' or not
*/

let found = 'Henry'

if (completeString.includes(found))
    console.log(`${found} was in completeString.`)
else
    console.log(`${found} was NOT in completeString.`)
