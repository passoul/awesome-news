import { readable } from 'svelte/store';

// Menu links array
export const navLinks = readable([
    {href: 'recents-news' , label: 'Recents News'},
    {href: 'top-rated' , label: 'Top Rated'},
    {href: 'categories' , label: 'Categories'},
]);