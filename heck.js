// Initialize HTML elements.
var code = document.getElementById("code");
var output = document.getElementById("output");


// Memory parts.
var p = 0;                      // pointer
var s = false;                  // storage cell
var m = new Map([[0, false]])   // memory table (or tape)


// Run the code!
function run() {
    c = code.value;
    output.value = "";
    outputToLog = document.getElementById("log").checked;
    counter = 0;

    // Loop through the given code.
    for(var i = 0; i < c.length; i++) {
        // Use regex to match a character to an operator, if possible.
        if(/<|>|-|\+|!|&|\.|,/.test(c[i])) {
            // Switch through all possible operators.
            switch(c[i]) {
                case '<':
                    p--;
                    if(!m.has(p))
                        m.set(p, false);
                    break;
                case '>':
                    p++;
                    if(!m.has(p))
                        m.set(p, false);
                    break;
                case '+':
                    temp = s;
                    s = m.get(p);
                    m.set(p, temp);
                    break;
                case '-':
                    m.set(p, false);
                    break;
                case '!':
                    m.set(p, !m.get(p));
                    break;
                case '&':
                    m.set(p, m.get(p) && s);
                    break;
                case '.':
                    print(1 * m.get(p));
                    break;
                case ',':
                    b = prompt("Input a value (0 or 1): ", "");
                    m.set(p, false);
                    if(parseInt(b) !== 0)
                        m.set(p, true);
                    break;
            }

            // Output steps to log, if requested.
            if(outputToLog) {
                mStr = " |" + parseInt(1 * s) + "| ";
                [...m.keys()].sort().forEach(function(e) {
                    if(e === p)
                        mStr += "(" + (1 * m.get(e)) + ")";
                    else
                        mStr += " " + (1 * m.get(e)) + " ";
                });
                console.log(c[i] + mStr);
            }

            // Increment steps counter.
            counter++;
        }
    }

    console.log("Finished processing " + counter + " operations.");
}


// Print the output.
function print(s) {
    output.value += s;
}
