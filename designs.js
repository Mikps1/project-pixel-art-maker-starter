// !! Hook up submit action to form !!
const sizePicker = document.getElementById("sizePicker");
sizePicker.onsubmit = () => {
	// construct the pixel canvas
	makeGrid();

	// return false to prevent default onSubmit behavior from refreshing the page
	return false;
};

/**
 * Constructs our pixel canvas
 */
function makeGrid() {
	// get the grid width from the width input
	const gridWidth = document.getElementById("inputWidth").value;

	// get the grid height from the height input
	const gridHeight = document.getElementById("inputHeight").value;

	// get a reference to the pixel canvas table
	const table = document.getElementById("pixelCanvas");

	// clear the contents of the pixel canvas to construct a new one
	clearCanvas(table);

	// create a row to contain each row of pixels
	for (let y = 0; y < gridHeight; y++) {
		// create a row element to insert into the table
		const row = document.createElement("tr");

		// insert the row into the table so that its contents will appear in the proper vertical position
		table.appendChild(row);

		// create a cell for each pixel in the row
		for (let x = 0; x < gridWidth; x++) {
			// create a table cell element to represent our pixel
			const cell = document.createElement("td");

			// hook up on onClick event to the cell that will apply our selected color
			cell.onclick = () => colorCell(cell);

			// add the cell to the current row
			row.appendChild(cell);
		}
	}
}

/**
 * Clears the contents of the canvas
 * @param {HTMLElement} table The table to clear the contents of
 */
function clearCanvas(table) {
	// clear the contents of the table
	table.innerHTML = "";
}

/**
 * Colors the provided cell in our currently selected color
 * @param {HTMLElement} cell The cell to color
 */
function colorCell(cell) {
	// get color from color picker input
	const color = document.getElementById("colorPicker").value;

	// apply the color to our desired cell
	cell.style.backgroundColor = color;
}
