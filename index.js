function guardar() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let type = document.formulaire.type.value;

  console.log(name, email, age, type);

  if (name == "") {
    alert(" vous devez informer  votre nom ");
  }
  if (email == "") {
    alert("vous devez informer  votre email");
  }
  if (age == "") {
    alert("vous devez informer votre age");
  }
  if (type == "") {
    alert("vous devez informer  votre type");
  } else {
    alert("vous avez sauveguarder les information    ");
  }
}
