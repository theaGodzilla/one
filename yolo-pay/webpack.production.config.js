const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports={
    //入口文件
    entry:{
        index:'./src/route.js',
        BuySuccess:'./src/js/BuySuccess.js',
        PurchaseFailed:'./src/js/PurchaseFailed.js',
        PurchaseRecords:'./src/js/PurchaseRecords.js',
        againToBuy:'./src/js/againToBuy.js'
    },
    //出口：打包文件放置的目录
    output:{
        path:path.resolve(__dirname,'./dist/'),//打包文件存放路径
        filename:'[name].js',
    },
    //编译模式
    mode:'production',

    //测试服务器：webpack-dev-server  / webpack-cli
    devServer:{
        contentBase:'./src/',
        host:'0.0.0.0',
        port:1717,
        open:true,
        clientLogLevel:"none",
        proxy:{
            '/api':{
                target:'https://touchcall.yolonet.net/',
                pathRewrite:{'^/api':''},
                //https://touchcall.yolonet.net/http://192.168.3.90
                secure:false,
                // changeOrigin: true,
            }
        }
    },

    //加载器配置
    module:{
        rules:[
            //编译es6->es5 (babel-loader\babel-core\babel-preset-env)
            {
                test:/\.js$/,
                exclude:path.resolve(__dirname,'./node_modules'),
                loader:'babel-loader',
            },
            // 样式加载器
            {
                test:/\.css$/,
                loader:['style-loader','css-loader','postcss-loader']
            },

            // sass编译加载器
            {
                test:/\.scss$/,
                loader:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader',
                ]
            },

            // 图片的处理：依赖file-loader
            {
                test:/\.(jpe?g|png|gif|bmp)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        // 设置转换base64编码的临界值
                        limit:10000,
                        name:'img/[name].[hash:7].[ext]'
                    }
                }
            },
            //px->rem
            // {
            //     loader:"pxrem-loader",
            //     options:{
            //         root:72,
            //         fixed:8
            //     }
            // }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/BuyIntegral.html',
            excludeChunks: ['BuySuccess','PurchaseRecords','PurchaseFailed','againToBuy']
        }),
        new HtmlWebpackPlugin({
            template:'./src/html/BuySuccess.html',
            filename: 'html/BuySuccess.html',
            excludeChunks: ['index','PurchaseRecords','PurchaseFailed','againToBuy']
        }),
        new HtmlWebpackPlugin({
            template:'./src/html/PurchaseRecords.html',
            filename: 'html/PurchaseRecords.html',
            excludeChunks: ['index','BuySuccess','PurchaseFailed','againToBuy']
        }),
        new HtmlWebpackPlugin({
            template:'./src/html/PurchaseFailed.html',
            filename: 'html/PurchaseFailed.html',
            excludeChunks: ['index','BuySuccess','PurchaseRecords','againToBuy']
        }),
        new HtmlWebpackPlugin({
            template:'./src/html/againToBuy.html',
            filename: 'html/againToBuy.html',
            excludeChunks: ['index','BuySuccess','PurchaseRecords','PurchaseFailed']
        }),
    ]
}