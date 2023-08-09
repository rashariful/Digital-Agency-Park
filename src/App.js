import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import MessengerCustomerChat from 'react-messenger-customer-chat';


function App() {
  return (
    <div className="App font-myFont">
      <MessengerCustomerChat
       pageId="106055157950858"
       appId="199380903116422"
       
      >

    <RouterProvider router={router}></RouterProvider>
      </MessengerCustomerChat>
   
 
    </div>
  );
}

export default App;
