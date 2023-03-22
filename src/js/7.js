let numOrStr = prompt('input number or string');
console.log(numOrStr);


switch (numOrStr.trim()) {
    case null:
        console.log('ви скасували');
        break;
    case '':
        console.log('Empty String');
        break;
    default:
        console.log('OK!');
}
