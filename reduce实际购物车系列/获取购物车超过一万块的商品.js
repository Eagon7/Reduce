// 获取上平价格超过一万元的名称
let product = [
    {
        name: "ipad",
        price: 135.2
    },
    {
        name: "iphone",
        price: 25.2
    }, {
        name: "macbook",
        price: 2010.3
    },
]

// function getName(array){
//     let stockpile = []
//     array.reduce((pre,cur)=>{
//         stockpile.push(pre.price>100?pre:null)
//         return cur
//     })
//     return stockpile
// }
// console.log(...getName(product));


function getName(array,price){
    return array.reduce((arr,cur)=>{
        if(cur.price>price){
            arr.push(cur)
        }
        return arr
    },[]).map(item=>{
        return item.name
    })
}
console.log(...getName(product,100));


const fruits = ['orange', 'apple', 'banana', 'grape'];

const item = fruits.at(1);
console.log(item);