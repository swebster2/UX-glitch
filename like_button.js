'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

var propsRT = function () {
    function mergeProps(inline, external) {
        var res = _.assign({}, inline, external);
        if (inline.hasOwnProperty('style')) {
            res.style = _.defaults(res.style, inline.style);
        }
        if (inline.hasOwnProperty('className') && external.hasOwnProperty('className')) {
            res.className = external.className + ' ' + inline.className;
        }
        return res;
    }
    return React.createElement('div', {}, '\n    Style:\n    ', React.createElement('select', { 'valueLink': this.linkState('key') }, React.createElement('option', { 'value': 'color' }, 'Color'), React.createElement('option', { 'value': 'backgroundColor' }, 'Background color'), React.createElement('option', { 'value': 'borderColor' }, 'Border color')), React.createElement('br', {}), '\n    Value:\n    ', React.createElement('select', { 'valueLink': this.linkState('val') }, React.createElement('option', { 'value': 'blue' }, 'Blue'), React.createElement('option', { 'value': 'red' }, 'Red'), React.createElement('option', { 'value': 'yellow' }, 'Yellow')), React.createElement('br', {}), React.createElement('br', {}), React.createElement('div', mergeProps({
        'style': {
            padding: '5px',
            textAlign: 'center',
            border: '1px solid'
        }
    }, this.getProps()), 'Sample'));
};