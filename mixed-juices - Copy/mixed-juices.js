// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  var limeCount=0;
  var wedgesCut=0;
  while (wedgesCut<wedgesNeeded && limes.length>limeCount){
    switch(limes[limeCount]){
      case 'small':
        wedgesCut=wedgesCut+6;
        limeCount++;
        break;
      case 'medium':
        wedgesCut=wedgesCut+8;
        limeCount++;
        break;
      case 'large':
        wedgesCut=wedgesCut+10
        limeCount++;
        break;
    }
  }
  return limeCount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 * 
 * 
 */
export function remainingOrders(timeLeft, orders) {
  var timeTaken=0;
  var ordersTaken=0;
  var ordersLeft= [...orders];
  const ordersConst= [...orders];
  const numberOfOrders= ordersConst.length;
  while (timeTaken<timeLeft && ordersTaken<numberOfOrders){
    timeTaken=timeTaken+timeToMixJuice(ordersConst[ordersTaken]);
    ordersLeft.splice(0,1);
    ordersTaken++;
  }
  return ordersLeft;
}
