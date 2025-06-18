document.addEventListener('DOMContentLoaded', () => {
    // Event delegation for all buttons except "Login"
    document.body.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.textContent.trim().toLowerCase() !== 'login') {
            alert(`You clicked: ${e.target.textContent}`);
        }
    });

    // Toggle a class on an element with id="toggle"
    const toggleBtn = document.getElementById('toggle');
    const box = document.getElementById('box');
    const statusMsg = document.createElement('div');
    statusMsg.id = 'statusMsg';
    box?.after(statusMsg);

    function updateStatus() {
        if (box.classList.contains('active')) {
            statusMsg.textContent = 'Box is active!';
        } else {
            statusMsg.textContent = '';
        }
    }

    if (toggleBtn && box) {
        toggleBtn.addEventListener('click', () => {
            box.classList.toggle('active');
            updateStatus();
        });
        // Keyboard accessibility
        toggleBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                box.classList.toggle('active');
                updateStatus();
            }
        });
    }
});