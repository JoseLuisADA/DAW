function getVoteCount(votes) {
	
    return votes.upvotes - votes.downvotes;

}

function volumeOfBox(sizes) {
    return sizes.length * sizes.width * sizes.height;
	
}


const user = { name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"}
const str = `({ name, email, ...rest} = user ).toString()`



