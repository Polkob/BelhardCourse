// Task 4
/////////////////////////////////////////////////////////////

// let shop = {
//     range: {
//         dairy: ["молоко", "кефир"],
//         bakery: ["хлеб", "сушки"],
//         meat: ["курица", "свинина"]
//     },
//     addProduct: function () {
//         const category = Object.keys(this.range);
//         while (true) {
//             const selectedCategories = prompt(`Выберите номер категории:\n${category.map((cat, i) => `${i + 1}. ${cat}`).join('\n')}`);
//             const nameProduct = prompt("Введите название продукта: ");

//             if (selectedCategories && nameProduct) {
//                 const indexCategory = parseInt(selectedCategories) - 1;
//                 if (indexCategory >= 0 && indexCategory < category.length) {
//                     const pushProduct = this.range[category[indexCategory]];
//                     if (pushProduct.includes(nameProduct)) {
//                         console.log(`Продукт "${nameProduct}" уже существует в категории "${category[indexCategory]}".`);
//                         return;
//                     } else {
//                         pushProduct.push(nameProduct);
//                         this.updatePrices();
//                         break;
//                     }
//                 } else alert("Введите номер существующей категории!");
//             } else alert("Введите корректные данные!")
//         }
//         this.checkPrices();
//     },
//     deleteProduct: function () {

//     const deleteProduct = prompt("Введите название продукта, который нужно удалить: ");
//     if (deleteProduct) {
//         let isFound = false
//         for (let category in this.range) {
//             const index = this.range[category].indexOf(deleteProduct);
//             if (index !== -1) {
//                 this.range[category].splice(index, 1);
//                 delete this.prices[deleteProduct];
//                 alert(`Продукт "${deleteProduct}" был удалён.`);
//                 this.updatePrices();
//                 isFound = true;
//                 break;
//             }
//         }
//         if (!isFound) {
//             alert("Такого продукта нет в списке!");
//         }
//     } else alert("Не введено название продукта!");

//     this.checkPrices();
//     },
//     updatePrices: function () {
//         for (let category in this.range) {
//             for (let product of this.range[category]) {
//                 this.prices[product] = this.getRandomPrice();
//             }
//         }
//     },
//     prices: {},
//     getRandomPrice: function () {
//         return Math.floor(Math.random() * 500);
//     },
//     checkPrices: function () {

//         for (const product in this.prices) {
//             let found = false;
//             for (const category in this.range) {
//                 if (this.range[category].includes(product)) {
//                     found = true;
//                     break;
//                 }
//             }
//             if (!found) {
//                 const price = prompt(`Пожалуйста, укажите цену для продукта "${product}"`);
//                 this.prices[product] = parseFloat(price);
//                 console.log(`Продукт "${product}" добавлен в список цен.`);
//             }
//         }

//         for (const product in this.prices) {
//             let found = false;
//             for (const category in this.range) {
//                 if (this.range[category].includes(product)) {
//                     found = true;
//                     break;
//                 }
//             }
//             if (!found) {
//                 delete this.prices[product];
//                 console.log(`Продукт "${product}" был удален из каталога, так как он не является частью ассортимента.`);
//             }
//         }
//     },
//     customerCount: 1,
//     getRandomShoppingList: function(){
        
//         function getRandomItem(array) {
//             return array[Math.floor(Math.random() * array.length)];
//         }
        
//           const randomShoppingList = [];
//           const usedProducts = new Set();
//           let totalProducts = 0;

//         for (let category in this.range) {
//             totalProducts += this.range[category].length;
//         }

//           const numProducts = Math.floor(Math.random() * totalProducts) + 1;

//           while (randomShoppingList.length < numProducts) {
//             const category = getRandomItem(Object.keys(this.range));
//             const product = getRandomItem(this.range[category]);

//             if (!usedProducts.has(product)) {
//                 randomShoppingList.push(product);
//                 usedProducts.add(product); 
//               }
//           }

//         return randomShoppingList;
//     },
//     newCustomer: function(){
//         const customerName = `Покупатель ${this.customerCount}`;
//         const customer = {
//             name: customerName,
//             shoppingList: this.getRandomShoppingList(),
//             getCheck: function(){
//                 let sum = 0;
//                 for (const product in shop.prices) {
                    
//                     for (const item in this.shoppingList) {
//                         if (this.shoppingList[item].includes(product)) {
//                             sum += shop.prices[product];
//                         }
//                     }
//                 }
//                 return sum;
//             },
            
//         };

//         console.log(`${customer.name} пришёл в магазин и купил: ${customer.shoppingList}. Сумма за покупки - ${customer.getCheck()}`);

//         this.customerCount++;
//         this.customersList.push(customer);
//         this.profitCount();
//     },
//     customersList: [],
//     profitCount: function(){
//         let sum = 0;
//         for(let customer of this.customersList){
//             sum += customer.getCheck();
//         }
//         this.profit = sum;
//     }
// }
// shop.updatePrices();
// console.log(shop);
// shop.addProduct();
// shop.newCustomer();
// shop.newCustomer();
// shop.newCustomer();
// console.log(shop);
// shop.deleteProduct();
// console.log(shop);

////////////////////////////////////////////////
// Task 5 
////////////////////////////////////////////////

// class Shop {
//   #range = {
//     dairy: ["молоко", "кефир"],
//     bakery: ["хлеб", "сушки"],
//     meat: ["курица", "свинина"]
//   };
//   #prices = {};
//   #customersList = [];
//   #profit = 0;

//   constructor() {
//     this.customerCount = 1;
//     this.#updatePrices();
//   }

//   addProduct() {
//     const category = Object.keys(this.#range);
//     while (true) {
//       const selectedCategories = prompt(`Выберите номер категории:\n${category.map((cat, i) => `${i + 1}. ${cat}`).join('\n')}`);
//       const nameProduct = prompt("Введите название продукта: ");
//       if (selectedCategories && nameProduct) {
//         const indexCategory = parseInt(selectedCategories) - 1;
//         if (indexCategory >= 0 && indexCategory < category.length) {
//           const pushProduct = this.#range[category[indexCategory]];
//           if (pushProduct.includes(nameProduct)) {
//             console.log(`Продукт "${nameProduct}" уже существует в категории "${category[indexCategory]}".`);
//             return;
//           } else {
//             pushProduct.push(nameProduct);
//             this.#updatePrices();
//             break;
//           }
//         } else alert("Введите номер существующей категории!");
//       } else alert("Введите корректные данные!")
//     }
//     this.#checkPrices();
//   }

//   deleteProduct() {
//     const deleteProduct = prompt("Введите название продукта, который нужно удалить: ");
//     if (deleteProduct) {
//       let isFound = false;
//       for (let category in this.#range) {
//         const index = this.#range[category].indexOf(deleteProduct);
//         if (index !== -1) {
//           this.#range[category].splice(index, 1);
//           delete this.#prices[deleteProduct];
//           alert(`Продукт "${deleteProduct}" был удалён.`);
//           this.#updatePrices();
//           isFound = true;
//           break;
//         }
//       }
//       if (!isFound) {
//         alert("Такого продукта нет в списке!");
//       }
//     } else alert("Не введено название продукта!");

//     this.#checkPrices();
//   }

//   #updatePrices() {
//     for (let category in this.#range) {
//       for (let product of this.#range[category]) {
//         this.#prices[product] = this.getRandomPrice();
//       }
//     }
//   }

//   #checkPrices() {
//     for (const product in this.#prices) {
//       let found = false;
//       for (const category in this.#range) {
//         if (this.#range[category].includes(product)) {
//           found = true;
//           break;
//         }
//       }
//       if (!found) {
//         const price = prompt(`Пожалуйста, укажите цену для продукта "${product}"`);
//         this.#prices[product] = parseFloat(price);
//         console.log(`Продукт "${product}" добавлен в список цен.`);
//       }
//     }

//     for (const product in this.#prices) {
//       let found = false;
//       for (const category in this.#range) {
//         if (this.#range[category].includes(product)) {
//           found = true;
//           break;
//         }
//       }
//       if (!found) {
//         delete this.#prices[product];
//         console.log(`Продукт "${product}" был удален из каталога, так как он не является частью ассортимента.`);
//       }
//     }
//   }

//   getRandomPrice() {
//     return Math.floor(Math.random() * 500);
//   }

//   newCustomer() {
//     const customerName = `Покупатель ${this.customerCount}`;
//     const customer = new Customer(customerName, this.#range, this.#prices);
//     customer.purchase();
//     this.#customersList.push(customer);
//     this.#profitCount();
//     this.customerCount++;
//   }

//   #profitCount() {
//     let sum = 0;
//     for (let customer of this.#customersList) {
//       sum += customer.getCheck();
//     }
//     this.#profit = sum;
//   }

//   showProfit() {
//     console.log(`Общий доход магазина: ${this.#profit}`);
//   }
// }

// class Customer {
//   #shoppingList = [];
//   #check = 0;

//   constructor(name, range, prices) {
//     this.name = name;
//     this.#generateShoppingList(range);
//     this.#calculateCheck(prices);
//   }

//   #generateShoppingList(range) {
//     function getRandomItem(array) {
//       return array[Math.floor(Math.random() * array.length)];
//     }

//     const usedProducts = new Set();
//     let totalProducts = 0;

//     for (let category in range) {
//       totalProducts += range[category].length;
//     }

//     const numProducts = Math.floor(Math.random() * totalProducts) + 1;

//     while (this.#shoppingList.length < numProducts) {
//       const category = getRandomItem(Object.keys(range));
//       const product = getRandomItem(range[category]);

//       if (!usedProducts.has(product)) {
//         this.#shoppingList.push(product);
//         usedProducts.add(product);
//       }
//     }
//   }

//   #calculateCheck(prices) {
//     for (const product of this.#shoppingList) {
//       if (prices[product]) {
//         this.#check += prices[product];
//       }
//     }
//   }

//   purchase() {
//     console.log(`${this.name} пришёл в магазин и купил: ${this.#shoppingList.join(', ')}. Сумма за покупки - ${this.#check}`);
//   }

//   getCheck() {
//     return this.#check;
//   }

//   showShoppingList() {
//     console.log(`${this.name} список покупок: ${this.#shoppingList.join(', ')}`);
//   }
// }


// const shop = new Shop();
// shop.addProduct();
// shop.newCustomer();
// shop.newCustomer();
// shop.newCustomer();
// shop.showProfit();
// shop.deleteProduct();
