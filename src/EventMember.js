import React from 'react';
import Member from './Member';

const EventMember = props => {
  return (
    <div className="eventMember">
      <div className="memberGravatar">image</div>

      <div className="memberName">
        <div className="name">
          <strong>
            {props.member.name}
          </strong>
        </div>
        <div className="email">
          {props.member.email}
        </div>
      </div>

      <Member />
    </div>
  );
};

export default EventMember;
