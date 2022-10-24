# MOVIES

## ЗАВДАННЯ

Реалізувати застосунок на Vue.js для пошуку фільмів. За відкриття сторінки користувачеві доступна тільки форма для введення назви фільму (або частини назви) і вибору типу (movie, series, episode).

Після того, як користувач ввів дані і натиснув кнопку Search, необхідно відправити відповідний запит до API ресурсу OMDB (http://www.omdbapi.com/).

Якщо в якості відповіді на запит отримано список фільмів, його необхідно відобразити під формою пошуку. Якщо за заданими критеріями не знайдено фільмів, то з’являється повідомлення Movie not found!

Врахуй, що OMDB за замовчуванням повертає лише перші 10 фільмів. Тому необхідно реалізувати пагінацію для тих випадків, коли під критерії пошуку підходить більше, ніж 10. Пагінація — це порядкова нумерація сторінок, яка зазвичай знаходиться вгорі або внизу сторінок сайту. Вона зустрічається в інтернет-магазинах на сторінках з товарами і виглядає як кнопки з цифрами 1, 2, 3 тощо. Натискання на ці кнопки відображає інший блок товарів. Таким чином, перший пошук має виводити перші 10 фільмів і кнопки для переходу по сторінках. При кліку на таку кнопку необхідно відправити запит із зазначенням в параметрах необхідної сторінки, і отриманий результат вивести на місце чинного списку фільмів.

Біля кожного фільму повинна бути кнопка Details, натискання на яку виводитиме детальну інформацію про фільм. Цю інформацію необхідно виводити на цій же сторінці одразу під списком знайдених фільмів і пагінацією. 

Посилання на API OMDB: http://www.omdbapi.com/ (необхідно зареєструватися для отримання API KEY).

## Project setup
```
git clone
cd movies
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```  

### API KEY - має певний час для використання, якщо треба замінити key - треба в store змінити значення const API_KEY  


# Сайт опубліковано за адресою:

[site](https://jgordaja.github.io/movies_site/)