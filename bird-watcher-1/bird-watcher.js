// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  var count=0;
  var a=0;
  for (let i=0; i<birdsPerDay.length;i++){
    
    count=count+birdsPerDay[a];
    a=a+1;
    }
  return count;
}
  


/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  var count=0;
  var a= (week*7)-7;
  for (let i=0; i<7;i++){
    count=count+birdsPerDay[a];
    a=a+1;
  }
  return count;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  var day=0;
  for (let i=0; i<birdsPerDay.length;i++){
    if (day%2===0){
      birdsPerDay[day]=birdsPerDay[day]+1;
    }
    day=day+1;
  }
  return birdsPerDay;


}
