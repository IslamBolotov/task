
$(document).ready(function(){
    
    //<<<<<<<<<<<<<< ИЗМЕНЯЕМ ЧЕРЕЗ JAVASCRIPT >>>>>>>>>>>>

// 1. Подключите jQuery, убедитесь в доступности объекта -библиотеки. Примечание:
// попробуйте подключение с разных CDN-хранилищ, и при помощи локального
// файла
console.log('ewbcnjkm');


// 2. Выберите при помощи селекторов jQuery
// — все HTML-элементы strong и окрасьте их в зеленый цвет

 let task2 = $('strong')
 task2.css('color', 'green')

//или можно и так
// $('strong').css('color','green')

// — найдите все HTML-элементы em и добавьте им класс .selected
$('em').addClass('selected')


// — Найдите все элементы mark, которые находятся в div с классом row и задайте им
// класс .selected
$('mark', '.row').addClass('selected')

// — Найдите все гиперссылки и удалите у них подчеркивания
$('a').css('text-decoration','none')

// — Переключите элементы strong с классом some в состояние без этого класса, а
// тем элементам (strong), у которых небыло этого класса — добавьте.
let task6 = $('strong')
task6.toggleClass('some');


// — среди набора элементов с классом .row удалите класс у второго элемента
let task7 = $('.row')
console.log($(task7.eq(1)).removeClass('row'));



// — прочитайте CSS-свойство color у второй гиперсылки в тексте

let task8 = $('a')
    console.log($(task8.eq(1)).css('color'));
})