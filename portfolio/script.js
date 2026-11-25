const przycisk = document.querySelector("#przycisk-ciekawostka");
const tekst = document.querySelector("#ciekawostka");

if (przycisk && tekst) {
    przycisk.addEventListener("click", function () {
        tekst.textContent =
            "Istnieje ponad 700 języków programowania, choć na co dzień w popularnym użyciu jest ich tylko kilkadziesiąt.";
    });
}