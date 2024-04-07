let flag = false;
    let flag1 = true;
    let flag2 = true;
    let flag3 = true;
    let flag4 = true;
    let flag5 = true;

    // let btns = document.querySelectorAll('.button')
    // for (let btn of btns) {
    //   btn.onclick = function(){
    //     document.querySelector(".main .active").classList.remove('active')
    //     this.classList.add('active')
    //     }
    // }
   
    document.getElementById('info').insertAdjacentHTML("beforeend",
    `<div class = "teh1">
        <div class = "teh">
        <img src="../imag/1.1.jpg" class = "imgsize1">
        <p class = "ots1">Гусеничные экскаваторы</p>
        <p class = "ots">от <b>14 000</b> рублей</p>
        </div>
    </div>
    
    <div class = "teh1">
        <div class = "teh">
        <img src="../imag/1.2.jpg" class = "imgsize1">
        <p class = "ots1">Колёсные экскаваторы</p>
        <p class = "ots">от <b>14 500</b> рублей</p>
        </div>
    </div>

    <div class = "teh1">
        <div class = "teh">
        <img src="../imag/1.3.jpg" class = "imgsize1">
        <p class = "ots1">Мини-экскаваторы</p>
        <p class = "ots">от <b>15 000</b> рублей</p>
        </div>
    </div>

    <div class = "teh1">
        <div class = "teh">
        <img src="../imag/1.4.jpg" class = "imgsize1">
        <p class = "ots1">Экскаваторы-погрузчики</p>
        <p class = "ots">от <b>13 000</b> рублей</p>
        </div>
    </div>

    <div class = "teh1">
        <div class = "teh">
        <img src="../imag/1.5.jpg" class = "imgsize1">
        <p class = "ots1" >Яморубы</p>
        <p class = "ots">от <b>16 000</b> рублей</p>
        </div>
    </div>
    `)
    flag = false;
    flag1 = true;
    flag2 = true;
    flag3 = true;
    flag4 = true;
    flag5 = true;

    document.getElementById('b1').onclick =  function(){
        if(flag){
            
            let elem = document.querySelectorAll('.teh1')
            for (let item of elem) {
                 item.remove()
            }
        document.querySelector(".main .active").classList.remove('active')
        this.classList.add('active')
        document.getElementById('info').insertAdjacentHTML("beforeend",
        `<div class = "teh1">
            <div class = "teh">
            <img src="../imag/1.1.jpg" class = "imgsize1">
            <p class = "ots1">Гусеничные экскаваторы</p>
            <p class = "ots">от <b>14 000</b> рублей</p>
            </div>
        </div>
        
        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/1.2.jpg" class = "imgsize1">
            <p class = "ots1">Колёсные экскаваторы</p>
            <p class = "ots">от <b>14 500</b> рублей</p>
            </div>
        </div>

        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/1.3.jpg" class = "imgsize1">
            <p class = "ots1">Мини-экскаваторы</p>
            <p class = "ots">от <b>15 000</b> рублей</p>
            </div>
        </div>

        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/1.4.jpg" class = "imgsize1">
            <p class = "ots1">Экскаваторы-погрузчики</p>
            <p class = "ots">от <b>13 000</b> рублей</p>
            </div>
        </div>

        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/1.5.jpg" class = "imgsize1">
            <p class = "ots1" >Яморубы</p>
            <p class = "ots">от <b>16 000</b> рублей</p>
            </div>
        </div>
        `)
        flag = false;
        flag1 = true;
        flag2 = true;
        flag3 = true;
        flag4 = true;
        flag5 = true;
        
    }
    else return
    }

    document.getElementById('b2').onclick =  function(){
        if(flag1){
      
        let elem = document.querySelectorAll('.teh1')
        for (let item of elem) {
             item.remove()
        }
        document.querySelector(".main .active").classList.remove('active')
        this.classList.add('active')
        document.getElementById('info').insertAdjacentHTML("beforeend",
        `<div class = "teh1">
            <div class = "teh">
            <img src="../imag/2.1.jpg" class = "imgsize1">
            <p class = "ots1">Гусеничные краны</p>
            <p class = "ots">от <b>17 000 рублей</b></p>
            </div>
        </div>
        
        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/2.2.jpg" class = "imgsize1">
            <p class = "ots1">Автокраны</p>
            <p class = "ots">от <b>9 500</b> рублей</p>
            </div>
        </div>

        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/2.3.jpg" class = "imgsize1">
            <p class = "ots1">Автовышки</p>
            <p class = "ots">от <b>9 000</b> рублей</p>
            </div>
        </div>

        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/2.4.jpg" class = "imgsize1">
            <p class = "ots1">Автобетононасосы</p>
            <p class = "ots">от <b>13 000</b> рублей</p>
            </div>
        </div>
        `)
        flag = true;
        flag1 = false;
        flag2 = true;
        flag3 = true;
        flag4 = true;
        flag5 = true;
    }
    else return
    }

    document.getElementById('b3').onclick =  function(){
        if(flag2){
        
        let elem = document.querySelectorAll('.teh1')
        for (let item of elem) {
             item.remove()
        }
        document.querySelector(".main .active").classList.remove('active')
        this.classList.add('active')
        document.getElementById('info').insertAdjacentHTML("beforeend",
        `<div class = "teh1">
            <div class = "teh">
            <img src="../imag/3.1.jpg" class = "imgsize1">
            <p class = "ots1">Манипуляторы</p>
            <p class = "ots">от <b>10 000</b> рублей</p>
            </div>
        </div>
        
        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/3.2.jpg" class = "imgsize1">
            <p class = "ots1">Автобетоносмесители</p>
            <p class = "ots">от <b>14 000</b> рублей</p>
            </div>
        </div>

        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/3.3.jpg" class = "imgsize1">
            <p class = "ots1">Длинномеры</p>
            <p class = "ots">от <b>11 000</b> рублей</p>
            </div>
        </div>

        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/3.4.jpg" class = "imgsize1">
            <p class = "ots1">Самосвалы</p>
            <p class = "ots">от <b>10 000</b> рублей</p>
            </div>
        </div>

        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/3.5.jpg" class = "imgsize1">
            <p class = "ots1">Тралы</p>
            <p class = "ots">от <b>17 000</b> рублей</p>
            </div>
        </div>
        `)
        flag = true;
        flag1 = true;
        flag2 = false;
        flag3 = true;
        flag4 = true;
        flag5 = true;
    }
    else return
    }

    document.getElementById('b4').onclick =  function(){
        if(flag3){
        
        let elem = document.querySelectorAll('.teh1')
        for (let item of elem) {
             item.remove()
        }
        document.querySelector(".main .active").classList.remove('active')
        this.classList.add('active')
        document.getElementById('info').insertAdjacentHTML("beforeend",
        `<div class = "teh1">
            <div class = "teh">
            <img src="../imag/4.1.jpg" class = "imgsize1">
            <p class = "ots1">Катки</p>
            <p class = "ots">от <b>11 000</b> рублей</p>
            </div>
        </div>
        
        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/4.2.jpg" class = "imgsize1">
            <p class = "ots1">Асфальтоукладчики</p>
            <p class = "ots">от <b>50 000</b> рублей</p>
            </div>
        </div>

        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/4.3.jpg" class = "imgsize1">
            <p class = "ots1">Автогрейдеры</p>
            <p class = "ots">от <b>15 000</b> рублей</p>
            </div>
        </div>

        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/4.4.jpg" class = "imgsize1">
            <p class = "ots1">Бульдозеры</p>
            <p class = "ots">от <b>16 000</b> рублей</p>
            </div>
        </div>

        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/4.5.jpg" class = "imgsize1">
            <p class = "ots1">Дорожные фрезеры</p>
            <p class = "ots">от <b>35 000</b> рублей</p>
            </div>
        </div>

        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/4.6.jpg" class = "imgsize1">
            <p class = "ots1">Компрессоры</p>
            <p class = "ots">от <b>13 000</b> рублей</p>
            </div>
        </div>
        `)
        flag = true;
        flag1 = true;
        flag2 = true;
        flag3 = false;
        flag4 = true;
        flag5 = true;
    }
    else return
    }

    document.getElementById('b5').onclick =  function(){
        if(flag4){
        
        let elem = document.querySelectorAll('.teh1')
        for (let item of elem) {
             item.remove()
        }
        document.querySelector(".main .active").classList.remove('active')
        this.classList.add('active')
        document.getElementById('info').insertAdjacentHTML("beforeend",
        `<div class = "teh1">
            <div class = "teh">
            <img src="../imag/5.1.jpg" class = "imgsize1">
            <p class = "ots1">Погрузчики вилочные</p>
            <p class = "ots">от <b>8 000</b> рублей</p>
            </div>
        </div>
        
        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/5.2.jpg" class = "imgsize1">
            <p class = "ots1">Мини погрузчики</p>
            <p class = "ots">от <b>12 000</b> рублей</p>
            </div>
        </div>

        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/5.3.jpg" class = "imgsize1">
            <p class = "ots1">Фронтальные погрузчики</p>
            <p class = "ots">от <b>15 500</b> рублей</p>
            </div>
        </div>

        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/5.4.jpg" class = "imgsize1">
            <p class = "ots1">Телескопические погрузчики</p>
            <p class = "ots">от <b>13 000</b> рублей</p>
            </div>
        </div>
        `)
        flag = true;
        flag1 = true;
        flag2 = true;
        flag3 = true;
        flag4 = false;
        flag5 = true;
    }
    else return
    }

    document.getElementById('b6').onclick =  function(){
        if(flag5){
        
        let elem = document.querySelectorAll('.teh1')
        for (let item of elem) {
             item.remove()
        }
        document.querySelector(".main .active").classList.remove('active')
        this.classList.add('active')
        document.getElementById('info').insertAdjacentHTML("beforeend",
        `<div class = "teh1">
            <div class = "teh">
            <img src="../imag/6.1.jpg" class = "imgsize1">
            <p class = "ots1">Мусоровозы</p>
            <p class = "ots">от <b>14 000</b> рублей</p>
            </div>
        </div>
        
        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/6.2.jpg" class = "imgsize1">
            <p class = "ots1">Илососы</p>
            <p class = "ots">от <b>15 000</b> рублей</p>
            </div>
        </div>

        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/6.3.jpg" class = "imgsize1">
            <p class = "ots1">Поливомоечные машины</p>
            <p class = "ots">от <b>10 700</b> рублей</p>
            </div>
        </div>

        <div class = "teh1">
            <div class = "teh">
            <img src="../imag/6.4.jpg" class = "imgsize1">
            <p class = "ots1">Тракторы</p>
            <p class = "ots">от <b>13 000</b> рублей</p>
            </div>
        </div>
        `)
        flag = true;
        flag1 = true;
        flag2 = true;
        flag3 = true;
        flag4 = true;
        flag5 = false;
    }
    else return
    }