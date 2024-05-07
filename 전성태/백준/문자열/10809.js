const S = [...require('fs').readFileSync('/dev/stdin').toString().trim()]
const ans = Array(26).fill(-1)
S.forEach((val,idx) => {
    let converted = val.charCodeAt()-97
    if(ans[converted] === -1)
        ans[converted] = idx
});
console.log(ans.join(' '))
