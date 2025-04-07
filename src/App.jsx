import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Meal from './FoodMeal/Meal';
import Movies from './MovieZone/Movies';
import Course from './CourseZone/Course';
import CourseDetails from './CourseZone/CourseDetails';
import Navigate from "./pages/Navigate";
import GetdataFromContext from "./practice/GetdataFromContext";
import UseState from "./hook/UseState";
import UseReducer from "./hook/UseReducer";
import UseEffect from "./hook/UseEffect";
import UseReference from "./hook/UseReference";
import UseCallback from "./hook/UseCallback";
import UseCallbackWithMemo from "./hook/UseCallbackWithMemo";
import UseMemo from "./hook/UseMemo";
import CustomHook from "./hook/CustomHook";
import Showdata from "./practice/Showdata";
import Form from "./practice/Form";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Redux from "./pages/Redux";

// https://www.youtube.com/watch?v=Qrsp4WY3axk&list=PL-CeQccLavFd_4zZSk07QYDnwnTFsCFcQ&index=3

function App() {
  return (
    <>
      <Header />
      <main>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/meal" element={<Meal/>} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/course" element={<Course />} />
          
          {/* below is dynamic url */}
          <Route path="/course/:id" element={<CourseDetails />} />
          {/* <Route path="/course/:title" element={<CourseDetails />} /> */}

          <Route path="/navigate" element={<Navigate />} />
          <Route path="/showdata" element={<Showdata />} />
          <Route path="/form" element={<Form />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/useContext" element={<GetdataFromContext />} />

          <Route path="/usestate" element={<UseState />}></Route>
          <Route path="/usereducer" element={<UseReducer />}></Route>
          <Route path="/useeffect" element={<UseEffect />}></Route>
          <Route path="/usereference" element={<UseReference />}></Route>
          <Route path="/usecallback" element={<UseCallback />}></Route>
          <Route path="/usecallbackwithmemo" element={<UseCallbackWithMemo />}></Route>
          <Route path="/usememo" element={<UseMemo />}></Route>
          <Route path="/customhook" element={<CustomHook />}></Route>  


          <Route path="/dashboard" element={<Dashboard />}></Route> 
          <Route path="/profile" element={<Profile />}></Route> 
          
        </Routes>

      </main>
      <Footer />
    </>
  );
}

export default App;
