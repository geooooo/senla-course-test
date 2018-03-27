window.addEventListener("load", () => {

    // Получение элементов формы
    let srcData = document.getElementById("srcData");
    let res = document.getElementById("res");
    let form = document.getElementById("form");

    /*
        Необходимо написать программу, которая проверяет слово на
        "палиндромность". Слово для проверки вводится вручную во время
        выполнения программы.
    */

    // Обработка отправки формы и выполнение алгоритма
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        res.value = "";
        let word = srcData.value.trim();
        res.value = isReverseWord(word)? "Палиндром" : "Не палиндром";
    });

    function isReverseWord(word) {
        return word == word.split("").reverse().join("");
    }

});

