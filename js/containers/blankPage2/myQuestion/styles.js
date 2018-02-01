
const React = require('react-native');

const { StyleSheet } = React;
export default {
    image: {
        marginTop: 1,
        marginLeft: 4,
        height: 40,
        width: 40,
    },

    listItemWrap: {
        backgroundColor: 'white',
        marginTop: 7,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingTop: 3
    },

    status: {
        fontSize: 12,
        color: '#919191',
        marginTop: 10,
        marginRight: 20
    },

    email: {
        fontSize: 12,
        color: '#696969'
    },
    divider: {
        height: 2,
        backgroundColor: '#f0f0f0',
        marginTop: 3,
        width: '100%'
    },
    nameField: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginLeft: 5,
    },
    body: {
        backgroundColor: 'white',
        width: '100%',
        paddingLeft: 15,
        paddingTop: 10,
        paddingRight: 10
    },
    title: {
        fontSize: 16,
        fontWeight: '500'
    },
    footer: {
        width: '100%',
        backgroundColor: 'white',
        height: 30,
        flexDirection: 'row',
    },
    icon: {
        width: 23,
        height: 23,
        marginLeft: 10
    },
    footerTextComment: {
        fontSize: 12,
        color: '#919191',
        marginLeft: 5,
        marginTop: 1
    },
    footerTextSee: {
        fontSize: 12,
        color: '#919191',
        marginLeft: 5,
        marginTop: 3
    },
    description: {
        fontSize: 14
    },
    buttonMore: {
        height: 25,
        backgroundColor: '#e7a23f',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        marginRight: 6,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom:1
    },
    iconMore: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 5
    },
    textMore: {
        fontSize: 13,
        color: 'white',
        marginBottom: 2
    },
    addQuestionSection: {
        width: '100%',
        height: 38,
        backgroundColor: '#e7a23f',
        borderRadius: 3,
        marginTop: 10,
        justifyContent: 'center'
    },
    iconPlus: {
        marginLeft: 9,
        height: 27,
        width: 27
    },
    addQuestionText: {
        color: 'white',
        marginLeft: 20,
        fontSize: 15,
        marginTop: 1
    },
    iconArrowAdd: {
        fontSize: 25,
        color: 'white',
        position: 'absolute',
        right: 13,
        top:0
    }
};
