import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import PropTypes from 'prop-types';

import 'react-loading-skeleton/dist/skeleton.css';
import styles from './skeleton.module.scss';

const Box = ({ children }) => <div style={{}}>{children}</div>;

const TrenSkeleton = ({
  width,
  height,
  count,
  customStyle,
  highlightColor,
}) => (
  <Box>
    <SkeletonTheme highlightColor={highlightColor}>
      <p>
        <Skeleton
          count={count}
          className={styles.loading}
          width={width}
          height={height}
          style={customStyle}
        />
      </p>
    </SkeletonTheme>
  </Box>
);

export default TrenSkeleton;

TrenSkeleton.defaultProps = {
  height: 20,
  width: '100%',
  count: 1,
  highlightColor: '#d0d0d0',
};

TrenSkeleton.propTypes = {
  height: PropTypes.number,
  width: PropTypes.any,
  count: PropTypes.number,
  customStyle: PropTypes.any,
  highlightColor: PropTypes.string,
};

Box.propTypes = {
  children: PropTypes.any,
};
