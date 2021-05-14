const heroes = `NickName: Flash, Power: Velocidade
Nickname: Batman, Power: Rico`

const regEx = /(NickName|Nick):\s(?<nickname>\w+),\sPower:\s(?<power>\w.*)/gm

const finalStr = heroes.replace(regEx, (substring, _, nickname, power, ...args) =>{
    return `${nickname} ${power}`
})
console.log(finalStr)

// Também podemos fazer o replace assim :::
const resultSingleLine = heroes.replace(regEx, '$<nickname> $<power>')
console.log(resultSingleLine)