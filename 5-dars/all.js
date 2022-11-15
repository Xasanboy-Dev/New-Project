function isOdd(n) {
    return `isOdd ${n % 2 == 1}`
}
function isEven(n) {
    return `isEven ${n % 2 == 0}`
}
module.exports = {
    isEven, isOdd
}