// Задача 1. Вывести в консоли:
// а) все ноутбуки. лучше с разметкой HTML
// б) все ноутбуки, цена которых больше 40000.
// в) Посчитать сумму цен всех ноутбуков. Итого.


//_________________________________________________1
// let laptops = [
//   {
//       mark : "Acer",
//       price : 25000
//   },
//   {
//       mark : "Apple",
//       price : 37000
//   },
//   {
//       mark : "Asus",
//       price : 125500,
//   },
//   {
//       mark : "HP",
//       price : 42000
//   },
//   {
//       mark : "Samsung",
//       price : 52000
//   }
// ]

// for (let i=0; i < laptops.length; i++)
// {console.log(`<div class="laptops">
//     <h1>${laptops[i].mark}</h1>
//     <p>${laptops[i].price}</p>`);
// }

// for (let i=0; i < laptops.length; i++)
// {
//     if (laptops[i].price > 40000)
//     console.log(`<div class="laptops">
//     <h1>${laptops[i].mark}</h1>
//     <p>${laptops[i].price}</p>`);
// }

// let sum = 0
// for (let i=0; i < laptops.length; i++)
// { sum += laptops[i].price
// ;}
// console.log(sum)


//__________________________________________________2
// // Задача.2
// // а) Вывести все ноутбуки, у которых есть категория "laptop"
// // б) Вывести все ноутбуки, у которых категория "premium"
// // в) Вывести все ноутбуки, у которых категория "tech"

// let laptopsSecond = [
//   {
//       mark : "Acer",
//       category : ["laptop", "tech"],
//       price : 25000
//   },
//   {
//       mark : "Apple",
//       category : ["notebook", "tech"],
//       price : 37000
//   },
//   {
//       mark : "Asus",
//       category : ["computer", "premium"],
//       price : 125500,
//   },
//   {
//       mark : "HP",
//       category : ["computer", "tech"],
//       price : 42000
//   },
//   {
//       mark : "Samsung",
//       category : ["notebook", "premium"],
//       price : 52000
//   }
// ]

// for (let i=0; i <laptopsSecond.length; i++) {
//     if (laptopsSecond[i].category[i] == "laptop");

//     console.log(`${laptopsSecond[i].category[i]}`);
// }

// совсем не понимаю как добраться до объекта 






//________________________________________________________3
// Задача 3.
// Запрашивать у пользователя Марку и Цену ноутбука три раза.
// Марку и цену ноутбука объединять в объект и добавлять(push) в массив laptops=[]-пустой
// Итого будет массив из трех объектов.

// let laptopsThird = []

// for (let i = 0; i < 3; i++) {

//     mark = prompt("enter laptops mark")
//     price = +prompt("enter laptops price")

//     laptopsThird.push({ mark, price })

// }

// console.log(laptopsThird);

 
 // Задача 4. 
// У пользователя с prompta запрашивать марку/цену. // По его ответу в консоли ввыводить ноутбуки с разметкой.
// Какую марку вы бы хотели? -Acer. Выводим хар-ки ACer
// На какую цену вы рассчитываете? -50000. Выводить все ноутбуки, которые удовл-т(меньше) этой цене


// let laptopsFourth = [
//     {
//         mark: "acer",
//         category: ["laptop", "tech"],
//         price: 25000
//     },
//     {
//         mark: "acer",
//         category: ["laptop", "tech"],
//         price: 38000
//     },
//     {
//         mark: "apple",
//         category: ["notebook", "tech"],
//         price: 37000
//     },
//     {
//         mark: "asus",
//         category: ["computer", "premium"],
//         price: 125500,
//     },
//     {
//         mark: "asus",
//         category: ["computer", "tech"],
//         price: 42000
//     },
//     {
//         mark: "acer",
//         category: ["notebook", "premium"],
//         price: 49000
//     }
// ]


// mark = prompt("enter laptops mark")
// price = +prompt("enter laptops price")

// for (let i = 0; i < 6; i++) {

          
//             if (laptopsFourth[i].mark == mark) {
//                 console.log(laptopsFourth[i]);
//             };
        
//             if (laptopsFourth[i].price <= price) {
//                 console.log(laptopsFourth[i]);
//             }
//         };
    
