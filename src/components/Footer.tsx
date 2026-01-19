const Footer = () => {
  return (
    <div className="bg-main text-white py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-2">
          <div>
            <div className="mb-6">
              <div className="mb-1">Thursday Night Founders Club</div>
            </div>
          </div>

          <div className="text-right md:text-right">
            <div className="mb-4 text-gray-300 text-sm">
              <a
                href="/terms-conditions"
                className="underline hover:text-primary transition-colors"
              >
                Terms and conditions, cookie policy and privacy policy
              </a>
            </div>

            <div className="text-gray-300 text-sm">
              © Thursday Night Founders Club 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
