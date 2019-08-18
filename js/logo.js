/**
 * Created by User on 2019/4/20.
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pornhub"], {
    "21a6": function (e, t, n) {
        (function (n) {
            var o, r, i;
            (function (n, a) {
                r = [], o = a, i = "function" === typeof o ? o.apply(t, r) : o, void 0 === i || (e.exports = i)
            })(0, function () {
                "use strict";
                function t(e, t) {
                    return "undefined" == typeof t ? t = {autoBom: !1} : "object" != typeof t && (console.warn("Deprecated: Expected third argument to be a object"), t = {autoBom: !t}), t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\ufeff", e], {type: e.type}) : e
                }

                function o(e, t, n) {
                    var o = new XMLHttpRequest;
                    o.open("GET", e), o.responseType = "blob", o.onload = function () {
                        s(o.response, t, n)
                    }, o.onerror = function () {
                        console.error("could not download file")
                    }, o.send()
                }

                function r(e) {
                    var t = new XMLHttpRequest;
                    return t.open("HEAD", e, !1), t.send(), 200 <= t.status && 299 >= t.status
                }

                function i(e) {
                    try {
                        e.dispatchEvent(new MouseEvent("click"))
                    } catch (o) {
                        var t = document.createEvent("MouseEvents");
                        t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t)
                    }
                }

                var a = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof n && n.global === n ? n : void 0, s = a.saveAs || ("object" != typeof window || window !== a ? function () {
                    } : "download"in HTMLAnchorElement.prototype ? function (e, t, n) {
                        var s = a.URL || a.webkitURL, c = document.createElement("a");
                        t = t || e.name || "download", c.download = t, c.rel = "noopener", "string" == typeof e ? (c.href = e, c.origin === location.origin ? i(c) : r(c.href) ? o(e, t, n) : i(c, c.target = "_blank")) : (c.href = s.createObjectURL(e), setTimeout(function () {
                            s.revokeObjectURL(c.href)
                        }, 4e4), setTimeout(function () {
                            i(c)
                        }, 0))
                    } : "msSaveOrOpenBlob"in navigator ? function (e, n, a) {
                        if (n = n || e.name || "download", "string" != typeof e)navigator.msSaveOrOpenBlob(t(e, a), n); else if (r(e))o(e, n, a); else {
                            var s = document.createElement("a");
                            s.href = e, s.target = "_blank", setTimeout(function () {
                                i(s)
                            })
                        }
                    } : function (e, t, n, r) {
                        if (r = r || open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), "string" == typeof e)return o(e, t, n);
                        var i = "application/octet-stream" === e.type, s = /constructor/i.test(a.HTMLElement) || a.safari, c = /CriOS\/[\d]+/.test(navigator.userAgent);
                        if ((c || i && s) && "object" == typeof FileReader) {
                            var l = new FileReader;
                            l.onloadend = function () {
                                var e = l.result;
                                e = c ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location = e, r = null
                            }, l.readAsDataURL(e)
                        } else {
                            var u = a.URL || a.webkitURL, f = u.createObjectURL(e);
                            r ? r.location = f : location.href = f, r = null, setTimeout(function () {
                                u.revokeObjectURL(f)
                            }, 4e4)
                        }
                    });
                a.saveAs = s.saveAs = s, e.exports = s
            })
        }).call(this, n("c8ba"))
    }, "3a0e": function (e, t, n) {
        "use strict";
        n.r(t);
        var o = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "pornhub"}, [n("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: {content: "Edit the text to create your own logo", show: !0, classes: "tooltipClasses"},
                    expression: "{\n      content: 'Edit the text to create your own logo',\n      show: true,\n      classes: 'tooltipClasses',\n    }"
                }], staticClass: "box"
            }, [n("div", {
                staticClass: "editarea",
                style: {"font-size": e.fontSize + "px", "background-color": e.transparentBgColor},
                attrs: {id: "logo"}
            }, [e.reverseHighlight ? [n("span", {
                staticClass: "postfix",
                style: {color: e.suffixColor, "background-color": e.postfixBgColor},
                attrs: {contenteditable: "", spellcheck: "false"}
            }, [e._v(e._s(e.prefixText))]), n("span", {
                staticClass: "prefix",
                style: {color: e.prefixColor},
                attrs: {contenteditable: "", spellcheck: "false"}
            }, [e._v(e._s(e.suffixText))])] : [n("span", {
                staticClass: "prefix",
                style: {color: e.prefixColor},
                attrs: {contenteditable: "", spellcheck: "false"}
            }, [e._v(e._s(e.prefixText))]), n("span", {
                staticClass: "postfix",
                style: {color: e.suffixColor, "background-color": e.postfixBgColor},
                attrs: {contenteditable: "", spellcheck: "false"}
            }, [e._v(e._s(e.suffixText))])]], 2)]), n("div", {staticClass: "customize"}, [n("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: {content: "Pick a color you like", show: !0, classes: "tooltipClasses"},
                    expression: "{ content: 'Pick a color you like', show: true, classes: 'tooltipClasses' }"
                }], staticClass: "customize-color", attrs: {id: "prefixColor"}
            }, [n("div", [e._v("Prefix Text Color:   "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.prefixColor,
                    expression: "prefixColor"
                }], attrs: {type: "color"}, domProps: {value: e.prefixColor}, on: {
                    input: function (t) {
                        t.target.composing || (e.prefixColor = t.target.value)
                    }
                }
            })]), n("div", [e._v("Suffix Text Color:   "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.suffixColor,
                    expression: "suffixColor"
                }], attrs: {type: "color"}, domProps: {value: e.suffixColor}, on: {
                    input: function (t) {
                        t.target.composing || (e.suffixColor = t.target.value)
                    }
                }
            })]), n("div", [e._v("Suffix Background Color:   "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.postfixBgColor,
                    expression: "postfixBgColor"
                }], attrs: {type: "color"}, domProps: {value: e.postfixBgColor}, on: {
                    input: function (t) {
                        t.target.composing || (e.postfixBgColor = t.target.value)
                    }
                }
            })]), n("div", [e._v("\n        Transparent Background:  \n        "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.transparentBg,
                    expression: "transparentBg"
                }],
                attrs: {type: "checkbox", value: "transparentBg"},
                domProps: {checked: Array.isArray(e.transparentBg) ? e._i(e.transparentBg, "transparentBg") > -1 : e.transparentBg},
                on: {
                    change: function (t) {
                        var n = e.transparentBg, o = t.target, r = !!o.checked;
                        if (Array.isArray(n)) {
                            var i = "transparentBg", a = e._i(n, i);
                            o.checked ? a < 0 && (e.transparentBg = n.concat([i])) : a > -1 && (e.transparentBg = n.slice(0, a).concat(n.slice(a + 1)))
                        } else e.transparentBg = r
                    }
                }
            })])]), n("div", {staticClass: "customize-misc"}, [n("div", [e._v("\n        Font Size: "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.fontSize,
                    expression: "fontSize"
                }], attrs: {type: "range", min: "30", max: "200"}, domProps: {value: e.fontSize}, on: {
                    __r: function (t) {
                        e.fontSize = t.target.value
                    }
                }
            }), e._v(" " + e._s(e.fontSize) + "px\n      ")]), n("div", [e._v("Reverse Highlight: "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.reverseHighlight,
                    expression: "reverseHighlight"
                }],
                attrs: {type: "checkbox"},
                domProps: {checked: Array.isArray(e.reverseHighlight) ? e._i(e.reverseHighlight, null) > -1 : e.reverseHighlight},
                on: {
                    change: function (t) {
                        var n = e.reverseHighlight, o = t.target, r = !!o.checked;
                        if (Array.isArray(n)) {
                            var i = null, a = e._i(n, i);
                            o.checked ? a < 0 && (e.reverseHighlight = n.concat([i])) : a > -1 && (e.reverseHighlight = n.slice(0, a).concat(n.slice(a + 1)))
                        } else e.reverseHighlight = r
                    }
                }
            })])])]), n("div", {staticClass: "download-share"}, [n("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: {content: "Export your own logo", show: !0, classes: "tooltipClasses"},
                    expression: "{ content: 'Export your own logo', show: true, classes: 'tooltipClasses' }"
                }], staticClass: "download", on: {click: e.download}
            }, [e._v("\n      Export\n    ")]), n("div", {
                staticClass: "share",
                on: {click: e.twitter}
            }, [n("i", {staticClass: "iconfont icon-twitter"}), e._v(" Tweet")])])])
        }, r = [], i = n("70b0"), a = n.n(i), s = n("21a6"), c = {
            name: "pornhub", data: function () {
                return {
                    prefixColor: "#ffffff",
                    suffixColor: "#000000",
                    postfixBgColor: "#ff9900",
                    fontSize: "60",
                    transparentBg: !1,
                    reverseHighlight: !1,
                    prefixText: "Edit",
                    suffixText: "Me"
                }
            }, mounted: function () {
            }, methods: {
                download: function () {
                    var e = document.getElementById("logo");
                    a.a.toPng(e).then(function (e) {
                        s.saveAs(e, "logo.png")
                    })
                }, twitter: function () {
                    this.$ga.event("social", "action", "twitter", 1);
                    var e = "https://logoly.pro", t = encodeURIComponent("Built with #LogolyPro, by @xiqingongzi ".concat(e));
                    window.open("https://twitter.com/intent/tweet?text=".concat(t))
                }
            }, computed: {
                transparentBgColor: function () {
                    return this.transparentBg ? "transparent" : "#000000"
                }
            }
        }, l = c, u = (n("4015"), n("2877")), f = Object(u["a"])(l, o, r, !1, null, "0fe5077b", null);
        t["default"] = f.exports
    }, 4015: function (e, t, n) {
        "use strict";
        var o = n("489a"), r = n.n(o);
        r.a
    }, "489a": function (e, t, n) {
    }, "70b0": function (e, t, n) {
        (function (t) {
            "use strict";
            var n = y(), o = x(), r = b(), i = C(), a = {imagePlaceholder: void 0, cacheBust: !1}, s = {
                toSvg: c,
                toPng: u,
                toJpeg: f,
                toBlob: p,
                toPixelData: l,
                impl: {fontFaces: r, images: i, util: n, inliner: o, options: {}}
            };

            function c(e, t) {
                return t = t || {}, d(t), Promise.resolve(e).then(function (e) {
                    return g(e, t.filter, !0)
                }).then(m).then(v).then(o).then(function (o) {
                    return w(o, t.width || n.width(e), t.height || n.height(e))
                });
                function o(e) {
                    return t.bgcolor && (e.style.backgroundColor = t.bgcolor), t.width && (e.style.width = t.width + "px"), t.height && (e.style.height = t.height + "px"), t.style && Object.keys(t.style).forEach(function (n) {
                        e.style[n] = t.style[n]
                    }), e
                }
            }

            function l(e, t) {
                return h(e, t || {}).then(function (t) {
                    return t.getContext("2d").getImageData(0, 0, n.width(e), n.height(e)).data
                })
            }

            function u(e, t) {
                return h(e, t || {}).then(function (e) {
                    return e.toDataURL()
                })
            }

            function f(e, t) {
                return t = t || {}, h(e, t).then(function (e) {
                    return e.toDataURL("image/jpeg", t.quality || 1)
                })
            }

            function p(e, t) {
                return h(e, t || {}).then(n.canvasToBlob)
            }

            function d(e) {
                "undefined" === typeof e.imagePlaceholder ? s.impl.options.imagePlaceholder = a.imagePlaceholder : s.impl.options.imagePlaceholder = e.imagePlaceholder, "undefined" === typeof e.cacheBust ? s.impl.options.cacheBust = a.cacheBust : s.impl.options.cacheBust = e.cacheBust
            }

            function h(e, t) {
                return c(e, t).then(n.makeImage).then(n.delay(100)).then(function (t) {
                    var n = o(e);
                    return n.getContext("2d").drawImage(t, 0, 0), n
                });
                function o(e) {
                    var o = document.createElement("canvas");
                    if (o.width = t.width || n.width(e), o.height = t.height || n.height(e), t.bgcolor) {
                        var r = o.getContext("2d");
                        r.fillStyle = t.bgcolor, r.fillRect(0, 0, o.width, o.height)
                    }
                    return o
                }
            }

            function g(e, t, o) {
                return o || !t || t(e) ? Promise.resolve(e).then(r).then(function (n) {
                    return i(e, n, t)
                }).then(function (t) {
                    return a(e, t)
                }) : Promise.resolve();
                function r(e) {
                    return e instanceof HTMLCanvasElement ? n.makeImage(e.toDataURL()) : e.cloneNode(!1)
                }

                function i(e, t, o) {
                    var r = e.childNodes;
                    return 0 === r.length ? Promise.resolve(t) : i(t, n.asArray(r), o).then(function () {
                        return t
                    });
                    function i(e, t, n) {
                        var o = Promise.resolve();
                        return t.forEach(function (t) {
                            o = o.then(function () {
                                return g(t, n)
                            }).then(function (t) {
                                t && e.appendChild(t)
                            })
                        }), o
                    }
                }

                function a(e, t) {
                    return t instanceof Element ? Promise.resolve().then(o).then(r).then(i).then(a).then(function () {
                        return t
                    }) : t;
                    function o() {
                        function o(e, t) {
                            function o(e, t) {
                                n.asArray(e).forEach(function (n) {
                                    t.setProperty(n, e.getPropertyValue(n), e.getPropertyPriority(n))
                                })
                            }

                            e.cssText ? t.cssText = e.cssText : o(e, t)
                        }

                        o(window.getComputedStyle(e), t.style)
                    }

                    function r() {
                        function o(o) {
                            var r = window.getComputedStyle(e, o), i = r.getPropertyValue("content");
                            if ("" !== i && "none" !== i) {
                                var a = n.uid();
                                t.className = t.className + " " + a;
                                var s = document.createElement("style");
                                s.appendChild(c(a, o, r)), t.appendChild(s)
                            }
                            function c(e, t, o) {
                                var r = "." + e + ":" + t, i = o.cssText ? a(o) : s(o);
                                return document.createTextNode(r + "{" + i + "}");
                                function a(e) {
                                    var t = e.getPropertyValue("content");
                                    return e.cssText + " content: " + t + ";"
                                }

                                function s(e) {
                                    return n.asArray(e).map(t).join("; ") + ";";
                                    function t(t) {
                                        return t + ": " + e.getPropertyValue(t) + (e.getPropertyPriority(t) ? " !important" : "")
                                    }
                                }
                            }
                        }

                        [":before", ":after"].forEach(function (e) {
                            o(e)
                        })
                    }

                    function i() {
                        e instanceof HTMLTextAreaElement && (t.innerHTML = e.value), e instanceof HTMLInputElement && t.setAttribute("value", e.value)
                    }

                    function a() {
                        t instanceof SVGElement && (t.setAttribute("xmlns", "http://www.w3.org/2000/svg"), t instanceof SVGRectElement && ["width", "height"].forEach(function (e) {
                            var n = t.getAttribute(e);
                            n && t.style.setProperty(e, n)
                        }))
                    }
                }
            }

            function m(e) {
                return r.resolveAll().then(function (t) {
                    var n = document.createElement("style");
                    return e.appendChild(n), n.appendChild(document.createTextNode(t)), e
                })
            }

            function v(e) {
                return i.inlineAll(e).then(function () {
                    return e
                })
            }

            function w(e, t, o) {
                return Promise.resolve(e).then(function (e) {
                    return e.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), (new XMLSerializer).serializeToString(e)
                }).then(n.escapeXhtml).then(function (e) {
                    return '<foreignObject x="0" y="0" width="100%" height="100%">' + e + "</foreignObject>"
                }).then(function (e) {
                    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + o + '">' + e + "</svg>"
                }).then(function (e) {
                    return "data:image/svg+xml;charset=utf-8," + e
                })
            }

            function y() {
                return {
                    escape: p,
                    parseExtension: t,
                    mimeType: n,
                    dataAsUrl: f,
                    isDataUrl: o,
                    canvasToBlob: i,
                    resolveUrl: a,
                    getAndEncode: u,
                    uid: c(),
                    delay: d,
                    asArray: h,
                    escapeXhtml: g,
                    makeImage: l,
                    width: m,
                    height: v
                };
                function e() {
                    var e = "application/font-woff", t = "image/jpeg";
                    return {
                        woff: e,
                        woff2: e,
                        ttf: "application/font-truetype",
                        eot: "application/vnd.ms-fontobject",
                        png: "image/png",
                        jpg: t,
                        jpeg: t,
                        gif: "image/gif",
                        tiff: "image/tiff",
                        svg: "image/svg+xml"
                    }
                }

                function t(e) {
                    var t = /\.([^\.\/]*?)$/g.exec(e);
                    return t ? t[1] : ""
                }

                function n(n) {
                    var o = t(n).toLowerCase();
                    return e()[o] || ""
                }

                function o(e) {
                    return -1 !== e.search(/^(data:)/)
                }

                function r(e) {
                    return new Promise(function (t) {
                        for (var n = window.atob(e.toDataURL().split(",")[1]), o = n.length, r = new Uint8Array(o), i = 0; i < o; i++)r[i] = n.charCodeAt(i);
                        t(new Blob([r], {type: "image/png"}))
                    })
                }

                function i(e) {
                    return e.toBlob ? new Promise(function (t) {
                        e.toBlob(t)
                    }) : r(e)
                }

                function a(e, t) {
                    var n = document.implementation.createHTMLDocument(), o = n.createElement("base");
                    n.head.appendChild(o);
                    var r = n.createElement("a");
                    return n.body.appendChild(r), o.href = t, r.href = e, r.href
                }

                function c() {
                    var e = 0;
                    return function () {
                        return "u" + t() + e++;
                        function t() {
                            return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)
                        }
                    }
                }

                function l(e) {
                    return new Promise(function (t, n) {
                        var o = new Image;
                        o.onload = function () {
                            t(o)
                        }, o.onerror = n, o.src = e
                    })
                }

                function u(e) {
                    var t = 3e4;
                    return s.impl.options.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (new Date).getTime()), new Promise(function (n) {
                        var o, r = new XMLHttpRequest;
                        if (r.onreadystatechange = a, r.ontimeout = c, r.responseType = "blob", r.timeout = t, r.open("GET", e, !0), r.send(), s.impl.options.imagePlaceholder) {
                            var i = s.impl.options.imagePlaceholder.split(/,/);
                            i && i[1] && (o = i[1])
                        }
                        function a() {
                            if (4 === r.readyState)if (200 === r.status) {
                                var t = new FileReader;
                                t.onloadend = function () {
                                    var e = t.result.split(/,/)[1];
                                    n(e)
                                }, t.readAsDataURL(r.response)
                            } else o ? n(o) : l("cannot fetch resource: " + e + ", status: " + r.status)
                        }

                        function c() {
                            o ? n(o) : l("timeout of " + t + "ms occured while fetching resource: " + e)
                        }

                        function l(e) {
                            console.error(e), n("")
                        }
                    })
                }

                function f(e, t) {
                    return "data:" + t + ";base64," + e
                }

                function p(e) {
                    return e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")
                }

                function d(e) {
                    return function (t) {
                        return new Promise(function (n) {
                            setTimeout(function () {
                                n(t)
                            }, e)
                        })
                    }
                }

                function h(e) {
                    for (var t = [], n = e.length, o = 0; o < n; o++)t.push(e[o]);
                    return t
                }

                function g(e) {
                    return e.replace(/#/g, "%23").replace(/\n/g, "%0A")
                }

                function m(e) {
                    var t = w(e, "border-left-width"), n = w(e, "border-right-width");
                    return e.scrollWidth + t + n
                }

                function v(e) {
                    var t = w(e, "border-top-width"), n = w(e, "border-bottom-width");
                    return e.scrollHeight + t + n
                }

                function w(e, t) {
                    var n = window.getComputedStyle(e).getPropertyValue(t);
                    return parseFloat(n.replace("px", ""))
                }
            }

            function x() {
                var e = /url\(['"]?([^'"]+?)['"]?\)/g;
                return {inlineAll: i, shouldProcess: t, impl: {readUrls: o, inline: r}};
                function t(t) {
                    return -1 !== t.search(e)
                }

                function o(t) {
                    var o, r = [];
                    while (null !== (o = e.exec(t)))r.push(o[1]);
                    return r.filter(function (e) {
                        return !n.isDataUrl(e)
                    })
                }

                function r(e, t, o, r) {
                    return Promise.resolve(t).then(function (e) {
                        return o ? n.resolveUrl(e, o) : e
                    }).then(r || n.getAndEncode).then(function (e) {
                        return n.dataAsUrl(e, n.mimeType(t))
                    }).then(function (n) {
                        return e.replace(i(t), "$1" + n + "$3")
                    });
                    function i(e) {
                        return new RegExp("(url\\(['\"]?)(" + n.escape(e) + ")(['\"]?\\))", "g")
                    }
                }

                function i(e, n, i) {
                    return a() ? Promise.resolve(e) : Promise.resolve(e).then(o).then(function (t) {
                        var o = Promise.resolve(e);
                        return t.forEach(function (e) {
                            o = o.then(function (t) {
                                return r(t, e, n, i)
                            })
                        }), o
                    });
                    function a() {
                        return !t(e)
                    }
                }
            }

            function b() {
                return {resolveAll: e, impl: {readAll: t}};
                function e() {
                    return t(document).then(function (e) {
                        return Promise.all(e.map(function (e) {
                            return e.resolve()
                        }))
                    }).then(function (e) {
                        return e.join("\n")
                    })
                }

                function t() {
                    return Promise.resolve(n.asArray(document.styleSheets)).then(t).then(e).then(function (e) {
                        return e.map(r)
                    });
                    function e(e) {
                        return e.filter(function (e) {
                            return e.type === CSSRule.FONT_FACE_RULE
                        }).filter(function (e) {
                            return o.shouldProcess(e.style.getPropertyValue("src"))
                        })
                    }

                    function t(e) {
                        var t = [];
                        return e.forEach(function (e) {
                            try {
                                n.asArray(e.cssRules || []).forEach(t.push.bind(t))
                            } catch (o) {
                                console.log("Error while reading CSS rules from " + e.href, o.toString())
                            }
                        }), t
                    }

                    function r(e) {
                        return {
                            resolve: function () {
                                var t = (e.parentStyleSheet || {}).href;
                                return o.inlineAll(e.cssText, t)
                            }, src: function () {
                                return e.style.getPropertyValue("src")
                            }
                        }
                    }
                }
            }

            function C() {
                return {inlineAll: t, impl: {newImage: e}};
                function e(e) {
                    return {inline: t};
                    function t(t) {
                        return n.isDataUrl(e.src) ? Promise.resolve() : Promise.resolve(e.src).then(t || n.getAndEncode).then(function (t) {
                            return n.dataAsUrl(t, n.mimeType(e.src))
                        }).then(function (t) {
                            return new Promise(function (n, o) {
                                e.onload = n, e.onerror = o, e.src = t
                            })
                        })
                    }
                }

                function t(r) {
                    return r instanceof Element ? i(r).then(function () {
                        return r instanceof HTMLImageElement ? e(r).inline() : Promise.all(n.asArray(r.childNodes).map(function (e) {
                            return t(e)
                        }))
                    }) : Promise.resolve(r);
                    function i(e) {
                        var t = e.style.getPropertyValue("background");
                        return t ? o.inlineAll(t).then(function (t) {
                            e.style.setProperty("background", t, e.style.getPropertyPriority("background"))
                        }).then(function () {
                            return e
                        }) : Promise.resolve(e)
                    }
                }
            }

            e.exports = s
        })()
    }
}]);
//# sourceMappingURL=pornhub.1767418d.js.map