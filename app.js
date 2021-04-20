const place = document.querySelector(".location");
const date = document.querySelector("#date")
const amount = document.querySelector("#amount")
const submit = document.querySelector("#submit")
const clear = document.querySelector("#clear")
const form = document.querySelector("form")
const container = document.querySelector("#container")
const dataContain = document.querySelector(".dataContain")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let places = place.value;
    let dates = date.value;
    let amounts = amount.value;
    console.log(places);
    console.log(dates);
    console.log(amounts);

    let data = document.createElement("tr")
    let subdata1 = document.createElement("td")
    let subdata2 = document.createElement("td")
    let subdata3 = document.createElement("td")
    let button = document.createElement("button")

    button.innerHTML = "X";
    subdata1.append(places)
    subdata2.append(dates)
    subdata3.append(`$${amounts}`, button)
    data.append(subdata1, subdata2, subdata3)
    dataContain.append(data)

    button.addEventListener("click", function (r) {

        button.parentElement.parentElement.remove();
        console.log(r)
    })

})






