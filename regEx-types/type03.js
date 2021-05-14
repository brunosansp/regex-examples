// (?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})
const strDate = "2021-05-12"
const dateRegEx = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
const match = dateRegEx.exec(strDate)
const { groups } = match
const { year, month, day } = groups
console.log('MATCH ::: ', match)
console.log('objGroups ::: ', {day, month, year})