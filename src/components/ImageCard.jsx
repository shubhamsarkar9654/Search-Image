import React from 'react';

class ImageCard extends React.Component {

    state = {spans: 0}

    onImgLoad = (event) => {
        /* setting image height after being loaded...
            for width event.target.offSetWidth
        */
        const height = event.target.offsetHeight
        const spans = Math.ceil(height/10 + 1)

        this.setState({
            spans: spans
        })
    }

    render() {
        const {description,urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
               <img
                    onLoad={this.onImgLoad}
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
               /> 
            </div>
        )
    }
}

export default ImageCard
