const path = require('path');


module.exports = {
    name:'myTypeScript-setting',
    mode:'development',// production
    devtool:'eval',  // source-map
    resolve:{
        extensions:['.ts']
    },
    entry:{
        app:['./src/src/test']
    }, // 기존파일

    module: {
		rules: [
			{
				test: /\.ts$/,
				use: ['ts-loader']
			}
		]
    }, // 기존파일에 적용할 모듈 
    
    output:{
        path:path.join(__dirname,'./dist/src'),
        filename:'app.js'
    }, // 결과 파일
  
}