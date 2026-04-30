/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {

    const m = grid.length;
    const n = grid[0].length;

    const visited = Array.from({ length: m }, () =>
        Array(n).fill(false)
    );

    const directions = [
        [0,1],
        [1,0],
        [0,-1],
        [-1,0]
    ];

    function dfs(r, c, pr, pc, char) {

        if (visited[r][c]) return true;

        visited[r][c] = true;

        for (let [dr, dc] of directions) {

            let nr = r + dr;
            let nc = c + dc;

            if (
                nr >= 0 &&
                nc >= 0 &&
                nr < m &&
                nc < n &&
                grid[nr][nc] === char
            ) {

                if (nr === pr && nc === pc)
                    continue;

                if (dfs(nr, nc, r, c, char))
                    return true;
            }
        }

        return false;
    }

    for (let i = 0; i < m; i++) {

        for (let j = 0; j < n; j++) {

            if (!visited[i][j]) {

                if (dfs(i, j, -1, -1, grid[i][j]))
                    return true;
            }
        }
    }

    return false;
};