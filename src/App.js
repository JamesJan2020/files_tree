import React, { Component } from 'react';
import files from './files.json'
import './style.css'
import FileNode from './FileNode'
class App extends Component {
    render() {
        return (
            <div>
                {/* <FileNode name={files.name} files={files.files} /> */}
                {/* same as below */}
                <FileNode {...files} />
                {/* 表示把所有files的屬性 全部丟到FileNode裡當他的props */}
            </div>
        );
    }
}

export default App;