function sayHelloBye(name, number) {
    name = name.split('')
    name[0] = name[0].toUpperCase()
    name = name.join('')

    if (number === 1) {
        return 'Hello' + ' ' + name
    }
    else {
        return 'Bye' + ' ' + name
    }
}

console.log("LVL72", '|', sayHelloBye('azizaga', 0))

function chatroomstatus(name1,) {
    if (name1 == 0) {
        return 'not is online'
    } else {
        return name1 + ' ' + 'online'
    }
}
console.log("LVL74" + " |", chatroomstatus(['azizaga']))


function formatPhoneNumber(myarr) {
    let str = '('
    for (let x in myarr) {
        str += myarr[x]
        if (x == 2) {
            str += ')'
        }
        if (x == 5) {
            str += '-'
        }
    }
}
console.log("LVL71" + " |", formatPhoneNumber('1', '2', '3', '4', '5', '6', '7', '8', '9', '0'))

function countTrue(index) {
    index = index.toString()
    console.log(index.match(/true/g).length)
}

console.log("LVL75" + ' |', countTrue([true, false, false, true]))

function isSimmetrial(number) {
    let a = 0
    let b = a
    while (a != 0) {
        c = number % 10
        a = a * 10 + b
        number = Math.floor(number/10)
    }
    if (b == a) {
        console.log(true)
    } else {
        console.log(false)
    }
}

console.log(isSimmetrial(11211))