let currentGroup = 1;
let countGroups = 0; /*количество групп тасков в html*/
let output;
let rect = new Rectangle(2, 2, 0, 0);
let arr = [];
let arr1 = [];
const fruits = [
  "красное яблоко",
  "зелёное яблоко",
  "груша",
  "мандарин",
  "лимон",
  "банан",
  "арбуз",
  "виноград",
  "клубника",
  "черника",
  "дыня",
  "вишня",
  "персик",
  "манго",
  "ананас",
  "киви",
  "помидор",
  "оливка",
];

const taskDescriptions = {
  btn1: "Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек)",
  btn2: "Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена).",
  btn3: " Функция принимает объект-прямоугольник и возвращает его ширину. ",
  btn4: "Функция принимает объект-прямоугольник и возвращает его высоту.",
  btn5: "Функция принимает объект-прямоугольник и возвращает его площадь. ",
  btn6: "Функция принимает объект-прямоугольник и возвращает его периметр.",
  btn7: "Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить ширину. ",
  btn8: "Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить высоты.",
  btn9: "Функция изменения ширины и высоты прямоугольника. Она принимает объект-прямоугольник и два значения для изменения ширины и высоты.",
  btn10:
    " Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.",
  btn11:
    "Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть. ",
  btn12:
    "Функция смещения прямоугольника и по оси X и по оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y. ",
  btn13:
    "Функция для проверки находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и координаты точки.",
  btn14:
    "Создать массив из 10 случайных чисел и написать несколько функций для работы с ним.",
  btn15: "Функция принимает массив и выводит его на экран.",
  btn16: "Функция принимает массив и выводит только четные элементы.",
  btn17: "Функция принимает массив и возвращает сумму всех элементов массива.",
  btn18: "Функция принимает массив и возвращает его максимальный элемент.",
  btn19: "Функция добавления нового элемента в массив по указанному индексу.",
  btn20: "Функция удаления элемента из массива по указанному индексу.",
  btn21:
    "Создать еще один массив из 5 случайных чисел и написать следующие функции.",
  btn22:
    "Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.",
  btn23:
    "Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.",
  btn24:
    "Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве. ",
  btn25: " Создать массив фруктов и отсортировать его по алфавиту.",
  btn26:
    "Вывод на экран с помощью document.write() в виде списка (с помощью тегов ul и li). ",
  btn27:
    "Поиск фрукта в массиве. Функция принимает название фрукта и возвращает индекс найденного элемента или -1, если не найден. Поиск должен быть не ре­гистро­зависимый. ",
  btn28:
    "Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой строке больше символов, чем во второй, -1, если во второй больше символов, чем в первой или 0 если строки одинаковой длины.",
  btn29:
    "Написать функцию, которая переводит в верхний регистр первый символ переданной строки.",
  btn30:
    "Написать функцию, которая считает количество гласных букв в переданной строке. ",
  btn31:
    "Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка содержит спам. Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, ххх. Функция должна быть нечувствительна к регистру.",
  btn32:
    'Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки больше чем максимальная, то необходимо отбросить лишние символы, добавив вместо них троеточие. Например: truncate("Hello, world!", 8) должна вернуть «Hello...».',
  btn33:
    "Написать функцию, которая проверяет является ли переданная строка палиндромом.",
  btn34: "Написать функцию, которая считает количество слов в предложении.",
  btn35:
    "Написать функцию, которая возвращает самое длинное слово из предложения.",
  btn36: "Написать функцию, которая считает среднюю длину слова в предложении.",
  btn37:
    "Написать функцию, которая принимает строку и символ и выводит индексы, по которым находится этот символ в строке. Также вывести сколько всего раз встречается этот символ в строке.",
  btn38:
    "Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом.",
  btn39: "Функция для вывода информации о автомобиле на экран.",
  btn40:
    "Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.",
  btn41: "все через объект",
  btn42:
    "Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.",
  btn43: "Функция сложения 2 объектов-дробей.",
  btn44: "Функция вычитания 2 объектов-дробей.",
  btn45: "Функция умножения 2 объектов-дробей.",
  btn46: "Функция деления 2 объектов-дробей.",
  btn47: "Функция сокращения объекта-дроби.",
  btn48:
    "Создать объект, описывающий время (часы, минуты, секунды), и следующие функ­ции для работы с этим объектом.",
  btn49: "Функция вывода времени на экран.",
  btn50: "Функция изменения времени на переданное количество секунд.",
  btn51: "Функция изменения времени на переданное количество минут.",
  btn52: "Функция изменения времени на переданное количество часов.",
  btn53:
    "Создать массив «список покупок». Каждый элемент массива является объектом, который содержит название товара, необходимое количество и то, был ли он куплен или нет. Напишите несколько функций для работы с таким массивом.",
  btn54:
    "Вывод всего списка на экран таким образом, чтобы сначала шли не купленные товары, а потом купленные.",
  btn55:
    "Добавление покупки в список. Обратите внимание, что при добавлении покупки с уже существующим товаром в списке, нужно увеличить количество в существующей покупке, а не добавлять новую.",
  btn56:
    "Приобретение товара. Функция получает название товара и помечает его как купленный.",
  btn57:
    "Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, его количества и цены за единицу. Напишите следующие функции.",
  btn58: "Вывод чека на экран.",
  btn59: "Вычисление общей суммы покупки.",
  btn60: "Получение самой дорогой покупки в чеке.",
  btn61: "Вычисление средней стоимости одного товара в чеке.",
  btn62:
    "Создать массив стилей CSS (цвет, размер шрифта, выравнивание, подчеркивание и т.д.). Каждый элемент массива — это объект, состоящий из двух свойств: названия стиля и значения стиля.",
  btn63:
    "И напишите функцию, которая получает массив стилей и текст и выводит этот текст с помощью document.write() в тегах, добавив к открывающему тегу атрибут style со всеми стилями, перечисленными в массиве.",
  btn64:
    "Создайте массив аудиторий академии. Объект аудитории состоит из названия, количества мест (от 10 до 20) и названия кафедры, для которой она предназначена.",
  btn65: "Вывести все аудитории.",
  btn66: "Отобразить аудитории для указанного факультета.",
  btn67:
    "Отобразить только те аудитории, которые подходят для переведенной груп­пы. Объект-группа состоит из названия, количества студентов и названия ка­федры.",
  btn68: "Функция сортировки аудиторий по количеству мест",
  btn69: "Функция сортировки аудиторий по названию (по алфавиту).",
  btn70:
    "Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.",
  btn71:
    "Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде. Например: 35 — тридцать пять, 89 — восемьдесят девять, 12 — двенадцать. ",
  btn72:
    "Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие на большие, а цифры на знак нижнего подчеркивания.",
  btn73:
    "Написать функцию, которая преобразует названия css стилей с дефисом в название в camelcase стиле: font-size в fontSize, background-color в background­Color, text-align в textAlign.",
  btn74:
    "Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру. Например: cascading style sheets в CSS, объектно-ориентированное программирование в ООП. ",
  btn75:
    "Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и возвращает ее. ",
  btn76:
    "Написать функцию — калькулятор. Функция принимает строку с примером, определяет какое действие необходимо выполнить (+, -, *, /), переводит операнды в числа, решает пример и возвращает результат.",
  btn77:
    "Написать функцию, которая получает url и выводит подробную информацию о нем. ",
  btn78:
    "Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитые с помощью указанного разделителя. Например: строка «10/08/2020», разделитель «/», результат: «10», «08», «2020». Выполняя задание, не используйте функцию split().",
  btn79:
    'Написать функцию вывода текста по заданному шаблону. Функция принимает первым параметром шаблон, в тексте которого может использоваться %, после символа % указывается индекс входного параметра. При выводе вместо %индекс необходимо вывести значение соответствующего входного параметра. Например: print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020) должна вывести «Today is Monday 10.8.2020».',
};

window.addEventListener("DOMContentLoaded", () => {
  for (const [id, description] of Object.entries(taskDescriptions)) {
    const button = document.getElementById(id);
    if (button) {
      button.title = description;
    }
  }
  output = document.getElementById("result");

  let elements = document.querySelectorAll(".button-group");
  countGroups = elements.length;
  //alert(countGroups);
  elements.forEach((el, i) => {
    el.style.display = i === 0 ? "block" : "none";
  });
});

function moveGroup(direction) {
  document.getElementById(`group${currentGroup}`).style.display = "none"; // текущая группа прячется

  currentGroup += direction;

  // прокрутка
  if (currentGroup < 1) currentGroup = countGroups;
  if (currentGroup > countGroups) currentGroup = 1;

  // новая группа отображается
  document.getElementById(`group${currentGroup}`).style.display = "block";
}

document.getElementById("group1").style.display = "block";

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    let el = document.getElementById("result");
    el.innerHTML = "";
    el.textContent = "";
  });
});

// Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек),
function Rectangle(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  if (this.x2 < this.x1) [this.x1, this.x2] = [this.x2, this.x1];
  if (this.y2 < this.y1) [this.y1, this.y2] = [this.y2, this.y1];
}

// Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена).
function printRectangle(rect) {
  if (!(rect instanceof Rectangle)) {
    throw new Error(
      "в методе printRectangle в качестве параметра ожидается экземпляр класса Rectangle"
    );
  }
  output.innerHTML = `<div>Верхний левый угол: x1:${rect.x1} y1:${rect.y1}</div>
  <div>Верхний правый угол: x1:${rect.x1} y2:${rect.y2}</div>
  <div>Нижний левый угол: x2:${rect.x2} y1:${rect.y1}</div>
  <div>Нижний правый угол: x2:${rect.x2} y2:${rect.y2}</div>`;
}

function getWidth(rect) {
  if (!(rect instanceof Rectangle)) {
    throw new Error(
      "в методе printRectangle в качестве параметра ожидается экземпляр класса Rectangle"
    );
  }
  return rect.x2 - rect.x1;
}

function getHeight(rect) {
  if (!(rect instanceof Rectangle)) {
    throw new Error(
      "в методе printRectangle в качестве параметра ожидается экземпляр класса Rectangle"
    );
  }
  let ret = rect.y2 - rect.y1;
  output.textContent = `ширина прямоугольника = ${ret}`;
  return ret;
}

function getSquare(rect) {
  if (!(rect instanceof Rectangle)) {
    throw new Error(
      "в методе printRectangle в качестве параметра ожидается экземпляр класса Rectangle"
    );
  }
  return getWidth(rect) * getHeight(rect);
}

function getPerimeter(rect) {
  if (!(rect instanceof Rectangle)) {
    throw new Error(
      "в методе printRectangle в качестве параметра ожидается экземпляр класса Rectangle"
    );
  }
  return (getWidth(rect) + getHeight(rect)) * 2;
}
function changeWidth(rect, val) {
  if (!(rect instanceof Rectangle)) {
    throw new Error(
      "в методе printRectangle в качестве параметра ожидается экземпляр класса Rectangle"
    );
  }
  rect.x2 += val;
}
function changeHeight(rect, val) {
  if (!(rect instanceof Rectangle)) {
    throw new Error(
      "в методе printRectangle в качестве параметра ожидается экземпляр класса Rectangle"
    );
  }
  rect.y2 += val;
}

function changeRect(rect, valX, valY) {
  if (!(rect instanceof Rectangle)) {
    throw new Error(
      "в методе printRectangle в качестве параметра ожидается экземпляр класса Rectangle"
    );
  }
  changeWidth(rect, valX);
  changeHeight(rect, valY);
}

function moveRectX(rect, valX) {
  if (!(rect instanceof Rectangle)) {
    throw new Error(
      "в методе printRectangle в качестве параметра ожидается экземпляр класса Rectangle"
    );
  }
  rect.x1 += valX;
  rect.x2 += valX;
}
function moveRectY(rect, valY) {
  if (!(rect instanceof Rectangle)) {
    throw new Error(
      "в методе printRectangle в качестве параметра ожидается экземпляр класса Rectangle"
    );
  }
  rect.y1 += valY;
  rect.y2 += valY;
}

function moveRect(rect, valX, valY) {
  if (!(rect instanceof Rectangle)) {
    throw new Error(
      "в методе printRectangle в качестве параметра ожидается экземпляр класса Rectangle"
    );
  }
  moveRectX(rect, valX);
  moveRectY(rect, valY);
}

function isPointInside(rect, x, y) {
  if (!(rect instanceof Rectangle)) {
    throw new Error(
      "в методе printRectangle в качестве параметра ожидается экземпляр класса Rectangle"
    );
  }
  return x >= rect.x1 && x <= rect.x2 && y >= rect.y1 && y <= rect.y2;
}

function task1() {
  // Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек),
  output.textContent = "создан конструктор класса Rectangle";
}

function task2() {
  // Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена).
  printRectangle(rect);
}

function task3() {
  // Функция принимает объект-прямоугольник и возвращает его ширину.
  output.textContent = `ширина прямоугольника = ${getWidth(rect)}`;
}

function task4() {
  // Функция принимает объект-прямоугольник и возвращает его высоту.
  output.textContent = `высота прямоугольника = ${getHeight(rect)}`;
}

function task5() {
  // Функция принимает объект-прямоугольник и возвращает его площадь.
  output.textContent = `площадь прямоугольника = ${getSquare(rect)}`;
}

function task6() {
  // Функция принимает объект-прямоугольник и возвращает его периметр.
  output.textContent = `периметр прямоугольника = ${getPerimeter(rect)}`;
}

function task7() {
  // Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить ширину.
  changeWidth(rect, 2);
  printRectangle(rect);
}
function task8() {
  // Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить высоты.

  changeHeight(rect, 2);
  printRectangle(rect);
}

function task9() {
  // Функция изменения ширины и высоты прямоугольника. Она принимает объект-прямоугольник и два значения для изменения ширины и высоты.

  changeRect(rect, 2, 2);
  printRectangle(rect);
}

function task10() {
  // Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
  moveRectX(rect, 3);
  printRectangle(rect);
}

function task11() {
  // Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
  moveRectY(rect, 3);
  printRectangle(rect);
}

function task12() {
  // Функция смещения прямоугольника и по оси X и по оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y.
  moveRect(rect, -3, -3);
  printRectangle(rect);
}

function task13() {
  // Функция для проверки находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и координаты точки.
  let x = 9;
  let y = 8;
  output.textContent = `точка с координатами: ${x}, ${y} ${
    isPointInside(rect, x, y) === true ? "находится" : "НЕ находится"
  } внутри прямоугольника`;
}

/**********************массивы************************** */
function initializeArray(ar, max = 10) {
  for (let i = 0; i < max; i++) ar.push(Math.floor(Math.random() * 10));
}
function printArray(ar) {
  if (!Array.isArray(ar)) throw new Error("в методе ожидается массив");
  if (ar.length === 0) throw new Error("массив не инициализирован");
  output.textContent = ar.join(", ");
}

function printEven(ar) {
  if (!Array.isArray(ar)) throw new Error("в методе ожидается массив");
  if (ar.length === 0) throw new Error("массив не инициализирован");
  let evens = ar.filter((i) => i % 2 === 0);
  printArray(evens);
}
function sumArr(ar) {
  if (!Array.isArray(ar)) throw new Error("в методе ожидается массив");
  if (ar.length === 0) throw new Error("массив не инициализирован");
  return ar.reduce((acc, i) => (acc += i));
}

function maxArr(ar) {
  if (!Array.isArray(ar)) throw new Error("в методе ожидается массив");
  if (ar.length === 0) throw new Error("массив не инициализирован");
  return ar.reduce((acc, i) => (acc > i ? acc : i));
}

function insertArr(ar, ind, el) {
  if (!Array.isArray(ar)) throw new Error("в методе ожидается массив");
  if (ar.length === 0) throw new Error("массив не инициализирован");
  if (ind < 0 || ind >= ar.length) throw new Error("out of range exception");
  /*let tempArr = [];
  for (let i = 0; i < ind; i++) tempArr.push(ar[i]);
  tempArr.push(el);
  for (let i = ind; i < ar.length; i++) tempArr.push(ar[i]);
  ar.length = 0;
  for (let i = 0; i < tempArr.length; i++) ar.push(tempArr[i]);*/
  ar.splice(ind, 0, el);
}

function deleteFromArr(ar, ind) {
  if (!Array.isArray(ar)) throw new Error("в методе ожидается массив");
  if (ar.length === 0) throw new Error("массив не инициализирован");
  if (ind < 0 || ind >= ar.length) throw new Error("out of range exception");
  ar.splice(ind, 1);
}

function joinArraysUnique(ar1, ar2) {
  if (!Array.isArray(ar1) || !Array.isArray(ar2))
    throw new Error("в методе ожидается массив");
  if (ar1.length === 0) throw new Error("массив ar1 не инициализирован");
  if (ar2.length === 0) throw new Error("массив ar2 не инициализирован");
  /*let uniqueArr = new Set(ar1.concat(ar2));
  return Array.from(uniqueArr);
  */
  const uniqueArr = new Set([...ar1, ...ar2]);
  return Array.from(uniqueArr);
}
function joinArraysCommonEls(ar1, ar2) {
  if (!Array.isArray(ar1) || !Array.isArray(ar2))
    throw new Error("в методе ожидается массив");
  if (ar1.length === 0) throw new Error("массив ar1 не инициализирован");
  if (ar2.length === 0) throw new Error("массив ar2 не инициализирован");
  /*let ret = ar1.filter((el) => {
    let flag = false;
    for (let i = 0; i < ar2.length; i++) {
      if (el === ar2[i]) {
        flag = true;
        break;
      }
    }
    return flag;
  });
  return ret;*/

  const getMap = (ar) => {
    const map = new Map();
    for (const el of ar) map.set(el, (map.get(el) || 0) + 1); // если элемента нет, то underfined. его в 0.
    return map;
  };

  const map1 = getMap(ar1);
  const map2 = getMap(ar2);
  let ret = [];

  for (const [value, count] of map1) {
    if (map2.has(value)) {
      let count2 = map2.get(value);
      let commonCount = Math.min(count, count2);
      for (let i = 0; i < commonCount; i++) ret.push(value);
    }
  }
  return ret;
}

function getAbsent(ar1, ar2) {
  if (!Array.isArray(ar1) || !Array.isArray(ar2))
    throw new Error("в методе ожидается массив");
  if (ar1.length === 0) throw new Error("массив ar1 не инициализирован");
  if (ar2.length === 0) throw new Error("массив ar2 не инициализирован");
  /*const ret = ar1.filter((el) => {
    let count = 0;
    for (const i of ar2) {
      if (el === i) count += 1;
    }
    return count === 0;
  });
  return ret;*/
  const set2 = new Set(ar2);
  return ar1.filter((el) => !set2.has(el));
}
function task14() {
  // Создать массив из 10 случайных чисел и написать несколько функций для работы с ним.
  arr.length = 0;
  initializeArray(arr);
  output.textContent = "массив создан и заполнен";
}

function task15() {
  // Функция принимает массив и выводит его на экран.
  try {
    printArray(arr);
  } catch (er) {
    output.textContent = er.message;
  }
}
function task16() {
  // Функция принимает массив и выводит только четные элементы.
  printEven(arr);
}

function task17() {
  // Функция принимает массив и возвращает сумму всех элементов массива.
  output.textContent = `${sumArr(arr)}`;
}

function task18() {
  // Функция принимает массив и возвращает его максимальный элемент.
  output.textContent = `максимальный элемент в массиве: ${maxArr(arr)}`;
}

function task19() {
  // Функция добавления нового элемента в массив по указанному индексу.
  // arr.sort();
  insertArr(arr, 3, 67);
  printArray(arr);
}
function task20() {
  // Функция удаления элемента из массива по указанному индексу.
  deleteFromArr(arr, 3);
  printArray(arr);
}
function task21() {
  // Задание 21
  arr1.length = 0;
  initializeArray(arr1, Math.floor(Math.random() * 10 + 1));
  printArray(arr1);
}
function task22() {
  // Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.
  let arr3 = joinArraysUnique(arr, arr1);
  output.innerHTML = `<div>${arr}</div><div>${arr1}</div><div>${arr3}</div>`;
}
function task23() {
  // Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.
  let arr3 = joinArraysCommonEls(arr, arr1);
  output.innerHTML = `<div>${arr}</div><div>${arr1}</div><div>${arr3}</div>`;
}

function task24() {
  // Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве.
  let arr3 = getAbsent(arr, arr1);
  output.innerHTML = `<div>${arr}</div><div>${arr1}</div><div>${arr3}</div>`;
}

const printFruits = (ar) => {
  let html = "<ul>";
  for (const el of ar) {
    switch (el) {
      case "красное яблоко":
        html += "<li>🍎</li>";
        break;
      case "зелёное яблоко":
        html += "<li>🍏</li>";
        break;
      case "груша":
        html += "<li>🍐</li>";
        break;
      case "мандарин":
        html += "<li>🍊</li>";
        break;
      case "лимон":
        html += "<li>🍋</li>";
        break;
      case "банан":
        html += "<li>🍌</li>";
        break;
      case "арбуз":
        html += "<li>🍉</li>";
        break;
      case "виноград":
        html += "<li>🍇</li>";
        break;
      case "клубника":
        html += "<li>🍓</li>";
        break;
      case "черника":
        html += "<li>🫐</li>";
        break;
      case "дыня":
        html += "<li>🍈</li>";
        break;
      case "вишня":
        html += "<li>🍒</li>";
        break;
      case "персик":
        html += "<li>🍑</li>";
        break;
      case "манго":
        html += "<li>🥭</li>";
        break;
      case "ананас":
        html += "<li>🍍</li>";
        break;
      case "киви":
        html += "<li>🥝</li>";
        break;
      case "помидор":
        html += "<li>🍅</li>";
        break;
      case "оливка":
        html += "<li>🫒</li>";
        break;
    }
  }
  html += "</ul>";
  output.innerHTML = html;
};

function findFruit(ar, f) {
  if (!Array.isArray(ar)) throw new Error("в методе ожидается массив");
  if (ar.length === 0) throw new Error("массив ar пуст.");
  let fruit = f.toLowerCase();
  output.textContent = fruit;
  let ind = -1;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i].toLowerCase() === fruit) return i;
  }
  return ind;
}

function task25() {
  // Создать массив фруктов и отсортировать его по алфавиту. Написать следующие функции.
  fruits.sort();
  output.textContent = "массив создан и отсортирован";
}
function task26() {
  // Вывод на экран с помощью document.write() в виде списка (с помощью тегов ul и li).
  printFruits(fruits);
}
function task27() {
  // Поиск фрукта в массиве. Функция принимает название фрукта и возвращает индекс найденного элемента или -1, если не найден. Поиск должен быть не ре­гистро­зависимый.
  output.textContent = `индекс элемента "КраСноЕ яблОко": ${
    findFruit(fruits, "КраСноЕ яблОко") !== -1
      ? findFruit(fruits, "КраСноЕ яблОко")
      : "не найден"
  }`;
}
function task28() {
  // Написать функцию, которая принимает 2 строки и сравнивает их длину.
  // Функция возвращает 1, если в первой строке больше символов, чем во второй, -1,
  // если во второй больше символов, чем в первой или 0 если строки одинаковой длины.
  const compareSrings = (str1, str2) => {
    if (typeof str1 === "string" && typeof str2 === "string") {
      if (str1.length > str2.length) return 1;
      if (str1.length < str2.length) return -1;
      return 0;
    }
    throw new Exception("ожидаются 2 строки");
  };

  let s1 = "some string to compare";
  let s2 = "строка для сравнения";
  output.innerHTML = `<div>${s1} > ${s2} = ${compareSrings(
    s1,
    s2
  )}</div><div>${s2} > ${s1} = ${compareSrings(
    s2,
    s1
  )}</div><div>${s1} > ${s1} = ${compareSrings(s1, s1)}</div>`;
}
function task29() {
  //Написать функцию, которая переводит в верхний регистр первый символ переданной строки.
  const firstToUpper = (str) => {
    if (typeof str === "string") {
      return str.slice(0, 1).toUpperCase() + str.slice(1);
    }
    throw new Exception("ожидается строка");
  };
  let s = "проверочная строка";
  output.textContent = `${s} - ${firstToUpper(s)}`;
}
function task30() {
  // Написать функцию, которая считает количество гласных букв в переданной строке.
  const countVovels = (str) => {
    if (typeof str === "string") {
      const regex = /[aeiouyаеёиоуыэюя]/gi;
      let res = str.replaceAll(regex, "");
      return str.length - res.length;
    }
    throw new Exception("ожидается строка");
  };
  let s = "some test string молоко";
  output.textContent = `В строке ${s} ${countVovels(s)} гласных символов`;
}

function task31() {
  //Написать функцию для проверки спама в переданной строке.
  // Функция возвращает true, если строка содержит спам.
  // Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, ххх.
  // Функция должна быть нечувствительна к регистру.
  const hasSpam = (text, sarr) => {
    if (typeof text === "string" && Array.isArray(sarr)) {
      let temp = text.toLowerCase();

      for (let i = 0; i < sarr.length; i++) {
        if (temp.includes(sarr[i].toLowerCase())) return true;
      }
      return false;
    }
    throw new Error("в качестве аргументов ожидается строка и массив слов");
  };
  let spam = [
    "100% бесплатно",
    "увеличение продаж",
    "только сегодня",
    "не удаляйте",
    "ххх",
  ];

  let testStr = "Продукция 100% БЕСПЛАТНО сегодня!";
  output.textContent = `строка "${testStr}" ${
    hasSpam(testStr, spam) ? "содержит" : "НЕ содержит"
  } спам`;
}
function task32() {
  // Написать функцию сокращения строки.
  // Функция принимает строку и ее максимальную длину.
  // Если длина строки больше чем максимальная, то необходимо отбросить лишние символы,
  // добавив вместо них троеточие. Например: truncate("Hello, world!", 8) должна вернуть «Hello...».
  const shortenString = (str, max) => {
    if (typeof str === "string") {
      if (str.length >= max) return str.slice(0, max - 3) + "...";
      return str;
    }
    throw new Error("в качестве аргументов ожидается строка");
  };

  let s = "Hello, world!";
  output.textContent = `${shortenString(s, 8)}`;
}
function task33() {
  // Написать функцию, которая проверяет является ли переданная строка палиндромом.
  const reverseStr = (str) => {
    if (typeof str === "string") {
      let ret = "";
      for (let l = str.length - 1; l >= 0; l--) {
        ret += str[l];
      }
      return ret;
    }
    throw new Error("в качестве аргументов ожидается строка");
  };
  const isPalindrom = (str) => {
    if (typeof str === "string") {
      let temp = str.toLowerCase().replace(/[^а-яёa-z0-9]/gi, "");
      //alert(temp);
      return temp === reverseStr(temp);
    }
    throw new Error("в качестве аргументов ожидается строка");
  };

  let s = "А роза упала на Лапу азора"; //"круаколис, караколис, круасан";
  output.textContent = `строка "${s}" ${
    isPalindrom(s) ? "является" : "НЕ является"
  } палиндромом;`;
}

function task34() {
  // Написать функцию, которая считает количество слов в предложении.
  const getCountWords = (str) => {
    if (typeof str === "string") {
      let temp = str.trim().split(/\s+/);
      return temp.length;
    }
    throw new Error("в качестве аргументов ожидается строка");
  };
  let s = "А роза упала на Лапу азора";
  output.textContent = `В строке "${s}" ${getCountWords(s)} слов`;
}
function task35() {
  // Написать функцию, которая возвращает самое длинное слово из предложения.
  const getWordsArr = (str) => {
    if (typeof str === "string") return str.trim().split(/\s+/);
    throw new Error("в качестве аргументов ожидается строка");
  };

  const getLongestWord = (str) => {
    if (typeof str === "string") {
      let wordArr = getWordsArr(str);
      if (wordArr.length === 0) return ""; // защита от пустой строки
      let ret = wordArr[0];
      for (let el of wordArr) {
        if (el.length > ret.length) ret = el;
      }
      return ret;
    }
    throw new Error("в качестве аргументов ожидается строка");
  };

  let s = "А роза упала на Лапу азора";
  output.textContent = `В строке "${s}" самое длинное слово: "${getLongestWord(
    s
  )}"`;
}
function task36() {
  // Написать функцию, которая считает среднюю длину слова в предложении.
  const avgWordsLength = (str) => {
    if (typeof str === "string") {
      let temp = str
        .trim()
        .replace(/[^а-яёa-z0-9 ]/gi, "")
        .split(/\s+/);

      if (temp.length === 1 && temp[0] === "") return 0;

      let count = 0;
      for (let el of temp) count += el.length;

      return count > 0 ? (count / temp.length).toFixed(2) : 0;
    }
    throw new Error("в качестве аргументов ожидается строка");
  };

  let s = "А роза упала на Лапу азора"; //"круаколис, караколис, круасан";
  output.textContent = `в строке "${s}" средняя длина слова: ${avgWordsLength(
    s
  )} символов;`;
}

function task37() {
  // Написать функцию, которая принимает строку и символ и выводит индексы, по которым находится этот символ в строке. Также вывести сколько всего раз встречается этот символ в строке.
  const printSymbStatistic = (str, s) => {
    if (typeof str === "string" && typeof s === "string" && s.length === 1) {
      let indexes = [];
      let i = 0;
      while (i < str.length) {
        let ind = str.indexOf(s, i);
        if (ind == -1) break;

        indexes.push(ind);
        i = ind + 1;
      }

      output.textContent = `в строке "${s1}" символ "${s}" встречается ${
        indexes.length
      } раз. Индексы: ${indexes.join(", ")}`;
      return;
    }
    throw new Error("в качестве аргументов ожидается строка");
  };
  let s1 =
    "цветное руководство по JavaScript для начинающих позволит в короткое время освоить этот язык программирования и приступить к созданию красивых и функциональных сайтов.";
  printSymbStatistic(s1, "о");
}

function car(producer, model, year, speed) {
  this.producer = producer;
  this.model = model;
  this.year = year;
  this.speed = speed;
  this.print = () => {
    output.innerHTML = `<div>producer: ${this.producer}</div><div>model: ${this.model}</div><div>year: ${this.year}</div><div>speed: ${this.speed}</div><br>`;
  };

  this.countTime = (distance) => {
    if (speed === 0) return 0;
    let time = distance / speed;
    time += time / 4;
    return Math.floor(time);
  };
}

let c;
function task38() {
  // Создать объект, описывающий автомобиль
  // (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом.
  c = new car("Toyota", "some", 2020, 110);
  c.print();
}
function task39() {
  // Функция для вывода информации о автомобиле на экран.
  if (c) {
    c.print();
  }
}
function task40() {
  // Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
  // Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
  if (c) {
    c.print();
    let dist = 1000;
    output.innerHTML += `<div>Distance: ${dist}</div><div>time: ${c.countTime(
      dist
    )}</div>`;
  }
}

function task41() {
  // Задание 41
  const car1 = {
    producer: "Toyota1",
    model: "some1",
    year: 2021,
    speed: 120,
  };
  car1.print = function () {
    output.innerHTML = `<div>producer: ${this.producer}</div>
      <div>model: ${this.model}</div>
      <div>year: ${this.year}</div>
      <div>speed: ${this.speed}</div>`;
  };

  car1.countTime = function (distance) {
    if (this.speed === 0) return 0;
    let time = distance / this.speed;
    let breaks = Math.floor(time / 4);
    return time + breaks;
  };
  car1.print();
  output.innerHTML += `<div>Distance: ${1000}</div><div>time: ${Math.floor(
    car1.countTime(1000)
  )}</div>`;
}

function Fraction(numerator, denominator) {
  this.numerator = numerator;
  if (denominator === 0) {
    throw new Error("Знаменатель не может быть равен нулю");
  }
  this.denominator = denominator;
  this.print = () => {
    output.textContent = `${this.numerator}/${this.denominator}`;
  };

  const gcd = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };
  this.simplify = () => {
    const gcdValue = gcd(this.numerator, this.denominator);
    this.numerator /= gcdValue;
    this.denominator /= gcdValue;
  };

  this.add = (other) => {
    if (other instanceof Fraction) {
      let tempNumerator =
        this.numerator * other.denominator + other.numerator * this.denominator;
      let tempDenominator = this.denominator * other.denominator;
      let ret = new Fraction(tempNumerator, tempDenominator);

      ret.simplify();
      return ret;
    }
    throw new Error("ожидается дробь");
  };
  this.substruct = (other) => {
    if (other instanceof Fraction) {
      let tempNumerator =
        this.numerator * other.denominator - other.numerator * this.denominator;
      let tempDenominator = this.denominator * other.denominator;
      let ret = new Fraction(tempNumerator, tempDenominator);

      ret.simplify();
      return ret;
    }
    throw new Error("ожидается дробь");
  };
  this.multiply = (other) => {
    if (other instanceof Fraction) {
      let tempNumerator = this.numerator * other.numerator;
      let tempDenominator = this.denominator * other.denominator;
      let ret = new Fraction(tempNumerator, tempDenominator);

      ret.simplify();
      return ret;
    }
    throw new Error("ожидается дробь");
  };
  this.divide = (other) => {
    if (other instanceof Fraction) {
      let tempNumerator = this.numerator * other.denominator;
      let tempDenominator = this.denominator * other.numerator;
      let ret = new Fraction(tempNumerator, tempDenominator);

      ret.simplify();
      return ret;
    }
    throw new Error("ожидается дробь");
  };
}

let fr1;
function task42() {
  // Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
  fr1 = new Fraction(1, 2);
  output.textContent = "объект создан";
  fr1.print();
}
function task43() {
  // Функция сложения 2 объектов-дробей.
  let fr2 = new Fraction(1, 3);
  if (fr1) {
    let res = fr1.add(fr2);
    output.textContent = `${fr1.numerator}/${fr1.denominator} + ${fr2.numerator}/${fr2.denominator} = ${res.numerator}/${res.denominator}`;
  } else output.textContent = "первая дробь не создана.";
}
function task44() {
  // Функция вычитания 2 объектов-дробей.
  let fr2 = new Fraction(1, 3);
  if (fr1) {
    let res = fr1.substruct(fr2);
    output.textContent = `${fr1.numerator}/${fr1.denominator} - ${fr2.numerator}/${fr2.denominator} = ${res.numerator}/${res.denominator}`;
  } else output.textContent = "первая дробь не создана.";
}
function task45() {
  // Функция умножения 2 объектов-дробей.
  let fr2 = new Fraction(1, 3);
  if (fr1) {
    let res = fr1.multiply(fr2);
    output.textContent = `${fr1.numerator}/${fr1.denominator} * ${fr2.numerator}/${fr2.denominator} = ${res.numerator}/${res.denominator}`;
  } else output.textContent = "первая дробь не создана.";
}
function task46() {
  // Функция деления 2 объектов-дробей.
  let fr2 = new Fraction(1, 3);
  if (fr1) {
    let res = fr1.divide(fr2);
    output.textContent = `${fr1.numerator}/${fr1.denominator} / ${fr2.numerator}/${fr2.denominator} = ${res.numerator}/${res.denominator}`;
  } else output.textContent = "первая дробь не создана.";
}
function task47() {
  // Функция сокращения объекта-дроби.
  let fr2 = new Fraction(4, 8);
  fr2.print();
  output.textContent = `${fr2.numerator}/${fr2.denominator} = `;
  fr2.simplify();
  output.textContent += `${fr2.numerator}/${fr2.denominator} `;
}

function Time(hours = 0, minutes = 0, seconds = 0) {
  this.seconds = seconds;
  this.minutes = minutes;
  this.hours = hours;

  const pad = (n) => String(n).padStart(2, "0");
  this.print = () => {
    output.textContent = `${pad(this.hours)}:${pad(this.minutes)}:${pad(
      this.seconds
    )}`;
  };

  this.normalize = () => {
    let tempM = Math.floor(this.seconds / 60);
    this.seconds = this.seconds % 60;
    let tempH = Math.floor((this.minutes + tempM) / 60);
    this.minutes = (this.minutes + tempM) % 60;
    this.hours = (this.hours + tempH) % 24;
  };

  this.changeSeconds = (seconds) => {
    this.seconds += seconds;
    this.normalize();
  };
  this.changeMinutes = (minutes) => {
    this.minutes += minutes;
    this.normalize();
  };
  this.changeHours = (hours) => {
    this.hours += hours;
    this.normalize();
  };

  this.normalize();
}

let t;

function task48() {
  // Создать объект, описывающий время (часы, минуты, секунды), и следующие функ­ции для работы с этим объектом.
  t = new Time(24, 61, 61);
  output.textContent = "объект времени создан";
}
function task49() {
  // Функция вывода времени на экран.
  if (t instanceof Time) t.print();
  else output.textContent = "объект времени НЕ создан";
}
function task50() {
  // Функция изменения времени на переданное количество секунд.
  if (t instanceof Time) {
    t.changeSeconds(80);
    t.print();
  } else output.textContent = "объект времени НЕ создан";
}
function task51() {
  // Функция изменения времени на переданное количество минут.
  if (t instanceof Time) {
    t.changeMinutes(80);
    t.print();
  } else output.textContent = "объект времени НЕ создан";
}
function task52() {
  // Функция изменения времени на переданное количество часов.
  if (t instanceof Time) {
    t.changeHours(80);
    t.print();
  } else output.textContent = "объект времени НЕ создан";
}

function Good(name, quantity, isBought = false) {
  this.name = name;
  this.quantity = quantity;
  this.isBought = isBought;
}

const shoppingList = [
  { name: "Хлеб", quantity: 1, isBought: false },
  { name: "Молоко", quantity: 2, isBought: true },
  { name: "Яблоки", quantity: 5, isBought: false },
];

let g = new Good("Корм для Шуни", 1, false);
shoppingList.push(g);

shoppingList.print = function () {
  this.sort((a, b) => (a.isBought ? 1 : -1));
  output.innerHTML = `<h3>список покупок</h3>`;
  this.forEach((el) => {
    output.innerHTML += `<div>${el.name} - ${el.quantity}: ${
      el.isBought ? "✔️" : ""
    }</div>`;
  });
};

shoppingList.isInList = function (item) {
  let inList = false;
  for (let el of shoppingList) {
    if (el.name === item.name) {
      inList = true;
    }
  }
  return inList;
};

shoppingList.getIndex = function (item) {
  /* for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].name === item.name) {
      return i;
    }
  }
  return -1;*/
  return this.findIndex((el) => el.name === item.name);
};

shoppingList.addGood = function (item) {
  let ind = this.getIndex(item);
  if (ind >= 0 && !this[ind].isBought) {
    this[ind].quantity += item.quantity;
  } else this.push(item);
};

shoppingList.buyGood = function (item) {
  let ind = this.getIndex(item);
  if (ind >= 0) {
    this[ind].isBought = true;
  } else output.textContent = "товара нет в списке покупок.";
};

function task53() {
  // Создать массив «список покупок».
  // Каждый элемент массива является объектом, который содержит
  // название товара, необходимое количество и то, был ли он куплен или нет.
  // Напишите несколько функций для работы с таким массивом.
  output.textContent = "массив создан";
}
function task54() {
  // Вывод всего списка на экран таким образом, чтобы сначала шли не купленные товары,
  // а потом купленные.
  shoppingList.print();
}
function task55() {
  // Добавление покупки в список. Обратите внимание, что при добавлении покупки с уже
  // существующим товаром в списке, нужно увеличить количество в существующей покупке,
  // а не добавлять новую.
  let g1 = new Good("Корм для Шуни", 1, false);
  shoppingList.addGood(g1);
  output.textContent = "товар добавлен";
}
function task56() {
  // Приобретение товара. Функция получает название товара и помечает его как купленный.
  shoppingList.buyGood(new Good("Корм для Шуни"));
  output.textContent = "товар куплен";
}

function CheckItem(name, quantity, price) {
  this.name = name;
  this.quantity = quantity;
  this.price = price;
}

const Check = [];
const padCheck = (n) => String(n).padStart(20, "_");
Check.print = function () {
  let html = `<h4>чек</h4><div>${padCheck("наименование")} ${padCheck(
    "количество"
  )} ${padCheck("цена за ед/уп/кг")} ${padCheck("общая стоимость")}   </div>`;
  for (let el of Check) {
    html += `<div>${padCheck(el.name)} ${padCheck(el.quantity)} ${padCheck(
      el.price
    )} ${padCheck(el.quantity * el.price)}</div>`;
  }
  output.innerHTML = html;
};

Check.getSum = function () {
  let ret = 0;
  this.forEach((el) => (ret += el.quantity * el.price));
  return ret;
};

Check.getMostExpencive = function () {
  if (this.length === 0) return null;

  const mostExpensive = this.reduce((acc, el) => {
    return el.quantity * el.price > acc.quantity * acc.price ? el : acc;
  }, this[0]);

  return `${mostExpensive.name} (${mostExpensive.quantity}* ${
    mostExpensive.price
  }грн. = ${mostExpensive.quantity * mostExpensive.price}грн.)`;
};

Check.priceAVG = function () {
  if (this.length === 0) return null;

  const price = this.reduce((acc, el) => {
    return (acc += el.quantity * el.price);
  }, 0);

  const quantity = this.reduce((acc, el) => {
    return (acc += el.quantity);
  }, 0);
  return quantity > 0 ? price / quantity : 0;
};

function task57() {
  // Создать массив, описывающий чек в магазине.
  // Каждый элемент массива состоит из названия товара, его количества и цены за единицу.
  // Напишите следующие функции.

  if (Check && Check.length === 0)
    Check.push(
      new CheckItem("Хлеб", 2, 17),
      new CheckItem("Молоко", 1, 70),
      new CheckItem("Яблоки", 6, 45),
      new CheckItem("Кофе", 1, 620),
      new CheckItem("Яйца", 10, 7),
      new CheckItem("Сыр", 1, 250)
    );
  output.textContent = "чек создан и заполнен";
}

function task58() {
  // ЗВывод чека на экран.
  Check.print();
}
function task59() {
  // Вычисление общей суммы покупки.
  output.innerHTML = `Общая сумма покупки: ${Check.getSum().toFixed(2)} грн.`;
}
function task60() {
  // Получение самой дорогой покупки в чеке.
  output.textContent = `Самая дорогая покупка: ${Check.getMostExpencive()}`;
}
function task61() {
  // Вычисление средней стоимости одного товара в чеке.
  output.textContent = `Средняя стоимость одного товара в чеке: ${Check.priceAVG().toFixed(
    2
  )}грн.`;
}
function Style(name, value) {
  this.name = name;
  this.value = value;
}

const styles = [];
function task62() {
  // Создать массив стилей CSS (цвет, размер шрифта, выравнивание, подчеркивание и т.д.). Каждый элемент массива — это объект, состоящий из двух свойств: названия стиля и значения стиля.

  styles.push(
    new Style("color", "rgb(228, 40, 146)"),
    new Style("font-size", "16px"),
    new Style("text-align", "center"),
    new Style("text-decoration", "underline"),
    new Style("font-weight", "bold"),
    new Style("font-family", "Arial, sans-serif"),
    new Style("background-color", "rgb(235, 200, 220)"),
    new Style("margin", "20px"),
    new Style("padding", "10px"),
    new Style("border", "2px solid black"),
    new Style("border-radius", "5px"),
    new Style("line-height", "1.5"),
    new Style("box-shadow", "2px 2px 10px rgba(0,0,0,0.5)"),
    new Style("display", "flex"),
    new Style("justify-content", "space-between"),
    new Style("align-items", "center"),
    new Style("opacity", "0.9"),
    new Style("visibility", "visible"),
    new Style("z-index", "100"),
    new Style("cursor", "pointer"),
    new Style("transition", "all 0.3s ease")
  );
  output.textContent = "массив стилей создан";
}
function task63() {
  // И напишите функцию, которая получает массив стилей и текст и выводит этот текст
  // с помощью document.write() в тегах, добавив к открывающему тегу атрибут style со всеми стилями,
  // перечисленными в массиве.

  const applyStyles = (text, styles) => {
    if (
      typeof text === "string" &&
      Array.isArray(styles) &&
      styles.length > 0
    ) {
      const element = document.createElement("div");
      element.textContent = text;
      styles.forEach((st) => {
        element.style[st.name] = st.value;
      });

      output.appendChild(element);
    } else output.textContent = "стили не определены";
  };
  applyStyles("текст с примененнными стилями", styles);
}

function Auditorium(name, placeCount, deprtmntOwner) {
  this.name = name;
  this.placeCount = placeCount;
  this.deprtmntOwner = deprtmntOwner;
}

const auditoriums = [];
auditoriums.print = function () {
  let html = "";
  this.forEach((el) => {
    if (el instanceof Auditorium)
      html += `<div>название: ${el.name} количество мест: ${el.placeCount} кафедра: ${el.deprtmntOwner}</div>`;
  });
  output.innerHTML += html;
};

auditoriums.getByOwner = function (department) {
  if (this.length > 0) {
    let ret = this.filter((el) => el.deprtmntOwner === department);
    ret.print = this.print; // потому, что не наследуется
    return ret;
  } else {
    output.textContent = "массив аудиторий пуст.";
    return [];
  }
};

auditoriums.getByVolumeOwner = function (group) {
  if (this.length > 0) {
    let ret = this.filter(
      (el) =>
        el.deprtmntOwner === group.department &&
        el.placeCount >= group.studentCount
    );
    ret.print = this.print; // потому, что не наследуется
    return ret;
  } else {
    output.textContent = "массив аудиторий пуст.";
    return [];
  }
};

auditoriums.sortByPlaceCount = function () {
  if (this.length > 0) {
    this.sort((el1, el2) => el1.placeCount - el2.placeCount);
    //this.print();
  } else {
    output.textContent = "массив аудиторий пуст.";
  }
};
auditoriums.sortByName = function () {
  if (this.length > 0) {
    this.sort((el1, el2) => {
      if (el1.name < el2.name) return -1;
      if (el1.name > el2.name) return 1;
      return 0;
    });
    //this.print();
  } else {
    output.textContent = "массив аудиторий пуст.";
  }
};
function task64() {
  // Создайте массив аудиторий академии.
  // Объект аудитории состоит из названия, количества мест (от 10 до 20) и названия кафедры,
  // для которой она предназначена.
  auditoriums.push(
    new Auditorium(
      "class 1",
      Math.floor(Math.random() * 11 + 10),
      "programming"
    ),
    new Auditorium(
      "class 2",
      Math.floor(Math.random() * 11 + 10),
      "programming"
    ),
    new Auditorium(
      "class 3",
      Math.floor(Math.random() * 11 + 10),
      "programming"
    ),
    new Auditorium(
      "class 4",
      Math.floor(Math.random() * 11 + 10),
      "programming"
    ),
    new Auditorium(
      "class 5",
      Math.floor(Math.random() * 11 + 10),
      "programming"
    ),
    new Auditorium(
      "class 6",
      Math.floor(Math.random() * 11 + 10),
      "programming"
    ),
    new Auditorium("class 11", Math.floor(Math.random() * 11 + 10), "design"),
    new Auditorium("class 12", Math.floor(Math.random() * 11 + 10), "design"),
    new Auditorium("class 13", Math.floor(Math.random() * 11 + 10), "design"),
    new Auditorium("class 14", Math.floor(Math.random() * 11 + 10), "design"),
    new Auditorium("class 15", Math.floor(Math.random() * 11 + 10), "design"),
    new Auditorium("class 16", Math.floor(Math.random() * 11 + 10), "design"),
    new Auditorium(
      "class 21",
      Math.floor(Math.random() * 11 + 10),
      "hardware & security"
    ),
    new Auditorium(
      "class 22",
      Math.floor(Math.random() * 11 + 10),
      "hardware & security"
    ),
    new Auditorium(
      "class 23",
      Math.floor(Math.random() * 11 + 10),
      "hardware & security"
    ),
    new Auditorium(
      "class 24",
      Math.floor(Math.random() * 11 + 10),
      "hardware & security"
    ),
    new Auditorium(
      "class 25",
      Math.floor(Math.random() * 11 + 10),
      "hardware & security"
    ),
    new Auditorium(
      "class 26",
      Math.floor(Math.random() * 11 + 10),
      "hardware & security"
    )
  );
  output.textContent = "массив аудиторий создан";
}

function task65() {
  // Вывести все аудитории.
  if (auditoriums.length > 0) auditoriums.print();
  else output.textContent = "массив аудиторий не инициализирован";
}
function task66() {
  // Отобразить аудитории для указанного факультета.
  let programmerClasses = auditoriums.getByOwner("programming");
  programmerClasses.print();
}
function task67() {
  // Отобразить только те аудитории, которые подходят для переведенной груп­пы.
  // Объект-группа состоит из названия, количества студентов и названия ка­федры.
  let group = {
    name: "пв423",
    studentCount: Math.floor(Math.random() * 11 + 10),
    department: "programming",
  };
  group.print = function () {
    let html = `<div>group name: ${this.name}, student count = ${this.studentCount}, department: ${this.department}</div>`;
    output.innerHTML += html;
  };
  let suitableClasses = auditoriums.getByVolumeOwner(group);
  suitableClasses.print();
  group.print();
}
function task68() {
  // Функция сортировки аудиторий по количеству мест
  auditoriums.sortByPlaceCount();
  auditoriums.print();
}
function task69() {
  // Функция сортировки аудиторий по названию (по алфавиту).
  auditoriums.sortByName();
  auditoriums.print();
}

function getStatistic(text) {
  if (typeof text != "string") throw new Error("аргумент метода - не строка");
  let letters = 0;
  let digits = 0;
  let punctuation = 0;
  let other = 0;
  for (let ch of text) {
    if (/[a-zа-яё]/i.test(ch)) letters++;
    else if (/\d/.test(ch)) digits++;
    else if (/[.,?!@#$%^&*()_\-\[\]{};:]/.test(ch)) punctuation++;
    else other++;
  }
  return { letters, digits, punctuation, other };
}

function task70() {
  // Написать функцию, которая принимает строку и выводит статистику о ней:
  // количество букв, количество цифр и количество других знаков.
  let text = `// Написать функцию, которая принимает строку и выводит статистику о ней: // количество букв, количество цифр и количество других знаков.`;
  let res = getStatistic(text);
  output.innerHTML = `<div>букв: ${res.letters}</div><div>цифр: ${res.digits}</div><div>знаков пунктуации: ${res.punctuation}</div><div>другие символы: ${res.other}</div>`;
}

function promtNumbers(num) {
  if (typeof num !== "number") throw new Error("Аргумент не является числом");
  if (num > 99 || num < 10) throw new Error("Число не двузначное");

  let ones = [
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
  ];
  let teens = [
    "одиннадцать",
    "двенадцать",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать",
  ];
  let dozens = [
    "десять",
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
    "шестьдесят",
    "семьдесят",
    "восемьдесят",
    "девяносто",
  ];

  let tens = Math.floor(num / 10);
  let units = num % 10;

  if (tens === 1 && units !== 0) {
    return teens[units - 1];
  } else if (units === 0) {
    return dozens[tens - 1];
  } else {
    return `${dozens[tens - 1]} ${ones[units - 1]}`;
  }
}

function task71() {
  // Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде.
  // Например: 35 — тридцать пять, 89 — восемьдесят девять, 12 — двенадцать.
  //output.textContent = promtNumbers(35);
  //output.textContent = promtNumbers(89);
  //output.textContent = promtNumbers(12);
  output.textContent = promtNumbers(10);
}
function changeRegister(text) {
  if (typeof text != "string") throw new Error("аргумент метода - не строка");
  let ret = "";
  for (let ch of text) {
    if (/[a-zа-яё]/.test(ch)) ret += ch.toUpperCase();
    else if (/[A-ZА-ЯЁ]/.test(ch)) ret += ch.toLowerCase();
    else if (/\d/.test(ch)) ret += "_";
    else ret += ch;
  }
  return ret;
}
function task72() {
  // Написать функцию, которая заменяет в полученной строке большие буквы на маленькие,
  // маленькие на большие,
  // а цифры на знак нижнего подчеркивания.
  output.textContent = changeRegister("aPOЗА УПАЛА НА ЛАПУ аЗОРА. 5 РАЗ");
}
function changeToCamelCase(style) {
  if (typeof style != "string") throw new Error("аргумент метода - не строка");
  let ret = "";
  /*
  let ind = style.indexOf("-");
  
  if (ind != -1) {
    ret = style.slice(0, ind);
    ret += style[ind + 1].toUpperCase();
    ret += style.slice(ind + 2);
  }
*/
  ret = style
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
  return ret;
}

function task73() {
  // Написать функцию, которая преобразует названия css стилей с дефисом в название в camelcase стиле:
  // font-size в fontSize, background-color в background­Color, text-align в textAlign.
  const styles = [
    "font-size",
    "background-color",
    "text-align",
    "border-left-width",
  ];

  let result = styles.map((s) => changeToCamelCase(s)).join(", ");

  output.textContent = result;
}
function getAbbreviation(text) {
  if (typeof text != "string") throw new Error("аргумент метода - не строка");
  let wordsArr = text.split(/[^а-яёa-z]+/i);
  let ret = "";
  for (let i = 0; i < wordsArr.length; i++) {
    //alert(wordsArr[i]);
    ret += wordsArr[i][0].toUpperCase();
  }
  return ret;
}
function task74() {
  // Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру.
  // Например: cascading style sheets в CSS, объектно-ориентированное программирование в ООП.
  //output.textContent = getAbbreviation("cascading style sheets");
  output.textContent = getAbbreviation(
    "объектно-ориентированное программирование"
  );
}
function joinStrings(...strings) {
  return strings.join(" ");
}
function task75() {
  // Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и возвращает ее.
  output.textContent = joinStrings(
    "Написать функцию,",
    "которая принимает любое количество строк,",
    "объединяет их в одну длинную строку и возвращает ее."
  );
}

function Calc(expression) {
  if (typeof expression !== "string")
    throw new Error("аргумент метода - не строка");

  const operands = expression.split(/[+\-*/]/);
  const match = expression.match(/[+\-*/]/);
  const ind = match ? expression.indexOf(match[0]) : -1;
  const sign = match ? match[0] : null;

  //alert(`Операнды: ${operands}\nЗнак: ${sign}\nИндекс знака: ${ind}`);
  switch (sign) {
    case "+":
      return Number(operands[0]) + Number(operands[1]);
    case "-":
      return Number(operands[0]) - Number(operands[1]);
    case "*":
      return Number(operands[0]) * Number(operands[1]);
    case "/":
      return (Number(operands[0]) / Number(operands[1])).toFixed(2);
  }
  return Number(operands[0]);
}

function task76() {
  // Написать функцию — калькулятор.
  // Функция принимает строку с примером,
  // определяет какое действие необходимо выполнить (+, -, *, /),
  // переводит операнды в числа, решает пример и возвращает результат.

  output.textContent = `2 + 3 = ${Calc("2 + 3")}`;
}
/*
function task77() {
  // Написать функцию, которая получает url и выводит подробную информацию о нем. Например: 
  // url "https://itstep.org/ua/about", информация «протокол: https, домен: itstep.org, путь: /ua/about».
}
function task78() {
  //Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, 
  // разбитые с помощью указанного разделителя. Например: строка «10/08/2020», разделитель «/», результат: «10», «08», «2020». 
  // Выполняя задание, не используйте функцию split().
}
function task79() {
  // Написать функцию вывода текста по заданному шаблону. 
  // Функция принимает первым параметром шаблон, в тексте которого может использоваться %, 
  // после символа % указывается индекс входного параметра. 
  // При выводе вместо %индекс необходимо вывести значение соответствующего входного параметра. 
  // Например: print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020) должна вывести «Today is Monday 10.8.2020».
}
*/
