
//Write a function that returns the extension of a file name

function getFileExtension(s) {
    // s will be a string, but it may not have a file extension.
        // return the file extension (with no period) if it has one, otherwise false
    return s.split(".")[1] != undefined ? s.split(".")[1] : false;
}

document.write(getFileExtension("teste")+"<br>");
document.write(getFileExtension("teste.js")+"<br>");