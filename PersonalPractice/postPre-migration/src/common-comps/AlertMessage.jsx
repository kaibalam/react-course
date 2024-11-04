import { useState } from "react"

export const AlertMessage = ( { isActive, message } ) => {
  return (
    <div className="alert alert-danger text-center" hidden={ isActive }>{ message }</div>
  )
}
