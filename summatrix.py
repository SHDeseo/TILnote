def sumMatrix(A,B):
    answer = []
    for i in range(0,len(A)):
        row = []  
        for n in range(0,len(A[i])):
            row.append(A[i][n] + B[i][n])  
        answer.append(row)
    return answer

print(sumMatrix([[1,2],[3,4]],[[4,5],[5,6]]))
