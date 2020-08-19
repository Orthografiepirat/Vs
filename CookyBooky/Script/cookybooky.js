"use strict";

/************ */
/** Variables */
/************ */
let recipeMap = new Map();


/********** */
/** Classes */
/********** */
class Recipe{
    constructor(name, howto, ingredients){
        this.customId = name;
        this.name = name;
        this.howto = howto;
        this.ingredients = ingredients;
    }
}

class Ingredient{
    constructor(){
        this.name = name;
        this.unit = unit;
        this.quantity = this.quantity;
    }
}


/******************** */
/** Handle GUI events */
/******************** */
let handlerGUI = {
    //Interaction via Events in html
    //
    
    setVisibleSection : function(whatSection){
      
        if(whatSection === "createNew"){
            document.getElementById("sectionCreate").style.display = "block";
            document.getElementById("sectionListSingle").style.display = "none";
            document.getElementById("sectionListAll").style.display = "none";
        } else if(whatSection === "displaySingle"){
            document.getElementById("sectionCreate").style.display = "none";
            document.getElementById("sectionListSingle").style.display = "block";
            document.getElementById("sectionListAll").style.display = "none";
        } else if(whatSection === "displayAll"){
            document.getElementById("sectionCreate").style.display = "none";
            document.getElementById("sectionListSingle").style.display = "none";
            let sectionElement = document.getElementById("sectionListAll");
            sectionElement.style.display = "block";
            let allRecipes = handlerGUI.buildDisplayAllRecipes();
            sectionElement.appendChild(allRecipes);
        } else{
            alert("Kein gültiger Wert");
        }
    },
    //CRUD
    //
    buildCreateRecipe : function(){

    },
    buildDeleteRecipe : function(){

    },
    buildUpdateRecipe : function(){

    },
    buildDisplayRecipe : function(){

    },
    buildDisplayAllRecipes : function(){
        let element;
        let name;
        let howto;
        let ingredients;
        let ingredientsArray;
        for(let [key, value] of recipeMap){
            //von hinten erstellen
            element = htmlElements.article();

            //name
            name = htmlElements.input(value.name);
            //howto
            howto = htmlElements.textarea(value.howto);

            //ingredients
            ingredients = htmlElements.div();
            //loop bis alle drin sind
            for(let entry in value.ingredients){
              ingredients.appendChild(htmlElements.input(entry));
            }   
            
            //alle erstellten html elemente anhängen
            element.appendChild(name);
            element.appendChild(howto);
            element.appendChild(ingredients);
            return element;
        }
    }
}


/*********************** */
/** Create HTML elements */
/*********************** */
let htmlElements = {
    article: function(){
        let element = document.createElement("article");
        element.classList.add();
        return element;
    },
    input: function(text){
        let element = document.createElement("input");
        element.classList.add();
        element.value = text;
        return element;
    },
    div: function(){
        let element = document.createElement("div");
        element.classList.add();
        return element;
    },
    textarea: function(text){
        let element = document.createElement("textarea");
        element.classList.add();
        element.value = text;
        return element;
    }
}


/******************* */
/** Basic operations */
/******************* */
function createRecipe(name, howto, ingredients){
    let newRecipe = new Recipe(name, howto, ingredients);
    recipeMap.set(newRecipe.customId, newRecipe);
    console.log("Recipe created: " + newRecipe);
}

function deleteRecipe(index){
    let deletedRecipe = recipeMap.delete(index);
    console.log("Recipe deleted: " + deletedRecipe);
}

function updateRecipe(index, newName, newHowto, newIngredients){
    //let recipeToUpdate = recipeMap(index);
    
    
}

function findRecipeViaIndex(){

}


/************************** */
/** Data export/import/test */
/************************** */
function createTestData(){
    let test1 = new Recipe("testname1", "howto1", ["ingredient1", "ingredient2in1"]);
    let test2 = new Recipe("testname2", "howto2", ["ingredients2"]);
    let test3 = new Recipe("testname3", "howto3", ["ingredients3"]);
    let test4 = new Recipe("testname4", "howto4", ["ingredients4"]); 
    recipeMap.set(test1.customId, test1);
    recipeMap.set(test2.customId, test2);
    recipeMap.set(test3.customId, test3);
    recipeMap.set(test4.customId, test4);
}