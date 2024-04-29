import { FC, useEffect } from "react";
import { Link } from "react-router-dom";

const Error404: FC = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <>
      {/* begin::Title */}
      <h1 className="fw-bolder fs-2hx text-gray-900 mb-4">404 Error page</h1>
      {/* end::Title */}

      {/* begin::Text */}
      <div className="fw-semibold fs-6 text-gray-500 mb-7">
        The page you are looking for is not found.
      </div>
      {/* end::Text */}

      {/* begin::Link */}
      <div className="mb-0">
        <Link to="/home" className="btn btn-sm btn-primary">
          Home
        </Link>
      </div>
      {/* end::Link */}
    </>
  );
};

export { Error404 };
