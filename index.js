// code your solution here
function saturdayFun (activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("bathe my dog")

function mondayWork (work = "go to the office"){
    return `This Monday, I will ${work}.`
}
mondayWork("work from home")

function wrapAdjective(character, start = 'You are') {
    return function (end = "special") {
      return `${start} ${character}${end}${character}!`;
    };
  }