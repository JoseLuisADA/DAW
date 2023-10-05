//APARTADO 1

function getVoteCount(votes) {
	
    return votes.upvotes - votes.downvotes;

}

//APARTADO 2

function volumeOfBox(sizes) {
    return sizes.length * sizes.width * sizes.height;
	
}

//APARTADO 3


const user = { name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"}
const str = `({ name, email, ...rest} = user ).toString()`



