class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

const depthFirstValues = (root) => {
    if(!root) return []    
    const result = []
    const stack = [root];
    while (stack.length > 0) {
        const current = stack.pop()
        result.push(current.val)
        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)        
    }
    return result
}

const depthFirstValuesRecursive = (root) => {
    if(!root) return []
    const left = depthFirstValuesRecursive(root.left)
    const right = depthFirstValuesRecursive(root.right)
    return [root.val, ...left, ...right]
}

const breadthFirstValues = (root) => {
    if(root === null) return []
    const queue = [root]
    const result = []
    while (queue.length > 0){
        const current = queue.shift()
        result.push(current.val)
        if(current.left !== null) queue.push(current.left)
        if(current.right !== null) queue.push(current.right)
    }
    return result
}

const FindTarget = (root, target) => {
    if(root === null) return null
    if(root.val === target) return true
    const queue = [root]
    while(queue.length > 0){
        const current = queue.shift()
        if(current.val === target) return true
        if(current.left !== null) queue.push(current.left)
        if(current.right !== null) queue.push(current.right)
    }
    return false
}

const FindTargetRecursive = (root, target) => {
    if(root === null) return false
    if(root.val === target) return true
    return FindTargetRecursive(root.left, target) || FindTargetRecursive(root.right, target)
}

const treeSum = (root) => {
    if (!root) return 0
    const queue = [root]
    let sum = 0
    while(queue.length > 0){
        const current = queue.shift()
        sum += current.val
        if(current.left !== null) queue.push(current.left)
        if(current.right !== null) queue.push(current.right)
    }
    return sum
}

const treeSumRecursive = (root) => {
    if(!root) return 0
    return root.val + treeSumRecursive(root.left) + treeSumRecursive(root.right)
}

const a = new Node(3)
const b = new Node(11)
const c = new Node(4)
const d = new Node(2)
const e = new Node(4)
const f = new Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

/*
        a
       / \
      b   c
     / \   \
    d   e   f
*/

//console.log(depthFirstValuesRecursive(a))
//console.log(breadthFirstValues(a))
//console.log(FindTarget(a, 'a'))
//console.log(treeSum(a))
console.log(treeSumRecursive(a))