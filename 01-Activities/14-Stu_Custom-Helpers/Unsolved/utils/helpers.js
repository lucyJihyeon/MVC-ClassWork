module.exports = {
  format_time: (time) => {
    //H:MM:SS AM/PM
    return time.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  
  format_date: (date) => {
    date.setFullYear(date.getFullYear() + 5);
    return date.toLocaleDateString("en-US");
  }
};
