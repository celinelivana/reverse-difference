import "./styles.css";

export default function App() {
  //removing non-numeric input
  var inputNum = document.getElementById("inputNum");
  inputNum.addEventListener("input", function() { 
  this.value = this.value.replace(/[^0-9]/g, ''); });

  function handleInput() {
    //initializing
    var input = document.querySelector("input").value;
    var result = document.getElementById("reverse");
    var difference = document.getElementById("difference")

    //reverse the input
    var reverse = input.split("").reverse().join("");
    //calculating the difference
    var calculation = Math.abs(input-reverse);
    
    //if input is empty it will alert user
    if (input === "") {
      alert("Please fill the number");
    //if the input is only 0(s) it will return this
    } else if(/^[0]+$/.test(input)){
      result.innerHTML = "Reverse : " + reverse;
      difference.innerHTML = "Result: 0";
      //in normal condition it will reverse and calculate the result
    }else{
      input.replace(/0+$/, "");
      result.innerHTML = "Reverse : " + reverse;
      difference.innerHTML = "Result:" +calculation;
    }

  }
  
  

  return (
    <div className="App">
      <div>
        Number: <input id="inputNum"/>
        <button onClick={handleInput}>Submit</button>
      </div>
      <label id="reverse"></label>
      <br/>
      <label id="difference"></label>
    </div>
  );
}

