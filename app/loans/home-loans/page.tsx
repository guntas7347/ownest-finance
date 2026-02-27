import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import LoanCategories from "./components/LoanCategories";
import EligibilityForm from "./components/EligibilityForm";
import Calculator from "./components/Calculator";

export default function HomeLoans() {
    return (
        <main className="bg-background-light dark:bg-background-dark text-primary-dark dark:text-white min-h-screen">
            <Hero />
            <Calculator />
            <KeyFeatures />
            <LoanCategories />
            <EligibilityForm />
        </main>
    );
}
