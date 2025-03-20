
/*
function updateClock() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "PM" : "AM";

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;
  dateElement.textContent = now.toLocaleDateString(undefined, options);
}

setInterval(updateClock, 1000);

updateClock();
*/

const timeForEachDayinMS = 86400000;



function getTime() {
  const timeElement = document.getElementById("time")


  const now = new Date();
  //console.log(now);


  const hours = now.getHours() % 12 || 12
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`
  //console.log(hours);

  const minutes = now.getMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
  //console.log(typeof minutes); // number

  const seconds = now.getSeconds().toString().padStart(2, '0');

  // const milliSeconds = now.getMilliseconds().toString().padStart(4, '0');
  // console.log(milliSeconds);


  const ampm = now.getHours() >= 12 ? 'PM' : 'AM'


  timeElement.textContent = `${formattedHours}:${formattedMinutes}:${seconds} ${ampm}`

}

function getDate() {

  const dateElement = document.getElementById("date")

  const now = new Date()

  const date = now.getDate()
  const monthName = now.toLocaleString("en-US", { month: "long" })
  const year = now.getFullYear()

  dateElement.innerHTML = `${date} ${monthName} ${year}`

}



getTime();

getDate();



setInterval(() => {

  getTime();

}, 1000)

setInterval(getDate, timeForEachDayinMS)


