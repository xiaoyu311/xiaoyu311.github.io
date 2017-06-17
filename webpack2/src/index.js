//1.
//不传参数就直接是默认的   传一个参数y就是默认的8
// function sum(x=5,y=8){
// 	return x*y
// }
// // console.log(sum())
// console.log(sum(9))


//2.
//...吧剩余的变量数组形式存储到rest中
// function sum(a,...rest){
// 	console.log(a)
// 	return rest
// }
// console.log(sum(1,2,3,4,5,6,7))



//3.	if(isNaN(Number(rest[i]))) continue; 他俩必须写成一行，就不用加大括号
//Number转数字 不是数字直接转NaN continue表示 是NaN跳出本次循环 下次还继续循环
//Number(rest[i]);空的时候转成0
// function sum(...rest){
// 	let result = 0;
// 	for (let i = 0; i < rest.length; i++) {
// 		if(isNaN(Number(rest[i]))) continue; 
// 		result += Number(rest[i]);
// 	}
// 	return result
// }
// console.log(sum(1,2,3,4,5,6,"a",1))


//4.
//...表示展开  spared   和上面的...不是一个意思 
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr = [...arr1,222,...arr2,456]
// console.log(arr)


//5. es6构造函数和原型   里面不能写逗号和分号  constructor里面的是特有发
// class Preson{
// 	//这里面只能写方法 
// 	// constructor自动执行，接收实例对象的参数
// 	constructor(name,happy){
// 		this.name = name
// 		this.happy = happy
// 	}
// 	say(){
// 		console.log(`my name is` + this.name)
// 	}
// }
// //子类继承父类
// class Women extends Preson{
// 	constructor(name,happy,tall){
// 		super(name,happy)//后面可以有分号  里面的参数控制父类给子类
// 		this.tall = tall
// 	}
// 	run(){
// 		console.log("run")
// 	}
// }
// //传参直接传到子类中
// let preson = new Women("xiaoyu",111,222);
// console.log(preson)



//6. 从别的js文件导入命名导出
//export{}导出      import {} from "" 从哪导入  必须写相对路径
//默认导出必须放在命名导出前面
//as表示写成

// import sss,{a,b,c} from "./test.js"
// import{a as a1,b as b1,c as c1} from "./test.js"
// console.log(sss,a,b,c)
// console.log(a1,b1,c1)


//包方法引用
// import indexOf from "lodash/indexOf"
// console.log(indexOf)



//1.过滤方法
//过滤数组必须有返回值  
// let result = [2,5,7,9].filter(function(element,index,array){
// 	console.log(element,index,array)
// 	return element>3//条件转化成布尔值
// })
// console.log(result)


//2.遍历数组
// let arr = ["第一天","第二天","第三天"]
// let result = arr.map (item => `<h1>${item}</h1>`)
// let text = ""
// // for (var i = 0; i < result.length; i++) {
// // 	text += result[i]
// // }
// console.log(text)
// result.forEach(element=>text+=element)
// console.log(text)


//3.查找符合元素的下标
// let obj = [
// 	{name:"xiao",age:12},
// 	{name:"xiao",age:13},
// 	{name:"xiao",age:14},
// 	{name:"xiao",age:15}
// ]
// var index = obj.findIndex( item => item.age === 14)
// console.log(index)
	


//4.数组拼接   assign 后面的对象属性和方法 直接写到第一个对象内  重复的覆盖
let obj = {
	name:"xiaoyu",
	age:17
}
let obj1 ={
	happy:"happy",
	name:"yu",
	say(){

	}
}
Object.assign(obj,obj1)
console.log(obj)