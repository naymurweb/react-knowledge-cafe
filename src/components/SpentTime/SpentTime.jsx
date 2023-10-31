import PropTypes from "prop-types";

const SpentTime = ({spentTime }) => {
    return (
            <div className="bg-blue-200 p-5 text-2xl font-bold text-center text-blue-600 rounded-lg">
            <h3>Spent time on read : {spentTime} min</h3>
            </div>
            
    );
};

SpentTime.propTypes={
    spentTime:PropTypes.number.isRequired
}

export default SpentTime;