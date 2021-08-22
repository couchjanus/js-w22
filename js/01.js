// document.createElement
// var element = document.createElement(tagName, [options]);
// element — созданный объект элемента.
// tagName — строка, указывающая элемент какого типа должен быть создан. nodeName создаётся и инициализируется со значением tagName.
// options — необязательный параметр, объект ElementCreationOptions, который может содержать только поле is, указывающее имя пользовательского элемента, созданного с помощью customElements.define().

// пример создаёт новый элемент <div> и вставляет его перед элементом с идентификатором divId:

  document.body.onload = addElement;
  var my_div = newDiv = null;

  function addElement() {

    // Создаём новый элемент div
    // и добавляем в него немного контента

    var newDiv = document.createElement("div");
        newDiv.innerHTML = "<h1>Привет!</h1>";

    // Добавляем только что созданный элемент в дерево DOM

    my_div = document.getElementById("divId");
    document.body.insertBefore(newDiv, my_div);
  }

// Если существуют атрибуты со значениями по умолчанию, атрибуты узлов предоставляющие их создаются автоматически и применяются к элементу.
// Для создания элементов с заданным пространством имён используйте метод createElementNS.

// Методы вставки
// метод append
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

document.body.append(div);

// методы для различных вариантов вставки:
// node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
// node.before(...nodes or strings) –- вставляет узлы или строки до node,
// node.after(...nodes or strings) –- вставляет узлы или строки после node,
// node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.

// Вот пример использования этих методов, чтобы добавить новые элементы в список и текст до/после него:

ol.before('before'); // вставить строку "before" перед <ol>
ol.after('after'); // вставить строку "after" после <ol>

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst); // вставить liFirst в начало <ol>

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast); // вставить liLast в конец <ol>

// строки вставляются безопасным способом, как делает это elem.textContent.
// эти методы могут использоваться только для вставки DOM-узлов или текстовых фрагментов.

// если мы хотим вставить HTML как html
// insertAdjacentHTML/Text/Element
// универсальный метод: elem.insertAdjacentHTML(where, html).

// Первый параметр – это специальное слово, указывающее, куда по отношению к elem производить вставку. 
// Значение должно быть одним из следующих:

// "beforebegin" – вставить html непосредственно перед elem,
// "afterbegin" – вставить html в начало elem,
// "beforeend" – вставить html в конец elem,
// "afterend" – вставить html непосредственно после elem.

div.insertAdjacentHTML('beforebegin', '<p>Привет</p>');
div.insertAdjacentHTML('afterend', '<p>Пока</p>');

// Варианты метода:

// elem.insertAdjacentText(where, text) – такой же синтаксис, но строка text вставляется как текст, вместо HTML,
// elem.insertAdjacentElement(where, elem) – такой же синтаксис, но вставляет элемент elem.
// На практике часто используется только insertAdjacentHTML. Потому что для элементов и текста у нас есть методы append/prepend/before/after – их быстрее написать, и они могут вставлять как узлы, так и текст.

// альтернативный вариант показа сообщения:

document.body.insertAdjacentHTML("afterbegin", `<div class="alert">
   <strong>Всем привет!</strong> Вы прочитали важное сообщение.
</div>`);
