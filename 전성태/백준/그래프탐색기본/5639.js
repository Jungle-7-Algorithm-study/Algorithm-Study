const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const nodes = stdin.map(Number)

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
    insert(value){
        if(value < this.value){
            if(!this.left) this.left = new Node(value)
            else this.left.insert(value)
        } else {
            if(!this.right) this.right = new Node(value)
            else this.right.insert(value)
        }
    }
}

const tree = new Node(nodes[0])
for(let i = 1; i < nodes.length; i++){
    tree.insert(nodes[i])
}

let ans = []
function postOrder(node){
    if(node.left)postOrder(node.left)
    if(node.right)postOrder(node.right)
    ans.push(node.value)
}

postOrder(tree)
console.log(ans.join('\n'))