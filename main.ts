scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath2, function (sprite, location) {
    mySprite.setVelocity(0, vel * -1)
    console.log("bund")
    console.log(vel)
})
let vel = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . 3 3 3 
    . . . . . . 3 3 3 3 3 3 3 . . . 
    . . . . 3 3 . . . . . . . . . . 
    . . . 3 . . . 3 3 3 3 . . . . . 
    . . . . . 3 3 . . . 3 . . . . . 
    . . . . 3 . . 3 . 3 . . . . . . 
    . . 3 3 . 3 3 . 3 . . 3 3 3 . . 
    . 3 . . 3 . . 3 . . 3 . 3 . . . 
    3 3 3 3 . . 3 . 3 3 3 3 . . . . 
    3 . . . . . 3 3 3 3 3 . . . . . 
    . . . . . . 3 3 . 3 . . . . . . 
    . . . . 3 3 . . . . 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 14))
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
controller.moveSprite(mySprite, 100, controller.dx())
vel = -15
mySprite.setVelocity(0, vel)
let timer = 0
forever(function () {
    timer += 1
    if (timer > 2) {
        mySprite.setVelocity(0, vel * -1)
        console.log(vel)
        timer = 0
    }
    pause(1000)
})
