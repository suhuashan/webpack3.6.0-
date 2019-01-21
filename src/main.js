import Cal from './cal.js';
import './main.css';
import './main.less';
import './dog.jpg';


var container = document.getElementById("app");
container.innerHTML = Cal;
let fn = () => {
	console.log("这是一个箭头函数");
}
fn();

let name = "xiaoming";
console.log(name);