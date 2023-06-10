let user = {
    yearBirth: prompt('Ваш рік народження:'),
    city: prompt('В якому місті Ви живете:'),
    sport: prompt('Ваш улюблений вид спорту'),
};

const capitals = {
    'Київ': 'України',
    'Вашингтон': 'США',
    'Лондон': 'Англії',
};


let messageFirst = '';

user.yearBirth === null ? alert(`Шкода, що Ви не захотіли ввести свій рік народження`) : messageFirst += `Ваш вік: ${2023 - user.yearBirth}\n`


// Перша частина
if (user.city === null )
    alert(`Шкода, що Ви не захотіли ввести своє місто`);
else if (Object.keys(capitals).includes(user.city))
    messageFirst += `Ти живеш у столиці ${capitals[user.city]}`;
else
    messageFirst += `Ти живеш у місті ${user.city}`;

if (messageFirst !== '')
    alert(messageFirst);


// Друга частина
let messageSecond = '';

switch (user.sport){
    case null:
        alert(`Шкода, що Ви не захотіли ввести свой улюблений вид спорту`);
        break;
    case 'Футбол':
        messageSecond += `Круто! Хочеш стати чемпіоном Європи з футболу ? `;
        break;
    case 'Баскетбол':
        messageSecond += `Круто! Хочеш стати чемпіоном NBA?`;
        break;
    case 'Бокс':
        messageSecond += `Круто! Хочеш отримати пояс IBF, WBA, WBO або WBC?`;
        break;
    default:
        messageSecond += `Твій улюблений вид спорту ${user.sport}`;
}

if (messageSecond !== '')
    alert(messageSecond);