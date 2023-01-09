async function order() {
    const response = await fetch(
      "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products"
    );
    const users = await response.json();
  
    return users;
  }
  
  document.addEventListener("DOMContentLoaded", async () => {
    let products = [];
  
    try {
      products = await order();
    } catch (e) {
      console.log("error");
      console.log(e);
    }
    console.log(products);
  
    let table = document.getElementById("table");
    console.log(table);
  
  
    for (let i = 0; i < products.length; i++) {
      let tr = document.createElement("tr");
  
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");
      let td6 = document.createElement("td");
      let td7 = document.createElement("td");
  
      td1.append(products[i].id);
      td2.append(products[i].medicineName);
      td3.append(products[i].medicineBrand);
      td4.append(products[i].expiryDate);
      td5.append(products[i].unitPrice);
      td6.append(products[i].prescriptionRequired);
      td7.append(products[i].stock);
  
      td1.append(td1, td2, td3, td3, td4, td5, td6, td7);
  
      table.append(tr);
    }  
    });
  
  