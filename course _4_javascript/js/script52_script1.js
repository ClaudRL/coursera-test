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

/