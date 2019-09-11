
//Convert the given number into a roman numeral.

function palindrome(text){
    // text will be a string
    text = text.replace(/[^a-zA-Z]/g, "");
    text = text.toLowerCase();
    var a = text.split("");
    var n = a.length;
    var result = "";
    for(let i=n-1; i>=0; i--)
     result += a[i];
    return result == text;
}

document.write(palindrome("eye")+"<br>");
document.write(palindrome("_eye")+"<br>");
document.write(palindrome("never odd or even")+"<br>");
document.write(palindrome("nope")+"<br>");
document.write(palindrome("almostomla")+"<br>");
