function transposeMatrix(matrix) {
    let result = Array(matrix[0].length);
    for(let i=0; i<matrix[0].length; i++) {
        let arr = Array(matrix.length);
        result[i] = arr;
    }
    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[0].length; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}
    
let matrix = [[1, 2, 3], [4, 5, 6]];
console.log(transposeMatrix(matrix)); // [[1, 4], [2, 5], [3, 6]]