window.addEventListener("load", () => {

    // Получение элементов формы
    let srcData = document.getElementById("srcData");
    let res = document.getElementById("res");
    let form = document.getElementById("form");

    /*
        Задание 4
        Необходимо написать рекурсивный алгоритм для нахождения НОД и
        НОК двух чисел. Два числа вводятся вручную во время выполнения
        программы.
    */

    // Обработка отправки формы и выполнение алгоритма
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        res.value = "";
        let [number1, number2] = srcData.value.trim().split(" ");
        res.value = `НОД: ${gcd(number1, number2)}\nНОК: ${lcm(number1, number2)}`;
    });

    // НОД
    function gcd(a, b) {
        return (b == 0)? a : gcd(b, a % b);
    }

    // НОК
    function lcm(a, b) {
        return a * b / gcd(a, b);
    }

});

