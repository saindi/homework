// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору
// characters довжиною length.


function generateKey(lengthKey, alphabet) {
    let answer = '';

    for (let i = 0; i < lengthKey; i++) {
        let randomIndex = Math.floor(Math.random() * (alphabet.length + 1));

        answer += alphabet[randomIndex];
    }

    return answer;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key);
