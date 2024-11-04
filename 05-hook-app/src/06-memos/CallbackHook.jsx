import { useCallback, useState } from "react"
import { ShowIncremente } from "./ShowIncremente"

export const CallbackHook = () => {

    const [counter, setcounter] = useState( 10 )

    const incrementFather = useCallback(
      () => {
        setcounter( (value) => value + 1 );
      },
      [],
    )
    

    // const incrementFather = () => {
    //     setcounter( counter + 1);
    // }

  return (

    <>
        <h1>UseCallback Hook: { counter }</h1>
        <hr />

        <ShowIncremente increment={ incrementFather }/>
    </>
  )
}
