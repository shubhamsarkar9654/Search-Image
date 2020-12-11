import React from 'react';

import unsplash from './api/unsplash';
import SearchBar from './components/SearchBar.jsx';
import ImageList from './components/ImageList.jsx'

class App extends React.Component {
    state = {
        images: []
    }

    handleSearchSubmit = (term) => {
        unsplash.get('/search/photos',{
            params: {
                query: term,
                per_page: 30
            }
        })
        .then(response => {
            this.setState({
                images: response.data.results
            })
        })
    }

    render () {
        // console.log(this.state.images.length)
        return (
            <div className="ui container" style={{margin: "5vh"}}>
                <SearchBar whenSubmit={this.handleSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App
 