const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    name:'myTypeScript-setting',
    mode:'development', // "production" | "development" | "none"
    devtool:'eval',  // source-map   hidden-source-map
    resolve:{
        modules:['node_modules'],
        extensions:['.ts','json','.jsx','.scss','.css','.js']
    },
    entry:{
        index:['./src/index.ts']
    }, // 기존파일

    module: {
		rules: [
			{
				test: /\.ts$/,
                use: ['ts-loader'],
                exclude:["/node_modules"]
            },

            {
                test:/\.html$/, // html loader
                use:[
                    {
                        loader:'html-loader',
                        options:{minimize:true}
                    }
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                    use:[
                        'file-loader'
                    ]
            },
            //  {
            //     test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     loader: 'url-loader',
            //     options: {
            //       name: '[hash].[ext]',
            //       limit: 10000,
            //     },
            //   }
		]
    }, // 기존파일에 적용할 모듈 
    
    plugins:[
        new HtmlWebPackPlugin({
            template:'./src/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css',
            chunkFilename:'[id].css'
        })
    ],
    optimization:{},
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
