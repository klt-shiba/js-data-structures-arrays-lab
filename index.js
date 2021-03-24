// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(a) {
    drivers.push(a); 
}
function destructivelyPrependDriver(a) {
    drivers.unshift(a); 
}
function destructivelyRemoveLastDriver(a) {
    drivers.pop(a); 
}
function destructivelyRemoveFirstDriver(a) {
    drivers.shift(a); 
}
function appendDriver(a) {
    let b = [...drivers]
    b.push(a); 
    return b
}
function prependDriver(a) {
    let b = [...drivers]
    b.unshift(a); 
    return b
}
function removeLastDriver(a) {
    let b = [...drivers]
    b.pop(a); 
    return b
}
function removeFirstDriver(a) {
    let b = [...drivers]
    b.shift(a); 
    return b
}

