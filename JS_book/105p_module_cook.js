const cook = {
    create: recipe => recipe.start()
}

const pasta = {
    start: () => console.log("pasta")
}

const steak = {
    start: () => console.log("steak")
}

cook.create(pasta)
cook.create(steak)
