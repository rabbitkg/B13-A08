export async function getAnimals() {
    const res = await fetch(
        "http://localhost:3000/animel.json",
    );
    const data = await res.json();
    return data;
}
export async function getFeaturedAnimals() {
    const res = await fetch(
        "http://localhost:3000/featuredAnimals.json",
    );
    const data = await res.json();
    return data;
}