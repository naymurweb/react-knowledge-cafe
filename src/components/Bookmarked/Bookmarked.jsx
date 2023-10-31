import SpentTime from "../SpentTime/SpentTime";
import PropTypes from "prop-types";

const Bookmarked = ({spentTime }) => {
    return (
        <div>
            <SpentTime spentTime={spentTime}/>
            
        </div>
    );
};

Bookmarked.propTypes={
    spentTime:PropTypes.number.isRequired
}

export default Bookmarked;