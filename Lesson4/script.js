let output;
let currentGroup = 1;
let countGroups = 0; /*количество групп тасков в html*/
const taskDescriptions = {
  btn1: 'Реализовать класс PrintMaсhine, которой состоит из:  размера шрифта;  цвета шрифта;  семейства шрифта;  метода print(), который принимает текст и печатает его соответствующим шрифтом с помощью document.write().  // Создать объект такого класса и продемонстрировать работу метода.}',
  btn2: 'Реализовать класс PrintMaсhine, которой состоит из:  размера шрифта; цвета шрифта;  семейства шрифта;  метода print(), который принимает текст и печатает его соответствующим шрифтом с помощью document.write().  // Создать объект такого класса и продемонстрировать работу метода.',
  btn3: 'Реализовать класс, описывающий новостную ленту. Класс должен содержать: массив новостей;  get-свойство, которое возвращает количество новостей; метод для вывода на экран всех новостей; метод для добавления новости;  метод для удаления новости;    метод для сортировки новостей по дате (от последних новостей до старых); метод для поиска новостей по тегу (возвращает массив новостей, в которых указан переданный в метод тег); Продемонстрировать работу написанных методов.',
};
window.addEventListener('DOMContentLoaded', () => {
  for (const [id, description] of Object.entries(taskDescriptions)) {
    const button = document.getElementById(id);
    if (button) {
      button.title = description;
    }
  }
  output = document.getElementById('result');

  let elements = document.querySelectorAll('.button-group');
  countGroups = elements.length;
  elements.forEach((el, i) => {
    el.style.display = i === 0 ? 'block' : 'none';
  });
});

function moveGroup(direction) {
  document.getElementById(`group${currentGroup}`).style.display = 'none'; // текущая группа прячется

  currentGroup += direction;

  // прокрутка
  if (currentGroup < 1) currentGroup = countGroups;
  if (currentGroup > countGroups) currentGroup = 1;

  // новая группа отображается
  document.getElementById(`group${currentGroup}`).style.display = 'block';
}

document.getElementById('group1').style.display = 'block';

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('mouseenter', () => {
    let el = document.getElementById('result');
    el.innerHTML = '';
    el.textContent = '';
  });
});

class PrintMaсhine {
  constructor(fontSize, color, fontFamily) {
    this.fontSize = fontSize;
    this.color = color;
    this.fontFamily = fontFamily;
  }

  print(text) {
    let el = document.createElement('div');
    el.textContent = text;
    el.style.fontSize = this.fontSize + 'px';
    el.style.color = this.color;
    el.style.fontFamily = this.fontFamily;
    output.appendChild(el);
  }
}

function task1() {
  //  Реализовать класс PrintMaсhine, которой состоит из:
  //  размера шрифта;
  //  цвета шрифта;
  //  семейства шрифта;
  //  метода print(), который принимает текст и печатает его соответствующим шрифтом с помощью document.write().
  // Создать объект такого класса и продемонстрировать работу метода.
  let text =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis excepturi repellendus repellat ipsum possimus laborum nihil fugiat quam velit accusamus quia, expedita, harum explicabo alias architecto sequi, necessitatibus doloremque quidem officia! Tempore id, et non dolorum dicta blanditiis beatae asperiores doloribus. Nihil, blanditiis rem hic esse amet corrupti tempora dolores quos ad vero cumque totam natus ab praesentium explicabo! Est modi culpa, quos doloremque laudantium sed asperiores repudiandae quo veniam, assumenda impedit nostrum ad quisquam, cum ex autem iure non at? Fugit aliquid minima magnam nisi quam dicta fuga ea distinctio sunt dolores sapiente, veniam, maxime tempore odio dolorum dolorem.';
  let style = new PrintMaсhine(20, 'green', 'Comic Sans MS');
  style.print(text);
}

class News {
  constructor(header, text, tags, publication_date) {
    this.header = header;
    this.text = text;
    if (tags instanceof Map) {
      this.tags = new Map();
      tags.forEach((value, key) => this.tags.set(key, value));
    } else throw new Error('Ожидается карта, как контейнер тегов');
    if (publication_date instanceof Date) {
      this.publication_date = publication_date;
    } else throw new Error('Ожидается дата');
  }
  getDaysAgo() {
    const now = new Date();
    const diffTime = now - this.publication_date; // разница в миллисекундах
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 0
      ? this.publication_date.toLocaleDateString()
      : `${diffDays} день (дней) назад`;
  }
  print() {
    //alert(this.getDaysAgo());
    let el = document.createElement('div');
    let html = `<h3 id="link1">${
      this.header
    } </h3><div>${this.getDaysAgo()}</div><p id="link2">${
      this.text
    }</p> <div> <a href="#link1" > #header</a> <a href="#link2" > #lorem</a></div>`;
    el.innerHTML = html;
    this.tags.forEach((value, key) => {
      el.style[key] = value;
    });
    output.appendChild(el);
  }
  getHtmlEl() {
    let el = document.createElement('div');
    let html = `<h3 ">${
      this.header
    } </h3><div>${this.getDaysAgo()}</div><p id="">${this.text}</p>`;
    el.innerHTML = html;
    this.tags.forEach((value, key) => {
      el.style[key] = value;
    });
    return el;
  }

  clone() {
    return new News(
      this.header,
      this.text,
      new Map(this.tags),
      new Date(this.publication_date)
    );
  }
}

function task2() {
  // Реализовать класс, описывающий новость (заголовок, текст, массив тегов, дата публикации). В классе необходимо реализовать один метод print, который выводит всю информацию в таком виде:
  const styleMap = new Map([
    ['fontSize', '18px'],
    ['color', 'rgb(94, 84, 94)'],
    ['fontFamily', 'Verdana'],
    ['border', '5px solid rgb(126, 124, 126)'],
    ['borderStyle', 'outset'],
    ['padding', '20px'],
  ]);
  let date = new Date();
  date.setDate(date.getDate() - 1);
  let news = new News(
    'what is Lorem ipsum?',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis excepturi repellendus repellat ipsum possimus laborum nihil fugiat quam velit accusamus quia, expedita, harum explicabo alias architecto sequi, necessitatibus doloremque quidem officia! Tempore id, et non dolorum dicta blanditiis beatae asperiores doloribus. Nihil, blanditiis rem hic esse amet corrupti tempora dolores quos ad vero cumque totam natus ab praesentium explicabo! Est modi culpa, quos doloremque laudantium sed asperiores repudiandae quo veniam, assumenda impedit nostrum ad quisquam, cum ex autem iure non at? Fugit aliquid minima magnam nisi quam dicta fuga ea distinctio sunt dolores sapiente, veniam, maxime tempore odio dolorum dolorem.',
    styleMap,
    date
  );
  news.print();
}
class NewsFeed {
  #newsArr = [];
  constructor() {}
  addNews(news) {
    if (!(news instanceof News)) throw new Error('ожидается объект News');
    this.#newsArr.push(news.clone());
  }
  get() {
    return this.#newsArr.length;
  }
  printAll() {
    for (let i of this.#newsArr) {
      output.appendChild(i.getHtmlEl());
    }
  }
  deleteNews(ind) {
    if (ind < 0 || ind >= this.#newsArr.length)
      throw new Error('неверный индекс элемента');
    this.#newsArr.splice(ind, 1);
  }
  sortByDate() {
    this.#newsArr.sort((a, b) => b.publication_date - a.publication_date);
  }
  findNewsByTag(tag) {
    return this.#newsArr.filter((news) => news.tags.has(tag));
  }
}
function task3() {
  // Реализовать класс, описывающий новостную ленту. Класс должен содержать:
  //массив новостей;
  //get-свойство, которое возвращает количество новостей;
  //метод для вывода на экран всех новостей;
  //метод для добавления новости;
  //метод для удаления новости;
  // метод для сортировки новостей по дате (от последних новостей до старых);
  // метод для поиска новостей по тегу (возвращает массив новостей, в которых указан переданный в метод тег);
  //Продемонстрировать работу написанных методов.
  const styleMap1 = new Map([
    ['fontSize', '18px'],
    ['color', 'rgb(94, 84, 94)'],
    ['fontFamily', 'Verdana'],
    ['border', '5px solid rgb(126, 124, 126)'],
    ['borderStyle', 'outset'],
    ['padding', '20px'],
    ['margin', '5px'],
  ]);
  const styleMap2 = new Map([
    ['fontSize', '23px'],
    ['color', 'rgb(106, 8, 12)'],
    ['fontFamily', 'Comic Sans MS'],
    ['border', '5px solid rgb(126, 124, 126)'],
    ['borderStyle', 'outset'],
    ['padding', '20px'],
    ['margin', '5px'],
  ]);
  const styleMap3 = new Map([
    ['fontSize', '23px'],
    ['color', 'rgb(12, 81, 19)'],
    ['fontFamily', 'Comic Sans MS'],
    ['border', '5px solid rgb(126, 124, 126)'],
    ['borderStyle', 'outset'],
    ['padding', '20px'],
    ['margin', '5px'],
  ]);
  let nf = new NewsFeed();

  nf.addNews(
    new News(
      '1 what is Lorem ipsum?',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis excepturi repellendus repellat ipsum possimus laborum nihil fugiat quam velit accusamus quia, expedita, harum explicabo alias architecto sequi, necessitatibus doloremque quidem officia! Tempore id, et non dolorum dicta blanditiis beatae asperiores doloribus. Nihil, blanditiis rem hic esse amet corrupti tempora dolores quos ad vero cumque totam natus ab praesentium explicabo! Est modi culpa, quos doloremque laudantium sed asperiores repudiandae quo veniam, assumenda impedit nostrum ad quisquam, cum ex autem iure non at? Fugit aliquid minima magnam nisi quam dicta fuga ea distinctio sunt dolores sapiente, veniam, maxime tempore odio dolorum dolorem.',
      styleMap1,
      new Date()
    )
  );
  nf.addNews(
    new News(
      '2 what is Lorem ipsum?',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis excepturi repellendus repellat ipsum possimus laborum nihil fugiat quam velit accusamus quia, expedita, harum explicabo alias architecto sequi, necessitatibus doloremque quidem officia! Tempore id, et non dolorum dicta blanditiis beatae asperiores doloribus. Nihil, blanditiis rem hic esse amet corrupti tempora dolores quos ad vero cumque totam natus ab praesentium explicabo! Est modi culpa, quos doloremque laudantium sed asperiores repudiandae quo veniam, assumenda impedit nostrum ad quisquam, cum ex autem iure non at? Fugit aliquid minima magnam nisi quam dicta fuga ea distinctio sunt dolores sapiente, veniam, maxime tempore odio dolorum dolorem.',
      styleMap2,
      new Date()
    )
  );
  nf.addNews(
    new News(
      '3 what is Lorem ipsum?',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis excepturi repellendus repellat ipsum possimus laborum nihil fugiat quam velit accusamus quia, expedita, harum explicabo alias architecto sequi, necessitatibus doloremque quidem officia! Tempore id, et non dolorum dicta blanditiis beatae asperiores doloribus. Nihil, blanditiis rem hic esse amet corrupti tempora dolores quos ad vero cumque totam natus ab praesentium explicabo! Est modi culpa, quos doloremque laudantium sed asperiores repudiandae quo veniam, assumenda impedit nostrum ad quisquam, cum ex autem iure non at? Fugit aliquid minima magnam nisi quam dicta fuga ea distinctio sunt dolores sapiente, veniam, maxime tempore odio dolorum dolorem.',
      styleMap3,
      new Date()
    )
  );
  nf.addNews(
    new News(
      '4 what is Lorem ipsum?',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis excepturi repellendus repellat ipsum possimus laborum nihil fugiat quam velit accusamus quia, expedita, harum explicabo alias architecto sequi, necessitatibus doloremque quidem officia! Tempore id, et non dolorum dicta blanditiis beatae asperiores doloribus. Nihil, blanditiis rem hic esse amet corrupti tempora dolores quos ad vero cumque totam natus ab praesentium explicabo! Est modi culpa, quos doloremque laudantium sed asperiores repudiandae quo veniam, assumenda impedit nostrum ad quisquam, cum ex autem iure non at? Fugit aliquid minima magnam nisi quam dicta fuga ea distinctio sunt dolores sapiente, veniam, maxime tempore odio dolorum dolorem.',
      styleMap2,
      new Date()
    )
  );
  //nf.printAll();
  nf.deleteNews(2);
  nf.printAll();
}
