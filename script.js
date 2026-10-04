function mincost(arr) {
  const ropes = [...arr]; // copy, don't change the input
  let total = 0;

  while (ropes.length > 1) {
    ropes.sort((a, b) => a - b); // numeric sort, ascending
    const first = ropes.shift();
    const second = ropes.shift();
    const sum = first + second;
    total += sum;
    ropes.push(sum);
  }

  return total;
}

module.exports = mincost;
