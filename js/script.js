const game = () => {
    const monthSpitter = (n) => {
        if (Number(n) === 1 || Number(n) === 2 || Number(n) === 12) {
            return "Зима";
        }
        else if (Number(n) === 3 || Number(n) === 4 || Number(n) === 5) {
            return "Весна";
        }
        else if (Number(n) === 6 || Number(n) === 7 || Number(n) === 8) {
            return "Лето";
        }
        else if (Number(n) === 9 || Number(n) === 11 || Number(n) === 10) {
            return "Осень";
        }
        else {
            let again = prompt("Вы ввели несоответствующее значение, попробуйте снова ввести целое число от 1 до 12");
            return monthSpitter(again);
        }
    }
    let monthNumber = prompt("Введите номер желаемого месяца");
    console.log(monthSpitter(monthNumber));
}


const fruits = () => {
    let given = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    alert(given.join(', '));
    let firstElem = given[0].toLowerCase();
    let lastElem = given[given.length - 1].toLowerCase();
    alert(given.sort(() => Math.random() - 0.5));
    let firstGuess = prompt('Чему равнялся первый элемент массива?').toLowerCase();
    let lastGuess = prompt('Чему равнялся последний элемент массива?').toLowerCase();
    if (firstElem === firstGuess && lastElem === lastGuess) {
        alert("Поздравляю, Вы угадали оба слова");
    }
    else if ((firstElem === firstGuess && lastElem !== lastGuess) || (firstElem !== firstGuess && lastElem === lastGuess)) {
        alert('Вы были близки к победе!');
    }
    else {
        alert('Вы не угадали');
    }
}

// 1 задача
// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
// }
// console.log((Object.values(numbers)).filter(elem => elem >= 3));

// 2 задача
// let time = new Date();
// console.log(`${time.getDate()} - ${time.getMonth() + 1} - ${time.getFullYear()}`);

// 3 задача
// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// const week = {};
// en.forEach((element, i) => {
//     week[element] = ru[i];
// });
// console.log(week);

// 4 задача
// const dayCheck = (n) => {
//     const week = {
//         1: 'понедельник',
//         2: 'вторник',
//         3: 'среда',
//         4: 'четверг',
//         5: 'пятница',
//         6: 'суббота',
//         7: 'воскресенье',
//     };
//     if (!isNaN(n)) {
//         if (n >= 1 && n <= 7) {
//             alert(`${n} - ${week[n]}`);
//         }
//         else {
//             dayCheck(prompt('Я не знаю, что это за день недели'));
//         }
//     }
//     else {
//         n = n.toLowerCase();
//         const workingDay = n === week[1] || n === week[2] || n === week[3] || n === week[4] || n === week[5];
//         const restDay = n === week[6] || n === week[7];
//         if (workingDay) {
//             alert('Будний день');
//         }
//         else if (restDay) {
//             alert('Выходной');
//         }
//         else {
//             dayCheck(prompt('Вы ввели несуществующий день недели'));
//         }
//     }
// }
// dayCheck(prompt('Введите день недели'));

// 5 задача
// const numbers = {
//     key1: {
//         keyin1: 1,
//         keyin2: 2,
//         keyin3: 3,
//     },
//     key2: {
//         keyin1: 4,
//         keyin2: 5,
//         keyin3: 6,
//     },
// };
// let parent = Object.values(numbers);
// sum = 0;
// parent.forEach(element => {
//     sum += Object.values(element).reduce((a, b) => a + b);
// });
// console.log(sum);

// 6 задача
// const Months = () => {
//     const Order = () => {
//         const number = prompt('Введите номер месяца, который вы хотите вывести');
//         if (!isNaN(number) && number >= 1 && number <= 12) {
//             return number;
//         }
//         else {
//             return Order();
//         }
//     }
//     const months = {
//         ru: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
//         en: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
//     };
//     if (confirm('ru?')) {
//         alert(`${months.ru[Order() - 1]}`);
//     }
//     else {
//         alert(`${months.en[Order() - 1]}`);
//     }
// }
// Months();

// 7 задача

const riddle = () => {
    const riddleHandler = (task, answer) => {
        let guess = prompt(task).toLowerCase();
        if (guess === answer) {
            alert('Поздравляем, Вы угадали!');
        }
        else {
            guess = prompt(hint1).toLowerCase();
            if (guess === answer) {
                alert('Поздравляем, Вы угадали!');
            }
            else {
                guess = prompt(hint2).toLowerCase();
                if (guess === answer) {
                    alert('Поздравляем, Вы угадали!');
                }
                else {
                    alert('К сожалению, вы не угадали, попытки истрачены');
                }
            }
        }
    }
    let task = 'Загадка';
    let answer = 'ответ';
    let hint1 = 'Подсказка1';
    let hint2 = 'Подсказка2';
    riddleHandler(task, answer);
}



