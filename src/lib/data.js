import animals from "../../public/animel.json";
import featuredAnimals from "../../public/featuredAnimals.json";
import topBreads from "../../public/topBreads.json";

export async function getAnimals() {
    return animals;
}

export async function getAnimalsDetailsId(id) {
    return animals.find(item => item.id == Number(id));
}

export async function getFeaturedAnimals() {
    return featuredAnimals;
}

export async function getTopBreads() {
    return topBreads;
}