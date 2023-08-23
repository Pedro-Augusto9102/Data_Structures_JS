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

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

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
console.log(breadthFirstValues(a))