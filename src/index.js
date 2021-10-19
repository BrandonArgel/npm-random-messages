const messages = ["Brandon", "Sophia", "Dianna", "David", "Fischer", "Paulina", "Jonathan"];

const randomMessage = () => {
	const message = Math.floor(Math.random() * messages.length);
	console.log(messages[message]);
	return messages[message];
};

module.exports = { randomMessage };
