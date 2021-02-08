const total = document.querySelector('.ticket');
const consumer = document.querySelector('.consumer');
const btn = document.querySelector('.btn');
const result = document.querySelector('.tip-result');
const billTotal = document.querySelector('.bill');
const individual = document.querySelector('.individual');

const calculateTip = (e) => {
  e.preventDefault();

  const bill = total.value;
  const tip = (bill * 15) / 100;
  const totalBill = Math.round(parseInt(bill) + tip);
  const individualBill = Math.round(totalBill / (consumer.value || 1));

  if (bill === '') {
    alert('Debe introducir los datos');
    return;
  }

  if (bill <= 0) {
    alert('El monto debe ser mayor a 0');
    return;
  }


  billTotal.innerHTML = totalBill;
  individual.innerHTML = individualBill;

  result.classList.remove('hidden');

  total.value = '';
  consumer.value = '';
  
}

btn.addEventListener('click', calculateTip);