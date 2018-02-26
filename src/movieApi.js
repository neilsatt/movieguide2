export function requestMovies() {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve([
          { title: 'Rebel without a Cause', date: 'Monday' },
          { title: 'Ghost in the Shell', date: 'Tuesday' },
          { title: 'High Noon', date: 'Saturday' },
          { title: 'Star Wars', date: 'Wednesday' }, 
          { title: 'Paris Texas', date: 'Thursday' },
          { title: 'American Beauty', date: 'Sunday' },
          { title: 'Breaking Away', date: 'Friday' }    
        ]),
      1000
    )
  );
}
