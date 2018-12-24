import React from 'react';

const item = {
    display: "block",
    width: "100%",
    height: "150px"
}
const itemImg = {
    height: "75%",
    width: "100%",
    padding: "auto"
}

const Start = (props) => {
    return(
        
        <div className="container h-75">
            
                <div className="float-left col-sm-4 d-inline " style={item} >
                    <img src={props.foto} alt="s" className=" img-responsive img-thumbnail img-fluid" style={itemImg}/>
                </div>
           
        </div> 
                
        )
    }


export default Start;