const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = Number(stdin[0])
const tree = {}
for(let i = 1; i <= N; i++){
    const [node, left, right] = stdin[i].split(' ')
    tree[node] = [left, right]
}

let result = ''

function preOrder(node){
    if(node === '.') return
    result+=node
    const[left, right] = tree[node]
    preOrder(left)
    preOrder(right)
}

function inOrder(node){
    if(node === '.') return
    const[left, right] = tree[node]
    inOrder(left)
    result+=node
    inOrder(right)
}

function postOrder(node){
    if(node === '.') return
    const[left, right] = tree[node]
    postOrder(left)
    postOrder(right)
    result+=node
}

preOrder('A')
result+='\n'
inOrder('A')
result+='\n'
postOrder('A')

console.log(result)