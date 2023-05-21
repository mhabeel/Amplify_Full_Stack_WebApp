import { Amplify, API, graphqlOperation } from "aws-amplify";
import './gym.css';
import awsconfig from "./aws-exports";
import { createTodo } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";

Amplify.configure(awsconfig);

async function createNewTodo() {
  const todo = {
    name: "Use AppSync",
    description: `Realtime and Offline (${new Date().toLocaleString()})`,
    
  };

  const result = await API.graphql(graphqlOperation(createTodo, { input: todo }));
  const newTodoName = result.data.createTodo.name;

  const listItem = document.createElement("li");
  listItem.innerText = newTodoName;
  document.getElementById("list").appendChild(listItem);
}

//document.getElementById("btn").addEventListener("click",() => {
 // console.log("clicked");
 // createNewTodo} );

async function getData() {
  const result = await API.graphql(graphqlOperation(listTodos));
  const todos = result.data.listTodos.items;

  const list = document.getElementById("list");
  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.innerText = todo.name;
    list.appendChild(listItem);
  });
}

getData();
document.getElementById("btn").addEventListener("click",() => {
  console.log("clicked");
 } );