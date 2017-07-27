import React from 'react';
import Member from './Member';

const EventMember = props =>
  <div className="eventMember">
    <div className="memberGravatar">image</div>

    <div className="memberName">
      <div>
        <strong>
          {props.member.name}
        </strong>
        {props.member.email}
      </div>
    </div>

    <Member />

    {
      //onClick event show address here
    }
  </div>;

export default EventMember;
