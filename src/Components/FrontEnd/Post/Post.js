import {useState, useEffect} from 'react';
import MarkDown from 'markdown-to-jsx'

import CodeComponent from '../../Backend/CodeComp';

const Post = ( { postPath } ) =>
{
    const [postContent, setPostContent] = useState("");
    
    useEffect(() =>
    {
        import(`../../../Markdown/${postPath}`)
        .then(resp => {
            fetch(resp.default)
            .then(response => response.text())
            .then(response => setPostContent(response))
            .catch(err => console.log(err));
        })
    });

    return (
        <article className='article'>
            <div className='container'>
               <div className='post-wrapper'>
                <MarkDown options={{
                    overrides: {
                        Code: {
                            component: CodeComponent
                        }
                    }
                }}> 
                  { postContent }
                </MarkDown>
               </div> 
            </div>
        </article>
    );
}

export default Post;