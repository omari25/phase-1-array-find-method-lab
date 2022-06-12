// code your solution here
const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

  const superbowlWin = function(record) {

    const result = record.find( function(answer) {
      return answer.result === "W" 
    });

    if(result){
      return result.year
    } else {
      return undefined
    }
    
  }