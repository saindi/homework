// Переробити код, не використовуючи Math

let startDate = new Date('2023-06-23');
let endDate = new Date('2023-06-30');

let daysDiff = (endDate - startDate) / (1000 * 3600 * 24);

console.log(`daysDiff: ${daysDiff}`);
