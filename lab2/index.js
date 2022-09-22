const weekday = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  
  const months = {
    January: 1,
    February: 4,
    March: 4,
    April: 0,
    May: 2,
    June: 5,
    July: 0,
    August: 3,
    September: 6,
    October: 1,
    November: 4,
    December: 6,
  };
  
  function getDayOfTheWeek(year, month, date) {
    const lastTwoDigit = year % 100; //last two digits
    const lastTwoDigita = Math.floor(lastTwoDigit / 12); //first step
    const lastTwoDigitb = Math.floor(lastTwoDigit % 12); //second step
    const lastTwoDigitc = Math.floor(lastTwoDigitb / 4); //step3
    const lastTwoDigitd = Number(date); //step 4
    let lastTwoDigite = months[month]; // step 5
    const sum =
      lastTwoDigita +
      lastTwoDigitb +
      lastTwoDigitc +
      lastTwoDigitd +
      lastTwoDigite;
    const sumMus = sum % 7; // step6
  
    const theWeekDay = weekday[sumMus];
  
    function isLeapYear(year) {
      if (year % 4 == 0) {
        return false;
      } else if (year % 100) {
        return true;
      } else if (year % 400) {
        return false;
      } else return true;
    }
  
    const leapYear = isLeapYear(year);
  
    if (leapYear == true && month == "January") {
      lastTwoDigite = lastTwoDigite - 1;
    }
  
    if (leapYear == true && month == "February") {
      lastTwoDigite = lastTwoDigite - 1;
    }
  
    if (year >= 1600 && year < 1700) {
      lastTwoDigite = lastTwoDigite + 6;
    } else if (year >= 1700 && year < 1800) {
      lastTwoDigite = lastTwoDigite + 4;
    } else if (year >= 1800 && year < 1900) {
      lastTwoDigite = lastTwoDigite + 2;
    } else if (year >= 2000 && year < 2100) {
      lastTwoDigite = lastTwoDigite + 6;
    } else if (year >= 2100 && year < 2200) {
      lastTwoDigite = lastTwoDigite + 4;
    }
    console.log(theWeekDay);
  
    return weekday[getDayOfTheWeek()];
    function makeCalender() {
        module.exports = { getDayOfTheWeek, makeCalender };
    }