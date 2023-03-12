import React from 'react'
import axios from 'axios';
import { CustData } from './CustData';

class ContactList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contact : [],
            errorMessage : ""
        }
    };

    componentDidMount(){
        let dataURL = "https://gist.githubusercontent.com/akshayjgvd25/4da3286ba284c60a91236fa94836671f/raw/5cdeea1554e240bcdd279f7d794012ddddeee010/gistfile1.txt"
        axios.get(dataURL).then((responce)=>{
            this.setState({
                ...this.state,
                contact : responce.data
            })
        }).catch((error)=>{
            this.state({
                ...this.state,
                errorMessage : error
            })
        })
    };

    clickContact = (contact)=>{
        // alert(JSON.stringify(this.state.contact))
        this.props.send(contact)

    }

    render() {
      return (
        <React.Fragment>
          <table className='table table-hover table-striped text-primary text-center '>
            <thead className='bg-dark text-white'>
                <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Email</th>
                    {/* <th>Age</th> */}
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.contact.length > 0 ? 
                    <React.Fragment>
                        {
                            this.state.contact.map(contact=>{
                                return(
                                    <tr key={contact.id} onClick={this.clickContact.bind(this,contact)}>
                                       <td>{contact.id}</td>
                                       <td>{contact.login}</td>
                                       <td>{contact.html_url}</td>
                                       {/* <td>{contact.followers_url}</td> */}
                                       <td>{contact.node_id}</td>
                                    </tr>
                                )
                            })
                        }
                    </React.Fragment> : null
                }
            </tbody>
          </table>
          {/* <pre>{JSON.stringify(this.state.contact)}</pre> */}

        </React.Fragment>
      )
    }
};

export default ContactList;