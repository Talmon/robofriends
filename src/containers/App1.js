import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

function App () {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchField: ''
    //     }
    // }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({robots: users}))
    // }
    const [robots, setRobots ] = useState([])
    const [searchField, setSearchField ] = useState('')

    useEffect( () => {
         fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users))
    }, [])

    const onSearchChange = (event) => {
        console.log(event.target.value)
        setSearchField( event.target.value )
    }

    // render(){
    const filteredRobots = robots.filter( robots => {
        return robots.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    })

    return !robots.length ?
      <h1>Loading</h1> :
     (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
    );
    // }
   
}

export default App;