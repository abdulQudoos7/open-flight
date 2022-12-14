// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom'
import App from '../components/App'
import { BrowserRouter, Routes , Route } from 'react-router-dom'


// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <BrowserRouter>
//     <Routes>
//       <Route path="/*" element={<App />}/>
//     </Routes>
//     </BrowserRouter>,
//     document.body.appendChild(document.createElement('div')),
//   )
// })

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />}/>
    </Routes>
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div')),
  )
  // do stuff
},{ once: true });



// const root = ReactDOM.createRoot(document.createElement('div'));
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/*" element={<App />}/>
//     </Routes>
//     </BrowserRouter>
//     ,
//     // document.body.appendChild(document.createElement('div')),
// )




