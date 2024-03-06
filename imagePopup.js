document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "会社に1人は居てほしい存在",
        "トークの引き出しが多い",
        "場が和む",
        "見ていて飽きない",
    ];

    const image = document.getElementById('profile-image');
    image.style.position = 'relative';

    let timeoutId;
    let popupExists = false;

    image.addEventListener('click', () => {
        if (popupExists) {
            const existingPopup = document.getElementById('popup-message');
            existingPopup.parentNode.removeChild(existingPopup);
            clearTimeout(timeoutId);
            popupExists = false;
        }

        const message = "よく言われること:\n" + messages[Math.floor(Math.random() * messages.length)];
        const popup = document.createElement('div');
        popup.id = 'popup-message';
        popup.textContent = message;
        image.parentNode.insertBefore(popup, image.nextSibling);
        popupExists = true;

        popup.style.display = 'block';
        
        timeoutId = setTimeout(() => {
            popup.style.display = 'none';
            popup.parentNode.removeChild(popup);
            popupExists = false;
        }, 2000);
    });
});