import classes from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({children, isActive, ...props}) {
    return (
        <button
            {...props}
            className={
                isActive ? `${classes.button} ${classes.active}` : classes.button
            }
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    isActive: PropTypes.bool,
    props: PropTypes.shape({})
}