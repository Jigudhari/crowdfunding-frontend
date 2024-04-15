export async function fetchHeader() {
    const url =`${import.meta.env.VITE_API_URL}/about/`;
    const response = await fetch(url);
    return await response.text();
}

export async function fetchFooter() {
    const url =`${import.meta.env.VITE_API_URL}/about/`;
    const response = await fetch(url);
    return await response.text();
}

export default fetchFooter;

