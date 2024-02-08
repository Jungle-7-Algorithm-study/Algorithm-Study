const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const heightArr = []
for(let i = 0; i < 9; i++){
  heightArr.push(parseInt(input[i]))
}
heightArr.sort((a,b)=>a-b)
let allHeight = heightArr.reduce((prev,cur)=>{
  return prev + cur
},0) - 100 // 40
let filtered = []
heightArr.some(height => {
  if(heightArr.includes(allHeight - height) && (allHeight - height) !== (height)){
    filtered.push(allHeight - height)
    filtered.push(height)
    return true
  }
});
let ans = heightArr.filter((e)=>
  !filtered.includes(e)
)
console.log(ans.join('\n'))
