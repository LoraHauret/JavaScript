/*let test = 10;
alert(test);*/
function task1() {
  /*
  Запросіть у користувача його ім'я та виведіть у відповідь «Привіт, (його ім'я)!».
   */
  let userName = prompt("Введите свое имя: ");
  if (userName === null || userName.trim() === "") userName = "незнакомец";
  alert("Привет, " + userName + "!");
}

function task2() {
  /*Запросіть у користувача його рік народження, підрахуйте скільки йому років і виведіть результат. 
    Поточний рік вкажіть у коді як константу.*/
  let userBirthYear = prompt("введите год своего рождения: ");
  if (userBirthYear === null || userBirthYear.trim() === "")
    alert("возраст неизвестен");
  else {
    userBirthYear = parseInt(userBirthYear);
    if (!isNaN(userBirthYear)) {
      const currentYear = 2025;
      if (userBirthYear < 1900 || userBirthYear > currentYear) {
        alert("введен нереалистичный год");
      } else {
        let userAge = currentYear - userBirthYear;
        alert(`Вам ${userAge} лет`);
      }
    } else alert("неверно введен год рождения");
  }
}

function task3() {
  /*Запросіть у користувача довжину сторони квадрата та виведіть його периметр.*/
  let rectSide = prompt("введите длину стороны квадрата: ");
  if (rectSide != null) {
    rectSide = Number(rectSide.trim());
    if (!isNaN(rectSide)) alert(`периметр квадрата = ${rectSide * 4}`);
    else alert("неверный ввод");
  } else alert("подсчет невозможен");
}
function task4() {
  /*Запросіть у користувача радіус кола та виведіть його площу.*/
  let circleRadius = prompt("введите радиус круга: ");
  if (circleRadius != null) {
    circleRadius = Number(circleRadius.trim());
    if (!isNaN(circleRadius) && circleRadius >= 0)
      alert(
        `площадь круга = ${(Math.PI * Math.pow(circleRadius, 2)).toFixed(2)}`
      );
    else alert("Ой! Пожалуйста, введите положительное число для радиуса.");
  } else
    alert(
      "подсчет невозможен. попробуйте еще раз, я уверен(а), у вас получится!:)"
    );
}

function IsNumber(str) {
  let n = Number(str);
  if (!isNaN(n)) return true;

  alert("введено неверное число");
  return false;
}

function IsNotEmptyString(str) {
  if (str === null || str == "") {
    alert("не произведен ввод или введена пустая строка");
    return false;
  }
  return true;
}

function isInRange(num, min, max) {
  if (num > min && num <= max) return true;
  alert("число не находится в допустимом диапазоне.");
  return false;
}

function task5() {
  /*Запросіть у користувача відстань у кілометрах між двома містами та за скільки годин він хоче дістатися. 
  Порахуйте швидкість, з якою потрібно рухатися, щоб встигнути вчасно.*/
  let S = prompt("введите расстояние в км: ").trim();
  if (IsNotEmptyString(S) && IsNumber(S)) {
    S = Number(S);
    let T = prompt(
      "введите предполагаемое время дороги\nв формате часы:минуты (:/-)"
    );
    if (IsNotEmptyString(T)) {
      let timeArr = T.split(/[/:-]/);
      if (
        timeArr.length === 2 &&
        IsNumber(timeArr[0]) &&
        IsNumber(timeArr[1])
      ) {
        let minutes = parseInt(timeArr[1]);
        T = parseInt(timeArr[0]);
        T += minutes / 60;
        if (T > 0) {
          let V = T > 0 ? S / T : 0;
          alert(`вам необходимо двигаться со скоростью ${V.toFixed(2)} км/ч`);
        } else alert("время долно быть больше нуля");
      }
    }
  }
}

function task6() {
  /*Реалізуйте конвертор валют. 
  Користувач вводить долари, програма конвертує у євро. 
  Курс валюти зберігайте у константі.*/
  let dollars = prompt("введите количество долларов: ");
  if (IsNotEmptyString(dollars) && IsNumber(dollars)) {
    const rate = 0.9264;
    dollars = Number(dollars);
    alert(`$${dollars} = ${dollars * rate} euro`);
  }
}

function task7() {
  /*Користувач вказує обсяг флешки у ГБ. 
  Програма має підрахувати скільки файлів розміром 820 МБ вміститься на флешку.*/
  let flashVolume = prompt("введите объем флешки в ГБ: ");
  if (IsNotEmptyString(flashVolume) && IsNumber(flashVolume)) {
    flashVolume = Number(flashVolume);
    flashVolume *= 1024;
    alert(
      `на флешку поместится ${(flashVolume / 820).toFixed(
        0
      )} файлов, размером 820МБ`
    );
  }
}

function GetCents(num1, num2) {
  return num1 * 100 + num2;
}

function GetMoney(num) {
  let num1 = Math.floor(num / 100);
  let num2 = num % 100;
  return num1.toString() + "." + num2.toString();
}

function task8() {
  /*Користувач вводить суму грошей у гаманці та вартість однієї шоколадки. 
  Програма виводить скільки шоколадок може купити користувач і скільки здачі в нього залишиться.*/
  let userCash = prompt("введите количество денег в кошельке.\n(.,): ");
  if (IsNotEmptyString(userCash)) {
    let moneyArr = userCash.split(/[.,]/);
    if (IsNumber(moneyArr[0] && IsNumber(moneyArr[1]))) {
      moneyArr = moneyArr.map(Number);
      let cholateCost = prompt("введите стоимость шоколадки.\n(.,)");
      if (IsNotEmptyString(cholateCost)) {
        let costArr = cholateCost.split(/[.,]/);
        if (IsNumber(costArr[0] && IsNumber(costArr[1]))) {
          costArr = costArr.map(Number);
          userCash = GetCents(moneyArr[0], moneyArr[1]);
          cholateCost = GetCents(costArr[0], costArr[1]);
          let count = userCash / cholateCost;
          count = Math.floor(count);
          let rest = userCash - cholateCost * count;
          rest = GetMoney(rest);
          alert(`вы можете купить ${count} шоколадок\nу вас останется ${rest}`);
        }
      }
    }
  }
}

function task9() {
  /*Запросіть у користувача тризначне число і виведіть його паліндром (число-перевертень). 
  Для вирішення завдання вам знадобиться оператор % (залишок від ділення).*/
  let userNumber = prompt("введите трехзначное число").trim();
  if (IsNotEmptyString(userNumber) && IsNumber(userNumber)) {
    userNumber = parseInt(userNumber);
    if (isInRange(userNumber, 99, 999)) {
      let hundreds = Math.floor(userNumber / 100);
      let tens = Math.floor((userNumber % 100) / 10);
      let units = userNumber % 10;

      let reversedNumber = units * 100 + tens * 10 + hundreds;
      if (userNumber === reversedNumber)
        alert(`число ${userNumber} является палиндромом`);
      else alert(`число ${userNumber} НЕ является палиндромом`);
    }
  }
}
function task10() {
  /*Запросіть у користувача ціле число і виведіть у відповідь парне або непарне. 
  В завданні використовуйте логічні оператори і не використовуйте if та switch.*/
  let userNumber = prompt("введите число").trim();
  alert(userNumber % 2 === 0 ? "число четное" : "число нечетное");
}
