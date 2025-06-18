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
// for(const elem in user) {
//     console.log(`${elem}:${user[elem]}`);
// }


// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

const userNew = {
    name:"Kateryna",
    age:16,
    city:"Kyiv",
    hobby:"horseriding",
    premium:true,
}

const countProps = (obj) => {
    const values = Object.values(obj);
}

console.log(countProps(userNew));

