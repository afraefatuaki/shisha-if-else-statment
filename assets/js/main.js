let age = document.getElementById('input')
let decision = document.getElementById('canOrCant')
function greaterThan() {
    if (age.value >= 18) {
        decision.innerHTML = 'Ja. Du kannst Shisha rauchen'
    } else {
        decision.innerHTML = 'Du darfst noch nicht Shisha rauchen'
    }
}
