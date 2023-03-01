function timeToMixJuice(name) {
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

function remainingOrders(timeLeft, orders) {
    var timeTaken=0;
    var ordersTaken=0;
    var ordersLeft= orders;
    while (timeTaken<timeLeft && ordersTaken<orders.length){
      timeTaken=timeTaken+timeToMixJuice(orders[ordersTaken]);
      ordersLeft.splice(ordersTaken,1);
      ordersTaken++;
    }
    return ordersLeft;
  }
const timeLeft=7;
const orders = ['Tropical Island','Energizer','Limetime','All or Nothing','Pure Strawberry Joy',];
remainingOrders(timeLeft,orders)