const radiusInput = document.getElementById("radius");
const circle = document.getElementById("circle");
const areaSpan = document.getElementById("area");
const perimeterSpan = document.getElementById("perimeter");

radiusInput.addEventListener("input", updateCircle);

function updateCircle() {
    const radius = parseFloat(radiusInput.value);

    if (!isNaN(radius) && radius >= 0) {
        const diameter = radius * 2;
        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;

        const area = Math.PI * Math.pow(radius, 2);
        const perimeter = 2 * Math.PI * radius;

        areaSpan.textContent = area.toFixed(2);
        perimeterSpan.textContent = perimeter.toFixed(2);
    } else {
        circle.style.width = "0";
        circle.style.height = "0";
        areaSpan.textContent = "";
        perimeterSpan.textContent = "";
    }
}

updateCircle();
