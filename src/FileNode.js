import React, { Component } from 'react';

class FileNode extends Component {
    state = {
        open: false,
    }

    toggle = () => {
        this.setState({
            open: !this.state.open,
        })
    }

    render() {
        const { name, files } = this.props;
        const { open } = this.state
        if (!files) {
            return <li>{name}</li>;
        }
        return (
            <div>
                <div className={`forder ${open ? 'open' : ''}`} onClick={this.toggle}>{name}</div>
                {!open ? null : (<ul>
                    {files.map(file => (<FileNode key={file.name} {...file} />))}
                </ul>)}
            </div>
        );
    }
}

export default FileNode;