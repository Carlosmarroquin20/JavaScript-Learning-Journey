function rot13(str) {
    return str.replace(/[A-Z]/g, char => {
        let code = char.charCodeAt(0) + 13;
        if (code > 90) code -= 26;
        return String.fromCharCode(code);
    });
}

console.log(rot13("SERR PBQR PNZC")); //"FREE CODE CAMP"
