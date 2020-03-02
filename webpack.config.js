const webpack = require('webpack');
const path = require('path');


//單一入口
// module.exports = {
//     //進入口
//     entry: './dev/js/index.js',
//     //輸出口
//     output: {
//         path: path.resolve(__dirname, 'dest/js'), //路徑
//         filename: 'bundle.js' //輸出檔案名稱
//     }
// };


//多入口的寫法，就是一次有多支js

module.exports = {
    //多入口寫法
    entry: {
        index: './dev/js/index.js',
        aboutus: './dev/js/aboutus.js'
    },
    //輸出口
    output: {
        path: path.resolve(__dirname, 'dest/js'), //路徑
        filename: '[name].js' //輸出檔案名稱
    }
};

// 指令
// 