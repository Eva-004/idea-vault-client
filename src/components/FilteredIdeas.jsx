'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
const FilteredIdeas = () => {
    const ideaCategories = [
        { key: "ai", label: "Artificial Intelligence" },
        { key: "tech", label: "Technology" },
        { key: "health", label: "Health & Wellness" },
        { key: "education", label: "Education" },
        { key: "fintech", label: "FinTech" },
        { key: "ecommerce", label: "E-Commerce" },
        { key: "environment", label: "Environment & Sustainability" },
        { key: "transport", label: "Transportation" },
        { key: "social", label: "Social Impact" },
        { key: "entertainment", label: "Entertainment & Media" },
        { key: "productivity", label: "Productivity Tools" },
        { key: "security", label: "Cybersecurity" },
        { key: "agritech", label: "AgriTech" },
        { key: "iot", label: "IoT & Smart Devices" },
        { key: "others", label: "Others" }
    ];
    const router = useRouter();
    const searchParams = useSearchParams()
    const [selectedCategory, setSelectedCategory] = useState(
        searchParams.get('category') || ''
    );

    const handleFilter = (key) => {
        const value=String(key)
        setSelectedCategory(value);
        if (key === 'all') {
            router.push('/ideas')
        } else {
            router.push(`/ideas?category=${value}`);
        }
    }


    return (
        <div className="">
            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn font-bold m-1">Filter by Category ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 dark:bg-gray-800  rounded-box z-40 w-52 p-2 shadow-sm">
                    <li  onClick={() => handleFilter('all')}
                       className={selectedCategory === 'all' ? 'active bg-gradient-to-r from-pink-600 to-purple-600 text-white' : ''} > <a>All Category</a></li>
                    {
                        ideaCategories.map(category => <li key={category.key} onClick={() => handleFilter(category.key)} className={selectedCategory === category.key ? 'active bg-gradient-to-r from-pink-600 to-purple-600 text-white' : ''}>
                            <a >{category.label}</a>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default FilteredIdeas;