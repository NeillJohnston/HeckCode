# HeckCode

## About

The programming language of the future Kappa.

HeckCode is a stupidly simple language I concocted after messing around with Brainfuck and wanting to try it myself.

Featuring:
+ _Boolean memory._ Each memory cell is either true or false, 1 or 0. Is this elegant? Probably not.
+ _Infinite memory tape._ Traverse up and down the tape to let your wildest dreams come true. Also we all know that infinite != infinite in this sense, don't freak out.
+ _8 operators._ That's all. The interpreter reads <>+-!&., and nothing else.
+ _A storage value_. Besides the memory tape, a single value can be stored in the (ethereal) storage, and can be accessed at any time. One of many reasons why Heck > Brainfuck.

## Learn HeckCode

Operators:
+ `<` Decrement the pointer value.
+ `>` Increment the pointer value.
+ `+` Swap the current cell with the storage value.
+ `-` Set the current cell to 0 (false).
+ `!` Flip the current cell value (cell = !cell).
+ `&` Set the current cell to the logical value of (cell AND storage).
+ `.` Print the current cell.
+ `,` Ask for user input for the current cell.

Sample code and code fragments:
+ `+-!&` (Fragment) Copy the current cell into storage.
+ `!+!&!` (Fragment) Compute the logical value of (cell OR storage).
+ `,>,<+-!&>>+<+-!&>!+!&!<<+-!&>+&!+>&.` Request user input for 2 values A and B, then output A xor B.
+ `.` etc.
