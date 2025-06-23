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

const keys = Object.keys(user);
for(const elem of keys) {
    console.log(`key:${elem}`);
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
    const bestScore = Object.values(employees);
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
    {}
]

const getAllPropValues = (arr, prop) => {

}