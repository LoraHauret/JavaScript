const taskDescriptions = {
  btn1: "Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше чем второе, 1 — если первое больше чем второе и 0 — если числа равны.",
  btn2: "Написать функцию, которая вычисляет факториал переданного ей числа.",
  btn3: "Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.",
  btn4: "Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.",
  btn5: "Написать функцию, которая проверяет является ли переданное ей число совер­шенным. Совершенное число — это число, равное сумме всех своих собственных делителей.",
  btn6: "Написать функцию, которая принимает минимальное и максимальное значения для диапазона и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтоб узнавать совершенное число или нет.",
  btn7: "Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс». Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.",
  btn8: "Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.",
  btn9: "Написать функцию, которая принимает количество секунд, перевод их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».",
  btn10:
    "Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2 заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».",
  btn11:
    "Написать функцию, которая принимает 2 числа и возвращает меньшее из них.",
  btn12:
    "Написать функцию, которая возводит переданное число в указанную степень.",
  btn13:
    "Написать функцию, которая принимает 2 числа и знак (+, -, *, /), считает пример и возвращает результат.",
  btn14:
    "Написать функцию, которая проверяет является ли переданное ей число прос­тым.",
  btn15:
    "Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9.",
  btn16:
    "Написать функцию, которая реализует работу оператора %. Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй. В функции использовать только +, -, *, /, оператор % не использовать. ",
  btn17:
    "Написать функцию, которая принимает от 1 до 5 чисел чисел и возвращает их сумму.",
  btn18:
    "Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.",
  btn19:
    "Написать функцию, которая выводит все четные или нечетные числа в указанном пользователем диапазоне. Какие числа выводить определяется третьим параметром типа bool (true — четные, false — нечетные).",
  btn20:
    "Написать функцию, которая принимает дату (день, месяц, год) и возвращает дату следующего дня в виде строки «дд.мм.гггг». Проверку на високосный год желательно написать отдельной функцией.",
  btn21:
    "Написать функцию, которая принимает дату (день, месяц, год) и возвращает дату следующего дня в виде строки «дд.мм.гггг». Проверку на високосный год желательно написать отдельной функцией.",
};

window.addEventListener("DOMContentLoaded", () => {
  for (const [id, description] of Object.entries(taskDescriptions)) {
    const button = document.getElementById(id);
    if (button) {
      button.title = description;
    }
  }
});

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    let el = document.getElementById("result");
    el.innerHTML = "";
    el.textContent = "";
  });
});

//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше чем второе, 1 — если первое больше чем второе и 0 — если числа равны.
function task1() {
  const f = (a, b) => {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  };
  let first = parseInt(Math.random() * 10, 10);
  let second = parseInt(Math.random() * 10, 10);
  let result = f(first, second);
  const res = document.getElementById("result");
  res.textContent = first + ", " + second + " = " + result;
}

// Написать функцию, которая вычисляет факториал переданного ей числа.
function task2() {
  let num = parseInt(Math.random() * 10 + 1, 10);
  const f = (a) => {
    let result = 1;
    for (let i = a; i > 1; i--) result *= i;
    return result;
  };

  const f1 = (n) => (n <= 1 ? 1 : n * f1(n - 1));

  const el = document.getElementById("result");

  el.textContent = num + "! = " + f1(num);
}

function task3() {
  // Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
  // Например: цифры 1, 4, 9 превратятся в число 149.
  let num1 = parseInt(Math.random() * 9 + 1, 10);
  let num2 = parseInt(Math.random() * 10, 10);
  let num3 = parseInt(Math.random() * 10, 10);
  const f = (a, b, c) => parseInt(`${a}${b}${c}`);
  const el = document.getElementById("result");
  el.textContent =
    num1 + " + " + num2 + " + " + num3 + " = " + f(num1, num2, num3).toString();
}

function task4() {
  // Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
  // Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
  let num1 = parseInt(Math.random() * 10 + 1, 10);
  let num2 = parseInt(Math.random() * 10, 10);

  const f = (a, b = 0) =>
    b === 0
      ? `S квадрата со стороной ${a} = ` + a * a
      : `S прямоугольника со сторонами ${a}; ${b} = ` + a * b;
  const el = document.getElementById("result");
  el.textContent = f(num1, num2);
}

const getDivisors = (a) => {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      divisors.push(i);
      if (i !== a / i && i !== 1) divisors.push(a / i);
    }
  }
  return divisors.filter((d) => d !== a);
};

const getSum = (arr) => {
  let ret = 0;
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      ret += arr[i];
    }
  }
  return ret;
};

function task5() {
  // Написать функцию, которая проверяет является ли переданное ей число совер­шенным.
  // Совершенное число — это число, равное сумме всех своих собственных делителей.
  let num = parseInt(Math.random() * 100 + 1);
  //alert(num);

  let divisorArr = getDivisors(num);
  let sum = getSum(divisorArr);
  const el = document.getElementById("result");
  //alert(divisorArr.toString());
  el.textContent = `число: ${num} ${
    num === sum ? "совершенное" : "не является совершенным"
  } делители: ${divisorArr.join("+")} = сумма ${sum}`;
}

function task6() {
  // Написать функцию, которая принимает минимальное и максимальное значения для диапазона и выводит
  // только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию,
  // чтоб узнавать совершенное число или нет.
  const getIdealNumbers = (min, max) => {
    let ret = [];
    for (let i = min; i <= max; i++) {
      let divisorArr = getDivisors(i);
      if (getSum(divisorArr) === i) ret.push(i);
    }
    return ret;
  };

  let minimum = parseInt(Math.random() * 50 + 1);
  let maximum = parseInt(Math.random() * 50 + 1 + 50);
  if (minimum > maximum) [minimum, maximum] = [maximum, minimum];
  //alert(minimum + " " + maximum);
  let arr = getIdealNumbers(minimum, maximum);
  const el = document.getElementById("result");
  el.textContent = `нижний лимит: ${minimum}, верхний лимит: ${maximum}, идеальные числа: ${arr.join(
    ", "
  )}`;
}

function task7() {
  // Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
  // Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.",
  const printDate = (h, m = 0, s = 0) => {
    const pad = (t) => String(t).padStart(2, "0");

    let el = document.getElementById("result");
    el.textContent = `${pad(h)}:${m == 0 ? "00" : pad(m)}:${
      s == 0 ? "00" : pad(s)
    }`;
  };
  let time = new Date();
  //printDate(time.getHours(), time.getMinutes(), time.getSeconds());
  //printDate(time.getHours(), 0, time.getSeconds());
  printDate(time.getHours(), time.getMinutes());
}

const getSeconds = (h, m, s) => h * 60 * 60 + m * 60 + s;

function task8() {
  // Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
  let date = new Date();
  let el = document.getElementById("result");
  el.textContent = `${getSeconds(
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  )}`;
}

const pad = (n) => String(n).padStart(2, "0");
const getTime = (seconds) =>
  `${pad(Math.floor(seconds / 3600))}:${pad(
    Math.floor(seconds / 60) % 60
  )}:${pad(seconds % 60)}`;

function task9() {
  // Написать функцию, которая принимает количество секунд, перевод их в часы, минуты и секунды и
  // возвращает в виде строки «чч:мм:сс».

  let el = document.getElementById("result");
  el.textContent = getTime(421);
}

function task10() {
  // Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров,
  // которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
  // При выполнении задания используйте функции из предыдущих 2 заданий:
  // сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».
  let seconds1 = getSeconds(4, 5, 6);
  let seconds2 = getSeconds(3, 5, 6);
  if (seconds1 > seconds2) [seconds1, seconds2] = [seconds2, seconds1];
  let el = document.getElementById("result");
  el.textContent = getTime(seconds2 - seconds1);
}
function task11() {
  // Написать функцию, которая принимает 2 числа и возвращает меньшее из них.
  const min = (a, b) => (a < b ? a : b);
  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  let el = document.getElementById("result");
  el.textContent = `number1 = ${num1}, number2 = ${num2},  min:${min(
    num1,
    num2
  )}`;
}
function task12() {
  // Написать функцию, которая возводит переданное число в указанную степень

  const pow = (n, p) => {
    let res = 1;
    for (let i = 0; i < p; i++) res *= n;
    return res;
  };
  let num1 = Math.floor(Math.random() * 5);
  let num2 = Math.floor(Math.random() * 5);
  let el = document.getElementById("result");
  el.textContent = `number1 = ${num1}, number pow = ${num2},  result:${pow(
    num1,
    num2
  )}`;
}

function task13() {
  // Написать функцию, которая принимает 2 числа и знак (+, -, *, /), считает пример и возвращает результат.
  const calc = (a, b, sign) => {
    switch (sign) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b !== 0) return (a / b).toFixed(2);
        else throw new Error("Division by zero");
      default:
        throw new Error("something went wrong");
    }
  };

  const getSign = () => {
    let s = Math.floor(Math.random() * 4);
    switch (s) {
      case 0:
        return "+";
      case 1:
        return "-";
      case 2:
        return "*";
      case 3:
        return "/";
      default:
        throw new Error("there is no any sign to assign:)");
    }
  };
  let el = document.getElementById("result");

  try {
    let num1 = Math.floor(Math.random() * 5);
    let num2 = Math.floor(Math.random() * 5);
    let sign = getSign();
    let res = calc(num1, num2, sign);
    el.textContent = `${num1} ${sign} ${num2} = ${res}`;
  } catch (e) {
    alert(e);
  }
}

function task14() {
  // Написать функцию, которая проверяет является ли переданное ей число прос­тым.
  let num1 = Math.floor(Math.random() * 100 + 1);
  const isPrime = () => {
    let arr = getDivisors(num1);
    return arr.length === 1;
  };

  let el = document.getElementById("result");
  el.textContent = `число ${num1} ${
    isPrime(num1) ? "является простым" : "НЕ является простым"
  }`;
}

function task15() {
  // Написать функцию, которая принимает число и выводит таблицу умножения для этого числа.
  // Вызовите функцию для всех чисел от 2 до 9.
  const multTable = (num) => {
    let strArr = [];
    for (let i = 1; i <= 10; i++) {
      strArr.push(`${num} * ${i} = ${num * i}`);
    }
    return strArr;
  };

  let el = document.getElementById("result");
  let childEl = document.createElement("div");
  el.appendChild(childEl);
  childEl.className = "table";

  let elArr = [];
  for (let i = 2; i < 10; i++) {
    let childEl1 = document.createElement("div");
    childEl.appendChild(childEl1);
    elArr.push(childEl1);
  }
  for (let i = 0; i < elArr.length; i++) {
    let res = multTable(i + 2);
    for (let j = 0; j < res.length; j++) {
      let childEl2 = document.createElement("div");
      childEl2.textContent = res[j];
      elArr[i].appendChild(childEl2);
    }
  }
}

function task16() {
  // Написать функцию, которая реализует работу оператора %.
  // Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй.
  // В функции использовать только +, -, *, /, оператор % не использовать.
  const mod = (num, divisor) => {
    if (divisor === 0) throw new Error("Division by zero");
    if (divisor === 1 || num - divisor === 0) return 0;
    else if (num - divisor < divisor) return num - divisor;
    return mod(num - divisor, divisor);
  };

  let num1 = Math.floor(Math.random() * 100);
  let num2 = Math.floor(Math.random() * 100 + 1);
  if (num1 < num2) [num1, num2] = [num2, num1];

  //alert(`${27 % 6}`);
  let el = document.getElementById("result");
  el.textContent = `${num1} % ${num2} = ${mod(num1, num2)}`;
}

function task17() {
  // Написать функцию, которая принимает от 1 до 5 чисел чисел и возвращает их сумму.
  const sum = (...numbers) => numbers.reduce((acc, cur) => (acc += cur));

  let arr = [1, 2, 3, 4, 5];
  let el = document.getElementById("result");
  el.textContent = `сумма ${arr.join(", ")} = ${sum(1, 2, 3, 4, 5)}`;
}

function task18() {
  // Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них
  const maxNumber = (...numbers) => numbers.sort()[numbers.length - 1];
  let arr = [7, 2, 9, 4, 1];
  let el = document.getElementById("result");
  el.textContent = `максимальное из ${arr.join(", ")} = ${maxNumber(
    7,
    2,
    9,
    4,
    1
  )}`;
}

function task19() {
  // Написать функцию, которая выводит все четные или нечетные числа в указанном пользователем диапазоне.
  // Какие числа выводить определяется третьим параметром типа bool (true — четные, false — нечетные).

  const getOddEven = (min, max, fOdd) => {
    const checkOdd = (num) => num % 2 === 1;
    //const isEven = (num) => num % 2 === 0;
    let arr = [];
    for (let i = min; i <= max; i++) arr.push(i);

    return arr.filter((el) => (fOdd ? checkOdd(el) : !checkOdd(el)));
  };

  let minNumber = Math.floor(Math.random() * 100);
  let maxNumber = Math.floor(Math.random() * 100);
  if (minNumber > maxNumber) [minNumber, maxNumber] = [maxNumber, minNumber];

  let el = document.getElementById("result");
  el.textContent = `нечетные числа в диапазоне от ${minNumber} до ${maxNumber}: ${getOddEven(
    minNumber,
    maxNumber,
    true
  ).join(", ")}`;
}

function task20() {
  // Написать функцию, которая принимает дату (день, месяц, год)
  // и возвращает дату следующего дня в виде строки «дд.мм.гггг».
  // Проверку на високосный год желательно написать отдельной функцией.
  const isLeap = (y) => y % 400 === 0 || (y % 100 > 0 && y % 4 === 0);
  const getNextDay = (d, m, y) => new Date(y, m, d + 1);

  let today = new Date();
  //alert(today.getDate());
  let tomorrow = getNextDay(
    today.getDate(),
    today.getMonth(),
    today.getFullYear()
  );
  let el = document.getElementById("result");
  el.textContent = `${tomorrow.getDate()}.${tomorrow.getMonth()}.${tomorrow.getFullYear()}`;
}

function task21() {
  const isLeap = (y) => y % 400 === 0 || (y % 100 !== 0 && y % 4 === 0);

  const daysInMonth = (month, year) => {
    if (month === 2) return isLeap(year) ? 29 : 28;
    if ([4, 6, 9, 11].includes(month)) return 30;
    return 31;
  };

  const getNextDay = (d, m, y) => {
    let day = d + 1;
    let month = m;
    let year = y;

    const maxDay = daysInMonth(month, year);
    if (day > maxDay) {
      day = 1;
      month++;
      if (month > 12) {
        month = 1;
        year++;
      }
    }
    return { day, month, year };
  };

  let today = new Date();
  const { day, month, year } = getNextDay(
    today.getDate(),
    today.getMonth() + 1,
    today.getFullYear()
  );

  const pad = (n) => String(n).padStart(2, "0");
  document.getElementById("result").textContent = `${pad(day)}.${pad(
    month
  )}.${year}`;
}
