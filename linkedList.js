
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this

    }
    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = new Node(value)
        const leader = this.traverseToIndex(index - 1)
        const holdingPointer = leader.next;
        leader.next = newNode
        newNode.next = holdingPointer
        this.length++
        return this.printList()
    }
    traverseToIndex(index) {
        let counter = 0
        let currentNode = this.head
        console.log(currentNode)
        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }
    remove(index) {
        const leader = this.traverseToIndex(index - 1)
    }
}

// const myLinkedList = new LinkedList(10)
// myLinkedList.append(3).append(4).append(5)
// console.log(myLinkedList.printList())

// myLinkedList.append(5)
// myLinkedList.append(16)
// myLinkedList.prepend(1)
// myLinkedList.printList()
// myLinkedList.insert(3, 100)
// console.log(myLinkedList.printList())