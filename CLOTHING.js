function getClothingRecommendation(temp) {
    if (temp < 10) {
        return "Wear a heavy coat";
    } else if (temp >= 10 && temp <= 20) {
        return "Wear a jacket";
    } else {
        return "Wear a t-shirt";
    }
}


console.log(getClothingRecommendation(5));  // Output: Wear a heavy coat
console.log(getClothingRecommendation(15)); // Output: Wear a jacket
console.log(getClothingRecommendation(25)); // Output: Wear a t-shirt