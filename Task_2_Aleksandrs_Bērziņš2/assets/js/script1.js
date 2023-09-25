const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', () => {
        // Izveidojam jaunu video elementu
        const video = document.createElement('video');
        video.src = 'assets/img/BM_4OF99_Arta.mp4';
        video.controls = true;

        // Nomainam attēlu ar video
        const imageContainer = document.querySelector('.image-container');
        imageContainer.style.display = 'none'; // Paslēpj attēlu
        const videoContainer = document.querySelector('.video-container');
        videoContainer.innerHTML = ''; // Notīra iepriekšējo saturu
        videoContainer.appendChild(video);

        // Atskaņojam video
        video.play();
    });

var navLinks = document.getElementById("navLinks");

            function showMenu() {
                navLinks.style.right = "0";
            }
            function hideMenu() {
                navLinks.style.right = "-200px";
            }


         
            function check(){
                let div = document.getElementById("input-checkbox");
                let checkbox = document.getElementById("accept-checkbox");
                    if (checkbox.checked === false) {
                        div.style.backgroundColor = "rgba(196, 196, 196, 0.4)";
                    } else {
                        div.style.backgroundColor = "#FFA800";
                    }
            }


