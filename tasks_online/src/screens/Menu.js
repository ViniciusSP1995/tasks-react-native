import React from 'react'
import { Platform, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useRoute } from '@react-navigation/native'
import { Avatar } from 'react-native-elements'
import commonStyles from '../commonStyles'

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'

export default (props) => {
    const route = useRoute();

    const logout = () => {
       delete axios.defaults.headers.common['Authorization']
       AsyncStorage.removeItem('userData')
       props.navigation.push('AuthOrApp')
    }

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
            <View style={styles.header}>
                <Text style={styles.title}>Tasks</Text>
            <Avatar rounded size="large" source={{ 
                uri: 'https://www.promoview.com.br/uploads/images/unnamed%2819%29.png'
                
                }}/>
                 {/* <Gravatar style={styles.avatar}
                    />   */}
                    <View style={styles.userInfo}>
                         <Text style={styles.name}>
                            {route.params.name}
                        </Text>
                        <Text style={styles.email}>{route.params.email}</Text>
                    </View>
                    <TouchableOpacity onPress={logout}>
                        <View style={styles.logoutIcon}>
                            <Icon name='sign-out' size={30} color="#800"/>
                        </View>
                    </TouchableOpacity>
                </View>
              <DrawerItemList {...props}/>
        </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
        borderBottomWidth: 1,
        borderColor: '#DDD'
    },
    title: {
        color: '#000',
        fontFamily: commonStyles.fontFamily,
        fontSize: 30,
        paddingTop: Platform.OS === 'ios' ? 70 : 30,
        padding: 10
    },
userInfo: {
    marginLeft: 10,
},
name: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    marginBottom: 5,
    color: commonStyles.colors.mainText
},
email: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 15,
    color: commonStyles.colors.subText,
    marginBottom: 5
},
logoutIcon: {
    marginleft: 10,
    marginBottom: 10,

}
})