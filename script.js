document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector(".start-button");
    const mediaLibraryModal = document.getElementById("media-library");
    const closeModalButton = document.querySelector(".close-modal");
    const terminalWindow = document.getElementById("terminal");
    const closeTerminalButton = terminalWindow.querySelector(".close-button");
    const reopenTerminalButton = document.getElementById("reopen-terminal");
    const terminalInput = document.getElementById("terminal-input");
    const terminalOutput = document.getElementById("terminal-output");
    const timeDisplay = document.getElementById("time-display"); // Time display element

    // Reopen Terminal Functionality
    reopenTerminalButton.addEventListener("click", () => {
        terminalWindow.style.display = "block";
    });

    // Close Terminal Functionality
    closeTerminalButton.addEventListener("click", () => {
        terminalWindow.style.display = "none"; // Hide the terminal window
    });
  
    // Simulated girl responses
    function generateReply(input) {
      input = input.toLowerCase();
  
      // Basic replies based on user input
      if (input.includes("hello") || input.includes("hi")) {
        return " hey babe thanks for visiting for my page! How’s your day?☺️";
      } else if (input.includes("how are you")) {
        return "it’s Lucy here, ur new favourite girl next door 🥰 lovely meeting you! ";
      } else if (input.includes("your name")) {
        return "I'm lucy, your girl next door! Nice to meet you.";
      } else if (input.includes("what can you do")) {
        return " I can chat with you & keep you company, maybe we can end up having some fun 🤫";
      } else if (input.includes("joke")) {
        return "Wouldn’t you love to go down under 😉";
       } else if (input.includes("horny")) {
        return "you are making me so so so wet";
      } else if (input.includes("slut")) {
           return "I am your dirty dirty slut";
      } else if (input.includes("fuck")) {
           return "Yes daddy make me wet";
      } else if (input.includes("love")) {
        return "aww that made me blush! ☺️ always here to make you smile and relieve your stress, I hope to connect with you further ";
      } else if (input.includes("bye")) {
        return " goodbye, I’m sure to speak soon babe! ☺️🤫";
      } else if (input === "clear") {
        return "clear"; // Reserved for clearing the screen
      } else {
        return "I'm not sure how to reply to that, but I'm here to listen! 😊";
      }
    }
  
    // Handle user input
    terminalInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const userInput = terminalInput.value.trim();
        terminalOutput.innerHTML += `> ${userInput}\n`; // Echo the user's input
  
        const reply = generateReply(userInput);
  
        if (reply === "clear") {
          terminalOutput.innerHTML = ""; // Clear terminal
        } else {
          terminalOutput.innerHTML += `${reply}\n`; // Show the reply
        }
  
        terminalInput.value = ""; // Clear input
        terminalOutput.scrollTop = terminalOutput.scrollHeight; // Auto-scroll to the bottom
      }
    });
  
    // Toggle the Media Library Modal
    startButton.addEventListener("click", () => {
      toggleMediaLibrary(true);
    });
  
    closeModalButton.addEventListener("click", () => {
      toggleMediaLibrary(false);
    });
  
    function toggleMediaLibrary(show) {
      mediaLibraryModal.style.display = show ? "flex" : "none";
    }
  
    // Close Terminal Functionality
    closeTerminalButton.addEventListener("click", () => {
      terminalWindow.style.display = "none"; // Hide the terminal window
    });
  
    // Dragging functionality for the terminal window
    const windowHeader = terminalWindow.querySelector(".window-header");
  
    let isDragging = false;
    let offsetX, offsetY;
  
    // Start dragging
    windowHeader.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - terminalWindow.offsetLeft;
      offsetY = e.clientY - terminalWindow.offsetTop;
      terminalWindow.style.transition = "none"; // Disable transition during drag
    });
  
    // Dragging the window
    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        terminalWindow.style.left = `${x}px`;
        terminalWindow.style.top = `${y}px`;
      }
    });
  
    // Stop dragging
    document.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        terminalWindow.style.transition = ""; // Re-enable transition if needed
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector(".start-button");
    const mediaLibraryModal = document.getElementById("media-library");
    const closeModalButton = document.querySelector(".close-modal");
    const terminalWindow = document.getElementById("terminal");
    const closeTerminalButton = terminalWindow.querySelector(".close-button");
    const timeDisplay = document.getElementById("time-display"); // Time display element
  
    // Function to update time
    function updateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12; // Convert to 12-hour format
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Pad minutes with leading zero
      timeDisplay.textContent = `${formattedHours}:${formattedMinutes} ${ampm}`;
    }
  
    // Update the time every second
    setInterval(updateTime, 1000);
    updateTime(); // Initial call to display time immediately
  
    // Simulated girl terminal functionality and other features
    // (existing code remains here, like generating replies and dragging functionality)
  
    // ... Rest of your existing script (terminal, dragging, modal toggles, etc.)
  });

document.addEventListener("DOMContentLoaded", () => {
    const livestreamTerminal = document.getElementById("livestream-terminal");
    const windowHeader = livestreamTerminal.querySelector(".window-header");
    const openLivestreamButton = document.getElementById("open-livestream");

    // Function to open the livestream terminal
    window.openLivestream = function() {
        livestreamTerminal.style.display = "block";
    };

    // Function to close the livestream terminal
    window.closeLivestream = function() {
        livestreamTerminal.style.display = "none";
    };

    // Dragging functionality
    let isDragging = false;
    let offsetX, offsetY;

    // Start dragging
    windowHeader.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - livestreamTerminal.offsetLeft;
        offsetY = e.clientY - livestreamTerminal.offsetTop;
        livestreamTerminal.style.transition = "none"; // Disable transition during drag
    });

    // Dragging the window
    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            livestreamTerminal.style.left = `${x}px`;
            livestreamTerminal.style.top = `${y}px`;
        }
    });

    // Stop dragging
    document.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;
            livestreamTerminal.style.transition = ""; // Re-enable transition if needed
        }
    });
});

