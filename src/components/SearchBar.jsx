import React from 'react'

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    handleForm = (event) => {
        event.preventDefault()

        this.props.whenSubmit(this.state.term)
    }

    handleChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }
    
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.handleForm}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            onChange={event => this.handleChange(event)} >
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
