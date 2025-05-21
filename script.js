function generateReceipt() {
  const name = document.getElementById('customerName').value;
  const cashier = document.getElementById('cashier').value;
  const itemsRaw = document.getElementById('items').value.trim().split('\n');
  const taxPercent = parseFloat(document.getElementById('tax').value);
  const discount = parseFloat(document.getElementById('discount').value);

  let itemsHtml = '';
  let subtotal = 0;

  itemsRaw.forEach(line => {
    const [name, qty, price] = line.split(',');
    const total = parseFloat(price) * parseInt(qty);
    subtotal += total;
    itemsHtml += `<tr><td>${name}</td><td>${qty}</td><td style="text-align:right">Rs ${total.toFixed(2)}</td></tr>`;
  });

  const tax = (subtotal * taxPercent) / 100;
  const total = subtotal + tax - discount;

  const now = new Date();
  const receiptHtml = `
    <div class="center">
      <h3>🛒 My Store</h3>
      <p>123 Market Road, City<br>Phone: 123-456-7890</p>
    </div>
    <hr>
    <table>
      <tr><td>Invoice #: 000${Math.floor(Math.random() * 1000)}</td>
      <td style="text-align:right">${now.toLocaleDateString()} ${now.toLocaleTimeString()}</td></tr>
      <tr><td>Cashier: ${cashier}</td><td></td></tr>
      <tr><td>Customer: ${name}</td><td></td></tr>
    </table>
    <hr>
    <table>${itemsHtml}</table>
    <hr>
    <table>
      <tr><td>Subtotal</td><td style="text-align:right">Rs ${subtotal.toFixed(2)}</td></tr>
      <tr><td>Tax (${taxPercent}%)</td><td style="text-align:right">Rs ${tax.toFixed(2)}</td></tr>
      <tr><td>Discount</td><td style="text-align:right">Rs ${discount.toFixed(2)}</td></tr>
      <tr><td><strong>Total</strong></td><td style="text-align:right"><strong>Rs ${total.toFixed(2)}</strong></td></tr>
    </table>
    <hr>
    <div class="center">Thank you for shopping!</div>
  `;

  document.getElementById('receipt').innerHTML = receiptHtml;
  document.getElementById('receiptContainer').style.display = 'block';
}
