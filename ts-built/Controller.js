var _a, _b, _c, _d;
import { View } from "./View.js";
import { PigList } from "./Model.js";
let pigList = new PigList();
onCreate();
function onCreate() {
    pigList.getListFromLocalStorage();
    View.displayPigs(pigList);
    setListeners(pigList.getLength());
}
(_a = document.getElementById("submit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const personality = document.getElementById("personality").value;
    const attribute = document.getElementById("attribute").value;
    const breed = document.getElementById("breed").value;
    const attribute_value = document.getElementById("attribute_value").value;
    const h_box = document.querySelector("#height");
    const w_box = document.querySelector("#weight");
    const att_box = document.querySelector("#attribute_value");
    console.log(category);
    h_box.addEventListener("keydown", function (e) {
        h_box.style.color = "black";
    });
    w_box.addEventListener("keydown", function (e) {
        w_box.style.color = "black";
    });
    att_box.addEventListener("keydown", function (e) {
        att_box.style.color = "black";
    });
    if (name == "" || breed == "" || category == "" || height == "" || weight == "" || personality == "" || attribute_value == "") {
        alert("Please fill out all fields");
    }
    else if (isNaN(Number(height)) || Number(height) <= 0) {
        alert("Height must be a number > 0 and < 100");
        h_box.style.color = "red";
    }
    else if (isNaN(Number(weight)) || Number(weight) <= 0) {
        alert("Weight must be a number > 0 and < 100");
        w_box.style.color = "red";
    }
    else if (validateIsNumeric(attribute_value, 10) && category == "Black") {
        alert("Strength must be a number > 0 and < 10");
        att_box.style.color = "red";
    }
    else if (validateIsNumeric(attribute_value, 100) && attribute != "Language") {
        alert("Attribute Value must be a number > 0 and < 100");
        att_box.style.color = "red";
    }
    else if (!validateIsString(attribute_value) && attribute == "Language") {
        alert("Attribute Value must be a string");
        att_box.style.color = "red";
    }
    else {
        pigList.addPig(name, category, breed, height, weight, personality, attribute, attribute_value);
        View.closePopup();
        View.clearInputs();
        View.displayPigs(pigList);
        setListeners(pigList.getLength());
    }
});
function validateIsNumeric(val, max) {
    if (isNaN(Number(val)) || Number(val) <= 0 || Number(val) > max) {
        return true;
    }
}
function validateIsString(val) {
    if (isNaN(Number(val))) {
        console.log("True");
        return true;
    }
}
(_b = document.getElementById("trigger_overlay_add")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    View.displayOverlay();
});
(_c = document.getElementById("close_overlay")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    View.closeOverlay();
});
function setListeners(length) {
    console.log("Resetting listeners");
    for (let i = 0; i < length; i++) {
        setDeleteListeners(i);
        setInfoListeners(i);
    }
}
function setDeleteListeners(i) {
    var _a;
    (_a = document.getElementById("del_btn" + i)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        const result = confirm("Want to delete -> " + pigList.getPig(i).name + "? " + "\nWarning: This action cannot be undone.");
        if (result) {
            //Remove Pig to Model
            pigList.removePig(i);
            //Update View to View
            View.displayPigs(pigList);
            // Reset Listeners after Delete
            setListeners(pigList.getLength());
        }
    });
}
function setInfoListeners(i) {
    var _a;
    (_a = document.getElementById("more_info_btn" + i)) === null || _a === void 0 ? void 0 : _a.addEventListener("mouseover", function () {
        //Remove Pig to Model
        let pig = pigList.getPig(i);
        View.displayInfo(pig);
    });
}
// select dropdown listener
(_d = document.getElementById("category")) === null || _d === void 0 ? void 0 : _d.addEventListener("change", function () {
    const category = document.getElementById("category").value;
    let attribute = document.getElementById("attribute");
    let attribute_value = document.getElementById("attribute_value");
    let breed = document.getElementById("breed");
    if (category == "White") {
        attribute.value = "Running";
        attribute_value.placeholder = "Running Ability / 100";
        //update breed options
        breed.innerHTML = "";
        breed.innerHTML += "<option value=''>Select Breed</option>";
        breed.innerHTML += "<option value='Berkshire'>Berkshire</option>";
        breed.innerHTML += "<option value='Chester White'>Chester White</option>";
        breed.innerHTML += "<option value='Duroc'>Duroc</option>";
        breed.innerHTML += "<option value='Hampshire'>Hampshire</option>";
    }
    if (category == "Black") {
        attribute.value = "Strength";
        attribute_value.placeholder = "Strength / 10";
        //update breed options
        breed.innerHTML = "";
        breed.innerHTML += "<option value=''>Select Breed</option>";
        breed.innerHTML += "<option value='Swim Hog'>Swim Hog</option>";
        breed.innerHTML += "<option value='PoolParty Piglet'>PoolParty Piglet</option>";
    }
    if (category == "Chestnut") {
        attribute.value = "Language";
        attribute_value.placeholder = "eg : Korean";
        //update breed options
        breed.innerHTML = "";
        breed.innerHTML += "<option value=''>Select Breed</option>";
        breed.innerHTML += "<option value='American Guinea Hog'>American Guinea Hog</option>";
        breed.innerHTML += "<option value='American Yorkshire'>American Yorkshire</option>";
        breed.innerHTML += "<option value='Piglet Nice'>Piglet Nice</option>";
        breed.innerHTML += "<option value='Brown Rice'>Brown Rice</option>";
    }
    if (category == "Grey") {
        attribute.value = "Swimming";
        attribute_value.placeholder = "Swimming Ability / 100";
        //update breed options
        breed.innerHTML = "";
        breed.innerHTML += "<option value=''>Select Breed</option>";
        breed.innerHTML += "<option value='Landrace'>Landrace</option>";
        breed.innerHTML += "<option value='Large Black'>Large Black</option>";
        breed.innerHTML += "<option value='Yorkshire'>Yorkshire</option>";
    }
});
