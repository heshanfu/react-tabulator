"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var pick_react_known_prop_1 = require("pick-react-known-prop");
var ConfigUtils_1 = require("./ConfigUtils");
/* tslint:disable-next-line */
var Tabulator = require('tabulator-tables');
function isSameArray(a, b) {
    var i = a.length;
    if (i !== b.length) {
        return false;
    }
    while (i--) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: []
        };
        _this.ref = null;
        _this.htmlProps = null;
        _this.mainId = "tabulator-" + +new Date() + "-" + Math.floor(Math.random() * 9999999); // random id
        _this.table = null; // will be set once Tabulator instantiated
        _this.pickValidHTMLProps = function () {
            // run once
            if (!_this.htmlProps) {
                _this.htmlProps = pick_react_known_prop_1.pickHTMLProps(_this.props); // pick valid html props
                delete _this.htmlProps['data']; // don't render data & columns as attributes
                delete _this.htmlProps['columns'];
            }
        };
        return _this;
    }
    default_1.prototype.componentDidMount = function () {
        var domEle = ReactDOM.findDOMNode(this.ref); // mounted DOM element
        var that = this;
        var _a = this.props, columns = _a.columns, data = _a.data, options = _a.options;
        var propOptions = ConfigUtils_1.propsToOptions(this.props);
        new Tabulator(domEle, __assign({ columns: columns }, propOptions, { layout: 'fitColumns', // fit columns to width of table (optional)
            tableBuilding: function () {
                that.table = this; // keep table instance
                that.props.tableBuilding ? that.props.tableBuilding() : '';
            },
            dataLoaded: function () {
                that.props.dataLoaded ? that.props.dataLoaded() : '';
            } }, options, { data: data }));
        // await table.setData(data);
        // console.log('- componentDidMount');
        if (data && data.length > 0) {
            this.setState({ data: data });
        }
    };
    default_1.prototype.componentWillUnmount = function () {
        this.table.destroy();
    };
    // React 16.5.x - "getDerivedStateFromProps" replaces both "componentWillMount" & "componentWillReceiveProps"
    // This function will be ignored when running with React 15.6.x
    default_1.getDerivedStateFromProps = function (props, state) {
        // console.log('- getDerivedStateFromProps', props, state);
        var noData = !props.data || props.data.length === 0;
        if (!state && noData) {
            // first time (similar to: componentWillMount)
            return null;
        }
        if (state && state.data.length === 0 && props.data.length === 0) {
            // console.log('(data = [])');
            return null;
        }
        if (state && props.data) {
            // this triggers componentDidUpdate
            if (!isSameArray(state.data, props.data)) {
                return __assign({}, state, { data: props.data });
            }
        }
        return {};
    };
    // componentDidUpdate(prevProps, prevState)
    default_1.prototype.componentDidUpdate = function () {
        // console.log('- componentDidUpdate');
        this.table.setData(this.state.data);
    };
    default_1.prototype.render = function () {
        var _this = this;
        // console.log('*** render');
        this.pickValidHTMLProps();
        var className = this.props.className;
        return React.createElement("div", __assign({ ref: function (ref) { return (_this.ref = ref); }, "data-instance": this.mainId }, this.htmlProps, { className: className }));
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
