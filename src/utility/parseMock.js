function makeUserDataCall() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
    	return response.json();
    })
	  .catch(err => {
	  	throw Error('Something went wrong!');
	  	console.error(err);
	  });
}
function makeTitleCall() {
  return fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(response => {
    	return response.json();
    })
	  .catch(err => {
	  	throw Error('Something went wrong!');
	  	console.error(err);
	  });
}

export default {
	makeUserDataCall,
	makeTitleCall,
};