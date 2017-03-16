import React, { PureComponent, Component, PropTypes } from 'react';

export default class TabPanel extends Component {
  shouldComponentUpdate(nextProps) {
    let should = this.props.getContent !== nextProps.getContent ||
      this.props.children !== nextProps.children ||
      this.props.classNames !== nextProps.classNames ||
      this.props.selected !== nextProps.selected;
    if (should) {
      // console.log("should panel update?", should)
    }
    return this.props.getContent !== nextProps.getContent ||
      this.props.children !== nextProps.children ||
      this.props.classNames !== nextProps.classNames ||
      this.props.selected !== nextProps.selected;
  }

  render() {
    const { classNames, id, tabId, selected, children, getContent } = this.props;

    return (
      <div
        className={classNames}
        role="tabpanel"
        id={id}
        aria-labelledby={tabId}
        aria-hidden={selected ? 'false' : 'true'}
      >
        {selected && getContent && getContent()}
        {!getContent && children}
      </div>
    );
  }
}

TabPanel.propTypes = {
  getContent: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  id: PropTypes.string.isRequired,

  // generic props
  classNames: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  tabId: PropTypes.string.isRequired,
};

TabPanel.defaultProps = {
  getContent: undefined,
  children: undefined,
};
