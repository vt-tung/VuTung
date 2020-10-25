import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailScreen';
import LaneScreen from './screens/LaneScreen';
import quanlylop from './screens/quanlylop';
import quanlymon from './screens/quanlymon';
import EditLop from './screens/editLop';
import EditMon from './screens/editMon';
import chitietlop from './screens/chitietlop';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const quanlylopStack = createStackNavigator();
const quanlymonStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const screenOptions = {
  headerStyle: {
    backgroundColor: '#009688',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  gestureEnabled: true,
  gestureDirection: 'horizontal'
}

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={screenOptions
    }
  >
    <HomeStack.Screen
      name='Home'
      component={HomeScreen}
      options={{
        title: 'Quản lý sinh viên',
        headerLeft: () => (
          <Icon.Button name='menu' size={25} backgroundColor="#009688"
            onPress={() => navigation.openDrawer()
            }></Icon.Button>

        )
      }}
    />
    <HomeStack.Screen name='Lane' component={LaneScreen} options={{ title: 'Cập nhật thông tin sinh viên' }} />
  </HomeStack.Navigator>
)

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={screenOptions}
  >
    <DetailsStack.Screen name='DetailsScreen' component={DetailsScreen} options={{
      title: 'Trang tìm kiếm', headerLeft: () => (
        <Icon.Button name='menu' size={25} backgroundColor="#009688"
          onPress={() => navigation.openDrawer()
          }></Icon.Button>

      )
    }} />
  </DetailsStack.Navigator>
)

const quanlylopStackScreen = ({ navigation }) => (
  <quanlylopStack.Navigator
    screenOptions={screenOptions
    }
  >
    <quanlylopStack.Screen
      name='Lop'
      component={quanlylop}
      options={{
        title: 'Quản lý lớp',
        headerLeft: () => (
          <Icon.Button name='menu' size={25} backgroundColor="#009688"
            onPress={() => navigation.openDrawer()
            }></Icon.Button>

        )
      }}
    />
    <quanlylopStack.Screen name='editLop' component={EditLop} options={{ title: 'Cập nhật thông tin Lớp' }} />
    <quanlylopStack.Screen name='chitietlop' component={chitietlop} options={{ title: 'Danh sách sinh viên của lớp' }} />
  </quanlylopStack.Navigator>
)

const quanlymonStackScreen = ({ navigation }) => (
  <quanlymonStack.Navigator
    screenOptions={screenOptions
    }
  >
    <quanlymonStack.Screen
      name='Mon'
      component={quanlymon}
      options={{
        title: 'Quản lý môn học',
        headerLeft: () => (
          <Icon.Button name='menu' size={25} backgroundColor="#009688"
            onPress={() => navigation.openDrawer()
            }></Icon.Button>

        )
      }}
    />
    <quanlymonStack.Screen name='editMon' component={EditMon} options={{ title: 'Cập nhật thông tin môn học' }} />

  </quanlymonStack.Navigator>
)

const App = () => {
  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="DetailsScreen" component={DetailsStackScreen} options={{ title: 'Tìm kiếm' }} />
        <Drawer.Screen name="Home" component={HomeStackScreen} options={{ title: 'Quản lý sinh viên' }} />
        <Drawer.Screen name="Lop" component={quanlylopStackScreen} options={{ title: 'Quản lý lớp' }} />
        <Drawer.Screen name="Mon" component={quanlymonStackScreen} options={{ title: 'Quản lý môn học' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

