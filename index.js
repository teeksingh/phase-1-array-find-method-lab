// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(record) {
   function findWin(obj) {
    if (obj.result === "W") { 
        return obj
    }
   }
   let win = record.find(findWin)
   if (win) {
    return win.year}
    else {
        return undefined
    }
   }
