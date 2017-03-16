import React, { PureComponent, PropTypes } from 'react';

function onTabClick(selected, onClick, originalKey) {
  return () => !selected && onClick(originalKey);
}

export default class Tab extends PureComponent {
  shouldComponentUpdate(nextProps) {
    let should = this.props.children !== nextProps.children ||
      this.props.selected !== nextProps.selected ||
      this.props.classNames !== nextProps.classNames
    if (should) {
      // console.log("should Tab update?", should)
    }
    return this.props.children !== nextProps.children ||
      this.props.selected !== nextProps.selected ||
      this.props.classNames !== nextProps.classNames;
  }

  render() {
    const {
      id,
      classNames,
      selected,
      disabled,
      panelId,
      onClick,
      onFocus,
      onBlur,
      originalKey,
      children,
    } = this.props;

    return (
      <div
        ref={e => (this.tab = e)}
        role="tab"
        className={classNames}
        id={id}
        aria-selected={selected ? 'true' : 'false'}
        aria-expanded={selected ? 'true' : 'false'}
        aria-disabled={disabled ? 'true' : 'false'}
        aria-controls={panelId}
        tabIndex="0"
        onClick={onTabClick(selected, onClick, originalKey)}
        onFocus={onFocus(originalKey)}
        onBlur={onBlur}
      >
        {children}
      </div>
    );
  }
}

Tab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,

  // generic props
  panelId: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  originalKey: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  classNames: PropTypes.string.isRequired,
};

Tab.defaultProps = {
  children: undefined,
  disabled: false,
};
