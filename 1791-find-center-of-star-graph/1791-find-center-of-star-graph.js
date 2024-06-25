/**
 * @param {number[][]} edges
 * @return {number}
 */
 let findCenter = function(edges) {
    const [u1, v1] = edges[0];
    const [u2, v2] = edges[1];
        if (u1 === u2 || u1 === v2) {
        return u1;
    } else {
        return v1;
    }
    
};

