
# DOM (Document Object Model)

DOM（Document Object Model，文档对象模型）是浏览器用来解析和操作 HTML 和 XML 文档的一种编程接口。它将文档的内容结构化为对象树，开发者可以通过 JavaScript 动态地访问和修改页面的内容、结构和样式。

## 1. DOM 的概念

DOM 是一种树形结构，页面中的每个元素、属性、文本等都是树中的一个节点。通过 DOM，JavaScript 可以访问和修改 HTML 页面中的各个部分。

例如，下面这段 HTML：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```
会被解析成类似这样的 DOM 结构：
```
document
 └── html
     ├── head
     │   └── title
     └── body
         ├── h1
         └── p
```

## 2. DOM 树的节点类型

DOM 中的每个部分都是一个节点，主要的节点类型包括：
- **元素节点**（Element Node）：表示 HTML 元素，如 `<div>`、`<p>` 等。
- **属性节点**（Attribute Node）：表示元素的属性，如 `id`、`class`。
- **文本节点**（Text Node）：表示元素内部的文本，如 `<p>Some text</p>` 中的 `"Some text"`。
- **文档节点**（Document Node）：表示整个 HTML 文档，通常是 `document` 对象的根节点。

## 3. 访问和操作 DOM

通过 JavaScript，我们可以使用 DOM 提供的接口访问和操作页面的元素。常见的操作包括选择、修改和删除元素，添加事件监听器等。

### 常见的 DOM 操作方法

- **访问节点**：
  - `document.getElementById(id)`：通过元素的 `id` 获取元素。
  - `document.getElementsByClassName(class)`：通过类名获取元素集合。
  - `document.getElementsByTagName(tag)`：通过标签名获取元素集合。
  - `document.querySelector(selector)`：通过 CSS 选择器获取第一个匹配的元素。
  - `document.querySelectorAll(selector)`：通过 CSS 选择器获取所有匹配的元素。

  例如：
  ```javascript
  var element = document.getElementById("myElement");
  ```

- **修改元素内容**：
  - `element.innerHTML`：获取或设置元素的 HTML 内容。
  - `element.textContent`：获取或设置元素的文本内容。

  例如：
  ```javascript
  var paragraph = document.querySelector("p");
  paragraph.textContent = "This is the new text!";
  ```

- **修改属性**：
  - `element.setAttribute(attribute, value)`：设置元素的属性。
  - `element.getAttribute(attribute)`：获取元素的属性。
  - `element.removeAttribute(attribute)`：移除元素的属性。

  例如：
  ```javascript
  var img = document.querySelector("img");
  img.setAttribute("src", "newImage.png");
  ```

- **添加/移除节点**：
  - `document.createElement(tag)`：创建新元素。
  - `element.appendChild(child)`：将一个节点作为子节点添加到某个元素。
  - `element.removeChild(child)`：移除某个元素的子节点。
  - `element.insertBefore(newNode, referenceNode)`：在参考节点之前插入新的节点。

  例如：
  ```javascript
  var newElement = document.createElement("div");
  document.body.appendChild(newElement);
  ```

### 事件监听器

DOM 允许我们通过事件监听器与用户的交互进行响应。
- `element.addEventListener(event, function)`：为元素添加事件监听器。

  例如：
  ```javascript
  var button = document.querySelector("button");
  button.addEventListener("click", function() {
    alert("Button was clicked!");
  });
  ```

## 4. DOM 树的遍历

可以通过 DOM 提供的接口来遍历文档树：
- `element.parentNode`：获取父节点。
- `element.childNodes`：获取所有子节点（包括文本节点）。
- `element.children`：获取所有子元素（不包括文本节点）。
- `element.firstChild`：获取第一个子节点。
- `element.firstElementChild`：获取第一个子元素。
- `element.lastChild`：获取最后一个子节点。
- `element.nextSibling`：获取下一个兄弟节点。
- `element.previousSibling`：获取上一个兄弟节点。

## 5. DOM 事件模型

DOM 事件模型包括三个阶段：
- **捕获阶段**：从文档根节点向事件目标传播事件。
- **目标阶段**：事件到达目标元素。
- **冒泡阶段**：事件从目标元素向上冒泡到文档根节点。

通过 `addEventListener`，可以指定事件监听器在捕获阶段或冒泡阶段触发。

## 6. 总结

- **DOM** 是一个接口，提供了访问和操作 HTML、XML 文档的方式。
- **DOM 树** 由节点构成，每个节点对应文档的一个部分。
- JavaScript 提供了多种操作 DOM 的方法，可以选择、修改、删除节点或属性。
- **事件处理** 使得 JavaScript 可以与用户交互，响应用户的点击、输入等操作。
