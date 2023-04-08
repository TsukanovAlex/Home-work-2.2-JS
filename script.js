// Задание 1
let a = (10);
alert(a);
a = 20;
alert(a);

// Задание 2
let year = Number(2007);
alert(`Год выпуска первого Iphone - ${year}`);

// Задание 3
let nameJs = String(`Брендан Эйх`);
alert(`Имя создателя языка JavaScript - ${nameJs}`);

// Задание 4
let b = Number(10);
let c = Number(2);
alert(b+c);
alert(b-c);
alert(b*c);
alert(b/c);

// Задание 5
let result = (2**5);
alert(result);

// Задание 6
let d = Number(9);
let e = Number(2);
alert(d%e);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// Задание 8
let age1 = prompt(`Сколько Вам лет?`);
alert(age1);

// Задание 9
const user = {
    name: `Alexey`,
    age: 33,
    isAdmin: true,
};

// Задание 9.1
user[`city of residence`] =`Varna`;

// Задание 9.2
user.age = 45;

// Задание 9.3
delete user[`city of residence`];

// Задание 9.4
let info = prompt(`Какую информацию хотите узнать о пользователе?`);
alert (user [info]);

// Задание 9.5
let name1 = prompt(`Как тебя зовут?`);
alert (`Привет, ${name1}!`);