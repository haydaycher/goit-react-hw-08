// import { lazy, Suspense, useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import Layout from "./Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import { refreshUser } from "../redux/auth/operations";
// import { selectIsRefreshing } from "../redux/auth/selectors";
// import RestrictedRoute from "../components/RestrictedRoute/RestrictedRoute";
// import PrivateRoute from "./PrivateRoute/PrivateRoute";

// const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
// const RegisterPage = lazy(() =>
//   import("../pages/RegistrationPage/RegistrationPage")
// );
// const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
// const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

// export default function App() {
//   const dispatch = useDispatch();
//   const isRefreshing = useSelector(selectIsRefreshing);
//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <b>Please wait, updating... </b>
//   ) : (
//     <Layout>
//       <Suspense fallback={null}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route
//             path="/register"
//             element={
//               <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
//             }
//           />
//           <Route
//             path="/login"
//             element={
//               <RestrictedRoute
//                 component={<LoginPage />}
//                 redirectTo="/contacts"
//               />
//             }
//           />
//           <Route
//             path="/contacts"
//             element={
//               <PrivateRoute component={<ContactsPage />} redirectTo="/" />
//             }
//           />
//         </Routes>
//       </Suspense>
//     </Layout>
//   );
// }
import { Route, Routes } from "react-router-dom/dist";
import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;