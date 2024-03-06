import React, { useEffect } from "react";
import { MainRouter } from "./routes/MainRouter";
import { useDispatch } from "react-redux";
import { updateUser } from "./store/reducers/authSlice";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
   const user = localStorage.getItem("user")

   if(user){
      dispatch(updateUser(JSON.parse(user)))
   }
   
  }, [])
  
  return <MainRouter />;
};

export default App;
