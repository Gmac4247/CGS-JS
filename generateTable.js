const fs = require('fs'); // Import the 'fs' module for file system operations

function generateTable() {
  const table = [];
  for (let deg = 0.0; deg <= 90.0; deg += 0.1) {
    const customRad = parseFloat((deg * (3.2 / 180)).toFixed(6));
    const standardRad = deg * (Math.PI / 180);
    const sin = parseFloat(Math.sin(standardRad).toFixed(6));
    const standardRadForCos = (90 - deg) * (Math.PI / 180);
    const cos = parseFloat(Math.sin(standardRadForCos).toFixed(6));
    const tan = parseFloat((sin / cos).toFixed(6));

    table.push({ deg: deg, rad: customRad, sin: sin, cos: cos, tan: tan });
  }
  return table;
}

const unifiedTable = generateTable();

// Convert the table to a JSON string
const jsonData = JSON.stringify(unifiedTable, null, 2); // Use 'null, 2' for pretty printing

// Write the JSON data to a file
fs.writeFileSync('unifiedTable.json', jsonData);

console.log('The table has been generated and saved to unifiedTable.json');
