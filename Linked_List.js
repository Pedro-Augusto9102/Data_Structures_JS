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

const linkedListValues = (head) => {
    let current = head
    let values = []
    while (current !== null){
        values.push(current.val)
        current = current.next
    }
    return values
}

const linkedListValuesRecursive = (head) => {
    let values = []
    linkedListValuesRecursiveHelper(head, values)
    return values
}

const linkedListValuesRecursiveHelper = (head, values) => {
    if(head === null) return
    values.push(head.val)
    linkedListValuesRecursiveHelper(head.next, values)

}

const linkedListSum = (head) => {
    let current = head
    let sum = 0
    while(current !== null){
        sum = sum+current.val
        current = current.next
    }
    return sum 
}

const linkedListSumRecursive = (head) => {
    if(head === null) return 0
    return head.val + linkedListSumRecursive(head.next)
}

const linkedListFind = (head, target) => {
    let current = head
    while (current !== null){
        if(current.val === target) return true
        current = current.next
    }
    return false
}

const linkedListFindRecursive = (head, target) => {
    if(head === null) return false
    if(head.val === target) return true
    return linkedListFindRecursive(head.next, target)
}

const linkedListGetNodeValue = (head, index) => {
    let current = head
    let count = 0
    while (current !== null){
        if(count === index) return current.val
        count += 1
        current = current.next
    }
    return null
}

const linkedListGetNodeValueRecursive = (head, index) => {
    if(head === null) return null
    if(index === 0) return head.val
    return linkedListGetNodeValueRecursive(head.next, index - 1)
}

const mergeList = (head1,head2) => {
    let current = head1
    let dummy = new Node(0)
    while(current !== null) {
        if(current.next === null){            
            current.next = head2
            dummy.next = head1
            return print(dummy.next)
        }
        current = current.next
    }
}

const reverseList = (head) => {
    let current = head 
    let prev = null

    while (current !== null){
        const next = current.next
        current.next = prev
        prev = current 
        current = next   
    }
    return print(prev)
}

const reverseListRecursive = (head, prev = null) => {
    if(head === null) return prev
    const next = head.next
    head.next = prev
    return reverseListRecursive(next, head)
}

const zipperList = (head1, head2) => {
    let tail = head1
    let current1 = head1.next
    let current2 = head2
    let count = 0
    while(current1 !== null && current2 !== null){
        if(count % 2 === 0){
            tail.next = current2
            current2 = current2.next
        }else{
            tail.next = current1
            current1 = current1.next
        }
        tail = tail.next
        count += 1
    }
    if(current1 !== null) tail.next = current1
    if(current2 !== null) tail.next = current2
    return head1
}

const zipperListRecursive = (head1, head2) => {
    if(head1 === null && head2 === null) return null
    if(head1 === null) return head2
    if(head2 === null) return head1
    const next1 = head1.next
    const next2 = head2.next
    head1.next = head2
    head2.next = zipperListRecursive(next1, next2)
    return head1
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)

a.next = b
b.next = c
//c.next = d
d.next = e

// a -> b -> c -> d -> e -> NULL

//print(a)
//printRecursive(a)
//console.log(linkedListValues(a))
//console.log(linkedListValuesRecursive(a))
//console.log(linkedListSum(a))
//console.log(linkedListSumRecursive(a))
//console.log(linkedListFind(a, 5))
//console.log(linkedListFindRecursive(a, 2))
//console.log(linkedListGetNodeValue(head, 1))
//console.log(linkedListGetNodeValueRecursive(head, 1))
//mergeList(a,d) *Must create new linked list*
//reverseList(a)
//const reverse = reverseListRecursive(a)
//console.log(print(reverse))
//print(zipperList(a, d))
//print(zipperListRecursive(a, d))