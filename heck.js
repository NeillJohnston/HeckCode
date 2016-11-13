var code = document.getElementById("code");
var output = document.getElementById("output");

var p = 0; // pointer
var s = false; // storage cell
var m = new Map([[0, false]])

function run() {
    c = code.value;
    output.value = "";
    for(var i = 0; i < c.length; i++) {
        if(/<|>|-|\+|!|&|\.|,/.test(c[i])) {
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
                    b = prompt("?: ", "");
                    m.set(p, false);
                    if(parseInt(b) !== 0)
                        m.set(p, true);
                    break;
            }
        }
    }
}

function print(s) {
    output.value += s;
}
