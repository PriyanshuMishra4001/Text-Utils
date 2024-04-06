// // import logo from './logo.svg';
// // import { useState } from "react";
// import "./App.css";
// import Alert from "./components/Alert";
// import About from "./components/About";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// // let name : "Mishra" ;
// import React, { useState } from "react";
// // import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// function App() {
//   const [mode, setMode] = useState("dark");
//   const [alert, setAlert] = useState(null);
//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   };
//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "black";
//       document.body.style.color = "white";
//       document.title = "TextUtils - Dark Mode";
//       showAlert("Dark mode has been enabled", "success");
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       document.body.style.color = "black";
//       document.title = "TextUtils - Light Mode";
//       showAlert("Light mode has been enabled", "success");
//     }
//   };
//   // return (
//   //   <>

//   //       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
//   //       <Alert alert={alert} />
//   //       <div className="container my-3">
//   //       <Switch>
//   //           <Route exact path="/about">
//   //             <About mode={mode}/>
//   //           </Route>
//   //           <Route exact path="/">
//   //         <TextForm
//   //         showAlert={showAlert}
//   //         heading="Enter the text to analyse"
//   //         mode={mode}
//   //         />
//   //           </Route>
//   //       </Switch>
//   //       </div>
//   //   </>
//   // );
//   return (
//     <Router>
//       <>
//         <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
//         <Alert alert={alert} />
//         <div className="container my-3">
//           <Routes>
//             <Route path="/about" element={<About mode={mode} />} />
//             <Route
//               path="/"
//               element={
//                 <TextForm
//                   showAlert={showAlert}
//                   heading="Enter the text to analyse"
//                   mode={mode}
//                 />
//               }
//             />
//           </Routes>
//         </div>
//       </>
//     </Router>
//   );
// }
// export default App;

// {
//   /* </Router> */
// }
// // <Navbar title= "TextUtils2" aboutText = "About TextUtils"/>
// // <Navbar/>
// // <Router>
// // <>
// // <nav>
// //   <li>Home</li>
// //   <li>About</li>
// //   <li>Contact</li>
// // </nav>
// // <div className="container">
// //   <h1>Hello</h1>
// /* <Switch>
//             <Route exact path="/about">
//             </Route>
//             <Route exact path="/">
//             </Route>
//           </Switch> */
// // </div>
// // <div className="blank">Lovely</div>
// // </>
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type)=>{
  //     setAlert({
  //       msg: message,
  //       type: type
  //     })
  //     setTimeout(() => {
  //         setAlert(null);
  //     }, 1500);
  // }

  // const toggleMode = ()=>{
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#042743';
  //     showAlert("Dark mode has been enabled", "success");
  //     // document.title = 'TextUtils - Dark Mode';
  //     // setInterval(() => {
  //     //   document.title = 'TextUtils is Amazing Mode';
  //     // }, 2000);
  //     // setInterval(() => {
  //     //   document.title = 'Install TextUtils Now';
  //     // }, 1500);
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled", "success");
  //     // document.title = 'TextUtils - Light Mode';
  //   }
  // }
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - word counter, character counter, remove extra spaces"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
