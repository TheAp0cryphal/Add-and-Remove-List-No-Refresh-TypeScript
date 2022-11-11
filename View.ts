"use strict";


import {PigList} from "./Model.js"
import {Pig} from "./Model.js"

export class View{

    static clearInputs(){
        (<HTMLInputElement>document.getElementById("name")).value = "";
        (<HTMLInputElement>document.getElementById("category")).value = "";
        (<HTMLInputElement>document.getElementById("height")).value = "";
        (<HTMLInputElement>document.getElementById("weight")).value = "";
        (<HTMLInputElement>document.getElementById("personality")).value = "";
        (<HTMLInputElement>document.getElementById("attribute")).value = "";
        (<HTMLInputElement>document.getElementById("attribute_value")).value = "";
    }
    
    static displayPigs(pigList : PigList): void{

        pigList.sort();

        const container = document.querySelector("#list") as HTMLElement
        container.textContent = "";

        let i = 0;
        pigList.forEach(function(pig){
            const row = document.createElement("section");
            row.setAttribute("class", "row");
        
            const name = document.createElement("section");
            name.setAttribute("class", "col p-3 border bg-light");
        
            const category = document.createElement("section");
            category.setAttribute("class", "col p-3 border bg-light");
        
            name.textContent = pig.name
            category.textContent = pig.category
        
            row.appendChild(name)
            row.appendChild(category)
        
            const more_info = document.createElement("section");
            more_info.setAttribute("class", "col p-3 border bg-light");
        
            const del = document.createElement("section");
            del.setAttribute("class", "col p-3 border bg-light");
        
            const more_info_button = document.createElement("button");
            more_info_button.setAttribute("class", "btn btn-info tool-tip");
            more_info_button.setAttribute("id", "more_info_btn" + i);
            more_info_button.textContent = "More Info";

            const more_info_tooltip_text = document.createElement("section");
            more_info_tooltip_text.setAttribute("class", "tooltip-text");

            //pig attribute array
            const pig_attributes = ['name', 'category', 'breed', 'height', 'weight', 'personality', 'special_attribute', 'special_attribute_value'];
            //pig attribute labels
            const pig_attribute_labels = ['Name:', 'Category:', 'Breed:', 'Height:', 'Weight:', 'Personality:', 'Speciality:', 'Value:'];
            

            
            //button inner content html inside tooltip
            for(let i = 0; i < 8; i++){
                const more_info_row = document.createElement("section");
                more_info_row.setAttribute("class", "row");

                const more_info_col_name = document.createElement("section");
                const more_info_col_value = document.createElement("section");
                more_info_col_name.setAttribute("class", "col-5");
                more_info_col_name.setAttribute("style", "font-weight: bold;");
                more_info_col_value.setAttribute("class", "col-7");
                more_info_col_value.setAttribute("style", "text-align: left;");

                more_info_col_name.textContent = pig_attribute_labels[i];
                more_info_col_value.textContent = pig[pig_attributes[i] as keyof Pig].toString();

                more_info_row.appendChild(more_info_col_name);
                more_info_row.appendChild(more_info_col_value);
                more_info_tooltip_text.append(more_info_row);
                more_info_button.appendChild(more_info_tooltip_text);
            }

            

            //more_info_row.appendChild(more_info_col_name);
            //more_info_tooltip_text.appendChild(more_info_row);
            //more_info_button.appendChild(more_info_tooltip_text);

        
            const del_button = document.createElement("button");
            del_button.setAttribute("class", "btn btn-danger");
            del_button.setAttribute("id", "del_btn" + i);
            console.log("del_btn" + i)
            del_button.textContent = "Boop The Piggy"
        
            more_info.appendChild(more_info_button)
            del.appendChild(del_button)
        
            row.appendChild(more_info)
            row.appendChild(del)
        
            container.appendChild(row)
            i = i + 1;
        });    
    }

    static closePopup(){
        document.getElementById('close_overlay')!.click();
    }

    static displayOverlay(){
        console.log("Overlay - Add")
    
        const elem = document.querySelector('#overlay_add');
        elem?.setAttribute("open", "");
    
        const overlay = document.querySelector("#overlay") as HTMLElement;
        overlay.style.display = 'block';
    }
    static closeOverlay(){
        console.log("Close Overlay")
        const elem = document.querySelector('#overlay_add') as HTMLElement;
        const overlay = document.querySelector("#overlay") as HTMLElement;
    
        elem?.removeAttribute("open");
        overlay.style.display = 'none';
    }

    static displayInfo(pig : Pig){
        //
    }
}

