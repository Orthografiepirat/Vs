"use strict";

/**  */
let recipes = new Map();


/** Handle GUI events */
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

/** Create HTML elements */