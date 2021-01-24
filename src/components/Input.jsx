import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

const Input = props => {
	const { value, setValue, sendMessage } = props;
	const keyPress = e => {
		if (e.keyCode === 13) sendMessage();
	};
	// const keyMap = {};
	// const keyPress = e => {
	// 	keyMap[e.keyCode] = e.type == 'keydown';
	// 	if (keyMap[17] && keyMap[13]) {
	//    // Ctrl + Enter
	// 		sendMessage();
	// 	}
	// };
	return (
		<Grid container>
			<TextField
				defaultValue=""
				fullWidth
				onKeyDown={keyPress}
				onKeyUp={keyPress}
				multiline
				variant="outlined"
				style={{ width: '90%' }}
				value={value}
				onChange={e => setValue(e.target.value)}
			></TextField>
			<Button
				onClick={sendMessage}
				fullWidth
				style={{ width: '10%' }}
				variant="outlined"
			>
				Send
			</Button>
		</Grid>
	);
};

export default Input;
