// import React, { useState } from 'react';
import { blue, orange, deepOrange, pink } from '@material-ui/core/colors';
import { createMuiTheme, makeStyles } from '@material-ui/core';

const Theme = makeStyles({
	mainPrimaryColor: orange[500],
	mainSecondaryColor: deepOrange[900],
	blue: blue[500],
	pink: pink[500],

	darkTheme: createMuiTheme({
		palette: {
			type: 'dark',
			primary: {
				main: orange[500]
			},
			secondary: {
				main: deepOrange[900]
			},
			buttonLogin: {
				primary: blue,
				variant: 'contained'
			},
			buttonSignout: {
				primary: pink,
				variant: 'outlined'
			}
		}
	})
});
export default Theme;

// const Theme = makeStyles({
// 	table: {
// 		minWidth: 650
// 	},
// 	chatSection: {
// 		width: '100%',
// 		height: '80vh'
// 	},
// 	headBG: {
// 		backgroundColor: '#e0e0e0'
// 	},
// 	borderRight500: {
// 		borderRight: '1px solid #e0e0e0'
// 	}
// });
