import React from 'react';
import moment from 'moment';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, CardSection } from './common';

const PostDetail = ({ redpost, navigate }) => {
    const { created_utc, thumbnail, author, title, num_comments, score, permalink } = redpost.data;
    const isoDate = moment.unix(created_utc).startOf('minute').fromNow();

    return (
        <TouchableOpacity onPress={() => navigate('Web', { uri: `https://www.reddit.com${permalink}`})}>
            <Card>
                <CardSection>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image style={styles.thumbnailStyle} source={{ uri: thumbnail }} />
                    </View>
                    <View style={styles.textContentStyle}>
                        <View style={styles.dateContainer}>
                            <Text sstyle={{ fontSize: 9 }}>created {isoDate}</Text>
                        </View>
                        <View style={styles.dateContainer}>
                            <Text style={styles.titleTextStyle}>{title}</Text>
                        </View>
                        <View style={styles.lineStyle}>
                            <View>
                                <Text style={{ fontSize: 9 }}>by: {author}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 9 }}> Score: {score}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 9 }}> Coments: {num_comments}</Text>
                            </View>

                        </View>
                    </View>


                </CardSection>
            </Card>
        </TouchableOpacity>

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
