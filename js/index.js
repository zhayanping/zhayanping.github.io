//获取日期
let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth()+1;
let currentDay = date.getDate();
//当地日期
// let localDate = date.toLocaleDateString();

//填充日期
//悬浮标签
document.getElementById("DayOfTheYear").innerText = currentDay.toString();
document.getElementById("MonthOfTheYear").innerText = currentMonth.toString()+"Month";
//当前月
document.getElementById("currentMonth").innerText = currentMonth+"Month";

//最近日期
let arr = [currentDay-2,currentDay-1,currentDay,currentDay+1,currentDay+2];
let str = "";
for (let i = 0; i < arr.length; i++) {
    str+='<li>'+arr[i]+'</li>';
}
document.getElementById("days").innerHTML = str;

//下一月
document.getElementById("nextMonth").innerText = (currentMonth+1)+"Month";

//图片跳转链接
for (let i = 0; i < 9; i++) {
    document.getElementById("p"+(i+1)).onclick = (function (){
        location.href="../res/bg/b"+(i+1)+".jpg"
    });
}
