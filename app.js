// let a=10;
// console.log(a);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class App{
//     test(x:number, y:number){
//         console.log(x+y);
//     }
// }
// let a = new App();
// a.test(10,20)
// let data=['gagan','joyo','merio',10]
// data.push(100);
// console.log(data);
// let user={
//     name:"bruce",
//     age:30,
//     address:"USA"
// }
// user.name="gagan";
// user.age=25;
// user.address="IND"
// console.log(user);
// interface userTyped{
//     name:string,
//     age:number,
//     address:any
// }
// let user:userTyped={
//     name:"bruce",
//     age:30,
//     address:105 +"USA"
// }
// user.name="gagan";
// user.age=25;
// user.address="IND"
// console.log(user);
// union Types
// let data:string | number | boolean = 120;
// console.log(data);
// interface userType{
//     name:string,
//     age:number,
//     getName:()=>string
// }
// let user:userType={
//     name:"gagan pratap singh",
//     age:23,
//     getName:function()
//     {
//         return "gagan pratap singh"
//     }
// }
// console.log(user)
// console.log(user.getName())
// functions with data type
// function cals():string{
//     return "gagan singh";
// }
// console.log(cals());
// function cals(num:number):string{
//     return "gagan singh" +100;
// }
// console.log(cals(100));
// function fun(a:number,b?:number){
//     return b?a+b:a;
// }
// console.log(fun(10))
// class in typeScript
// class App{
//     name="gagan singh"
//     constructor(){
//         console.log("constructor call");
//     }
//     getName(){
//         console.log(this.name);
//     }
// }
// let a =new App();
// a.getName();
//contructor with parameter
// class App{
//     name="gagan singh"
//     constructor(name:string){
//         this.name=name;
//     }
//     getName(){
//         console.log(this.name);
//     }
// }
// let a =new App("gagan");
// a.getName();
//Inheritance in TypeScript
var Child = /** @class */ (function () {
    function Child() {
        this.name = "anil sidhu";
    }
    Child.prototype.getName = function () {
        return this.name;
    };
    return Child;
}());
var c1 = new Child();
console.log(c1.getName());
var Parents = /** @class */ (function (_super) {
    __extends(Parents, _super);
    function Parents() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.age = 10;
        return _this;
    }
    Parents.prototype.getAge = function () {
        return this.age;
    };
    return Parents;
}(Child));
var obj = new Parents();
console.log(obj.getName());
