import { months } from "../constants/constants";

/**
 * Returns an array of Date objects for the specified weekdays in a given month/year
 * @param {number} year - Full year, e.g., 2025
 * @param {number} month - 0-based month (0 = Jan, 11 = Dec)
 * @param {number[]} daysOfWeek - array of day numbers: Sunday = 0 ... Saturday = 6
 * @returns {Date[]} - array of Date objects in chronological order
 */
const ServiceDays = [0, 3, 5]

function getCurrentYear() {
    return new Date().getFullYear()
};

function getServiceDays(year, month) {
    const result = [];

    const monthIndex = months.indexOf(month)

    const date = new Date(year, monthIndex, 1);
    const lastDay = new Date(year, monthIndex + 1, 0).getDate();

    for (let day = 1; day <= lastDay; day++) {
        date.setDate(day);
        if (ServiceDays.includes(date.getDay())){
            result.push(new Date(date));
        }
    }

    return result;
}

function sectionServiceDays(days) {
  const cards = [];
  let i = 0;

  while (i < days.length) {
    const card = [];


    for (let d of ServiceDays) {
      if (i < days.length && days[i].getDay() === d) {
        card.push(days[i]);
        i++;
      }
    }

    cards.push(card);
  }

  return cards;
}

export { getCurrentYear, getServiceDays, sectionServiceDays }