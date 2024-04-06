// class ReactContainer extends React.Component{
//     render(){
//         return(

        // <div>
        //     Hello! Welcomne to Kalvium!
        //     <div>
        //         Let's rock and roll!
        //     </div>
        // </div>
//         )
//     }
// }
// let container = document.getElementById("react-container")
// ReactDOM.render(<ReactContainer/>,container)


function ReactContainer(){
    return(
    <div>
        Hello! Welcomne to React!
        <div>
            Let's rock and roll!
        </div>
    </div> 
    )
}

let container = document.getElementById("react-container")
ReactDOM.render(<ReactContainer/>,container)
