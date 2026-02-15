"use client";

import React from "react";
import Card from "@/Components/Card";
import { Car, Ship, Factory, Circle } from "lucide-react";

const ASSET_TYPES = [
    {
        title: "Luxury Vehicles",
        description:
            "From rare collectibles and vintage restorations to modern supercars and high-end luxury fleets.",
        icon: Car,
        listItems: [
            "Exotic Car Financing",
            "Classic Car Acquisitions",
            "Executive Fleet Leasing",
        ],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo5EcMrTGzSJDgY3D-sFIVDsT7XrfkP3XIa2HNIBHXsE8NvU5pNDa1U57apLT59E5TKcH9OwpNrQ-ZnQHoSNEGUvWyz93GU3B-UvUC-shW8tqhipR843XETjgXr1uutwczbzbzb8jnBwj85bQxQsKRinToAqWsA7yVOLkQ3JB9WB1zu1UfPoXnLviJJ-fVx50J0o_u7i52TOgqHG_AV8njDVvvgW-FXf6q0qNTkeLdZmqHxg_5E-GuEZpPuCJp_kv3-3R3erwxPAgwfU",
        alt: "Silver luxury sports car parked in modern garage",
    },
    {
        title: "Marine Vessels",
        description:
            "Bespoke financial structures for private leisure yachts, luxury catamarans, and specialized commercial vessels.",
        icon: Ship,
        listItems: [
            "Private Yacht Loans",
            "Refit & Overhaul Finance",
            "Commercial Marine Leasing",
        ],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBicDtrb93eCs_PhpSKjVRC0NXncgVWij5KvrplZeg0hprBhTjqEb_TCs-APoTBiUXtitrlRNdtSHvCCb6GMOXzJ_6n9TDa8Q86s7bml8OwiLU2yPbvpXiCBVsUYGu8BVIPPCWEI4HHgkumjAmYm705xhkXeOlLqgkexGzyM4Ei3_IR9bHbGVw-aTF0bWCxA7DVoL8vefHswiatoKa-BsbM-qhD1AT_Xf1w9glsEoMgUw741aO-HPMqdNnOkcu2HuM9IF2HPJfGbxIG",
        alt: "Luxury white yacht cruising on calm blue water",
    },
    {
        title: "Industrial Assets",
        description:
            "Strategic funding for high-value industrial equipment, medical technology, and specialized manufacturing lines.",
        icon: Factory,
        listItems: [
            "Precision Machinery Finance",
            "MedTech Acquisition",
            "Production Line Expansion",
        ],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7gSUK0b6bziuAPZntr13E2ZAUyaX-vzl9mpk9o90saWl7mTaPx4WqgY1mgjaMHajfjTJ3RkTVJfPgOVZLUDLxOXpuaEDNqELo5VlY193kmr3kUrIpKDMwEIhRbXBizeO58buBD2oku-s4oFP9sbQIsHdsP9UOXSy1CGUKwE8KF6aA-IuK4LWO_m4VPkfHgSg7IZrL9k1NsDB7J6DCZfZvMTtfVNSlglu4u_0BPIgBIcSnfYq7COCeUPt2YxvWxt7TZiC5LUZNVV-l",
        alt: "High tech industrial robotics in clean facility",
    },
];

export default function AssetBreakdown() {
    return (
        <section className="py-24 container max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ASSET_TYPES.map((asset, index) => (
                    <Card
                        key={index}
                        variant="glass"
                        className="p-8 group hover:-translate-y-2 transition-transform duration-500"
                    >
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                            <asset.icon className="text-primary w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-brown">
                            {asset.title}
                        </h3>
                        <p className="text-brown/60 dark:text-white/60 leading-relaxed mb-6">
                            {asset.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                            {asset.listItems.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2 text-sm font-medium text-brown/80 dark:text-white/80"
                                >
                                    <Circle className="text-primary w-2 h-2 fill-primary" />{" "}
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <img
                            className="w-full h-48 object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                            alt={asset.alt}
                            src={asset.image}
                        />
                    </Card>
                ))}
            </div>
        </section>
    );
}
