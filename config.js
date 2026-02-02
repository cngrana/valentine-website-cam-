
const CONFIG = {
    // 
    // 
    valentineName: "Pao",

    // 
    //
    pageTitle: "Will You Be My Valentine? ❤️",

    // 
    //  https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    }

    // Questions and answers
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I REALLY like you ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you like me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine?", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // 
    // 
    loveMessages: {
        extreme: "WOOOOW You like me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    // yes
    celebration: {
        title: "Yay! I'm the luckiest YN in the world! ❤️",
        message: "Now come get your gift, a hug and a kiss!",
        emojis: "❤️❤️❤️"  // These will bounce around
    },

    // 
    //  https://colorhunt.co or https://coolors.co
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start
        backgroundEnd: "#ffc3a0",        // Gradient end complements
        buttonBackground: "#ff6b6b",     // Button color stands out
        buttonHover: "#ff8787",          // Button hover color lighter
        textColor: "#ff4757"             // Text color 
    },

    // Animation settings
    // 
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // 
    // 
    music: {
        enabled: true,                     // Music feature 
        autoplay: true,                    // 
        musicUrl: "https://res.cloudinary.com/dwcnsg2w1/video/upload/v1769995495/C_U_Girl_xvkcgi.mp3"// Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify  
window.VALENTINE_CONFIG = CONFIG; 