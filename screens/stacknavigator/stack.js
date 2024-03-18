import React, { useState, useEffect, useReducer, useRef } from 'react';
import {
  Pressable,
  StatusBar,
  StyleSheet,
  View,
  Text,
  LayoutChangeEvent,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Homescreen from '../homescreen';
import Fans from '../fans';
import Charity from '../charity';
import Media from '../media';
import Family from '../family';
import StreamingRecords from '../streamingrecordsscreen';


const Tab = createBottomTabNavigator();

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const StackK = ({ route }) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <NavigationContainer> */}
        <Tab.Navigator tabBar={(props) => <AnimatedTabBar {...props} />}>
            <Tab.Screen
              name="Homescreen"
              component={Homescreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Octicons name="home" size={23} color={'#ffffff'} />
                ),
                tabBarLabel: 'Home',
                headerShown: false,
              }}
            />
          <Tab.Screen
            name="Fans"
            component={Fans}
            options={{
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='account-group' size={23} color={'#ffffff'} />,
              tabBarLabel: 'Fans',
              headerStyle: styles.headerStyle,
              title: 'My Messages',
              headerTitleStyle: { color: '#fff' },
              headerTitleAlign: 'center',
              headerBackgroundContainerStyle: { backgroundColor: '#290334' }
            }}
          />
          <Tab.Screen
            name="Charity"
            component={Charity}
            options={{
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='hand-heart-outline' size={23} color={'#ffffff'} />,
              tabBarLabel: 'Charity',
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Media"
            component={Media}
            options={{
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='movie-outline' size={23} color={'#ffffff'} />,
              tabBarLabel: 'Media',
              headerStyle: styles.headerStyle,
              title: 'Media',
              headerTitleStyle: { color: '#fff' },
              headerTitleAlign: 'center',
              headerBackgroundContainerStyle: { backgroundColor: '#290334' }
            }}
          />
          <Tab.Screen
            name="Family"
            component={Family}
            options={{
              tabBarIcon: ({ color, size }) => <MaterialIcons name='family-restroom' size={23} color={'#ffffff'} />,
              tabBarLabel: 'Family',
              headerStyle: styles.headerStyle,
              title: 'Family',
              headerTitleStyle: { color: '#fff' },
              headerTitleAlign: 'center',
              headerBackgroundContainerStyle: { backgroundColor: '#290334' }
            }}
          />
        </Tab.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
};


const AnimatedTabBar = ({
  state: { index: activeIndex, routes },
  navigation,
  descriptors,
}) => {
  const { bottom } = useSafeAreaInsets();
  const [activeIconIndex, setActiveIconIndex] = useState(-1);

  const reducer = (state, action) => {
    return [...state, { x: action.x, index: action.index }];
  };

  const [layout, dispatch] = useReducer(reducer, []);

  const handleLayout = (event, index) => {
    dispatch({ x: event.nativeEvent.layout.x, index });
  };

  const xOffset = useDerivedValue(() => {
    const foundItem = [...layout].find(({ index }) => index === activeIndex);
    return foundItem ? foundItem.x - 25 : 0;
  }, [activeIndex, layout]);


  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(xOffset.value, { duration: 250 }) }],
    };
  });

  return (
    <>
      <View style={[styles.tabBar, { paddingBottom: bottom }]}>
        <AnimatedSvg
          width={90}
          height={77.5}
          viewBox="0 0 109 78"
          style={[styles.activeBackground, animatedStyles]}
        >
          <Path
            fill="#7D4D53"
            d="M108.603 35C85.4487 35 83.7949 77.5 54.5769 77.5C25.359 77.5 18.7436 35 0 35C0 15.67 33.2644 0 54.5769 0C75.8895 0 108.603 15.67 108.603 35Z"
          />
        </AnimatedSvg>

        <View style={styles.tabBarContainer}>
          {routes.map((route, index) => {
            const active = index === activeIndex;
            const { options } = descriptors[route.key];

            return (
              <TabBarComponent
                key={route.key}
                active={active}
                options={options}
                onLayout={(e) => handleLayout(e, index)}
                onPress={() => navigation.navigate(route.name)}
              />
            );
          })}
        </View>
      </View>
    </>
  );
};

const TabBarComponent = ({ active, options, onLayout, onPress }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (active && ref?.current) {
      ref.current.play();
    }
  }, [active]);

  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, { duration: 250 }),
        },
      ],
    };
  });

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, { duration: 250 }),
    };
  });

  const animatedIconsContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(!active ? 1 : 0.5, { duration: 250 }),
    };
  });

  return (
    <>
      <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
        <Animated.View style={[styles.componentCircle, animatedComponentCircleStyles]} >
          {active && <View style={styles.activeicon}>{options.tabBarIcon({ color: '#ffffff', size: 32 })}</View>}
        </Animated.View>
        <Animated.View style={[styles.iconContainer, animatedIconContainerStyles,]}>
          {active ? null : options.tabBarIcon({ ref })}
          <Text style={[styles.tabBarLabelStyle, { fontWeight: active ? 'bold' : 'normal' }]}>{options.tabBarLabel}</Text>
        </Animated.View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: '#f16623',
    borderTopWidth: 0,
    bottom: 0,
    height: 75,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'center'
  },
  tabBarLabelStyle: {
    position: 'absolute',
    top: 40,
    fontSize: 12,
    color: '#ffffff'
  },
  activeBackground: {
    position: 'absolute',
    left: 10,
    bottom: 34,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  component: {
    height: 60,
    width: 60,
  },
  componentCircle: {
    position: 'absolute',
    flex: 1,
    borderRadius: 20,
    height: 40,
    left: 10,
    width: 40,
    backgroundColor: '#f16623',
    bottom: 50,
  },
  iconContainer: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 36,
    width: 36,
  },
  activeicon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerStyle: {
    backgroundColor: '#f16623',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  }
});

export default StackK;