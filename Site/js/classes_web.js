class Comidas {
    constructor(name, price, description = null) {
        this.name = name;
        this.price = price; 
        this.description = description;
    }

    getPrice() {
        return this.price;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    
    setPrice(price) {
        this.price = price;
    }
    setName(name) {
        this.name = name;
    }
    setDescription(description) {
        this.description = description;
    }

}

