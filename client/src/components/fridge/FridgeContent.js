import React from 'react';
import axios from 'axios';
import { MDBBtn } from "mdbreact";
import ItemsDisplay from './ItemsDisplay'
import AddItem from './Items/AddItem'

class FridgeContent extends React.Component {
    state = { items: [] };

    getFridgeContent = async (items) => {
        const response = await axios.get('http://localhost:8000/api/fridge', {

        });
        this.setState({ items: response.data });
        console.log(this.state.items)
    }

    displayForm = () => {
        window.open('AddItemToDB', '_blank',
         'width=600,height=700,left=200,top=200,location=no,manubar=no,status=no,titlebar=no,toolbar=no');
    }

    render() {
        return (
            <div>
                <MDBBtn outline onClick={this.getFridgeContent}>Show content</MDBBtn>
                <ItemsDisplay items ={this.state.items}/>
                <AddItem/>
                <div style={{display: "flex", flexDirection: 'column' }} >
                    <MDBBtn to="/example" onClick={this.displayForm} outline style={{ alignSelf: "flex-end" }} size="sm" color="blue-grey" >Add new product to database</MDBBtn>
                </div>
            </div>
        )
    }
}

export default FridgeContent