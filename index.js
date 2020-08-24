/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

const greet = (timeString) => {
  let time = timeString.split(':')
  let hour = time[0]
  hour.parseInt

  if(hour < 12){
    return "Good Morning"
  } else if(hour >= 12 && hour < 17){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

const displayMessage = (message) => {
  let greeting = document.getElementById('greeting')
  greeting.innerText = message
}

