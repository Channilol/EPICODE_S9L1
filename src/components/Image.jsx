import { Component } from "react";

class ImageClass extends Component {
    render() {
        return (
            <img style={{height: '600px'}} src={this.props.url} alt="immagine"></img>
        )
    }
}

export default ImageClass