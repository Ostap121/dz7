// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".
// const idshka = document.getElementById('text');
// const btn = document.getElementById('hideDiv');
// btn.onclick = () => {
//     idshka.style.display = 'none'
// };

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const hideMe = document.getElementById('hideMe');
// hideMe.onclick = () => {
//   hideMe.style.display = 'none'
// };

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const impt = document.getElementById('impt');
// const btn = document.getElementById('btn');
// btn.onclick = () => {
//     if (impt.value < 18 ){
//         alert(`STOP! You are young, your age: ${impt.value}`)
//     } else if (impt.value >= 18 ) {
//         alert(`Welcome! Your age: ${impt.value}`)
//     }
// };

// - Создайте меню, которое раскрывается/сворачивается при клике
// const uelka2 = document.getElementById('uelka2');
// const ashka = document.getElementById('ashka');
// let hide ;
// ashka.onclick = () => {
//    if (hide){
//        uelka2.style.display = 'block';
//        hide = false ;
//    } else {
//        uelka2.style.display = 'none';
//        hide = true ;
//    }
// };

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// const commentsArr = [
//     {title : 'lorem 1', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem 2', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem 3', body:'lorem ipsum dolo sit ameti'},
//
// ];
//
// const comments = document.getElementById('comments');
//
// for (const comment of commentsArr) {
//     let divka = document.createElement('div');
//     let spankaTitle = document.createElement('span');
//     let spankaBody = document.createElement('span');
//     let btnHide = document.createElement('button');
//
//     spankaTitle.innerText = comment.title;
//     spankaBody.innerText = comment.body;
//     btnHide.innerText = "Hide body";
//
//     btnHide.onclick = () => {
//         spankaBody.style.display = 'none'
//     };
//     comments.appendChild(divka);
//     divka.appendChild(spankaTitle);
//     divka.appendChild(spankaBody);
//     divka.appendChild(btnHide);
// }
//

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let btn = document.getElementById('btn');
// btn.onclick = () => {
//    const form1 = document.form1;
//    const form2 = document.form2;
//     console.log(`
//     Car 1: Marka: ${form1.Marka.value}, Model: ${form1.Model.value}
//     Car 2: Marka: ${form2.Marka.value}, Model: ${form2.Model.value}`)
// };

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// let table = document.getElementById('tableId');
// function createTable(rows,columns,element) {
//     element = document.createElement('table');
//     for (let i = 0; i < rows; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < columns; j++) {
//             const td = document.createElement('td');
//             tr.appendChild(td);
//         }
//         element.appendChild(tr);
//         document.body.appendChild(element);
//     }
// }
// createTable(3,3,'table');

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let btn = document.getElementById('btn');
// let tr = document.getElementById('inputRows');
// let td = document.getElementById('inputColumns');
// let tdTitle = document.getElementById('inputTitle');
// btn.onclick = () =>{
//     let table = document.createElement('table');
//     document.body.appendChild(table);
//     for (let i = 0; i < tr.value; i++) {
//         let tr = document.createElement('tr');
//         table.appendChild(tr);
//         for (let j = 0; j < td.value; j++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//             td.innerText = tdTitle.value;
//         }
//     }
// };

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let arr = ['bitch', 'shit', 'fuck you','pussy','son of bitch'];
// let inpt = document.getElementById('inpt');
// let btn = document.getElementById('btn');
//
// btn.onclick = () => {
//     for (const areaElement of arr) {
//         if (inpt.value === areaElement){
//             alert('Ви ввели нецензурне слово!');
//         } else {
//             alert('Дякую!');
//         }
//     }
// };
//  Інше рішення
// btn.onclick = () => {
//     let word = inpt.value;
//     if (arr.includes(word)){
//         alert('Ви ввели нецензурне слово!')
//     } else {
//         alert('Дякую!')
//     }
// };

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// let arr = ['bitch', 'shit', 'fuck you','pussy','son of bitch'];
// let inpt = document.getElementById('inpt');
// let btn = document.getElementById('btn');
// btn.onclick = () => {
//     let sentence = inpt.value;
//     for (const arrElement of arr) {
//         if (sentence.includes(arrElement)){
//             alert('Ви ввели нецензурне слово!')
//         }
//     }
// };
//  Інше рішення
// btn.onclick = () => {
//     let sentence = inpt.value;
//     for (const arrElement of arr) {
//         if (sentence.includes(arrElement)){
//             alert('Ви ввели нецензурне слово!');
//             break
//         } else {
//             alert('Дякую!');
//             break
//         }
//     }
// };

// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ
//
// const formSix = document.forms.formSix;
// const usersContainer = document.getElementById('usersContainer');
// const filterStatus = document.getElementById('filterStatus');
// const filterAge = document.getElementById('filterAge');
// const filterCity = document.getElementById('filterCity');
//
// formSix.addEventListener('change', e => {
//     let usersWithAddressFilters = [...usersWithAddress];
//     if (filterStatus.checked) usersWithAddressFilters = usersWithAddressFilters.filter(user => !user.status);
//     if (filterAge.checked) usersWithAddressFilters = usersWithAddressFilters.filter(user => user.age >= 29);
//     if (filterCity.checked) usersWithAddressFilters = usersWithAddressFilters.filter(user => user.address.city === 'Kyiv');
//
//     createUsers(usersWithAddressFilters, usersContainer);
// });
//
// function createUsers(users, container) {
//     if (container.children.length) {
//         container.innerHTML = '';
//     }
//
//     for (const user of users) {
//         const div = document.createElement('div');
//         div.textContent = JSON.stringify(user);
//         container.append(div);
//     }
// }
//
// createUsers(usersWithAddress, usersContainer);
