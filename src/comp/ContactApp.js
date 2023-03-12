import React from 'react'
import ContactCard from './ContactCard';
import ContactList from './ContactList';

class ContactApp extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            selectedContact : {}
        }
    };

    reciveData = (contact)=>{
        this.setState({
        selectedContact : contact
        })
    }

    render() {
      return (
        <React.Fragment>
          <div className="container mt-3">
            <div className="row">
                <div className="col">
            {/* <pre>{JSON.stringify(this.state.selectedContact)}</pre> */}

                    <p className="h3 text-primary">Contact App</p>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias cupiditate nam voluptates assumenda quaerat enim est beatae nobis odit, sint facilis numquam corrupti quam rerum sed iure sunt quo!</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                    <ContactList send={this.reciveData}/>
                </div>
                <div className="col-md-3">
                    <ContactCard selectedContact = {this.state.selectedContact}/>
                </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
};

export default ContactApp;