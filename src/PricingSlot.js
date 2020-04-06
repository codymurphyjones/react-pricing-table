import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const propTypes = {
    highlighted: PropTypes.bool,
    onClick: PropTypes.func,
	onMouseOver: PropTypes.func,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
    title: PropTypes.string,
    priceText: PropTypes.string,
    buttonClass: PropTypes.string,
    buttonText: PropTypes.string,
    children: PropTypes.node,
    highlightColor: PropTypes.string,
    shouldDisplayButton: PropTypes.bool
};

const defaultProps = {
    highlighted: false,
    highlightColor: "#f44336",
    shouldDisplayButton: true
};

class PricingSlot extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            highlighted,
            highlightColor,
            buttonClass,
            buttonText,
            shouldDisplayButton
        } = this.props;
		
		
	
        return (
            <div onMouseOver={this.props.onMouseOver} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} className="Grid-cell">
                <ul className="price basic-border">
                    <li
                        style={
                            highlighted
                                ? { backgroundColor: highlightColor }
                                : {}
                        }
                        className={
                            (highlighted ? "highlighted" : "basic") + "-header"
                        }
                    >
                        {this.props.title}
                    </li>
                    <li className="tag">{this.props.priceText}</li>
                    {this.props.children}
                    {shouldDisplayButton && (
                        <li className="grey">
                            <Button
                                onClick={this.props.onClick}
                                color={highlightColor}
                                className={
                                    buttonClass ? buttonClass : "button-submit"
                                }
                            >
                                {buttonText}
                            </Button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

PricingSlot.propTypes = propTypes;
PricingSlot.defaultProps = defaultProps;

export default PricingSlot;
