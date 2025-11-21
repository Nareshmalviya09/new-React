
const Navbar=()=>{
// javaScript will be written here 
   const Hello=()=>{
              let age=prompt("enter your age")
              if(age>18){
                alert("eligible")
              }
              else{
                alert("not eleigible")
              }
   }

    return(
        <div>
                <p>Navbar</p>
                <button onClick={Hello}>clicke me </button>

        </div>
    )
}
export default Navbar