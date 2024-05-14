const cardContainer = document.getElementById("team-info");

async function getUserData() {
  try {
    const response = await fetch("/users");
    const data = await response.json();

data.forEach((user) => {
  const row = document.createElement("tr");
  const iconCell = document.createElement("td");
  
  const icon = document.createElement("i");
  icon.className = "fas fa-user"; 
  iconCell.appendChild(icon);
  row.appendChild(iconCell);

  for (const key in user) {
      const cell = document.createElement("td");

      const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);

      cell.textContent = capitalizedKey + ': ';

      cell.textContent += user[key];

      row.appendChild(cell);
  }

  document.getElementById("userTableBody").appendChild(row);
});

  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

getUserData();
