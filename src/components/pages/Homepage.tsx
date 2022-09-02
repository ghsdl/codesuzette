import React from 'react';

interface HomepageProps {
  children?: React.ReactNode;
}

const Homepage = ({ children }: HomepageProps) => {
  return <div className="homepage">{children}</div>;
};

export default Homepage;
