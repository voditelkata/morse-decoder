const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let withoutStars = expr.replace(/\*/g, 3);
    let arr = [];
    for (let i = 0; i < withoutStars.length / 10; i++) {
      arr.push(withoutStars.slice(0 + 10 * i, 10 + 10 * i));
    }
    let dottesDashes = arr.map((item) =>
      item
        .replace(/11/g, "-")
        .replace(/10/g, ".")
        .replace(/0/g, "")
        .replace(/3{10}/g, " ")
    );
    let chars = dottesDashes.map((item) => {
      if (item === " ") {
        return item;
      }
      return MORSE_TABLE[item];
    });
    return chars.join('')
  }

module.exports = {
    decode
}