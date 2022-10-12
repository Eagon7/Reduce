//查看购物车最贵商品  某个东西里面最---的东西
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

// function MAXprice(array) {
//     return array.reduce((pre, cur) => {
//         return pre.price<cur.price?cur:pre
//     }).price
// }
// console.log(MAXprice(product));

//总结购物车价格
function num(goods){
    return goods.reduce((total,cur)=>{
        return total+=cur.price
    },0)
}
console.log(num(product));