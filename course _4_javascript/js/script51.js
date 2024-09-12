// Closures
function makeMultiplier (multiplier) {
    // var multiplier = 2;
    function b() {
      console.log("Multiplier is: " + multiplier);
    }
    b();
  
  
    return (
        function (x) {
          return multiplier * x;
        }
  
      );
  }
  
  var doubleAll = makeMultiplier(2);
  console.log(doubleAll(10)); // its own exec env

// // 实际生活中的闭包示例：倒计时器 （有bug)
// // 假设我们需要实现一个倒计时器，倒计时从指定的秒数开始，每秒打印剩余时间，直到倒计时结束。

// 代码解释：
// createCountdown(startTime)：

// 这个函数接收一个参数 startTime，表示倒计时的起始秒数。
// 在函数内部，定义了一个变量 timeLeft，用于记录剩余时间。此变量在外部函数作用域中被创建，并且在闭包函数中可以访问。
// 返回的匿名函数（闭包）可以每次调用时减少 timeLeft，并且还能访问最初定义的 timeLeft。
// var countdownFrom5 = createCountdown(5)：

// 调用 createCountdown 并传入 5，返回一个闭包函数 countdownFrom5，其作用是从 5 开始倒计时，每次调用时输出剩余的秒数，并将 timeLeft 减少 1。
// setInterval：

// 使用 setInterval 每隔 1 秒（1000 毫秒）调用一次 countdownFrom5。在每次调用时，闭包函数会访问并修改 timeLeft，直到倒计时结束。
// 当倒计时结束时，clearInterval 停止定时器，不再继续调用。

//   function createCountdown(startTime) {
//     // 将倒计时时间存储在外部函数中
//     let timeLeft = startTime;
  
//     // 返回一个闭包函数，每次调用时减少时间
//     return function() {
//       if (timeLeft > 0) {
//         console.log("Time left: " + timeLeft + " seconds");
//         timeLeft--;
//       } else {
//         console.log("Countdown finished!");
//       }
//     };
//   }
  
//   // 创建一个倒计时从 5 开始的计时器
//   var countdownFrom5 = createCountdown(5);
  
//   // 使用 setInterval 每秒调用一次倒计时函数
//   var countdownInterval = setInterval(function() {
//     countdownFrom5();
//     // 当倒计时完成时清除定时器
//     if (countdownFrom5.timeLeft === 0) {
//       clearInterval(countdownInterval);
//     }
//   }, 1000);


// //   修复bug
// 在原始代码中，countdownFrom5() 函数在倒计时结束时打印了 "Countdown finished!"，但由于它没有一个明确的方式让外部知道倒计时结束，setInterval 还会继续运行。为了修复这个问题，我们需要在倒计时结束时停止调用 countdownFrom5()，即停止 setInterval。
// 可以通过在闭包中返回当前的剩余时间，然后在倒计时结束时调用 clearInterval() 来停止计时器。

// 修改说明：
// countdownFrom5() 函数：

// 当 timeLeft 大于 0 时，倒计时继续，每次调用时输出剩余的秒数。
// 当 timeLeft 变为 0 时，输出 "Countdown finished!"，并返回 true 来指示倒计时结束。
// setInterval 回调函数：

// 每秒调用 countdownFrom5() 并将返回值赋给变量 finished。
// 如果 finished 为 true（即倒计时结束），调用 clearInterval(countdownInterval) 停止定时器，不再继续调用 countdownFrom5()。

  function createCountdown(startTime) {
    let timeLeft = startTime;
  
    return function() {
      if (timeLeft > 0) {
        console.log("Time left: " + timeLeft + " seconds");
        timeLeft--;
      } else {
        console.log("Countdown finished!");
        return true; // 倒计时结束时返回 true
      }
    };
  }
  
  // 创建一个倒计时从 5 开始的计时器
  var countdownFrom5 = createCountdown(5);
  
  var countdownInterval = setInterval(function() {
    var finished = countdownFrom5(); // 调用倒计时函数
    if (finished) {
      clearInterval(countdownInterval); // 当倒计时结束时停止定时器
    }
  }, 1000);
  