import './app3.css'
import $ from 'jquery'

const html = `
<section id="app3">
          <div class="square"></div>
</section>`
const $html = $(html).appendTo($('body>.page'))

const $square = $('#app3 .square')
const localKey = 'app3.active'
const active = localStorage.getItem(localKey) === 'yes'
$square.toggleClass('active',active)

$square.on('click', () => {
    if($square.hasClass('active')){
        localStorage.setItem('app3.active','no')//记录最后的状态
        $square.removeClass('active')

    }else{
        localStorage.setItem('app3.active','yes')
        $square.addClass('active')

    }

})