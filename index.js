class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

const print = (head) => {
    let current = head
    while (current !== null){
        console.log(current.val)
        current = current.next
    }
}

const printRecursive = (head) => {
    if(head === null) return
    console.log(head.val)
    printRecursive(head.next)
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')

a.next = b
b.next = c
c.next = d
d.next = e

// a -> b -> c -> d -> e -> NULL

print(a)
console.log("----------------------------")
printRecursive(a)