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
      </div>
      <div className="email">
        {props.member.email}
      </div>
    </div>

    <Member />

    {
      //onClick event show address here
      // color #F8F8F8
    }
  </div>;

export default EventMember;
