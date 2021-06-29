//In this challenge, we combine our prior experience with command line arguments and asynchronous programming in order to implement a simple Alarm Clock / Timer app. Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

// Edge Cases
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.


let args = process.argv;
args = args.slice(2);

if (args.length === 0) {
  return;
}

for (let arg of args) {

  if (!isNaN(arg) && arg >= 0) {
    setTimeout(() => {
      //node system beep
      process.stdout.write('\x07');
    }, arg * 1000);
  }
}


/*
node timer1.js 10 3 5 15 9 
This will make it beep at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds

*/