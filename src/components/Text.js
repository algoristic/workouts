import { Component } from 'react'

const getDescriptionText = (type, id, file, callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', `/.media/${type}s/${id}/${file}.txt`);
    request.send(null);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                callback(request.responseText);
            }
        }
    };
}

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    componentDidMount() {
        const { id } = this.props;
        const { description, extracredit } = this.props;
        let file = 'description';
        if(extracredit) {
            file = 'extracredit';
        }
        const { workout, program } = this.props;
        let type = 'workout';
        if(program) {
            type = 'program';
        }
        const callback = (text) => {
            this.setState({ text: text });
        }
        getDescriptionText(type, id, file, callback);
    }

    render() {
        const { text } = this.state;
        return (
            <p>{ text }</p>
        )
    }
}

export default Text;
