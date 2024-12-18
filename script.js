let display = document.getElementById("result");

// Menambahkan angka/simbol ke tampilan
function appendValue(value) {
  if (display.value === "0") display.value = "";
  display.value += value;
}

// Menghapus tampilan
function clearDisplay() {
  display.value = "0";
}

// Menghapus satu karakter terakhir
function deleteLast() {
  display.value = display.value.slice(0, -1) || "0";
}

// Menghitung hasil
function calculateResult() {
  try {
    display.value = eval(display.value.replace("÷", "/").replace("×", "*"));
  } catch {
    display.value = "Error";
  }
}

// Fungsi Reciprocal (1/x)
function reciprocal() {
  let value = parseFloat(display.value);
  if (value !== 0) {
    display.value = (1 / value).toFixed(6); // Membulatkan hasil hingga 6 desimal
  } else {
    display.value = "Error";
  }
}

// Hapus angka terakhir (CE)
function clearEntry() {
  display.value = "0";
}

// Fungsi kuadrat
function square() {
  display.value = Math.pow(parseFloat(display.value), 2);
}

// Fungsi akar kuadrat
function sqrt() {
  display.value = Math.sqrt(parseFloat(display.value));
}

// Negatif atau positif
function negate() {
  display.value = parseFloat(display.value) * -1;
}
