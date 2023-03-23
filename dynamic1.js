console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const getButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });
  
   const getColdDrink =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('coldrink'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  
    let [ popcorn, butter, coldrink ] =
    await Promise.all([ getPopcorn, getButter, getColdDrink  ]);

    console.log(`got ${popcorn}, ${butter}, ${coldrink}`);

  
  return ticket;
  
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');
