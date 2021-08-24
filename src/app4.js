import './app4.css'
import $ from 'jquery'


const $circle = $('#app4 .circle')

console.log($circle)
$circle.on('mouseenter', () => {
    $circle.addClass('active')
}).on('mouseleave', () => {
    $circle.removeClass('active')
})