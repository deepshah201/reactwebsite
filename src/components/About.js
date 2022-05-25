// import React, { useState } from "react";

// export default function About() {
//   const [myStyle, setMyStyle] = useState({
//     color: "white",
//     backgroundColor: "black",
//   });

//   const togleStyle = () => {
//     if (myStyle.color == "white") {
//       setMyStyle({
//         color: "black",
//         backgroundColor: "white",
//       });
//       setBtntext("Enable Dark Mode");
//     } else {
//       setMyStyle({
//         color: "white",
//         backgroundColor: "black",
//         border: "2px solid white",
//       });
//       setBtntext("Enable Light Mode");
//     }
//   };

//   const [btntext, setBtntext] = useState("Enable Dark Mode");
//   return (
//     <div className="container" style={myStyle}>
//       <h3 className="my-3">About Us</h3>
//       <div id="accordion" style={myStyle}>
//         <div className="card">
//           <div className="card-header" id="headingOne">
//             <h5 className="mb-0">
//               <button
//                 className="btn btn-link"
//                 data-toggle="collapse"
//                 data-target="#collapseOne"
//                 aria-expanded="true"
//                 aria-controls="collapseOne"
//                 style={myStyle}
//               >
//                 Collapsible Group Item #1
//               </button>
//             </h5>
//           </div>

//           <div
//             id="collapseOne"
//             className="collapse show"
//             aria-labelledby="headingOne"
//             data-parent="#accordion"
//           >
//             <div className="card-body" style={myStyle}>
//               Anim pariatur cliche reprehenderit, enim eiusmod high life
//               accusamus terry richardson ad squid. 3 wolf moon officia aute, non
//               cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
//               laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
//               on it squid single-origin coffee nulla assumenda shoreditch et.
//               Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
//               nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
//               lomo. Leggings occaecat craft beer farm-to-table, raw denim
//               aesthetic synth nesciunt you probably haven't heard of them
//               accusamus labore sustainable VHS.
//             </div>
//           </div>
//         </div>
//       </div>
//       <button
//         onClick={togleStyle}
//         type="button"
//         class=" my-3 btn btn-outline-primary"
//       >
//         {btntext}
//       </button>
//     </div>
//   );
// }
