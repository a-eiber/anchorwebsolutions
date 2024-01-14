// src/components/LandingPage.jsx

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-8 bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold mb-4">Anchor Web Solutions, Inc.</h1>
        <p className="text-gray-600 mb-8">
          Your partner for stunning online presences.
        </p>
        <p className="text-gray-800">
          Whether you need a personal blog, a portfolio, an e-commerce site, or a landing page,
          Anchor Web Solutions has the skills and experience to deliver high-quality,
          responsive, and user-friendly websites.
        </p>
        {/* Add more content as needed */}
        <div className="mt-8">
        <p className="text-gray-800">
            Contact us today at <a href="mailto:info@anchorwebsolutions.com">info@anchorwebsolutions.com</a>
            {' '}and let us help you anchor your online success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
