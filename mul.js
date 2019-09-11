
//Write a function that multiplies two numbers without using the multiplication operator in Javascript

function mul(x, y) {
    // x and y will be an integer. multiply without multiplication operator and return // the value
    let result = 0;
    for(let i=0; i<y; i++)
        result+=x;
    return result;
}

let x = 4;
let y = 6;
document.write(mul(x,y)+"<br>");