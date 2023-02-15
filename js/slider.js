function slider(){
const sliderItemImgs = document.querySelectorAll('.slider__item img'),
      sliderItem = document.querySelector('.slider__item'),
      paginations = document.querySelectorAll('.slider__pagination-item'),
      sliderWraper = document.querySelector('.slider__wraper'),
      sliderItemMargin = +window.getComputedStyle(document.querySelector('.slider__item'))
      .margin.replace(/[^\d;]/g, '').slice(1) * 2, // марджин между слайдам 
      sliderBlockArrow = document.querySelector('.slider-block__arrow'), //блок стрелок
      sliderBlockArrowPrev = document.querySelector('.slider-block__arrow-prev'),
      sliderBlockArrowNext = document.querySelector('.slider-block__arrow-next'),
      sliderArrowLeft = document.querySelector('.slider__arrow-left'),
      sliderArrowRight = document.querySelector('.slider__arrow-right');

let   widthOneSlideImg,
      width;

    width = document.querySelector('.slider').offsetWidth; // 1440
    widthOneSlideImg = sliderItemImgs[0].offsetWidth; // 800 
    
    let middleOfTheSlide = width / 2; //720
    if(width > 1440){
        sliderWraper.style.left = 720 + 'px';
    }else{
        sliderWraper.style.left = middleOfTheSlide + 'px'; //Записываем в позишин left 
    }
    
    let sliderWraperAll = widthOneSlideImg * sliderItemImgs.length + 
    (sliderItemImgs.length *  sliderItemMargin); // полный размер слайдера 
   
    function blockArrowTime() {
        sliderBlockArrow.style.height = sliderItem.clientHeight + 'px'; // задаёт высото блокам стрелкам
        //при изминении высоты
        sliderBlockArrowPrev.style.height = sliderItem.clientHeight + 'px';
        sliderBlockArrowNext.style.height = sliderItem.clientHeight + 'px';
    }
    setTimeout(blockArrowTime, 100);

    /* пагинация счётчик*/
    let countPagination = Math.floor(sliderItemImgs.length / 2);
   /* пагинация  счётчик*/

////-----------------------------------------------------------------------
//// сдвиг слайда старт 

    let slideShift = widthOneSlideImg + sliderItemMargin, // сдвиг слайда 860px
        sumLeftPosition = middleOfTheSlide,
        prevOffsetEdge,
        nextOffsetEdge;

    function btnPrevFun(e) {
    e.preventDefault();
/* пагинация счётчик start*/
    countPagination--;
    console.log(countPagination);
    if(countPagination < 0){
        countPagination = paginations.length -1;
    }
    paginations.forEach((item, ind) => {

        if(ind === countPagination){
            item.classList.add('slider__pagination-active');
        }else{
            item.classList.remove('slider__pagination-active');
        }
    });
/* пагинация счётчик end*/
        document.querySelector('.slider-block__arrow-prev-svg').style.display = 'none';
        document.querySelector('.slider-block__arrow-next-svg').style.display = 'none';
        prevOffsetEdge = (sliderWraperAll  - (widthOneSlideImg + sliderItemMargin)) / 2 + middleOfTheSlide; //+
        nextOffsetEdge = middleOfTheSlide - (sliderWraperAll  - (widthOneSlideImg + sliderItemMargin)) / 2; //-

        if(sumLeftPosition === 720){
            sumLeftPosition +=  slideShift;
            sliderWraper.style.left =  sumLeftPosition + 'px';

            if (sliderItemImgs.length === 3){
                if (sumLeftPosition === prevOffsetEdge){
                    document.querySelector('.slider-block__arrow-prev-svg').style.display = 'flex';
                }
            }

        }else if (sumLeftPosition === prevOffsetEdge){
            sumLeftPosition = nextOffsetEdge;
            console.log(sumLeftPosition);
            sliderWraper.style.left = sumLeftPosition + 'px';
            if (parseInt(sliderWraper.style.left) === nextOffsetEdge){
                console.log(nextOffsetEdge);
                document.querySelector('.slider-block__arrow-prev-svg').style.display = 'none';
                document.querySelector('.slider-block__arrow-next-svg').style.display = 'flex';
            }
        } else {
            sumLeftPosition += slideShift;
            sliderWraper.style.left =  sumLeftPosition + 'px';
            if(parseInt(sliderWraper.style.left) === prevOffsetEdge){
                document.querySelector('.slider-block__arrow-prev-svg').style.display = 'flex';
            }
        }

    }

    function btnNextFun(e) {
        e.preventDefault();
/* пагинация счётчик start*/
        countPagination++;
        if(countPagination > paginations.length - 1){
            countPagination = 0;
        }
        paginations.forEach((item, ind) => {

            if(ind === countPagination){
                item.classList.add('slider__pagination-active');
            }else{
                item.classList.remove('slider__pagination-active');
            }
        });
/* пагинация счётчик end*/


        document.querySelector('.slider-block__arrow-prev-svg').style.display = 'none';
        document.querySelector('.slider-block__arrow-next-svg').style.display = 'none';
        prevOffsetEdge = (sliderWraperAll  - (widthOneSlideImg + sliderItemMargin)) / 2 + middleOfTheSlide;
        nextOffsetEdge = middleOfTheSlide - (sliderWraperAll  - (widthOneSlideImg + sliderItemMargin)) / 2;

        if(sumLeftPosition === 720){
            sumLeftPosition -=  slideShift;
            sliderWraper.style.left =  sumLeftPosition + 'px';

            if (sliderItemImgs.length === 3){
                if (sumLeftPosition === nextOffsetEdge){
                    document.querySelector('.slider-block__arrow-next-svg').style.display = 'flex';
                }
            }
        }
        else if (sumLeftPosition === nextOffsetEdge){
            sumLeftPosition = prevOffsetEdge;

            sliderWraper.style.left = sumLeftPosition + 'px';
            if (parseInt(sliderWraper.style.left) === prevOffsetEdge){
                document.querySelector('.slider-block__arrow-next-svg').style.display = 'none';
                document.querySelector('.slider-block__arrow-prev-svg').style.display = 'flex';
            }
        }
        else {
            sumLeftPosition -= slideShift;
            sliderWraper.style.left =  sumLeftPosition + 'px';
            if(parseInt(sliderWraper.style.left) === nextOffsetEdge){
                document.querySelector('.slider-block__arrow-next-svg').style.display = 'flex';
            }
        }
    }


    sliderBlockArrowNext.addEventListener('click', btnNextFun);
    sliderArrowRight.addEventListener('click', btnNextFun);

    sliderBlockArrowPrev.addEventListener('click', btnPrevFun);
    sliderArrowLeft.addEventListener('click', btnPrevFun);

////  сдвиг слайда конец
////-----------------------------------------------------------------------
    if(width > 1100){
        sliderWraper.style.width = sliderWraperAll + 'px';
        sliderItemImgs.forEach( item => {
            item.style.width = width - 640 + 'px';
        });
        sliderWraper.style.transition = 'all 0.6s';
    }else  if(width < 392 && width > 370){
        sliderWraper.style.width = sliderWraperAll + 'px';
        sliderWraper.style.height = '220px';
        sliderItemImgs.forEach( item => {
            item.style.height = '210px';
            item.style.width = '360px';
        });
        document.querySelectorAll('.slider__item').forEach( item => {
            item.style.margin = '0 auto';
        });
        sliderWraper.style.transition = 'all 0.3s';
    }else  if(width < 370){
        sliderWraper.style.width = sliderWraperAll + 'px';
        sliderWraper.style.height = '220px';
        sliderItemImgs.forEach( item => {
            item.style.height = '210px';
            item.style.width = '290px';
        });
        document.querySelectorAll('.slider__item').forEach( item => {
            item.style.margin = '0 auto';
        });
        sliderWraper.style.transition = 'all 0.3s';
    }else {
        sliderWraper.style.width = sliderWraperAll + 'px';
        sliderItemImgs.forEach( item => {
            item.style.width = (width- 50) + 'px';
            item.style.height = '100%';
        });
        document.querySelectorAll('.slider__item').forEach( item => {
            item.style.margin = '0 auto';
        });
        sliderWraper.style.transition = 'all 0.4s';
    }
    
}

slider();

window.addEventListener('resize', slider);