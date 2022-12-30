import { useState, useEffect } from 'react';
import Icon from '../Icon/Icon';
import { FaAngleUp } from 'react-icons/fa';
import './ScrollToTop.scss';

const ScrollToTop = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) return setVisible(true);
      return setVisible(false);
    });
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="scrollToTop">
      {visible && (
        <Icon
          icon={<FaAngleUp />}
          onClick={handleClick}
          className="scrollToTop__icon scrollToTop__icon--position"
        />
      )}
    </div>
  );
};

export default ScrollToTop;
