import css from './App.css';
import photo from './static/photo.jpeg';
import {Skills} from "./components/skills/Skills";

import classNames from "classnames";


const skills_list = ['Python 3', 'JavaScript', 'Git', 'Flask', 'React', 'HTML', 'CSS', 'Linux', 'Nginx']
const lang_list = ['Russian - Native', 'English - B1']
function App() {
    return (
        <div className="page">
            <h1 className="h1">Evgeniy Voloshko</h1>
            <h2 className="h2">21 years old</h2>
            <h2 className='h2'>Junior Web developer</h2>
            <img src={photo} alt="photo" className={classNames('photo')}/>
            <h2 className="h2">Skills</h2>
            <Skills skills={skills_list}/>
            <h2 className="h2">Languages</h2>
            <Skills skills={lang_list}/>
            <h2 className="h2">Education</h2>
                <a href="https://www.rksi.ru/">
                    <Skills skills={['Rostov-on-Don College of Communications and Computer Science - 2022']}/>
                </a>

            <h2 className="h2">Projects</h2>
            <div className="projects">
                <li>
                    OnlineKitchen - Food ordering Service
                </li>
            </div>
        </div>
    );
}

export default App;
