module.exports = function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.i = function (e) {
        return e
    }, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 1)
}([function (e, t) {
    e.exports = require("react")
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function u(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), c = n(0), f = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(c), a = function (e) {
        function t() {
            return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }

        return u(t, e), i(t, [{
            key: "componentDidMount", value: function () {
                console.log("執行了Layer")
            }
        }, {
            key: "render", value: function () {
                return f.default.createElement("div", {style: {color: "#0ff"}}, "3333331")
            }
        }]), t
    }(c.Component);
    t.default = a
}]);