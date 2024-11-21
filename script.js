document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('.start-button');
    const mediaLibraryModal = document.getElementById('media-library');
    const closeModalButton = document.querySelector('.close-modal');
    const terminalWindow = document.getElementById('terminal');
    const closeTerminalButton = terminalWindow.querySelector('.close-button');
    const reopenTerminalButton = document.getElementById('reopen-terminal');
    const timeDisplay = document.getElementById('time-display'); // Time display element

    // Reopen Terminal Functionality
    reopenTerminalButton.addEventListener('click', () => {
        terminalWindow.style.display = 'block';
    });

    // Close Terminal Functionality
    closeTerminalButton.addEventListener('click', () => {
        terminalWindow.style.display = 'none'; // Hide the terminal window
    });

    // Time Functionality
    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert to 12-hour format
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Pad minutes with leading zero
        timeDisplay.textContent = `${formattedHours}:${formattedMinutes} ${ampm}`;
    }

    // Update the time every second
    setInterval(updateTime, 1000);
    updateTime(); // Initial call to display time immediately

    // Dragging functionality for the terminal window
    const windowHeader = terminalWindow.querySelector('.window-header');

    let isDragging = false;
    let offsetX, offsetY;

    // Start dragging
    windowHeader.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - terminalWindow.offsetLeft;
        offsetY = e.clientY - terminalWindow.offsetTop;
        terminalWindow.style.transition = 'none'; // Disable transition during drag
    });

    // Dragging the window
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            terminalWindow.style.left = `${x}px`;
            terminalWindow.style.top = `${y}px`;
        }
    });

    // Stop dragging
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            terminalWindow.style.transition = ''; // Re-enable transition if needed
        }
    });

    // Toggle the Media Library Modal
    startButton.addEventListener('click', () => {
        toggleMediaLibrary(true);
    });

    closeModalButton.addEventListener('click', () => {
        toggleMediaLibrary(false);
    });

    function toggleMediaLibrary(show) {
        mediaLibraryModal.style.display = show ? 'flex' : 'none';
    }
});
