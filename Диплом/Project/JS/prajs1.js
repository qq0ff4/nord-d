let flag1 = false;
let flag2 = true;
let flag3 = true;
let flag4 = true;
let flag5 = true;
let flag6 = true;

let f1 = true;
let f2 = true;
let f3 = true;
let f4 = true;
let f5 = true;
let f6 = true;

document.getElementById('info').insertAdjacentHTML("beforeend",
    `<div class = "button2 active2" id="b1_1">
    <p>Гусеничные экскаваторы</p>
    </div>
    
    <div class = "button2" id="b1_2">
    <p>Колёсные экскаваторы</p>
    </div>

    <div class = "button2" id="b1_3">
    <p>Мини-экскаваторы</p>
    </div>

    <div class = "button2" id="b1_4">
    <p>Экскаваторы-погрузчики</p>
    </div>

    <div class = "button2" id="b1_5">
    <p>Экскаваторы-разрушители</p>
    </div>`
)
document.getElementById('info_table').insertAdjacentHTML("beforeend",
    `
    <table>
        <tr>
            <th class = "th_z">Фото</th>
            <th class = "th_z">Наименование</th>
            <th class = "th_z">Характеристики</th>
            <th class = "th_z">Цена за смену</th>
            <th class = "th_z">Цена за час</th>
        </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Гусеничный экскаватор JCB JS 130.jpeg" class="img_table">
            </th>
            <th class = "th_color">Гусеничный экскаватор JCB JS 130</th>
            <th>Эксплуатационная масса, 13300 кг <br>
            Объём ковша, 0.4 м3 <br>
            Макс. глубина копания, 5.3 м <br>
            Высота выгрузки экскаватора, 6.4 м</th>
            <th>от 14 500 руб.</th>
            <th>от 1 813 руб.</th>
        </tr>
        <tr>
        <th>
            <img src="../IMAGE/Price_Table/Гусеничный экскаватор Hitachi ZX160LC-5G.jpg" class="img_table">
        </th>
        <th class = "th_color">Гусеничный экскаватор Hitachi ZX160LC-5G</th>
        <th>Эксплуатационная масса, 16400 кг <br>
        Объём ковша, 0.8 м3 <br>
        Макс. глубина копания, 5.6 м <br>
        Высота выгрузки экскаватора, 6.7 м</th>
        <th>от 17 000 руб.</th>
        <th>от 2 125 руб.</th>
    </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Гусеничный экскаватор LiuGong 925E.png" class="img_table_png">
            </th>
            <th class = "th_color">Гусеничный экскаватор LiuGong 925E</th>
            <th>Эксплуатационная масса, 25600 кг <br>
            Объём ковша, 1.4 м3 <br>
            Макс. глубина копания, 6.6 м <br>
            Высота выгрузки экскаватора, 7.7 м</th>
            <th>от 21 000 руб.</th>
            <th>от 2 625 руб.</th>
        </tr>
    </table>`
)


document.getElementById('b1').onclick = function () {
    if (flag1) {

        let elem = document.querySelectorAll('.button2')
        for (let item of elem) {
            item.remove()
        }
        let elem2 = document.querySelectorAll('table')
        for (let item of elem2) {
            item.remove()
        }
        document.querySelector(".main1 .active").classList.remove('active')
        this.classList.add('active')
        document.getElementById('info').insertAdjacentHTML("beforeend",
            `<div class = "button2 active2" id="b1_1">
    <p>Гусеничные экскаваторы</p>
    </div>
    
    <div class = "button2" id="b1_2">
    <p>Колёсные экскаваторы</p>
    </div>

    <div class = "button2" id="b1_3">
    <p>Мини-экскаваторы</p>
    </div>

    <div class = "button2" id="b1_4">
    <p>Экскаваторы-погрузчики</p>
    </div>

    <div class = "button2" id="b1_5">
    <p>Яморубы</p>
    </div>`
        )

        document.getElementById('info_table').insertAdjacentHTML("beforeend",
            `
    <table>
        <tr>
            <th class = "th_z">Фото</th>
            <th class = "th_z">Наименование</th>
            <th class = "th_z">Характеристики</th>
            <th class = "th_z">Цена за смену</th>
            <th class = "th_z">Цена за час</th>
        </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Гусеничный экскаватор JCB JS 130.jpeg" class="img_table">
            </th>
            <th class = "th_color">Гусеничный экскаватор JCB JS 130</th>
            <th>Эксплуатационная масса, 13300 кг <br>
            Объём ковша, 0.4 м3 <br>
            Макс. глубина копания, 5.3 м <br>
            Высота выгрузки экскаватора, 6.4 м</th>
            <th>от 14 500 руб.</th>
            <th>от 1 813 руб.</th>
        </tr>
        <tr>
        <th>
            <img src="../IMAGE/Price_Table/Гусеничный экскаватор Hitachi ZX160LC-5G.jpg" class="img_table">
        </th>
        <th class = "th_color">Гусеничный экскаватор Hitachi ZX160LC-5G</th>
        <th>Эксплуатационная масса, 16400 кг <br>
        Объём ковша, 0.8 м3 <br>
        Макс. глубина копания, 5.6 м <br>
        Высота выгрузки экскаватора, 6.7 м</th>
        <th>от 17 000 руб.</th>
        <th>от 2 125 руб.</th>
    </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Гусеничный экскаватор LiuGong 925E.png" class="img_table_png">
            </th>
            <th class = "th_color">Гусеничный экскаватор LiuGong 925E</th>
            <th>Эксплуатационная масса, 25600 кг <br>
            Объём ковша, 1.4 м3 <br>
            Макс. глубина копания, 6.6 м <br>
            Высота выгрузки экскаватора, 7.7 м</th>
            <th>от 21 000 руб.</th>
            <th>от 2 625 руб.</th>
        </tr>
        <th>
        <img src="../IMAGE/Price_Table/	Автокран Liebherr LTM 1400 — 400 тонн.jpg" class="img_table">
            </th>
            <th class = "th_color">	Автокран Liebherr LTM 1400 — 400 тонн</th>
            <th>Эксплуатационная масса, 84000 кг <br>
            Грузоподъёмность, 400 т <br>
            Максимальный вылет стрелы, 60 м <br>
            Гусек, 24 м</th>
            <th>от 172 000 руб.</th>
            <th>от 21 500 руб.</th>
        </tr>
    </table>`
        )
        flag1 = false;
        flag2 = true;
        flag3 = true;
        flag4 = true;
        flag5 = true;
        flag6 = true;
    }
}

document.getElementById('b2').onclick = function () {
    if (flag2) {

        let elem = document.querySelectorAll('.button2')
        for (let item of elem) {
            item.remove()
        }
        let elem2 = document.querySelectorAll('table')
        for (let item of elem2) {
            item.remove()
        }
        document.querySelector(".main1 .active").classList.remove('active')
        this.classList.add('active')
        document.getElementById('info').insertAdjacentHTML("beforeend",
            `<div class = "button2 active2" id="b2_1">
    <p>Гусеничные краны</p>
    </div>
    
    <div class = "button2" id="b2_2">
    <p>Автокраны</p>
    </div>

    <div class = "button2" id="b2_3">
    <p>Автовышки</p>
    </div>

    <div class = "button2" id="b2_4">
    <p>Автобетононасосы</p>
    </div>`
        )

        document.getElementById('info_table').insertAdjacentHTML("beforeend",
            `
<table>
        <tr>
            <th class = "th_z">Фото</th>
            <th class = "th_z">Наименование</th>
            <th class = "th_z">Характеристики</th>
            <th class = "th_z">Цена за смену</th>
            <th class = "th_z">Цена за час</th>
        </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Гусеничный кран XCMG XGC55.jpg" class="img_table_1_5">
            </th>
            <th class = "th_color">Гусеничный кран XCMG XGC55</th>
            <th>Эксплуатационная масса, 46300 кг <br>
            Грузоподъёмность, 55 т <br>
            Максимальный вылет стрелы, 29 м <br>
            Полез. мощность двигателя, 128 кВт</th>
            <th>от 49 000 руб.</th>
            <th>от 6 125 руб.</th>
        </tr>
        <tr>
        <th>
            <img src="../IMAGE/Price_Table/	Гусеничный кран XCMG XGC 75.jpg" class="img_table_1_5">
        </th>
        <th class = "th_color">Гусеничный кран XCMG XGC 75</th>
        <th>Эксплуатационная масса, 61000 кг <br>
        Грузоподъёмность, 75 т <br>
        Максимальный вылет стрелы, 48 м <br>
        Полез. мощность двигателя, 155 кВт</th>
        <th>от 57 000 руб.</th>
        <th>от 7 125 руб.</th>
        </tr>
        <th>
        <img src="../IMAGE/Price_Table/Гусеничный кран Kobelco CKE1800-1F.jpg" class="img_table_2_1">
        </th>
        <th class = "th_color">Гусеничный кран Kobelco CKE1800-1F</th>
        <th>Эксплуатационная масса, 171000 кг <br>
        Грузоподъёмность, 180 т <br>
        Максимальный вылет стрелы, 69 м <br>
        Полез. мощность двигателя, 247 кВт</th>
        <th>от 84 000 руб.</th>
        <th>от 10 500 руб.</th>
    </tr>
    </table>`
        )
        flag1 = true;
        flag2 = false;
        flag3 = true;
        flag4 = true;
        flag5 = true;
        flag6 = true;
    }
    else return
}

document.getElementById('b3').onclick = function () {
    if (flag3) {

        let elem = document.querySelectorAll('.button2')
        for (let item of elem) {
            item.remove()
        }
        document.querySelector(".main1 .active").classList.remove('active')
        this.classList.add('active')
        document.getElementById('info').insertAdjacentHTML("beforeend",
            `<div class = "button2 active2" id="b3_1">
    <p>Манипуляторы</p>
    </div>
    
    <div class = "button2" id="b3_2">
    <p>Автобетоносмесители</p>
    </div>

    <div class = "button2" id="b3_3">
    <p>Длинномеры</p>
    </div>`
        )

        let elem2 = document.querySelectorAll('table')
        for (let item of elem2) {
            item.remove()
        }
        document.getElementById('info_table').insertAdjacentHTML("beforeend",
            `
        <table>
        <tr>
            <th class = "th_z">Фото</th>
            <th class = "th_z">Наименование</th>
            <th class = "th_z">Характеристики</th>
            <th class = "th_z">Цена за смену</th>
            <th class = "th_z">Цена за час</th>
        </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Манипулятор RANGER, стрела 2.5 тонны, борт 3 тонны.jpg" class="img_table_3_1">
            </th>
            <th class = "th_color">Манипулятор RANGER, стрела 2.5 тонны, борт 3 тонны</th>
            <th>Эксплуатационная масса, 12200 кг <br>
            Грузоподъёмность, 3 т <br>
            Грузоподъемность стрелы, 2.5 т <br>
            Длина борта, 4.5 м</th>
            <th>от 10 000 руб.</th>
            <th>от 1 250 руб.</th>
        </tr>
        <tr>
        <th>
            <img src="../IMAGE/Price_Table/Манипулятор Isuzu Forward стрела 3 тонны, борт 5 тонн.png" class="img_table">
        </th>
        <th class = "th_color">Манипулятор Isuzu Forward стрела 3 тонны, борт 5 тонн</th>
        <th>Эксплуатационная масса, 13100 кг <br>
        Грузоподъёмность, 5 т <br>
        Грузоподъемность стрелы, 3 т <br>
        Длина борта, 6 м</th>
        <th>от 11 200 руб.</th>
        <th>от 1 400 руб.</th>
    </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Манипулятор Soosan со стрелой 10 тонн, бортом 14 тонн.jpg" class="img_table">
            </th>
            <th class = "th_color">Манипулятор Soosan со стрелой 10 тонн, бортом 14 тонн</th>
            <th>Эксплуатационная масса, 23200 кг <br>
            Грузоподъёмность, 14 т <br>
            Грузоподъемность стрелы, 10 т <br>
            Длина борта, 7.8 м</th>
            <th>от 17 000 руб.</th>
            <th>от 2 125 руб.</th>
        </tr>
    </table>`)
        flag1 = true;
        flag2 = true;
        flag3 = false;
        flag4 = true;
        flag5 = true;
        flag6 = true;
    }
    else return
}

document.getElementById('b4').onclick = function () {
    if (flag4) {

        let elem = document.querySelectorAll('.button2')
        for (let item of elem) {
            item.remove()
        }
        document.querySelector(".main1 .active").classList.remove('active')
        this.classList.add('active')
        document.getElementById('info').insertAdjacentHTML("beforeend",
            `<div class = "button2 active2" id="b4_1">
    <p>Катки</p>
    </div>
    
    <div class = "button2" id="b4_2">
    <p>Асфальтоукладчики</p>
    </div>

    <div class = "button2" id="b4_3">
    <p>Автогрейдеры</p>
    </div>

    <div class = "button2" id="b4_4">
    <p>Бульдозеры</p>
    </div>
    
    <div class = "button2" id="b4_5">
    <p>Дорожные фрезеры</p>
    </div>
    
    <div class = "button2" id="b4_6">
    <p>Компрессоры</p>
    </div>
    `
        )

        let elem2 = document.querySelectorAll('table')
        for (let item of elem2) {
            item.remove()
        }
        document.getElementById('info_table').insertAdjacentHTML("beforeend",
            `
        <table>
            <tr>
                <th>Фото444444411111</th>
                <th>Наименование</th>
                <th>Характеристики</th>
                <th>Цена за смену</th>
                <th>Цена за час</th>
            </tr>
            <tr>
                <th>
                    <img src="" class="img_table">
                </th>
                <th>Наименование</th>
                <th>Характеристики</th>
                <th>Цена за смену</th>
                <th>Цена за час</th>
            </tr>
            <tr>
                <th>
                    <img src="" class="img_table">
                </th>
                <th>Наименование</th>
                <th>Характеристики</th>
                <th>Цена за смену</th>
                <th>Цена за час</th>
            </tr>
        </table>`)
        flag1 = true;
        flag2 = true;
        flag3 = true;
        flag4 = false;
        flag5 = true;
        flag6 = true;
    }
    else return
}


document.getElementById('b5').onclick = function () {
    if (flag5) {

        let elem = document.querySelectorAll('.button2')
        for (let item of elem) {
            item.remove()
        }
        document.querySelector(".main1 .active").classList.remove('active')
        this.classList.add('active')
        document.getElementById('info').insertAdjacentHTML("beforeend",
            `<div class = "button2 active2" id="b5_1">
    <p>Погрузчики вилочные</p>
    </div>
    
    <div class = "button2" id="b5_2">
    <p>Мини погрузчики</p>
    </div>

    <div class = "button2" id="b5_3">
    <p>Фронтальные погрузчики</p>
    </div>

    <div class = "button2" id="b5_4">
    <p>Телескопические погрузчики</p>
    </div>
    `
        )

        let elem2 = document.querySelectorAll('table')
        for (let item of elem2) {
            item.remove()
        }
        document.getElementById('info_table').insertAdjacentHTML("beforeend",
            `
        <table>
            <tr>
                <th>Фото55555511111</th>
                <th>Наименование</th>
                <th>Характеристики</th>
                <th>Цена за смену</th>
                <th>Цена за час</th>
            </tr>
            <tr>
                <th>
                    <img src="" class="img_table">
                </th>
                <th>Наименование</th>
                <th>Характеристики</th>
                <th>Цена за смену</th>
                <th>Цена за час</th>
            </tr>
            <tr>
                <th>
                    <img src="" class="img_table">
                </th>
                <th>Наименование</th>
                <th>Характеристики</th>
                <th>Цена за смену</th>
                <th>Цена за час</th>
            </tr>
        </table>`)
        flag1 = true;
        flag2 = true;
        flag3 = true;
        flag4 = true;
        flag5 = false;
        flag6 = true;
    }
    else return
}


document.getElementById('b6').onclick = function () {
    if (flag6) {

        let elem = document.querySelectorAll('.button2')
        for (let item of elem) {
            item.remove()
        }
        document.querySelector(".main1 .active").classList.remove('active')
        this.classList.add('active')
        document.getElementById('info').insertAdjacentHTML("beforeend",
            `<div class = "button2 active2" id="b6_1">
    <p>Мусоровозы</p>
    </div>
    
    <div class = "button2" id="b6_2">
    <p>Илососы</p>
    </div>

    <div class = "button2" id="b6_3">
    <p>Поливомоечные машины</p>
    </div>

    <div class = "button2" id="b6_4">
    <p>Тракторы</p>
    </div>
    `
        )

        let elem2 = document.querySelectorAll('table')
        for (let item of elem2) {
            item.remove()
        }
        document.getElementById('info_table').insertAdjacentHTML("beforeend",
            `
        <table>
            <tr>
                <th>Фото666666611111</th>
                <th>Наименование</th>
                <th>Характеристики</th>
                <th>Цена за смену</th>
                <th>Цена за час</th>
            </tr>
            <tr>
                <th>
                    <img src="" class="img_table">
                </th>
                <th>Наименование</th>
                <th>Характеристики</th>
                <th>Цена за смену</th>
                <th>Цена за час</th>
            </tr>
            <tr>
                <th>
                    <img src="" class="img_table">
                </th>
                <th>Наименование</th>
                <th>Характеристики</th>
                <th>Цена за смену</th>
                <th>Цена за час</th>
            </tr>
        </table>`)
        flag1 = true;
        flag2 = true;
        flag3 = true;
        flag4 = true;
        flag5 = true;
        flag6 = false;
    }
    else return
}


// Функция для обработки клика на элементы в контейнере ПЕРВОЙ КНОПКИ
document.getElementById("info").addEventListener("click", function (event) {
    if (event.target.tagName === "DIV") {
        if (event.target.id === "b1_1") {
            //document.querySelector(".main2 .active2").classList.remove('active2')
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b1_1').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
            <table>
        <tr>
            <th class = "th_z">Фото</th>
            <th class = "th_z">Наименование</th>
            <th class = "th_z">Характеристики</th>
            <th class = "th_z">Цена за смену</th>
            <th class = "th_z">Цена за час</th>
        </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Гусеничный экскаватор JCB JS 130.jpeg" class="img_table">
            </th>
            <th class = "th_color">Гусеничный экскаватор JCB JS 130</th>
            <th>Эксплуатационная масса, 13300 кг <br>
            Объём ковша, 0.4 м3 <br>
            Макс. глубина копания, 5.3 м <br>
            Высота выгрузки экскаватора, 6.4 м</th>
            <th>от 14 500 руб.</th>
            <th>от 1 813 руб.</th>
        </tr>
        <tr>
        <th>
            <img src="../IMAGE/Price_Table/Гусеничный экскаватор Hitachi ZX160LC-5G.jpg" class="img_table">
        </th>
        <th class = "th_color">Гусеничный экскаватор Hitachi ZX160LC-5G</th>
        <th>Эксплуатационная масса, 16400 кг <br>
        Объём ковша, 0.8 м3 <br>
        Макс. глубина копания, 5.6 м <br>
        Высота выгрузки экскаватора, 6.7 м</th>
        <th>от 17 000 руб.</th>
        <th>от 2 125 руб.</th>
    </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Гусеничный экскаватор LiuGong 925E.png" class="img_table_png">
            </th>
            <th class = "th_color">Гусеничный экскаватор LiuGong 925E</th>
            <th>Эксплуатационная масса, 25600 кг <br>
            Объём ковша, 1.4 м3 <br>
            Макс. глубина копания, 6.6 м <br>
            Высота выгрузки экскаватора, 7.7 м</th>
            <th>от 21 000 руб.</th>
            <th>от 2 625 руб.</th>
        </tr>
    </table>`)
        }

        if (event.target.id === "b1_2") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b1_2').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
                <table>
                    <tr>
                        <th class = "th_z">Фото</th>
                        <th class = "th_z">Наименование</th>
                        <th class = "th_z">Характеристики</th>
                        <th class = "th_z">Цена за смену</th>
                        <th class = "th_z">Цена за час</th>
                    </tr>
                    <tr>
                        <th>
                            <img src="../IMAGE/Price_Table/Колесный экскаватор Wacker Neuson EW65.png" class="img_table">
                        </th>
                        <th class = "th_color">Колесный экскаватор Wacker Neuson EW65</th>
                        <th>Эксплуатационная масса, 8000 кг <br>
                        Объём ковша, 0.3 м3 <br>
                        Макс. глубина копания, 3.7 м <br>
                        Высота выгрузки экскаватора, 4.3 м</th>
                        <th>от 14 400 руб.</th>
                        <th>от 1 800 руб.</th>
                    </tr>
                    <tr>
                        <th>
                            <img src="../IMAGE/Price_Table/Колесный экскаватор Terex EK-18.jpg" class="img_table">
                        </th>
                        <th class = "th_color">Колесный экскаватор Terex EK-18</th>
                        <th>Эксплуатационная масса, 18280 кг <br>
                        Объём ковша, 1 м3 <br>
                        Макс. глубина копания, 5.9 м <br>
                        Высота выгрузки экскаватора, 7 м</th>
                        <th>от 16 100 руб.</th>
                        <th>от 2 013 руб.</th>
                    </tr>
                    <tr>
                        <th>
                            <img src="../IMAGE/Price_Table/	Колесный экскаватор CAT M322D2.png" class="img_table">
                        </th>
                        <th class = "th_color">Колесный экскаватор CAT M322D2</th>
                        <th>Эксплуатационная масса, 22500 кг <br>
                        Объём ковша, 1.2 м3 <br>
                        Макс. глубина копания, 6.6 м <br>
                        Высота выгрузки экскаватора, 7.7 м</th>
                        <th>от 17 500 руб.</th>
                        <th>от 2 188 руб.</th>
                    </tr>
                </table>`)
        }

        if (event.target.id === "b1_3") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b1_3').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
                <table>
        <tr>
            <th class = "th_z">Фото</th>
            <th class = "th_z">Наименование</th>
            <th class = "th_z">Характеристики</th>
            <th class = "th_z">Цена за смену</th>
            <th class = "th_z">Цена за час</th>
        </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Мини-экскаватор JCB 8018.jpg" class="img_table">
            </th>
            <th class = "th_color">Мини-экскаватор JCB 8018</th>
            <th>Эксплуатационная масса, 1822 кг <br>
            Объём ковша, 0.02 м3 <br>
            Макс. глубина копания, 2.5 м <br>
            Высота выгрузки экскаватора, 2.8 м</th>
            <th>от 13 000 руб.</th>
            <th>от 1 625 руб.</th>
        </tr>
        <tr>
        <th>
            <img src="../IMAGE/Price_Table/Мини-экскаватор JCB 8030 ZTS.png" class="img_table_png_1_3">
        </th>
        <th class = "th_color">Мини-экскаватор JCB 8030 ZTS</th>
        <th>Эксплуатационная масса, 2920 кг  <br>
        Объём ковша, 0.08 м3 <br>
        Макс. глубина копания, 2.9 м <br>
        Высота выгрузки экскаватора, 3.2 м</th>
        <th>от 14 000 руб.</th>
        <th>от 1 750 руб.</th>
    </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Мини-экскаватор Volvo ECR88 Plus.jpg" class="img_table">
            </th>
            <th class = "th_color">Мини-экскаватор Volvo ECR88 Plus</th>
            <th>Эксплуатационная масса, 8800 кг <br>
            Объём ковша, 0.4 м3 <br>
            Макс. глубина копания, 4.5 м <br>
            Высота выгрузки экскаватора, 4.8 м</th>
            <th>от 17 000 руб.</th>
            <th>от 2 125 руб.</th>
        </tr>
    </table>`)
        }

        if (event.target.id === "b1_4") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b1_4').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
            <table>
        <tr>
            <th class = "th_z">Фото</th>
            <th class = "th_z">Наименование</th>
            <th class = "th_z">Характеристики</th>
            <th class = "th_z">Цена за смену</th>
            <th class = "th_z">Цена за час</th>
        </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Экскаватор-погрузчик JCB 2CX.jpg" class="img_table_png_1_3">
            </th>
            <th class = "th_color">Экскаватор-погрузчик JCB 2CX</th>
            <th>Эксплуатационная масса, 5599 кг <br>
            Объем фронтального ковша, 0.8 м3 <br>
            Объем заднего ковша, 0.18 м3 <br>
            Макс. глубина копания, 3.7 м</th>
            <th>от 13 000 руб.</th>
            <th>от 1 625 руб.</th>
        </tr>
        <tr>
        <th>
            <img src="../IMAGE/Price_Table/Экскаватор-погрузчик JCB 3CX.png" class="img_table_1_4">
        </th>
        <th class = "th_color">Экскаватор-погрузчик JCB 3CX</th>
        <th>Эксплуатационная масса, 8070 кг <br>
        Объем фронтального ковша, 1 м3 <br>
        Объем заднего ковша, 0.2 м3 <br>
        Макс. глубина копания, 5 м</th>
        <th>от 15 000 руб.</th>
        <th>от 1 875 руб.</th>
    </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Экскаватор-погрузчик JCB 3CX с гидробуром.jpg" class="img_table_1_5">
            </th>
            <th class = "th_color">Экскаватор-погрузчик JCB 3CX с гидробуром</th>
            <th>Эксплуатационная масса, 8136 кг <br>
            Объем фронтального ковша, 1 м3 <br>
            Макс. глубина копания, 5 м <br>
            Диаметр бурения, 500 мм</th>
            <th>от 18 000 руб.</th>
            <th>от 2 250 руб.</th>
        </tr>
    </table>`)
        }

        if (event.target.id === "b1_5") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b1_5').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
             <table>
        <tr>
            <th class = "th_z">Фото</th>
            <th class = "th_z">Наименование</th>
            <th class = "th_z">Характеристики</th>
            <th class = "th_z">Цена за смену</th>
            <th class = "th_z">Цена за час</th>
        </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/	Экскаватор-разрушитель Komatsu PC340LC.jpg" class="img_table">
            </th>
            <th class = "th_color">Экскаватор-разрушитель Komatsu PC340LC</th>
            <th>Эксплуатационная масса, 32960 кг <br>
            Объём ковша, 1.8 м3 <br>
            Максимальный вылет стрелы, 14 м <br>
            Полез. мощность двигателя, 184 кВт</th>
            <th>от 76 000 руб.</th>
            <th>от 9 500 руб.</th>
        </tr>
        <tr>
        <th>
            <img src="../IMAGE/Price_Table/Экскаватор-разрушитель Volvo EC480D HR.png" class="img_table">
        </th>
        <th class = "th_color">Экскаватор-разрушитель Volvo EC480D HR</th>
        <th>Эксплуатационная масса, 51200 кг <br>
        Объём ковша, 2.6 м3 <br>
        Максимальный вылет стрелы, 26 м <br>
        Полез. мощность двигателя, 230 кВт</th>
        <th>от 99 000 руб.</th>
        <th>от 12 375 руб.</th>
    </tr>
    </table>`)
        }
    }
});


// Функция для обработки клика на элементы в контейнере ВТОРОЙ КНОПКИ
document.getElementById("info").addEventListener("click", function (event) {
    if (event.target.tagName === "DIV") {
        if (event.target.id === "b2_1") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b2_1').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
            <table>
        <tr>
            <th class = "th_z">Фото</th>
            <th class = "th_z">Наименование</th>
            <th class = "th_z">Характеристики</th>
            <th class = "th_z">Цена за смену</th>
            <th class = "th_z">Цена за час</th>
        </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Гусеничный кран XCMG XGC55.jpg" class="img_table_1_5">
            </th>
            <th class = "th_color">Гусеничный кран XCMG XGC55</th>
            <th>Эксплуатационная масса, 46300 кг <br>
            Грузоподъёмность, 55 т <br>
            Максимальный вылет стрелы, 29 м <br>
            Полез. мощность двигателя, 128 кВт</th>
            <th>от 49 000 руб.</th>
            <th>от 6 125 руб.</th>
        </tr>
        <tr>
        <th>
            <img src="../IMAGE/Price_Table/	Гусеничный кран XCMG XGC 75.jpg" class="img_table_1_5">
        </th>
        <th class = "th_color">Гусеничный кран XCMG XGC 75</th>
        <th>Эксплуатационная масса, 61000 кг <br>
        Грузоподъёмность, 75 т <br>
        Максимальный вылет стрелы, 48 м <br>
        Полез. мощность двигателя, 155 кВт</th>
        <th>от 57 000 руб.</th>
        <th>от 7 125 руб.</th>
        </tr>
        <th>
        <img src="../IMAGE/Price_Table/Гусеничный кран Kobelco CKE1800-1F.jpg" class="img_table_2_1">
        </th>
        <th class = "th_color">Гусеничный кран Kobelco CKE1800-1F</th>
        <th>Эксплуатационная масса, 171000 кг <br>
        Грузоподъёмность, 180 т <br>
        Максимальный вылет стрелы, 69 м <br>
        Полез. мощность двигателя, 247 кВт</th>
        <th>от 84 000 руб.</th>
        <th>от 10 500 руб.</th>
    </tr>
    </table>`)
        }

        if (event.target.id === "b2_2") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b2_2').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
                <table>
        <tr>
            <th class = "th_z">Фото</th>
            <th class = "th_z">Наименование</th>
            <th class = "th_z">Характеристики</th>
            <th class = "th_z">Цена за смену</th>
            <th class = "th_z">Цена за час</th>
        </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Автокран-вездеход Ивановец — 14 тонн.jpg" class="img_table">
            </th>
            <th class = "th_color">Автокран-вездеход Ивановец — 14 тонн</th>
            <th>Эксплуатационная масса, 16200 кг <br>
            Грузоподъёмность, 14 т <br>
            Максимальный вылет стрелы, 14 м <br>
            Гусек, 7 м</th>
            <th>от 12 000 руб.</th>
            <th>от 1 500 руб.</th>
        </tr>
        <tr>
        <th>
            <img src="../IMAGE/Price_Table/Автокран Галичанин — 32 тонны.jpg" class="img_table">
        </th>
        <th class = "th_color">Автокран Галичанин — 32 тонны</th>
        <th>Эксплуатационная масса, 28300 кг <br>
        Грузоподъёмность, 32 т <br>
        Максимальный вылет стрелы, 31 м <br>
        Гусек, 9 м</th>
        <th>от 19 000 руб.</th>
        <th>от 2 375 руб.</th>
        </tr>
        <th>
        <img src="../IMAGE/Price_Table/Автокран Liebherr LTM 1100 — 100 тонн.jpg" class="img_table">
        </th>
        <th class = "th_color">Автокран Liebherr LTM 1100 — 100 тонн</th>
        <th>Эксплуатационная масса, 54000 кг <br>
        Грузоподъёмность, 100 т <br>
        Максимальный вылет стрелы, 60 м <br>
        Гусек, 33 м</th>
        <th>от 87 000 руб.</th>
        <th>от 10 875 руб.</th>
    </tr>
    <th>
    <img src="../IMAGE/Price_Table/	Автокран Liebherr LTM 1400 — 400 тонн.jpg" class="img_table">
        </th>
        <th class = "th_color">	Автокран Liebherr LTM 1400 — 400 тонн</th>
        <th>Эксплуатационная масса, 84000 кг <br>
        Грузоподъёмность, 400 т <br>
        Максимальный вылет стрелы, 60 м <br>
        Гусек, 24 м</th>
        <th>от 172 000 руб.</th>
        <th>от 21 500 руб.</th>
    </tr>
    </table>`)
        }

        if (event.target.id === "b2_3") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b2_3').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
                <table>
        <tr>
            <th class = "th_z">Фото</th>
            <th class = "th_z">Наименование</th>
            <th class = "th_z">Характеристики</th>
            <th class = "th_z">Цена за смену</th>
            <th class = "th_z">Цена за час</th>
        </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Японская автовышка 15 метров.png" class="img_table_png">
            </th>
            <th class = "th_color">Японская автовышка 15 метров</th>
            <th>Эксплуатационная масса, 6100 кг <br>
            Высота подъема люльки, 15 м <br>
            Максимальная грузоподъемность люльки, 200 кг <br>
            Угол поворота стрелы, 360 град.</th>
            <th>от 9 700 руб.</th>
            <th>от 1 213 руб.</th>
        </tr>
        <tr>
        <th>
            <img src="../IMAGE/Price_Table/Японская автовышка 22 метра.png" class="img_table">
        </th>
        <th class = "th_color">Японская автовышка 22 метра</th>
        <th>Эксплуатационная масса, 7300 кг <br>
        Высота подъема люльки, 22 м <br>
        Максимальная грузоподъемность люльки, 250 кг <br>
        Угол поворота стрелы, 360 град.</th>
        <th>от 13 000 руб.</th>
        <th>от 1 625 руб.</th>
    </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Автовышка вездеход Horyong 40 метров.jpg" class="img_table">
            </th>
            <th class = "th_color">Автовышка вездеход Horyong 40 метров</th>
            <th>Эксплуатационная масса, 20300 кг <br>
            Высота подъема люльки, 40 м <br>
            Максимальная грузоподъемность люльки, 350 кг <br>
            Угол поворота стрелы, 360 град.</th>
            <th>от 24 000 руб.</th>
            <th>от 3 000 руб.</th>
        </tr>
    </table>`)
        }

        if (event.target.id === "b2_4") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b2_4').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
            <table>
        <tr>
            <th class = "th_z">Фото</th>
            <th class = "th_z">Наименование</th>
            <th class = "th_z">Характеристики</th>
            <th class = "th_z">Цена за смену</th>
            <th class = "th_z">Цена за час</th>
        </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Стационарный бетононасос Putzmeister BSA 1005D.jpg" class="img_table">
            </th>
            <th class = "th_color">Стационарный бетононасос Putzmeister BSA 1005D</th>
            <th>Эксплуатационная масса, 3500 кг <br>
            Высота подачи, 50 м <br>
            Дальность подачи, 100 м <br>
            Рабочее давление, 57 МПа</th>
            <th>от 12 000 руб.</th>
            <th>от 1 500 руб.</th>
        </tr>
        <tr>
        <th>
            <img src="../IMAGE/Price_Table/Бетононасос MERCEDES Putzmeister — 28 м.jpg" class="img_table">
        </th>
        <th class = "th_color">Бетононасос MERCEDES Putzmeister — 28 м</th>
        <th>Эксплуатационная масса, 26000 кг <br>
        Высота подачи, 28 м <br>
        Дальность подачи, 25 м <br>
        Полез. мощность двигателя, 215 кВт</th>
        <th>от 25 000 руб.</th>
        <th>от 3 125 руб.</th>
    </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Стреловой бетононасос Jun Jin JJRZ52-516HP.jpg" class="img_table">
            </th>
            <th class = "th_color">Стреловой бетононасос Jun Jin JJRZ52-5.16HP</th>
            <th>Эксплуатационная масса, 51200 кг <br>
            Высота подачи, 52 м <br>
            Дальность подачи, 49 м <br>
            Полез. мощность двигателя, 273 кВт</th>
            <th>от 55 000 руб.</th>
            <th>от 6 875 руб.</th>
        </tr>
    </table>`)
        }
    }
});


// Функция для обработки клика на элементы в контейнере 3 КНОПКИ
document.getElementById("info").addEventListener("click", function (event) {
    if (event.target.tagName === "DIV") {
        if (event.target.id === "b3_1") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b3_1').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
           <table>
        <tr>
            <th class = "th_z">Фото</th>
            <th class = "th_z">Наименование</th>
            <th class = "th_z">Характеристики</th>
            <th class = "th_z">Цена за смену</th>
            <th class = "th_z">Цена за час</th>
        </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Манипулятор RANGER, стрела 2.5 тонны, борт 3 тонны.jpg" class="img_table_3_1">
            </th>
            <th class = "th_color">Манипулятор RANGER, стрела 2.5 тонны, борт 3 тонны</th>
            <th>Эксплуатационная масса, 12200 кг <br>
            Грузоподъёмность, 3 т <br>
            Грузоподъемность стрелы, 2.5 т <br>
            Длина борта, 4.5 м</th>
            <th>от 10 000 руб.</th>
            <th>от 1 250 руб.</th>
        </tr>
        <tr>
        <th>
            <img src="../IMAGE/Price_Table/Манипулятор Isuzu Forward стрела 3 тонны, борт 5 тонн.png" class="img_table">
        </th>
        <th class = "th_color">Манипулятор Isuzu Forward стрела 3 тонны, борт 5 тонн</th>
        <th>Эксплуатационная масса, 13100 кг <br>
        Грузоподъёмность, 5 т <br>
        Грузоподъемность стрелы, 3 т <br>
        Длина борта, 6 м</th>
        <th>от 11 200 руб.</th>
        <th>от 1 400 руб.</th>
    </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Манипулятор Soosan со стрелой 10 тонн, бортом 14 тонн.jpg" class="img_table">
            </th>
            <th class = "th_color">Манипулятор Soosan со стрелой 10 тонн, бортом 14 тонн</th>
            <th>Эксплуатационная масса, 23200 кг <br>
            Грузоподъёмность, 14 т <br>
            Грузоподъемность стрелы, 10 т <br>
            Длина борта, 7.8 м</th>
            <th>от 17 000 руб.</th>
            <th>от 2 125 руб.</th>
        </tr>
    </table>`)
        }

        if (event.target.id === "b3_2") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b3_2').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
                <table>
        <tr>
            <th class = "th_z">Фото</th>
            <th class = "th_z">Наименование</th>
            <th class = "th_z">Характеристики</th>
            <th class = "th_z">Цена за смену</th>
            <th class = "th_z">Цена за час</th>
        </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Автобетоносмеситель Tigarbo 7DA на шасси КамАЗ 53229.jpg" class="img_table">
            </th>
            <th class = "th_color">Автобетоносмеситель Tigarbo 7DA на шасси КамАЗ 53229</th>
            <th>Эксплуатационная масса, 12500 кг <br>
            Объем смесийного барабана, 7 м3 <br>
            Скорость передвижения, 60 км/ч <br>
            Полез. мощность двигателя, 240 кВт</th>
            <th>от 14 500 руб.</th>
            <th>от 1 813 руб.</th>
        </tr>
        <tr>
        <th>
            <img src="../IMAGE/Price_Table/	Автобетоносмеситель Shacman SX5256GJBDR 384.jpeg" class="img_table">
        </th>
        <th class = "th_color">	Автобетоносмеситель Shacman SX5256GJBDR 384</th>
        <th>Эксплуатационная масса, 14850 кг <br>
        Объем смесийного барабана, 10 м3 <br>
        Скорость передвижения, 70 км/ч <br>
        Полез. мощность двигателя, 260 кВт</th>
        <th>от 17 500 руб.</th>
        <th>от 2 188 руб.</th>
    </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/	Авто­бетоно­смеситель CIFA SLX 8.png" class="img_table">
            </th>
            <th class = "th_color">	Авто­бетоно­смеситель CIFA SLX 8</th>
            <th>Эксплуатационная масса, 15500 кг <br>
            Объем смесийного барабана, 14 м3 <br>
            Скорость передвижения, 75 км/ч <br>
            Полез. мощность двигателя, 273 кВт</th>
            <th>от 18 500 руб.</th>
            <th>от 2 313 руб.</th>
        </tr>
    </table>`)
        }

        if (event.target.id === "b3_3") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b3_3').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
                <table>
        <tr>
            <th class = "th_z">Фото</th>
            <th class = "th_z">Наименование</th>
            <th class = "th_z">Характеристики</th>
            <th class = "th_z">Цена за смену</th>
            <th class = "th_z">Цена за час</th>
        </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Длинномер Газель 6 метров.jpg" class="img_table">
            </th>
            <th class = "th_color">Длинномер Газель 6 метров</th>
            <th>Эксплуатационная масса, 3500 кг <br>
            Грузоподъёмность, 3 т <br>
            Длина борта, 6 м <br>
            Полез. мощность двигателя, 110 кВт</th>
            <th>от 10 000 руб.</th>
            <th>от 1 250 руб.</th>
        </tr>
        <tr>
        <th>
            <img src="../IMAGE/Price_Table/Длинномер Volvo 12 метров.jpg" class="img_table">
        </th>
        <th class = "th_color">Длинномер Volvo 12 метров</th>
        <th>Эксплуатационная масса, 26700 кг <br>
        Грузоподъёмность, 20 т <br>
        Длина борта, 12 м <br>
        Полез. мощность двигателя, 233 кВт</th>
        <th>от 14 000 руб.</th>
        <th>от 1 750 руб.</th>
    </tr>
        <tr>
            <th>
                <img src="../IMAGE/Price_Table/Длинномер-вездеход КАМАЗ 12 метров.png" class="img_table">
            </th>
            <th class = "th_color">Длинномер-вездеход КАМАЗ 12 метров</th>
            <th>Эксплуатационная масса, 26100 кг <br>
            Грузоподъёмность, 20 т <br>
            Длина борта, 12 м <br>
            Полез. мощность двигателя, 219 кВт</th>
            <th>от 16 000 руб.</th>
            <th>от 2 000 руб.</th>
        </tr>
    </table>`)
        }
    }
});


// Функция для обработки клика на элементы в контейнере 4 КНОПКИ
document.getElementById("info").addEventListener("click", function (event) {
    if (event.target.tagName === "DIV") {
        if (event.target.id === "b4_1") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b4_1').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
            <table>
                <tr>
                    <th>Фото444444411111</th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
                <tr>
                    <th>
                        <img src="" class="img_table">
                    </th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
                <tr>
                    <th>
                        <img src="" class="img_table">
                    </th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
            </table>`)
        }

        if (event.target.id === "b4_2") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b4_2').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
                <table>
                    <tr>
                        <th>Фото444444442222</th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                    <tr>
                        <th>
                            <img src="" class="img_table">
                        </th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                    <tr>
                        <th>
                            <img src="" class="img_table">
                        </th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                </table>`)
        }

        if (event.target.id === "b4_3") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b4_3').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
                <table>
                    <tr>
                        <th>Фото44444444443333</th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                    <tr>
                        <th>
                            <img src="" class="img_table">
                        </th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                    <tr>
                        <th>
                            <img src="" class="img_table">
                        </th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                </table>`)
        }

        if (event.target.id === "b4_4") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b4_4').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
            <table>
                <tr>
                    <th>Фото44444444444</th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
                <tr>
                    <th>
                        <img src="" class="img_table">
                    </th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
                <tr>
                    <th>
                        <img src="" class="img_table">
                    </th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
            </table>`)
        }

        if (event.target.id === "b4_5") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b4_5').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
            <table>
                <tr>
                    <th>Фото44444455555</th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
                <tr>
                    <th>
                        <img src="" class="img_table">
                    </th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
                <tr>
                    <th>
                        <img src="" class="img_table">
                    </th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
            </table>`)
        }

        if (event.target.id === "b4_6") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b4_6').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
            <table>
                <tr>
                    <th>Фото44444466666666</th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
                <tr>
                    <th>
                        <img src="" class="img_table">
                    </th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
                <tr>
                    <th>
                        <img src="" class="img_table">
                    </th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
            </table>`)
        }
    }
});


// Функция для обработки клика на элементы в контейнере 5 КНОПКИ
document.getElementById("info").addEventListener("click", function (event) {
    if (event.target.tagName === "DIV") {
        if (event.target.id === "b5_1") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b5_1').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
            <table>
                <tr>
                    <th>Фото55555511111</th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
                <tr>
                    <th>
                        <img src="" class="img_table">
                    </th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
                <tr>
                    <th>
                        <img src="" class="img_table">
                    </th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
            </table>`)
        }

        if (event.target.id === "b5_2") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b5_2').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
                <table>
                    <tr>
                        <th>Фото5555552222</th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                    <tr>
                        <th>
                            <img src="" class="img_table">
                        </th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                    <tr>
                        <th>
                            <img src="" class="img_table">
                        </th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                </table>`)
        }

        if (event.target.id === "b5_3") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b5_3').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
                <table>
                    <tr>
                        <th>Фото555555533333</th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                    <tr>
                        <th>
                            <img src="" class="img_table">
                        </th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                    <tr>
                        <th>
                            <img src="" class="img_table">
                        </th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                </table>`)
        }

        if (event.target.id === "b5_4") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b5_4').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
            <table>
                <tr>
                    <th>Фото555555544444</th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
                <tr>
                    <th>
                        <img src="" class="img_table">
                    </th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
                <tr>
                    <th>
                        <img src="" class="img_table">
                    </th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
            </table>`)
        }
    }
});



// Функция для обработки клика на элементы в контейнере 6 КНОПКИ
document.getElementById("info").addEventListener("click", function (event) {
    if (event.target.tagName === "DIV") {
        if (event.target.id === "b6_1") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b6_1').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
            <table>
                <tr>
                    <th>Фото666666611111</th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
                <tr>
                    <th>
                        <img src="" class="img_table">
                    </th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
                <tr>
                    <th>
                        <img src="" class="img_table">
                    </th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
            </table>`)
        }

        if (event.target.id === "b6_2") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b6_2').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
                <table>
                    <tr>
                        <th>Фото666666662222</th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                    <tr>
                        <th>
                            <img src="" class="img_table">
                        </th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                    <tr>
                        <th>
                            <img src="" class="img_table">
                        </th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                </table>`)
        }

        if (event.target.id === "b6_3") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b6_3').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
                <table>
                    <tr>
                        <th>Фото6666666633333</th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                    <tr>
                        <th>
                            <img src="" class="img_table">
                        </th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                    <tr>
                        <th>
                            <img src="" class="img_table">
                        </th>
                        <th>Наименование</th>
                        <th>Характеристики</th>
                        <th>Цена за смену</th>
                        <th>Цена за час</th>
                    </tr>
                </table>`)
        }

        if (event.target.id === "b6_4") {
            document.querySelector(".main2 .active2").classList.remove('active2')
            document.getElementById('b6_4').classList.add('active2')
            let elem = document.querySelectorAll('table')
            for (let item of elem) {
                item.remove()
            }
            document.getElementById('info_table').insertAdjacentHTML("beforeend",
                `
            <table>
                <tr>
                    <th>Фото66666666644444</th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
                <tr>
                    <th>
                        <img src="" class="img_table">
                    </th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
                <tr>
                    <th>
                        <img src="" class="img_table">
                    </th>
                    <th>Наименование</th>
                    <th>Характеристики</th>
                    <th>Цена за смену</th>
                    <th>Цена за час</th>
                </tr>
            </table>`)
        }
    }
});


// // Функция для обработки клика на элементы в контейнере 6 КНОПКИ
// document.getElementById("info").addEventListener("click", function (event) {
//     if (event.target.tagName === "DIV") {
//         if (event.target.id === "b1_2") {
           
//         }
//     }
// });