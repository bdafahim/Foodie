class Meal {
    constructor(
        id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGlutinfree,
        isVegan,
        isVegetarian,
        isLactosefree
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutinfree = isGlutinfree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactosefree = isLactosefree;
    }
}

export default Meal;
