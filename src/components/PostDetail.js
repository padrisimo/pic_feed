import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from './common';

const PostDetail = ({ redpost }) => {
    const { created_utc, artist, thumbnail, author, title, num_comments, score } = redpost.data;
    const isoDate = new Date(created_utc).toLocaleTimeString({ hour: '2-digit', minute: '2-digit' });

    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: thumbnail }} />
                </View>
                <View style={styles.textContentStyle}>
                    <Text>created at {isoDate}</Text>
                    <Text style={styles.titleTextStyle}>{title}</Text>
                </View>
            </CardSection>
        </Card>

    );
};

const styles = {
    textContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 90,
        width: 90
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 10,
    },
    titleTextStyle: {
        fontSize: 16,
    }
};

export default PostDetail;
