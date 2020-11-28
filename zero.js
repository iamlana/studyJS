class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        if (this.length == 0) {
            return undefined
        }
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }

    delete(index) {
        const item = this.data[index]
        this.shiftItems(index)
        return item
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
    }
}

const newArray = new MyArray();
newArray.push(7)
newArray.push('hello')
newArray.push('love')
newArray.push('cat')

newArray.delete(1)
console.log(newArray)