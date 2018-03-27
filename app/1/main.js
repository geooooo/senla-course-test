window.addEventListener("load", () => {

    // Получение элементов формы
    let srcData = document.getElementById("srcData");
    let res = document.getElementById("res");
    let form = document.getElementById("form");

    /*
        Задание 1
        Необходимо написать программу, которая вычисляет простые числа в
        пределах от 1 до N. N – вводится вручную во время выполнения
        программы.
    */

    // Обработка отправки формы и выполнение алгоритма
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        res.value = "";
        let maxNumber = Number(srcData.value);
        let simpleNumbers = getSimpleNumbers(maxNumber);
        res.value = simpleNumbers.join("\n");
    });

    function getSimpleNumbers(maxNumber) {
        let result = [];
        for (let number = 2; number < maxNumber; number++) {
            let isDel = false;
            let maxDel = Math.sqrt(number);
            // Проверка наличия делителя у числа
            for (let del = 2; del <= maxDel; del++) {
                if (number % del == 0) {
                    isDel = true;
                    break;
                }
            }
            // Если у числа не было делителя, оно простое
            if (!isDel) {
                result.push(number);
            }
        }
        return result;
    }

});

