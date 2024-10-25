function calculate() {
    // Get values from the input fields
    let weaponAttack = parseFloat(document.getElementById('weaponAttack').value) || 0; // Default to 0 if empty
    
    // If powercharm/powertalon checked, add 6 and 9 to totalAttack formula, respectively
    let powercharm = document.getElementById("powercharm").checked ? 6 : 0;
    let powertalon = document.getElementById("powertalon").checked ? 9 : 0;

    // Variables for the attack boost
    let atkBstMultiplier = 1.00;
    let atkBstBonus = 0;

    // Get the selected value from the radio buttons
    let selectedValue = document.querySelector('input[name="attackBoost"]:checked');
    if (selectedValue) {
        switch (selectedValue.value) {
            case '0':
                atkBstMultiplier = 1.00; // *1.00
                atkBstBonus = 0;         // +0 bonus
                break;
            case '1':
                atkBstMultiplier = 1.00; // *1.00
                atkBstBonus = 3;         // +3 bonus
                break;
            case '2':
                atkBstMultiplier = 1.00; // *1.00
                atkBstBonus = 6;         // +6 bonus
                break;
            case '3':
                atkBstMultiplier = 1.00; // *1.00
                atkBstBonus = 9;         // +9 bonus
                break;
            case '4':
                atkBstMultiplier = 1.05; // *1.05
                atkBstBonus = 7;         // +7 bonus
                break;
            case '5':
                atkBstMultiplier = 1.06; // *1.06
                atkBstBonus = 8;         // +8 bonus
                break;
            case '6':
                atkBstMultiplier = 1.08; // *1.08
                atkBstBonus = 9;         // +9 bonus
                break;
            case '7':
                atkBstMultiplier = 1.10; // *1.10
                atkBstBonus = 10;        // +10 bonus
                break;
        }
    }

    // Calculate the sum
    let totalAttack = Math.floor(((weaponAttack + powercharm + powertalon) * atkBstMultiplier) + atkBstBonus);

    // Display the result
    document.getElementById('totalAttack').innerText = totalAttack; // Change to innerText for <p>
}
