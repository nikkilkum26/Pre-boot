 // Write 6 statement which provide truthy & falsey values.
 
 function trueorfalse (val) {
    if (val) {
        console.log("true");
    } else {
        console.log("false");
    }
}

trueorfalse("some value"); //returns true
trueorfalse(2+1); //returns true
trueorfalse([]); //returns true

trueorfalse(undefined);//returns false
trueorfalse(null);//returns false
trueorfalse(0);//returns false