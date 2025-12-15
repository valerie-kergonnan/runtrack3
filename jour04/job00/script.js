async function afficherusers() {
  const reponse = await fetch("./users.json");
  const users = await reponse.json();
  console.log(users);
}
afficherusers();
