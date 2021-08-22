// Удаление html-элементов методом removeChild()
// Метод removeChild() существует достаточно давно, поэтому им стоит пользоваться там, где нужна поддержка старых браузеров. Однако с ним стоит быть внимательным, т.к. "удалить ребенка" (именно так переводится этот метод с английского) можно только у его родителя. Т.е. при использовании этого метода код будет такой:

element.parentNode.removeChild(element)

let li = document.querySelectorAll('#testUl li');
for (var i = 0, len = li.length; i < len; i++) {
  li[i].onclick = function() {
    console.log('parentNode', this.parentNode);
    console.log('element => this', this);
    this.parentNode.removeChild(this);
  }
}


// нужно сначала найти родительский узел этого элемента <li> (this.parentNode), т.е. <ul>, а затем удалить дочерний узел с именно этим элементом (removeChild(this)). Для того чтобы убедиться, кто родитель, кто потомок, мы используем console.log() для просмотра элементов:

// Удаление методом remove()
// По сравнению с removeChild() метод remove() прост и понятен:
// Т.е. все, что вам нужно сделать - это обратиться к элементу и вызвать метод remove(). Рассмотрим его также на примере, в котором по клику будут исчезать однотипные html-блоки:

// Удаление всех элементов внутри родителя
// Часто бывает такая ситуация, что внутри родительского элемента необходимо удалить все узлы-потомки. Например, в том же списке нужно оставить <ul> или <ol> с каким-либо id, но удалить все вложенные <li>. Для этого можно воспользоваться свойством innerHTML или innerText, или же textContent, присвоив в него пустую строку:


// Node.removeChild
// Удаляет дочерний элемент из DOM. Возвращает удалённый элемент.

var oldChild = element.removeChild(child);
element.removeChild(child);
// child дочерний элемент который будет удалён из DOM.
// element родительский элемент удаляемого child.
// oldChild ссылка на удаляемый дочерний элемент. oldChild === child.
// Удалённый дочерний элемент остаётся в памяти, но больше не является частью DOM. Вы можете повторно использовать удалённый элемент с помощью ссылки на объект - oldChild.

// Если child не является дочерним элементом element, тогда метод генерирует исключение. Также это происходит если child является дочерним элементом element во время вызова метода, но был удалён во время вызова обработчика событий удаляющего элемент(т.e при удалении элемента непосредственно перед вызовом обработчика событий).


// Удаление элемента с известным родителем
var d = document.getElementById("top");
var d_nested = document.getElementById("nested");
var throwawayNode = d.removeChild(d_nested);

// Удаление элемента без указания его родителя
var node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}

// Удаление всех дочерних элементов
var element = document.getElementById("top");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}


// Метод Node.cloneNode() возвращает дубликат узла, из которого этот метод был вызван.


// var dupNode = node.cloneNode(deep);
// node - Узел, который будет клонирован.
// dupNode - Новый узел, который будет клоном node
// deep Необязательный - true, если дети узла должны быть клонированы или false для того, чтобы был клонирован только указанный узел.

    var p = document.getElementById("para1");
    var p_prime = p.cloneNode(true);

// Метод Node.contains() возвращает Boolean значение, указывающее, является ли узел потомком данного узла, т. е. сам узел, один из его прямых потомков (childNodes), один из детей его детей и так далее.

// node.contains( otherNode )
// node элемент который сравнивается.
// otherNode элемент с которым производится сравнение.

// Эта функция проверяет, находится ли элемент в теле страницы.

function isInPage(node) {
  return (node === document.body) ? false : document.body.contains(node);
}

// Удаление узлов
// Для удаления узла есть метод node.remove().

let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

document.body.append(div);
setTimeout(() => div.remove(), 1000);

// Если нам нужно переместить элемент в другое место – нет необходимости удалять его со старого.

// Все методы вставки автоматически удаляют узлы со старых мест.

// нет необходимости вызывать метод remove
second.after(first); // берёт #second и после него вставляет #first
