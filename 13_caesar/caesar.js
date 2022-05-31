const caesar = function(str,shift) {
    let msg = '';
    let char = 0;
    let smallShift = shift % 26;

    for (let i=0; i<str.length; i++) {
        char = str.charCodeAt(i)

        if (char >= 65 && char <= 90) {
            if (char + smallShift > 90) {
                char = ((char + smallShift) % 90) + 64;
            } else if (char + smallShift < 65) {
                char = (char % 64) + smallShift + 90;
            } else char += smallShift;
        } else if (char >= 97 && char <= 122) {
            if (char + smallShift > 122) {
                char = ((char + smallShift) % 122) + 96;
            } else if (char + smallShift < 97) {
                char = (char % 97) + smallShift + 122;
            } else char += smallShift;
        }

        msg += String.fromCharCode(char);
    }
    return msg;
};


// Do not edit below this line
module.exports = caesar;
