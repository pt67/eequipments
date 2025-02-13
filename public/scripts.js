document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('equipment-form');
  const equipmentList = document.getElementById('equipment-list');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const serial = document.getElementById('serial').value;
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    const response = await fetch('/equipment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: Date.now().toString(), serial, name, description }),
    });

    const newEquipment = await response.json();
    addEquipmentToList(newEquipment);
    form.reset();
  });

  async function fetchEquipment() {
    const response = await fetch('/equipment');
    const equipment = await response.json();
    equipment.forEach(addEquipmentToList);
  }

  function addEquipmentToList(equipment) {
    const li = document.createElement('li');
    li.innerHTML = `
      <p>Serial: ${equipment.serial}</p>
      <p>Name: ${equipment.name}</p>
      <p>Description: ${equipment.description}</p>
      <canvas class="qr-code" id="qr-${equipment.id}"></canvas>
    `;
    equipmentList.appendChild(li);

    // Generate QR code
    const qrCodeContainer = document.getElementById(`qr-${equipment.id}`);
    QRCode.toCanvas(qrCodeContainer, JSON.stringify(equipment), { width: 100, height: 100 }, (error) => {
      if (error) console.error(error);
    });
  }

  fetchEquipment();
});
