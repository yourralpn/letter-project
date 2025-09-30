const message = `\n\nHi, Aina Silvia Monicha.\n\nSelamat ulang tahun yang ke-17 ya!.\n\nPada hari ini, segala doa yang terbaik ku langitkan hanya untukmu. Semoga segala hal yang membuatmu terjatuh, menjadi alasan kamu untuk selalu bertumbuh. Semoga dunia senantiasa menjaga dirimu di mana pun kamu berada.\n\nMeskipun tak ada kue tart yang bernyalakan lilin dariku, jangan padamkan segala doa terbaik yang kupanjatkan untukmu.\n\nBerbahagialah. \n\nSweet Seventeen, Aina Silvia Monicha...;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

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
  }, 600);
}


