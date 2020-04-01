function insert(num) {
  document.querySelector(".result").value =
    document.querySelector(".result").value + num;
}
function equal() {
  let exe = document.querySelector(".result").value;
  if (exe) {
    document.querySelector(".result").value = eval(exe);
  }
}
