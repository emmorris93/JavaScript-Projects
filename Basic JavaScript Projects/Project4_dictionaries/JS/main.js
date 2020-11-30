function my_Dictionary() {                                                  //defined and named a function
    var character = {                                                       //dictionary with key:value pairs (KVPs)
        class:"Druid",
        race:"Worgen",
        role:"Healer",
        form:"tree",
        level:60,
    };
    delete character.form;                                                  //operator as word
    document.getElementById("Dictionary").innerHTML = character.form;       //returns value of "undefined" after using the delete operator
}
