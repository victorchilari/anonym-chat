const keyMap = {};
const keyPress = e => {
	keyMap[e.keyCode] = e.type == 'keydown';
	if (keyMap[17] && keyMap[13]) {
		// Ctrl + Enter
		sendMessage();
	}
};
