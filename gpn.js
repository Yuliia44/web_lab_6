const totalGrandPrix = 24;

function remainingGrandPrix(currentGrandPrix) {
    if (currentGrandPrix > totalGrandPrix || currentGrandPrix < 0) {
        return "Помилка: некоректне значення поточного гран-прі";
    }
    return totalGrandPrix - currentGrandPrix;
}
document.getElementById('gp-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const currentGrandPrix = parseInt(document.getElementById('current-gp').value);
    const result = remainingGrandPrix(currentGrandPrix);
    document.getElementById('remaining-gp').textContent = result;
});