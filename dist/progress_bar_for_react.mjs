import * as S from "react";
import { forwardRef as Br, useContext as _r, Fragment as Yr, useEffect as Me, useRef as zr, useState as Jr } from "react";
import * as re from "react/jsx-runtime";
function kr(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Tr(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Hr = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(a) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, i), n.tags.push(a);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Tr(this));
    var a = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var s = kr(a);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (c) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', c);
      }
    } else
      a.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), V = "-ms-", te = "-moz-", h = "-webkit-", ve = "comm", Ie = "rule", Ce = "decl", Pr = "@import", je = "@keyframes", Lr = "@layer", Fr = Math.abs, ae = String.fromCharCode, Dr = Object.assign;
function Mr(e, r) {
  return X(e, 0) ^ 45 ? (((r << 2 ^ X(e, 0)) << 2 ^ X(e, 1)) << 2 ^ X(e, 2)) << 2 ^ X(e, 3) : 0;
}
function Ue(e) {
  return e.trim();
}
function jr(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function y(e, r, t) {
  return e.replace(r, t);
}
function de(e, r) {
  return e.indexOf(r);
}
function X(e, r) {
  return e.charCodeAt(r) | 0;
}
function F(e, r, t) {
  return e.slice(r, t);
}
function Y(e) {
  return e.length;
}
function Ge(e) {
  return e.length;
}
function Q(e, r) {
  return r.push(e), e;
}
function Ur(e, r) {
  return e.map(r).join("");
}
var ie = 1, H = 1, $e = 0, O = 0, E = 0, P = "";
function oe(e, r, t, n, a, i, s) {
  return { value: e, root: r, parent: t, type: n, props: a, children: i, line: ie, column: H, length: s, return: "" };
}
function L(e, r) {
  return Dr(oe("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function $r() {
  return E;
}
function Qr() {
  return E = O > 0 ? X(P, --O) : 0, H--, E === 10 && (H = 1, ie--), E;
}
function B() {
  return E = O < $e ? X(P, O++) : 0, H++, E === 10 && (H = 1, ie++), E;
}
function z() {
  return X(P, O);
}
function q() {
  return O;
}
function j(e, r) {
  return F(P, e, r);
}
function D(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Qe(e) {
  return ie = H = 1, $e = Y(P = e), O = 0, [];
}
function qe(e) {
  return P = "", e;
}
function K(e) {
  return Ue(j(O - 1, fe(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function qr(e) {
  for (; (E = z()) && E < 33; )
    B();
  return D(e) > 2 || D(E) > 3 ? "" : " ";
}
function Kr(e, r) {
  for (; --r && B() && !(E < 48 || E > 102 || E > 57 && E < 65 || E > 70 && E < 97); )
    ;
  return j(e, q() + (r < 6 && z() == 32 && B() == 32));
}
function fe(e) {
  for (; B(); )
    switch (E) {
      case e:
        return O;
      case 34:
      case 39:
        e !== 34 && e !== 39 && fe(E);
        break;
      case 40:
        e === 41 && fe(e);
        break;
      case 92:
        B();
        break;
    }
  return O;
}
function et(e, r) {
  for (; B() && e + E !== 57; )
    if (e + E === 84 && z() === 47)
      break;
  return "/*" + j(r, O - 1) + "*" + ae(e === 47 ? e : B());
}
function rt(e) {
  for (; !D(z()); )
    B();
  return j(e, O);
}
function tt(e) {
  return qe(ee("", null, null, null, [""], e = Qe(e), 0, [0], e));
}
function ee(e, r, t, n, a, i, s, c, f) {
  for (var p = 0, l = 0, b = s, w = 0, v = 0, g = 0, d = 1, A = 1, x = 1, N = 0, m = "", R = a, o = i, Z = n, I = m; A; )
    switch (g = N, N = B()) {
      case 40:
        if (g != 108 && X(I, b - 1) == 58) {
          de(I += y(K(N), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        I += K(N);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        I += qr(g);
        break;
      case 92:
        I += Kr(q() - 1, 7);
        continue;
      case 47:
        switch (z()) {
          case 42:
          case 47:
            Q(nt(et(B(), q()), r, t), f);
            break;
          default:
            I += "/";
        }
        break;
      case 123 * d:
        c[p++] = Y(I) * x;
      case 125 * d:
      case 59:
      case 0:
        switch (N) {
          case 0:
          case 125:
            A = 0;
          case 59 + l:
            x == -1 && (I = y(I, /\f/g, "")), v > 0 && Y(I) - b && Q(v > 32 ? Ve(I + ";", n, t, b - 1) : Ve(y(I, " ", "") + ";", n, t, b - 2), f);
            break;
          case 59:
            I += ";";
          default:
            if (Q(Z = Xe(I, r, t, p, l, a, c, m, R = [], o = [], b), i), N === 123)
              if (l === 0)
                ee(I, r, Z, Z, R, i, b, c, o);
              else
                switch (w === 99 && X(I, 3) === 110 ? 100 : w) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ee(e, Z, Z, n && Q(Xe(e, Z, Z, 0, 0, a, c, m, a, R = [], b), o), a, o, b, c, n ? R : o);
                    break;
                  default:
                    ee(I, Z, Z, Z, [""], o, 0, c, o);
                }
        }
        p = l = v = 0, d = x = 1, m = I = "", b = s;
        break;
      case 58:
        b = 1 + Y(I), v = g;
      default:
        if (d < 1) {
          if (N == 123)
            --d;
          else if (N == 125 && d++ == 0 && Qr() == 125)
            continue;
        }
        switch (I += ae(N), N * d) {
          case 38:
            x = l > 0 ? 1 : (I += "\f", -1);
            break;
          case 44:
            c[p++] = (Y(I) - 1) * x, x = 1;
            break;
          case 64:
            z() === 45 && (I += K(B())), w = z(), l = b = Y(m = I += rt(q())), N++;
            break;
          case 45:
            g === 45 && Y(I) == 2 && (d = 0);
        }
    }
  return i;
}
function Xe(e, r, t, n, a, i, s, c, f, p, l) {
  for (var b = a - 1, w = a === 0 ? i : [""], v = Ge(w), g = 0, d = 0, A = 0; g < n; ++g)
    for (var x = 0, N = F(e, b + 1, b = Fr(d = s[g])), m = e; x < v; ++x)
      (m = Ue(d > 0 ? w[x] + " " + N : y(N, /&\f/g, w[x]))) && (f[A++] = m);
  return oe(e, r, t, a === 0 ? Ie : c, f, p, l);
}
function nt(e, r, t) {
  return oe(e, r, t, ve, ae($r()), F(e, 2, -2), 0);
}
function Ve(e, r, t, n) {
  return oe(e, r, t, Ce, F(e, 0, n), F(e, n + 1, -1), n);
}
function T(e, r) {
  for (var t = "", n = Ge(e), a = 0; a < n; a++)
    t += r(e[a], a, e, r) || "";
  return t;
}
function at(e, r, t, n) {
  switch (e.type) {
    case Lr:
      if (e.children.length)
        break;
    case Pr:
    case Ce:
      return e.return = e.return || e.value;
    case ve:
      return "";
    case je:
      return e.return = e.value + "{" + T(e.children, n) + "}";
    case Ie:
      e.value = e.props.join(",");
  }
  return Y(t = T(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function it(e) {
  var r = Ge(e);
  return function(t, n, a, i) {
    for (var s = "", c = 0; c < r; c++)
      s += e[c](t, n, a, i) || "";
    return s;
  };
}
function ot(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function Ke(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var st = function(r, t, n) {
  for (var a = 0, i = 0; a = i, i = z(), a === 38 && i === 12 && (t[n] = 1), !D(i); )
    B();
  return j(r, O);
}, ct = function(r, t) {
  var n = -1, a = 44;
  do
    switch (D(a)) {
      case 0:
        a === 38 && z() === 12 && (t[n] = 1), r[n] += st(O - 1, t, n);
        break;
      case 2:
        r[n] += K(a);
        break;
      case 4:
        if (a === 44) {
          r[++n] = z() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += ae(a);
    }
  while (a = B());
  return r;
}, lt = function(r, t) {
  return qe(ct(Qe(r), t));
}, Se = /* @__PURE__ */ new WeakMap(), ut = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, a = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Se.get(n)) && !a) {
      Se.set(r, !0);
      for (var i = [], s = lt(t, i), c = n.props, f = 0, p = 0; f < s.length; f++)
        for (var l = 0; l < c.length; l++, p++)
          r.props[p] = i[f] ? s[f].replace(/&\f/g, c[l]) : c[l] + " " + s[f];
    }
  }
}, dt = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, ft = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", pt = function(r) {
  return r.type === "comm" && r.children.indexOf(ft) > -1;
}, bt = function(r) {
  return function(t, n, a) {
    if (!(t.type !== "rule" || r.compat)) {
      var i = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var s = !!t.parent, c = s ? t.parent.children : (
          // global rule at the root level
          a
        ), f = c.length - 1; f >= 0; f--) {
          var p = c[f];
          if (p.line < t.line)
            break;
          if (p.column < t.column) {
            if (pt(p))
              return;
            break;
          }
        }
        i.forEach(function(l) {
          console.error('The pseudo class "' + l + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + l.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, er = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, gt = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!er(t[n]))
      return !0;
  return !1;
}, Oe = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, mt = function(r, t, n) {
  er(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Oe(r)) : gt(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Oe(r)));
};
function rr(e, r) {
  switch (Mr(e, r)) {
    case 5103:
      return h + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return h + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return h + e + te + e + V + e + e;
    case 6828:
    case 4268:
      return h + e + V + e + e;
    case 6165:
      return h + e + V + "flex-" + e + e;
    case 5187:
      return h + e + y(e, /(\w+).+(:[^]+)/, h + "box-$1$2" + V + "flex-$1$2") + e;
    case 5443:
      return h + e + V + "flex-item-" + y(e, /flex-|-self/, "") + e;
    case 4675:
      return h + e + V + "flex-line-pack" + y(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return h + e + V + y(e, "shrink", "negative") + e;
    case 5292:
      return h + e + V + y(e, "basis", "preferred-size") + e;
    case 6060:
      return h + "box-" + y(e, "-grow", "") + h + e + V + y(e, "grow", "positive") + e;
    case 4554:
      return h + y(e, /([^-])(transform)/g, "$1" + h + "$2") + e;
    case 6187:
      return y(y(y(e, /(zoom-|grab)/, h + "$1"), /(image-set)/, h + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return y(e, /(image-set\([^]*)/, h + "$1$`$1");
    case 4968:
      return y(y(e, /(.+:)(flex-)?(.*)/, h + "box-pack:$3" + V + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + h + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(e, /(.+)-inline(.+)/, h + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Y(e) - 1 - r > 6)
        switch (X(e, r + 1)) {
          case 109:
            if (X(e, r + 4) !== 45)
              break;
          case 102:
            return y(e, /(.+:)(.+)-([^]+)/, "$1" + h + "$2-$3$1" + te + (X(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~de(e, "stretch") ? rr(y(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (X(e, r + 1) !== 115)
        break;
    case 6444:
      switch (X(e, Y(e) - 3 - (~de(e, "!important") && 10))) {
        case 107:
          return y(e, ":", ":" + h) + e;
        case 101:
          return y(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + h + (X(e, 14) === 45 ? "inline-" : "") + "box$3$1" + h + "$2$3$1" + V + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (X(e, r + 11)) {
        case 114:
          return h + e + V + y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return h + e + V + y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return h + e + V + y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return h + e + V + e + e;
  }
  return e;
}
var ht = function(r, t, n, a) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Ce:
        r.return = rr(r.value, r.length);
        break;
      case je:
        return T([L(r, {
          value: y(r.value, "@", "@" + h)
        })], a);
      case Ie:
        if (r.length)
          return Ur(r.props, function(i) {
            switch (jr(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return T([L(r, {
                  props: [y(i, /:(read-\w+)/, ":" + te + "$1")]
                })], a);
              case "::placeholder":
                return T([L(r, {
                  props: [y(i, /:(plac\w+)/, ":" + h + "input-$1")]
                }), L(r, {
                  props: [y(i, /:(plac\w+)/, ":" + te + "$1")]
                }), L(r, {
                  props: [y(i, /:(plac\w+)/, V + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, yt = [ht], vt = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(d) {
      var A = d.getAttribute("data-emotion");
      A.indexOf(" ") !== -1 && (document.head.appendChild(d), d.setAttribute("data-s", ""));
    });
  }
  var a = r.stylisPlugins || yt;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var i = {}, s, c = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(d) {
      for (var A = d.getAttribute("data-emotion").split(" "), x = 1; x < A.length; x++)
        i[A[x]] = !0;
      c.push(d);
    }
  );
  var f, p = [ut, dt];
  process.env.NODE_ENV !== "production" && p.push(bt({
    get compat() {
      return g.compat;
    }
  }), mt);
  {
    var l, b = [at, process.env.NODE_ENV !== "production" ? function(d) {
      d.root || (d.return ? l.insert(d.return) : d.value && d.type !== ve && l.insert(d.value + "{}"));
    } : ot(function(d) {
      l.insert(d);
    })], w = it(p.concat(a, b)), v = function(A) {
      return T(tt(A), w);
    };
    f = function(A, x, N, m) {
      l = N, process.env.NODE_ENV !== "production" && x.map !== void 0 && (l = {
        insert: function(o) {
          N.insert(o + x.map);
        }
      }), v(A ? A + "{" + x.styles + "}" : x.styles), m && (g.inserted[x.name] = !0);
    };
  }
  var g = {
    key: t,
    sheet: new Hr({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: f
  };
  return g.sheet.hydrate(c), g;
};
function pe() {
  return pe = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, pe.apply(this, arguments);
}
var be = { exports: {} }, C = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function It() {
  if (We)
    return C;
  We = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, w = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
  function m(o) {
    if (typeof o == "object" && o !== null) {
      var Z = o.$$typeof;
      switch (Z) {
        case r:
          switch (o = o.type, o) {
            case f:
            case p:
            case n:
            case i:
            case a:
            case b:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case c:
                case l:
                case g:
                case v:
                case s:
                  return o;
                default:
                  return Z;
              }
          }
        case t:
          return Z;
      }
    }
  }
  function R(o) {
    return m(o) === p;
  }
  return C.AsyncMode = f, C.ConcurrentMode = p, C.ContextConsumer = c, C.ContextProvider = s, C.Element = r, C.ForwardRef = l, C.Fragment = n, C.Lazy = g, C.Memo = v, C.Portal = t, C.Profiler = i, C.StrictMode = a, C.Suspense = b, C.isAsyncMode = function(o) {
    return R(o) || m(o) === f;
  }, C.isConcurrentMode = R, C.isContextConsumer = function(o) {
    return m(o) === c;
  }, C.isContextProvider = function(o) {
    return m(o) === s;
  }, C.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === r;
  }, C.isForwardRef = function(o) {
    return m(o) === l;
  }, C.isFragment = function(o) {
    return m(o) === n;
  }, C.isLazy = function(o) {
    return m(o) === g;
  }, C.isMemo = function(o) {
    return m(o) === v;
  }, C.isPortal = function(o) {
    return m(o) === t;
  }, C.isProfiler = function(o) {
    return m(o) === i;
  }, C.isStrictMode = function(o) {
    return m(o) === a;
  }, C.isSuspense = function(o) {
    return m(o) === b;
  }, C.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === n || o === p || o === i || o === a || o === b || o === w || typeof o == "object" && o !== null && (o.$$typeof === g || o.$$typeof === v || o.$$typeof === s || o.$$typeof === c || o.$$typeof === l || o.$$typeof === A || o.$$typeof === x || o.$$typeof === N || o.$$typeof === d);
  }, C.typeOf = m, C;
}
var G = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function Ct() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, w = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
    function m(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === n || u === p || u === i || u === a || u === b || u === w || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === v || u.$$typeof === s || u.$$typeof === c || u.$$typeof === l || u.$$typeof === A || u.$$typeof === x || u.$$typeof === N || u.$$typeof === d);
    }
    function R(u) {
      if (typeof u == "object" && u !== null) {
        var le = u.$$typeof;
        switch (le) {
          case r:
            var $ = u.type;
            switch ($) {
              case f:
              case p:
              case n:
              case i:
              case a:
              case b:
                return $;
              default:
                var Ze = $ && $.$$typeof;
                switch (Ze) {
                  case c:
                  case l:
                  case g:
                  case v:
                  case s:
                    return Ze;
                  default:
                    return le;
                }
            }
          case t:
            return le;
        }
      }
    }
    var o = f, Z = p, I = c, ce = s, J = r, k = l, mr = n, hr = g, yr = v, vr = t, Ir = i, Cr = a, Gr = b, we = !1;
    function xr(u) {
      return we || (we = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Ee(u) || R(u) === f;
    }
    function Ee(u) {
      return R(u) === p;
    }
    function Ar(u) {
      return R(u) === c;
    }
    function Nr(u) {
      return R(u) === s;
    }
    function Rr(u) {
      return typeof u == "object" && u !== null && u.$$typeof === r;
    }
    function wr(u) {
      return R(u) === l;
    }
    function Er(u) {
      return R(u) === n;
    }
    function Zr(u) {
      return R(u) === g;
    }
    function Xr(u) {
      return R(u) === v;
    }
    function Vr(u) {
      return R(u) === t;
    }
    function Sr(u) {
      return R(u) === i;
    }
    function Or(u) {
      return R(u) === a;
    }
    function Wr(u) {
      return R(u) === b;
    }
    G.AsyncMode = o, G.ConcurrentMode = Z, G.ContextConsumer = I, G.ContextProvider = ce, G.Element = J, G.ForwardRef = k, G.Fragment = mr, G.Lazy = hr, G.Memo = yr, G.Portal = vr, G.Profiler = Ir, G.StrictMode = Cr, G.Suspense = Gr, G.isAsyncMode = xr, G.isConcurrentMode = Ee, G.isContextConsumer = Ar, G.isContextProvider = Nr, G.isElement = Rr, G.isForwardRef = wr, G.isFragment = Er, G.isLazy = Zr, G.isMemo = Xr, G.isPortal = Vr, G.isProfiler = Sr, G.isStrictMode = Or, G.isSuspense = Wr, G.isValidElementType = m, G.typeOf = R;
  }()), G;
}
process.env.NODE_ENV === "production" ? be.exports = It() : be.exports = Ct();
var Gt = be.exports, tr = Gt, xt = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, At = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, nr = {};
nr[tr.ForwardRef] = xt;
nr[tr.Memo] = At;
var Nt = !0;
function ar(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(a) {
    e[a] !== void 0 ? r.push(e[a] + ";") : n += a + " ";
  }), n;
}
var xe = function(r, t, n) {
  var a = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Nt === !1) && r.registered[a] === void 0 && (r.registered[a] = t.styles);
}, ir = function(r, t, n) {
  xe(r, t, n);
  var a = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + a : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Rt(e) {
  for (var r = 0, t, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var wt = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, _e = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Et = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Zt = /[A-Z]|^ms/g, or = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ae = function(r) {
  return r.charCodeAt(1) === 45;
}, Ye = function(r) {
  return r != null && typeof r != "boolean";
}, ue = /* @__PURE__ */ Ke(function(e) {
  return Ae(e) ? e : e.replace(Zt, "-$&").toLowerCase();
}), ne = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(or, function(n, a, i) {
          return _ = {
            name: a,
            styles: i,
            next: _
          }, a;
        });
  }
  return wt[r] !== 1 && !Ae(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var Xt = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Vt = ["normal", "none", "initial", "inherit", "unset"], St = ne, Ot = /^-ms-/, Wt = /-(.)/g, ze = {};
  ne = function(r, t) {
    if (r === "content" && (typeof t != "string" || Vt.indexOf(t) === -1 && !Xt.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = St(r, t);
    return n !== "" && !Ae(r) && r.indexOf("-") !== -1 && ze[r] === void 0 && (ze[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(Ot, "ms-").replace(Wt, function(a, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var sr = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function M(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(sr);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return _ = {
          name: t.name,
          styles: t.styles,
          next: _
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            _ = {
              name: n.name,
              styles: n.styles,
              next: _
            }, n = n.next;
        var a = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (a += t.map), a;
      }
      return Bt(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var i = _, s = t(e);
        return _ = i, M(e, r, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], f = t.replace(or, function(l, b, w) {
          var v = "animation" + c.length;
          return c.push("const " + v + " = keyframes`" + w.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + v + "}";
        });
        c.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(c, ["`" + f + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + f + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var p = r[t];
  return p !== void 0 ? p : t;
}
function Bt(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++)
      n += M(e, r, t[a]) + ";";
  else
    for (var i in t) {
      var s = t[i];
      if (typeof s != "object")
        r != null && r[s] !== void 0 ? n += i + "{" + r[s] + "}" : Ye(s) && (n += ue(i) + ":" + ne(i, s) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(sr);
        if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
          for (var c = 0; c < s.length; c++)
            Ye(s[c]) && (n += ue(i) + ":" + ne(i, s[c]) + ";");
        else {
          var f = M(e, r, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += ue(i) + ":" + f + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Et), n += i + "{" + f + "}";
          }
        }
      }
    }
  return n;
}
var Je = /label:\s*([^\s;\n{]+)\s*(;|$)/g, cr;
process.env.NODE_ENV !== "production" && (cr = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var _, ge = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var a = !0, i = "";
  _ = void 0;
  var s = r[0];
  s == null || s.raw === void 0 ? (a = !1, i += M(n, t, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(_e), i += s[0]);
  for (var c = 1; c < r.length; c++)
    i += M(n, t, r[c]), a && (process.env.NODE_ENV !== "production" && s[c] === void 0 && console.error(_e), i += s[c]);
  var f;
  process.env.NODE_ENV !== "production" && (i = i.replace(cr, function(w) {
    return f = w, "";
  })), Je.lastIndex = 0;
  for (var p = "", l; (l = Je.exec(i)) !== null; )
    p += "-" + // $FlowFixMe we know it's not null
    l[1];
  var b = Rt(i) + p;
  return process.env.NODE_ENV !== "production" ? {
    name: b,
    styles: i,
    map: f,
    next: _,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: b,
    styles: i,
    next: _
  };
}, _t = function(r) {
  return r();
}, Yt = S.useInsertionEffect ? S.useInsertionEffect : !1, lr = Yt || _t, se = {}.hasOwnProperty, Ne = /* @__PURE__ */ S.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ vt({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Ne.displayName = "EmotionCacheContext");
Ne.Provider;
var ur = function(r) {
  return /* @__PURE__ */ Br(function(t, n) {
    var a = _r(Ne);
    return r(t, a, n);
  });
}, Re = /* @__PURE__ */ S.createContext({});
process.env.NODE_ENV !== "production" && (Re.displayName = "EmotionThemeContext");
var ke = function(r) {
  var t = r.split(".");
  return t[t.length - 1];
}, zt = function(r) {
  var t = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(r);
  if (t || (t = /^([A-Za-z0-9$.]+)@/.exec(r), t))
    return ke(t[1]);
}, Jt = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]), kt = function(r) {
  return r.replace(/\$/g, "-");
}, Tt = function(r) {
  if (r)
    for (var t = r.split(`
`), n = 0; n < t.length; n++) {
      var a = zt(t[n]);
      if (a) {
        if (Jt.has(a))
          break;
        if (/^[A-Z]/.test(a))
          return kt(a);
      }
    }
}, me = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", he = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", dr = function(r, t) {
  if (process.env.NODE_ENV !== "production" && typeof t.css == "string" && // check if there is a css declaration
  t.css.indexOf(":") !== -1)
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + t.css + "`");
  var n = {};
  for (var a in t)
    se.call(t, a) && (n[a] = t[a]);
  if (n[me] = r, process.env.NODE_ENV !== "production" && t.css && (typeof t.css != "object" || typeof t.css.name != "string" || t.css.name.indexOf("-") === -1)) {
    var i = Tt(new Error().stack);
    i && (n[he] = i);
  }
  return n;
}, Ht = function(r) {
  var t = r.cache, n = r.serialized, a = r.isStringTag;
  return xe(t, n, a), lr(function() {
    return ir(t, n, a);
  }), null;
}, fr = /* @__PURE__ */ ur(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var a = e[me], i = [n], s = "";
  typeof e.className == "string" ? s = ar(r.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var c = ge(i, void 0, S.useContext(Re));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var f = e[he];
    f && (c = ge([c, "label:" + f + ";"]));
  }
  s += r.key + "-" + c.name;
  var p = {};
  for (var l in e)
    se.call(e, l) && l !== "css" && l !== me && (process.env.NODE_ENV === "production" || l !== he) && (p[l] = e[l]);
  return p.ref = t, p.className = s, /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(Ht, {
    cache: r,
    serialized: c,
    isStringTag: typeof a == "string"
  }), /* @__PURE__ */ S.createElement(a, p));
});
process.env.NODE_ENV !== "production" && (fr.displayName = "EmotionCssPropInternal");
var pr = fr;
function W(e, r, t) {
  return se.call(r, "css") ? re.jsx(pr, dr(e, r), t) : re.jsx(e, r, t);
}
function Te(e, r, t) {
  return se.call(r, "css") ? re.jsxs(pr, dr(e, r), t) : re.jsxs(e, r, t);
}
var Pt = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Lt = /* @__PURE__ */ Ke(
  function(e) {
    return Pt.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ft = Lt, Dt = function(r) {
  return r !== "theme";
}, He = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Ft : Dt;
}, Pe = function(r, t, n) {
  var a;
  if (t) {
    var i = t.shouldForwardProp;
    a = r.__emotion_forwardProp && i ? function(s) {
      return r.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof a != "function" && n && (a = r.__emotion_forwardProp), a;
}, Le = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Mt = function(r) {
  var t = r.cache, n = r.serialized, a = r.isStringTag;
  return xe(t, n, a), lr(function() {
    return ir(t, n, a);
  }), null;
}, U = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, a = n && r.__emotion_base || r, i, s;
  t !== void 0 && (i = t.label, s = t.target);
  var c = Pe(r, t, n), f = c || He(a), p = !f("as");
  return function() {
    var l = arguments, b = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && b.push("label:" + i + ";"), l[0] == null || l[0].raw === void 0)
      b.push.apply(b, l);
    else {
      process.env.NODE_ENV !== "production" && l[0][0] === void 0 && console.error(Le), b.push(l[0][0]);
      for (var w = l.length, v = 1; v < w; v++)
        process.env.NODE_ENV !== "production" && l[0][v] === void 0 && console.error(Le), b.push(l[v], l[0][v]);
    }
    var g = ur(function(d, A, x) {
      var N = p && d.as || a, m = "", R = [], o = d;
      if (d.theme == null) {
        o = {};
        for (var Z in d)
          o[Z] = d[Z];
        o.theme = S.useContext(Re);
      }
      typeof d.className == "string" ? m = ar(A.registered, R, d.className) : d.className != null && (m = d.className + " ");
      var I = ge(b.concat(R), A.registered, o);
      m += A.key + "-" + I.name, s !== void 0 && (m += " " + s);
      var ce = p && c === void 0 ? He(N) : f, J = {};
      for (var k in d)
        p && k === "as" || // $FlowFixMe
        ce(k) && (J[k] = d[k]);
      return J.className = m, J.ref = x, /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(Mt, {
        cache: A,
        serialized: I,
        isStringTag: typeof N == "string"
      }), /* @__PURE__ */ S.createElement(N, J));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", g.defaultProps = r.defaultProps, g.__emotion_real = g, g.__emotion_base = a, g.__emotion_styles = b, g.__emotion_forwardProp = c, Object.defineProperty(g, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), g.withComponent = function(d, A) {
      return e(d, pe({}, t, A, {
        shouldForwardProp: Pe(g, A, !0)
      })).apply(void 0, b);
    }, g;
  };
};
function jt() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const ye = /* @__PURE__ */ U("span", process.env.NODE_ENV === "production" ? {
  target: "eyeb28y1"
} : {
  target: "eyeb28y1",
  label: "StyledSpan"
})(process.env.NODE_ENV === "production" ? {
  name: "1ea33yd",
  styles: "color:#fff;width:auto;bottom:150%;display:none;padding:5px;z-index:1;position:absolute;text-align:left;border-radius:6px;background-color:#222;&:after{top:100%;left:50%;content:' ';position:absolute;margin-left:-5px;border-color:black transparent transparent transparent;border-style:solid;border-width:5px;}"
} : {
  name: "1ea33yd",
  styles: "color:#fff;width:auto;bottom:150%;display:none;padding:5px;z-index:1;position:absolute;text-align:left;border-radius:6px;background-color:#222;&:after{top:100%;left:50%;content:' ';position:absolute;margin-left:-5px;border-color:black transparent transparent transparent;border-style:solid;border-width:5px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL215cm9zL3Byb2plY3RzL3Byb2dyZXNzLWJhci1mb3ItcmVhY3Qvc3JjL2NvbXBvbmVudHMvVG9vbFRpcC9Ub29sdGlwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJOEIiLCJmaWxlIjoiL2hvbWUvbXlyb3MvcHJvamVjdHMvcHJvZ3Jlc3MtYmFyLWZvci1yZWFjdC9zcmMvY29tcG9uZW50cy9Ub29sVGlwL1Rvb2x0aXAudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5pbXBvcnQgeyBUb29sdGlwUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgU3R5bGVkU3BhbiA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IGF1dG87XG4gIGJvdHRvbTogMTUwJTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgJjphZnRlciB7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBjb250ZW50OiAnICc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgfVxuYDtcblxuY29uc3QgVG9vbHRpcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICY6aG92ZXIgJHtTdHlsZWRTcGFufSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbi8qKkl0IHdpbGwgYWNjZXB0IGEgdG9vbHRpcCBjb250ZW50IG1lc3NhZ2UuXG4gKiBBbnkgY2hpbGRyZW4gY29tcG9uZW50IHRoYXQgaXMgcGFzc2VkIHdpbGwgYmUgdG9vbHRpcGVkIHdpdGggdGhlIGRlZmluZWQgY29udGVudC5cbiAqIFRoZW4gdGhlIHJlYWN0IGNvbXBvbmVudCB3aWxsIGJlIHJlbmRlcmVkIGFuZCBhIHRvb2x0aXAgd2lsbCBiZVxuICogZGlzcGxheWVkIG9uIG1vdXNlIGhvdmVyICovXG5cbmV4cG9ydCBjb25zdCBUb29sdGlwID0gKHsgdG9vbHRpcENvbnRlbnQsIGNoaWxkcmVuLCBzdHlsZSB9OiBUb29sdGlwUHJvcHMpID0+IHtcbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sdGlwQ29udGFpbmVyIHN0eWxlPXtzdHlsZX0gZGF0YS10ZXN0aWQ9XCJ0b29sdGlwXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPFN0eWxlZFNwYW4gZGF0YS10ZXN0aWQ9XCJ0b29sdGlwdGV4dFwiPnt0b29sdGlwQ29udGVudH08L1N0eWxlZFNwYW4+XG4gICAgICA8L1Rvb2x0aXBDb250YWluZXI+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRvb2x0aXBDb250YWluZXIgZGF0YS10ZXN0aWQ9XCJ0b29sdGlwXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8U3R5bGVkU3BhbiBkYXRhLXRlc3RpZD1cInRvb2x0aXB0ZXh0XCI+e3Rvb2x0aXBDb250ZW50fTwvU3R5bGVkU3Bhbj5cbiAgICA8L1Rvb2x0aXBDb250YWluZXI+XG4gICk7XG59O1xuIl19 */",
  toString: jt
}), Fe = /* @__PURE__ */ U("div", process.env.NODE_ENV === "production" ? {
  target: "eyeb28y0"
} : {
  target: "eyeb28y0",
  label: "TooltipContainer"
})("display:flex;position:relative;min-width:150px;align-items:center;justify-content:center;&:hover ", ye, "{display:block;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL215cm9zL3Byb2plY3RzL3Byb2dyZXNzLWJhci1mb3ItcmVhY3Qvc3JjL2NvbXBvbmVudHMvVG9vbFRpcC9Ub29sdGlwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQm1DIiwiZmlsZSI6Ii9ob21lL215cm9zL3Byb2plY3RzL3Byb2dyZXNzLWJhci1mb3ItcmVhY3Qvc3JjL2NvbXBvbmVudHMvVG9vbFRpcC9Ub29sdGlwLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IHsgVG9vbHRpcFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiBhdXRvO1xuICBib3R0b206IDE1MCU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gICY6YWZ0ZXIge1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgY29udGVudDogJyAnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFRvb2x0aXBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAmOmhvdmVyICR7U3R5bGVkU3Bhbn0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG4vKipJdCB3aWxsIGFjY2VwdCBhIHRvb2x0aXAgY29udGVudCBtZXNzYWdlLlxuICogQW55IGNoaWxkcmVuIGNvbXBvbmVudCB0aGF0IGlzIHBhc3NlZCB3aWxsIGJlIHRvb2x0aXBlZCB3aXRoIHRoZSBkZWZpbmVkIGNvbnRlbnQuXG4gKiBUaGVuIHRoZSByZWFjdCBjb21wb25lbnQgd2lsbCBiZSByZW5kZXJlZCBhbmQgYSB0b29sdGlwIHdpbGwgYmVcbiAqIGRpc3BsYXllZCBvbiBtb3VzZSBob3ZlciAqL1xuXG5leHBvcnQgY29uc3QgVG9vbHRpcCA9ICh7IHRvb2x0aXBDb250ZW50LCBjaGlsZHJlbiwgc3R5bGUgfTogVG9vbHRpcFByb3BzKSA9PiB7XG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcENvbnRhaW5lciBzdHlsZT17c3R5bGV9IGRhdGEtdGVzdGlkPVwidG9vbHRpcFwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxTdHlsZWRTcGFuIGRhdGEtdGVzdGlkPVwidG9vbHRpcHRleHRcIj57dG9vbHRpcENvbnRlbnR9PC9TdHlsZWRTcGFuPlxuICAgICAgPC9Ub29sdGlwQ29udGFpbmVyPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUb29sdGlwQ29udGFpbmVyIGRhdGEtdGVzdGlkPVwidG9vbHRpcFwiPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPFN0eWxlZFNwYW4gZGF0YS10ZXN0aWQ9XCJ0b29sdGlwdGV4dFwiPnt0b29sdGlwQ29udGVudH08L1N0eWxlZFNwYW4+XG4gICAgPC9Ub29sdGlwQ29udGFpbmVyPlxuICApO1xufTtcbiJdfQ== */")), Ut = ({
  tooltipContent: e,
  children: r,
  style: t
}) => t ? /* @__PURE__ */ Te(Fe, { style: t, "data-testid": "tooltip", children: [
  r,
  /* @__PURE__ */ W(ye, { "data-testid": "tooltiptext", children: e })
] }) : /* @__PURE__ */ Te(Fe, { "data-testid": "tooltip", children: [
  r,
  /* @__PURE__ */ W(ye, { "data-testid": "tooltiptext", children: e })
] }), $t = (e) => `withHOC-${e.displayName || e.name || "Component"}`, Qt = (e) => {
  const r = (t) => {
    const {
      tooltipContent: n,
      tooltipStyle: a = {},
      ...i
    } = t;
    return n && n.length ? /* @__PURE__ */ W(Yr, { children: /* @__PURE__ */ W(Ut, { tooltipContent: n, style: a, children: /* @__PURE__ */ W(e, { ...i }) }) }) : /* @__PURE__ */ W(e, { ...i });
  };
  return r.displayName = $t(e), r;
}, qt = ({
  percentage: e,
  ref: r
}) => (Me(() => {
  r.current = e;
}), r.current), De = /* @__PURE__ */ U("div", process.env.NODE_ENV === "production" ? {
  target: "e1rjefw80"
} : {
  target: "e1rjefw80",
  label: "FillerContainer"
})("background:black;height:100%;border-radius:inherit;transition:width 0.2s ease-in;width:", ({
  percentage: e
}) => `${e}%`, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL215cm9zL3Byb2plY3RzL3Byb2dyZXNzLWJhci1mb3ItcmVhY3Qvc3JjL2NvbXBvbmVudHMvRmlsbGVyL0ZpbGxlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXdEIiwiZmlsZSI6Ii9ob21lL215cm9zL3Byb2plY3RzL3Byb2dyZXNzLWJhci1mb3ItcmVhY3Qvc3JjL2NvbXBvbmVudHMvRmlsbGVyL0ZpbGxlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCB7IEZpbGxlclByb3BzLCBGaWxsZXJDb250YWluZXJQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBGaWxsZXJDb250YWluZXIgPSBzdHlsZWQuZGl2PEZpbGxlckNvbnRhaW5lclByb3BzPmBcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4ycyBlYXNlLWluO1xuICB3aWR0aDogJHsoeyBwZXJjZW50YWdlIH0pID0+IGAke3BlcmNlbnRhZ2V9JWB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEZpbGxlciA9ICh7IHBlcmNlbnRhZ2UsIGZpbGxlckV4dHJhU3R5bGVzIH06IEZpbGxlclByb3BzKSA9PiB7XG4gIGlmIChmaWxsZXJFeHRyYVN0eWxlcykge1xuICAgIHJldHVybiAoXG4gICAgICA8RmlsbGVyQ29udGFpbmVyXG4gICAgICAgIGRhdGEtdGVzdGlkPVwiZmlsbGVyXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAuLi5maWxsZXJFeHRyYVN0eWxlcyxcbiAgICAgICAgfX1cbiAgICAgICAgcGVyY2VudGFnZT17cGVyY2VudGFnZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiA8RmlsbGVyQ29udGFpbmVyIGRhdGEtdGVzdGlkPVwiZmlsbGVyXCIgcGVyY2VudGFnZT17cGVyY2VudGFnZX0gLz47XG59O1xuIl19 */")), Kt = ({
  percentage: e,
  fillerExtraStyles: r
}) => r ? /* @__PURE__ */ W(De, { "data-testid": "filler", style: {
  ...r
}, percentage: e }) : /* @__PURE__ */ W(De, { "data-testid": "filler", percentage: e });
function br() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
const en = /* @__PURE__ */ U("div", process.env.NODE_ENV === "production" ? {
  target: "e9xeayt1"
} : {
  target: "e9xeayt1",
  label: "Container"
})(process.env.NODE_ENV === "production" ? {
  name: "1wnowod",
  styles: "display:flex;align-items:center;justify-content:center"
} : {
  name: "1wnowod",
  styles: "display:flex;align-items:center;justify-content:center",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL215cm9zL3Byb2plY3RzL3Byb2dyZXNzLWJhci1mb3ItcmVhY3Qvc3JjL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvUHJvZ3Jlc3NCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUs0QiIsImZpbGUiOiIvaG9tZS9teXJvcy9wcm9qZWN0cy9wcm9ncmVzcy1iYXItZm9yLXJlYWN0L3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgRmlsbGVyIH0gZnJvbSAnLi4vRmlsbGVyL0ZpbGxlcic7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgUHJvZ3Jlc3NCYXJDaGlsZCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogODVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9ICh7XG4gIHBlcmNlbnRhZ2UsXG4gIGZpbGxlckV4dHJhU3R5bGVzLFxuICBwcm9ncmVzc0JhckV4dHJhU3R5bGVzLFxufTogUHJvZ3Jlc3NCYXJQcm9wcykgPT4ge1xuICBjb25zdCBvcHQgPSBwcm9ncmVzc0JhckV4dHJhU3R5bGVzO1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgZGF0YS10ZXN0aWQ9XCJwcm9ncmVzcy1iYXJcIj5cbiAgICAgIDxQcm9ncmVzc0JhckNoaWxkXG4gICAgICAgIGRhdGEtdGVzdGlkPVwicHJvZ3Jlc3MtYmFyLWNoaWxkXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAuLi5vcHQsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxGaWxsZXIgcGVyY2VudGFnZT17cGVyY2VudGFnZX0gZmlsbGVyRXh0cmFTdHlsZXM9e2ZpbGxlckV4dHJhU3R5bGVzfSAvPlxuICAgICAgPC9Qcm9ncmVzc0JhckNoaWxkPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcbiJdfQ== */",
  toString: br
}), rn = /* @__PURE__ */ U("div", process.env.NODE_ENV === "production" ? {
  target: "e9xeayt0"
} : {
  target: "e9xeayt0",
  label: "ProgressBarChild"
})(process.env.NODE_ENV === "production" ? {
  name: "fhgbou",
  styles: "position:relative;height:15px;width:85px;border-radius:20px;border:1px solid #333"
} : {
  name: "fhgbou",
  styles: "position:relative;height:15px;width:85px;border-radius:20px;border:1px solid #333",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL215cm9zL3Byb2plY3RzL3Byb2dyZXNzLWJhci1mb3ItcmVhY3Qvc3JjL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvUHJvZ3Jlc3NCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdtQyIsImZpbGUiOiIvaG9tZS9teXJvcy9wcm9qZWN0cy9wcm9ncmVzcy1iYXItZm9yLXJlYWN0L3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgRmlsbGVyIH0gZnJvbSAnLi4vRmlsbGVyL0ZpbGxlcic7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgUHJvZ3Jlc3NCYXJDaGlsZCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogODVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9ICh7XG4gIHBlcmNlbnRhZ2UsXG4gIGZpbGxlckV4dHJhU3R5bGVzLFxuICBwcm9ncmVzc0JhckV4dHJhU3R5bGVzLFxufTogUHJvZ3Jlc3NCYXJQcm9wcykgPT4ge1xuICBjb25zdCBvcHQgPSBwcm9ncmVzc0JhckV4dHJhU3R5bGVzO1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgZGF0YS10ZXN0aWQ9XCJwcm9ncmVzcy1iYXJcIj5cbiAgICAgIDxQcm9ncmVzc0JhckNoaWxkXG4gICAgICAgIGRhdGEtdGVzdGlkPVwicHJvZ3Jlc3MtYmFyLWNoaWxkXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAuLi5vcHQsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxGaWxsZXIgcGVyY2VudGFnZT17cGVyY2VudGFnZX0gZmlsbGVyRXh0cmFTdHlsZXM9e2ZpbGxlckV4dHJhU3R5bGVzfSAvPlxuICAgICAgPC9Qcm9ncmVzc0JhckNoaWxkPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcbiJdfQ== */",
  toString: br
}), gr = ({
  percentage: e,
  fillerExtraStyles: r,
  progressBarExtraStyles: t
}) => /* @__PURE__ */ W(en, { "data-testid": "progress-bar", children: /* @__PURE__ */ W(rn, { "data-testid": "progress-bar-child", style: {
  ...t
}, children: /* @__PURE__ */ W(Kt, { percentage: e, fillerExtraStyles: r }) }) }), tn = Qt(gr), an = ({
  percentage: e,
  fillerExtraStyles: r = {},
  progressBarExtraStyles: t = {},
  tooltip: n,
  onPercentageChange: a,
  tooltipStyle: i
}) => {
  var b;
  const s = zr(), c = qt({
    percentage: e,
    ref: s
  }), [f, p] = Jr(!1), l = n && n.length > 0;
  return Me(() => {
    var g;
    const w = c && c !== e, v = a && typeof a == "function";
    w && v && !f ? a(e) : w && v && f && ((g = window == null ? void 0 : window.top) == null || g.onPercentageChange(e));
  }, [e, a, c, f]), (b = window == null ? void 0 : window.top) != null && b.Cypress && !f && a && (window.top.onPercentageChange = a, p(!0)), e === 100 ? null : l ? /* @__PURE__ */ W(tn, { percentage: e, fillerExtraStyles: r, progressBarExtraStyles: t, tooltipContent: n, tooltipStyle: i }) : /* @__PURE__ */ W(gr, { percentage: e, fillerExtraStyles: r, progressBarExtraStyles: t });
};
export {
  an as ProgressBarContainer
};
