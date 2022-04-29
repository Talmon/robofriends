import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'
import { requestRobots, setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
        // searchField: ""
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //     }
    // }

    componentDidMount() {
        // console.log(this.props)
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(users => this.setState({robots: users}))
        this.props.onRequestRobots()
    }

    onSearchChange = (event) => {
        console.log(event.target.value)
        this.setState({ searchField: event.target.value })
    }

    render(){
        // const { robots } = this.state;
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        })
        return isPending ?
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
    }
   
}

export default connect(mapStateToProps, mapDispatchToProps)(App);