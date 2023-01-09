async function order(){
    const response = await fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
    const users =await response.json()

    return users
}
document.addEventListener("DOMContentLoaded", async ()=> {
    let orders = []
    try{
        orders = await order()
    } catch (e) {
        console.log("error")
        console.log(e)
    }
    console.log(orders)
    let table = document.getElementById("table")
    console.log(table)

    
    for(let i=0; i<orders.length; i++){
        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        td1.append(orders[i].id)
        td2.append(orders[i].customerName)
        td3.append(orders[i].orderDate)
        td4.append(orders[i].orderTime)
        td5.append(orders[i].amount)
        td6.append(orders[i].orderStatus)
        tr.append(td1, td2, td3, td3, td4, td5, td6)
        table.append(tr)
    }
    }
)
