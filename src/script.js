// Define the event listener function
function handleKeyDown(event) {
    let audio= new Audio();
    // Switch based on the pressed key
    switch (event.key.toLowerCase()) {
        case 'a':
            // Perform your desired action for 'a' key
            audio.src = "../src/sounds/A.mp3";
            audio.play();
            break;
        case 's':
            audio.src = "../src/sounds/S.mp3";
            audio.play();
            break;
        case 'd':
            audio.src = "../src/sounds/D.mp3";
            audio.play();
            break;
        case 'f':
            audio.src = "../src/sounds/F.mp3";
            audio.play();
            break;
        case 'g':
            audio.src = "../src/sounds/G.mp3";
            audio.play();
            break;
        case 'h':
            audio.src = "../src/sounds/H.mp3";
            audio.play();
            break;
        case 'j':
            audio.src = "../src/sounds/J.mp3";
            audio.play();
            break;
        case 'w':
            audio.src = "../src/sounds/W.mp3";
            audio.play();
            break;
        case 'e':
            audio.src = "../src/sounds/E.mp3";
            audio.play();
            break;
        case 't':
            audio.src = "../src/sounds/T.mp3";
            audio.play();
            break;
        case 'y':
            audio.src = "../src/sounds/Y.mp3";
            audio.play();
            break;
        case 'u':
            audio.src = "../src/sounds/U.mp3";
            audio.play();
            break;
        default:
            // Default action if the pressed key is not handled
            console.log("Other key was pressed.");
            break;
    }
}

// Add event listener to listen for keydown events
document.addEventListener('keydown', handleKeyDown);
