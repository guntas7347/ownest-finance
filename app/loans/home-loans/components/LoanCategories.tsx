import { CheckCircle } from "lucide-react";

export default function LoanCategories() {
    const categories = [
        {
            id: "first-home-buyers",
            title: "First Home Buyers",
            subtitle: "Tailored Solutions",
            description:
                "Stepping into the property market should be a celebration, not a stress. We provide the guidance and low-deposit options you need to secure your first sanctuary.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCQK3jpBQse0l2rh1QTrvRqnOJ_bjv1yyme_LgyM-m0ofXrFyrP9Q8xJc7a1a3BQnuZpugnU3Y76tXTPrVoUxGipr7qs1nIZc2QnM2UYBQVxdw6Wk9GLSJ46q3gyIvAzkhTPnE0hDLgmi8hAvE2UgTfORTSvpoMWaaMMauaN5h2c8P2Xj6PNXgBjg2R1b8d-HthvbulgTRAjjyUYDOzTex9UMSq3wQF8k8VEfOD8FzGJlGZO9k1SWk8DrAtNVXzP1VeF1QbmgCi4FCI",
            alt: "First home buyers",
            benefits: ["5% Deposit schemes available", "Expert grant assistance"],
            buttonText: "Learn More",
            reverse: false,
        },
        {
            id: "investment-loans",
            title: "Investment Loans",
            subtitle: "Wealth Growth",
            description:
                "Maximize your portfolio's potential with interest-only options and tax-effective lending strategies designed for sophisticated investors.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuD3qBsXYdoAN8GprMPdIdWJBQ5c6-zU_Yix1UuX5OJVrN9PZLoXOTnv2VXn1fTKO236WCit4-d6T44j7TaYpDr4sV5Ds2Xa0sa7kAEevUvMSZ4rpH8pMh2Ma8Bs4GWWLdimNOWL52x7LA5-YtyJCL4RduB6B9Xf-J-a1hoV8TpIQWTk1ikKJh9fQ43SAwyLJzAfh0vGYWTXq7GM3rE_71g4Mz87Ook8JHLGmZkle8cSxQh9TJnXx53vkQWWI1bu--K9XuCxludu5l8H",
            alt: "Investment property",
            benefits: [
                "Portfolio review & optimization",
                "Competitive equity access",
            ],
            buttonText: "Investor Solutions",
            reverse: true,
        },
        {
            id: "construction-loans",
            title: "Construction Loans",
            subtitle: "Build Your Vision",
            description:
                "Finance your build in stages. Our construction loans offer interest-only payments during the build phase to keep your costs manageable.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDdKuJ_vcKKYUj-V_1MI40cIu2VAYI3jrgi48EGdqpBtJW6gGjy-v00kZRFhW526Iy7Q4G_BAHjIQduFOOrJu1Ccy17pL8lMPfdefiPsrUdbujjO83uCAPVcwadOnGR5EJqDdqEZ0vWy2kFecdUVZghtZu-Z5TJSYiiDUz0RifqYTNRePdrzfs2kt4LnVZzr2nRflTSZR6RbuyVSF_9t0OdbsyAcj9GswcX4eP1aKk00BtDTErNEI_6a9u-sBXVUzOXZZCri5f5fjjd",
            alt: "Construction site",
            benefits: ["Progress payment management", "Simple drawdown process"],
            buttonText: "Start Building",
            reverse: false,
        },
    ];

    return (
        <section className="py-24 bg-primary/5">
            <div className="max-w-7xl mx-auto px-6">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 last:mb-0 ${category.reverse ? "lg:flex-row-reverse" : ""
                            }`}
                    >
                        <div className={category.reverse ? "lg:order-2" : ""}>
                            <img
                                src={category.image}
                                alt={category.alt}
                                className="rounded-xl shadow-2xl w-full"
                            />
                        </div>
                        <div className={category.reverse ? "lg:order-1" : ""}>
                            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
                                {category.subtitle}
                            </span>
                            <h2 className="text-4xl font-extrabold text-primary-dark dark:text-white mb-6">
                                {category.title}
                            </h2>
                            <p className="text-lg text-primary-dark/80 dark:text-white/80 mb-8 leading-relaxed">
                                {category.description}
                            </p>
                            <ul className="space-y-4 mb-8">
                                {category.benefits.map((benefit, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-3 font-semibold text-primary-dark dark:text-white"
                                    >
                                        <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded transition-all">
                                {category.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
