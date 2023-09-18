import {useEffect} from 'react'

const Cards = () => {
    useEffect(()=>{
        console.log("cards just rendered!")
        return ()=> {
            console.log("cards is dismounting")
        }

    }, [])
  return (
    <div>Cards</div>
  )
}

export default Cards