import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '9gtyd5bQCWVAcOgIIMjqUF91h2Gwnyfu';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: []
        }
    }

    render(){
        return (
            <div className='searchable-movie-reviews'>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <label>Enter Search Term:
                            <input type='text' name='query'/>
                        </label>
                        <input type='submit' value='Search'/>
                    </form>
                </div>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = e.target.query.value;
        fetch(URL + `&query=${searchTerm}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({reviews: data.results});
        })
    }
}