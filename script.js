function showScript(name) {
  const code = `loadstring(game:HttpGet("https://raw.githubusercontent.com/Syr0nix/RedFox-Scripts/main/scripts/${name.toLowerCase()}.lua"))()`;
  document.getElementById("script-code").textContent = code;
  document.getElementById("script-title").textContent = `${name} Script`;
  const card = document.getElementById("script-card");
  card.classList.add("show");
  card.classList.remove("hidden");
}

function copyScript() {
  const code = document.getElementById("script-code").textContent;
  navigator.clipboard.writeText(code);
  alert("Copied to clipboard!");
}

