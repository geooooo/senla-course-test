window.addEventListener("load", () => {

    // Получение элементов формы
    let srcData = document.getElementById("srcData");
    let res = document.getElementById("res");
    let form = document.getElementById("form");

    /*
        Задание 3
        Необходимо написать программу, которая определяет пересекаются ли
        два отрезка. Координаты отрезков вводятся вручную во время
        выполнения программы.
    */

    // Обработка отправки формы и выполнение алгоритма
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        res.value = "";
        // Получение координат
        let coords = srcData.value.trim().split(" ");
        let line1 = new Line(
            new Point(...coords[0].split(";")),
            new Point(...coords[1].split(";"))
        );
        let line2 = new Line(
            new Point(...coords[2].split(";")),
            new Point(...coords[3].split(";"))
        );
        res.value = line1.isIntersection(line2)? "Пересекаются" : "Не пересекаются";
    });

    // Точка на плоскости
    class Point {

        constructor (x, y) {
            this.x = x;
            this.y = y;
        }

    }

    // Отрезок на плоскости
    class Line {

        constructor (pointBegin, pointEnd) {
            this.pointBegin = pointBegin;
            this.pointEnd = pointEnd;
        }

        // Проверка на пересечение с другим отрезком
        isIntersection(line) {
            // 1;1 2;2 3;3 4;4
            let a = this.pointBegin;
            let b = this.pointEnd;
            let c = line.pointBegin;
            let d = line.pointEnd;
            return intersect(a.x, b.x, c.x, d.x) &&
                   intersect(a.y, b.y, c.y, d.y) &&
                   (area(a, b, c) * area(a, b, d) <= 0) &&
                   (area(c, d, a) * area(c, d, b) <= 0);

            function intersect (a, b, c, d) {
                if (a > b) {
                    let tmp = a;
                    a = b;
                    b = tmp;
                }
                if (c > d) {
                    let tmp = c;
                    c = d;
                    d = tmp;
                }
                return Math.max(a, c) <= Math.min(b, d);
            }

            function area(a, b, c) {
                return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
            }
        }

    }

});

