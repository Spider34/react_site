import React, {Component} from 'react';
import Footer from '../components/Footer.js'
import Dropbox from '../components/Dropbox'
import Loader from '../components/Loader.js'

class Home extends Component{
	render(){
		return(
			<div>	
				<div className = "container">
				<h2> Welcome to Exam Scheduler</h2>
					<p> 
						 Paragraph 
						 In literary theory, a text is any object that can be "read", whether this object
						 is a work of literature, a street sign or an arrangement of 
						 buildings on a city block, or styles of clothing. It is a coherent 
						 set of signs that transmits some kind of informative message.[1] 
						 This set of symbols is considered in terms of the informative message 
						 content, rather than in terms of its physical form or the medium in which 
						 it is represented. 
					 </p>
					 <div className = "row">
					 	<div className="col-md-4">
							 <Dropbox/>
							 </div>
							 <div className="col-md-4">
							 <Dropbox/>
							 <Loader/>

							 </div>
							 <div className="col-md-4">
							 <Dropbox/>
							 <Loader/>
							 </div>
					</div>
					<div className = "text-center">
						<button type="button" className="btn btn-primary">Generate Output</button>
					</div>
				</div>
				<Footer/>
			</div>
			);
	}
}

export default Home
