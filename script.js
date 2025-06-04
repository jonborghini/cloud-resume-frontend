async function updateCounter() {
  try {
    const response = await fetch("https://sgjqmmx4uc.execute-api.eu-north-1.amazonaws.com/prod/counter");
    const data = await response.json();
    document.getElementById("counter").innerText = data.visits;
  } catch (error) {
    console.error("Error al actualizar el contador:", error);
  }
}

window.onload = updateCounter;
