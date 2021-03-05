//program uses a 'while' loop and outputs each iteration to the console
i = 0
let iterations = false

while (iterations == false) {
    console.log(`This is iteration ${[i]}.`)
    i++
    iterations = confirm("Are you done?")
}