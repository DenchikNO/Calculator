function set(n) {
  document.form.textview.value = document.form.textview.value + n;
}
function equal() {
  let x = document.form.textview.value;
  if (x) {
    document.form.textview.value = eval(x);
  }
}
function delete_all() {
  document.form.textview.value = "";
}
function delete_n() {
  let x = document.form.textview.value;
  document.form.textview.value = x.substring(0, x.length - 1);
}
function reverse() {
  document.form.textview.value = -document.form.textview.value;
}
// let x = document.getElementsByTagName('input');
// x.onclick = function () {
//   x.style.borderBottom = "none";
// }