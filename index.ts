#! /usr/bin/env node
import inquirer from "inquirer";
let todolist:string[]= [];
let condition = true;

while(condition){
let options = await inquirer.prompt([{
    name:"operation",
    type:"list",
    message:"Which operation do you want to perform on todo app?",
    choices:["add","delete","update","view","quit"]
}])

if(options.operation == "add"){
    let addtask = await inquirer.prompt([{
        name:"addlist",
        type:"input",
        message:"What you want to add in list?"
    }])

    todolist.push(addtask.addlist);
    console.log(todolist);
}

else if(options.operation == "update"){
    if(todolist.length == 0){
        console.log("You do not update any element from todo app because todo app is empty.\n",todolist);
    }
    else{
    let updatetask = await inquirer.prompt({
        name:"updatelist",
        type:"list",
        message:"Select item for update: ",
        choices : todolist.map(items=>items)
    })
    let addtask = await inquirer.prompt([{
        name:"addlist",
        type:"input",
        message:"add item.."
    }])
    let newtodo:string[] = todolist.filter(val => val !== updatetask.updatelist);
    todolist = [...newtodo,addtask.addlist];
    console.log(todolist);
}
}

else if(options.operation == "delete"){
    if(todolist.length == 0){
        console.log("You do not delete any element from todo app because todo app is empty.\n",todolist);
    }
    else{
    let deletetask = await inquirer.prompt({
        name:"deletelist",
        type:"list",
        message:"Select item for update: ",
        choices : todolist.map(items=>items)
    })
    let newtodo = todolist.filter(val => val !== deletetask.deletelist);
    todolist = [...newtodo];
    console.log(todolist);
}
}

else if(options.operation == "view"){
    console.log("Your updated list is ", todolist);
}

else{
    condition = false;
}
}
