window.addEventListener("load", () => {

    // Получение элементов формы
    let srcData = document.getElementById("srcData");
    let res = document.getElementById("res");
    let form = document.getElementById("form");

    /*
        Задание 6
        Необходимо написать программу, которая удаляет из текста числа.
        Текст вводится вручную во время выполнения программы. для проверки вводится вручную во время
        выполнения программы.
    */

    // Обработка отправки формы и выполнение алгоритма
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        res.value = "";
        res.value = deleteNumbers(srcData.value);;
    });

    // Удаление чисел вида 123 3.14 3,14
    function deleteNumbers(text) {
        const DIGS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const NUM_SEPS = [".", ","];
        let newText = "";
        let isDig = false;
        let isSep = false;
        for (let char of text) {
            if (DIGS.indexOf(char) != -1) {
                isDig = true;
                continue;
            }
            if (!isSep && isDig && (NUM_SEPS.indexOf(char) != -1)) {
                isSep = true;
                continue;
            }
            isDig = false;
            isSep = false;
            newText += char;
        }
        return newText;
    }

});

