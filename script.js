document.getElementById("showLoveNote").addEventListener("click", function() {
    var loveMessages = [
        "Tau jako toh membaca? Jangan suka begadang klo nda               penting, Apapun yang terjadi jangko berubah, Makasih untuk selalu mau kuganggu, Terima kasih Refkaaa."
    ];
    var randomIndex = Math.floor(Math.random() * loveMessages.length);
    var loveMessage = loveMessages[randomIndex];
    document.getElementById("loveMessage").innerText = loveMessage;
    document.getElementById("loveNote").classList.remove("hidden");

    // Animasi hati melayang
    var heart = document.createElement('img');
    heart.src = 'love.gif'; // Ganti dengan URL gambar hati melayang
    heart.style.position = 'fixed';
    heart.style.zIndex = '9999';
    heart.style.pointerEvents = 'none';
    heart.style.left = '50%';
    heart.style.top = '50%';
    heart.style.transform = 'translate(-50%, -50%) scale(0)';
    document.body.appendChild(heart);

    setTimeout(function() {
        heart.style.transition = 'all 2s ease';
        heart.style.transform = 'translate(-50%, -50%) scale(3)';
        heart.style.opacity = '0';
    }, 1000);

    // Perubahan warna latar belakang secara perlahan
    var body = document.body;
    var originalColor = body.style.backgroundColor || window.getComputedStyle(body).backgroundColor;
    var targetColor = '#ff99cc'; // Warna merah muda yang romantis
    var steps = 50;
    var delay = 20;
    var step = 0;

    function changeBackgroundColor() {
        if (step <= steps) {
            var r = Math.round(parseInt(originalColor.slice(1, 3), 16) + (parseInt(targetColor.slice(1, 3), 16) - parseInt(originalColor.slice(1, 3), 16)) * step / steps);
            var g = Math.round(parseInt(originalColor.slice(3, 5), 16) + (parseInt(targetColor.slice(3, 5), 16) - parseInt(originalColor.slice(3, 5), 16)) * step / steps);
            var b = Math.round(parseInt(originalColor.slice(5, 7), 16) + (parseInt(targetColor.slice(5, 7), 16) - parseInt(originalColor.slice(5, 7), 16)) * step / steps);
            body.style.backgroundColor = '#' + (r < 16 ? '0' : '') + r.toString(16) + (g < 16 ? '0' : '') + g.toString(16) + (b < 16 ? '0' : '') + b.toString(16);
            step++;
            setTimeout(changeBackgroundColor, delay);
        }
    }

    changeBackgroundColor();

    // Efek suara
    var audio = new Audio('suara-cinta.mp3'); // Ganti dengan URL suara cinta
    audio.play();
});
