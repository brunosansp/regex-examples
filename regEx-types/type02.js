// test string
const text = 'N,.ã_o)d-á'

// regex, [^A-zÀ-ÿ]|_
const regEx = /([^A-zÀ-ÿ]|_)/gm
// o gm após a regEx diz que a expressão deve ser global e multiline

const result = text.replace(regEx, '')
console.log({ result })