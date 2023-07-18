const footer_main = document.getElementById("footer__main_1")
const footer_main2 = document.getElementById("footer__main_2")
const footer_main3 = document.getElementById("footer__main_3")
const footer_item1 = document.getElementById("footer__item_1")
const footer_item2 = document.getElementById("footer__item_2")
const footer_item3 = document.getElementById("footer__item_3")
footer_item1.addEventListener("click",()=>{
    footer_main.innerHTML=`
    <ul class="footer__main_1" id="footer__main_1">
    <li class="main_1_1" id="footer__item_1">Контактная информация</li>
    <li><a href="#"><i class="fa-solid fa-location-dot"></i><p>г. Владивосток, ул. Пушкинская, 17</p></a></li>
    <li><a href="#"><i class="fa-solid fa-phone"></i><p>+ 7 888 888 88 88</p></a></li>
    <li><a href="#"><i class="fa-solid fa-phone"></i><p>+ 7 888 888 88 88</p></a></li>
    <li><a href="#"><i class="fa-regular fa-clock"></i><p>Режим работы: 
      Пн-Сб  с 8:00  до 22:00</p></a></li>
  </ul>
    `
})
footer_item2.addEventListener("click",()=>{
    footer_main2.innerHTML=`
              <ul class="footer__main_2" id="footer__main_2">
            <li class="main_1_1" id="footer__item_2">Для посетителей</li>
            <li><a href="#">Оформление заказа</a></li>
            <li><a href="#">Вопросы и ответы</a></li>
            <li><a href="#">Изменение или отмена заказа</a></li>
            <li><a href="#">Способы доставки и оплаты</a></li>
          </ul>
    `

})

footer_item3.addEventListener("click",()=>{
    footer_main3.innerHTML=`
    <ul class="footer__main_3" id="footer__main_3">
    <li class="main_1_1" id="footer__item_3">
      Возникли вопросы? Свяжитесь с нами
    </li>
    <li>
      <div class="footer__main__input-box">
        <p>Ваше имя</p>
        <input type="text" />
      </div>
      <div class="footer__main__input-box">
        <p>Моб. номер</p>
        <input type="text" />
      </div>
    </li>
    <li><input class="main__input" type="text" /></li>
  </ul>
    `

})