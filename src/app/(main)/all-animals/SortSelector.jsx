'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const SortSelector = ({ currentSort }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSortChange = (e) => {
        const params = new URLSearchParams(searchParams.toString());

        if (e.target.value === 'default') {
            params.delete('sort');
        } else {
            params.set('sort', e.target.value);
        }

        router.push(`?${params.toString()}`, { scroll: false });
        router.refresh();
    };

    return (
        <div className="flex items-center gap-3">
            <label className="font-medium text-lg">Sort by Price:</label>
            <select
                className="select select-bordered w-60 text-base"
                value={currentSort}
                onChange={handleSortChange}
            >
                <option value="default">Default Order</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
            </select>
        </div>
    );
};

export default SortSelector;