import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, StyleSheet } from 'react-native';
import { fetchFeed } from '../actions';
import { Spinner } from './common';
import PostDetail from './PostDetail';

class PostsList extends Component {

    static navigationOptions = {
        title: 'Post of Reddit',
    }

    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: []
        };
    }

    componentDidMount() {
        this.props.fetchFeed();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.ds.cloneWithRows(nextProps.feed)
        });
    }

    renderFeed() {
        return this.props.feed.map(redpost => 
            <PostDetail key={redpost.data.id} redpost={redpost} />
        );
    }

    render() {
        const { isfetched } = this.props;

        if (!isfetched) {
            return <Spinner />;
        }
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={redpost => <PostDetail key={redpost.data.id} redpost={redpost} />}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = (state) => ({
    feed: state.posts.feed,
    isfetched: state.posts.isfetched
});


export default connect(mapStateToProps, { fetchFeed })(PostsList);
