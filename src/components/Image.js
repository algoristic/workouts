import { Component } from 'react'
import { config } from '../assets/app.config.json'

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: undefined
        };
    }

    componentDidMount() {
        let { url } = this.props;
        if(config.obfuscateUrl) {
            const fn = (e) => {
                let { currentTarget:{ response } } = e;
                const urlCreator = window.URL || window.webkitURL;
                const url = urlCreator.createObjectURL(response);
                this.setState({ src: url });
            }

            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.responseType = "blob";
            xhr.onload = fn;
            xhr.send();
        } else {
            this.setState({ src: url });
        }
    }

    render() {
        const { alt } = this.props;
        const { src } = this.state;
        return (
            <>
            {  src && <img className={ config.style.imageClasses } alt={ alt } src={ src } /> }
            { !src && <div className='spinner-border text-secondary my-5' /> }
            </>
        );
    }
};

export default Image;
