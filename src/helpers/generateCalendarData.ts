type Week = (string | null)[];

export const generateCalendarData =(year: number, month: number): Week[] => {
  const firstDayMonth = new Date(year, month, 1);
  const lastDayMonth = new Date(year, month + 1, 0);

  // Ajusta el index de los dias para que lunes sea 0 y domingo 6
  const startDayOfWeek = firstDayMonth.getDay();
  let dayIndex = (startDayOfWeek === 0 ? 6 : startDayOfWeek - 1);



  const weeks: Week[] = [];
  let currentWeek: Week = Array(7).fill(null);

  // Bucle que completa el calendario
  for (let day = 1; day <= lastDayMonth.getDate(); day++) {
    // Inserta los datos del dia
    currentWeek[dayIndex] = `${day.toString().padStart(2, "0")}-${(month + 1)
      .toString()
      .padStart(2, "0")}-${year}`;
    // Inserta los datos del dia

    // Avanza al siguiente dia
    dayIndex++;

    // Al llegar al domingo, guardar la semana y empieza una nueva
    if (dayIndex > 6) {
      weeks.push(currentWeek);
      currentWeek = Array(7).fill(null);
      dayIndex = 0;
    }
  }

  // Al no llegar al domingo durante el bucle, este codigo guardara la semana
  // (detecta si existe algun null, indicando que es la ultima semana, por lo que lo guardara)
  if (currentWeek.some((day) => day !== null)) {weeks.push(currentWeek)}

  return weeks;
}