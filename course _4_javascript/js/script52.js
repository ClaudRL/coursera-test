// app.js
// 1.yaakovGreeter.sayHello(); 和 johnGreeter.sayHi();：
// 这两行代码调用了之前在 script1.js 和 script2.js 中定义的两个全局对象 yaakovGreeter 和 johnGreeter 的方法。
// yaakovGreeter.sayHello() 输出 Hello Yaakov，而 johnGreeter.sayHi() 输出 Hi John。
// 2. 这是一个立即执行函数表达式，接收参数 name，然后立即执行，并输出 "Hello Coursera!"。
// IIFE 的作用是创建一个临时作用域，避免变量污染全局命名空间。在这里，它执行完毕后输出，并且没有污染全局作用域。

yaakovGreeter.sayHello();
johnGreeter.sayHi();

// Immediately Invoked Function Expression
// IIFE
(function (name) {
  console.log("Hello " + name);
})("Coursera!");

//script1.js
// IIFE 创建作用域：

// 这段代码使用 IIFE 创建一个私有作用域，将 window 对象作为参数传入。这避免了全局变量的污染，并允许我们在 IIFE 内部安全地定义局部变量和函数。
// 定义 yaakovGreeter 对象：

// var yaakovGreeter = {};：创建一个名为 yaakovGreeter 的对象。
// yaakovGreeter.name = "Yaakov";：为该对象添加一个属性 name，值为 "Yaakov"。
// var greeting = "Hello ";：定义一个局部变量 greeting，值为 "Hello "，仅在 IIFE 内部可用。
// yaakovGreeter.sayHello 方法：

// yaakovGreeter.sayHello = function () {...}：为 yaakovGreeter 对象定义一个方法 sayHello，该方法会输出 "Hello Yaakov"，利用闭包访问 greeting 和 yaakovGreeter.name。
// 将 yaakovGreeter 绑定到 window：

// window.yaakovGreeter = yaakovGreeter;：将 yaakovGreeter 对象暴露到全局 window 对象上，使得它可以在全局作用域中被访问和使用（如 app.js 中的 yaakovGreeter.sayHello()）。
(function (window) {
    var yaakovGreeter = {};
    yaakovGreeter.name = "Yaakov";
    var greeting = "Hello ";
    yaakovGreeter.sayHello = function () {
      console.log(greeting + yaakovGreeter.name);
    }
  
    window.yaakovGreeter = yaakovGreeter;
  
  })(window);

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



(function(window) {
    var obj = {};
    
    // 定义一个方法 dreamOn
    obj.dreamOn = function () {
      console.log("I want to see the global scope! Let me out!");
    };
  
    // 将 obj 暴露到全局作用域
    window.doer = obj;
  
  })(window);
  
  // 调用全局的 doer 对象的 dreamOn 方法
  doer.dreamOn();


  (function() {
    var message = "Hello, World!";
    console.log(message);
  })();

  
  (function(aa) {
    var message = "Hello, " + aa;
    console.log(message);
  })("World!");