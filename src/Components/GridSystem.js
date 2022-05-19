import './Styles.css';

const GridSystem = (props) => {
    const classes = 'grid-system ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default GridSystem;