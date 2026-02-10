import LoanCard from "@/Components/LoanCard";

export default function Home() {
  return (
    <>
      <>
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Fullscreen Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover -z-20"
            src="/bird-a.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/ownest-t.png"
          >
            <img
              src="/ownest-t.png"
              alt="3D liquid glass bird in flight"
              className="w-full h-full object-cover"
            />
          </video>

          {/* Video overlay for readability */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] -z-10" />

          {/* Abstract accents */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/50 to-transparent -z-10" />
          <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />

          {/* Foreground content */}
          {/* Foreground content */}
          <div className="relative z-10 pt-32 pb-20 min-h-screen flex items-center">
            {/* Left Text */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wide">
                  TRUSTED ASSET LENDING
                </div>

                <h1 className="text-6xl md:text-8xl font-extrabold text-brown leading-none tracking-tighter">
                  Finance <br />
                  Your <span className="text-primary italic">Future</span>
                </h1>

                <p className="text-xl text-brown/70 max-w-lg leading-relaxed">
                  Bespoke financial architecture for high-net-worth individuals.
                  Experience the seamless synergy of liquid-glass aesthetics and
                  solid financial growth.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="bg-primary text-white font-bold py-4 px-10 rounded-xl shadow-xl shadow-orange-500/30 hover:-translate-y-1 transition-transform">
                    Start Application
                  </button>

                  <button className="bg-white/50 backdrop-blur-md border border-white text-brown font-bold py-4 px-10 rounded-xl hover:bg-white transition-all">
                    View Products
                  </button>
                </div>
              </div>
            </div>

            {/* Rotating Cards Right Side */}
            <div className="hidden absolute md:block right-24 top-1/2 -translate-y-1/2 w-[420px] h-[420px]">
              <div className="relative w-full h-full animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <LoanCard />
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <LoanCard />
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <LoanCard />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <div className="space-y-1">
                <h2 className="text-3xl font-extrabold text-brown tracking-tight">
                  Market Rates
                </h2>
                <p className="text-brown/50 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live Financial Indices
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              <div className="lg:col-span-1 glass-card p-5 rounded-3xl shadow-lg border-white transition-all hover:shadow-2xl hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest">
                    Home Loan
                  </p>
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[8px] font-bold uppercase border border-primary/20">
                    Low Rate
                  </span>
                </div>
                <div className="mb-2">
                  <p className="text-3xl font-black text-brown">5.24%</p>
                  <p className="text-[10px] font-bold text-brown/40">
                    p.a. Fixed
                  </p>
                </div>
              </div>
              <div className="lg:col-span-1 glass-card p-5 rounded-3xl shadow-lg border-white transition-all hover:shadow-2xl hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest">
                    Asset Finance
                  </p>
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[8px] font-bold uppercase border border-primary/20">
                    Low Rate
                  </span>
                </div>
                <div className="mb-2">
                  <p className="text-3xl font-black text-brown">6.85%</p>
                  <p className="text-[10px] font-bold text-brown/40">
                    p.a. Indicative
                  </p>
                </div>
              </div>
              <div className="lg:col-span-1 glass-card p-5 rounded-3xl shadow-lg border-white transition-all hover:shadow-2xl hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest">
                    Personal Loan
                  </p>
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[8px] font-bold uppercase border border-primary/20">
                    Low Rate
                  </span>
                </div>
                <div className="mb-2">
                  <p className="text-3xl font-black text-brown">8.10%</p>
                  <p className="text-[10px] font-bold text-brown/40">
                    p.a. Variable
                  </p>
                </div>
              </div>
              <div className="lg:col-span-1 glass-card p-5 rounded-3xl shadow-lg border-white transition-all hover:shadow-2xl hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] font-black text-brown/60 uppercase tracking-widest">
                    AUD / USD
                  </p>
                  <span className="material-symbols-outlined text-green-500 text-lg font-bold">
                    trending_up
                  </span>
                </div>
                <div className="mb-4">
                  <p className="text-2xl font-black text-brown">0.6582</p>
                </div>
                <div className="w-full h-8">
                  <svg
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 20"
                  >
                    <path
                      d="M0 15 Q 10 5, 20 12 T 40 8 T 60 14 T 80 5 T 100 10"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
              </div>
              <div className="lg:col-span-1 glass-card p-5 rounded-3xl shadow-lg border-white transition-all hover:shadow-2xl hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] font-black text-brown/60 uppercase tracking-widest">
                    AUD / GBP
                  </p>
                  <span className="material-symbols-outlined text-red-500 text-lg font-bold">
                    trending_down
                  </span>
                </div>
                <div className="mb-4">
                  <p className="text-2xl font-black text-brown">0.5124</p>
                </div>
                <div className="w-full h-8">
                  <svg
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 20"
                  >
                    <path
                      d="M0 5 Q 10 15, 20 8 T 40 18 T 60 10 T 80 15 T 100 20"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
              </div>
              <div className="lg:col-span-1 glass-card p-5 rounded-3xl shadow-lg border-white transition-all hover:shadow-2xl hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] font-black text-brown/60 uppercase tracking-widest">
                    AUD / EUR
                  </p>
                  <span className="material-symbols-outlined text-green-500 text-lg font-bold">
                    trending_up
                  </span>
                </div>
                <div className="mb-4">
                  <p className="text-2xl font-black text-brown">0.6041</p>
                </div>
                <div className="w-full h-8">
                  <svg
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 20"
                  >
                    <path
                      d="M0 18 Q 20 2, 40 10 T 70 5 T 100 12"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Marquee */}
        <section className="py-12 border-y border-brown/5 bg-white/30 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-brown/40 font-bold text-xs uppercase tracking-[0.3em] mb-10">
              Strategic Global Partners
            </p>
            <div className="flex flex-nowrap items-center justify-between gap-12 hover:opacity-80 transition-opacity overflow-x-auto hide-scrollbar">
              <img
                className="h-20 shrink-0"
                src="https://www.commbank.com.au/content/dam/commbank/commBank-logo.svg"
              />
              <img
                className="h-20 shrink-0"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Reserve_Bank_of_Australia_logo.svg/1920px-Reserve_Bank_of_Australia_logo.svg.png"
              />
              <img
                className="h-20 shrink-0"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/AMP_Limited_%28logo%29.svg/1920px-AMP_Limited_%28logo%29.svg.png"
              />
            </div>
          </div>
        </section>
        {/* Calculator Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-6">
                <h2 className="text-5xl font-extrabold text-brown tracking-tight">
                  Precision Wealth <br />
                  Planning.
                </h2>
                <p className="text-lg text-brown/60">
                  Our intelligent calculator provides immediate clarity on your
                  borrowing capacity, tailored to modern asset valuation.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3 text-brown font-semibold">
                    <span className="material-icons-round text-primary">
                      check_circle
                    </span>
                    Real-time interest rate sync
                  </li>
                  <li className="flex items-center gap-3 text-brown font-semibold">
                    <span className="material-icons-round text-primary">
                      check_circle
                    </span>
                    No hidden processing fees
                  </li>
                  <li className="flex items-center gap-3 text-brown font-semibold">
                    <span className="material-icons-round text-primary">
                      check_circle
                    </span>
                    Customizable repayment structures
                  </li>
                </ul>
              </div>
              <div className="glass-card p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
                <div className="space-y-10">
                  {/* Loan Amount */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <label className="text-sm font-bold text-brown/60 uppercase">
                        Loan Amount
                      </label>
                      <span className="text-3xl font-black text-brown">
                        $500,000
                      </span>
                    </div>
                    <input
                      className="w-full h-2 bg-brown/10 rounded-full appearance-none slider-thumb cursor-pointer"
                      max={2000000}
                      min={10000}
                      step={10000}
                      type="range"
                      defaultValue={500000}
                    />
                  </div>
                  {/* Duration */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <label className="text-sm font-bold text-brown/60 uppercase">
                        Loan Term
                      </label>
                      <span className="text-3xl font-black text-brown">
                        15 Years
                      </span>
                    </div>
                    <input
                      className="w-full h-2 bg-brown/10 rounded-full appearance-none slider-thumb cursor-pointer"
                      max={30}
                      min={1}
                      step={1}
                      type="range"
                      defaultValue={15}
                    />
                  </div>
                  {/* Result Display */}
                  <div className="bg-primary-dark/5 p-8 rounded-2xl border border-brown/5 space-y-2">
                    <p className="text-center text-sm font-bold text-brown/60 uppercase">
                      Estimated Monthly Payment
                    </p>
                    <p className="text-center text-5xl font-black text-primary">
                      $3,420.50
                    </p>
                    <p className="text-center text-xs text-brown/40 pt-4 italic">
                      Based on indicative rate of 4.25% p.a.
                    </p>
                  </div>
                  <button className="w-full bg-primary text-white font-bold py-5 rounded-xl text-lg hover:shadow-2xl hover:shadow-orange-500/40 transition-all">
                    Check Eligibility Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Client Reviews Section */}
        <section className="py-24 bg-brown/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <div className="space-y-4">
                <h2 className="text-5xl font-extrabold text-brown">
                  Shared Success.
                </h2>
                <p className="text-xl text-brown/60">
                  Voices from our global community of investors.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-brown/10 flex items-center justify-center hover:bg-white transition-all text-brown">
                  <span className="material-icons-round">west</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-brown/10 flex items-center justify-center hover:bg-white transition-all text-brown">
                  <span className="material-icons-round">east</span>
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="glass-card p-8 rounded-2xl border border-white/50 hover:-translate-y-2 transition-transform duration-500">
                <div className="flex gap-1 mb-6">
                  <span className="material-icons-round text-primary text-sm">
                    star
                  </span>
                  <span className="material-icons-round text-primary text-sm">
                    star
                  </span>
                  <span className="material-icons-round text-primary text-sm">
                    star
                  </span>
                  <span className="material-icons-round text-primary text-sm">
                    star
                  </span>
                  <span className="material-icons-round text-primary text-sm">
                    star
                  </span>
                </div>
                <p className="text-lg text-brown leading-relaxed mb-8 italic">
                  "The liquid-glass interface is just the surface. Their actual
                  financial expertise helped me secure a $2M asset loan in
                  record time."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover grayscale"
                    data-alt="Professional headshot of a business executive"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdtu8fpdbh0ahzbaOCQpkik2pYOY7w7ql5L3YkJNypW3gVYGs_i0WLKUMpsSy-FjgTxRi5PMtb7yqDym5rP7Ar9ICeQmJX5S6xyXXwDxPxChnXGOyp7bLV2zTLQYJJK00rNylk_6dLe7vzqsZk6xjO-QzBh1a5wyR2pTa7RykBYk_KYouCEtYabozt-LDhuU2NrY7Iz8FjywwFBOU_5bVY7RUxuFAPgsN-5QwXA-w4YkZG7CLH6ZwrD4WndqqtZu3Aoiy4lsKUMtRX"
                  />
                  <div>
                    <p className="font-bold text-brown">Marcus Chen</p>
                    <p className="text-xs text-brown/50 uppercase font-bold tracking-wider">
                      Property Developer
                    </p>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="glass-card p-8 rounded-2xl border border-white/50 hover:-translate-y-2 transition-transform duration-500 bg-white/60">
                <div className="flex gap-1 mb-6">
                  <span className="material-icons-round text-primary text-sm">
                    star
                  </span>
                  <span className="material-icons-round text-primary text-sm">
                    star
                  </span>
                  <span className="material-icons-round text-primary text-sm">
                    star
                  </span>
                  <span className="material-icons-round text-primary text-sm">
                    star
                  </span>
                  <span className="material-icons-round text-primary text-sm">
                    star
                  </span>
                </div>
                <p className="text-lg text-brown leading-relaxed mb-8 italic">
                  "Smooth, transparent, and remarkably high-end. Ownest doesn't
                  just provide loans; they build long-term partnerships."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover grayscale"
                    data-alt="Portrait of a smiling professional woman"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvbcy8B5mEUao7l7_5qYiwx84toZryprW7x61vV7dPqF21ovQwuXXOBUf-X1COrusMGJga3Bfyf_WqJbma7-oAdwLg5oPOplsi1FmhNzKe1j_yRkWw_0sFFs-RPEcV_EkmBdj3dEvHBHxxIE4s3V3MyuJAsGvX3t_esR2fhqG8Y55SFfyLkZJsFjfMoTcIs7B8bHAucrfup6U34sEuHCjwYUth1_1EO5qgGaoWKYkNeth1LOPrSXCx5M85UNCH0OLUoSoCDIEV05Uq"
                  />
                  <div>
                    <p className="font-bold text-brown">Elena Rodriguez</p>
                    <p className="text-xs text-brown/50 uppercase font-bold tracking-wider">
                      Tech Entrepreneur
                    </p>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="glass-card p-8 rounded-2xl border border-white/50 hover:-translate-y-2 transition-transform duration-500">
                <div className="flex gap-1 mb-6">
                  <span className="material-icons-round text-primary text-sm">
                    star
                  </span>
                  <span className="material-icons-round text-primary text-sm">
                    star
                  </span>
                  <span className="material-icons-round text-primary text-sm">
                    star
                  </span>
                  <span className="material-icons-round text-primary text-sm">
                    star
                  </span>
                  <span className="material-icons-round text-primary text-sm">
                    star
                  </span>
                </div>
                <p className="text-lg text-brown leading-relaxed mb-8 italic">
                  "The best asset financing experience I've had in 20 years of
                  investing. The calculator was pinpoint accurate."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover grayscale"
                    data-alt="Portrait of a mature businessman"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAETLbYJNaM1jFm090NW158yXuRzxMQUheSTv-p4DhpEh5CbkQuwtqdMbTn6TPF6BypvpRS_UOrMKNJPGAq0YnuRmyq2pwnw4xToAOanlnOGvVNSgfWZ27iVi2kawuv4Xvnu59auVrmKOmL9ajWNqhIlPRbahmrQSDVzekSK306dSbryvw_tXMcNWypN0_vPgKpkT-1wIM7FuSFBA7kQL8ZLJMRdeW1v2634IHOpfeuifVZbJQPrCRX0ahHaQUFtRt8BPUYS6lfiMZZ"
                  />
                  <div>
                    <p className="font-bold text-brown">David Sterling</p>
                    <p className="text-xs text-brown/50 uppercase font-bold tracking-wider">
                      Capital Investor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="py-24 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-extrabold text-brown">
              Clear Answers.
            </h2>
            <p className="text-xl text-brown/60">
              Everything you need to know about our premium lending.
            </p>
          </div>
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="group">
              <div className="p-6 rounded-2xl bg-white border border-brown/5 hover:border-primary/20 transition-all cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-brown">
                    What are the eligibility requirements for an asset loan?
                  </h3>
                  <span className="material-icons-round text-primary group-hover:rotate-180 transition-transform">
                    expand_more
                  </span>
                </div>
                <div className="mt-4 text-brown/70 leading-relaxed overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300">
                  Our asset loans are available to individuals with verifiable
                  luxury assets or real estate portfolios. Minimum asset
                  valuation usually starts at $500,000 for standard
                  applications.
                </div>
              </div>
            </div>
            {/* FAQ 2 */}
            <div className="group">
              <div className="p-6 rounded-2xl bg-white border border-brown/5 hover:border-primary/20 transition-all cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-brown">
                    How long does the consultation process take?
                  </h3>
                  <span className="material-icons-round text-primary group-hover:rotate-180 transition-transform">
                    expand_more
                  </span>
                </div>
                <div className="mt-4 text-brown/70 leading-relaxed overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300">
                  Initial consultations typically take 30-45 minutes. We aim to
                  provide an indicative approval within 24-48 hours of document
                  submission.
                </div>
              </div>
            </div>
            {/* FAQ 3 */}
            <div className="group">
              <div className="p-6 rounded-2xl bg-white border border-brown/5 hover:border-primary/20 transition-all cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-brown">
                    Are there early repayment penalties?
                  </h3>
                  <span className="material-icons-round text-primary group-hover:rotate-180 transition-transform">
                    expand_more
                  </span>
                </div>
                <div className="mt-4 text-brown/70 leading-relaxed overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300">
                  We pride ourselves on flexibility. Most of our high-end
                  products allow for partial or full early repayments without
                  traditional penalty structures.
                </div>
              </div>
            </div>
            {/* FAQ 4 */}
            <div className="group">
              <div className="p-6 rounded-2xl bg-white border border-brown/5 hover:border-primary/20 transition-all cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-brown">
                    What is the "Liquid Glass" approach?
                  </h3>
                  <span className="material-icons-round text-primary group-hover:rotate-180 transition-transform">
                    expand_more
                  </span>
                </div>
                <div className="mt-4 text-brown/70 leading-relaxed overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300">
                  It's our philosophy of transparency (Glass) and flexibility
                  (Liquid). We provide clear financial visibility while adapting
                  our structures to your evolving needs.
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
