import React, { useCallback, useEffect, useRef } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { useSelector } from 'react-redux';
import { getCatsDataAction, sendVoteForCatAction } from '../../store/cats/catsAction';
import { IRootState, useAppDispatch } from '../../store/configureStore';
import { CatsState } from '../../store/cats/catsReducer';
import NoHeart from '../../res/svgs/noHeart';
import Heart from '../../res/svgs/heart';
import styles from './index.style';
import { catModel } from '../../models/cat';
import { VoteRequestModel } from '../../models/voteRequest';

function HomeScreen() {
    const swiperRef = useRef<Swiper<catModel>>(null);
    const dispatch = useAppDispatch();
    const catsDataState: CatsState = useSelector((state: IRootState) => state.cats);
    const cats = catsDataState?.cats;

    const loadOverviewData = useCallback(async () => {
        dispatch(getCatsDataAction());
    }, [dispatch]);

    useEffect(() => {
        loadOverviewData();
    }, [loadOverviewData]);

    const like = (): void => {
        swiperRef.current?.swipeRight();
    }

    const dislike = (): void => {
        swiperRef.current?.swipeLeft();
    }

    const onLikeCat = (catIndex: number): void => {
        dispatch(sendVoteForCatAction(createVoteRequest(catIndex)));
    }

    const createVoteRequest = (catIndex: number): VoteRequestModel => {
        return {
            image_id: cats[catIndex].id,
            sub_id: 'my-user-1234',//arbitary indentifier?
            value: 1
        }
    }

    const renderCard = (card: catModel): React.ReactElement => {
        if (!card || !card?.breeds) {
            console.error('card information is wrong');
            return <></>;
        }

        return (
            <ImageBackground src={card?.url} imageStyle={{ borderRadius: 16 }} style={styles.card}>
                <View style={styles.textContainer} >
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{card?.breeds[0]?.name}</Text>
                        <Text>4</Text>
                    </View>
                    <Text style={styles.origin}>{card?.breeds[0]?.origin}</Text>
                </View>
            </ImageBackground >
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', backgroundColor: 'white' }}>
                <Swiper
                    ref={swiperRef}
                    cards={cats}
                    onSwipedRight={(catIndex) => onLikeCat(catIndex)}
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

            <View style={styles.btnsContainer}>

                <TouchableOpacity onPress={dislike} style={styles.roundBtn}>
                    <NoHeart />
                </TouchableOpacity>

                <TouchableOpacity onPress={like} style={styles.roundBtn}>
                    <Heart />
                </TouchableOpacity>

            </View>
        </View>
    );
}

export default HomeScreen;
