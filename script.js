window.addEventListener('load', () => {
  setTimeout(() => {
    if (confirm("Hey ! Tu voudrais bien une blague en attendant notre magazine ? 😄")) {
      fetch('https://v2.jokeapi.dev/joke/Any?lang=fr')
        .then(response => response.json())
        .then(data => {
          if (data.type === "single") {
            alert(data.joke);
          } else if (data.type === "twopart") {
            alert(data.setup + "\n...\n" + data.delivery);
          }
        })
        .catch(error => {
          alert("Oops, blague introuvable 😢");
          console.error(error);
        });
    } else {
      alert("Pas de blague aujourd'hui... peut-être demain ! 😅");
    }
  }, 2000); // 2 secondes d’attente
});
