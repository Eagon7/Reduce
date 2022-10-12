//判断arr中1出现了几次
//total总的 current 当前的
// let arr = [1, 2, 3, 4, 5, 1]
// function arrayCount(array, item) {
//     return array.reduce((total, cur) => {
//         // console.log(cur);
//         total += item == cur ? 1 : 0
//         return total
//     }, 0) + '次'
// }
// console.log(arrayCount(arr, 1));


// 找出数组中相同的值出现的次数
let arr1 = ['1', '2', 'Eagon', 'Eagon']
function arrayCount1(arr, item) {
    let num = 0;
    return arr.reduce((total, current) => {
        // console.log(current);
        num += current === 'Eagon' ? 1 : 0
        return num
    })
}
console.log(arrayCount1(arr1, 'Eagon'));