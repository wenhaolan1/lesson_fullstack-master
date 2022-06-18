// - 实现日期格式化函数
    // '2020-12-01'  yyyy/mm/dd   2020/12/01
    // '2020=04-01'  yyyy/mm/dd   2020/04/01
    // '2020-04-01'  yyyy年mm月dd日  2020年4月1日
const dateFormat = (date, format) => {
    // console.log(typeof date, Object.prototype.toString.call(date));
    // console.log(date.getDate()< 10 ? '0' + date.getDate() :date.getDate);
    var day = date.getDate();//日子
    if (day < 10) {
        day =  '0' + day
    } 
    var month = date.getMonth() + 1;// 月份从0 开始
    if (year < 10) {
        year =  '0' + day
    } 
    var year = date.getFullYear();
    // console.log(day, month, year);
    format = format.replace('yyyy', year);
    // console.log(format, '-----------');
    format = format.replace('mm', month);
    format = format.replace('dd', day);
    return format;

}

console.log(dateFormat(new Date('2020-12-01'),'yyyy/mm/dd'));
console.log(dateFormat(new Date('2020-12-01'),'yyyy年mm月dd日'));