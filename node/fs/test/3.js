const fs = require('fs')

fs.stat('./a/txt', function(err,data) {
    if(err){
        console.log(data);
        return;
    }
    console.log(data, '---------------------');
})
const info = fs.statSync('./a.txt')
    console.log(info);