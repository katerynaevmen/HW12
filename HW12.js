// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
    name:"Kateryna",
    age:16,
    city:"Kyiv",
    hobby:"horseriding",
    premium:true,
}

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const arrays = Object.entries(user);
for(const elem of arrays) {
console.log(`${elem[0]}:${elem[1]}`);
}


// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

const userNew = {
    name:"Kateryna",
    age:16,
    city:"Kyiv",
    hobby:"horseriding",
    premium:true,
}

const countProps = function(obj) {
    const values = Object.values(obj).length;
    return values;
}

console.log(countProps(userNew));


// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const employerss = {
    pavlo:3,
    igor:5,
    olesya:6,
    tima:10,
    oleg:2,
}

const findBestEmployee = (employees) => {
    const scoresAndEmployees = Object.entries(employees);
        let bestScore = scoresAndEmployees[0];
        for(const element of scoresAndEmployees){
        if(bestScore < element) {
            bestScore = element
        }
    }
    return bestScore[0]
    
}
console.log(findBestEmployee(employerss));

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const employers = {
    pavlo:3000,
    igor:5000,
    olesya:6000,
    tima:10000,
    oleg:2000,
}

const countTotalSalary = (employees) => {
    let total = 0;
    const salary = Object.values(employees);
    for(const element of salary) {
        total += element;
        
    }
    return total
}    

console.log(countTotalSalary(employers));

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const array = [
  { name: "Anna", age: 20, gender: "female"},
  { name: "Ivan", age: 22, gender: "male"},
  { name: "Olena", age: 19, gender: "female"},
  { name: "Petro", age: 21, gender: "male"},
];

const getAllPropValues = (arr, prop) => {
    let newArray = [];
        for(const element of arr) {  
       newArray.push(element[prop])
    }
    return newArray
}


console.log(getAllPropValues(array, "age"));

// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.

const productsPrice = [
    {name:"dress", price:1200, quantity:3},
    {name:"shorts", price:700, quantity:2},
    {name:"jeans", price:1000, quantity:5},
    {name:"shoes", price:2000, quantity:2},
];

const calculateTotalPrice = (allProdcuts, productName) => {
        let totalPrice = 0;
        let eachProduct = "";
        let price = [];
    for(const element of allProdcuts) {
        const totalOfEveryProduct = Object.values(element);
        totalPrice = totalOfEveryProduct[1]*totalOfEveryProduct[2];
        eachProduct = element[productName]
        console.log(`${eachProduct}:${totalPrice}`);
        price.push(`${eachProduct}:${totalPrice}`)
    }
    return price
}

console.log(calculateTotalPrice(productsPrice, "name"));
