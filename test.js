


    const MutationButton = document.getElementById("btn");
 const MutationResult = document.getElementById("text");
 const QueryResult = document.getElementById("QueryResult");
 const SubscriptionResult = document.getElementById("SubscriptionResult");

 MutationButton.addEventListener("click", (evt) => {
   
    console.log("clicked");
    MutationResult.innerHTML += `<p>hello</p>`;
   
 });