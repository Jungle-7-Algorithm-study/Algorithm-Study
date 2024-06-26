// 내 방법

class Tree{
    constructor(parent, nodeNum){
        this.nodeNum = nodeNum
        this.parent = parent
        this.child = []
    }

    insert(parent,nodeNum){
        if(this.nodeNum === parent){
            this.child.push(new Tree(parent,nodeNum))
            return true
        } else{
            for(let i = 0; i < this.child.length; i++){
                if(this.child[i].insert(parent,nodeNum)) return true
            }
        }
        return false
    }

    delete(nodeNum){
        let flag = true
        if(this.nodeNum === nodeNum) return false
        for(let i = 0; i < this.child.length; i++){
            if(this.child[i].nodeNum === nodeNum){
                this.child.splice(i,1)
                return true
            } else{
                flag = this.child[i].delete(nodeNum)
            }
        }
        return flag
    }

    searchNil(){
        let count = 0
        if(this.child.length === 0) return 1
        for(let i = 0; i < this.child.length; i++){
            count += this.child[i].searchNil()
        }
        return count
    }
}

const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = Number(stdin[0])
const nodes = stdin[1].split(' ').map((node,idx)=>[Number(node),idx]).sort((a,b)=>{
    if(a[1]>b[1]) return 1
    else if(a[1] < b[1]) return -1
    else return 0
})
let rootIdx = []
for(let i = 0; i < N; i++){
    let [node,idx] = nodes[i]
    if(node === -1){
        rootIdx.push(idx)
    }
}
let trees = []
for(let i = 0; i < rootIdx.length; i++){
    trees.push(new Tree(null, rootIdx[i]))
}

while(nodes.length){
    let flag = false
    let [node, idx] = nodes.shift()
    if(node === -1) continue
    trees.some((tree)=>{
        flag = tree.insert(node,idx)
        if(flag) return true
    })
    if(!flag) nodes.push([node, idx])
}

let cut = []
trees.forEach((tree,idx)=>{
    if(!tree.delete(Number(stdin[2]))){
        cut.push(idx)
    }
})

for(let i = 0; i < cut.length; i++){
    trees.splice(cut[i], 1)
}

if(!trees.length){
    console.log('0')
} else{
    let ans = 0
    trees.forEach((tree)=>{
        ans += tree.searchNil()
    })
    console.log(ans.toString())
}


// 인터넷 방법 : 훨씬 쉬움

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
const parentInfo = input.shift().split(' ').map(Number);
const eraseNode = +input.shift();

let tree = [];
let cnt = 0;
let rootNode;

parentInfo.forEach((parentNode, idx) => {
  if (parentNode == -1) {
    rootNode = idx;
    return;
  }
  if (!tree[parentNode]) tree[parentNode] = [];
  tree[parentNode].push(idx);
});
const dfs = (node) => {
  if (rootNode == eraseNode) return 0;
  if (!tree[node]) {
    cnt++;
    return;
  }
  tree[node].forEach((nodeNum) => {
    if (nodeNum === eraseNode) {
      if (tree[node].length === 1) cnt++;
      return;
    }
    dfs(nodeNum);
  });
  return cnt;
};
console.log(dfs(rootNode));