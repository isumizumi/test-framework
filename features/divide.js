const divide = (a, b) => {
  if (!b){
    return 'It should 2 params!'
  } else if (typeof a !== "number" || typeof b !== "number") {
    return 'Should be a number!'
  } else {
    return a / b
  }
}

module.exports = divide
