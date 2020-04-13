//--------------------------------- using jQuery ---------------------------------
$(document).ready(function() {

    let question__btnArrow = $('.questions__btn-arrow');
    let questions__btnText = $('.questions__btn-text');
    let questions__answer = $('.questions__answer');
    let question__btn = $('.questions__btn');

    question__btnArrow.click(function() {

        if(questions__answer.css('display') == 'none') {
            questions__answer.slideDown(400);
            questions__btnText.css('color','white');
            question__btnArrow.css({
                'border-color':'white',
                'transform':'rotate(-45deg)'
            });
            question__btn.css('background-color','#262350');
        } else {
            questions__answer.slideUp(400);
            questions__btnText.css('color','#262350');
            question__btnArrow.css({
                'border-color':'#262350',
                'transform':'rotate(135deg)'
            });
            question__btn.css('background-color','white');
        }
    });
});
// --------------------------- usinf Vanilla js (Work)------------------------------
// document.addEventListener('DOMContentLoaded', function() {

//     let question__btnArrow = document.querySelector('.questions__btn-arrow');
//     let question__btnText = document.querySelector('.questions__btn-text');
//     let question__answer = document.querySelector('.questions__answer');
//     let question__btn = document.querySelector('.questions__btn');

//     function slideDown(el) {

//         let height = 0;
//         el.style.overflow = 'hidden';
//         el.style.display = 'block';
        
//         let timer = setInterval(function() {
//             height+=10;
//             console.log(el.style.height);
//             el.style.height = height+'%';
//             if(height >= 100) {
//                 clearInterval(timer);
//             } 
//         }, 50);
//     }
//     function slideUp(el) {

//         el.style.overflow = 'auto';
//         let height = 100;  
//         let timer = setInterval(function() {
//             height-=10;
//             console.log(el.style.height);
//             el.style.height = height+'%';
//             if(height == 0) {
//                 clearInterval(timer);
//                 el.style.display = 'none';
//             } 
//         }, 50);
//     }

//     question__btn.addEventListener('click', function() {

//         if(question__answer.style.display != 'block') {

//             slideDown(question__answer);
//             question__btnArrow.style.borderColor = 'white';
//             question__btnArrow.style.transform = 'rotate(-45deg)';
//             question__btnText.style.color = 'white';
//             question__btn.style.backgroundColor = '#262350';
//         } else {

//             slideUp(question__answer);
//             question__btnArrow.style.transform = 'rotate(135deg)';
//             question__btnArrow.style.borderColor = '#262350';
//             question__btnText.style.color = '#262350';
//             question__btn.style.backgroundColor = 'white';
//         }
//     });
// });