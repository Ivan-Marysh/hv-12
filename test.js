console.log("1. Напиши скрипт, який, для об'єкта user, послідовно:додає поле mood зі значенням 'happy'замінює значення hobby на 'skydiving'замінює значення premium на falseвиводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of");


const user = {
    name: "Vasya",
    age: 15,
    hobby: "plays tanks",
    work: "merchant grocer",
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = "false";

const keys = Object.keys(user);
for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
}


console.log("2. Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.");


function countProps(obj) {
    return Object.keys(obj).length;
}


const user2 = {
    nema: "Yura",
    age: 20,
    hobby: "plays dota",
    work: "production of tanks",
};

console.log(countProps(user2));


console.log("3. Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі ім'я:кількість задач.");


