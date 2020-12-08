const path=require('path');//加载path模块
module.exports={
    //mode:'production',// 模式 production 生产环境  development 开发环境
    entry:{//多个入口
      index:'./src/index.js',
      product:'./src/product.js'
    },//入口 上级一个点.
    output:{//打包出口
        path:path.resolve(__dirname,'../dist/'), //打包文件输出路径 绝对路径 获取当前绝对路径
        //filename:'bundle.js'// 打包文件输出名称. 指定名称
        filename:'[name].[hash].js' //[name]  [hash] hash码 入口文件如果被修改了 hash会重新生成.
    }
}