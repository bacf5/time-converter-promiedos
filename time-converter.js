/*
Grabs the time from the website Promiedos.com.ar and converts it from GMT-3 to wherever the user is using the navigator API. Simple but useful for Argentinians living abroad.
*/

const mainHeaderClass = document.querySelector('.main-header-block_breadcrumbs__qufNi');
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log('Detected user timezone:', userTimeZone);

if (mainHeaderClass) {
  mainHeaderClass.textContent = '';
  mainHeaderClass.textContent = `Todos los horarios fueron convertidos de GMT-3 (Argentina) a ${userTimeZone}.`;
}

function convertTime() {
  const timeElementsArg = document.querySelectorAll('.time_time__GlBIn');
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  timeElementsArg.forEach((element) => {
    const originalTime = element.textContent.trim();
    const [hours, minutes] = originalTime.split(':').map(Number);

    const gmt3Date = new Date(Date.UTC(year, month, day, hours + 3, minutes));
    console.log(gmt3Date);

    // Convierte la hora a la zona horaria del usuario
    const localString = gmt3Date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: userTimeZone,
    });

    element.textContent = localString;
  });
}

convertTime();
