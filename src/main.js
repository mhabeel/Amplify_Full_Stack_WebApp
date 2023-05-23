import { Amplify, API, graphqlOperation } from "aws-amplify";
import './gym.css';
import awsconfig from "./aws-exports";
import { createTodo } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";

Amplify.configure(awsconfig);

const MutationButton = document.getElementById("btn");
const ListResult = document.getElementById("list");

MutationButton.addEventListener("click", async () => {
  console.log("clicked");
  const todo = {
    name: "New user",
    description: `This is a new item (${new Date().toLocaleString()})`,
  };
  try {
    const result = await API.graphql(graphqlOperation(createTodo, { input: todo }));
    const newItem = result.data.createTodo;

    ListResult.innerHTML = `<li>${newItem.name} - ${newItem.description}</li>`;
  } catch (error) {
    console.error("Error creating new item:", error);
  }
 
});
