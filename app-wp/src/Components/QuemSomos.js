import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import renderHTML from 'react-render-html';

class QuemSomos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            page:{},
            error: ''
        }
    }
	componentDidMount() {
		const wordPressSiteURL = 'http://localhost:8000';
		console.warn( this.props.id );

		this.setState( { loading: true }, () => {
			axios.get( `${wordPressSiteURL}/wp-json/wp/v2/pages/36` )
				.then( res => {
					console.warn( res.data );
					if ( Object.keys( res.data ).length ) {
						this.setState( { loading: false, page: res.data } );
					} else {
						this.setState( { loading: false, error: 'No Posts Found' } );
					}
				} )
				.catch( err => this.setState( { loading: false, error: err.response.data.message } ) );
		} )
	}
	render() {

		const { page, error } = this.state;

		return(
			<React.Fragment>
				<Navbar/>
				{ error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }
				{ Object.keys( page ).length ? (
					<div className="mt-5 posts-container">
						<div key={page.id} className="card border-dark mb-3" style={{maxWidth: '50rem'}}>
							<div className="card-header">
								{renderHTML( page.title.rendered )}
							</div>
							<div className="card-body">
								<div className="card-text post-content">{ renderHTML( page.content.rendered ) }</div>
							</div>
						</div>
					</div>
				) : '' }
			</React.Fragment>
		)
	}
}
export default QuemSomos;