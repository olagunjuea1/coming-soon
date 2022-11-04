function Herobody() {
  return (
    <section className="relative w-11/12 mx-auto z-50" id="HeroSection">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-y-0 md:gap-x-4 items-center py-10 md:py-0">
          <div className="relative" aria-labelledby="Hero Content">
            <div className="flex flex-col space-y-6">
              <div className="coming-soon-text">
                <span className="font-medium text-xl">Coming Soon</span>
              </div>
              <h1 className="font-extrabold text-5xl leading-tight tracking-wide font-WASSFONTBOLD">
                Get Notified <br />
                When we Launch
              </h1>
              <form>
                <div className="relative flex flex-row items-center gap-x-3 flex-wrap gap-y-3">
                  <div className="h-[3.6rem] p-[5px] bg-transparent border border-black rounded-full box-border flex items-center">
                    <button aria-label="Join Waitlist" className="bg-black text-white px-8 py-3 rounded-full whitespace-nowrap">
                      Join Watlist &#128521;
                    </button>
                  </div>
                  <div className="h-[3.6rem] p-[5px] bg-transparent border border-black rounded-full box-border flex items-center">
                    <button aria-label="Download Whitepaper" className="bg-black text-white px-8 py-3 rounded-full whitespace-nowrap">
                      Download Whitepaper &#128196;
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-sm text-gray-600">
                *Don't worry we will not spam you :)
              </p>
            </div>
          </div>
          <div
            className="w-full md:w-[620px] bg-transparent order-first md:order-last"
            aria-labelledby="Hero Image"
          >
            {/* Header Image */}
            <img
              src={
                process.env.PUBLIC_URL +
                "assets/Wasset Hero Image Illustration-2.png"
              }
              alt="Wasset Coming Soon"
              className="w-full object-contain h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herobody;
