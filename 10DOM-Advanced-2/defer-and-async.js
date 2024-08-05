/* Efficient Script Loading defer and async */

// Regular --- <script src="script.js"></script>    |
//                                                  |
// async --- <script async src="script.js"></script>|
//                                                  |
// defer --- <script defer src="script.js"></script>|

// Regular

/*  In the head Head */
// parse HTML---> Fetch script ---> Execute ---> Finish parsing HTML ----> Load DOM Content 
//                          (Waiting)


/* in the end of the body Body */
// parse HTML-----> Fetch----> Execute -----> Load DOM Content 

// Script are fetched and executed after the HTML is completely parsed
// You can of course use different strategies for different script. Usually a complete web application includes mre than just one script


//Async 

/* In the Head */
// parse html---->(waiting)-----> finish parsing HTML----> Load DOM Content 
//           fetch script --&-- execute ----(Runs parallel)

//--> Script are fetched asynchronously and executed immediately 
//--> Usually the DOMContentLoaded event waits for all script to execute, except for async scripts. So, DomContentLoaded
// does not wait for an async script
// -->script not guaranteed to execute in order
//Use for 3rd party script where order doesn't matter 

//Defer

/* In the head */

// Parsing HTML -----> Execute 
// Fetch script -->DOM content loaded

//-->Script re fetched asynchronously and executed after the html s completely parsed
//-->DomContentLoaded event fires after defer script is executed 
//--> Script are execute in order
// -->This is overall the best solution! Use for yor own script and when order matters (eg, a library)

/* In the body for async and defer makes no sense */