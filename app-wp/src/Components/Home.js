import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from "@reach/router";
import renderHTML from 'react-render-html';
import '../Style.css';
import Moment from 'react-moment';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            posts: [],
            error: ''
        }
    }

    componentDidMount() {
        const wordPressSiteUrl = 'http://localhost:8000';
        this.setState({ loading: true }, () => {
            axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/posts`)
                .then(res => {
                    this.setState({ loading: false, posts: res.data })
                })
                .catch(error => this.setState({ loading: false, error: error.response.data }))
        });
    }
    render() {
        //console.warn('state', this.state);
        const { posts } = this.state;
        return (
            <div>
                <Navbar />
                {posts.length ? (
                    <div className="mt-5 post-container">
                        {posts.map(post => (
                            <div key={post.id} className="card border-dark mb-3" style={{ width: '50rem' }}>
                                <div className="card-header">
                                    <Link to={`/post/${post.id}`}>
                                        {post.title.rendered}
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <div className="card-text post-content">
                                        {renderHTML(post.excerpt.rendered)}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <Moment fromNow>{post.date}</Moment>
                                    <Link className="btn btn-secondary float-right" to={`/post/${post.id}`}>
                                        Saiba Mais ...
                                    </Link>
                                </div>
                            </div>

                        ))}
                    </div>
                ) : ''}
            </div>
        )
    }
}
export default Home;