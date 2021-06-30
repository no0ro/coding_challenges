// Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). 
// saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. 
// When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values

 /* PSUDO:

    create function saveOutput ( fn(arg), pswdString~make this optional/or a default?)
        let key = arg;
        let value = pswdString (make this vari optional?)

        if pswd matches~ or just exists?, 
            return obj w/ all prev. passed in arguments as keys, and corresponding outputs as values (so must add an external variable for the COVE)
        else
             return the fn that was passed in 
        return shellFn(pswd)
        returns object
*/


/* WORDING:

*/


/* NOTES & TAKE AWAYS:

*/