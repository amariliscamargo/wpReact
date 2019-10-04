import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import renderHTML from 'react-render-html';
import {Link} from "@reach/router";


class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            pages:[],
            error: ''
        }
    }
    componentDidMount(){
        const wordPressSiteUrl = 'http://localhost:8000';
        this.setState({loading:true},() =>{
            axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/pages`)
            .then(res =>{
                this.setState({loading:false, pages: res.data})
            })
            .catch(error => this.setState({loading:false, error: error.response.data} ))
        });
    }
    render(){
        console.warn('state', this.state);
        const { pages } = this.state;
        return(
            <div>
                <Navbar/>
                {pages.length ? (
                    <div className = "mt-5 post-container">
                        {pages.map(page => (
                            <div key = {page.id} className = "card border-dark mb-3" style = {{width: '50rem'}}>
                                <div className="card-header">
                                    <Link to ={ `/page/${page.id}`}>
                                        {page.title.rendered}
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <div className="card-text post-content">
                                        {renderHTML(page.excerpt.rendered)}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <Link className="btn btn-secondary float-right" to ={ `/page/${page.slug}`}>
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

export default Page;