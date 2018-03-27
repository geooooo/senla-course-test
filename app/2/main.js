window.addEventListener("load", () => {

    // Получение элементов формы
    let srcData = document.getElementById("srcData");
    let res = document.getElementById("res");
    let form = document.getElementById("form");

    /*
        Задание 2
        Необходимо написать рекурсивный алгоритм, который находит числа
        Фибоначчи в пределах от 1 до N. N – вводится вручную во время
        выполнения программы.
    */

    // Обработка отправки формы и выполнение алгоритма
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        res.value = "";
        let count = Number(srcData.value);
        let fibNumbers = getFibNumbers(count);
        res.value = fibNumbers.join("\n");
    });

    // Получение списка чисел фибоначи в заданном количестве
    function getFibNumbers(count) {
        let result = [];
        let prev = 0;
        let cur = 1;
        innerGetFibNumbers(prev, cur, 1);
        return result;

        function innerGetFibNumbers(prev, cur, number) {
            if (number > count) {
                return;
            }
            result.push(prev);
            innerGetFibNumbers(cur, cur + prev, number + 1);
        }
    }

});

