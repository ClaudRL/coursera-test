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
