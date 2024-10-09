const jokeBtn = document.getElementById("jokeBtn");
const jokeDisplay = document.getElementById("jokeDisplay");
const categorySelect = document.getElementById("category");

// Função para buscar piada da API com base na categoria selecionada
async function fetchJoke(category) {
  const response = await fetch(`https://v2.jokeapi.dev/joke/${category}`);
  const data = await response.json();
  if (data.type === "single") {
    return data.joke; // Piada de uma linha
  } else {
    return `${data.setup} - ${data.delivery}`; // Piada com setup e punchline
  }
}

// Evento de clique para gerar uma nova piada
jokeBtn.addEventListener("click", async () => {
  const category = categorySelect.value; // Pega a categoria escolhida
  const joke = await fetchJoke(category);
  jokeDisplay.textContent = joke; // Atualiza o conteúdo do parágrafo com a piada
});
