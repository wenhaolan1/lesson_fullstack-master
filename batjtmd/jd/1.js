//函数，判断 文件是否是图片文件
// a.txt
// b.jpg
// c.webp
/**
 * 代码最重要的是？ 是功能吗？ 在学校是 
 * 可读性
 * @param {string} file  文件名
 * @return{ boolean }  是否是图片
 * @author  作者
 * @date 日期
 */
function checkIsImage(file){
    console.log(file);
    //file不能为空
    if(!file){
         return false;

    }

    // if (file.split('.')[1]=='jpg'
    // ||file.split('.')[1]=='png'
    // ||file.split('.')[1]=='gif'
    // ||file.split('.')[1]=='svg'
    // ||file.split('.')[1]=='jpeg'
    // ||file.split('.')[1]=='awebp'
    // ){
    //     return true;
    // };
    let imgFormats=['jpg','gif','jpeg','png','svg','awebp']
    //三目运算符    
    return imgFormats.indexOf(file.split('.')[1])==-1?false:true;

   // let pos= ['jpg','gif','jpeg','png','svg','awebp'].indexOf(file.split('.')[1])
    // if(pos==-1){
    //     return false;
    // }
    // else {
    //     return ture;
    // }
  return false;
}
console.log(checkIsImage('a.gif'));