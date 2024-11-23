document.addEventListener("DOMContentLoaded", () => {
    // Collect all elements safely
    const startButton = document.querySelector(".start-button");
    const mediaLibraryModal = document.getElementById("media-library");
    const closeModalButton = mediaLibraryModal?.querySelector(".close-modal");
    const terminalWindow = document.getElementById("terminal");
    const closeTerminalButton = terminalWindow?.querySelector(".close-button");
    const reopenTerminalButton = document.getElementById("reopen-terminal");
    const terminalInput = document.getElementById("terminal-input");
    const terminalOutput = document.getElementById("terminal-output");
    const timeDisplay = document.getElementById("time-display");
    const livestreamTerminal = document.getElementById("livestream-terminal");
    const livestreamWindowHeader = livestreamTerminal?.querySelector(".window-header");
    const openLivestreamButton = document.getElementById("open-livestream");
    const mediaList = document.getElementById("media-list");
    const mediaViewer = document.getElementById("media-viewer");
    const mediaDisplay = document.getElementById("media-display");
    const mediaTitle = document.getElementById("media-title");
    const closeMediaViewerButton = mediaViewer?.querySelector(".close-modal");

    // Only proceed if elements are present
    if (startButton && mediaLibraryModal && closeModalButton) {
        // Sample media items
        const mediaItems = [
            { type: "image", title: "Photo 1", url: "images/photo1.jpg" },
            { type: "image", title: "Photo 2", url: "images/photo2.jpg" },
            { type: "image", title: "Photo 3", url: "images/photo3.jpg" },
            { type: "video", title: "Video 1", url: "videos/video1.mp4" },
            { type: "video", title: "Video 2", url: "videos/video2.mp4" },
            { type: "video", title: "Video 3", url: "videos/video3.mp4" },
        ];

        // Populate the media list with clickable links
        if (mediaList) {
            mediaItems.forEach((item, index) => {
                const link = document.createElement("a");
                link.href = "#";
                link.className = "media-link";
                link.textContent = `${item.title}`;
                link.dataset.index = index;

                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    openMediaViewer(index);
                });

                mediaList.appendChild(link);
            });
        }

        // Reopen Terminal Functionality
        if (reopenTerminalButton && terminalWindow) {
            reopenTerminalButton.addEventListener("click", () => {
                terminalWindow.style.display = "block";
            });
        }

        // Close Terminal Functionality
        if (closeTerminalButton && terminalWindow) {
            closeTerminalButton.addEventListener("click", () => {
                terminalWindow.style.display = "none"; // Hide the terminal window
            });
        }

        // Simulated girl responses
        function generateReply(input) {
            input = input.toLowerCase();
            // Basic replies based on user input
            if (input.includes("hello") || input.includes("hi")) {
                return " hey babe thanks for visiting for my page! How’s your day?☺️";
            } else if (input.includes("how are you")) {
                return "it’s Lucy here, ur new favourite girl next door 🥰 lovely meeting you!";
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
                return "aww that made me blush! ☺️ always here to make you smile and relieve your stress, I hope to connect with you further";
            } else if (input.includes("bye")) {
                return "goodbye, I’m sure to speak soon babe! ☺️🤫";
            } else if (input === "clear") {
                return "clear"; // Reserved for clearing the screen
            } else {
                return "I'm not sure how to reply to that, but I'm here to listen! 😊";
            }
        }

        // Handle user input
        if (terminalInput && terminalOutput) {
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
        }

        // Toggle the Media Library Modal
        startButton.addEventListener("click", () => {
            toggleModal(mediaLibraryModal, true);
        });

        closeModalButton.addEventListener("click", () => {
            toggleModal(mediaLibraryModal, false);
        });

        function toggleModal(modal, show) {
            modal.style.display = show ? "flex" : "none";
        }

        // Function to open the Media Viewer Modal
        function openMediaViewer(index) {
            if (mediaViewer && mediaDisplay && mediaTitle) {
                const item = mediaItems[index];
                mediaDisplay.innerHTML = ""; // Clear previous content

                if (item.type === "image") {
                    const img = document.createElement("img");
                    img.src = item.url;
                    img.alt = item.title;
                    mediaDisplay.appendChild(img);
                } else if (item.type === "video") {
                    const video = document.createElement("video");
                    video.src = item.url;
                    video.controls = true;
                    mediaDisplay.appendChild(video);
                }

                mediaTitle.textContent = item.title;
                toggleModal(mediaViewer, true);
            }
        }

        // Close media viewer functionality
        if (closeMediaViewerButton) {
            closeMediaViewerButton.addEventListener("click", () => {
                toggleModal(mediaViewer, false);
            });
        }

        // Function to open the livestream terminal
        if (openLivestreamButton && livestreamTerminal) {
            openLivestreamButton.addEventListener("click", () => {
                livestreamTerminal.style.display = "block";
            });

            // Function to close the livestream terminal
            const livestreamCloseButton = livestreamTerminal.querySelector(".close-button");
            if (livestreamCloseButton) {
                livestreamCloseButton.addEventListener("click", () => {
                    livestreamTerminal.style.display = "none";
                });
            }
        }

        // Dragging functionality (mouse and touch) for terminal and livestream windows
        function addDraggingFunctionality(element, header) {
            let isDragging = false;
            let offsetX, offsetY;

            function startDragging(e) {
                isDragging = true;
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                offsetX = clientX - element.offsetLeft;
                offsetY = clientY - element.offsetTop;
                element.style.transition = "none"; // Disable transition during drag
            }

            function onDrag(e) {
                if (isDragging) {
                    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                    const x = clientX - offsetX;
                    const y = clientY - offsetY;
                    element.style.left = `${x}px`;
                    element.style.top = `${y}px`;
                }
            }

            function stopDragging() {
                isDragging = false;
                element.style.transition = ""; // Re-enable transition if needed
            }

            if (header) {
                // Mouse events
                header.addEventListener("mousedown", startDragging);
                document.addEventListener("mousemove", onDrag);
                document.addEventListener("mouseup", stopDragging);

                // Touch events
                header.addEventListener("touchstart", startDragging);
                document.addEventListener("touchmove", onDrag);
                document.addEventListener("touchend", stopDragging);
            }
        }

        // Add dragging functionality to terminal window
        if (terminalWindow) {
            addDraggingFunctionality(terminalWindow, terminalWindow.querySelector(".window-header"));
        }

        // Add dragging functionality to livestream terminal
        if (livestreamTerminal) {
            addDraggingFunctionality(livestreamTerminal, livestreamWindowHeader);
        }

        // Function to update time
        function updateTime() {
            if (timeDisplay) {
                const now = new Date();
                const hours = now.getHours();
                const minutes = now.getMinutes();
                const ampm = hours >= 12 ? "PM" : "AM";
                const formattedHours = hours % 12 || 12; // Convert to 12-hour format
                const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Pad minutes with leading zero
                timeDisplay.textContent = `${formattedHours}:${formattedMinutes} ${ampm}`;
            }
        }

        // Update the time every second
        setInterval(updateTime, 1000);
        updateTime(); // Initial call to display time immediately
    }
});

