import React from 'react'

class ContactCard extends React.Component{
    constructor(props){
        super(props);
    };

    render() {
      return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(this.props.selectedContact)}</pre> */}
            {
                Object.keys(this.props.selectedContact).length > 0 ? 
                <React.Fragment>
                  <div className="card sticky-top ">
                      <div className="card-header bg-primary text-white">
                        <div className="p-4">

                        </div>
                      </div>
                      <div className="card-body text-center">
                      <img src={this.props.selectedContact.avatar_url} alt="" className='img-thumbnail rounded-circle w-75 contact-img '/>

                      <ul className='list-group mt-3'>
                        <li className='list-group-item list-group-item-primary'>
                            Name : {this.props.selectedContact.login}
                        </li>
                        <li className='list-group-item list-group-item-primary'>
                            Email : {this.props.selectedContact.html_url}
                        </li>
                        <li className='list-group-item list-group-item-primary'>
                            {/* Age : {this.props.selectedContact.login} yrs. */}
                            Age : 25 yrs.
                        </li>
                        <li className='list-group-item list-group-item-primary'>
                            State : {this.props.selectedContact.node_id}
                        </li>
                      </ul>
                      </div>
                  </div>
                </React.Fragment> : null
            }
        </React.Fragment>
      )
    }
};

export default ContactCard;