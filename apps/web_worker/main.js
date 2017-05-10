{
  let Class = (_cls) => document.querySelector(`.${_cls}`)

  $numberOne = Class('number-one')
  $numberTwo = Class('number-two')
  $result = Class('result')

  if (Worker in window) {
    // 实例化一个worker
    const myWorker = new Worker('./worker.js')

    // 监听worker的“message”事件
    myWorker.onmessage = function(e) {
      $result.textContent = e.data;
    };

    $numberOne.onchange = function() {
      myWorker.postMessage([$numberOne.value, $numberTwo.value]);
    };

    $numberTwo.onchange = function() {
      myWorker.postMessage([$numberOne.value, $numberTwo.value]);
    };

  } else {
    console.error('抱歉，你的浏览器OUT了');
  }
}
