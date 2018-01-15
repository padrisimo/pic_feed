import React from 'react';
import { Text, View } from 'react-native';

const PostDetail = ({ redpost }) => {
    //const { created, artist, thumbnail, author, title, num_comments, score } = redpost.data;
    return (
        <View>
            <Text>{redpost.data.created}</Text>
            <Text>{redpost.data.title}</Text>
        </View>

    );
};

export default PostDetail;
