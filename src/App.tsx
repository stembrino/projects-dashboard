import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout/AppLayout";
import { WeatherProvider } from "./context/WeatherContext/weather-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <WeatherProvider>
      <AppLayout>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </AppLayout>
    </WeatherProvider>
  );
}

export default App;
