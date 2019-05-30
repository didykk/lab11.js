const height = 20;
const weidth = 40;
const field = [];
randomBody = function () {
    return Math.round(Math.random());
};
function createBoard(arr) {
    for (let i = 0; i <= height; i++) {
        arr[i] = [];
        for (let j = 0; j <= weidth; j++) {
            if (i === 0 || j === 0 || i === height || j === weidth) {
                arr[i][j] = 0
            } else {
                if (randomBody()) {
                    arr[i][j] = 1;
                } else {
                    arr[i][j] = 0;
                }
            }
        }
    }
}
function drawBoard(arr) {
    for (let i = 0; i <= height; i++) {
        for (let j = 0; j <= weidth; j++) {
            if (arr[i][j]) {
                process.stdout.write("#");
            } else {
                process.stdout.write(" ");
            }
        }
        process.stdout.write('\n');
    }
}
function changeLife(arr) {
    for (let i = 1; i < height; i++) {
        for (let j = 1; j < weidth; j++) {
            if ((calcNeighdors(arr, i, j) === 2)){
                arr[i][j] = 1;
            } else {
                arr[i][j] = 0;
            }
        }
    }
}
function calcNeighdors(arr, i, j) {
    return (arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1] +
        arr[i][j - 1] + arr[i][j + 1] +
        arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1]);
}
createBoard(field);
drawBoard(field);
setInterval(function () {
    process.stdout.write('\033c');
    drawBoard(field);
    changeLife(field);
}, 250);
