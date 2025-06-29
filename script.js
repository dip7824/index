// List of suffixes for random combinations
const suffixes = [
  "ify", "genics", "ly", "ster", "lytics", "hub", "zone", "scape",
  "verse", "ology", "nova", "loop", "byte", "stack", "vault", "nest"
];

// Function to capitalize the first letter
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Main function: Generate names
function generateNames() {
  const keywordInput = document.getElementById('keyword');
  const keyword = keywordInput.value.trim().toLowerCase();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (!keyword) {
    resultsDiv.innerHTML = "<p style='color: red;'>Please enter a keyword first!</p>";
    return;
  }

  const suggestions = [];
  for (let i = 0; i < 5; i++) {
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const name = capitalize(keyword) + suffix;
    suggestions.push(name);
  }

  // Display results
  suggestions.forEach(name => {
    const div = document.createElement('div');
    div.className = "name";
    div.textContent = name;
    resultsDiv.appendChild(div);
  });
}
