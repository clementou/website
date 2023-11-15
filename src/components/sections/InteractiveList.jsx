import React from 'react';
import PropTypes from 'prop-types';

class InteractiveList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: props.initialActiveItem
        };
    }

    handleClick = (item) => (e) => {
        e.preventDefault();
        this.setState({ activeItem: item });
    }

    renderButton = (item) => {
        const isActive = this.state.activeItem === item.id;
        return (
            <div className={this.props.itemBoxClass} key={item.id}>
                <button
                    className={isActive ? this.props.clickedClass : this.props.buttonClass}
                    onClick={this.handleClick(item.id)}
                >
                    {item.number}
                </button>
                <div className={this.props.lineBoxClass}>
                    {isActive && <div className={this.props.lineClass} />}
                </div>
            </div>
        );
    }

    renderActiveItemDescription() {
        const activeItem = this.props.items.find(item => item.id === this.state.activeItem);
        if (!activeItem) return null;

        return (
            <div>
                <p className={this.props.nameClass}>{activeItem.name}</p>
                <p className={this.props.descClass}>{activeItem.desc}</p>
            </div>
        );
    }

    render() {
        return (
            <div className={this.props.containerClass}>
                <div className={this.props.topClass}>
                    {this.props.items.map(item => this.renderButton(item))}
                </div>
                <div className={this.props.bottomClass}>
                    {this.renderActiveItemDescription()}
                </div>
            </div>
        );
    }

    static propTypes = {
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
}

export default InteractiveList;
