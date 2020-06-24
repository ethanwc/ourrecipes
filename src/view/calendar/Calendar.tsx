import React from 'react';
import {Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Calendar as ReactCalendar} from 'react-native-calendars';
import {Theme, Typography} from '../../assets/styles';
import RecipeCard from '../../containers/Recipe/RecipeCard';

const DATA = [
  {title: 'steve'},
  {title: 'jobs'},
  {title: 'is'},
  {title: 'dead'},
];

export interface calendarProps {
  navigation: any;
}

const Calendar = (props: calendarProps) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ReactCalendar
        // Initially visible month. Default = Date()
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2020-04-01'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        // Hide month navigation arrows. Default = false
        // hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        //   renderArrow={(direction) => (<Arrow/>)}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={true}
        // Show week numbers to the left. Default = false
        showWeekNumbers={true}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={(substractMonth) => substractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={(addMonth) => addMonth()}
        markedDates={{
          '2020-04-16': {selected: true, marked: true, selectedColor: 'blue'},
          '2020-05-17': {marked: true},
          '2020-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
          '2020-05-19': {disabled: true, disableTouchEvent: true},
        }}
        // Disable left arrow. Default = false
        //   disableArrowLeft={true}
        // Disable right arrow. Default = false
        //   disableArrowRight={true}
      />

      {/* <ScrollView>
        <Text style={{...Typography.lightThemeText.mainHeader, marginLeft: 15}}>
          1
        </Text>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({item, index}) =>
            index == DATA.length - 1 ? (
              <RecipeCardBlank />
            ) : (
              <RecipeCard isFirst={true} renderAuthor={false} />
            )
          }
          keyExtractor={(item) => item.title}
          decelerationRate={0.798}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={{...Typography.lightThemeText.mainHeader, marginLeft: 15}}>
          2
        </Text>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({item, index}) =>
            index == DATA.length - 1 ? (
              <RecipeCardBlank />
            ) : (
              <RecipeCard isFirst={true} renderAuthor={false} />
            )
          }
          keyExtractor={(item) => item.title}
          decelerationRate={0.798}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={{...Typography.lightThemeText.mainHeader, marginLeft: 15}}>
          3
        </Text>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({item, index}) =>
            index == DATA.length - 1 ? (
              <RecipeCardBlank />
            ) : (
              <RecipeCard isFirst={true} renderAuthor={false} />
            )
          }
          keyExtractor={(item) => item.title}
          decelerationRate={0.798}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView> */}

      <ScrollView>
        <Text style={{...Typography.Typography.header, marginLeft: 15}}>
          Breakfast
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={calendarStyle.mealContainer}>
          <RecipeCard
            isFirst={true}
            renderAuthor={false}
            navigation={props.navigation}
          />
          {/* <RecipeCardBlank /> */}
        </ScrollView>
        <Text style={{...Typography.Typography.header, marginLeft: 15}}>
          Lunch
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={calendarStyle.mealContainer}>
          <RecipeCard
            isFirst={true}
            renderAuthor={false}
            navigation={props.navigation}
          />
          {/* <RecipeCardBlank /> */}
        </ScrollView>
        <Text style={{...Typography.Typography.header, marginLeft: 15}}>
          Dinner
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={calendarStyle.mealContainer}>
          {/* <RecipeCardBlank /> */}
        </ScrollView>

        <Text style={{...Typography.Typography.header, marginLeft: 15}}>
          Snack
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={calendarStyle.mealContainer}>
          <RecipeCard
            isFirst={true}
            renderAuthor={false}
            navigation={props.navigation}
          />
          <RecipeCard
            isFirst={true}
            renderAuthor={false}
            navigation={props.navigation}
          />
          {/* <RecipeCardBlank /> */}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const calendarStyle = StyleSheet.create({
  contaier: {},
  mealContainer: {
    // alignItems: 'center',
    // marginTop: 5,
  },
});

export default Calendar;
