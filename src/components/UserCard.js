import React from 'react';

const UserCard = (props) => {
    const {name, email, phone, dob, gender, picture} = props.user;
    let profilePic = picture.medium ? picture.medium : 'https://bootdey.com/img/Content/avatar/avatar7.png';
    return (
        <div className="col-md-6 col-xl-4">
            <div className="card m-b-30">
                <div className="card-body row">
                    <div className="col-4">
                        <a href=""><img src={profilePic} alt="" className="img-fluid rounded-circle w-70" /></a>
                    </div>
                    <div className="col-8 card-title align-self-center mb-0">
                        <h5>{name.first+' '+name.last}</h5>
                        <p className="capitalize">{gender}</p>
                        <p>{dob.age} Years</p>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="fa fa-envelope float-right"></i>{email}</li>
                    <li className="list-group-item"><i className="fa fa-phone float-right"></i>{phone}</li>
                </ul>

            </div>
        </div>
    )
}

export default UserCard;