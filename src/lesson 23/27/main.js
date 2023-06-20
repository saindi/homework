/*
    Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>.
    При пропажі фокусу - <div> так само пропадає.
*/

document.querySelector("#input_text").onfocus = function(){
    document.getElementById('hidden_message').hidden = false;
}

document.querySelector("#input_text").onblur = function(){
    document.getElementById('hidden_message').hidden = true;
}
