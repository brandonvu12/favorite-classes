import React, {useState} from 'react';
import Class from '../Class/Class';
import ClassGraphQL from '../Class/ClassGraphQL';
import './Home.css'


function Home(props){

    const [value, setValue] = useState('');
    const [favoriteClasses, setClasses] = useState([]);

    const handleSubmit =  (event) => {
        event.preventDefault();
        if(!favoriteClasses.includes(value)){
            setClasses(favoriteClasses.concat(value));
            setValue('');
        }
        console.log(favoriteClasses);
    }
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div>
            <h1>Favorite Classes List</h1>
            <form onSubmit={handleSubmit}>
                <label>Add Favorite Class </label>
                <input type="text" value={value} onChange={handleChange}></input>
                <button type = "submit">Add Class!</button>
            </form>
            <div className="my-class">
                {favoriteClasses.map((favClass) =>
                   <Class name = {favClass} key= {favClass}></Class>
                )}
            </div>
            <div className="my-class">
                {favoriteClasses.map((favClass) =>
                   <ClassGraphQL name = {favClass} key= {favClass}></ClassGraphQL>
                )}
            </div>
        </div>

    )
}

export default Home;
