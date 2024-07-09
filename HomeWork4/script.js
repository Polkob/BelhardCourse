let shop = {
    range: {
        dairy: ["молоко", "кефир"],
        bakery: ["хлеб", "сушки"],
        meat: ["курица", "свинина"]
    },
    prices: {},
    addProduct: function () {
        const category = Object.keys(this.range);
        while (true) {
            const selectedCategories = prompt(`Выберите номер категории:\n${category.map((cat, i) => `${i + 1}. ${cat}`).join('\n')}`);
            const nameProduct = prompt("Введите название продукта: ");



            if (selectedCategories && nameProduct) {
                const indexCategory = parseInt(selectedCategories) - 1;
                if (indexCategory >= 0 && indexCategory < category.length) {
                    const pushProduct = this.range[category[indexCategory]];
                    if (pushProduct.includes(nameProduct)) {
                        console.log(`Продукт "${nameProduct}" уже существует в категории "${category[indexCategory]}".`);
                        return;
                    } else {
                        pushProduct.push(nameProduct);
                        this.updatePrices();
                        break;
                    }
                } else alert("Введите номер существующей категории!");
            } else alert("Введите корректные данные!")
        }
        this.checkPrices();
    },
    deleteProduct: function () {

        const deleteProduct = prompt("Введите название продукта, который нужно удалить: ");
    if (deleteProduct) {
        let isFound = false
        for (let category in this.range) {
            const index = this.range[category].indexOf(deleteProduct);
            if (index !== -1) {
                this.range[category].splice(index, 1);
                delete this.prices[deleteProduct];
                alert(`Продукт "${deleteProduct}" был удалён.`);
                this.updatePrices();
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            alert("Такого продукта нет в списке!");
        }
    } else alert("Не введено название продукта!");

    this.checkPrices();
    },
    updatePrices: function () {
        for (let category in this.range) {
            for (let product of this.range[category]) {
                this.prices[product] = this.getRandomPrice();
            }
        }
    },
    getRandomPrice: function () {
        return Math.floor(Math.random() * 500);
    },
    checkPrices: function () {

        for (const product in this.prices) {
            let found = false;
            for (const category in this.range) {
                if (this.range[category].includes(product)) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                const price = prompt(`Пожалуйста, укажите цену для продукта "${product}"`);
                this.prices[product] = parseFloat(price);
                console.log(`Продукт "${product}" добавлен в список цен.`);
            }
        }

        for (const product in this.prices) {
            let found = false;
            for (const category in this.range) {
                if (this.range[category].includes(product)) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                delete this.prices[product];
                console.log(`Продукт "${product}" был удален из каталога, так как он не является частью ассортимента.`);
            }
        }
    }

}

shop.updatePrices();
console.log(shop);

shop.deleteProduct();