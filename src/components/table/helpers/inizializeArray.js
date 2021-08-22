const initializeArrayTo = (length = 0) => {
	
	const array = [];

	for (let i = 0; i < length; i++) {
		array.push(i);
	}

	return array;
}

export default initializeArrayTo;