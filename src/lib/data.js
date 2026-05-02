export async function getAnimals() {
    const res = await fetch(
        "http://localhost:3000/animel.json",{
            cache: "no-store"
        }
    );
    const data = await res.json();
    return data;
}

export async function getAnimalsDetailsId(id) {
    const res = await fetch(`http://localhost:3000/animel.json`, {
        cache: "no-store"
    });
    const data = await res.json();

    return data.find(item => item.id == Number(id));
}





export async function getFeaturedAnimals() {
    const res = await fetch(
        "http://localhost:3000/featuredAnimals.json",
    );
    const data = await res.json();
    return data;
}
export async function getTopBreads() {
    const res = await fetch(
        "http://localhost:3000/topBreads.json",
    );
    const data = await res.json();
    return data;
}