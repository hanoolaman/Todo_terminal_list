#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from"chalk";

let todoList:string[] = [];
let conditions = true;
console.log(chalk.yellowBright.bold(" \n \t               Welcome to TODO-TERMINAL-LIST       \n")); 

let main = async() =>{
while (conditions){
        let option = await inquirer.prompt([
            {
                name : "Choice",
                type: "list",
                message:" please select an option",
                choices:["Add Task" , "View Todo-List", "Update Task" , "Delete Task", chalk.redBright("Exit")],
            }
        ]);
        if (option.Choice === "Add Task"){
            await AddTask ()
        }
        else if(option.Choice === "View Todo-List"){
            await ViewTask()
        }
        else if(option.Choice === "Update Task"){
            await UpdateTask()
        }
        else if(option.Choice === "Delete Task"){
            await DeleteTask()
        }
        else if(option.Choice === chalk.redBright("Exit")){
            conditions = false;
        }
    }
};

main();

let AddTask = async () => {
        let newTask = await inquirer.prompt(
            [
                {
                  name:"task",
                  type:"input",
                  message:chalk.magenta("Please enter your new task:")
                }
            ]);
    todoList.push(newTask.task);
    console.log(`\n ${chalk.green.bold(newTask.task)} added successfully in your Todo-List \n`);
};
    
let ViewTask = () => {
    console.log(chalk.yellow.bold("\n Your Todo-list: \n"));
    todoList.forEach((task,index) => {
        console.log(`${index+1}: ${task}`);
    }); 
};

let UpdateTask = async() => {
    await ViewTask()
    let updateTaskIndex = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:chalk.magenta("Please enter the 'index no' of the task you want to update:"),
        },
        {
            name:"new_task",
            type:"input",
            message:chalk.magenta("Now enter your new task:"),
        }
    ]);
    todoList[updateTaskIndex.index-1] = updateTaskIndex.new_task
    console.log(`\nTask at index ${chalk.green.bold(updateTaskIndex.index-1)} updated successfully\n\n[For updated List, check option: "View Todo-list"] \n`);
};

let DeleteTask = async() =>{
    await ViewTask()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message:chalk.magenta("Please enter the index of the task you want to delete:"),
        }
    ]);
    let DeleteTask = todoList.splice(taskIndex.index -1,1);
    console.log(`\n ${chalk.green.bold(DeleteTask)} task has been deleted from your Todo-List \n`);
    };



















// while(conditions){
//     let addTask = await inquirer.prompt(
//         [
//             { 
//               name: "todos",
//               type: "input",
//               message:"What would you like to add in your todo list?"
//             },  
//         ]
//     )
// todoList.push(addTask.todos); 
// console.log(`${addTask.todos} is added in your Todo-List successfully.`);

//     let addMoreTask = await inquirer.prompt(
//         [
//             {
//               name: "addMore",
//               type: "confirm",
//               message: "Would you like to add more in your todo list?",
//               default: "false"
//             }
//         ]
//     )
// conditions = addMoreTask.addMore;
// }
// console.log("your Todo-List:",todoList);
