import './styles.css'
import tsLogoPath from './ts-logo-128.png';
import reactLogoPath from './react-logo.svg';

const App = () => {
    return (
        <div>
            <img src={tsLogoPath} alt="TS logo"/>
            <img src={reactLogoPath} className="svg" alt="React logo"/>
            <h1>Hello <code>React, Typescript, Bebal</code> and <code>Webpack</code></h1>
            <p><code>App Mode: {process.env.NODE_ENV}</code></p>
            <p><code>Owner Mode: {process.env.name}</code></p>
        </div>
    )
}

export default App;