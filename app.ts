// let a=10;
// console.log(a);


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


class Child{
    name="anil sidhu";
    getName()
    {
        return this.name;
    }
}

let c1=new Child();
console.log(c1.getName());

class Parents extends Child{
    age=10;
    getAge(): number {
        return this.age
    }
}

let obj= new Parents();
console.log(obj.getName());

