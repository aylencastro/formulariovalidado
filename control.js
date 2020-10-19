function validarMail(form) 
{
  let user = form.user.value;
  let password = form.password.value;

  if (user == "" || password == "") {
    alert("¡Hola! Te pedimos que por favor no dejes sin completar alguno de los datos.");
    return false;
  } 

  else if (user.indexOf('@', 0) == -1 || user.indexOf('.com', 0) == -1){
    alert("No te olvides de ingresar un email válido (que contenga @ y sea un dominio .com)");
    return false;
  }
  
  else {
    return true;
  }
}