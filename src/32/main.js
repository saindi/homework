/*
    На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати перевірку
    на http/https. Якщо протокол не вказаний - додаємо
*/


document.getElementById("go_url").onclick = function(){
    let input = document.getElementById("input_url");

    try {
        if (input.value.startsWith("https://") || input.value.startsWith("http://"))
            location = input.value;
        else
            location = 'https://' + input.value;
    }
    catch (err) {
        input.setCustomValidity('Введіть правильне посилання');
        input.reportValidity();
    }
}
