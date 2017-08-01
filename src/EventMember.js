import React from 'react';
import Member from './Member';
import Gravatar from 'gravatar-url';

const EventMember = props => {
  let email = props.member.email.toLowerCase();
  let gravatar = Gravatar(email, { size: 30 });
  return (
    <div className="eventMember">
      <div className="memberGravatar">
        <img src={gravatar} />
      </div>
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
      <Member member={props.arrow} memberId={props.member.id} />
    </div>
  );
};

export default EventMember;
