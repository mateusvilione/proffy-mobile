import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whastappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem(){
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar} 
                    source={{uri: 'https://github.com/mateusvilione.png' }}
                />
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.name}>Mateus</Text>
                <Text style={styles.subject}>mat</Text>
            </View>
            <Text style={styles.bio}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita.</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '} 
                    <Text style={styles.priceValue}>R$ 100,00</Text>
                </Text>
                <View style={styles.buttonContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        <Image source={unfavoriteIcon} />
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whastappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;