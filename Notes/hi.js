// i have removed redux for simplicity and implemented context
// kafi easy hai and 

// i have also changed the jwt authentication ..uski jagah i have stored user object in local storage which u can also verify in developers tool after doing login;

// u can simply get the user info anywhere in code by importing useauth from context;

import { useAuth } from "../Context/Auth";

const [auth, setAuth] = useAuth();

// just these two lines and you can acces it..auth me email and user_id hai

// baki pura codebase simple hai styling ki hai,axios se api calling and jo response array aya usko map kardiya hai..simple

// and Latest and Recommendation ke lie koi algorithm nhi use kiya hai just ek function banaya jo puri products list se randomaly koi 4 item return karega...bas usko hi map kar diya hai component mai