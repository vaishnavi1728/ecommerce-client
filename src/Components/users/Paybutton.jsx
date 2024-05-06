import axios from "axios"
import {useSelector} from "react-redux"
import {url} from "../slices/api"

const Paybutton=({cartItems})=>{
    const user=useSelector((state)=>state.auth)
    const handleCheckout=()=>{
        axios.post(`${url}/stripe/create-checkout-session`,{
            cartItems,
            userId: user._id
        }).then((res)=>{
            if(res.data.url)
            {
                window.location.href=res.data.url
            }
        }).catch((error)=>console.log(error))
    }
    return(
        <>
        <button onClick={()=>handleCheckout()}>Check Out</button>
        </>
    )
}

export default Paybutton