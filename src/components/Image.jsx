import { Component } from "react";

class ImageClass extends Component {
    render() {
        return (
            <img style={{height: '300px', width: '400px', margin: `${this.props.margin}`}} src={this.props.url} alt="immagine"></img>
        )
    }
}

export default ImageClass