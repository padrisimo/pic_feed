import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { fetchFeed } from '../actions';
import { Spinner } from './common'

class PostsList extends Component {
    render() {
        const { isfetched } = this.props;

        if (!isfetched) {
           return <Spinner />;
        }
        return (
            <View>
                console.log(this.props.feed)
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    feed: state.posts.feed,
    isfetched: state.posts.isfetched
});

export default connect(mapStateToProps, { fetchFeed })(PostsList);
