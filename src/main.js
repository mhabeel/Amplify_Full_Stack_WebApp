// import { Amplify, API, graphqlOperation } from "aws-amplify";
import Vue from 'vue';
// import { Authenticator } from "@aws-amplify/ui-vue";
import { createApp } from 'vue';
import App from './App.vue';
import './gym.css';
// import awsconfig from "./aws-exports";
// import { createTodo } from "./graphql/mutations";
// import { listTodos } from "./graphql/queries";
createApp(App).mount('#app');
// Amplify.configure(awsconfig);

// const MutationButton = document.getElementById("btn");
// const ListResult = document.getElementById("list");

// MutationButton.addEventListener("click", async () => {
//   console.log("clicked");
//   const todo = {
//     name: "New user",
//     description: `This is a new item (${new Date().toLocaleString()})`,
//   };
  
//   try {
//     const result = await API.graphql(graphqlOperation(createTodo, { input: todo }));
//     const newItem = result.data.createTodo;

//     ListResult.innerHTML = `<li>${newItem.name} - ${newItem.description}</li>`;
//   } catch (error) {
//     console.error("Error creating new item:", error);
//   }
 
// });


