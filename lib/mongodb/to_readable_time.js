export const to_readable_time = (mongoDateString) => {
 const date = new Date(mongoDateString);

 const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
 const dayOfWeek = daysOfWeek[date.getDay()]; const year = date.getFullYear();
 const month = date.getMonth() + 1;
 const day = date.getDate();
 const hours = date.getHours();
 const minutes = date.getMinutes();

 const formattedDate = `${dayOfWeek} ${day
  .toString()
  .padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`;
 const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
  .toString()
  .padStart(2, "0")}`;

 return `${formattedDate} ${formattedTime}`;
};
