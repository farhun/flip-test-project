/**
 * Formats a date string into D MMM YYYY.
 *
 * param {string} dateString - The date string to be formatted, in a format that can be parsed by `Date`.
 * returns {string} - A formatted string representing the date in the format "day month year".
 */

export function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const formattedMonth = months[monthIndex];
  
    return `${day} ${formattedMonth} ${year}`;
  }  