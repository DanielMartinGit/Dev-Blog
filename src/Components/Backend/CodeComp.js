import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeComponent = ( { children, language } ) =>
{
    return (
        <div className='code'> 
            <SyntaxHighlighter
             language={language} 
             style={materialDark}>
                { children }
            </SyntaxHighlighter>
        </div>
    );
}

export default CodeComponent;