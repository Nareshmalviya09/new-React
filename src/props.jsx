import Child from "./Child"

let Props =()=>{
    //  let name ="naresh"
    //  let age =25
    //  let batch="p60"

    let student={
        name:"naresh",
        age:25,
        batch:"p60"
    }
    return(

        < >
            <h1> This is props</h1>
            {/* <Child myname={name} myage={age} mybatch={batch}/>
            <Child myname="praveen" myage={42} mybatch={batch}/> */}

            <Child data={student}/>
        </ >
    )
}
export default Props