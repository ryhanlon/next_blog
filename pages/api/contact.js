function handler(req, res) {
	if (req.method === 'POST') {
		const {email, name, message} = req.body;

		if (
			!email ||
			!email.includes('@') ||
			!name ||
			!name.trim() === '' ||
			!message ||
			!message.trim() === ''
		) {
			res.status(422).json({message: 'Invalie input.'});
			return;
		}
		// store in data base
		const newMessage = {
			email,
			name,
			message
		};
		console.log(newMessage);

		res.status(201).json({message: 'Successfully stored message!'});
	}
}

export default handler;