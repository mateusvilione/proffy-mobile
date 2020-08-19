import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

export default function Landing() {

    const {navigate} = useNavigation();

    const [totalConnections,setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, [])

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPage(){
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleNavigateToStudyPage} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClasses} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.totalcontainer}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    )
}