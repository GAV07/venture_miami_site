import React, { useEffect, useState } from 'react';
import ResourceCard from './ResourceCard';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import { resourcesData } from '../../pages/api/resourcesData';

const Resources = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterByCategory, setFilterByCategory] = useState(false);
    const [resources, setResources] = useState(resourcesData);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let categorySet = new Set();
        let categories = resources.reduce((acc, obj) => {
            if (!categorySet.has(obj.category)) {
                categorySet.add(obj.category);
                acc.push(obj.category);
            }
            return acc;
        }, []);

        categories.push('All');
        categories.sort((a, b) => (a < b ? -1 : 1));
        setCategories(categories);
    }, [resources]);

    let searchWords = searchQuery.split(' ');

    let filteredResources = resources.filter((obj) => {
        const properties = Object.values(obj);

        const uniqueObjects = new Set();

        properties.forEach((property) => {
            if (typeof property === 'string') {
                searchWords.forEach((word) => {
                    if (property.toLowerCase().includes(word.toLowerCase())) {
                        uniqueObjects.add(obj);
                    }
                });
            }
        });

        return uniqueObjects.size > 0;
    }).sort((a, b) => (a.title < b.title ? -1 : 1));;

    let filteredResourcesOnCategory = resources.filter(
        (obj) => obj.category === searchQuery
    ).sort((a, b) => (a.title < b.title ? -1 : 1));;

    return (
        <div className="pt-36">
            <h1 className="text-center mb-10 text-white font-bold text-[50px] ml-auto">
                Resource Library
            </h1>
            <div className="flex-col justify-center items-center w-4/5 m-auto flex space-y-6 mb-20  md:flex-row space-x-7 justify-center items-center">
                <SearchBar
                    handleSearch={setSearchQuery}
                    updateFilterMethod={(value) => {
                        setFilterByCategory(value);
                    }}
                />
                <Dropdown
                    categories={categories}
                    handleSearch={setSearchQuery}
                    updateFilterMethod={(value) => {
                        setFilterByCategory(value);
                    }}
                />
            </div>
            <div className="flex-col space-y-6">
                {filterByCategory ? (
                    filteredResourcesOnCategory.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                    ))
                ) : (
                    filteredResources.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Resources;
