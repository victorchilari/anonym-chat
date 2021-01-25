import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import Input from '../components/Input';
import Messages from '../components/Messages';
import ChatStyle from '../Styles/ChatStyle';
// import { Context } from '..';

export const Chat = () => {
	ChatStyle();
	return (
		<Container>
			<Messages />
			<Input />
		</Container>
	);
};
