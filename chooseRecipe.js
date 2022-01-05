const chooseRecipe = function(BakeryA, BakeryB, recipes){
    var name;
    
    for(let i = 0; i < recipes.length; i++){
        for(let j =0; j < recipes[i].ingredients.length; j++){
           if(BakeryA.includes(recipes[i].ingredients[j]) || BakeryB.includes(recipes[i].ingredients[j])){
                 recipes[i].ingredients[j] = true;

            } else {
                recipes[i].ingredients[j] = false;
                break;
            }
        }

        if(!recipes[i].ingredients.includes(false)){
            name = recipes[i].name;
        }
    }

    return name;

}

let bakeryA = ['saffron', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

