import { Link, useLocation } from 'react-router-dom';
import Icon from '../../factory/Icon/Icon';
import { HiChevronRight } from 'react-icons/hi';
import { GoHome } from 'react-icons/go';
import get from 'lodash/get';
import './Breadcrumb.scss';

interface BreadcrumbProps {
  category: { value: string; label: string } | undefined;
}

const Breadcrumb = ({ category }: BreadcrumbProps) => {
  const location = useLocation();
  return (
    <nav className="breadcrumb">
      <Link
        to="/"
        className={
          location.pathname === '/'
            ? 'breadcrumb--active'
            : 'breadcrumb--inactive'
        }
      >
        <Icon icon={<GoHome />} />
      </Link>
      <Icon icon={<HiChevronRight />} />
      <Link
        to={`/${get(category, 'value', '')}`}
        className={
          location.pathname.startsWith(`/${get(category, 'value', '')}`)
            ? 'breadcrumb--active'
            : 'breadcrumb--inactive'
        }
      >
        {get(category, 'label', '')}
      </Link>
    </nav>
  );
};

export default Breadcrumb;
