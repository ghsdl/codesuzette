import DOUBLE_FACES_CONST from './DoubleFacesConst';
import DoubleFace from '../DoubleFace/DoubleFace';
import './DoubleFaces.scss';

const DoubleFaces = () => {
  return (
    <div className="doubleFaces">
      {DOUBLE_FACES_CONST.map((doubleFace) => {
        return (
          <DoubleFace
            key={doubleFace.id}
            title={doubleFace.title}
            label={doubleFace.label}
            className={doubleFace.titleClassName}
          />
        );
      })}
    </div>
  );
};

export default DoubleFaces;
