
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res = []
    if(matrix) {
        for(let i = 0; i < matrix.length; i++) {
            for(j = 0; j < matrix[i].length; j++){
                let idx = i % 2 === 0 ? j : (matrix[i].length - 1 - j);
                res.push(matrix[i][idx]);
            }
        }
    } else {
        return []
    }
    
  return res
}
