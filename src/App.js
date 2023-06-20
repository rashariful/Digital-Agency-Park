import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="App font-myFont">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
