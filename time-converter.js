/*
Grabs the time from the website Promiedos.com.ar and converts it from GMT-3 to CEST. Simple but useful for Argentinians living abroad.
*/
const mainHeaderClass = document.querySelector('.main-header-block_breadcrumbs__qufNi');

if (mainHeaderClass) {
  mainHeaderClass.innerHTML += `<br> <br/>
        <div>
            <span>Todos los horarios fueron convertidos de GMT-3 (Argentina) a CEST (Europa Central)</span>
        </div>
    `;
}

function convertTime() {
  const timeElementsArg = document.querySelectorAll('.time_time__GlBIn');

  timeElementsArg.forEach((element) => {
    const originalTime = element.textContent.trim();
    const [hours, minutes] = originalTime.split(':').map(Number);

    // Conversión simple de GMT-3 a CEST, le sumo 5 hs jaja
    let newHours = hours + 5;

    // Si se pasa de las 24 horas, se maneja el overflow restando 24
    if (newHours >= 24) {
      newHours -= 24;
    }

    const newTime = `${newHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    element.textContent = newTime;
  });
}
convertTime();
