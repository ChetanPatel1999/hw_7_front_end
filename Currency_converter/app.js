let dropdowns = document.querySelectorAll(".select-container select");
for (let select of dropdowns) {
    for (let curcode in currencyToCountry) {
        let newOption = document.createElement("option");
        newOption.innerText = curcode;
        newOption.value = curcode;
        if (select.name == "from" && curcode == "USD") {
            newOption.selected = "selected";
        }
        else if (select.name == "to" && curcode == "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        console.log(evt.target.value);
        let img = select.parentElement.querySelector("img");
        img.src = `https://flagsapi.com/${currencyToCountry[evt.target.value]}/flat/64.png`
    })
}



