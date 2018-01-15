import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { fetchFeed } from '../actions';
import { Spinner } from './common';
import PostDetail from './PostDetail';

class PostsList extends Component {

    componentWillMount() {
        this.props.fetchFeed();
    }

    renderFeed() {
      return this.props.feed.map(redpost => <PostDetail key={redpost.data.id} redpost={redpost} />);
    }

    render() {
        const { isfetched } = this.props;

        if (!isfetched) {
            return <Spinner />;
        }
        return (
            <ScrollView>
                {this.renderFeed()}
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    feed: state.posts.feed,
    isfetched: state.posts.isfetched
});

export default connect(mapStateToProps, { fetchFeed })(PostsList);
