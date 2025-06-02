if (confirm("Hey ! Tu voudrait bien une blague en attendant notre magazine ? 😄")) {
    fetch('https://v2.jokeapi.dev/joke/Any?lang=fr') // lang=fr = pour français (mais limité)
    .then(response => response.json())
    .then(data => {
    // S'il y a une seule ligne de blague (type "single")
    if (data.type === "single") {
        alert(data.joke);
    } 
    // S'il y a une question + réponse (type "twopart")
    else if (data.type === "twopart") {
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
