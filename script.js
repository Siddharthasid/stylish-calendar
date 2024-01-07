let calendar = document.querySelector(".calendar");

const month_names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};

getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};

generateCalendar = (month, year) => {
  let calendar_days = calendar.querySelector(".calendar-days");
  let calendar_header_year = calendar.querySelector("#year");

  let days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  calendar_days.innerHTML = "";

  let currDate = new Date();
  if (!month) month = currDate.getMonth();
  if (!year) year = currDate.getFullYear();

  let curr_month = `${month_names[month]}`;
  month_picker.innerHTML = curr_month;
  calendar_header_year.innerHTML = year;

  let first_day = new Date(year, month, 1);

  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
    let day = document.createElement("div");
    if (i >= first_day.getDay()) {
      day.classList.add("calendar-day-hover");
      day.innerHTML = i - first_day.getDay() + 1;
      day.innerHTML += `<span></span>
        <span></span>
        <span></span>
        <span></span> 
        `;
      if (
        i - first_day.getDay() + 1 === currDate.getDate() &&
        year === currDate.getFullYear() &&
        month === currDate.getMonth()
      ) {
        day.classList.add("curr-date");
      }
    }
    calendar_days.appendChild(day);
  }
};

let month_list = calendar.querySelector(".month-list");

month_names.forEach((e, index) => {
  let month = document.createElement("div");
  month.innerHTML = `<div data-month="${index}">${e}</div>`;
  month.querySelector("div").onclick = () => {
    month_list.classList.remove("show");
    curr_month.value = index;
    generateCalendar(index, curr_year.value);
  };
  month_list.appendChild(month);
});

let month_picker = calendar.querySelector("#month-picker");

month_picker.onclick = () => {
  month_list.classList.add("show");
};

let currDate = new Date();

let curr_month = { value: currDate.getMonth() };
let curr_year = { value: currDate.getFullYear() };

generateCalendar(curr_month.value, curr_year.value);

document.querySelector("#prev-year").onclick = () => {
  --curr_year.value;
  generateCalendar(curr_month.value, curr_year.value);
};

document.querySelector("#next-year").onclick = () => {
  ++curr_year.value;
  generateCalendar(curr_month.value, curr_year.value);
};


const calendarBody = document.querySelector(".calendar");

const neonColors = [
  "#e6ff00",
  "#f0ffac",
  "#a0acff",
  "#ffabaa",
  "#ffbaac",
  "#ac0fff",
  "#00fbfe",
  "#ff0fef",
  "#afafee",
  "#fefeaf",
  "#fefefe",
  "#fafafa",
  "#f1f1f1",
  "#baff00",
  "#c1ff0a",
  "#0ac0ff",
  "#fe0aeb",
  "#e6fe0a",
  "#eaff00",
  "#FF1493", // DeepPink
  "#00FF7F", // SpringGreen
  "#00CED1", // DarkTurquoise
  "#FFD700", // Gold
  "#FF6347", // Tomato
  "#DA70D6", // Orchid
  "#8A2BE2", // BlueViolet
  "#20B2AA", // LightSeaGreen
  "#87CEEB", // SkyBlue
  "#32CD32", // LimeGreen
  "#FF4500", // OrangeRed
  "#9400D3", // DarkViolet
  "#FF69B4", // HotPink
  "#1E90FF", // DodgerBlue
  "#00BFFF", // DeepSkyBlue
  "#FFA07A", // LightSalmon
  "#00FA9A", // MediumSpringGreen
  "#48D1CC", // MediumTurquoise
  "#7FFFD4", // Aquamarine
  "#8B008B", // DarkMagenta
  "#FF8C00", // DarkOrange
  "#9370DB", // MediumPurple
  "#00FF00", // Lime
  "#00FFFF", // Aqua/Cyan
  "#B0E0E6", // PowderBlue
  "#7B68EE", // MediumSlateBlue
  "#7CFC00", // LawnGreen
  "#FAFAD2", // LightGoldenrodYellow
  "#FFE4B5", // Moccasin
  "#FFDAB9", // PeachPuff
  "#8B4513", // SaddleBrown
  "#008B8B", // DarkCyan
  "#9932CC", // DarkOrchid
  "#228B22", // ForestGreen
  "#FF7F50", // Coral
  "#6A5ACD", // SlateBlue
  "#7FFF00", // Chartreuse
  "#FF00FF", // Fuchsia/Magenta
  "#CD5C5C", // IndianRed
  "#48D1CC", // MediumTurquoise (Repeating, just for example)
  "#8B4513", // SaddleBrown (Repeating, just for example)
  "#008B8B", // DarkCyan (Repeating, just for example)
  "#9932CC", // DarkOrchid (Repeating, just for example)
  "#228B22", // ForestGreen (Repeating, just for example)
  "#FF7F50", // Coral (Repeating, just for example)
  "#6A5ACD", // SlateBlue (Repeating, just for example)
  "#7FFF00", // Chartreuse (Repeating, just for example)
  "#FF00FF", // Fuchsia/Magenta (Repeating, just for example)
  "#CD5C5C", // IndianRed (Repeating, just for example)
  "#E9967A", // DarkSalmon
  "#7B68EE", // MediumSlateBlue (Repeating, just for example)
  "#32CD32", // LimeGreen (Repeating, just for example)
  "#40E0D0", // Turquoise
  "#FF8C00", // DarkOrange (Repeating, just for example)
  "#DDA0DD", // Plum
  "#9932CC", // DarkOrchid (Repeating, just for example)
  "#7B68EE", // MediumSlateBlue (Repeating, just for example)
  "#32CD32", // LimeGreen (Repeating, just for example)
  "#40E0D0", // Turquoise (Repeating, just for example)
  "#FF8C00", // DarkOrange (Repeating, just for example)
  "#DDA0DD", // Plum (Repeating, just for example)
];

function changeCalendarColor() {
  const randomColor =
    neonColors[Math.floor(Math.random() * neonColors.length)];
  calendar.style.backgroundColor = randomColor;
  calendar.style.boxShadow = `0 0 20px ${randomColor}`;
}

setInterval(() => {
  changeCalendarColor();
}, 2000);
