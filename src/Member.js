import React from 'react';

const Member = props => {
  let arrow, memberType;
  if (props.member) {
    arrow = <i className="fa fa-chevron-down" aria-hidden="true" />;
  } else {
    arrow = <i className="fa fa-chevron-right" aria-hidden="true" />;
  }
  if (props.memberId === 5 || props.memberId === 6) {
    memberType = 'Admin';
  } else {
    memberType = 'Member';
  }
  return (
    <div className="member">
      <p className="memberType">
        {memberType}
      </p>
      <div className="memberArrow">
        {arrow}
      </div>
    </div>
  );
};

export default Member;
