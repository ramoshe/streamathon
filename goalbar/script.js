function addElixir() {
    let currentTotal = document.querySelector("#current-total").innerHTML;
    let toAdd = document.querySelector("#elixir-amount").value;

    // Add new value to total
    const newTotal = parseInt(currentTotal) + parseInt(toAdd);
    // Calculate new percentage
    const newPercent = parseInt((newTotal / 5000) * 100);
    console.log(newTotal);
    console.log(newPercent);
    // Update total and percentage
    document.querySelector("#current-total").innerHTML = newTotal;
    document.querySelector("#current-percent").innerHTML = newPercent;
    // Update goal bar
    const progress = document.querySelector("#progress");
    progress.style.width = `${newPercent}%`;
    // Clear input
    document.querySelector("#elixir-amount").value = "";
}