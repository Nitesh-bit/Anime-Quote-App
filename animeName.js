const getAllAnimeNames = () => {
  fetch("https://animechan.vercel.app/api/available/anime")
    .then((response) => response.json())
    .then((animes) => {
      for (let i = 4; i < animes.length - 4; i++) {
        randomAnimeName.innerHTML += animes[i] + "</br>";
        document.getElementById("randomAnimeName").style.font =
          "bold 20px arial,serif";
      }
    });
};

animeNames.addEventListener("click", (e) => {
  e.preventDefault();
  getAllAnimeNames();
});
