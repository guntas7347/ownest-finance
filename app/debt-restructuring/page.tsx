import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Process from "./components/Process";
import CTA from "./components/CTA";

export default function DebtRestructuring() {
    return (
        <main className="bg-background-light dark:bg-background-dark text-stone-800 dark:text-stone-100 min-h-screen">
            <Hero />
            <Benefits />
            <Process />
            <CTA />
        </main>
    );
}
