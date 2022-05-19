import DoctorInfo from './DoctorInfo';
import './Styles.css';

const BigGrid = (props) => {
    const classes = ' ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default BigGrid;