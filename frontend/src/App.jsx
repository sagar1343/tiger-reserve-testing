import { Suspense, lazy, useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import Loader from "./components/Loader";
import { SafariProvider } from "./context/SafariContext";
import { BookingProvider, useBookingContext } from "./context/BookingContext";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Home = lazy(() => import("./pages/Home"));
const SafariPage = lazy(() => import("./pages/SafariPage"));
const Gallery = lazy(() => import("./pages/Gallery"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AdministrationPage = lazy(() => import("./pages/Administration"));
const UpdatesPage = lazy(() => import("./pages/UpdatesPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
import React, { useEffect } from "react";
import Confirmation from "./components/Third";
import Bookings from "./pages/Bookings";
import PublishContent from "./pages/PublishContent";
import UploadImages from "./pages/UploadImages";
import AddContent from "./pages/AddContent";
import BlogDetails from "./pages/BlogDetails";
import AuthPage from "./pages/AuthPage";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const scrollToElement = () => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    const timeoutId = setTimeout(scrollToElement, 100);

    return () => clearTimeout(timeoutId);
  });

  return null;
}

function Layout({ children }) {
  return (
    <>
      <ScrollToHash />
      {children}
    </>
  );
}

const RequireAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const userName = false;

  return (
    <>
      {authenticated ? (
        <div className="overflow-y-auto">
          <Navbar />
          <div className="flex">
            <Sidebar />
            <div className="main-content bg-[#F0F0F066]">
              {authenticated ? <Outlet /> : <Navigate to="/" />}
            </div>
          </div>
        </div>
      ) : (
        <AuthPage setAuthenticated={setAuthenticated} />
      )}
    </>
  );
};

function Protected({ children }) {
  const { setBookingId, setTimerStartAt } = useBookingContext();
  let isAllowed = false;
  if (
    sessionStorage.getItem("bookingId") &&
    sessionStorage.getItem("timerStartAt")
  ) {
    isAllowed = true;
    setBookingId(JSON.parse(sessionStorage.getItem("bookingId")));
    setTimerStartAt(JSON.parse(sessionStorage.getItem("timerStartAt")));
  }
  return isAllowed ? children : <Navigate to="/" />;
}

function App() {
  const ROUTER = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/safari/:id",
      element: (
        <Layout>
          <SafariPage />
        </Layout>
      ),
    },
    {
      path: "/gallery",
      element: (
        <Layout>
          <Gallery />
        </Layout>
      ),
    },
    {
      path: "/about",
      element: (
        <Layout>
          <AboutPage />
        </Layout>
      ),
    },
    {
      path: "/administration",
      element: (
        <Layout>
          <AdministrationPage />
        </Layout>
      ),
    },
    {
      path: "/updates",
      element: (
        <Layout>
          <UpdatesPage />
        </Layout>
      ),
    },
    {
      path: "/blog-details",
      element: (
        <Layout>
          <BlogDetails />
        </Layout>
      ),
    },
    {
      path: "/payment",
      element: (
        <Layout>
          <Protected>
            <PaymentPage />
          </Protected>
        </Layout>
      ),
    },
    {
      path: "/success",
      element: (
        <Layout>
          <Confirmation />
        </Layout>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <Layout>
          <RequireAuth />
        </Layout>
      ),
      children: [
        {
          index: true,
          element: <Navigate to="bookings" />,
        },
        {
          path: "bookings",
          element: <Bookings />,
        },
        {
          path: "publish-content",
          element: <PublishContent />,
        },
        {
          path: "add",
          element: <AddContent />,
        },
        {
          path: "upload-images",
          element: <UploadImages />,
        },
      ],
    },
    {
      path: "*",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
  ]);

  return (
    <SafariProvider>
      <BookingProvider>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={ROUTER} />
        </Suspense>
      </BookingProvider>
    </SafariProvider>
  );
}

export default App;
