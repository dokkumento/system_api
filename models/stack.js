class Stack {
  constructor(arr = []) {
    this.arr = arr
  }

  push(el) {
    this.arr.push(el)
  }

  pop() {
    const len = this.arr.length
    if (len > 0) {
      const el = this.arr[len - 1]
      this.arr.pop(len - 1)
      return el
    } else {
      return undefined
    }
  }
}

module.exports = Stack