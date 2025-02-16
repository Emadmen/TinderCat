import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { catModel } from '../../models/cat';
import { Text } from 'react-native-svg';

const HomeScreen = () => {
    const swiperRef = useRef<Swiper<catModel>>(null);

    const renderCard = (card: catModel) => {
        return (
            <View style={{}}>
                <Text>{card?.breeds[0]?.name}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', backgroundColor: 'white' }}>
                <Swiper
                    ref={swiperRef}
                    cards={[1, 2, 3]}
                    renderCard={(card) => renderCard(card)}
                    cardIndex={0}
                    backgroundColor={'white'}
                    showSecondCard={true}
                    stackScale={0}
                    stackSeparation={0}
                    containerStyle={{ height: 520 }}
                    stackSize={2}>
                </Swiper>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});

export default HomeScreen;