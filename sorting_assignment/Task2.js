const readline = require("readline-sync"); 

function main() {
    let input = readline.question("Enter n (posts) and m (updates): ").split(" ");
    let n = parseInt(input[0]); // Number of posts
    let m = parseInt(input[1]); // Number of updates

    let likes = readline.question("Enter initial likes: ").split(" ").map(Number); // Read initial likes

    for (let i = 0; i < m; i++) {
        let query = readline.question(`Enter update ${i + 1} (post_no like_increase): `).split(" ");
        let post_no = parseInt(query[0]);
        let like_increase = parseInt(query[1]);

        likes[post_no - 1] += like_increase; // Update likes (1-based index)

        // Find post with max likes
        let maxLikes = Math.max(...likes);
        let bestPost = likes.findIndex(like => like === maxLikes) + 1; // Find first post with max likes

        console.log(`${bestPost} ${maxLikes}`);
    }
}


main();
