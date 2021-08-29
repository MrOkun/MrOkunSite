function printNumbers(from, to) {
  let current = from;

  function go() {
    console.log(Date());
    if (current == to) {
      clearInterval(timerId);
    }
  }

  go();
  let timerId = setInterval(go, 1000);
}

printNumbers(5, 10);