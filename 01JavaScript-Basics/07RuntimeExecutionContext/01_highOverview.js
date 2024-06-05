/* Compiler: Translate in one go
   Interpreter: Translate line by line
   JIT (Just in time): When we combine both compiler and interpreter
   JS: Dynamically typed | loosely packed | JIT | Object based programming
*/

//JavaScript Engine
/* 
    javascript code  ----> parse it -----> Abstract syntax tree ---->interpreter --------> Bytecode
                                                                        |                   ^
                                                                        |                   |
                                                                Optimizing Compiler ---->Machine Code    
*/

// Chrome use V8 Engine
// Compiler ---> turbo fan
// interpreter --> Ignitor