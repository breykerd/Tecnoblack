! function(n) {
    var i = {};

    function o(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    o.m = n, o.c = i, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) o.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 0)
}([function(e, t, n) {
    n(1), n(12), n(14), n(15), n(17), n(20), n(53), n(56), n(58), n(60), n(63), n(65), n(67)
}, function(e, t, n) {
    n(2), n(10), n(11)
}, function(e, t, n) {
    var i, o, r;
    window.$ = window.jQuery = n(3), window.Popper = n(4), n(6), window.SmoothScroll = n(8), n(9), i = jQuery, o = window, r = {
        name: "Tecnoblack",
        version: "2.1.8",
        vendors: [],
        body: i("body"),
        navbar: i(".navbar"),
        header: i(".header"),
        footer: i(".footer"),
        defaults: {
            googleApiKey: null,
            googleAnalyticsKey: null,
            reCaptchaSiteKey: null,
            reCaptchaLanguage: null,
            disableAOSonMobile: !0,
            smoothScroll: !1
        },
        init: function() {
            r.initVendors(), r.initBind(), r.initDrawer(), r.initFont(), r.initForm(), r.initMailer(), r.initModal(), r.initNavbar(), r.initOffcanvas(), r.initPopup(), r.initScroll(), r.initSection(), r.initSidebar(), r.initVideo(), i('[data-provide="anchor"]').each(function() {
                var e = i(this);
                e.append('<a class="anchor" href="#' + e.attr("id") + '"></a>')
            })
        },
        initVendors: function() {
            r.vendors.forEach(function(e) {
                var t = o.page["init" + e];
                "function" == typeof t && t()
            })
        },
        registerVendor: function(e) {
            r.vendors.push(e)
        }
    }, o.page = r, $(function() {})
}, function(an, ln, e) {
    var cn;
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */
    ! function(e, t) {
        "use strict";
        "object" == typeof an.exports ? an.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(S, e) {
        "use strict";

        function m(e) {
            return null != e && e === e.window
        }
        var t = [],
            E = S.document,
            i = Object.getPrototypeOf,
            a = t.slice,
            g = t.concat,
            l = t.push,
            o = t.indexOf,
            n = {},
            r = n.toString,
            v = n.hasOwnProperty,
            s = v.toString,
            c = s.call(Object),
            y = {},
            b = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            u = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function w(e, t, n) {
            var i, o, r = (n = n || E).createElement("script");
            if (r.text = e, t)
                for (i in u)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
            n.head.appendChild(r).parentNode.removeChild(r)
        }

        function T(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e
        }
        var C = function(e, t) {
                return new C.fn.init(e, t)
            },
            d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function f(e) {
            var t = !!e && "length" in e && e.length,
                n = T(e);
            return !b(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }
        C.fn = C.prototype = {
            jquery: "3.4.1",
            constructor: C,
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(e) {
                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = C.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return C.each(this, e)
            },
            map: function(n) {
                return this.pushStack(C.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: l,
            sort: t.sort,
            splice: t.splice
        }, C.extend = C.fn.extend = function() {
            var e, t, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || b(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (e = arguments[a]))
                    for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (C.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t], r = o && !Array.isArray(n) ? [] : o || C.isPlainObject(n) ? n : {}, o = !1, s[t] = C.extend(c, r, i)) : void 0 !== i && (s[t] = i));
            return s
        }, C.extend({
            expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== r.call(e)) && (!(t = i(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && s.call(n) === c)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t) {
                w(e, {
                    nonce: t && t.nonce
                })
            },
            each: function(e, t) {
                var n, i = 0;
                if (f(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(d, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (f(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : o.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) != s && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var i, o, r = 0,
                    s = [];
                if (f(e))
                    for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
                else
                    for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
                return g.apply([], s)
            },
            guid: 1,
            support: y
        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });
        var p =
            /*!
             * Sizzle CSS Selector Engine v2.3.4
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2019-04-08
             */
            function(n) {
                function d(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                }

                function o() {
                    x()
                }
                var e, p, w, r, s, h, f, m, T, l, c, x, S, a, E, g, u, v, y, C = "sizzle" + 1 * new Date,
                    b = n.document,
                    _ = 0,
                    i = 0,
                    k = le(),
                    A = le(),
                    I = le(),
                    D = le(),
                    O = function(e, t) {
                        return e === t && (c = !0), 0
                    },
                    L = {}.hasOwnProperty,
                    t = [],
                    P = t.pop,
                    N = t.push,
                    M = t.push,
                    j = t.slice,
                    H = function(e, t) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    F = "[\\x20\\t\\r\\n\\f]",
                    R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    W = "\\[" + F + "*(" + R + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + F + "*\\]",
                    V = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
                    z = new RegExp(F + "+", "g"),
                    q = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
                    B = new RegExp("^" + F + "*," + F + "*"),
                    U = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
                    G = new RegExp(F + "|>"),
                    Y = new RegExp(V),
                    K = new RegExp("^" + R + "$"),
                    Q = {
                        ID: new RegExp("^#(" + R + ")"),
                        CLASS: new RegExp("^\\.(" + R + ")"),
                        TAG: new RegExp("^(" + R + "|[*])"),
                        ATTR: new RegExp("^" + W),
                        PSEUDO: new RegExp("^" + V),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + $ + ")$", "i"),
                        needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
                    },
                    X = /HTML$/i,
                    Z = /^(?:input|select|textarea|button)$/i,
                    J = /^h\d$/i,
                    ee = /^[^{]+\{\s*\[native \w/,
                    te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ne = /[+~]/,
                    ie = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
                    oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    re = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    se = we(function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    M.apply(t = j.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
                } catch (e) {
                    M = {
                        apply: t.length ? function(e, t) {
                            N.apply(e, j.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }

                function ae(t, e, n, i) {
                    var o, r, s, a, l, c, u, d = e && e.ownerDocument,
                        f = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return n;
                    if (!i && ((e ? e.ownerDocument || e : b) !== S && x(e), e = e || S, E)) {
                        if (11 !== f && (l = te.exec(t)))
                            if (o = l[1]) {
                                if (9 === f) {
                                    if (!(s = e.getElementById(o))) return n;
                                    if (s.id === o) return n.push(s), n
                                } else if (d && (s = d.getElementById(o)) && y(e, s) && s.id === o) return n.push(s), n
                            } else {
                                if (l[2]) return M.apply(n, e.getElementsByTagName(t)), n;
                                if ((o = l[3]) && p.getElementsByClassName && e.getElementsByClassName) return M.apply(n, e.getElementsByClassName(o)), n
                            }
                        if (p.qsa && !D[t + " "] && (!g || !g.test(t)) && (1 !== f || "object" !== e.nodeName.toLowerCase())) {
                            if (u = t, d = e, 1 === f && G.test(t)) {
                                for ((a = e.getAttribute("id")) ? a = a.replace(oe, re) : e.setAttribute("id", a = C), r = (c = h(t)).length; r--;) c[r] = "#" + a + " " + be(c[r]);
                                u = c.join(","), d = ne.test(t) && ve(e.parentNode) || e
                            }
                            try {
                                return M.apply(n, d.querySelectorAll(u)), n
                            } catch (e) {
                                D(t, !0)
                            } finally {
                                a === C && e.removeAttribute("id")
                            }
                        }
                    }
                    return m(t.replace(q, "$1"), e, n, i)
                }

                function le() {
                    var i = [];
                    return function e(t, n) {
                        return i.push(t + " ") > w.cacheLength && delete e[i.shift()], e[t + " "] = n
                    }
                }

                function ce(e) {
                    return e[C] = !0, e
                }

                function ue(e) {
                    var t = S.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function de(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
                }

                function fe(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function pe(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function he(n) {
                    return function(e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && e.type === n
                    }
                }

                function me(t) {
                    return function(e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function ge(s) {
                    return ce(function(r) {
                        return r = +r, ce(function(e, t) {
                            for (var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                        })
                    })
                }

                function ve(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (e in p = ae.support = {}, s = ae.isXML = function(e) {
                        var t = e.namespaceURI,
                            n = (e.ownerDocument || e).documentElement;
                        return !X.test(t || n && n.nodeName || "HTML")
                    }, x = ae.setDocument = function(e) {
                        var t, n, i = e ? e.ownerDocument || e : b;
                        return i !== S && 9 === i.nodeType && i.documentElement && (a = (S = i).documentElement, E = !s(S), b !== S && (n = S.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", o, !1) : n.attachEvent && n.attachEvent("onunload", o)), p.attributes = ue(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), p.getElementsByTagName = ue(function(e) {
                            return e.appendChild(S.createComment("")), !e.getElementsByTagName("*").length
                        }), p.getElementsByClassName = ee.test(S.getElementsByClassName), p.getById = ue(function(e) {
                            return a.appendChild(e).id = C, !S.getElementsByName || !S.getElementsByName(C).length
                        }), p.getById ? (w.filter.ID = function(e) {
                            var t = e.replace(ie, d);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, w.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && E) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (w.filter.ID = function(e) {
                            var n = e.replace(ie, d);
                            return function(e) {
                                var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return t && t.value === n
                            }
                        }, w.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && E) {
                                var n, i, o, r = t.getElementById(e);
                                if (r) {
                                    if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                    for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                        if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                                }
                                return []
                            }
                        }), w.find.TAG = p.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, i = [],
                                o = 0,
                                r = t.getElementsByTagName(e);
                            if ("*" !== e) return r;
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }, w.find.CLASS = p.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
                        }, u = [], g = [], (p.qsa = ee.test(S.querySelectorAll)) && (ue(function(e) {
                            a.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + F + "*(?:value|" + $ + ")"), e.querySelectorAll("[id~=" + C + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || g.push(".#.+[+~]")
                        }), ue(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = S.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + F + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                        })), (p.matchesSelector = ee.test(v = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function(e) {
                            p.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), u.push("!=", V)
                        }), g = g.length && new RegExp(g.join("|")), u = u.length && new RegExp(u.join("|")), t = ee.test(a.compareDocumentPosition), y = t || ee.test(a.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, O = t ? function(e, t) {
                            if (e === t) return c = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === S || e.ownerDocument === b && y(b, e) ? -1 : t === S || t.ownerDocument === b && y(b, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : 4 & n ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return c = !0, 0;
                            var n, i = 0,
                                o = e.parentNode,
                                r = t.parentNode,
                                s = [e],
                                a = [t];
                            if (!o || !r) return e === S ? -1 : t === S ? 1 : o ? -1 : r ? 1 : l ? H(l, e) - H(l, t) : 0;
                            if (o === r) return fe(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) a.unshift(n);
                            for (; s[i] === a[i];) i++;
                            return i ? fe(s[i], a[i]) : s[i] === b ? -1 : a[i] === b ? 1 : 0
                        }), S
                    }, ae.matches = function(e, t) {
                        return ae(e, null, null, t)
                    }, ae.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== S && x(e), p.matchesSelector && E && !D[t + " "] && (!u || !u.test(t)) && (!g || !g.test(t))) try {
                            var n = v.call(e, t);
                            if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                        } catch (e) {
                            D(t, !0)
                        }
                        return 0 < ae(t, S, null, [e]).length
                    }, ae.contains = function(e, t) {
                        return (e.ownerDocument || e) !== S && x(e), y(e, t)
                    }, ae.attr = function(e, t) {
                        (e.ownerDocument || e) !== S && x(e);
                        var n = w.attrHandle[t.toLowerCase()],
                            i = n && L.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                        return void 0 !== i ? i : p.attributes || !E ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, ae.escape = function(e) {
                        return (e + "").replace(oe, re)
                    }, ae.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, ae.uniqueSort = function(e) {
                        var t, n = [],
                            i = 0,
                            o = 0;
                        if (c = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(O), c) {
                            for (; t = e[o++];) t === e[o] && (i = n.push(o));
                            for (; i--;) e.splice(n[i], 1)
                        }
                        return l = null, e
                    }, r = ae.getText = function(e) {
                        var t, n = "",
                            i = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                            } else if (3 === o || 4 === o) return e.nodeValue
                        } else
                            for (; t = e[i++];) n += r(t);
                        return n
                    }, (w = ae.selectors = {
                        cacheLength: 50,
                        createPseudo: ce,
                        match: Q,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(ie, d), e[3] = (e[3] || e[4] || e[5] || "").replace(ie, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(ie, d).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = k[e + " "];
                                return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && k(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(n, i, o) {
                                return function(e) {
                                    var t = ae.attr(e, n);
                                    return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(z, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
                                }
                            },
                            CHILD: function(h, e, t, m, g) {
                                var v = "nth" !== h.slice(0, 3),
                                    y = "last" !== h.slice(-4),
                                    b = "of-type" === e;
                                return 1 === m && 0 === g ? function(e) {
                                    return !!e.parentNode
                                } : function(e, t, n) {
                                    var i, o, r, s, a, l, c = v != y ? "nextSibling" : "previousSibling",
                                        u = e.parentNode,
                                        d = b && e.nodeName.toLowerCase(),
                                        f = !n && !b,
                                        p = !1;
                                    if (u) {
                                        if (v) {
                                            for (; c;) {
                                                for (s = e; s = s[c];)
                                                    if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                                                l = c = "only" === h && !l && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (l = [y ? u.firstChild : u.lastChild], y && f) {
                                            for (p = (a = (i = (o = (r = (s = u)[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === _ && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (p = a = 0) || l.pop();)
                                                if (1 === s.nodeType && ++p && s === e) {
                                                    o[h] = [_, a, p];
                                                    break
                                                }
                                        } else if (f && (p = a = (i = (o = (r = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === _ && i[1]), !1 === p)
                                            for (;
                                                (s = ++a && s && s[c] || (p = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++p || (f && ((o = (r = s[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] = [_, p]), s !== e)););
                                        return (p -= g) === m || p % m == 0 && 0 <= p / m
                                    }
                                }
                            },
                            PSEUDO: function(e, r) {
                                var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                return s[C] ? s(r) : 1 < s.length ? (t = [e, e, "", r], w.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, t) {
                                    for (var n, i = s(e, r), o = i.length; o--;) e[n = H(e, i[o])] = !(t[n] = i[o])
                                }) : function(e) {
                                    return s(e, 0, t)
                                }) : s
                            }
                        },
                        pseudos: {
                            not: ce(function(e) {
                                var i = [],
                                    o = [],
                                    a = f(e.replace(q, "$1"));
                                return a[C] ? ce(function(e, t, n, i) {
                                    for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                                }) : function(e, t, n) {
                                    return i[0] = e, a(i, null, n, o), i[0] = null, !o.pop()
                                }
                            }),
                            has: ce(function(t) {
                                return function(e) {
                                    return 0 < ae(t, e).length
                                }
                            }),
                            contains: ce(function(t) {
                                return t = t.replace(ie, d),
                                    function(e) {
                                        return -1 < (e.textContent || r(e)).indexOf(t)
                                    }
                            }),
                            lang: ce(function(n) {
                                return K.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(ie, d).toLowerCase(),
                                    function(e) {
                                        var t;
                                        do {
                                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(e) {
                                var t = n.location && n.location.hash;
                                return t && t.slice(1) === e.id
                            },
                            root: function(e) {
                                return e === a
                            },
                            focus: function(e) {
                                return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: me(!1),
                            disabled: me(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !w.pseudos.empty(e)
                            },
                            header: function(e) {
                                return J.test(e.nodeName)
                            },
                            input: function(e) {
                                return Z.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: ge(function() {
                                return [0]
                            }),
                            last: ge(function(e, t) {
                                return [t - 1]
                            }),
                            eq: ge(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: ge(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: ge(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: ge(function(e, t, n) {
                                for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                                return e
                            }),
                            gt: ge(function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                return e
                            })
                        }
                    }).pseudos.nth = w.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) w.pseudos[e] = pe(e);
                for (e in {
                        submit: !0,
                        reset: !0
                    }) w.pseudos[e] = he(e);

                function ye() {}

                function be(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i
                }

                function we(a, e, t) {
                    var l = e.dir,
                        c = e.next,
                        u = c || l,
                        d = t && "parentNode" === u,
                        f = i++;
                    return e.first ? function(e, t, n) {
                        for (; e = e[l];)
                            if (1 === e.nodeType || d) return a(e, t, n);
                        return !1
                    } : function(e, t, n) {
                        var i, o, r, s = [_, f];
                        if (n) {
                            for (; e = e[l];)
                                if ((1 === e.nodeType || d) && a(e, t, n)) return !0
                        } else
                            for (; e = e[l];)
                                if (1 === e.nodeType || d)
                                    if (o = (r = e[C] || (e[C] = {}))[e.uniqueID] || (r[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e;
                                    else {
                                        if ((i = o[u]) && i[0] === _ && i[1] === f) return s[2] = i[2];
                                        if ((o[u] = s)[2] = a(e, t, n)) return !0
                                    } return !1
                    }
                }

                function Te(o) {
                    return 1 < o.length ? function(e, t, n) {
                        for (var i = o.length; i--;)
                            if (!o[i](e, t, n)) return !1;
                        return !0
                    } : o[0]
                }

                function xe(e, t, n, i, o) {
                    for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
                    return s
                }

                function Se(p, h, m, g, v, e) {
                    return g && !g[C] && (g = Se(g)), v && !v[C] && (v = Se(v, e)), ce(function(e, t, n, i) {
                        var o, r, s, a = [],
                            l = [],
                            c = t.length,
                            u = e || function(e, t, n) {
                                for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                                return n
                            }(h || "*", n.nodeType ? [n] : n, []),
                            d = !p || !e && h ? u : xe(u, a, p, n, i),
                            f = m ? v || (e ? p : c || g) ? [] : t : d;
                        if (m && m(d, f, n, i), g)
                            for (o = xe(f, l), g(o, [], n, i), r = o.length; r--;)(s = o[r]) && (f[l[r]] = !(d[l[r]] = s));
                        if (e) {
                            if (v || p) {
                                if (v) {
                                    for (o = [], r = f.length; r--;)(s = f[r]) && o.push(d[r] = s);
                                    v(null, f = [], o, i)
                                }
                                for (r = f.length; r--;)(s = f[r]) && -1 < (o = v ? H(e, s) : a[r]) && (e[o] = !(t[o] = s))
                            }
                        } else f = xe(f === t ? f.splice(c, f.length) : f), v ? v(null, t, f, i) : M.apply(t, f)
                    })
                }

                function Ee(e) {
                    for (var o, t, n, i = e.length, r = w.relative[e[0].type], s = r || w.relative[" "], a = r ? 1 : 0, l = we(function(e) {
                            return e === o
                        }, s, !0), c = we(function(e) {
                            return -1 < H(o, e)
                        }, s, !0), u = [function(e, t, n) {
                            var i = !r && (n || t !== T) || ((o = t).nodeType ? l(e, t, n) : c(e, t, n));
                            return o = null, i
                        }]; a < i; a++)
                        if (t = w.relative[e[a].type]) u = [we(Te(u), t)];
                        else {
                            if ((t = w.filter[e[a].type].apply(null, e[a].matches))[C]) {
                                for (n = ++a; n < i && !w.relative[e[n].type]; n++);
                                return Se(1 < a && Te(u), 1 < a && be(e.slice(0, a - 1).concat({
                                    value: " " === e[a - 2].type ? "*" : ""
                                })).replace(q, "$1"), t, a < n && Ee(e.slice(a, n)), n < i && Ee(e = e.slice(n)), n < i && be(e))
                            }
                            u.push(t)
                        }
                    return Te(u)
                }
                return ye.prototype = w.filters = w.pseudos, w.setFilters = new ye, h = ae.tokenize = function(e, t) {
                    var n, i, o, r, s, a, l, c = A[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, a = [], l = w.preFilter; s;) {
                        for (r in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = U.exec(s)) && (n = i.shift(), o.push({
                                value: n,
                                type: i[0].replace(q, " ")
                            }), s = s.slice(n.length)), w.filter) !(i = Q[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                            value: n,
                            type: r,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? ae.error(e) : A(e, a).slice(0)
                }, f = ae.compile = function(e, t) {
                    var n, i = [],
                        o = [],
                        r = I[e + " "];
                    if (!r) {
                        for (t || (t = h(e)), n = t.length; n--;)(r = Ee(t[n]))[C] ? i.push(r) : o.push(r);
                        (r = I(e, function(g, v) {
                            function e(e, t, n, i, o) {
                                var r, s, a, l = 0,
                                    c = "0",
                                    u = e && [],
                                    d = [],
                                    f = T,
                                    p = e || b && w.find.TAG("*", o),
                                    h = _ += null == f ? 1 : Math.random() || .1,
                                    m = p.length;
                                for (o && (T = t === S || t || o); c !== m && null != (r = p[c]); c++) {
                                    if (b && r) {
                                        for (s = 0, t || r.ownerDocument === S || (x(r), n = !E); a = g[s++];)
                                            if (a(r, t || S, n)) {
                                                i.push(r);
                                                break
                                            }
                                        o && (_ = h)
                                    }
                                    y && ((r = !a && r) && l--, e && u.push(r))
                                }
                                if (l += c, y && c !== l) {
                                    for (s = 0; a = v[s++];) a(u, d, t, n);
                                    if (e) {
                                        if (0 < l)
                                            for (; c--;) u[c] || d[c] || (d[c] = P.call(i));
                                        d = xe(d)
                                    }
                                    M.apply(i, d), o && !e && 0 < d.length && 1 < l + v.length && ae.uniqueSort(i)
                                }
                                return o && (_ = h, T = f), u
                            }
                            var y = 0 < v.length,
                                b = 0 < g.length;
                            return y ? ce(e) : e
                        }(o, i))).selector = e
                    }
                    return r
                }, m = ae.select = function(e, t, n, i) {
                    var o, r, s, a, l, c = "function" == typeof e && e,
                        u = !i && h(e = c.selector || e);
                    if (n = n || [], 1 === u.length) {
                        if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && E && w.relative[r[1].type]) {
                            if (!(t = (w.find.ID(s.matches[0].replace(ie, d), t) || [])[0])) return n;
                            c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                        }
                        for (o = Q.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
                            if ((l = w.find[a]) && (i = l(s.matches[0].replace(ie, d), ne.test(r[0].type) && ve(t.parentNode) || t))) {
                                if (r.splice(o, 1), !(e = i.length && be(r))) return M.apply(n, i), n;
                                break
                            }
                    }
                    return (c || f(e, u))(i, t, !E, n, !t || ne.test(e) && ve(t.parentNode) || t), n
                }, p.sortStable = C.split("").sort(O).join("") === C, p.detectDuplicates = !!c, x(), p.sortDetached = ue(function(e) {
                    return 1 & e.compareDocumentPosition(S.createElement("fieldset"))
                }), ue(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || de("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), p.attributes && ue(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || de("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), ue(function(e) {
                    return null == e.getAttribute("disabled")
                }) || de($, function(e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), ae
            }(S);
        C.find = p, C.expr = p.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = p.uniqueSort, C.text = p.getText, C.isXMLDoc = p.isXML, C.contains = p.contains, C.escapeSelector = p.escape;

        function h(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && C(e).is(n)) break;
                    i.push(e)
                }
            return i
        }

        function x(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
        var _ = C.expr.match.needsContext;

        function k(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function I(e, n, i) {
            return b(n) ? C.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== i
            }) : n.nodeType ? C.grep(e, function(e) {
                return e === n !== i
            }) : "string" != typeof n ? C.grep(e, function(e) {
                return -1 < o.call(n, e) !== i
            }) : C.filter(n, e, i)
        }
        C.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, C.fn.extend({
            find: function(e) {
                var t, n, i = this.length,
                    o = this;
                if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (C.contains(o[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, o[t], n);
                return 1 < i ? C.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(I(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(I(this, e || [], !0))
            },
            is: function(e) {
                return !!I(this, "string" == typeof e && _.test(e) ? C(e) : e || [], !1).length
            }
        });
        var D, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function(e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || D, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), A.test(i[1]) && C.isPlainObject(t))
                    for (i in t) b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = E.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }).prototype = C.fn, D = C(E);
        var L = /^(?:parents|prev(?:Until|All))/,
            P = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function N(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        C.fn.extend({
            has: function(e) {
                var t = C(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (C.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, i = 0,
                    o = this.length,
                    r = [],
                    s = "string" != typeof e && C(e);
                if (!_.test(e))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                r.push(n);
                                break
                            }
                return this.pushStack(1 < r.length ? C.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? o.call(C(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), C.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return h(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return h(e, "parentNode", n)
            },
            next: function(e) {
                return N(e, "nextSibling")
            },
            prev: function(e) {
                return N(e, "previousSibling")
            },
            nextAll: function(e) {
                return h(e, "nextSibling")
            },
            prevAll: function(e) {
                return h(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return h(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return h(e, "previousSibling", n)
            },
            siblings: function(e) {
                return x((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return x(e.firstChild)
            },
            contents: function(e) {
                return void 0 !== e.contentDocument ? e.contentDocument : (k(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
            }
        }, function(i, o) {
            C.fn[i] = function(e, t) {
                var n = C.map(this, o, e);
                return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (P[i] || C.uniqueSort(n), L.test(i) && n.reverse()), this.pushStack(n)
            }
        });
        var M = /[^\x20\t\r\n\f]+/g;

        function j(e) {
            return e
        }

        function H(e) {
            throw e
        }

        function $(e, t, n, i) {
            var o;
            try {
                e && b(o = e.promise) ? o.call(e).done(t).fail(n) : e && b(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        C.Callbacks = function(i) {
            i = "string" == typeof i ? function(e) {
                var n = {};
                return C.each(e.match(M) || [], function(e, t) {
                    n[t] = !0
                }), n
            }(i) : C.extend({}, i);

            function n() {
                for (r = r || i.once, t = o = !0; a.length; l = -1)
                    for (e = a.shift(); ++l < s.length;) !1 === s[l].apply(e[0], e[1]) && i.stopOnFalse && (l = s.length, e = !1);
                i.memory || (e = !1), o = !1, r && (s = e ? [] : "")
            }
            var o, e, t, r, s = [],
                a = [],
                l = -1,
                c = {
                    add: function() {
                        return s && (e && !o && (l = s.length - 1, a.push(e)), function n(e) {
                            C.each(e, function(e, t) {
                                b(t) ? i.unique && c.has(t) || s.push(t) : t && t.length && "string" !== T(t) && n(t)
                            })
                        }(arguments), e && !o && n()), this
                    },
                    remove: function() {
                        return C.each(arguments, function(e, t) {
                            for (var n; - 1 < (n = C.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? -1 < C.inArray(e, s) : 0 < s.length
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return r = a = [], s = e = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return r = a = [], e || o || (s = e = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(e, t) {
                        return r || (t = [e, (t = t || []).slice ? t.slice() : t], a.push(t), o || n()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!t
                    }
                };
            return c
        }, C.extend({
            Deferred: function(e) {
                var r = [
                        ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                        ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                    ],
                    o = "pending",
                    s = {
                        state: function() {
                            return o
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return s.then(null, e)
                        },
                        pipe: function() {
                            var o = arguments;
                            return C.Deferred(function(i) {
                                C.each(r, function(e, t) {
                                    var n = b(o[t[4]]) && o[t[4]];
                                    a[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        e && b(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                    })
                                }), o = null
                            }).promise()
                        },
                        then: function(t, n, i) {
                            var l = 0;

                            function c(o, r, s, a) {
                                return function() {
                                    function e() {
                                        var e, t;
                                        if (!(o < l)) {
                                            if ((e = s.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? a ? t.call(e, c(l, r, j, a), c(l, r, H, a)) : (l++, t.call(e, c(l, r, j, a), c(l, r, H, a), c(l, r, j, r.notifyWith))) : (s !== j && (n = void 0, i = [e]), (a || r.resolveWith)(n, i))
                                        }
                                    }
                                    var n = this,
                                        i = arguments,
                                        t = a ? e : function() {
                                            try {
                                                e()
                                            } catch (e) {
                                                C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (s !== H && (n = void 0, i = [e]), r.rejectWith(n, i))
                                            }
                                        };
                                    o ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), S.setTimeout(t))
                                }
                            }
                            return C.Deferred(function(e) {
                                r[0][3].add(c(0, e, b(i) ? i : j, e.notifyWith)), r[1][3].add(c(0, e, b(t) ? t : j)), r[2][3].add(c(0, e, b(n) ? n : H))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? C.extend(e, s) : s
                        }
                    },
                    a = {};
                return C.each(r, function(e, t) {
                    var n = t[2],
                        i = t[5];
                    s[t[1]] = n.add, i && n.add(function() {
                        o = i
                    }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                        return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                    }, a[t[0] + "With"] = n.fireWith
                }), s.promise(a), e && e.call(a, a), a
            },
            when: function(e) {
                function t(t) {
                    return function(e) {
                        o[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(o, r)
                    }
                }
                var n = arguments.length,
                    i = n,
                    o = Array(i),
                    r = a.call(arguments),
                    s = C.Deferred();
                if (n <= 1 && ($(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || b(r[i] && r[i].then))) return s.then();
                for (; i--;) $(r[i], t(i), s.reject);
                return s.promise()
            }
        });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function(e, t) {
            S.console && S.console.warn && e && F.test(e.name) && S.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, C.readyException = function(e) {
            S.setTimeout(function() {
                throw e
            })
        };
        var R = C.Deferred();

        function W() {
            E.removeEventListener("DOMContentLoaded", W), S.removeEventListener("load", W), C.ready()
        }
        C.fn.ready = function(e) {
            return R.then(e).catch(function(e) {
                C.readyException(e)
            }), this
        }, C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || R.resolveWith(E, [C])
            }
        }), C.ready.then = R.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? S.setTimeout(C.ready) : (E.addEventListener("DOMContentLoaded", W), S.addEventListener("load", W));
        var V = function(e, t, n, i, o, r, s) {
                var a = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === T(n))
                    for (a in o = !0, n) V(e, t, a, n[a], !0, r, s);
                else if (void 0 !== i && (o = !0, b(i) || (s = !0), c && (t = s ? (t.call(e, i), null) : (c = t, function(e, t, n) {
                        return c.call(C(e), n)
                    })), t))
                    for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
            },
            z = /^-ms-/,
            q = /-([a-z])/g;

        function B(e, t) {
            return t.toUpperCase()
        }

        function U(e) {
            return e.replace(z, "ms-").replace(q, B)
        }

        function G(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }

        function Y() {
            this.expando = C.expando + Y.uid++
        }
        Y.uid = 1, Y.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var i, o = this.cache(e);
                if ("string" == typeof t) o[U(t)] = n;
                else
                    for (i in t) o[U(i)] = t[i];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in i ? [t] : t.match(M) || []).length;
                        for (; n--;) delete i[t[n]]
                    }
                    void 0 !== t && !C.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t)
            }
        };
        var K = new Y,
            Q = new Y,
            X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Z = /[A-Z]/g;

        function J(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : X.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    Q.set(e, t, n)
                } else n = void 0;
            return n
        }
        C.extend({
            hasData: function(e) {
                return Q.hasData(e) || K.hasData(e)
            },
            data: function(e, t, n) {
                return Q.access(e, t, n)
            },
            removeData: function(e, t) {
                Q.remove(e, t)
            },
            _data: function(e, t, n) {
                return K.access(e, t, n)
            },
            _removeData: function(e, t) {
                K.remove(e, t)
            }
        }), C.fn.extend({
            data: function(n, e) {
                var t, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                    Q.set(this, n)
                }) : V(this, function(e) {
                    var t;
                    if (r && void 0 === e) return void 0 !== (t = Q.get(r, n)) ? t : void 0 !== (t = J(r, n)) ? t : void 0;
                    this.each(function() {
                        Q.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
                if (this.length && (o = Q.get(r), 1 === r.nodeType && !K.get(r, "hasDataAttrs"))) {
                    for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = U(i.slice(5)), J(r, i, o[i]));
                    K.set(r, "hasDataAttrs", !0)
                }
                return o
            },
            removeData: function(e) {
                return this.each(function() {
                    Q.remove(this, e)
                })
            }
        }), C.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, C.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = C._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
                    C.dequeue(e, t)
                }, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return K.get(e, n) || K.access(e, n, {
                    empty: C.Callbacks("once memory").add(function() {
                        K.remove(e, [t + "queue", n])
                    })
                })
            }
        }), C.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                    var e = C.queue(this, t, n);
                    C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    C.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                function n() {
                    --o || r.resolveWith(s, [s])
                }
                var i, o = 1,
                    r = C.Deferred(),
                    s = this,
                    a = this.length;
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = K.get(s[a], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
                return n(), r.promise(t)
            }
        });
        var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
            ne = ["Top", "Right", "Bottom", "Left"],
            ie = E.documentElement,
            oe = function(e) {
                return C.contains(e.ownerDocument, e)
            },
            re = {
                composed: !0
            };
        ie.getRootNode && (oe = function(e) {
            return C.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
        });

        function se(e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
            return o
        }
        var ae = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === C.css(e, "display")
        };

        function le(e, t, n, i) {
            var o, r, s = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return C.css(e, t, "")
                },
                l = a(),
                c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                u = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && te.exec(C.css(e, t));
            if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; s--;) C.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
                u *= 2, C.style(e, t, u + c), n = n || []
            }
            return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
        }
        var ce = {};

        function ue(e, t) {
            for (var n, i, o, r, s, a, l, c = [], u = 0, d = e.length; u < d; u++)(i = e[u]).style && (n = i.style.display, t ? ("none" === n && (c[u] = K.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && ae(i) && (c[u] = (l = s = r = void 0, s = (o = i).ownerDocument, a = o.nodeName, (l = ce[a]) || (r = s.body.appendChild(s.createElement(a)), l = C.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), ce[a] = l)))) : "none" !== n && (c[u] = "none", K.set(i, "display", n)));
            for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
            return e
        }
        C.fn.extend({
            show: function() {
                return ue(this, !0)
            },
            hide: function() {
                return ue(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ae(this) ? C(this).show() : C(this).hide()
                })
            }
        });
        var de = /^(?:checkbox|radio)$/i,
            fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            pe = /^$|^module$|\/(?:java|ecma)script/i,
            he = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function me(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? C.merge([e], n) : n
        }

        function ge(e, t) {
            for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
        }
        he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;
        var ve, ye, be = /<|&#?\w+;/;

        function we(e, t, n, i, o) {
            for (var r, s, a, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                if ((r = e[p]) || 0 === r)
                    if ("object" === T(r)) C.merge(f, r.nodeType ? [r] : r);
                    else if (be.test(r)) {
                for (s = s || d.appendChild(t.createElement("div")), a = (fe.exec(r) || ["", ""])[1].toLowerCase(), l = he[a] || he._default, s.innerHTML = l[1] + C.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
                C.merge(f, s.childNodes), (s = d.firstChild).textContent = ""
            } else f.push(t.createTextNode(r));
            for (d.textContent = "", p = 0; r = f[p++];)
                if (i && -1 < C.inArray(r, i)) o && o.push(r);
                else if (c = oe(r), s = me(d.appendChild(r), "script"), c && ge(s), n)
                for (u = 0; r = s[u++];) pe.test(r.type || "") && n.push(r);
            return d
        }
        ve = E.createDocumentFragment().appendChild(E.createElement("div")), (ye = E.createElement("input")).setAttribute("type", "radio"), ye.setAttribute("checked", "checked"), ye.setAttribute("name", "t"), ve.appendChild(ye), y.checkClone = ve.cloneNode(!0).cloneNode(!0).lastChild.checked, ve.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ve.cloneNode(!0).lastChild.defaultValue;
        var Te = /^key/,
            xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Se = /^([^.]*)(?:\.(.+)|)/;

        function Ee() {
            return !0
        }

        function Ce() {
            return !1
        }

        function _e(e, t) {
            return e === function() {
                try {
                    return E.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function ke(e, t, n, i, o, r) {
            var s, a;
            if ("object" == typeof t) {
                for (a in "string" != typeof n && (i = i || n, n = void 0), t) ke(e, a, n, i, t[a], r);
                return e
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Ce;
            else if (!o) return e;
            return 1 === r && (s = o, (o = function(e) {
                return C().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = C.guid++)), e.each(function() {
                C.event.add(this, t, o, i, n)
            })
        }

        function Ae(e, o, r) {
            r ? (K.set(e, o, !1), C.event.add(e, o, {
                namespace: !1,
                handler: function(e) {
                    var t, n, i = K.get(this, o);
                    if (1 & e.isTrigger && this[o]) {
                        if (i.length)(C.event.special[o] || {}).delegateType && e.stopPropagation();
                        else if (i = a.call(arguments), K.set(this, o, i), t = r(this, o), this[o](), i !== (n = K.get(this, o)) || t ? K.set(this, o, !1) : n = {}, i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                    } else i.length && (K.set(this, o, {
                        value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === K.get(e, o) && C.event.add(e, o, Ee)
        }
        C.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, s, a, l, c, u, d, f, p, h, m, g = K.get(t);
                if (g)
                    for (n.handler && (n = (r = n).handler, o = r.selector), o && C.find.matchesSelector(ie, o), n.guid || (n.guid = C.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                            return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                        }), c = (e = (e || "").match(M) || [""]).length; c--;) p = m = (a = Se.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), p && (d = C.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = C.event.special[p] || {}, u = C.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && C.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r), (f = l[p]) || ((f = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(p, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), C.event.global[p] = !0)
            },
            remove: function(e, t, n, i, o) {
                var r, s, a, l, c, u, d, f, p, h, m, g = K.hasData(e) && K.get(e);
                if (g && (l = g.events)) {
                    for (c = (t = (t || "").match(M) || [""]).length; c--;)
                        if (p = m = (a = Se.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
                            for (d = C.event.special[p] || {}, f = l[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = f.length; r--;) u = f[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                            s && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || C.removeEvent(e, p, g.handle), delete l[p])
                        } else
                            for (p in l) C.event.remove(e, p + t[c], n, i, !0);
                    C.isEmptyObject(l) && K.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, o, r, s, a = C.event.fix(e),
                    l = new Array(arguments.length),
                    c = (K.get(this, "events") || {})[a.type] || [],
                    u = C.event.special[a.type] || {};
                for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                    for (s = C.event.handlers.call(this, a, c), t = 0;
                        (o = s[t++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((C.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, r, s, a = [],
                    l = t.delegateCount,
                    c = e.target;
                if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < C(o, this).index(c) : C.find(o, this, null, [c]).length), s[o] && r.push(i);
                            r.length && a.push({
                                elem: c,
                                handlers: r
                            })
                        }
                return c = this, l < t.length && a.push({
                    elem: c,
                    handlers: t.slice(l)
                }), a
            },
            addProp: function(t, e) {
                Object.defineProperty(C.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: b(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(e) {
                return e[C.expando] ? e : new C.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return de.test(t.type) && t.click && k(t, "input") && Ae(t, "click", Ee), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return de.test(t.type) && t.click && k(t, "input") && Ae(t, "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return de.test(t.type) && t.click && k(t, "input") && K.get(t, "click") || k(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, C.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, C.Event = function(e, t) {
            if (!(this instanceof C.Event)) return new C.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
        }, C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: Ce,
            isPropagationStopped: Ce,
            isImmediatePropagationStopped: Ce,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, C.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, C.event.addProp), C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            C.event.special[e] = {
                setup: function() {
                    return Ae(this, e, _e), !1
                },
                trigger: function() {
                    return Ae(this, e), !0
                },
                delegateType: t
            }
        }), C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, o) {
            C.event.special[e] = {
                delegateType: o,
                bindType: o,
                handle: function(e) {
                    var t, n = e.relatedTarget,
                        i = e.handleObj;
                    return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
                }
            }
        }), C.fn.extend({
            on: function(e, t, n, i) {
                return ke(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return ke(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function() {
                    C.event.remove(this, e, n, t)
                });
                for (o in e) this.off(o, t, e[o]);
                return this
            }
        });
        var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            De = /<script|<style|<link/i,
            Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Pe(e, t) {
            return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
        }

        function Ne(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Me(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function je(e, t) {
            var n, i, o, r, s, a, l, c;
            if (1 === t.nodeType) {
                if (K.hasData(e) && (r = K.access(e), s = K.set(t, r), c = r.events))
                    for (o in delete s.handle, s.events = {}, c)
                        for (n = 0, i = c[o].length; n < i; n++) C.event.add(t, o, c[o][n]);
                Q.hasData(e) && (a = Q.access(e), l = C.extend({}, a), Q.set(t, l))
            }
        }

        function He(n, i, o, r) {
            i = g.apply([], i);
            var e, t, s, a, l, c, u = 0,
                d = n.length,
                f = d - 1,
                p = i[0],
                h = b(p);
            if (h || 1 < d && "string" == typeof p && !y.checkClone && Oe.test(p)) return n.each(function(e) {
                var t = n.eq(e);
                h && (i[0] = p.call(this, e, t.html())), He(t, i, o, r)
            });
            if (d && (t = (e = we(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
                for (a = (s = C.map(me(e, "script"), Ne)).length; u < d; u++) l = e, u !== f && (l = C.clone(l, !0, !0), a && C.merge(s, me(l, "script"))), o.call(n[u], l, u);
                if (a)
                    for (c = s[s.length - 1].ownerDocument, C.map(s, Me), u = 0; u < a; u++) l = s[u], pe.test(l.type || "") && !K.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }) : w(l.textContent.replace(Le, ""), l, c))
            }
            return n
        }

        function $e(e, t, n) {
            for (var i, o = t ? C.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || C.cleanData(me(i)), i.parentNode && (n && oe(i) && ge(me(i, "script")), i.parentNode.removeChild(i));
            return e
        }
        C.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ie, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, o, r, s, a, l, c, u = e.cloneNode(!0),
                    d = oe(e);
                if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                    for (s = me(u), i = 0, o = (r = me(e)).length; i < o; i++) a = r[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && de.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
                if (t)
                    if (n)
                        for (r = r || me(e), s = s || me(u), i = 0, o = r.length; i < o; i++) je(r[i], s[i]);
                    else je(e, u);
                return 0 < (s = me(u, "script")).length && ge(s, !d && me(e, "script")), u
            },
            cleanData: function(e) {
                for (var t, n, i, o = C.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (G(n)) {
                        if (t = n[K.expando]) {
                            if (t.events)
                                for (i in t.events) o[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                            n[K.expando] = void 0
                        }
                        n[Q.expando] && (n[Q.expando] = void 0)
                    }
            }
        }), C.fn.extend({
            detach: function(e) {
                return $e(this, e, !0)
            },
            remove: function(e) {
                return $e(this, e)
            },
            text: function(e) {
                return V(this, function(e) {
                    return void 0 === e ? C.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return He(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return He(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Pe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return He(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return He(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(me(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return C.clone(this, e, t)
                })
            },
            html: function(e) {
                return V(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !De.test(e) && !he[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(me(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return He(this, arguments, function(e) {
                    var t = this.parentNode;
                    C.inArray(this, n) < 0 && (C.cleanData(me(this)), t && t.replaceChild(e, this))
                }, n)
            }
        }), C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, s) {
            C.fn[e] = function(e) {
                for (var t, n = [], i = C(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), C(i[r])[s](t), l.apply(n, t.get());
                return this.pushStack(n)
            }
        });
        var Fe, Re, We, Ve, ze, qe, Be, Ue = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
            Ge = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = S), t.getComputedStyle(e)
            },
            Ye = new RegExp(ne.join("|"), "i");

        function Ke() {
            if (Be) {
                qe.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Be.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(qe).appendChild(Be);
                var e = S.getComputedStyle(Be);
                Fe = "1%" !== e.top, ze = 12 === Qe(e.marginLeft), Be.style.right = "60%", Ve = 36 === Qe(e.right), Re = 36 === Qe(e.width), Be.style.position = "absolute", We = 12 === Qe(Be.offsetWidth / 3), ie.removeChild(qe), Be = null
            }
        }

        function Qe(e) {
            return Math.round(parseFloat(e))
        }

        function Xe(e, t, n) {
            var i, o, r, s, a = e.style;
            return (n = n || Ge(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || oe(e) || (s = C.style(e, t)), !y.pixelBoxStyles() && Ue.test(s) && Ye.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
        }

        function Ze(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }
        qe = E.createElement("div"), (Be = E.createElement("div")).style && (Be.style.backgroundClip = "content-box", Be.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Be.style.backgroundClip, C.extend(y, {
            boxSizingReliable: function() {
                return Ke(), Re
            },
            pixelBoxStyles: function() {
                return Ke(), Ve
            },
            pixelPosition: function() {
                return Ke(), Fe
            },
            reliableMarginLeft: function() {
                return Ke(), ze
            },
            scrollboxSize: function() {
                return Ke(), We
            }
        }));
        var Je = ["Webkit", "Moz", "ms"],
            et = E.createElement("div").style,
            tt = {};

        function nt(e) {
            var t = C.cssProps[e] || tt[e];
            return t || (e in et ? e : tt[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--;)
                    if ((e = Je[n] + t) in et) return e
            }(e) || e)
        }
        var it = /^(none|table(?!-c[ea]).+)/,
            ot = /^--/,
            rt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            st = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function at(e, t, n) {
            var i = te.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function lt(e, t, n, i, o, r) {
            var s = "width" === t ? 1 : 0,
                a = 0,
                l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (l += C.css(e, n + ne[s], !0, o)), i ? ("content" === n && (l -= C.css(e, "padding" + ne[s], !0, o)), "margin" !== n && (l -= C.css(e, "border" + ne[s] + "Width", !0, o))) : (l += C.css(e, "padding" + ne[s], !0, o), "padding" !== n ? l += C.css(e, "border" + ne[s] + "Width", !0, o) : a += C.css(e, "border" + ne[s] + "Width", !0, o));
            return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
        }

        function ct(e, t, n) {
            var i = Ge(e),
                o = (!y.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i),
                r = o,
                s = Xe(e, t, i),
                a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ue.test(s)) {
                if (!n) return s;
                s = "auto"
            }
            return (!y.boxSizingReliable() && o || "auto" === s || !parseFloat(s) && "inline" === C.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + lt(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
        }

        function ut(e, t, n, i, o) {
            return new ut.prototype.init(e, t, n, i, o)
        }
        C.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Xe(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, s, a = U(t),
                        l = ot.test(t),
                        c = e.style;
                    if (l || (t = nt(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                    "string" === (r = typeof n) && (o = te.exec(n)) && o[1] && (n = le(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (C.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function(e, t, n, i) {
                var o, r, s, a = U(t);
                return ot.test(t) || (t = nt(a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Xe(e, t, i)), "normal" === o && t in st && (o = st[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }), C.each(["height", "width"], function(e, l) {
            C.cssHooks[l] = {
                get: function(e, t, n) {
                    if (t) return !it.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ct(e, l, n) : se(e, rt, function() {
                        return ct(e, l, n)
                    })
                },
                set: function(e, t, n) {
                    var i, o = Ge(e),
                        r = !y.scrollboxSize() && "absolute" === o.position,
                        s = (r || n) && "border-box" === C.css(e, "boxSizing", !1, o),
                        a = n ? lt(e, l, n, s, o) : 0;
                    return s && r && (a -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(o[l]) - lt(e, l, "border", !1, o) - .5)), a && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[l] = t, t = C.css(e, l)), at(0, t, a)
                }
            }
        }), C.cssHooks.marginLeft = Ze(y.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(Xe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(o, r) {
            C.cssHooks[o + r] = {
                expand: function(e) {
                    for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + ne[t] + r] = i[t] || i[t - 2] || i[0];
                    return n
                }
            }, "margin" !== o && (C.cssHooks[o + r].set = at)
        }), C.fn.extend({
            css: function(e, t) {
                return V(this, function(e, t, n) {
                    var i, o, r = {},
                        s = 0;
                    if (Array.isArray(t)) {
                        for (i = Ge(e), o = t.length; s < o; s++) r[t[s]] = C.css(e, t[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }), ((C.Tween = ut).prototype = {
            constructor: ut,
            init: function(e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (C.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = ut.propHooks[this.prop];
                return e && e.get ? e.get(this) : ut.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = ut.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ut.propHooks._default.set(this), this
            }
        }).init.prototype = ut.prototype, (ut.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[nt(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = ut.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, C.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, C.fx = ut.prototype.init, C.fx.step = {};
        var dt, ft, pt, ht, mt = /^(?:toggle|show|hide)$/,
            gt = /queueHooks$/;

        function vt() {
            ft && (!1 === E.hidden && S.requestAnimationFrame ? S.requestAnimationFrame(vt) : S.setTimeout(vt, C.fx.interval), C.fx.tick())
        }

        function yt() {
            return S.setTimeout(function() {
                dt = void 0
            }), dt = Date.now()
        }

        function bt(e, t) {
            var n, i = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ne[i])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function wt(e, t, n) {
            for (var i, o = (Tt.tweeners[t] || []).concat(Tt.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                if (i = o[r].call(n, t, e)) return i
        }

        function Tt(r, e, t) {
            var n, s, i = 0,
                o = Tt.prefilters.length,
                a = C.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (s) return !1;
                    for (var e = dt || yt(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++) c.tweens[i].run(n);
                    return a.notifyWith(r, [c, n, t]), n < 1 && o ? t : (o || a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c]), !1)
                },
                c = a.promise({
                    elem: r,
                    props: C.extend({}, e),
                    opts: C.extend(!0, {
                        specialEasing: {},
                        easing: C.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: dt || yt(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        var n = C.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function(e) {
                        var t = 0,
                            n = e ? c.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; t < n; t++) c.tweens[t].run(1);
                        return e ? (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, e])) : a.rejectWith(r, [c, e]), this
                    }
                }),
                u = c.props;
            for (! function(e, t) {
                    var n, i, o, r, s;
                    for (n in e)
                        if (o = t[i = U(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = C.cssHooks[i]) && "expand" in s)
                            for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                        else t[i] = o
                }(u, c.opts.specialEasing); i < o; i++)
                if (n = Tt.prefilters[i].call(c, r, u, c.opts)) return b(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
            return C.map(u, wt, c), b(c.opts.start) && c.opts.start.call(r, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
                elem: r,
                anim: c,
                queue: c.opts.queue
            })), c
        }
        C.Animation = C.extend(Tt, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return le(n.elem, e, te.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                for (var n, i = 0, o = (e = b(e) ? (t = e, ["*"]) : e.match(M)).length; i < o; i++) n = e[i], Tt.tweeners[n] = Tt.tweeners[n] || [], Tt.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var i, o, r, s, a, l, c, u, d = "width" in t || "height" in t,
                    f = this,
                    p = {},
                    h = e.style,
                    m = e.nodeType && ae(e),
                    g = K.get(e, "fxshow");
                for (i in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || a()
                    }), s.unqueued++, f.always(function() {
                        f.always(function() {
                            s.unqueued--, C.queue(e, "fx").length || s.empty.fire()
                        })
                    })), t)
                    if (o = t[i], mt.test(o)) {
                        if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[i]) continue;
                            m = !0
                        }
                        p[i] = g && g[i] || C.style(e, i)
                    }
                if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                    for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = K.get(e, "display")), "none" === (u = C.css(e, "display")) && (c ? u = c : (ue([e], !0), c = e.style.display || c, u = C.css(e, "display"), ue([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(e, "float") && (l || (f.done(function() {
                            h.display = c
                        }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                        })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = K.access(e, "fxshow", {
                        display: c
                    }), r && (g.hidden = !m), m && ue([e], !0), f.done(function() {
                        for (i in m || ue([e]), K.remove(e, "fxshow"), p) C.style(e, i, p[i])
                    })), l = wt(m ? g[i] : 0, i, f), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(e, t) {
                t ? Tt.prefilters.unshift(e) : Tt.prefilters.push(e)
            }
        }), C.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? C.extend({}, e) : {
                complete: n || !n && t || b(e) && e,
                duration: e,
                easing: n && t || t && !b(t) && t
            };
            return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                b(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
            }, i
        }, C.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(t, e, n, i) {
                function o() {
                    var e = Tt(this, C.extend({}, t), s);
                    (r || K.get(this, "finish")) && e.stop(!0)
                }
                var r = C.isEmptyObject(t),
                    s = C.speed(e, n, i);
                return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(o, e, r) {
                function s(e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                }
                return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                    var e = !0,
                        t = null != o && o + "queueHooks",
                        n = C.timers,
                        i = K.get(this);
                    if (t) i[t] && i[t].stop && s(i[t]);
                    else
                        for (t in i) i[t] && i[t].stop && gt.test(t) && s(i[t]);
                    for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                    !e && r || C.dequeue(this, o)
                })
            },
            finish: function(s) {
                return !1 !== s && (s = s || "fx"), this.each(function() {
                    var e, t = K.get(this),
                        n = t[s + "queue"],
                        i = t[s + "queueHooks"],
                        o = C.timers,
                        r = n ? n.length : 0;
                    for (t.finish = !0, C.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }), C.each(["toggle", "show", "hide"], function(e, i) {
            var o = C.fn[i];
            C.fn[i] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(bt(i, !0), e, t, n)
            }
        }), C.each({
            slideDown: bt("show"),
            slideUp: bt("hide"),
            slideToggle: bt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, i) {
            C.fn[e] = function(e, t, n) {
                return this.animate(i, e, t, n)
            }
        }), C.timers = [], C.fx.tick = function() {
            var e, t = 0,
                n = C.timers;
            for (dt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || C.fx.stop(), dt = void 0
        }, C.fx.timer = function(e) {
            C.timers.push(e), C.fx.start()
        }, C.fx.interval = 13, C.fx.start = function() {
            ft || (ft = !0, vt())
        }, C.fx.stop = function() {
            ft = null
        }, C.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, C.fn.delay = function(i, e) {
            return i = C.fx && C.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
                var n = S.setTimeout(e, i);
                t.stop = function() {
                    S.clearTimeout(n)
                }
            })
        }, pt = E.createElement("input"), ht = E.createElement("select").appendChild(E.createElement("option")), pt.type = "checkbox", y.checkOn = "" !== pt.value, y.optSelected = ht.selected, (pt = E.createElement("input")).value = "t", pt.type = "radio", y.radioValue = "t" === pt.value;
        var xt, St = C.expr.attrHandle;
        C.fn.extend({
            attr: function(e, t) {
                return V(this, C.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    C.removeAttr(this, e)
                })
            }
        }), C.extend({
            attr: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === r && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? xt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!y.radioValue && "radio" === t && k(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i = 0,
                    o = t && t.match(M);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++];) e.removeAttribute(n)
            }
        }), xt = {
            set: function(e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var s = St[t] || C.find.attr;
            St[t] = function(e, t, n) {
                var i, o, r = t.toLowerCase();
                return n || (o = St[r], St[r] = i, i = null != s(e, t, n) ? r : null, St[r] = o), i
            }
        });
        var Et = /^(?:input|select|textarea|button)$/i,
            Ct = /^(?:a|area)$/i;

        function _t(e) {
            return (e.match(M) || []).join(" ")
        }

        function kt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function At(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
        }
        C.fn.extend({
            prop: function(e, t) {
                return V(this, C.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[C.propFix[e] || e]
                })
            }
        }), C.extend({
            prop: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Et.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), y.optSelected || (C.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            C.propFix[this.toLowerCase()] = this
        }), C.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (b(t)) return this.each(function(e) {
                    C(this).addClass(t.call(this, e, kt(this)))
                });
                if ((e = At(t)).length)
                    for (; n = this[l++];)
                        if (o = kt(n), i = 1 === n.nodeType && " " + _t(o) + " ") {
                            for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o !== (a = _t(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (b(t)) return this.each(function(e) {
                    C(this).removeClass(t.call(this, e, kt(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((e = At(t)).length)
                    for (; n = this[l++];)
                        if (o = kt(n), i = 1 === n.nodeType && " " + _t(o) + " ") {
                            for (s = 0; r = e[s++];)
                                for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                            o !== (a = _t(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(o, t) {
                var r = typeof o,
                    s = "string" == r || Array.isArray(o);
                return "boolean" == typeof t && s ? t ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function(e) {
                    C(this).toggleClass(o.call(this, e, kt(this), t), t)
                }) : this.each(function() {
                    var e, t, n, i;
                    if (s)
                        for (t = 0, n = C(this), i = At(o); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    else void 0 !== o && "boolean" != r || ((e = kt(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : K.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && -1 < (" " + _t(kt(n)) + " ").indexOf(t)) return !0;
                return !1
            }
        });
        var It = /\r/g;
        C.fn.extend({
            val: function(n) {
                var i, e, o, t = this[0];
                return arguments.length ? (o = b(n), this.each(function(e) {
                    var t;
                    1 === this.nodeType && (null == (t = o ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(e) {
                        return null == e ? "" : e + ""
                    })), (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
                })) : t ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(It, "") : null == e ? "" : e : void 0
            }
        }), C.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : _t(C.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, i, o = e.options,
                            r = e.selectedIndex,
                            s = "select-one" === e.type,
                            a = s ? null : [],
                            l = s ? r + 1 : o.length;
                        for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                                if (t = C(n).val(), s) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = C.makeArray(t), s = o.length; s--;)((i = o[s]).selected = -1 < C.inArray(C.valHooks.option.get(i), r)) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), C.each(["radio", "checkbox"], function() {
            C.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
                }
            }, y.checkOn || (C.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), y.focusin = "onfocusin" in S;

        function Dt(e) {
            e.stopPropagation()
        }
        var Ot = /^(?:focusinfocus|focusoutblur)$/;
        C.extend(C.event, {
            trigger: function(e, t, n, i) {
                var o, r, s, a, l, c, u, d, f = [n || E],
                    p = v.call(e, "type") ? e.type : e,
                    h = v.call(e, "namespace") ? e.namespace.split(".") : [];
                if (r = d = s = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Ot.test(p + C.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), u = C.event.special[p] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                    if (!i && !u.noBubble && !m(n)) {
                        for (a = u.delegateType || p, Ot.test(a + p) || (r = r.parentNode); r; r = r.parentNode) f.push(r), s = r;
                        s === (n.ownerDocument || E) && f.push(s.defaultView || s.parentWindow || S)
                    }
                    for (o = 0;
                        (r = f[o++]) && !e.isPropagationStopped();) d = r, e.type = 1 < o ? a : u.bindType || p, (c = (K.get(r, "events") || {})[e.type] && K.get(r, "handle")) && c.apply(r, t), (c = l && r[l]) && c.apply && G(r) && (e.result = c.apply(r, t), !1 === e.result && e.preventDefault());
                    return e.type = p, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), t) || !G(n) || l && b(n[p]) && !m(n) && ((s = n[l]) && (n[l] = null), C.event.triggered = p, e.isPropagationStopped() && d.addEventListener(p, Dt), n[p](), e.isPropagationStopped() && d.removeEventListener(p, Dt), C.event.triggered = void 0, s && (n[l] = s)), e.result
                }
            },
            simulate: function(e, t, n) {
                var i = C.extend(new C.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                C.event.trigger(i, null, t)
            }
        }), C.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    C.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0)
            }
        }), y.focusin || C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, i) {
            function o(e) {
                C.event.simulate(i, e.target, C.event.fix(e))
            }
            C.event.special[i] = {
                setup: function() {
                    var e = this.ownerDocument || this,
                        t = K.access(e, i);
                    t || e.addEventListener(n, o, !0), K.access(e, i, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this,
                        t = K.access(e, i) - 1;
                    t ? K.access(e, i, t) : (e.removeEventListener(n, o, !0), K.remove(e, i))
                }
            }
        });
        var Lt = S.location,
            Pt = Date.now(),
            Nt = /\?/;
        C.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new S.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
        };
        var Mt = /\[\]$/,
            jt = /\r?\n/g,
            Ht = /^(?:submit|button|image|reset|file)$/i,
            $t = /^(?:input|select|textarea|keygen)/i;

        function Ft(n, e, i, o) {
            var t;
            if (Array.isArray(e)) C.each(e, function(e, t) {
                i || Mt.test(n) ? o(n, t) : Ft(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
            });
            else if (i || "object" !== T(e)) o(n, e);
            else
                for (t in e) Ft(n + "[" + t + "]", e[t], i, o)
        }
        C.param = function(e, t) {
            function n(e, t) {
                var n = b(t) ? t() : t;
                o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            }
            var i, o = [];
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
                n(this.name, this.value)
            });
            else
                for (i in e) Ft(i, e[i], t, n);
            return o.join("&")
        }, C.fn.extend({
            serialize: function() {
                return C.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && $t.test(this.nodeName) && !Ht.test(e) && (this.checked || !de.test(e))
                }).map(function(e, t) {
                    var n = C(this).val();
                    return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(jt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(jt, "\r\n")
                    }
                }).get()
            }
        });
        var Rt = /%20/g,
            Wt = /#.*$/,
            Vt = /([?&])_=[^&]*/,
            zt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            qt = /^(?:GET|HEAD)$/,
            Bt = /^\/\//,
            Ut = {},
            Gt = {},
            Yt = "*/".concat("*"),
            Kt = E.createElement("a");

        function Qt(r) {
            return function(e, t) {
                "string" != typeof e && (t = e, e = "*");
                var n, i = 0,
                    o = e.toLowerCase().match(M) || [];
                if (b(t))
                    for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
            }
        }

        function Xt(t, o, r, s) {
            var a = {},
                l = t === Gt;

            function c(e) {
                var i;
                return a[e] = !0, C.each(t[e] || [], function(e, t) {
                    var n = t(o, r, s);
                    return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), c(n), !1)
                }), i
            }
            return c(o.dataTypes[0]) || !a["*"] && c("*")
        }

        function Zt(e, t) {
            var n, i, o = C.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && C.extend(!0, e, i), e
        }
        Kt.href = Lt.href, C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Lt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Lt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Yt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": C.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Zt(Zt(e, C.ajaxSettings), t) : Zt(C.ajaxSettings, e)
            },
            ajaxPrefilter: Qt(Ut),
            ajaxTransport: Qt(Gt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var u, d, f, n, p, i, h, m, o, r, g = C.ajaxSetup({}, t),
                    v = g.context || g,
                    y = g.context && (v.nodeType || v.jquery) ? C(v) : C.event,
                    b = C.Deferred(),
                    w = C.Callbacks("once memory"),
                    T = g.statusCode || {},
                    s = {},
                    a = {},
                    l = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (h) {
                                if (!n)
                                    for (n = {}; t = zt.exec(f);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = n[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return h ? f : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == h && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == h && (g.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (h) x.always(e[x.status]);
                                else
                                    for (t in e) T[t] = [T[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || l;
                            return u && u.abort(t), c(0, t), this
                        }
                    };
                if (b.promise(x), g.url = ((e || g.url || Lt.href) + "").replace(Bt, Lt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(M) || [""], null == g.crossDomain) {
                    i = E.createElement("a");
                    try {
                        i.href = g.url, i.href = i.href, g.crossDomain = Kt.protocol + "//" + Kt.host != i.protocol + "//" + i.host
                    } catch (e) {
                        g.crossDomain = !0
                    }
                }
                if (g.data && g.processData && "string" != typeof g.data && (g.data = C.param(g.data, g.traditional)), Xt(Ut, g, t, x), h) return x;
                for (o in (m = C.event && g.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !qt.test(g.type), d = g.url.replace(Wt, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Rt, "+")) : (r = g.url.slice(d.length), g.data && (g.processData || "string" == typeof g.data) && (d += (Nt.test(d) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (d = d.replace(Vt, "$1"), r = (Nt.test(d) ? "&" : "?") + "_=" + Pt++ + r), g.url = d + r), g.ifModified && (C.lastModified[d] && x.setRequestHeader("If-Modified-Since", C.lastModified[d]), C.etag[d] && x.setRequestHeader("If-None-Match", C.etag[d])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && x.setRequestHeader("Content-Type", g.contentType), x.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : g.accepts["*"]), g.headers) x.setRequestHeader(o, g.headers[o]);
                if (g.beforeSend && (!1 === g.beforeSend.call(v, x, g) || h)) return x.abort();
                if (l = "abort", w.add(g.complete), x.done(g.success), x.fail(g.error), u = Xt(Gt, g, t, x)) {
                    if (x.readyState = 1, m && y.trigger("ajaxSend", [x, g]), h) return x;
                    g.async && 0 < g.timeout && (p = S.setTimeout(function() {
                        x.abort("timeout")
                    }, g.timeout));
                    try {
                        h = !1, u.send(s, c)
                    } catch (e) {
                        if (h) throw e;
                        c(-1, e)
                    }
                } else c(-1, "No Transport");

                function c(e, t, n, i) {
                    var o, r, s, a, l, c = t;
                    h || (h = !0, p && S.clearTimeout(p), u = void 0, f = i || "", x.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i)
                            for (o in a)
                                if (a[o] && a[o].test(i)) {
                                    l.unshift(o);
                                    break
                                }
                        if (l[0] in n) r = l[0];
                        else {
                            for (o in n) {
                                if (!l[0] || e.converters[o + " " + l[0]]) {
                                    r = o;
                                    break
                                }
                                s || (s = o)
                            }
                            r = r || s
                        }
                        if (r) return r !== l[0] && l.unshift(r), n[r]
                    }(g, x, n)), a = function(e, t, n, i) {
                        var o, r, s, a, l, c = {},
                            u = e.dataTypes.slice();
                        if (u[1])
                            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                        for (r = u.shift(); r;)
                            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                                if ("*" === r) r = l;
                                else if ("*" !== l && l !== r) {
                            if (!(s = c[l + " " + r] || c["* " + r]))
                                for (o in c)
                                    if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                        !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                        break
                                    }
                            if (!0 !== s)
                                if (s && e.throws) t = s(t);
                                else try {
                                    t = s(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + l + " to " + r
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(g, a, x, o), o ? (g.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (C.lastModified[d] = l), (l = x.getResponseHeader("etag")) && (C.etag[d] = l)), 204 === e || "HEAD" === g.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, r = a.data, o = !(s = a.error))) : (s = c, !e && c || (c = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || c) + "", o ? b.resolveWith(v, [r, c, x]) : b.rejectWith(v, [x, c, s]), x.statusCode(T), T = void 0, m && y.trigger(o ? "ajaxSuccess" : "ajaxError", [x, g, o ? r : s]), w.fireWith(v, [x, c]), m && (y.trigger("ajaxComplete", [x, g]), --C.active || C.event.trigger("ajaxStop")))
                }
                return x
            },
            getJSON: function(e, t, n) {
                return C.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return C.get(e, void 0, t, "script")
            }
        }), C.each(["get", "post"], function(e, o) {
            C[o] = function(e, t, n, i) {
                return b(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
                    url: e,
                    type: o,
                    dataType: i,
                    data: t,
                    success: n
                }, C.isPlainObject(e) && e))
            }
        }), C._evalUrl = function(e, t) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    C.globalEval(e, t)
                }
            })
        }, C.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (b(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(n) {
                return b(n) ? this.each(function(e) {
                    C(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = C(this),
                        t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = b(t);
                return this.each(function(e) {
                    C(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    C(this).replaceWith(this.childNodes)
                }), this
            }
        }), C.expr.pseudos.hidden = function(e) {
            return !C.expr.pseudos.visible(e)
        }, C.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, C.ajaxSettings.xhr = function() {
            try {
                return new S.XMLHttpRequest
            } catch (e) {}
        };
        var Jt = {
                0: 200,
                1223: 204
            },
            en = C.ajaxSettings.xhr();
        y.cors = !!en && "withCredentials" in en, y.ajax = en = !!en, C.ajaxTransport(function(o) {
            var r, s;
            if (y.cors || en && !o.crossDomain) return {
                send: function(e, t) {
                    var n, i = o.xhr();
                    if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                        for (n in o.xhrFields) i[n] = o.xhrFields[n];
                    for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                    r = function(e) {
                        return function() {
                            r && (r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Jt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }, i.onload = r(), s = i.onerror = i.ontimeout = r("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                        4 === i.readyState && S.setTimeout(function() {
                            r && s()
                        })
                    }, r = r("abort");
                    try {
                        i.send(o.hasContent && o.data || null)
                    } catch (e) {
                        if (r) throw e
                    }
                },
                abort: function() {
                    r && r()
                }
            }
        }), C.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return C.globalEval(e), e
                }
            }
        }), C.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), C.ajaxTransport("script", function(n) {
            var i, o;
            if (n.crossDomain || n.scriptAttrs) return {
                send: function(e, t) {
                    i = C("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", o = function(e) {
                        i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                    }), E.head.appendChild(i[0])
                },
                abort: function() {
                    o && o()
                }
            }
        });
        var tn, nn = [],
            on = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = nn.pop() || C.expando + "_" + Pt++;
                return this[e] = !0, e
            }
        }), C.ajaxPrefilter("json jsonp", function(e, t, n) {
            var i, o, r, s = !1 !== e.jsonp && (on.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(on, "$1" + i) : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return r || C.error(i + " was not called"), r[0]
            }, e.dataTypes[0] = "json", o = S[i], S[i] = function() {
                r = arguments
            }, n.always(function() {
                void 0 === o ? C(S).removeProp(i) : S[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, nn.push(i)), r && b(o) && o(r[0]), r = o = void 0
            }), "script"
        }), y.createHTMLDocument = ((tn = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === tn.childNodes.length), C.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((i = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(i)) : t = E), r = !n && [], (o = A.exec(e)) ? [t.createElement(o[1])] : (o = we([e], t, r), r && r.length && C(r).remove(), C.merge([], o.childNodes)));
            var i, o, r
        }, C.fn.load = function(e, t, n) {
            var i, o, r, s = this,
                a = e.indexOf(" ");
            return -1 < a && (i = _t(e.slice(a)), e = e.slice(0, a)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && C.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                s.each(function() {
                    n.apply(this, r || [e.responseText, t, e])
                })
            }), this
        }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            C.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), C.expr.pseudos.animated = function(t) {
            return C.grep(C.timers, function(e) {
                return t === e.elem
            }).length
        }, C.offset = {
            setOffset: function(e, t, n) {
                var i, o, r, s, a, l, c = C.css(e, "position"),
                    u = C(e),
                    d = {};
                "static" === c && (e.style.position = "relative"), a = u.offset(), r = C.css(e, "top"), l = C.css(e, "left"), o = ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (i = u.position()).top, i.left) : (s = parseFloat(r) || 0, parseFloat(l) || 0), b(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
            }
        }, C.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    C.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0];
                return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, i = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - C.css(i, "marginTop", !0),
                        left: t.left - o.left - C.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                    return e || ie
                })
            }
        }), C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, o) {
            var r = "pageYOffset" === o;
            C.fn[t] = function(e) {
                return V(this, function(e, t, n) {
                    var i;
                    if (m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[o] : e[t];
                    i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n
                }, t, e, arguments.length)
            }
        }), C.each(["top", "left"], function(e, n) {
            C.cssHooks[n] = Ze(y.pixelPosition, function(e, t) {
                if (t) return t = Xe(e, n), Ue.test(t) ? C(e).position()[n] + "px" : t
            })
        }), C.each({
            Height: "height",
            Width: "width"
        }, function(s, a) {
            C.each({
                padding: "inner" + s,
                content: a,
                "": "outer" + s
            }, function(i, r) {
                C.fn[r] = function(e, t) {
                    var n = arguments.length && (i || "boolean" != typeof e),
                        o = i || (!0 === e || !0 === t ? "margin" : "border");
                    return V(this, function(e, t, n) {
                        var i;
                        return m(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? C.css(e, t, o) : C.style(e, t, n, o)
                    }, a, n ? e : void 0, n)
                }
            })
        }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
            C.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }), C.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), C.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), C.proxy = function(e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return i = a.call(arguments, 2), (o = function() {
                return e.apply(t || this, i.concat(a.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, o
        }, C.holdReady = function(e) {
            e ? C.readyWait++ : C.ready(!0)
        }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = k, C.isFunction = b, C.isWindow = m, C.camelCase = U, C.type = T, C.now = Date.now, C.isNumeric = function(e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, void 0 === (cn = function() {
            return C
        }.apply(ln, [])) || (an.exports = cn);
        var rn = S.jQuery,
            sn = S.$;
        return C.noConflict = function(e) {
            return S.$ === C && (S.$ = sn), e && S.jQuery === C && (S.jQuery = rn), C
        }, e || (S.jQuery = S.$ = C), C
    })
}, function(e, t, n) {
    (function(Z) {
        /**!
         * @fileOverview Kickass library to create and place poppers near their reference elements.
         * @version 1.15.0
         * @license
         * Copyright (c) 2016 Federico Zivolo and contributors
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in all
         * copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
         * SOFTWARE.
         */
        e.exports = function() {
            "use strict";
            for (var e = "undefined" != typeof window && "undefined" != typeof document, t = ["Edge", "Trident", "Firefox"], n = 0, i = 0; i < t.length; i += 1)
                if (e && 0 <= navigator.userAgent.indexOf(t[i])) {
                    n = 1;
                    break
                }
            var s = e && window.Promise ? function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, window.Promise.resolve().then(function() {
                        t = !1, e()
                    }))
                }
            } : function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, setTimeout(function() {
                        t = !1, e()
                    }, n))
                }
            };

            function a(e) {
                return e && "[object Function]" === {}.toString.call(e)
            }

            function w(e, t) {
                if (1 !== e.nodeType) return [];
                var n = e.ownerDocument.defaultView,
                    i = n.getComputedStyle(e, null);
                return t ? i[t] : i
            }

            function p(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host
            }

            function h(e) {
                if (!e) return document.body;
                switch (e.nodeName) {
                    case "HTML":
                    case "BODY":
                        return e.ownerDocument.body;
                    case "#document":
                        return e.body
                }
                var t = w(e),
                    n = t.overflow,
                    i = t.overflowX,
                    o = t.overflowY;
                return /(auto|scroll|overlay)/.test(n + o + i) ? e : h(p(e))
            }
            var o = e && !(!window.MSInputMethodContext || !document.documentMode),
                r = e && /MSIE 10/.test(navigator.userAgent);

            function m(e) {
                return 11 === e ? o : 10 === e ? r : o || r
            }

            function P(e) {
                if (!e) return document.documentElement;
                for (var t = m(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                var i = n && n.nodeName;
                return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === w(n, "position") ? P(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
            }

            function l(e) {
                return null !== e.parentNode ? l(e.parentNode) : e
            }

            function g(e, t) {
                if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                    i = n ? e : t,
                    o = n ? t : e,
                    r = document.createRange();
                r.setStart(i, 0), r.setEnd(o, 0);
                var s = r.commonAncestorContainer;
                if (e !== s && t !== s || i.contains(o)) return function(e) {
                    var t = e.nodeName;
                    return "BODY" !== t && ("HTML" === t || P(e.firstElementChild) === e)
                }(s) ? s : P(s);
                var a = l(e);
                return a.host ? g(a.host, t) : g(e, l(t).host)
            }

            function v(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
                    n = "top" === t ? "scrollTop" : "scrollLeft",
                    i = e.nodeName;
                if ("BODY" !== i && "HTML" !== i) return e[n];
                var o = e.ownerDocument.documentElement,
                    r = e.ownerDocument.scrollingElement || o;
                return r[n]
            }

            function d(e, t) {
                var n = "x" === t ? "Left" : "Top",
                    i = "Left" == n ? "Right" : "Bottom";
                return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
            }

            function c(e, t, n, i) {
                return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], m(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
            }

            function y(e) {
                var t = e.body,
                    n = e.documentElement,
                    i = m(10) && getComputedStyle(n);
                return {
                    height: c("Height", t, n, i),
                    width: c("Width", t, n, i)
                }
            }
            var u = function() {
                    function i(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(e, t, n) {
                        return t && i(e.prototype, t), n && i(e, n), e
                    }
                }(),
                T = function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                },
                N = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                };

            function x(e) {
                return N({}, e, {
                    right: e.left + e.width,
                    bottom: e.top + e.height
                })
            }

            function M(e) {
                var t = {};
                try {
                    if (m(10)) {
                        t = e.getBoundingClientRect();
                        var n = v(e, "top"),
                            i = v(e, "left");
                        t.top += n, t.left += i, t.bottom += n, t.right += i
                    } else t = e.getBoundingClientRect()
                } catch (e) {}
                var o = {
                        left: t.left,
                        top: t.top,
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    },
                    r = "HTML" === e.nodeName ? y(e.ownerDocument) : {},
                    s = r.width || e.clientWidth || o.right - o.left,
                    a = r.height || e.clientHeight || o.bottom - o.top,
                    l = e.offsetWidth - s,
                    c = e.offsetHeight - a;
                if (l || c) {
                    var u = w(e);
                    l -= d(u, "x"), c -= d(u, "y"), o.width -= l, o.height -= c
                }
                return x(o)
            }

            function b(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                    i = m(10),
                    o = "HTML" === t.nodeName,
                    r = M(e),
                    s = M(t),
                    a = h(e),
                    l = w(t),
                    c = parseFloat(l.borderTopWidth, 10),
                    u = parseFloat(l.borderLeftWidth, 10);
                n && o && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
                var d = x({
                    top: r.top - s.top - c,
                    left: r.left - s.left - u,
                    width: r.width,
                    height: r.height
                });
                if (d.marginTop = 0, d.marginLeft = 0, !i && o) {
                    var f = parseFloat(l.marginTop, 10),
                        p = parseFloat(l.marginLeft, 10);
                    d.top -= c - f, d.bottom -= c - f, d.left -= u - p, d.right -= u - p, d.marginTop = f, d.marginLeft = p
                }
                return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (d = function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                        i = v(t, "top"),
                        o = v(t, "left"),
                        r = n ? -1 : 1;
                    return e.top += i * r, e.bottom += i * r, e.left += o * r, e.right += o * r, e
                }(d, t)), d
            }

            function S(e) {
                if (!e || !e.parentElement || m()) return document.documentElement;
                for (var t = e.parentElement; t && "none" === w(t, "transform");) t = t.parentElement;
                return t || document.documentElement
            }

            function f(e, t, n, i) {
                var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
                    r = {
                        top: 0,
                        left: 0
                    },
                    s = o ? S(e) : g(e, t);
                if ("viewport" === i) r = function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        n = e.ownerDocument.documentElement,
                        i = b(e, n),
                        o = Math.max(n.clientWidth, window.innerWidth || 0),
                        r = Math.max(n.clientHeight, window.innerHeight || 0),
                        s = t ? 0 : v(n),
                        a = t ? 0 : v(n, "left");
                    return x({
                        top: s - i.top + i.marginTop,
                        left: a - i.left + i.marginLeft,
                        width: o,
                        height: r
                    })
                }(s, o);
                else {
                    var a = void 0;
                    "scrollParent" === i ? "BODY" === (a = h(p(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
                    var l = b(a, s, o);
                    if ("HTML" !== a.nodeName || function e(t) {
                            var n = t.nodeName;
                            if ("BODY" === n || "HTML" === n) return !1;
                            if ("fixed" === w(t, "position")) return !0;
                            var i = p(t);
                            if (!i) return !1;
                            return e(i)
                        }(s)) r = l;
                    else {
                        var c = y(e.ownerDocument),
                            u = c.height,
                            d = c.width;
                        r.top += l.top - l.marginTop, r.bottom = u + l.top, r.left += l.left - l.marginLeft, r.right = d + l.left
                    }
                }
                var f = "number" == typeof(n = n || 0);
                return r.left += f ? n : n.left || 0, r.top += f ? n : n.top || 0, r.right -= f ? n : n.right || 0, r.bottom -= f ? n : n.bottom || 0, r
            }

            function E(e, t, i, n, o) {
                var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === e.indexOf("auto")) return e;
                var s = f(i, n, r, o),
                    a = {
                        top: {
                            width: s.width,
                            height: t.top - s.top
                        },
                        right: {
                            width: s.right - t.right,
                            height: s.height
                        },
                        bottom: {
                            width: s.width,
                            height: s.bottom - t.bottom
                        },
                        left: {
                            width: t.left - s.left,
                            height: s.height
                        }
                    },
                    l = Object.keys(a).map(function(e) {
                        return N({
                            key: e
                        }, a[e], {
                            area: function(e) {
                                var t = e.width,
                                    n = e.height;
                                return t * n
                            }(a[e])
                        })
                    }).sort(function(e, t) {
                        return t.area - e.area
                    }),
                    c = l.filter(function(e) {
                        var t = e.width,
                            n = e.height;
                        return t >= i.clientWidth && n >= i.clientHeight
                    }),
                    u = 0 < c.length ? c[0].key : l[0].key,
                    d = e.split("-")[1];
                return u + (d ? "-" + d : "")
            }

            function C(e, t, n) {
                var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                    o = i ? S(t) : g(t, n);
                return b(n, o, i)
            }

            function _(e) {
                var t = e.ownerDocument.defaultView,
                    n = t.getComputedStyle(e),
                    i = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
                    o = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0),
                    r = {
                        width: e.offsetWidth + o,
                        height: e.offsetHeight + i
                    };
                return r
            }

            function k(e) {
                var t = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return e.replace(/left|right|bottom|top/g, function(e) {
                    return t[e]
                })
            }

            function A(e, t, n) {
                n = n.split("-")[0];
                var i = _(e),
                    o = {
                        width: i.width,
                        height: i.height
                    },
                    r = -1 !== ["right", "left"].indexOf(n),
                    s = r ? "top" : "left",
                    a = r ? "left" : "top",
                    l = r ? "height" : "width",
                    c = r ? "width" : "height";
                return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[k(a)], o
            }

            function j(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0]
            }

            function I(e, n, t) {
                var i = void 0 === t ? e : e.slice(0, function(e, t, n) {
                    if (Array.prototype.findIndex) return e.findIndex(function(e) {
                        return e[t] === n
                    });
                    var i = j(e, function(e) {
                        return e[t] === n
                    });
                    return e.indexOf(i)
                }(e, "name", t));
                return i.forEach(function(e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var t = e.function || e.fn;
                    e.enabled && a(t) && (n.offsets.popper = x(n.offsets.popper), n.offsets.reference = x(n.offsets.reference), n = t(n, e))
                }), n
            }

            function D(e, i) {
                return e.some(function(e) {
                    var t = e.name,
                        n = e.enabled;
                    return n && t === i
                })
            }

            function H(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                    var o = t[i],
                        r = o ? "" + o + n : e;
                    if (void 0 !== document.body.style[r]) return r
                }
                return null
            }

            function O(e) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window
            }

            function L(e, t, n, i) {
                n.updateBound = i, O(e).addEventListener("resize", n.updateBound, {
                    passive: !0
                });
                var o = h(e);
                return function e(t, n, i, o) {
                    var r = "BODY" === t.nodeName;
                    var s = r ? t.ownerDocument.defaultView : t;
                    s.addEventListener(n, i, {
                        passive: !0
                    });
                    r || e(h(s.parentNode), n, i, o);
                    o.push(s)
                }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
            }

            function $() {
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function(e, t) {
                    return O(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                        e.removeEventListener("scroll", t.updateBound)
                    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
                }(this.reference, this.state))
            }

            function F(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
            }

            function R(n, i) {
                Object.keys(i).forEach(function(e) {
                    var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && F(i[e]) && (t = "px"), n.style[e] = i[e] + t
                })
            }

            function W(n, i) {
                Object.keys(i).forEach(function(e) {
                    var t = i[e];
                    !1 !== t ? n.setAttribute(e, i[e]) : n.removeAttribute(e)
                })
            }
            var V = e && /Firefox/i.test(navigator.userAgent);

            function z(e, n, t) {
                var i = j(e, function(e) {
                        var t = e.name;
                        return t === n
                    }),
                    o = !!i && e.some(function(e) {
                        return e.name === t && e.enabled && e.order < i.order
                    });
                if (!o) {
                    var r = "`" + n + "`",
                        s = "`" + t + "`";
                    console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
                }
                return o
            }

            function q(e) {
                return "end" === e ? "start" : "start" === e ? "end" : e
            }
            var B = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                U = B.slice(3);

            function G(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    n = U.indexOf(e),
                    i = U.slice(n + 1).concat(U.slice(0, n));
                return t ? i.reverse() : i
            }
            var Y = {
                FLIP: "flip",
                CLOCKWISE: "clockwise",
                COUNTERCLOCKWISE: "counterclockwise"
            };

            function K(e, o, r, t) {
                var s = [0, 0],
                    a = -1 !== ["right", "left"].indexOf(t),
                    n = e.split(/(\+|\-)/).map(function(e) {
                        return e.trim()
                    }),
                    i = n.indexOf(j(n, function(e) {
                        return -1 !== e.search(/,|\s/)
                    }));
                n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                    c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
                return (c = c.map(function(e, t) {
                    var n = (1 === t ? !a : a) ? "height" : "width",
                        i = !1;
                    return e.reduce(function(e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
                    }, []).map(function(e) {
                        return function(e, t, n, i) {
                            var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                r = +o[1],
                                s = o[2];
                            if (!r) return e; {
                                if (0 === s.indexOf("%")) {
                                    var a = void 0;
                                    switch (s) {
                                        case "%p":
                                            a = n;
                                            break;
                                        case "%":
                                        case "%r":
                                        default:
                                            a = i
                                    }
                                    return x(a)[t] / 100 * r
                                }
                                if ("vh" !== s && "vw" !== s) return r;
                                return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r
                            }
                        }(e, n, o, r)
                    })
                })).forEach(function(n, i) {
                    n.forEach(function(e, t) {
                        F(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
                    })
                }), s
            }
            var Q = {
                    placement: "bottom",
                    positionFixed: !1,
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function() {},
                    onUpdate: function() {},
                    modifiers: {
                        shift: {
                            order: 100,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = t.split("-")[1];
                                if (i) {
                                    var o = e.offsets,
                                        r = o.reference,
                                        s = o.popper,
                                        a = -1 !== ["bottom", "top"].indexOf(n),
                                        l = a ? "left" : "top",
                                        c = a ? "width" : "height",
                                        u = {
                                            start: T({}, l, r[l]),
                                            end: T({}, l, r[l] + r[c] - s[c])
                                        };
                                    e.offsets.popper = N({}, s, u[i])
                                }
                                return e
                            }
                        },
                        offset: {
                            order: 200,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.offset,
                                    i = e.placement,
                                    o = e.offsets,
                                    r = o.popper,
                                    s = o.reference,
                                    a = i.split("-")[0],
                                    l = void 0;
                                l = F(+n) ? [+n, 0] : K(n, r, s, a);
                                "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]);
                                return e.popper = r, e
                            },
                            offset: 0
                        },
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function(e, i) {
                                var t = i.boundariesElement || P(e.instance.popper);
                                e.instance.reference === t && (t = P(t));
                                var n = H("transform"),
                                    o = e.instance.popper.style,
                                    r = o.top,
                                    s = o.left,
                                    a = o[n];
                                o.top = "", o.left = "", o[n] = "";
                                var l = f(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                                o.top = r, o.left = s, o[n] = a, i.boundaries = l;
                                var c = i.priority,
                                    u = e.offsets.popper,
                                    d = {
                                        primary: function(e) {
                                            var t = u[e];
                                            return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])), T({}, e, t)
                                        },
                                        secondary: function(e) {
                                            var t = "right" === e ? "left" : "top",
                                                n = u[t];
                                            return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), T({}, t, n)
                                        }
                                    };
                                return c.forEach(function(e) {
                                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                    u = N({}, u, d[t](e))
                                }), e.offsets.popper = u, e
                            },
                            priority: ["left", "right", "top", "bottom"],
                            padding: 5,
                            boundariesElement: "scrollParent"
                        },
                        keepTogether: {
                            order: 400,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.offsets,
                                    n = t.popper,
                                    i = t.reference,
                                    o = e.placement.split("-")[0],
                                    r = Math.floor,
                                    s = -1 !== ["top", "bottom"].indexOf(o),
                                    a = s ? "right" : "bottom",
                                    l = s ? "left" : "top",
                                    c = s ? "width" : "height";
                                n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]);
                                n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a]));
                                return e
                            }
                        },
                        arrow: {
                            order: 500,
                            enabled: !0,
                            fn: function(e, t) {
                                var n;
                                if (!z(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                var i = t.element;
                                if ("string" == typeof i) {
                                    if (!(i = e.instance.popper.querySelector(i))) return e
                                } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                var o = e.placement.split("-")[0],
                                    r = e.offsets,
                                    s = r.popper,
                                    a = r.reference,
                                    l = -1 !== ["left", "right"].indexOf(o),
                                    c = l ? "height" : "width",
                                    u = l ? "Top" : "Left",
                                    d = u.toLowerCase(),
                                    f = l ? "left" : "top",
                                    p = l ? "bottom" : "right",
                                    h = _(i)[c];
                                a[p] - h < s[d] && (e.offsets.popper[d] -= s[d] - (a[p] - h));
                                a[d] + h > s[p] && (e.offsets.popper[d] += a[d] + h - s[p]);
                                e.offsets.popper = x(e.offsets.popper);
                                var m = a[d] + a[c] / 2 - h / 2,
                                    g = w(e.instance.popper),
                                    v = parseFloat(g["margin" + u], 10),
                                    y = parseFloat(g["border" + u + "Width"], 10),
                                    b = m - e.offsets.popper[d] - v - y;
                                return b = Math.max(Math.min(s[c] - h, b), 0), e.arrowElement = i, e.offsets.arrow = (T(n = {}, d, Math.round(b)), T(n, f, ""), n), e
                            },
                            element: "[x-arrow]"
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function(m, g) {
                                if (D(m.instance.modifiers, "inner")) return m;
                                if (m.flipped && m.placement === m.originalPlacement) return m;
                                var v = f(m.instance.popper, m.instance.reference, g.padding, g.boundariesElement, m.positionFixed),
                                    y = m.placement.split("-")[0],
                                    b = k(y),
                                    w = m.placement.split("-")[1] || "",
                                    T = [];
                                switch (g.behavior) {
                                    case Y.FLIP:
                                        T = [y, b];
                                        break;
                                    case Y.CLOCKWISE:
                                        T = G(y);
                                        break;
                                    case Y.COUNTERCLOCKWISE:
                                        T = G(y, !0);
                                        break;
                                    default:
                                        T = g.behavior
                                }
                                return T.forEach(function(e, t) {
                                    if (y !== e || T.length === t + 1) return m;
                                    y = m.placement.split("-")[0], b = k(y);
                                    var n = m.offsets.popper,
                                        i = m.offsets.reference,
                                        o = Math.floor,
                                        r = "left" === y && o(n.right) > o(i.left) || "right" === y && o(n.left) < o(i.right) || "top" === y && o(n.bottom) > o(i.top) || "bottom" === y && o(n.top) < o(i.bottom),
                                        s = o(n.left) < o(v.left),
                                        a = o(n.right) > o(v.right),
                                        l = o(n.top) < o(v.top),
                                        c = o(n.bottom) > o(v.bottom),
                                        u = "left" === y && s || "right" === y && a || "top" === y && l || "bottom" === y && c,
                                        d = -1 !== ["top", "bottom"].indexOf(y),
                                        f = !!g.flipVariations && (d && "start" === w && s || d && "end" === w && a || !d && "start" === w && l || !d && "end" === w && c),
                                        p = !!g.flipVariationsByContent && (d && "start" === w && a || d && "end" === w && s || !d && "start" === w && c || !d && "end" === w && l),
                                        h = f || p;
                                    (r || u || h) && (m.flipped = !0, (r || u) && (y = T[t + 1]), h && (w = q(w)), m.placement = y + (w ? "-" + w : ""), m.offsets.popper = N({}, m.offsets.popper, A(m.instance.popper, m.offsets.reference, m.placement)), m = I(m.instance.modifiers, m, "flip"))
                                }), m
                            },
                            behavior: "flip",
                            padding: 5,
                            boundariesElement: "viewport",
                            flipVariations: !1,
                            flipVariationsByContent: !1
                        },
                        inner: {
                            order: 700,
                            enabled: !1,
                            fn: function(e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = e.offsets,
                                    o = i.popper,
                                    r = i.reference,
                                    s = -1 !== ["left", "right"].indexOf(n),
                                    a = -1 === ["top", "left"].indexOf(n);
                                return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = k(t), e.offsets.popper = x(o), e
                            }
                        },
                        hide: {
                            order: 800,
                            enabled: !0,
                            fn: function(e) {
                                if (!z(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                var t = e.offsets.reference,
                                    n = j(e.instance.modifiers, function(e) {
                                        return "preventOverflow" === e.name
                                    }).boundaries;
                                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                    if (!0 === e.hide) return e;
                                    e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                                } else {
                                    if (!1 === e.hide) return e;
                                    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                                }
                                return e
                            }
                        },
                        computeStyle: {
                            order: 850,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.x,
                                    i = t.y,
                                    o = e.offsets.popper,
                                    r = j(e.instance.modifiers, function(e) {
                                        return "applyStyle" === e.name
                                    }).gpuAcceleration;
                                void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                var s = void 0 !== r ? r : t.gpuAcceleration,
                                    a = P(e.instance.popper),
                                    l = M(a),
                                    c = {
                                        position: o.position
                                    },
                                    u = (g = e, v = window.devicePixelRatio < 2 || !V, y = g.offsets, b = y.popper, w = y.reference, T = Math.round, x = Math.floor, S = T(w.width), E = T(b.width), C = -1 !== ["left", "right"].indexOf(g.placement), _ = -1 !== g.placement.indexOf("-"), k = S % 2 == E % 2, A = v ? C || _ || k ? T : x : TO, I = v ? T : TO, {
                                        left: A(S % 2 == 1 && E % 2 == 1 && !_ && v ? b.left - 1 : b.left),
                                        top: I(b.top),
                                        bottom: I(b.bottom),
                                        right: A(b.right)
                                    }),
                                    d = "bottom" === n ? "top" : "bottom",
                                    f = "right" === i ? "left" : "right",
                                    p = H("transform"),
                                    h = void 0,
                                    m = void 0;
                                var g, v, y, b, w, T, x, S, E, C, _, k, A, I;
                                m = "bottom" == d ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top;
                                h = "right" == f ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left;
                                if (s && p) c[p] = "translate3d(" + h + "px, " + m + "px, 0)", c[d] = 0, c[f] = 0, c.willChange = "transform";
                                else {
                                    var D = "bottom" == d ? -1 : 1,
                                        O = "right" == f ? -1 : 1;
                                    c[d] = m * D, c[f] = h * O, c.willChange = d + ", " + f
                                }
                                var L = {
                                    "x-placement": e.placement
                                };
                                return e.attributes = N({}, L, e.attributes), e.styles = N({}, c, e.styles), e.arrowStyles = N({}, e.offsets.arrow, e.arrowStyles), e
                            },
                            gpuAcceleration: !0,
                            x: "bottom",
                            y: "right"
                        },
                        applyStyle: {
                            order: 900,
                            enabled: !0,
                            fn: function(e) {
                                R(e.instance.popper, e.styles), W(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && R(e.arrowElement, e.arrowStyles);
                                return e
                            },
                            onLoad: function(e, t, n, i, o) {
                                var r = C(o, t, e, n.positionFixed),
                                    s = E(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                return t.setAttribute("x-placement", s), R(t, {
                                    position: n.positionFixed ? "fixed" : "absolute"
                                }), n
                            },
                            gpuAcceleration: void 0
                        }
                    }
                },
                X = function() {
                    function r(e, t) {
                        var n = this,
                            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                        ! function(e, t) {
                            if (!(e instanceof t)) {
                                throw new TypeError("Cannot call a class as a function")
                            }
                        }(this, r), this.scheduleUpdate = function() {
                            return requestAnimationFrame(n.update)
                        }, this.update = s(this.update.bind(this)), this.options = N({}, r.Defaults, i), this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: []
                        }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(N({}, r.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                            n.options.modifiers[e] = N({}, r.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
                        }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                            return N({
                                name: e
                            }, n.options.modifiers[e])
                        }).sort(function(e, t) {
                            return e.order - t.order
                        }), this.modifiers.forEach(function(e) {
                            e.enabled && a(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                        }), this.update();
                        var o = this.options.eventsEnabled;
                        o && this.enableEventListeners(), this.state.eventsEnabled = o
                    }
                    return u(r, [{
                        key: "update",
                        value: function() {
                            return function() {
                                if (this.state.isDestroyed) return;
                                var e = {
                                    instance: this,
                                    styles: {},
                                    arrowStyles: {},
                                    attributes: {},
                                    flipped: !1,
                                    offsets: {}
                                };
                                e.offsets.reference = C(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = A(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = I(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                            }.call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            return function() {
                                this.state.isDestroyed = !0, D(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[H("transform")] = "");
                                this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper);
                                return this
                            }.call(this)
                        }
                    }, {
                        key: "enableEventListeners",
                        value: function() {
                            return function() {
                                this.state.eventsEnabled || (this.state = L(this.reference, this.options, this.state, this.scheduleUpdate))
                            }.call(this)
                        }
                    }, {
                        key: "disableEventListeners",
                        value: function() {
                            return $.call(this)
                        }
                    }]), r
                }();
            return X.Utils = ("undefined" != typeof window ? window : Z).PopperUtils, X.placements = B, X.Defaults = Q, X
        }()
    }).call(this, n(5))
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    /*!
     * Bootstrap v4.3.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    ! function(e, m, d) {
        "use strict";

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function s(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(e) {
                    o(t, e, n[e])
                })
            }
            return t
        }
        m = m && m.hasOwnProperty("default") ? m.default : m, d = d && d.hasOwnProperty("default") ? d.default : d;
        var t = "transitionend";

        function n(e) {
            var t = this,
                n = !1;
            return m(this).one(g.TRANSITION_END, function() {
                n = !0
            }), setTimeout(function() {
                n || g.triggerTransitionEnd(t)
            }, e), this
        }
        var g = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(e) {
                for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
                return e
            },
            getSelectorFromElement: function(e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    t = n && "#" !== n ? n.trim() : ""
                }
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            },
            getTransitionDurationFromElement: function(e) {
                if (!e) return 0;
                var t = m(e).css("transition-duration"),
                    n = m(e).css("transition-delay"),
                    i = parseFloat(t),
                    o = parseFloat(n);
                return i || o ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
            },
            reflow: function(e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function(e) {
                m(e).trigger(t)
            },
            supportsTransitionEnd: function() {
                return Boolean(t)
            },
            isElement: function(e) {
                return (e[0] || e).nodeType
            },
            typeCheckConfig: function(e, t, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var o = n[i],
                            r = t[i],
                            s = r && g.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                    }
                var a
            },
            findShadowRoot: function(e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? g.findShadowRoot(e.parentNode) : null;
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
        };
        m.fn.emulateTransitionEnd = n, m.event.special[g.TRANSITION_END] = {
            bindType: t,
            delegateType: t,
            handle: function(e) {
                if (m(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        };
        var r = "alert",
            l = "bs.alert",
            c = "." + l,
            u = m.fn[r],
            f = {
                CLOSE: "close" + c,
                CLOSED: "closed" + c,
                CLICK_DATA_API: "click" + c + ".data-api"
            },
            p = {
                ALERT: "alert",
                FADE: "fade",
                SHOW: "show"
            },
            h = function() {
                function i(e) {
                    this._element = e
                }
                var e = i.prototype;
                return e.close = function(e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e));
                    var n = this._triggerCloseEvent(t);
                    n.isDefaultPrevented() || this._removeElement(t)
                }, e.dispose = function() {
                    m.removeData(this._element, l), this._element = null
                }, e._getRootElement = function(e) {
                    var t = g.getSelectorFromElement(e),
                        n = !1;
                    return t && (n = document.querySelector(t)), n || (n = m(e).closest("." + p.ALERT)[0]), n
                }, e._triggerCloseEvent = function(e) {
                    var t = m.Event(f.CLOSE);
                    return m(e).trigger(t), t
                }, e._removeElement = function(t) {
                    var n = this;
                    if (m(t).removeClass(p.SHOW), m(t).hasClass(p.FADE)) {
                        var e = g.getTransitionDurationFromElement(t);
                        m(t).one(g.TRANSITION_END, function(e) {
                            return n._destroyElement(t, e)
                        }).emulateTransitionEnd(e)
                    } else this._destroyElement(t)
                }, e._destroyElement = function(e) {
                    m(e).detach().trigger(f.CLOSED).remove()
                }, i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = m(this),
                            t = e.data(l);
                        t || (t = new i(this), e.data(l, t)), "close" === n && t[n](this)
                    })
                }, i._handleDismiss = function(t) {
                    return function(e) {
                        e && e.preventDefault(), t.close(this)
                    }
                }, s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }]), i
            }();
        m(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', h._handleDismiss(new h)), m.fn[r] = h._jQueryInterface, m.fn[r].Constructor = h, m.fn[r].noConflict = function() {
            return m.fn[r] = u, h._jQueryInterface
        };
        var v = "button",
            y = "bs.button",
            b = "." + y,
            w = ".data-api",
            T = m.fn[v],
            x = {
                ACTIVE: "active",
                BUTTON: "btn",
                FOCUS: "focus"
            },
            S = {
                DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                DATA_TOGGLE: '[data-toggle="buttons"]',
                INPUT: 'input:not([type="hidden"])',
                ACTIVE: ".active",
                BUTTON: ".btn"
            },
            E = {
                CLICK_DATA_API: "click" + b + w,
                FOCUS_BLUR_DATA_API: "focus" + b + w + " blur" + b + w
            },
            C = function() {
                function n(e) {
                    this._element = e
                }
                var e = n.prototype;
                return e.toggle = function() {
                    var e = !0,
                        t = !0,
                        n = m(this._element).closest(S.DATA_TOGGLE)[0];
                    if (n) {
                        var i = this._element.querySelector(S.INPUT);
                        if (i) {
                            if ("radio" === i.type)
                                if (i.checked && this._element.classList.contains(x.ACTIVE)) e = !1;
                                else {
                                    var o = n.querySelector(S.ACTIVE);
                                    o && m(o).removeClass(x.ACTIVE)
                                }
                            if (e) {
                                if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                                i.checked = !this._element.classList.contains(x.ACTIVE), m(i).trigger("change")
                            }
                            i.focus(), t = !1
                        }
                    }
                    t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(x.ACTIVE)), e && m(this._element).toggleClass(x.ACTIVE)
                }, e.dispose = function() {
                    m.removeData(this._element, y), this._element = null
                }, n._jQueryInterface = function(t) {
                    return this.each(function() {
                        var e = m(this).data(y);
                        e || (e = new n(this), m(this).data(y, e)), "toggle" === t && e[t]()
                    })
                }, s(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }]), n
            }();
        m(document).on(E.CLICK_DATA_API, S.DATA_TOGGLE_CARROT, function(e) {
            e.preventDefault();
            var t = e.target;
            m(t).hasClass(x.BUTTON) || (t = m(t).closest(S.BUTTON)), C._jQueryInterface.call(m(t), "toggle")
        }).on(E.FOCUS_BLUR_DATA_API, S.DATA_TOGGLE_CARROT, function(e) {
            var t = m(e.target).closest(S.BUTTON)[0];
            m(t).toggleClass(x.FOCUS, /^focus(in)?$/.test(e.type))
        }), m.fn[v] = C._jQueryInterface, m.fn[v].Constructor = C, m.fn[v].noConflict = function() {
            return m.fn[v] = T, C._jQueryInterface
        };
        var _ = "carousel",
            k = "bs.carousel",
            A = "." + k,
            I = ".data-api",
            D = m.fn[_],
            O = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
                touch: !0
            },
            L = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            },
            P = {
                NEXT: "next",
                PREV: "prev",
                LEFT: "left",
                RIGHT: "right"
            },
            N = {
                SLIDE: "slide" + A,
                SLID: "slid" + A,
                KEYDOWN: "keydown" + A,
                MOUSEENTER: "mouseenter" + A,
                MOUSELEAVE: "mouseleave" + A,
                TOUCHSTART: "touchstart" + A,
                TOUCHMOVE: "touchmove" + A,
                TOUCHEND: "touchend" + A,
                POINTERDOWN: "pointerdown" + A,
                POINTERUP: "pointerup" + A,
                DRAG_START: "dragstart" + A,
                LOAD_DATA_API: "load" + A + I,
                CLICK_DATA_API: "click" + A + I
            },
            M = {
                CAROUSEL: "carousel",
                ACTIVE: "active",
                SLIDE: "slide",
                RIGHT: "carousel-item-right",
                LEFT: "carousel-item-left",
                NEXT: "carousel-item-next",
                PREV: "carousel-item-prev",
                ITEM: "carousel-item",
                POINTER_EVENT: "pointer-event"
            },
            j = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                ITEM_IMG: ".carousel-item img",
                NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]'
            },
            H = {
                TOUCH: "touch",
                PEN: "pen"
            },
            $ = function() {
                function r(e, t) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(j.INDICATORS), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                }
                var e = r.prototype;
                return e.next = function() {
                    this._isSliding || this._slide(P.NEXT)
                }, e.nextWhenVisible = function() {
                    !document.hidden && m(this._element).is(":visible") && "hidden" !== m(this._element).css("visibility") && this.next()
                }, e.prev = function() {
                    this._isSliding || this._slide(P.PREV)
                }, e.pause = function(e) {
                    e || (this._isPaused = !0), this._element.querySelector(j.NEXT_PREV) && (g.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, e.cycle = function(e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, e.to = function(e) {
                    var t = this;
                    this._activeElement = this._element.querySelector(j.ACTIVE_ITEM);
                    var n = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0))
                        if (this._isSliding) m(this._element).one(N.SLID, function() {
                            return t.to(e)
                        });
                        else {
                            if (n === e) return this.pause(), void this.cycle();
                            var i = n < e ? P.NEXT : P.PREV;
                            this._slide(i, this._items[e])
                        }
                }, e.dispose = function() {
                    m(this._element).off(A), m.removeData(this._element, k), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, e._getConfig = function(e) {
                    return e = a({}, O, e), g.typeCheckConfig(_, e, L), e
                }, e._handleSwipe = function() {
                    var e = Math.abs(this.touchDeltaX);
                    if (!(e <= 40)) {
                        var t = e / this.touchDeltaX;
                        0 < t && this.prev(), t < 0 && this.next()
                    }
                }, e._addEventListeners = function() {
                    var t = this;
                    this._config.keyboard && m(this._element).on(N.KEYDOWN, function(e) {
                        return t._keydown(e)
                    }), "hover" === this._config.pause && m(this._element).on(N.MOUSEENTER, function(e) {
                        return t.pause(e)
                    }).on(N.MOUSELEAVE, function(e) {
                        return t.cycle(e)
                    }), this._config.touch && this._addTouchEventListeners()
                }, e._addTouchEventListeners = function() {
                    var t = this;
                    if (this._touchSupported) {
                        var n = function(e) {
                                t._pointerEvent && H[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                            },
                            i = function(e) {
                                t._pointerEvent && H[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                                    return t.cycle(e)
                                }, 500 + t._config.interval))
                            };
                        m(this._element.querySelectorAll(j.ITEM_IMG)).on(N.DRAG_START, function(e) {
                            return e.preventDefault()
                        }), this._pointerEvent ? (m(this._element).on(N.POINTERDOWN, function(e) {
                            return n(e)
                        }), m(this._element).on(N.POINTERUP, function(e) {
                            return i(e)
                        }), this._element.classList.add(M.POINTER_EVENT)) : (m(this._element).on(N.TOUCHSTART, function(e) {
                            return n(e)
                        }), m(this._element).on(N.TOUCHMOVE, function(e) {
                            return function(e) {
                                if (e.originalEvent.touches && e.originalEvent.touches.length > 1) {
                                    t.touchDeltaX = 0
                                } else {
                                    t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX
                                }
                            }(e)
                        }), m(this._element).on(N.TOUCHEND, function(e) {
                            return i(e)
                        }))
                    }
                }, e._keydown = function(e) {
                    if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                        case 37:
                            e.preventDefault(), this.prev();
                            break;
                        case 39:
                            e.preventDefault(), this.next()
                    }
                }, e._getItemIndex = function(e) {
                    return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(j.ITEM)) : [], this._items.indexOf(e)
                }, e._getItemByDirection = function(e, t) {
                    var n = e === P.NEXT,
                        i = e === P.PREV,
                        o = this._getItemIndex(t),
                        r = this._items.length - 1,
                        s = i && 0 === o || n && o === r;
                    if (s && !this._config.wrap) return t;
                    var a = e === P.PREV ? -1 : 1,
                        l = (o + a) % this._items.length;
                    return -1 == l ? this._items[this._items.length - 1] : this._items[l]
                }, e._triggerSlideEvent = function(e, t) {
                    var n = this._getItemIndex(e),
                        i = this._getItemIndex(this._element.querySelector(j.ACTIVE_ITEM)),
                        o = m.Event(N.SLIDE, {
                            relatedTarget: e,
                            direction: t,
                            from: i,
                            to: n
                        });
                    return m(this._element).trigger(o), o
                }, e._setActiveIndicatorElement = function(e) {
                    if (this._indicatorsElement) {
                        var t = [].slice.call(this._indicatorsElement.querySelectorAll(j.ACTIVE));
                        m(t).removeClass(M.ACTIVE);
                        var n = this._indicatorsElement.children[this._getItemIndex(e)];
                        n && m(n).addClass(M.ACTIVE)
                    }
                }, e._slide = function(e, t) {
                    var n, i, o, r = this,
                        s = this._element.querySelector(j.ACTIVE_ITEM),
                        a = this._getItemIndex(s),
                        l = t || s && this._getItemByDirection(e, s),
                        c = this._getItemIndex(l),
                        u = Boolean(this._interval);
                    if (o = e === P.NEXT ? (n = M.LEFT, i = M.NEXT, P.LEFT) : (n = M.RIGHT, i = M.PREV, P.RIGHT), l && m(l).hasClass(M.ACTIVE)) this._isSliding = !1;
                    else {
                        var d = this._triggerSlideEvent(l, o);
                        if (!d.isDefaultPrevented() && s && l) {
                            this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                            var f = m.Event(N.SLID, {
                                relatedTarget: l,
                                direction: o,
                                from: a,
                                to: c
                            });
                            if (m(this._element).hasClass(M.SLIDE)) {
                                m(l).addClass(i), g.reflow(l), m(s).addClass(n), m(l).addClass(n);
                                var p = parseInt(l.getAttribute("data-interval"), 10);
                                p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                                var h = g.getTransitionDurationFromElement(s);
                                m(s).one(g.TRANSITION_END, function() {
                                    m(l).removeClass(n + " " + i).addClass(M.ACTIVE), m(s).removeClass(M.ACTIVE + " " + i + " " + n), r._isSliding = !1, setTimeout(function() {
                                        return m(r._element).trigger(f)
                                    }, 0)
                                }).emulateTransitionEnd(h)
                            } else m(s).removeClass(M.ACTIVE), m(l).addClass(M.ACTIVE), this._isSliding = !1, m(this._element).trigger(f);
                            u && this.cycle()
                        }
                    }
                }, r._jQueryInterface = function(i) {
                    return this.each(function() {
                        var e = m(this).data(k),
                            t = a({}, O, m(this).data());
                        "object" == typeof i && (t = a({}, t, i));
                        var n = "string" == typeof i ? i : t.slide;
                        if (e || (e = new r(this, t), m(this).data(k, e)), "number" == typeof i) e.to(i);
                        else if ("string" == typeof n) {
                            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        } else t.interval && t.ride && (e.pause(), e.cycle())
                    })
                }, r._dataApiClickHandler = function(e) {
                    var t = g.getSelectorFromElement(this);
                    if (t) {
                        var n = m(t)[0];
                        if (n && m(n).hasClass(M.CAROUSEL)) {
                            var i = a({}, m(n).data(), m(this).data()),
                                o = this.getAttribute("data-slide-to");
                            o && (i.interval = !1), r._jQueryInterface.call(m(n), i), o && m(n).data(k).to(o), e.preventDefault()
                        }
                    }
                }, s(r, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return O
                    }
                }]), r
            }();
        m(document).on(N.CLICK_DATA_API, j.DATA_SLIDE, $._dataApiClickHandler), m(window).on(N.LOAD_DATA_API, function() {
            for (var e = [].slice.call(document.querySelectorAll(j.DATA_RIDE)), t = 0, n = e.length; t < n; t++) {
                var i = m(e[t]);
                $._jQueryInterface.call(i, i.data())
            }
        }), m.fn[_] = $._jQueryInterface, m.fn[_].Constructor = $, m.fn[_].noConflict = function() {
            return m.fn[_] = D, $._jQueryInterface
        };
        var F = "collapse",
            R = "bs.collapse",
            W = "." + R,
            V = m.fn[F],
            z = {
                toggle: !0,
                parent: ""
            },
            q = {
                toggle: "boolean",
                parent: "(string|element)"
            },
            B = {
                SHOW: "show" + W,
                SHOWN: "shown" + W,
                HIDE: "hide" + W,
                HIDDEN: "hidden" + W,
                CLICK_DATA_API: "click" + W + ".data-api"
            },
            U = {
                SHOW: "show",
                COLLAPSE: "collapse",
                COLLAPSING: "collapsing",
                COLLAPSED: "collapsed"
            },
            G = {
                WIDTH: "width",
                HEIGHT: "height"
            },
            Y = {
                ACTIVES: ".show, .collapsing",
                DATA_TOGGLE: '[data-toggle="collapse"]'
            },
            K = function() {
                function l(t, e) {
                    this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                    for (var n = [].slice.call(document.querySelectorAll(Y.DATA_TOGGLE)), i = 0, o = n.length; i < o; i++) {
                        var r = n[i],
                            s = g.getSelectorFromElement(r),
                            a = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                                return e === t
                            });
                        null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var e = l.prototype;
                return e.toggle = function() {
                    m(this._element).hasClass(U.SHOW) ? this.hide() : this.show()
                }, e.show = function() {
                    var e, t, n = this;
                    if (!this._isTransitioning && !m(this._element).hasClass(U.SHOW) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(Y.ACTIVES)).filter(function(e) {
                            return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains(U.COLLAPSE)
                        })).length && (e = null), !(e && (t = m(e).not(this._selector).data(R)) && t._isTransitioning))) {
                        var i = m.Event(B.SHOW);
                        if (m(this._element).trigger(i), !i.isDefaultPrevented()) {
                            e && (l._jQueryInterface.call(m(e).not(this._selector), "hide"), t || m(e).data(R, null));
                            var o = this._getDimension();
                            m(this._element).removeClass(U.COLLAPSE).addClass(U.COLLAPSING), this._element.style[o] = 0, this._triggerArray.length && m(this._triggerArray).removeClass(U.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var r = o[0].toUpperCase() + o.slice(1),
                                s = "scroll" + r,
                                a = g.getTransitionDurationFromElement(this._element);
                            m(this._element).one(g.TRANSITION_END, function() {
                                m(n._element).removeClass(U.COLLAPSING).addClass(U.COLLAPSE).addClass(U.SHOW), n._element.style[o] = "", n.setTransitioning(false), m(n._element).trigger(B.SHOWN)
                            }).emulateTransitionEnd(a), this._element.style[o] = this._element[s] + "px"
                        }
                    }
                }, e.hide = function() {
                    var e = this;
                    if (!this._isTransitioning && m(this._element).hasClass(U.SHOW)) {
                        var t = m.Event(B.HIDE);
                        if (m(this._element).trigger(t), !t.isDefaultPrevented()) {
                            var n = this._getDimension();
                            this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", g.reflow(this._element), m(this._element).addClass(U.COLLAPSING).removeClass(U.COLLAPSE).removeClass(U.SHOW);
                            var i = this._triggerArray.length;
                            if (0 < i)
                                for (var o = 0; o < i; o++) {
                                    var r = this._triggerArray[o],
                                        s = g.getSelectorFromElement(r);
                                    if (null !== s) {
                                        var a = m([].slice.call(document.querySelectorAll(s)));
                                        a.hasClass(U.SHOW) || m(r).addClass(U.COLLAPSED).attr("aria-expanded", !1)
                                    }
                                }
                            this.setTransitioning(!0);
                            this._element.style[n] = "";
                            var l = g.getTransitionDurationFromElement(this._element);
                            m(this._element).one(g.TRANSITION_END, function() {
                                e.setTransitioning(false), m(e._element).removeClass(U.COLLAPSING).addClass(U.COLLAPSE).trigger(B.HIDDEN)
                            }).emulateTransitionEnd(l)
                        }
                    }
                }, e.setTransitioning = function(e) {
                    this._isTransitioning = e
                }, e.dispose = function() {
                    m.removeData(this._element, R), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, e._getConfig = function(e) {
                    return (e = a({}, z, e)).toggle = Boolean(e.toggle), g.typeCheckConfig(F, e, q), e
                }, e._getDimension = function() {
                    var e = m(this._element).hasClass(G.WIDTH);
                    return e ? G.WIDTH : G.HEIGHT
                }, e._getParent = function() {
                    var e, n = this;
                    g.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                    var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        i = [].slice.call(e.querySelectorAll(t));
                    return m(i).each(function(e, t) {
                        n._addAriaAndCollapsedClass(l._getTargetFromElement(t), [t])
                    }), e
                }, e._addAriaAndCollapsedClass = function(e, t) {
                    var n = m(e).hasClass(U.SHOW);
                    t.length && m(t).toggleClass(U.COLLAPSED, !n).attr("aria-expanded", n)
                }, l._getTargetFromElement = function(e) {
                    var t = g.getSelectorFromElement(e);
                    return t ? document.querySelector(t) : null
                }, l._jQueryInterface = function(i) {
                    return this.each(function() {
                        var e = m(this),
                            t = e.data(R),
                            n = a({}, z, e.data(), "object" == typeof i && i ? i : {});
                        if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new l(this, n), e.data(R, t)), "string" == typeof i) {
                            if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                            t[i]()
                        }
                    })
                }, s(l, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return z
                    }
                }]), l
            }();
        m(document).on(B.CLICK_DATA_API, Y.DATA_TOGGLE, function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var i = m(this),
                t = g.getSelectorFromElement(this),
                n = [].slice.call(document.querySelectorAll(t));
            m(n).each(function() {
                var e = m(this),
                    t = e.data(R),
                    n = t ? "toggle" : i.data();
                K._jQueryInterface.call(e, n)
            })
        }), m.fn[F] = K._jQueryInterface, m.fn[F].Constructor = K, m.fn[F].noConflict = function() {
            return m.fn[F] = V, K._jQueryInterface
        };
        var Q = "dropdown",
            X = "bs.dropdown",
            Z = "." + X,
            J = ".data-api",
            ee = m.fn[Q],
            te = new RegExp("38|40|27"),
            ne = {
                HIDE: "hide" + Z,
                HIDDEN: "hidden" + Z,
                SHOW: "show" + Z,
                SHOWN: "shown" + Z,
                CLICK: "click" + Z,
                CLICK_DATA_API: "click" + Z + J,
                KEYDOWN_DATA_API: "keydown" + Z + J,
                KEYUP_DATA_API: "keyup" + Z + J
            },
            ie = {
                DISABLED: "disabled",
                SHOW: "show",
                DROPUP: "dropup",
                DROPRIGHT: "dropright",
                DROPLEFT: "dropleft",
                MENURIGHT: "dropdown-menu-right",
                MENULEFT: "dropdown-menu-left",
                POSITION_STATIC: "position-static"
            },
            oe = {
                DATA_TOGGLE: '[data-toggle="dropdown"]',
                FORM_CHILD: ".dropdown form",
                MENU: ".dropdown-menu",
                NAVBAR_NAV: ".navbar-nav",
                VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
            },
            re = {
                TOP: "top-start",
                TOPEND: "top-end",
                BOTTOM: "bottom-start",
                BOTTOMEND: "bottom-end",
                RIGHT: "right-start",
                RIGHTEND: "right-end",
                LEFT: "left-start",
                LEFTEND: "left-end"
            },
            se = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic"
            },
            ae = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string"
            },
            le = function() {
                function c(e, t) {
                    this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }
                var e = c.prototype;
                return e.toggle = function() {
                    if (!this._element.disabled && !m(this._element).hasClass(ie.DISABLED)) {
                        var e = c._getParentFromElement(this._element),
                            t = m(this._menu).hasClass(ie.SHOW);
                        if (c._clearMenus(), !t) {
                            var n = {
                                    relatedTarget: this._element
                                },
                                i = m.Event(ne.SHOW, n);
                            if (m(e).trigger(i), !i.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if (void 0 === d) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                    var o = this._element;
                                    "parent" === this._config.reference ? o = e : g.isElement(this._config.reference) && (o = this._config.reference, void 0 !== this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && m(e).addClass(ie.POSITION_STATIC), this._popper = new d(o, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === m(e).closest(oe.NAVBAR_NAV).length && m(document.body).children().on("mouseover", null, m.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), m(this._menu).toggleClass(ie.SHOW), m(e).toggleClass(ie.SHOW).trigger(m.Event(ne.SHOWN, n))
                            }
                        }
                    }
                }, e.show = function() {
                    if (!(this._element.disabled || m(this._element).hasClass(ie.DISABLED) || m(this._menu).hasClass(ie.SHOW))) {
                        var e = {
                                relatedTarget: this._element
                            },
                            t = m.Event(ne.SHOW, e),
                            n = c._getParentFromElement(this._element);
                        m(n).trigger(t), t.isDefaultPrevented() || (m(this._menu).toggleClass(ie.SHOW), m(n).toggleClass(ie.SHOW).trigger(m.Event(ne.SHOWN, e)))
                    }
                }, e.hide = function() {
                    if (!this._element.disabled && !m(this._element).hasClass(ie.DISABLED) && m(this._menu).hasClass(ie.SHOW)) {
                        var e = {
                                relatedTarget: this._element
                            },
                            t = m.Event(ne.HIDE, e),
                            n = c._getParentFromElement(this._element);
                        m(n).trigger(t), t.isDefaultPrevented() || (m(this._menu).toggleClass(ie.SHOW), m(n).toggleClass(ie.SHOW).trigger(m.Event(ne.HIDDEN, e)))
                    }
                }, e.dispose = function() {
                    m.removeData(this._element, X), m(this._element).off(Z), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
                }, e.update = function() {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, e._addEventListeners = function() {
                    var t = this;
                    m(this._element).on(ne.CLICK, function(e) {
                        e.preventDefault(), e.stopPropagation(), t.toggle()
                    })
                }, e._getConfig = function(e) {
                    return e = a({}, this.constructor.Default, m(this._element).data(), e), g.typeCheckConfig(Q, e, this.constructor.DefaultType), e
                }, e._getMenuElement = function() {
                    if (!this._menu) {
                        var e = c._getParentFromElement(this._element);
                        e && (this._menu = e.querySelector(oe.MENU))
                    }
                    return this._menu
                }, e._getPlacement = function() {
                    var e = m(this._element.parentNode),
                        t = re.BOTTOM;
                    return e.hasClass(ie.DROPUP) ? (t = re.TOP, m(this._menu).hasClass(ie.MENURIGHT) && (t = re.TOPEND)) : e.hasClass(ie.DROPRIGHT) ? t = re.RIGHT : e.hasClass(ie.DROPLEFT) ? t = re.LEFT : m(this._menu).hasClass(ie.MENURIGHT) && (t = re.BOTTOMEND), t
                }, e._detectNavbar = function() {
                    return 0 < m(this._element).closest(".navbar").length
                }, e._getOffset = function() {
                    var t = this,
                        e = {};
                    return "function" == typeof this._config.offset ? e.fn = function(e) {
                        return e.offsets = a({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e
                    } : e.offset = this._config.offset, e
                }, e._getPopperConfig = function() {
                    var e = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (e.modifiers.applyStyle = {
                        enabled: !1
                    }), e
                }, c._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = m(this).data(X),
                            t = "object" == typeof n ? n : null;
                        if (e || (e = new c(this, t), m(this).data(X, e)), "string" == typeof n) {
                            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        }
                    })
                }, c._clearMenus = function(e) {
                    if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                        for (var t = [].slice.call(document.querySelectorAll(oe.DATA_TOGGLE)), n = 0, i = t.length; n < i; n++) {
                            var o = c._getParentFromElement(t[n]),
                                r = m(t[n]).data(X),
                                s = {
                                    relatedTarget: t[n]
                                };
                            if (e && "click" === e.type && (s.clickEvent = e), r) {
                                var a = r._menu;
                                if (m(o).hasClass(ie.SHOW) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && m.contains(o, e.target))) {
                                    var l = m.Event(ne.HIDE, s);
                                    m(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && m(document.body).children().off("mouseover", null, m.noop), t[n].setAttribute("aria-expanded", "false"), m(a).removeClass(ie.SHOW), m(o).removeClass(ie.SHOW).trigger(m.Event(ne.HIDDEN, s)))
                                }
                            }
                        }
                }, c._getParentFromElement = function(e) {
                    var t, n = g.getSelectorFromElement(e);
                    return n && (t = document.querySelector(n)), t || e.parentNode
                }, c._dataApiKeydownHandler = function(e) {
                    if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || m(e.target).closest(oe.MENU).length)) : te.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !m(this).hasClass(ie.DISABLED))) {
                        var t = c._getParentFromElement(this),
                            n = m(t).hasClass(ie.SHOW);
                        if (n && (!n || 27 !== e.which && 32 !== e.which)) {
                            var i = [].slice.call(t.querySelectorAll(oe.VISIBLE_ITEMS));
                            if (0 !== i.length) {
                                var o = i.indexOf(e.target);
                                38 === e.which && 0 < o && o--, 40 === e.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
                            }
                        } else {
                            if (27 === e.which) {
                                var r = t.querySelector(oe.DATA_TOGGLE);
                                m(r).trigger("focus")
                            }
                            m(this).trigger("click")
                        }
                    }
                }, s(c, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return se
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return ae
                    }
                }]), c
            }();
        m(document).on(ne.KEYDOWN_DATA_API, oe.DATA_TOGGLE, le._dataApiKeydownHandler).on(ne.KEYDOWN_DATA_API, oe.MENU, le._dataApiKeydownHandler).on(ne.CLICK_DATA_API + " " + ne.KEYUP_DATA_API, le._clearMenus).on(ne.CLICK_DATA_API, oe.DATA_TOGGLE, function(e) {
            e.preventDefault(), e.stopPropagation(), le._jQueryInterface.call(m(this), "toggle")
        }).on(ne.CLICK_DATA_API, oe.FORM_CHILD, function(e) {
            e.stopPropagation()
        }), m.fn[Q] = le._jQueryInterface, m.fn[Q].Constructor = le, m.fn[Q].noConflict = function() {
            return m.fn[Q] = ee, le._jQueryInterface
        };
        var ce = "modal",
            ue = "bs.modal",
            de = "." + ue,
            fe = m.fn[ce],
            pe = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            },
            he = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            },
            me = {
                HIDE: "hide" + de,
                HIDDEN: "hidden" + de,
                SHOW: "show" + de,
                SHOWN: "shown" + de,
                FOCUSIN: "focusin" + de,
                RESIZE: "resize" + de,
                CLICK_DISMISS: "click.dismiss" + de,
                KEYDOWN_DISMISS: "keydown.dismiss" + de,
                MOUSEUP_DISMISS: "mouseup.dismiss" + de,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + de,
                CLICK_DATA_API: "click" + de + ".data-api"
            },
            ge = {
                SCROLLABLE: "modal-dialog-scrollable",
                SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                BACKDROP: "modal-backdrop",
                OPEN: "modal-open",
                FADE: "fade",
                SHOW: "show"
            },
            ve = {
                DIALOG: ".modal-dialog",
                MODAL_BODY: ".modal-body",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                STICKY_CONTENT: ".sticky-top"
            },
            ye = function() {
                function o(e, t) {
                    this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(ve.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                }
                var e = o.prototype;
                return e.toggle = function(e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, e.show = function(e) {
                    var t = this;
                    if (!this._isShown && !this._isTransitioning) {
                        m(this._element).hasClass(ge.FADE) && (this._isTransitioning = !0);
                        var n = m.Event(me.SHOW, {
                            relatedTarget: e
                        });
                        m(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), m(this._element).on(me.CLICK_DISMISS, ve.DATA_DISMISS, function(e) {
                            return t.hide(e)
                        }), m(this._dialog).on(me.MOUSEDOWN_DISMISS, function() {
                            m(t._element).one(me.MOUSEUP_DISMISS, function(e) {
                                m(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function() {
                            return t._showElement(e)
                        }))
                    }
                }, e.hide = function(e) {
                    var t = this;
                    if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                        var n = m.Event(me.HIDE);
                        if (m(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                            this._isShown = !1;
                            var i = m(this._element).hasClass(ge.FADE);
                            if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), m(document).off(me.FOCUSIN), m(this._element).removeClass(ge.SHOW), m(this._element).off(me.CLICK_DISMISS), m(this._dialog).off(me.MOUSEDOWN_DISMISS), i) {
                                var o = g.getTransitionDurationFromElement(this._element);
                                m(this._element).one(g.TRANSITION_END, function(e) {
                                    return t._hideModal(e)
                                }).emulateTransitionEnd(o)
                            } else this._hideModal()
                        }
                    }
                }, e.dispose = function() {
                    [window, this._element, this._dialog].forEach(function(e) {
                        return m(e).off(de)
                    }), m(document).off(me.FOCUSIN), m.removeData(this._element, ue), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                }, e.handleUpdate = function() {
                    this._adjustDialog()
                }, e._getConfig = function(e) {
                    return e = a({}, pe, e), g.typeCheckConfig(ce, e, he), e
                }, e._showElement = function(e) {
                    var t = this,
                        n = m(this._element).hasClass(ge.FADE);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), m(this._dialog).hasClass(ge.SCROLLABLE) ? this._dialog.querySelector(ve.MODAL_BODY).scrollTop = 0 : this._element.scrollTop = 0, n && g.reflow(this._element), m(this._element).addClass(ge.SHOW), this._config.focus && this._enforceFocus();
                    var i = m.Event(me.SHOWN, {
                            relatedTarget: e
                        }),
                        o = function() {
                            t._config.focus && t._element.focus(), t._isTransitioning = !1, m(t._element).trigger(i)
                        };
                    if (n) {
                        var r = g.getTransitionDurationFromElement(this._dialog);
                        m(this._dialog).one(g.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else o()
                }, e._enforceFocus = function() {
                    var t = this;
                    m(document).off(me.FOCUSIN).on(me.FOCUSIN, function(e) {
                        document !== e.target && t._element !== e.target && 0 === m(t._element).has(e.target).length && t._element.focus()
                    })
                }, e._setEscapeEvent = function() {
                    var t = this;
                    this._isShown && this._config.keyboard ? m(this._element).on(me.KEYDOWN_DISMISS, function(e) {
                        27 === e.which && (e.preventDefault(), t.hide())
                    }) : this._isShown || m(this._element).off(me.KEYDOWN_DISMISS)
                }, e._setResizeEvent = function() {
                    var t = this;
                    this._isShown ? m(window).on(me.RESIZE, function(e) {
                        return t.handleUpdate(e)
                    }) : m(window).off(me.RESIZE)
                }, e._hideModal = function() {
                    var e = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                        m(document.body).removeClass(ge.OPEN), e._resetAdjustments(), e._resetScrollbar(), m(e._element).trigger(me.HIDDEN)
                    })
                }, e._removeBackdrop = function() {
                    this._backdrop && (m(this._backdrop).remove(), this._backdrop = null)
                }, e._showBackdrop = function(e) {
                    var t = this,
                        n = m(this._element).hasClass(ge.FADE) ? ge.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = ge.BACKDROP, n && this._backdrop.classList.add(n), m(this._backdrop).appendTo(document.body), m(this._element).on(me.CLICK_DISMISS, function(e) {
                                t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                            }), n && g.reflow(this._backdrop), m(this._backdrop).addClass(ge.SHOW), !e) return;
                        if (!n) return void e();
                        var i = g.getTransitionDurationFromElement(this._backdrop);
                        m(this._backdrop).one(g.TRANSITION_END, e).emulateTransitionEnd(i)
                    } else if (!this._isShown && this._backdrop) {
                        m(this._backdrop).removeClass(ge.SHOW);
                        var o = function() {
                            t._removeBackdrop(), e && e()
                        };
                        if (m(this._element).hasClass(ge.FADE)) {
                            var r = g.getTransitionDurationFromElement(this._backdrop);
                            m(this._backdrop).one(g.TRANSITION_END, o).emulateTransitionEnd(r)
                        } else o()
                    } else e && e()
                }, e._adjustDialog = function() {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, e._resetAdjustments = function() {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, e._checkScrollbar = function() {
                    var e = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, e._setScrollbar = function() {
                    var o = this;
                    if (this._isBodyOverflowing) {
                        var e = [].slice.call(document.querySelectorAll(ve.FIXED_CONTENT)),
                            t = [].slice.call(document.querySelectorAll(ve.STICKY_CONTENT));
                        m(e).each(function(e, t) {
                            var n = t.style.paddingRight,
                                i = m(t).css("padding-right");
                            m(t).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                        }), m(t).each(function(e, t) {
                            var n = t.style.marginRight,
                                i = m(t).css("margin-right");
                            m(t).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                        });
                        var n = document.body.style.paddingRight,
                            i = m(document.body).css("padding-right");
                        m(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                    }
                    m(document.body).addClass(ge.OPEN)
                }, e._resetScrollbar = function() {
                    var e = [].slice.call(document.querySelectorAll(ve.FIXED_CONTENT));
                    m(e).each(function(e, t) {
                        var n = m(t).data("padding-right");
                        m(t).removeData("padding-right"), t.style.paddingRight = n || ""
                    });
                    var t = [].slice.call(document.querySelectorAll("" + ve.STICKY_CONTENT));
                    m(t).each(function(e, t) {
                        var n = m(t).data("margin-right");
                        void 0 !== n && m(t).css("margin-right", n).removeData("margin-right")
                    });
                    var n = m(document.body).data("padding-right");
                    m(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
                }, e._getScrollbarWidth = function() {
                    var e = document.createElement("div");
                    e.className = ge.SCROLLBAR_MEASURER, document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, o._jQueryInterface = function(n, i) {
                    return this.each(function() {
                        var e = m(this).data(ue),
                            t = a({}, pe, m(this).data(), "object" == typeof n && n ? n : {});
                        if (e || (e = new o(this, t), m(this).data(ue, e)), "string" == typeof n) {
                            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n](i)
                        } else t.show && e.show(i)
                    })
                }, s(o, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return pe
                    }
                }]), o
            }();
        m(document).on(me.CLICK_DATA_API, ve.DATA_TOGGLE, function(e) {
            var t, n = this,
                i = g.getSelectorFromElement(this);
            i && (t = document.querySelector(i));
            var o = m(t).data(ue) ? "toggle" : a({}, m(t).data(), m(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var r = m(t).one(me.SHOW, function(e) {
                e.isDefaultPrevented() || r.one(me.HIDDEN, function() {
                    m(n).is(":visible") && n.focus()
                })
            });
            ye._jQueryInterface.call(m(t), o, this)
        }), m.fn[ce] = ye._jQueryInterface, m.fn[ce].Constructor = ye, m.fn[ce].noConflict = function() {
            return m.fn[ce] = fe, ye._jQueryInterface
        };
        var be = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            we = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            Te = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            xe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

        function Se(e, s, t) {
            if (0 === e.length) return e;
            if (t && "function" == typeof t) return t(e);
            for (var n = new window.DOMParser, i = n.parseFromString(e, "text/html"), a = Object.keys(s), l = [].slice.call(i.body.querySelectorAll("*")), o = function(e, t) {
                    var n = l[e],
                        i = n.nodeName.toLowerCase();
                    if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                    var o = [].slice.call(n.attributes),
                        r = [].concat(s["*"] || [], s[i] || []);
                    o.forEach(function(e) {
                        ! function(e, t) {
                            var n = e.nodeName.toLowerCase();
                            if (-1 !== t.indexOf(n)) return -1 === be.indexOf(n) || Boolean(e.nodeValue.match(Te) || e.nodeValue.match(xe));
                            for (var i = t.filter(function(e) {
                                    return e instanceof RegExp
                                }), o = 0, r = i.length; o < r; o++)
                                if (n.match(i[o])) return !0;
                            return !1
                        }(e, r) && n.removeAttribute(e.nodeName)
                    })
                }, r = 0, c = l.length; r < c; r++) o(r, c);
            return i.body.innerHTML
        }
        var Ee = "tooltip",
            Ce = "bs.tooltip",
            _e = "." + Ce,
            ke = m.fn[Ee],
            Ae = "bs-tooltip",
            Ie = new RegExp("(^|\\s)" + Ae + "\\S+", "g"),
            De = ["sanitize", "whiteList", "sanitizeFn"],
            Oe = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object"
            },
            Le = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            },
            Pe = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: we
            },
            Ne = {
                SHOW: "show",
                OUT: "out"
            },
            Me = {
                HIDE: "hide" + _e,
                HIDDEN: "hidden" + _e,
                SHOW: "show" + _e,
                SHOWN: "shown" + _e,
                INSERTED: "inserted" + _e,
                CLICK: "click" + _e,
                FOCUSIN: "focusin" + _e,
                FOCUSOUT: "focusout" + _e,
                MOUSEENTER: "mouseenter" + _e,
                MOUSELEAVE: "mouseleave" + _e
            },
            je = {
                FADE: "fade",
                SHOW: "show"
            },
            He = {
                TOOLTIP: ".tooltip",
                TOOLTIP_INNER: ".tooltip-inner",
                ARROW: ".arrow"
            },
            $e = {
                HOVER: "hover",
                FOCUS: "focus",
                CLICK: "click",
                MANUAL: "manual"
            },
            Fe = function() {
                function i(e, t) {
                    if (void 0 === d) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                }
                var e = i.prototype;
                return e.enable = function() {
                    this._isEnabled = !0
                }, e.disable = function() {
                    this._isEnabled = !1
                }, e.toggleEnabled = function() {
                    this._isEnabled = !this._isEnabled
                }, e.toggle = function(e) {
                    if (this._isEnabled)
                        if (e) {
                            var t = this.constructor.DATA_KEY,
                                n = m(e.currentTarget).data(t);
                            n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), m(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                        } else {
                            if (m(this.getTipElement()).hasClass(je.SHOW)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }, e.dispose = function() {
                    clearTimeout(this._timeout), m.removeData(this.element, this.constructor.DATA_KEY), m(this.element).off(this.constructor.EVENT_KEY), m(this.element).closest(".modal").off("hide.bs.modal"), this.tip && m(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, e.show = function() {
                    var t = this;
                    if ("none" === m(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var e = m.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        m(this.element).trigger(e);
                        var n = g.findShadowRoot(this.element),
                            i = m.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                        if (e.isDefaultPrevented() || !i) return;
                        var o = this.getTipElement(),
                            r = g.getUID(this.constructor.NAME);
                        o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && m(o).addClass(je.FADE);
                        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                            a = this._getAttachment(s);
                        this.addAttachmentClass(a);
                        var l = this._getContainer();
                        m(o).data(this.constructor.DATA_KEY, this), m.contains(this.element.ownerDocument.documentElement, this.tip) || m(o).appendTo(l), m(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new d(this.element, o, {
                            placement: a,
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {
                                    behavior: this.config.fallbackPlacement
                                },
                                arrow: {
                                    element: He.ARROW
                                },
                                preventOverflow: {
                                    boundariesElement: this.config.boundary
                                }
                            },
                            onCreate: function(e) {
                                e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                            },
                            onUpdate: function(e) {
                                return t._handlePopperPlacementChange(e)
                            }
                        }), m(o).addClass(je.SHOW), "ontouchstart" in document.documentElement && m(document.body).children().on("mouseover", null, m.noop);
                        var c = function() {
                            t.config.animation && t._fixTransition();
                            var e = t._hoverState;
                            t._hoverState = null, m(t.element).trigger(t.constructor.Event.SHOWN), e === Ne.OUT && t._leave(null, t)
                        };
                        if (m(this.tip).hasClass(je.FADE)) {
                            var u = g.getTransitionDurationFromElement(this.tip);
                            m(this.tip).one(g.TRANSITION_END, c).emulateTransitionEnd(u)
                        } else c()
                    }
                }, e.hide = function(e) {
                    var t = this,
                        n = this.getTipElement(),
                        i = m.Event(this.constructor.Event.HIDE),
                        o = function() {
                            t._hoverState !== Ne.SHOW && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), m(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                        };
                    if (m(this.element).trigger(i), !i.isDefaultPrevented()) {
                        if (m(n).removeClass(je.SHOW), "ontouchstart" in document.documentElement && m(document.body).children().off("mouseover", null, m.noop), this._activeTrigger[$e.CLICK] = !1, this._activeTrigger[$e.FOCUS] = !1, this._activeTrigger[$e.HOVER] = !1, m(this.tip).hasClass(je.FADE)) {
                            var r = g.getTransitionDurationFromElement(n);
                            m(n).one(g.TRANSITION_END, o).emulateTransitionEnd(r)
                        } else o();
                        this._hoverState = ""
                    }
                }, e.update = function() {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, e.isWithContent = function() {
                    return Boolean(this.getTitle())
                }, e.addAttachmentClass = function(e) {
                    m(this.getTipElement()).addClass(Ae + "-" + e)
                }, e.getTipElement = function() {
                    return this.tip = this.tip || m(this.config.template)[0], this.tip
                }, e.setContent = function() {
                    var e = this.getTipElement();
                    this.setElementContent(m(e.querySelectorAll(He.TOOLTIP_INNER)), this.getTitle()), m(e).removeClass(je.FADE + " " + je.SHOW)
                }, e.setElementContent = function(e, t) {
                    "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = Se(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? m(t).parent().is(e) || e.empty().append(t) : e.text(m(t).text())
                }, e.getTitle = function() {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, e._getOffset = function() {
                    var t = this,
                        e = {};
                    return "function" == typeof this.config.offset ? e.fn = function(e) {
                        return e.offsets = a({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e
                    } : e.offset = this.config.offset, e
                }, e._getContainer = function() {
                    return !1 === this.config.container ? document.body : g.isElement(this.config.container) ? m(this.config.container) : m(document).find(this.config.container)
                }, e._getAttachment = function(e) {
                    return Le[e.toUpperCase()]
                }, e._setListeners = function() {
                    var i = this,
                        e = this.config.trigger.split(" ");
                    e.forEach(function(e) {
                        if ("click" === e) m(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                            return i.toggle(e)
                        });
                        else if (e !== $e.MANUAL) {
                            var t = e === $e.HOVER ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                                n = e === $e.HOVER ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                            m(i.element).on(t, i.config.selector, function(e) {
                                return i._enter(e)
                            }).on(n, i.config.selector, function(e) {
                                return i._leave(e)
                            })
                        }
                    }), m(this.element).closest(".modal").on("hide.bs.modal", function() {
                        i.element && i.hide()
                    }), this.config.selector ? this.config = a({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, e._fixTitle = function() {
                    var e = typeof this.element.getAttribute("data-original-title");
                    !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, e._enter = function(e, t) {
                    var n = this.constructor.DATA_KEY;
                    (t = t || m(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), m(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? $e.FOCUS : $e.HOVER] = !0), m(t.getTipElement()).hasClass(je.SHOW) || t._hoverState === Ne.SHOW ? t._hoverState = Ne.SHOW : (clearTimeout(t._timeout), t._hoverState = Ne.SHOW, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                        t._hoverState === Ne.SHOW && t.show()
                    }, t.config.delay.show) : t.show())
                }, e._leave = function(e, t) {
                    var n = this.constructor.DATA_KEY;
                    (t = t || m(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), m(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? $e.FOCUS : $e.HOVER] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Ne.OUT, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                        t._hoverState === Ne.OUT && t.hide()
                    }, t.config.delay.hide) : t.hide())
                }, e._isWithActiveTrigger = function() {
                    for (var e in this._activeTrigger)
                        if (this._activeTrigger[e]) return !0;
                    return !1
                }, e._getConfig = function(e) {
                    var t = m(this.element).data();
                    return Object.keys(t).forEach(function(e) {
                        -1 !== De.indexOf(e) && delete t[e]
                    }), "number" == typeof(e = a({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), g.typeCheckConfig(Ee, e, this.constructor.DefaultType), e.sanitize && (e.template = Se(e.template, e.whiteList, e.sanitizeFn)), e
                }, e._getDelegateConfig = function() {
                    var e = {};
                    if (this.config)
                        for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, e._cleanTipClass = function() {
                    var e = m(this.getTipElement()),
                        t = e.attr("class").match(Ie);
                    null !== t && t.length && e.removeClass(t.join(""))
                }, e._handlePopperPlacementChange = function(e) {
                    var t = e.instance;
                    this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, e._fixTransition = function() {
                    var e = this.getTipElement(),
                        t = this.config.animation;
                    null === e.getAttribute("x-placement") && (m(e).removeClass(je.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
                }, i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = m(this).data(Ce),
                            t = "object" == typeof n && n;
                        if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), m(this).data(Ce, e)), "string" == typeof n)) {
                            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        }
                    })
                }, s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Pe
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return Ee
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return Ce
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return Me
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return _e
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Oe
                    }
                }]), i
            }();
        m.fn[Ee] = Fe._jQueryInterface, m.fn[Ee].Constructor = Fe, m.fn[Ee].noConflict = function() {
            return m.fn[Ee] = ke, Fe._jQueryInterface
        };
        var Re = "popover",
            We = "bs.popover",
            Ve = "." + We,
            ze = m.fn[Re],
            qe = "bs-popover",
            Be = new RegExp("(^|\\s)" + qe + "\\S+", "g"),
            Ue = a({}, Fe.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }),
            Ge = a({}, Fe.DefaultType, {
                content: "(string|element|function)"
            }),
            Ye = {
                FADE: "fade",
                SHOW: "show"
            },
            Ke = {
                TITLE: ".popover-header",
                CONTENT: ".popover-body"
            },
            Qe = {
                HIDE: "hide" + Ve,
                HIDDEN: "hidden" + Ve,
                SHOW: "show" + Ve,
                SHOWN: "shown" + Ve,
                INSERTED: "inserted" + Ve,
                CLICK: "click" + Ve,
                FOCUSIN: "focusin" + Ve,
                FOCUSOUT: "focusout" + Ve,
                MOUSEENTER: "mouseenter" + Ve,
                MOUSELEAVE: "mouseleave" + Ve
            },
            Xe = function(e) {
                function i() {
                    return e.apply(this, arguments) || this
                }! function(e, t) {
                    e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                }(i, e);
                var t = i.prototype;
                return t.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                }, t.addAttachmentClass = function(e) {
                    m(this.getTipElement()).addClass(qe + "-" + e)
                }, t.getTipElement = function() {
                    return this.tip = this.tip || m(this.config.template)[0], this.tip
                }, t.setContent = function() {
                    var e = m(this.getTipElement());
                    this.setElementContent(e.find(Ke.TITLE), this.getTitle());
                    var t = this._getContent();
                    "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(Ke.CONTENT), t), e.removeClass(Ye.FADE + " " + Ye.SHOW)
                }, t._getContent = function() {
                    return this.element.getAttribute("data-content") || this.config.content
                }, t._cleanTipClass = function() {
                    var e = m(this.getTipElement()),
                        t = e.attr("class").match(Be);
                    null !== t && 0 < t.length && e.removeClass(t.join(""))
                }, i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = m(this).data(We),
                            t = "object" == typeof n ? n : null;
                        if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), m(this).data(We, e)), "string" == typeof n)) {
                            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        }
                    })
                }, s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Ue
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return Re
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return We
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return Qe
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return Ve
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Ge
                    }
                }]), i
            }(Fe);
        m.fn[Re] = Xe._jQueryInterface, m.fn[Re].Constructor = Xe, m.fn[Re].noConflict = function() {
            return m.fn[Re] = ze, Xe._jQueryInterface
        };
        var Ze = "scrollspy",
            Je = "bs.scrollspy",
            et = "." + Je,
            tt = m.fn[Ze],
            nt = {
                offset: 10,
                method: "auto",
                target: ""
            },
            it = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            },
            ot = {
                ACTIVATE: "activate" + et,
                SCROLL: "scroll" + et,
                LOAD_DATA_API: "load" + et + ".data-api"
            },
            rt = {
                DROPDOWN_ITEM: "dropdown-item",
                DROPDOWN_MENU: "dropdown-menu",
                ACTIVE: "active"
            },
            st = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                NAV_LIST_GROUP: ".nav, .list-group",
                NAV_LINKS: ".nav-link",
                NAV_ITEMS: ".nav-item",
                LIST_ITEMS: ".list-group-item",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle"
            },
            at = {
                OFFSET: "offset",
                POSITION: "position"
            },
            lt = function() {
                function i(e, t) {
                    var n = this;
                    this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + st.NAV_LINKS + "," + this._config.target + " " + st.LIST_ITEMS + "," + this._config.target + " " + st.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, m(this._scrollElement).on(ot.SCROLL, function(e) {
                        return n._process(e)
                    }), this.refresh(), this._process()
                }
                var e = i.prototype;
                return e.refresh = function() {
                    var t = this,
                        e = this._scrollElement === this._scrollElement.window ? at.OFFSET : at.POSITION,
                        o = "auto" === this._config.method ? e : this._config.method,
                        r = o === at.POSITION ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                    var n = [].slice.call(document.querySelectorAll(this._selector));
                    n.map(function(e) {
                        var t, n = g.getSelectorFromElement(e);
                        if (n && (t = document.querySelector(n)), t) {
                            var i = t.getBoundingClientRect();
                            if (i.width || i.height) return [m(t)[o]().top + r, n]
                        }
                        return null
                    }).filter(function(e) {
                        return e
                    }).sort(function(e, t) {
                        return e[0] - t[0]
                    }).forEach(function(e) {
                        t._offsets.push(e[0]), t._targets.push(e[1])
                    })
                }, e.dispose = function() {
                    m.removeData(this._element, Je), m(this._scrollElement).off(et), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, e._getConfig = function(e) {
                    if ("string" != typeof(e = a({}, nt, "object" == typeof e && e ? e : {})).target) {
                        var t = m(e.target).attr("id");
                        t || (t = g.getUID(Ze), m(e.target).attr("id", t)), e.target = "#" + t
                    }
                    return g.typeCheckConfig(Ze, e, it), e
                }, e._getScrollTop = function() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, e._getScrollHeight = function() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, e._getOffsetHeight = function() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, e._process = function() {
                    var e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), n <= e) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                        for (var o = this._offsets.length, r = o; r--;) {
                            var s = this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]);
                            s && this._activate(this._targets[r])
                        }
                    }
                }, e._activate = function(t) {
                    this._activeTarget = t, this._clear();
                    var e = this._selector.split(",").map(function(e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                        }),
                        n = m([].slice.call(document.querySelectorAll(e.join(","))));
                    n.hasClass(rt.DROPDOWN_ITEM) ? (n.closest(st.DROPDOWN).find(st.DROPDOWN_TOGGLE).addClass(rt.ACTIVE), n.addClass(rt.ACTIVE)) : (n.addClass(rt.ACTIVE), n.parents(st.NAV_LIST_GROUP).prev(st.NAV_LINKS + ", " + st.LIST_ITEMS).addClass(rt.ACTIVE), n.parents(st.NAV_LIST_GROUP).prev(st.NAV_ITEMS).children(st.NAV_LINKS).addClass(rt.ACTIVE)), m(this._scrollElement).trigger(ot.ACTIVATE, {
                        relatedTarget: t
                    })
                }, e._clear = function() {
                    [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                        return e.classList.contains(rt.ACTIVE)
                    }).forEach(function(e) {
                        return e.classList.remove(rt.ACTIVE)
                    })
                }, i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = m(this).data(Je),
                            t = "object" == typeof n && n;
                        if (e || (e = new i(this, t), m(this).data(Je, e)), "string" == typeof n) {
                            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        }
                    })
                }, s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return nt
                    }
                }]), i
            }();
        m(window).on(ot.LOAD_DATA_API, function() {
            for (var e = [].slice.call(document.querySelectorAll(st.DATA_SPY)), t = e.length, n = t; n--;) {
                var i = m(e[n]);
                lt._jQueryInterface.call(i, i.data())
            }
        }), m.fn[Ze] = lt._jQueryInterface, m.fn[Ze].Constructor = lt, m.fn[Ze].noConflict = function() {
            return m.fn[Ze] = tt, lt._jQueryInterface
        };
        var ct = "bs.tab",
            ut = "." + ct,
            dt = m.fn.tab,
            ft = {
                HIDE: "hide" + ut,
                HIDDEN: "hidden" + ut,
                SHOW: "show" + ut,
                SHOWN: "shown" + ut,
                CLICK_DATA_API: "click" + ut + ".data-api"
            },
            pt = {
                DROPDOWN_MENU: "dropdown-menu",
                ACTIVE: "active",
                DISABLED: "disabled",
                FADE: "fade",
                SHOW: "show"
            },
            ht = {
                DROPDOWN: ".dropdown",
                NAV_LIST_GROUP: ".nav, .list-group",
                ACTIVE: ".active",
                ACTIVE_UL: "> li > .active",
                DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                DROPDOWN_TOGGLE: ".dropdown-toggle",
                DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
            },
            mt = function() {
                function i(e) {
                    this._element = e
                }
                var e = i.prototype;
                return e.show = function() {
                    var n = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && m(this._element).hasClass(pt.ACTIVE) || m(this._element).hasClass(pt.DISABLED))) {
                        var e, i, t = m(this._element).closest(ht.NAV_LIST_GROUP)[0],
                            o = g.getSelectorFromElement(this._element);
                        if (t) {
                            var r = "UL" === t.nodeName || "OL" === t.nodeName ? ht.ACTIVE_UL : ht.ACTIVE;
                            i = (i = m.makeArray(m(t).find(r)))[i.length - 1]
                        }
                        var s = m.Event(ft.HIDE, {
                                relatedTarget: this._element
                            }),
                            a = m.Event(ft.SHOW, {
                                relatedTarget: i
                            });
                        if (i && m(i).trigger(s), m(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                            o && (e = document.querySelector(o)), this._activate(this._element, t);
                            var l = function() {
                                var e = m.Event(ft.HIDDEN, {
                                        relatedTarget: n._element
                                    }),
                                    t = m.Event(ft.SHOWN, {
                                        relatedTarget: i
                                    });
                                m(i).trigger(e), m(n._element).trigger(t)
                            };
                            e ? this._activate(e, e.parentNode, l) : l()
                        }
                    }
                }, e.dispose = function() {
                    m.removeData(this._element, ct), this._element = null
                }, e._activate = function(e, t, n) {
                    var i = this,
                        o = !t || "UL" !== t.nodeName && "OL" !== t.nodeName ? m(t).children(ht.ACTIVE) : m(t).find(ht.ACTIVE_UL),
                        r = o[0],
                        s = n && r && m(r).hasClass(pt.FADE),
                        a = function() {
                            return i._transitionComplete(e, r, n)
                        };
                    if (r && s) {
                        var l = g.getTransitionDurationFromElement(r);
                        m(r).removeClass(pt.SHOW).one(g.TRANSITION_END, a).emulateTransitionEnd(l)
                    } else a()
                }, e._transitionComplete = function(e, t, n) {
                    if (t) {
                        m(t).removeClass(pt.ACTIVE);
                        var i = m(t.parentNode).find(ht.DROPDOWN_ACTIVE_CHILD)[0];
                        i && m(i).removeClass(pt.ACTIVE), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                    }
                    if (m(e).addClass(pt.ACTIVE), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), g.reflow(e), e.classList.contains(pt.FADE) && e.classList.add(pt.SHOW), e.parentNode && m(e.parentNode).hasClass(pt.DROPDOWN_MENU)) {
                        var o = m(e).closest(ht.DROPDOWN)[0];
                        if (o) {
                            var r = [].slice.call(o.querySelectorAll(ht.DROPDOWN_TOGGLE));
                            m(r).addClass(pt.ACTIVE)
                        }
                        e.setAttribute("aria-expanded", !0)
                    }
                    n && n()
                }, i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = m(this),
                            t = e.data(ct);
                        if (t || (t = new i(this), e.data(ct, t)), "string" == typeof n) {
                            if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        }
                    })
                }, s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }]), i
            }();
        m(document).on(ft.CLICK_DATA_API, ht.DATA_TOGGLE, function(e) {
            e.preventDefault(), mt._jQueryInterface.call(m(this), "show")
        }), m.fn.tab = mt._jQueryInterface, m.fn.tab.Constructor = mt, m.fn.tab.noConflict = function() {
            return m.fn.tab = dt, mt._jQueryInterface
        };
        var gt = "toast",
            vt = "bs.toast",
            yt = "." + vt,
            bt = m.fn[gt],
            wt = {
                CLICK_DISMISS: "click.dismiss" + yt,
                HIDE: "hide" + yt,
                HIDDEN: "hidden" + yt,
                SHOW: "show" + yt,
                SHOWN: "shown" + yt
            },
            Tt = {
                FADE: "fade",
                HIDE: "hide",
                SHOW: "show",
                SHOWING: "showing"
            },
            xt = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            },
            St = {
                animation: !0,
                autohide: !0,
                delay: 500
            },
            Et = {
                DATA_DISMISS: '[data-dismiss="toast"]'
            },
            Ct = function() {
                function o(e, t) {
                    this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
                }
                var e = o.prototype;
                return e.show = function() {
                    var e = this;
                    m(this._element).trigger(wt.SHOW), this._config.animation && this._element.classList.add(Tt.FADE);
                    var t = function() {
                        e._element.classList.remove(Tt.SHOWING), e._element.classList.add(Tt.SHOW), m(e._element).trigger(wt.SHOWN), e._config.autohide && e.hide()
                    };
                    if (this._element.classList.remove(Tt.HIDE), this._element.classList.add(Tt.SHOWING), this._config.animation) {
                        var n = g.getTransitionDurationFromElement(this._element);
                        m(this._element).one(g.TRANSITION_END, t).emulateTransitionEnd(n)
                    } else t()
                }, e.hide = function(e) {
                    var t = this;
                    this._element.classList.contains(Tt.SHOW) && (m(this._element).trigger(wt.HIDE), e ? this._close() : this._timeout = setTimeout(function() {
                        t._close()
                    }, this._config.delay))
                }, e.dispose = function() {
                    clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Tt.SHOW) && this._element.classList.remove(Tt.SHOW), m(this._element).off(wt.CLICK_DISMISS), m.removeData(this._element, vt), this._element = null, this._config = null
                }, e._getConfig = function(e) {
                    return e = a({}, St, m(this._element).data(), "object" == typeof e && e ? e : {}), g.typeCheckConfig(gt, e, this.constructor.DefaultType), e
                }, e._setListeners = function() {
                    var e = this;
                    m(this._element).on(wt.CLICK_DISMISS, Et.DATA_DISMISS, function() {
                        return e.hide(!0)
                    })
                }, e._close = function() {
                    var e = this,
                        t = function() {
                            e._element.classList.add(Tt.HIDE), m(e._element).trigger(wt.HIDDEN)
                        };
                    if (this._element.classList.remove(Tt.SHOW), this._config.animation) {
                        var n = g.getTransitionDurationFromElement(this._element);
                        m(this._element).one(g.TRANSITION_END, t).emulateTransitionEnd(n)
                    } else t()
                }, o._jQueryInterface = function(i) {
                    return this.each(function() {
                        var e = m(this),
                            t = e.data(vt),
                            n = "object" == typeof i && i;
                        if (t || (t = new o(this, n), e.data(vt, t)), "string" == typeof i) {
                            if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                            t[i](this)
                        }
                    })
                }, s(o, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return xt
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return St
                    }
                }]), o
            }();
        m.fn[gt] = Ct._jQueryInterface, m.fn[gt].Constructor = Ct, m.fn[gt].noConflict = function() {
                return m.fn[gt] = bt, Ct._jQueryInterface
            },
            function() {
                if (void 0 === m) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var e = m.fn.jquery.split(" ")[0].split(".");
                if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }(), e.Util = g, e.Alert = h, e.Button = C, e.Carousel = $, e.Collapse = K, e.Dropdown = le, e.Modal = ye, e.Popover = Xe, e.Scrollspy = lt, e.Tab = mt, e.Toast = Ct, e.Tooltip = Fe, Object.defineProperty(e, "__esModule", {
                value: !0
            })
    }(t, n(3), n(7))
}, function(e, te, t) {
    "use strict";
    t.r(te),
        function(e) {
            for (
                /**!
                 * @fileOverview Kickass library to create and place poppers near their reference elements.
                 * @version 1.15.0
                 * @license
                 * Copyright (c) 2016 Federico Zivolo and contributors
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in all
                 * copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                 * SOFTWARE.
                 */
                var t = "undefined" != typeof window && "undefined" != typeof document, n = ["Edge", "Trident", "Firefox"], i = 0, o = 0; o < n.length; o += 1)
                if (t && 0 <= navigator.userAgent.indexOf(n[o])) {
                    i = 1;
                    break
                }
            var r = t && window.Promise ? function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, window.Promise.resolve().then(function() {
                        t = !1, e()
                    }))
                }
            } : function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, setTimeout(function() {
                        t = !1, e()
                    }, i))
                }
            };

            function s(e) {
                return e && "[object Function]" === {}.toString.call(e)
            }

            function w(e, t) {
                if (1 !== e.nodeType) return [];
                var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                return t ? n[t] : n
            }

            function h(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host
            }

            function m(e) {
                if (!e) return document.body;
                switch (e.nodeName) {
                    case "HTML":
                    case "BODY":
                        return e.ownerDocument.body;
                    case "#document":
                        return e.body
                }
                var t = w(e),
                    n = t.overflow,
                    i = t.overflowX,
                    o = t.overflowY;
                return /(auto|scroll|overlay)/.test(n + o + i) ? e : m(h(e))
            }
            var a = t && !(!window.MSInputMethodContext || !document.documentMode),
                l = t && /MSIE 10/.test(navigator.userAgent);

            function g(e) {
                return 11 === e ? a : 10 === e ? l : a || l
            }

            function b(e) {
                if (!e) return document.documentElement;
                for (var t = g(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                var i = n && n.nodeName;
                return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === w(n, "position") ? b(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
            }

            function c(e) {
                return null !== e.parentNode ? c(e.parentNode) : e
            }

            function v(e, t) {
                if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                    i = n ? e : t,
                    o = n ? t : e,
                    r = document.createRange();
                r.setStart(i, 0), r.setEnd(o, 0);
                var s = r.commonAncestorContainer;
                if (e !== s && t !== s || i.contains(o)) return function(e) {
                    var t = e.nodeName;
                    return "BODY" !== t && ("HTML" === t || b(e.firstElementChild) === e)
                }(s) ? s : b(s);
                var a = c(e);
                return a.host ? v(a.host, t) : v(e, c(t).host)
            }

            function y(e, t) {
                var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
                    i = e.nodeName;
                if ("BODY" !== i && "HTML" !== i) return e[n];
                var o = e.ownerDocument.documentElement;
                return (e.ownerDocument.scrollingElement || o)[n]
            }

            function d(e, t) {
                var n = "x" === t ? "Left" : "Top",
                    i = "Left" == n ? "Right" : "Bottom";
                return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
            }

            function u(e, t, n, i) {
                return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], g(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
            }

            function T(e) {
                var t = e.body,
                    n = e.documentElement,
                    i = g(10) && getComputedStyle(n);
                return {
                    height: u("Height", t, n, i),
                    width: u("Width", t, n, i)
                }
            }
            var f = function(e, t, n) {
                return t && p(e.prototype, t), n && p(e, n), e
            };

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function x(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var S = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            };

            function E(e) {
                return S({}, e, {
                    right: e.left + e.width,
                    bottom: e.top + e.height
                })
            }

            function C(e) {
                var t = {};
                try {
                    if (g(10)) {
                        t = e.getBoundingClientRect();
                        var n = y(e, "top"),
                            i = y(e, "left");
                        t.top += n, t.left += i, t.bottom += n, t.right += i
                    } else t = e.getBoundingClientRect()
                } catch (e) {}
                var o = {
                        left: t.left,
                        top: t.top,
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    },
                    r = "HTML" === e.nodeName ? T(e.ownerDocument) : {},
                    s = r.width || e.clientWidth || o.right - o.left,
                    a = r.height || e.clientHeight || o.bottom - o.top,
                    l = e.offsetWidth - s,
                    c = e.offsetHeight - a;
                if (l || c) {
                    var u = w(e);
                    l -= d(u, "x"), c -= d(u, "y"), o.width -= l, o.height -= c
                }
                return E(o)
            }

            function _(e, t, n) {
                var i = 2 < arguments.length && void 0 !== n && n,
                    o = g(10),
                    r = "HTML" === t.nodeName,
                    s = C(e),
                    a = C(t),
                    l = m(e),
                    c = w(t),
                    u = parseFloat(c.borderTopWidth, 10),
                    d = parseFloat(c.borderLeftWidth, 10);
                i && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
                var f = E({
                    top: s.top - a.top - u,
                    left: s.left - a.left - d,
                    width: s.width,
                    height: s.height
                });
                if (f.marginTop = 0, f.marginLeft = 0, !o && r) {
                    var p = parseFloat(c.marginTop, 10),
                        h = parseFloat(c.marginLeft, 10);
                    f.top -= u - p, f.bottom -= u - p, f.left -= d - h, f.right -= d - h, f.marginTop = p, f.marginLeft = h
                }
                return (o && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (f = function(e, t, n) {
                    var i = 2 < arguments.length && void 0 !== n && n,
                        o = y(t, "top"),
                        r = y(t, "left"),
                        s = i ? -1 : 1;
                    return e.top += o * s, e.bottom += o * s, e.left += r * s, e.right += r * s, e
                }(f, t)), f
            }

            function k(e) {
                if (!e || !e.parentElement || g()) return document.documentElement;
                for (var t = e.parentElement; t && "none" === w(t, "transform");) t = t.parentElement;
                return t || document.documentElement
            }

            function A(e, t, n, i, o) {
                var r = 4 < arguments.length && void 0 !== o && o,
                    s = {
                        top: 0,
                        left: 0
                    },
                    a = r ? k(e) : v(e, t);
                if ("viewport" === i) s = function(e, t) {
                    var n = 1 < arguments.length && void 0 !== t && t,
                        i = e.ownerDocument.documentElement,
                        o = _(e, i),
                        r = Math.max(i.clientWidth, window.innerWidth || 0),
                        s = Math.max(i.clientHeight, window.innerHeight || 0),
                        a = n ? 0 : y(i),
                        l = n ? 0 : y(i, "left");
                    return E({
                        top: a - o.top + o.marginTop,
                        left: l - o.left + o.marginLeft,
                        width: r,
                        height: s
                    })
                }(a, r);
                else {
                    var l = void 0;
                    "scrollParent" === i ? "BODY" === (l = m(h(t))).nodeName && (l = e.ownerDocument.documentElement) : l = "window" === i ? e.ownerDocument.documentElement : i;
                    var c = _(l, a, r);
                    if ("HTML" !== l.nodeName || function e(t) {
                            var n = t.nodeName;
                            if ("BODY" === n || "HTML" === n) return !1;
                            if ("fixed" === w(t, "position")) return !0;
                            var i = h(t);
                            return !!i && e(i)
                        }(a)) s = c;
                    else {
                        var u = T(e.ownerDocument),
                            d = u.height,
                            f = u.width;
                        s.top += c.top - c.marginTop, s.bottom = d + c.top, s.left += c.left - c.marginLeft, s.right = f + c.left
                    }
                }
                var p = "number" == typeof(n = n || 0);
                return s.left += p ? n : n.left || 0, s.top += p ? n : n.top || 0, s.right -= p ? n : n.right || 0, s.bottom -= p ? n : n.bottom || 0, s
            }

            function I(e, t, i, n, o, r) {
                var s = 5 < arguments.length && void 0 !== r ? r : 0;
                if (-1 === e.indexOf("auto")) return e;
                var a = A(i, n, s, o),
                    l = {
                        top: {
                            width: a.width,
                            height: t.top - a.top
                        },
                        right: {
                            width: a.right - t.right,
                            height: a.height
                        },
                        bottom: {
                            width: a.width,
                            height: a.bottom - t.bottom
                        },
                        left: {
                            width: t.left - a.left,
                            height: a.height
                        }
                    },
                    c = Object.keys(l).map(function(e) {
                        return S({
                            key: e
                        }, l[e], {
                            area: function(e) {
                                return e.width * e.height
                            }(l[e])
                        })
                    }).sort(function(e, t) {
                        return t.area - e.area
                    }),
                    u = c.filter(function(e) {
                        var t = e.width,
                            n = e.height;
                        return t >= i.clientWidth && n >= i.clientHeight
                    }),
                    d = 0 < u.length ? u[0].key : c[0].key,
                    f = e.split("-")[1];
                return d + (f ? "-" + f : "")
            }

            function D(e, t, n, i) {
                var o = 3 < arguments.length && void 0 !== i ? i : null;
                return _(n, o ? k(t) : v(t, n), o)
            }

            function O(e) {
                var t = e.ownerDocument.defaultView.getComputedStyle(e),
                    n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                    i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                return {
                    width: e.offsetWidth + i,
                    height: e.offsetHeight + n
                }
            }

            function L(e) {
                var t = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return e.replace(/left|right|bottom|top/g, function(e) {
                    return t[e]
                })
            }

            function P(e, t, n) {
                n = n.split("-")[0];
                var i = O(e),
                    o = {
                        width: i.width,
                        height: i.height
                    },
                    r = -1 !== ["right", "left"].indexOf(n),
                    s = r ? "top" : "left",
                    a = r ? "left" : "top",
                    l = r ? "height" : "width",
                    c = r ? "width" : "height";
                return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[L(a)], o
            }

            function N(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0]
            }

            function M(e, n, t) {
                return (void 0 === t ? e : e.slice(0, function(e, t, n) {
                    if (Array.prototype.findIndex) return e.findIndex(function(e) {
                        return e[t] === n
                    });
                    var i = N(e, function(e) {
                        return e[t] === n
                    });
                    return e.indexOf(i)
                }(e, "name", t))).forEach(function(e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var t = e.function || e.fn;
                    e.enabled && s(t) && (n.offsets.popper = E(n.offsets.popper), n.offsets.reference = E(n.offsets.reference), n = t(n, e))
                }), n
            }

            function j(e, n) {
                return e.some(function(e) {
                    var t = e.name;
                    return e.enabled && t === n
                })
            }

            function H(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                    var o = t[i],
                        r = o ? "" + o + n : e;
                    if (void 0 !== document.body.style[r]) return r
                }
                return null
            }

            function $(e) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window
            }

            function F(e, t, n, i) {
                n.updateBound = i, $(e).addEventListener("resize", n.updateBound, {
                    passive: !0
                });
                var o = m(e);
                return function e(t, n, i, o) {
                    var r = "BODY" === t.nodeName,
                        s = r ? t.ownerDocument.defaultView : t;
                    s.addEventListener(n, i, {
                        passive: !0
                    }), r || e(m(s.parentNode), n, i, o), o.push(s)
                }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
            }

            function R() {
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function(e, t) {
                    return $(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                        e.removeEventListener("scroll", t.updateBound)
                    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
                }(this.reference, this.state))
            }

            function W(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
            }

            function V(n, i) {
                Object.keys(i).forEach(function(e) {
                    var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && W(i[e]) && (t = "px"), n.style[e] = i[e] + t
                })
            }
            var z = t && /Firefox/i.test(navigator.userAgent);

            function q(e, t, n) {
                var i = N(e, function(e) {
                        return e.name === t
                    }),
                    o = !!i && e.some(function(e) {
                        return e.name === n && e.enabled && e.order < i.order
                    });
                if (!o) {
                    var r = "`" + t + "`",
                        s = "`" + n + "`";
                    console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
                }
                return o
            }
            var B = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                U = B.slice(3);

            function G(e, t) {
                var n = 1 < arguments.length && void 0 !== t && t,
                    i = U.indexOf(e),
                    o = U.slice(i + 1).concat(U.slice(0, i));
                return n ? o.reverse() : o
            }
            var Y = "flip",
                K = "clockwise",
                Q = "counterclockwise";

            function X(e, o, r, t) {
                var s = [0, 0],
                    a = -1 !== ["right", "left"].indexOf(t),
                    n = e.split(/(\+|\-)/).map(function(e) {
                        return e.trim()
                    }),
                    i = n.indexOf(N(n, function(e) {
                        return -1 !== e.search(/,|\s/)
                    }));
                n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                    c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
                return (c = c.map(function(e, t) {
                    var n = (1 === t ? !a : a) ? "height" : "width",
                        i = !1;
                    return e.reduce(function(e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
                    }, []).map(function(e) {
                        return function(e, t, n, i) {
                            var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                r = +o[1],
                                s = o[2];
                            if (!r) return e;
                            if (0 !== s.indexOf("%")) return "vh" !== s && "vw" !== s ? r : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
                            var a = void 0;
                            switch (s) {
                                case "%p":
                                    a = n;
                                    break;
                                case "%":
                                case "%r":
                                default:
                                    a = i
                            }
                            return E(a)[t] / 100 * r
                        }(e, n, o, r)
                    })
                })).forEach(function(n, i) {
                    n.forEach(function(e, t) {
                        W(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
                    })
                }), s
            }
            var Z = {
                    placement: "bottom",
                    positionFixed: !1,
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function() {},
                    onUpdate: function() {},
                    modifiers: {
                        shift: {
                            order: 100,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = t.split("-")[1];
                                if (i) {
                                    var o = e.offsets,
                                        r = o.reference,
                                        s = o.popper,
                                        a = -1 !== ["bottom", "top"].indexOf(n),
                                        l = a ? "left" : "top",
                                        c = a ? "width" : "height",
                                        u = {
                                            start: x({}, l, r[l]),
                                            end: x({}, l, r[l] + r[c] - s[c])
                                        };
                                    e.offsets.popper = S({}, s, u[i])
                                }
                                return e
                            }
                        },
                        offset: {
                            order: 200,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.offset,
                                    i = e.placement,
                                    o = e.offsets,
                                    r = o.popper,
                                    s = o.reference,
                                    a = i.split("-")[0],
                                    l = void 0;
                                return l = W(+n) ? [+n, 0] : X(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), e.popper = r, e
                            },
                            offset: 0
                        },
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function(e, i) {
                                var t = i.boundariesElement || b(e.instance.popper);
                                e.instance.reference === t && (t = b(t));
                                var n = H("transform"),
                                    o = e.instance.popper.style,
                                    r = o.top,
                                    s = o.left,
                                    a = o[n];
                                o.top = "", o.left = "", o[n] = "";
                                var l = A(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                                o.top = r, o.left = s, o[n] = a, i.boundaries = l;
                                var c = i.priority,
                                    u = e.offsets.popper,
                                    d = {
                                        primary: function(e) {
                                            var t = u[e];
                                            return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])), x({}, e, t)
                                        },
                                        secondary: function(e) {
                                            var t = "right" === e ? "left" : "top",
                                                n = u[t];
                                            return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), x({}, t, n)
                                        }
                                    };
                                return c.forEach(function(e) {
                                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                    u = S({}, u, d[t](e))
                                }), e.offsets.popper = u, e
                            },
                            priority: ["left", "right", "top", "bottom"],
                            padding: 5,
                            boundariesElement: "scrollParent"
                        },
                        keepTogether: {
                            order: 400,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.offsets,
                                    n = t.popper,
                                    i = t.reference,
                                    o = e.placement.split("-")[0],
                                    r = Math.floor,
                                    s = -1 !== ["top", "bottom"].indexOf(o),
                                    a = s ? "right" : "bottom",
                                    l = s ? "left" : "top",
                                    c = s ? "width" : "height";
                                return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e
                            }
                        },
                        arrow: {
                            order: 500,
                            enabled: !0,
                            fn: function(e, t) {
                                var n;
                                if (!q(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                var i = t.element;
                                if ("string" == typeof i) {
                                    if (!(i = e.instance.popper.querySelector(i))) return e
                                } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                var o = e.placement.split("-")[0],
                                    r = e.offsets,
                                    s = r.popper,
                                    a = r.reference,
                                    l = -1 !== ["left", "right"].indexOf(o),
                                    c = l ? "height" : "width",
                                    u = l ? "Top" : "Left",
                                    d = u.toLowerCase(),
                                    f = l ? "left" : "top",
                                    p = l ? "bottom" : "right",
                                    h = O(i)[c];
                                a[p] - h < s[d] && (e.offsets.popper[d] -= s[d] - (a[p] - h)), a[d] + h > s[p] && (e.offsets.popper[d] += a[d] + h - s[p]), e.offsets.popper = E(e.offsets.popper);
                                var m = a[d] + a[c] / 2 - h / 2,
                                    g = w(e.instance.popper),
                                    v = parseFloat(g["margin" + u], 10),
                                    y = parseFloat(g["border" + u + "Width"], 10),
                                    b = m - e.offsets.popper[d] - v - y;
                                return b = Math.max(Math.min(s[c] - h, b), 0), e.arrowElement = i, e.offsets.arrow = (x(n = {}, d, Math.round(b)), x(n, f, ""), n), e
                            },
                            element: "[x-arrow]"
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function(m, g) {
                                if (j(m.instance.modifiers, "inner")) return m;
                                if (m.flipped && m.placement === m.originalPlacement) return m;
                                var v = A(m.instance.popper, m.instance.reference, g.padding, g.boundariesElement, m.positionFixed),
                                    y = m.placement.split("-")[0],
                                    b = L(y),
                                    w = m.placement.split("-")[1] || "",
                                    T = [];
                                switch (g.behavior) {
                                    case Y:
                                        T = [y, b];
                                        break;
                                    case K:
                                        T = G(y);
                                        break;
                                    case Q:
                                        T = G(y, !0);
                                        break;
                                    default:
                                        T = g.behavior
                                }
                                return T.forEach(function(e, t) {
                                    if (y !== e || T.length === t + 1) return m;
                                    y = m.placement.split("-")[0], b = L(y);
                                    var n = m.offsets.popper,
                                        i = m.offsets.reference,
                                        o = Math.floor,
                                        r = "left" === y && o(n.right) > o(i.left) || "right" === y && o(n.left) < o(i.right) || "top" === y && o(n.bottom) > o(i.top) || "bottom" === y && o(n.top) < o(i.bottom),
                                        s = o(n.left) < o(v.left),
                                        a = o(n.right) > o(v.right),
                                        l = o(n.top) < o(v.top),
                                        c = o(n.bottom) > o(v.bottom),
                                        u = "left" === y && s || "right" === y && a || "top" === y && l || "bottom" === y && c,
                                        d = -1 !== ["top", "bottom"].indexOf(y),
                                        f = !!g.flipVariations && (d && "start" === w && s || d && "end" === w && a || !d && "start" === w && l || !d && "end" === w && c),
                                        p = !!g.flipVariationsByContent && (d && "start" === w && a || d && "end" === w && s || !d && "start" === w && c || !d && "end" === w && l),
                                        h = f || p;
                                    (r || u || h) && (m.flipped = !0, (r || u) && (y = T[t + 1]), h && (w = function(e) {
                                        return "end" === e ? "start" : "start" === e ? "end" : e
                                    }(w)), m.placement = y + (w ? "-" + w : ""), m.offsets.popper = S({}, m.offsets.popper, P(m.instance.popper, m.offsets.reference, m.placement)), m = M(m.instance.modifiers, m, "flip"))
                                }), m
                            },
                            behavior: "flip",
                            padding: 5,
                            boundariesElement: "viewport",
                            flipVariations: !1,
                            flipVariationsByContent: !1
                        },
                        inner: {
                            order: 700,
                            enabled: !1,
                            fn: function(e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = e.offsets,
                                    o = i.popper,
                                    r = i.reference,
                                    s = -1 !== ["left", "right"].indexOf(n),
                                    a = -1 === ["top", "left"].indexOf(n);
                                return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = L(t), e.offsets.popper = E(o), e
                            }
                        },
                        hide: {
                            order: 800,
                            enabled: !0,
                            fn: function(e) {
                                if (!q(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                var t = e.offsets.reference,
                                    n = N(e.instance.modifiers, function(e) {
                                        return "preventOverflow" === e.name
                                    }).boundaries;
                                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                    if (!0 === e.hide) return e;
                                    e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                                } else {
                                    if (!1 === e.hide) return e;
                                    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                                }
                                return e
                            }
                        },
                        computeStyle: {
                            order: 850,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.x,
                                    i = t.y,
                                    o = e.offsets.popper,
                                    r = N(e.instance.modifiers, function(e) {
                                        return "applyStyle" === e.name
                                    }).gpuAcceleration;
                                void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                var s = void 0 !== r ? r : t.gpuAcceleration,
                                    a = b(e.instance.popper),
                                    l = C(a),
                                    c = {
                                        position: o.position
                                    },
                                    u = function(e, t) {
                                        function n(e) {
                                            return e
                                        }
                                        var i = e.offsets,
                                            o = i.popper,
                                            r = i.reference,
                                            s = Math.round,
                                            a = Math.floor,
                                            l = s(r.width),
                                            c = s(o.width),
                                            u = -1 !== ["left", "right"].indexOf(e.placement),
                                            d = -1 !== e.placement.indexOf("-"),
                                            f = t ? u || d || l % 2 == c % 2 ? s : a : n,
                                            p = t ? s : n;
                                        return {
                                            left: f(l % 2 == 1 && c % 2 == 1 && !d && t ? o.left - 1 : o.left),
                                            top: p(o.top),
                                            bottom: p(o.bottom),
                                            right: f(o.right)
                                        }
                                    }(e, window.devicePixelRatio < 2 || !z),
                                    d = "bottom" === n ? "top" : "bottom",
                                    f = "right" === i ? "left" : "right",
                                    p = H("transform"),
                                    h = void 0,
                                    m = void 0;
                                if (m = "bottom" == d ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, h = "right" == f ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && p) c[p] = "translate3d(" + h + "px, " + m + "px, 0)", c[d] = 0, c[f] = 0, c.willChange = "transform";
                                else {
                                    var g = "bottom" == d ? -1 : 1,
                                        v = "right" == f ? -1 : 1;
                                    c[d] = m * g, c[f] = h * v, c.willChange = d + ", " + f
                                }
                                var y = {
                                    "x-placement": e.placement
                                };
                                return e.attributes = S({}, y, e.attributes), e.styles = S({}, c, e.styles), e.arrowStyles = S({}, e.offsets.arrow, e.arrowStyles), e
                            },
                            gpuAcceleration: !0,
                            x: "bottom",
                            y: "right"
                        },
                        applyStyle: {
                            order: 900,
                            enabled: !0,
                            fn: function(e) {
                                return V(e.instance.popper, e.styles),
                                    function(t, n) {
                                        Object.keys(n).forEach(function(e) {
                                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                                        })
                                    }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles), e
                            },
                            onLoad: function(e, t, n, i, o) {
                                var r = D(o, t, e, n.positionFixed),
                                    s = I(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                return t.setAttribute("x-placement", s), V(t, {
                                    position: n.positionFixed ? "fixed" : "absolute"
                                }), n
                            },
                            gpuAcceleration: void 0
                        }
                    }
                },
                J = (f(ee, [{
                    key: "update",
                    value: function() {
                        return function() {
                            if (!this.state.isDestroyed) {
                                var e = {
                                    instance: this,
                                    styles: {},
                                    arrowStyles: {},
                                    attributes: {},
                                    flipped: !1,
                                    offsets: {}
                                };
                                e.offsets.reference = D(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = I(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = P(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = M(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                            }
                        }.call(this)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        return function() {
                            return this.state.isDestroyed = !0, j(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[H("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                        }.call(this)
                    }
                }, {
                    key: "enableEventListeners",
                    value: function() {
                        return function() {
                            this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate))
                        }.call(this)
                    }
                }, {
                    key: "disableEventListeners",
                    value: function() {
                        return R.call(this)
                    }
                }]), ee);

            function ee(e, t) {
                var n = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, ee), this.scheduleUpdate = function() {
                    return requestAnimationFrame(n.update)
                }, this.update = r(this.update.bind(this)), this.options = S({}, ee.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(S({}, ee.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                    n.options.modifiers[e] = S({}, ee.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return S({
                        name: e
                    }, n.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(e) {
                    e.enabled && s(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                }), this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(), this.state.eventsEnabled = o
            }
            J.Utils = ("undefined" != typeof window ? window : e).PopperUtils, J.placements = B, J.Defaults = Z, te.default = J
        }.call(this, t(5))
}, function(oe, re, se) {
    var ae;
    ! function() {
        var c, a, l, r, n = {
                frameRate: 150,
                animationTime: 400,
                stepSize: 100,
                pulseAlgorithm: !0,
                pulseScale: 4,
                pulseNormalize: 1,
                accelerationDelta: 50,
                accelerationMax: 3,
                keyboardSupport: !0,
                arrowScroll: 50,
                fixedBackground: !0,
                excluded: ""
            },
            g = n,
            u = !1,
            d = !1,
            i = {
                x: 0,
                y: 0
            },
            f = !1,
            p = document.documentElement,
            s = [],
            h = /^Mac/.test(navigator.platform),
            m = {
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                spacebar: 32,
                pageup: 33,
                pagedown: 34,
                end: 35,
                home: 36
            },
            v = {
                37: 1,
                38: 1,
                39: 1,
                40: 1
            };

        function y() {
            if (!f && document.body) {
                f = !0;
                var e = document.body,
                    t = document.documentElement,
                    n = window.innerHeight,
                    i = e.scrollHeight;
                if (p = 0 <= document.compatMode.indexOf("CSS") ? t : e, c = e, g.keyboardSupport && M("keydown", x), top != self) d = !0;
                else if (Z && n < i && (e.offsetHeight <= n || t.offsetHeight <= n)) {
                    var o, r = document.createElement("div");
                    r.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + p.scrollHeight + "px", document.body.appendChild(r), l = function() {
                        o || (o = setTimeout(function() {
                            u || (r.style.height = "0", r.style.height = p.scrollHeight + "px", o = null)
                        }, 500))
                    }, setTimeout(l, 10), M("resize", l);
                    if ((a = new V(l)).observe(e, {
                            attributes: !0,
                            childList: !0,
                            characterData: !1
                        }), p.offsetHeight <= n) {
                        var s = document.createElement("div");
                        s.style.clear = "both", e.appendChild(s)
                    }
                }
                g.fixedBackground || u || (e.style.backgroundAttachment = "scroll", t.style.backgroundAttachment = "scroll")
            }
        }
        var b = [],
            w = !1,
            o = Date.now();

        function T(d, f, p) {
            if (function(e, t) {
                    e = 0 < e ? 1 : -1, t = 0 < t ? 1 : -1, i.x === e && i.y === t || (i.x = e, i.y = t, b = [], o = 0)
                }(f, p), 1 != g.accelerationMax) {
                var e = Date.now() - o;
                if (e < g.accelerationDelta) {
                    var t = (1 + 50 / e) / 2;
                    1 < t && (t = Math.min(t, g.accelerationMax), f *= t, p *= t)
                }
                o = Date.now()
            }
            if (b.push({
                    x: f,
                    y: p,
                    lastX: f < 0 ? .99 : -.99,
                    lastY: p < 0 ? .99 : -.99,
                    start: Date.now()
                }), !w) {
                var n = z(),
                    h = d === n || d === document.body;
                null == d.$scrollBehavior && function(e) {
                    var t = C(e);
                    if (null == A[t]) {
                        var n = getComputedStyle(e, "")["scroll-behavior"];
                        A[t] = "smooth" == n
                    }
                    return A[t]
                }(d) && (d.$scrollBehavior = d.style.scrollBehavior, d.style.scrollBehavior = "auto");
                var m = function(e) {
                    for (var t = Date.now(), n = 0, i = 0, o = 0; o < b.length; o++) {
                        var r = b[o],
                            s = t - r.start,
                            a = s >= g.animationTime,
                            l = a ? 1 : s / g.animationTime;
                        g.pulseAlgorithm && (l = B(l));
                        var c = r.x * l - r.lastX >> 0,
                            u = r.y * l - r.lastY >> 0;
                        n += c, i += u, r.lastX += c, r.lastY += u, a && (b.splice(o, 1), o--)
                    }
                    h ? window.scrollBy(n, i) : (n && (d.scrollLeft += n), i && (d.scrollTop += i)), f || p || (b = []), b.length ? W(m, d, 1e3 / g.frameRate + 1) : (w = !1, null != d.$scrollBehavior && (d.style.scrollBehavior = d.$scrollBehavior, d.$scrollBehavior = null))
                };
                W(m, d, 0), w = !0
            }
        }

        function e(e) {
            f || y();
            var t = e.target;
            if (e.defaultPrevented || e.ctrlKey) return !0;
            if (H(c, "embed") || H(t, "embed") && /\.pdf/i.test(t.src) || H(c, "object") || t.shadowRoot) return !0;
            var n = -e.wheelDeltaX || e.deltaX || 0,
                i = -e.wheelDeltaY || e.deltaY || 0;
            h && (e.wheelDeltaX && $(e.wheelDeltaX, 120) && (n = e.wheelDeltaX / Math.abs(e.wheelDeltaX) * -120), e.wheelDeltaY && $(e.wheelDeltaY, 120) && (i = e.wheelDeltaY / Math.abs(e.wheelDeltaY) * -120)), n || i || (i = -e.wheelDelta || 0), 1 === e.deltaMode && (n *= 40, i *= 40);
            var o = O(t);
            return o ? !! function(e) {
                if (!e) return;
                s.length || (s = [e, e, e]);
                e = Math.abs(e), s.push(e), s.shift(), clearTimeout(r), r = setTimeout(function() {
                    try {
                        localStorage.SS_deltaBuffer = s.join(",")
                    } catch (e) {}
                }, 1e3);
                var t = 120 < e && F(e);
                return !F(120) && !F(100) && !t
            }(i) || (1.2 < Math.abs(n) && (n *= g.stepSize / 120), 1.2 < Math.abs(i) && (i *= g.stepSize / 120), T(o, n, i), e.preventDefault(), void I()) : !d || !Y || (Object.defineProperty(e, "target", {
                value: window.frameElement
            }), parent.wheel(e))
        }

        function x(e) {
            var t = e.target,
                n = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== m.spacebar;
            document.body.contains(c) || (c = document.activeElement);
            var i = /^(button|submit|radio|checkbox|file|color|image)$/i;
            if (e.defaultPrevented || /^(textarea|select|embed|object)$/i.test(t.nodeName) || H(t, "input") && !i.test(t.type) || H(c, "video") || function(e) {
                    var t = e.target,
                        n = !1;
                    if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                        do {
                            if (n = t.classList && t.classList.contains("html5-video-controls")) break
                        } while (t = t.parentNode);
                    return n
                }(e) || t.isContentEditable || n) return !0;
            if ((H(t, "button") || H(t, "input") && i.test(t.type)) && e.keyCode === m.spacebar) return !0;
            if (H(t, "input") && "radio" == t.type && v[e.keyCode]) return !0;
            var o = 0,
                r = 0,
                s = O(c);
            if (!s) return !d || !Y || parent.keydown(e);
            var a = s.clientHeight;
            switch (s == document.body && (a = window.innerHeight), e.keyCode) {
                case m.up:
                    r = -g.arrowScroll;
                    break;
                case m.down:
                    r = g.arrowScroll;
                    break;
                case m.spacebar:
                    r = -(e.shiftKey ? 1 : -1) * a * .9;
                    break;
                case m.pageup:
                    r = .9 * -a;
                    break;
                case m.pagedown:
                    r = .9 * a;
                    break;
                case m.home:
                    s == document.body && document.scrollingElement && (s = document.scrollingElement), r = -s.scrollTop;
                    break;
                case m.end:
                    var l = s.scrollHeight - s.scrollTop - a;
                    r = 0 < l ? 10 + l : 0;
                    break;
                case m.left:
                    o = -g.arrowScroll;
                    break;
                case m.right:
                    o = g.arrowScroll;
                    break;
                default:
                    return !0
            }
            T(s, o, r), e.preventDefault(), I()
        }

        function t(e) {
            c = e.target
        }
        var S, E, C = (S = 0, function(e) {
                return e.uniqueID || (e.uniqueID = S++)
            }),
            _ = {},
            k = {},
            A = {};

        function I() {
            clearTimeout(E), E = setInterval(function() {
                _ = k = A = {}
            }, 1e3)
        }

        function D(e, t, n) {
            for (var i = n ? _ : k, o = e.length; o--;) i[C(e[o])] = t;
            return t
        }

        function O(e) {
            var t = [],
                n = document.body,
                i = p.scrollHeight;
            do {
                var o = (!1 ? _ : k)[C(e)];
                if (o) return D(t, o);
                if (t.push(e), i === e.scrollHeight) {
                    var r = P(p) && P(n) || N(p);
                    if (d && L(p) || !d && r) return D(t, z())
                } else if (L(e) && N(e)) return D(t, e)
            } while (e = e.parentElement)
        }

        function L(e) {
            return e.clientHeight + 10 < e.scrollHeight
        }

        function P(e) {
            return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
        }

        function N(e) {
            var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
            return "scroll" === t || "auto" === t
        }

        function M(e, t, n) {
            window.addEventListener(e, t, n || !1)
        }

        function j(e, t, n) {
            window.removeEventListener(e, t, n || !1)
        }

        function H(e, t) {
            return e && (e.nodeName || "").toLowerCase() === t.toLowerCase()
        }
        if (window.localStorage && localStorage.SS_deltaBuffer) try {
            s = localStorage.SS_deltaBuffer.split(",")
        } catch (e) {}

        function $(e, t) {
            return Math.floor(e / t) == e / t
        }

        function F(e) {
            return $(s[0], e) && $(s[1], e) && $(s[2], e)
        }
        var R, W = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e, t, n) {
                window.setTimeout(e, n || 1e3 / 60)
            },
            V = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            z = (R = document.scrollingElement, function() {
                if (!R) {
                    var e = document.createElement("div");
                    e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
                    var t = document.body.scrollTop;
                    document.documentElement.scrollTop, window.scrollBy(0, 3), R = document.body.scrollTop != t ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(e)
                }
                return R
            });

        function q(e) {
            var t;
            return ((e *= g.pulseScale) < 1 ? e - (1 - Math.exp(-e)) : (e -= 1, (t = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - t))) * g.pulseNormalize
        }

        function B(e) {
            return 1 <= e ? 1 : e <= 0 ? 0 : (1 == g.pulseNormalize && (g.pulseNormalize /= q(1)), q(e))
        }
        var U = window.navigator.userAgent,
            G = /Edge/.test(U),
            Y = /chrome/i.test(U) && !G,
            K = /safari/i.test(U) && !G,
            Q = /mobile/i.test(U),
            X = /Windows NT 6.1/i.test(U) && /rv:11/i.test(U),
            Z = K && (/Version\/8/i.test(U) || /Version\/9/i.test(U)),
            J = (Y || K || X) && !Q,
            ee = !1;
        try {
            window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                get: function() {
                    ee = !0
                }
            }))
        } catch (e) {}
        var te = !!ee && {
                passive: !1
            },
            ne = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

        function ie(e) {
            for (var t in e) n.hasOwnProperty(t) && (g[t] = e[t])
        }
        ne && J && (M(ne, e, te), M("mousedown", t), M("load", y)), ie.destroy = function() {
            a && a.disconnect(), j(ne, e), j("mousedown", t), j("keydown", x), j("resize", l), j("load", y)
        }, window.SmoothScrollOptions && ie(window.SmoothScrollOptions), void 0 === (ae = function() {
            return ie
        }.call(re, se, re, oe)) || (oe.exports = ae)
    }()
}, function(e, t) {
    ! function() {
        "use strict";
        if ("undefined" != typeof window) {
            var e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                i = !!e && 16 <= parseInt(e[1], 10);
            if ("objectFit" in document.documentElement.style == 0 || i) {
                var c = function(e, t, n) {
                        var i, o, r, s, a;
                        if ((n = n.split(" ")).length < 2 && (n[1] = n[0]), "x" === e) i = n[0], o = n[1], r = "left", s = "right", a = t.clientWidth;
                        else {
                            if ("y" !== e) return;
                            i = n[1], o = n[0], r = "top", s = "bottom", a = t.clientHeight
                        }
                        if (i !== r && o !== r) {
                            if (i !== s && o !== s) return "center" === i || "50%" === i ? (t.style[r] = "50%", void(t.style["margin-" + r] = a / -2 + "px")) : void(0 <= i.indexOf("%") ? (i = parseInt(i)) < 50 ? (t.style[r] = i + "%", t.style["margin-" + r] = a * (i / -100) + "px") : (i = 100 - i, t.style[s] = i + "%", t.style["margin-" + s] = a * (i / -100) + "px") : t.style[r] = i);
                            t.style[s] = "0"
                        } else t.style[r] = "0"
                    },
                    o = function(e) {
                        var t = e.dataset ? e.dataset.objectFit : e.getAttribute("data-object-fit"),
                            n = e.dataset ? e.dataset.objectPosition : e.getAttribute("data-object-position");
                        t = t || "cover", n = n || "50% 50%";
                        var i, o, r, s, a, l = e.parentNode;
                        return i = l, o = window.getComputedStyle(i, null), r = o.getPropertyValue("position"), s = o.getPropertyValue("overflow"), a = o.getPropertyValue("display"), r && "static" !== r || (i.style.position = "relative"), "hidden" !== s && (i.style.overflow = "hidden"), a && "inline" !== a || (i.style.display = "block"), 0 === i.clientHeight && (i.style.height = "100%"), -1 === i.className.indexOf("object-fit-polyfill") && (i.className = i.className + " object-fit-polyfill"),
                            function(e) {
                                var t = window.getComputedStyle(e, null),
                                    n = {
                                        "max-width": "none",
                                        "max-height": "none",
                                        "min-width": "0px",
                                        "min-height": "0px",
                                        top: "auto",
                                        right: "auto",
                                        bottom: "auto",
                                        left: "auto",
                                        "margin-top": "0px",
                                        "margin-right": "0px",
                                        "margin-bottom": "0px",
                                        "margin-left": "0px"
                                    };
                                for (var i in n) t.getPropertyValue(i) !== n[i] && (e.style[i] = n[i])
                            }(e), e.style.position = "absolute", e.style.width = "auto", e.style.height = "auto", "scale-down" === t && (t = e.clientWidth < l.clientWidth && e.clientHeight < l.clientHeight ? "none" : "contain"), "none" === t ? (c("x", e, n), void c("y", e, n)) : "fill" === t ? (e.style.width = "100%", e.style.height = "100%", c("x", e, n), void c("y", e, n)) : (e.style.height = "100%", void("cover" === t && e.clientWidth > l.clientWidth || "contain" === t && e.clientWidth < l.clientWidth ? (e.style.top = "0", e.style.marginTop = "0", c("x", e, n)) : (e.style.width = "100%", e.style.height = "auto", e.style.left = "0", e.style.marginLeft = "0", c("y", e, n))))
                    },
                    t = function(e) {
                        if (void 0 === e || e instanceof Event) e = document.querySelectorAll("[data-object-fit]");
                        else if (e && e.nodeName) e = [e];
                        else {
                            if ("object" != typeof e || !e.length || !e[0].nodeName) return !1;
                            e = e
                        }
                        for (var t = 0; t < e.length; t++)
                            if (e[t].nodeName) {
                                var n = e[t].nodeName.toLowerCase();
                                "img" !== n || i ? "video" === n ? 0 < e[t].readyState ? o(e[t]) : e[t].addEventListener("loadedmetadata", function() {
                                    o(this)
                                }) : o(e[t]) : e[t].complete ? o(e[t]) : e[t].addEventListener("load", function() {
                                    o(this)
                                })
                            }
                        return !0
                    };
                document.addEventListener("DOMContentLoaded", t), window.addEventListener("resize", t), window.objectFitPolyfill = t
            } else window.objectFitPolyfill = function() {
                return !1
            }
        }
    }()
}, function(e, t) {
    var n;
    n = jQuery, page.registerVendor("Jquery"), page.initJquery = function() {
        var e = document.head.querySelector('meta[name="csrf-token"]');
        e && n.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": e.content
            }
        })
    }, jQuery.fn.hasDataAttr = function(e) {
        return $(this)[0].hasAttribute("data-" + e)
    }, jQuery.fn.dataAttr = function(e, t) {
        return null == $(this)[0] ? t : $(this)[0].getAttribute("data-" + e) || t
    }, jQuery.expr[":"].search = function(e, t, n) {
        return 0 <= $(e).html().toUpperCase().indexOf(n[3].toUpperCase())
    }, jQuery.fn.outerHTML = function() {
        var e = "";
        return this.each(function() {
            e += $(this).prop("outerHTML")
        }), e
    }, jQuery.fn.fullHTML = function() {
        var e = "";
        return $(this).each(function() {
            e += $(this).outerHTML()
        }), e
    }, jQuery.fn.scrollToEnd = function() {
        return $(this).scrollTop($(this).prop("scrollHeight")), this
    }
}, function(e, t) {
    var n;
    n = jQuery, page.registerVendor("Bootstrap"), page.initBootstrap = function() {
        n('[data-toggle="tooltip"]').tooltip(), n('[data-toggle="popover"]').popover(), n(document).on("click", ".custom-checkbox", function() {
            var e = n(this).children(".custom-control-input").not(":disabled");
            e.prop("checked", !e.prop("checked")).trigger("change")
        }), n(document).on("click", ".custom-radio", function() {
            n(this).children(".custom-control-input").not(":disabled").prop("checked", !0).trigger("change")
        })
    }
}, function(e, t, n) {
    window.AOS = n(13), jQuery, page.registerVendor("AOS"), page.initAOS = function() {
        var e = {
            offset: 220,
            duration: 1500
        };
        page.defaults.disableAOSonMobile && (e.disable = "mobile"), AOS.init(e)
    }
}, function(e, t, n) {
    e.exports = function(n) {
        function i(e) {
            if (o[e]) return o[e].exports;
            var t = o[e] = {
                exports: {},
                id: e,
                loaded: !1
            };
            return n[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        var o = {};
        return i.m = n, i.c = o, i.p = "dist/", i(0)
    }([function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            r = n(1),
            s = (i(r), n(6)),
            a = i(s),
            l = n(7),
            c = i(l),
            u = n(8),
            d = i(u),
            f = n(9),
            p = i(f),
            h = n(10),
            m = i(h),
            g = n(11),
            v = i(g),
            y = n(14),
            b = i(y),
            w = [],
            T = !1,
            x = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            },
            S = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                if (e && (T = !0), T) return w = (0, v.default)(w, x), (0, m.default)(w, x.once), w
            },
            E = function() {
                w = (0, b.default)(), S()
            };
        e.exports = {
            init: function(e) {
                x = o(x, e), w = (0, b.default)();
                var t, n = document.all && !window.atob;
                return !0 === (t = x.disable) || "mobile" === t && p.default.mobile() || "phone" === t && p.default.phone() || "tablet" === t && p.default.tablet() || "function" == typeof t && !0 === t() || n ? void w.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                }) : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState) ? S(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
                    S(!0)
                }) : document.addEventListener(x.startEvent, function() {
                    S(!0)
                }), window.addEventListener("resize", (0, c.default)(S, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, c.default)(S, x.debounceDelay, !0)), window.addEventListener("scroll", (0, a.default)(function() {
                    (0, m.default)(w, x.once)
                }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", E), w)
            },
            refresh: S,
            refreshHard: E
        }
    }, function(e, t) {}, , , , , function(g, e) {
        (function(e) {
            "use strict";

            function r(i, o, e) {
                function n(e) {
                    var t = l,
                        n = c;
                    return l = c = void 0, h = e, d = i.apply(n, t)
                }

                function r(e) {
                    var t = e - p,
                        n = e - h;
                    return void 0 === p || o <= t || t < 0 || g && u <= n
                }

                function s() {
                    var e = S();
                    return r(e) ? t(e) : void(f = setTimeout(s, function(e) {
                        var t = e - h,
                            n = o - (e - p);
                        return g ? x(n, u - t) : n
                    }(e)))
                }

                function t(e) {
                    return f = void 0, v && l ? n(e) : (l = c = void 0, d)
                }

                function a() {
                    var e = S(),
                        t = r(e);
                    if (l = arguments, c = this, p = e, t) {
                        if (void 0 === f) return function(e) {
                            return h = e, f = setTimeout(s, o), m ? n(e) : d
                        }(p);
                        if (g) return f = setTimeout(s, o), n(p)
                    }
                    return void 0 === f && (f = setTimeout(s, o)), d
                }
                var l, c, u, d, f, p, h = 0,
                    m = !1,
                    g = !1,
                    v = !0;
                if ("function" != typeof i) throw new TypeError(w);
                return o = b(o) || 0, y(e) && (m = !!e.leading, u = (g = "maxWait" in e) ? T(b(e.maxWait) || 0, o) : u, v = "trailing" in e ? !!e.trailing : v), a.cancel = function() {
                    void 0 !== f && clearTimeout(f), l = p = c = f = void(h = 0)
                }, a.flush = function() {
                    return void 0 === f ? d : t(S())
                }, a
            }

            function y(e) {
                var t = void 0 === e ? "undefined" : n(e);
                return !!e && ("object" == t || "function" == t)
            }

            function i(e) {
                return "symbol" == (void 0 === e ? "undefined" : n(e)) || function(e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : n(e))
                }(e) && m.call(e) == t
            }

            function b(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return o;
                if (y(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = y(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(s, "");
                var n = l.test(e);
                return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : a.test(e) ? o : +e
            }
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                w = "Expected a function",
                o = NaN,
                t = "[object Symbol]",
                s = /^\s+|\s+$/g,
                a = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                u = parseInt,
                d = "object" == (void 0 === e ? "undefined" : n(e)) && e && e.Object === Object && e,
                f = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
                p = d || f || Function("return this")(),
                h = Object.prototype,
                m = h.toString,
                T = Math.max,
                x = Math.min,
                S = function() {
                    return p.Date.now()
                };
            g.exports = function(e, t, n) {
                var i = !0,
                    o = !0;
                if ("function" != typeof e) throw new TypeError(w);
                return y(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), r(e, t, {
                    leading: i,
                    maxWait: t,
                    trailing: o
                })
            }
        }).call(e, function() {
            return this
        }())
    }, function(m, e) {
        (function(e) {
            "use strict";

            function w(e) {
                var t = void 0 === e ? "undefined" : n(e);
                return !!e && ("object" == t || "function" == t)
            }

            function i(e) {
                return "symbol" == (void 0 === e ? "undefined" : n(e)) || function(e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : n(e))
                }(e) && h.call(e) == t
            }

            function T(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return o;
                if (w(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = w(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(r, "");
                var n = a.test(e);
                return n || l.test(e) ? c(e.slice(2), n ? 2 : 8) : s.test(e) ? o : +e
            }
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = NaN,
                t = "[object Symbol]",
                r = /^\s+|\s+$/g,
                s = /^[-+]0x[0-9a-f]+$/i,
                a = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                c = parseInt,
                u = "object" == (void 0 === e ? "undefined" : n(e)) && e && e.Object === Object && e,
                d = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
                f = u || d || Function("return this")(),
                p = Object.prototype,
                h = p.toString,
                x = Math.max,
                S = Math.min,
                E = function() {
                    return f.Date.now()
                };
            m.exports = function(i, o, e) {
                function r(e) {
                    var t = u,
                        n = d;
                    return u = d = void 0, g = e, p = i.apply(n, t)
                }

                function s(e) {
                    var t = e - m;
                    return void 0 === m || o <= t || t < 0 || y && f <= e - g
                }

                function a() {
                    var e, t, n, i = E();
                    return s(i) ? l(i) : void(h = setTimeout(a, (t = (e = i) - g, n = o - (e - m), y ? S(n, f - t) : n)))
                }

                function l(e) {
                    return h = void 0, b && u ? r(e) : (u = d = void 0, p)
                }

                function t() {
                    void 0 !== h && clearTimeout(h), u = m = d = h = void(g = 0)
                }

                function n() {
                    return void 0 === h ? p : l(E())
                }

                function c() {
                    var e, t = E(),
                        n = s(t);
                    if (u = arguments, d = this, m = t, n) {
                        if (void 0 === h) return g = e = m, h = setTimeout(a, o), v ? r(e) : p;
                        if (y) return h = setTimeout(a, o), r(m)
                    }
                    return void 0 === h && (h = setTimeout(a, o)), p
                }
                var u, d, f, p, h, m, g = 0,
                    v = !1,
                    y = !1,
                    b = !0;
                if ("function" != typeof i) throw new TypeError("Expected a function");
                return o = T(o) || 0, w(e) && (v = !!e.leading, f = (y = "maxWait" in e) ? x(T(e.maxWait) || 0, o) : f, b = "trailing" in e ? !!e.trailing : b), c.cancel = t, c.flush = n, c
            }
        }).call(e, function() {
            return this
        }())
    }, function(e, t) {
        "use strict";

        function o() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        }

        function r(e) {
            e && e.forEach(function(e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                    n = Array.prototype.slice.call(e.removedNodes),
                    i = t.concat(n);
                if (function e(t) {
                        var n = void 0,
                            i = void 0;
                        for (n = 0; n < t.length; n += 1) {
                            if ((i = t[n]).dataset && i.dataset.aos) return !0;
                            if (i.children && e(i.children)) return !0
                        }
                        return !1
                    }(i)) return s()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {};
        t.default = {
            isSupported: function() {
                return !!o()
            },
            ready: function(e, t) {
                var n = window.document,
                    i = new(o())(r);
                s = t, i.observe(n.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }
        }
    }, function(e, t) {
        "use strict";

        function n() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function i(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(e, t, n) {
                    return t && i(e.prototype, t), n && i(e, n), e
                }
            }(),
            o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            l = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return i(e, [{
                    key: "phone",
                    value: function() {
                        var e = n();
                        return !(!o.test(e) && !r.test(e.substr(0, 4)))
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var e = n();
                        return !(!s.test(e) && !a.test(e.substr(0, 4)))
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }]), e
            }();
        t.default = new l
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e, s) {
            var a = window.pageYOffset,
                l = window.innerHeight;
            e.forEach(function(e, t) {
                var n, i, o, r;
                i = l + a, o = s, r = (n = e).node.getAttribute("data-aos-once"), i > n.position ? n.node.classList.add("aos-animate") : void 0 === r || "false" !== r && (o || "true" === r) || n.node.classList.remove("aos-animate")
            })
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(12),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i);
        t.default = function(e, n) {
            return e.forEach(function(e, t) {
                e.node.classList.add("aos-init"), e.position = (0, o.default)(e.node, n.offset)
            }), e
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(13),
            s = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i);
        t.default = function(e, t) {
            var n = 0,
                i = 0,
                o = window.innerHeight,
                r = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                };
            switch (r.offset && !isNaN(r.offset) && (i = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (e = document.querySelectorAll(r.anchor)[0]), n = (0, s.default)(e).top, r.anchorPlacement) {
                case "top-bottom":
                    break;
                case "center-bottom":
                    n += e.offsetHeight / 2;
                    break;
                case "bottom-bottom":
                    n += e.offsetHeight;
                    break;
                case "top-center":
                    n += o / 2;
                    break;
                case "bottom-center":
                    n += o / 2 + e.offsetHeight;
                    break;
                case "center-center":
                    n += o / 2 + e.offsetHeight / 2;
                    break;
                case "top-top":
                    n += o;
                    break;
                case "bottom-top":
                    n += e.offsetHeight + o;
                    break;
                case "center-top":
                    n += e.offsetHeight / 2 + o
            }
            return r.anchorPlacement || r.offset || isNaN(t) || (i = t), n + i
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {
                top: n,
                left: t
            }
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
                return {
                    node: e
                }
            })
        }
    }])
}, function(e, t) {
    var a, l, c;

    function n(i, e) {
        var t = l(i),
            r = i.getContext("2d"),
            n = {
                star: {
                    color: "rgba(255, 255, 255, .5)",
                    width: 1
                },
                line: {
                    color: "rgba(255, 255, 255, .5)",
                    width: .2
                },
                position: {
                    x: 0,
                    y: 0
                },
                width: c.innerWidth,
                height: c.innerHeight,
                velocity: .1,
                length: 100,
                distance: 120,
                radius: 150,
                stars: []
            },
            s = l.extend(!0, {}, n, e);

        function o() {
            this.x = Math.random() * i.width, this.y = Math.random() * i.height, this.vx = s.velocity - .5 * Math.random(), this.vy = s.velocity - .5 * Math.random(), this.radius = Math.random() * s.star.width
        }
        o.prototype = {
            create: function() {
                r.beginPath(), r.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), r.fill()
            },
            animate: function() {
                var e;
                for (e = 0; e < s.length; e++) {
                    var t = s.stars[e];
                    t.y < 0 || t.y > i.height ? (t.vx = t.vx, t.vy = -t.vy) : (t.x < 0 || t.x > i.width) && (t.vx = -t.vx, t.vy = t.vy), t.x += t.vx, t.y += t.vy
                }
            },
            line: function() {
                var e, t, n, i, o = s.length;
                for (n = 0; n < o; n++)
                    for (i = 0; i < o; i++) e = s.stars[n], t = s.stars[i], e.x - t.x < s.distance && e.y - t.y < s.distance && e.x - t.x > -s.distance && e.y - t.y > -s.distance && e.x - s.position.x < s.radius && e.y - s.position.y < s.radius && e.x - s.position.x > -s.radius && e.y - s.position.y > -s.radius && (r.beginPath(), r.moveTo(e.x, e.y), r.lineTo(t.x, t.y), r.stroke(), r.closePath())
            }
        }, this.createStars = function() {
            var e, t, n = s.length;
            for (r.clearRect(0, 0, i.width, i.height), t = 0; t < n; t++) s.stars.push(new o), (e = s.stars[t]).create();
            e.line(), e.animate()
        }, this.setCanvas = function() {
            i.width = s.width, i.height = s.height
        }, this.setContext = function() {
            r.fillStyle = s.star.color, r.strokeStyle = s.line.color, r.lineWidth = s.line.width
        }, this.setInitialPosition = function() {
            e && e.hasOwnProperty("position") || (s.position = {
                x: .5 * i.width,
                y: .5 * i.height
            })
        }, this.loop = function(e) {
            e(), c.requestAnimationFrame(function() {
                this.loop(e)
            }.bind(this))
        }, this.bind = function() {
            t.on("mousemove", function(e) {
                s.position.x = e.pageX - t.offset().left, s.position.y = e.pageY - t.offset().top
            })
        }, this.init = function() {
            this.setCanvas(), this.setContext(), this.setInitialPosition(), this.loop(this.createStars), this.bind()
        }
    }
    a = jQuery, page.registerVendor("Constellation"), page.initConstellation = function() {
            var s = 120;
            a(window).width() < 700 && (s = 25), a(".constellation").each(function() {
                var e = a(this),
                    t = e.dataAttr("color", "rgba(255, 255, 255, .8)"),
                    n = e.dataAttr("length", 150),
                    i = e.dataAttr("radius", 150),
                    o = e.dataAttr("starWidth", 1),
                    r = e.dataAttr("lineWidth", .2);
                "dark" == t && (t = "rgba(0, 0, 0, .6)"), e.constellation({
                    distance: s,
                    length: n,
                    radius: i,
                    star: {
                        color: t,
                        width: o
                    },
                    line: {
                        color: t,
                        width: r
                    }
                })
            })
        },
        /*!
         * Mantis.js / jQuery / Zepto.js plugin for Constellation
         * @version 1.2.2
         * @author Acauã Montiel <contato@acauamontiel.com.br>
         * @license http://acaua.mit-license.org/
         */
        l = $, c = window, l.fn.constellation = function(e) {
            return this.each(function() {
                new n(this, e).init()
            })
        }
}, function(e, t, n) {
    var i;
    n(16), i = jQuery, page.registerVendor("Countdown"), page.initCountdown = function() {
        i("[data-countdown]").each(function() {
            var e = i(this),
                t = "",
                n = {
                    textDay: "Day",
                    textHour: "Hour",
                    textMinute: "Minute",
                    textSecond: "Second"
                };
            n = i.extend(n, page.getDataOptions(e)), t += '<div class="row gap-x-4">', t += '<div class="col"><h5>%D</h5><small>' + n.textDay + "%!D</small></div>", t += '<div class="col"><h5>%H</h5><small>' + n.textHour + "%!H</small></div>", t += '<div class="col"><h5>%M</h5><small>' + n.textMinute + "%!M</small></div>", t += '<div class="col"><h5>%S</h5><small>' + n.textSecond + "%!S</small></div>", t += "</div>", e.hasDataAttr("format") && (t = e.data("format")), e.countdown(e.data("countdown"), function(e) {
                i(this).html(e.strftime(t))
            })
        })
    }
}, function(e, t, n) {
    var i, o, r;
    /*!
     * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
     * Copyright (c) 2016 Edson Hilios
     * 
     * Permission is hereby granted, free of charge, to any person obtaining a copy of
     * this software and associated documentation files (the "Software"), to deal in
     * the Software without restriction, including without limitation the rights to
     * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
     * the Software, and to permit persons to whom the Software is furnished to do so,
     * subject to the following conditions:
     * 
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     * 
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    /*!
     * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
     * Copyright (c) 2016 Edson Hilios
     * 
     * Permission is hereby granted, free of charge, to any person obtaining a copy of
     * this software and associated documentation files (the "Software"), to deal in
     * the Software without restriction, including without limitation the rights to
     * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
     * the Software, and to permit persons to whom the Software is furnished to do so,
     * subject to the following conditions:
     * 
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     * 
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
     * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
     * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
     * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
     * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    ! function() {
        "use strict";
        o = [n(3)], void 0 === (r = "function" == typeof(i = function(o) {
            "use strict";
            var r = [],
                t = [],
                i = {
                    precision: 100,
                    elapse: false,
                    defer: false
                };

            function n(e) {
                if (e instanceof Date) {
                    return e
                }
                if (String(e).match(t)) {
                    if (String(e).match(/^[0-9]*$/)) {
                        e = Number(e)
                    }
                    if (String(e).match(/\-/)) {
                        e = String(e).replace(/\-/g, "/")
                    }
                    return new Date(e)
                } else {
                    throw new Error("Couldn't cast `" + e + "` to a date object.")
                }
            }
            t.push(/^[0-9]*$/.source), t.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), t.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), t = new RegExp(t.join("|"));
            var u = {
                Y: "years",
                m: "months",
                n: "daysToMonth",
                d: "daysToWeek",
                w: "weeks",
                W: "weeksToMonth",
                H: "hours",
                M: "minutes",
                S: "seconds",
                D: "totalDays",
                I: "totalHours",
                N: "totalMinutes",
                T: "totalSeconds"
            };

            function d(e) {
                var t = e.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
                return new RegExp(t)
            }

            function s(c) {
                return function(e) {
                    var t = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                    if (t) {
                        for (var n = 0, i = t.length; n < i; ++n) {
                            var o = t[n].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                                r = d(o[0]),
                                s = o[1] || "",
                                a = o[3] || "",
                                l = null;
                            o = o[2];
                            if (u.hasOwnProperty(o)) {
                                l = u[o];
                                l = Number(c[l])
                            }
                            if (l !== null) {
                                if (s === "!") {
                                    l = f(a, l)
                                }
                                if (s === "") {
                                    if (l < 10) {
                                        l = "0" + l.toString()
                                    }
                                }
                                e = e.replace(r, l.toString())
                            }
                        }
                    }
                    e = e.replace(/%%/, "%");
                    return e
                }
            }

            function f(e, t) {
                var n = "s",
                    i = "";
                if (e) {
                    e = e.replace(/(:|;|\s)/gi, "").split(/\,/);
                    if (e.length === 1) {
                        n = e[0]
                    } else {
                        i = e[0];
                        n = e[1]
                    }
                }
                if (Math.abs(t) > 1) {
                    return n
                } else {
                    return i
                }
            }
            var a = function(e, t, n) {
                this.el = e;
                this.$el = o(e);
                this.interval = null;
                this.offset = {};
                this.options = o.extend({}, i);
                this.instanceNumber = r.length;
                r.push(this);
                this.$el.data("countdown-instance", this.instanceNumber);
                if (n) {
                    if (typeof n === "function") {
                        this.$el.on("update.countdown", n);
                        this.$el.on("stoped.countdown", n);
                        this.$el.on("finish.countdown", n)
                    } else {
                        this.options = o.extend({}, i, n)
                    }
                }
                this.setFinalDate(t);
                if (this.options.defer === false) {
                    this.start()
                }
            };
            o.extend(a.prototype, {
                start: function() {
                    if (this.interval !== null) {
                        clearInterval(this.interval)
                    }
                    var e = this;
                    this.update();
                    this.interval = setInterval(function() {
                        e.update.call(e)
                    }, this.options.precision)
                },
                stop: function() {
                    clearInterval(this.interval);
                    this.interval = null;
                    this.dispatchEvent("stoped")
                },
                toggle: function() {
                    if (this.interval) {
                        this.stop()
                    } else {
                        this.start()
                    }
                },
                pause: function() {
                    this.stop()
                },
                resume: function() {
                    this.start()
                },
                remove: function() {
                    this.stop.call(this);
                    r[this.instanceNumber] = null;
                    delete this.$el.data().countdownInstance
                },
                setFinalDate: function(e) {
                    this.finalDate = n(e)
                },
                update: function() {
                    if (this.$el.closest("html").length === 0) {
                        this.remove();
                        return
                    }
                    var e = o._data(this.el, "events") !== undefined,
                        t = new Date,
                        n;
                    n = this.finalDate.getTime() - t.getTime();
                    n = Math.ceil(n / 1e3);
                    n = !this.options.elapse && n < 0 ? 0 : Math.abs(n);
                    if (this.totalSecsLeft === n || !e) {
                        return
                    } else {
                        this.totalSecsLeft = n
                    }
                    this.elapsed = t >= this.finalDate;
                    this.offset = {
                        seconds: this.totalSecsLeft % 60,
                        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                        weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                        weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                        months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                        years: Math.abs(this.finalDate.getFullYear() - t.getFullYear()),
                        totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                        totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                        totalMinutes: Math.floor(this.totalSecsLeft / 60),
                        totalSeconds: this.totalSecsLeft
                    };
                    if (!this.options.elapse && this.totalSecsLeft === 0) {
                        this.stop();
                        this.dispatchEvent("finish")
                    } else {
                        this.dispatchEvent("update")
                    }
                },
                dispatchEvent: function(e) {
                    var t = o.Event(e + ".countdown");
                    t.finalDate = this.finalDate;
                    t.elapsed = this.elapsed;
                    t.offset = o.extend({}, this.offset);
                    t.strftime = s(this.offset);
                    this.$el.trigger(t)
                }
            }), o.fn.countdown = function() {
                var i = Array.prototype.slice.call(arguments, 0);
                return this.each(function() {
                    var e = o(this).data("countdown-instance");
                    if (e !== undefined) {
                        var t = r[e],
                            n = i[0];
                        if (a.prototype.hasOwnProperty(n)) {
                            t[n].apply(t, i.slice(1))
                        } else if (String(n).match(/^[$A-Z_][0-9A-Z_$]*$/i) === null) {
                            t.setFinalDate.call(t, n);
                            t.start()
                        } else {
                            o.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, n))
                        }
                    } else {
                        new a(this, i[0], i[1])
                    }
                })
            }
        }) ? i.apply(t, o) : i) || (e.exports = r)
    }()
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var i, o, r = n(19);
    n(18), i = jQuery, page.registerVendor("Countup"), page.initCountup = function() {
        i('[data-provide~="countup"]:not(.counted)').each(function() {
            var t = i(this),
                e = {};
            e = i.extend(e, page.getDataOptions(t));
            var n = {
                startVal: t.dataAttr("from", 0),
                endVal: t.dataAttr("to", 0),
                options: e
            };
            n = i.extend(n, page.getDataOptions(t)), t.waypoint({
                handler: function(e) {
                    t.countup(n).addClass("counted")
                },
                offset: "100%"
            })
        })
    }, (o = jQuery).fn.countup = function(e) {
        if ("function" == typeof r.CountUp) {
            var n = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 4
            };
            if ("number" == typeof e) n.endVal = e;
            else {
                if ("object" != typeof e) return void console.error("countUp-jquery requires its argument to be either an object or number");
                o.extend(n, e)
            }
            return this.each(function(e, t) {
                new r.CountUp(t, n.endVal, n.options).start()
            }), this
        }
        console.error("countUp.js is a required dependency of countUp-jquery.js.")
    }
}, function(e, t) {
    /*!
    Waypoints - 4.0.1
    Copyright © 2011-2016 Caleb Troughton
    Licensed under the MIT license.
    https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
    */
    ! function() {
        "use strict";
        var t = 0,
            r = {};

        function n(e) {
            if (!e) throw new Error("No options passed to Waypoint constructor");
            if (!e.element) throw new Error("No element option passed to Waypoint constructor");
            if (!e.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t, this.options = n.Adapter.extend({}, n.defaults, e), this.element = this.options.element, this.adapter = new n.Adapter(this.element), this.callback = e.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = n.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = n.Context.findOrCreateByElement(this.options.context), n.offsetAliases[this.options.offset] && (this.options.offset = n.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), r[this.key] = this, t += 1
        }
        n.prototype.queueTrigger = function(e) {
            this.group.queueTrigger(this, e)
        }, n.prototype.trigger = function(e) {
            this.enabled && this.callback && this.callback.apply(this, e)
        }, n.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete r[this.key]
        }, n.prototype.disable = function() {
            return this.enabled = !1, this
        }, n.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, n.prototype.next = function() {
            return this.group.next(this)
        }, n.prototype.previous = function() {
            return this.group.previous(this)
        }, n.invokeAll = function(e) {
            var t = [];
            for (var n in r) t.push(r[n]);
            for (var i = 0, o = t.length; i < o; i++) t[i][e]()
        }, n.destroyAll = function() {
            n.invokeAll("destroy")
        }, n.disableAll = function() {
            n.invokeAll("disable")
        }, n.enableAll = function() {
            for (var e in n.Context.refreshAll(), r) r[e].enabled = !0;
            return this
        }, n.refreshAll = function() {
            n.Context.refreshAll()
        }, n.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, n.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, n.adapters = [], n.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, n.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = n
    }(),
    function() {
        "use strict";

        function t(e) {
            window.setTimeout(e, 1e3 / 60)
        }
        var n = 0,
            i = {},
            g = window.Waypoint,
            e = window.onload;

        function o(e) {
            this.element = e, this.Adapter = g.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, e.waypointContextKey = this.key, i[e.waypointContextKey] = this, n += 1, g.windowContext || (g.windowContext = !0, g.windowContext = new o(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        o.prototype.add = function(e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][e.key] = e, this.refresh()
        }, o.prototype.checkEmpty = function() {
            var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                t = this.Adapter.isEmptyObject(this.waypoints.vertical),
                n = this.element == this.element.window;
            e && t && !n && (this.adapter.off(".waypoints"), delete i[this.key])
        }, o.prototype.createThrottledResizeHandler = function() {
            var e = this;

            function t() {
                e.handleResize(), e.didResize = !1
            }
            this.adapter.on("resize.waypoints", function() {
                e.didResize || (e.didResize = !0, g.requestAnimationFrame(t))
            })
        }, o.prototype.createThrottledScrollHandler = function() {
            var e = this;

            function t() {
                e.handleScroll(), e.didScroll = !1
            }
            this.adapter.on("scroll.waypoints", function() {
                e.didScroll && !g.isTouch || (e.didScroll = !0, g.requestAnimationFrame(t))
            })
        }, o.prototype.handleResize = function() {
            g.Context.refreshAll()
        }, o.prototype.handleScroll = function() {
            var e = {},
                t = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var n in t) {
                var i = t[n],
                    o = i.newScroll > i.oldScroll ? i.forward : i.backward;
                for (var r in this.waypoints[n]) {
                    var s = this.waypoints[n][r];
                    if (null !== s.triggerPoint) {
                        var a = i.oldScroll < s.triggerPoint,
                            l = i.newScroll >= s.triggerPoint;
                        (a && l || !a && !l) && (s.queueTrigger(o), e[s.group.id] = s.group)
                    }
                }
            }
            for (var c in e) e[c].flushTriggers();
            this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll
            }
        }, o.prototype.innerHeight = function() {
            return this.element == this.element.window ? g.viewportHeight() : this.adapter.innerHeight()
        }, o.prototype.remove = function(e) {
            delete this.waypoints[e.axis][e.key], this.checkEmpty()
        }, o.prototype.innerWidth = function() {
            return this.element == this.element.window ? g.viewportWidth() : this.adapter.innerWidth()
        }, o.prototype.destroy = function() {
            var e = [];
            for (var t in this.waypoints)
                for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
            for (var i = 0, o = e.length; i < o; i++) e[i].destroy()
        }, o.prototype.refresh = function() {
            var e, t = this.element == this.element.window,
                n = t ? void 0 : this.adapter.offset(),
                i = {};
            for (var o in this.handleScroll(), e = {
                    horizontal: {
                        contextOffset: t ? 0 : n.left,
                        contextScroll: t ? 0 : this.oldScroll.x,
                        contextDimension: this.innerWidth(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: t ? 0 : n.top,
                        contextScroll: t ? 0 : this.oldScroll.y,
                        contextDimension: this.innerHeight(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }) {
                var r = e[o];
                for (var s in this.waypoints[o]) {
                    var a, l, c, u, d = this.waypoints[o][s],
                        f = d.options.offset,
                        p = d.triggerPoint,
                        h = 0,
                        m = null == p;
                    d.element !== d.element.window && (h = d.adapter.offset()[r.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), -1 < d.options.offset.indexOf("%") && (f = Math.ceil(r.contextDimension * f / 100))), a = r.contextScroll - r.contextOffset, d.triggerPoint = Math.floor(h + a - f), l = p < r.oldScroll, c = d.triggerPoint >= r.oldScroll, u = !l && !c, !m && (l && c) ? (d.queueTrigger(r.backward), i[d.group.id] = d.group) : !m && u ? (d.queueTrigger(r.forward), i[d.group.id] = d.group) : m && r.oldScroll >= d.triggerPoint && (d.queueTrigger(r.forward), i[d.group.id] = d.group)
                }
            }
            return g.requestAnimationFrame(function() {
                for (var e in i) i[e].flushTriggers()
            }), this
        }, o.findOrCreateByElement = function(e) {
            return o.findByElement(e) || new o(e)
        }, o.refreshAll = function() {
            for (var e in i) i[e].refresh()
        }, o.findByElement = function(e) {
            return i[e.waypointContextKey]
        }, window.onload = function() {
            e && e(), o.refreshAll()
        }, g.requestAnimationFrame = function(e) {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
        }, g.Context = o
    }(),
    function() {
        "use strict";

        function s(e, t) {
            return e.triggerPoint - t.triggerPoint
        }

        function a(e, t) {
            return t.triggerPoint - e.triggerPoint
        }
        var t = {
                vertical: {},
                horizontal: {}
            },
            n = window.Waypoint;

        function i(e) {
            this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), t[this.axis][this.name] = this
        }
        i.prototype.add = function(e) {
            this.waypoints.push(e)
        }, i.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, i.prototype.flushTriggers = function() {
            for (var e in this.triggerQueues) {
                var t = this.triggerQueues[e],
                    n = "up" === e || "left" === e;
                t.sort(n ? a : s);
                for (var i = 0, o = t.length; i < o; i += 1) {
                    var r = t[i];
                    !r.options.continuous && i !== t.length - 1 || r.trigger([e])
                }
            }
            this.clearTriggerQueues()
        }, i.prototype.next = function(e) {
            this.waypoints.sort(s);
            var t = n.Adapter.inArray(e, this.waypoints);
            return t === this.waypoints.length - 1 ? null : this.waypoints[t + 1]
        }, i.prototype.previous = function(e) {
            this.waypoints.sort(s);
            var t = n.Adapter.inArray(e, this.waypoints);
            return t ? this.waypoints[t - 1] : null
        }, i.prototype.queueTrigger = function(e, t) {
            this.triggerQueues[t].push(e)
        }, i.prototype.remove = function(e) {
            var t = n.Adapter.inArray(e, this.waypoints); - 1 < t && this.waypoints.splice(t, 1)
        }, i.prototype.first = function() {
            return this.waypoints[0]
        }, i.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, i.findOrCreate = function(e) {
            return t[e.axis][e.name] || new i(e)
        }, n.Group = i
    }(),
    function() {
        "use strict";
        var n = window.jQuery,
            e = window.Waypoint;

        function i(e) {
            this.$element = n(e)
        }
        n.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, t) {
            i.prototype[t] = function() {
                var e = Array.prototype.slice.call(arguments);
                return this.$element[t].apply(this.$element, e)
            }
        }), n.each(["extend", "inArray", "isEmptyObject"], function(e, t) {
            i[t] = n[t]
        }), e.adapters.push({
            name: "jquery",
            Adapter: i
        }), e.Adapter = i
    }(),
    function() {
        "use strict";
        var o = window.Waypoint;

        function e(i) {
            return function() {
                var t = [],
                    n = arguments[0];
                return i.isFunction(arguments[0]) && ((n = i.extend({}, arguments[1])).handler = arguments[0]), this.each(function() {
                    var e = i.extend({}, n, {
                        element: this
                    });
                    "string" == typeof e.context && (e.context = i(this).closest(e.context)[0]), t.push(new o(e))
                }), t
            }
        }
        window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
    }()
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "CountUp", function() {
        return o
    });
    var i = function() {
            return (i = Object.assign || function(e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        },
        o = (r.prototype.determineDirectionAndSmartEasing = function() {
            var e = this.finalEndVal ? this.finalEndVal : this.endVal;
            this.countDown = this.startVal > e;
            var t = e - this.startVal;
            if (Math.abs(t) > this.options.smartEasingThreshold) {
                this.finalEndVal = e;
                var n = this.countDown ? 1 : -1;
                this.endVal = e + n * this.options.smartEasingAmount, this.duration = this.duration / 2
            } else this.endVal = e, this.finalEndVal = null;
            this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
        }, r.prototype.start = function(e) {
            this.error || (this.callback = e, 0 < this.duration ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
        }, r.prototype.pauseResume = function() {
            this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
        }, r.prototype.reset = function() {
            cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
        }, r.prototype.update = function(e) {
            cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(e), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal || this.resetDuration(), this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
        }, r.prototype.printValue = function(e) {
            var t = this.formattingFn(e);
            "INPUT" === this.el.tagName ? this.el.value = t : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = t : this.el.innerHTML = t
        }, r.prototype.ensureNumber = function(e) {
            return "number" == typeof e && !isNaN(e)
        }, r.prototype.validateValue = function(e) {
            var t = Number(e);
            return this.ensureNumber(t) ? t : (this.error = "[CountUp] invalid start or end value: " + e, null)
        }, r.prototype.resetDuration = function() {
            this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
        }, r);

    function r(e, t, n) {
        var c = this;
        this.target = e, this.endVal = t, this.options = n, this.version = "2.0.4", this.defaults = {
            startVal: 0,
            decimalPlaces: 0,
            duration: 2,
            useEasing: !0,
            useGrouping: !0,
            smartEasingThreshold: 999,
            smartEasingAmount: 333,
            separator: ",",
            decimal: ".",
            prefix: "",
            suffix: ""
        }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.count = function(e) {
            c.startTime || (c.startTime = e);
            var t = e - c.startTime;
            c.remaining = c.duration - t, c.useEasing ? c.countDown ? c.frameVal = c.startVal - c.easingFn(t, 0, c.startVal - c.endVal, c.duration) : c.frameVal = c.easingFn(t, c.startVal, c.endVal - c.startVal, c.duration) : c.countDown ? c.frameVal = c.startVal - (c.startVal - c.endVal) * (t / c.duration) : c.frameVal = c.startVal + (c.endVal - c.startVal) * (t / c.duration), c.countDown ? c.frameVal = c.frameVal < c.endVal ? c.endVal : c.frameVal : c.frameVal = c.frameVal > c.endVal ? c.endVal : c.frameVal, c.frameVal = Math.round(c.frameVal * c.decimalMult) / c.decimalMult, c.printValue(c.frameVal), t < c.duration ? c.rAF = requestAnimationFrame(c.count) : null !== c.finalEndVal ? c.update(c.finalEndVal) : c.callback && c.callback()
        }, this.formatNumber = function(e) {
            var t, n, i, o, r, s = e < 0 ? "-" : "";
            if (t = Math.abs(e).toFixed(c.options.decimalPlaces), i = (n = (t += "").split("."))[0], o = 1 < n.length ? c.options.decimal + n[1] : "", c.options.useGrouping) {
                r = "";
                for (var a = 0, l = i.length; a < l; ++a) 0 !== a && a % 3 == 0 && (r = c.options.separator + r), r = i[l - a - 1] + r;
                i = r
            }
            return c.options.numerals && c.options.numerals.length && (i = i.replace(/[0-9]/g, function(e) {
                return c.options.numerals[+e]
            }), o = o.replace(/[0-9]/g, function(e) {
                return c.options.numerals[+e]
            })), s + c.options.prefix + i + o + c.options.suffix
        }, this.easeOutExpo = function(e, t, n, i) {
            return n * (1 - Math.pow(2, -10 * e / i)) * 1024 / 1023 + t
        }, this.options = i({}, this.defaults, n), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(t), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.decimalMult = Math.pow(10, this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof e ? document.getElementById(e) : e, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined"
    }
}, function(e, t, n) {
    var a;
    window.Granim = n(21), a = jQuery, page.registerVendor("Granim"), page.initGranim = function() {
        a("[data-granim]").each(function() {
            var e = a(this),
                t = e.data("granim").split(","),
                n = [],
                i = [1, 1],
                o = t.length;
            if (0 < o)
                if (-1 < t[0].indexOf("-")) {
                    for (var r = 0; r < o; r++) n[r] = t[r].split("-");
                    for (r = 0; r < n[0].length; r++) i[r] = 1
                } else
                    for (r = 0; r < o / 2; r++) n[r] = [t[2 * r], t[2 * r + 1]];
            var s = {
                element: e[0],
                name: "granim",
                direction: e.dataAttr("direction", "left-right"),
                isPausedWhenNotInView: !0,
                opacity: i,
                states: {
                    "default-state": {
                        gradients: n,
                        transitionSpeed: 5e3,
                        loop: !0
                    }
                }
            };
            e.hasDataAttr("opacity") && (s.opacity = e.data("opacity").split(",")), e.hasDataAttr("image") && (s.image = {
                source: e.dataAttr("image", ""),
                position: ["center", "center"],
                stretchMode: ["stretch-if-bigger", "stretch-if-bigger"],
                blendingMode: "multiply"
            }), new Granim(s)
        })
    }
}, function(e, t, n) {
    e.exports = n(22)
}, function(e, t, n) {
    "use strict";

    function i(e) {
        this.getElement(e.element), this.x1 = 0, this.y1 = 0, this.name = e.name || !1, this.elToSetClassOn = e.elToSetClassOn || "body", this.direction = e.direction || "diagonal", this.customDirection = e.customDirection || {}, this.validateInput("direction"), this.isPausedWhenNotInView = e.isPausedWhenNotInView || !1, this.states = e.states, this.stateTransitionSpeed = e.stateTransitionSpeed || 1e3, this.previousTimeStamp = null, this.progress = 0, this.isPaused = !1, this.isCleared = !1, this.isPausedBecauseNotInView = !1, this.context = this.canvas.getContext("2d"), this.channels = {}, this.channelsIndex = 0, this.activeState = e.defaultStateName || "default-state", this.isChangingState = !1, this.currentColors = [], this.currentColorsPos = [], this.activetransitionSpeed = null, this.eventPolyfill(), this.scrollDebounceThreshold = e.scrollDebounceThreshold || 300, this.scrollDebounceTimeout = null, this.isImgLoaded = !1, this.isCanvasInWindowView = !1, this.firstScrollInit = !0, this.animating = !1, this.gradientLength = this.states[this.activeState].gradients[0].length, e.image && e.image.source && (this.image = {
            source: e.image.source,
            position: e.image.position || ["center", "center"],
            stretchMode: e.image.stretchMode || !1,
            blendingMode: e.image.blendingMode || !1
        }), this.events = {
            start: new CustomEvent("granim:start"),
            end: new CustomEvent("granim:end"),
            gradientChange: function(e) {
                return new CustomEvent("granim:gradientChange", {
                    detail: {
                        isLooping: e.isLooping,
                        colorsFrom: e.colorsFrom,
                        colorsTo: e.colorsTo,
                        activeState: e.activeState
                    },
                    bubbles: !1,
                    cancelable: !1
                })
            }
        }, this.callbacks = {
            onStart: "function" == typeof e.onStart && e.onStart,
            onGradientChange: "function" == typeof e.onGradientChange && e.onGradientChange,
            onEnd: "function" == typeof e.onEnd && e.onEnd
        }, this.getDimensions(), this.canvas.setAttribute("width", this.x1), this.canvas.setAttribute("height", this.y1), this.setColors(), this.image && (this.validateInput("image"), this.prepareImage()), this.pauseWhenNotInViewNameSpace = this.pauseWhenNotInView.bind(this), this.setSizeAttributesNameSpace = this.setSizeAttributes.bind(this), this.onResize(), this.isPausedWhenNotInView ? this.onScroll() : this.image || (this.refreshColorsAndPos(), this.animation = requestAnimationFrame(this.animateColors.bind(this)), this.animating = !0), this.callbacks.onStart && this.callbacks.onStart(), this.canvas.dispatchEvent(this.events.start)
    }
    i.prototype.animateColors = n(23), i.prototype.changeBlendingMode = n(24), i.prototype.changeDirection = n(25), i.prototype.changeState = n(26), i.prototype.clear = n(27), i.prototype.convertColorToRgba = n(28), i.prototype.destroy = n(29), i.prototype.eventPolyfill = n(30), i.prototype.getColor = n(31), i.prototype.getColorDiff = n(32), i.prototype.getColorPos = n(33), i.prototype.getColorPosDiff = n(34), i.prototype.getCurrentColors = n(35), i.prototype.getCurrentColorsPos = n(36), i.prototype.getDimensions = n(37), i.prototype.getElement = n(38), i.prototype.getLightness = n(39), i.prototype.makeGradient = n(40), i.prototype.onResize = n(41), i.prototype.onScroll = n(42), i.prototype.pause = n(43), i.prototype.pauseWhenNotInView = n(44), i.prototype.play = n(45), i.prototype.prepareImage = n(46), i.prototype.refreshColorsAndPos = n(47), i.prototype.setColors = n(48), i.prototype.setDirection = n(49), i.prototype.setSizeAttributes = n(50), i.prototype.triggerError = n(51), i.prototype.validateInput = n(52), e.exports = i
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t, n, i, o = 100 < e - this.previousTimeStamp,
            r = void 0 === this.states[this.activeState].loop || this.states[this.activeState].loop;
        null !== this.previousTimeStamp && !o || (this.previousTimeStamp = e), this.progress = this.progress + (e - this.previousTimeStamp), t = (this.progress / this.activetransitionSpeed * 100).toFixed(2), this.previousTimeStamp = e, this.refreshColorsAndPos(t), t < 100 ? this.animation = requestAnimationFrame(this.animateColors.bind(this)) : this.channelsIndex < this.states[this.activeState].gradients.length - 2 || r ? (this.isChangingState && (this.activetransitionSpeed = this.states[this.activeState].transitionSpeed || 5e3, this.isChangingState = !1), this.previousTimeStamp = null, this.progress = 0, this.channelsIndex++, n = !1, this.channelsIndex === this.states[this.activeState].gradients.length - 1 ? n = !0 : this.channelsIndex === this.states[this.activeState].gradients.length && (this.channelsIndex = 0), i = void 0 === this.states[this.activeState].gradients[this.channelsIndex + 1] ? this.states[this.activeState].gradients[0] : this.states[this.activeState].gradients[this.channelsIndex + 1], this.setColors(), this.animation = requestAnimationFrame(this.animateColors.bind(this)), this.callbacks.onGradientChange && this.callbacks.onGradientChange({
            isLooping: n,
            colorsFrom: this.states[this.activeState].gradients[this.channelsIndex],
            colorsTo: i,
            activeState: this.activeState
        }), this.canvas.dispatchEvent(this.events.gradientChange({
            isLooping: n,
            colorsFrom: this.states[this.activeState].gradients[this.channelsIndex],
            colorsTo: i,
            activeState: this.activeState
        }))) : (cancelAnimationFrame(this.animation), this.callbacks.onEnd && this.callbacks.onEnd(), this.canvas.dispatchEvent(new CustomEvent("granim:end")))
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        this.context.clearRect(0, 0, this.x1, this.y1), this.context.globalCompositeOperation = this.image.blendingMode = e, this.validateInput("blendingMode"), this.isPaused && this.refreshColorsAndPos()
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        this.context.clearRect(0, 0, this.x1, this.y1), this.direction = e, this.validateInput("direction"), this.isPaused && this.refreshColorsAndPos()
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var a = this;
        this.activeState !== e && (this.isPaused || (this.isPaused = !0, this.pause()), this.channelsIndex = -1, this.activetransitionSpeed = this.stateTransitionSpeed, this.activeColorsDiff = [], this.activeColorsPosDiff = [], this.activeColors = this.getCurrentColors(), this.activeColorsPos = this.getCurrentColorsPos(), this.progress = 0, this.previousTimeStamp = null, this.isChangingState = !0, this.states[e].gradients[0].forEach(function(e, t, n) {
            var i = a.convertColorToRgba(a.getColor(e)),
                o = a.getColorPos(e, t),
                r = a.getColorDiff(a.activeColors[t], i),
                s = a.getColorPosDiff(a.activeColorsPos[t], o);
            a.activeColorsDiff.push(r), a.activeColorsPosDiff.push(s)
        }), this.activeState = e, this.play())
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        this.isPaused ? this.isPaused = !1 : cancelAnimationFrame(this.animation), this.isCleared = !0, this.context.clearRect(0, 0, this.x1, this.y1)
    }
}, function(e, t, n) {
    "use strict";
    var i, o = {
        hexa: /^#(?:[0-9a-fA-F]{3}){1,2}$/,
        rgba: /^rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?(.?\d{1,3})\)$/,
        rgb: /^rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)$/,
        hsla: /^hsla\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%, ?(.?\d{1,3})\)$/,
        hsl: /^hsl\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%\)$/
    };

    function c(e, t, n) {
        return n < 0 && (n += 1), 1 < n && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }

    function r(e, t, n, i) {
        var o, r, s, a, l;
        return 0 === t ? o = r = s = n : (o = c(l = 2 * n - (a = n < .5 ? n * (1 + t) : n + t - n * t), a, e + 1 / 3), r = c(l, a, e), s = c(l, a, e - 1 / 3)), [Math.round(255 * o), Math.round(255 * r), Math.round(255 * s), i]
    }
    e.exports = function(e) {
        switch (function(e) {
            var t = Object.keys(o),
                n = 0;
            for (; n < t.length; n++)
                if (i = o[t[n]].exec(e)) return t[n];
            return !1
        }(e)) {
            default: this.triggerError("colorType");
            case "hexa":
                    return function(e) {
                    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, i) {
                        return t + t + n + n + i + i
                    });
                    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                    return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), 1] : null
                }(e);
            case "rgba":
                    return [parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10), parseFloat(i[4])];
            case "rgb":
                    return [parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10), 1];
            case "hsla":
                    return r(parseInt(i[1], 10) / 360, parseInt(i[2], 10) / 100, parseInt(i[3], 10) / 100, parseFloat(i[4]));
            case "hsl":
                    return r(parseInt(i[1], 10) / 360, parseInt(i[2], 10) / 100, parseInt(i[3], 10) / 100, 1)
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        this.onResize("removeListeners"), this.onScroll("removeListeners"), this.clear()
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }
        "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return "string" == typeof e ? e : "object" == typeof e && e.color ? e.color : void this.triggerError("gradient.color")
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        for (var n = 0, i = []; n < 4; n++) i.push(t[n] - e[n]);
        return i
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return "object" == typeof e && e.pos ? e.pos : parseFloat(t ? (1 / (this.gradientLength - 1) * t).toFixed(2) : 0)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return t - e
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        var e, t, n = [];
        for (e = 0; e < this.currentColors.length; e++)
            for (n.push([]), t = 0; t < 4; t++) n[e].push(this.currentColors[e][t]);
        return n
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        var e, t = [];
        for (e = 0; e < this.currentColorsPos.length; e++) t.push(this.currentColorsPos[e]);
        return t
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        this.x1 = this.canvas.offsetWidth, this.y1 = this.canvas.offsetHeight
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        if (e instanceof HTMLCanvasElement) this.canvas = e;
        else {
            if ("string" != typeof e) throw new Error("The element you used is neither a String, nor a HTMLCanvasElement");
            this.canvas = document.querySelector(e)
        }
        if (!this.canvas) throw new Error("`" + e + "` could not be found in the DOM")
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        var e, t, n = null,
            i = this.getCurrentColors().map(function(e) {
                return Math.max(e[0], e[1], e[2])
            });
        for (t = 0; t < i.length; t++) n = null === n ? i[t] : n + i[t], t === i.length - 1 && (e = Math.round(n / (t + 1)));
        return 128 <= e ? "light" : "dark"
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        var e = this.setDirection(),
            t = document.querySelector(this.elToSetClassOn).classList,
            n = 0;
        for (this.context.clearRect(0, 0, this.x1, this.y1), this.image && this.context.drawImage(this.imageNode, this.imagePosition.x, this.imagePosition.y, this.imagePosition.width, this.imagePosition.height); n < this.currentColors.length; n++) e.addColorStop(this.currentColorsPos[n], "rgba(" + this.currentColors[n][0] + ", " + this.currentColors[n][1] + ", " + this.currentColors[n][2] + ", " + this.currentColors[n][3] + ")");
        this.name && ("light" === this.getLightness() ? (t.remove(this.name + "-dark"), t.add(this.name + "-light")) : (t.remove(this.name + "-light"), t.add(this.name + "-dark"))), this.context.fillStyle = e, this.context.fillRect(0, 0, this.x1, this.y1)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        "removeListeners" !== e ? window.addEventListener("resize", this.setSizeAttributesNameSpace) : window.removeEventListener("resize", this.setSizeAttributesNameSpace)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        "removeListeners" !== e ? (window.addEventListener("scroll", this.pauseWhenNotInViewNameSpace), this.pauseWhenNotInViewNameSpace()) : window.removeEventListener("scroll", this.pauseWhenNotInViewNameSpace)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "isPausedBecauseNotInView" === e;
        this.isCleared || (t || (this.isPaused = !0), cancelAnimationFrame(this.animation), this.animating = !1)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        var t = this;
        this.scrollDebounceTimeout && clearTimeout(this.scrollDebounceTimeout), this.scrollDebounceTimeout = setTimeout(function() {
            var e = t.canvas.getBoundingClientRect();
            if (t.isCanvasInWindowView = !(e.bottom < 0 || e.right < 0 || e.left > window.innerWidth || e.top > window.innerHeight), t.isCanvasInWindowView) {
                if (!t.isPaused || t.firstScrollInit) {
                    if (t.image && !t.isImgLoaded) return;
                    t.isPausedBecauseNotInView = !1, t.play("isPlayedBecauseInView"), t.firstScrollInit = !1
                }
            } else !t.image && t.firstScrollInit && (t.refreshColorsAndPos(), t.firstScrollInit = !1), t.isPaused || t.isPausedBecauseNotInView || (t.isPausedBecauseNotInView = !0, t.pause("isPausedBecauseNotInView"))
        }, this.scrollDebounceThreshold)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        "isPlayedBecauseInView" === e || (this.isPaused = !1), this.isCleared = !1, this.animating || (this.animation = requestAnimationFrame(this.animateColors.bind(this)), this.animating = !0)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        var r = this;

        function e() {
            var e;
            for (e = 0; e < 2; e++) t(e ? "y" : "x");

            function t(e) {
                var t, n = r[e + "1"],
                    i = r["x" === e ? "imgOriginalWidth" : "imgOriginalHeight"],
                    o = "x" === e ? r.image.position[0] : r.image.position[1];
                switch (o) {
                    case "center":
                        t = n < i ? -(i - n) / 2 : (n - i) / 2, r.imagePosition[e] = t, r.imagePosition["x" === e ? "width" : "height"] = i;
                        break;
                    case "top":
                        r.imagePosition.y = 0, r.imagePosition.height = i;
                        break;
                    case "bottom":
                        r.imagePosition.y = n - i, r.imagePosition.height = i;
                        break;
                    case "right":
                        r.imagePosition.x = n - i, r.imagePosition.width = i;
                        break;
                    case "left":
                        r.imagePosition.x = 0, r.imagePosition.width = i
                }
                if (r.image.stretchMode) switch (o = "x" === e ? r.image.stretchMode[0] : r.image.stretchMode[1]) {
                    case "none":
                        break;
                    case "stretch":
                        r.imagePosition[e] = 0, r.imagePosition["x" === e ? "width" : "height"] = n;
                        break;
                    case "stretch-if-bigger":
                        if (i < n) break;
                        r.imagePosition[e] = 0, r.imagePosition["x" === e ? "width" : "height"] = n;
                        break;
                    case "stretch-if-smaller":
                        if (n < i) break;
                        r.imagePosition[e] = 0, r.imagePosition["x" === e ? "width" : "height"] = n
                }
            }
        }
        this.imagePosition || (this.imagePosition = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }), this.image.blendingMode && (this.context.globalCompositeOperation = this.image.blendingMode), this.imageNode ? e() : (this.imageNode = new Image, this.imageNode.onerror = function() {
            throw new Error("Granim: The image source is invalid.")
        }, this.imageNode.onload = function() {
            r.imgOriginalWidth = r.imageNode.width, r.imgOriginalHeight = r.imageNode.height, e(), r.refreshColorsAndPos(), r.isPausedWhenNotInView && !r.isCanvasInWindowView || (r.animation = requestAnimationFrame(r.animateColors.bind(r))), r.isImgLoaded = !0
        }, this.imageNode.src = this.image.source)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t, n, i, o;
        for (i = 0; i < this.activeColors.length; i++) {
            for (o = 0; o < 4; o++)(t = this.activeColors[i][o] + (3 !== o ? Math.ceil(this.activeColorsDiff[i][o] / 100 * e) : Math.round(this.activeColorsDiff[i][o] / 100 * e * 100) / 100)) <= 255 && 0 <= t && (this.currentColors[i][o] = t);
            (n = parseFloat((this.activeColorsPos[i] + this.activeColorsPosDiff[i] / 100 * e).toFixed(4))) <= 1 && 0 <= n && (this.currentColorsPos[i] = n)
        }
        this.makeGradient()
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        var r, s, a, l, c = this;
        if (this.channels[this.activeState] || (this.channels[this.activeState] = []), void 0 !== this.channels[this.activeState][this.channelsIndex]) return this.activeColors = this.channels[this.activeState][this.channelsIndex].colors, this.activeColorsDiff = this.channels[this.activeState][this.channelsIndex].colorsDiff, this.activeColorsPos = this.channels[this.activeState][this.channelsIndex].colorsPos, void(this.activeColorsPosDiff = this.channels[this.activeState][this.channelsIndex].colorsPosDiff);
        this.channels[this.activeState].push([{}]), this.channels[this.activeState][this.channelsIndex].colors = [], this.channels[this.activeState][this.channelsIndex].colorsDiff = [], this.channels[this.activeState][this.channelsIndex].colorsPos = [], this.channels[this.activeState][this.channelsIndex].colorsPosDiff = [], this.activeColors = [], this.activeColorsDiff = [], this.activeColorsPos = [], this.activeColorsPosDiff = [], this.states[this.activeState].gradients[this.channelsIndex].forEach(function(e, t) {
            var n = c.getColorPos(e, t),
                i = (e = c.getColor(e), c.convertColorToRgba(e)),
                o = c.channels[c.activeState];
            o[c.channelsIndex].colors.push(i), c.activeColors.push(i), o[c.channelsIndex].colorsPos.push(n), c.activeColorsPos.push(n), c.isCurrentColorsSet || (c.currentColors.push(c.convertColorToRgba(e)), c.currentColorsPos.push(n)), s = c.channelsIndex === c.states[c.activeState].gradients.length - 1 ? (r = c.getColorDiff(o[c.channelsIndex].colors[t], o[0].colors[t]), c.getColorPosDiff(o[c.channelsIndex].colorsPos[t], o[0].colorsPos[t])) : (a = c.convertColorToRgba(c.getColor(c.states[c.activeState].gradients[c.channelsIndex + 1][t])), l = c.getColorPos(c.states[c.activeState].gradients[c.channelsIndex + 1][t], t), r = c.getColorDiff(o[c.channelsIndex].colors[t], a), c.getColorPosDiff(o[c.channelsIndex].colorsPos[t], l)), o[c.channelsIndex].colorsDiff.push(r), c.activeColorsDiff.push(r), o[c.channelsIndex].colorsPosDiff.push(s), c.activeColorsPosDiff.push(s)
        }), this.activetransitionSpeed = this.states[this.activeState].transitionSpeed || 5e3, this.isCurrentColorsSet = !0
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        return -1 < e.indexOf("%") ? t / 100 * parseInt(e.split("%")[0], 10) : parseInt(e.split("px")[0], 10)
    }
    e.exports = function() {
        var e = this.context;
        switch (this.direction) {
            case "diagonal":
                return e.createLinearGradient(0, 0, this.x1, this.y1);
            case "left-right":
                return e.createLinearGradient(0, 0, this.x1, 0);
            case "top-bottom":
                return e.createLinearGradient(this.x1 / 2, 0, this.x1 / 2, this.y1);
            case "radial":
                return e.createRadialGradient(this.x1 / 2, this.y1 / 2, this.x1 / 2, this.x1 / 2, this.y1 / 2, 0);
            case "custom":
                return e.createLinearGradient(i(this.customDirection.x0, this.x1), i(this.customDirection.y0, this.y1), i(this.customDirection.x1, this.x1), i(this.customDirection.y1, this.y1))
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        this.getDimensions(), this.canvas.setAttribute("width", this.x1), this.canvas.setAttribute("height", this.y1), this.image && this.prepareImage(), this.refreshColorsAndPos()
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        throw new Error('Granim: Input error on "' + e + '" option.\nCheck the API https://sarcadass.github.io/granim.js/api.html.')
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = ["none", "stretch", "stretch-if-smaller", "stretch-if-bigger"];
        switch (e) {
            case "image":
                Array.isArray(this.image.position) && 2 === this.image.position.length && -1 !== ["left", "center", "right"].indexOf(this.image.position[0]) && -1 !== ["top", "center", "bottom"].indexOf(this.image.position[1]) || this.triggerError("image.position"), this.image.stretchMode && (Array.isArray(this.image.stretchMode) && 2 === this.image.stretchMode.length && -1 !== t.indexOf(this.image.stretchMode[0]) && -1 !== t.indexOf(this.image.stretchMode[1]) || this.triggerError("image.stretchMode"));
                break;
            case "blendingMode":
                -1 === ["multiply", "screen", "normal", "overlay", "darken", "lighten", "lighter", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"].indexOf(this.image.blendingMode) && (this.clear(), this.triggerError("blendingMode"));
                break;
            case "direction":
                -1 === ["diagonal", "left-right", "top-bottom", "radial", "custom"].indexOf(this.direction) ? this.triggerError("direction") : "custom" !== this.direction || function(e) {
                    var t, n = !0,
                        i = 0;
                    for (; n && i < e.length;) {
                        if ("string" != typeof(t = e[i])) n = !1;
                        else {
                            var o, r = null; - 1 !== t.indexOf("px") && (r = "px"), -1 !== t.indexOf("%") && (r = "%"), o = t.split(r).filter(function(e) {
                                return 0 < e.length
                            }), r && !(2 < o.length) && o[0] && !o[1] && /^-?\d+\.?\d*$/.test(o[0]) || (n = !1)
                        }
                        i++
                    }
                    return n
                }([this.customDirection.x0, this.customDirection.x1, this.customDirection.y0, this.customDirection.y1]) || this.triggerError("customDirection")
        }
    }
}, function(e, t, n) {
    var i;
    n(54), n(55), i = jQuery, page.registerVendor("Jarallax"), page.initJarallax = function() {
        i("[data-parallax]").each(function() {
            var e = i(this),
                t = {
                    imgSrc: e.data("parallax"),
                    speed: .3
                };
            e.hasClass("header") && (t.speed = .6), t = i.extend(t, page.getDataOptions(e)), e.jarallax(t)
        }), i("[data-video]").each(function() {
            var e = i(this),
                t = {
                    videoSrc: e.data("video"),
                    speed: 1
                }; - 1 < t.videoSrc.indexOf("mp4:") && (t.speed = .5), t = i.extend(t, page.getDataOptions(e)), e.jarallax(t)
        })
    }
}, function(e, t) {
    function o(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    var n, i;
    i = {}, o.m = n = [, , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
                "interactive" === document.readyState && e.call()
            }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
        }
    }, , function(n, e, t) {
        "use strict";
        (function(e) {
            var t;
            t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, n.exports = t
        }).call(this, t(5))
    }, function(e, t, n) {
        "use strict";
        var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        i = function() {
            return this
        }();
        try {
            i = i || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (i = window)
        }
        e.exports = i
    }, , , , , , function(e, t, n) {
        e.exports = n(12)
    }, function(e, t, n) {
        "use strict";
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = a(n(2)),
            r = n(4),
            s = a(n(13));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = r.window.jarallax;
        if (r.window.jarallax = s.default, r.window.jarallax.noConflict = function() {
                return r.window.jarallax = l, this
            }, void 0 !== r.jQuery) {
            var c = function() {
                var e = arguments || [];
                Array.prototype.unshift.call(e, this);
                var t = s.default.apply(r.window, e);
                return "object" !== (void 0 === t ? "undefined" : i(t)) ? t : this
            };
            c.constructor = s.default.constructor;
            var u = r.jQuery.fn.jarallax;
            r.jQuery.fn.jarallax = c, r.jQuery.fn.jarallax.noConflict = function() {
                return r.jQuery.fn.jarallax = u, this
            }
        }(0, o.default)(function() {
            (0, s.default)(document.querySelectorAll("[data-jarallax]"))
        })
    }, function(e, E, C) {
        "use strict";
        (function(e) {
            Object.defineProperty(E, "__esModule", {
                value: !0
            });
            var t = function(e, t, n) {
                    return t && r(e.prototype, t), n && r(e, n), e
                },
                u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                n = s(C(2)),
                i = s(C(14)),
                o = C(4);

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = -1 < navigator.userAgent.indexOf("MSIE ") || -1 < navigator.userAgent.indexOf("Trident/") || -1 < navigator.userAgent.indexOf("Edge/"),
                a = function() {
                    for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), n = 0; n < e.length; n++)
                        if (t && void 0 !== t.style[e[n]]) return e[n];
                    return !1
                }(),
                v = void 0,
                y = void 0,
                c = void 0,
                d = !1,
                f = !1;

            function p(e) {
                v = o.window.innerWidth || document.documentElement.clientWidth, y = o.window.innerHeight || document.documentElement.clientHeight, "object" !== (void 0 === e ? "undefined" : u(e)) || "load" !== e.type && "dom-loaded" !== e.type || (d = !0)
            }
            p(), o.window.addEventListener("resize", p), o.window.addEventListener("orientationchange", p), o.window.addEventListener("load", p), (0, n.default)(function() {
                p({
                    type: "dom-loaded"
                })
            });
            var h = [],
                m = !1;

            function g() {
                if (h.length) {
                    c = void 0 !== o.window.pageYOffset ? o.window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                    var t = d || !m || m.width !== v || m.height !== y,
                        n = f || t || !m || m.y !== c;
                    f = d = !1, (t || n) && (h.forEach(function(e) {
                        t && e.onResize(), n && e.onScroll()
                    }), m = {
                        width: v,
                        height: y,
                        y: c
                    }), (0, i.default)(g)
                }
            }

            function b(e) {
                ("object" === ("undefined" == typeof HTMLElement ? "undefined" : u(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : u(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
                for (var t = arguments[1], n = Array.prototype.slice.call(arguments, 2), i = e.length, o = 0, r = void 0; o < i; o++)
                    if ("object" === (void 0 === t ? "undefined" : u(t)) || void 0 === t ? e[o].jarallax || (e[o].jarallax = new x(e[o], t)) : e[o].jarallax && (r = e[o].jarallax[t].apply(e[o].jarallax, n)), void 0 !== r) return r;
                return e
            }
            var w = !!e.ResizeObserver && new e.ResizeObserver(function(e) {
                    e && e.length && (0, i.default)(function() {
                        e.forEach(function(e) {
                            e.target && e.target.jarallax && (d || e.target.jarallax.onResize(), f = !0)
                        })
                    })
                }),
                T = 0,
                x = (t(S, [{
                    key: "css",
                    value: function(t, n) {
                        return "string" == typeof n ? o.window.getComputedStyle(t).getPropertyValue(n) : (n.transform && a && (n[a] = n.transform), Object.keys(n).forEach(function(e) {
                            t.style[e] = n[e]
                        }), t)
                    }
                }, {
                    key: "extend",
                    value: function(n) {
                        var i = arguments;
                        return n = n || {}, Object.keys(arguments).forEach(function(t) {
                            i[t] && Object.keys(i[t]).forEach(function(e) {
                                n[e] = i[t][e]
                            })
                        }), n
                    }
                }, {
                    key: "getWindowData",
                    value: function() {
                        return {
                            width: v,
                            height: y,
                            y: c
                        }
                    }
                }, {
                    key: "initImg",
                    value: function() {
                        var e = this,
                            t = e.options.imgElement;
                        return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !(!e.image.$item && (null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !e.image.src || "none" === e.image.src))
                    }
                }, {
                    key: "canInitParallax",
                    value: function() {
                        return a && !this.options.disableParallax()
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this,
                            t = {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                pointerEvents: "none"
                            },
                            n = {};
                        if (!e.options.keepImg) {
                            var i = e.$item.getAttribute("style");
                            if (i && e.$item.setAttribute("data-jarallax-original-styles", i), e.image.useImgTag) {
                                var o = e.image.$item.getAttribute("style");
                                o && e.image.$item.setAttribute("data-jarallax-original-styles", o)
                            }
                        }
                        if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
                                position: "relative"
                            }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
                                zIndex: 0
                            }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {
                                "z-index": e.options.zIndex
                            }), l && e.css(e.image.$container, {
                                opacity: .9999
                            }), e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID), e.$item.appendChild(e.image.$container), e.image.useImgTag ? n = e.extend({
                                "object-fit": e.options.imgSize,
                                "object-position": e.options.imgPosition,
                                "font-family": "object-fit: " + e.options.imgSize + "; object-position: " + e.options.imgPosition + ";",
                                "max-width": "none"
                            }, t, n) : (e.image.$item = document.createElement("div"), e.image.src && (n = e.extend({
                                "background-position": e.options.imgPosition,
                                "background-size": e.options.imgSize,
                                "background-repeat": e.options.imgRepeat,
                                "background-image": 'url("' + e.image.src + '")'
                            }, t, n))), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position)
                            for (var r = 0, s = e.$item; null !== s && s !== document && 0 === r;) {
                                var a = e.css(s, "-webkit-transform") || e.css(s, "-moz-transform") || e.css(s, "transform");
                                a && "none" !== a && (r = 1, e.image.position = "absolute"), s = s.parentNode
                            }
                        n.position = e.image.position, e.css(e.image.$item, n), e.image.$container.appendChild(e.image.$item), e.onResize(), e.onScroll(!0), e.options.automaticResize && w && w.observe(e.$item), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
                            "background-image": "none"
                        }), e.addToParallaxList()
                    }
                }, {
                    key: "addToParallaxList",
                    value: function() {
                        h.push(this), 1 === h.length && g()
                    }
                }, {
                    key: "removeFromParallaxList",
                    value: function() {
                        var n = this;
                        h.forEach(function(e, t) {
                            e.instanceID === n.instanceID && h.splice(t, 1)
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this;
                        e.removeFromParallaxList();
                        var t = e.$item.getAttribute("data-jarallax-original-styles");
                        if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) {
                            var n = e.image.$item.getAttribute("data-jarallax-original-styles");
                            e.image.$item.removeAttribute("data-jarallax-original-styles"), n ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
                        }
                        e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
                    }
                }, {
                    key: "clipContainer",
                    value: function() {
                        if ("fixed" === this.image.position) {
                            var e = this,
                                t = e.image.$container.getBoundingClientRect(),
                                n = t.width,
                                i = t.height;
                            e.$clipStyles || (e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-" + e.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles));
                            var o = "#jarallax-container-" + e.instanceID + " {\n           clip: rect(0 " + n + "px " + i + "px 0);\n           clip: rect(0, " + n + "px, " + i + "px, 0);\n        }";
                            e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = o : e.$clipStyles.innerHTML = o
                        }
                    }
                }, {
                    key: "coverImage",
                    value: function() {
                        var e, t = this,
                            n = t.image.$container.getBoundingClientRect(),
                            i = n.height,
                            o = t.options.speed,
                            r = "scroll" === t.options.type || "scroll-opacity" === t.options.type,
                            s = 0,
                            a = i;
                        return r && (o < 0 ? (s = o * Math.max(i, y), y < i && (s -= o * (i - y))) : s = o * (i + y), 1 < o ? a = Math.abs(s - y) : o < 0 ? a = s / o + Math.abs(s) : a += (y - i) * (1 - o), s /= 2), t.parallaxScrollDistance = s, e = r ? (y - a) / 2 : (i - a) / 2, t.css(t.image.$item, {
                            height: a + "px",
                            marginTop: e + "px",
                            left: "fixed" === t.image.position ? n.left + "px" : "0",
                            width: n.width + "px"
                        }), t.options.onCoverImage && t.options.onCoverImage.call(t), {
                            image: {
                                height: a,
                                marginTop: e
                            },
                            container: n
                        }
                    }
                }, {
                    key: "isVisible",
                    value: function() {
                        return this.isElementInViewport || !1
                    }
                }, {
                    key: "onScroll",
                    value: function(e) {
                        var t = this,
                            n = t.$item.getBoundingClientRect(),
                            i = n.top,
                            o = n.height,
                            r = {},
                            s = n;
                        if (t.options.elementInViewport && (s = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = 0 <= s.bottom && 0 <= s.right && s.top <= y && s.left <= v, e || t.isElementInViewport) {
                            var a = Math.max(0, i),
                                l = Math.max(0, o + i),
                                c = Math.max(0, -i),
                                u = Math.max(0, i + o - y),
                                d = Math.max(0, o - (i + o - y)),
                                f = Math.max(0, -i + y - o),
                                p = 1 - 2 * (y - i) / (y + o),
                                h = 1;
                            if (o < y ? h = 1 - (c || u) / o : l <= y ? h = l / y : d <= y && (h = d / y), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (r.transform = "translate3d(0,0,0)", r.opacity = h), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                                var m = 1;
                                t.options.speed < 0 ? m -= t.options.speed * h : m += t.options.speed * (1 - h), r.transform = "scale(" + m + ") translate3d(0,0,0)"
                            }
                            if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                                var g = t.parallaxScrollDistance * p;
                                "absolute" === t.image.position && (g -= i), r.transform = "translate3d(0," + g + "px,0)"
                            }
                            t.css(t.image.$item, r), t.options.onScroll && t.options.onScroll.call(t, {
                                section: n,
                                beforeTop: a,
                                beforeTopEnd: l,
                                afterTop: c,
                                beforeBottom: u,
                                beforeBottomEnd: d,
                                afterBottom: f,
                                visiblePercent: h,
                                fromViewportCenter: p
                            })
                        }
                    }
                }, {
                    key: "onResize",
                    value: function() {
                        this.coverImage(), this.clipContainer()
                    }
                }]), S);

            function S(e, t) {
                ! function(e) {
                    if (!(e instanceof S)) throw new TypeError("Cannot call a class as a function")
                }(this);
                var n = this;
                n.instanceID = T++, n.$item = e, n.defaults = {
                    type: "scroll",
                    speed: .5,
                    imgSrc: null,
                    imgElement: ".jarallax-img",
                    imgSize: "cover",
                    imgPosition: "50% 50%",
                    imgRepeat: "no-repeat",
                    keepImg: !1,
                    elementInViewport: null,
                    zIndex: -100,
                    disableParallax: !1,
                    disableVideo: !1,
                    automaticResize: !0,
                    videoSrc: null,
                    videoStartTime: 0,
                    videoEndTime: 0,
                    videoVolume: 0,
                    videoLoop: !0,
                    videoPlayOnlyVisible: !0,
                    onScroll: null,
                    onInit: null,
                    onDestroy: null,
                    onCoverImage: null
                };
                var i = n.$item.getAttribute("data-jarallax"),
                    o = JSON.parse(i || "{}");
                i && console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");
                var r = n.$item.dataset || {},
                    s = {};
                if (Object.keys(r).forEach(function(e) {
                        var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                        t && void 0 !== n.defaults[t] && (s[t] = r[e])
                    }), n.options = n.extend({}, n.defaults, o, s, t), n.pureOptions = n.extend({}, n.options), Object.keys(n.options).forEach(function(e) {
                        "true" === n.options[e] ? n.options[e] = !0 : "false" === n.options[e] && (n.options[e] = !1)
                    }), n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed))), (n.options.noAndroid || n.options.noIos) && (console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"), n.options.disableParallax || (n.options.noIos && n.options.noAndroid ? n.options.disableParallax = /iPad|iPhone|iPod|Android/ : n.options.noIos ? n.options.disableParallax = /iPad|iPhone|iPod/ : n.options.noAndroid && (n.options.disableParallax = /Android/))), "string" == typeof n.options.disableParallax && (n.options.disableParallax = new RegExp(n.options.disableParallax)), n.options.disableParallax instanceof RegExp) {
                    var a = n.options.disableParallax;
                    n.options.disableParallax = function() {
                        return a.test(navigator.userAgent)
                    }
                }
                if ("function" != typeof n.options.disableParallax && (n.options.disableParallax = function() {
                        return !1
                    }), "string" == typeof n.options.disableVideo && (n.options.disableVideo = new RegExp(n.options.disableVideo)), n.options.disableVideo instanceof RegExp) {
                    var l = n.options.disableVideo;
                    n.options.disableVideo = function() {
                        return l.test(navigator.userAgent)
                    }
                }
                "function" != typeof n.options.disableVideo && (n.options.disableVideo = function() {
                    return !1
                });
                var c = n.options.elementInViewport;
                c && "object" === (void 0 === c ? "undefined" : u(c)) && void 0 !== c.length && (c = function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var n = [],
                            i = !0,
                            o = !1,
                            r = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
                        } catch (e) {
                            o = !0, r = e
                        } finally {
                            try {
                                !i && a.return && a.return()
                            } finally {
                                if (o) throw r
                            }
                        }
                        return n
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }(c, 1)[0]), c instanceof Element || (c = null), n.options.elementInViewport = c, n.image = {
                    src: n.options.imgSrc || null,
                    $container: null,
                    useImgTag: !1,
                    position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed"
                }, n.initImg() && n.canInitParallax() && n.init()
            }
            b.constructor = x, E.default = b
        }).call(this, C(5))
    }, function(e, t, n) {
        "use strict";
        var i = n(4),
            o = i.requestAnimationFrame || i.webkitRequestAnimationFrame || i.mozRequestAnimationFrame || function(e) {
                var t = +new Date,
                    n = Math.max(0, 16 - (t - r)),
                    i = setTimeout(e, n);
                return r = t, i
            },
            r = +new Date,
            s = i.cancelAnimationFrame || i.webkitCancelAnimationFrame || i.mozCancelAnimationFrame || clearTimeout;
        Function.prototype.bind && (o = o.bind(i), s = s.bind(i)), (e.exports = o).cancel = s
    }], o.c = i, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) o.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 11)
}, function(e, t) {
    function o(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    var n, i;
    i = {}, o.m = n = [, , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
                "interactive" === document.readyState && e.call()
            }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
        }
    }, , function(n, e, t) {
        "use strict";
        (function(e) {
            var t;
            t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, n.exports = t
        }).call(this, t(5))
    }, function(e, t, n) {
        "use strict";
        var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        i = function() {
            return this
        }();
        try {
            i = i || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (i = window)
        }
        e.exports = i
    }, function(e, t, n) {
        e.exports = n(7)
    }, function(e, t, n) {
        "use strict";
        var i = a(n(8)),
            o = a(n(4)),
            r = a(n(2)),
            s = a(n(10));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        o.default.VideoWorker = o.default.VideoWorker || i.default, (0, s.default)(), (0, r.default)(function() {
            "undefined" != typeof jarallax && jarallax(document.querySelectorAll("[data-jarallax-video]"))
        })
    }, function(e, t, n) {
        "use strict";
        e.exports = n(9)
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = function(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            };

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function s() {
            this._done = [], this._fail = []
        }
        s.prototype = {
            execute: function(e, t) {
                var n = e.length;
                for (t = Array.prototype.slice.call(t); n--;) e[n].apply(null, t)
            },
            resolve: function() {
                this.execute(this._done, arguments)
            },
            reject: function() {
                this.execute(this._fail, arguments)
            },
            done: function(e) {
                this._done.push(e)
            },
            fail: function(e) {
                this._fail.push(e)
            }
        };
        var a = 0,
            l = 0,
            c = 0,
            u = 0,
            d = 0,
            f = new s,
            p = new s,
            h = (o(m, [{
                key: "extend",
                value: function(n) {
                    var i = arguments;
                    return n = n || {}, Object.keys(arguments).forEach(function(t) {
                        i[t] && Object.keys(i[t]).forEach(function(e) {
                            n[e] = i[t][e]
                        })
                    }), n
                }
            }, {
                key: "parseURL",
                value: function(e) {
                    var t, n, i, o, r, s = !(!(t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)) || 11 !== t[1].length) && t[1],
                        a = !(!(n = e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/)) || !n[3]) && n[3],
                        l = (i = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), o = {}, r = 0, i.forEach(function(e) {
                            var t = e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                            t && t[1] && t[2] && (o["ogv" === t[1] ? "ogg" : t[1]] = t[2], r = 1)
                        }), !!r && o);
                    return s ? (this.type = "youtube", s) : a ? (this.type = "vimeo", a) : !!l && (this.type = "local", l)
                }
            }, {
                key: "isValid",
                value: function() {
                    return !!this.videoID
                }
            }, {
                key: "on",
                value: function(e, t) {
                    this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
                }
            }, {
                key: "off",
                value: function(n, i) {
                    var o = this;
                    this.userEventsList && this.userEventsList[n] && (i ? this.userEventsList[n].forEach(function(e, t) {
                        e === i && (o.userEventsList[n][t] = !1)
                    }) : delete this.userEventsList[n])
                }
            }, {
                key: "fire",
                value: function(e) {
                    var t = this,
                        n = [].slice.call(arguments, 1);
                    this.userEventsList && void 0 !== this.userEventsList[e] && this.userEventsList[e].forEach(function(e) {
                        e && e.apply(t, n)
                    })
                }
            }, {
                key: "play",
                value: function(e) {
                    var t = this;
                    t.player && ("youtube" === t.type && t.player.playVideo && (void 0 !== e && t.player.seekTo(e || 0), YT.PlayerState.PLAYING !== t.player.getPlayerState() && t.player.playVideo()), "vimeo" === t.type && (void 0 !== e && t.player.setCurrentTime(e), t.player.getPaused().then(function(e) {
                        e && t.player.play()
                    })), "local" === t.type && (void 0 !== e && (t.player.currentTime = e), t.player.paused && t.player.play()))
                }
            }, {
                key: "pause",
                value: function() {
                    var t = this;
                    t.player && ("youtube" === t.type && t.player.pauseVideo && YT.PlayerState.PLAYING === t.player.getPlayerState() && t.player.pauseVideo(), "vimeo" === t.type && t.player.getPaused().then(function(e) {
                        e || t.player.pause()
                    }), "local" === t.type && (t.player.paused || t.player.pause()))
                }
            }, {
                key: "mute",
                value: function() {
                    this.player && ("youtube" === this.type && this.player.mute && this.player.mute(), "vimeo" === this.type && this.player.setVolume && this.player.setVolume(0), "local" === this.type && (this.$video.muted = !0))
                }
            }, {
                key: "unmute",
                value: function() {
                    var e = this;
                    e.player && ("youtube" === e.type && e.player.mute && e.player.unMute(), "vimeo" === e.type && e.player.setVolume && e.player.setVolume(e.options.volume), "local" === e.type && (e.$video.muted = !1))
                }
            }, {
                key: "setVolume",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    this.player && e && ("youtube" === this.type && this.player.setVolume && this.player.setVolume(e), "vimeo" === this.type && this.player.setVolume && this.player.setVolume(e), "local" === this.type && (this.$video.volume = e / 100))
                }
            }, {
                key: "getVolume",
                value: function(t) {
                    this.player ? ("youtube" === this.type && this.player.getVolume && t(this.player.getVolume()), "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(function(e) {
                        t(e)
                    }), "local" === this.type && t(100 * this.$video.volume)) : t(!1)
                }
            }, {
                key: "getMuted",
                value: function(t) {
                    this.player ? ("youtube" === this.type && this.player.isMuted && t(this.player.isMuted()), "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(function(e) {
                        t(!!e)
                    }), "local" === this.type && t(this.$video.muted)) : t(null)
                }
            }, {
                key: "getImageURL",
                value: function(t) {
                    var n = this;
                    if (n.videoImage) t(n.videoImage);
                    else {
                        if ("youtube" === n.type) {
                            var e = ["maxresdefault", "sddefault", "hqdefault", "0"],
                                i = 0,
                                o = new Image;
                            o.onload = function() {
                                120 !== (this.naturalWidth || this.width) || i === e.length - 1 ? (n.videoImage = "https://img.youtube.com/vi/" + n.videoID + "/" + e[i] + ".jpg", t(n.videoImage)) : (i++, this.src = "https://img.youtube.com/vi/" + n.videoID + "/" + e[i] + ".jpg")
                            }, o.src = "https://img.youtube.com/vi/" + n.videoID + "/" + e[i] + ".jpg"
                        }
                        if ("vimeo" === n.type) {
                            var r = new XMLHttpRequest;
                            r.open("GET", "https://vimeo.com/api/v2/video/" + n.videoID + ".json", !0), r.onreadystatechange = function() {
                                if (4 === this.readyState && 200 <= this.status && this.status < 400) {
                                    var e = JSON.parse(this.responseText);
                                    n.videoImage = e[0].thumbnail_large, t(n.videoImage)
                                }
                            }, r.send(), r = null
                        }
                    }
                }
            }, {
                key: "getIframe",
                value: function(e) {
                    this.getVideo(e)
                }
            }, {
                key: "getVideo",
                value: function(l) {
                    var c = this;
                    c.$video ? l(c.$video) : c.onAPIready(function() {
                        var e = void 0;
                        if (c.$video || ((e = document.createElement("div")).style.display = "none"), "youtube" === c.type) {
                            c.playerOptions = {}, c.playerOptions.videoId = c.videoID, c.playerOptions.playerVars = {
                                autohide: 1,
                                rel: 0,
                                autoplay: 0,
                                playsinline: 1
                            }, c.options.showContols || (c.playerOptions.playerVars.iv_load_policy = 3, c.playerOptions.playerVars.modestbranding = 1, c.playerOptions.playerVars.controls = 0, c.playerOptions.playerVars.showinfo = 0, c.playerOptions.playerVars.disablekb = 1);
                            var t = void 0,
                                n = void 0;
                            c.playerOptions.events = {
                                onReady: function(t) {
                                    c.options.mute ? t.target.mute() : c.options.volume && t.target.setVolume(c.options.volume), c.options.autoplay && c.play(c.options.startTime), c.fire("ready", t), c.options.loop && !c.options.endTime && (c.options.endTime = c.player.getDuration() - .1), setInterval(function() {
                                        c.getVolume(function(e) {
                                            c.options.volume !== e && (c.options.volume = e, c.fire("volumechange", t))
                                        })
                                    }, 150)
                                },
                                onStateChange: function(e) {
                                    c.options.loop && e.data === YT.PlayerState.ENDED && c.play(c.options.startTime), t || e.data !== YT.PlayerState.PLAYING || (t = 1, c.fire("started", e)), e.data === YT.PlayerState.PLAYING && c.fire("play", e), e.data === YT.PlayerState.PAUSED && c.fire("pause", e), e.data === YT.PlayerState.ENDED && c.fire("ended", e), e.data === YT.PlayerState.PLAYING ? n = setInterval(function() {
                                        c.fire("timeupdate", e), c.options.endTime && c.player.getCurrentTime() >= c.options.endTime && (c.options.loop ? c.play(c.options.startTime) : c.pause())
                                    }, 150) : clearInterval(n)
                                }
                            };
                            var i = !c.$video;
                            if (i) {
                                var o = document.createElement("div");
                                o.setAttribute("id", c.playerID), e.appendChild(o), document.body.appendChild(e)
                            }
                            c.player = c.player || new window.YT.Player(c.playerID, c.playerOptions), i && (c.$video = document.getElementById(c.playerID), c.videoWidth = parseInt(c.$video.getAttribute("width"), 10) || 1280, c.videoHeight = parseInt(c.$video.getAttribute("height"), 10) || 720)
                        }
                        if ("vimeo" === c.type) {
                            if (c.playerOptions = {
                                    id: c.videoID,
                                    autopause: 0,
                                    transparent: 0,
                                    autoplay: c.options.autoplay ? 1 : 0,
                                    loop: c.options.loop ? 1 : 0,
                                    muted: c.options.mute ? 1 : 0
                                }, c.options.volume && (c.playerOptions.volume = c.options.volume), c.options.showContols || (c.playerOptions.badge = 0, c.playerOptions.byline = 0, c.playerOptions.portrait = 0, c.playerOptions.title = 0), !c.$video) {
                                var r = "";
                                Object.keys(c.playerOptions).forEach(function(e) {
                                    "" !== r && (r += "&"), r += e + "=" + encodeURIComponent(c.playerOptions[e])
                                }), c.$video = document.createElement("iframe"), c.$video.setAttribute("id", c.playerID), c.$video.setAttribute("src", "https://player.vimeo.com/video/" + c.videoID + "?" + r), c.$video.setAttribute("frameborder", "0"), c.$video.setAttribute("mozallowfullscreen", ""), c.$video.setAttribute("allowfullscreen", ""), e.appendChild(c.$video), document.body.appendChild(e)
                            }
                            c.player = c.player || new Vimeo.Player(c.$video, c.playerOptions), c.options.startTime && c.options.autoplay && c.player.setCurrentTime(c.options.startTime), c.player.getVideoWidth().then(function(e) {
                                c.videoWidth = e || 1280
                            }), c.player.getVideoHeight().then(function(e) {
                                c.videoHeight = e || 720
                            });
                            var s = void 0;
                            c.player.on("timeupdate", function(e) {
                                s || (c.fire("started", e), s = 1), c.fire("timeupdate", e), c.options.endTime && c.options.endTime && e.seconds >= c.options.endTime && (c.options.loop ? c.play(c.options.startTime) : c.pause())
                            }), c.player.on("play", function(e) {
                                c.fire("play", e), c.options.startTime && 0 === e.seconds && c.play(c.options.startTime)
                            }), c.player.on("pause", function(e) {
                                c.fire("pause", e)
                            }), c.player.on("ended", function(e) {
                                c.fire("ended", e)
                            }), c.player.on("loaded", function(e) {
                                c.fire("ready", e)
                            }), c.player.on("volumechange", function(e) {
                                c.fire("volumechange", e)
                            })
                        }
                        if ("local" === c.type) {
                            c.$video || (c.$video = document.createElement("video"), c.options.showContols && (c.$video.controls = !0), c.options.mute ? c.$video.muted = !0 : c.$video.volume && (c.$video.volume = c.options.volume / 100), c.options.loop && (c.$video.loop = !0), c.$video.setAttribute("playsinline", ""), c.$video.setAttribute("webkit-playsinline", ""), c.$video.setAttribute("id", c.playerID), e.appendChild(c.$video), document.body.appendChild(e), Object.keys(c.videoID).forEach(function(e) {
                                var t, n, i, o;
                                t = c.$video, n = c.videoID[e], i = "video/" + e, (o = document.createElement("source")).src = n, o.type = i, t.appendChild(o)
                            })), c.player = c.player || c.$video;
                            var a = void 0;
                            c.player.addEventListener("playing", function(e) {
                                a || c.fire("started", e), a = 1
                            }), c.player.addEventListener("timeupdate", function(e) {
                                c.fire("timeupdate", e), c.options.endTime && c.options.endTime && this.currentTime >= c.options.endTime && (c.options.loop ? c.play(c.options.startTime) : c.pause())
                            }), c.player.addEventListener("play", function(e) {
                                c.fire("play", e)
                            }), c.player.addEventListener("pause", function(e) {
                                c.fire("pause", e)
                            }), c.player.addEventListener("ended", function(e) {
                                c.fire("ended", e)
                            }), c.player.addEventListener("loadedmetadata", function() {
                                c.videoWidth = this.videoWidth || 1280, c.videoHeight = this.videoHeight || 720, c.fire("ready"), c.options.autoplay && c.play(c.options.startTime)
                            }), c.player.addEventListener("volumechange", function(e) {
                                c.getVolume(function(e) {
                                    c.options.volume = e
                                }), c.fire("volumechange", e)
                            })
                        }
                        l(c.$video)
                    })
                }
            }, {
                key: "init",
                value: function() {
                    this.playerID = "VideoWorker-" + this.ID
                }
            }, {
                key: "loadAPI",
                value: function() {
                    if (!l || !c) {
                        var e = "";
                        if ("youtube" !== this.type || l || (l = 1, e = "https://www.youtube.com/iframe_api"), "vimeo" !== this.type || c || (c = 1, e = "https://player.vimeo.com/api/player.js"), e) {
                            var t = document.createElement("script"),
                                n = document.getElementsByTagName("head")[0];
                            t.src = e, n.appendChild(t), t = n = null
                        }
                    }
                }
            }, {
                key: "onAPIready",
                value: function(e) {
                    if ("youtube" === this.type && ("undefined" != typeof YT && 0 !== YT.loaded || u ? "object" === ("undefined" == typeof YT ? "undefined" : i(YT)) && 1 === YT.loaded ? e() : f.done(function() {
                            e()
                        }) : (u = 1, window.onYouTubeIframeAPIReady = function() {
                            window.onYouTubeIframeAPIReady = null, f.resolve("done"), e()
                        })), "vimeo" === this.type)
                        if ("undefined" != typeof Vimeo || d) "undefined" != typeof Vimeo ? e() : p.done(function() {
                            e()
                        });
                        else {
                            d = 1;
                            var t = setInterval(function() {
                                "undefined" != typeof Vimeo && (clearInterval(t), p.resolve("done"), e())
                            }, 20)
                        }
                        "local" === this.type && e()
                }
            }]), m);

        function m(e, t) {
            ! function(e) {
                if (!(e instanceof m)) throw new TypeError("Cannot call a class as a function")
            }(this);
            var n = this;
            n.url = e, n.options_default = {
                autoplay: !1,
                loop: !1,
                mute: !1,
                volume: 100,
                showContols: !0,
                startTime: 0,
                endTime: 0
            }, n.options = n.extend({}, n.options_default, t), n.videoID = n.parseURL(e), n.videoID && (n.ID = a++, n.loadAPI(), n.init())
        }
        t.default = h
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : l.default.jarallax;
            if (void 0 !== e) {
                var t = e.constructor,
                    i = t.prototype.init;
                t.prototype.init = function() {
                    var n = this;
                    i.apply(n), n.video && !n.options.disableVideo() && n.video.getVideo(function(e) {
                        var t = e.parentNode;
                        n.css(e, {
                            position: n.image.position,
                            top: "0px",
                            left: "0px",
                            right: "0px",
                            bottom: "0px",
                            width: "100%",
                            height: "100%",
                            maxWidth: "none",
                            maxHeight: "none",
                            margin: 0,
                            zIndex: -1
                        }), n.$video = e, n.image.$container.appendChild(e), t.parentNode.removeChild(t)
                    })
                };
                var a = t.prototype.coverImage;
                t.prototype.coverImage = function() {
                    var e = this,
                        t = a.apply(e),
                        n = !!e.image.$item && e.image.$item.nodeName;
                    if (t && e.video && n && ("IFRAME" === n || "VIDEO" === n)) {
                        var i = t.image.height,
                            o = i * e.image.width / e.image.height,
                            r = (t.container.width - o) / 2,
                            s = t.image.marginTop;
                        t.container.width > o && (i = (o = t.container.width) * e.image.height / e.image.width, r = 0, s += (t.image.height - i) / 2), "IFRAME" === n && (i += 400, s -= 200), e.css(e.$video, {
                            width: o + "px",
                            marginLeft: r + "px",
                            height: i + "px",
                            marginTop: s + "px"
                        })
                    }
                    return t
                };
                var n = t.prototype.initImg;
                t.prototype.initImg = function() {
                    var e = n.apply(this);
                    return this.options.videoSrc || (this.options.videoSrc = this.$item.getAttribute("data-jarallax-video") || null), this.options.videoSrc ? (this.defaultInitImgResult = e, !0) : e
                };
                var o = t.prototype.canInitParallax;
                t.prototype.canInitParallax = function() {
                    var n = this,
                        e = o.apply(n);
                    if (!n.options.videoSrc) return e;
                    var t = new s.default(n.options.videoSrc, {
                        autoplay: !0,
                        loop: n.options.videoLoop,
                        showContols: !1,
                        startTime: n.options.videoStartTime || 0,
                        endTime: n.options.videoEndTime || 0,
                        mute: n.options.videoVolume ? 0 : 1,
                        volume: n.options.videoVolume || 0
                    });
                    if (t.isValid())
                        if (e) {
                            if (t.on("ready", function() {
                                    if (n.options.videoPlayOnlyVisible) {
                                        var e = n.onScroll;
                                        n.onScroll = function() {
                                            e.apply(n), !n.options.videoLoop && (n.options.videoLoop || n.videoEnded) || (n.isVisible() ? t.play() : t.pause())
                                        }
                                    } else t.play()
                                }), t.on("started", function() {
                                    n.image.$default_item = n.image.$item, n.image.$item = n.$video, n.image.width = n.video.videoWidth || 1280, n.image.height = n.video.videoHeight || 720, n.coverImage(), n.clipContainer(), n.onScroll(), n.image.$default_item && (n.image.$default_item.style.display = "none")
                                }), t.on("ended", function() {
                                    n.videoEnded = !0, n.options.videoLoop || n.image.$default_item && (n.image.$item = n.image.$default_item, n.image.$item.style.display = "block", n.coverImage(), n.clipContainer(), n.onScroll())
                                }), n.video = t, !n.defaultInitImgResult) return "local" !== t.type ? (t.getImageURL(function(e) {
                                n.image.src = e, n.init()
                            }), !1) : (n.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", !0)
                        } else n.defaultInitImgResult || t.getImageURL(function(e) {
                            var t = n.$item.getAttribute("style");
                            t && n.$item.setAttribute("data-jarallax-original-styles", t), n.css(n.$item, {
                                "background-image": 'url("' + e + '")',
                                "background-position": "center",
                                "background-size": "cover"
                            })
                        });
                    return e
                };
                var r = t.prototype.destroy;
                t.prototype.destroy = function() {
                    this.image.$default_item && (this.image.$item = this.image.$default_item, delete this.image.$default_item), r.apply(this)
                }
            }
        };
        var s = i(n(8)),
            l = i(n(4));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }], o.c = i, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) o.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 6)
}, function(e, t, n) {
    var i;
    window.Lity = n(57), i = jQuery, page.registerVendor("Lity"), page.initLity = function() {
        i(document).on("click", '[data-provide~="lightbox"]', Lity)
    }
}, function(e, t, n) {
    var i, o, r;
    /*! Lity - v2.3.1 - 2018-04-20
     * http://sorgalla.com/lity/
     * Copyright (c) 2015-2018 Jan Sorgalla; Licensed MIT */
    /*! Lity - v2.3.1 - 2018-04-20
     * http://sorgalla.com/lity/
     * Copyright (c) 2015-2018 Jan Sorgalla; Licensed MIT */
    r = "undefined" != typeof window ? window : this, i = [n(3)], void 0 === (o = function(e) {
        return function(e, u) {
            "use strict";
            var d = e.document,
                f = u(e),
                p = u.Deferred,
                h = u("html"),
                m = [],
                g = "aria-hidden",
                v = "lity-" + g,
                o = 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])',
                y = {
                    esc: !0,
                    handler: null,
                    handlers: {
                        image: x,
                        inline: function(e, t) {
                            var n, i, o;
                            try {
                                n = u(e)
                            } catch (e) {
                                return !1
                            }
                            return !!n.length && (i = u('<i style="display:none !important"/>'), o = n.hasClass("lity-hide"), t.element().one("lity:remove", function() {
                                i.before(n).remove(), o && !n.closest(".lity-content").length && n.addClass("lity-hide")
                            }), n.removeClass("lity-hide").after(i))
                        },
                        youtube: function(e) {
                            var t = n.exec(e);
                            return !!t && S(T(e, c("https://www.youtube" + (t[2] || "") + ".com/embed/" + t[4], u.extend({
                                autoplay: 1
                            }, l(t[5] || "")))))
                        },
                        vimeo: function(e) {
                            var t = i.exec(e);
                            return !!t && S(T(e, c("https://player.vimeo.com/video/" + t[3], u.extend({
                                autoplay: 1
                            }, l(t[4] || "")))))
                        },
                        googlemaps: function(e) {
                            var t = r.exec(e);
                            return !!t && S(T(e, c("https://www.google." + t[3] + "/maps?" + t[6], {
                                output: 0 < t[6].indexOf("layer=c") ? "svembed" : "embed"
                            })))
                        },
                        facebookvideo: function(e) {
                            var t = s.exec(e);
                            if (!t) return !1;
                            0 !== e.indexOf("http") && (e = "https:" + e);
                            return S(T(e, c("https://www.facebook.com/plugins/video.php?href=" + e, u.extend({
                                autoplay: 1
                            }, l(t[4] || "")))))
                        },
                        iframe: S
                    },
                    template: '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'
                },
                t = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,
                n = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,
                i = /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,
                r = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,
                s = /(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i,
                a = function() {
                    var e = d.createElement("div"),
                        t = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        };
                    for (var n in t)
                        if (void 0 !== e.style[n]) return t[n];
                    return !1
                }();

            function b(e) {
                var t = p();
                return a && e.length ? (e.one(a, t.resolve), setTimeout(t.resolve, 500)) : t.resolve(), t.promise()
            }

            function w(e, t, n) {
                if (1 === arguments.length) return u.extend({}, e);
                if ("string" == typeof t) {
                    if (void 0 === n) return void 0 === e[t] ? null : e[t];
                    e[t] = n
                } else u.extend(e, t);
                return this
            }

            function l(e) {
                for (var t, n = decodeURI(e.split("#")[0]).split("&"), i = {}, o = 0, r = n.length; o < r; o++) n[o] && (t = n[o].split("="), i[t[0]] = t[1]);
                return i
            }

            function c(e, t) {
                return e + (-1 < e.indexOf("?") ? "&" : "?") + u.param(t)
            }

            function T(e, t) {
                var n = e.indexOf("#");
                return -1 === n ? t : (0 < n && (e = e.substr(n)), t + e)
            }

            function x(e, t) {
                var n = t.opener() && t.opener().data("lity-desc") || "Image with no description",
                    i = u('<img src="' + e + '" alt="' + n + '"/>'),
                    o = p(),
                    r = function() {
                        o.reject(function(e) {
                            return u('<span class="lity-error"/>').append(e)
                        }("Failed loading image"))
                    };
                return i.on("load", function() {
                    if (0 === this.naturalWidth) return r();
                    o.resolve(i)
                }).on("error", r), o.promise()
            }

            function S(e) {
                return '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="' + e + '"/></div>'
            }

            function E() {
                return d.documentElement.clientHeight ? d.documentElement.clientHeight : Math.round(f.height())
            }

            function C(e) {
                var t = k();
                t && (27 === e.keyCode && t.options("esc") && t.close(), 9 === e.keyCode && function(e, t) {
                    var n = t.element().find(o),
                        i = n.index(d.activeElement);
                    e.shiftKey && i <= 0 ? (n.get(n.length - 1).focus(), e.preventDefault()) : e.shiftKey || i !== n.length - 1 || (n.get(0).focus(), e.preventDefault())
                }(e, t))
            }

            function _() {
                u.each(m, function(e, t) {
                    t.resize()
                })
            }

            function k() {
                return 0 === m.length ? null : m[0]
            }

            function A(e, t, n, i) {
                var o, r, s, a = this,
                    l = !1,
                    c = !1;
                t = u.extend({}, y, t), r = u(t.template), a.element = function() {
                        return r
                    }, a.opener = function() {
                        return n
                    }, a.options = u.proxy(w, a, t), a.handlers = u.proxy(w, a, t.handlers), a.resize = function() {
                        l && !c && s.css("max-height", E() + "px").trigger("lity:resize", [a])
                    }, a.close = function() {
                        if (l && !c) {
                            c = !0,
                                function(t) {
                                    var e;
                                    t.element().attr(g, "true"), 1 === m.length && (h.removeClass("lity-active"), f.off({
                                        resize: _,
                                        keydown: C
                                    }));
                                    e = (m = u.grep(m, function(e) {
                                        return t !== e
                                    })).length ? m[0].element() : u(".lity-hidden");
                                    e.removeClass("lity-hidden").each(function() {
                                        var e = u(this),
                                            t = e.data(v);
                                        t ? e.attr(g, t) : e.removeAttr(g), e.removeData(v)
                                    })
                                }(a);
                            var e = p();
                            if (i && (d.activeElement === r[0] || u.contains(r[0], d.activeElement))) try {
                                i.focus()
                            } catch (e) {}
                            return s.trigger("lity:close", [a]), r.removeClass("lity-opened").addClass("lity-closed"), b(s.add(r)).always(function() {
                                s.trigger("lity:remove", [a]), r.remove(), r = void 0, e.resolve()
                            }), e.promise()
                        }
                    }, o = function(n, i, o, e) {
                        var r, s = "inline",
                            a = u.extend({}, o);
                        e && a[e] ? (r = a[e](n, i), s = e) : (u.each(["inline", "iframe"], function(e, t) {
                            delete a[t], a[t] = o[t]
                        }), u.each(a, function(e, t) {
                            return !t || (!(!t.test || t.test(n, i)) || (!1 !== (r = t(n, i)) ? (s = e, !1) : void 0))
                        }));
                        return {
                            handler: s,
                            content: r || ""
                        }
                    }(e, a, t.handlers, t.handler), r.attr(g, "false").addClass("lity-loading lity-opened lity-" + o.handler).appendTo("body").focus().on("click", "[data-lity-close]", function(e) {
                        u(e.target).is("[data-lity-close]") && a.close()
                    }).trigger("lity:open", [a]),
                    function(e) {
                        1 === m.unshift(e) && (h.addClass("lity-active"), f.on({
                            resize: _,
                            keydown: C
                        }));
                        u("body > *").not(e.element()).addClass("lity-hidden").each(function() {
                            var e = u(this);
                            void 0 === e.data(v) && e.data(v, e.attr(g) || null)
                        }).attr(g, "true")
                    }(a), u.when(o.content).always(function(e) {
                        s = u(e).css("max-height", E() + "px"), r.find(".lity-loader").each(function() {
                            var e = u(this);
                            b(e).always(function() {
                                e.remove()
                            })
                        }), r.removeClass("lity-loading").find(".lity-content").empty().append(s), l = !0, s.trigger("lity:ready", [a])
                    })
            }

            function I(e, t, n) {
                e.preventDefault ? (e.preventDefault(), n = u(this), e = n.data("lity-target") || n.attr("href") || n.attr("src")) : n = u(n);
                var i = new A(e, u.extend({}, n.data("lity-options") || n.data("lity"), t), n, d.activeElement);
                if (!e.preventDefault) return i
            }
            return x.test = function(e) {
                return t.test(e)
            }, I.version = "2.3.1", I.options = u.proxy(w, I, y), I.handlers = u.proxy(w, I, y.handlers), I.current = k, u(d).on("click.lity", "[data-lity]", I), I
        }(r, e)
    }.apply(t, i)) || (e.exports = o)
}, function(e, t, n) {
    var i;
    n(59), i = jQuery, page.registerVendor("PhotoSwipe"), page.initPhotoSwipe = function() {
        i('[data-provide="photoswipe"]').each(function() {
            var e = i(this),
                t = e.dataAttr("photoswipe-selector", ".gallery-item");
            i(e).photoSwipe(t)
        })
    }
}, function(e, t, i) {
    var o, r;
    ! function o(r, s, a) {
        function l(n, e) {
            if (!s[n]) {
                if (!r[n]) {
                    if (c) return c(n, !0);
                    var t = new Error("Cannot find module '" + n + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                var i = s[n] = {
                    exports: {}
                };
                r[n][0].call(i.exports, function(e) {
                    var t = r[n][1][e];
                    return l(t || e)
                }, i, i.exports, o, r, s, a)
            }
            return s[n].exports
        }
        for (var c = !1, e = 0; e < a.length; e++) l(a[e]);
        return l
    }({
        1: [function(e, t, n) {
            /*! PhotoSwipe - v4.1.1 - 2015-12-24
             * http://photoswipe.com
             * Copyright (c) 2015 Dmitry Semenov; */
            void 0 === (r = "function" == typeof(o = function() {
                "use strict";
                return function(f, o, e, t) {
                    var m = {
                        features: null,
                        bind: function(e, t, n, i) {
                            var o = (i ? "remove" : "add") + "EventListener";
                            t = t.split(" ");
                            for (var r = 0; r < t.length; r++) t[r] && e[o](t[r], n, !1)
                        },
                        isArray: function(e) {
                            return e instanceof Array
                        },
                        createEl: function(e, t) {
                            var n = document.createElement(t || "div");
                            return e && (n.className = e), n
                        },
                        getScrollY: function() {
                            var e = window.pageYOffset;
                            return void 0 !== e ? e : document.documentElement.scrollTop
                        },
                        unbind: function(e, t, n) {
                            m.bind(e, t, n, !0)
                        },
                        removeClass: function(e, t) {
                            var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                            e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                        },
                        addClass: function(e, t) {
                            m.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
                        },
                        hasClass: function(e, t) {
                            return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                        },
                        getChildByClass: function(e, t) {
                            for (var n = e.firstChild; n;) {
                                if (m.hasClass(n, t)) return n;
                                n = n.nextSibling
                            }
                        },
                        arraySearch: function(e, t, n) {
                            for (var i = e.length; i--;)
                                if (e[i][n] === t) return i;
                            return -1
                        },
                        extend: function(e, t, n) {
                            for (var i in t)
                                if (t.hasOwnProperty(i)) {
                                    if (n && e.hasOwnProperty(i)) continue;
                                    e[i] = t[i]
                                }
                        },
                        easing: {
                            sine: {
                                out: function(e) {
                                    return Math.sin(e * (Math.PI / 2))
                                },
                                inOut: function(e) {
                                    return -(Math.cos(Math.PI * e) - 1) / 2
                                }
                            },
                            cubic: {
                                out: function(e) {
                                    return --e * e * e + 1
                                }
                            }
                        },
                        detectFeatures: function() {
                            if (m.features) return m.features;
                            var e = m.createEl(),
                                t = e.style,
                                n = "",
                                i = {};
                            if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                                var o = navigator.userAgent;
                                if (/iP(hone|od)/.test(navigator.platform)) {
                                    var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                                    r && 0 < r.length && 1 <= (r = parseInt(r[1], 10)) && r < 8 && (i.isOldIOSPhone = !0)
                                }
                                var s = o.match(/Android\s([0-9\.]*)/),
                                    a = s ? s[1] : 0;
                                1 <= (a = parseFloat(a)) && (a < 4.4 && (i.isOldAndroid = !0), i.androidVersion = a), i.isMobileOpera = /opera mini|opera mobi/i.test(o)
                            }
                            for (var l, c, u = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], f = 0; f < 4; f++) {
                                n = d[f];
                                for (var p = 0; p < 3; p++) l = u[p], c = n + (n ? l.charAt(0).toUpperCase() + l.slice(1) : l), !i[l] && c in t && (i[l] = c);
                                n && !i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
                            }
                            if (!i.raf) {
                                var h = 0;
                                i.raf = function(e) {
                                    var t = (new Date).getTime(),
                                        n = Math.max(0, 16 - (t - h)),
                                        i = window.setTimeout(function() {
                                            e(t + n)
                                        }, n);
                                    return h = t + n, i
                                }, i.caf = function(e) {
                                    clearTimeout(e)
                                }
                            }
                            return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, m.features = i
                        }
                    };
                    m.detectFeatures(), m.features.oldIE && (m.bind = function(e, t, n, i) {
                        t = t.split(" ");
                        for (var o, r = (i ? "detach" : "attach") + "Event", s = function() {
                                n.handleEvent.call(n)
                            }, a = 0; a < t.length; a++)
                            if (o = t[a])
                                if ("object" == typeof n && n.handleEvent) {
                                    if (i) {
                                        if (!n["oldIE" + o]) return !1
                                    } else n["oldIE" + o] = s;
                                    e[r]("on" + o, n["oldIE" + o])
                                } else e[r]("on" + o, n)
                    });
                    var p = this,
                        r = 25,
                        h = {
                            allowPanToNext: !0,
                            spacing: .12,
                            bgOpacity: 1,
                            mouseUsed: !1,
                            loop: !0,
                            pinchToClose: !0,
                            closeOnScroll: !0,
                            closeOnVerticalDrag: !0,
                            verticalDragRange: .75,
                            hideAnimationDuration: 333,
                            showAnimationDuration: 333,
                            showHideOpacity: !1,
                            focus: !0,
                            escKey: !0,
                            arrowKeys: !0,
                            mainScrollEndFriction: .35,
                            panEndFriction: .35,
                            isClickableElement: function(e) {
                                return "A" === e.tagName
                            },
                            getDoubleTapZoom: function(e, t) {
                                return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
                            },
                            maxSpreadZoom: 1.33,
                            modal: !0,
                            scaleMode: "fit"
                        };
                    m.extend(h, t);
                    var l, s, i, g, a, c, d, u, v, y, b, w, T, x, S, E, C, _, k, A, I, D, O, L, P, N, M, j, H, $, F, R, W, V, z, q, B, U, G, Y, K, n, Q, X, Z, J, ee, te, ne, ie, oe, re, se, ae, le, ce = {
                            x: 0,
                            y: 0
                        },
                        ue = {
                            x: 0,
                            y: 0
                        },
                        de = {
                            x: 0,
                            y: 0
                        },
                        fe = {},
                        pe = 0,
                        he = {},
                        me = {
                            x: 0,
                            y: 0
                        },
                        ge = 0,
                        ve = !0,
                        ye = [],
                        be = {},
                        we = !1,
                        Te = function(e, t) {
                            m.extend(p, t.publicMethods), ye.push(e)
                        },
                        xe = function(e) {
                            var t = Wt();
                            return t - 1 < e ? e - t : e < 0 ? t + e : e
                        },
                        Se = {},
                        Ee = function(e, t) {
                            return Se[e] || (Se[e] = []), Se[e].push(t)
                        },
                        Ce = function(e) {
                            var t = Se[e];
                            if (t) {
                                var n = Array.prototype.slice.call(arguments);
                                n.shift();
                                for (var i = 0; i < t.length; i++) t[i].apply(p, n)
                            }
                        },
                        _e = function() {
                            return (new Date).getTime()
                        },
                        ke = function(e) {
                            se = e, p.bg.style.opacity = e * h.bgOpacity
                        },
                        Ae = function(e, t, n, i, o) {
                            (!we || o && o !== p.currItem) && (i /= o ? o.fitRatio : p.currItem.fitRatio), e[D] = w + t + "px, " + n + "px" + T + " scale(" + i + ")"
                        },
                        Ie = function(e) {
                            te && (e && (y > p.currItem.fitRatio ? we || (Qt(p.currItem, !1, !0), we = !0) : we && (Qt(p.currItem), we = !1)), Ae(te, de.x, de.y, y))
                        },
                        De = function(e) {
                            e.container && Ae(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
                        },
                        Oe = function(e, t) {
                            t[D] = w + e + "px, 0px" + T
                        },
                        Le = function(e, t) {
                            if (!h.loop && t) {
                                var n = g + (me.x * pe - e) / me.x,
                                    i = Math.round(e - ut.x);
                                (n < 0 && 0 < i || n >= Wt() - 1 && i < 0) && (e = ut.x + i * h.mainScrollEndFriction)
                            }
                            ut.x = e, Oe(e, a)
                        },
                        Pe = function(e, t) {
                            var n = dt[e] - he[e];
                            return ue[e] + ce[e] + n - t / b * n
                        },
                        Ne = function(e, t) {
                            e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
                        },
                        Me = function(e) {
                            e.x = Math.round(e.x), e.y = Math.round(e.y)
                        },
                        je = null,
                        He = function() {
                            je && (m.unbind(document, "mousemove", He), m.addClass(f, "pswp--has_mouse"), h.mouseUsed = !0, Ce("mouseUsed")), je = setTimeout(function() {
                                je = null
                            }, 100)
                        },
                        $e = function(e, t) {
                            var n = Ut(p.currItem, fe, e);
                            return t && (ee = n), n
                        },
                        Fe = function(e) {
                            return e || (e = p.currItem), e.initialZoomLevel
                        },
                        Re = function(e) {
                            return e || (e = p.currItem), 0 < e.w ? h.maxSpreadZoom : 1
                        },
                        We = function(e, t, n, i) {
                            return i === p.currItem.initialZoomLevel ? (n[e] = p.currItem.initialPosition[e], !0) : (n[e] = Pe(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
                        },
                        Ve = function(e) {
                            var t = "";
                            h.escKey && 27 === e.keyCode ? t = "close" : h.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, p[t]()))
                        },
                        ze = function(e) {
                            e && (K || Y || ne || q) && (e.preventDefault(), e.stopPropagation())
                        },
                        qe = function() {
                            p.setScrollOffset(0, m.getScrollY())
                        },
                        Be = {},
                        Ue = 0,
                        Ge = function(e) {
                            Be[e] && (Be[e].raf && N(Be[e].raf), Ue--, delete Be[e])
                        },
                        Ye = function(e) {
                            Be[e] && Ge(e), Be[e] || (Ue++, Be[e] = {})
                        },
                        Ke = function() {
                            for (var e in Be) Be.hasOwnProperty(e) && Ge(e)
                        },
                        Qe = function(e, t, n, i, o, r, s) {
                            var a, l = _e();
                            Ye(e);
                            var c = function() {
                                if (Be[e]) {
                                    if (a = _e() - l, i <= a) return Ge(e), r(n), void(s && s());
                                    r((n - t) * o(a / i) + t), Be[e].raf = P(c)
                                }
                            };
                            c()
                        },
                        Xe = {
                            shout: Ce,
                            listen: Ee,
                            viewportSize: fe,
                            options: h,
                            isMainScrollAnimating: function() {
                                return ne
                            },
                            getZoomLevel: function() {
                                return y
                            },
                            getCurrentIndex: function() {
                                return g
                            },
                            isDragging: function() {
                                return U
                            },
                            isZooming: function() {
                                return Z
                            },
                            setScrollOffset: function(e, t) {
                                he.x = e, $ = he.y = t, Ce("updateScrollOffset", he)
                            },
                            applyZoomPan: function(e, t, n, i) {
                                de.x = t, de.y = n, y = e, Ie(i)
                            },
                            init: function() {
                                if (!l && !s) {
                                    var e;
                                    p.framework = m, p.template = f, p.bg = m.getChildByClass(f, "pswp__bg"), M = f.className, l = !0, F = m.detectFeatures(), P = F.raf, N = F.caf, D = F.transform, H = F.oldIE, p.scrollWrap = m.getChildByClass(f, "pswp__scroll-wrap"), p.container = m.getChildByClass(p.scrollWrap, "pswp__container"), a = p.container.style, p.itemHolders = E = [{
                                            el: p.container.children[0],
                                            wrap: 0,
                                            index: -1
                                        }, {
                                            el: p.container.children[1],
                                            wrap: 0,
                                            index: -1
                                        }, {
                                            el: p.container.children[2],
                                            wrap: 0,
                                            index: -1
                                        }], E[0].el.style.display = E[2].el.style.display = "none",
                                        function() {
                                            if (D) {
                                                var e = F.perspective && !L;
                                                w = "translate" + (e ? "3d(" : "(");
                                                T = F.perspective ? ", 0px)" : ")";
                                                return
                                            }
                                            D = "left", m.addClass(f, "pswp--ie"), Oe = function(e, t) {
                                                t.left = e + "px"
                                            }, De = function(e) {
                                                var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                                                    n = e.container.style,
                                                    i = t * e.w,
                                                    o = t * e.h;
                                                n.width = i + "px";
                                                n.height = o + "px";
                                                n.left = e.initialPosition.x + "px";
                                                n.top = e.initialPosition.y + "px"
                                            }, Ie = function() {
                                                if (te) {
                                                    var e = te,
                                                        t = p.currItem,
                                                        n = t.fitRatio > 1 ? 1 : t.fitRatio,
                                                        i = n * t.w,
                                                        o = n * t.h;
                                                    e.width = i + "px";
                                                    e.height = o + "px";
                                                    e.left = de.x + "px";
                                                    e.top = de.y + "px"
                                                }
                                            }
                                        }(), v = {
                                            resize: p.updateSize,
                                            scroll: qe,
                                            keydown: Ve,
                                            click: ze
                                        };
                                    var t = F.isOldIOSPhone || F.isOldAndroid || F.isMobileOpera;
                                    for (F.animationName && F.transform && !t || (h.showAnimationDuration = h.hideAnimationDuration = 0), e = 0; e < ye.length; e++) p["init" + ye[e]]();
                                    if (o) {
                                        var n = p.ui = new o(p, m);
                                        n.init()
                                    }
                                    Ce("firstUpdate"), g = g || h.index || 0, (isNaN(g) || g < 0 || g >= Wt()) && (g = 0), p.currItem = Rt(g), (F.isOldIOSPhone || F.isOldAndroid) && (ve = !1), f.setAttribute("aria-hidden", "false"), h.modal && (ve ? f.style.position = "fixed" : (f.style.position = "absolute", f.style.top = m.getScrollY() + "px")), void 0 === $ && (Ce("initialLayout"), $ = j = m.getScrollY());
                                    var i = "pswp--open ";
                                    for (h.mainClass && (i += h.mainClass + " "), h.showHideOpacity && (i += "pswp--animate_opacity "), i += L ? "pswp--touch" : "pswp--notouch", i += F.animationName ? " pswp--css_animation" : "", i += F.svg ? " pswp--svg" : "", m.addClass(f, i), p.updateSize(), c = -1, ge = null, e = 0; e < 3; e++) Oe((e + c) * me.x, E[e].el.style);
                                    H || m.bind(p.scrollWrap, u, p), Ee("initialZoomInEnd", function() {
                                        p.setContent(E[0], g - 1), p.setContent(E[2], g + 1), E[0].el.style.display = E[2].el.style.display = "block", h.focus && f.focus(),
                                            function() {
                                                if (m.bind(document, "keydown", p), F.transform) {
                                                    m.bind(p.scrollWrap, "click", p)
                                                }
                                                if (!h.mouseUsed) {
                                                    m.bind(document, "mousemove", He)
                                                }
                                                m.bind(window, "resize scroll", p), Ce("bindEvents")
                                            }()
                                    }), p.setContent(E[1], g), p.updateCurrItem(), Ce("afterInit"), ve || (x = setInterval(function() {
                                        Ue || U || Z || y !== p.currItem.initialZoomLevel || p.updateSize()
                                    }, 1e3)), m.addClass(f, "pswp--visible")
                                }
                            },
                            close: function() {
                                l && (s = !(l = !1), Ce("close"), function() {
                                    if (m.unbind(window, "resize", p), m.unbind(window, "scroll", v.scroll), m.unbind(document, "keydown", p), m.unbind(document, "mousemove", He), F.transform) {
                                        m.unbind(p.scrollWrap, "click", p)
                                    }
                                    if (U) {
                                        m.unbind(window, d, p)
                                    }
                                    Ce("unbindEvents")
                                }(), Vt(p.currItem, null, !0, p.destroy))
                            },
                            destroy: function() {
                                Ce("destroy"), jt && clearTimeout(jt), f.setAttribute("aria-hidden", "true"), f.className = M, x && clearInterval(x), m.unbind(p.scrollWrap, u, p), m.unbind(window, "scroll", p), ht(), Ke(), Se = null
                            },
                            panTo: function(e, t, n) {
                                n || (e > ee.min.x ? e = ee.min.x : e < ee.max.x && (e = ee.max.x), t > ee.min.y ? t = ee.min.y : t < ee.max.y && (t = ee.max.y)), de.x = e, de.y = t, Ie()
                            },
                            handleEvent: function(e) {
                                e = e || window.event, v[e.type] && v[e.type](e)
                            },
                            goTo: function(e) {
                                var t = (e = xe(e)) - g;
                                ge = t, g = e, p.currItem = Rt(g), pe -= t, Le(me.x * pe), Ke(), ne = !1, p.updateCurrItem()
                            },
                            next: function() {
                                p.goTo(g + 1)
                            },
                            prev: function() {
                                p.goTo(g - 1)
                            },
                            updateCurrZoomItem: function(e) {
                                if (e && Ce("beforeChange", 0), E[1].el.children.length) {
                                    var t = E[1].el.children[0];
                                    te = m.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                                } else te = null;
                                ee = p.currItem.bounds, b = y = p.currItem.initialZoomLevel, de.x = ee.center.x, de.y = ee.center.y, e && Ce("afterChange")
                            },
                            invalidateCurrItems: function() {
                                S = !0;
                                for (var e = 0; e < 3; e++) E[e].item && (E[e].item.needsUpdate = !0)
                            },
                            updateCurrItem: function(e) {
                                if (0 !== ge) {
                                    var t, n = Math.abs(ge);
                                    if (!(e && n < 2)) {
                                        p.currItem = Rt(g), we = !1, Ce("beforeChange", ge), 3 <= n && (c += ge + (0 < ge ? -3 : 3), n = 3);
                                        for (var i = 0; i < n; i++) 0 < ge ? (t = E.shift(), E[2] = t, Oe((++c + 2) * me.x, t.el.style), p.setContent(t, g - n + i + 1 + 1)) : (t = E.pop(), E.unshift(t), Oe(--c * me.x, t.el.style), p.setContent(t, g + n - i - 1 - 1));
                                        if (te && 1 === Math.abs(ge)) {
                                            var o = Rt(C);
                                            o.initialZoomLevel !== y && (Ut(o, fe), Qt(o), De(o))
                                        }
                                        ge = 0, p.updateCurrZoomItem(), C = g, Ce("afterChange")
                                    }
                                }
                            },
                            updateSize: function(e) {
                                if (!ve && h.modal) {
                                    var t = m.getScrollY();
                                    if ($ !== t && (f.style.top = t + "px", $ = t), !e && be.x === window.innerWidth && be.y === window.innerHeight) return;
                                    be.x = window.innerWidth, be.y = window.innerHeight, f.style.height = be.y + "px"
                                }
                                if (fe.x = p.scrollWrap.clientWidth, fe.y = p.scrollWrap.clientHeight, qe(), me.x = fe.x + Math.round(fe.x * h.spacing), me.y = fe.y, Le(me.x * pe), Ce("beforeResize"), void 0 !== c) {
                                    for (var n, i, o, r = 0; r < 3; r++) n = E[r], Oe((r + c) * me.x, n.el.style), o = g + r - 1, h.loop && 2 < Wt() && (o = xe(o)), (i = Rt(o)) && (S || i.needsUpdate || !i.bounds) ? (p.cleanSlide(i), p.setContent(n, o), 1 === r && (p.currItem = i, p.updateCurrZoomItem(!0)), i.needsUpdate = !1) : -1 === n.index && 0 <= o && p.setContent(n, o), i && i.container && (Ut(i, fe), Qt(i), De(i));
                                    S = !1
                                }
                                b = y = p.currItem.initialZoomLevel, (ee = p.currItem.bounds) && (de.x = ee.center.x, de.y = ee.center.y, Ie(!0)), Ce("resize")
                            },
                            zoomTo: function(t, e, n, i, o) {
                                e && (b = y, dt.x = Math.abs(e.x) - de.x, dt.y = Math.abs(e.y) - de.y, Ne(ue, de));
                                var r = $e(t, !1),
                                    s = {};
                                We("x", r, s, t), We("y", r, s, t);
                                var a = y,
                                    l = {
                                        x: de.x,
                                        y: de.y
                                    };
                                Me(s);
                                var c = function(e) {
                                    1 === e ? (y = t, de.x = s.x, de.y = s.y) : (y = (t - a) * e + a, de.x = (s.x - l.x) * e + l.x, de.y = (s.y - l.y) * e + l.y), o && o(e), Ie(1 === e)
                                };
                                n ? Qe("customZoomTo", 0, 1, n, i || m.easing.sine.inOut, c) : c(1)
                            }
                        },
                        Ze = {},
                        Je = {},
                        et = {},
                        tt = {},
                        nt = {},
                        it = [],
                        ot = {},
                        rt = [],
                        st = {},
                        at = 0,
                        lt = {
                            x: 0,
                            y: 0
                        },
                        ct = 0,
                        ut = {
                            x: 0,
                            y: 0
                        },
                        dt = {
                            x: 0,
                            y: 0
                        },
                        ft = {
                            x: 0,
                            y: 0
                        },
                        pt = function(e, t) {
                            return st.x = Math.abs(e.x - t.x), st.y = Math.abs(e.y - t.y), Math.sqrt(st.x * st.x + st.y * st.y)
                        },
                        ht = function() {
                            n && (N(n), n = null)
                        },
                        mt = function() {
                            U && (n = P(mt), It())
                        },
                        gt = function(e, t) {
                            return !(!e || e === document) && (!(e.getAttribute("class") && -1 < e.getAttribute("class").indexOf("pswp__scroll-wrap")) && (t(e) ? e : gt(e.parentNode, t)))
                        },
                        vt = {},
                        yt = function(e, t) {
                            return vt.prevent = !gt(e.target, h.isClickableElement), Ce("preventDragEvent", e, t, vt), vt.prevent
                        },
                        bt = function(e, t) {
                            return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
                        },
                        wt = function(e, t, n) {
                            n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
                        },
                        Tt = function() {
                            var e = de.y - p.currItem.initialPosition.y;
                            return 1 - Math.abs(e / (fe.y / 2))
                        },
                        xt = {},
                        St = {},
                        Et = [],
                        Ct = function(e) {
                            for (; 0 < Et.length;) Et.pop();
                            return O ? (le = 0, it.forEach(function(e) {
                                0 === le ? Et[0] = e : 1 === le && (Et[1] = e), le++
                            })) : -1 < e.type.indexOf("touch") ? e.touches && 0 < e.touches.length && (Et[0] = bt(e.touches[0], xt), 1 < e.touches.length && (Et[1] = bt(e.touches[1], St))) : (xt.x = e.pageX, xt.y = e.pageY, xt.id = "", Et[0] = xt), Et
                        },
                        _t = function(e, t) {
                            var n, i, o, r, s = de[e] + t[e],
                                a = 0 < t[e],
                                l = ut.x + t.x,
                                c = ut.x - ot.x;
                            if (n = s > ee.min[e] || s < ee.max[e] ? h.panEndFriction : 1, s = de[e] + t[e] * n, (h.allowPanToNext || y === p.currItem.initialZoomLevel) && (te ? "h" !== ie || "x" !== e || Y || (a ? (s > ee.min[e] && (n = h.panEndFriction, ee.min[e] - s, i = ee.min[e] - ue[e]), (i <= 0 || c < 0) && 1 < Wt() ? (r = l, c < 0 && l > ot.x && (r = ot.x)) : ee.min.x !== ee.max.x && (o = s)) : (s < ee.max[e] && (n = h.panEndFriction, s - ee.max[e], i = ue[e] - ee.max[e]), (i <= 0 || 0 < c) && 1 < Wt() ? (r = l, 0 < c && l < ot.x && (r = ot.x)) : ee.min.x !== ee.max.x && (o = s))) : r = l, "x" === e)) return void 0 !== r && (Le(r, !0), Q = r !== ot.x), ee.min.x !== ee.max.x && (void 0 !== o ? de.x = o : Q || (de.x += t.x * n)), void 0 !== r;
                            ne || Q || y > p.currItem.fitRatio && (de[e] += t[e] * n)
                        },
                        kt = function(e) {
                            if (!("mousedown" === e.type && 0 < e.button))
                                if (Ft) e.preventDefault();
                                else if (!B || "mousedown" !== e.type) {
                                if (yt(e, !0) && e.preventDefault(), Ce("pointerDown"), O) {
                                    var t = m.arraySearch(it, e.pointerId, "id");
                                    t < 0 && (t = it.length), it[t] = {
                                        x: e.pageX,
                                        y: e.pageY,
                                        id: e.pointerId
                                    }
                                }
                                var n = Ct(e),
                                    i = n.length;
                                X = null, Ke(), U && 1 !== i || (U = oe = !0, m.bind(window, d, p), z = ae = re = q = Q = K = G = Y = !1, ie = null, Ce("firstTouchStart", n), Ne(ue, de), ce.x = ce.y = 0, Ne(tt, n[0]), Ne(nt, tt), ot.x = me.x * pe, rt = [{
                                    x: tt.x,
                                    y: tt.y
                                }], W = R = _e(), $e(y, !0), ht(), mt()), !Z && 1 < i && !ne && !Q && (b = y, Z = G = !(Y = !1), ce.y = ce.x = 0, Ne(ue, de), Ne(Ze, n[0]), Ne(Je, n[1]), wt(Ze, Je, ft), dt.x = Math.abs(ft.x) - de.x, dt.y = Math.abs(ft.y) - de.y, J = pt(Ze, Je))
                            }
                        },
                        At = function(e) {
                            if (e.preventDefault(), O) {
                                var t = m.arraySearch(it, e.pointerId, "id");
                                if (-1 < t) {
                                    var n = it[t];
                                    n.x = e.pageX, n.y = e.pageY
                                }
                            }
                            if (U) {
                                var i = Ct(e);
                                if (ie || K || Z) X = i;
                                else if (ut.x !== me.x * pe) ie = "h";
                                else {
                                    var o = Math.abs(i[0].x - tt.x) - Math.abs(i[0].y - tt.y);
                                    10 <= Math.abs(o) && (ie = 0 < o ? "h" : "v", X = i)
                                }
                            }
                        },
                        It = function() {
                            if (X) {
                                var e = X.length;
                                if (0 !== e)
                                    if (Ne(Ze, X[0]), et.x = Ze.x - tt.x, et.y = Ze.y - tt.y, Z && 1 < e) {
                                        if (tt.x = Ze.x, tt.y = Ze.y, !et.x && !et.y && function(e, t) {
                                                return e.x === t.x && e.y === t.y
                                            }(X[1], Je)) return;
                                        Ne(Je, X[1]), Y || (Y = !0, Ce("zoomGestureStarted"));
                                        var t = pt(Ze, Je),
                                            n = Nt(t);
                                        n > p.currItem.initialZoomLevel + p.currItem.initialZoomLevel / 15 && (ae = !0);
                                        var i = 1,
                                            o = Fe(),
                                            r = Re();
                                        if (n < o)
                                            if (h.pinchToClose && !ae && b <= p.currItem.initialZoomLevel) {
                                                var s = o - n,
                                                    a = 1 - s / (o / 1.2);
                                                ke(a), Ce("onPinchClose", a), re = !0
                                            } else 1 < (i = (o - n) / o) && (i = 1), n = o - i * (o / 3);
                                        else r < n && (1 < (i = (n - r) / (6 * o)) && (i = 1), n = r + i * o);
                                        i < 0 && (i = 0), t, wt(Ze, Je, lt), ce.x += lt.x - ft.x, ce.y += lt.y - ft.y, Ne(ft, lt), de.x = Pe("x", n), de.y = Pe("y", n), z = y < n, y = n, Ie()
                                    } else {
                                        if (!ie) return;
                                        if (oe && (oe = !1, 10 <= Math.abs(et.x) && (et.x -= X[0].x - nt.x), 10 <= Math.abs(et.y) && (et.y -= X[0].y - nt.y)), tt.x = Ze.x, tt.y = Ze.y, 0 === et.x && 0 === et.y) return;
                                        if ("v" === ie && h.closeOnVerticalDrag && "fit" === h.scaleMode && y === p.currItem.initialZoomLevel) {
                                            ce.y += et.y, de.y += et.y;
                                            var l = Tt();
                                            return q = !0, Ce("onVerticalDrag", l), ke(l), void Ie()
                                        }! function(e, t, n) {
                                            if (e - W > 50) {
                                                var i = rt.length > 2 ? rt.shift() : {};
                                                i.x = t;
                                                i.y = n;
                                                rt.push(i);
                                                W = e
                                            }
                                        }(_e(), Ze.x, Ze.y), K = !0, ee = p.currItem.bounds;
                                        var c = _t("x", et);
                                        c || (_t("y", et), Me(de), Ie())
                                    }
                            }
                        },
                        Dt = function(e) {
                            if (F.isOldAndroid) {
                                if (B && "mouseup" === e.type) return; - 1 < e.type.indexOf("touch") && (clearTimeout(B), B = setTimeout(function() {
                                    B = 0
                                }, 600))
                            }
                            var t;
                            if (Ce("pointerUp"), yt(e, !1) && e.preventDefault(), O) {
                                var n = m.arraySearch(it, e.pointerId, "id");
                                if (-1 < n)
                                    if (t = it.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
                                    else {
                                        t.type = {
                                            4: "mouse",
                                            2: "touch",
                                            3: "pen"
                                        }[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                                    }
                            }
                            var i, o = Ct(e),
                                r = o.length;
                            if ("mouseup" === e.type && (r = 0), 2 === r) return !(X = null);
                            1 === r && Ne(nt, o[0]), 0 !== r || ie || ne || (t || ("mouseup" === e.type ? t = {
                                x: e.pageX,
                                y: e.pageY,
                                type: "mouse"
                            } : e.changedTouches && e.changedTouches[0] && (t = {
                                x: e.changedTouches[0].pageX,
                                y: e.changedTouches[0].pageY,
                                type: "touch"
                            })), Ce("touchRelease", e, t));
                            var s = -1;
                            if (0 === r && (U = !1, m.unbind(window, d, p), ht(), Z ? s = 0 : -1 !== ct && (s = _e() - ct)), ct = 1 === r ? _e() : -1, i = -1 !== s && s < 150 ? "zoom" : "swipe", Z && r < 2 && (Z = !1, 1 === r && (i = "zoomPointerUp"), Ce("zoomGestureEnded")), X = null, K || Y || ne || q)
                                if (Ke(), V || (V = Ot()), V.calculateSwipeSpeed("x"), q) {
                                    var a = Tt();
                                    if (a < h.verticalDragRange) p.close();
                                    else {
                                        var l = de.y,
                                            c = se;
                                        Qe("verticalDrag", 0, 1, 300, m.easing.cubic.out, function(e) {
                                            de.y = (p.currItem.initialPosition.y - l) * e + l, ke((1 - c) * e + c), Ie()
                                        }), Ce("onVerticalDrag", 1)
                                    }
                                } else {
                                    if ((Q || ne) && 0 === r) {
                                        var u = Pt(i, V);
                                        if (u) return;
                                        i = "zoomPointerUp"
                                    }
                                    ne || ("swipe" === i ? !Q && y > p.currItem.fitRatio && Lt(V) : Mt())
                                }
                        },
                        Ot = function() {
                            var t, n, i = {
                                lastFlickOffset: {},
                                lastFlickDist: {},
                                lastFlickSpeed: {},
                                slowDownRatio: {},
                                slowDownRatioReverse: {},
                                speedDecelerationRatio: {},
                                speedDecelerationRatioAbs: {},
                                distanceOffset: {},
                                backAnimDestination: {},
                                backAnimStarted: {},
                                calculateSwipeSpeed: function(e) {
                                    n = 1 < rt.length ? (t = _e() - W + 50, rt[rt.length - 2][e]) : (t = _e() - R, nt[e]), i.lastFlickOffset[e] = tt[e] - n, i.lastFlickDist[e] = Math.abs(i.lastFlickOffset[e]), 20 < i.lastFlickDist[e] ? i.lastFlickSpeed[e] = i.lastFlickOffset[e] / t : i.lastFlickSpeed[e] = 0, Math.abs(i.lastFlickSpeed[e]) < .1 && (i.lastFlickSpeed[e] = 0), i.slowDownRatio[e] = .95, i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e], i.speedDecelerationRatio[e] = 1
                                },
                                calculateOverBoundsAnimOffset: function(t, e) {
                                    i.backAnimStarted[t] || (de[t] > ee.min[t] ? i.backAnimDestination[t] = ee.min[t] : de[t] < ee.max[t] && (i.backAnimDestination[t] = ee.max[t]), void 0 !== i.backAnimDestination[t] && (i.slowDownRatio[t] = .7, i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t], i.speedDecelerationRatioAbs[t] < .05 && (i.lastFlickSpeed[t] = 0, i.backAnimStarted[t] = !0, Qe("bounceZoomPan" + t, de[t], i.backAnimDestination[t], e || 300, m.easing.sine.out, function(e) {
                                        de[t] = e, Ie()
                                    }))))
                                },
                                calculateAnimOffset: function(e) {
                                    i.backAnimStarted[e] || (i.speedDecelerationRatio[e] = i.speedDecelerationRatio[e] * (i.slowDownRatio[e] + i.slowDownRatioReverse[e] - i.slowDownRatioReverse[e] * i.timeDiff / 10), i.speedDecelerationRatioAbs[e] = Math.abs(i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]), i.distanceOffset[e] = i.lastFlickSpeed[e] * i.speedDecelerationRatio[e] * i.timeDiff, de[e] += i.distanceOffset[e])
                                },
                                panAnimLoop: function() {
                                    if (Be.zoomPan && (Be.zoomPan.raf = P(i.panAnimLoop), i.now = _e(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), Ie(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05)) return de.x = Math.round(de.x), de.y = Math.round(de.y), Ie(), void Ge("zoomPan")
                                }
                            };
                            return i
                        },
                        Lt = function(e) {
                            if (e.calculateSwipeSpeed("y"), ee = p.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05) return e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0;
                            Ye("zoomPan"), e.lastNow = _e(), e.panAnimLoop()
                        },
                        Pt = function(e, t) {
                            var n, i, o;
                            if (ne || (at = g), "swipe" === e) {
                                var r = tt.x - nt.x,
                                    s = t.lastFlickDist.x < 10;
                                30 < r && (s || 20 < t.lastFlickOffset.x) ? i = -1 : r < -30 && (s || t.lastFlickOffset.x < -20) && (i = 1)
                            }
                            i && ((g += i) < 0 ? (g = h.loop ? Wt() - 1 : 0, o = !0) : g >= Wt() && (g = h.loop ? 0 : Wt() - 1, o = !0), o && !h.loop || (ge += i, pe -= i, n = !0));
                            var a, l = me.x * pe,
                                c = Math.abs(l - ut.x);
                            return a = n || l > ut.x == 0 < t.lastFlickSpeed.x ? (a = 0 < Math.abs(t.lastFlickSpeed.x) ? c / Math.abs(t.lastFlickSpeed.x) : 333, a = Math.min(a, 400), Math.max(a, 250)) : 333, at === g && (n = !1), ne = !0, Ce("mainScrollAnimStart"), Qe("mainScroll", ut.x, l, a, m.easing.cubic.out, Le, function() {
                                Ke(), ne = !1, at = -1, !n && at === g || p.updateCurrItem(), Ce("mainScrollAnimComplete")
                            }), n && p.updateCurrItem(!0), n
                        },
                        Nt = function(e) {
                            return 1 / J * e * b
                        },
                        Mt = function() {
                            var e = y,
                                t = Fe(),
                                n = Re();
                            y < t ? e = t : n < y && (e = n);
                            var i, o = se;
                            return re && !z && !ae && y < t ? p.close() : (re && (i = function(e) {
                                ke((1 - o) * e + o)
                            }), p.zoomTo(e, 0, 200, m.easing.cubic.out, i)), !0
                        };
                    Te("Gestures", {
                        publicMethods: {
                            initGestures: function() {
                                var e = function(e, t, n, i, o) {
                                    _ = e + t, k = e + n, A = e + i, I = o ? e + o : ""
                                };
                                (O = F.pointerEvent) && F.touch && (F.touch = !1), O ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : F.touch ? (e("touch", "start", "move", "end", "cancel"), L = !0) : e("mouse", "down", "move", "up"), d = k + " " + A + " " + I, u = _, O && !L && (L = 1 < navigator.maxTouchPoints || 1 < navigator.msMaxTouchPoints), p.likelyTouchDevice = L, v[_] = kt, v[k] = At, v[A] = Dt, I && (v[I] = v[A]), F.touch && (u += " mousedown", d += " mousemove mouseup", v.mousedown = v[_], v.mousemove = v[k], v.mouseup = v[A]), L || (h.allowPanToNext = !1)
                            }
                        }
                    });
                    var jt, Ht, $t, Ft, Rt, Wt, Vt = function(a, e, l, t) {
                            var c;
                            jt && clearTimeout(jt), $t = Ft = !0, a.initialLayout ? (c = a.initialLayout, a.initialLayout = null) : c = h.getThumbBoundsFn && h.getThumbBoundsFn(g);
                            var u = l ? h.hideAnimationDuration : h.showAnimationDuration,
                                d = function() {
                                    Ge("initialZoom"), l ? (p.template.removeAttribute("style"), p.bg.removeAttribute("style")) : (ke(1), e && (e.style.display = "block"), m.addClass(f, "pswp--animated-in"), Ce("initialZoom" + (l ? "OutEnd" : "InEnd"))), t && t(), Ft = !1
                                };
                            if (!u || !c || void 0 === c.x) return Ce("initialZoom" + (l ? "Out" : "In")), y = a.initialZoomLevel, Ne(de, a.initialPosition), Ie(), f.style.opacity = l ? 0 : 1, ke(1), void(u ? setTimeout(function() {
                                d()
                            }, u) : d());
                            ! function() {
                                var r = i,
                                    s = !p.currItem.src || p.currItem.loadError || h.showHideOpacity;
                                if (a.miniImg) {
                                    a.miniImg.style.webkitBackfaceVisibility = "hidden"
                                }
                                if (!l) {
                                    y = c.w / a.w;
                                    de.x = c.x;
                                    de.y = c.y - j;
                                    p[s ? "template" : "bg"].style.opacity = .001;
                                    Ie()
                                }
                                if (Ye("initialZoom"), l && !r) {
                                    m.removeClass(f, "pswp--animated-in")
                                }
                                if (s) {
                                    if (l) {
                                        m[(r ? "remove" : "add") + "Class"](f, "pswp--animate_opacity")
                                    } else {
                                        setTimeout(function() {
                                            m.addClass(f, "pswp--animate_opacity")
                                        }, 30)
                                    }
                                }
                                jt = setTimeout(function() {
                                    Ce("initialZoom" + (l ? "Out" : "In"));
                                    if (!l) {
                                        y = a.initialZoomLevel;
                                        Ne(de, a.initialPosition);
                                        Ie();
                                        ke(1);
                                        if (s) {
                                            f.style.opacity = 1
                                        } else {
                                            ke(1)
                                        }
                                        jt = setTimeout(d, u + 20)
                                    } else {
                                        var t = c.w / a.w,
                                            n = {
                                                x: de.x,
                                                y: de.y
                                            },
                                            i = y,
                                            o = se,
                                            e = function(e) {
                                                if (e === 1) {
                                                    y = t;
                                                    de.x = c.x;
                                                    de.y = c.y - $
                                                } else {
                                                    y = (t - i) * e + i;
                                                    de.x = (c.x - n.x) * e + n.x;
                                                    de.y = (c.y - $ - n.y) * e + n.y
                                                }
                                                Ie();
                                                if (s) {
                                                    f.style.opacity = 1 - e
                                                } else {
                                                    ke(o - e * o)
                                                }
                                            };
                                        if (r) {
                                            Qe("initialZoom", 0, 1, u, m.easing.cubic.out, e, d)
                                        } else {
                                            e(1);
                                            jt = setTimeout(d, u + 20)
                                        }
                                    }
                                }, l ? 25 : 90)
                            }()
                        },
                        zt = {},
                        qt = [],
                        Bt = {
                            index: 0,
                            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                            forceProgressiveLoading: !1,
                            preload: [1, 1],
                            getNumItemsFn: function() {
                                return Ht.length
                            }
                        },
                        Ut = function(e, t, n) {
                            if (!e.src || e.loadError) return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = {
                                center: {
                                    x: 0,
                                    y: 0
                                },
                                max: {
                                    x: 0,
                                    y: 0
                                },
                                min: {
                                    x: 0,
                                    y: 0
                                }
                            }, e.initialPosition = e.bounds.center, e.bounds;
                            var i = !n;
                            if (i && (e.vGap || (e.vGap = {
                                    top: 0,
                                    bottom: 0
                                }), Ce("parseVerticalMargin", e)), zt.x = t.x, zt.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                                var o = zt.x / e.w,
                                    r = zt.y / e.h;
                                e.fitRatio = o < r ? o : r;
                                var s = h.scaleMode;
                                "orig" === s ? n = 1 : "fit" === s && (n = e.fitRatio), 1 < n && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = {
                                    center: {
                                        x: 0,
                                        y: 0
                                    },
                                    max: {
                                        x: 0,
                                        y: 0
                                    },
                                    min: {
                                        x: 0,
                                        y: 0
                                    }
                                })
                            }
                            return n ? (function(e, t, n) {
                                var i = e.bounds;
                                i.center.x = Math.round((zt.x - t) / 2), i.center.y = Math.round((zt.y - n) / 2) + e.vGap.top, i.max.x = t > zt.x ? Math.round(zt.x - t) : i.center.x, i.max.y = n > zt.y ? Math.round(zt.y - n) + e.vGap.top : i.center.y, i.min.x = t > zt.x ? 0 : i.center.x, i.min.y = n > zt.y ? e.vGap.top : i.center.y
                            }(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds) : void 0
                        },
                        Gt = function(e, t, n, i, o, r) {
                            t.loadError || i && (t.imageAppended = !0, Qt(t, i, t === p.currItem && we), n.appendChild(i), r && setTimeout(function() {
                                t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
                            }, 500))
                        },
                        Yt = function(e) {
                            e.loading = !0, e.loaded = !1;
                            var t = e.img = m.createEl("pswp__img", "img"),
                                n = function() {
                                    e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
                                };
                            return t.onload = n, t.onerror = function() {
                                e.loadError = !0, n()
                            }, t.src = e.src, t
                        },
                        Kt = function(e, t) {
                            if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML = h.errorMsg.replace("%url%", e.src), !0
                        },
                        Qt = function(e, t, n) {
                            if (e.src) {
                                t || (t = e.container.lastChild);
                                var i = n ? e.w : Math.round(e.w * e.fitRatio),
                                    o = n ? e.h : Math.round(e.h * e.fitRatio);
                                e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = o + "px"), t.style.width = i + "px", t.style.height = o + "px"
                            }
                        },
                        Xt = function() {
                            if (qt.length) {
                                for (var e, t = 0; t < qt.length; t++)(e = qt[t]).holder.index === e.index && Gt(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
                                qt = []
                            }
                        };
                    Te("Controller", {
                        publicMethods: {
                            lazyLoadItem: function(e) {
                                e = xe(e);
                                var t = Rt(e);
                                t && (!t.loaded && !t.loading || S) && (Ce("gettingData", e, t), t.src && Yt(t))
                            },
                            initController: function() {
                                m.extend(h, Bt, !0), p.items = Ht = e, Rt = p.getItemAt, Wt = h.getNumItemsFn, h.loop, Wt() < 3 && (h.loop = !1), Ee("beforeChange", function(e) {
                                    var t, n = h.preload,
                                        i = null === e || 0 <= e,
                                        o = Math.min(n[0], Wt()),
                                        r = Math.min(n[1], Wt());
                                    for (t = 1; t <= (i ? r : o); t++) p.lazyLoadItem(g + t);
                                    for (t = 1; t <= (i ? o : r); t++) p.lazyLoadItem(g - t)
                                }), Ee("initialLayout", function() {
                                    p.currItem.initialLayout = h.getThumbBoundsFn && h.getThumbBoundsFn(g)
                                }), Ee("mainScrollAnimComplete", Xt), Ee("initialZoomInEnd", Xt), Ee("destroy", function() {
                                    for (var e, t = 0; t < Ht.length; t++)(e = Ht[t]).container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                                    qt = null
                                })
                            },
                            getItemAt: function(e) {
                                return 0 <= e && (void 0 !== Ht[e] && Ht[e])
                            },
                            allowProgressiveImg: function() {
                                return h.forceProgressiveLoading || !L || h.mouseUsed || 1200 < screen.width
                            },
                            setContent: function(t, n) {
                                h.loop && (n = xe(n));
                                var e = p.getItemAt(t.index);
                                e && (e.container = null);
                                var i, o = p.getItemAt(n);
                                if (o) {
                                    Ce("gettingData", n, o), t.index = n;
                                    var r = (t.item = o).container = m.createEl("pswp__zoom-wrap");
                                    if (!o.src && o.html && (o.html.tagName ? r.appendChild(o.html) : r.innerHTML = o.html), Kt(o), Ut(o, fe), !o.src || o.loadError || o.loaded) o.src && !o.loadError && ((i = m.createEl("pswp__img", "img")).style.opacity = 1, i.src = o.src, Qt(o, i), Gt(n, o, r, i, !0));
                                    else {
                                        if (o.loadComplete = function(e) {
                                                if (l) {
                                                    if (t && t.index === n) {
                                                        if (Kt(e, !0)) return e.loadComplete = e.img = null, Ut(e, fe), De(e), void(t.index === g && p.updateCurrZoomItem());
                                                        e.imageAppended ? !Ft && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null) : F.transform && (ne || Ft) ? qt.push({
                                                            item: e,
                                                            baseDiv: r,
                                                            img: e.img,
                                                            index: n,
                                                            holder: t,
                                                            clearPlaceholder: !0
                                                        }) : Gt(n, e, r, e.img, ne || Ft, !0)
                                                    }
                                                    e.loadComplete = null, e.img = null, Ce("imageLoadComplete", n, e)
                                                }
                                            }, m.features.transform) {
                                            var s = "pswp__img pswp__img--placeholder";
                                            s += o.msrc ? "" : " pswp__img--placeholder--blank";
                                            var a = m.createEl(s, o.msrc ? "img" : "");
                                            o.msrc && (a.src = o.msrc), Qt(o, a), r.appendChild(a), o.placeholder = a
                                        }
                                        o.loading || Yt(o), p.allowProgressiveImg() && (!$t && F.transform ? qt.push({
                                            item: o,
                                            baseDiv: r,
                                            img: o.img,
                                            index: n,
                                            holder: t
                                        }) : Gt(n, o, r, o.img, !0, !0))
                                    }
                                    $t || n !== g ? De(o) : (te = r.style, Vt(o, i || o.img)), t.el.innerHTML = "", t.el.appendChild(r)
                                } else t.el.innerHTML = ""
                            },
                            cleanSlide: function(e) {
                                e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                            }
                        }
                    });
                    var Zt, Jt, en = {},
                        tn = function(e, t, n) {
                            var i = document.createEvent("CustomEvent"),
                                o = {
                                    origEvent: e,
                                    target: e.target,
                                    releasePoint: t,
                                    pointerType: n || "touch"
                                };
                            i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
                        };
                    Te("Tap", {
                        publicMethods: {
                            initTap: function() {
                                Ee("firstTouchStart", p.onTapStart), Ee("touchRelease", p.onTapRelease), Ee("destroy", function() {
                                    en = {}, Zt = null
                                })
                            },
                            onTapStart: function(e) {
                                1 < e.length && (clearTimeout(Zt), Zt = null)
                            },
                            onTapRelease: function(e, t) {
                                if (t && !K && !G && !Ue) {
                                    var n = t;
                                    if (Zt && (clearTimeout(Zt), Zt = null, function(e, t) {
                                            return Math.abs(e.x - t.x) < r && Math.abs(e.y - t.y) < r
                                        }(n, en))) return void Ce("doubleTap", n);
                                    if ("mouse" === t.type) return void tn(e, t, "mouse");
                                    var i = e.target.tagName.toUpperCase();
                                    if ("BUTTON" === i || m.hasClass(e.target, "pswp__single-tap")) return void tn(e, t);
                                    Ne(en, n), Zt = setTimeout(function() {
                                        tn(e, t), Zt = null
                                    }, 300)
                                }
                            }
                        }
                    }), Te("DesktopZoom", {
                        publicMethods: {
                            initDesktopZoom: function() {
                                H || (L ? Ee("mouseUsed", function() {
                                    p.setupDesktopZoom()
                                }) : p.setupDesktopZoom(!0))
                            },
                            setupDesktopZoom: function(e) {
                                Jt = {};
                                var t = "wheel mousewheel DOMMouseScroll";
                                Ee("bindEvents", function() {
                                    m.bind(f, t, p.handleMouseWheel)
                                }), Ee("unbindEvents", function() {
                                    Jt && m.unbind(f, t, p.handleMouseWheel)
                                }), p.mouseZoomedIn = !1;
                                var n, i = function() {
                                        p.mouseZoomedIn && (m.removeClass(f, "pswp--zoomed-in"), p.mouseZoomedIn = !1), y < 1 ? m.addClass(f, "pswp--zoom-allowed") : m.removeClass(f, "pswp--zoom-allowed"), o()
                                    },
                                    o = function() {
                                        n && (m.removeClass(f, "pswp--dragging"), n = !1)
                                    };
                                Ee("resize", i), Ee("afterChange", i), Ee("pointerDown", function() {
                                    p.mouseZoomedIn && (n = !0, m.addClass(f, "pswp--dragging"))
                                }), Ee("pointerUp", o), e || i()
                            },
                            handleMouseWheel: function(e) {
                                if (y <= p.currItem.fitRatio) return h.modal && (!h.closeOnScroll || Ue || U ? e.preventDefault() : D && 2 < Math.abs(e.deltaY) && (i = !0, p.close())), !0;
                                if (e.stopPropagation(), Jt.x = 0, "deltaX" in e) 1 === e.deltaMode ? (Jt.x = 18 * e.deltaX, Jt.y = 18 * e.deltaY) : (Jt.x = e.deltaX, Jt.y = e.deltaY);
                                else if ("wheelDelta" in e) e.wheelDeltaX && (Jt.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? Jt.y = -.16 * e.wheelDeltaY : Jt.y = -.16 * e.wheelDelta;
                                else {
                                    if (!("detail" in e)) return;
                                    Jt.y = e.detail
                                }
                                $e(y, !0);
                                var t = de.x - Jt.x,
                                    n = de.y - Jt.y;
                                (h.modal || t <= ee.min.x && t >= ee.max.x && n <= ee.min.y && n >= ee.max.y) && e.preventDefault(), p.panTo(t, n)
                            },
                            toggleDesktopZoom: function(e) {
                                e = e || {
                                    x: fe.x / 2 + he.x,
                                    y: fe.y / 2 + he.y
                                };
                                var t = h.getDoubleTapZoom(!0, p.currItem),
                                    n = y === t;
                                p.mouseZoomedIn = !n, p.zoomTo(n ? p.currItem.initialZoomLevel : t, e, 333), m[(n ? "remove" : "add") + "Class"](f, "pswp--zoomed-in")
                            }
                        }
                    });
                    var nn, on, rn, sn, an, ln, cn, un, dn, fn, pn, hn, mn = {
                            history: !0,
                            galleryUID: 1
                        },
                        gn = function() {
                            return pn.hash.substring(1)
                        },
                        vn = function() {
                            nn && clearTimeout(nn), rn && clearTimeout(rn)
                        },
                        yn = function() {
                            var e = gn(),
                                t = {};
                            if (e.length < 5) return t;
                            var n, i = e.split("&");
                            for (n = 0; n < i.length; n++)
                                if (i[n]) {
                                    var o = i[n].split("=");
                                    o.length < 2 || (t[o[0]] = o[1])
                                }
                            if (h.galleryPIDs) {
                                var r = t.pid;
                                for (t.pid = 0, n = 0; n < Ht.length; n++)
                                    if (Ht[n].pid === r) {
                                        t.pid = n;
                                        break
                                    }
                            } else t.pid = parseInt(t.pid, 10) - 1;
                            return t.pid < 0 && (t.pid = 0), t
                        },
                        bn = function() {
                            if (rn && clearTimeout(rn), Ue || U) rn = setTimeout(bn, 500);
                            else {
                                sn ? clearTimeout(on) : sn = !0;
                                var e = g + 1,
                                    t = Rt(g);
                                t.hasOwnProperty("pid") && (e = t.pid);
                                var n = cn + "&gid=" + h.galleryUID + "&pid=" + e;
                                un || -1 === pn.hash.indexOf(n) && (fn = !0);
                                var i = pn.href.split("#")[0] + "#" + n;
                                hn ? "#" + n !== window.location.hash && history[un ? "replaceState" : "pushState"]("", document.title, i) : un ? pn.replace(i) : pn.hash = n, un = !0, on = setTimeout(function() {
                                    sn = !1
                                }, 60)
                            }
                        };
                    Te("History", {
                        publicMethods: {
                            initHistory: function() {
                                if (m.extend(h, mn, !0), h.history) {
                                    pn = window.location, un = dn = fn = !1, cn = gn(), hn = "pushState" in history, -1 < cn.indexOf("gid=") && (cn = (cn = cn.split("&gid=")[0]).split("?gid=")[0]), Ee("afterChange", p.updateURL), Ee("unbindEvents", function() {
                                        m.unbind(window, "hashchange", p.onHashChange)
                                    });
                                    var e = function() {
                                        ln = !0, dn || (fn ? history.back() : cn ? pn.hash = cn : hn ? history.pushState("", document.title, pn.pathname + pn.search) : pn.hash = ""), vn()
                                    };
                                    Ee("unbindEvents", function() {
                                        i && e()
                                    }), Ee("destroy", function() {
                                        ln || e()
                                    }), Ee("firstUpdate", function() {
                                        g = yn().pid
                                    });
                                    var t = cn.indexOf("pid="); - 1 < t && "&" === (cn = cn.substring(0, t)).slice(-1) && (cn = cn.slice(0, -1)), setTimeout(function() {
                                        l && m.bind(window, "hashchange", p.onHashChange)
                                    }, 40)
                                }
                            },
                            onHashChange: function() {
                                if (gn() === cn) return dn = !0, void p.close();
                                sn || (an = !0, p.goTo(yn().pid), an = !1)
                            },
                            updateURL: function() {
                                vn(), an || (un ? nn = setTimeout(bn, 800) : bn())
                            }
                        }
                    }), m.extend(p, Xe)
                }
            }) ? o.call(n, i, n, t) : o) || (t.exports = r)
        }, {}],
        2: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.PhotoSwipe = n.default = void 0;
            var p = i(e("photoswipe")),
                h = i(e("./libs/photoswipe-ui-default"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function o(c) {
                var s = c('<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title="Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>').appendTo("body"),
                    l = 1;

                function u(e) {
                    var t = a(e).slideSelector;
                    return e.find(t).map(function(e) {
                        var t = c(this).data("index", e),
                            n = this.tagName.toUpperCase();
                        return "A" === n ? this.hash ? t = c(this.hash) : (t = t.find("img").eq(0)).data("original-src", this.href) : "IMG" !== n && (t = t.find("img")), t[0]
                    })
                }

                function t(e, t) {
                    var n = c.Deferred(),
                        i = t.data("original-src-" + e),
                        o = decodeURI(t.data("original-src") || t.attr("src")).match(/(\d+)[*×x](\d+)/);
                    return i ? n.resolve(i) : null !== o ? n.resolve(o["width" === e ? 1 : 2]) : c("<img>").on("load", function() {
                        n.resolve(this[e])
                    }).attr("src", t.attr("src")), n.promise()
                }

                function e(e) {
                    return c.when(function(e) {
                        return t("width", e)
                    }(e), function(e) {
                        return t("height", e)
                    }(e))
                }

                function i() {
                    var s = c(this),
                        a = s.data("original-src") || s.attr("src"),
                        l = c.Deferred();
                    return "IMG" !== this.tagName ? l.resolve({
                        html: this.innerHTML
                    }) : e(s).done(function(e, t) {
                        var n, i, o, r = s.attr("src");
                        n = (i = s.data("caption-class")) ? function e(t, n) {
                            var i, o = t.parent();
                            if (o.length) return (i = o.find(n)).length ? i.html() : e(o, n)
                        }(s, "." + i) : (o = s.closest("figure").find("figcaption")) && o.length ? o.html() : s.attr("alt"), l.resolve({
                            w: e,
                            h: t,
                            src: a,
                            msrc: r,
                            title: n
                        })
                    }), l.promise()
                }

                function d(e) {
                    var t = e.map(i).get(),
                        n = c.Deferred();
                    return c.when.apply(c, t).done(function() {
                        var e = Array.prototype.slice.call(arguments);
                        n.resolve(e)
                    }), n.promise()
                }

                function a(e) {
                    return e.data("photoswipeOptions")
                }

                function r(e, t, n, i) {
                    var o = c.extend(a(t).globalOptions, {
                            index: e,
                            getThumbBoundsFn: function(o) {
                                return function(e) {
                                    var t = o.eq(e),
                                        n = t.offset(),
                                        i = t[0].width;
                                    return {
                                        x: n.left,
                                        y: n.top,
                                        w: i
                                    }
                                }
                            }(n),
                            galleryUID: t.data("pswp-uid")
                        }),
                        r = new p.default(s[0], h.default, i, o);
                    c.each(a(t).events, function(e, t) {
                        r.listen(e, t)
                    }), r.init()
                }

                function n(e) {
                    var t, n, i, o = function() {
                        var e = window.location.hash.substring(1),
                            t = {};
                        if (e.length < 5) return t;
                        for (var n = e.split("&"), i = 0; i < n.length; i++)
                            if (n[i]) {
                                var o = n[i].split("=");
                                o.length < 2 || (t[o[0]] = parseInt(o[1], 10))
                            }
                        return t
                    }();
                    o.pid && o.gid && (t = e[o.gid - 1], n = o.pid - 1, d(i = u(t)).done(function(e) {
                        r(n, t, i, e)
                    }))
                }

                function f(t, n, i) {
                    t.on("click.photoswipe", a(t).slideSelector, function(e) {
                        e.preventDefault(), r(c(this).data("index"), t, n, i)
                    })
                }
                c.fn.photoSwipe = function() {
                    var i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "img",
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                        r = c.extend({
                            bgOpacity: .973,
                            showHideOpacity: !0
                        }, e),
                        s = [],
                        a = "update" === i;
                    return this.each(function() {
                        if (a) ! function(t) {
                            var n = u(t);
                            d(n).done(function(e) {
                                ! function(e) {
                                    e.off("click.photoswipe")
                                }(t), f(t, n, e)
                            })
                        }(c(this));
                        else {
                            var t = c(this).data("photoswipeOptions", {
                                    slideSelector: i,
                                    globalOptions: r,
                                    events: o
                                }),
                                n = u(t),
                                e = d(n);
                            ! function(e) {
                                e.data("pswp-uid") || e.data("pswp-uid", l++)
                            }(t), s.push(t), e.done(function(e) {
                                f(t, n, e)
                            })
                        }
                    }), a || n(s), this
                }, c.fn.photoSwipe.PhotoSwipe = p.default
            }
            o(jQuery), n.default = o, n.PhotoSwipe = p.default
        }, {
            "./libs/photoswipe-ui-default": 3,
            photoswipe: 1
        }],
        3: [function(e, t, n) {
            "use strict";
            "function" == typeof Symbol && Symbol.iterator;
            /*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
             * http://photoswipe.com
             * Copyright (c) 2015 Dmitry Semenov; */
            void 0 === (r = "function" == typeof(o = function() {
                return function(o, l) {
                    var t, c, r, s, n, i, a, u, d, e, f, p, h, m, g, v, y, b, w = this,
                        T = !1,
                        x = !0,
                        S = !0,
                        E = {
                            barsSize: {
                                top: 44,
                                bottom: "auto"
                            },
                            closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                            timeToIdle: 4e3,
                            timeToIdleOutside: 1e3,
                            loadingIndicatorDelay: 1e3,
                            addCaptionHTMLFn: function(e, t) {
                                return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                            },
                            closeEl: !0,
                            captionEl: !0,
                            fullscreenEl: !0,
                            zoomEl: !0,
                            shareEl: !0,
                            counterEl: !0,
                            arrowEl: !0,
                            preloaderEl: !0,
                            tapToClose: !1,
                            tapToToggleControls: !0,
                            clickToCloseNonZoomable: !0,
                            shareButtons: [{
                                id: "facebook",
                                label: "Share on Facebook",
                                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                            }, {
                                id: "twitter",
                                label: "Tweet",
                                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                            }, {
                                id: "pinterest",
                                label: "Pin it",
                                url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                            }, {
                                id: "download",
                                label: "Download image",
                                url: "{{raw_image_url}}",
                                download: !0
                            }],
                            getImageURLForShare: function() {
                                return o.currItem.src || ""
                            },
                            getPageURLForShare: function() {
                                return window.location.href
                            },
                            getTextForShare: function() {
                                return o.currItem.title || ""
                            },
                            indexIndicatorSep: " / ",
                            fitControlsWidth: 1200
                        },
                        C = function(e) {
                            if (v) return !0;
                            e = e || window.event, g.timeToIdle && g.mouseUsed && !d && N();
                            for (var t, n, i = e.target || e.srcElement, o = i.getAttribute("class") || "", r = 0; r < $.length; r++)(t = $[r]).onTap && -1 < o.indexOf("pswp__" + t.name) && (t.onTap(), n = !0);
                            if (n) {
                                e.stopPropagation && e.stopPropagation(), v = !0;
                                var s = l.features.isOldAndroid ? 600 : 30;
                                setTimeout(function() {
                                    v = !1
                                }, s)
                            }
                        },
                        _ = function(e, t, n) {
                            l[(n ? "add" : "remove") + "Class"](e, "pswp__" + t)
                        },
                        k = function() {
                            var e = 1 === g.getNumItemsFn();
                            e !== m && (_(c, "ui--one-slide", e), m = e)
                        },
                        A = function() {
                            _(a, "share-modal--hidden", S)
                        },
                        I = function() {
                            return (S = !S) ? (l.removeClass(a, "pswp__share-modal--fade-in"), setTimeout(function() {
                                S && A()
                            }, 300)) : (A(), setTimeout(function() {
                                S || l.addClass(a, "pswp__share-modal--fade-in")
                            }, 30)), S || O(), !1
                        },
                        D = function(e) {
                            var t = (e = e || window.event).target || e.srcElement;
                            return o.shout("shareLinkClick", e, t), !!t.href && (!!t.hasAttribute("download") || (window.open(t.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), S || I(), !1))
                        },
                        O = function() {
                            for (var e, t, n, i, o, r = "", s = 0; s < g.shareButtons.length; s++) e = g.shareButtons[s], n = g.getImageURLForShare(e), i = g.getPageURLForShare(e), o = g.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(o)), r += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", g.parseShareButtonOut && (r = g.parseShareButtonOut(e, r));
                            a.children[0].innerHTML = r, a.children[0].onclick = D
                        },
                        L = function(e) {
                            for (var t = 0; t < g.closeElClasses.length; t++)
                                if (l.hasClass(e, "pswp__" + g.closeElClasses[t])) return !0
                        },
                        P = 0,
                        N = function() {
                            clearTimeout(b), P = 0, d && w.setIdle(!1)
                        },
                        M = function(e) {
                            var t = (e = e || window.event).relatedTarget || e.toElement;
                            t && "HTML" !== t.nodeName || (clearTimeout(b), b = setTimeout(function() {
                                w.setIdle(!0)
                            }, g.timeToIdleOutside))
                        },
                        j = function(e) {
                            p !== e && (_(f, "preloader--active", !e), p = e)
                        },
                        H = function(e) {
                            var t = e.vGap;
                            if (function() {
                                    return !o.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth
                                }()) {
                                var n = g.barsSize;
                                if (g.captionEl && "auto" === n.bottom)
                                    if (s || ((s = l.createEl("pswp__caption pswp__caption--fake")).appendChild(l.createEl("pswp__caption__center")), c.insertBefore(s, r), l.addClass(c, "pswp__ui--fit")), g.addCaptionHTMLFn(e, s, !0)) {
                                        var i = s.clientHeight;
                                        t.bottom = parseInt(i, 10) || 44
                                    } else t.bottom = n.top;
                                else t.bottom = "auto" === n.bottom ? 0 : n.bottom;
                                t.top = n.top
                            } else t.top = t.bottom = 0
                        },
                        $ = [{
                            name: "caption",
                            option: "captionEl",
                            onInit: function(e) {
                                r = e
                            }
                        }, {
                            name: "share-modal",
                            option: "shareEl",
                            onInit: function(e) {
                                a = e
                            },
                            onTap: function() {
                                I()
                            }
                        }, {
                            name: "button--share",
                            option: "shareEl",
                            onInit: function(e) {
                                i = e
                            },
                            onTap: function() {
                                I()
                            }
                        }, {
                            name: "button--zoom",
                            option: "zoomEl",
                            onTap: o.toggleDesktopZoom
                        }, {
                            name: "counter",
                            option: "counterEl",
                            onInit: function(e) {
                                n = e
                            }
                        }, {
                            name: "button--close",
                            option: "closeEl",
                            onTap: o.close
                        }, {
                            name: "button--arrow--left",
                            option: "arrowEl",
                            onTap: o.prev
                        }, {
                            name: "button--arrow--right",
                            option: "arrowEl",
                            onTap: o.next
                        }, {
                            name: "button--fs",
                            option: "fullscreenEl",
                            onTap: function() {
                                t.isFullscreen() ? t.exit() : t.enter()
                            }
                        }, {
                            name: "preloader",
                            option: "preloaderEl",
                            onInit: function(e) {
                                f = e
                            }
                        }];
                    w.init = function() {
                        l.extend(o.options, E, !0), g = o.options, c = l.getChildByClass(o.scrollWrap, "pswp__ui"), e = o.listen,
                            function() {
                                var t;
                                e("onVerticalDrag", function(e) {
                                    if (x && e < .95) {
                                        w.hideControls()
                                    } else if (!x && e >= .95) {
                                        w.showControls()
                                    }
                                }), e("onPinchClose", function(e) {
                                    if (x && e < .9) {
                                        w.hideControls();
                                        t = true
                                    } else if (t && !x && e > .9) {
                                        w.showControls()
                                    }
                                }), e("zoomGestureEnded", function() {
                                    t = false;
                                    if (t && !x) {
                                        w.showControls()
                                    }
                                })
                            }(), e("beforeChange", w.update), e("doubleTap", function(e) {
                                var t = o.currItem.initialZoomLevel;
                                o.getZoomLevel() !== t ? o.zoomTo(t, e, 333) : o.zoomTo(g.getDoubleTapZoom(!1, o.currItem), e, 333)
                            }), e("preventDragEvent", function(e, t, n) {
                                var i = e.target || e.srcElement;
                                i && i.getAttribute("class") && -1 < e.type.indexOf("mouse") && (0 < i.getAttribute("class").indexOf("__caption") || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
                            }), e("bindEvents", function() {
                                l.bind(c, "pswpTap click", C), l.bind(o.scrollWrap, "pswpTap", w.onGlobalTap), o.likelyTouchDevice || l.bind(o.scrollWrap, "mouseover", w.onMouseOver)
                            }), e("unbindEvents", function() {
                                S || I(), y && clearInterval(y), l.unbind(document, "mouseout", M), l.unbind(document, "mousemove", N), l.unbind(c, "pswpTap click", C), l.unbind(o.scrollWrap, "pswpTap", w.onGlobalTap), l.unbind(o.scrollWrap, "mouseover", w.onMouseOver), t && (l.unbind(document, t.eventK, w.updateFullscreen), t.isFullscreen() && (g.hideAnimationDuration = 0, t.exit()), t = null)
                            }), e("destroy", function() {
                                g.captionEl && (s && c.removeChild(s), l.removeClass(r, "pswp__caption--empty")), a && (a.children[0].onclick = null), l.removeClass(c, "pswp__ui--over-close"), l.addClass(c, "pswp__ui--hidden"), w.setIdle(!1)
                            }), g.showAnimationDuration || l.removeClass(c, "pswp__ui--hidden"), e("initialZoomIn", function() {
                                g.showAnimationDuration && l.removeClass(c, "pswp__ui--hidden")
                            }), e("initialZoomOut", function() {
                                l.addClass(c, "pswp__ui--hidden")
                            }), e("parseVerticalMargin", H),
                            function() {
                                var r, s, a, e = function e(t) {
                                    if (!t) {
                                        return
                                    }
                                    var n = t.length;
                                    for (var i = 0; i < n; i++) {
                                        r = t[i];
                                        s = r.className;
                                        for (var o = 0; o < $.length; o++) {
                                            a = $[o];
                                            if (s.indexOf("pswp__" + a.name) > -1) {
                                                if (g[a.option]) {
                                                    l.removeClass(r, "pswp__element--disabled");
                                                    if (a.onInit) {
                                                        a.onInit(r)
                                                    }
                                                } else {
                                                    l.addClass(r, "pswp__element--disabled")
                                                }
                                            }
                                        }
                                    }
                                };
                                e(c.children);
                                var t = l.getChildByClass(c, "pswp__top-bar");
                                if (t) {
                                    e(t.children)
                                }
                            }(), g.shareEl && i && a && (S = !0), k(),
                            function() {
                                if (g.timeToIdle) {
                                    e("mouseUsed", function() {
                                        l.bind(document, "mousemove", N);
                                        l.bind(document, "mouseout", M);
                                        y = setInterval(function() {
                                            P++;
                                            if (P === 2) {
                                                w.setIdle(true)
                                            }
                                        }, g.timeToIdle / 2)
                                    })
                                }
                            }(),
                            function() {
                                if (g.fullscreenEl && !l.features.isOldAndroid) {
                                    if (!t) {
                                        t = w.getFullscreenAPI()
                                    }
                                    if (t) {
                                        l.bind(document, t.eventK, w.updateFullscreen);
                                        w.updateFullscreen();
                                        l.addClass(o.template, "pswp--supports-fs")
                                    } else {
                                        l.removeClass(o.template, "pswp--supports-fs")
                                    }
                                }
                            }(),
                            function() {
                                if (g.preloaderEl) {
                                    j(true);
                                    e("beforeChange", function() {
                                        clearTimeout(h);
                                        h = setTimeout(function() {
                                            if (o.currItem && o.currItem.loading) {
                                                if (!o.allowProgressiveImg() || o.currItem.img && !o.currItem.img.naturalWidth) {
                                                    j(false)
                                                }
                                            } else {
                                                j(true)
                                            }
                                        }, g.loadingIndicatorDelay)
                                    });
                                    e("imageLoadComplete", function(e, t) {
                                        if (o.currItem === t) {
                                            j(true)
                                        }
                                    })
                                }
                            }()
                    }, w.setIdle = function(e) {
                        _(c, "ui--idle", d = e)
                    }, w.update = function() {
                        T = !(!x || !o.currItem) && (w.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(o.currItem, r), _(r, "caption--empty", !o.currItem.title)), !0), S || I(), k()
                    }, w.updateFullscreen = function(e) {
                        e && setTimeout(function() {
                            o.setScrollOffset(0, l.getScrollY())
                        }, 50), l[(t.isFullscreen() ? "add" : "remove") + "Class"](o.template, "pswp--fs")
                    }, w.updateIndexIndicator = function() {
                        g.counterEl && (n.innerHTML = o.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
                    }, w.onGlobalTap = function(e) {
                        var t = (e = e || window.event).target || e.srcElement;
                        if (!v)
                            if (e.detail && "mouse" === e.detail.pointerType) {
                                if (L(t)) return void o.close();
                                l.hasClass(t, "pswp__img") && (1 === o.getZoomLevel() && o.getZoomLevel() <= o.currItem.fitRatio ? g.clickToCloseNonZoomable && o.close() : o.toggleDesktopZoom(e.detail.releasePoint))
                            } else if (g.tapToToggleControls && (x ? w.hideControls() : w.showControls()), g.tapToClose && (l.hasClass(t, "pswp__img") || L(t))) return void o.close()
                    }, w.onMouseOver = function(e) {
                        var t = (e = e || window.event).target || e.srcElement;
                        _(c, "ui--over-close", L(t))
                    }, w.hideControls = function() {
                        l.addClass(c, "pswp__ui--hidden"), x = !1
                    }, w.showControls = function() {
                        x = !0, T || w.update(), l.removeClass(c, "pswp__ui--hidden")
                    }, w.supportsFullscreen = function() {
                        var e = document;
                        return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
                    }, w.getFullscreenAPI = function() {
                        var e, t = document.documentElement,
                            n = "fullscreenchange";
                        return t.requestFullscreen ? e = {
                            enterK: "requestFullscreen",
                            exitK: "exitFullscreen",
                            elementK: "fullscreenElement",
                            eventK: n
                        } : t.mozRequestFullScreen ? e = {
                            enterK: "mozRequestFullScreen",
                            exitK: "mozCancelFullScreen",
                            elementK: "mozFullScreenElement",
                            eventK: "moz" + n
                        } : t.webkitRequestFullscreen ? e = {
                            enterK: "webkitRequestFullscreen",
                            exitK: "webkitExitFullscreen",
                            elementK: "webkitFullscreenElement",
                            eventK: "webkit" + n
                        } : t.msRequestFullscreen && (e = {
                            enterK: "msRequestFullscreen",
                            exitK: "msExitFullscreen",
                            elementK: "msFullscreenElement",
                            eventK: "MSFullscreenChange"
                        }), e && (e.enter = function() {
                            if (u = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK) return o.template[this.enterK]();
                            o.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                        }, e.exit = function() {
                            return g.closeOnScroll = u, document[this.exitK]()
                        }, e.isFullscreen = function() {
                            return document[this.elementK]
                        }), e
                    }
                }
            }) ? o.call(n, i, n, t) : o) || (t.exports = r)
        }, {}]
    }, {}, [2])
}, function(e, t, n) {
    var s;
    window.imagesLoaded = n(61), window.Shuffle = n(62), s = jQuery, page.registerVendor("Shuffle"), page.initShuffle = function() {
        if (void 0 !== window.Shuffle && 0 !== s('[data-provide="shuffle"]').length) {
            var r = window.Shuffle;
            s('[data-provide="shuffle"]').each(function() {
                var e = s(this).find('[data-shuffle="list"]'),
                    t = s(this).find('[data-shuffle="filter"]'),
                    n = s(this).find('[data-shuffle="search"]'),
                    o = new r(e, {
                        itemSelector: '[data-shuffle="item"]',
                        sizer: '[data-shuffle="sizer"]',
                        delimeter: ",",
                        speed: 500
                    });
                t.length && s(t).find('[data-shuffle="button"]').each(function() {
                    s(this).on("click", function() {
                        var e, t = s(this),
                            n = t.hasClass("active"),
                            i = t.data("group");
                        n || (s(this).closest('[data-shuffle="filter"]').find('[data-shuffle="button"].active').removeClass("active"), e = n ? (t.removeClass("active"), r.ALL_ITEMS) : (t.addClass("active"), i), o.filter(e))
                    })
                }), n.length && n.on("input mouseup change", function() {
                    var n = s(this).val().toLowerCase();
                    o.filter(function(e, t) {
                        return -1 !== e.textContent.toLowerCase().trim().indexOf(n)
                    })
                }), s(this).imagesLoaded(function() {
                    o.layout()
                })
            })
        }
    }
}, function(e, n, t) {
    var i, o, r, s;
    "undefined" != typeof window && window, r = {
            id: "ev-emitter/ev-emitter",
            exports: {},
            loaded: (o = function() {
                function e() {}
                var t = e.prototype;
                return t.on = function(e, t) {
                    if (e && t) {
                        var n = this._events = this._events || {},
                            i = n[e] = n[e] || [];
                        return -1 == i.indexOf(t) && i.push(t), this
                    }
                }, t.once = function(e, t) {
                    if (e && t) {
                        this.on(e, t);
                        var n = this._onceEvents = this._onceEvents || {};
                        return (n[e] = n[e] || {})[t] = !0, this
                    }
                }, t.off = function(e, t) {
                    var n = this._events && this._events[e];
                    if (n && n.length) {
                        var i = n.indexOf(t);
                        return -1 != i && n.splice(i, 1), this
                    }
                }, t.emitEvent = function(e, t) {
                    var n = this._events && this._events[e];
                    if (n && n.length) {
                        n = n.slice(0), t = t || [];
                        for (var i = this._onceEvents && this._onceEvents[e], o = 0; o < n.length; o++) {
                            var r = n[o];
                            i && i[r] && (this.off(e, r), delete i[r]), r.apply(this, t)
                        }
                        return this
                    }
                }, t.allOff = function() {
                    delete this._events, delete this._onceEvents
                }, e
            }, !1)
        }, i = "function" == typeof o ? o.call(r.exports, t, r.exports, r) : o, r.loaded = !0, void 0 !== i || (i = r.exports),
        /*!
         * imagesLoaded v4.1.4
         * JavaScript is all like "You images are done yet or what?"
         * MIT License
         */
        function(t) {
            "use strict";
            void 0 === (s = function(e) {
                return function(t, e) {
                    var o = t.jQuery,
                        r = t.console;

                    function s(e, t) {
                        for (var n in t) {
                            e[n] = t[n]
                        }
                        return e
                    }
                    var n = Array.prototype.slice;

                    function a(e) {
                        if (Array.isArray(e)) {
                            return e
                        }
                        var t = typeof e == "object" && typeof e.length == "number";
                        if (t) {
                            return n.call(e)
                        }
                        return [e]
                    }

                    function l(e, t, n) {
                        if (!(this instanceof l)) {
                            return new l(e, t, n)
                        }
                        var i = e;
                        if (typeof e == "string") {
                            i = document.querySelectorAll(e)
                        }
                        if (!i) {
                            r.error("Bad element for imagesLoaded " + (i || e));
                            return
                        }
                        this.elements = a(i);
                        this.options = s({}, this.options);
                        if (typeof t == "function") {
                            n = t
                        } else {
                            s(this.options, t)
                        }
                        if (n) {
                            this.on("always", n)
                        }
                        this.getImages();
                        if (o) {
                            this.jqDeferred = new o.Deferred
                        }
                        setTimeout(this.check.bind(this))
                    }(l.prototype = Object.create(e.prototype)).options = {}, l.prototype.getImages = function() {
                        this.images = [];
                        this.elements.forEach(this.addElementImages, this)
                    }, l.prototype.addElementImages = function(e) {
                        if (e.nodeName == "IMG") {
                            this.addImage(e)
                        }
                        if (this.options.background === true) {
                            this.addElementBackgroundImages(e)
                        }
                        var t = e.nodeType;
                        if (!t || !c[t]) {
                            return
                        }
                        var n = e.querySelectorAll("img");
                        for (var i = 0; i < n.length; i++) {
                            var o = n[i];
                            this.addImage(o)
                        }
                        if (typeof this.options.background == "string") {
                            var r = e.querySelectorAll(this.options.background);
                            for (i = 0; i < r.length; i++) {
                                var s = r[i];
                                this.addElementBackgroundImages(s)
                            }
                        }
                    };
                    var c = {
                        1: true,
                        9: true,
                        11: true
                    };

                    function i(e) {
                        this.img = e
                    }

                    function u(e, t) {
                        this.url = e;
                        this.element = t;
                        this.img = new Image
                    }
                    return l.prototype.addElementBackgroundImages = function(e) {
                        var t = getComputedStyle(e);
                        if (t)
                            for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
                                var o = i && i[2];
                                o && this.addBackground(o, e), i = n.exec(t.backgroundImage)
                            }
                    }, l.prototype.addImage = function(e) {
                        var t = new i(e);
                        this.images.push(t)
                    }, l.prototype.addBackground = function(e, t) {
                        var n = new u(e, t);
                        this.images.push(n)
                    }, l.prototype.check = function() {
                        var i = this;

                        function t(e, t, n) {
                            setTimeout(function() {
                                i.progress(e, t, n)
                            })
                        }
                        this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function(e) {
                            e.once("progress", t), e.check()
                        }) : this.complete()
                    }, l.prototype.progress = function(e, t, n) {
                        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && r && r.log("progress: " + n, e, t)
                    }, l.prototype.complete = function() {
                        var e = this.hasAnyBroken ? "fail" : "done";
                        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                            var t = this.hasAnyBroken ? "reject" : "resolve";
                            this.jqDeferred[t](this)
                        }
                    }, (i.prototype = Object.create(e.prototype)).check = function() {
                        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
                    }, i.prototype.getIsImageComplete = function() {
                        return this.img.complete && this.img.naturalWidth
                    }, i.prototype.confirm = function(e, t) {
                        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
                    }, i.prototype.handleEvent = function(e) {
                        var t = "on" + e.type;
                        this[t] && this[t](e)
                    }, i.prototype.onload = function() {
                        this.confirm(!0, "onload"), this.unbindEvents()
                    }, i.prototype.onerror = function() {
                        this.confirm(!1, "onerror"), this.unbindEvents()
                    }, i.prototype.unbindEvents = function() {
                        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                    }, (u.prototype = Object.create(i.prototype)).check = function() {
                        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
                    }, u.prototype.unbindEvents = function() {
                        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                    }, u.prototype.confirm = function(e, t) {
                        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
                    }, l.makeJQueryPlugin = function(e) {
                        (e = e || t.jQuery) && ((o = e).fn.imagesLoaded = function(e, t) {
                            return new l(this, e, t).jqDeferred.promise(o(this))
                        })
                    }, l.makeJQueryPlugin(), l
                }(t, e)
            }.apply(n, [i])) || (e.exports = s)
        }("undefined" != typeof window ? window : this)
}, function(e, t, n) {
    e.exports = function() {
        "use strict";

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function e(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }

        function o(e) {
            return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function n(e, t) {
            return (n = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function t() {}
        t.prototype = {
            on: function(e, t, n) {
                var i = this.e || (this.e = {});
                return (i[e] || (i[e] = [])).push({
                    fn: t,
                    ctx: n
                }), this
            },
            once: function(e, t, n) {
                var i = this;

                function o() {
                    i.off(e, o), t.apply(n, arguments)
                }
                return o._ = t, this.on(e, o, n)
            },
            emit: function(e) {
                for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, o = n.length; i < o; i++) n[i].fn.apply(n[i].ctx, t);
                return this
            },
            off: function(e, t) {
                var n = this.e || (this.e = {}),
                    i = n[e],
                    o = [];
                if (i && t)
                    for (var r = 0, s = i.length; r < s; r++) i[r].fn !== t && i[r].fn._ !== t && o.push(i[r]);
                return o.length ? n[e] = o : delete n[e], this
            }
        };
        var a = t,
            r = "undefined" != typeof Element ? Element.prototype : {},
            l = r.matches || r.matchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector;

        function c() {}

        function u(e) {
            return parseFloat(e) || 0
        }
        var m = function() {
                function n(e, t) {
                    s(this, n), this.x = u(e), this.y = u(t)
                }
                return e(n, null, [{
                    key: "equals",
                    value: function(e, t) {
                        return e.x === t.x && e.y === t.y
                    }
                }]), n
            }(),
            g = function() {
                function r(e, t, n, i, o) {
                    s(this, r), this.id = o, this.left = e, this.top = t, this.width = n, this.height = i
                }
                return e(r, null, [{
                    key: "intersects",
                    value: function(e, t) {
                        return e.left < t.left + t.width && t.left < e.left + e.width && e.top < t.top + t.height && t.top < e.top + e.height
                    }
                }]), r
            }(),
            d = {
                BASE: "shuffle",
                SHUFFLE_ITEM: "shuffle-item",
                VISIBLE: "shuffle-item--visible",
                HIDDEN: "shuffle-item--hidden"
            },
            f = 0,
            p = function() {
                function t(e) {
                    s(this, t), f += 1, this.id = f, this.element = e, this.isVisible = !0, this.isHidden = !1
                }
                return e(t, [{
                    key: "show",
                    value: function() {
                        this.isVisible = !0, this.element.classList.remove(d.HIDDEN), this.element.classList.add(d.VISIBLE), this.element.removeAttribute("aria-hidden")
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.isVisible = !1, this.element.classList.remove(d.VISIBLE), this.element.classList.add(d.HIDDEN), this.element.setAttribute("aria-hidden", !0)
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.addClasses([d.SHUFFLE_ITEM, d.VISIBLE]), this.applyCss(t.Css.INITIAL), this.scale = t.Scale.VISIBLE, this.point = new m
                    }
                }, {
                    key: "addClasses",
                    value: function(e) {
                        var t = this;
                        e.forEach(function(e) {
                            t.element.classList.add(e)
                        })
                    }
                }, {
                    key: "removeClasses",
                    value: function(e) {
                        var t = this;
                        e.forEach(function(e) {
                            t.element.classList.remove(e)
                        })
                    }
                }, {
                    key: "applyCss",
                    value: function(t) {
                        var n = this;
                        Object.keys(t).forEach(function(e) {
                            n.element.style[e] = t[e]
                        })
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        this.removeClasses([d.HIDDEN, d.VISIBLE, d.SHUFFLE_ITEM]), this.element.removeAttribute("style"), this.element = null
                    }
                }]), t
            }();
        p.Css = {
            INITIAL: {
                position: "absolute",
                top: 0,
                left: 0,
                visibility: "visible",
                "will-change": "transform"
            },
            VISIBLE: {
                before: {
                    opacity: 1,
                    visibility: "visible"
                },
                after: {
                    transitionDelay: ""
                }
            },
            HIDDEN: {
                before: {
                    opacity: 0
                },
                after: {
                    visibility: "hidden",
                    transitionDelay: ""
                }
            }
        }, p.Scale = {
            VISIBLE: 1,
            HIDDEN: .001
        };
        var h = null,
            v = function() {
                if (null !== h) return h;
                var e = document.body || document.documentElement,
                    t = document.createElement("div");
                return t.style.cssText = "width:10px;padding:2px;box-sizing:border-box;", e.appendChild(t), h = "10px" === window.getComputedStyle(t, null).width, e.removeChild(t), h
            };

        function y(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : window.getComputedStyle(e, null),
                i = u(n[t]);
            return v() || "width" !== t ? v() || "height" !== t || (i += u(n.paddingTop) + u(n.paddingBottom) + u(n.borderTopWidth) + u(n.borderBottomWidth)) : i += u(n.paddingLeft) + u(n.paddingRight) + u(n.borderLeftWidth) + u(n.borderRightWidth), i
        }
        var b = {
            reverse: !1,
            by: null,
            compare: null,
            randomize: !1,
            key: "element"
        };

        function w(e, t) {
            var o = Object.assign({}, b, t),
                n = Array.from(e),
                r = !1;
            return e.length ? o.randomize ? function(e) {
                for (var t = e.length; t;) {
                    t -= 1;
                    var n = Math.floor(Math.random() * (t + 1)),
                        i = e[n];
                    e[n] = e[t], e[t] = i
                }
                return e
            }(e) : ("function" == typeof o.by ? e.sort(function(e, t) {
                if (r) return 0;
                var n = o.by(e[o.key]),
                    i = o.by(t[o.key]);
                return void 0 === n && void 0 === i ? (r = !0, 0) : n < i || "sortFirst" === n || "sortLast" === i ? -1 : i < n || "sortLast" === n || "sortFirst" === i ? 1 : 0
            }) : "function" == typeof o.compare && e.sort(o.compare), r ? n : (o.reverse && e.reverse(), e)) : []
        }
        var T = {},
            x = "transitionend",
            S = 0;

        function E(e) {
            return !!T[e] && (T[e].element.removeEventListener(x, T[e].listener), !(T[e] = null))
        }

        function C(e) {
            return Math.max.apply(Math, e)
        }

        function _(e, t, n, i) {
            var o = e / t;
            return Math.abs(Math.round(o) - o) < i && (o = Math.round(o)), Math.min(Math.ceil(o), n)
        }

        function k(e, t, n) {
            if (1 === t) return e;
            for (var i = [], o = 0; o <= n - t; o++) i.push(C(e.slice(o, o + t)));
            return i
        }

        function A(e, t) {
            for (var n, i = (n = e, Math.min.apply(Math, n)), o = 0, r = e.length; o < r; o++)
                if (e[o] >= i - t && e[o] <= i + t) return o;
            return 0
        }

        function I(e, u) {
            var d = {};
            e.forEach(function(e) {
                d[e.top] ? d[e.top].push(e) : d[e.top] = [e]
            });
            var f = [],
                p = [],
                h = [];
            return Object.keys(d).forEach(function(e) {
                var t = d[e];
                p.push(t);
                var i, n = t[t.length - 1],
                    o = n.left + n.width,
                    r = Math.round((u - o) / 2),
                    s = t,
                    a = !1;
                if (0 < r) {
                    var l = [];
                    (a = t.every(function(e) {
                        var t = new g(e.left + r, e.top, e.width, e.height, e.id),
                            n = !f.some(function(e) {
                                return g.intersects(t, e)
                            });
                        return l.push(t), n
                    })) && (s = l)
                }
                if (!a && t.some(function(n) {
                        return f.some(function(e) {
                            var t = g.intersects(n, e);
                            return t && (i = e), t
                        })
                    })) {
                    var c = h.findIndex(function(e) {
                        return e.includes(i)
                    });
                    h.splice(c, 1, p[c])
                }
                f = f.concat(s), h.push(s)
            }), [].concat.apply([], h).sort(function(e, t) {
                return e.id - t.id
            }).map(function(e) {
                return new m(e.left, e.top)
            })
        }

        function D(e) {
            return Array.from(new Set(e))
        }
        var O = 0,
            L = function() {
                function r(e) {
                    var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    s(this, r), (t = function(e, t) {
                        return !t || "object" != typeof t && "function" != typeof t ? function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e) : t
                    }(this, o(r).call(this))).options = Object.assign({}, r.options, n), t.options.delimeter && (t.options.delimiter = t.options.delimeter), t.lastSort = {}, t.group = r.ALL_ITEMS, t.lastFilter = r.ALL_ITEMS, t.isEnabled = !0, t.isDestroyed = !1, t.isInitialized = !1, t._transitions = [], t.isTransitioning = !1, t._queue = [];
                    var i = t._getElementOption(e);
                    if (!i) throw new TypeError("Shuffle needs to be initialized with an element.");
                    return t.element = i, t.id = "shuffle_" + O, O += 1, t._init(), t.isInitialized = !0, t
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), n(e, t)
                }(r, a), e(r, [{
                    key: "_init",
                    value: function() {
                        if (this.items = this._getItems(), this.options.sizer = this._getElementOption(this.options.sizer), this.element.classList.add(r.Classes.BASE), this._initItems(this.items), this._onResize = this._getResizeFunction(), window.addEventListener("resize", this._onResize), "complete" !== document.readyState) {
                            var t = this.layout.bind(this);
                            window.addEventListener("load", function e() {
                                window.removeEventListener("load", e), t()
                            })
                        }
                        var e = window.getComputedStyle(this.element, null),
                            n = r.getSize(this.element).width;
                        this._validateStyles(e), this._setColumns(n), this.filter(this.options.group, this.options.initialSort), this.element.offsetWidth, this.setItemTransitions(this.items), this.element.style.transition = "height ".concat(this.options.speed, "ms ").concat(this.options.easing)
                    }
                }, {
                    key: "_getResizeFunction",
                    value: function() {
                        var e = this._handleResize.bind(this);
                        return this.options.throttle ? this.options.throttle(e, this.options.throttleTime) : e
                    }
                }, {
                    key: "_getElementOption",
                    value: function(e) {
                        return "string" == typeof e ? this.element.querySelector(e) : e && e.nodeType && 1 === e.nodeType ? e : e && e.jquery ? e[0] : null
                    }
                }, {
                    key: "_validateStyles",
                    value: function(e) {
                        "static" === e.position && (this.element.style.position = "relative"), "hidden" !== e.overflow && (this.element.style.overflow = "hidden")
                    }
                }, {
                    key: "_filter",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.lastFilter,
                            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.items,
                            n = this._getFilteredSets(e, t);
                        return this._toggleFilterClasses(n), "string" == typeof(this.lastFilter = e) && (this.group = e), n
                    }
                }, {
                    key: "_getFilteredSets",
                    value: function(t, e) {
                        var n = this,
                            i = [],
                            o = [];
                        return t === r.ALL_ITEMS ? i = e : e.forEach(function(e) {
                            n._doesPassFilter(t, e.element) ? i.push(e) : o.push(e)
                        }), {
                            visible: i,
                            hidden: o
                        }
                    }
                }, {
                    key: "_doesPassFilter",
                    value: function(e, t) {
                        if ("function" == typeof e) return e.call(t, t, this);
                        var n = t.getAttribute("data-" + r.FILTER_ATTRIBUTE_KEY),
                            i = this.options.delimiter ? n.split(this.options.delimiter) : JSON.parse(n);

                        function o(e) {
                            return i.includes(e)
                        }
                        return Array.isArray(e) ? this.options.filterMode === r.FilterMode.ANY ? e.some(o) : e.every(o) : i.includes(e)
                    }
                }, {
                    key: "_toggleFilterClasses",
                    value: function(e) {
                        var t = e.visible,
                            n = e.hidden;
                        t.forEach(function(e) {
                            e.show()
                        }), n.forEach(function(e) {
                            e.hide()
                        })
                    }
                }, {
                    key: "_initItems",
                    value: function(e) {
                        e.forEach(function(e) {
                            e.init()
                        })
                    }
                }, {
                    key: "_disposeItems",
                    value: function(e) {
                        e.forEach(function(e) {
                            e.dispose()
                        })
                    }
                }, {
                    key: "_updateItemCount",
                    value: function() {
                        this.visibleItems = this._getFilteredItems().length
                    }
                }, {
                    key: "setItemTransitions",
                    value: function(e) {
                        var t = this.options,
                            n = t.speed,
                            i = t.easing,
                            o = this.options.useTransforms ? ["transform"] : ["top", "left"],
                            r = Object.keys(p.Css.HIDDEN.before).map(function(e) {
                                return e.replace(/([A-Z])/g, function(e, t) {
                                    return "-".concat(t.toLowerCase())
                                })
                            }),
                            s = o.concat(r).join();
                        e.forEach(function(e) {
                            e.element.style.transitionDuration = n + "ms", e.element.style.transitionTimingFunction = i, e.element.style.transitionProperty = s
                        })
                    }
                }, {
                    key: "_getItems",
                    value: function() {
                        var t = this;
                        return Array.from(this.element.children).filter(function(e) {
                            return function(e, t) {
                                if (!e || 1 !== e.nodeType) return !1;
                                if (l) return l.call(e, t);
                                for (var n = e.parentNode.querySelectorAll(t), i = 0; i < n.length; i++)
                                    if (n[i] == e) return !0;
                                return !1
                            }(e, t.options.itemSelector)
                        }).map(function(e) {
                            return new p(e)
                        })
                    }
                }, {
                    key: "_mergeNewItems",
                    value: function(e) {
                        var t = Array.from(this.element.children);
                        return w(this.items.concat(e), {
                            by: function(e) {
                                return t.indexOf(e)
                            }
                        })
                    }
                }, {
                    key: "_getFilteredItems",
                    value: function() {
                        return this.items.filter(function(e) {
                            return e.isVisible
                        })
                    }
                }, {
                    key: "_getConcealedItems",
                    value: function() {
                        return this.items.filter(function(e) {
                            return !e.isVisible
                        })
                    }
                }, {
                    key: "_getColumnSize",
                    value: function(e, t) {
                        var n;
                        return 0 === (n = "function" == typeof this.options.columnWidth ? this.options.columnWidth(e) : this.options.sizer ? r.getSize(this.options.sizer).width : this.options.columnWidth ? this.options.columnWidth : 0 < this.items.length ? r.getSize(this.items[0].element, !0).width : e) && (n = e), n + t
                    }
                }, {
                    key: "_getGutterSize",
                    value: function(e) {
                        return "function" == typeof this.options.gutterWidth ? this.options.gutterWidth(e) : this.options.sizer ? y(this.options.sizer, "marginLeft") : this.options.gutterWidth
                    }
                }, {
                    key: "_setColumns",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r.getSize(this.element).width,
                            t = this._getGutterSize(e),
                            n = this._getColumnSize(e, t),
                            i = (e + t) / n;
                        Math.abs(Math.round(i) - i) < this.options.columnThreshold && (i = Math.round(i)), this.cols = Math.max(Math.floor(i), 1), this.containerWidth = e, this.colWidth = n
                    }
                }, {
                    key: "_setContainerSize",
                    value: function() {
                        this.element.style.height = this._getContainerSize() + "px"
                    }
                }, {
                    key: "_getContainerSize",
                    value: function() {
                        return C(this.positions)
                    }
                }, {
                    key: "_getStaggerAmount",
                    value: function(e) {
                        return Math.min(e * this.options.staggerAmount, this.options.staggerAmountMax)
                    }
                }, {
                    key: "_dispatch",
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        this.isDestroyed || (t.shuffle = this).emit(e, t)
                    }
                }, {
                    key: "_resetCols",
                    value: function() {
                        var e = this.cols;
                        for (this.positions = []; e;) e -= 1, this.positions.push(0)
                    }
                }, {
                    key: "_layout",
                    value: function(e) {
                        var o = this,
                            r = this._getNextPositions(e),
                            s = 0;
                        e.forEach(function(e, t) {
                            function n() {
                                e.applyCss(p.Css.VISIBLE.after)
                            }
                            if (m.equals(e.point, r[t]) && !e.isHidden) return e.applyCss(p.Css.VISIBLE.before), void n();
                            e.point = r[t], e.scale = p.Scale.VISIBLE, e.isHidden = !1;
                            var i = o.getStylesForTransition(e, p.Css.VISIBLE.before);
                            i.transitionDelay = o._getStaggerAmount(s) + "ms", o._queue.push({
                                item: e,
                                styles: i,
                                callback: n
                            }), s += 1
                        })
                    }
                }, {
                    key: "_getNextPositions",
                    value: function(e) {
                        var o = this;
                        if (this.options.isCentered) {
                            var t = e.map(function(e, t) {
                                var n = r.getSize(e.element, !0),
                                    i = o._getItemPosition(n);
                                return new g(i.x, i.y, n.width, n.height, t)
                            });
                            return this.getTransformedPositions(t, this.containerWidth)
                        }
                        return e.map(function(e) {
                            return o._getItemPosition(r.getSize(e.element, !0))
                        })
                    }
                }, {
                    key: "_getItemPosition",
                    value: function(e) {
                        return function(e) {
                            for (var t = e.itemSize, n = e.positions, i = e.gridSize, o = e.total, r = e.threshold, s = e.buffer, a = _(t.width, i, o, r), l = k(n, a, o), c = A(l, s), u = new m(i * c, l[c]), d = l[c] + t.height, f = 0; f < a; f++) n[c + f] = d;
                            return u
                        }({
                            itemSize: e,
                            positions: this.positions,
                            gridSize: this.colWidth,
                            total: this.cols,
                            threshold: this.options.columnThreshold,
                            buffer: this.options.buffer
                        })
                    }
                }, {
                    key: "getTransformedPositions",
                    value: function(e, t) {
                        return I(e, t)
                    }
                }, {
                    key: "_shrink",
                    value: function() {
                        var i = this,
                            e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this._getConcealedItems(),
                            o = 0;
                        e.forEach(function(e) {
                            function t() {
                                e.applyCss(p.Css.HIDDEN.after)
                            }
                            if (e.isHidden) return e.applyCss(p.Css.HIDDEN.before), void t();
                            e.scale = p.Scale.HIDDEN, e.isHidden = !0;
                            var n = i.getStylesForTransition(e, p.Css.HIDDEN.before);
                            n.transitionDelay = i._getStaggerAmount(o) + "ms", i._queue.push({
                                item: e,
                                styles: n,
                                callback: t
                            }), o += 1
                        })
                    }
                }, {
                    key: "_handleResize",
                    value: function() {
                        this.isEnabled && !this.isDestroyed && this.update()
                    }
                }, {
                    key: "getStylesForTransition",
                    value: function(e, t) {
                        var n = Object.assign({}, t);
                        if (this.options.useTransforms) {
                            var i = this.options.roundTransforms ? Math.round(e.point.x) : e.point.x,
                                o = this.options.roundTransforms ? Math.round(e.point.y) : e.point.y;
                            n.transform = "translate(".concat(i, "px, ").concat(o, "px) scale(").concat(e.scale, ")")
                        } else n.left = e.point.x + "px", n.top = e.point.y + "px";
                        return n
                    }
                }, {
                    key: "_whenTransitionDone",
                    value: function(e, t, n) {
                        var i = function(e, t) {
                            function n(e) {
                                e.currentTarget === e.target && (E(i), t(e))
                            }
                            var i = x + (S += 1);
                            return e.addEventListener(x, n), T[i] = {
                                element: e,
                                listener: n
                            }, i
                        }(e, function(e) {
                            t(), n(null, e)
                        });
                        this._transitions.push(i)
                    }
                }, {
                    key: "_getTransitionFunction",
                    value: function(t) {
                        var n = this;
                        return function(e) {
                            t.item.applyCss(t.styles), n._whenTransitionDone(t.item.element, t.callback, e)
                        }
                    }
                }, {
                    key: "_processQueue",
                    value: function() {
                        this.isTransitioning && this._cancelMovement();
                        var e = 0 < this.options.speed,
                            t = 0 < this._queue.length;
                        t && e && this.isInitialized ? this._startTransitions(this._queue) : (t && this._styleImmediately(this._queue), this._dispatch(r.EventType.LAYOUT)), this._queue.length = 0
                    }
                }, {
                    key: "_startTransitions",
                    value: function(e) {
                        var t = this;
                        this.isTransitioning = !0,
                            function(e, n, i) {
                                i || ("function" == typeof n ? (i = n, n = null) : i = c);
                                var o = e && e.length;
                                if (!o) return i(null, []);
                                var r = !1,
                                    s = new Array(o);

                                function a(n) {
                                    return function(e, t) {
                                        if (!r) {
                                            if (e) return i(e, s), void(r = !0);
                                            s[n] = t, --o || i(null, s)
                                        }
                                    }
                                }
                                e.forEach(n ? function(e, t) {
                                    e.call(n, a(t))
                                } : function(e, t) {
                                    e(a(t))
                                })
                            }(e.map(function(e) {
                                return t._getTransitionFunction(e)
                            }), this._movementFinished.bind(this))
                    }
                }, {
                    key: "_cancelMovement",
                    value: function() {
                        this._transitions.forEach(E), this._transitions.length = 0, this.isTransitioning = !1
                    }
                }, {
                    key: "_styleImmediately",
                    value: function(e) {
                        if (e.length) {
                            var t = e.map(function(e) {
                                return e.item.element
                            });
                            r._skipTransitions(t, function() {
                                e.forEach(function(e) {
                                    e.item.applyCss(e.styles), e.callback()
                                })
                            })
                        }
                    }
                }, {
                    key: "_movementFinished",
                    value: function() {
                        this._transitions.length = 0, this.isTransitioning = !1, this._dispatch(r.EventType.LAYOUT)
                    }
                }, {
                    key: "filter",
                    value: function(e, t) {
                        this.isEnabled && ((!e || e && 0 === e.length) && (e = r.ALL_ITEMS), this._filter(e), this._shrink(), this._updateItemCount(), this.sort(t))
                    }
                }, {
                    key: "sort",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.lastSort;
                        if (this.isEnabled) {
                            this._resetCols();
                            var t = w(this._getFilteredItems(), e);
                            this._layout(t), this._processQueue(), this._setContainerSize(), this.lastSort = e
                        }
                    }
                }, {
                    key: "update",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                        this.isEnabled && (e || this._setColumns(), this.sort())
                    }
                }, {
                    key: "layout",
                    value: function() {
                        this.update(!0)
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        var n = this,
                            t = D(e).map(function(e) {
                                return new p(e)
                            });
                        this._initItems(t), this._resetCols();
                        var i = w(this._mergeNewItems(t), this.lastSort),
                            o = this._filter(this.lastFilter, i),
                            r = function(e) {
                                return t.includes(e)
                            },
                            s = function(e) {
                                e.scale = p.Scale.HIDDEN, e.isHidden = !0, e.applyCss(p.Css.HIDDEN.before), e.applyCss(p.Css.HIDDEN.after)
                            },
                            a = this._getNextPositions(o.visible);
                        o.visible.forEach(function(e, t) {
                            r(e) && (e.point = a[t], s(e), e.applyCss(n.getStylesForTransition(e, {})))
                        }), o.hidden.forEach(function(e) {
                            r(e) && s(e)
                        }), this.element.offsetWidth, this.setItemTransitions(t), this.items = this._mergeNewItems(t), this.filter(this.lastFilter)
                    }
                }, {
                    key: "disable",
                    value: function() {
                        this.isEnabled = !1
                    }
                }, {
                    key: "enable",
                    value: function() {
                        var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                        this.isEnabled = !0, e && this.update()
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        var t = this;
                        if (e.length) {
                            var n = D(e),
                                i = n.map(function(e) {
                                    return t.getItemByElement(e)
                                }).filter(function(e) {
                                    return !!e
                                });
                            this._toggleFilterClasses({
                                visible: [],
                                hidden: i
                            }), this._shrink(i), this.sort(), this.items = this.items.filter(function(e) {
                                return !i.includes(e)
                            }), this._updateItemCount(), this.once(r.EventType.LAYOUT, function() {
                                t._disposeItems(i), n.forEach(function(e) {
                                    e.parentNode.removeChild(e)
                                }), t._dispatch(r.EventType.REMOVED, {
                                    collection: n
                                })
                            })
                        }
                    }
                }, {
                    key: "getItemByElement",
                    value: function(t) {
                        return this.items.find(function(e) {
                            return e.element === t
                        })
                    }
                }, {
                    key: "resetItems",
                    value: function() {
                        var e = this;
                        this._disposeItems(this.items), this.isInitialized = !1, this.items = this._getItems(), this._initItems(this.items), this.once(r.EventType.LAYOUT, function() {
                            e.setItemTransitions(e.items), e.isInitialized = !0
                        }), this.filter(this.lastFilter)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._cancelMovement(), window.removeEventListener("resize", this._onResize), this.element.classList.remove("shuffle"), this.element.removeAttribute("style"), this._disposeItems(this.items), this.items.length = 0, this._transitions.length = 0, this.options.sizer = null, this.element = null, this.isDestroyed = !0, this.isEnabled = !1
                    }
                }], [{
                    key: "getSize",
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                            n = window.getComputedStyle(e, null),
                            i = y(e, "width", n),
                            o = y(e, "height", n);
                        return t && (i += y(e, "marginLeft", n) + y(e, "marginRight", n), o += y(e, "marginTop", n) + y(e, "marginBottom", n)), {
                            width: i,
                            height: o
                        }
                    }
                }, {
                    key: "_skipTransitions",
                    value: function(e, t) {
                        var n = e.map(function(e) {
                            var t = e.style,
                                n = t.transitionDuration,
                                i = t.transitionDelay;
                            return t.transitionDuration = "0ms", t.transitionDelay = "0ms", {
                                duration: n,
                                delay: i
                            }
                        });
                        t(), e[0].offsetWidth, e.forEach(function(e, t) {
                            e.style.transitionDuration = n[t].duration, e.style.transitionDelay = n[t].delay
                        })
                    }
                }]), r
            }();
        return L.ShuffleItem = p, L.ALL_ITEMS = "all", L.FILTER_ATTRIBUTE_KEY = "groups", L.EventType = {
            LAYOUT: "shuffle:layout",
            REMOVED: "shuffle:removed"
        }, L.Classes = d, L.FilterMode = {
            ANY: "any",
            ALL: "all"
        }, L.options = {
            group: L.ALL_ITEMS,
            speed: 250,
            easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
            itemSelector: "*",
            sizer: null,
            gutterWidth: 0,
            columnWidth: 0,
            delimiter: null,
            buffer: 0,
            columnThreshold: .01,
            initialSort: null,
            throttle: function(e, t) {
                var n, i, o, r, s = 0;
                return function() {
                    n = this, i = arguments;
                    var e = new Date - s;
                    return r || (e >= t ? a() : r = setTimeout(a, t - e)), o
                };

                function a() {
                    r = 0, s = +new Date, o = e.apply(n, i), n = null, i = null
                }
            },
            throttleTime: 300,
            staggerAmount: 15,
            staggerAmountMax: 150,
            useTransforms: !0,
            filterMode: L.FilterMode.ANY,
            isCentered: !1,
            roundTransforms: !0
        }, L.Point = m, L.Rect = g, L.__sorter = w, L.__getColumnSpan = _, L.__getAvailablePositions = k, L.__getShortColumn = A, L.__getCenteredPositions = I, L
    }()
}, function(e, t, n) {
    var i;
    n(64), i = jQuery, page.registerVendor("Slick"), page.initSlick = function() {
        i('[data-provide~="slider"]').each(function() {
            var e = i(this),
                t = {
                    speed: 1e3,
                    arrows: !1,
                    centerPadding: "0"
                };
            if (void 0 !== (t = i.extend(t, page.getDataOptions(e))).slidesToShow || void 0 !== t.centerMode) {
                var n = 1;
                void 0 !== t.slidesToScroll && 1 < t.slidesToScroll && (n = 2), t.responsive = [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: n
                    }
                }, {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "0px"
                    }
                }]
            }
            e.slick(t)
        })
    }
}, function(e, t, n) {
    var i, o, r;
    ! function() {
        "use strict";
        o = [n(3)], void 0 === (r = "function" == typeof(i = function(u) {
            "use strict";
            var s = window.Slick || {};
            (s = function() {
                var o = 0;

                function e(e, t) {
                    var n = this,
                        i;
                    n.defaults = {
                        accessibility: true,
                        adaptiveHeight: false,
                        appendArrows: u(e),
                        appendDots: u(e),
                        arrows: true,
                        asNavFor: null,
                        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                        autoplay: false,
                        autoplaySpeed: 3e3,
                        centerMode: false,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(e, t) {
                            return u('<button type="button" />').text(t + 1)
                        },
                        dots: false,
                        dotsClass: "slick-dots",
                        draggable: true,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: false,
                        focusOnSelect: false,
                        focusOnChange: false,
                        infinite: true,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: false,
                        pauseOnHover: true,
                        pauseOnFocus: true,
                        pauseOnDotsHover: false,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: false,
                        slide: "",
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: true,
                        swipeToSlide: false,
                        touchMove: true,
                        touchThreshold: 5,
                        useCSS: true,
                        useTransform: true,
                        variableWidth: false,
                        vertical: false,
                        verticalSwiping: false,
                        waitForAnimate: true,
                        zIndex: 1e3
                    };
                    n.initials = {
                        animating: false,
                        dragging: false,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: false,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: false,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: false,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: false,
                        unslicked: false
                    };
                    u.extend(n, n.initials);
                    n.activeBreakpoint = null;
                    n.animType = null;
                    n.animProp = null;
                    n.breakpoints = [];
                    n.breakpointSettings = [];
                    n.cssTransitions = false;
                    n.focussed = false;
                    n.interrupted = false;
                    n.hidden = "hidden";
                    n.paused = true;
                    n.positionProp = null;
                    n.respondTo = null;
                    n.rowCount = 1;
                    n.shouldClick = true;
                    n.$slider = u(e);
                    n.$slidesCache = null;
                    n.transformType = null;
                    n.transitionType = null;
                    n.visibilityChange = "visibilitychange";
                    n.windowWidth = 0;
                    n.windowTimer = null;
                    i = u(e).data("slick") || {};
                    n.options = u.extend({}, n.defaults, t, i);
                    n.currentSlide = n.options.initialSlide;
                    n.originalSettings = n.options;
                    if (typeof document.mozHidden !== "undefined") {
                        n.hidden = "mozHidden";
                        n.visibilityChange = "mozvisibilitychange"
                    } else if (typeof document.webkitHidden !== "undefined") {
                        n.hidden = "webkitHidden";
                        n.visibilityChange = "webkitvisibilitychange"
                    }
                    n.autoPlay = u.proxy(n.autoPlay, n);
                    n.autoPlayClear = u.proxy(n.autoPlayClear, n);
                    n.autoPlayIterator = u.proxy(n.autoPlayIterator, n);
                    n.changeSlide = u.proxy(n.changeSlide, n);
                    n.clickHandler = u.proxy(n.clickHandler, n);
                    n.selectHandler = u.proxy(n.selectHandler, n);
                    n.setPosition = u.proxy(n.setPosition, n);
                    n.swipeHandler = u.proxy(n.swipeHandler, n);
                    n.dragHandler = u.proxy(n.dragHandler, n);
                    n.keyHandler = u.proxy(n.keyHandler, n);
                    n.instanceUid = o++;
                    n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
                    n.registerBreakpoints();
                    n.init(true)
                }
                return e
            }()).prototype.activateADA = function() {
                var e = this;
                e.$slideTrack.find(".slick-active").attr({
                    "aria-hidden": "false"
                }).find("a, input, button, select").attr({
                    tabindex: "0"
                })
            }, s.prototype.addSlide = s.prototype.slickAdd = function(e, t, n) {
                var i = this;
                if (typeof t === "boolean") {
                    n = t;
                    t = null
                } else if (t < 0 || t >= i.slideCount) {
                    return false
                }
                i.unload();
                if (typeof t === "number") {
                    if (t === 0 && i.$slides.length === 0) {
                        u(e).appendTo(i.$slideTrack)
                    } else if (n) {
                        u(e).insertBefore(i.$slides.eq(t))
                    } else {
                        u(e).insertAfter(i.$slides.eq(t))
                    }
                } else {
                    if (n === true) {
                        u(e).prependTo(i.$slideTrack)
                    } else {
                        u(e).appendTo(i.$slideTrack)
                    }
                }
                i.$slides = i.$slideTrack.children(this.options.slide);
                i.$slideTrack.children(this.options.slide).detach();
                i.$slideTrack.append(i.$slides);
                i.$slides.each(function(e, t) {
                    u(t).attr("data-slick-index", e)
                });
                i.$slidesCache = i.$slides;
                i.reinit()
            }, s.prototype.animateHeight = function() {
                var e = this;
                if (e.options.slidesToShow === 1 && e.options.adaptiveHeight === true && e.options.vertical === false) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(true);
                    e.$list.animate({
                        height: t
                    }, e.options.speed)
                }
            }, s.prototype.animateSlide = function(e, t) {
                var n = {},
                    i = this;
                i.animateHeight();
                if (i.options.rtl === true && i.options.vertical === false) {
                    e = -e
                }
                if (i.transformsEnabled === false) {
                    if (i.options.vertical === false) {
                        i.$slideTrack.animate({
                            left: e
                        }, i.options.speed, i.options.easing, t)
                    } else {
                        i.$slideTrack.animate({
                            top: e
                        }, i.options.speed, i.options.easing, t)
                    }
                } else {
                    if (i.cssTransitions === false) {
                        if (i.options.rtl === true) {
                            i.currentLeft = -i.currentLeft
                        }
                        u({
                            animStart: i.currentLeft
                        }).animate({
                            animStart: e
                        }, {
                            duration: i.options.speed,
                            easing: i.options.easing,
                            step: function(e) {
                                e = Math.ceil(e);
                                if (i.options.vertical === false) {
                                    n[i.animType] = "translate(" + e + "px, 0px)";
                                    i.$slideTrack.css(n)
                                } else {
                                    n[i.animType] = "translate(0px," + e + "px)";
                                    i.$slideTrack.css(n)
                                }
                            },
                            complete: function() {
                                if (t) {
                                    t.call()
                                }
                            }
                        })
                    } else {
                        i.applyTransition();
                        e = Math.ceil(e);
                        if (i.options.vertical === false) {
                            n[i.animType] = "translate3d(" + e + "px, 0px, 0px)"
                        } else {
                            n[i.animType] = "translate3d(0px," + e + "px, 0px)"
                        }
                        i.$slideTrack.css(n);
                        if (t) {
                            setTimeout(function() {
                                i.disableTransition();
                                t.call()
                            }, i.options.speed)
                        }
                    }
                }
            }, s.prototype.getNavTarget = function() {
                var e = this,
                    t = e.options.asNavFor;
                if (t && t !== null) {
                    t = u(t).not(e.$slider)
                }
                return t
            }, s.prototype.asNavFor = function(t) {
                var e = this,
                    n = e.getNavTarget();
                if (n !== null && typeof n === "object") {
                    n.each(function() {
                        var e = u(this).slick("getSlick");
                        if (!e.unslicked) {
                            e.slideHandler(t, true)
                        }
                    })
                }
            }, s.prototype.applyTransition = function(e) {
                var t = this,
                    n = {};
                if (t.options.fade === false) {
                    n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase
                } else {
                    n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase
                }
                if (t.options.fade === false) {
                    t.$slideTrack.css(n)
                } else {
                    t.$slides.eq(e).css(n)
                }
            }, s.prototype.autoPlay = function() {
                var e = this;
                e.autoPlayClear();
                if (e.slideCount > e.options.slidesToShow) {
                    e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed)
                }
            }, s.prototype.autoPlayClear = function() {
                var e = this;
                if (e.autoPlayTimer) {
                    clearInterval(e.autoPlayTimer)
                }
            }, s.prototype.autoPlayIterator = function() {
                var e = this,
                    t = e.currentSlide + e.options.slidesToScroll;
                if (!e.paused && !e.interrupted && !e.focussed) {
                    if (e.options.infinite === false) {
                        if (e.direction === 1 && e.currentSlide + 1 === e.slideCount - 1) {
                            e.direction = 0
                        } else if (e.direction === 0) {
                            t = e.currentSlide - e.options.slidesToScroll;
                            if (e.currentSlide - 1 === 0) {
                                e.direction = 1
                            }
                        }
                    }
                    e.slideHandler(t)
                }
            }, s.prototype.buildArrows = function() {
                var e = this;
                if (e.options.arrows === true) {
                    e.$prevArrow = u(e.options.prevArrow).addClass("slick-arrow");
                    e.$nextArrow = u(e.options.nextArrow).addClass("slick-arrow");
                    if (e.slideCount > e.options.slidesToShow) {
                        e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
                        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
                        if (e.htmlExpr.test(e.options.prevArrow)) {
                            e.$prevArrow.prependTo(e.options.appendArrows)
                        }
                        if (e.htmlExpr.test(e.options.nextArrow)) {
                            e.$nextArrow.appendTo(e.options.appendArrows)
                        }
                        if (e.options.infinite !== true) {
                            e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")
                        }
                    } else {
                        e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                            "aria-disabled": "true",
                            tabindex: "-1"
                        })
                    }
                }
            }, s.prototype.buildDots = function() {
                var e = this,
                    t, n;
                if (e.options.dots === true && e.slideCount > e.options.slidesToShow) {
                    e.$slider.addClass("slick-dotted");
                    n = u("<ul />").addClass(e.options.dotsClass);
                    for (t = 0; t <= e.getDotCount(); t += 1) {
                        n.append(u("<li />").append(e.options.customPaging.call(this, e, t)))
                    }
                    e.$dots = n.appendTo(e.options.appendDots);
                    e.$dots.find("li").first().addClass("slick-active")
                }
            }, s.prototype.buildOut = function() {
                var e = this;
                e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
                e.slideCount = e.$slides.length;
                e.$slides.each(function(e, t) {
                    u(t).attr("data-slick-index", e).data("originalStyling", u(t).attr("style") || "")
                });
                e.$slider.addClass("slick-slider");
                e.$slideTrack = e.slideCount === 0 ? u('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent();
                e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent();
                e.$slideTrack.css("opacity", 0);
                if (e.options.centerMode === true || e.options.swipeToSlide === true) {
                    e.options.slidesToScroll = 1
                }
                u("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading");
                e.setupInfinite();
                e.buildArrows();
                e.buildDots();
                e.updateDots();
                e.setSlideClasses(typeof e.currentSlide === "number" ? e.currentSlide : 0);
                if (e.options.draggable === true) {
                    e.$list.addClass("draggable")
                }
            }, s.prototype.buildRows = function() {
                var e = this,
                    t, n, i, o, r, s, a;
                o = document.createDocumentFragment();
                s = e.$slider.children();
                if (e.options.rows > 0) {
                    a = e.options.slidesPerRow * e.options.rows;
                    r = Math.ceil(s.length / a);
                    for (t = 0; t < r; t++) {
                        var l = document.createElement("div");
                        for (n = 0; n < e.options.rows; n++) {
                            var c = document.createElement("div");
                            for (i = 0; i < e.options.slidesPerRow; i++) {
                                var u = t * a + (n * e.options.slidesPerRow + i);
                                if (s.get(u)) {
                                    c.appendChild(s.get(u))
                                }
                            }
                            l.appendChild(c)
                        }
                        o.appendChild(l)
                    }
                    e.$slider.empty().append(o);
                    e.$slider.children().children().children().css({
                        width: 100 / e.options.slidesPerRow + "%",
                        display: "inline-block"
                    })
                }
            }, s.prototype.checkResponsive = function(e, t) {
                var n = this,
                    i, o, r, s = false;
                var a = n.$slider.width();
                var l = window.innerWidth || u(window).width();
                if (n.respondTo === "window") {
                    r = l
                } else if (n.respondTo === "slider") {
                    r = a
                } else if (n.respondTo === "min") {
                    r = Math.min(l, a)
                }
                if (n.options.responsive && n.options.responsive.length && n.options.responsive !== null) {
                    o = null;
                    for (i in n.breakpoints) {
                        if (n.breakpoints.hasOwnProperty(i)) {
                            if (n.originalSettings.mobileFirst === false) {
                                if (r < n.breakpoints[i]) {
                                    o = n.breakpoints[i]
                                }
                            } else {
                                if (r > n.breakpoints[i]) {
                                    o = n.breakpoints[i]
                                }
                            }
                        }
                    }
                    if (o !== null) {
                        if (n.activeBreakpoint !== null) {
                            if (o !== n.activeBreakpoint || t) {
                                n.activeBreakpoint = o;
                                if (n.breakpointSettings[o] === "unslick") {
                                    n.unslick(o)
                                } else {
                                    n.options = u.extend({}, n.originalSettings, n.breakpointSettings[o]);
                                    if (e === true) {
                                        n.currentSlide = n.options.initialSlide
                                    }
                                    n.refresh(e)
                                }
                                s = o
                            }
                        } else {
                            n.activeBreakpoint = o;
                            if (n.breakpointSettings[o] === "unslick") {
                                n.unslick(o)
                            } else {
                                n.options = u.extend({}, n.originalSettings, n.breakpointSettings[o]);
                                if (e === true) {
                                    n.currentSlide = n.options.initialSlide
                                }
                                n.refresh(e)
                            }
                            s = o
                        }
                    } else {
                        if (n.activeBreakpoint !== null) {
                            n.activeBreakpoint = null;
                            n.options = n.originalSettings;
                            if (e === true) {
                                n.currentSlide = n.options.initialSlide
                            }
                            n.refresh(e);
                            s = o
                        }
                    }
                    if (!e && s !== false) {
                        n.$slider.trigger("breakpoint", [n, s])
                    }
                }
            }, s.prototype.changeSlide = function(e, t) {
                var n = this,
                    i = u(e.currentTarget),
                    o, r, s;
                if (i.is("a")) {
                    e.preventDefault()
                }
                if (!i.is("li")) {
                    i = i.closest("li")
                }
                s = n.slideCount % n.options.slidesToScroll !== 0;
                o = s ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll;
                switch (e.data.message) {
                    case "previous":
                        r = o === 0 ? n.options.slidesToScroll : n.options.slidesToShow - o;
                        if (n.slideCount > n.options.slidesToShow) {
                            n.slideHandler(n.currentSlide - r, false, t)
                        }
                        break;
                    case "next":
                        r = o === 0 ? n.options.slidesToScroll : o;
                        if (n.slideCount > n.options.slidesToShow) {
                            n.slideHandler(n.currentSlide + r, false, t)
                        }
                        break;
                    case "index":
                        var a = e.data.index === 0 ? 0 : e.data.index || i.index() * n.options.slidesToScroll;
                        n.slideHandler(n.checkNavigable(a), false, t);
                        i.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }, s.prototype.checkNavigable = function(e) {
                var t = this,
                    n, i;
                n = t.getNavigableIndexes();
                i = 0;
                if (e > n[n.length - 1]) {
                    e = n[n.length - 1]
                } else {
                    for (var o in n) {
                        if (e < n[o]) {
                            e = i;
                            break
                        }
                        i = n[o]
                    }
                }
                return e
            }, s.prototype.cleanUpEvents = function() {
                var e = this;
                if (e.options.dots && e.$dots !== null) {
                    u("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", u.proxy(e.interrupt, e, true)).off("mouseleave.slick", u.proxy(e.interrupt, e, false));
                    if (e.options.accessibility === true) {
                        e.$dots.off("keydown.slick", e.keyHandler)
                    }
                }
                e.$slider.off("focus.slick blur.slick");
                if (e.options.arrows === true && e.slideCount > e.options.slidesToShow) {
                    e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide);
                    e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide);
                    if (e.options.accessibility === true) {
                        e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler);
                        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler)
                    }
                }
                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler);
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler);
                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler);
                e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler);
                e.$list.off("click.slick", e.clickHandler);
                u(document).off(e.visibilityChange, e.visibility);
                e.cleanUpSlideEvents();
                if (e.options.accessibility === true) {
                    e.$list.off("keydown.slick", e.keyHandler)
                }
                if (e.options.focusOnSelect === true) {
                    u(e.$slideTrack).children().off("click.slick", e.selectHandler)
                }
                u(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange);
                u(window).off("resize.slick.slick-" + e.instanceUid, e.resize);
                u("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault);
                u(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
            }, s.prototype.cleanUpSlideEvents = function() {
                var e = this;
                e.$list.off("mouseenter.slick", u.proxy(e.interrupt, e, true));
                e.$list.off("mouseleave.slick", u.proxy(e.interrupt, e, false))
            }, s.prototype.cleanUpRows = function() {
                var e = this,
                    t;
                if (e.options.rows > 0) {
                    t = e.$slides.children().children();
                    t.removeAttr("style");
                    e.$slider.empty().append(t)
                }
            }, s.prototype.clickHandler = function(e) {
                var t = this;
                if (t.shouldClick === false) {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    e.preventDefault()
                }
            }, s.prototype.destroy = function(e) {
                var t = this;
                t.autoPlayClear();
                t.touchObject = {};
                t.cleanUpEvents();
                u(".slick-cloned", t.$slider).detach();
                if (t.$dots) {
                    t.$dots.remove()
                }
                if (t.$prevArrow && t.$prevArrow.length) {
                    t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
                    if (t.htmlExpr.test(t.options.prevArrow)) {
                        t.$prevArrow.remove()
                    }
                }
                if (t.$nextArrow && t.$nextArrow.length) {
                    t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
                    if (t.htmlExpr.test(t.options.nextArrow)) {
                        t.$nextArrow.remove()
                    }
                }
                if (t.$slides) {
                    t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                        u(this).attr("style", u(this).data("originalStyling"))
                    });
                    t.$slideTrack.children(this.options.slide).detach();
                    t.$slideTrack.detach();
                    t.$list.detach();
                    t.$slider.append(t.$slides)
                }
                t.cleanUpRows();
                t.$slider.removeClass("slick-slider");
                t.$slider.removeClass("slick-initialized");
                t.$slider.removeClass("slick-dotted");
                t.unslicked = true;
                if (!e) {
                    t.$slider.trigger("destroy", [t])
                }
            }, s.prototype.disableTransition = function(e) {
                var t = this,
                    n = {};
                n[t.transitionType] = "";
                if (t.options.fade === false) {
                    t.$slideTrack.css(n)
                } else {
                    t.$slides.eq(e).css(n)
                }
            }, s.prototype.fadeSlide = function(e, t) {
                var n = this;
                if (n.cssTransitions === false) {
                    n.$slides.eq(e).css({
                        zIndex: n.options.zIndex
                    });
                    n.$slides.eq(e).animate({
                        opacity: 1
                    }, n.options.speed, n.options.easing, t)
                } else {
                    n.applyTransition(e);
                    n.$slides.eq(e).css({
                        opacity: 1,
                        zIndex: n.options.zIndex
                    });
                    if (t) {
                        setTimeout(function() {
                            n.disableTransition(e);
                            t.call()
                        }, n.options.speed)
                    }
                }
            }, s.prototype.fadeSlideOut = function(e) {
                var t = this;
                if (t.cssTransitions === false) {
                    t.$slides.eq(e).animate({
                        opacity: 0,
                        zIndex: t.options.zIndex - 2
                    }, t.options.speed, t.options.easing)
                } else {
                    t.applyTransition(e);
                    t.$slides.eq(e).css({
                        opacity: 0,
                        zIndex: t.options.zIndex - 2
                    })
                }
            }, s.prototype.filterSlides = s.prototype.slickFilter = function(e) {
                var t = this;
                if (e !== null) {
                    t.$slidesCache = t.$slides;
                    t.unload();
                    t.$slideTrack.children(this.options.slide).detach();
                    t.$slidesCache.filter(e).appendTo(t.$slideTrack);
                    t.reinit()
                }
            }, s.prototype.focusHandler = function() {
                var n = this;
                n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
                    e.stopImmediatePropagation();
                    var t = u(this);
                    setTimeout(function() {
                        if (n.options.pauseOnFocus) {
                            n.focussed = t.is(":focus");
                            n.autoPlay()
                        }
                    }, 0)
                })
            }, s.prototype.getCurrent = s.prototype.slickCurrentSlide = function() {
                var e = this;
                return e.currentSlide
            }, s.prototype.getDotCount = function() {
                var e = this;
                var t = 0;
                var n = 0;
                var i = 0;
                if (e.options.infinite === true) {
                    if (e.slideCount <= e.options.slidesToShow) {
                        ++i
                    } else {
                        while (t < e.slideCount) {
                            ++i;
                            t = n + e.options.slidesToScroll;
                            n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow
                        }
                    }
                } else if (e.options.centerMode === true) {
                    i = e.slideCount
                } else if (!e.options.asNavFor) {
                    i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll)
                } else {
                    while (t < e.slideCount) {
                        ++i;
                        t = n + e.options.slidesToScroll;
                        n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow
                    }
                }
                return i - 1
            }, s.prototype.getLeft = function(e) {
                var t = this,
                    n, i, o = 0,
                    r, s;
                t.slideOffset = 0;
                i = t.$slides.first().outerHeight(true);
                if (t.options.infinite === true) {
                    if (t.slideCount > t.options.slidesToShow) {
                        t.slideOffset = t.slideWidth * t.options.slidesToShow * -1;
                        s = -1;
                        if (t.options.vertical === true && t.options.centerMode === true) {
                            if (t.options.slidesToShow === 2) {
                                s = -1.5
                            } else if (t.options.slidesToShow === 1) {
                                s = -2
                            }
                        }
                        o = i * t.options.slidesToShow * s
                    }
                    if (t.slideCount % t.options.slidesToScroll !== 0) {
                        if (e + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow) {
                            if (e > t.slideCount) {
                                t.slideOffset = (t.options.slidesToShow - (e - t.slideCount)) * t.slideWidth * -1;
                                o = (t.options.slidesToShow - (e - t.slideCount)) * i * -1
                            } else {
                                t.slideOffset = t.slideCount % t.options.slidesToScroll * t.slideWidth * -1;
                                o = t.slideCount % t.options.slidesToScroll * i * -1
                            }
                        }
                    }
                } else {
                    if (e + t.options.slidesToShow > t.slideCount) {
                        t.slideOffset = (e + t.options.slidesToShow - t.slideCount) * t.slideWidth;
                        o = (e + t.options.slidesToShow - t.slideCount) * i
                    }
                }
                if (t.slideCount <= t.options.slidesToShow) {
                    t.slideOffset = 0;
                    o = 0
                }
                if (t.options.centerMode === true && t.slideCount <= t.options.slidesToShow) {
                    t.slideOffset = t.slideWidth * Math.floor(t.options.slidesToShow) / 2 - t.slideWidth * t.slideCount / 2
                } else if (t.options.centerMode === true && t.options.infinite === true) {
                    t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth
                } else if (t.options.centerMode === true) {
                    t.slideOffset = 0;
                    t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)
                }
                if (t.options.vertical === false) {
                    n = e * t.slideWidth * -1 + t.slideOffset
                } else {
                    n = e * i * -1 + o
                }
                if (t.options.variableWidth === true) {
                    if (t.slideCount <= t.options.slidesToShow || t.options.infinite === false) {
                        r = t.$slideTrack.children(".slick-slide").eq(e)
                    } else {
                        r = t.$slideTrack.children(".slick-slide").eq(e + t.options.slidesToShow)
                    }
                    if (t.options.rtl === true) {
                        if (r[0]) {
                            n = (t.$slideTrack.width() - r[0].offsetLeft - r.width()) * -1
                        } else {
                            n = 0
                        }
                    } else {
                        n = r[0] ? r[0].offsetLeft * -1 : 0
                    }
                    if (t.options.centerMode === true) {
                        if (t.slideCount <= t.options.slidesToShow || t.options.infinite === false) {
                            r = t.$slideTrack.children(".slick-slide").eq(e)
                        } else {
                            r = t.$slideTrack.children(".slick-slide").eq(e + t.options.slidesToShow + 1)
                        }
                        if (t.options.rtl === true) {
                            if (r[0]) {
                                n = (t.$slideTrack.width() - r[0].offsetLeft - r.width()) * -1
                            } else {
                                n = 0
                            }
                        } else {
                            n = r[0] ? r[0].offsetLeft * -1 : 0
                        }
                        n += (t.$list.width() - r.outerWidth()) / 2
                    }
                }
                return n
            }, s.prototype.getOption = s.prototype.slickGetOption = function(e) {
                var t = this;
                return t.options[e]
            }, s.prototype.getNavigableIndexes = function() {
                var e = this,
                    t = 0,
                    n = 0,
                    i = [],
                    o;
                if (e.options.infinite === false) {
                    o = e.slideCount
                } else {
                    t = e.options.slidesToScroll * -1;
                    n = e.options.slidesToScroll * -1;
                    o = e.slideCount * 2
                }
                while (t < o) {
                    i.push(t);
                    t = n + e.options.slidesToScroll;
                    n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow
                }
                return i
            }, s.prototype.getSlick = function() {
                return this
            }, s.prototype.getSlideCount = function() {
                var n = this,
                    e, i, o;
                o = n.options.centerMode === true ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0;
                if (n.options.swipeToSlide === true) {
                    n.$slideTrack.find(".slick-slide").each(function(e, t) {
                        if (t.offsetLeft - o + u(t).outerWidth() / 2 > n.swipeLeft * -1) {
                            i = t;
                            return false
                        }
                    });
                    e = Math.abs(u(i).attr("data-slick-index") - n.currentSlide) || 1;
                    return e
                } else {
                    return n.options.slidesToScroll
                }
            }, s.prototype.goTo = s.prototype.slickGoTo = function(e, t) {
                var n = this;
                n.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(e)
                    }
                }, t)
            }, s.prototype.init = function(e) {
                var t = this;
                if (!u(t.$slider).hasClass("slick-initialized")) {
                    u(t.$slider).addClass("slick-initialized");
                    t.buildRows();
                    t.buildOut();
                    t.setProps();
                    t.startLoad();
                    t.loadSlider();
                    t.initializeEvents();
                    t.updateArrows();
                    t.updateDots();
                    t.checkResponsive(true);
                    t.focusHandler()
                }
                if (e) {
                    t.$slider.trigger("init", [t])
                }
                if (t.options.accessibility === true) {
                    t.initADA()
                }
                if (t.options.autoplay) {
                    t.paused = false;
                    t.autoPlay()
                }
            }, s.prototype.initADA = function() {
                var i = this,
                    n = Math.ceil(i.slideCount / i.options.slidesToShow),
                    o = i.getNavigableIndexes().filter(function(e) {
                        return e >= 0 && e < i.slideCount
                    });
                i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({
                    tabindex: "-1"
                });
                if (i.$dots !== null) {
                    i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(e) {
                        var t = o.indexOf(e);
                        u(this).attr({
                            role: "tabpanel",
                            id: "slick-slide" + i.instanceUid + e,
                            tabindex: -1
                        });
                        if (t !== -1) {
                            var n = "slick-slide-control" + i.instanceUid + t;
                            if (u("#" + n).length) {
                                u(this).attr({
                                    "aria-describedby": n
                                })
                            }
                        }
                    });
                    i.$dots.attr("role", "tablist").find("li").each(function(e) {
                        var t = o[e];
                        u(this).attr({
                            role: "presentation"
                        });
                        u(this).find("button").first().attr({
                            role: "tab",
                            id: "slick-slide-control" + i.instanceUid + e,
                            "aria-controls": "slick-slide" + i.instanceUid + t,
                            "aria-label": e + 1 + " of " + n,
                            "aria-selected": null,
                            tabindex: "-1"
                        })
                    }).eq(i.currentSlide).find("button").attr({
                        "aria-selected": "true",
                        tabindex: "0"
                    }).end()
                }
                for (var e = i.currentSlide, t = e + i.options.slidesToShow; e < t; e++) {
                    if (i.options.focusOnChange) {
                        i.$slides.eq(e).attr({
                            tabindex: "0"
                        })
                    } else {
                        i.$slides.eq(e).removeAttr("tabindex")
                    }
                }
                i.activateADA()
            }, s.prototype.initArrowEvents = function() {
                var e = this;
                if (e.options.arrows === true && e.slideCount > e.options.slidesToShow) {
                    e.$prevArrow.off("click.slick").on("click.slick", {
                        message: "previous"
                    }, e.changeSlide);
                    e.$nextArrow.off("click.slick").on("click.slick", {
                        message: "next"
                    }, e.changeSlide);
                    if (e.options.accessibility === true) {
                        e.$prevArrow.on("keydown.slick", e.keyHandler);
                        e.$nextArrow.on("keydown.slick", e.keyHandler)
                    }
                }
            }, s.prototype.initDotEvents = function() {
                var e = this;
                if (e.options.dots === true && e.slideCount > e.options.slidesToShow) {
                    u("li", e.$dots).on("click.slick", {
                        message: "index"
                    }, e.changeSlide);
                    if (e.options.accessibility === true) {
                        e.$dots.on("keydown.slick", e.keyHandler)
                    }
                }
                if (e.options.dots === true && e.options.pauseOnDotsHover === true && e.slideCount > e.options.slidesToShow) {
                    u("li", e.$dots).on("mouseenter.slick", u.proxy(e.interrupt, e, true)).on("mouseleave.slick", u.proxy(e.interrupt, e, false))
                }
            }, s.prototype.initSlideEvents = function() {
                var e = this;
                if (e.options.pauseOnHover) {
                    e.$list.on("mouseenter.slick", u.proxy(e.interrupt, e, true));
                    e.$list.on("mouseleave.slick", u.proxy(e.interrupt, e, false))
                }
            }, s.prototype.initializeEvents = function() {
                var e = this;
                e.initArrowEvents();
                e.initDotEvents();
                e.initSlideEvents();
                e.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, e.swipeHandler);
                e.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, e.swipeHandler);
                e.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, e.swipeHandler);
                e.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, e.swipeHandler);
                e.$list.on("click.slick", e.clickHandler);
                u(document).on(e.visibilityChange, u.proxy(e.visibility, e));
                if (e.options.accessibility === true) {
                    e.$list.on("keydown.slick", e.keyHandler)
                }
                if (e.options.focusOnSelect === true) {
                    u(e.$slideTrack).children().on("click.slick", e.selectHandler)
                }
                u(window).on("orientationchange.slick.slick-" + e.instanceUid, u.proxy(e.orientationChange, e));
                u(window).on("resize.slick.slick-" + e.instanceUid, u.proxy(e.resize, e));
                u("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault);
                u(window).on("load.slick.slick-" + e.instanceUid, e.setPosition);
                u(e.setPosition)
            }, s.prototype.initUI = function() {
                var e = this;
                if (e.options.arrows === true && e.slideCount > e.options.slidesToShow) {
                    e.$prevArrow.show();
                    e.$nextArrow.show()
                }
                if (e.options.dots === true && e.slideCount > e.options.slidesToShow) {
                    e.$dots.show()
                }
            }, s.prototype.keyHandler = function(e) {
                var t = this;
                if (!e.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
                    if (e.keyCode === 37 && t.options.accessibility === true) {
                        t.changeSlide({
                            data: {
                                message: t.options.rtl === true ? "next" : "previous"
                            }
                        })
                    } else if (e.keyCode === 39 && t.options.accessibility === true) {
                        t.changeSlide({
                            data: {
                                message: t.options.rtl === true ? "previous" : "next"
                            }
                        })
                    }
                }
            }, s.prototype.lazyLoad = function() {
                var r = this,
                    e, t, n, i;

                function o(e) {
                    u("img[data-lazy]", e).each(function() {
                        var e = u(this),
                            t = u(this).attr("data-lazy"),
                            n = u(this).attr("data-srcset"),
                            i = u(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                            o = document.createElement("img");
                        o.onload = function() {
                            e.animate({
                                opacity: 0
                            }, 100, function() {
                                if (n) {
                                    e.attr("srcset", n);
                                    if (i) {
                                        e.attr("sizes", i)
                                    }
                                }
                                e.attr("src", t).animate({
                                    opacity: 1
                                }, 200, function() {
                                    e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                });
                                r.$slider.trigger("lazyLoaded", [r, e, t])
                            })
                        };
                        o.onerror = function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                            r.$slider.trigger("lazyLoadError", [r, e, t])
                        };
                        o.src = t
                    })
                }
                if (r.options.centerMode === true) {
                    if (r.options.infinite === true) {
                        n = r.currentSlide + (r.options.slidesToShow / 2 + 1);
                        i = n + r.options.slidesToShow + 2
                    } else {
                        n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1));
                        i = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide
                    }
                } else {
                    n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide;
                    i = Math.ceil(n + r.options.slidesToShow);
                    if (r.options.fade === true) {
                        if (n > 0) n--;
                        if (i <= r.slideCount) i++
                    }
                }
                e = r.$slider.find(".slick-slide").slice(n, i);
                if (r.options.lazyLoad === "anticipated") {
                    var s = n - 1,
                        a = i,
                        l = r.$slider.find(".slick-slide");
                    for (var c = 0; c < r.options.slidesToScroll; c++) {
                        if (s < 0) s = r.slideCount - 1;
                        e = e.add(l.eq(s));
                        e = e.add(l.eq(a));
                        s--;
                        a++
                    }
                }
                o(e);
                if (r.slideCount <= r.options.slidesToShow) {
                    t = r.$slider.find(".slick-slide");
                    o(t)
                } else if (r.currentSlide >= r.slideCount - r.options.slidesToShow) {
                    t = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow);
                    o(t)
                } else if (r.currentSlide === 0) {
                    t = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1);
                    o(t)
                }
            }, s.prototype.loadSlider = function() {
                var e = this;
                e.setPosition();
                e.$slideTrack.css({
                    opacity: 1
                });
                e.$slider.removeClass("slick-loading");
                e.initUI();
                if (e.options.lazyLoad === "progressive") {
                    e.progressiveLazyLoad()
                }
            }, s.prototype.next = s.prototype.slickNext = function() {
                var e = this;
                e.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            }, s.prototype.orientationChange = function() {
                var e = this;
                e.checkResponsive();
                e.setPosition()
            }, s.prototype.pause = s.prototype.slickPause = function() {
                var e = this;
                e.autoPlayClear();
                e.paused = true
            }, s.prototype.play = s.prototype.slickPlay = function() {
                var e = this;
                e.autoPlay();
                e.options.autoplay = true;
                e.paused = false;
                e.focussed = false;
                e.interrupted = false
            }, s.prototype.postSlide = function(e) {
                var t = this;
                if (!t.unslicked) {
                    t.$slider.trigger("afterChange", [t, e]);
                    t.animating = false;
                    if (t.slideCount > t.options.slidesToShow) {
                        t.setPosition()
                    }
                    t.swipeLeft = null;
                    if (t.options.autoplay) {
                        t.autoPlay()
                    }
                    if (t.options.accessibility === true) {
                        t.initADA();
                        if (t.options.focusOnChange) {
                            var n = u(t.$slides.get(t.currentSlide));
                            n.attr("tabindex", 0).focus()
                        }
                    }
                }
            }, s.prototype.prev = s.prototype.slickPrev = function() {
                var e = this;
                e.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            }, s.prototype.preventDefault = function(e) {
                e.preventDefault()
            }, s.prototype.progressiveLazyLoad = function(e) {
                e = e || 1;
                var t = this,
                    n = u("img[data-lazy]", t.$slider),
                    i, o, r, s, a;
                if (n.length) {
                    i = n.first();
                    o = i.attr("data-lazy");
                    r = i.attr("data-srcset");
                    s = i.attr("data-sizes") || t.$slider.attr("data-sizes");
                    a = document.createElement("img");
                    a.onload = function() {
                        if (r) {
                            i.attr("srcset", r);
                            if (s) {
                                i.attr("sizes", s)
                            }
                        }
                        i.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                        if (t.options.adaptiveHeight === true) {
                            t.setPosition()
                        }
                        t.$slider.trigger("lazyLoaded", [t, i, o]);
                        t.progressiveLazyLoad()
                    };
                    a.onerror = function() {
                        if (e < 3) {
                            setTimeout(function() {
                                t.progressiveLazyLoad(e + 1)
                            }, 500)
                        } else {
                            i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                            t.$slider.trigger("lazyLoadError", [t, i, o]);
                            t.progressiveLazyLoad()
                        }
                    };
                    a.src = o
                } else {
                    t.$slider.trigger("allImagesLoaded", [t])
                }
            }, s.prototype.refresh = function(e) {
                var t = this,
                    n, i;
                i = t.slideCount - t.options.slidesToShow;
                if (!t.options.infinite && t.currentSlide > i) {
                    t.currentSlide = i
                }
                if (t.slideCount <= t.options.slidesToShow) {
                    t.currentSlide = 0
                }
                n = t.currentSlide;
                t.destroy(true);
                u.extend(t, t.initials, {
                    currentSlide: n
                });
                t.init();
                if (!e) {
                    t.changeSlide({
                        data: {
                            message: "index",
                            index: n
                        }
                    }, false)
                }
            }, s.prototype.registerBreakpoints = function() {
                var n = this,
                    e, t, i, o = n.options.responsive || null;
                if (u.type(o) === "array" && o.length) {
                    n.respondTo = n.options.respondTo || "window";
                    for (e in o) {
                        i = n.breakpoints.length - 1;
                        if (o.hasOwnProperty(e)) {
                            t = o[e].breakpoint;
                            while (i >= 0) {
                                if (n.breakpoints[i] && n.breakpoints[i] === t) {
                                    n.breakpoints.splice(i, 1)
                                }
                                i--
                            }
                            n.breakpoints.push(t);
                            n.breakpointSettings[t] = o[e].settings
                        }
                    }
                    n.breakpoints.sort(function(e, t) {
                        return n.options.mobileFirst ? e - t : t - e
                    })
                }
            }, s.prototype.reinit = function() {
                var e = this;
                e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide");
                e.slideCount = e.$slides.length;
                if (e.currentSlide >= e.slideCount && e.currentSlide !== 0) {
                    e.currentSlide = e.currentSlide - e.options.slidesToScroll
                }
                if (e.slideCount <= e.options.slidesToShow) {
                    e.currentSlide = 0
                }
                e.registerBreakpoints();
                e.setProps();
                e.setupInfinite();
                e.buildArrows();
                e.updateArrows();
                e.initArrowEvents();
                e.buildDots();
                e.updateDots();
                e.initDotEvents();
                e.cleanUpSlideEvents();
                e.initSlideEvents();
                e.checkResponsive(false, true);
                if (e.options.focusOnSelect === true) {
                    u(e.$slideTrack).children().on("click.slick", e.selectHandler)
                }
                e.setSlideClasses(typeof e.currentSlide === "number" ? e.currentSlide : 0);
                e.setPosition();
                e.focusHandler();
                e.paused = !e.options.autoplay;
                e.autoPlay();
                e.$slider.trigger("reInit", [e])
            }, s.prototype.resize = function() {
                var e = this;
                if (u(window).width() !== e.windowWidth) {
                    clearTimeout(e.windowDelay);
                    e.windowDelay = window.setTimeout(function() {
                        e.windowWidth = u(window).width();
                        e.checkResponsive();
                        if (!e.unslicked) {
                            e.setPosition()
                        }
                    }, 50)
                }
            }, s.prototype.removeSlide = s.prototype.slickRemove = function(e, t, n) {
                var i = this;
                if (typeof e === "boolean") {
                    t = e;
                    e = t === true ? 0 : i.slideCount - 1
                } else {
                    e = t === true ? --e : e
                }
                if (i.slideCount < 1 || e < 0 || e > i.slideCount - 1) {
                    return false
                }
                i.unload();
                if (n === true) {
                    i.$slideTrack.children().remove()
                } else {
                    i.$slideTrack.children(this.options.slide).eq(e).remove()
                }
                i.$slides = i.$slideTrack.children(this.options.slide);
                i.$slideTrack.children(this.options.slide).detach();
                i.$slideTrack.append(i.$slides);
                i.$slidesCache = i.$slides;
                i.reinit()
            }, s.prototype.setCSS = function(e) {
                var t = this,
                    n = {},
                    i, o;
                if (t.options.rtl === true) {
                    e = -e
                }
                i = t.positionProp == "left" ? Math.ceil(e) + "px" : "0px";
                o = t.positionProp == "top" ? Math.ceil(e) + "px" : "0px";
                n[t.positionProp] = e;
                if (t.transformsEnabled === false) {
                    t.$slideTrack.css(n)
                } else {
                    n = {};
                    if (t.cssTransitions === false) {
                        n[t.animType] = "translate(" + i + ", " + o + ")";
                        t.$slideTrack.css(n)
                    } else {
                        n[t.animType] = "translate3d(" + i + ", " + o + ", 0px)";
                        t.$slideTrack.css(n)
                    }
                }
            }, s.prototype.setDimensions = function() {
                var e = this;
                if (e.options.vertical === false) {
                    if (e.options.centerMode === true) {
                        e.$list.css({
                            padding: "0px " + e.options.centerPadding
                        })
                    }
                } else {
                    e.$list.height(e.$slides.first().outerHeight(true) * e.options.slidesToShow);
                    if (e.options.centerMode === true) {
                        e.$list.css({
                            padding: e.options.centerPadding + " 0px"
                        })
                    }
                }
                e.listWidth = e.$list.width();
                e.listHeight = e.$list.height();
                if (e.options.vertical === false && e.options.variableWidth === false) {
                    e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow);
                    e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))
                } else if (e.options.variableWidth === true) {
                    e.$slideTrack.width(5e3 * e.slideCount)
                } else {
                    e.slideWidth = Math.ceil(e.listWidth);
                    e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(true) * e.$slideTrack.children(".slick-slide").length))
                }
                var t = e.$slides.first().outerWidth(true) - e.$slides.first().width();
                if (e.options.variableWidth === false) e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
            }, s.prototype.setFade = function() {
                var n = this,
                    i;
                n.$slides.each(function(e, t) {
                    i = n.slideWidth * e * -1;
                    if (n.options.rtl === true) {
                        u(t).css({
                            position: "relative",
                            right: i,
                            top: 0,
                            zIndex: n.options.zIndex - 2,
                            opacity: 0
                        })
                    } else {
                        u(t).css({
                            position: "relative",
                            left: i,
                            top: 0,
                            zIndex: n.options.zIndex - 2,
                            opacity: 0
                        })
                    }
                });
                n.$slides.eq(n.currentSlide).css({
                    zIndex: n.options.zIndex - 1,
                    opacity: 1
                })
            }, s.prototype.setHeight = function() {
                var e = this;
                if (e.options.slidesToShow === 1 && e.options.adaptiveHeight === true && e.options.vertical === false) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(true);
                    e.$list.css("height", t)
                }
            }, s.prototype.setOption = s.prototype.slickSetOption = function() {
                var n = this,
                    e, t, i, o, r = false,
                    s;
                if (u.type(arguments[0]) === "object") {
                    i = arguments[0];
                    r = arguments[1];
                    s = "multiple"
                } else if (u.type(arguments[0]) === "string") {
                    i = arguments[0];
                    o = arguments[1];
                    r = arguments[2];
                    if (arguments[0] === "responsive" && u.type(arguments[1]) === "array") {
                        s = "responsive"
                    } else if (typeof arguments[1] !== "undefined") {
                        s = "single"
                    }
                }
                if (s === "single") {
                    n.options[i] = o
                } else if (s === "multiple") {
                    u.each(i, function(e, t) {
                        n.options[e] = t
                    })
                } else if (s === "responsive") {
                    for (t in o) {
                        if (u.type(n.options.responsive) !== "array") {
                            n.options.responsive = [o[t]]
                        } else {
                            e = n.options.responsive.length - 1;
                            while (e >= 0) {
                                if (n.options.responsive[e].breakpoint === o[t].breakpoint) {
                                    n.options.responsive.splice(e, 1)
                                }
                                e--
                            }
                            n.options.responsive.push(o[t])
                        }
                    }
                }
                if (r) {
                    n.unload();
                    n.reinit()
                }
            }, s.prototype.setPosition = function() {
                var e = this;
                e.setDimensions();
                e.setHeight();
                if (e.options.fade === false) {
                    e.setCSS(e.getLeft(e.currentSlide))
                } else {
                    e.setFade()
                }
                e.$slider.trigger("setPosition", [e])
            }, s.prototype.setProps = function() {
                var e = this,
                    t = document.body.style;
                e.positionProp = e.options.vertical === true ? "top" : "left";
                if (e.positionProp === "top") {
                    e.$slider.addClass("slick-vertical")
                } else {
                    e.$slider.removeClass("slick-vertical")
                }
                if (t.WebkitTransition !== undefined || t.MozTransition !== undefined || t.msTransition !== undefined) {
                    if (e.options.useCSS === true) {
                        e.cssTransitions = true
                    }
                }
                if (e.options.fade) {
                    if (typeof e.options.zIndex === "number") {
                        if (e.options.zIndex < 3) {
                            e.options.zIndex = 3
                        }
                    } else {
                        e.options.zIndex = e.defaults.zIndex
                    }
                }
                if (t.OTransform !== undefined) {
                    e.animType = "OTransform";
                    e.transformType = "-o-transform";
                    e.transitionType = "OTransition";
                    if (t.perspectiveProperty === undefined && t.webkitPerspective === undefined) e.animType = false
                }
                if (t.MozTransform !== undefined) {
                    e.animType = "MozTransform";
                    e.transformType = "-moz-transform";
                    e.transitionType = "MozTransition";
                    if (t.perspectiveProperty === undefined && t.MozPerspective === undefined) e.animType = false
                }
                if (t.webkitTransform !== undefined) {
                    e.animType = "webkitTransform";
                    e.transformType = "-webkit-transform";
                    e.transitionType = "webkitTransition";
                    if (t.perspectiveProperty === undefined && t.webkitPerspective === undefined) e.animType = false
                }
                if (t.msTransform !== undefined) {
                    e.animType = "msTransform";
                    e.transformType = "-ms-transform";
                    e.transitionType = "msTransition";
                    if (t.msTransform === undefined) e.animType = false
                }
                if (t.transform !== undefined && e.animType !== false) {
                    e.animType = "transform";
                    e.transformType = "transform";
                    e.transitionType = "transition"
                }
                e.transformsEnabled = e.options.useTransform && (e.animType !== null && e.animType !== false)
            }, s.prototype.setSlideClasses = function(e) {
                var t = this,
                    n, i, o, r;
                i = t.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
                t.$slides.eq(e).addClass("slick-current");
                if (t.options.centerMode === true) {
                    var s = t.options.slidesToShow % 2 === 0 ? 1 : 0;
                    n = Math.floor(t.options.slidesToShow / 2);
                    if (t.options.infinite === true) {
                        if (e >= n && e <= t.slideCount - 1 - n) {
                            t.$slides.slice(e - n + s, e + n + 1).addClass("slick-active").attr("aria-hidden", "false")
                        } else {
                            o = t.options.slidesToShow + e;
                            i.slice(o - n + 1 + s, o + n + 2).addClass("slick-active").attr("aria-hidden", "false")
                        }
                        if (e === 0) {
                            i.eq(i.length - 1 - t.options.slidesToShow).addClass("slick-center")
                        } else if (e === t.slideCount - 1) {
                            i.eq(t.options.slidesToShow).addClass("slick-center")
                        }
                    }
                    t.$slides.eq(e).addClass("slick-center")
                } else {
                    if (e >= 0 && e <= t.slideCount - t.options.slidesToShow) {
                        t.$slides.slice(e, e + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")
                    } else if (i.length <= t.options.slidesToShow) {
                        i.addClass("slick-active").attr("aria-hidden", "false")
                    } else {
                        r = t.slideCount % t.options.slidesToShow;
                        o = t.options.infinite === true ? t.options.slidesToShow + e : e;
                        if (t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - e < t.options.slidesToShow) {
                            i.slice(o - (t.options.slidesToShow - r), o + r).addClass("slick-active").attr("aria-hidden", "false")
                        } else {
                            i.slice(o, o + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")
                        }
                    }
                }
                if (t.options.lazyLoad === "ondemand" || t.options.lazyLoad === "anticipated") {
                    t.lazyLoad()
                }
            }, s.prototype.setupInfinite = function() {
                var e = this,
                    t, n, i;
                if (e.options.fade === true) {
                    e.options.centerMode = false
                }
                if (e.options.infinite === true && e.options.fade === false) {
                    n = null;
                    if (e.slideCount > e.options.slidesToShow) {
                        if (e.options.centerMode === true) {
                            i = e.options.slidesToShow + 1
                        } else {
                            i = e.options.slidesToShow
                        }
                        for (t = e.slideCount; t > e.slideCount - i; t -= 1) {
                            n = t - 1;
                            u(e.$slides[n]).clone(true).attr("id", "").attr("data-slick-index", n - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned")
                        }
                        for (t = 0; t < i + e.slideCount; t += 1) {
                            n = t;
                            u(e.$slides[n]).clone(true).attr("id", "").attr("data-slick-index", n + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned")
                        }
                        e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                            u(this).attr("id", "")
                        })
                    }
                }
            }, s.prototype.interrupt = function(e) {
                var t = this;
                if (!e) {
                    t.autoPlay()
                }
                t.interrupted = e
            }, s.prototype.selectHandler = function(e) {
                var t = this;
                var n = u(e.target).is(".slick-slide") ? u(e.target) : u(e.target).parents(".slick-slide");
                var i = parseInt(n.attr("data-slick-index"));
                if (!i) i = 0;
                if (t.slideCount <= t.options.slidesToShow) {
                    t.slideHandler(i, false, true);
                    return
                }
                t.slideHandler(i)
            }, s.prototype.slideHandler = function(e, t, n) {
                var i, o, r, s, a = null,
                    l = this,
                    c;
                t = t || false;
                if (l.animating === true && l.options.waitForAnimate === true) {
                    return
                }
                if (l.options.fade === true && l.currentSlide === e) {
                    return
                }
                if (t === false) {
                    l.asNavFor(e)
                }
                i = e;
                a = l.getLeft(i);
                s = l.getLeft(l.currentSlide);
                l.currentLeft = l.swipeLeft === null ? s : l.swipeLeft;
                if (l.options.infinite === false && l.options.centerMode === false && (e < 0 || e > l.getDotCount() * l.options.slidesToScroll)) {
                    if (l.options.fade === false) {
                        i = l.currentSlide;
                        if (n !== true && l.slideCount > l.options.slidesToShow) {
                            l.animateSlide(s, function() {
                                l.postSlide(i)
                            })
                        } else {
                            l.postSlide(i)
                        }
                    }
                    return
                } else if (l.options.infinite === false && l.options.centerMode === true && (e < 0 || e > l.slideCount - l.options.slidesToScroll)) {
                    if (l.options.fade === false) {
                        i = l.currentSlide;
                        if (n !== true && l.slideCount > l.options.slidesToShow) {
                            l.animateSlide(s, function() {
                                l.postSlide(i)
                            })
                        } else {
                            l.postSlide(i)
                        }
                    }
                    return
                }
                if (l.options.autoplay) {
                    clearInterval(l.autoPlayTimer)
                }
                if (i < 0) {
                    if (l.slideCount % l.options.slidesToScroll !== 0) {
                        o = l.slideCount - l.slideCount % l.options.slidesToScroll
                    } else {
                        o = l.slideCount + i
                    }
                } else if (i >= l.slideCount) {
                    if (l.slideCount % l.options.slidesToScroll !== 0) {
                        o = 0
                    } else {
                        o = i - l.slideCount
                    }
                } else {
                    o = i
                }
                l.animating = true;
                l.$slider.trigger("beforeChange", [l, l.currentSlide, o]);
                r = l.currentSlide;
                l.currentSlide = o;
                l.setSlideClasses(l.currentSlide);
                if (l.options.asNavFor) {
                    c = l.getNavTarget();
                    c = c.slick("getSlick");
                    if (c.slideCount <= c.options.slidesToShow) {
                        c.setSlideClasses(l.currentSlide)
                    }
                }
                l.updateDots();
                l.updateArrows();
                if (l.options.fade === true) {
                    if (n !== true) {
                        l.fadeSlideOut(r);
                        l.fadeSlide(o, function() {
                            l.postSlide(o)
                        })
                    } else {
                        l.postSlide(o)
                    }
                    l.animateHeight();
                    return
                }
                if (n !== true && l.slideCount > l.options.slidesToShow) {
                    l.animateSlide(a, function() {
                        l.postSlide(o)
                    })
                } else {
                    l.postSlide(o)
                }
            }, s.prototype.startLoad = function() {
                var e = this;
                if (e.options.arrows === true && e.slideCount > e.options.slidesToShow) {
                    e.$prevArrow.hide();
                    e.$nextArrow.hide()
                }
                if (e.options.dots === true && e.slideCount > e.options.slidesToShow) {
                    e.$dots.hide()
                }
                e.$slider.addClass("slick-loading")
            }, s.prototype.swipeDirection = function() {
                var e, t, n, i, o = this;
                e = o.touchObject.startX - o.touchObject.curX;
                t = o.touchObject.startY - o.touchObject.curY;
                n = Math.atan2(t, e);
                i = Math.round(n * 180 / Math.PI);
                if (i < 0) {
                    i = 360 - Math.abs(i)
                }
                if (i <= 45 && i >= 0) {
                    return o.options.rtl === false ? "left" : "right"
                }
                if (i <= 360 && i >= 315) {
                    return o.options.rtl === false ? "left" : "right"
                }
                if (i >= 135 && i <= 225) {
                    return o.options.rtl === false ? "right" : "left"
                }
                if (o.options.verticalSwiping === true) {
                    if (i >= 35 && i <= 135) {
                        return "down"
                    } else {
                        return "up"
                    }
                }
                return "vertical"
            }, s.prototype.swipeEnd = function(e) {
                var t = this,
                    n, i;
                t.dragging = false;
                t.swiping = false;
                if (t.scrolling) {
                    t.scrolling = false;
                    return false
                }
                t.interrupted = false;
                t.shouldClick = t.touchObject.swipeLength > 10 ? false : true;
                if (t.touchObject.curX === undefined) {
                    return false
                }
                if (t.touchObject.edgeHit === true) {
                    t.$slider.trigger("edge", [t, t.swipeDirection()])
                }
                if (t.touchObject.swipeLength >= t.touchObject.minSwipe) {
                    i = t.swipeDirection();
                    switch (i) {
                        case "left":
                        case "down":
                            n = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount();
                            t.currentDirection = 0;
                            break;
                        case "right":
                        case "up":
                            n = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount();
                            t.currentDirection = 1;
                            break;
                        default:
                    }
                    if (i != "vertical") {
                        t.slideHandler(n);
                        t.touchObject = {};
                        t.$slider.trigger("swipe", [t, i])
                    }
                } else {
                    if (t.touchObject.startX !== t.touchObject.curX) {
                        t.slideHandler(t.currentSlide);
                        t.touchObject = {}
                    }
                }
            }, s.prototype.swipeHandler = function(e) {
                var t = this;
                if (t.options.swipe === false || "ontouchend" in document && t.options.swipe === false) {
                    return
                } else if (t.options.draggable === false && e.type.indexOf("mouse") !== -1) {
                    return
                }
                t.touchObject.fingerCount = e.originalEvent && e.originalEvent.touches !== undefined ? e.originalEvent.touches.length : 1;
                t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold;
                if (t.options.verticalSwiping === true) {
                    t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold
                }
                switch (e.data.action) {
                    case "start":
                        t.swipeStart(e);
                        break;
                    case "move":
                        t.swipeMove(e);
                        break;
                    case "end":
                        t.swipeEnd(e);
                        break
                }
            }, s.prototype.swipeMove = function(e) {
                var t = this,
                    n = false,
                    i, o, r, s, a, l;
                a = e.originalEvent !== undefined ? e.originalEvent.touches : null;
                if (!t.dragging || t.scrolling || a && a.length !== 1) {
                    return false
                }
                i = t.getLeft(t.currentSlide);
                t.touchObject.curX = a !== undefined ? a[0].pageX : e.clientX;
                t.touchObject.curY = a !== undefined ? a[0].pageY : e.clientY;
                t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2)));
                l = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2)));
                if (!t.options.verticalSwiping && !t.swiping && l > 4) {
                    t.scrolling = true;
                    return false
                }
                if (t.options.verticalSwiping === true) {
                    t.touchObject.swipeLength = l
                }
                o = t.swipeDirection();
                if (e.originalEvent !== undefined && t.touchObject.swipeLength > 4) {
                    t.swiping = true;
                    e.preventDefault()
                }
                s = (t.options.rtl === false ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1);
                if (t.options.verticalSwiping === true) {
                    s = t.touchObject.curY > t.touchObject.startY ? 1 : -1
                }
                r = t.touchObject.swipeLength;
                t.touchObject.edgeHit = false;
                if (t.options.infinite === false) {
                    if (t.currentSlide === 0 && o === "right" || t.currentSlide >= t.getDotCount() && o === "left") {
                        r = t.touchObject.swipeLength * t.options.edgeFriction;
                        t.touchObject.edgeHit = true
                    }
                }
                if (t.options.vertical === false) {
                    t.swipeLeft = i + r * s
                } else {
                    t.swipeLeft = i + r * (t.$list.height() / t.listWidth) * s
                }
                if (t.options.verticalSwiping === true) {
                    t.swipeLeft = i + r * s
                }
                if (t.options.fade === true || t.options.touchMove === false) {
                    return false
                }
                if (t.animating === true) {
                    t.swipeLeft = null;
                    return false
                }
                t.setCSS(t.swipeLeft)
            }, s.prototype.swipeStart = function(e) {
                var t = this,
                    n;
                t.interrupted = true;
                if (t.touchObject.fingerCount !== 1 || t.slideCount <= t.options.slidesToShow) {
                    t.touchObject = {};
                    return false
                }
                if (e.originalEvent !== undefined && e.originalEvent.touches !== undefined) {
                    n = e.originalEvent.touches[0]
                }
                t.touchObject.startX = t.touchObject.curX = n !== undefined ? n.pageX : e.clientX;
                t.touchObject.startY = t.touchObject.curY = n !== undefined ? n.pageY : e.clientY;
                t.dragging = true
            }, s.prototype.unfilterSlides = s.prototype.slickUnfilter = function() {
                var e = this;
                if (e.$slidesCache !== null) {
                    e.unload();
                    e.$slideTrack.children(this.options.slide).detach();
                    e.$slidesCache.appendTo(e.$slideTrack);
                    e.reinit()
                }
            }, s.prototype.unload = function() {
                var e = this;
                u(".slick-cloned", e.$slider).remove();
                if (e.$dots) {
                    e.$dots.remove()
                }
                if (e.$prevArrow && e.htmlExpr.test(e.options.prevArrow)) {
                    e.$prevArrow.remove()
                }
                if (e.$nextArrow && e.htmlExpr.test(e.options.nextArrow)) {
                    e.$nextArrow.remove()
                }
                e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
            }, s.prototype.unslick = function(e) {
                var t = this;
                t.$slider.trigger("unslick", [t, e]);
                t.destroy()
            }, s.prototype.updateArrows = function() {
                var e = this,
                    t;
                t = Math.floor(e.options.slidesToShow / 2);
                if (e.options.arrows === true && e.slideCount > e.options.slidesToShow && !e.options.infinite) {
                    e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
                    e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
                    if (e.currentSlide === 0) {
                        e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
                    } else if (e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === false) {
                        e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
                    } else if (e.currentSlide >= e.slideCount - 1 && e.options.centerMode === true) {
                        e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
                    }
                }
            }, s.prototype.updateDots = function() {
                var e = this;
                if (e.$dots !== null) {
                    e.$dots.find("li").removeClass("slick-active").end();
                    e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active")
                }
            }, s.prototype.visibility = function() {
                var e = this;
                if (e.options.autoplay) {
                    if (document[e.hidden]) {
                        e.interrupted = true
                    } else {
                        e.interrupted = false
                    }
                }
            }, u.fn.slick = function() {
                var e = this,
                    t = arguments[0],
                    n = Array.prototype.slice.call(arguments, 1),
                    i = e.length,
                    o, r;
                for (o = 0; o < i; o++) {
                    if (typeof t == "object" || typeof t == "undefined") e[o].slick = new s(e[o], t);
                    else r = e[o].slick[t].apply(e[o].slick, n);
                    if (typeof r != "undefined") return r
                }
                return e
            }
        }) ? i.apply(t, o) : i) || (e.exports = r)
    }()
}, function(e, t, n) {
    var i;
    window.Typed = n(66), i = jQuery, page.registerVendor("Typed"), page.initTyped = function() {
        i("[data-typing]").each(function() {
            var e = {
                strings: i(this).data("typing").split(","),
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 800,
                loop: !0
            };
            e = i.extend(e, page.getDataOptions(i(this))), new Typed(i(this)[0], e)
        })
    }
}, function(e, t, n) {
    /*!
     * 
     *   typed.js - A JavaScript Typing Animation Library
     *   Author: Matt Boldt <me@mattboldt.com>
     *   Version: v2.0.9
     *   Url: https://github.com/mattboldt/typed.js
     *   License(s): MIT
     * 
     */
    var i;
    i = function() {
        return o = {}, n.m = i = [function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e
            };

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            var r = n(1),
                l = n(3),
                s = (i(a, [{
                    key: "toggle",
                    value: function() {
                        this.pause.status ? this.start() : this.stop()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.reset(!1), this.options.onDestroy(this)
                    }
                }, {
                    key: "reset",
                    value: function(e) {
                        var t = arguments.length <= 0 || void 0 === e || e;
                        clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin())
                    }
                }, {
                    key: "begin",
                    value: function() {
                        var e = this;
                        this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
                            e.currentElContent && 0 !== e.currentElContent.length ? e.backspace(e.currentElContent, e.currentElContent.length) : e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
                        }, this.startDelay)
                    }
                }, {
                    key: "typewrite",
                    value: function(o, r) {
                        var s = this;
                        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                        var e = this.humanizer(this.typeSpeed),
                            a = 1;
                        !0 !== this.pause.status ? this.timeout = setTimeout(function() {
                            r = l.htmlParser.typeHtmlChars(o, r, s);
                            var e = 0,
                                t = o.substr(r);
                            if ("^" === t.charAt(0) && /^\^\d+/.test(t)) {
                                var n = 1;
                                n += (t = /\d+/.exec(t)[0]).length, e = parseInt(t), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s), o = o.substring(0, r) + o.substring(r + n), s.toggleBlinking(!0)
                            }
                            if ("`" === t.charAt(0)) {
                                for (;
                                    "`" !== o.substr(r + a).charAt(0) && !(r + ++a > o.length););
                                var i = o.substring(0, r);
                                o = i + o.substring(i.length + 1, r + a) + o.substring(r + a + 1), a--
                            }
                            s.timeout = setTimeout(function() {
                                s.toggleBlinking(!1), r >= o.length ? s.doneTyping(o, r) : s.keepTyping(o, r, a), s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s))
                            }, e)
                        }, e) : this.setPauseStatus(o, r, !0)
                    }
                }, {
                    key: "keepTyping",
                    value: function(e, t, n) {
                        0 === t && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), t += n;
                        var i = e.substr(0, t);
                        this.replaceText(i), this.typewrite(e, t)
                    }
                }, {
                    key: "doneTyping",
                    value: function(e, t) {
                        var n = this;
                        this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
                            n.backspace(e, t)
                        }, this.backDelay))
                    }
                }, {
                    key: "backspace",
                    value: function(n, i) {
                        var o = this;
                        if (!0 !== this.pause.status) {
                            if (this.fadeOut) return this.initFadeOut();
                            this.toggleBlinking(!1);
                            var e = this.humanizer(this.backSpeed);
                            this.timeout = setTimeout(function() {
                                i = l.htmlParser.backSpaceHtmlChars(n, i, o);
                                var e = n.substr(0, i);
                                if (o.replaceText(e), o.smartBackspace) {
                                    var t = o.strings[o.arrayPos + 1];
                                    t && e === t.substr(0, i) ? o.stopNum = i : o.stopNum = 0
                                }
                                i > o.stopNum ? (i--, o.backspace(n, i)) : i <= o.stopNum && (o.arrayPos++, o.arrayPos === o.strings.length ? (o.arrayPos = 0, o.options.onLastStringBackspaced(), o.shuffleStringsIfNeeded(), o.begin()) : o.typewrite(o.strings[o.sequence[o.arrayPos]], i))
                            }, e)
                        } else this.setPauseStatus(n, i, !0)
                    }
                }, {
                    key: "complete",
                    value: function() {
                        this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                    }
                }, {
                    key: "setPauseStatus",
                    value: function(e, t, n) {
                        this.pause.typewrite = n, this.pause.curString = e, this.pause.curStrPos = t
                    }
                }, {
                    key: "toggleBlinking",
                    value: function(e) {
                        this.cursor && (this.pause.status || this.cursorBlinking !== e && ((this.cursorBlinking = e) ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                    }
                }, {
                    key: "humanizer",
                    value: function(e) {
                        return Math.round(Math.random() * e / 2) + e
                    }
                }, {
                    key: "shuffleStringsIfNeeded",
                    value: function() {
                        this.shuffle && (this.sequence = this.sequence.sort(function() {
                            return Math.random() - .5
                        }))
                    }
                }, {
                    key: "initFadeOut",
                    value: function() {
                        var e = this;
                        return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
                            e.arrayPos++, e.replaceText(""), e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0), e.arrayPos = 0)
                        }, this.fadeOutDelay)
                    }
                }, {
                    key: "replaceText",
                    value: function(e) {
                        this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : "html" === this.contentType ? this.el.innerHTML = e : this.el.textContent = e
                    }
                }, {
                    key: "bindFocusEvents",
                    value: function() {
                        var t = this;
                        this.isInput && (this.el.addEventListener("focus", function(e) {
                            t.stop()
                        }), this.el.addEventListener("blur", function(e) {
                            t.el.value && 0 !== t.el.value.length || t.start()
                        }))
                    }
                }, {
                    key: "insertCursor",
                    value: function() {
                        this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                    }
                }]), a);

            function a(e, t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), r.initializer.load(this, t, e), this.begin()
            }
            t.default = s, e.exports = t.default
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                i = function(e, t, n) {
                    return t && o(e.prototype, t), n && o(e, n), e
                };

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            var r, s = n(2),
                l = (r = s) && r.__esModule ? r : {
                    default: r
                },
                c = (i(u, [{
                    key: "load",
                    value: function(e, t, n) {
                        if (e.el = "string" == typeof n ? document.querySelector(n) : n, e.options = a({}, l.default, t), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function(e) {
                                return e.trim()
                            }), "string" == typeof e.options.stringsElement ? e.stringsElement = document.querySelector(e.options.stringsElement) : e.stringsElement = e.options.stringsElement, e.stringsElement) {
                            e.strings = [], e.stringsElement.style.display = "none";
                            var i = Array.prototype.slice.apply(e.stringsElement.children),
                                o = i.length;
                            if (o)
                                for (var r = 0; r < o; r += 1) {
                                    var s = i[r];
                                    e.strings.push(s.innerHTML.trim())
                                }
                        }
                        for (var r in e.strPos = 0, e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.sequence = [], e.pause = {
                                status: !1,
                                typewrite: !0,
                                curString: "",
                                curStrPos: 0
                            }, e.typingComplete = !1, e.strings) e.sequence[r] = r;
                        e.currentElContent = this.getCurrentElContent(e), e.autoInsertCss = e.options.autoInsertCss, this.appendAnimationCss(e)
                    }
                }, {
                    key: "getCurrentElContent",
                    value: function(e) {
                        return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent
                    }
                }, {
                    key: "appendAnimationCss",
                    value: function(e) {
                        var t = "data-typed-js-css";
                        if (e.autoInsertCss && (e.showCursor || e.fadeOut) && !document.querySelector("[" + t + "]")) {
                            var n = document.createElement("style");
                            n.type = "text/css", n.setAttribute(t, !0);
                            var i = "";
                            e.showCursor && (i += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), e.fadeOut && (i += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== n.length && (n.innerHTML = i, document.body.appendChild(n))
                        }
                    }
                }]), u);

            function u() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, u)
            }
            var d = new(t.default = c);
            t.initializer = d
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
                stringsElement: null,
                typeSpeed: 0,
                startDelay: 0,
                backSpeed: 0,
                smartBackspace: !0,
                shuffle: !1,
                backDelay: 700,
                fadeOut: !1,
                fadeOutClass: "typed-fade-out",
                fadeOutDelay: 500,
                loop: !1,
                loopCount: 1 / 0,
                showCursor: !0,
                cursorChar: "|",
                autoInsertCss: !0,
                attr: null,
                bindInputFocusEvents: !1,
                contentType: "html",
                onComplete: function(e) {},
                preStringTyped: function(e, t) {},
                onStringTyped: function(e, t) {},
                onLastStringBackspaced: function(e) {},
                onTypingPaused: function(e, t) {},
                onTypingResumed: function(e, t) {},
                onReset: function(e) {},
                onStop: function(e, t) {},
                onStart: function(e, t) {},
                onDestroy: function(e) {}
            };
            t.default = n, e.exports = t.default
        }, function(e, t) {
            "use strict";

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = (function(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            }(o, [{
                key: "typeHtmlChars",
                value: function(e, t, n) {
                    if ("html" !== n.contentType) return t;
                    var i = e.substr(t).charAt(0);
                    if ("<" === i || "&" === i) {
                        var o = "";
                        for (o = "<" === i ? ">" : ";"; e.substr(t + 1).charAt(0) !== o && !(++t + 1 > e.length););
                        t++
                    }
                    return t
                }
            }, {
                key: "backSpaceHtmlChars",
                value: function(e, t, n) {
                    if ("html" !== n.contentType) return t;
                    var i = e.substr(t).charAt(0);
                    if (">" === i || ";" === i) {
                        var o = "";
                        for (o = ">" === i ? "<" : "&"; e.substr(t - 1).charAt(0) !== o && !(--t < 0););
                        t--
                    }
                    return t
                }
            }]), o);

            function o() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o)
            }
            var r = new(t.default = n);
            t.htmlParser = r
        }], n.c = o, n.p = "", n(0);

        function n(e) {
            if (o[e]) return o[e].exports;
            var t = o[e] = {
                exports: {},
                id: e,
                loaded: !1
            };
            return i[e].call(t.exports, t, t.exports, n), t.loaded = !0, t.exports
        }
        var i, o
    }, e.exports = i()
}, function(e, t, n) {
    n(68), n(69), n(70), n(71), n(72), n(73), n(74), n(75), n(76), n(77), n(78), n(79), n(80), n(81), n(82), n(83), n(84)
}, function(e, t) {
    var s;
    s = jQuery, page.config = function(e) {
        if ("string" == typeof e) return page.defaults[e];
        var t, n, i, o;
        if (s.extend(!0, page.defaults, e), page.defaults.smoothScroll || SmoothScroll.destroy(), s('[data-provide~="map"]').length && void 0 === window["google.maps.Map"] && s.getScript("https://maps.googleapis.com/maps/api/js?key=" + page.defaults.googleApiKey + "&callback=page.initMap"), page.defaults.googleAnalyticsId && (t = window, n = document, t.GoogleAnalyticsObject = "ga", t.ga = t.ga || function() {
                (t.ga.q = t.ga.q || []).push(arguments)
            }, t.ga.l = 1 * new Date, i = n.createElement("script"), o = n.getElementsByTagName("script")[0], i.async = 1, i.src = "https://www.google-analytics.com/analytics.js", o.parentNode.insertBefore(i, o), ga("create", page.defaults.googleAnalyticsId, "auto"), ga("send", "pageview")), s('[data-provide~="recaptcha"]').length && void 0 === window.grecaptcha) {
            var r = "https://www.google.com/recaptcha/api.js?onload=recaptchaLoadCallback";
            "" != page.defaults.reCaptchaLanguage && (r += "&hl=" + page.defaults.reCaptchaLanguage), s.getScript(r)
        }
        page.init()
    }
}, function(e, t) {
    var i;
    i = jQuery, page.initBind = function() {
        i("[data-bind-radio]").each(function() {
            var e = i(this),
                n = e.data("bind-radio"),
                t = i('input[name="' + n + '"]:checked').val();
            e.text(e.dataAttr(t, e.text())), i('input[name="' + n + '"]').on("change", function() {
                var t = i('input[name="' + n + '"]:checked').val();
                i('[data-bind-radio="' + n + '"]').each(function() {
                    var e = i(this);
                    e.text(e.dataAttr(t, e.text()))
                })
            })
        }), i("[data-bind-href]").each(function() {
            var e = i(this),
                n = e.data("bind-href"),
                t = i('input[name="' + n + '"]:checked').val();
            e.attr("href", e.dataAttr(t)), i('input[name="' + n + '"]').on("change", function() {
                var t = i('input[name="' + n + '"]:checked').val();
                i('[data-bind-href="' + n + '"]').each(function() {
                    var e = i(this);
                    e.attr("href", e.dataAttr(t))
                })
            })
        })
    }
}, function(e, t) {
    var n;
    n = jQuery, page.initDrawer = function() {
        n(document).on("click", ".drawer-toggler, .drawer-close, .backdrop-drawer", function() {
            n("body").toggleClass("drawer-open")
        })
    }
}, function(e, t) {
    var i;
    i = jQuery, page.initFont = function() {
        var n = [];
        i("[data-font]").each(function() {
            var e = i(this),
                t = e.data("font");
            part = t.split(":"), n.push(t), e.css({
                "font-family": part[0],
                "font-weight": part[1]
            })
        }), 0 < n.length && i("head").append("<link href='https://fonts.googleapis.com/css?family=" + n.join("|") + "' rel='stylesheet'>")
    }
}, function(e, t) {
    var n;
    n = jQuery, page.initForm = function() {
        n(document).on("focusin", ".input-group", function() {
            n(this).addClass("focus")
        }), n(document).on("focusout", ".input-group", function() {
            n(this).removeClass("focus")
        }), n(document).on("click", ".switch", function() {
            var e = n(this).children(".switch-input").not(":disabled");
            e.prop("checked", !e.prop("checked")).trigger("change")
        }), n(document).on("click", ".file-browser", function() {
            var e = n(this),
                t = e.closest(".file-group").find('[type="file"]');
            e.hasClass("form-control") ? setTimeout(function() {
                t.trigger("click")
            }, 300) : t.trigger("click")
        }), n(document).on("change", '.file-group [type="file"]', function() {
            var e = n(this),
                t = e.val().split("\\").pop();
            e.closest(".file-group").find(".file-value").val(t).text(t).focus()
        })
    }
}, function(e, t) {
    var a;
    a = jQuery, page.initMailer = function() {
        var s = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        a('[data-form="mailer"]').each(function() {
            var n = a(this),
                t = n.find('[name="email"]'),
                i = n.find('[name="message"]'),
                o = n.dataAttr("on-success", null),
                r = n.dataAttr("on-error", null);
            n.on("submit", function(e) {
                return e.preventDefault(), e.stopPropagation(), n.children(".alert-danger").remove(), n.find("[required]").each(function() {
                    a(this).val().length < 1 ? a(this).addClass("is-invalid") : a(this).removeClass("is-invalid")
                }), n.find('[type="email"]').each(function() {
                    s.test(a(this).val()) ? a(this).removeClass("is-invalid") : a(this).addClass("is-invalid")
                }), t.length && (t.val().length < 1 || !s.test(t.val())) && t.addClass("is-invalid"), i.length && i.val().length < 1 && i.addClass("is-invalid"), n.find(".is-invalid").length || a.ajax({
                    type: "POST",
                    url: n.attr("action"),
                    data: n.serializeArray()
                }).done(function(e) {
                    var t = a.parseJSON(e);
                    "success" == t.status ? (n.find(".alert-success").fadeIn(1e3), n.find(":input").val(""), null !== o && window[o]()) : (n.prepend('<div class="alert alert-danger">' + t.message + "</div>"), console.log(t.reason), null !== r && window[r](t.reason))
                }), !1
            }), n.find('[required], [type="email"]').each(function() {
                a(this).on("focus", function() {
                    a(this).removeClass("is-invalid")
                })
            }), t.on("focus", function() {
                a(this).removeClass("is-invalid")
            }), i.on("focus", function() {
                a(this).removeClass("is-invalid")
            })
        })
    }
}, function(e, t) {
    var l;
    l = jQuery, page.initMap = function() {
        l('[data-provide~="map"]').each(function() {
            var e = l(this),
                t = {
                    lat: "",
                    lng: "",
                    zoom: 13,
                    markerLat: "",
                    markerLng: "",
                    markerIcon: "",
                    markers: "",
                    style: "",
                    removeControls: !1
                };
            t = l.extend(t, page.getDataOptions(e));
            var n = new google.maps.Map(e[0], {
                center: {
                    lat: Number(t.lat),
                    lng: Number(t.lng)
                },
                zoom: Number(t.zoom),
                disableDefaultUI: t.removeControls
            });
            if ("" != t.markers) {
                var i, o = JSON.parse("[" + t.markers.replace(/'/g, '"') + "]"),
                    r = new google.maps.InfoWindow;
                for (i = 0; i < o.length; i++) {
                    var s = t.markerIcon;
                    3 < o[i].length && "" != o[i][3] && (s = o[i][3]), a = new google.maps.Marker({
                        position: {
                            lat: Number(o[i][0]),
                            lng: Number(o[i][1])
                        },
                        map: n,
                        animation: google.maps.Animation.DROP,
                        icon: s
                    }), 2 < o[i].length && "" != o[i][2] && google.maps.event.addListener(a, "click", function(e, t) {
                        return function() {
                            r.setContent(o[t][2]), r.open(n, e)
                        }
                    }(a, i))
                }
            } else {
                var a = new google.maps.Marker({
                    position: {
                        lat: Number(t.markerLat),
                        lng: Number(t.markerLng)
                    },
                    map: n,
                    animation: google.maps.Animation.DROP,
                    icon: t.markerIcon
                });
                e.is("[data-info]") && (r = new google.maps.InfoWindow({
                    content: e.dataAttr("info", "")
                }), a.addListener("click", function() {
                    r.open(n, a)
                }))
            }
            switch (t.style) {
                case "light":
                    n.set("styles", [{
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            color: "#e9e9e9"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f5f5f5"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 29
                        }, {
                            weight: .2
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 18
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f5f5f5"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{
                            color: "#dedede"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "on"
                        }, {
                            color: "#ffffff"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        elementType: "labels.text.fill",
                        stylers: [{
                            saturation: 36
                        }, {
                            color: "#333333"
                        }, {
                            lightness: 40
                        }]
                    }, {
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f2f2f2"
                        }, {
                            lightness: 19
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#fefefe"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#fefefe"
                        }, {
                            lightness: 17
                        }, {
                            weight: 1.2
                        }]
                    }]);
                    break;
                case "dark":
                    n.set("styles", [{
                        featureType: "all",
                        elementType: "labels.text.fill",
                        stylers: [{
                            saturation: 36
                        }, {
                            color: "#000000"
                        }, {
                            lightness: 40
                        }]
                    }, {
                        featureType: "all",
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "on"
                        }, {
                            color: "#000000"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "all",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }, {
                            weight: 1.2
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 29
                        }, {
                            weight: .2
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 18
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 19
                        }]
                    }, {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }]
                    }]);
                    break;
                default:
                    Array.isArray(t.style) && n.set("styles", t.style)
            }
        })
    }
}, function(e, t) {
    var i;
    i = jQuery, page.initModal = function() {
        page.body, i(".modal[data-autoshow]").each(function() {
            var e = i(this),
                t = parseInt(e.dataAttr("autoshow"));
            setTimeout(function() {
                e.modal("show")
            }, t)
        }), i(".modal[data-exitshow]").each(function() {
            var e = i(this),
                t = parseInt(e.dataAttr("delay", 0)),
                n = e.dataAttr("exitshow");
            i(n).length && i(document).one("mouseleave", n, function() {
                setTimeout(function() {
                    e.modal("show")
                }, t)
            })
        })
    }
}, function(e, t) {
    var n;
    n = jQuery, page.initNavbar = function() {
        n(document).on("click", ".navbar-toggler", function() {
            page.navbarToggle()
        }), n(document).on("click", ".backdrop-navbar", function() {
            page.navbarClose()
        }), n(document).on("click", ".navbar-open .nav-navbar > .nav-item > .nav-link", function() {
            n(this).closest(".nav-item").siblings(".nav-item").find("> .nav:visible").slideUp(333, "linear"), n(this).next(".nav").slideToggle(333, "linear")
        })
    }, page.navbarToggle = function() {
        var e = page.body,
            t = page.navbar;
        e.toggleClass("navbar-open"), e.hasClass("navbar-open") && t.prepend('<div class="backdrop backdrop-navbar"></div>')
    }, page.navbarClose = function() {
        page.body.removeClass("navbar-open"), n(".backdrop-navbar").remove()
    }
}, function(e, t) {
    var n;
    n = jQuery, page.initOffcanvas = function() {
        n(document).on("click", '[data-toggle="offcanvas"]', function() {
            var e = n(this).data("target"),
                t = n(e);
            void 0 !== e && t.length && (t.hasClass("show") ? (n(".backdrop-offcanvas").remove(), t.removeClass("show")) : (t.before('<div class="backdrop backdrop-offcanvas"></div>'), t.addClass("show"), setTimeout(function() {
                t.find("input:text:visible:first").focus()
            }, 300)))
        }), n(document).on("click", ".offcanvas [data-dismiss], .backdrop-offcanvas", function() {
            n(".offcanvas.show").removeClass("show"), n(".backdrop-offcanvas").remove()
        }), n(document).on("keyup", function(e) {
            n(".offcanvas.show").length && 27 == e.keyCode && (n(".offcanvas.show").removeClass("show"), n(".backdrop-offcanvas").remove())
        })
    }
}, function(e, t) {
    var o;
    o = jQuery, page.initPopup = function() {
        page.body, o(document).on("click", '[data-toggle="popup"]', function() {
            var e = o(this).data("target"),
                t = o(e);
            void 0 !== e && t.length && (t.hasClass("show") ? t.removeClass("show") : i(t))
        }), o(document).on("click", ".popup [data-dismiss]", function() {
            o(this).closest(".popup").removeClass("show")
        }), o(".popup[data-autoshow]").each(function() {
            var e = o(this),
                t = parseInt(e.dataAttr("autoshow"));
            setTimeout(function() {
                i(e)
            }, t)
        }), o(".popup[data-exitshow]").each(function() {
            var e = o(this),
                t = parseInt(e.dataAttr("delay", 0)),
                n = e.dataAttr("exitshow");
            o(n).length && o(document).one("mouseleave", n, function() {
                setTimeout(function() {
                    i(e)
                }, t)
            })
        });
        var i = function(e) {
            var t = parseInt(e.dataAttr("autohide", 0)),
                n = e.dataAttr("once", "");
            if ("" != n) {
                if ("displayed" == localStorage.getItem(n)) return;
                var i = e.find('[data-once-button="true"]');
                i.length ? i.on("click", function() {
                    localStorage.setItem(n, "displayed")
                }) : localStorage.setItem(n, "displayed")
            }
            e.addClass("show"), setTimeout(function() {
                e.find("input:text:visible:first").focus()
            }, 300), 0 < t && setTimeout(function() {
                e.removeClass("show")
            }, t)
        }
    }
}, function(e, t) {
    var n;
    n = jQuery, page.initRecaptcha = function() {
        n('[data-provide~="recaptcha"]').each(function() {
            var t = {
                sitekey: page.defaults.reCaptchaSiteKey
            };
            (t = n.extend(t, page.getDataOptions(n(this)))).enable && (t.callback = function() {
                n(t.enable).removeAttr("disabled")
            }, t["expired-callback"] = function() {
                n(t.enable).attr("disabled", "true")
            }, n(this).closest("form").on("submit", function(e) {
                "true" === n(this).find(t.enable).attr("disabled") && (e.preventDefault(), e.stopPropagation())
            })), grecaptcha.render(n(this)[0], t)
        })
    }, window.recaptchaLoadCallback = function() {
        page.initRecaptcha()
    }
}, function(e, t) {
    ! function(r) {
        var s = page.body,
            o = page.footer,
            n = page.header.length,
            a = page.navbar.outerHeight(),
            e = page.header.innerHeight(),
            l = 0,
            t = 0;
        page.initScroll = function() {
            r('[data-navbar="fixed"], [data-navbar="sticky"], [data-navbar="smart"]').length && (l = a), r(document).on("click", "a[href='#']", function() {
                return !1
            }), r(document).on("click", ".scroll-top", function() {
                return u(0), !1
            }), r(document).on("click", "a[href^='#']", function() {
                if (!(r(this).attr("href").length < 2 || r(this)[0].hasAttribute("data-toggle"))) {
                    var e = r(r(this).attr("href"));
                    if (e.length) {
                        var t = e.offset().top;
                        return r(window).scrollTop() < t && r('.navbar[data-navbar="smart"]').length ? u(t) : u(t - l), s.hasClass("navbar-open") && page.navbarClose(), !1
                    }
                }
            });
            var e = location.hash.replace("#", "");
            if ("" != e) {
                var t = r("#" + e);
                0 < t.length && u(t.offset().top - l)
            }
            if (c(), r(window).on("scroll", function() {
                    c()
                }), r(".nav-page").length) {
                var n = "left",
                    i = "0, 12";
                r(".nav-page.nav-page-left").length && (n = "right", i = "0, 12");
                var o = parseInt(r(".nav-page").dataAttr("spy-offset", 200));
                r(".nav-page .nav-link").tooltip({
                    container: "body",
                    placement: n,
                    offset: i,
                    trigger: "hover"
                }), r("body").scrollspy({
                    target: ".nav-page",
                    offset: o
                })
            }
            r(".sidebar-sticky").each(function() {
                var e = r(this),
                    t = e.closest("div").width();
                e.css("width", t), s.width() / t < 1.8 && e.addClass("is-mobile-wide")
            })
        };
        var c = function() {
                var i = r(window).scrollTop();
                1 < i ? s.addClass("body-scrolled") : s.removeClass("body-scrolled"), a < i ? s.addClass("navbar-scrolled") : s.removeClass("navbar-scrolled"), e - a - 1 < i ? s.addClass("header-scrolled") : s.removeClass("header-scrolled"), r('[data-sticky="true"]').each(function() {
                    var e = r(this),
                        t = e.offset().top;
                    e.hasDataAttr("original-top") || e.attr("data-original-top", t);
                    var n = e.dataAttr("original-top");
                    o.offset().top, e.outerHeight();
                    n < i ? e.addClass("stick") : e.removeClass("stick")
                }), r('[data-navbar="smart"]').each(function() {
                    var e = r(this);
                    i < t ? d(e) : e.removeClass("stick")
                }), r('[data-navbar="sticky"]').each(function() {
                    var e = r(this);
                    d(e)
                }), r('[data-navbar="fixed"]').each(function() {
                    var e = r(this);
                    s.hasClass("body-scrolled") ? e.addClass("stick") : e.removeClass("stick")
                }), r(".sidebar-sticky").each(function() {
                    var e = r(this);
                    d(e)
                }), r(".header.fadeout").css("opacity", 1 - i - 200 / window.innerHeight), t = i
            },
            u = function(e) {
                r("html, body").animate({
                    scrollTop: e
                }, 600)
            },
            d = function(e) {
                var t = "navbar-scrolled";
                n && (t = "header-scrolled"), s.hasClass(t) ? e.addClass("stick") : e.removeClass("stick")
            }
    }(jQuery)
}, function(e, t) {
    jQuery, page.initSection = function() {}
}, function(e, t) {
    var i;
    i = jQuery, page.initSidebar = function() {
        var e = page.body;
        i(document).on("click", ".sidebar-toggler, .sidebar-close, .backdrop-sidebar", function() {
            e.toggleClass("sidebar-open"), e.hasClass("sidebar-open") ? e.prepend('<div class="backdrop backdrop-sidebar"></div>') : i(".backdrop-sidebar").remove()
        });
        var t = i(".nav-sidebar .nav-item.show");
        t.find("> .nav-link .nav-angle").addClass("rotate"), t.find("> .nav").css("display", "block"), t.removeClass("show");
        var n = !1;
        "true" == i(".nav-sidebar").dataAttr("accordion", "false") && (n = !0), i(document).on("click", ".nav-sidebar > .nav-item > .nav-link", function() {
            var e = i(this);
            e.next(".nav").slideToggle(), n && e.closest(".nav-item").siblings(".nav-item").children(".nav:visible").slideUp().prev(".nav-link").children(".nav-angle").removeClass("rotate"), e.children(".nav-angle").toggleClass("rotate")
        }), i(".sidebar-body").each(function(e) {
            new PerfectScrollbar(i(this)[0], {
                wheelSpeed: .4,
                minScrollbarLength: 20
            })
        })
    }
}, function(e, t) {
    var n;
    n = jQuery, page.initVideo = function() {
        n(document).on("click", ".video-wrapper .btn", function() {
            var e = n(this).closest(".video-wrapper");
            if (e.addClass("reveal"), e.find("video").length && e.find("video").get(0).play(), e.find("iframe").length) {
                var t = e.find("iframe");
                0 < t.attr("src").indexOf("?") ? t.get(0).src += "&autoplay=1" : t.get(0).src += "?autoplay=1"
            }
        }), objectFitPolyfill(n(".bg-video"))
    }
}, function(e, t) {
    var o;
    o = jQuery, page.getDataOptions = function(e, n) {
        var i = {};
        return o.each(o(e).data(), function(e, t) {
            if ("provide" != (e = page.dataToOption(e))) {
                if (null != n) switch (n[e]) {
                    case "bool":
                        t = Boolean(t);
                        break;
                    case "num":
                        t = Number(t);
                        break;
                    case "array":
                        t = t.split(",")
                }
                i[e] = t
            }
        }), i
    }, page.getTarget = function(e) {
        var t;
        return "next" == (t = e.hasDataAttr("target") ? e.data("target") : e.attr("href")) ? t = o(e).next() : "prev" == t && (t = o(e).prev()), null != t && t
    }, page.getURL = function(e) {
        return e.hasDataAttr("url") ? e.data("url") : e.attr("href")
    }, page.optionToData = function(e) {
        return e.replace(/([A-Z])/g, "-$1").toLowerCase()
    }, page.dataToOption = function(e) {
        return e.replace(/-([a-z])/g, function(e) {
            return e[1].toUpperCase()
        })
    }
}]);