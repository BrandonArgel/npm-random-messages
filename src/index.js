const messages = ["Brandon", "Sophia", "Dianna", "David", "Fischer", "Paulina", "Jonathan"];

const randomMessages = () => {
	const message = Math.floor(Math.random() * messages.length);
	console.log(messages[message]);
	return messages[message];
};

module.exports = { randomMessages };
