import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from './common';

const PostDetail = ({ redpost }) => {
    const { created_utc, thumbnail, author, title, num_comments, score } = redpost.data;
    const isoDate = new Date(created_utc).toLocaleTimeString({ hour: '2-digit', minute: '2-digit' });

    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: thumbnail }} />
                </View>
                <View style={styles.textContentStyle}>
                    <View style={styles.dateContainer}>
                        <Text sstyle={{ fontSize: 9 }}>created at {isoDate}</Text>
                    </View>
                    <View style={styles.dateContainer}>
                        <Text style={styles.titleTextStyle}>{title}</Text>
                    </View>
                    <View style={styles.lineStyle}>
                        <View>
                            <Text style={{ fontSize: 9 }}>{author}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 9 }}>{score}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 9 }}>{num_comments}</Text>
                        </View>

                    </View>
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
        fontSize: 12,
        flex: 1
    },
    dateContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    lineStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
};

export default PostDetail;
