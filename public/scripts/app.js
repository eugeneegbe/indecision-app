'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        // bind all class actions to the current instance
        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleOptionPick = _this.handleOptionPick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);

        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handleOptionPick',
        value: function handleOptionPick() {
            var random = Math.floor(Math.random() * this.state.options.length);
            var randomOption = this.state.options[random];
            alert(randomOption);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            //check if option exists or option provided is empty
            if (this.state.options.indexOf(option) > -1) {
                //option already exists
                return 'This option already exists';
            } else if (!option) {
                //empty string was provided | no option provided
                return 'Please enter a valid option';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var appTitle = 'Indecision';
            var subTitle = 'Put your life in the hands of a Computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: appTitle, subtitle: subTitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handleOptionPick: this.handleOptionPick
                }),
                React.createElement(OptionList, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    {
                        onClick: this.props.handleOptionPick,
                        disabled: !this.props.hasOptions
                    },
                    ' What should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var OptionList = function (_React$Component4) {
    _inherits(OptionList, _React$Component4);

    function OptionList() {
        _classCallCheck(this, OptionList);

        return _possibleConstructorReturn(this, (OptionList.__proto__ || Object.getPrototypeOf(OptionList)).apply(this, arguments));
    }

    _createClass(OptionList, [{
        key: 'render',
        value: function render() {
            var options = this.props.options;
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleDeleteOptions },
                    ' Remove all'
                ),
                options.map(function (option) {
                    return React.createElement(Option, { key: option, content: option });
                })
            );
        }
    }]);

    return OptionList;
}(React.Component);

var AddOption = function (_React$Component5) {
    _inherits(AddOption, _React$Component5);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this5.handleFormSubmit = _this5.handleFormSubmit.bind(_this5);
        _this5.state = {
            feedback: undefined
        };
        return _this5;
    }

    _createClass(AddOption, [{
        key: 'handleFormSubmit',
        value: function handleFormSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim(); //call trim to eliminate unwanted spaces

            // since addOption listens to feedback we need to update it's state
            var feedback = this.props.handleAddOption(option);
            console.log(feedback);
            this.setState(function () {
                return {
                    feedback: feedback
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.feedback && React.createElement(
                    'small',
                    null,
                    this.state.feedback
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleFormSubmit },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Option = function (_React$Component6) {
    _inherits(Option, _React$Component6);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    this.props.content
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var jsx = React.createElement(
    'div',
    null,
    React.createElement(IndecisionApp, null)
);

ReactDOM.render(jsx, document.getElementById('app'));
