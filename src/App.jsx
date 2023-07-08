import './app.scss';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from './Components/NavBar/Nav'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Gallery from './Pages/Gallery/Gallery'
import Services from './Pages/Services/Services'
import Team from './Pages/Team/Team'
import ProgressBar from 'react-progressbar-on-scroll'
import SingleStuff from './Pages/SingleStuff/SingleStuff';
import Loader from './Components/Loader/Loader'
import { useEffect, useState } from "react";
import { RxDoubleArrowUp } from 'react-icons/rx';
function App() {
  const LayOut = () => {
    const [scroll, setscroll] = useState(false)
    const show = () => {
      if (window.scrollY >= 150) {
        setscroll(true)
      } else {
        setscroll(false)
      }
    }
    window.addEventListener('scroll', show)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 2500);
    }, [])
    return (
      <div className="app">
        {loading ? <Loader /> :
          <>
            <ProgressBar
              color="#96885f"
              height={3}
              direction="right"
              position="top"
              gradient={true}
              gradientColor="white"
            />
            <Nav />
            <Outlet />
            <Footer />
            <div className={scroll ? 'scrollToTop no' : "scrollToTop"}>
              <a href={`#nav`}>
                <RxDoubleArrowUp />
              </a>
            </div>
          </>
        }
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/team/stuff/:Id",
          element: <SingleStuff />,
        },
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
