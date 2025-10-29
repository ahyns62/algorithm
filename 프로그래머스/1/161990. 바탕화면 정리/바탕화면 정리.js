function solution(wallpaper) {
    const col = wallpaper.length;
    const row = wallpaper[0].length;
    let minRow = col;
    let minCol = row;
    let maxRow = -1;
    let maxCol = -1;
    
    for(let i = 0; i < col; i++){
        for(let j = 0; j < row; j++){
            if(wallpaper[i][j] === '#'){
                if(i < minRow) minRow = i;
                if(j < minCol) minCol = j;
                if(i > maxRow) maxRow = i;
                if(j > maxCol) maxCol = j;
            }
        }
    }

    return [minRow, minCol, maxRow + 1, maxCol + 1];
}