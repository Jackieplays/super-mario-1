function createIndexLayer(font, tileCollider) {
    const tiles = tileCollider.tiles.matrix;
    const tileSize = tileCollider.tiles.tileSize;

    return function drawIndex(context, camera) {
        tiles.forEach((value, x, y) => {
            const tileIsOnScreen = camera.pos.x + camera.size.x > x * tileSize &&
                                    camera.pos.x <= (x + 1) * tileSize &&
                                    camera.pos.y + camera.size.y > (y - 1) * tileSize &&
                                    camera.pos.y <= (y + 1) * tileSize;
            
            const startTile = x * tileSize < 15;
            if (tileIsOnScreen && y === 13 && x % 5 === 0) {
                font.print(
                    x.toString(),
                    context,
                    x * tileSize - camera.pos.x,
                    y * tileSize - camera.pos.y
                );
            } else if (x === 0 && y % 5 === 0) {
                font.print(
                    y.toString().padStart(2, ' '),
                    context,
                    x * tileSize,
                    y * tileSize - camera.pos.y
                );
            }
        });
    };
}

function createTileLayer(tileCollider) {
    const tiles = tileCollider.tiles.matrix;
    const tileSize = tileCollider.tiles.tileSize;

    return function drawTileCandidates(context, camera) {
        context.strokeStyle = 'green';
        tiles.forEach((value, x, y) => {
            context.beginPath();
            context.rect(
                x * tileSize - camera.pos.x,
                y * tileSize - camera.pos.y,
                tileSize, tileSize);
            context.stroke();
        });
    }
}

export function createTileIndexLayer(level, font) {

    const drawTileLayer = createTileLayer(level.tileCollider);
    const drawIndexLayer = createIndexLayer(font, level.tileCollider);

    return function drawTileIndex(context, camera) {
        drawTileLayer(context, camera);
        drawIndexLayer(context, camera);
    };
}
