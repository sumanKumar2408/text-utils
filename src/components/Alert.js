import React from 'react'

function Alert(props){
  return (
    <div>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`}role="alert">
            <strong style={{textTransform: "capitalize"}}>{props.alert.type}</strong>: {props.alert.msg}
        </div> 
        }
    </div>
  )
}

export default Alert;
