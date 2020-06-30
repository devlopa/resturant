let path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use:{
               loader:'babel-loader', 
               options:{
                   presets:['@babel/env','@babel/react']
               }
                }
            },{
                test:/.css$/i,
                use:['style-loader','css-loader']
            }
        ]
    }
}