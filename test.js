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
    const {[key]: value} = user
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


function findBestEmployee(employees) {
    let bestEmployee = null;
    let maxTasks = 0;

    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = name;
        }
    }

    return bestEmployee;
}


const employees = {
    Matthew: 27,
    Sanya: 51,
    Paul: 16,
    Igor: 34,
};

const {Matthew = 27, Sanya = 51, Paul = 16, Igor = 34,} = employees

console.log(findBestEmployee(employees));



console.log("4. Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд ім'я: зарплата.");


function countTotalSalary(employees2) {
    let totalSalary = 0;

    for (const [, salary] of Object.entries(employees2)) {
        totalSalary += salary
    }

    return totalSalary;
}


const employees2 = {
    Vyacheslav:  2100,
    Lubomir:  3000,
    Volodymer:  2700,
    Kirill:  3500,
}


console.log(countTotalSalary(employees2));


console.log("5. Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.");


function getAllPropValues(arr, prop) {
    let values = [];

    for (const obj of arr) {
        const {[prop]: value} = obj;
        if (value !== undefined) {
            values.push(value);
        }
    }
    return values;
}

const furniture = [
    {name: "bed", price: 120, material: "trees"},
    {name: "chair", price: 65, material: "trees"},
    {name: "table", price: 90, material: "glass"},
    {name: "wardrobe", price: 150, material: "trees"},
]

console.log(getAllPropValues(furniture, "name"));
console.log(getAllPropValues(furniture, "price"));
console.log(getAllPropValues(furniture, "material"));





console.log("6. Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об-єктів та ім-я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість). Викличи функції для перевірки працездатності твоєї реалізації.");



function calculateTotalPrice(allProducts, productName) {
    let total = 0;

    for (const {name, price, quantity} of allProducts) {
        if (name === productName) {
            total = price * quantity;
        }
    }

    return total;
}

const products = [
    { name: "apple", price: 15, quantity: 9 },
    { name: "banana", price: 10, quantity: 10 },
    { name: "orange", price: 21, quantity: 6 },
    { name: "grape", price: 30, quantity: 5 }
];

console.log(calculateTotalPrice(products, "apple"));
console.log(calculateTotalPrice(products, "banana"));
console.log(calculateTotalPrice(products, "orange"));
console.log(calculateTotalPrice(products, "grape"));
