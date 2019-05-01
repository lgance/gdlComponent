const path = require('path');


module.exports = {
    name:'myTypeScript-setting',
    mode:'development',// production
    devtool:'eval',  // source-map   hidden-source-map
    resolve:{
        extensions:['.ts','json','.jsx','.css']
    },
    entry:{
        app:['./src/test.ts']
    }, // 기존파일

    module: {
		rules: [
			{
				test: /\.ts$/,
                use: ['ts-loader'],
                exclude:["/node_modules"]
            },
		]
    }, // 기존파일에 적용할 모듈 
    
    output:{
        path:path.join(__dirname,'./dist/src'),
        filename:'[name].js'
    }, // 결과 파일
  
}




// const HtmlWebPackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const path = require('path');


// module.exports = {
//     mode: "development", // "production" | "development" | "none"
//     module:{
//             rules:[

               
//                 {
//                     test:/\.js$/,
//                     exclude:/node_modules/,
//                     use:{
//                         loader:'babel-loader',
//                     }
//                 },
//                 {
//                     test:/\.html$/, // html Loader
//                     use:[
//                         {
//                             loader:'html-loader',
//                             options:{minimize:true}
//                         }
//                     ]
//                 },
//                 {
//                     test:/\.scss$/,
//                     use:[
//                         // fallback to style-loader in development
//                         //   process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
//                         'style-loader',
//                         "css-loader",
//                         "sass-loader"
//                     ]
//                 },
//                 {
//                     test:/\.(png|svg|jpg|gif)$/,
//                     use:[
//                         'file-loader'
//                     ]
//                 },
//             ]
//     },
//     plugins:[
//             new HtmlWebPackPlugin({
//                 template:'./src/index.html',
//                 filename:'./index.html'
//             }),
//             new MiniCssExtractPlugin({
//                 // Options similar to the same options in webpackOptions.output
//                 // both options are optional
//                 filename: "[name].css",
//                 chunkFilename: "[id].css"
//             })
//     ]

// }
