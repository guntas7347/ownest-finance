import React from "react";

const PARTNERS = [
    { name: "Commonwealth Bank", logo: "https://www.commbank.com.au/content/dam/commbank/commBank-logo.svg" },
    { name: "Reserve Bank of Australia", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Reserve_Bank_of_Australia_logo.svg/1920px-Reserve_Bank_of_Australia_logo.svg.png" },
    { name: "AMP Limited", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/AMP_Limited_%28logo%29.svg/1920px-AMP_Limited_%28logo%29.svg.png" },
    // Duplicating to ensure enough content for scrolling
    { name: "Westpac", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Westpac_logo.svg/500px-Westpac_logo.svg.png" },
    { name: "ANZ", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/ANZ-brand.svg/1920px-ANZ-brand.svg.png" },
    { name: "NAB", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/National_Australia_Bank.svg/1920px-National_Australia_Bank.svg.png" },
];

export default function Partners() {
    return (
        <section className="py-12 border-y border-brown/5 dark:border-white/5 bg-white/30 dark:bg-white/5 overflow-hidden transition-colors">
            <div className="max-w-[100vw] mx-auto px-6 overflow-hidden">
                {/* <p className="text-center text-brown/40 dark:text-white/40 font-bold text-xs uppercase tracking-[0.3em] mb-10">
                    Strategic Global Partners
                </p> */}

                <div className="relative w-full overflow-hidden pause-on-hover">
                    <div className="flex gap-16 w-max animate-scroll">
                        {/* Duplicate the array twice for seamless loop */}
                        {[...PARTNERS, ...PARTNERS].map((partner, index) => (
                            <img
                                key={index}
                                className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity dark:invert"
                                src={partner.logo}
                                alt={partner.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
