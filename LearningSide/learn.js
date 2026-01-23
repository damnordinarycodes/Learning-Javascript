window.addEventListener("load", () => {
    const text = document.getElementById("animatedText");

    text.animate(
        [
            { opacity: 0, transform: "translateY(30px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        {
            duration: 1000,
            easing: "ease-out",
            fill: "forwards"
        }
    );
});

    const text = document.getElementById("animatedText");

    text.animate(
        [
            { opacity: 0, transform: "translateY(30px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        {
            duration: 1000,
            easing: "ease-out",
            fill: "forwards"
        }
    );
});
