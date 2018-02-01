const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

import * as Colors from "../../config/colors"

export default {
	header: {
        zIndex:300,
		width: Dimensions.get("window").width,
		paddingLeft: 15,
		paddingRight: 15,
		backgroundColor:Colors.MAINCOLOR,
		marginLeft: Platform.OS === "ios" ? undefined : 0,
		borderBottomColor:'gray'
	},
	rowHeader: {
		zIndex:300,
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignSelf: "stretch",
		paddingTop: Platform.OS === "android" ? 5 : 0,
	},
	iconWrapper:{
		zIndex:300,
		flex:1,
        height:"100%"
	},
	iconWrapperRight:{
		zIndex:300,
		flex:1,
		height:40,
		marginRight:0,
		justifyContent:'center',
		alignItems:'flex-end', 
	},
	btnHeader: {
		zIndex:300,
		alignSelf: "center",
	},
	titleWrapper:{
		zIndex:300,
        flex: 5, 
		justifyContent:'center',
		borderBottomWidth:0
	},
	title:{
		zIndex:300,
		fontSize:20,
		fontWeight:'600',
		color:'white'
	},
	imageHeader: {
		zIndex:300,
		height: 25,
		width: 95,
		resizeMode: "contain",
	},
};
