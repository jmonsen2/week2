var i = 0;
while(i <= 100) {
    if (i % 2 == 0)
    console.log(i);
    i++;
}

var i = 100;
while(i > -2) {
    if (i % 3 == 0)
    console.log(i);
    i--;
}

var i;
for(i = 0; i <= 100; i += 2) {
    console.log(i);
}

var i;
for(i = 0; i <= 100; i++) {
    if(i % 3 && 5 == 0) {
        console.log("Hello")
    }
    else if(i % 3 == 0) {
        console.log("World")
    }
    else if(i % 5 == 0) {
        console.log("HelloWorld")
    }
}