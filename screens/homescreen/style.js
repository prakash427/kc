import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        marginBottom : 100
    },
    searchbar: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: 60,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#F16623',
    },
    searchbarcontent: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        flexDirection: 'row',
        gap: 20
    },
    categories: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-around'
    },
    category: {
        backgroundColor: 'rgba(241, 102, 35, 0.1)',
        opacity: '10%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    },
    text: {
        color: '#F16623'
    },
    stories: {
        padding: 5,
        flexDirection: 'row',
    },
    story: {
        flexDirection: 'column',
        width: 86
    },
    storytext: {
        textAlign: 'center',
        color: 'white',
        fontSize: 10
    },
    storyimage: {
        alignSelf: 'center',
        margin: 10
    },
    message: {
        alignSelf: 'center',
        alignItems: 'center',
    },
    messagetext: {
        fontFamily: 'Inter',
        fontWeight: '700',
        color: '#ffffff',
        fontSize: 20,
        paddingBottom: 3
    },
    line: {
        width: 91,
        height: 3,
        marginBottom: 6
    },
    messages: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
        paddingBottom: 7
    },
    st: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff',
        height: 113,
        borderWidth: 1,
        borderColor: '#F16623',
        padding: 12,
        justifyContent: 'center'
    },
    messagetype: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000000'
    },
    image: {
        width: '100%',
        borderRadius: 10
    },
    newsTextContainer : {
        backgroundColor : '#ffffff',
        width  :150,
        height  :48,
        alignItems : 'center',
        justifyContent  :'center'
    },
    newstext : {
        color:'#000000',
        fontSize : 9
    },
    media_container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center'
      },
      container: {
        //alignItems: 'center',
      },
      shareText : {
        color : '#000000',
        fontSize : 14,
        fontWeight : 'bold'
      },
      header : {
        backgroundColor : '#005575',
        width : '100%',
        flexDirection : 'row',
        gap : 10,
        padding : 15,
        borderBottomRightRadius : 20,
        borderBottomLeftRadius : 20
      },
      streamingtext : {
        color : '#ffffff',
        fontWeight : '500',
        fontSize  : 20
      }
})

export default styles;