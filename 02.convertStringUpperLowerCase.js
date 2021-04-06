/*
Цель задания:
Узнать, как преобразовывать строку в верхний/нижний регистр.
Узнать, как извлекать произвольные куски из строки.

Задание:

В переменных name, surname написаны имя и фамилия человека.

При этом в строках беспорядок с большими и маленькими буквами, и нужно привести строки в порядок.
Для этого первые буквы имени и фамилии приведите к верхнему регистру, а оставшиеся буквы — к нижнему.
Запишите результат в новые переменные и выведите их значения с помощью console.log.
С помощью тернарных операторов и console.log выведите сообщение
«Имя было преобразовано» или «Имя осталось без изменений» для имени и фамилии в зависимости от того,
были ли исходные строки равны преобразованным.

Проверка результата:
Для любых имени и фамилии в любом регистре должны выводиться такие же имя и фамилия,
но первая буква у них большая, а все остальные — маленькие.
*/

let name = 'deNiS';
let surname = 'khrIstENkO';

let firstLetterName = name.substr(0, 1);
let otherLetterName = name.substr(1);

let firstLetterSurname = surname.substr(0, 1);
let otherLetterSurname = surname.substr(1);

let rightName =  firstLetterName.toUpperCase() + otherLetterName.toLowerCase();
let rightSurname = firstLetterSurname.toUpperCase() + otherLetterSurname.toLowerCase();

(rightName == name) && (rightSurname == surname) ?
console.log ('Имя осталось без изменений: ' + rightName + ' ' + rightSurname) :
console.log ('Имя было преобразовано: ' + rightName + ' ' + rightSurname);