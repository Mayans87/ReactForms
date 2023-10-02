import { useRef } from "react";
const SimpleInput = (props) => {
  const Emailref = useRef();
  // const [enteredValue, setEnteredValue]=useState();
  function submithandler(event) {
    event.preventDefault();
    // setEnteredValue('')
    if (Inputref.current.value.trim() === "" || Emailref.current.value.trim() === "") {
      alert("Please enter something");
      Inputref.current.value = "";
      Inputref.current.focus();
      document.getElementById("btn").disabled = true
      setTimeout(() => {
        document.getElementById("btn").disabled = false
        console.log('button enabled');
      },5000);
      return;
    }
    // if(localStorage.getItem(Inputref.current.value.trim())){alert("This name is already present!");Inputref.current.focus();Inputref.current.value = ""; return;}
    console.log(Inputref.current.value + " from ref");
    // localStorage.setItem('name', Inputref.current.value);
    Inputref.current.value = "";
  }
  // function inputhandler(event){
  //   // console.log(event.target.value+" from statehandler");
  //   // setEnteredValue(event.target.value)
  // }

  const Inputref = useRef();
 
  

  return (
    <form onSubmit={submithandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input ref={Inputref} type="text" id="name" autoComplete="on" />
      </div>
      <div className="form-control">
        <label htmlFor="email">Your Email</label>
        <input ref={Emailref} type="email" id="email" />
      </div>
      <div className="form-actions">
        <button id='btn'>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
