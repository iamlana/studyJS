const getMax = (a, b) => Math.max(a, b);
function findSenior(list) {
    console.log(list.reduce(getMax))
}