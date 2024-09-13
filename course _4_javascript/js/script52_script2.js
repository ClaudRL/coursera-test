//script2.js
// IIFE 创建作用域：

// 与 script1.js 中相同，使用 IIFE 创建一个私有作用域来定义 johnGreeter 对象，避免与其他变量冲突。
// 定义 johnGreeter 对象：

// var johnGreeter = {};：创建一个名为 johnGreeter 的对象。
// johnGreeter.name = "John";：为该对象添加一个属性 name，值为 "John"。
// var greeting = "Hi ";：定义一个局部变量 greeting，值为 "Hi "，仅在 IIFE 内部可用。
// johnGreeter.sayHi 方法：

// johnGreeter.sayHi = function () {...}：为 johnGreeter 对象定义一个方法 sayHi，该方法会输出 "Hi John"，利用闭包访问 greeting 和 johnGreeter.name。
// 将 johnGreeter 绑定到 window：

// window.johnGreeter = johnGreeter;：将 johnGreeter 对象暴露到全局 window 对象上，使得它可以在全局作用域中被访问和使用（如 app.js 中的 johnGreeter.sayHi()）。

  (function (window) {
    var johnGreeter = {};
    johnGreeter.name = "John";
    var greeting = "Hi ";
    johnGreeter.sayHi = function () {
      console.log(greeting + johnGreeter.name);
    }
  
    window.johnGreeter = johnGreeter;
  
  })(window);


//   总结：
//   app.js 文件用于调用定义在 script1.js 和 script2.js 中的对象和方法。它还包含了一个立即执行函数表达式（IIFE），用于展示 IIFE 的使用。
//   script1.js 和 script2.js 使用了 IIFE 技术，将对象 yaakovGreeter 和 johnGreeter 封装在私有作用域中，避免全局变量冲突，并通过将它们挂载到 window 对象上，确保它们在全局范围内可以被访问。
//   闭包 的概念体现在两个对象的方法中，它们可以访问局部变量 greeting，即使这些变量是在外部函数中定义的。
//   这种模式在大型 JavaScript 应用中很常见，有助于防止变量污染全局作用域，并确保代码模块化且易于维护。

