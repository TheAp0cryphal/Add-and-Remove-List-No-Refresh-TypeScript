//Model
export class PigList {
    constructor() {
        this.pigList = [];
    }
    //override foreach 
    forEach(callback) {
        this.pigList.forEach(callback);
    }
    addPig(name, category, breed, height, weight, personality, attribute, attribute_value) {
        const pig = new Pig(name, category, breed, parseInt(height), parseInt(weight), personality, attribute, attribute_value);
        this.pigList.push(pig);
        pig.displayInConsole();
        this.storeListInLocalStorage();
    }
    removePig(index) {
        this.pigList.splice(index, 1);
        this.storeListInLocalStorage();
    }
    storeListInLocalStorage() {
        localStorage.setItem("pigList", JSON.stringify(this.pigList));
    }
    getListFromLocalStorage() {
        var _a;
        if (localStorage.getItem("pigList") != null) {
            this.pigList = JSON.parse((_a = localStorage.getItem("pigList")) !== null && _a !== void 0 ? _a : "");
        }
    }
    getLength() {
        return this.pigList.length;
    }
    getPig(i) {
        return this.pigList[i];
    }
    //sort by locale compare
    //group by category and sort by name
    //sort name
    sort() {
        this.pigList.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
    }
}
export class Pig {
    constructor(name, category, breed, height, weight, personality, attribute, attribute_value) {
        this.name = name;
        this.category = category;
        this.breed = breed;
        this.height = height;
        this.weight = weight;
        this.personality = personality;
        this.special_attribute = attribute;
        this.special_attribute_value = attribute_value;
    }
    displayInConsole() {
        console.log("Name: " + this.name);
        console.log("Category: " + this.category);
        console.log("Breed: " + this.breed);
        console.log("Height: " + this.height);
        console.log("Weight: " + this.weight);
        console.log("Personality: " + this.personality);
        console.log("Attribute: " + this.special_attribute);
        console.log("Attribute Value: " + this.special_attribute_value);
    }
    //getters
    getName() {
        return this.name;
    }
    getCategory() {
        return this.category;
    }
    getBreed() {
        return this.breed;
    }
    getHeight() {
        return this.height;
    }
    getWeight() {
        return this.weight;
    }
    getPersonality() {
        return this.personality;
    }
    getAttribute() {
        return this.special_attribute;
    }
    getAttributeValue() {
        return this.special_attribute_value;
    }
}
