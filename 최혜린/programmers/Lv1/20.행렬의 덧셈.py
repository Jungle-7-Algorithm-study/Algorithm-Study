def solution(arr1, arr2):
    ans = []
    
    for i in range(len(arr1)):
        ans.append([])
        
        for j in range(len(arr1[0])):
            ans[i].append(arr1[i][j] + arr2[i][j])
    return ans