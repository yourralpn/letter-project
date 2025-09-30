const message = `
Hi, Aina Silvia Monicha.
Selamat ulang tahun yang ke-17 ya!.
Pada hari ini, segala doa yang terbaik ku langitkan hanya untukmu. Semoga segala hal yang membuatmu terjatuh, menjadi alasan kamu untuk selalu bertumbuh. Semoga dunia senantiasa menjaga dirimu di mana pun kamu berada.
Meskipun tak ada kue tart yang bernyalakan lilin dariku, jangan padamkan segala doa terbaik yang kupanjatkan untukmu.
Berbahagialah. 
Sweet Seventeen, Aina Silvia Monicha...`;

function showLetter() {
  // sembunyikan intro & tombol
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  // setelah 600ms, tampilkan kotak surat dan mulai ketik
  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}


