/*
CIT 281 Project 1
Name: Benjamin Jensen
*/

let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
//Find # of current day and display congruent index from array
let today = new Date();
let day_of_week_index_for_today = today.getUTCDay();
let day_of_week_for_today = daysOfWeek[day_of_week_index_for_today - 1];
console.log(day_of_week_for_today);