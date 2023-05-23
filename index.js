// // Add your code here
function submitData(firstName, email){
  const configurationObject={
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      "name": firstName,
      "email": email,
    })
  };
  return fetch("http://localhost:3000/users", configurationObject)
  .then(res=>res.json())
  .then(obj=>{
    let body = document.querySelector("body")
    body.append(obj.id)
  })
  
  .catch(function(error) {
    alert("Unauthorized Access");
    console.log(error.message);
    let body = document.querySelector("body")
    body.append(error.message)
    })
  }
  

  






