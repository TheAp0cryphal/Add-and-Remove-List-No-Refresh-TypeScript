//Model

export class PigList{
    public pigList: Pig[]
    
    constructor(){
          this.pigList = []
        }

    //override foreach 
    forEach(callback: (pig: Pig) => void){
        this.pigList.forEach(callback)
    }
    
    addPig(name: string, category: string, breed: string, height: string, weight: string, personality: string, attribute: string, attribute_value: string): void{
        const pig = new Pig(name, category, breed, parseInt(height), parseInt(weight), personality, attribute, attribute_value);
        this.pigList.push(pig)
        pig.displayInConsole();

        this.storeListInLocalStorage();
    }
    
    removePig(index: number): void{
        this.pigList.splice(index, 1);
        this.storeListInLocalStorage();
    }

    storeListInLocalStorage(): void{
        localStorage.setItem("pigList", JSON.stringify(this.pigList));
    }

    getListFromLocalStorage(){
        if (localStorage.getItem("pigList") != null){
            this.pigList = JSON.parse(localStorage.getItem("pigList")??"");
        }
    }
    
    getLength(): number{
        return this.pigList.length;
    }

    getPig(i: number){
        return this.pigList[i];
    }

    //sort by locale compare

    //group by category and sort by name

    //sort name
    sort(): void{
        this.pigList.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
    }
}

export class Pig {

    public name: string;
    public category: string;
    public breed: string;
    public height: number;
    public weight: number;
    public personality: string;
    public special_attribute: string;
    public special_attribute_value: string;

    constructor(name: string,
          category: string,
          breed: string,
          height: number,
          weight: number,   
          personality: string,
          attribute: string,
          attribute_value: string
          ) { 
        this.name = name;
        this.category = category;
        this.breed = breed
        this.height = height;
        this.weight = weight;
        this.personality = personality;
        this.special_attribute = attribute
        this.special_attribute_value = attribute_value
    }

    displayInConsole(): void{
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
    getName(): string{
        return this.name;
    }
    
    getCategory(): string{
        return this.category;
    }

    getBreed(): string{
        return this.breed;
    }

    getHeight(): number{
        return this.height;
    }

    getWeight(): number{
        return this.weight;
    }

    getPersonality(): string{
        return this.personality;
    }

    getAttribute(): string{
        return this.special_attribute;
    }

    getAttributeValue(): string{
        return this.special_attribute_value;
    }
}