import { useState } from 'react';
import PropTypes from 'prop-types';

const InteractiveList = ({
    initialActiveItem,
    items,
    containerClass,
    topClass,
    bottomClass,
    itemBoxClass,
    buttonClass,
    clickedClass,
    lineBoxClass,
    lineClass,
    nameClass,
    descClass
}) => {
    const [activeItem, setActiveItem] = useState(initialActiveItem);

    const handleClick = (itemId) => (e) => {
        e.preventDefault();
        setActiveItem(itemId);
    };

    const renderButton = (item) => {
        const isActive = activeItem === item.id;
        return (
            <div className={itemBoxClass} key={item.id}>
                <button
                    className={isActive ? clickedClass : buttonClass}
                    onClick={handleClick(item.id)}
                >
                    {item.number}
                </button>
                <div className={lineBoxClass}>
                    {isActive && (
                        <div className={lineClass} />
                    )}
                </div>
            </div>
        );
    };

    const renderActiveItemDescription = () => {
        const activeItemDetails = items.find(item => item.id === activeItem);
        return activeItemDetails ? (
            <div>
                <p className={nameClass}>{activeItemDetails.name}</p>
                <p className={descClass}>{activeItemDetails.desc}</p>
            </div>
        ) : null;
    };

    return (
        <div className={containerClass}>
            <div className={topClass}>
                {items.map(renderButton)}
            </div>
            <div className={bottomClass}>
                {renderActiveItemDescription()}
            </div>
        </div>
    );
};

InteractiveList.propTypes = {
    initialActiveItem: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    })).isRequired,
    containerClass: PropTypes.string.isRequired,
    topClass: PropTypes.string.isRequired,
    bottomClass: PropTypes.string.isRequired,
    itemBoxClass: PropTypes.string.isRequired,
    buttonClass: PropTypes.string.isRequired,
    clickedClass: PropTypes.string.isRequired,
    lineBoxClass: PropTypes.string.isRequired,
    lineClass: PropTypes.string.isRequired,
    nameClass: PropTypes.string.isRequired,
    descClass: PropTypes.string.isRequired,
};


export default InteractiveList;
