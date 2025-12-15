async function afficherusers() {
  const reponse = await fetch("./users.json");
  const users = await reponse.json();
  console.log(users);
  return users;
}

async function filterUsers(){
}

const users = afficherusers();

users.then(result => {
  console.log("ok");
  console.log(result);
});
    
 
