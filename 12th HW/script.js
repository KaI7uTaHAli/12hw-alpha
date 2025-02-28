let currentShape = null;

function setShape(shape) {
   const container = document.getElementById("shape-container");
   container.innerHTML = "";
   currentShape = document.createElement("div");
   currentShape.className = shape;
   currentShape.style.backgroundColor = "gray";
   container.appendChild(currentShape);
}

function setColor(color) {
   if (currentShape) {
      currentShape.style.backgroundColor = color;
   } else {
   	alert("Сначала выберите фигуру!");
   }
}

function setText() {
   if (currentShape) {
      const text = document.getElementById("text-input").value;
      currentShape.textContent = text;
   } else {
      alert("Сначала выберите фигуру!");
   }
}

function clearShape() {
   document.getElementById("shape-container").innerHTML = "";
   currentShape = null;
}
