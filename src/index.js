module.exports = function reverse (n) {
  let m = Math.abs(n);
  return String(m).split('').reverse().join('');
}
