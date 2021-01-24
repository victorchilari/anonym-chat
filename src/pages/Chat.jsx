import React from 'react';
import { Container } from '@material-ui/core';
import Input from '../components/Input';
import Messages from '../components/Messages';
import ChatStyle from '../Styles/ChatStyle';

export const Chat = () => {
	ChatStyle();
	return (
		<Container>
			<Messages />
			<Input />
		</Container>
	);
};
