function isValid(x, y) {
    return x >= 0 && y >= 0 && x < 8 && y < 8;
}

function knightMoves(start, end) {
    const directions = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    const queue = [[start, [start]]];
    const visited = new Set([start.toString()]);
    
    while (queue.length > 0) {
        const [curr, path] = queue.shift();

        if (curr[0] === end[0] && curr[1] === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            path.forEach(pos => console.log(pos));
            return;
        }

        for (const [dx, dy] of directions) {
            const [nextX, nextY] = [curr[0] + dx, curr[1] + dy];

            if (isValid(nextX, nextY)) {
                const next = [nextX, nextY];
                if (!visited.has(next.toString())) {
                    visited.add(next.toString());
                    queue.push([next, path.concat([next])]);
                }
            }
        }
    }
}

knightMoves([3,3],[4,3]);