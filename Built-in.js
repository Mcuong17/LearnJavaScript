/* 
Giới thiệu một số hàm built-in:
    1. Alert
    2. Console
    3. Confirm
    4. Prompt
    5. Set timeout
    6. Set interval
*/
var fullName = "Dam Manh Cuong"
console.log('Đây là 1 dong log');// in ra dòng log
console.error(fullName); // cảnh báo lỗi
//confirm("Xác nhận đủ tuổi");
prompt("Xin chào, hãy nhập tuổi") // thêm 1 ô input

setTimeout(function() {
    console.log('xin chào anh em');
},1000) // In sau một khoảng thời gian xác định bằng milisecond

setInterval(function() {
    console.log('Hello anh em' + Math.random);
},1000)