/* eslint-disable jsx-a11y/anchor-is-valid */
import { Route, Routes, Outlet } from "react-router-dom";
import { Error404 } from "./components/Error404";

const ErrorsLayout = () => {
  return (
    <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-column flex-center flex-column-fluid">
        <div className="d-flex flex-column flex-center text-center p-10">
          <div className="card card-flush  w-lg-650px py-5">
            <div className="card-body py-15 py-lg-20">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ErrorsPage = () => (
  <Routes>
    <Route element={<ErrorsLayout />}>
      <Route path="404" element={<Error404 />} />
      <Route index element={<Error404 />} />
    </Route>
  </Routes>
);

export { ErrorsPage };
