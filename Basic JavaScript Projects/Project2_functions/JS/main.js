function bigImg(x) {                    //makes the image bigger in size                 
    x.style.height = "900px";
    x.style.width = "600px";
}

function normalImg(x) {                 //image normal size
    x.style.height = "450px"
    x.style.width = "300px";
}

function My_Second_Function() {         //assigned a function to display this paragraph when you click a button
    var paragraph = "Druids harness the vast powers of nature to preserve balance and protect life. ";
    paragraph += "With experience, druids can unleash nature’s raw energy against their enemies, ";
    paragraph +="raining celestial fury on them from a great distance, binding them with enchanted vines, or ensnaring them in unrelenting cyclones. ";
    paragraph +="Druids’ changing forms let them assume different roles and focus on either tanking, healing, or damage. ";
    paragraph +="They can also shapeshift to travel faster on land, sea, and air. ";
    paragraph +="When shapeshifted into their bear form, druids possess a thick skin and imposing presence that makes them ideal "; 
    paragraph +="front-line protectors of weaker party members. ";
    paragraph +="By calling upon the powers of nature, druids are able to swiftly restore health to their injured allies. ";
    paragraph +="Druids can take on the form of a savage cat in order to claw and bite their enemies up close, ";
    paragraph +="or that of a wild moonkin to blast enemies from afar. ";
    document.getElementById("concatenate").innerHTML = paragraph;
}
