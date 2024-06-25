function validPath(n, edges, source, destination) {
    const list = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        list[u].push(v);
        list[v].push(u);
    }
    const visited = Array(n).fill(false);
    function dfs(node) {
        if (node === destination) return true;
        visited[node] = true;

        for (const neighbor of list[node]) {
            if (!visited[neighbor]) {
                if (dfs(neighbor)) return true;
            }
        }
        return false;
    }
    return dfs(source);
}



