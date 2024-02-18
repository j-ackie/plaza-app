import { useMemo, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View, PanResponder } from 'react-native';

const createBbox = (pageX, pageY, width, height) => {
  return {
    left: pageX,
    right: pageX + width,
    bottom: pageY + height,
    top: pageY,
  };
};

const pointInBox = (point, bbox) => {
  // https://stackoverflow.com/a/52414278/999032
  return !(
    point.x < bbox.left ||
    point.x > bbox.right ||
    point.y > bbox.bottom ||
    point.y < bbox.top
  );
};

const Schedule = () => {
  const viewRefs = useRef(Array(18 * 7));
  const [hoveredIndexes, setHoveredIndexes] = useState(new Set());

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onPanResponderMove: (evt) => {
          const newHoveredIndices = new Set(hoveredIndexes);

          const point = { x: evt.nativeEvent.pageX, y: evt.nativeEvent.pageY };
          viewRefs.current.forEach((ref, index) => {
            if (!ref) return;
            // console.log(index);
            ref.measure((x, y, width, height, pageX, pageY) => {
              // console.log(pageX);
              const bbox = createBbox(pageX, pageY, width, height);
              if (pointInBox(point, bbox)) {
                newHoveredIndices.add(index);
                setHoveredIndexes(newHoveredIndices);
              }
            });
          });

          // console.log(hoveredIndexes);
        },

        onPanResponderGrant: (evt) => {
          setHoveredIndexes(new Set());
        },

        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      }),
    [hoveredIndexes]
  );

  const times = [];
  for (let i = 0; i < 18; i++) {
    times.push(
      <View style={styles.time}>
        <Text>WOW</Text>
      </View>
    );
  }

  const cells = [];
  for (let i = 0; i < 7; i++) {
    cells.push([]);
    for (let j = 0; j < 18; j++) {
      cells[i].push(
        <Pressable
          style={
            hoveredIndexes.has(i * 18 + j) ? styles.active : styles.inactive
          }
          key={`row${i}col${j}`}
          onTouchStart={() => {
            const newHoveredIndices = new Set(hoveredIndexes);
            newHoveredIndices.add(i * 18 + j);
            setHoveredIndexes(newHoveredIndices);
          }}
          ref={(ref) => (viewRefs.current[i * 18 + j] = ref)}
        >
          <Text>{i * 18 + j}</Text>
        </Pressable>
      );
    }
  }

  // console.log(hoveredIndexes);

  return (
    <View style={styles.container}>
      <View style={styles.timesContainer}>
        <Text></Text>
        {times}
      </View>
      {cells.map((column, idx) => (
        <View
          style={styles.columnContainer}
          key={`column-${idx}`}
          {...panResponder.panHandlers}
        >
          <View style={styles.columnTextContainer}>
            <Text>{idxToDay(idx)}</Text>
          </View>
          {/* {column} */}
          <View style={styles.column}>{column}</View>
        </View>
      ))}
      {/* <Pressable
        style={styles.pressable}
        onTouchStart={() => console.log('HELLO')}
      ></Pressable>
      <Pressable
        style={styles.pressable}
        onTouchStart={() => console.log('HELLO')}
      ></Pressable> */}
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  timesContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  time: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnContainer: {
    flex: 1,
  },
  columnTextContainer: {
    alignItems: 'center',
  },
  column: {
    flex: 1,
    borderLeftWidth: 1,
  },
  inactive: {
    borderBottomWidth: 1,
    backgroundColor: 'red',
    flex: 1,
    // width: 10,
    // height: 10,
  },
  active: {
    borderBottomWidth: 1,
    backgroundColor: 'green',
    flex: 1,
  },
});

const idxToDay = (idx: number) => {
  switch (idx) {
    case 0:
      return 'Sun';
    case 1:
      return 'Mon';
    case 2:
      return 'Tue';
    case 3:
      return 'Wed';
    case 4:
      return 'Thu';
    case 5:
      return 'Fri';
    case 6:
      return 'Sat';

    default:
      return 'Error';
  }
};
