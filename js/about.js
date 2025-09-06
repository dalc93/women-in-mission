function openDonationModal() {
    const modal = new bootstrap.Modal(document.getElementById('donationModal'));
    modal.show();
}

document.querySelectorAll('.donation-amount').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.donation-amount').forEach(btn => {
            btn.classList.remove('btn-danger');
            btn.classList.add('btn-outline-danger');
        });
        
        this.classList.remove('btn-outline-danger');
        this.classList.add('btn-danger');
        
        document.getElementById('customAmount').value = this.dataset.amount;
    });
});

function processDonation() {
    const amount = document.getElementById('customAmount').value;
    const message = document.getElementById('donorMessage').value;
    
    if (!amount || amount <= 0) {
        alert('Por favor, selecciona o ingresa un monto válido para la donación.');
        return;
    }
    
    alert(`Procesando donación de €${amount}. Serás redirigido a nuestro sistema de pago seguro.`);
}