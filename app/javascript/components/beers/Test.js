import React from 'react'

const Test = () => {

  const now = new Date('12/07/2013');  // (mm/dd/yyyy)

  let day = now.getDay();
  let month = now.getMonth();
  let year = now.getFullYear();

  let date = month +" "+ year;


  console.log(day);
  console.log(typeof(day));
  console.log(month);
  console.log(typeof(month));
  console.log(year);
  console.log(typeof(year));
  console.log(date);
  console.log(typeof(date));
  // console.log(now.toDateString());



  return (
    <div>date</div>
  )
}

export default Test