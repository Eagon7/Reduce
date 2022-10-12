//获取元素中最大值
let arr =[1,2,3,1,7,77]
function arrayMax(array){
    return array.reduce((pre,current)=>{
        return pre<current?current:pre
    })
}
console.log(arrayMax(arr)); 