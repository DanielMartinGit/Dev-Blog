import PostButton from "./PostButton";

const PostMenu = (props) =>
{
    return (
        <div className='sidebar'>
            <h1 className='postMenuTitle'> My Posts </h1>
            <hr/>
            
            <ul>
                <PostButton postName='Welcome to my Blog!' postPath='defaultPost.md' writeDate='written - 15/01/2023' setPostFile={props.setPostFile}/>
            </ul>

            <div>
                <p className='footerText'> Made by Daniel Martin &copy; 2023</p>
            </div>
        </div>
    );
}

export default PostMenu;