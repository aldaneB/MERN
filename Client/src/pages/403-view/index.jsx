/** Uauthenticated view */

function UnauthorizedAccess() {
  return (
    <div className="flex items-center h-screen w-screen justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600">403</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          Access Denied
        </h2>
        <p className="text-lg mb:8 md:text-xl mt-2 text-gray-600">
          You do not have permission to view this page.
        </p>
        <div className="mt-1 p-4">
          <a
            href="/auth/login"
            className="mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
}

export default UnauthorizedAccess;
