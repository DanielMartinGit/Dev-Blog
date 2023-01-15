import React from 'react'

class PostButton extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { postName: props.postName, postPath: props.postPath, writeDate: props.writeDate};
    }    

    render()
    {
        return (
            <a href='#!'><li onClick={ this.props.setPostFile( this.props.postPath ) }> { this.props.postName } </li></a>
        );
    }
}

export default PostButton;