async function order() {
    const response = await fetch(
      "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users"
    );
    const users = await response.json();
  
    return users;
  }
  
  document.addEventListener("DOMContentLoaded", async () => {
    let user = [];
  
    try {
      user = await order();
    } catch (e) {
      console.log("error");
      console.log(e);
    }
    console.log(user);
  
    let table = document.getElementById("div");
    console.log(table);
  
    for (let i = 0; i < user.length; i++) {
      let tr = document.createElement("tr");
      tr.classList.add("trAppend");
  
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");
      let td6 = document.createElement("td");
      let td7 = document.createElement("td");
  
      let image = document.createElement("img");
  
      image.src = user[i].profilePic;
  
      td1.append(user[i].id);
      td2.append(image);
      td3.append(user[i].fullName);
      td4.append(user[i].dob);
      td5.append(user[i].gender);
      td6.append(user[i].currentCity);
      td7.append(user[i].currentCountry);
  
      tr.append(td1, td2, td3, td3, td4, td5, td6, td7);
  
      table.append(tr);
    }
  });
  