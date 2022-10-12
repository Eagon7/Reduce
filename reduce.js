// https://juejin.cn/post/6916087983808626701
//         reduce 接收 2 个参数：
// 第一个参数是回调函数（必选），第二个参数是初始值 initialValue（可选） 。
// 而第一个参数（回调函数），接收下面四个参数：

// Accumulator (acc) (累计器)
// Current Value (cur) (当前值)
// Current Index (idx) (当前索引)
// Source Array (src) (源数组)

//initialValue ⚠️ 初始值 initialValue 可以是任意类型。如果没有提供 initialValue，reduce 会从索引 1 的地方开始执行 callback 方法，跳过第一个索引。如果提供 initialValue，从索引 0 开始。
//上句话解读: [1,2,3,4] 如果给initialValue,则从1开始执行---> initialValue+1 ....  .
//            如果没有给初始值,则从2开始,上一个值acc为1, 1+2
    // 不带初始值
  const a1= [1,2,3,4].reduce((acc,cur)=>{
        console.log(acc); 
        return acc+cur
    })
    // 1 + 2 + 3 + 4
    // 10

    //带初始值
   const a2 =  [1,2,3,4].reduce((acc, cur) => {
        return acc + cur
      }, 10)
      // 10 + 1 + 2 + 3 + 4
      // 20


 

    //previous先前的  上一个
    //current 当前的  现在
    //initial 最初的  最开始的


