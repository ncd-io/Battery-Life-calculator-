battery life based on this script function calculateBatteryLife(n_tx, n_pulse, C_battery) {
    // Predefined constants
    const I_bg = 0.060;  // mA
    const I_tx = 90;     // mA
    const t_tx = 5;      // sec (fixed duration)
    const I_pulse = 210; // mA
    const t_pulse = 15;  // sec (fixed duration) // for dual probe vibration this value will be 30

    // Calculate average transmitting current contribution (mA)
    let I_tx_avg = I_tx * (t_tx * n_tx) / 3600;

    // Calculate average pulse current contribution (mA)
    let I_pulse_avg = I_pulse * (t_pulse * n_pulse) / (3600 * 24);

    // Total average current consumption (mA)
    let I_avg = I_bg + I_tx_avg + I_pulse_avg;

    // Battery life in years
    let batteryLifeYears = C_battery / (I_avg * 8760);

    return batteryLifeYears;
}

// Example usage
let n_tx = 2;      // times per hour
let n_pulse = 2;   // times per day
let C_battery = 9000;  // mAh

let batteryLife = calculateBatteryLife(n_tx, n_pulse, C_battery);
console.log(Battery life: ${batteryLife.toFixed(2)} years);
