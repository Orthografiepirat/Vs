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
            document.getElementById("sectionListAll").style.display = "block";
        } else{
            alert("Kein gültiger Wert");
        }
    }
}


/*********************** */
/** Create HTML elements */
/*********************** */



/******************* */
/** Basic operations */
/******************* */
function createRecipe(name, howto, ingredients){
    let name = name;
    let howto = howto;
    let ingredients = ingredients;
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