// LESSON 11
/**
 If - else
 */

/**
  Convert to Boolean -> False
  0
  false
  '' OR ""
  undefined
  NaN
  null
  */

  if (isSuccess) {
    console.log("Valid");
  } else {
    console.log("Invalid");
  }
  
  
  //  LESSON 19 : CONDITIONAL STATEMENTS
  //A. IF-ELSE Statement
  
  let date = 2;
  
  if (date === 2) {
    console.log("Hom nay la thu 2");
  } else if (date === 3) {
    console.log("Hom nay la thu 3");
  } else if (date === 4) {
    console.log("Hom nay la thu 4");
  } else {
    console.log("Khong biet");
  }
  
  function greatestNumber(a, b, c) {
    if (a > b && a > c) {
      console.log("The greatest number is " + a);
    } else if (b > a && b > c) {
      console.log("The greatest number is " + b);
    } else {
      console.log("The greatest number is " + c);
    }
  }
  
  greatestNumber(30, 20, 30.5);
  
  // B. Switch Case
  
  let day_of_week_name = 7;
  
  switch (day_of_week_name) {
    case 0:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Unknown Day");
  }