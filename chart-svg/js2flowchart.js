! function (e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("js2flowchart", [], t) : "object" == typeof exports ? exports.js2flowchart = t() : e.js2flowchart = t()
}("undefined" != typeof window ? window : this, function () {
	return function (e) {
		var t = {};

		function n(r) {
			if (t[r]) return t[r].exports;
			var i = t[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
		}
		return n.m = e, n.c = t, n.d = function (e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: r
			})
		}, n.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, n.t = function (e, t) {
			if (1 & t && (e = n(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if (n.r(r), Object.defineProperty(r, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e)
				for (var i in e) n.d(r, i, function (t) {
					return e[t]
				}.bind(null, i));
			return r
		}, n.n = function (e) {
			var t = e && e.__esModule ? function () {
				return e.default
			} : function () {
				return e
			};
			return n.d(t, "a", t), t
		}, n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, n.p = "", n(n.s = 330)
	}([function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = {
			react: !0,
			assertNode: !0,
			createTypeAnnotationBasedOnTypeof: !0,
			createUnionTypeAnnotation: !0,
			cloneNode: !0,
			clone: !0,
			cloneDeep: !0,
			cloneWithoutLoc: !0,
			addComment: !0,
			addComments: !0,
			inheritInnerComments: !0,
			inheritLeadingComments: !0,
			inheritsComments: !0,
			inheritTrailingComments: !0,
			removeComments: !0,
			ensureBlock: !0,
			toBindingIdentifierName: !0,
			toBlock: !0,
			toComputedKey: !0,
			toExpression: !0,
			toIdentifier: !0,
			toKeyAlias: !0,
			toSequenceExpression: !0,
			toStatement: !0,
			valueToNode: !0,
			appendToMemberExpression: !0,
			inherits: !0,
			prependToMemberExpression: !0,
			removeProperties: !0,
			removePropertiesDeep: !0,
			removeTypeDuplicates: !0,
			getBindingIdentifiers: !0,
			getOuterBindingIdentifiers: !0,
			traverse: !0,
			traverseFast: !0,
			shallowEqual: !0,
			is: !0,
			isBinding: !0,
			isBlockScoped: !0,
			isImmutable: !0,
			isLet: !0,
			isNode: !0,
			isNodesEquivalent: !0,
			isPlaceholderType: !0,
			isReferenced: !0,
			isScope: !0,
			isSpecifierDefault: !0,
			isType: !0,
			isValidES3Identifier: !0,
			isValidIdentifier: !0,
			isVar: !0,
			matchesPattern: !0,
			validate: !0,
			buildMatchMemberExpression: !0
		};
		Object.defineProperty(t, "assertNode", {
			enumerable: !0,
			get: function () {
				return a.default
			}
		}), Object.defineProperty(t, "createTypeAnnotationBasedOnTypeof", {
			enumerable: !0,
			get: function () {
				return c.default
			}
		}), Object.defineProperty(t, "createUnionTypeAnnotation", {
			enumerable: !0,
			get: function () {
				return l.default
			}
		}), Object.defineProperty(t, "cloneNode", {
			enumerable: !0,
			get: function () {
				return h.default
			}
		}), Object.defineProperty(t, "clone", {
			enumerable: !0,
			get: function () {
				return f.default
			}
		}), Object.defineProperty(t, "cloneDeep", {
			enumerable: !0,
			get: function () {
				return d.default
			}
		}), Object.defineProperty(t, "cloneWithoutLoc", {
			enumerable: !0,
			get: function () {
				return y.default
			}
		}), Object.defineProperty(t, "addComment", {
			enumerable: !0,
			get: function () {
				return m.default
			}
		}), Object.defineProperty(t, "addComments", {
			enumerable: !0,
			get: function () {
				return g.default
			}
		}), Object.defineProperty(t, "inheritInnerComments", {
			enumerable: !0,
			get: function () {
				return E.default
			}
		}), Object.defineProperty(t, "inheritLeadingComments", {
			enumerable: !0,
			get: function () {
				return T.default
			}
		}), Object.defineProperty(t, "inheritsComments", {
			enumerable: !0,
			get: function () {
				return A.default
			}
		}), Object.defineProperty(t, "inheritTrailingComments", {
			enumerable: !0,
			get: function () {
				return S.default
			}
		}), Object.defineProperty(t, "removeComments", {
			enumerable: !0,
			get: function () {
				return b.default
			}
		}), Object.defineProperty(t, "ensureBlock", {
			enumerable: !0,
			get: function () {
				return v.default
			}
		}), Object.defineProperty(t, "toBindingIdentifierName", {
			enumerable: !0,
			get: function () {
				return D.default
			}
		}), Object.defineProperty(t, "toBlock", {
			enumerable: !0,
			get: function () {
				return C.default
			}
		}), Object.defineProperty(t, "toComputedKey", {
			enumerable: !0,
			get: function () {
				return O.default
			}
		}), Object.defineProperty(t, "toExpression", {
			enumerable: !0,
			get: function () {
				return w.default
			}
		}), Object.defineProperty(t, "toIdentifier", {
			enumerable: !0,
			get: function () {
				return F.default
			}
		}), Object.defineProperty(t, "toKeyAlias", {
			enumerable: !0,
			get: function () {
				return _.default
			}
		}), Object.defineProperty(t, "toSequenceExpression", {
			enumerable: !0,
			get: function () {
				return N.default
			}
		}), Object.defineProperty(t, "toStatement", {
			enumerable: !0,
			get: function () {
				return I.default
			}
		}), Object.defineProperty(t, "valueToNode", {
			enumerable: !0,
			get: function () {
				return k.default
			}
		}), Object.defineProperty(t, "appendToMemberExpression", {
			enumerable: !0,
			get: function () {
				return L.default
			}
		}), Object.defineProperty(t, "inherits", {
			enumerable: !0,
			get: function () {
				return M.default
			}
		}), Object.defineProperty(t, "prependToMemberExpression", {
			enumerable: !0,
			get: function () {
				return j.default
			}
		}), Object.defineProperty(t, "removeProperties", {
			enumerable: !0,
			get: function () {
				return R.default
			}
		}), Object.defineProperty(t, "removePropertiesDeep", {
			enumerable: !0,
			get: function () {
				return U.default
			}
		}), Object.defineProperty(t, "removeTypeDuplicates", {
			enumerable: !0,
			get: function () {
				return V.default
			}
		}), Object.defineProperty(t, "getBindingIdentifiers", {
			enumerable: !0,
			get: function () {
				return X.default
			}
		}), Object.defineProperty(t, "getOuterBindingIdentifiers", {
			enumerable: !0,
			get: function () {
				return W.default
			}
		}), Object.defineProperty(t, "traverse", {
			enumerable: !0,
			get: function () {
				return Y.default
			}
		}), Object.defineProperty(t, "traverseFast", {
			enumerable: !0,
			get: function () {
				return K.default
			}
		}), Object.defineProperty(t, "shallowEqual", {
			enumerable: !0,
			get: function () {
				return q.default
			}
		}), Object.defineProperty(t, "is", {
			enumerable: !0,
			get: function () {
				return J.default
			}
		}), Object.defineProperty(t, "isBinding", {
			enumerable: !0,
			get: function () {
				return G.default
			}
		}), Object.defineProperty(t, "isBlockScoped", {
			enumerable: !0,
			get: function () {
				return H.default
			}
		}), Object.defineProperty(t, "isImmutable", {
			enumerable: !0,
			get: function () {
				return $.default
			}
		}), Object.defineProperty(t, "isLet", {
			enumerable: !0,
			get: function () {
				return z.default
			}
		}), Object.defineProperty(t, "isNode", {
			enumerable: !0,
			get: function () {
				return Q.default
			}
		}), Object.defineProperty(t, "isNodesEquivalent", {
			enumerable: !0,
			get: function () {
				return Z.default
			}
		}), Object.defineProperty(t, "isPlaceholderType", {
			enumerable: !0,
			get: function () {
				return ee.default
			}
		}), Object.defineProperty(t, "isReferenced", {
			enumerable: !0,
			get: function () {
				return te.default
			}
		}), Object.defineProperty(t, "isScope", {
			enumerable: !0,
			get: function () {
				return ne.default
			}
		}), Object.defineProperty(t, "isSpecifierDefault", {
			enumerable: !0,
			get: function () {
				return re.default
			}
		}), Object.defineProperty(t, "isType", {
			enumerable: !0,
			get: function () {
				return ie.default
			}
		}), Object.defineProperty(t, "isValidES3Identifier", {
			enumerable: !0,
			get: function () {
				return se.default
			}
		}), Object.defineProperty(t, "isValidIdentifier", {
			enumerable: !0,
			get: function () {
				return oe.default
			}
		}), Object.defineProperty(t, "isVar", {
			enumerable: !0,
			get: function () {
				return ae.default
			}
		}), Object.defineProperty(t, "matchesPattern", {
			enumerable: !0,
			get: function () {
				return ue.default
			}
		}), Object.defineProperty(t, "validate", {
			enumerable: !0,
			get: function () {
				return ce.default
			}
		}), Object.defineProperty(t, "buildMatchMemberExpression", {
			enumerable: !0,
			get: function () {
				return le.default
			}
		}), t.react = void 0;
		var i = he(n(114)),
			s = he(n(115)),
			o = he(n(116)),
			a = he(n(193)),
			u = n(194);
		Object.keys(u).forEach(function (e) {
			"default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return u[e]
				}
			}))
		});
		var c = he(n(195)),
			l = he(n(196)),
			p = n(4);
		Object.keys(p).forEach(function (e) {
			"default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return p[e]
				}
			}))
		});
		var h = he(n(16)),
			f = he(n(80)),
			d = he(n(197)),
			y = he(n(198)),
			m = he(n(199)),
			g = he(n(81)),
			E = he(n(82)),
			T = he(n(85)),
			A = he(n(86)),
			S = he(n(87)),
			b = he(n(213)),
			x = n(214);
		Object.keys(x).forEach(function (e) {
			"default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return x[e]
				}
			}))
		});
		var P = n(11);
		Object.keys(P).forEach(function (e) {
			"default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return P[e]
				}
			}))
		});
		var v = he(n(215)),
			D = he(n(216)),
			C = he(n(88)),
			O = he(n(217)),
			w = he(n(218)),
			F = he(n(89)),
			_ = he(n(219)),
			N = he(n(220)),
			I = he(n(222)),
			k = he(n(223)),
			B = n(3);
		Object.keys(B).forEach(function (e) {
			"default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return B[e]
				}
			}))
		});
		var L = he(n(227)),
			M = he(n(228)),
			j = he(n(229)),
			R = he(n(92)),
			U = he(n(90)),
			V = he(n(79)),
			X = he(n(30)),
			W = he(n(230)),
			Y = he(n(231)),
			K = he(n(91)),
			q = he(n(33)),
			J = he(n(43)),
			G = he(n(232)),
			H = he(n(233)),
			$ = he(n(234)),
			z = he(n(93)),
			Q = he(n(78)),
			Z = he(n(235)),
			ee = he(n(76)),
			te = he(n(236)),
			ne = he(n(237)),
			re = he(n(238)),
			ie = he(n(44)),
			se = he(n(239)),
			oe = he(n(15)),
			ae = he(n(240)),
			ue = he(n(55)),
			ce = he(n(45)),
			le = he(n(54)),
			pe = n(2);

		function he(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.keys(pe).forEach(function (e) {
			"default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return pe[e]
				}
			}))
		});
		const fe = {
			isReactComponent: i.default,
			isCompatTag: s.default,
			buildChildren: o.default
		};
		t.react = fe
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t, n) {
			return new o(e, t, n).generate()
		}, t.CodeGenerator = void 0;
		var r = s(n(264)),
			i = s(n(272));

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		class o extends i.default {
			constructor(e, t = {}, n) {
				super(function (e, t) {
					const n = {
						auxiliaryCommentBefore: t.auxiliaryCommentBefore,
						auxiliaryCommentAfter: t.auxiliaryCommentAfter,
						shouldPrintComment: t.shouldPrintComment,
						retainLines: t.retainLines,
						retainFunctionParens: t.retainFunctionParens,
						comments: null == t.comments || t.comments,
						compact: t.compact,
						minified: t.minified,
						concise: t.concise,
						jsonCompatibleStrings: t.jsonCompatibleStrings,
						indent: {
							adjustMultilineComment: !0,
							style: "  ",
							base: 0
						},
						decoratorsBeforeExport: !!t.decoratorsBeforeExport,
						jsescOption: Object.assign({
							quotes: "double",
							wrap: !0
						}, t.jsescOption)
					};
					n.minified ? (n.compact = !0, n.shouldPrintComment = n.shouldPrintComment || (() => n.comments)) : n.shouldPrintComment = n.shouldPrintComment || (e => n.comments || e.indexOf("@license") >= 0 || e.indexOf("@preserve") >= 0);
					"auto" === n.compact && (n.compact = e.length > 5e5, n.compact && console.error("[BABEL] Note: The code generator has deoptimised the styling of " + `${t.filename} as it exceeds the max of 500KB.`));
					n.compact && (n.indent.adjustMultilineComment = !1);
					return n
				}(n, t), t.sourceMaps ? new r.default(t, n) : null), this.ast = e
			}
			generate() {
				return super.generate(this.ast)
			}
		}
		t.CodeGenerator = class {
			constructor(e, t, n) {
				this._generator = new o(e, t, n)
			}
			generate() {
				return this._generator.generate()
			}
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.isArrayExpression = function (e, t) {
			if (!e) return !1;
			if ("ArrayExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isAssignmentExpression = function (e, t) {
			if (!e) return !1;
			if ("AssignmentExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isBinaryExpression = function (e, t) {
			if (!e) return !1;
			if ("BinaryExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isInterpreterDirective = function (e, t) {
			if (!e) return !1;
			if ("InterpreterDirective" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDirective = function (e, t) {
			if (!e) return !1;
			if ("Directive" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDirectiveLiteral = function (e, t) {
			if (!e) return !1;
			if ("DirectiveLiteral" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isBlockStatement = function (e, t) {
			if (!e) return !1;
			if ("BlockStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isBreakStatement = function (e, t) {
			if (!e) return !1;
			if ("BreakStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isCallExpression = function (e, t) {
			if (!e) return !1;
			if ("CallExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isCatchClause = function (e, t) {
			if (!e) return !1;
			if ("CatchClause" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isConditionalExpression = function (e, t) {
			if (!e) return !1;
			if ("ConditionalExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isContinueStatement = function (e, t) {
			if (!e) return !1;
			if ("ContinueStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDebuggerStatement = function (e, t) {
			if (!e) return !1;
			if ("DebuggerStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDoWhileStatement = function (e, t) {
			if (!e) return !1;
			if ("DoWhileStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isEmptyStatement = function (e, t) {
			if (!e) return !1;
			if ("EmptyStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isExpressionStatement = function (e, t) {
			if (!e) return !1;
			if ("ExpressionStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isFile = function (e, t) {
			if (!e) return !1;
			if ("File" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isForInStatement = function (e, t) {
			if (!e) return !1;
			if ("ForInStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isForStatement = function (e, t) {
			if (!e) return !1;
			if ("ForStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isFunctionDeclaration = function (e, t) {
			if (!e) return !1;
			if ("FunctionDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isFunctionExpression = function (e, t) {
			if (!e) return !1;
			if ("FunctionExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isIdentifier = function (e, t) {
			if (!e) return !1;
			if ("Identifier" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isIfStatement = function (e, t) {
			if (!e) return !1;
			if ("IfStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isLabeledStatement = function (e, t) {
			if (!e) return !1;
			if ("LabeledStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isStringLiteral = function (e, t) {
			if (!e) return !1;
			if ("StringLiteral" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isNumericLiteral = function (e, t) {
			if (!e) return !1;
			if ("NumericLiteral" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isNullLiteral = function (e, t) {
			if (!e) return !1;
			if ("NullLiteral" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isBooleanLiteral = function (e, t) {
			if (!e) return !1;
			if ("BooleanLiteral" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isRegExpLiteral = function (e, t) {
			if (!e) return !1;
			if ("RegExpLiteral" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isLogicalExpression = function (e, t) {
			if (!e) return !1;
			if ("LogicalExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isMemberExpression = function (e, t) {
			if (!e) return !1;
			if ("MemberExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isNewExpression = function (e, t) {
			if (!e) return !1;
			if ("NewExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isProgram = function (e, t) {
			if (!e) return !1;
			if ("Program" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isObjectExpression = function (e, t) {
			if (!e) return !1;
			if ("ObjectExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isObjectMethod = function (e, t) {
			if (!e) return !1;
			if ("ObjectMethod" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isObjectProperty = function (e, t) {
			if (!e) return !1;
			if ("ObjectProperty" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isRestElement = function (e, t) {
			if (!e) return !1;
			if ("RestElement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isReturnStatement = function (e, t) {
			if (!e) return !1;
			if ("ReturnStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isSequenceExpression = function (e, t) {
			if (!e) return !1;
			if ("SequenceExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isParenthesizedExpression = function (e, t) {
			if (!e) return !1;
			if ("ParenthesizedExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isSwitchCase = function (e, t) {
			if (!e) return !1;
			if ("SwitchCase" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isSwitchStatement = function (e, t) {
			if (!e) return !1;
			if ("SwitchStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isThisExpression = function (e, t) {
			if (!e) return !1;
			if ("ThisExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isThrowStatement = function (e, t) {
			if (!e) return !1;
			if ("ThrowStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTryStatement = function (e, t) {
			if (!e) return !1;
			if ("TryStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isUnaryExpression = function (e, t) {
			if (!e) return !1;
			if ("UnaryExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isUpdateExpression = function (e, t) {
			if (!e) return !1;
			if ("UpdateExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isVariableDeclaration = function (e, t) {
			if (!e) return !1;
			if ("VariableDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isVariableDeclarator = function (e, t) {
			if (!e) return !1;
			if ("VariableDeclarator" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isWhileStatement = function (e, t) {
			if (!e) return !1;
			if ("WhileStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isWithStatement = function (e, t) {
			if (!e) return !1;
			if ("WithStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isAssignmentPattern = function (e, t) {
			if (!e) return !1;
			if ("AssignmentPattern" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isArrayPattern = function (e, t) {
			if (!e) return !1;
			if ("ArrayPattern" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isArrowFunctionExpression = function (e, t) {
			if (!e) return !1;
			if ("ArrowFunctionExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isClassBody = function (e, t) {
			if (!e) return !1;
			if ("ClassBody" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isClassDeclaration = function (e, t) {
			if (!e) return !1;
			if ("ClassDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isClassExpression = function (e, t) {
			if (!e) return !1;
			if ("ClassExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isExportAllDeclaration = function (e, t) {
			if (!e) return !1;
			if ("ExportAllDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isExportDefaultDeclaration = function (e, t) {
			if (!e) return !1;
			if ("ExportDefaultDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isExportNamedDeclaration = function (e, t) {
			if (!e) return !1;
			if ("ExportNamedDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isExportSpecifier = function (e, t) {
			if (!e) return !1;
			if ("ExportSpecifier" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isForOfStatement = function (e, t) {
			if (!e) return !1;
			if ("ForOfStatement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isImportDeclaration = function (e, t) {
			if (!e) return !1;
			if ("ImportDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isImportDefaultSpecifier = function (e, t) {
			if (!e) return !1;
			if ("ImportDefaultSpecifier" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isImportNamespaceSpecifier = function (e, t) {
			if (!e) return !1;
			if ("ImportNamespaceSpecifier" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isImportSpecifier = function (e, t) {
			if (!e) return !1;
			if ("ImportSpecifier" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isMetaProperty = function (e, t) {
			if (!e) return !1;
			if ("MetaProperty" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isClassMethod = function (e, t) {
			if (!e) return !1;
			if ("ClassMethod" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isObjectPattern = function (e, t) {
			if (!e) return !1;
			if ("ObjectPattern" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isSpreadElement = function (e, t) {
			if (!e) return !1;
			if ("SpreadElement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isSuper = function (e, t) {
			if (!e) return !1;
			if ("Super" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTaggedTemplateExpression = function (e, t) {
			if (!e) return !1;
			if ("TaggedTemplateExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTemplateElement = function (e, t) {
			if (!e) return !1;
			if ("TemplateElement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTemplateLiteral = function (e, t) {
			if (!e) return !1;
			if ("TemplateLiteral" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isYieldExpression = function (e, t) {
			if (!e) return !1;
			if ("YieldExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isAnyTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("AnyTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isArrayTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("ArrayTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isBooleanTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("BooleanTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isBooleanLiteralTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("BooleanLiteralTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isNullLiteralTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("NullLiteralTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isClassImplements = function (e, t) {
			if (!e) return !1;
			if ("ClassImplements" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDeclareClass = function (e, t) {
			if (!e) return !1;
			if ("DeclareClass" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDeclareFunction = function (e, t) {
			if (!e) return !1;
			if ("DeclareFunction" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDeclareInterface = function (e, t) {
			if (!e) return !1;
			if ("DeclareInterface" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDeclareModule = function (e, t) {
			if (!e) return !1;
			if ("DeclareModule" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDeclareModuleExports = function (e, t) {
			if (!e) return !1;
			if ("DeclareModuleExports" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDeclareTypeAlias = function (e, t) {
			if (!e) return !1;
			if ("DeclareTypeAlias" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDeclareOpaqueType = function (e, t) {
			if (!e) return !1;
			if ("DeclareOpaqueType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDeclareVariable = function (e, t) {
			if (!e) return !1;
			if ("DeclareVariable" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDeclareExportDeclaration = function (e, t) {
			if (!e) return !1;
			if ("DeclareExportDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDeclareExportAllDeclaration = function (e, t) {
			if (!e) return !1;
			if ("DeclareExportAllDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDeclaredPredicate = function (e, t) {
			if (!e) return !1;
			if ("DeclaredPredicate" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isExistsTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("ExistsTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isFunctionTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("FunctionTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isFunctionTypeParam = function (e, t) {
			if (!e) return !1;
			if ("FunctionTypeParam" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isGenericTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("GenericTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isInferredPredicate = function (e, t) {
			if (!e) return !1;
			if ("InferredPredicate" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isInterfaceExtends = function (e, t) {
			if (!e) return !1;
			if ("InterfaceExtends" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isInterfaceDeclaration = function (e, t) {
			if (!e) return !1;
			if ("InterfaceDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isInterfaceTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("InterfaceTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isIntersectionTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("IntersectionTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isMixedTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("MixedTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isEmptyTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("EmptyTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isNullableTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("NullableTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isNumberLiteralTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("NumberLiteralTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isNumberTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("NumberTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isObjectTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("ObjectTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isObjectTypeInternalSlot = function (e, t) {
			if (!e) return !1;
			if ("ObjectTypeInternalSlot" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isObjectTypeCallProperty = function (e, t) {
			if (!e) return !1;
			if ("ObjectTypeCallProperty" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isObjectTypeIndexer = function (e, t) {
			if (!e) return !1;
			if ("ObjectTypeIndexer" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isObjectTypeProperty = function (e, t) {
			if (!e) return !1;
			if ("ObjectTypeProperty" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isObjectTypeSpreadProperty = function (e, t) {
			if (!e) return !1;
			if ("ObjectTypeSpreadProperty" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isOpaqueType = function (e, t) {
			if (!e) return !1;
			if ("OpaqueType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isQualifiedTypeIdentifier = function (e, t) {
			if (!e) return !1;
			if ("QualifiedTypeIdentifier" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isStringLiteralTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("StringLiteralTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isStringTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("StringTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isThisTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("ThisTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTupleTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("TupleTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTypeofTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("TypeofTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTypeAlias = function (e, t) {
			if (!e) return !1;
			if ("TypeAlias" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("TypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTypeCastExpression = function (e, t) {
			if (!e) return !1;
			if ("TypeCastExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTypeParameter = function (e, t) {
			if (!e) return !1;
			if ("TypeParameter" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTypeParameterDeclaration = function (e, t) {
			if (!e) return !1;
			if ("TypeParameterDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTypeParameterInstantiation = function (e, t) {
			if (!e) return !1;
			if ("TypeParameterInstantiation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isUnionTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("UnionTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isVariance = function (e, t) {
			if (!e) return !1;
			if ("Variance" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isVoidTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("VoidTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isJSXAttribute = function (e, t) {
			if (!e) return !1;
			if ("JSXAttribute" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isJSXClosingElement = function (e, t) {
			if (!e) return !1;
			if ("JSXClosingElement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isJSXElement = function (e, t) {
			if (!e) return !1;
			if ("JSXElement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isJSXEmptyExpression = function (e, t) {
			if (!e) return !1;
			if ("JSXEmptyExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isJSXExpressionContainer = function (e, t) {
			if (!e) return !1;
			if ("JSXExpressionContainer" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isJSXSpreadChild = function (e, t) {
			if (!e) return !1;
			if ("JSXSpreadChild" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isJSXIdentifier = function (e, t) {
			if (!e) return !1;
			if ("JSXIdentifier" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isJSXMemberExpression = function (e, t) {
			if (!e) return !1;
			if ("JSXMemberExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isJSXNamespacedName = function (e, t) {
			if (!e) return !1;
			if ("JSXNamespacedName" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isJSXOpeningElement = function (e, t) {
			if (!e) return !1;
			if ("JSXOpeningElement" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isJSXSpreadAttribute = function (e, t) {
			if (!e) return !1;
			if ("JSXSpreadAttribute" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isJSXText = function (e, t) {
			if (!e) return !1;
			if ("JSXText" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isJSXFragment = function (e, t) {
			if (!e) return !1;
			if ("JSXFragment" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isJSXOpeningFragment = function (e, t) {
			if (!e) return !1;
			if ("JSXOpeningFragment" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isJSXClosingFragment = function (e, t) {
			if (!e) return !1;
			if ("JSXClosingFragment" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isNoop = function (e, t) {
			if (!e) return !1;
			if ("Noop" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isPlaceholder = function (e, t) {
			if (!e) return !1;
			if ("Placeholder" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isArgumentPlaceholder = function (e, t) {
			if (!e) return !1;
			if ("ArgumentPlaceholder" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isAwaitExpression = function (e, t) {
			if (!e) return !1;
			if ("AwaitExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isBindExpression = function (e, t) {
			if (!e) return !1;
			if ("BindExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isClassProperty = function (e, t) {
			if (!e) return !1;
			if ("ClassProperty" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isOptionalMemberExpression = function (e, t) {
			if (!e) return !1;
			if ("OptionalMemberExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isPipelineTopicExpression = function (e, t) {
			if (!e) return !1;
			if ("PipelineTopicExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isPipelineBareFunction = function (e, t) {
			if (!e) return !1;
			if ("PipelineBareFunction" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isPipelinePrimaryTopicReference = function (e, t) {
			if (!e) return !1;
			if ("PipelinePrimaryTopicReference" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isOptionalCallExpression = function (e, t) {
			if (!e) return !1;
			if ("OptionalCallExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isClassPrivateProperty = function (e, t) {
			if (!e) return !1;
			if ("ClassPrivateProperty" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isClassPrivateMethod = function (e, t) {
			if (!e) return !1;
			if ("ClassPrivateMethod" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isImport = function (e, t) {
			if (!e) return !1;
			if ("Import" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDecorator = function (e, t) {
			if (!e) return !1;
			if ("Decorator" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDoExpression = function (e, t) {
			if (!e) return !1;
			if ("DoExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isExportDefaultSpecifier = function (e, t) {
			if (!e) return !1;
			if ("ExportDefaultSpecifier" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isExportNamespaceSpecifier = function (e, t) {
			if (!e) return !1;
			if ("ExportNamespaceSpecifier" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isPrivateName = function (e, t) {
			if (!e) return !1;
			if ("PrivateName" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isBigIntLiteral = function (e, t) {
			if (!e) return !1;
			if ("BigIntLiteral" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSParameterProperty = function (e, t) {
			if (!e) return !1;
			if ("TSParameterProperty" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSDeclareFunction = function (e, t) {
			if (!e) return !1;
			if ("TSDeclareFunction" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSDeclareMethod = function (e, t) {
			if (!e) return !1;
			if ("TSDeclareMethod" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSQualifiedName = function (e, t) {
			if (!e) return !1;
			if ("TSQualifiedName" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSCallSignatureDeclaration = function (e, t) {
			if (!e) return !1;
			if ("TSCallSignatureDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSConstructSignatureDeclaration = function (e, t) {
			if (!e) return !1;
			if ("TSConstructSignatureDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSPropertySignature = function (e, t) {
			if (!e) return !1;
			if ("TSPropertySignature" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSMethodSignature = function (e, t) {
			if (!e) return !1;
			if ("TSMethodSignature" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSIndexSignature = function (e, t) {
			if (!e) return !1;
			if ("TSIndexSignature" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSAnyKeyword = function (e, t) {
			if (!e) return !1;
			if ("TSAnyKeyword" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSUnknownKeyword = function (e, t) {
			if (!e) return !1;
			if ("TSUnknownKeyword" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSNumberKeyword = function (e, t) {
			if (!e) return !1;
			if ("TSNumberKeyword" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSObjectKeyword = function (e, t) {
			if (!e) return !1;
			if ("TSObjectKeyword" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSBooleanKeyword = function (e, t) {
			if (!e) return !1;
			if ("TSBooleanKeyword" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSStringKeyword = function (e, t) {
			if (!e) return !1;
			if ("TSStringKeyword" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSSymbolKeyword = function (e, t) {
			if (!e) return !1;
			if ("TSSymbolKeyword" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSVoidKeyword = function (e, t) {
			if (!e) return !1;
			if ("TSVoidKeyword" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSUndefinedKeyword = function (e, t) {
			if (!e) return !1;
			if ("TSUndefinedKeyword" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSNullKeyword = function (e, t) {
			if (!e) return !1;
			if ("TSNullKeyword" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSNeverKeyword = function (e, t) {
			if (!e) return !1;
			if ("TSNeverKeyword" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSThisType = function (e, t) {
			if (!e) return !1;
			if ("TSThisType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSFunctionType = function (e, t) {
			if (!e) return !1;
			if ("TSFunctionType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSConstructorType = function (e, t) {
			if (!e) return !1;
			if ("TSConstructorType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSTypeReference = function (e, t) {
			if (!e) return !1;
			if ("TSTypeReference" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSTypePredicate = function (e, t) {
			if (!e) return !1;
			if ("TSTypePredicate" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSTypeQuery = function (e, t) {
			if (!e) return !1;
			if ("TSTypeQuery" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSTypeLiteral = function (e, t) {
			if (!e) return !1;
			if ("TSTypeLiteral" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSArrayType = function (e, t) {
			if (!e) return !1;
			if ("TSArrayType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSTupleType = function (e, t) {
			if (!e) return !1;
			if ("TSTupleType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSOptionalType = function (e, t) {
			if (!e) return !1;
			if ("TSOptionalType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSRestType = function (e, t) {
			if (!e) return !1;
			if ("TSRestType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSUnionType = function (e, t) {
			if (!e) return !1;
			if ("TSUnionType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSIntersectionType = function (e, t) {
			if (!e) return !1;
			if ("TSIntersectionType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSConditionalType = function (e, t) {
			if (!e) return !1;
			if ("TSConditionalType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSInferType = function (e, t) {
			if (!e) return !1;
			if ("TSInferType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSParenthesizedType = function (e, t) {
			if (!e) return !1;
			if ("TSParenthesizedType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSTypeOperator = function (e, t) {
			if (!e) return !1;
			if ("TSTypeOperator" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSIndexedAccessType = function (e, t) {
			if (!e) return !1;
			if ("TSIndexedAccessType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSMappedType = function (e, t) {
			if (!e) return !1;
			if ("TSMappedType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSLiteralType = function (e, t) {
			if (!e) return !1;
			if ("TSLiteralType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSExpressionWithTypeArguments = function (e, t) {
			if (!e) return !1;
			if ("TSExpressionWithTypeArguments" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSInterfaceDeclaration = function (e, t) {
			if (!e) return !1;
			if ("TSInterfaceDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSInterfaceBody = function (e, t) {
			if (!e) return !1;
			if ("TSInterfaceBody" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSTypeAliasDeclaration = function (e, t) {
			if (!e) return !1;
			if ("TSTypeAliasDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSAsExpression = function (e, t) {
			if (!e) return !1;
			if ("TSAsExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSTypeAssertion = function (e, t) {
			if (!e) return !1;
			if ("TSTypeAssertion" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSEnumDeclaration = function (e, t) {
			if (!e) return !1;
			if ("TSEnumDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSEnumMember = function (e, t) {
			if (!e) return !1;
			if ("TSEnumMember" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSModuleDeclaration = function (e, t) {
			if (!e) return !1;
			if ("TSModuleDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSModuleBlock = function (e, t) {
			if (!e) return !1;
			if ("TSModuleBlock" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSImportType = function (e, t) {
			if (!e) return !1;
			if ("TSImportType" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSImportEqualsDeclaration = function (e, t) {
			if (!e) return !1;
			if ("TSImportEqualsDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSExternalModuleReference = function (e, t) {
			if (!e) return !1;
			if ("TSExternalModuleReference" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSNonNullExpression = function (e, t) {
			if (!e) return !1;
			if ("TSNonNullExpression" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSExportAssignment = function (e, t) {
			if (!e) return !1;
			if ("TSExportAssignment" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSNamespaceExportDeclaration = function (e, t) {
			if (!e) return !1;
			if ("TSNamespaceExportDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSTypeAnnotation = function (e, t) {
			if (!e) return !1;
			if ("TSTypeAnnotation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSTypeParameterInstantiation = function (e, t) {
			if (!e) return !1;
			if ("TSTypeParameterInstantiation" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSTypeParameterDeclaration = function (e, t) {
			if (!e) return !1;
			if ("TSTypeParameterDeclaration" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSTypeParameter = function (e, t) {
			if (!e) return !1;
			if ("TSTypeParameter" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isExpression = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Expression" === n || "ArrayExpression" === n || "AssignmentExpression" === n || "BinaryExpression" === n || "CallExpression" === n || "ConditionalExpression" === n || "FunctionExpression" === n || "Identifier" === n || "StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "RegExpLiteral" === n || "LogicalExpression" === n || "MemberExpression" === n || "NewExpression" === n || "ObjectExpression" === n || "SequenceExpression" === n || "ParenthesizedExpression" === n || "ThisExpression" === n || "UnaryExpression" === n || "UpdateExpression" === n || "ArrowFunctionExpression" === n || "ClassExpression" === n || "MetaProperty" === n || "Super" === n || "TaggedTemplateExpression" === n || "TemplateLiteral" === n || "YieldExpression" === n || "TypeCastExpression" === n || "JSXElement" === n || "JSXFragment" === n || "AwaitExpression" === n || "BindExpression" === n || "OptionalMemberExpression" === n || "PipelinePrimaryTopicReference" === n || "OptionalCallExpression" === n || "Import" === n || "DoExpression" === n || "BigIntLiteral" === n || "TSAsExpression" === n || "TSTypeAssertion" === n || "TSNonNullExpression" === n || "Placeholder" === n && ("Expression" === e.expectedNode || "Identifier" === e.expectedNode || "StringLiteral" === e.expectedNode)) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isBinary = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Binary" === n || "BinaryExpression" === n || "LogicalExpression" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isScopable = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Scopable" === n || "BlockStatement" === n || "CatchClause" === n || "DoWhileStatement" === n || "ForInStatement" === n || "ForStatement" === n || "FunctionDeclaration" === n || "FunctionExpression" === n || "Program" === n || "ObjectMethod" === n || "SwitchStatement" === n || "WhileStatement" === n || "ArrowFunctionExpression" === n || "ClassDeclaration" === n || "ClassExpression" === n || "ForOfStatement" === n || "ClassMethod" === n || "ClassPrivateMethod" === n || "TSModuleBlock" === n || "Placeholder" === n && "BlockStatement" === e.expectedNode) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isBlockParent = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("BlockParent" === n || "BlockStatement" === n || "CatchClause" === n || "DoWhileStatement" === n || "ForInStatement" === n || "ForStatement" === n || "FunctionDeclaration" === n || "FunctionExpression" === n || "Program" === n || "ObjectMethod" === n || "SwitchStatement" === n || "WhileStatement" === n || "ArrowFunctionExpression" === n || "ForOfStatement" === n || "ClassMethod" === n || "ClassPrivateMethod" === n || "TSModuleBlock" === n || "Placeholder" === n && "BlockStatement" === e.expectedNode) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isBlock = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Block" === n || "BlockStatement" === n || "Program" === n || "TSModuleBlock" === n || "Placeholder" === n && "BlockStatement" === e.expectedNode) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isStatement = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Statement" === n || "BlockStatement" === n || "BreakStatement" === n || "ContinueStatement" === n || "DebuggerStatement" === n || "DoWhileStatement" === n || "EmptyStatement" === n || "ExpressionStatement" === n || "ForInStatement" === n || "ForStatement" === n || "FunctionDeclaration" === n || "IfStatement" === n || "LabeledStatement" === n || "ReturnStatement" === n || "SwitchStatement" === n || "ThrowStatement" === n || "TryStatement" === n || "VariableDeclaration" === n || "WhileStatement" === n || "WithStatement" === n || "ClassDeclaration" === n || "ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n || "ForOfStatement" === n || "ImportDeclaration" === n || "DeclareClass" === n || "DeclareFunction" === n || "DeclareInterface" === n || "DeclareModule" === n || "DeclareModuleExports" === n || "DeclareTypeAlias" === n || "DeclareOpaqueType" === n || "DeclareVariable" === n || "DeclareExportDeclaration" === n || "DeclareExportAllDeclaration" === n || "InterfaceDeclaration" === n || "OpaqueType" === n || "TypeAlias" === n || "TSDeclareFunction" === n || "TSInterfaceDeclaration" === n || "TSTypeAliasDeclaration" === n || "TSEnumDeclaration" === n || "TSModuleDeclaration" === n || "TSImportEqualsDeclaration" === n || "TSExportAssignment" === n || "TSNamespaceExportDeclaration" === n || "Placeholder" === n && ("Statement" === e.expectedNode || "Declaration" === e.expectedNode || "BlockStatement" === e.expectedNode)) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTerminatorless = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Terminatorless" === n || "BreakStatement" === n || "ContinueStatement" === n || "ReturnStatement" === n || "ThrowStatement" === n || "YieldExpression" === n || "AwaitExpression" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isCompletionStatement = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("CompletionStatement" === n || "BreakStatement" === n || "ContinueStatement" === n || "ReturnStatement" === n || "ThrowStatement" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isConditional = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Conditional" === n || "ConditionalExpression" === n || "IfStatement" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isLoop = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Loop" === n || "DoWhileStatement" === n || "ForInStatement" === n || "ForStatement" === n || "WhileStatement" === n || "ForOfStatement" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isWhile = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("While" === n || "DoWhileStatement" === n || "WhileStatement" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isExpressionWrapper = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("ExpressionWrapper" === n || "ExpressionStatement" === n || "ParenthesizedExpression" === n || "TypeCastExpression" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isFor = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("For" === n || "ForInStatement" === n || "ForStatement" === n || "ForOfStatement" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isForXStatement = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("ForXStatement" === n || "ForInStatement" === n || "ForOfStatement" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isFunction = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Function" === n || "FunctionDeclaration" === n || "FunctionExpression" === n || "ObjectMethod" === n || "ArrowFunctionExpression" === n || "ClassMethod" === n || "ClassPrivateMethod" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isFunctionParent = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("FunctionParent" === n || "FunctionDeclaration" === n || "FunctionExpression" === n || "ObjectMethod" === n || "ArrowFunctionExpression" === n || "ClassMethod" === n || "ClassPrivateMethod" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isPureish = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Pureish" === n || "FunctionDeclaration" === n || "FunctionExpression" === n || "StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "ArrowFunctionExpression" === n || "ClassDeclaration" === n || "ClassExpression" === n || "BigIntLiteral" === n || "Placeholder" === n && "StringLiteral" === e.expectedNode) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isDeclaration = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Declaration" === n || "FunctionDeclaration" === n || "VariableDeclaration" === n || "ClassDeclaration" === n || "ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n || "ImportDeclaration" === n || "DeclareClass" === n || "DeclareFunction" === n || "DeclareInterface" === n || "DeclareModule" === n || "DeclareModuleExports" === n || "DeclareTypeAlias" === n || "DeclareOpaqueType" === n || "DeclareVariable" === n || "DeclareExportDeclaration" === n || "DeclareExportAllDeclaration" === n || "InterfaceDeclaration" === n || "OpaqueType" === n || "TypeAlias" === n || "TSDeclareFunction" === n || "TSInterfaceDeclaration" === n || "TSTypeAliasDeclaration" === n || "TSEnumDeclaration" === n || "TSModuleDeclaration" === n || "Placeholder" === n && "Declaration" === e.expectedNode) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isPatternLike = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("PatternLike" === n || "Identifier" === n || "RestElement" === n || "AssignmentPattern" === n || "ArrayPattern" === n || "ObjectPattern" === n || "Placeholder" === n && ("Pattern" === e.expectedNode || "Identifier" === e.expectedNode)) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isLVal = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("LVal" === n || "Identifier" === n || "MemberExpression" === n || "RestElement" === n || "AssignmentPattern" === n || "ArrayPattern" === n || "ObjectPattern" === n || "TSParameterProperty" === n || "Placeholder" === n && ("Pattern" === e.expectedNode || "Identifier" === e.expectedNode)) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSEntityName = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("TSEntityName" === n || "Identifier" === n || "TSQualifiedName" === n || "Placeholder" === n && "Identifier" === e.expectedNode) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isLiteral = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Literal" === n || "StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "RegExpLiteral" === n || "TemplateLiteral" === n || "BigIntLiteral" === n || "Placeholder" === n && "StringLiteral" === e.expectedNode) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isImmutable = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Immutable" === n || "StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "JSXAttribute" === n || "JSXClosingElement" === n || "JSXElement" === n || "JSXExpressionContainer" === n || "JSXSpreadChild" === n || "JSXOpeningElement" === n || "JSXText" === n || "JSXFragment" === n || "JSXOpeningFragment" === n || "JSXClosingFragment" === n || "BigIntLiteral" === n || "Placeholder" === n && "StringLiteral" === e.expectedNode) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isUserWhitespacable = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("UserWhitespacable" === n || "ObjectMethod" === n || "ObjectProperty" === n || "ObjectTypeInternalSlot" === n || "ObjectTypeCallProperty" === n || "ObjectTypeIndexer" === n || "ObjectTypeProperty" === n || "ObjectTypeSpreadProperty" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isMethod = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Method" === n || "ObjectMethod" === n || "ClassMethod" === n || "ClassPrivateMethod" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isObjectMember = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("ObjectMember" === n || "ObjectMethod" === n || "ObjectProperty" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isProperty = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Property" === n || "ObjectProperty" === n || "ClassProperty" === n || "ClassPrivateProperty" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isUnaryLike = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("UnaryLike" === n || "UnaryExpression" === n || "SpreadElement" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isPattern = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Pattern" === n || "AssignmentPattern" === n || "ArrayPattern" === n || "ObjectPattern" === n || "Placeholder" === n && "Pattern" === e.expectedNode) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isClass = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Class" === n || "ClassDeclaration" === n || "ClassExpression" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isModuleDeclaration = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("ModuleDeclaration" === n || "ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n || "ImportDeclaration" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isExportDeclaration = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("ExportDeclaration" === n || "ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isModuleSpecifier = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("ModuleSpecifier" === n || "ExportSpecifier" === n || "ImportDefaultSpecifier" === n || "ImportNamespaceSpecifier" === n || "ImportSpecifier" === n || "ExportDefaultSpecifier" === n || "ExportNamespaceSpecifier" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isFlow = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Flow" === n || "AnyTypeAnnotation" === n || "ArrayTypeAnnotation" === n || "BooleanTypeAnnotation" === n || "BooleanLiteralTypeAnnotation" === n || "NullLiteralTypeAnnotation" === n || "ClassImplements" === n || "DeclareClass" === n || "DeclareFunction" === n || "DeclareInterface" === n || "DeclareModule" === n || "DeclareModuleExports" === n || "DeclareTypeAlias" === n || "DeclareOpaqueType" === n || "DeclareVariable" === n || "DeclareExportDeclaration" === n || "DeclareExportAllDeclaration" === n || "DeclaredPredicate" === n || "ExistsTypeAnnotation" === n || "FunctionTypeAnnotation" === n || "FunctionTypeParam" === n || "GenericTypeAnnotation" === n || "InferredPredicate" === n || "InterfaceExtends" === n || "InterfaceDeclaration" === n || "InterfaceTypeAnnotation" === n || "IntersectionTypeAnnotation" === n || "MixedTypeAnnotation" === n || "EmptyTypeAnnotation" === n || "NullableTypeAnnotation" === n || "NumberLiteralTypeAnnotation" === n || "NumberTypeAnnotation" === n || "ObjectTypeAnnotation" === n || "ObjectTypeInternalSlot" === n || "ObjectTypeCallProperty" === n || "ObjectTypeIndexer" === n || "ObjectTypeProperty" === n || "ObjectTypeSpreadProperty" === n || "OpaqueType" === n || "QualifiedTypeIdentifier" === n || "StringLiteralTypeAnnotation" === n || "StringTypeAnnotation" === n || "ThisTypeAnnotation" === n || "TupleTypeAnnotation" === n || "TypeofTypeAnnotation" === n || "TypeAlias" === n || "TypeAnnotation" === n || "TypeCastExpression" === n || "TypeParameter" === n || "TypeParameterDeclaration" === n || "TypeParameterInstantiation" === n || "UnionTypeAnnotation" === n || "Variance" === n || "VoidTypeAnnotation" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isFlowType = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("FlowType" === n || "AnyTypeAnnotation" === n || "ArrayTypeAnnotation" === n || "BooleanTypeAnnotation" === n || "BooleanLiteralTypeAnnotation" === n || "NullLiteralTypeAnnotation" === n || "ExistsTypeAnnotation" === n || "FunctionTypeAnnotation" === n || "GenericTypeAnnotation" === n || "InterfaceTypeAnnotation" === n || "IntersectionTypeAnnotation" === n || "MixedTypeAnnotation" === n || "EmptyTypeAnnotation" === n || "NullableTypeAnnotation" === n || "NumberLiteralTypeAnnotation" === n || "NumberTypeAnnotation" === n || "ObjectTypeAnnotation" === n || "StringLiteralTypeAnnotation" === n || "StringTypeAnnotation" === n || "ThisTypeAnnotation" === n || "TupleTypeAnnotation" === n || "TypeofTypeAnnotation" === n || "UnionTypeAnnotation" === n || "VoidTypeAnnotation" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isFlowBaseAnnotation = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("FlowBaseAnnotation" === n || "AnyTypeAnnotation" === n || "BooleanTypeAnnotation" === n || "NullLiteralTypeAnnotation" === n || "MixedTypeAnnotation" === n || "EmptyTypeAnnotation" === n || "NumberTypeAnnotation" === n || "StringTypeAnnotation" === n || "ThisTypeAnnotation" === n || "VoidTypeAnnotation" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isFlowDeclaration = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("FlowDeclaration" === n || "DeclareClass" === n || "DeclareFunction" === n || "DeclareInterface" === n || "DeclareModule" === n || "DeclareModuleExports" === n || "DeclareTypeAlias" === n || "DeclareOpaqueType" === n || "DeclareVariable" === n || "DeclareExportDeclaration" === n || "DeclareExportAllDeclaration" === n || "InterfaceDeclaration" === n || "OpaqueType" === n || "TypeAlias" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isFlowPredicate = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("FlowPredicate" === n || "DeclaredPredicate" === n || "InferredPredicate" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isJSX = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("JSX" === n || "JSXAttribute" === n || "JSXClosingElement" === n || "JSXElement" === n || "JSXEmptyExpression" === n || "JSXExpressionContainer" === n || "JSXSpreadChild" === n || "JSXIdentifier" === n || "JSXMemberExpression" === n || "JSXNamespacedName" === n || "JSXOpeningElement" === n || "JSXSpreadAttribute" === n || "JSXText" === n || "JSXFragment" === n || "JSXOpeningFragment" === n || "JSXClosingFragment" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isPrivate = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("Private" === n || "ClassPrivateProperty" === n || "ClassPrivateMethod" === n || "PrivateName" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSTypeElement = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("TSTypeElement" === n || "TSCallSignatureDeclaration" === n || "TSConstructSignatureDeclaration" === n || "TSPropertySignature" === n || "TSMethodSignature" === n || "TSIndexSignature" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isTSType = function (e, t) {
			if (!e) return !1;
			const n = e.type;
			if ("TSType" === n || "TSAnyKeyword" === n || "TSUnknownKeyword" === n || "TSNumberKeyword" === n || "TSObjectKeyword" === n || "TSBooleanKeyword" === n || "TSStringKeyword" === n || "TSSymbolKeyword" === n || "TSVoidKeyword" === n || "TSUndefinedKeyword" === n || "TSNullKeyword" === n || "TSNeverKeyword" === n || "TSThisType" === n || "TSFunctionType" === n || "TSConstructorType" === n || "TSTypeReference" === n || "TSTypePredicate" === n || "TSTypeQuery" === n || "TSTypeLiteral" === n || "TSArrayType" === n || "TSTupleType" === n || "TSOptionalType" === n || "TSRestType" === n || "TSUnionType" === n || "TSIntersectionType" === n || "TSConditionalType" === n || "TSInferType" === n || "TSParenthesizedType" === n || "TSTypeOperator" === n || "TSIndexedAccessType" === n || "TSMappedType" === n || "TSLiteralType" === n || "TSExpressionWithTypeArguments" === n || "TSImportType" === n) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isNumberLiteral = function (e, t) {
			if (console.trace("The node type NumberLiteral has been renamed to NumericLiteral"), !e) return !1;
			if ("NumberLiteral" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isRegexLiteral = function (e, t) {
			if (console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"), !e) return !1;
			if ("RegexLiteral" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isRestProperty = function (e, t) {
			if (console.trace("The node type RestProperty has been renamed to RestElement"), !e) return !1;
			if ("RestProperty" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		}, t.isSpreadProperty = function (e, t) {
			if (console.trace("The node type SpreadProperty has been renamed to SpreadElement"), !e) return !1;
			if ("SpreadProperty" === e.type) return void 0 === t || (0, r.default)(e, t);
			return !1
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(33))
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(185));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), Object.defineProperty(t, "VISITOR_KEYS", {
			enumerable: !0,
			get: function () {
				return i.VISITOR_KEYS
			}
		}), Object.defineProperty(t, "ALIAS_KEYS", {
			enumerable: !0,
			get: function () {
				return i.ALIAS_KEYS
			}
		}), Object.defineProperty(t, "FLIPPED_ALIAS_KEYS", {
			enumerable: !0,
			get: function () {
				return i.FLIPPED_ALIAS_KEYS
			}
		}), Object.defineProperty(t, "NODE_FIELDS", {
			enumerable: !0,
			get: function () {
				return i.NODE_FIELDS
			}
		}), Object.defineProperty(t, "BUILDER_KEYS", {
			enumerable: !0,
			get: function () {
				return i.BUILDER_KEYS
			}
		}), Object.defineProperty(t, "DEPRECATED_KEYS", {
			enumerable: !0,
			get: function () {
				return i.DEPRECATED_KEYS
			}
		}), Object.defineProperty(t, "PLACEHOLDERS", {
			enumerable: !0,
			get: function () {
				return s.PLACEHOLDERS
			}
		}), Object.defineProperty(t, "PLACEHOLDERS_ALIAS", {
			enumerable: !0,
			get: function () {
				return s.PLACEHOLDERS_ALIAS
			}
		}), Object.defineProperty(t, "PLACEHOLDERS_FLIPPED_ALIAS", {
			enumerable: !0,
			get: function () {
				return s.PLACEHOLDERS_FLIPPED_ALIAS
			}
		}), t.TYPES = void 0, n(42), n(46), n(188), n(189), n(190), n(191), n(192);
		var i = n(7),
			s = n(77);
		(0, r().default)(i.VISITOR_KEYS), (0, r().default)(i.ALIAS_KEYS), (0, r().default)(i.FLIPPED_ALIAS_KEYS), (0, r().default)(i.NODE_FIELDS), (0, r().default)(i.BUILDER_KEYS), (0, r().default)(i.DEPRECATED_KEYS), (0, r().default)(s.PLACEHOLDERS_ALIAS), (0, r().default)(s.PLACEHOLDERS_FLIPPED_ALIAS);
		const o = Object.keys(i.VISITOR_KEYS).concat(Object.keys(i.FLIPPED_ALIAS_KEYS)).concat(Object.keys(i.DEPRECATED_KEYS));
		t.TYPES = o
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.arrayExpression = t.ArrayExpression = function (...e) {
			return (0, r.default)("ArrayExpression", ...e)
		}, t.assignmentExpression = t.AssignmentExpression = function (...e) {
			return (0, r.default)("AssignmentExpression", ...e)
		}, t.binaryExpression = t.BinaryExpression = function (...e) {
			return (0, r.default)("BinaryExpression", ...e)
		}, t.interpreterDirective = t.InterpreterDirective = function (...e) {
			return (0, r.default)("InterpreterDirective", ...e)
		}, t.directive = t.Directive = function (...e) {
			return (0, r.default)("Directive", ...e)
		}, t.directiveLiteral = t.DirectiveLiteral = function (...e) {
			return (0, r.default)("DirectiveLiteral", ...e)
		}, t.blockStatement = t.BlockStatement = function (...e) {
			return (0, r.default)("BlockStatement", ...e)
		}, t.breakStatement = t.BreakStatement = function (...e) {
			return (0, r.default)("BreakStatement", ...e)
		}, t.callExpression = t.CallExpression = function (...e) {
			return (0, r.default)("CallExpression", ...e)
		}, t.catchClause = t.CatchClause = function (...e) {
			return (0, r.default)("CatchClause", ...e)
		}, t.conditionalExpression = t.ConditionalExpression = function (...e) {
			return (0, r.default)("ConditionalExpression", ...e)
		}, t.continueStatement = t.ContinueStatement = function (...e) {
			return (0, r.default)("ContinueStatement", ...e)
		}, t.debuggerStatement = t.DebuggerStatement = function (...e) {
			return (0, r.default)("DebuggerStatement", ...e)
		}, t.doWhileStatement = t.DoWhileStatement = function (...e) {
			return (0, r.default)("DoWhileStatement", ...e)
		}, t.emptyStatement = t.EmptyStatement = function (...e) {
			return (0, r.default)("EmptyStatement", ...e)
		}, t.expressionStatement = t.ExpressionStatement = function (...e) {
			return (0, r.default)("ExpressionStatement", ...e)
		}, t.file = t.File = function (...e) {
			return (0, r.default)("File", ...e)
		}, t.forInStatement = t.ForInStatement = function (...e) {
			return (0, r.default)("ForInStatement", ...e)
		}, t.forStatement = t.ForStatement = function (...e) {
			return (0, r.default)("ForStatement", ...e)
		}, t.functionDeclaration = t.FunctionDeclaration = function (...e) {
			return (0, r.default)("FunctionDeclaration", ...e)
		}, t.functionExpression = t.FunctionExpression = function (...e) {
			return (0, r.default)("FunctionExpression", ...e)
		}, t.identifier = t.Identifier = function (...e) {
			return (0, r.default)("Identifier", ...e)
		}, t.ifStatement = t.IfStatement = function (...e) {
			return (0, r.default)("IfStatement", ...e)
		}, t.labeledStatement = t.LabeledStatement = function (...e) {
			return (0, r.default)("LabeledStatement", ...e)
		}, t.stringLiteral = t.StringLiteral = function (...e) {
			return (0, r.default)("StringLiteral", ...e)
		}, t.numericLiteral = t.NumericLiteral = function (...e) {
			return (0, r.default)("NumericLiteral", ...e)
		}, t.nullLiteral = t.NullLiteral = function (...e) {
			return (0, r.default)("NullLiteral", ...e)
		}, t.booleanLiteral = t.BooleanLiteral = function (...e) {
			return (0, r.default)("BooleanLiteral", ...e)
		}, t.regExpLiteral = t.RegExpLiteral = function (...e) {
			return (0, r.default)("RegExpLiteral", ...e)
		}, t.logicalExpression = t.LogicalExpression = function (...e) {
			return (0, r.default)("LogicalExpression", ...e)
		}, t.memberExpression = t.MemberExpression = function (...e) {
			return (0, r.default)("MemberExpression", ...e)
		}, t.newExpression = t.NewExpression = function (...e) {
			return (0, r.default)("NewExpression", ...e)
		}, t.program = t.Program = function (...e) {
			return (0, r.default)("Program", ...e)
		}, t.objectExpression = t.ObjectExpression = function (...e) {
			return (0, r.default)("ObjectExpression", ...e)
		}, t.objectMethod = t.ObjectMethod = function (...e) {
			return (0, r.default)("ObjectMethod", ...e)
		}, t.objectProperty = t.ObjectProperty = function (...e) {
			return (0, r.default)("ObjectProperty", ...e)
		}, t.restElement = t.RestElement = function (...e) {
			return (0, r.default)("RestElement", ...e)
		}, t.returnStatement = t.ReturnStatement = function (...e) {
			return (0, r.default)("ReturnStatement", ...e)
		}, t.sequenceExpression = t.SequenceExpression = function (...e) {
			return (0, r.default)("SequenceExpression", ...e)
		}, t.parenthesizedExpression = t.ParenthesizedExpression = function (...e) {
			return (0, r.default)("ParenthesizedExpression", ...e)
		}, t.switchCase = t.SwitchCase = function (...e) {
			return (0, r.default)("SwitchCase", ...e)
		}, t.switchStatement = t.SwitchStatement = function (...e) {
			return (0, r.default)("SwitchStatement", ...e)
		}, t.thisExpression = t.ThisExpression = function (...e) {
			return (0, r.default)("ThisExpression", ...e)
		}, t.throwStatement = t.ThrowStatement = function (...e) {
			return (0, r.default)("ThrowStatement", ...e)
		}, t.tryStatement = t.TryStatement = function (...e) {
			return (0, r.default)("TryStatement", ...e)
		}, t.unaryExpression = t.UnaryExpression = function (...e) {
			return (0, r.default)("UnaryExpression", ...e)
		}, t.updateExpression = t.UpdateExpression = function (...e) {
			return (0, r.default)("UpdateExpression", ...e)
		}, t.variableDeclaration = t.VariableDeclaration = function (...e) {
			return (0, r.default)("VariableDeclaration", ...e)
		}, t.variableDeclarator = t.VariableDeclarator = function (...e) {
			return (0, r.default)("VariableDeclarator", ...e)
		}, t.whileStatement = t.WhileStatement = function (...e) {
			return (0, r.default)("WhileStatement", ...e)
		}, t.withStatement = t.WithStatement = function (...e) {
			return (0, r.default)("WithStatement", ...e)
		}, t.assignmentPattern = t.AssignmentPattern = function (...e) {
			return (0, r.default)("AssignmentPattern", ...e)
		}, t.arrayPattern = t.ArrayPattern = function (...e) {
			return (0, r.default)("ArrayPattern", ...e)
		}, t.arrowFunctionExpression = t.ArrowFunctionExpression = function (...e) {
			return (0, r.default)("ArrowFunctionExpression", ...e)
		}, t.classBody = t.ClassBody = function (...e) {
			return (0, r.default)("ClassBody", ...e)
		}, t.classDeclaration = t.ClassDeclaration = function (...e) {
			return (0, r.default)("ClassDeclaration", ...e)
		}, t.classExpression = t.ClassExpression = function (...e) {
			return (0, r.default)("ClassExpression", ...e)
		}, t.exportAllDeclaration = t.ExportAllDeclaration = function (...e) {
			return (0, r.default)("ExportAllDeclaration", ...e)
		}, t.exportDefaultDeclaration = t.ExportDefaultDeclaration = function (...e) {
			return (0, r.default)("ExportDefaultDeclaration", ...e)
		}, t.exportNamedDeclaration = t.ExportNamedDeclaration = function (...e) {
			return (0, r.default)("ExportNamedDeclaration", ...e)
		}, t.exportSpecifier = t.ExportSpecifier = function (...e) {
			return (0, r.default)("ExportSpecifier", ...e)
		}, t.forOfStatement = t.ForOfStatement = function (...e) {
			return (0, r.default)("ForOfStatement", ...e)
		}, t.importDeclaration = t.ImportDeclaration = function (...e) {
			return (0, r.default)("ImportDeclaration", ...e)
		}, t.importDefaultSpecifier = t.ImportDefaultSpecifier = function (...e) {
			return (0, r.default)("ImportDefaultSpecifier", ...e)
		}, t.importNamespaceSpecifier = t.ImportNamespaceSpecifier = function (...e) {
			return (0, r.default)("ImportNamespaceSpecifier", ...e)
		}, t.importSpecifier = t.ImportSpecifier = function (...e) {
			return (0, r.default)("ImportSpecifier", ...e)
		}, t.metaProperty = t.MetaProperty = function (...e) {
			return (0, r.default)("MetaProperty", ...e)
		}, t.classMethod = t.ClassMethod = function (...e) {
			return (0, r.default)("ClassMethod", ...e)
		}, t.objectPattern = t.ObjectPattern = function (...e) {
			return (0, r.default)("ObjectPattern", ...e)
		}, t.spreadElement = t.SpreadElement = function (...e) {
			return (0, r.default)("SpreadElement", ...e)
		}, t.super = t.Super = function (...e) {
			return (0, r.default)("Super", ...e)
		}, t.taggedTemplateExpression = t.TaggedTemplateExpression = function (...e) {
			return (0, r.default)("TaggedTemplateExpression", ...e)
		}, t.templateElement = t.TemplateElement = function (...e) {
			return (0, r.default)("TemplateElement", ...e)
		}, t.templateLiteral = t.TemplateLiteral = function (...e) {
			return (0, r.default)("TemplateLiteral", ...e)
		}, t.yieldExpression = t.YieldExpression = function (...e) {
			return (0, r.default)("YieldExpression", ...e)
		}, t.anyTypeAnnotation = t.AnyTypeAnnotation = function (...e) {
			return (0, r.default)("AnyTypeAnnotation", ...e)
		}, t.arrayTypeAnnotation = t.ArrayTypeAnnotation = function (...e) {
			return (0, r.default)("ArrayTypeAnnotation", ...e)
		}, t.booleanTypeAnnotation = t.BooleanTypeAnnotation = function (...e) {
			return (0, r.default)("BooleanTypeAnnotation", ...e)
		}, t.booleanLiteralTypeAnnotation = t.BooleanLiteralTypeAnnotation = function (...e) {
			return (0, r.default)("BooleanLiteralTypeAnnotation", ...e)
		}, t.nullLiteralTypeAnnotation = t.NullLiteralTypeAnnotation = function (...e) {
			return (0, r.default)("NullLiteralTypeAnnotation", ...e)
		}, t.classImplements = t.ClassImplements = function (...e) {
			return (0, r.default)("ClassImplements", ...e)
		}, t.declareClass = t.DeclareClass = function (...e) {
			return (0, r.default)("DeclareClass", ...e)
		}, t.declareFunction = t.DeclareFunction = function (...e) {
			return (0, r.default)("DeclareFunction", ...e)
		}, t.declareInterface = t.DeclareInterface = function (...e) {
			return (0, r.default)("DeclareInterface", ...e)
		}, t.declareModule = t.DeclareModule = function (...e) {
			return (0, r.default)("DeclareModule", ...e)
		}, t.declareModuleExports = t.DeclareModuleExports = function (...e) {
			return (0, r.default)("DeclareModuleExports", ...e)
		}, t.declareTypeAlias = t.DeclareTypeAlias = function (...e) {
			return (0, r.default)("DeclareTypeAlias", ...e)
		}, t.declareOpaqueType = t.DeclareOpaqueType = function (...e) {
			return (0, r.default)("DeclareOpaqueType", ...e)
		}, t.declareVariable = t.DeclareVariable = function (...e) {
			return (0, r.default)("DeclareVariable", ...e)
		}, t.declareExportDeclaration = t.DeclareExportDeclaration = function (...e) {
			return (0, r.default)("DeclareExportDeclaration", ...e)
		}, t.declareExportAllDeclaration = t.DeclareExportAllDeclaration = function (...e) {
			return (0, r.default)("DeclareExportAllDeclaration", ...e)
		}, t.declaredPredicate = t.DeclaredPredicate = function (...e) {
			return (0, r.default)("DeclaredPredicate", ...e)
		}, t.existsTypeAnnotation = t.ExistsTypeAnnotation = function (...e) {
			return (0, r.default)("ExistsTypeAnnotation", ...e)
		}, t.functionTypeAnnotation = t.FunctionTypeAnnotation = function (...e) {
			return (0, r.default)("FunctionTypeAnnotation", ...e)
		}, t.functionTypeParam = t.FunctionTypeParam = function (...e) {
			return (0, r.default)("FunctionTypeParam", ...e)
		}, t.genericTypeAnnotation = t.GenericTypeAnnotation = function (...e) {
			return (0, r.default)("GenericTypeAnnotation", ...e)
		}, t.inferredPredicate = t.InferredPredicate = function (...e) {
			return (0, r.default)("InferredPredicate", ...e)
		}, t.interfaceExtends = t.InterfaceExtends = function (...e) {
			return (0, r.default)("InterfaceExtends", ...e)
		}, t.interfaceDeclaration = t.InterfaceDeclaration = function (...e) {
			return (0, r.default)("InterfaceDeclaration", ...e)
		}, t.interfaceTypeAnnotation = t.InterfaceTypeAnnotation = function (...e) {
			return (0, r.default)("InterfaceTypeAnnotation", ...e)
		}, t.intersectionTypeAnnotation = t.IntersectionTypeAnnotation = function (...e) {
			return (0, r.default)("IntersectionTypeAnnotation", ...e)
		}, t.mixedTypeAnnotation = t.MixedTypeAnnotation = function (...e) {
			return (0, r.default)("MixedTypeAnnotation", ...e)
		}, t.emptyTypeAnnotation = t.EmptyTypeAnnotation = function (...e) {
			return (0, r.default)("EmptyTypeAnnotation", ...e)
		}, t.nullableTypeAnnotation = t.NullableTypeAnnotation = function (...e) {
			return (0, r.default)("NullableTypeAnnotation", ...e)
		}, t.numberLiteralTypeAnnotation = t.NumberLiteralTypeAnnotation = function (...e) {
			return (0, r.default)("NumberLiteralTypeAnnotation", ...e)
		}, t.numberTypeAnnotation = t.NumberTypeAnnotation = function (...e) {
			return (0, r.default)("NumberTypeAnnotation", ...e)
		}, t.objectTypeAnnotation = t.ObjectTypeAnnotation = function (...e) {
			return (0, r.default)("ObjectTypeAnnotation", ...e)
		}, t.objectTypeInternalSlot = t.ObjectTypeInternalSlot = function (...e) {
			return (0, r.default)("ObjectTypeInternalSlot", ...e)
		}, t.objectTypeCallProperty = t.ObjectTypeCallProperty = function (...e) {
			return (0, r.default)("ObjectTypeCallProperty", ...e)
		}, t.objectTypeIndexer = t.ObjectTypeIndexer = function (...e) {
			return (0, r.default)("ObjectTypeIndexer", ...e)
		}, t.objectTypeProperty = t.ObjectTypeProperty = function (...e) {
			return (0, r.default)("ObjectTypeProperty", ...e)
		}, t.objectTypeSpreadProperty = t.ObjectTypeSpreadProperty = function (...e) {
			return (0, r.default)("ObjectTypeSpreadProperty", ...e)
		}, t.opaqueType = t.OpaqueType = function (...e) {
			return (0, r.default)("OpaqueType", ...e)
		}, t.qualifiedTypeIdentifier = t.QualifiedTypeIdentifier = function (...e) {
			return (0, r.default)("QualifiedTypeIdentifier", ...e)
		}, t.stringLiteralTypeAnnotation = t.StringLiteralTypeAnnotation = function (...e) {
			return (0, r.default)("StringLiteralTypeAnnotation", ...e)
		}, t.stringTypeAnnotation = t.StringTypeAnnotation = function (...e) {
			return (0, r.default)("StringTypeAnnotation", ...e)
		}, t.thisTypeAnnotation = t.ThisTypeAnnotation = function (...e) {
			return (0, r.default)("ThisTypeAnnotation", ...e)
		}, t.tupleTypeAnnotation = t.TupleTypeAnnotation = function (...e) {
			return (0, r.default)("TupleTypeAnnotation", ...e)
		}, t.typeofTypeAnnotation = t.TypeofTypeAnnotation = function (...e) {
			return (0, r.default)("TypeofTypeAnnotation", ...e)
		}, t.typeAlias = t.TypeAlias = function (...e) {
			return (0, r.default)("TypeAlias", ...e)
		}, t.typeAnnotation = t.TypeAnnotation = function (...e) {
			return (0, r.default)("TypeAnnotation", ...e)
		}, t.typeCastExpression = t.TypeCastExpression = function (...e) {
			return (0, r.default)("TypeCastExpression", ...e)
		}, t.typeParameter = t.TypeParameter = function (...e) {
			return (0, r.default)("TypeParameter", ...e)
		}, t.typeParameterDeclaration = t.TypeParameterDeclaration = function (...e) {
			return (0, r.default)("TypeParameterDeclaration", ...e)
		}, t.typeParameterInstantiation = t.TypeParameterInstantiation = function (...e) {
			return (0, r.default)("TypeParameterInstantiation", ...e)
		}, t.unionTypeAnnotation = t.UnionTypeAnnotation = function (...e) {
			return (0, r.default)("UnionTypeAnnotation", ...e)
		}, t.variance = t.Variance = function (...e) {
			return (0, r.default)("Variance", ...e)
		}, t.voidTypeAnnotation = t.VoidTypeAnnotation = function (...e) {
			return (0, r.default)("VoidTypeAnnotation", ...e)
		}, t.jSXAttribute = t.jsxAttribute = t.JSXAttribute = function (...e) {
			return (0, r.default)("JSXAttribute", ...e)
		}, t.jSXClosingElement = t.jsxClosingElement = t.JSXClosingElement = function (...e) {
			return (0, r.default)("JSXClosingElement", ...e)
		}, t.jSXElement = t.jsxElement = t.JSXElement = function (...e) {
			return (0, r.default)("JSXElement", ...e)
		}, t.jSXEmptyExpression = t.jsxEmptyExpression = t.JSXEmptyExpression = function (...e) {
			return (0, r.default)("JSXEmptyExpression", ...e)
		}, t.jSXExpressionContainer = t.jsxExpressionContainer = t.JSXExpressionContainer = function (...e) {
			return (0, r.default)("JSXExpressionContainer", ...e)
		}, t.jSXSpreadChild = t.jsxSpreadChild = t.JSXSpreadChild = function (...e) {
			return (0, r.default)("JSXSpreadChild", ...e)
		}, t.jSXIdentifier = t.jsxIdentifier = t.JSXIdentifier = function (...e) {
			return (0, r.default)("JSXIdentifier", ...e)
		}, t.jSXMemberExpression = t.jsxMemberExpression = t.JSXMemberExpression = function (...e) {
			return (0, r.default)("JSXMemberExpression", ...e)
		}, t.jSXNamespacedName = t.jsxNamespacedName = t.JSXNamespacedName = function (...e) {
			return (0, r.default)("JSXNamespacedName", ...e)
		}, t.jSXOpeningElement = t.jsxOpeningElement = t.JSXOpeningElement = function (...e) {
			return (0, r.default)("JSXOpeningElement", ...e)
		}, t.jSXSpreadAttribute = t.jsxSpreadAttribute = t.JSXSpreadAttribute = function (...e) {
			return (0, r.default)("JSXSpreadAttribute", ...e)
		}, t.jSXText = t.jsxText = t.JSXText = function (...e) {
			return (0, r.default)("JSXText", ...e)
		}, t.jSXFragment = t.jsxFragment = t.JSXFragment = function (...e) {
			return (0, r.default)("JSXFragment", ...e)
		}, t.jSXOpeningFragment = t.jsxOpeningFragment = t.JSXOpeningFragment = function (...e) {
			return (0, r.default)("JSXOpeningFragment", ...e)
		}, t.jSXClosingFragment = t.jsxClosingFragment = t.JSXClosingFragment = function (...e) {
			return (0, r.default)("JSXClosingFragment", ...e)
		}, t.noop = t.Noop = function (...e) {
			return (0, r.default)("Noop", ...e)
		}, t.placeholder = t.Placeholder = function (...e) {
			return (0, r.default)("Placeholder", ...e)
		}, t.argumentPlaceholder = t.ArgumentPlaceholder = function (...e) {
			return (0, r.default)("ArgumentPlaceholder", ...e)
		}, t.awaitExpression = t.AwaitExpression = function (...e) {
			return (0, r.default)("AwaitExpression", ...e)
		}, t.bindExpression = t.BindExpression = function (...e) {
			return (0, r.default)("BindExpression", ...e)
		}, t.classProperty = t.ClassProperty = function (...e) {
			return (0, r.default)("ClassProperty", ...e)
		}, t.optionalMemberExpression = t.OptionalMemberExpression = function (...e) {
			return (0, r.default)("OptionalMemberExpression", ...e)
		}, t.pipelineTopicExpression = t.PipelineTopicExpression = function (...e) {
			return (0, r.default)("PipelineTopicExpression", ...e)
		}, t.pipelineBareFunction = t.PipelineBareFunction = function (...e) {
			return (0, r.default)("PipelineBareFunction", ...e)
		}, t.pipelinePrimaryTopicReference = t.PipelinePrimaryTopicReference = function (...e) {
			return (0, r.default)("PipelinePrimaryTopicReference", ...e)
		}, t.optionalCallExpression = t.OptionalCallExpression = function (...e) {
			return (0, r.default)("OptionalCallExpression", ...e)
		}, t.classPrivateProperty = t.ClassPrivateProperty = function (...e) {
			return (0, r.default)("ClassPrivateProperty", ...e)
		}, t.classPrivateMethod = t.ClassPrivateMethod = function (...e) {
			return (0, r.default)("ClassPrivateMethod", ...e)
		}, t.import = t.Import = function (...e) {
			return (0, r.default)("Import", ...e)
		}, t.decorator = t.Decorator = function (...e) {
			return (0, r.default)("Decorator", ...e)
		}, t.doExpression = t.DoExpression = function (...e) {
			return (0, r.default)("DoExpression", ...e)
		}, t.exportDefaultSpecifier = t.ExportDefaultSpecifier = function (...e) {
			return (0, r.default)("ExportDefaultSpecifier", ...e)
		}, t.exportNamespaceSpecifier = t.ExportNamespaceSpecifier = function (...e) {
			return (0, r.default)("ExportNamespaceSpecifier", ...e)
		}, t.privateName = t.PrivateName = function (...e) {
			return (0, r.default)("PrivateName", ...e)
		}, t.bigIntLiteral = t.BigIntLiteral = function (...e) {
			return (0, r.default)("BigIntLiteral", ...e)
		}, t.tSParameterProperty = t.tsParameterProperty = t.TSParameterProperty = function (...e) {
			return (0, r.default)("TSParameterProperty", ...e)
		}, t.tSDeclareFunction = t.tsDeclareFunction = t.TSDeclareFunction = function (...e) {
			return (0, r.default)("TSDeclareFunction", ...e)
		}, t.tSDeclareMethod = t.tsDeclareMethod = t.TSDeclareMethod = function (...e) {
			return (0, r.default)("TSDeclareMethod", ...e)
		}, t.tSQualifiedName = t.tsQualifiedName = t.TSQualifiedName = function (...e) {
			return (0, r.default)("TSQualifiedName", ...e)
		}, t.tSCallSignatureDeclaration = t.tsCallSignatureDeclaration = t.TSCallSignatureDeclaration = function (...e) {
			return (0, r.default)("TSCallSignatureDeclaration", ...e)
		}, t.tSConstructSignatureDeclaration = t.tsConstructSignatureDeclaration = t.TSConstructSignatureDeclaration = function (...e) {
			return (0, r.default)("TSConstructSignatureDeclaration", ...e)
		}, t.tSPropertySignature = t.tsPropertySignature = t.TSPropertySignature = function (...e) {
			return (0, r.default)("TSPropertySignature", ...e)
		}, t.tSMethodSignature = t.tsMethodSignature = t.TSMethodSignature = function (...e) {
			return (0, r.default)("TSMethodSignature", ...e)
		}, t.tSIndexSignature = t.tsIndexSignature = t.TSIndexSignature = function (...e) {
			return (0, r.default)("TSIndexSignature", ...e)
		}, t.tSAnyKeyword = t.tsAnyKeyword = t.TSAnyKeyword = function (...e) {
			return (0, r.default)("TSAnyKeyword", ...e)
		}, t.tSUnknownKeyword = t.tsUnknownKeyword = t.TSUnknownKeyword = function (...e) {
			return (0, r.default)("TSUnknownKeyword", ...e)
		}, t.tSNumberKeyword = t.tsNumberKeyword = t.TSNumberKeyword = function (...e) {
			return (0, r.default)("TSNumberKeyword", ...e)
		}, t.tSObjectKeyword = t.tsObjectKeyword = t.TSObjectKeyword = function (...e) {
			return (0, r.default)("TSObjectKeyword", ...e)
		}, t.tSBooleanKeyword = t.tsBooleanKeyword = t.TSBooleanKeyword = function (...e) {
			return (0, r.default)("TSBooleanKeyword", ...e)
		}, t.tSStringKeyword = t.tsStringKeyword = t.TSStringKeyword = function (...e) {
			return (0, r.default)("TSStringKeyword", ...e)
		}, t.tSSymbolKeyword = t.tsSymbolKeyword = t.TSSymbolKeyword = function (...e) {
			return (0, r.default)("TSSymbolKeyword", ...e)
		}, t.tSVoidKeyword = t.tsVoidKeyword = t.TSVoidKeyword = function (...e) {
			return (0, r.default)("TSVoidKeyword", ...e)
		}, t.tSUndefinedKeyword = t.tsUndefinedKeyword = t.TSUndefinedKeyword = function (...e) {
			return (0, r.default)("TSUndefinedKeyword", ...e)
		}, t.tSNullKeyword = t.tsNullKeyword = t.TSNullKeyword = function (...e) {
			return (0, r.default)("TSNullKeyword", ...e)
		}, t.tSNeverKeyword = t.tsNeverKeyword = t.TSNeverKeyword = function (...e) {
			return (0, r.default)("TSNeverKeyword", ...e)
		}, t.tSThisType = t.tsThisType = t.TSThisType = function (...e) {
			return (0, r.default)("TSThisType", ...e)
		}, t.tSFunctionType = t.tsFunctionType = t.TSFunctionType = function (...e) {
			return (0, r.default)("TSFunctionType", ...e)
		}, t.tSConstructorType = t.tsConstructorType = t.TSConstructorType = function (...e) {
			return (0, r.default)("TSConstructorType", ...e)
		}, t.tSTypeReference = t.tsTypeReference = t.TSTypeReference = function (...e) {
			return (0, r.default)("TSTypeReference", ...e)
		}, t.tSTypePredicate = t.tsTypePredicate = t.TSTypePredicate = function (...e) {
			return (0, r.default)("TSTypePredicate", ...e)
		}, t.tSTypeQuery = t.tsTypeQuery = t.TSTypeQuery = function (...e) {
			return (0, r.default)("TSTypeQuery", ...e)
		}, t.tSTypeLiteral = t.tsTypeLiteral = t.TSTypeLiteral = function (...e) {
			return (0, r.default)("TSTypeLiteral", ...e)
		}, t.tSArrayType = t.tsArrayType = t.TSArrayType = function (...e) {
			return (0, r.default)("TSArrayType", ...e)
		}, t.tSTupleType = t.tsTupleType = t.TSTupleType = function (...e) {
			return (0, r.default)("TSTupleType", ...e)
		}, t.tSOptionalType = t.tsOptionalType = t.TSOptionalType = function (...e) {
			return (0, r.default)("TSOptionalType", ...e)
		}, t.tSRestType = t.tsRestType = t.TSRestType = function (...e) {
			return (0, r.default)("TSRestType", ...e)
		}, t.tSUnionType = t.tsUnionType = t.TSUnionType = function (...e) {
			return (0, r.default)("TSUnionType", ...e)
		}, t.tSIntersectionType = t.tsIntersectionType = t.TSIntersectionType = function (...e) {
			return (0, r.default)("TSIntersectionType", ...e)
		}, t.tSConditionalType = t.tsConditionalType = t.TSConditionalType = function (...e) {
			return (0, r.default)("TSConditionalType", ...e)
		}, t.tSInferType = t.tsInferType = t.TSInferType = function (...e) {
			return (0, r.default)("TSInferType", ...e)
		}, t.tSParenthesizedType = t.tsParenthesizedType = t.TSParenthesizedType = function (...e) {
			return (0, r.default)("TSParenthesizedType", ...e)
		}, t.tSTypeOperator = t.tsTypeOperator = t.TSTypeOperator = function (...e) {
			return (0, r.default)("TSTypeOperator", ...e)
		}, t.tSIndexedAccessType = t.tsIndexedAccessType = t.TSIndexedAccessType = function (...e) {
			return (0, r.default)("TSIndexedAccessType", ...e)
		}, t.tSMappedType = t.tsMappedType = t.TSMappedType = function (...e) {
			return (0, r.default)("TSMappedType", ...e)
		}, t.tSLiteralType = t.tsLiteralType = t.TSLiteralType = function (...e) {
			return (0, r.default)("TSLiteralType", ...e)
		}, t.tSExpressionWithTypeArguments = t.tsExpressionWithTypeArguments = t.TSExpressionWithTypeArguments = function (...e) {
			return (0, r.default)("TSExpressionWithTypeArguments", ...e)
		}, t.tSInterfaceDeclaration = t.tsInterfaceDeclaration = t.TSInterfaceDeclaration = function (...e) {
			return (0, r.default)("TSInterfaceDeclaration", ...e)
		}, t.tSInterfaceBody = t.tsInterfaceBody = t.TSInterfaceBody = function (...e) {
			return (0, r.default)("TSInterfaceBody", ...e)
		}, t.tSTypeAliasDeclaration = t.tsTypeAliasDeclaration = t.TSTypeAliasDeclaration = function (...e) {
			return (0, r.default)("TSTypeAliasDeclaration", ...e)
		}, t.tSAsExpression = t.tsAsExpression = t.TSAsExpression = function (...e) {
			return (0, r.default)("TSAsExpression", ...e)
		}, t.tSTypeAssertion = t.tsTypeAssertion = t.TSTypeAssertion = function (...e) {
			return (0, r.default)("TSTypeAssertion", ...e)
		}, t.tSEnumDeclaration = t.tsEnumDeclaration = t.TSEnumDeclaration = function (...e) {
			return (0, r.default)("TSEnumDeclaration", ...e)
		}, t.tSEnumMember = t.tsEnumMember = t.TSEnumMember = function (...e) {
			return (0, r.default)("TSEnumMember", ...e)
		}, t.tSModuleDeclaration = t.tsModuleDeclaration = t.TSModuleDeclaration = function (...e) {
			return (0, r.default)("TSModuleDeclaration", ...e)
		}, t.tSModuleBlock = t.tsModuleBlock = t.TSModuleBlock = function (...e) {
			return (0, r.default)("TSModuleBlock", ...e)
		}, t.tSImportType = t.tsImportType = t.TSImportType = function (...e) {
			return (0, r.default)("TSImportType", ...e)
		}, t.tSImportEqualsDeclaration = t.tsImportEqualsDeclaration = t.TSImportEqualsDeclaration = function (...e) {
			return (0, r.default)("TSImportEqualsDeclaration", ...e)
		}, t.tSExternalModuleReference = t.tsExternalModuleReference = t.TSExternalModuleReference = function (...e) {
			return (0, r.default)("TSExternalModuleReference", ...e)
		}, t.tSNonNullExpression = t.tsNonNullExpression = t.TSNonNullExpression = function (...e) {
			return (0, r.default)("TSNonNullExpression", ...e)
		}, t.tSExportAssignment = t.tsExportAssignment = t.TSExportAssignment = function (...e) {
			return (0, r.default)("TSExportAssignment", ...e)
		}, t.tSNamespaceExportDeclaration = t.tsNamespaceExportDeclaration = t.TSNamespaceExportDeclaration = function (...e) {
			return (0, r.default)("TSNamespaceExportDeclaration", ...e)
		}, t.tSTypeAnnotation = t.tsTypeAnnotation = t.TSTypeAnnotation = function (...e) {
			return (0, r.default)("TSTypeAnnotation", ...e)
		}, t.tSTypeParameterInstantiation = t.tsTypeParameterInstantiation = t.TSTypeParameterInstantiation = function (...e) {
			return (0, r.default)("TSTypeParameterInstantiation", ...e)
		}, t.tSTypeParameterDeclaration = t.tsTypeParameterDeclaration = t.TSTypeParameterDeclaration = function (...e) {
			return (0, r.default)("TSTypeParameterDeclaration", ...e)
		}, t.tSTypeParameter = t.tsTypeParameter = t.TSTypeParameter = function (...e) {
			return (0, r.default)("TSTypeParameter", ...e)
		}, t.numberLiteral = t.NumberLiteral = function e(...t) {
			console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
			return e("NumberLiteral", ...t)
		}, t.regexLiteral = t.RegexLiteral = function e(...t) {
			console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
			return e("RegexLiteral", ...t)
		}, t.restProperty = t.RestProperty = function e(...t) {
			console.trace("The node type RestProperty has been renamed to RestElement");
			return e("RestProperty", ...t)
		}, t.spreadProperty = t.SpreadProperty = function e(...t) {
			console.trace("The node type SpreadProperty has been renamed to SpreadElement");
			return e("SpreadProperty", ...t)
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(118))
	}, function (e, t, n) {
		var r = n(58),
			i = "object" == typeof self && self && self.Object === Object && self,
			s = r || i || Function("return this")();
		e.exports = s
	}, function (e, t) {
		e.exports = function (e) {
			return null != e && "object" == typeof e
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.validate = h, t.typeIs = f, t.validateType = function (e) {
			return h(f(e))
		}, t.validateOptional = function (e) {
			return {
				validate: e,
				optional: !0
			}
		}, t.validateOptionalType = function (e) {
			return {
				validate: f(e),
				optional: !0
			}
		}, t.arrayOf = d, t.arrayOfType = y, t.validateArrayOfType = function (e) {
			return h(y(e))
		}, t.assertEach = m, t.assertOneOf = function (...e) {
			function t(t, n, r) {
				if (e.indexOf(r) < 0) throw new TypeError(`Property ${n} expected value to be one of ${JSON.stringify(e)} but got ${JSON.stringify(r)}`)
			}
			return t.oneOf = e, t
		}, t.assertNodeType = g, t.assertNodeOrValueType = function (...e) {
			function t(t, n, i) {
				let s = !1;
				for (const t of e)
					if (p(i) === t || (0, r.default)(t, i)) {
						s = !0;
						break
					}
				if (!s) throw new TypeError(`Property ${n} of ${t.type} expected node to be of a type ${JSON.stringify(e)} ` + `but instead got ${JSON.stringify(i&&i.type)}`)
			}
			return t.oneOfNodeOrValueTypes = e, t
		}, t.assertValueType = E, t.assertShape = function (e) {
			function t(t, n, r) {
				const s = [];
				for (const n of Object.keys(e)) try {
					(0, i.validateField)(t, n, r[n], e[n])
				} catch (e) {
					if (e instanceof TypeError) {
						s.push(e.message);
						continue
					}
					throw e
				}
				if (s.length) throw new TypeError(`Property ${n} of ${t.type} expected to have the following:\n${s.join("\n")}`)
			}
			return t.shapeOf = e, t
		}, t.chain = T, t.default = function (e, t = {}) {
			const n = t.inherits && A[t.inherits] || {},
				r = t.fields || n.fields || {},
				i = t.visitor || n.visitor || [],
				h = t.aliases || n.aliases || [],
				f = t.builder || n.builder || t.visitor || [];
			t.deprecatedAlias && (l[t.deprecatedAlias] = e);
			for (const e of i.concat(f)) r[e] = r[e] || {};
			for (const e of Object.keys(r)) {
				const t = r[e]; - 1 === f.indexOf(e) && (t.optional = !0), void 0 === t.default ? t.default = null : t.validate || (t.validate = E(p(t.default)))
			}
			s[e] = t.visitor = i, c[e] = t.builder = f, u[e] = t.fields = r, o[e] = t.aliases = h, h.forEach(t => {
				a[t] = a[t] || [], a[t].push(e)
			}), A[e] = t
		}, t.DEPRECATED_KEYS = t.BUILDER_KEYS = t.NODE_FIELDS = t.FLIPPED_ALIAS_KEYS = t.ALIAS_KEYS = t.VISITOR_KEYS = void 0;
		var r = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(43)),
			i = n(45);
		const s = {};
		t.VISITOR_KEYS = s;
		const o = {};
		t.ALIAS_KEYS = o;
		const a = {};
		t.FLIPPED_ALIAS_KEYS = a;
		const u = {};
		t.NODE_FIELDS = u;
		const c = {};
		t.BUILDER_KEYS = c;
		const l = {};

		function p(e) {
			return Array.isArray(e) ? "array" : null === e ? "null" : void 0 === e ? "undefined" : typeof e
		}

		function h(e) {
			return {
				validate: e
			}
		}

		function f(e) {
			return "string" == typeof e ? g(e) : g(...e)
		}

		function d(e) {
			return T(E("array"), m(e))
		}

		function y(e) {
			return d(f(e))
		}

		function m(e) {
			function t(t, n, r) {
				if (Array.isArray(r))
					for (let i = 0; i < r.length; i++) e(t, `${n}[${i}]`, r[i])
			}
			return t.each = e, t
		}

		function g(...e) {
			function t(t, n, i) {
				let s = !1;
				for (const t of e)
					if ((0, r.default)(t, i)) {
						s = !0;
						break
					}
				if (!s) throw new TypeError(`Property ${n} of ${t.type} expected node to be of a type ${JSON.stringify(e)} ` + `but instead got ${JSON.stringify(i&&i.type)}`)
			}
			return t.oneOfNodeTypes = e, t
		}

		function E(e) {
			function t(t, n, r) {
				if (!(p(r) === e)) throw new TypeError(`Property ${n} expected type of ${e} but got ${p(r)}`)
			}
			return t.type = e, t
		}

		function T(...e) {
			function t(...t) {
				for (const n of e) n(...t)
			}
			return t.chainOf = e, t
		}
		t.DEPRECATED_KEYS = l;
		const A = {}
	}, function (e, t, n) {
		var r = n(21),
			i = n(132),
			s = n(133),
			o = "[object Null]",
			a = "[object Undefined]",
			u = r ? r.toStringTag : void 0;
		e.exports = function (e) {
			return null == e ? void 0 === e ? a : o : u && u in Object(e) ? i(e) : s(e)
		}
	}, function (e, t, n) {
		var r = n(131),
			i = n(136);
		e.exports = function (e, t) {
			var n = i(e, t);
			return r(n) ? n : void 0
		}
	}, function (e, t) {
		e.exports = function (e) {
			var t = typeof e;
			return null != e && ("object" == t || "function" == t)
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.NOT_LOCAL_BINDING = t.BLOCK_SCOPED_SYMBOL = t.INHERIT_KEYS = t.UNARY_OPERATORS = t.STRING_UNARY_OPERATORS = t.NUMBER_UNARY_OPERATORS = t.BOOLEAN_UNARY_OPERATORS = t.BINARY_OPERATORS = t.NUMBER_BINARY_OPERATORS = t.BOOLEAN_BINARY_OPERATORS = t.COMPARISON_BINARY_OPERATORS = t.EQUALITY_BINARY_OPERATORS = t.BOOLEAN_NUMBER_BINARY_OPERATORS = t.UPDATE_OPERATORS = t.LOGICAL_OPERATORS = t.COMMENT_KEYS = t.FOR_INIT_KEYS = t.FLATTENABLE_KEYS = t.STATEMENT_OR_BLOCK_KEYS = void 0;
		t.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
		t.FLATTENABLE_KEYS = ["body", "expressions"];
		t.FOR_INIT_KEYS = ["left", "init"];
		t.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
		t.LOGICAL_OPERATORS = ["||", "&&", "??"];
		t.UPDATE_OPERATORS = ["++", "--"];
		const r = [">", "<", ">=", "<="];
		t.BOOLEAN_NUMBER_BINARY_OPERATORS = r;
		const i = ["==", "===", "!=", "!=="];
		t.EQUALITY_BINARY_OPERATORS = i;
		const s = [...i, "in", "instanceof"];
		t.COMPARISON_BINARY_OPERATORS = s;
		const o = [...s, ...r];
		t.BOOLEAN_BINARY_OPERATORS = o;
		const a = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
		t.NUMBER_BINARY_OPERATORS = a;
		const u = ["+", ...a, ...o];
		t.BINARY_OPERATORS = u;
		const c = ["delete", "!"];
		t.BOOLEAN_UNARY_OPERATORS = c;
		const l = ["+", "-", "~"];
		t.NUMBER_UNARY_OPERATORS = l;
		const p = ["typeof"];
		t.STRING_UNARY_OPERATORS = p;
		const h = ["void", "throw", ...c, ...l, ...p];
		t.UNARY_OPERATORS = h;
		t.INHERIT_KEYS = {
			optional: ["typeAnnotation", "typeParameters", "returnType"],
			force: ["start", "loc", "end"]
		};
		const f = Symbol.for("var used to be block scoped");
		t.BLOCK_SCOPED_SYMBOL = f;
		const d = Symbol.for("should not be considered a local binding");
		t.NOT_LOCAL_BINDING = d
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var r = b(n(53));

		function i() {
			const e = S(n(241));
			return i = function () {
				return e
			}, e
		}
		var s = S(n(13)),
			o = S(n(94));

		function a() {
			const e = b(n(0));
			return a = function () {
				return e
			}, e
		}
		var u = n(31);

		function c() {
			const e = S(n(1));
			return c = function () {
				return e
			}, e
		}
		var l = b(n(293)),
			p = b(n(294)),
			h = b(n(297)),
			f = b(n(308)),
			d = b(n(309)),
			y = b(n(317)),
			m = b(n(318)),
			g = b(n(319)),
			E = b(n(321)),
			T = b(n(323)),
			A = b(n(324));

		function S(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function b(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e)
					if (Object.prototype.hasOwnProperty.call(e, n)) {
						var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
						r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
					}
			return t.default = e, t
		}
		const x = (0, i().default)("babel");
		class P {
			constructor(e, t) {
				this.parent = t, this.hub = e, this.contexts = [], this.data = Object.create(null), this.shouldSkip = !1, this.shouldStop = !1, this.removed = !1, this.state = null, this.opts = null, this.skipKeys = null, this.parentPath = null, this.context = null, this.container = null, this.listKey = null, this.inList = !1, this.parentKey = null, this.key = null, this.node = null, this.scope = null, this.type = null, this.typeAnnotation = null
			}
			static get({
				hub: e,
				parentPath: t,
				parent: n,
				container: r,
				listKey: i,
				key: s
			}) {
				if (!e && t && (e = t.hub), !n) throw new Error("To get a node path the parent needs to exist");
				const o = r[s],
					a = u.path.get(n) || [];
				let c;
				u.path.has(n) || u.path.set(n, a);
				for (let e = 0; e < a.length; e++) {
					const t = a[e];
					if (t.node === o) {
						c = t;
						break
					}
				}
				return c || (c = new P(e, n), a.push(c)), c.setup(t, r, i, s), c
			}
			getScope(e) {
				return this.isScope() ? new o.default(this) : e
			}
			setData(e, t) {
				return this.data[e] = t
			}
			getData(e, t) {
				let n = this.data[e];
				return void 0 === n && void 0 !== t && (n = this.data[e] = t), n
			}
			buildCodeFrameError(e, t = SyntaxError) {
				return this.hub.buildError(this.node, e, t)
			}
			traverse(e, t) {
				(0, s.default)(this.node, e, this.scope, t, this)
			}
			set(e, t) {
				a().validate(this.node, e, t), this.node[e] = t
			}
			getPathLocation() {
				const e = [];
				let t = this;
				do {
					let n = t.key;
					t.inList && (n = `${t.listKey}[${n}]`), e.unshift(n)
				} while (t = t.parentPath);
				return e.join(".")
			}
			debug(e) {
				x.enabled && x(`${this.getPathLocation()} ${this.type}: ${e}`)
			}
			toString() {
				return (0, c().default)(this.node).code
			}
		}
		t.default = P, Object.assign(P.prototype, l, p, h, f, d, y, m, g, E, T, A);
		for (const e of a().TYPES) {
			const t = `is${e}`,
				n = a()[t];
			P.prototype[t] = function (e) {
				return n(this.node, e)
			}, P.prototype[`assert${e}`] = function (t) {
				if (!n(this.node, t)) throw new TypeError(`Expected node path of type ${e}`)
			}
		}
		for (const e of Object.keys(r)) {
			if ("_" === e[0]) continue;
			a().TYPES.indexOf(e) < 0 && a().TYPES.push(e);
			const t = r[e];
			P.prototype[`is${e}`] = function (e) {
				return t.checkPath(this, e)
			}
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = f, Object.defineProperty(t, "NodePath", {
			enumerable: !0,
			get: function () {
				return u.default
			}
		}), Object.defineProperty(t, "Scope", {
			enumerable: !0,
			get: function () {
				return c.default
			}
		}), Object.defineProperty(t, "Hub", {
			enumerable: !0,
			get: function () {
				return l.default
			}
		}), t.visitors = void 0;
		var r = h(n(113)),
			i = p(n(325));

		function s() {
			const e = h(n(49));
			return s = function () {
				return e
			}, e
		}

		function o() {
			const e = p(n(0));
			return o = function () {
				return e
			}, e
		}
		t.visitors = i;
		var a = p(n(31)),
			u = h(n(12)),
			c = h(n(94)),
			l = h(n(326));

		function p(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e)
					if (Object.prototype.hasOwnProperty.call(e, n)) {
						var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
						r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
					}
			return t.default = e, t
		}

		function h(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function f(e, t, n, r, s) {
			if (e) {
				if (t || (t = {}), !t.noScope && !n && "Program" !== e.type && "File" !== e.type) throw new Error("You must pass a scope and parentPath unless traversing a Program/File. " + `Instead of that you tried to traverse a ${e.type} node without ` + "passing scope and parentPath.");
				i.explode(t), f.node(e, t, n, r, s)
			}
		}

		function d(e, t) {
			e.node.type === t.type && (t.has = !0, e.stop())
		}
		f.visitors = i, f.verify = i.verify, f.explode = i.explode, f.cheap = function (e, t) {
			return o().traverseFast(e, t)
		}, f.node = function (e, t, n, i, s, a) {
			const u = o().VISITOR_KEYS[e.type];
			if (!u) return;
			const c = new r.default(n, t, i, s);
			for (const t of u)
				if ((!a || !a[t]) && c.visit(e, t)) return
		}, f.clearNode = function (e, t) {
			o().removeProperties(e, t), a.path.delete(e)
		}, f.removeProperties = function (e, t) {
			return o().traverseFast(e, f.clearNode, t), e
		}, f.hasType = function (e, t, n) {
			if ((0, s().default)(n, e.type)) return !1;
			if (e.type === t) return !0;
			const r = {
				has: !1,
				type: t
			};
			return f(e, {
				noScope: !0,
				blacklist: n,
				enter: d
			}, null, r), r.has
		}, f.cache = a
	}, function (e, t) {
		var n = Array.isArray;
		e.exports = n
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(74));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			return "string" == typeof e && !r().default.keyword.isReservedWordES6(e, !0) && ("await" !== e && r().default.keyword.isIdentifierNameES6(e))
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = a;
		var r = n(3);
		const i = Function.call.bind(Object.prototype.hasOwnProperty);

		function s(e, t) {
			return e && "string" == typeof e.type && "CommentLine" !== e.type && "CommentBlock" !== e.type ? a(e, t) : e
		}

		function o(e, t) {
			return Array.isArray(e) ? e.map(e => s(e, t)) : s(e, t)
		}

		function a(e, t = !0) {
			if (!e) return e;
			const {
				type: n
			} = e, s = {
				type: n
			};
			if ("Identifier" === n) s.name = e.name, i(e, "optional") && "boolean" == typeof e.optional && (s.optional = e.optional), i(e, "typeAnnotation") && (s.typeAnnotation = t ? o(e.typeAnnotation, !0) : e.typeAnnotation);
			else {
				if (!i(r.NODE_FIELDS, n)) throw new Error(`Unknown node type: "${n}"`);
				for (const a of Object.keys(r.NODE_FIELDS[n])) i(e, a) && (s[a] = t ? o(e[a], !0) : e[a])
			}
			return i(e, "loc") && (s.loc = e.loc), i(e, "leadingComments") && (s.leadingComments = e.leadingComments), i(e, "innerComments") && (s.innerComments = e.innerComments), i(e, "trailingComments") && (s.trailingComments = e.trailingComments), i(e, "extra") && (s.extra = Object.assign({}, e.extra)), s
		}
	}, function (e, t) {
		t.getArg = function (e, t, n) {
			if (t in e) return e[t];
			if (3 === arguments.length) return n;
			throw new Error('"' + t + '" is a required argument.')
		};
		var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,
			r = /^data:.+\,.+$/;

		function i(e) {
			var t = e.match(n);
			return t ? {
				scheme: t[1],
				auth: t[2],
				host: t[3],
				port: t[4],
				path: t[5]
			} : null
		}

		function s(e) {
			var t = "";
			return e.scheme && (t += e.scheme + ":"), t += "//", e.auth && (t += e.auth + "@"), e.host && (t += e.host), e.port && (t += ":" + e.port), e.path && (t += e.path), t
		}

		function o(e) {
			var n = e,
				r = i(e);
			if (r) {
				if (!r.path) return e;
				n = r.path
			}
			for (var o, a = t.isAbsolute(n), u = n.split(/\/+/), c = 0, l = u.length - 1; l >= 0; l--) "." === (o = u[l]) ? u.splice(l, 1) : ".." === o ? c++ : c > 0 && ("" === o ? (u.splice(l + 1, c), c = 0) : (u.splice(l, 2), c--));
			return "" === (n = u.join("/")) && (n = a ? "/" : "."), r ? (r.path = n, s(r)) : n
		}
		t.urlParse = i, t.urlGenerate = s, t.normalize = o, t.join = function (e, t) {
			"" === e && (e = "."), "" === t && (t = ".");
			var n = i(t),
				a = i(e);
			if (a && (e = a.path || "/"), n && !n.scheme) return a && (n.scheme = a.scheme), s(n);
			if (n || t.match(r)) return t;
			if (a && !a.host && !a.path) return a.host = t, s(a);
			var u = "/" === t.charAt(0) ? t : o(e.replace(/\/+$/, "") + "/" + t);
			return a ? (a.path = u, s(a)) : u
		}, t.isAbsolute = function (e) {
			return "/" === e.charAt(0) || !!e.match(n)
		}, t.relative = function (e, t) {
			"" === e && (e = "."), e = e.replace(/\/$/, "");
			for (var n = 0; 0 !== t.indexOf(e + "/");) {
				var r = e.lastIndexOf("/");
				if (r < 0) return t;
				if ((e = e.slice(0, r)).match(/^([^\/]+:\/)?\/*$/)) return t;
				++n
			}
			return Array(n + 1).join("../") + t.substr(e.length + 1)
		};
		var a = !("__proto__" in Object.create(null));

		function u(e) {
			return e
		}

		function c(e) {
			if (!e) return !1;
			var t = e.length;
			if (t < 9) return !1;
			if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) return !1;
			for (var n = t - 10; n >= 0; n--)
				if (36 !== e.charCodeAt(n)) return !1;
			return !0
		}

		function l(e, t) {
			return e === t ? 0 : e > t ? 1 : -1
		}
		t.toSetString = a ? u : function (e) {
			return c(e) ? "$" + e : e
		}, t.fromSetString = a ? u : function (e) {
			return c(e) ? e.slice(1) : e
		}, t.compareByOriginalPositions = function (e, t, n) {
			var r = e.source - t.source;
			return 0 !== r ? r : 0 != (r = e.originalLine - t.originalLine) ? r : 0 != (r = e.originalColumn - t.originalColumn) || n ? r : 0 != (r = e.generatedColumn - t.generatedColumn) ? r : 0 != (r = e.generatedLine - t.generatedLine) ? r : e.name - t.name
		}, t.compareByGeneratedPositionsDeflated = function (e, t, n) {
			var r = e.generatedLine - t.generatedLine;
			return 0 !== r ? r : 0 != (r = e.generatedColumn - t.generatedColumn) || n ? r : 0 != (r = e.source - t.source) ? r : 0 != (r = e.originalLine - t.originalLine) ? r : 0 != (r = e.originalColumn - t.originalColumn) ? r : e.name - t.name
		}, t.compareByGeneratedPositionsInflated = function (e, t) {
			var n = e.generatedLine - t.generatedLine;
			return 0 !== n ? n : 0 != (n = e.generatedColumn - t.generatedColumn) ? n : 0 !== (n = l(e.source, t.source)) ? n : 0 != (n = e.originalLine - t.originalLine) ? n : 0 != (n = e.originalColumn - t.originalColumn) ? n : l(e.name, t.name)
		}
	}, function (e, t, n) {
		var r = n(121),
			i = n(122),
			s = n(123),
			o = n(124),
			a = n(125);

		function u(e) {
			var t = -1,
				n = null == e ? 0 : e.length;
			for (this.clear(); ++t < n;) {
				var r = e[t];
				this.set(r[0], r[1])
			}
		}
		u.prototype.clear = r, u.prototype.delete = i, u.prototype.get = s, u.prototype.has = o, u.prototype.set = a, e.exports = u
	}, function (e, t, n) {
		var r = n(20);
		e.exports = function (e, t) {
			for (var n = e.length; n--;)
				if (r(e[n][0], t)) return n;
			return -1
		}
	}, function (e, t) {
		e.exports = function (e, t) {
			return e === t || e != e && t != t
		}
	}, function (e, t, n) {
		var r = n(5).Symbol;
		e.exports = r
	}, function (e, t, n) {
		var r = n(9)(Object, "create");
		e.exports = r
	}, function (e, t, n) {
		var r = n(145);
		e.exports = function (e, t) {
			var n = e.__data__;
			return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
		}
	}, function (e, t, n) {
		var r = n(61),
			i = n(62);
		e.exports = function (e, t, n, s) {
			var o = !n;
			n || (n = {});
			for (var a = -1, u = t.length; ++a < u;) {
				var c = t[a],
					l = s ? s(n[c], e[c], c, n, e) : void 0;
				void 0 === l && (l = e[c]), o ? i(n, c, l) : r(n, c, l)
			}
			return n
		}
	}, function (e, t, n) {
		var r = n(64),
			i = n(157),
			s = n(29);
		e.exports = function (e) {
			return s(e) ? r(e) : i(e)
		}
	}, function (e, t) {
		e.exports = function (e) {
			return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
				enumerable: !0,
				get: function () {
					return e.l
				}
			}), Object.defineProperty(e, "id", {
				enumerable: !0,
				get: function () {
					return e.i
				}
			}), e.webpackPolyfill = 1), e
		}
	}, function (e, t) {
		e.exports = function (e) {
			return function (t) {
				return e(t)
			}
		}
	}, function (e, t, n) {
		(function (e) {
			var r = n(58),
				i = "object" == typeof t && t && !t.nodeType && t,
				s = i && "object" == typeof e && e && !e.nodeType && e,
				o = s && s.exports === i && r.process,
				a = function () {
					try {
						var e = s && s.require && s.require("util").types;
						return e || o && o.binding && o.binding("util")
					} catch (e) {}
				}();
			e.exports = a
		}).call(this, n(26)(e))
	}, function (e, t, n) {
		var r = n(57),
			i = n(67);
		e.exports = function (e) {
			return null != e && i(e.length) && !r(e)
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = i;
		var r = n(2);

		function i(e, t, n) {
			let s = [].concat(e);
			const o = Object.create(null);
			for (; s.length;) {
				const e = s.shift();
				if (!e) continue;
				const a = i.keys[e.type];
				if ((0, r.isIdentifier)(e))
					if (t) {
						(o[e.name] = o[e.name] || []).push(e)
					} else o[e.name] = e;
				else if ((0, r.isExportDeclaration)(e))(0, r.isDeclaration)(e.declaration) && s.push(e.declaration);
				else {
					if (n) {
						if ((0, r.isFunctionDeclaration)(e)) {
							s.push(e.id);
							continue
						}
						if ((0, r.isFunctionExpression)(e)) continue
					}
					if (a)
						for (let t = 0; t < a.length; t++) {
							const n = a[t];
							e[n] && (s = s.concat(e[n]))
						}
				}
			}
			return o
		}
		i.keys = {
			DeclareClass: ["id"],
			DeclareFunction: ["id"],
			DeclareModule: ["id"],
			DeclareVariable: ["id"],
			DeclareInterface: ["id"],
			DeclareTypeAlias: ["id"],
			DeclareOpaqueType: ["id"],
			InterfaceDeclaration: ["id"],
			TypeAlias: ["id"],
			OpaqueType: ["id"],
			CatchClause: ["param"],
			LabeledStatement: ["label"],
			UnaryExpression: ["argument"],
			AssignmentExpression: ["left"],
			ImportSpecifier: ["local"],
			ImportNamespaceSpecifier: ["local"],
			ImportDefaultSpecifier: ["local"],
			ImportDeclaration: ["specifiers"],
			ExportSpecifier: ["exported"],
			ExportNamespaceSpecifier: ["exported"],
			ExportDefaultSpecifier: ["exported"],
			FunctionDeclaration: ["id", "params"],
			FunctionExpression: ["id", "params"],
			ArrowFunctionExpression: ["params"],
			ObjectMethod: ["params"],
			ClassMethod: ["params"],
			ForInStatement: ["left"],
			ForOfStatement: ["left"],
			ClassDeclaration: ["id"],
			ClassExpression: ["id"],
			RestElement: ["argument"],
			UpdateExpression: ["argument"],
			ObjectProperty: ["value"],
			AssignmentPattern: ["left"],
			ArrayPattern: ["elements"],
			ObjectPattern: ["properties"],
			VariableDeclaration: ["declarations"],
			VariableDeclarator: ["id"]
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.clear = function () {
			s(), o()
		}, t.clearPath = s, t.clearScope = o, t.scope = t.path = void 0;
		let r = new WeakMap;
		t.path = r;
		let i = new WeakMap;

		function s() {
			t.path = r = new WeakMap
		}

		function o() {
			t.scope = i = new WeakMap
		}
		t.scope = i
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		const r = !0;
		class i {
			constructor(e, t = {}) {
				this.label = e, this.keyword = t.keyword, this.beforeExpr = !!t.beforeExpr, this.startsExpr = !!t.startsExpr, this.rightAssociative = !!t.rightAssociative, this.isLoop = !!t.isLoop, this.isAssign = !!t.isAssign, this.prefix = !!t.prefix, this.postfix = !!t.postfix, this.binop = null != t.binop ? t.binop : null, this.updateContext = null
			}
		}
		const s = new Map;

		function o(e, t = {}) {
			t.keyword = e;
			const n = new i(e, t);
			return s.set(e, n), n
		}

		function a(e, t) {
			return new i(e, {
				beforeExpr: r,
				binop: t
			})
		}
		const u = {
				num: new i("num", {
					startsExpr: !0
				}),
				bigint: new i("bigint", {
					startsExpr: !0
				}),
				regexp: new i("regexp", {
					startsExpr: !0
				}),
				string: new i("string", {
					startsExpr: !0
				}),
				name: new i("name", {
					startsExpr: !0
				}),
				eof: new i("eof"),
				bracketL: new i("[", {
					beforeExpr: r,
					startsExpr: !0
				}),
				bracketR: new i("]"),
				braceL: new i("{", {
					beforeExpr: r,
					startsExpr: !0
				}),
				braceBarL: new i("{|", {
					beforeExpr: r,
					startsExpr: !0
				}),
				braceR: new i("}"),
				braceBarR: new i("|}"),
				parenL: new i("(", {
					beforeExpr: r,
					startsExpr: !0
				}),
				parenR: new i(")"),
				comma: new i(",", {
					beforeExpr: r
				}),
				semi: new i(";", {
					beforeExpr: r
				}),
				colon: new i(":", {
					beforeExpr: r
				}),
				doubleColon: new i("::", {
					beforeExpr: r
				}),
				dot: new i("."),
				question: new i("?", {
					beforeExpr: r
				}),
				questionDot: new i("?."),
				arrow: new i("=>", {
					beforeExpr: r
				}),
				template: new i("template"),
				ellipsis: new i("...", {
					beforeExpr: r
				}),
				backQuote: new i("`", {
					startsExpr: !0
				}),
				dollarBraceL: new i("${", {
					beforeExpr: r,
					startsExpr: !0
				}),
				at: new i("@"),
				hash: new i("#", {
					startsExpr: !0
				}),
				interpreterDirective: new i("#!..."),
				eq: new i("=", {
					beforeExpr: r,
					isAssign: !0
				}),
				assign: new i("_=", {
					beforeExpr: r,
					isAssign: !0
				}),
				incDec: new i("++/--", {
					prefix: !0,
					postfix: !0,
					startsExpr: !0
				}),
				bang: new i("!", {
					beforeExpr: r,
					prefix: !0,
					startsExpr: !0
				}),
				tilde: new i("~", {
					beforeExpr: r,
					prefix: !0,
					startsExpr: !0
				}),
				pipeline: a("|>", 0),
				nullishCoalescing: a("??", 1),
				logicalOR: a("||", 1),
				logicalAND: a("&&", 2),
				bitwiseOR: a("|", 3),
				bitwiseXOR: a("^", 4),
				bitwiseAND: a("&", 5),
				equality: a("==/!=/===/!==", 6),
				relational: a("</>/<=/>=", 7),
				bitShift: a("<</>>/>>>", 8),
				plusMin: new i("+/-", {
					beforeExpr: r,
					binop: 9,
					prefix: !0,
					startsExpr: !0
				}),
				modulo: a("%", 10),
				star: a("*", 10),
				slash: a("/", 10),
				exponent: new i("**", {
					beforeExpr: r,
					binop: 11,
					rightAssociative: !0
				}),
				_break: o("break"),
				_case: o("case", {
					beforeExpr: r
				}),
				_catch: o("catch"),
				_continue: o("continue"),
				_debugger: o("debugger"),
				_default: o("default", {
					beforeExpr: r
				}),
				_do: o("do", {
					isLoop: !0,
					beforeExpr: r
				}),
				_else: o("else", {
					beforeExpr: r
				}),
				_finally: o("finally"),
				_for: o("for", {
					isLoop: !0
				}),
				_function: o("function", {
					startsExpr: !0
				}),
				_if: o("if"),
				_return: o("return", {
					beforeExpr: r
				}),
				_switch: o("switch"),
				_throw: o("throw", {
					beforeExpr: r,
					prefix: !0,
					startsExpr: !0
				}),
				_try: o("try"),
				_var: o("var"),
				_const: o("const"),
				_while: o("while", {
					isLoop: !0
				}),
				_with: o("with"),
				_new: o("new", {
					beforeExpr: r,
					startsExpr: !0
				}),
				_this: o("this", {
					startsExpr: !0
				}),
				_super: o("super", {
					startsExpr: !0
				}),
				_class: o("class", {
					startsExpr: !0
				}),
				_extends: o("extends", {
					beforeExpr: r
				}),
				_export: o("export"),
				_import: o("import", {
					startsExpr: !0
				}),
				_null: o("null", {
					startsExpr: !0
				}),
				_true: o("true", {
					startsExpr: !0
				}),
				_false: o("false", {
					startsExpr: !0
				}),
				_in: o("in", {
					beforeExpr: r,
					binop: 7
				}),
				_instanceof: o("instanceof", {
					beforeExpr: r,
					binop: 7
				}),
				_typeof: o("typeof", {
					beforeExpr: r,
					prefix: !0,
					startsExpr: !0
				}),
				_void: o("void", {
					beforeExpr: r,
					prefix: !0,
					startsExpr: !0
				}),
				_delete: o("delete", {
					beforeExpr: r,
					prefix: !0,
					startsExpr: !0
				})
			},
			c = 0,
			l = 1,
			p = 2,
			h = 4,
			f = 8,
			d = 16,
			y = 32,
			m = 64,
			g = 128,
			E = 256,
			T = l | p;

		function A(e, t) {
			return p | (e ? h : 0) | (t ? f : 0)
		}
		const S = 1,
			b = 2,
			x = 4,
			P = 8,
			v = 16,
			D = 128,
			C = 256,
			O = 512,
			w = 1024,
			F = S | b | P | D,
			_ = 0 | S | P | 0,
			N = 0 | S | x | 0,
			I = 0 | S | v | 0,
			k = 0 | b | D,
			B = 0 | b,
			L = S | b | P | C,
			M = 0 | w,
			j = 64,
			R = 64 | S,
			U = L | O,
			V = M;

		function X(e) {
			return null != e && "Property" === e.type && "init" === e.kind && !1 === e.method
		}
		const W = /\r\n?|[\n\u2028\u2029]/,
			Y = new RegExp(W.source, "g");

		function K(e) {
			switch (e) {
				case 10:
				case 13:
				case 8232:
				case 8233:
					return !0;
				default:
					return !1
			}
		}
		const q = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

		function J(e) {
			switch (e) {
				case 9:
				case 11:
				case 12:
				case 32:
				case 160:
				case 5760:
				case 8192:
				case 8193:
				case 8194:
				case 8195:
				case 8196:
				case 8197:
				case 8198:
				case 8199:
				case 8200:
				case 8201:
				case 8202:
				case 8239:
				case 8287:
				case 12288:
				case 65279:
					return !0;
				default:
					return !1
			}
		}
		class G {
			constructor(e, t, n, r) {
				this.token = e, this.isExpr = !!t, this.preserveSpace = !!n, this.override = r
			}
		}
		const H = {
			braceStatement: new G("{", !1),
			braceExpression: new G("{", !0),
			templateQuasi: new G("${", !1),
			parenStatement: new G("(", !1),
			parenExpression: new G("(", !0),
			template: new G("`", !0, !0, e => e.readTmplToken()),
			functionExpression: new G("function", !0),
			functionStatement: new G("function", !1)
		};
		u.parenR.updateContext = u.braceR.updateContext = function () {
			if (1 === this.state.context.length) return void(this.state.exprAllowed = !0);
			let e = this.state.context.pop();
			e === H.braceStatement && "function" === this.curContext().token && (e = this.state.context.pop()), this.state.exprAllowed = !e.isExpr
		}, u.name.updateContext = function (e) {
			let t = !1;
			e !== u.dot && ("of" === this.state.value && !this.state.exprAllowed || "yield" === this.state.value && this.scope.inGenerator) && (t = !0), this.state.exprAllowed = t, this.state.isIterator && (this.state.isIterator = !1)
		}, u.braceL.updateContext = function (e) {
			this.state.context.push(this.braceIsBlock(e) ? H.braceStatement : H.braceExpression), this.state.exprAllowed = !0
		}, u.dollarBraceL.updateContext = function () {
			this.state.context.push(H.templateQuasi), this.state.exprAllowed = !0
		}, u.parenL.updateContext = function (e) {
			const t = e === u._if || e === u._for || e === u._with || e === u._while;
			this.state.context.push(t ? H.parenStatement : H.parenExpression), this.state.exprAllowed = !0
		}, u.incDec.updateContext = function () {}, u._function.updateContext = u._class.updateContext = function (e) {
			!e.beforeExpr || e === u.semi || e === u._else || e === u._return && W.test(this.input.slice(this.state.lastTokEnd, this.state.start)) || (e === u.colon || e === u.braceL) && this.curContext() === H.b_stat ? this.state.context.push(H.functionStatement) : this.state.context.push(H.functionExpression), this.state.exprAllowed = !1
		}, u.backQuote.updateContext = function () {
			this.curContext() === H.template ? this.state.context.pop() : this.state.context.push(H.template), this.state.exprAllowed = !1
		};
		const $ = {
				strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
				strictBind: ["eval", "arguments"]
			},
			z = new Set($.strict),
			Q = new Set($.strict.concat($.strictBind)),
			Z = (e, t) => t && "await" === e || "enum" === e;

		function ee(e, t) {
			return Z(e, t) || z.has(e)
		}

		function te(e, t) {
			return Z(e, t) || Q.has(e)
		}
		const ne = /^in(stanceof)?$/;
		let re = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-Ᶎꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭧꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
			ie = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";
		const se = new RegExp("[" + re + "]"),
			oe = new RegExp("[" + re + ie + "]");
		re = ie = null;
		const ae = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 477, 28, 11, 0, 9, 21, 155, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 12, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 0, 33, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 0, 161, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 270, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 754, 9486, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541],
			ue = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 525, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 232, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 792487, 239];

		function ce(e, t) {
			let n = 65536;
			for (let r = 0, i = t.length; r < i; r += 2) {
				if ((n += t[r]) > e) return !1;
				if ((n += t[r + 1]) >= e) return !0
			}
			return !1
		}

		function le(e) {
			return e < 65 ? 36 === e : e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && se.test(String.fromCharCode(e)) : ce(e, ae)))
		}

		function pe(e) {
			return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && oe.test(String.fromCharCode(e)) : ce(e, ae) || ce(e, ue))))
		}
		const he = ["any", "bool", "boolean", "empty", "false", "mixed", "null", "number", "static", "string", "true", "typeof", "void", "interface", "extends", "_"];

		function fe(e) {
			return "type" === e.importKind || "typeof" === e.importKind
		}

		function de(e) {
			return (e.type === u.name || !!e.type.keyword) && "from" !== e.value
		}
		const ye = {
			const: "declare export var",
			let: "declare export var",
			type: "export type",
			interface: "export interface"
		};
		const me = /\*?\s*@((?:no)?flow)\b/;
		const ge = {
				quot: '"',
				amp: "&",
				apos: "'",
				lt: "<",
				gt: ">",
				nbsp: " ",
				iexcl: "¡",
				cent: "¢",
				pound: "£",
				curren: "¤",
				yen: "¥",
				brvbar: "¦",
				sect: "§",
				uml: "¨",
				copy: "©",
				ordf: "ª",
				laquo: "«",
				not: "¬",
				shy: "­",
				reg: "®",
				macr: "¯",
				deg: "°",
				plusmn: "±",
				sup2: "²",
				sup3: "³",
				acute: "´",
				micro: "µ",
				para: "¶",
				middot: "·",
				cedil: "¸",
				sup1: "¹",
				ordm: "º",
				raquo: "»",
				frac14: "¼",
				frac12: "½",
				frac34: "¾",
				iquest: "¿",
				Agrave: "À",
				Aacute: "Á",
				Acirc: "Â",
				Atilde: "Ã",
				Auml: "Ä",
				Aring: "Å",
				AElig: "Æ",
				Ccedil: "Ç",
				Egrave: "È",
				Eacute: "É",
				Ecirc: "Ê",
				Euml: "Ë",
				Igrave: "Ì",
				Iacute: "Í",
				Icirc: "Î",
				Iuml: "Ï",
				ETH: "Ð",
				Ntilde: "Ñ",
				Ograve: "Ò",
				Oacute: "Ó",
				Ocirc: "Ô",
				Otilde: "Õ",
				Ouml: "Ö",
				times: "×",
				Oslash: "Ø",
				Ugrave: "Ù",
				Uacute: "Ú",
				Ucirc: "Û",
				Uuml: "Ü",
				Yacute: "Ý",
				THORN: "Þ",
				szlig: "ß",
				agrave: "à",
				aacute: "á",
				acirc: "â",
				atilde: "ã",
				auml: "ä",
				aring: "å",
				aelig: "æ",
				ccedil: "ç",
				egrave: "è",
				eacute: "é",
				ecirc: "ê",
				euml: "ë",
				igrave: "ì",
				iacute: "í",
				icirc: "î",
				iuml: "ï",
				eth: "ð",
				ntilde: "ñ",
				ograve: "ò",
				oacute: "ó",
				ocirc: "ô",
				otilde: "õ",
				ouml: "ö",
				divide: "÷",
				oslash: "ø",
				ugrave: "ù",
				uacute: "ú",
				ucirc: "û",
				uuml: "ü",
				yacute: "ý",
				thorn: "þ",
				yuml: "ÿ",
				OElig: "Œ",
				oelig: "œ",
				Scaron: "Š",
				scaron: "š",
				Yuml: "Ÿ",
				fnof: "ƒ",
				circ: "ˆ",
				tilde: "˜",
				Alpha: "Α",
				Beta: "Β",
				Gamma: "Γ",
				Delta: "Δ",
				Epsilon: "Ε",
				Zeta: "Ζ",
				Eta: "Η",
				Theta: "Θ",
				Iota: "Ι",
				Kappa: "Κ",
				Lambda: "Λ",
				Mu: "Μ",
				Nu: "Ν",
				Xi: "Ξ",
				Omicron: "Ο",
				Pi: "Π",
				Rho: "Ρ",
				Sigma: "Σ",
				Tau: "Τ",
				Upsilon: "Υ",
				Phi: "Φ",
				Chi: "Χ",
				Psi: "Ψ",
				Omega: "Ω",
				alpha: "α",
				beta: "β",
				gamma: "γ",
				delta: "δ",
				epsilon: "ε",
				zeta: "ζ",
				eta: "η",
				theta: "θ",
				iota: "ι",
				kappa: "κ",
				lambda: "λ",
				mu: "μ",
				nu: "ν",
				xi: "ξ",
				omicron: "ο",
				pi: "π",
				rho: "ρ",
				sigmaf: "ς",
				sigma: "σ",
				tau: "τ",
				upsilon: "υ",
				phi: "φ",
				chi: "χ",
				psi: "ψ",
				omega: "ω",
				thetasym: "ϑ",
				upsih: "ϒ",
				piv: "ϖ",
				ensp: " ",
				emsp: " ",
				thinsp: " ",
				zwnj: "‌",
				zwj: "‍",
				lrm: "‎",
				rlm: "‏",
				ndash: "–",
				mdash: "—",
				lsquo: "‘",
				rsquo: "’",
				sbquo: "‚",
				ldquo: "“",
				rdquo: "”",
				bdquo: "„",
				dagger: "†",
				Dagger: "‡",
				bull: "•",
				hellip: "…",
				permil: "‰",
				prime: "′",
				Prime: "″",
				lsaquo: "‹",
				rsaquo: "›",
				oline: "‾",
				frasl: "⁄",
				euro: "€",
				image: "ℑ",
				weierp: "℘",
				real: "ℜ",
				trade: "™",
				alefsym: "ℵ",
				larr: "←",
				uarr: "↑",
				rarr: "→",
				darr: "↓",
				harr: "↔",
				crarr: "↵",
				lArr: "⇐",
				uArr: "⇑",
				rArr: "⇒",
				dArr: "⇓",
				hArr: "⇔",
				forall: "∀",
				part: "∂",
				exist: "∃",
				empty: "∅",
				nabla: "∇",
				isin: "∈",
				notin: "∉",
				ni: "∋",
				prod: "∏",
				sum: "∑",
				minus: "−",
				lowast: "∗",
				radic: "√",
				prop: "∝",
				infin: "∞",
				ang: "∠",
				and: "∧",
				or: "∨",
				cap: "∩",
				cup: "∪",
				int: "∫",
				there4: "∴",
				sim: "∼",
				cong: "≅",
				asymp: "≈",
				ne: "≠",
				equiv: "≡",
				le: "≤",
				ge: "≥",
				sub: "⊂",
				sup: "⊃",
				nsub: "⊄",
				sube: "⊆",
				supe: "⊇",
				oplus: "⊕",
				otimes: "⊗",
				perp: "⊥",
				sdot: "⋅",
				lceil: "⌈",
				rceil: "⌉",
				lfloor: "⌊",
				rfloor: "⌋",
				lang: "〈",
				rang: "〉",
				loz: "◊",
				spades: "♠",
				clubs: "♣",
				hearts: "♥",
				diams: "♦"
			},
			Ee = /^[\da-fA-F]+$/,
			Te = /^\d+$/;

		function Ae(e) {
			return !!e && ("JSXOpeningFragment" === e.type || "JSXClosingFragment" === e.type)
		}

		function Se(e) {
			if ("JSXIdentifier" === e.type) return e.name;
			if ("JSXNamespacedName" === e.type) return e.namespace.name + ":" + e.name.name;
			if ("JSXMemberExpression" === e.type) return Se(e.object) + "." + Se(e.property);
			throw new Error("Node had unexpected type: " + e.type)
		}
		H.j_oTag = new G("<tag", !1), H.j_cTag = new G("</tag", !1), H.j_expr = new G("<tag>...</tag>", !0, !0), u.jsxName = new i("jsxName"), u.jsxText = new i("jsxText", {
			beforeExpr: !0
		}), u.jsxTagStart = new i("jsxTagStart", {
			startsExpr: !0
		}), u.jsxTagEnd = new i("jsxTagEnd"), u.jsxTagStart.updateContext = function () {
			this.state.context.push(H.j_expr), this.state.context.push(H.j_oTag), this.state.exprAllowed = !1
		}, u.jsxTagEnd.updateContext = function (e) {
			const t = this.state.context.pop();
			t === H.j_oTag && e === u.slash || t === H.j_cTag ? (this.state.context.pop(), this.state.exprAllowed = this.curContext() === H.j_expr) : this.state.exprAllowed = !0
		};
		class be {
			constructor(e) {
				this.var = [], this.lexical = [], this.functions = [], this.flags = e
			}
		}
		class xe {
			constructor(e, t) {
				this.scopeStack = [], this.undefinedExports = new Map, this.raise = e, this.inModule = t
			}
			get inFunction() {
				return (this.currentVarScope().flags & p) > 0
			}
			get inGenerator() {
				return (this.currentVarScope().flags & f) > 0
			}
			get inAsync() {
				return (this.currentVarScope().flags & h) > 0
			}
			get allowSuper() {
				return (this.currentThisScope().flags & m) > 0
			}
			get allowDirectSuper() {
				return (this.currentThisScope().flags & g) > 0
			}
			get inNonArrowFunction() {
				return (this.currentThisScope().flags & p) > 0
			}
			get treatFunctionsAsVar() {
				return this.treatFunctionsAsVarInScope(this.currentScope())
			}
			createScope(e) {
				return new be(e)
			}
			enter(e) {
				this.scopeStack.push(this.createScope(e))
			}
			exit() {
				this.scopeStack.pop()
			}
			treatFunctionsAsVarInScope(e) {
				return !!(e.flags & p || !this.inModule && e.flags & l)
			}
			declareName(e, t, n) {
				let r = this.currentScope();
				if (t & P || t & v) this.checkRedeclarationInScope(r, e, t, n), t & v ? r.functions.push(e) : r.lexical.push(e), t & P && this.maybeExportDefined(r, e);
				else if (t & x)
					for (let i = this.scopeStack.length - 1; i >= 0 && (r = this.scopeStack[i], this.checkRedeclarationInScope(r, e, t, n), r.var.push(e), this.maybeExportDefined(r, e), !(r.flags & T)); --i);
				this.inModule && r.flags & l && this.undefinedExports.delete(e)
			}
			maybeExportDefined(e, t) {
				this.inModule && e.flags & l && this.undefinedExports.delete(t)
			}
			checkRedeclarationInScope(e, t, n, r) {
				this.isRedeclaredInScope(e, t, n) && this.raise(r, `Identifier '${t}' has already been declared`)
			}
			isRedeclaredInScope(e, t, n) {
				return !!(n & S) && (n & P ? e.lexical.indexOf(t) > -1 || e.functions.indexOf(t) > -1 || e.var.indexOf(t) > -1 : n & v ? e.lexical.indexOf(t) > -1 || !this.treatFunctionsAsVarInScope(e) && e.var.indexOf(t) > -1 : e.lexical.indexOf(t) > -1 && !(e.flags & y && e.lexical[0] === t) || !this.treatFunctionsAsVarInScope(e) && e.functions.indexOf(t) > -1)
			}
			checkLocalExport(e) {
				-1 === this.scopeStack[0].lexical.indexOf(e.name) && -1 === this.scopeStack[0].var.indexOf(e.name) && -1 === this.scopeStack[0].functions.indexOf(e.name) && this.undefinedExports.set(e.name, e.start)
			}
			currentScope() {
				return this.scopeStack[this.scopeStack.length - 1]
			}
			currentVarScope() {
				for (let e = this.scopeStack.length - 1;; e--) {
					const t = this.scopeStack[e];
					if (t.flags & T) return t
				}
			}
			currentThisScope() {
				for (let e = this.scopeStack.length - 1;; e--) {
					const t = this.scopeStack[e];
					if ((t.flags & T || t.flags & E) && !(t.flags & d)) return t
				}
			}
		}
		class Pe extends be {
			constructor(...e) {
				super(...e), this.types = [], this.enums = [], this.constEnums = [], this.classes = [], this.exportOnlyBindings = []
			}
		}
		class ve extends xe {
			createScope(e) {
				return new Pe(e)
			}
			declareName(e, t, n) {
				const r = this.currentScope();
				if (t & w) return this.maybeExportDefined(r, e), void r.exportOnlyBindings.push(e);
				super.declareName(...arguments), t & b && (t & S || (this.checkRedeclarationInScope(r, e, t, n), this.maybeExportDefined(r, e)), r.types.push(e)), t & C && r.enums.push(e), t & O && r.constEnums.push(e), t & D && r.classes.push(e)
			}
			isRedeclaredInScope(e, t, n) {
				if (e.enums.indexOf(t) > -1) {
					if (n & C) {
						return !!(n & O) !== e.constEnums.indexOf(t) > -1
					}
					return !0
				}
				return n & D && e.classes.indexOf(t) > -1 ? e.lexical.indexOf(t) > -1 && !!(n & S) : !!(n & b && e.types.indexOf(t) > -1) || super.isRedeclaredInScope(...arguments)
			}
			checkLocalExport(e) {
				-1 === this.scopeStack[0].types.indexOf(e.name) && -1 === this.scopeStack[0].exportOnlyBindings.indexOf(e.name) && super.checkLocalExport(e)
			}
		}

		function De(e) {
			if (null == e) throw new Error(`Unexpected ${e} value.`);
			return e
		}

		function Ce(e) {
			if (!e) throw new Error("Assert fail")
		}
		u.placeholder = new i("%%", {
			startsExpr: !0
		});

		function Oe(e, t) {
			return e.some(e => Array.isArray(e) ? e[0] === t : e === t)
		}

		function we(e, t, n) {
			const r = e.find(e => Array.isArray(e) ? e[0] === t : e === t);
			return r && Array.isArray(r) ? r[1][n] : null
		}
		const Fe = ["minimal", "smart", "fsharp"];
		const _e = {
				estree: e => (class extends e {
					estreeParseRegExpLiteral({
						pattern: e,
						flags: t
					}) {
						let n = null;
						try {
							n = new RegExp(e, t)
						} catch (e) {}
						const r = this.estreeParseLiteral(n);
						return r.regex = {
							pattern: e,
							flags: t
						}, r
					}
					estreeParseLiteral(e) {
						return this.parseLiteral(e, "Literal")
					}
					directiveToStmt(e) {
						const t = e.value,
							n = this.startNodeAt(e.start, e.loc.start),
							r = this.startNodeAt(t.start, t.loc.start);
						return r.value = t.value, r.raw = t.extra.raw, n.expression = this.finishNodeAt(r, "Literal", t.end, t.loc.end), n.directive = t.extra.raw.slice(1, -1), this.finishNodeAt(n, "ExpressionStatement", e.end, e.loc.end)
					}
					initFunction(e, t) {
						super.initFunction(e, t), e.expression = !1
					}
					checkDeclaration(e) {
						X(e) ? this.checkDeclaration(e.value) : super.checkDeclaration(e)
					}
					checkGetterSetterParams(e) {
						const t = e,
							n = "get" === t.kind ? 0 : 1,
							r = t.start;
						t.value.params.length !== n && ("get" === t.kind ? this.raise(r, "getter must not have any formal parameters") : this.raise(r, "setter must have exactly one formal parameter")), "set" === t.kind && "RestElement" === t.value.params[0].type && this.raise(r, "setter function argument must not be a rest parameter")
					}
					checkLVal(e, t = j, n, r) {
						switch (e.type) {
							case "ObjectPattern":
								e.properties.forEach(e => {
									this.checkLVal("Property" === e.type ? e.value : e, t, n, "object destructuring pattern")
								});
								break;
							default:
								super.checkLVal(e, t, n, r)
						}
					}
					checkPropClash(e, t) {
						if ("SpreadElement" === e.type || e.computed || e.method || e.shorthand) return;
						const n = e.key;
						"__proto__" === ("Identifier" === n.type ? n.name : String(n.value)) && "init" === e.kind && (t.proto && this.raise(n.start, "Redefinition of __proto__ property"), t.proto = !0)
					}
					isStrictBody(e) {
						if ("BlockStatement" === e.body.type && e.body.body.length > 0)
							for (let t = 0, n = e.body.body; t < n.length; t++) {
								const e = n[t];
								if ("ExpressionStatement" !== e.type || "Literal" !== e.expression.type) break;
								if ("use strict" === e.expression.value) return !0
							}
						return !1
					}
					isValidDirective(e) {
						return !("ExpressionStatement" !== e.type || "Literal" !== e.expression.type || "string" != typeof e.expression.value || e.expression.extra && e.expression.extra.parenthesized)
					}
					stmtToDirective(e) {
						const t = super.stmtToDirective(e),
							n = e.expression.value;
						return t.value.value = n, t
					}
					parseBlockBody(e, t, n, r) {
						super.parseBlockBody(e, t, n, r);
						const i = e.directives.map(e => this.directiveToStmt(e));
						e.body = i.concat(e.body), delete e.directives
					}
					pushClassMethod(e, t, n, r, i, s) {
						this.parseMethod(t, n, r, i, s, "ClassMethod", !0), t.typeParameters && (t.value.typeParameters = t.typeParameters, delete t.typeParameters), e.body.push(t)
					}
					parseExprAtom(e) {
						switch (this.state.type) {
							case u.regexp:
								return this.estreeParseRegExpLiteral(this.state.value);
							case u.num:
							case u.string:
								return this.estreeParseLiteral(this.state.value);
							case u._null:
								return this.estreeParseLiteral(null);
							case u._true:
								return this.estreeParseLiteral(!0);
							case u._false:
								return this.estreeParseLiteral(!1);
							default:
								return super.parseExprAtom(e)
						}
					}
					parseLiteral(e, t, n, r) {
						const i = super.parseLiteral(e, t, n, r);
						return i.raw = i.extra.raw, delete i.extra, i
					}
					parseFunctionBody(e, t, n = !1) {
						super.parseFunctionBody(e, t, n), e.expression = "BlockStatement" !== e.body.type
					}
					parseMethod(e, t, n, r, i, s, o = !1) {
						let a = this.startNode();
						return a.kind = e.kind, (a = super.parseMethod(a, t, n, r, i, s, o)).type = "FunctionExpression", delete a.kind, e.value = a, s = "ClassMethod" === s ? "MethodDefinition" : s, this.finishNode(e, s)
					}
					parseObjectMethod(e, t, n, r, i) {
						const s = super.parseObjectMethod(e, t, n, r, i);
						return s && (s.type = "Property", "method" === s.kind && (s.kind = "init"), s.shorthand = !1), s
					}
					parseObjectProperty(e, t, n, r, i) {
						const s = super.parseObjectProperty(e, t, n, r, i);
						return s && (s.kind = "init", s.type = "Property"), s
					}
					toAssignable(e, t, n) {
						return X(e) ? (this.toAssignable(e.value, t, n), e) : super.toAssignable(e, t, n)
					}
					toAssignableObjectExpressionProp(e, t, n) {
						"get" === e.kind || "set" === e.kind ? this.raise(e.key.start, "Object pattern can't contain getter or setter") : e.method ? this.raise(e.key.start, "Object pattern can't contain methods") : super.toAssignableObjectExpressionProp(e, t, n)
					}
				}),
				jsx: e => (class extends e {
					jsxReadToken() {
						let e = "",
							t = this.state.pos;
						for (;;) {
							this.state.pos >= this.length && this.raise(this.state.start, "Unterminated JSX contents");
							const n = this.input.charCodeAt(this.state.pos);
							switch (n) {
								case 60:
								case 123:
									return this.state.pos === this.state.start ? 60 === n && this.state.exprAllowed ? (++this.state.pos, this.finishToken(u.jsxTagStart)) : super.getTokenFromCode(n) : (e += this.input.slice(t, this.state.pos), this.finishToken(u.jsxText, e));
								case 38:
									e += this.input.slice(t, this.state.pos), e += this.jsxReadEntity(), t = this.state.pos;
									break;
								default:
									K(n) ? (e += this.input.slice(t, this.state.pos), e += this.jsxReadNewLine(!0), t = this.state.pos) : ++this.state.pos
							}
						}
					}
					jsxReadNewLine(e) {
						const t = this.input.charCodeAt(this.state.pos);
						let n;
						return ++this.state.pos, 13 === t && 10 === this.input.charCodeAt(this.state.pos) ? (++this.state.pos, n = e ? "\n" : "\r\n") : n = String.fromCharCode(t), ++this.state.curLine, this.state.lineStart = this.state.pos, n
					}
					jsxReadString(e) {
						let t = "",
							n = ++this.state.pos;
						for (;;) {
							this.state.pos >= this.length && this.raise(this.state.start, "Unterminated string constant");
							const r = this.input.charCodeAt(this.state.pos);
							if (r === e) break;
							38 === r ? (t += this.input.slice(n, this.state.pos), t += this.jsxReadEntity(), n = this.state.pos) : K(r) ? (t += this.input.slice(n, this.state.pos), t += this.jsxReadNewLine(!1), n = this.state.pos) : ++this.state.pos
						}
						return t += this.input.slice(n, this.state.pos++), this.finishToken(u.string, t)
					}
					jsxReadEntity() {
						let e, t = "",
							n = 0,
							r = this.input[this.state.pos];
						const i = ++this.state.pos;
						for (; this.state.pos < this.length && n++ < 10;) {
							if (";" === (r = this.input[this.state.pos++])) {
								"#" === t[0] ? "x" === t[1] ? (t = t.substr(2), Ee.test(t) && (e = String.fromCodePoint(parseInt(t, 16)))) : (t = t.substr(1), Te.test(t) && (e = String.fromCodePoint(parseInt(t, 10)))) : e = ge[t];
								break
							}
							t += r
						}
						return e || (this.state.pos = i, "&")
					}
					jsxReadWord() {
						let e;
						const t = this.state.pos;
						do {
							e = this.input.charCodeAt(++this.state.pos)
						} while (pe(e) || 45 === e);
						return this.finishToken(u.jsxName, this.input.slice(t, this.state.pos))
					}
					jsxParseIdentifier() {
						const e = this.startNode();
						return this.match(u.jsxName) ? e.name = this.state.value : this.state.type.keyword ? e.name = this.state.type.keyword : this.unexpected(), this.next(), this.finishNode(e, "JSXIdentifier")
					}
					jsxParseNamespacedName() {
						const e = this.state.start,
							t = this.state.startLoc,
							n = this.jsxParseIdentifier();
						if (!this.eat(u.colon)) return n;
						const r = this.startNodeAt(e, t);
						return r.namespace = n, r.name = this.jsxParseIdentifier(), this.finishNode(r, "JSXNamespacedName")
					}
					jsxParseElementName() {
						const e = this.state.start,
							t = this.state.startLoc;
						let n = this.jsxParseNamespacedName();
						for (; this.eat(u.dot);) {
							const r = this.startNodeAt(e, t);
							r.object = n, r.property = this.jsxParseIdentifier(), n = this.finishNode(r, "JSXMemberExpression")
						}
						return n
					}
					jsxParseAttributeValue() {
						let e;
						switch (this.state.type) {
							case u.braceL:
								if (e = this.startNode(), this.next(), "JSXEmptyExpression" === (e = this.jsxParseExpressionContainer(e)).expression.type) throw this.raise(e.start, "JSX attributes must only be assigned a non-empty expression");
								return e;
							case u.jsxTagStart:
							case u.string:
								return this.parseExprAtom();
							default:
								throw this.raise(this.state.start, "JSX value should be either an expression or a quoted JSX text")
						}
					}
					jsxParseEmptyExpression() {
						const e = this.startNodeAt(this.state.lastTokEnd, this.state.lastTokEndLoc);
						return this.finishNodeAt(e, "JSXEmptyExpression", this.state.start, this.state.startLoc)
					}
					jsxParseSpreadChild(e) {
						return this.next(), e.expression = this.parseExpression(), this.expect(u.braceR), this.finishNode(e, "JSXSpreadChild")
					}
					jsxParseExpressionContainer(e) {
						return this.match(u.braceR) ? e.expression = this.jsxParseEmptyExpression() : e.expression = this.parseExpression(), this.expect(u.braceR), this.finishNode(e, "JSXExpressionContainer")
					}
					jsxParseAttribute() {
						const e = this.startNode();
						return this.eat(u.braceL) ? (this.expect(u.ellipsis), e.argument = this.parseMaybeAssign(), this.expect(u.braceR), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsxParseNamespacedName(), e.value = this.eat(u.eq) ? this.jsxParseAttributeValue() : null, this.finishNode(e, "JSXAttribute"))
					}
					jsxParseOpeningElementAt(e, t) {
						const n = this.startNodeAt(e, t);
						return this.match(u.jsxTagEnd) ? (this.expect(u.jsxTagEnd), this.finishNode(n, "JSXOpeningFragment")) : (n.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(n))
					}
					jsxParseOpeningElementAfterName(e) {
						const t = [];
						for (; !this.match(u.slash) && !this.match(u.jsxTagEnd);) t.push(this.jsxParseAttribute());
						return e.attributes = t, e.selfClosing = this.eat(u.slash), this.expect(u.jsxTagEnd), this.finishNode(e, "JSXOpeningElement")
					}
					jsxParseClosingElementAt(e, t) {
						const n = this.startNodeAt(e, t);
						return this.match(u.jsxTagEnd) ? (this.expect(u.jsxTagEnd), this.finishNode(n, "JSXClosingFragment")) : (n.name = this.jsxParseElementName(), this.expect(u.jsxTagEnd), this.finishNode(n, "JSXClosingElement"))
					}
					jsxParseElementAt(e, t) {
						const n = this.startNodeAt(e, t),
							r = [],
							i = this.jsxParseOpeningElementAt(e, t);
						let s = null;
						if (!i.selfClosing) {
							e: for (;;) switch (this.state.type) {
								case u.jsxTagStart:
									if (e = this.state.start, t = this.state.startLoc, this.next(), this.eat(u.slash)) {
										s = this.jsxParseClosingElementAt(e, t);
										break e
									}
									r.push(this.jsxParseElementAt(e, t));
									break;
								case u.jsxText:
									r.push(this.parseExprAtom());
									break;
								case u.braceL:
									{
										const e = this.startNode();this.next(),
										this.match(u.ellipsis) ? r.push(this.jsxParseSpreadChild(e)) : r.push(this.jsxParseExpressionContainer(e));
										break
									}
								default:
									throw this.unexpected()
							}
							Ae(i) && !Ae(s) ? this.raise(s.start, "Expected corresponding JSX closing tag for <>") : !Ae(i) && Ae(s) ? this.raise(s.start, "Expected corresponding JSX closing tag for <" + Se(i.name) + ">") : Ae(i) || Ae(s) || Se(s.name) !== Se(i.name) && this.raise(s.start, "Expected corresponding JSX closing tag for <" + Se(i.name) + ">")
						}
						return Ae(i) ? (n.openingFragment = i, n.closingFragment = s) : (n.openingElement = i, n.closingElement = s), n.children = r, this.match(u.relational) && "<" === this.state.value && this.raise(this.state.start, "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"), Ae(i) ? this.finishNode(n, "JSXFragment") : this.finishNode(n, "JSXElement")
					}
					jsxParseElement() {
						const e = this.state.start,
							t = this.state.startLoc;
						return this.next(), this.jsxParseElementAt(e, t)
					}
					parseExprAtom(e) {
						return this.match(u.jsxText) ? this.parseLiteral(this.state.value, "JSXText") : this.match(u.jsxTagStart) ? this.jsxParseElement() : this.isRelational("<") && 33 !== this.input.charCodeAt(this.state.pos) ? (this.finishToken(u.jsxTagStart), this.jsxParseElement()) : super.parseExprAtom(e)
					}
					getTokenFromCode(e) {
						if (this.state.inPropertyName) return super.getTokenFromCode(e);
						const t = this.curContext();
						if (t === H.j_expr) return this.jsxReadToken();
						if (t === H.j_oTag || t === H.j_cTag) {
							if (le(e)) return this.jsxReadWord();
							if (62 === e) return ++this.state.pos, this.finishToken(u.jsxTagEnd);
							if ((34 === e || 39 === e) && t === H.j_oTag) return this.jsxReadString(e)
						}
						return 60 === e && this.state.exprAllowed && 33 !== this.input.charCodeAt(this.state.pos + 1) ? (++this.state.pos, this.finishToken(u.jsxTagStart)) : super.getTokenFromCode(e)
					}
					updateContext(e) {
						if (this.match(u.braceL)) {
							const t = this.curContext();
							t === H.j_oTag ? this.state.context.push(H.braceExpression) : t === H.j_expr ? this.state.context.push(H.templateQuasi) : super.updateContext(e), this.state.exprAllowed = !0
						} else {
							if (!this.match(u.slash) || e !== u.jsxTagStart) return super.updateContext(e);
							this.state.context.length -= 2, this.state.context.push(H.j_cTag), this.state.exprAllowed = !1
						}
					}
				}),
				flow: e => (class extends e {
					constructor(e, t) {
						super(e, t), this.flowPragma = void 0
					}
					shouldParseTypes() {
						return this.getPluginOption("flow", "all") || "flow" === this.flowPragma
					}
					finishToken(e, t) {
						return e !== u.string && e !== u.semi && e !== u.interpreterDirective && void 0 === this.flowPragma && (this.flowPragma = null), super.finishToken(e, t)
					}
					addComment(e) {
						if (void 0 === this.flowPragma) {
							const t = me.exec(e.value);
							if (t)
								if ("flow" === t[1]) this.flowPragma = "flow";
								else {
									if ("noflow" !== t[1]) throw new Error("Unexpected flow pragma");
									this.flowPragma = "noflow"
								}
						}
						return super.addComment(e)
					}
					flowParseTypeInitialiser(e) {
						const t = this.state.inType;
						this.state.inType = !0, this.expect(e || u.colon);
						const n = this.flowParseType();
						return this.state.inType = t, n
					}
					flowParsePredicate() {
						const e = this.startNode(),
							t = this.state.startLoc,
							n = this.state.start;
						this.expect(u.modulo);
						const r = this.state.startLoc;
						return this.expectContextual("checks"), t.line === r.line && t.column === r.column - 1 || this.raise(n, "Spaces between ´%´ and ´checks´ are not allowed here."), this.eat(u.parenL) ? (e.value = this.parseExpression(), this.expect(u.parenR), this.finishNode(e, "DeclaredPredicate")) : this.finishNode(e, "InferredPredicate")
					}
					flowParseTypeAndPredicateInitialiser() {
						const e = this.state.inType;
						this.state.inType = !0, this.expect(u.colon);
						let t = null,
							n = null;
						return this.match(u.modulo) ? (this.state.inType = e, n = this.flowParsePredicate()) : (t = this.flowParseType(), this.state.inType = e, this.match(u.modulo) && (n = this.flowParsePredicate())), [t, n]
					}
					flowParseDeclareClass(e) {
						return this.next(), this.flowParseInterfaceish(e, !0), this.finishNode(e, "DeclareClass")
					}
					flowParseDeclareFunction(e) {
						this.next();
						const t = e.id = this.parseIdentifier(),
							n = this.startNode(),
							r = this.startNode();
						this.isRelational("<") ? n.typeParameters = this.flowParseTypeParameterDeclaration() : n.typeParameters = null, this.expect(u.parenL);
						const i = this.flowParseFunctionTypeParams();
						return n.params = i.params, n.rest = i.rest, this.expect(u.parenR), [n.returnType, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), r.typeAnnotation = this.finishNode(n, "FunctionTypeAnnotation"), t.typeAnnotation = this.finishNode(r, "TypeAnnotation"), this.resetEndLocation(t), this.semicolon(), this.finishNode(e, "DeclareFunction")
					}
					flowParseDeclare(e, t) {
						if (this.match(u._class)) return this.flowParseDeclareClass(e);
						if (this.match(u._function)) return this.flowParseDeclareFunction(e);
						if (this.match(u._var)) return this.flowParseDeclareVariable(e);
						if (this.eatContextual("module")) return this.match(u.dot) ? this.flowParseDeclareModuleExports(e) : (t && this.unexpected(this.state.lastTokStart, "`declare module` cannot be used inside another `declare module`"), this.flowParseDeclareModule(e));
						if (this.isContextual("type")) return this.flowParseDeclareTypeAlias(e);
						if (this.isContextual("opaque")) return this.flowParseDeclareOpaqueType(e);
						if (this.isContextual("interface")) return this.flowParseDeclareInterface(e);
						if (this.match(u._export)) return this.flowParseDeclareExportDeclaration(e, t);
						throw this.unexpected()
					}
					flowParseDeclareVariable(e) {
						return this.next(), e.id = this.flowParseTypeAnnotatableIdentifier(!0), this.semicolon(), this.finishNode(e, "DeclareVariable")
					}
					flowParseDeclareModule(e) {
						this.scope.enter(c), this.match(u.string) ? e.id = this.parseExprAtom() : e.id = this.parseIdentifier();
						const t = e.body = this.startNode(),
							n = t.body = [];
						for (this.expect(u.braceL); !this.match(u.braceR);) {
							let e = this.startNode();
							this.match(u._import) ? (this.next(), this.isContextual("type") || this.match(u._typeof) || this.unexpected(this.state.lastTokStart, "Imports within a `declare module` body must always be `import type` or `import typeof`"), this.parseImport(e)) : (this.expectContextual("declare", "Only declares and type imports are allowed inside declare module"), e = this.flowParseDeclare(e, !0)), n.push(e)
						}
						this.scope.exit(), this.expect(u.braceR), this.finishNode(t, "BlockStatement");
						let r = null,
							i = !1;
						const s = "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module";
						return n.forEach(e => {
							! function (e) {
								return "DeclareExportAllDeclaration" === e.type || "DeclareExportDeclaration" === e.type && (!e.declaration || "TypeAlias" !== e.declaration.type && "InterfaceDeclaration" !== e.declaration.type)
							}(e) ? "DeclareModuleExports" === e.type && (i && this.unexpected(e.start, "Duplicate `declare module.exports` statement"), "ES" === r && this.unexpected(e.start, s), r = "CommonJS", i = !0): ("CommonJS" === r && this.unexpected(e.start, s), r = "ES")
						}), e.kind = r || "CommonJS", this.finishNode(e, "DeclareModule")
					}
					flowParseDeclareExportDeclaration(e, t) {
						if (this.expect(u._export), this.eat(u._default)) return this.match(u._function) || this.match(u._class) ? e.declaration = this.flowParseDeclare(this.startNode()) : (e.declaration = this.flowParseType(), this.semicolon()), e.default = !0, this.finishNode(e, "DeclareExportDeclaration");
						if (this.match(u._const) || this.isLet() || (this.isContextual("type") || this.isContextual("interface")) && !t) {
							const e = this.state.value,
								t = ye[e];
							this.unexpected(this.state.start, `\`declare export ${e}\` is not supported. Use \`${t}\` instead`)
						}
						if (this.match(u._var) || this.match(u._function) || this.match(u._class) || this.isContextual("opaque")) return e.declaration = this.flowParseDeclare(this.startNode()), e.default = !1, this.finishNode(e, "DeclareExportDeclaration");
						if (this.match(u.star) || this.match(u.braceL) || this.isContextual("interface") || this.isContextual("type") || this.isContextual("opaque")) return "ExportNamedDeclaration" === (e = this.parseExport(e)).type && (e.type = "ExportDeclaration", e.default = !1, delete e.exportKind), e.type = "Declare" + e.type, e;
						throw this.unexpected()
					}
					flowParseDeclareModuleExports(e) {
						return this.next(), this.expectContextual("exports"), e.typeAnnotation = this.flowParseTypeAnnotation(), this.semicolon(), this.finishNode(e, "DeclareModuleExports")
					}
					flowParseDeclareTypeAlias(e) {
						return this.next(), this.flowParseTypeAlias(e), e.type = "DeclareTypeAlias", e
					}
					flowParseDeclareOpaqueType(e) {
						return this.next(), this.flowParseOpaqueType(e, !0), e.type = "DeclareOpaqueType", e
					}
					flowParseDeclareInterface(e) {
						return this.next(), this.flowParseInterfaceish(e), this.finishNode(e, "DeclareInterface")
					}
					flowParseInterfaceish(e, t = !1) {
						if (e.id = this.flowParseRestrictedIdentifier(!t), this.isRelational("<") ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.extends = [], e.implements = [], e.mixins = [], this.eat(u._extends))
							do {
								e.extends.push(this.flowParseInterfaceExtends())
							} while (!t && this.eat(u.comma));
						if (this.isContextual("mixins")) {
							this.next();
							do {
								e.mixins.push(this.flowParseInterfaceExtends())
							} while (this.eat(u.comma))
						}
						if (this.isContextual("implements")) {
							this.next();
							do {
								e.implements.push(this.flowParseInterfaceExtends())
							} while (this.eat(u.comma))
						}
						e.body = this.flowParseObjectType({
							allowStatic: t,
							allowExact: !1,
							allowSpread: !1,
							allowProto: t,
							allowInexact: !1
						})
					}
					flowParseInterfaceExtends() {
						const e = this.startNode();
						return e.id = this.flowParseQualifiedTypeIdentifier(), this.isRelational("<") ? e.typeParameters = this.flowParseTypeParameterInstantiation() : e.typeParameters = null, this.finishNode(e, "InterfaceExtends")
					}
					flowParseInterface(e) {
						return this.flowParseInterfaceish(e), this.finishNode(e, "InterfaceDeclaration")
					}
					checkNotUnderscore(e) {
						if ("_" === e) throw this.unexpected(null, "`_` is only allowed as a type argument to call or new")
					}
					checkReservedType(e, t) {
						he.indexOf(e) > -1 && this.raise(t, `Cannot overwrite reserved type ${e}`)
					}
					flowParseRestrictedIdentifier(e) {
						return this.checkReservedType(this.state.value, this.state.start), this.parseIdentifier(e)
					}
					flowParseTypeAlias(e) {
						return e.id = this.flowParseRestrictedIdentifier(), this.scope.declareName(e.id.name, _, e.id.start), this.isRelational("<") ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.right = this.flowParseTypeInitialiser(u.eq), this.semicolon(), this.finishNode(e, "TypeAlias")
					}
					flowParseOpaqueType(e, t) {
						return this.expectContextual("type"), e.id = this.flowParseRestrictedIdentifier(!0), this.scope.declareName(e.id.name, _, e.id.start), this.isRelational("<") ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.supertype = null, this.match(u.colon) && (e.supertype = this.flowParseTypeInitialiser(u.colon)), e.impltype = null, t || (e.impltype = this.flowParseTypeInitialiser(u.eq)), this.semicolon(), this.finishNode(e, "OpaqueType")
					}
					flowParseTypeParameter(e = !1) {
						const t = this.state.start,
							n = this.startNode(),
							r = this.flowParseVariance(),
							i = this.flowParseTypeAnnotatableIdentifier();
						return n.name = i.name, n.variance = r, n.bound = i.typeAnnotation, this.match(u.eq) ? (this.eat(u.eq), n.default = this.flowParseType()) : e && this.unexpected(t, "Type parameter declaration needs a default, since a preceding type parameter declaration has a default."), this.finishNode(n, "TypeParameter")
					}
					flowParseTypeParameterDeclaration() {
						const e = this.state.inType,
							t = this.startNode();
						t.params = [], this.state.inType = !0, this.isRelational("<") || this.match(u.jsxTagStart) ? this.next() : this.unexpected();
						let n = !1;
						do {
							const e = this.flowParseTypeParameter(n);
							t.params.push(e), e.default && (n = !0), this.isRelational(">") || this.expect(u.comma)
						} while (!this.isRelational(">"));
						return this.expectRelational(">"), this.state.inType = e, this.finishNode(t, "TypeParameterDeclaration")
					}
					flowParseTypeParameterInstantiation() {
						const e = this.startNode(),
							t = this.state.inType;
						e.params = [], this.state.inType = !0, this.expectRelational("<");
						const n = this.state.noAnonFunctionType;
						for (this.state.noAnonFunctionType = !1; !this.isRelational(">");) e.params.push(this.flowParseType()), this.isRelational(">") || this.expect(u.comma);
						return this.state.noAnonFunctionType = n, this.expectRelational(">"), this.state.inType = t, this.finishNode(e, "TypeParameterInstantiation")
					}
					flowParseTypeParameterInstantiationCallOrNew() {
						const e = this.startNode(),
							t = this.state.inType;
						for (e.params = [], this.state.inType = !0, this.expectRelational("<"); !this.isRelational(">");) e.params.push(this.flowParseTypeOrImplicitInstantiation()), this.isRelational(">") || this.expect(u.comma);
						return this.expectRelational(">"), this.state.inType = t, this.finishNode(e, "TypeParameterInstantiation")
					}
					flowParseInterfaceType() {
						const e = this.startNode();
						if (this.expectContextual("interface"), e.extends = [], this.eat(u._extends))
							do {
								e.extends.push(this.flowParseInterfaceExtends())
							} while (this.eat(u.comma));
						return e.body = this.flowParseObjectType({
							allowStatic: !1,
							allowExact: !1,
							allowSpread: !1,
							allowProto: !1,
							allowInexact: !1
						}), this.finishNode(e, "InterfaceTypeAnnotation")
					}
					flowParseObjectPropertyKey() {
						return this.match(u.num) || this.match(u.string) ? this.parseExprAtom() : this.parseIdentifier(!0)
					}
					flowParseObjectTypeIndexer(e, t, n) {
						return e.static = t, this.lookahead().type === u.colon ? (e.id = this.flowParseObjectPropertyKey(), e.key = this.flowParseTypeInitialiser()) : (e.id = null, e.key = this.flowParseType()), this.expect(u.bracketR), e.value = this.flowParseTypeInitialiser(), e.variance = n, this.finishNode(e, "ObjectTypeIndexer")
					}
					flowParseObjectTypeInternalSlot(e, t) {
						return e.static = t, e.id = this.flowParseObjectPropertyKey(), this.expect(u.bracketR), this.expect(u.bracketR), this.isRelational("<") || this.match(u.parenL) ? (e.method = !0, e.optional = !1, e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.start, e.loc.start))) : (e.method = !1, this.eat(u.question) && (e.optional = !0), e.value = this.flowParseTypeInitialiser()), this.finishNode(e, "ObjectTypeInternalSlot")
					}
					flowParseObjectTypeMethodish(e) {
						for (e.params = [], e.rest = null, e.typeParameters = null, this.isRelational("<") && (e.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(u.parenL); !this.match(u.parenR) && !this.match(u.ellipsis);) e.params.push(this.flowParseFunctionTypeParam()), this.match(u.parenR) || this.expect(u.comma);
						return this.eat(u.ellipsis) && (e.rest = this.flowParseFunctionTypeParam()), this.expect(u.parenR), e.returnType = this.flowParseTypeInitialiser(), this.finishNode(e, "FunctionTypeAnnotation")
					}
					flowParseObjectTypeCallProperty(e, t) {
						const n = this.startNode();
						return e.static = t, e.value = this.flowParseObjectTypeMethodish(n), this.finishNode(e, "ObjectTypeCallProperty")
					}
					flowParseObjectType({
						allowStatic: e,
						allowExact: t,
						allowSpread: n,
						allowProto: r,
						allowInexact: i
					}) {
						const s = this.state.inType;
						this.state.inType = !0;
						const o = this.startNode();
						let a, c;
						o.callProperties = [], o.properties = [], o.indexers = [], o.internalSlots = [];
						let l = !1;
						for (t && this.match(u.braceBarL) ? (this.expect(u.braceBarL), a = u.braceBarR, c = !0) : (this.expect(u.braceL), a = u.braceR, c = !1), o.exact = c; !this.match(a);) {
							let t = !1,
								s = null;
							const a = this.startNode();
							if (r && this.isContextual("proto")) {
								const t = this.lookahead();
								t.type !== u.colon && t.type !== u.question && (this.next(), s = this.state.start, e = !1)
							}
							if (e && this.isContextual("static")) {
								const e = this.lookahead();
								e.type !== u.colon && e.type !== u.question && (this.next(), t = !0)
							}
							const c = this.flowParseVariance();
							if (this.eat(u.bracketL)) null != s && this.unexpected(s), this.eat(u.bracketL) ? (c && this.unexpected(c.start), o.internalSlots.push(this.flowParseObjectTypeInternalSlot(a, t))) : o.indexers.push(this.flowParseObjectTypeIndexer(a, t, c));
							else if (this.match(u.parenL) || this.isRelational("<")) null != s && this.unexpected(s), c && this.unexpected(c.start), o.callProperties.push(this.flowParseObjectTypeCallProperty(a, t));
							else {
								let e = "init";
								if (this.isContextual("get") || this.isContextual("set")) {
									const t = this.lookahead();
									t.type !== u.name && t.type !== u.string && t.type !== u.num || (e = this.state.value, this.next())
								}
								const r = this.flowParseObjectTypeProperty(a, t, s, c, e, n, i);
								null === r ? l = !0 : o.properties.push(r)
							}
							this.flowObjectTypeSemicolon()
						}
						this.expect(a), n && (o.inexact = l);
						const p = this.finishNode(o, "ObjectTypeAnnotation");
						return this.state.inType = s, p
					}
					flowParseObjectTypeProperty(e, t, n, r, i, s, o) {
						if (this.match(u.ellipsis)) {
							s || this.unexpected(null, "Spread operator cannot appear in class or interface definitions"), null != n && this.unexpected(n), r && this.unexpected(r.start, "Spread properties cannot have variance"), this.expect(u.ellipsis);
							const t = this.eat(u.comma) || this.eat(u.semi);
							if (this.match(u.braceR)) {
								if (o) return null;
								this.unexpected(null, "Explicit inexact syntax is only allowed inside inexact objects")
							}
							return this.match(u.braceBarR) && this.unexpected(null, "Explicit inexact syntax cannot appear inside an explicit exact object type"), t && this.unexpected(null, "Explicit inexact syntax must appear at the end of an inexact object"), e.argument = this.flowParseType(), this.finishNode(e, "ObjectTypeSpreadProperty")
						} {
							e.key = this.flowParseObjectPropertyKey(), e.static = t, e.proto = null != n, e.kind = i;
							let s = !1;
							return this.isRelational("<") || this.match(u.parenL) ? (e.method = !0, null != n && this.unexpected(n), r && this.unexpected(r.start), e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.start, e.loc.start)), "get" !== i && "set" !== i || this.flowCheckGetterSetterParams(e)) : ("init" !== i && this.unexpected(), e.method = !1, this.eat(u.question) && (s = !0), e.value = this.flowParseTypeInitialiser(), e.variance = r), e.optional = s, this.finishNode(e, "ObjectTypeProperty")
						}
					}
					flowCheckGetterSetterParams(e) {
						const t = "get" === e.kind ? 0 : 1,
							n = e.start;
						e.value.params.length + (e.value.rest ? 1 : 0) !== t && ("get" === e.kind ? this.raise(n, "getter must not have any formal parameters") : this.raise(n, "setter must have exactly one formal parameter")), "set" === e.kind && e.value.rest && this.raise(n, "setter function argument must not be a rest parameter")
					}
					flowObjectTypeSemicolon() {
						this.eat(u.semi) || this.eat(u.comma) || this.match(u.braceR) || this.match(u.braceBarR) || this.unexpected()
					}
					flowParseQualifiedTypeIdentifier(e, t, n) {
						e = e || this.state.start, t = t || this.state.startLoc;
						let r = n || this.parseIdentifier();
						for (; this.eat(u.dot);) {
							const n = this.startNodeAt(e, t);
							n.qualification = r, n.id = this.parseIdentifier(), r = this.finishNode(n, "QualifiedTypeIdentifier")
						}
						return r
					}
					flowParseGenericType(e, t, n) {
						const r = this.startNodeAt(e, t);
						return r.typeParameters = null, r.id = this.flowParseQualifiedTypeIdentifier(e, t, n), this.isRelational("<") && (r.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(r, "GenericTypeAnnotation")
					}
					flowParseTypeofType() {
						const e = this.startNode();
						return this.expect(u._typeof), e.argument = this.flowParsePrimaryType(), this.finishNode(e, "TypeofTypeAnnotation")
					}
					flowParseTupleType() {
						const e = this.startNode();
						for (e.types = [], this.expect(u.bracketL); this.state.pos < this.length && !this.match(u.bracketR) && (e.types.push(this.flowParseType()), !this.match(u.bracketR));) this.expect(u.comma);
						return this.expect(u.bracketR), this.finishNode(e, "TupleTypeAnnotation")
					}
					flowParseFunctionTypeParam() {
						let e = null,
							t = !1,
							n = null;
						const r = this.startNode(),
							i = this.lookahead();
						return i.type === u.colon || i.type === u.question ? (e = this.parseIdentifier(), this.eat(u.question) && (t = !0), n = this.flowParseTypeInitialiser()) : n = this.flowParseType(), r.name = e, r.optional = t, r.typeAnnotation = n, this.finishNode(r, "FunctionTypeParam")
					}
					reinterpretTypeAsFunctionTypeParam(e) {
						const t = this.startNodeAt(e.start, e.loc.start);
						return t.name = null, t.optional = !1, t.typeAnnotation = e, this.finishNode(t, "FunctionTypeParam")
					}
					flowParseFunctionTypeParams(e = []) {
						let t = null;
						for (; !this.match(u.parenR) && !this.match(u.ellipsis);) e.push(this.flowParseFunctionTypeParam()), this.match(u.parenR) || this.expect(u.comma);
						return this.eat(u.ellipsis) && (t = this.flowParseFunctionTypeParam()), {
							params: e,
							rest: t
						}
					}
					flowIdentToTypeAnnotation(e, t, n, r) {
						switch (r.name) {
							case "any":
								return this.finishNode(n, "AnyTypeAnnotation");
							case "bool":
							case "boolean":
								return this.finishNode(n, "BooleanTypeAnnotation");
							case "mixed":
								return this.finishNode(n, "MixedTypeAnnotation");
							case "empty":
								return this.finishNode(n, "EmptyTypeAnnotation");
							case "number":
								return this.finishNode(n, "NumberTypeAnnotation");
							case "string":
								return this.finishNode(n, "StringTypeAnnotation");
							default:
								return this.checkNotUnderscore(r.name), this.flowParseGenericType(e, t, r)
						}
					}
					flowParsePrimaryType() {
						const e = this.state.start,
							t = this.state.startLoc,
							n = this.startNode();
						let r, i, s = !1;
						const o = this.state.noAnonFunctionType;
						switch (this.state.type) {
							case u.name:
								return this.isContextual("interface") ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(e, t, n, this.parseIdentifier());
							case u.braceL:
								return this.flowParseObjectType({
									allowStatic: !1,
									allowExact: !1,
									allowSpread: !0,
									allowProto: !1,
									allowInexact: !0
								});
							case u.braceBarL:
								return this.flowParseObjectType({
									allowStatic: !1,
									allowExact: !0,
									allowSpread: !0,
									allowProto: !1,
									allowInexact: !1
								});
							case u.bracketL:
								return this.state.noAnonFunctionType = !1, i = this.flowParseTupleType(), this.state.noAnonFunctionType = o, i;
							case u.relational:
								if ("<" === this.state.value) return n.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(u.parenL), r = this.flowParseFunctionTypeParams(), n.params = r.params, n.rest = r.rest, this.expect(u.parenR), this.expect(u.arrow), n.returnType = this.flowParseType(), this.finishNode(n, "FunctionTypeAnnotation");
								break;
							case u.parenL:
								if (this.next(), !this.match(u.parenR) && !this.match(u.ellipsis))
									if (this.match(u.name)) {
										const e = this.lookahead().type;
										s = e !== u.question && e !== u.colon
									} else s = !0;
								if (s) {
									if (this.state.noAnonFunctionType = !1, i = this.flowParseType(), this.state.noAnonFunctionType = o, this.state.noAnonFunctionType || !(this.match(u.comma) || this.match(u.parenR) && this.lookahead().type === u.arrow)) return this.expect(u.parenR), i;
									this.eat(u.comma)
								}
								return r = i ? this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(i)]) : this.flowParseFunctionTypeParams(), n.params = r.params, n.rest = r.rest, this.expect(u.parenR), this.expect(u.arrow), n.returnType = this.flowParseType(), n.typeParameters = null, this.finishNode(n, "FunctionTypeAnnotation");
							case u.string:
								return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
							case u._true:
							case u._false:
								return n.value = this.match(u._true), this.next(), this.finishNode(n, "BooleanLiteralTypeAnnotation");
							case u.plusMin:
								if ("-" === this.state.value) {
									if (this.next(), this.match(u.num)) return this.parseLiteral(-this.state.value, "NumberLiteralTypeAnnotation", n.start, n.loc.start);
									if (this.match(u.bigint)) return this.parseLiteral(-this.state.value, "BigIntLiteralTypeAnnotation", n.start, n.loc.start);
									this.unexpected(null, 'Unexpected token, expected "number" or "bigint"')
								}
								this.unexpected();
							case u.num:
								return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
							case u.bigint:
								return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
							case u._void:
								return this.next(), this.finishNode(n, "VoidTypeAnnotation");
							case u._null:
								return this.next(), this.finishNode(n, "NullLiteralTypeAnnotation");
							case u._this:
								return this.next(), this.finishNode(n, "ThisTypeAnnotation");
							case u.star:
								return this.next(), this.finishNode(n, "ExistsTypeAnnotation");
							default:
								if ("typeof" === this.state.type.keyword) return this.flowParseTypeofType();
								if (this.state.type.keyword) {
									const e = this.state.type.label;
									return this.next(), super.createIdentifier(n, e)
								}
						}
						throw this.unexpected()
					}
					flowParsePostfixType() {
						const e = this.state.start,
							t = this.state.startLoc;
						let n = this.flowParsePrimaryType();
						for (; this.match(u.bracketL) && !this.canInsertSemicolon();) {
							const r = this.startNodeAt(e, t);
							r.elementType = n, this.expect(u.bracketL), this.expect(u.bracketR), n = this.finishNode(r, "ArrayTypeAnnotation")
						}
						return n
					}
					flowParsePrefixType() {
						const e = this.startNode();
						return this.eat(u.question) ? (e.typeAnnotation = this.flowParsePrefixType(), this.finishNode(e, "NullableTypeAnnotation")) : this.flowParsePostfixType()
					}
					flowParseAnonFunctionWithoutParens() {
						const e = this.flowParsePrefixType();
						if (!this.state.noAnonFunctionType && this.eat(u.arrow)) {
							const t = this.startNodeAt(e.start, e.loc.start);
							return t.params = [this.reinterpretTypeAsFunctionTypeParam(e)], t.rest = null, t.returnType = this.flowParseType(), t.typeParameters = null, this.finishNode(t, "FunctionTypeAnnotation")
						}
						return e
					}
					flowParseIntersectionType() {
						const e = this.startNode();
						this.eat(u.bitwiseAND);
						const t = this.flowParseAnonFunctionWithoutParens();
						for (e.types = [t]; this.eat(u.bitwiseAND);) e.types.push(this.flowParseAnonFunctionWithoutParens());
						return 1 === e.types.length ? t : this.finishNode(e, "IntersectionTypeAnnotation")
					}
					flowParseUnionType() {
						const e = this.startNode();
						this.eat(u.bitwiseOR);
						const t = this.flowParseIntersectionType();
						for (e.types = [t]; this.eat(u.bitwiseOR);) e.types.push(this.flowParseIntersectionType());
						return 1 === e.types.length ? t : this.finishNode(e, "UnionTypeAnnotation")
					}
					flowParseType() {
						const e = this.state.inType;
						this.state.inType = !0;
						const t = this.flowParseUnionType();
						return this.state.inType = e, this.state.exprAllowed = this.state.exprAllowed || this.state.noAnonFunctionType, t
					}
					flowParseTypeOrImplicitInstantiation() {
						if (this.state.type === u.name && "_" === this.state.value) {
							const e = this.state.start,
								t = this.state.startLoc,
								n = this.parseIdentifier();
							return this.flowParseGenericType(e, t, n)
						}
						return this.flowParseType()
					}
					flowParseTypeAnnotation() {
						const e = this.startNode();
						return e.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(e, "TypeAnnotation")
					}
					flowParseTypeAnnotatableIdentifier(e) {
						const t = e ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
						return this.match(u.colon) && (t.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(t)), t
					}
					typeCastToParameter(e) {
						return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.end, e.typeAnnotation.loc.end), e.expression
					}
					flowParseVariance() {
						let e = null;
						return this.match(u.plusMin) && (e = this.startNode(), "+" === this.state.value ? e.kind = "plus" : e.kind = "minus", this.next(), this.finishNode(e, "Variance")), e
					}
					parseFunctionBody(e, t, n = !1) {
						return t ? this.forwardNoArrowParamsConversionAt(e, () => super.parseFunctionBody(e, !0, n)) : super.parseFunctionBody(e, !1, n)
					}
					parseFunctionBodyAndFinish(e, t, n = !1) {
						if (this.match(u.colon)) {
							const t = this.startNode();
							[t.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), e.returnType = t.typeAnnotation ? this.finishNode(t, "TypeAnnotation") : null
						}
						super.parseFunctionBodyAndFinish(e, t, n)
					}
					parseStatement(e, t) {
						if (this.state.strict && this.match(u.name) && "interface" === this.state.value) {
							const e = this.startNode();
							return this.next(), this.flowParseInterface(e)
						} {
							const n = super.parseStatement(e, t);
							return void 0 !== this.flowPragma || this.isValidDirective(n) || (this.flowPragma = null), n
						}
					}
					parseExpressionStatement(e, t) {
						if ("Identifier" === t.type)
							if ("declare" === t.name) {
								if (this.match(u._class) || this.match(u.name) || this.match(u._function) || this.match(u._var) || this.match(u._export)) return this.flowParseDeclare(e)
							} else if (this.match(u.name)) {
							if ("interface" === t.name) return this.flowParseInterface(e);
							if ("type" === t.name) return this.flowParseTypeAlias(e);
							if ("opaque" === t.name) return this.flowParseOpaqueType(e, !1)
						}
						return super.parseExpressionStatement(e, t)
					}
					shouldParseExportDeclaration() {
						return this.isContextual("type") || this.isContextual("interface") || this.isContextual("opaque") || super.shouldParseExportDeclaration()
					}
					isExportDefaultSpecifier() {
						return (!this.match(u.name) || "type" !== this.state.value && "interface" !== this.state.value && "opaque" !== this.state.value) && super.isExportDefaultSpecifier()
					}
					parseConditional(e, t, n, r, i) {
						if (!this.match(u.question)) return e;
						if (i) {
							const s = this.state.clone();
							try {
								return super.parseConditional(e, t, n, r)
							} catch (t) {
								if (t instanceof SyntaxError) return this.state = s, i.start = t.pos || this.state.start, e;
								throw t
							}
						}
						this.expect(u.question);
						const s = this.state.clone(),
							o = this.state.noArrowAt,
							a = this.startNodeAt(n, r);
						let {
							consequent: c,
							failed: l
						} = this.tryParseConditionalConsequent(), [p, h] = this.getArrowLikeExpressions(c);
						if (l || h.length > 0) {
							const e = [...o];
							if (h.length > 0) {
								this.state = s, this.state.noArrowAt = e;
								for (let t = 0; t < h.length; t++) e.push(h[t].start);
								({
									consequent: c,
									failed: l
								} = this.tryParseConditionalConsequent()), [p, h] = this.getArrowLikeExpressions(c)
							}
							l && p.length > 1 && this.raise(s.start, "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate."), l && 1 === p.length && (this.state = s, this.state.noArrowAt = e.concat(p[0].start), ({
								consequent: c,
								failed: l
							} = this.tryParseConditionalConsequent())), this.getArrowLikeExpressions(c, !0)
						}
						return this.state.noArrowAt = o, this.expect(u.colon), a.test = e, a.consequent = c, a.alternate = this.forwardNoArrowParamsConversionAt(a, () => this.parseMaybeAssign(t, void 0, void 0, void 0)), this.finishNode(a, "ConditionalExpression")
					}
					tryParseConditionalConsequent() {
						this.state.noArrowParamsConversionAt.push(this.state.start);
						const e = this.parseMaybeAssign(),
							t = !this.match(u.colon);
						return this.state.noArrowParamsConversionAt.pop(), {
							consequent: e,
							failed: t
						}
					}
					getArrowLikeExpressions(e, t) {
						const n = [e],
							r = [];
						for (; 0 !== n.length;) {
							const e = n.pop();
							"ArrowFunctionExpression" === e.type ? (e.typeParameters || !e.returnType ? (this.toAssignableList(e.params, !0, "arrow function parameters"), this.scope.enter(A(!1, !1) | d), super.checkParams(e, !1, !0), this.scope.exit()) : r.push(e), n.push(e.body)) : "ConditionalExpression" === e.type && (n.push(e.consequent), n.push(e.alternate))
						}
						if (t) {
							for (let t = 0; t < r.length; t++) this.toAssignableList(e.params, !0, "arrow function parameters");
							return [r, []]
						}
						return function (e, t) {
							const n = [],
								r = [];
							for (let i = 0; i < e.length; i++)(t(e[i], i, e) ? n : r).push(e[i]);
							return [n, r]
						}(r, e => {
							try {
								return this.toAssignableList(e.params, !0, "arrow function parameters"), !0
							} catch (e) {
								return !1
							}
						})
					}
					forwardNoArrowParamsConversionAt(e, t) {
						let n;
						return -1 !== this.state.noArrowParamsConversionAt.indexOf(e.start) ? (this.state.noArrowParamsConversionAt.push(this.state.start), n = t(), this.state.noArrowParamsConversionAt.pop()) : n = t(), n
					}
					parseParenItem(e, t, n) {
						if (e = super.parseParenItem(e, t, n), this.eat(u.question) && (e.optional = !0, this.resetEndLocation(e)), this.match(u.colon)) {
							const r = this.startNodeAt(t, n);
							return r.expression = e, r.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(r, "TypeCastExpression")
						}
						return e
					}
					assertModuleNodeAllowed(e) {
						"ImportDeclaration" === e.type && ("type" === e.importKind || "typeof" === e.importKind) || "ExportNamedDeclaration" === e.type && "type" === e.exportKind || "ExportAllDeclaration" === e.type && "type" === e.exportKind || super.assertModuleNodeAllowed(e)
					}
					parseExport(e) {
						const t = super.parseExport(e);
						return "ExportNamedDeclaration" !== t.type && "ExportAllDeclaration" !== t.type || (t.exportKind = t.exportKind || "value"), t
					}
					parseExportDeclaration(e) {
						if (this.isContextual("type")) {
							e.exportKind = "type";
							const t = this.startNode();
							return this.next(), this.match(u.braceL) ? (e.specifiers = this.parseExportSpecifiers(), this.parseExportFrom(e), null) : this.flowParseTypeAlias(t)
						}
						if (this.isContextual("opaque")) {
							e.exportKind = "type";
							const t = this.startNode();
							return this.next(), this.flowParseOpaqueType(t, !1)
						}
						if (this.isContextual("interface")) {
							e.exportKind = "type";
							const t = this.startNode();
							return this.next(), this.flowParseInterface(t)
						}
						return super.parseExportDeclaration(e)
					}
					eatExportStar(e) {
						return !!super.eatExportStar(...arguments) || !(!this.isContextual("type") || this.lookahead().type !== u.star) && (e.exportKind = "type", this.next(), this.next(), !0)
					}
					maybeParseExportNamespaceSpecifier(e) {
						const t = this.state.start,
							n = super.maybeParseExportNamespaceSpecifier(e);
						return n && "type" === e.exportKind && this.unexpected(t), n
					}
					parseClassId(e, t, n) {
						super.parseClassId(e, t, n), this.isRelational("<") && (e.typeParameters = this.flowParseTypeParameterDeclaration())
					}
					getTokenFromCode(e) {
						const t = this.input.charCodeAt(this.state.pos + 1);
						return 123 === e && 124 === t ? this.finishOp(u.braceBarL, 2) : !this.state.inType || 62 !== e && 60 !== e ? function (e, t) {
							return 64 === e && 64 === t
						}(e, t) ? (this.state.isIterator = !0, super.readWord()) : super.getTokenFromCode(e) : this.finishOp(u.relational, 1)
					}
					toAssignable(e, t, n) {
						return "TypeCastExpression" === e.type ? super.toAssignable(this.typeCastToParameter(e), t, n) : super.toAssignable(e, t, n)
					}
					toAssignableList(e, t, n) {
						for (let t = 0; t < e.length; t++) {
							const n = e[t];
							n && "TypeCastExpression" === n.type && (e[t] = this.typeCastToParameter(n))
						}
						return super.toAssignableList(e, t, n)
					}
					toReferencedList(e, t) {
						for (let n = 0; n < e.length; n++) {
							const r = e[n];
							!r || "TypeCastExpression" !== r.type || r.extra && r.extra.parenthesized || !(e.length > 1) && t || this.raise(r.typeAnnotation.start, "The type cast expression is expected to be wrapped with parenthesis")
						}
						return e
					}
					checkLVal(e, t = j, n, r) {
						if ("TypeCastExpression" !== e.type) return super.checkLVal(e, t, n, r)
					}
					parseClassProperty(e) {
						return this.match(u.colon) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassProperty(e)
					}
					parseClassPrivateProperty(e) {
						return this.match(u.colon) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassPrivateProperty(e)
					}
					isClassMethod() {
						return this.isRelational("<") || super.isClassMethod()
					}
					isClassProperty() {
						return this.match(u.colon) || super.isClassProperty()
					}
					isNonstaticConstructor(e) {
						return !this.match(u.colon) && super.isNonstaticConstructor(e)
					}
					pushClassMethod(e, t, n, r, i, s) {
						t.variance && this.unexpected(t.variance.start), delete t.variance, this.isRelational("<") && (t.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassMethod(e, t, n, r, i, s)
					}
					pushClassPrivateMethod(e, t, n, r) {
						t.variance && this.unexpected(t.variance.start), delete t.variance, this.isRelational("<") && (t.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassPrivateMethod(e, t, n, r)
					}
					parseClassSuper(e) {
						if (super.parseClassSuper(e), e.superClass && this.isRelational("<") && (e.superTypeParameters = this.flowParseTypeParameterInstantiation()), this.isContextual("implements")) {
							this.next();
							const t = e.implements = [];
							do {
								const e = this.startNode();
								e.id = this.flowParseRestrictedIdentifier(!0), this.isRelational("<") ? e.typeParameters = this.flowParseTypeParameterInstantiation() : e.typeParameters = null, t.push(this.finishNode(e, "ClassImplements"))
							} while (this.eat(u.comma))
						}
					}
					parsePropertyName(e) {
						const t = this.flowParseVariance(),
							n = super.parsePropertyName(e);
						return e.variance = t, n
					}
					parseObjPropValue(e, t, n, r, i, s, o, a) {
						let c;
						e.variance && this.unexpected(e.variance.start), delete e.variance, this.isRelational("<") && (c = this.flowParseTypeParameterDeclaration(), this.match(u.parenL) || this.unexpected()), super.parseObjPropValue(e, t, n, r, i, s, o, a), c && ((e.value || e).typeParameters = c)
					}
					parseAssignableListItemTypes(e) {
						if (this.eat(u.question)) {
							if ("Identifier" !== e.type) throw this.raise(e.start, "A binding pattern parameter cannot be optional in an implementation signature.");
							e.optional = !0
						}
						return this.match(u.colon) && (e.typeAnnotation = this.flowParseTypeAnnotation()), this.resetEndLocation(e), e
					}
					parseMaybeDefault(e, t, n) {
						const r = super.parseMaybeDefault(e, t, n);
						return "AssignmentPattern" === r.type && r.typeAnnotation && r.right.start < r.typeAnnotation.start && this.raise(r.typeAnnotation.start, "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`"), r
					}
					shouldParseDefaultImport(e) {
						return fe(e) ? de(this.state) : super.shouldParseDefaultImport(e)
					}
					parseImportSpecifierLocal(e, t, n, r) {
						t.local = fe(e) ? this.flowParseRestrictedIdentifier(!0) : this.parseIdentifier(), this.checkLVal(t.local, _, void 0, r), e.specifiers.push(this.finishNode(t, n))
					}
					maybeParseDefaultImportSpecifier(e) {
						e.importKind = "value";
						let t = null;
						if (this.match(u._typeof) ? t = "typeof" : this.isContextual("type") && (t = "type"), t) {
							const n = this.lookahead();
							"type" === t && n.type === u.star && this.unexpected(n.start), (de(n) || n.type === u.braceL || n.type === u.star) && (this.next(), e.importKind = t)
						}
						return super.maybeParseDefaultImportSpecifier(e)
					}
					parseImportSpecifier(e) {
						const t = this.startNode(),
							n = this.state.start,
							r = this.parseIdentifier(!0);
						let i = null;
						"type" === r.name ? i = "type" : "typeof" === r.name && (i = "typeof");
						let s = !1;
						if (this.isContextual("as") && !this.isLookaheadContextual("as")) {
							const e = this.parseIdentifier(!0);
							null === i || this.match(u.name) || this.state.type.keyword ? (t.imported = r, t.importKind = null, t.local = this.parseIdentifier()) : (t.imported = e, t.importKind = i, t.local = e.__clone())
						} else null !== i && (this.match(u.name) || this.state.type.keyword) ? (t.imported = this.parseIdentifier(!0), t.importKind = i, this.eatContextual("as") ? t.local = this.parseIdentifier() : (s = !0, t.local = t.imported.__clone())) : (s = !0, t.imported = r, t.importKind = null, t.local = t.imported.__clone());
						const o = fe(e),
							a = fe(t);
						o && a && this.raise(n, "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements"), (o || a) && this.checkReservedType(t.local.name, t.local.start), !s || o || a || this.checkReservedWord(t.local.name, t.start, !0, !0), this.checkLVal(t.local, _, void 0, "import specifier"), e.specifiers.push(this.finishNode(t, "ImportSpecifier"))
					}
					parseFunctionParams(e, t) {
						const n = e.kind;
						"get" !== n && "set" !== n && this.isRelational("<") && (e.typeParameters = this.flowParseTypeParameterDeclaration()), super.parseFunctionParams(e, t)
					}
					parseVarId(e, t) {
						super.parseVarId(e, t), this.match(u.colon) && (e.id.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(e.id))
					}
					parseAsyncArrowFromCallExpression(e, t) {
						if (this.match(u.colon)) {
							const t = this.state.noAnonFunctionType;
							this.state.noAnonFunctionType = !0, e.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = t
						}
						return super.parseAsyncArrowFromCallExpression(e, t)
					}
					shouldParseAsyncArrow() {
						return this.match(u.colon) || super.shouldParseAsyncArrow()
					}
					parseMaybeAssign(e, t, n, r) {
						let i = null;
						if (this.hasPlugin("jsx") && (this.match(u.jsxTagStart) || this.isRelational("<"))) {
							const s = this.state.clone();
							try {
								return super.parseMaybeAssign(e, t, n, r)
							} catch (e) {
								if (!(e instanceof SyntaxError)) throw e; {
									this.state = s;
									const t = this.state.context.length;
									this.state.context[t - 1] === H.j_oTag && (this.state.context.length -= 2), i = e
								}
							}
						}
						if (null != i || this.isRelational("<")) {
							let s, o;
							try {
								o = this.flowParseTypeParameterDeclaration(), (s = this.forwardNoArrowParamsConversionAt(o, () => super.parseMaybeAssign(e, t, n, r))).typeParameters = o, this.resetStartLocationFromNode(s, o)
							} catch (e) {
								throw i || e
							}
							if ("ArrowFunctionExpression" === s.type) return s;
							if (null != i) throw i;
							this.raise(o.start, "Expected an arrow function after this type parameter declaration")
						}
						return super.parseMaybeAssign(e, t, n, r)
					}
					parseArrow(e) {
						if (this.match(u.colon)) {
							const t = this.state.clone();
							try {
								const n = this.state.noAnonFunctionType;
								this.state.noAnonFunctionType = !0;
								const r = this.startNode();
								[r.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), this.state.noAnonFunctionType = n, this.canInsertSemicolon() && this.unexpected(), this.match(u.arrow) || this.unexpected(), e.returnType = r.typeAnnotation ? this.finishNode(r, "TypeAnnotation") : null
							} catch (e) {
								if (!(e instanceof SyntaxError)) throw e;
								this.state = t
							}
						}
						return super.parseArrow(e)
					}
					shouldParseArrow() {
						return this.match(u.colon) || super.shouldParseArrow()
					}
					setArrowFunctionParameters(e, t) {
						-1 !== this.state.noArrowParamsConversionAt.indexOf(e.start) ? e.params = t : super.setArrowFunctionParameters(e, t)
					}
					checkParams(e, t, n) {
						if (!n || -1 === this.state.noArrowParamsConversionAt.indexOf(e.start)) return super.checkParams(e, t, n)
					}
					parseParenAndDistinguishExpression(e) {
						return super.parseParenAndDistinguishExpression(e && -1 === this.state.noArrowAt.indexOf(this.state.start))
					}
					parseSubscripts(e, t, n, r) {
						if ("Identifier" === e.type && "async" === e.name && -1 !== this.state.noArrowAt.indexOf(t)) {
							this.next();
							const r = this.startNodeAt(t, n);
							r.callee = e, r.arguments = this.parseCallExpressionArguments(u.parenR, !1), e = this.finishNode(r, "CallExpression")
						} else if ("Identifier" === e.type && "async" === e.name && this.isRelational("<")) {
							const i = this.state.clone();
							let s;
							try {
								const e = this.parseAsyncArrowWithTypeParameters(t, n);
								if (e) return e
							} catch (e) {
								s = e
							}
							this.state = i;
							try {
								return super.parseSubscripts(e, t, n, r)
							} catch (e) {
								throw s || e
							}
						}
						return super.parseSubscripts(e, t, n, r)
					}
					parseSubscript(e, t, n, r, i, s) {
						if (this.match(u.questionDot) && this.isLookaheadRelational("<")) {
							if (this.expectPlugin("optionalChaining"), i.optionalChainMember = !0, r) return i.stop = !0, e;
							this.next();
							const s = this.startNodeAt(t, n);
							return s.callee = e, s.typeArguments = this.flowParseTypeParameterInstantiation(), this.expect(u.parenL), s.arguments = this.parseCallExpressionArguments(u.parenR, !1), s.optional = !0, this.finishNode(s, "OptionalCallExpression")
						}
						if (!r && this.shouldParseTypes() && this.isRelational("<")) {
							const r = this.startNodeAt(t, n);
							r.callee = e;
							const s = this.state.clone();
							try {
								return r.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(), this.expect(u.parenL), r.arguments = this.parseCallExpressionArguments(u.parenR, !1), i.optionalChainMember ? (r.optional = !1, this.finishNode(r, "OptionalCallExpression")) : this.finishNode(r, "CallExpression")
							} catch (e) {
								if (!(e instanceof SyntaxError)) throw e;
								this.state = s
							}
						}
						return super.parseSubscript(e, t, n, r, i, s)
					}
					parseNewArguments(e) {
						let t = null;
						if (this.shouldParseTypes() && this.isRelational("<")) {
							const e = this.state.clone();
							try {
								t = this.flowParseTypeParameterInstantiationCallOrNew()
							} catch (t) {
								if (!(t instanceof SyntaxError)) throw t;
								this.state = e
							}
						}
						e.typeArguments = t, super.parseNewArguments(e)
					}
					parseAsyncArrowWithTypeParameters(e, t) {
						const n = this.startNodeAt(e, t);
						if (this.parseFunctionParams(n), this.parseArrow(n)) return this.parseArrowExpression(n, void 0, !0)
					}
					readToken_mult_modulo(e) {
						const t = this.input.charCodeAt(this.state.pos + 1);
						if (42 === e && 47 === t && this.state.hasFlowComment) return this.state.hasFlowComment = !1, this.state.pos += 2, void this.nextToken();
						super.readToken_mult_modulo(e)
					}
					readToken_pipe_amp(e) {
						const t = this.input.charCodeAt(this.state.pos + 1);
						124 !== e || 125 !== t ? super.readToken_pipe_amp(e) : this.finishOp(u.braceBarR, 2)
					}
					parseTopLevel(e, t) {
						const n = super.parseTopLevel(e, t);
						return this.state.hasFlowComment && this.unexpected(null, "Unterminated flow-comment"), n
					}
					skipBlockComment() {
						if (this.hasPlugin("flowComments") && this.skipFlowComment()) return this.state.hasFlowComment && this.unexpected(null, "Cannot have a flow comment inside another flow comment"), this.hasFlowCommentCompletion(), this.state.pos += this.skipFlowComment(), void(this.state.hasFlowComment = !0);
						if (this.state.hasFlowComment) {
							const e = this.input.indexOf("*-/", this.state.pos += 2);
							return -1 === e && this.raise(this.state.pos - 2, "Unterminated comment"), void(this.state.pos = e + 3)
						}
						super.skipBlockComment()
					}
					skipFlowComment() {
						const {
							pos: e
						} = this.state;
						let t = 2;
						for (;
							[32, 9].includes(this.input.charCodeAt(e + t));) t++;
						const n = this.input.charCodeAt(t + e),
							r = this.input.charCodeAt(t + e + 1);
						return 58 === n && 58 === r ? t + 2 : "flow-include" === this.input.slice(t + e, t + e + 12) ? t + 12 : 58 === n && 58 !== r && t
					}
					hasFlowCommentCompletion() {
						-1 === this.input.indexOf("*/", this.state.pos) && this.raise(this.state.pos, "Unterminated comment")
					}
				}),
				typescript: e => (class extends e {
					getScopeHandler() {
						return ve
					}
					tsIsIdentifier() {
						return this.match(u.name)
					}
					tsNextTokenCanFollowModifier() {
						return this.next(), !(this.hasPrecedingLineBreak() || this.match(u.parenL) || this.match(u.parenR) || this.match(u.colon) || this.match(u.eq) || this.match(u.question) || this.match(u.bang))
					}
					tsParseModifier(e) {
						if (!this.match(u.name)) return;
						const t = this.state.value;
						return -1 !== e.indexOf(t) && this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)) ? t : void 0
					}
					tsIsListTerminator(e) {
						switch (e) {
							case "EnumMembers":
							case "TypeMembers":
								return this.match(u.braceR);
							case "HeritageClauseElement":
								return this.match(u.braceL);
							case "TupleElementTypes":
								return this.match(u.bracketR);
							case "TypeParametersOrArguments":
								return this.isRelational(">")
						}
						throw new Error("Unreachable")
					}
					tsParseList(e, t) {
						const n = [];
						for (; !this.tsIsListTerminator(e);) n.push(t());
						return n
					}
					tsParseDelimitedList(e, t) {
						return De(this.tsParseDelimitedListWorker(e, t, !0))
					}
					tsParseDelimitedListWorker(e, t, n) {
						const r = [];
						for (; !this.tsIsListTerminator(e);) {
							const i = t();
							if (null == i) return;
							if (r.push(i), !this.eat(u.comma)) {
								if (this.tsIsListTerminator(e)) break;
								return void(n && this.expect(u.comma))
							}
						}
						return r
					}
					tsParseBracketedList(e, t, n, r) {
						r || (n ? this.expect(u.bracketL) : this.expectRelational("<"));
						const i = this.tsParseDelimitedList(e, t);
						return n ? this.expect(u.bracketR) : this.expectRelational(">"), i
					}
					tsParseImportType() {
						const e = this.startNode();
						if (this.expect(u._import), this.expect(u.parenL), !this.match(u.string)) throw this.unexpected(null, "Argument in a type import must be a string literal");
						return e.argument = this.parseExprAtom(), this.expect(u.parenR), this.eat(u.dot) && (e.qualifier = this.tsParseEntityName(!0)), this.isRelational("<") && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSImportType")
					}
					tsParseEntityName(e) {
						let t = this.parseIdentifier();
						for (; this.eat(u.dot);) {
							const n = this.startNodeAtNode(t);
							n.left = t, n.right = this.parseIdentifier(e), t = this.finishNode(n, "TSQualifiedName")
						}
						return t
					}
					tsParseTypeReference() {
						const e = this.startNode();
						return e.typeName = this.tsParseEntityName(!1), !this.hasPrecedingLineBreak() && this.isRelational("<") && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeReference")
					}
					tsParseThisTypePredicate(e) {
						this.next();
						const t = this.startNodeAtNode(e);
						return t.parameterName = e, t.typeAnnotation = this.tsParseTypeAnnotation(!1), this.finishNode(t, "TSTypePredicate")
					}
					tsParseThisTypeNode() {
						const e = this.startNode();
						return this.next(), this.finishNode(e, "TSThisType")
					}
					tsParseTypeQuery() {
						const e = this.startNode();
						return this.expect(u._typeof), this.match(u._import) ? e.exprName = this.tsParseImportType() : e.exprName = this.tsParseEntityName(!0), this.finishNode(e, "TSTypeQuery")
					}
					tsParseTypeParameter() {
						const e = this.startNode();
						return e.name = this.parseIdentifierName(e.start), e.constraint = this.tsEatThenParseType(u._extends), e.default = this.tsEatThenParseType(u.eq), this.finishNode(e, "TSTypeParameter")
					}
					tsTryParseTypeParameters() {
						if (this.isRelational("<")) return this.tsParseTypeParameters()
					}
					tsParseTypeParameters() {
						const e = this.startNode();
						return this.isRelational("<") || this.match(u.jsxTagStart) ? this.next() : this.unexpected(), e.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this), !1, !0), this.finishNode(e, "TSTypeParameterDeclaration")
					}
					tsTryNextParseConstantContext() {
						return this.lookahead().type === u._const ? (this.next(), this.tsParseTypeReference()) : null
					}
					tsFillSignature(e, t) {
						const n = e === u.arrow;
						t.typeParameters = this.tsTryParseTypeParameters(), this.expect(u.parenL), t.parameters = this.tsParseBindingListForSignature(), n ? t.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(e) : this.match(e) && (t.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(e))
					}
					tsParseBindingListForSignature() {
						return this.parseBindingList(u.parenR).map(e => {
							if ("Identifier" !== e.type && "RestElement" !== e.type && "ObjectPattern" !== e.type && "ArrayPattern" !== e.type) throw this.unexpected(e.start, `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${e.type}`);
							return e
						})
					}
					tsParseTypeMemberSemicolon() {
						this.eat(u.comma) || this.semicolon()
					}
					tsParseSignatureMember(e, t) {
						return this.tsFillSignature(u.colon, t), this.tsParseTypeMemberSemicolon(), this.finishNode(t, e)
					}
					tsIsUnambiguouslyIndexSignature() {
						return this.next(), this.eat(u.name) && this.match(u.colon)
					}
					tsTryParseIndexSignature(e) {
						if (!this.match(u.bracketL) || !this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))) return;
						this.expect(u.bracketL);
						const t = this.parseIdentifier();
						t.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(t), this.expect(u.bracketR), e.parameters = [t];
						const n = this.tsTryParseTypeAnnotation();
						return n && (e.typeAnnotation = n), this.tsParseTypeMemberSemicolon(), this.finishNode(e, "TSIndexSignature")
					}
					tsParsePropertyOrMethodSignature(e, t) {
						this.eat(u.question) && (e.optional = !0);
						const n = e;
						if (t || !this.match(u.parenL) && !this.isRelational("<")) {
							const e = n;
							t && (e.readonly = !0);
							const r = this.tsTryParseTypeAnnotation();
							return r && (e.typeAnnotation = r), this.tsParseTypeMemberSemicolon(), this.finishNode(e, "TSPropertySignature")
						} {
							const e = n;
							return this.tsFillSignature(u.colon, e), this.tsParseTypeMemberSemicolon(), this.finishNode(e, "TSMethodSignature")
						}
					}
					tsParseTypeMember() {
						const e = this.startNode();
						if (this.match(u.parenL) || this.isRelational("<")) return this.tsParseSignatureMember("TSCallSignatureDeclaration", e);
						if (this.match(u._new)) {
							const t = this.startNode();
							return this.next(), this.match(u.parenL) || this.isRelational("<") ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", e) : (e.key = this.createIdentifier(t, "new"), this.tsParsePropertyOrMethodSignature(e, !1))
						}
						const t = !!this.tsParseModifier(["readonly"]),
							n = this.tsTryParseIndexSignature(e);
						return n ? (t && (e.readonly = !0), n) : (this.parsePropertyName(e), this.tsParsePropertyOrMethodSignature(e, t))
					}
					tsParseTypeLiteral() {
						const e = this.startNode();
						return e.members = this.tsParseObjectTypeMembers(), this.finishNode(e, "TSTypeLiteral")
					}
					tsParseObjectTypeMembers() {
						this.expect(u.braceL);
						const e = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
						return this.expect(u.braceR), e
					}
					tsIsStartOfMappedType() {
						return this.next(), this.eat(u.plusMin) ? this.isContextual("readonly") : (this.isContextual("readonly") && this.next(), !!this.match(u.bracketL) && (this.next(), !!this.tsIsIdentifier() && (this.next(), this.match(u._in))))
					}
					tsParseMappedTypeParameter() {
						const e = this.startNode();
						return e.name = this.parseIdentifierName(e.start), e.constraint = this.tsExpectThenParseType(u._in), this.finishNode(e, "TSTypeParameter")
					}
					tsParseMappedType() {
						const e = this.startNode();
						return this.expect(u.braceL), this.match(u.plusMin) ? (e.readonly = this.state.value, this.next(), this.expectContextual("readonly")) : this.eatContextual("readonly") && (e.readonly = !0), this.expect(u.bracketL), e.typeParameter = this.tsParseMappedTypeParameter(), this.expect(u.bracketR), this.match(u.plusMin) ? (e.optional = this.state.value, this.next(), this.expect(u.question)) : this.eat(u.question) && (e.optional = !0), e.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(u.braceR), this.finishNode(e, "TSMappedType")
					}
					tsParseTupleType() {
						const e = this.startNode();
						e.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
						let t = !1;
						return e.elementTypes.forEach(e => {
							"TSOptionalType" === e.type ? t = !0 : t && "TSRestType" !== e.type && this.raise(e.start, "A required element cannot follow an optional element.")
						}), this.finishNode(e, "TSTupleType")
					}
					tsParseTupleElementType() {
						if (this.match(u.ellipsis)) {
							const e = this.startNode();
							return this.next(), e.typeAnnotation = this.tsParseType(), this.checkCommaAfterRest(), this.finishNode(e, "TSRestType")
						}
						const e = this.tsParseType();
						if (this.eat(u.question)) {
							const t = this.startNodeAtNode(e);
							return t.typeAnnotation = e, this.finishNode(t, "TSOptionalType")
						}
						return e
					}
					tsParseParenthesizedType() {
						const e = this.startNode();
						return this.expect(u.parenL), e.typeAnnotation = this.tsParseType(), this.expect(u.parenR), this.finishNode(e, "TSParenthesizedType")
					}
					tsParseFunctionOrConstructorType(e) {
						const t = this.startNode();
						return "TSConstructorType" === e && this.expect(u._new), this.tsFillSignature(u.arrow, t), this.finishNode(t, e)
					}
					tsParseLiteralTypeNode() {
						const e = this.startNode();
						return e.literal = (() => {
							switch (this.state.type) {
								case u.num:
								case u.string:
								case u._true:
								case u._false:
									return this.parseExprAtom();
								default:
									throw this.unexpected()
							}
						})(), this.finishNode(e, "TSLiteralType")
					}
					tsParseTemplateLiteralType() {
						const e = this.startNode(),
							t = this.parseTemplate(!1);
						if (t.expressions.length > 0) throw this.raise(t.expressions[0].start, "Template literal types cannot have any substitution");
						return e.literal = t, this.finishNode(e, "TSLiteralType")
					}
					tsParseNonArrayType() {
						switch (this.state.type) {
							case u.name:
							case u._void:
							case u._null:
								{
									const e = this.match(u._void) ? "TSVoidKeyword" : this.match(u._null) ? "TSNullKeyword" : function (e) {
										switch (e) {
											case "any":
												return "TSAnyKeyword";
											case "boolean":
												return "TSBooleanKeyword";
											case "bigint":
												return "TSBigIntKeyword";
											case "never":
												return "TSNeverKeyword";
											case "number":
												return "TSNumberKeyword";
											case "object":
												return "TSObjectKeyword";
											case "string":
												return "TSStringKeyword";
											case "symbol":
												return "TSSymbolKeyword";
											case "undefined":
												return "TSUndefinedKeyword";
											case "unknown":
												return "TSUnknownKeyword";
											default:
												return
										}
									}(this.state.value);
									if (void 0 !== e && this.lookahead().type !== u.dot) {
										const t = this.startNode();
										return this.next(), this.finishNode(t, e)
									}
									return this.tsParseTypeReference()
								}
							case u.string:
							case u.num:
							case u._true:
							case u._false:
								return this.tsParseLiteralTypeNode();
							case u.plusMin:
								if ("-" === this.state.value) {
									const e = this.startNode();
									if (this.lookahead().type !== u.num) throw this.unexpected();
									return e.literal = this.parseMaybeUnary(), this.finishNode(e, "TSLiteralType")
								}
								break;
							case u._this:
								{
									const e = this.tsParseThisTypeNode();
									return this.isContextual("is") && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(e) : e
								}
							case u._typeof:
								return this.tsParseTypeQuery();
							case u._import:
								return this.tsParseImportType();
							case u.braceL:
								return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
							case u.bracketL:
								return this.tsParseTupleType();
							case u.parenL:
								return this.tsParseParenthesizedType();
							case u.backQuote:
								return this.tsParseTemplateLiteralType()
						}
						throw this.unexpected()
					}
					tsParseArrayTypeOrHigher() {
						let e = this.tsParseNonArrayType();
						for (; !this.hasPrecedingLineBreak() && this.eat(u.bracketL);)
							if (this.match(u.bracketR)) {
								const t = this.startNodeAtNode(e);
								t.elementType = e, this.expect(u.bracketR), e = this.finishNode(t, "TSArrayType")
							} else {
								const t = this.startNodeAtNode(e);
								t.objectType = e, t.indexType = this.tsParseType(), this.expect(u.bracketR), e = this.finishNode(t, "TSIndexedAccessType")
							}
						return e
					}
					tsParseTypeOperator(e) {
						const t = this.startNode();
						return this.expectContextual(e), t.operator = e, t.typeAnnotation = this.tsParseTypeOperatorOrHigher(), "readonly" === e && this.tsCheckTypeAnnotationForReadOnly(t), this.finishNode(t, "TSTypeOperator")
					}
					tsCheckTypeAnnotationForReadOnly(e) {
						switch (e.typeAnnotation.type) {
							case "TSTupleType":
							case "TSArrayType":
								return;
							default:
								this.raise(e.start, "'readonly' type modifier is only permitted on array and tuple literal types.")
						}
					}
					tsParseInferType() {
						const e = this.startNode();
						this.expectContextual("infer");
						const t = this.startNode();
						return t.name = this.parseIdentifierName(t.start), e.typeParameter = this.finishNode(t, "TSTypeParameter"), this.finishNode(e, "TSInferType")
					}
					tsParseTypeOperatorOrHigher() {
						const e = ["keyof", "unique", "readonly"].find(e => this.isContextual(e));
						return e ? this.tsParseTypeOperator(e) : this.isContextual("infer") ? this.tsParseInferType() : this.tsParseArrayTypeOrHigher()
					}
					tsParseUnionOrIntersectionType(e, t, n) {
						this.eat(n);
						let r = t();
						if (this.match(n)) {
							const i = [r];
							for (; this.eat(n);) i.push(t());
							const s = this.startNodeAtNode(r);
							s.types = i, r = this.finishNode(s, e)
						}
						return r
					}
					tsParseIntersectionTypeOrHigher() {
						return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), u.bitwiseAND)
					}
					tsParseUnionTypeOrHigher() {
						return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), u.bitwiseOR)
					}
					tsIsStartOfFunctionType() {
						return !!this.isRelational("<") || this.match(u.parenL) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this))
					}
					tsSkipParameterStart() {
						if (this.match(u.name) || this.match(u._this)) return this.next(), !0;
						if (this.match(u.braceL)) {
							let e = 1;
							for (this.next(); e > 0;) this.match(u.braceL) ? ++e : this.match(u.braceR) && --e, this.next();
							return !0
						}
						if (this.match(u.bracketL)) {
							let e = 1;
							for (this.next(); e > 0;) this.match(u.bracketL) ? ++e : this.match(u.bracketR) && --e, this.next();
							return !0
						}
						return !1
					}
					tsIsUnambiguouslyStartOfFunctionType() {
						if (this.next(), this.match(u.parenR) || this.match(u.ellipsis)) return !0;
						if (this.tsSkipParameterStart()) {
							if (this.match(u.colon) || this.match(u.comma) || this.match(u.question) || this.match(u.eq)) return !0;
							if (this.match(u.parenR) && (this.next(), this.match(u.arrow))) return !0
						}
						return !1
					}
					tsParseTypeOrTypePredicateAnnotation(e) {
						return this.tsInType(() => {
							const t = this.startNode();
							this.expect(e);
							const n = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
							if (!n) return this.tsParseTypeAnnotation(!1, t);
							const r = this.tsParseTypeAnnotation(!1),
								i = this.startNodeAtNode(n);
							return i.parameterName = n, i.typeAnnotation = r, t.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(t, "TSTypeAnnotation")
						})
					}
					tsTryParseTypeOrTypePredicateAnnotation() {
						return this.match(u.colon) ? this.tsParseTypeOrTypePredicateAnnotation(u.colon) : void 0
					}
					tsTryParseTypeAnnotation() {
						return this.match(u.colon) ? this.tsParseTypeAnnotation() : void 0
					}
					tsTryParseType() {
						return this.tsEatThenParseType(u.colon)
					}
					tsParseTypePredicatePrefix() {
						const e = this.parseIdentifier();
						if (this.isContextual("is") && !this.hasPrecedingLineBreak()) return this.next(), e
					}
					tsParseTypeAnnotation(e = !0, t = this.startNode()) {
						return this.tsInType(() => {
							e && this.expect(u.colon), t.typeAnnotation = this.tsParseType()
						}), this.finishNode(t, "TSTypeAnnotation")
					}
					tsParseType() {
						Ce(this.state.inType);
						const e = this.tsParseNonConditionalType();
						if (this.hasPrecedingLineBreak() || !this.eat(u._extends)) return e;
						const t = this.startNodeAtNode(e);
						return t.checkType = e, t.extendsType = this.tsParseNonConditionalType(), this.expect(u.question), t.trueType = this.tsParseType(), this.expect(u.colon), t.falseType = this.tsParseType(), this.finishNode(t, "TSConditionalType")
					}
					tsParseNonConditionalType() {
						return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(u._new) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.tsParseUnionTypeOrHigher()
					}
					tsParseTypeAssertion() {
						const e = this.startNode(),
							t = this.tsTryNextParseConstantContext();
						return e.typeAnnotation = t || this.tsNextThenParseType(), this.expectRelational(">"), e.expression = this.parseMaybeUnary(), this.finishNode(e, "TSTypeAssertion")
					}
					tsParseHeritageClause(e) {
						const t = this.state.start,
							n = this.tsParseDelimitedList("HeritageClauseElement", this.tsParseExpressionWithTypeArguments.bind(this));
						return n.length || this.raise(t, `'${e}' list cannot be empty.`), n
					}
					tsParseExpressionWithTypeArguments() {
						const e = this.startNode();
						return e.expression = this.tsParseEntityName(!1), this.isRelational("<") && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSExpressionWithTypeArguments")
					}
					tsParseInterfaceDeclaration(e) {
						e.id = this.parseIdentifier(), this.checkLVal(e.id, k, void 0, "typescript interface declaration"), e.typeParameters = this.tsTryParseTypeParameters(), this.eat(u._extends) && (e.extends = this.tsParseHeritageClause("extends"));
						const t = this.startNode();
						return t.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), e.body = this.finishNode(t, "TSInterfaceBody"), this.finishNode(e, "TSInterfaceDeclaration")
					}
					tsParseTypeAliasDeclaration(e) {
						return e.id = this.parseIdentifier(), this.checkLVal(e.id, B, void 0, "typescript type alias"), e.typeParameters = this.tsTryParseTypeParameters(), e.typeAnnotation = this.tsExpectThenParseType(u.eq), this.semicolon(), this.finishNode(e, "TSTypeAliasDeclaration")
					}
					tsInNoContext(e) {
						const t = this.state.context;
						this.state.context = [t[0]];
						try {
							return e()
						} finally {
							this.state.context = t
						}
					}
					tsInType(e) {
						const t = this.state.inType;
						this.state.inType = !0;
						try {
							return e()
						} finally {
							this.state.inType = t
						}
					}
					tsEatThenParseType(e) {
						return this.match(e) ? this.tsNextThenParseType() : void 0
					}
					tsExpectThenParseType(e) {
						return this.tsDoThenParseType(() => this.expect(e))
					}
					tsNextThenParseType() {
						return this.tsDoThenParseType(() => this.next())
					}
					tsDoThenParseType(e) {
						return this.tsInType(() => (e(), this.tsParseType()))
					}
					tsParseEnumMember() {
						const e = this.startNode();
						return e.id = this.match(u.string) ? this.parseExprAtom() : this.parseIdentifier(!0), this.eat(u.eq) && (e.initializer = this.parseMaybeAssign()), this.finishNode(e, "TSEnumMember")
					}
					tsParseEnumDeclaration(e, t) {
						return t && (e.const = !0), e.id = this.parseIdentifier(), this.checkLVal(e.id, t ? U : L, void 0, "typescript enum declaration"), this.expect(u.braceL), e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(u.braceR), this.finishNode(e, "TSEnumDeclaration")
					}
					tsParseModuleBlock() {
						const e = this.startNode();
						return this.scope.enter(c), this.expect(u.braceL), this.parseBlockOrModuleBlockBody(e.body = [], void 0, !0, u.braceR), this.scope.exit(), this.finishNode(e, "TSModuleBlock")
					}
					tsParseModuleOrNamespaceDeclaration(e, t = !1) {
						if (e.id = this.parseIdentifier(), t || this.checkLVal(e.id, V, null, "module or namespace declaration"), this.eat(u.dot)) {
							const t = this.startNode();
							this.tsParseModuleOrNamespaceDeclaration(t, !0), e.body = t
						} else e.body = this.tsParseModuleBlock();
						return this.finishNode(e, "TSModuleDeclaration")
					}
					tsParseAmbientExternalModuleDeclaration(e) {
						return this.isContextual("global") ? (e.global = !0, e.id = this.parseIdentifier()) : this.match(u.string) ? e.id = this.parseExprAtom() : this.unexpected(), this.match(u.braceL) ? e.body = this.tsParseModuleBlock() : this.semicolon(), this.finishNode(e, "TSModuleDeclaration")
					}
					tsParseImportEqualsDeclaration(e, t) {
						return e.isExport = t || !1, e.id = this.parseIdentifier(), this.expect(u.eq), e.moduleReference = this.tsParseModuleReference(), this.semicolon(), this.finishNode(e, "TSImportEqualsDeclaration")
					}
					tsIsExternalModuleReference() {
						return this.isContextual("require") && this.lookahead().type === u.parenL
					}
					tsParseModuleReference() {
						return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1)
					}
					tsParseExternalModuleReference() {
						const e = this.startNode();
						if (this.expectContextual("require"), this.expect(u.parenL), !this.match(u.string)) throw this.unexpected();
						return e.expression = this.parseExprAtom(), this.expect(u.parenR), this.finishNode(e, "TSExternalModuleReference")
					}
					tsLookAhead(e) {
						const t = this.state.clone(),
							n = e();
						return this.state = t, n
					}
					tsTryParseAndCatch(e) {
						const t = this.state.clone();
						try {
							return e()
						} catch (e) {
							if (e instanceof SyntaxError) return void(this.state = t);
							throw e
						}
					}
					tsTryParse(e) {
						const t = this.state.clone(),
							n = e();
						return void 0 !== n && !1 !== n ? n : void(this.state = t)
					}
					tsTryParseDeclare(e) {
						if (this.isLineTerminator()) return;
						let t, n = this.state.type;
						switch (this.isContextual("let") && (n = u._var, t = "let"), n) {
							case u._function:
								return this.parseFunctionStatement(e, !1, !0);
							case u._class:
								return this.parseClass(e, !0, !1);
							case u._const:
								if (this.match(u._const) && this.isLookaheadContextual("enum")) return this.expect(u._const), this.expectContextual("enum"), this.tsParseEnumDeclaration(e, !0);
							case u._var:
								return t = t || this.state.value, this.parseVarStatement(e, t);
							case u.name:
								{
									const t = this.state.value;
									return "global" === t ? this.tsParseAmbientExternalModuleDeclaration(e) : this.tsParseDeclaration(e, t, !0)
								}
						}
					}
					tsTryParseExportDeclaration() {
						return this.tsParseDeclaration(this.startNode(), this.state.value, !0)
					}
					tsParseExpressionStatement(e, t) {
						switch (t.name) {
							case "declare":
								{
									const t = this.tsTryParseDeclare(e);
									if (t) return t.declare = !0, t;
									break
								}
							case "global":
								if (this.match(u.braceL)) {
									const n = e;
									return n.global = !0, n.id = t, n.body = this.tsParseModuleBlock(), this.finishNode(n, "TSModuleDeclaration")
								}
								break;
							default:
								return this.tsParseDeclaration(e, t.name, !1)
						}
					}
					tsParseDeclaration(e, t, n) {
						switch (t) {
							case "abstract":
								if (this.tsCheckLineTerminatorAndMatch(u._class, n)) {
									const t = e;
									return t.abstract = !0, n && (this.next(), this.match(u._class) || this.unexpected(null, u._class)), this.parseClass(t, !0, !1)
								}
								break;
							case "enum":
								if (n || this.match(u.name)) return n && this.next(), this.tsParseEnumDeclaration(e, !1);
								break;
							case "interface":
								if (this.tsCheckLineTerminatorAndMatch(u.name, n)) return n && this.next(), this.tsParseInterfaceDeclaration(e);
								break;
							case "module":
								if (n && this.next(), this.match(u.string)) return this.tsParseAmbientExternalModuleDeclaration(e);
								if (this.tsCheckLineTerminatorAndMatch(u.name, n)) return this.tsParseModuleOrNamespaceDeclaration(e);
								break;
							case "namespace":
								if (this.tsCheckLineTerminatorAndMatch(u.name, n)) return n && this.next(), this.tsParseModuleOrNamespaceDeclaration(e);
								break;
							case "type":
								if (this.tsCheckLineTerminatorAndMatch(u.name, n)) return n && this.next(), this.tsParseTypeAliasDeclaration(e)
						}
					}
					tsCheckLineTerminatorAndMatch(e, t) {
						return (t || this.match(e)) && !this.isLineTerminator()
					}
					tsTryParseGenericAsyncArrowFunction(e, t) {
						if (!this.isRelational("<")) return;
						const n = this.tsTryParseAndCatch(() => {
							const n = this.startNodeAt(e, t);
							return n.typeParameters = this.tsParseTypeParameters(), super.parseFunctionParams(n), n.returnType = this.tsTryParseTypeOrTypePredicateAnnotation(), this.expect(u.arrow), n
						});
						return n ? this.parseArrowExpression(n, null, !0) : void 0
					}
					tsParseTypeArguments() {
						const e = this.startNode();
						return e.params = this.tsInType(() => this.tsInNoContext(() => (this.expectRelational("<"), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))), this.state.exprAllowed = !1, this.expectRelational(">"), this.finishNode(e, "TSTypeParameterInstantiation")
					}
					tsIsDeclarationStart() {
						if (this.match(u.name)) switch (this.state.value) {
							case "abstract":
							case "declare":
							case "enum":
							case "interface":
							case "module":
							case "namespace":
							case "type":
								return !0
						}
						return !1
					}
					isExportDefaultSpecifier() {
						return !this.tsIsDeclarationStart() && super.isExportDefaultSpecifier()
					}
					parseAssignableListItem(e, t) {
						const n = this.state.start,
							r = this.state.startLoc;
						let i, s = !1;
						e && (i = this.parseAccessModifier(), s = !!this.tsParseModifier(["readonly"]));
						const o = this.parseMaybeDefault();
						this.parseAssignableListItemTypes(o);
						const a = this.parseMaybeDefault(o.start, o.loc.start, o);
						if (i || s) {
							const e = this.startNodeAt(n, r);
							if (t.length && (e.decorators = t), i && (e.accessibility = i), s && (e.readonly = s), "Identifier" !== a.type && "AssignmentPattern" !== a.type) throw this.raise(e.start, "A parameter property may not be declared using a binding pattern.");
							return e.parameter = a, this.finishNode(e, "TSParameterProperty")
						}
						return t.length && (o.decorators = t), a
					}
					parseFunctionBodyAndFinish(e, t, n = !1) {
						this.match(u.colon) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(u.colon));
						const r = "FunctionDeclaration" === t ? "TSDeclareFunction" : "ClassMethod" === t ? "TSDeclareMethod" : void 0;
						r && !this.match(u.braceL) && this.isLineTerminator() ? this.finishNode(e, r) : super.parseFunctionBodyAndFinish(e, t, n)
					}
					checkFunctionStatementId(e) {
						!e.body && e.id ? this.checkLVal(e.id, M, null, "function name") : super.checkFunctionStatementId(...arguments)
					}
					parseSubscript(e, t, n, r, i, s) {
						if (!this.hasPrecedingLineBreak() && this.match(u.bang)) {
							this.state.exprAllowed = !1, this.next();
							const r = this.startNodeAt(t, n);
							return r.expression = e, this.finishNode(r, "TSNonNullExpression")
						}
						if (this.isRelational("<")) {
							const s = this.tsTryParseAndCatch(() => {
								if (!r && this.atPossibleAsync(e)) {
									const e = this.tsTryParseGenericAsyncArrowFunction(t, n);
									if (e) return e
								}
								const s = this.startNodeAt(t, n);
								s.callee = e;
								const o = this.tsParseTypeArguments();
								if (o) {
									if (!r && this.eat(u.parenL)) return s.arguments = this.parseCallExpressionArguments(u.parenR, !1), s.typeParameters = o, this.finishCallExpression(s);
									if (this.match(u.backQuote)) return this.parseTaggedTemplateExpression(t, n, e, i, o)
								}
								this.unexpected()
							});
							if (s) return s
						}
						return super.parseSubscript(e, t, n, r, i, s)
					}
					parseNewArguments(e) {
						if (this.isRelational("<")) {
							const t = this.tsTryParseAndCatch(() => {
								const e = this.tsParseTypeArguments();
								return this.match(u.parenL) || this.unexpected(), e
							});
							t && (e.typeParameters = t)
						}
						super.parseNewArguments(e)
					}
					parseExprOp(e, t, n, r, i) {
						if (De(u._in.binop) > r && !this.hasPrecedingLineBreak() && this.isContextual("as")) {
							const s = this.startNodeAt(t, n);
							s.expression = e;
							const o = this.tsTryNextParseConstantContext();
							return s.typeAnnotation = o || this.tsNextThenParseType(), this.finishNode(s, "TSAsExpression"), this.parseExprOp(s, t, n, r, i)
						}
						return super.parseExprOp(e, t, n, r, i)
					}
					checkReservedWord(e, t, n, r) {}
					checkDuplicateExports() {}
					parseImport(e) {
						return this.match(u.name) && this.lookahead().type === u.eq ? this.tsParseImportEqualsDeclaration(e) : super.parseImport(e)
					}
					parseExport(e) {
						if (this.match(u._import)) return this.expect(u._import), this.tsParseImportEqualsDeclaration(e, !0);
						if (this.eat(u.eq)) {
							const t = e;
							return t.expression = this.parseExpression(), this.semicolon(), this.finishNode(t, "TSExportAssignment")
						}
						if (this.eatContextual("as")) {
							const t = e;
							return this.expectContextual("namespace"), t.id = this.parseIdentifier(), this.semicolon(), this.finishNode(t, "TSNamespaceExportDeclaration")
						}
						return super.parseExport(e)
					}
					isAbstractClass() {
						return this.isContextual("abstract") && this.lookahead().type === u._class
					}
					parseExportDefaultExpression() {
						if (this.isAbstractClass()) {
							const e = this.startNode();
							return this.next(), this.parseClass(e, !0, !0), e.abstract = !0, e
						}
						if ("interface" === this.state.value) {
							const e = this.tsParseDeclaration(this.startNode(), this.state.value, !0);
							if (e) return e
						}
						return super.parseExportDefaultExpression()
					}
					parseStatementContent(e, t) {
						if (this.state.type === u._const) {
							const e = this.lookahead();
							if (e.type === u.name && "enum" === e.value) {
								const e = this.startNode();
								return this.expect(u._const), this.expectContextual("enum"), this.tsParseEnumDeclaration(e, !0)
							}
						}
						return super.parseStatementContent(e, t)
					}
					parseAccessModifier() {
						return this.tsParseModifier(["public", "protected", "private"])
					}
					parseClassMember(e, t, n, r) {
						const i = this.parseAccessModifier();
						i && (t.accessibility = i), super.parseClassMember(e, t, n, r)
					}
					parseClassMemberWithIsStatic(e, t, n, r, i) {
						const s = t,
							o = t,
							a = t;
						let u = !1,
							c = !1;
						switch (this.tsParseModifier(["abstract", "readonly"])) {
							case "readonly":
								c = !0, u = !!this.tsParseModifier(["abstract"]);
								break;
							case "abstract":
								u = !0, c = !!this.tsParseModifier(["readonly"])
						}
						if (u && (s.abstract = !0), c && (a.readonly = !0), !u && !r && !s.accessibility) {
							const n = this.tsTryParseIndexSignature(t);
							if (n) return void e.body.push(n)
						}
						if (c) return s.static = r, this.parseClassPropertyName(o), this.parsePostMemberNameModifiers(s), void this.pushClassProperty(e, o);
						super.parseClassMemberWithIsStatic(e, t, n, r, i)
					}
					parsePostMemberNameModifiers(e) {
						this.eat(u.question) && (e.optional = !0)
					}
					parseExpressionStatement(e, t) {
						return ("Identifier" === t.type ? this.tsParseExpressionStatement(e, t) : void 0) || super.parseExpressionStatement(e, t)
					}
					shouldParseExportDeclaration() {
						return !!this.tsIsDeclarationStart() || super.shouldParseExportDeclaration()
					}
					parseConditional(e, t, n, r, i) {
						if (!i || !this.match(u.question)) return super.parseConditional(e, t, n, r, i);
						const s = this.state.clone();
						try {
							return super.parseConditional(e, t, n, r)
						} catch (t) {
							if (!(t instanceof SyntaxError)) throw t;
							return this.state = s, i.start = t.pos || this.state.start, e
						}
					}
					parseParenItem(e, t, n) {
						if (e = super.parseParenItem(e, t, n), this.eat(u.question) && (e.optional = !0, this.resetEndLocation(e)), this.match(u.colon)) {
							const r = this.startNodeAt(t, n);
							return r.expression = e, r.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(r, "TSTypeCastExpression")
						}
						return e
					}
					parseExportDeclaration(e) {
						const t = this.state.start,
							n = this.state.startLoc,
							r = this.eatContextual("declare");
						let i;
						return this.match(u.name) && (i = this.tsTryParseExportDeclaration()), i || (i = super.parseExportDeclaration(e)), i && r && (this.resetStartLocation(i, t, n), i.declare = !0), i
					}
					parseClassId(e, t, n) {
						if ((!t || n) && this.isContextual("implements")) return;
						super.parseClassId(...arguments);
						const r = this.tsTryParseTypeParameters();
						r && (e.typeParameters = r)
					}
					parseClassProperty(e) {
						!e.optional && this.eat(u.bang) && (e.definite = !0);
						const t = this.tsTryParseTypeAnnotation();
						return t && (e.typeAnnotation = t), super.parseClassProperty(e)
					}
					pushClassMethod(e, t, n, r, i, s) {
						const o = this.tsTryParseTypeParameters();
						o && (t.typeParameters = o), super.pushClassMethod(e, t, n, r, i, s)
					}
					pushClassPrivateMethod(e, t, n, r) {
						const i = this.tsTryParseTypeParameters();
						i && (t.typeParameters = i), super.pushClassPrivateMethod(e, t, n, r)
					}
					parseClassSuper(e) {
						super.parseClassSuper(e), e.superClass && this.isRelational("<") && (e.superTypeParameters = this.tsParseTypeArguments()), this.eatContextual("implements") && (e.implements = this.tsParseHeritageClause("implements"))
					}
					parseObjPropValue(e, ...t) {
						const n = this.tsTryParseTypeParameters();
						n && (e.typeParameters = n), super.parseObjPropValue(e, ...t)
					}
					parseFunctionParams(e, t) {
						const n = this.tsTryParseTypeParameters();
						n && (e.typeParameters = n), super.parseFunctionParams(e, t)
					}
					parseVarId(e, t) {
						super.parseVarId(e, t), "Identifier" === e.id.type && this.eat(u.bang) && (e.definite = !0);
						const n = this.tsTryParseTypeAnnotation();
						n && (e.id.typeAnnotation = n, this.resetEndLocation(e.id))
					}
					parseAsyncArrowFromCallExpression(e, t) {
						return this.match(u.colon) && (e.returnType = this.tsParseTypeAnnotation()), super.parseAsyncArrowFromCallExpression(e, t)
					}
					parseMaybeAssign(...e) {
						let t, n, r;
						if (this.match(u.jsxTagStart)) {
							Ce(this.curContext() === H.j_oTag), Ce(this.state.context[this.state.context.length - 2] === H.j_expr);
							const n = this.state.clone();
							try {
								return super.parseMaybeAssign(...e)
							} catch (e) {
								if (!(e instanceof SyntaxError)) throw e;
								this.state = n, Ce(this.curContext() === H.j_oTag), this.state.context.pop(), Ce(this.curContext() === H.j_expr), this.state.context.pop(), t = e
							}
						}
						if (void 0 === t && !this.isRelational("<")) return super.parseMaybeAssign(...e);
						const i = this.state.clone();
						try {
							r = this.tsParseTypeParameters(), ("ArrowFunctionExpression" !== (n = super.parseMaybeAssign(...e)).type || n.extra && n.extra.parenthesized) && this.unexpected()
						} catch (n) {
							if (!(n instanceof SyntaxError)) throw n;
							if (t) throw t;
							return Ce(!this.hasPlugin("jsx")), this.state = i, super.parseMaybeAssign(...e)
						}
						return r && 0 !== r.params.length && this.resetStartLocationFromNode(n, r), n.typeParameters = r, n
					}
					parseMaybeUnary(e) {
						return !this.hasPlugin("jsx") && this.isRelational("<") ? this.tsParseTypeAssertion() : super.parseMaybeUnary(e)
					}
					parseArrow(e) {
						if (this.match(u.colon)) {
							const t = this.state.clone();
							try {
								const n = this.tsParseTypeOrTypePredicateAnnotation(u.colon);
								if (this.canInsertSemicolon() || !this.match(u.arrow)) return void(this.state = t);
								e.returnType = n
							} catch (e) {
								if (!(e instanceof SyntaxError)) throw e;
								this.state = t
							}
						}
						return super.parseArrow(e)
					}
					parseAssignableListItemTypes(e) {
						if (this.eat(u.question)) {
							if ("Identifier" !== e.type) throw this.raise(e.start, "A binding pattern parameter cannot be optional in an implementation signature.");
							e.optional = !0
						}
						const t = this.tsTryParseTypeAnnotation();
						return t && (e.typeAnnotation = t), this.resetEndLocation(e), e
					}
					toAssignable(e, t, n) {
						switch (e.type) {
							case "TSTypeCastExpression":
								return super.toAssignable(this.typeCastToParameter(e), t, n);
							case "TSParameterProperty":
								return super.toAssignable(e, t, n);
							case "TSAsExpression":
							case "TSNonNullExpression":
							case "TSTypeAssertion":
								return e.expression = this.toAssignable(e.expression, t, n), e;
							default:
								return super.toAssignable(e, t, n)
						}
					}
					checkLVal(e, t = j, n, r) {
						switch (e.type) {
							case "TSTypeCastExpression":
								return;
							case "TSParameterProperty":
								return void this.checkLVal(e.parameter, t, n, "parameter property");
							case "TSAsExpression":
							case "TSNonNullExpression":
							case "TSTypeAssertion":
								return void this.checkLVal(e.expression, t, n, r);
							default:
								return void super.checkLVal(e, t, n, r)
						}
					}
					parseBindingAtom() {
						switch (this.state.type) {
							case u._this:
								return this.parseIdentifier(!0);
							default:
								return super.parseBindingAtom()
						}
					}
					parseMaybeDecoratorArguments(e) {
						if (this.isRelational("<")) {
							const t = this.tsParseTypeArguments();
							if (this.match(u.parenL)) {
								const n = super.parseMaybeDecoratorArguments(e);
								return n.typeParameters = t, n
							}
							this.unexpected(this.state.start, u.parenL)
						}
						return super.parseMaybeDecoratorArguments(e)
					}
					isClassMethod() {
						return this.isRelational("<") || super.isClassMethod()
					}
					isClassProperty() {
						return this.match(u.bang) || this.match(u.colon) || super.isClassProperty()
					}
					parseMaybeDefault(...e) {
						const t = super.parseMaybeDefault(...e);
						return "AssignmentPattern" === t.type && t.typeAnnotation && t.right.start < t.typeAnnotation.start && this.raise(t.typeAnnotation.start, "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`"), t
					}
					getTokenFromCode(e) {
						return !this.state.inType || 62 !== e && 60 !== e ? super.getTokenFromCode(e) : this.finishOp(u.relational, 1)
					}
					toAssignableList(e, t, n) {
						for (let t = 0; t < e.length; t++) {
							const n = e[t];
							if (n) switch (n.type) {
								case "TSTypeCastExpression":
									e[t] = this.typeCastToParameter(n);
									break;
								case "TSAsExpression":
								case "TSTypeAssertion":
									this.raise(n.start, "Unexpected type cast in parameter position.")
							}
						}
						return super.toAssignableList(e, t, n)
					}
					typeCastToParameter(e) {
						return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.end, e.typeAnnotation.loc.end), e.expression
					}
					toReferencedList(e, t) {
						for (let t = 0; t < e.length; t++) {
							const n = e[t];
							n && n._exprListItem && "TsTypeCastExpression" === n.type && this.raise(n.start, "Did not expect a type annotation here.")
						}
						return e
					}
					shouldParseArrow() {
						return this.match(u.colon) || super.shouldParseArrow()
					}
					shouldParseAsyncArrow() {
						return this.match(u.colon) || super.shouldParseAsyncArrow()
					}
					canHaveLeadingDecorator() {
						return super.canHaveLeadingDecorator() || this.isAbstractClass()
					}
					jsxParseOpeningElementAfterName(e) {
						if (this.isRelational("<")) {
							const t = this.tsTryParseAndCatch(() => this.tsParseTypeArguments());
							t && (e.typeParameters = t)
						}
						return super.jsxParseOpeningElementAfterName(e)
					}
					getGetterSetterExpectedParamCount(e) {
						const t = super.getGetterSetterExpectedParamCount(e),
							n = e.params[0];
						return n && "Identifier" === n.type && "this" === n.name ? t + 1 : t
					}
				}),
				placeholders: e => (class extends e {
					parsePlaceholder(e) {
						if (this.match(u.placeholder)) {
							const t = this.startNode();
							return this.next(), this.assertNoSpace("Unexpected space in placeholder."), t.name = super.parseIdentifier(!0), this.assertNoSpace("Unexpected space in placeholder."), this.expect(u.placeholder), this.finishPlaceholder(t, e)
						}
					}
					finishPlaceholder(e, t) {
						const n = !(!e.expectedNode || "Placeholder" !== e.type);
						return e.expectedNode = t, n ? e : this.finishNode(e, "Placeholder")
					}
					getTokenFromCode(e) {
						return 37 === e && 37 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(u.placeholder, 2) : super.getTokenFromCode(...arguments)
					}
					parseExprAtom() {
						return this.parsePlaceholder("Expression") || super.parseExprAtom(...arguments)
					}
					parseIdentifier() {
						return this.parsePlaceholder("Identifier") || super.parseIdentifier(...arguments)
					}
					checkReservedWord(e) {
						void 0 !== e && super.checkReservedWord(...arguments)
					}
					parseBindingAtom() {
						return this.parsePlaceholder("Pattern") || super.parseBindingAtom(...arguments)
					}
					checkLVal(e) {
						"Placeholder" !== e.type && super.checkLVal(...arguments)
					}
					toAssignable(e) {
						return e && "Placeholder" === e.type && "Expression" === e.expectedNode ? (e.expectedNode = "Pattern", e) : super.toAssignable(...arguments)
					}
					verifyBreakContinue(e) {
						e.label && "Placeholder" === e.label.type || super.verifyBreakContinue(...arguments)
					}
					parseExpressionStatement(e, t) {
						if ("Placeholder" !== t.type || t.extra && t.extra.parenthesized) return super.parseExpressionStatement(...arguments);
						if (this.match(u.colon)) {
							const n = e;
							return n.label = this.finishPlaceholder(t, "Identifier"), this.next(), n.body = this.parseStatement("label"), this.finishNode(n, "LabeledStatement")
						}
						return this.semicolon(), e.name = t.name, this.finishPlaceholder(e, "Statement")
					}
					parseBlock() {
						return this.parsePlaceholder("BlockStatement") || super.parseBlock(...arguments)
					}
					parseFunctionId() {
						return this.parsePlaceholder("Identifier") || super.parseFunctionId(...arguments)
					}
					parseClass(e, t, n) {
						const r = t ? "ClassDeclaration" : "ClassExpression";
						this.next(), this.takeDecorators(e);
						const i = this.parsePlaceholder("Identifier");
						if (i)
							if (this.match(u._extends) || this.match(u.placeholder) || this.match(u.braceL)) e.id = i;
							else {
								if (n || !t) return e.id = null, e.body = this.finishPlaceholder(i, "ClassBody"), this.finishNode(e, r);
								this.unexpected(null, "A class name is required")
							}
						else this.parseClassId(e, t, n);
						return this.parseClassSuper(e), e.body = this.parsePlaceholder("ClassBody") || this.parseClassBody(!!e.superClass), this.finishNode(e, r)
					}
					parseExport(e) {
						const t = this.parsePlaceholder("Identifier");
						if (!t) return super.parseExport(...arguments);
						if (!this.isContextual("from") && !this.match(u.comma)) return e.specifiers = [], e.source = null, e.declaration = this.finishPlaceholder(t, "Declaration"), this.finishNode(e, "ExportNamedDeclaration");
						this.expectPlugin("exportDefaultFrom");
						const n = this.startNode();
						return n.exported = t, e.specifiers = [this.finishNode(n, "ExportDefaultSpecifier")], super.parseExport(e)
					}
					maybeParseExportDefaultSpecifier(e) {
						return !!(e.specifiers && e.specifiers.length > 0) || super.maybeParseExportDefaultSpecifier(...arguments)
					}
					checkExport(e) {
						const {
							specifiers: t
						} = e;
						t && t.length && (e.specifiers = t.filter(e => "Placeholder" === e.exported.type)), super.checkExport(e), e.specifiers = t
					}
					parseImport(e) {
						const t = this.parsePlaceholder("Identifier");
						if (!t) return super.parseImport(...arguments);
						if (e.specifiers = [], !this.isContextual("from") && !this.match(u.comma)) return e.source = this.finishPlaceholder(t, "StringLiteral"), this.semicolon(), this.finishNode(e, "ImportDeclaration");
						const n = this.startNodeAtNode(t);
						return n.local = t, this.finishNode(n, "ImportDefaultSpecifier"), e.specifiers.push(n), this.eat(u.comma) && (this.maybeParseStarImportSpecifier(e) || this.parseNamedImportSpecifiers(e)), this.expectContextual("from"), e.source = this.parseImportSource(), this.semicolon(), this.finishNode(e, "ImportDeclaration")
					}
					parseImportSource() {
						return this.parsePlaceholder("StringLiteral") || super.parseImportSource(...arguments)
					}
				})
			},
			Ne = Object.keys(_e),
			Ie = {
				sourceType: "script",
				sourceFilename: void 0,
				startLine: 1,
				allowAwaitOutsideFunction: !1,
				allowReturnOutsideFunction: !1,
				allowImportExportEverywhere: !1,
				allowSuperOutsideMethod: !1,
				allowUndeclaredExports: !1,
				plugins: [],
				strictMode: null,
				ranges: !1,
				tokens: !1,
				createParenthesizedExpressions: !1
			};
		class ke {
			constructor(e, t) {
				this.line = e, this.column = t
			}
		}
		class Be {
			constructor(e, t) {
				this.start = e, this.end = t
			}
		}
		class Le {
			constructor() {
				this.sawUnambiguousESM = !1
			}
			hasPlugin(e) {
				return this.plugins.has(e)
			}
			getPluginOption(e, t) {
				if (this.hasPlugin(e)) return this.plugins.get(e)[t]
			}
		}

		function Me(e) {
			return e[e.length - 1]
		}
		class je extends Le {
			addComment(e) {
				this.filename && (e.loc.filename = this.filename), this.state.trailingComments.push(e), this.state.leadingComments.push(e)
			}
			processComment(e) {
				if ("Program" === e.type && e.body.length > 0) return;
				const t = this.state.commentStack;
				let n, r, i, s, o;
				if (this.state.trailingComments.length > 0) this.state.trailingComments[0].start >= e.end ? (i = this.state.trailingComments, this.state.trailingComments = []) : this.state.trailingComments.length = 0;
				else if (t.length > 0) {
					const n = Me(t);
					n.trailingComments && n.trailingComments[0].start >= e.end && (i = n.trailingComments, delete n.trailingComments)
				}
				for (t.length > 0 && Me(t).start >= e.start && (n = t.pop()); t.length > 0 && Me(t).start >= e.start;) r = t.pop();
				if (!r && n && (r = n), n && this.state.leadingComments.length > 0) {
					const t = Me(this.state.leadingComments);
					if ("ObjectProperty" === n.type) {
						if (t.start >= e.start && this.state.commentPreviousNode) {
							for (o = 0; o < this.state.leadingComments.length; o++) this.state.leadingComments[o].end < this.state.commentPreviousNode.end && (this.state.leadingComments.splice(o, 1), o--);
							this.state.leadingComments.length > 0 && (n.trailingComments = this.state.leadingComments, this.state.leadingComments = [])
						}
					} else if ("CallExpression" === e.type && e.arguments && e.arguments.length) {
						const n = Me(e.arguments);
						if (n && t.start >= n.start && t.end <= e.end && this.state.commentPreviousNode) {
							for (o = 0; o < this.state.leadingComments.length; o++) this.state.leadingComments[o].end < this.state.commentPreviousNode.end && (this.state.leadingComments.splice(o, 1), o--);
							this.state.leadingComments.length > 0 && (n.trailingComments = this.state.leadingComments, this.state.leadingComments = [])
						}
					}
				}
				if (r) {
					if (r.leadingComments)
						if (r !== e && r.leadingComments.length > 0 && Me(r.leadingComments).end <= e.start) e.leadingComments = r.leadingComments, delete r.leadingComments;
						else
							for (s = r.leadingComments.length - 2; s >= 0; --s)
								if (r.leadingComments[s].end <= e.start) {
									e.leadingComments = r.leadingComments.splice(0, s + 1);
									break
								}
				} else if (this.state.leadingComments.length > 0)
					if (Me(this.state.leadingComments).end <= e.start) {
						if (this.state.commentPreviousNode)
							for (o = 0; o < this.state.leadingComments.length; o++) this.state.leadingComments[o].end < this.state.commentPreviousNode.end && (this.state.leadingComments.splice(o, 1), o--);
						this.state.leadingComments.length > 0 && (e.leadingComments = this.state.leadingComments, this.state.leadingComments = [])
					} else {
						for (s = 0; s < this.state.leadingComments.length && !(this.state.leadingComments[s].end > e.start); s++);
						const t = this.state.leadingComments.slice(0, s);
						t.length && (e.leadingComments = t), 0 === (i = this.state.leadingComments.slice(s)).length && (i = null)
					}
				this.state.commentPreviousNode = e, i && (i.length && i[0].start >= e.start && Me(i).end <= e.end ? e.innerComments = i : e.trailingComments = i), t.push(e)
			}
		}
		class Re extends je {
			getLocationForPosition(e) {
				let t;
				return t = e === this.state.start ? this.state.startLoc : e === this.state.lastTokStart ? this.state.lastTokStartLoc : e === this.state.end ? this.state.endLoc : e === this.state.lastTokEnd ? this.state.lastTokEndLoc : function (e, t) {
					let n, r = 1,
						i = 0;
					for (Y.lastIndex = 0;
						(n = Y.exec(e)) && n.index < t;) r++, i = Y.lastIndex;
					return new ke(r, t - i)
				}(this.input, e)
			}
			raise(e, t, {
				missingPluginNames: n,
				code: r
			} = {}) {
				const i = this.getLocationForPosition(e);
				t += ` (${i.line}:${i.column})`;
				const s = new SyntaxError(t);
				throw s.pos = e, s.loc = i, n && (s.missingPlugin = n), void 0 !== r && (s.code = r), s
			}
		}
		class Ue {
			constructor() {
				this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.commaAfterSpreadAt = -1, this.inParameters = !1, this.maybeInArrowParameters = !1, this.inPipeline = !1, this.inType = !1, this.noAnonFunctionType = !1, this.inPropertyName = !1, this.inClassProperty = !1, this.hasFlowComment = !1, this.isIterator = !1, this.topicContext = {
					maxNumOfResolvableTopics: 0,
					maxTopicIndex: null
				}, this.soloAwait = !1, this.inFSharpPipelineDirectBody = !1, this.classLevel = 0, this.labels = [], this.decoratorStack = [
					[]
				], this.yieldPos = 0, this.awaitPos = 0, this.tokens = [], this.comments = [], this.trailingComments = [], this.leadingComments = [], this.commentStack = [], this.commentPreviousNode = null, this.pos = 0, this.lineStart = 0, this.type = u.eof, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.lastTokStart = 0, this.lastTokEnd = 0, this.context = [H.braceStatement], this.exprAllowed = !0, this.containsEsc = !1, this.containsOctal = !1, this.octalPosition = null, this.exportedIdentifiers = [], this.invalidTemplateEscapePosition = null
			}
			init(e) {
				this.strict = !1 !== e.strictMode && "module" === e.sourceType, this.curLine = e.startLine, this.startLoc = this.endLoc = this.curPosition()
			}
			curPosition() {
				return new ke(this.curLine, this.pos - this.lineStart)
			}
			clone(e) {
				const t = new Ue,
					n = Object.keys(this);
				for (let r = 0, i = n.length; r < i; r++) {
					const i = n[r];
					let s = this[i];
					!e && Array.isArray(s) && (s = s.slice()), t[i] = s
				}
				return t
			}
		}
		var Ve = function (e) {
			return e >= 48 && e <= 57
		};
		const Xe = new Set(["g", "m", "s", "i", "y", "u"]),
			We = {
				decBinOct: [46, 66, 69, 79, 95, 98, 101, 111],
				hex: [46, 88, 95, 120]
			},
			Ye = {
				bin: [48, 49]
			};
		Ye.oct = [...Ye.bin, 50, 51, 52, 53, 54, 55], Ye.dec = [...Ye.oct, 56, 57], Ye.hex = [...Ye.dec, 65, 66, 67, 68, 69, 70, 97, 98, 99, 100, 101, 102];
		class Ke {
			constructor(e) {
				this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, this.loc = new Be(e.startLoc, e.endLoc)
			}
		}
		class qe extends Re {
			constructor(e, t) {
				super(), this.state = new Ue, this.state.init(e), this.input = t, this.length = t.length, this.isLookahead = !1
			}
			next() {
				this.options.tokens && !this.isLookahead && this.state.tokens.push(new Ke(this.state)), this.state.lastTokEnd = this.state.end, this.state.lastTokStart = this.state.start, this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken()
			}
			eat(e) {
				return !!this.match(e) && (this.next(), !0)
			}
			match(e) {
				return this.state.type === e
			}
			lookahead() {
				const e = this.state;
				this.state = e.clone(!0), this.isLookahead = !0, this.next(), this.isLookahead = !1;
				const t = this.state;
				return this.state = e, t
			}
			setStrict(e) {
				if (this.state.strict = e, this.match(u.num) || this.match(u.string)) {
					for (this.state.pos = this.state.start; this.state.pos < this.state.lineStart;) this.state.lineStart = this.input.lastIndexOf("\n", this.state.lineStart - 2) + 1, --this.state.curLine;
					this.nextToken()
				}
			}
			curContext() {
				return this.state.context[this.state.context.length - 1]
			}
			nextToken() {
				const e = this.curContext();
				e && e.preserveSpace || this.skipSpace(), this.state.containsOctal = !1, this.state.octalPosition = null, this.state.start = this.state.pos, this.state.startLoc = this.state.curPosition(), this.state.pos >= this.length ? this.finishToken(u.eof) : e.override ? e.override(this) : this.getTokenFromCode(this.input.codePointAt(this.state.pos))
			}
			pushComment(e, t, n, r, i, s) {
				const o = {
					type: e ? "CommentBlock" : "CommentLine",
					value: t,
					start: n,
					end: r,
					loc: new Be(i, s)
				};
				this.options.tokens && this.state.tokens.push(o), this.state.comments.push(o), this.addComment(o)
			}
			skipBlockComment() {
				const e = this.state.curPosition(),
					t = this.state.pos,
					n = this.input.indexOf("*/", this.state.pos += 2);
				let r;
				for (-1 === n && this.raise(this.state.pos - 2, "Unterminated comment"), this.state.pos = n + 2, Y.lastIndex = t;
					(r = Y.exec(this.input)) && r.index < this.state.pos;) ++this.state.curLine, this.state.lineStart = r.index + r[0].length;
				this.isLookahead || this.pushComment(!0, this.input.slice(t + 2, n), t, this.state.pos, e, this.state.curPosition())
			}
			skipLineComment(e) {
				const t = this.state.pos,
					n = this.state.curPosition();
				let r = this.input.charCodeAt(this.state.pos += e);
				if (this.state.pos < this.length)
					for (; 10 !== r && 13 !== r && 8232 !== r && 8233 !== r && ++this.state.pos < this.length;) r = this.input.charCodeAt(this.state.pos);
				this.isLookahead || this.pushComment(!1, this.input.slice(t + e, this.state.pos), t, this.state.pos, n, this.state.curPosition())
			}
			skipSpace() {
				e: for (; this.state.pos < this.length;) {
					const e = this.input.charCodeAt(this.state.pos);
					switch (e) {
						case 32:
						case 160:
						case 9:
							++this.state.pos;
							break;
						case 13:
							10 === this.input.charCodeAt(this.state.pos + 1) && ++this.state.pos;
						case 10:
						case 8232:
						case 8233:
							++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
							break;
						case 47:
							switch (this.input.charCodeAt(this.state.pos + 1)) {
								case 42:
									this.skipBlockComment();
									break;
								case 47:
									this.skipLineComment(2);
									break;
								default:
									break e
							}
							break;
						default:
							if (!J(e)) break e;
							++this.state.pos
					}
				}
			}
			finishToken(e, t) {
				this.state.end = this.state.pos, this.state.endLoc = this.state.curPosition();
				const n = this.state.type;
				this.state.type = e, this.state.value = t, this.isLookahead || this.updateContext(n)
			}
			readToken_numberSign() {
				if (0 === this.state.pos && this.readToken_interpreter()) return;
				const e = this.state.pos + 1,
					t = this.input.charCodeAt(e);
				if (t >= 48 && t <= 57 && this.raise(this.state.pos, "Unexpected digit after hash token"), (this.hasPlugin("classPrivateProperties") || this.hasPlugin("classPrivateMethods")) && this.state.classLevel > 0) return ++this.state.pos, void this.finishToken(u.hash);
				"smart" === this.getPluginOption("pipelineOperator", "proposal") ? this.finishOp(u.hash, 1) : this.raise(this.state.pos, "Unexpected character '#'")
			}
			readToken_dot() {
				const e = this.input.charCodeAt(this.state.pos + 1);
				if (e >= 48 && e <= 57) return void this.readNumber(!0);
				const t = this.input.charCodeAt(this.state.pos + 2);
				46 === e && 46 === t ? (this.state.pos += 3, this.finishToken(u.ellipsis)) : (++this.state.pos, this.finishToken(u.dot))
			}
			readToken_slash() {
				if (this.state.exprAllowed && !this.state.inType) return ++this.state.pos, void this.readRegexp();
				61 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(u.assign, 2) : this.finishOp(u.slash, 1)
			}
			readToken_interpreter() {
				if (0 !== this.state.pos || this.length < 2) return !1;
				const e = this.state.pos;
				this.state.pos += 1;
				let t = this.input.charCodeAt(this.state.pos);
				if (33 !== t) return !1;
				for (; 10 !== t && 13 !== t && 8232 !== t && 8233 !== t && ++this.state.pos < this.length;) t = this.input.charCodeAt(this.state.pos);
				const n = this.input.slice(e + 2, this.state.pos);
				return this.finishToken(u.interpreterDirective, n), !0
			}
			readToken_mult_modulo(e) {
				let t = 42 === e ? u.star : u.modulo,
					n = 1,
					r = this.input.charCodeAt(this.state.pos + 1);
				const i = this.state.exprAllowed;
				42 === e && 42 === r && (n++, r = this.input.charCodeAt(this.state.pos + 2), t = u.exponent), 61 !== r || i || (n++, t = u.assign), this.finishOp(t, n)
			}
			readToken_pipe_amp(e) {
				const t = this.input.charCodeAt(this.state.pos + 1);
				t !== e ? 124 !== e || 62 !== t ? 61 !== t ? this.finishOp(124 === e ? u.bitwiseOR : u.bitwiseAND, 1) : this.finishOp(u.assign, 2) : this.finishOp(u.pipeline, 2) : 61 === this.input.charCodeAt(this.state.pos + 2) ? this.finishOp(u.assign, 3) : this.finishOp(124 === e ? u.logicalOR : u.logicalAND, 2)
			}
			readToken_caret() {
				61 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(u.assign, 2) : this.finishOp(u.bitwiseXOR, 1)
			}
			readToken_plus_min(e) {
				const t = this.input.charCodeAt(this.state.pos + 1);
				if (t === e) return 45 !== t || this.inModule || 62 !== this.input.charCodeAt(this.state.pos + 2) || 0 !== this.state.lastTokEnd && !W.test(this.input.slice(this.state.lastTokEnd, this.state.pos)) ? void this.finishOp(u.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), void this.nextToken());
				61 === t ? this.finishOp(u.assign, 2) : this.finishOp(u.plusMin, 1)
			}
			readToken_lt_gt(e) {
				const t = this.input.charCodeAt(this.state.pos + 1);
				let n = 1;
				return t === e ? (n = 62 === e && 62 === this.input.charCodeAt(this.state.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.state.pos + n) ? void this.finishOp(u.assign, n + 1) : void this.finishOp(u.bitShift, n)) : 33 !== t || 60 !== e || this.inModule || 45 !== this.input.charCodeAt(this.state.pos + 2) || 45 !== this.input.charCodeAt(this.state.pos + 3) ? (61 === t && (n = 2), void this.finishOp(u.relational, n)) : (this.skipLineComment(4), this.skipSpace(), void this.nextToken())
			}
			readToken_eq_excl(e) {
				const t = this.input.charCodeAt(this.state.pos + 1);
				if (61 !== t) return 61 === e && 62 === t ? (this.state.pos += 2, void this.finishToken(u.arrow)) : void this.finishOp(61 === e ? u.eq : u.bang, 1);
				this.finishOp(u.equality, 61 === this.input.charCodeAt(this.state.pos + 2) ? 3 : 2)
			}
			readToken_question() {
				const e = this.input.charCodeAt(this.state.pos + 1),
					t = this.input.charCodeAt(this.state.pos + 2);
				63 !== e || this.state.inType ? 46 !== e || t >= 48 && t <= 57 ? (++this.state.pos, this.finishToken(u.question)) : (this.state.pos += 2, this.finishToken(u.questionDot)) : 61 === t ? this.finishOp(u.assign, 3) : this.finishOp(u.nullishCoalescing, 2)
			}
			getTokenFromCode(e) {
				switch (e) {
					case 46:
						return void this.readToken_dot();
					case 40:
						return ++this.state.pos, void this.finishToken(u.parenL);
					case 41:
						return ++this.state.pos, void this.finishToken(u.parenR);
					case 59:
						return ++this.state.pos, void this.finishToken(u.semi);
					case 44:
						return ++this.state.pos, void this.finishToken(u.comma);
					case 91:
						return ++this.state.pos, void this.finishToken(u.bracketL);
					case 93:
						return ++this.state.pos, void this.finishToken(u.bracketR);
					case 123:
						return ++this.state.pos, void this.finishToken(u.braceL);
					case 125:
						return ++this.state.pos, void this.finishToken(u.braceR);
					case 58:
						return void(this.hasPlugin("functionBind") && 58 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(u.doubleColon, 2) : (++this.state.pos, this.finishToken(u.colon)));
					case 63:
						return void this.readToken_question();
					case 96:
						return ++this.state.pos, void this.finishToken(u.backQuote);
					case 48:
						{
							const e = this.input.charCodeAt(this.state.pos + 1);
							if (120 === e || 88 === e) return void this.readRadixNumber(16);
							if (111 === e || 79 === e) return void this.readRadixNumber(8);
							if (98 === e || 66 === e) return void this.readRadixNumber(2)
						}
					case 49:
					case 50:
					case 51:
					case 52:
					case 53:
					case 54:
					case 55:
					case 56:
					case 57:
						return void this.readNumber(!1);
					case 34:
					case 39:
						return void this.readString(e);
					case 47:
						return void this.readToken_slash();
					case 37:
					case 42:
						return void this.readToken_mult_modulo(e);
					case 124:
					case 38:
						return void this.readToken_pipe_amp(e);
					case 94:
						return void this.readToken_caret();
					case 43:
					case 45:
						return void this.readToken_plus_min(e);
					case 60:
					case 62:
						return void this.readToken_lt_gt(e);
					case 61:
					case 33:
						return void this.readToken_eq_excl(e);
					case 126:
						return void this.finishOp(u.tilde, 1);
					case 64:
						return ++this.state.pos, void this.finishToken(u.at);
					case 35:
						return void this.readToken_numberSign();
					case 92:
						return void this.readWord();
					default:
						if (le(e)) return void this.readWord()
				}
				this.raise(this.state.pos, `Unexpected character '${String.fromCodePoint(e)}'`)
			}
			finishOp(e, t) {
				const n = this.input.slice(this.state.pos, this.state.pos + t);
				this.state.pos += t, this.finishToken(e, n)
			}
			readRegexp() {
				const e = this.state.pos;
				let t, n;
				for (;;) {
					this.state.pos >= this.length && this.raise(e, "Unterminated regular expression");
					const r = this.input.charAt(this.state.pos);
					if (W.test(r) && this.raise(e, "Unterminated regular expression"), t) t = !1;
					else {
						if ("[" === r) n = !0;
						else if ("]" === r && n) n = !1;
						else if ("/" === r && !n) break;
						t = "\\" === r
					}++this.state.pos
				}
				const r = this.input.slice(e, this.state.pos);
				++this.state.pos;
				let i = "";
				for (; this.state.pos < this.length;) {
					const e = this.input[this.state.pos],
						t = this.input.codePointAt(this.state.pos);
					if (Xe.has(e)) i.indexOf(e) > -1 && this.raise(this.state.pos + 1, "Duplicate regular expression flag"), ++this.state.pos, i += e;
					else {
						if (!pe(t) && 92 !== t) break;
						this.raise(this.state.pos + 1, "Invalid regular expression flag")
					}
				}
				this.finishToken(u.regexp, {
					pattern: r,
					flags: i
				})
			}
			readInt(e, t) {
				const n = this.state.pos,
					r = 16 === e ? We.hex : We.decBinOct,
					i = 16 === e ? Ye.hex : 10 === e ? Ye.dec : 8 === e ? Ye.oct : Ye.bin;
				let s = 0;
				for (let n = 0, o = null == t ? 1 / 0 : t; n < o; ++n) {
					const t = this.input.charCodeAt(this.state.pos);
					let n;
					if (this.hasPlugin("numericSeparator")) {
						const e = this.input.charCodeAt(this.state.pos - 1),
							n = this.input.charCodeAt(this.state.pos + 1);
						if (95 === t) {
							-1 === i.indexOf(n) && this.raise(this.state.pos, "Invalid or unexpected token"), (r.indexOf(e) > -1 || r.indexOf(n) > -1 || Number.isNaN(n)) && this.raise(this.state.pos, "Invalid or unexpected token"), ++this.state.pos;
							continue
						}
					}
					if ((n = t >= 97 ? t - 97 + 10 : t >= 65 ? t - 65 + 10 : Ve(t) ? t - 48 : 1 / 0) >= e) break;
					++this.state.pos, s = s * e + n
				}
				return this.state.pos === n || null != t && this.state.pos - n !== t ? null : s
			}
			readRadixNumber(e) {
				const t = this.state.pos;
				let n = !1;
				this.state.pos += 2;
				const r = this.readInt(e);
				if (null == r && this.raise(this.state.start + 2, "Expected number in radix " + e), this.hasPlugin("bigInt") && 110 === this.input.charCodeAt(this.state.pos) && (++this.state.pos, n = !0), le(this.input.codePointAt(this.state.pos)) && this.raise(this.state.pos, "Identifier directly after number"), n) {
					const e = this.input.slice(t, this.state.pos).replace(/[_n]/g, "");
					this.finishToken(u.bigint, e)
				} else this.finishToken(u.num, r)
			}
			readNumber(e) {
				const t = this.state.pos;
				let n = !1,
					r = !1;
				e || null !== this.readInt(10) || this.raise(t, "Invalid number");
				let i = this.state.pos - t >= 2 && 48 === this.input.charCodeAt(t);
				i && (this.state.strict && this.raise(t, "Legacy octal literals are not allowed in strict mode"), /[89]/.test(this.input.slice(t, this.state.pos)) && (i = !1));
				let s = this.input.charCodeAt(this.state.pos);
				46 !== s || i || (++this.state.pos, this.readInt(10), n = !0, s = this.input.charCodeAt(this.state.pos)), 69 !== s && 101 !== s || i || (43 !== (s = this.input.charCodeAt(++this.state.pos)) && 45 !== s || ++this.state.pos, null === this.readInt(10) && this.raise(t, "Invalid number"), n = !0, s = this.input.charCodeAt(this.state.pos)), this.hasPlugin("bigInt") && 110 === s && ((n || i) && this.raise(t, "Invalid BigIntLiteral"), ++this.state.pos, r = !0), le(this.input.codePointAt(this.state.pos)) && this.raise(this.state.pos, "Identifier directly after number");
				const o = this.input.slice(t, this.state.pos).replace(/[_n]/g, "");
				if (r) return void this.finishToken(u.bigint, o);
				const a = i ? parseInt(o, 8) : parseFloat(o);
				this.finishToken(u.num, a)
			}
			readCodePoint(e) {
				let t;
				if (123 === this.input.charCodeAt(this.state.pos)) {
					const n = ++this.state.pos;
					if (t = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos, e), ++this.state.pos, null === t) --this.state.invalidTemplateEscapePosition;
					else if (t > 1114111) {
						if (!e) return this.state.invalidTemplateEscapePosition = n - 2, null;
						this.raise(n, "Code point out of bounds")
					}
				} else t = this.readHexChar(4, e);
				return t
			}
			readString(e) {
				let t = "",
					n = ++this.state.pos;
				for (;;) {
					this.state.pos >= this.length && this.raise(this.state.start, "Unterminated string constant");
					const r = this.input.charCodeAt(this.state.pos);
					if (r === e) break;
					92 === r ? (t += this.input.slice(n, this.state.pos), t += this.readEscapedChar(!1), n = this.state.pos) : 8232 === r || 8233 === r ? (++this.state.pos, ++this.state.curLine) : K(r) ? this.raise(this.state.start, "Unterminated string constant") : ++this.state.pos
				}
				t += this.input.slice(n, this.state.pos++), this.finishToken(u.string, t)
			}
			readTmplToken() {
				let e = "",
					t = this.state.pos,
					n = !1;
				for (;;) {
					this.state.pos >= this.length && this.raise(this.state.start, "Unterminated template");
					const r = this.input.charCodeAt(this.state.pos);
					if (96 === r || 36 === r && 123 === this.input.charCodeAt(this.state.pos + 1)) return this.state.pos === this.state.start && this.match(u.template) ? 36 === r ? (this.state.pos += 2, void this.finishToken(u.dollarBraceL)) : (++this.state.pos, void this.finishToken(u.backQuote)) : (e += this.input.slice(t, this.state.pos), void this.finishToken(u.template, n ? null : e));
					if (92 === r) {
						e += this.input.slice(t, this.state.pos);
						const r = this.readEscapedChar(!0);
						null === r ? n = !0 : e += r, t = this.state.pos
					} else if (K(r)) {
						switch (e += this.input.slice(t, this.state.pos), ++this.state.pos, r) {
							case 13:
								10 === this.input.charCodeAt(this.state.pos) && ++this.state.pos;
							case 10:
								e += "\n";
								break;
							default:
								e += String.fromCharCode(r)
						}++this.state.curLine, this.state.lineStart = this.state.pos, t = this.state.pos
					} else ++this.state.pos
				}
			}
			readEscapedChar(e) {
				const t = !e,
					n = this.input.charCodeAt(++this.state.pos);
				switch (++this.state.pos, n) {
					case 110:
						return "\n";
					case 114:
						return "\r";
					case 120:
						{
							const e = this.readHexChar(2, t);
							return null === e ? null : String.fromCharCode(e)
						}
					case 117:
						{
							const e = this.readCodePoint(t);
							return null === e ? null : String.fromCodePoint(e)
						}
					case 116:
						return "\t";
					case 98:
						return "\b";
					case 118:
						return "\v";
					case 102:
						return "\f";
					case 13:
						10 === this.input.charCodeAt(this.state.pos) && ++this.state.pos;
					case 10:
						this.state.lineStart = this.state.pos, ++this.state.curLine;
					case 8232:
					case 8233:
						return "";
					default:
						if (n >= 48 && n <= 55) {
							const t = this.state.pos - 1;
							let n = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/)[0],
								r = parseInt(n, 8);
							r > 255 && (n = n.slice(0, -1), r = parseInt(n, 8)), this.state.pos += n.length - 1;
							const i = this.input.charCodeAt(this.state.pos);
							if ("0" !== n || 56 === i || 57 === i) {
								if (e) return this.state.invalidTemplateEscapePosition = t, null;
								this.state.strict ? this.raise(t, "Octal literal in strict mode") : this.state.containsOctal || (this.state.containsOctal = !0, this.state.octalPosition = t)
							}
							return String.fromCharCode(r)
						}
						return String.fromCharCode(n)
				}
			}
			readHexChar(e, t) {
				const n = this.state.pos,
					r = this.readInt(16, e);
				return null === r && (t ? this.raise(n, "Bad character escape sequence") : (this.state.pos = n - 1, this.state.invalidTemplateEscapePosition = n - 1)), r
			}
			readWord1() {
				let e = "";
				this.state.containsEsc = !1;
				const t = this.state.pos;
				let n = this.state.pos;
				for (; this.state.pos < this.length;) {
					const r = this.input.codePointAt(this.state.pos);
					if (pe(r)) this.state.pos += r <= 65535 ? 1 : 2;
					else if (this.state.isIterator && 64 === r) ++this.state.pos;
					else {
						if (92 !== r) break; {
							this.state.containsEsc = !0, e += this.input.slice(n, this.state.pos);
							const r = this.state.pos,
								i = this.state.pos === t ? le : pe;
							117 !== this.input.charCodeAt(++this.state.pos) && this.raise(this.state.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.state.pos;
							const s = this.readCodePoint(!0);
							i(s, !0) || this.raise(r, "Invalid Unicode escape"), e += String.fromCodePoint(s), n = this.state.pos
						}
					}
				}
				return e + this.input.slice(n, this.state.pos)
			}
			isIterator(e) {
				return "@@iterator" === e || "@@asyncIterator" === e
			}
			readWord() {
				const e = this.readWord1(),
					t = s.get(e) || u.name;
				t.keyword && this.state.containsEsc && this.raise(this.state.pos, `Escape sequence in keyword ${e}`), !this.state.isIterator || this.isIterator(e) && this.state.inType || this.raise(this.state.pos, `Invalid identifier ${e}`), this.finishToken(t, e)
			}
			braceIsBlock(e) {
				const t = this.curContext();
				return t === H.functionExpression || t === H.functionStatement || (e !== u.colon || t !== H.braceStatement && t !== H.braceExpression ? e === u._return || e === u.name && this.state.exprAllowed ? W.test(this.input.slice(this.state.lastTokEnd, this.state.start)) : e === u._else || e === u.semi || e === u.eof || e === u.parenR || e === u.arrow || (e === u.braceL ? t === H.braceStatement : e !== u._var && e !== u._const && e !== u.name && (e === u.relational || !this.state.exprAllowed)) : !t.isExpr)
			}
			updateContext(e) {
				const t = this.state.type;
				let n;
				!t.keyword || e !== u.dot && e !== u.questionDot ? (n = t.updateContext) ? n.call(this, e) : this.state.exprAllowed = t.beforeExpr : this.state.exprAllowed = !1
			}
		}
		const Je = /^('|")((?:\\?.)*?)\1/;
		class Ge extends qe {
			addExtra(e, t, n) {
				if (!e) return;
				(e.extra = e.extra || {})[t] = n
			}
			isRelational(e) {
				return this.match(u.relational) && this.state.value === e
			}
			isLookaheadRelational(e) {
				const t = this.lookahead();
				return t.type === u.relational && t.value === e
			}
			expectRelational(e) {
				this.isRelational(e) ? this.next() : this.unexpected(null, u.relational)
			}
			eatRelational(e) {
				return !!this.isRelational(e) && (this.next(), !0)
			}
			isContextual(e) {
				return this.match(u.name) && this.state.value === e && !this.state.containsEsc
			}
			isLookaheadContextual(e) {
				const t = this.lookahead();
				return t.type === u.name && t.value === e
			}
			eatContextual(e) {
				return this.isContextual(e) && this.eat(u.name)
			}
			expectContextual(e, t) {
				this.eatContextual(e) || this.unexpected(null, t)
			}
			canInsertSemicolon() {
				return this.match(u.eof) || this.match(u.braceR) || this.hasPrecedingLineBreak()
			}
			hasPrecedingLineBreak() {
				return W.test(this.input.slice(this.state.lastTokEnd, this.state.start))
			}
			isLineTerminator() {
				return this.eat(u.semi) || this.canInsertSemicolon()
			}
			semicolon() {
				this.isLineTerminator() || this.unexpected(null, u.semi)
			}
			expect(e, t) {
				this.eat(e) || this.unexpected(t, e)
			}
			assertNoSpace(e = "Unexpected space.") {
				this.state.start > this.state.lastTokEnd && this.raise(this.state.lastTokEnd, e)
			}
			unexpected(e, t = "Unexpected token") {
				throw "string" != typeof t && (t = `Unexpected token, expected "${t.label}"`), this.raise(null != e ? e : this.state.start, t)
			}
			expectPlugin(e, t) {
				if (!this.hasPlugin(e)) throw this.raise(null != t ? t : this.state.start, `This experimental syntax requires enabling the parser plugin: '${e}'`, {
					missingPluginNames: [e]
				});
				return !0
			}
			expectOnePlugin(e, t) {
				if (!e.some(e => this.hasPlugin(e))) throw this.raise(null != t ? t : this.state.start, `This experimental syntax requires enabling one of the following parser plugin(s): '${e.join(", ")}'`, {
					missingPluginNames: e
				})
			}
			checkYieldAwaitInDefaultParams() {
				this.state.yieldPos && (!this.state.awaitPos || this.state.yieldPos < this.state.awaitPos) && this.raise(this.state.yieldPos, "Yield cannot be used as name inside a generator function"), this.state.awaitPos && this.raise(this.state.awaitPos, "Await cannot be used as name inside an async function")
			}
			strictDirective(e) {
				for (;;) {
					q.lastIndex = e, e += q.exec(this.input)[0].length;
					const t = Je.exec(this.input.slice(e));
					if (!t) break;
					if ("use strict" === t[2]) return !0;
					e += t[0].length, q.lastIndex = e, e += q.exec(this.input)[0].length, ";" === this.input[e] && e++
				}
				return !1
			}
		}
		class He {
			constructor(e, t, n) {
				this.type = "", this.start = t, this.end = 0, this.loc = new Be(n), e && e.options.ranges && (this.range = [t, 0]), e && e.filename && (this.loc.filename = e.filename)
			}
			__clone() {
				const e = new He,
					t = Object.keys(this);
				for (let n = 0, r = t.length; n < r; n++) {
					const r = t[n];
					"leadingComments" !== r && "trailingComments" !== r && "innerComments" !== r && (e[r] = this[r])
				}
				return e
			}
		}
		class $e extends Ge {
			startNode() {
				return new He(this, this.state.start, this.state.startLoc)
			}
			startNodeAt(e, t) {
				return new He(this, e, t)
			}
			startNodeAtNode(e) {
				return this.startNodeAt(e.start, e.loc.start)
			}
			finishNode(e, t) {
				return this.finishNodeAt(e, t, this.state.lastTokEnd, this.state.lastTokEndLoc)
			}
			finishNodeAt(e, t, n, r) {
				return e.type = t, e.end = n, e.loc.end = r, this.options.ranges && (e.range[1] = n), this.processComment(e), e
			}
			resetStartLocation(e, t, n) {
				e.start = t, e.loc.start = n, this.options.ranges && (e.range[0] = t)
			}
			resetEndLocation(e, t = this.state.lastTokEnd, n = this.state.lastTokEndLoc) {
				e.end = t, e.loc.end = n, this.options.ranges && (e.range[1] = t)
			}
			resetStartLocationFromNode(e, t) {
				this.resetStartLocation(e, t.start, t.loc.start)
			}
		}
		class ze extends $e {
			toAssignable(e, t, n) {
				if (e) switch (e.type) {
					case "Identifier":
					case "ObjectPattern":
					case "ArrayPattern":
					case "AssignmentPattern":
						break;
					case "ObjectExpression":
						e.type = "ObjectPattern";
						for (let n = 0, r = e.properties.length, i = r - 1; n < r; n++) {
							const r = e.properties[n],
								s = n === i;
							this.toAssignableObjectExpressionProp(r, t, s)
						}
						break;
					case "ObjectProperty":
						this.toAssignable(e.value, t, n);
						break;
					case "SpreadElement":
						{
							this.checkToRestConversion(e),
							e.type = "RestElement";
							const r = e.argument;this.toAssignable(r, t, n);
							break
						}
					case "ArrayExpression":
						e.type = "ArrayPattern", this.toAssignableList(e.elements, t, n);
						break;
					case "AssignmentExpression":
						"=" === e.operator ? (e.type = "AssignmentPattern", delete e.operator) : this.raise(e.left.end, "Only '=' operator can be used for specifying default value.");
						break;
					case "ParenthesizedExpression":
						e.expression = this.toAssignable(e.expression, t, n);
						break;
					case "MemberExpression":
						if (!t) break;
					default:
						{
							const t = "Invalid left-hand side" + (n ? " in " + n : "expression");this.raise(e.start, t)
						}
				}
				return e
			}
			toAssignableObjectExpressionProp(e, t, n) {
				if ("ObjectMethod" === e.type) {
					const t = "get" === e.kind || "set" === e.kind ? "Object pattern can't contain getter or setter" : "Object pattern can't contain methods";
					this.raise(e.key.start, t)
				} else "SpreadElement" !== e.type || n ? this.toAssignable(e, t, "object destructuring pattern") : this.raiseRestNotLast(e.start)
			}
			toAssignableList(e, t, n) {
				let r = e.length;
				if (r) {
					const i = e[r - 1];
					if (i && "RestElement" === i.type) --r;
					else if (i && "SpreadElement" === i.type) {
						i.type = "RestElement";
						const e = i.argument;
						this.toAssignable(e, t, n), "Identifier" !== e.type && "MemberExpression" !== e.type && "ArrayPattern" !== e.type && "ObjectPattern" !== e.type && this.unexpected(e.start), --r
					}
				}
				for (let i = 0; i < r; i++) {
					const r = e[i];
					r && (this.toAssignable(r, t, n), "RestElement" === r.type && this.raiseRestNotLast(r.start))
				}
				return e
			}
			toReferencedList(e, t) {
				return e
			}
			toReferencedListDeep(e, t) {
				this.toReferencedList(e, t);
				for (let t = 0; t < e.length; t++) {
					const n = e[t];
					n && "ArrayExpression" === n.type && this.toReferencedListDeep(n.elements)
				}
				return e
			}
			parseSpread(e, t) {
				const n = this.startNode();
				return this.next(), n.argument = this.parseMaybeAssign(!1, e, void 0, t), -1 === this.state.commaAfterSpreadAt && this.match(u.comma) && (this.state.commaAfterSpreadAt = this.state.start), this.finishNode(n, "SpreadElement")
			}
			parseRestBinding() {
				const e = this.startNode();
				return this.next(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement")
			}
			parseBindingAtom() {
				switch (this.state.type) {
					case u.bracketL:
						{
							const e = this.startNode();
							return this.next(),
							e.elements = this.parseBindingList(u.bracketR, !0),
							this.finishNode(e, "ArrayPattern")
						}
					case u.braceL:
						return this.parseObj(!0)
				}
				return this.parseIdentifier()
			}
			parseBindingList(e, t, n) {
				const r = [];
				let i = !0;
				for (; !this.eat(e);)
					if (i ? i = !1 : this.expect(u.comma), t && this.match(u.comma)) r.push(null);
					else {
						if (this.eat(e)) break;
						if (this.match(u.ellipsis)) {
							r.push(this.parseAssignableListItemTypes(this.parseRestBinding())), this.checkCommaAfterRest(), this.expect(e);
							break
						} {
							const e = [];
							for (this.match(u.at) && this.hasPlugin("decorators") && this.raise(this.state.start, "Stage 2 decorators cannot be used to decorate parameters"); this.match(u.at);) e.push(this.parseDecorator());
							r.push(this.parseAssignableListItem(n, e))
						}
					}
				return r
			}
			parseAssignableListItem(e, t) {
				const n = this.parseMaybeDefault();
				this.parseAssignableListItemTypes(n);
				const r = this.parseMaybeDefault(n.start, n.loc.start, n);
				return t.length && (n.decorators = t), r
			}
			parseAssignableListItemTypes(e) {
				return e
			}
			parseMaybeDefault(e, t, n) {
				if (t = t || this.state.startLoc, e = e || this.state.start, n = n || this.parseBindingAtom(), !this.eat(u.eq)) return n;
				const r = this.startNodeAt(e, t);
				return r.left = n, r.right = this.parseMaybeAssign(), this.finishNode(r, "AssignmentPattern")
			}
			checkLVal(e, t = j, n, r) {
				switch (e.type) {
					case "Identifier":
						if (this.state.strict && te(e.name, this.inModule) && this.raise(e.start, `${t===j?"Assigning to":"Binding"} '${e.name}' in strict mode`), n) {
							const t = `_${e.name}`;
							n[t] ? this.raise(e.start, "Argument name clash") : n[t] = !0
						}
						t === _ && "let" === e.name && this.raise(e.start, "'let' is not allowed to be used as a name in 'let' or 'const' declarations."), t & j || this.scope.declareName(e.name, t, e.start);
						break;
					case "MemberExpression":
						t !== j && this.raise(e.start, "Binding member expression");
						break;
					case "ObjectPattern":
						for (let r = 0, i = e.properties; r < i.length; r++) {
							let e = i[r];
							"ObjectProperty" === e.type && (e = e.value), this.checkLVal(e, t, n, "object destructuring pattern")
						}
						break;
					case "ArrayPattern":
						for (let r = 0, i = e.elements; r < i.length; r++) {
							const e = i[r];
							e && this.checkLVal(e, t, n, "array destructuring pattern")
						}
						break;
					case "AssignmentPattern":
						this.checkLVal(e.left, t, n, "assignment pattern");
						break;
					case "RestElement":
						this.checkLVal(e.argument, t, n, "rest element");
						break;
					case "ParenthesizedExpression":
						this.checkLVal(e.expression, t, n, "parenthesized expression");
						break;
					default:
						{
							const n = (t === j ? "Invalid" : "Binding invalid") + " left-hand side" + (r ? " in " + r : "expression");this.raise(e.start, n)
						}
				}
			}
			checkToRestConversion(e) {
				"Identifier" !== e.argument.type && "MemberExpression" !== e.argument.type && this.raise(e.argument.start, "Invalid rest operator's argument")
			}
			checkCommaAfterRest() {
				this.match(u.comma) && this.raiseRestNotLast(this.state.start)
			}
			checkCommaAfterRestFromSpread() {
				this.state.commaAfterSpreadAt > -1 && this.raiseRestNotLast(this.state.commaAfterSpreadAt)
			}
			raiseRestNotLast(e) {
				this.raise(e, "Rest element must be last element")
			}
		}
		const Qe = e => "ParenthesizedExpression" === e.type ? Qe(e.expression) : e;
		class Ze extends ze {
			checkPropClash(e, t) {
				if ("SpreadElement" === e.type || e.computed || e.kind || e.shorthand) return;
				const n = e.key;
				"__proto__" === ("Identifier" === n.type ? n.name : String(n.value)) && (t.proto && this.raise(n.start, "Redefinition of __proto__ property"), t.proto = !0)
			}
			getExpression() {
				this.scope.enter(l), this.nextToken();
				const e = this.parseExpression();
				return this.match(u.eof) || this.unexpected(), e.comments = this.state.comments, e
			}
			parseExpression(e, t) {
				const n = this.state.start,
					r = this.state.startLoc,
					i = this.parseMaybeAssign(e, t);
				if (this.match(u.comma)) {
					const s = this.startNodeAt(n, r);
					for (s.expressions = [i]; this.eat(u.comma);) s.expressions.push(this.parseMaybeAssign(e, t));
					return this.toReferencedList(s.expressions), this.finishNode(s, "SequenceExpression")
				}
				return i
			}
			parseMaybeAssign(e, t, n, r) {
				const i = this.state.start,
					s = this.state.startLoc;
				if (this.isContextual("yield")) {
					if (this.scope.inGenerator) {
						let t = this.parseYield(e);
						return n && (t = n.call(this, t, i, s)), t
					}
					this.state.exprAllowed = !1
				}
				const o = this.state.commaAfterSpreadAt;
				let a;
				this.state.commaAfterSpreadAt = -1, t ? a = !1 : (t = {
					start: 0
				}, a = !0), (this.match(u.parenL) || this.match(u.name)) && (this.state.potentialArrowAt = this.state.start);
				let c = this.parseMaybeConditional(e, t, r);
				if (n && (c = n.call(this, c, i, s)), this.state.type.isAssign) {
					const n = this.startNodeAt(i, s),
						r = this.state.value;
					n.operator = r, "??=" === r && (this.expectPlugin("nullishCoalescingOperator"), this.expectPlugin("logicalAssignment")), "||=" !== r && "&&=" !== r || this.expectPlugin("logicalAssignment"), n.left = this.match(u.eq) ? this.toAssignable(c, void 0, "assignment expression") : c, t.start = 0, this.checkLVal(c, void 0, void 0, "assignment expression");
					const a = Qe(c);
					let l;
					return "ObjectPattern" === a.type ? l = "`({a}) = 0` use `({a} = 0)`" : "ArrayPattern" === a.type && (l = "`([a]) = 0` use `([a] = 0)`"), l && (c.extra && c.extra.parenthesized || "ParenthesizedExpression" === c.type) && this.raise(a.start, `You're trying to assign to a parenthesized expression, eg. instead of ${l}`), l && this.checkCommaAfterRestFromSpread(), this.state.commaAfterSpreadAt = o, this.next(), n.right = this.parseMaybeAssign(e), this.finishNode(n, "AssignmentExpression")
				}
				return a && t.start && this.unexpected(t.start), this.state.commaAfterSpreadAt = o, c
			}
			parseMaybeConditional(e, t, n) {
				const r = this.state.start,
					i = this.state.startLoc,
					s = this.state.potentialArrowAt,
					o = this.parseExprOps(e, t);
				return "ArrowFunctionExpression" === o.type && o.start === s ? o : t && t.start ? o : this.parseConditional(o, e, r, i, n)
			}
			parseConditional(e, t, n, r, i) {
				if (this.eat(u.question)) {
					const i = this.startNodeAt(n, r);
					return i.test = e, i.consequent = this.parseMaybeAssign(), this.expect(u.colon), i.alternate = this.parseMaybeAssign(t), this.finishNode(i, "ConditionalExpression")
				}
				return e
			}
			parseExprOps(e, t) {
				const n = this.state.start,
					r = this.state.startLoc,
					i = this.state.potentialArrowAt,
					s = this.parseMaybeUnary(t);
				return "ArrowFunctionExpression" === s.type && s.start === i ? s : t && t.start ? s : this.parseExprOp(s, n, r, -1, e)
			}
			parseExprOp(e, t, n, r, i) {
				const s = this.state.type.binop;
				if (!(null == s || i && this.match(u._in)) && s > r) {
					const o = this.state.value;
					if ("|>" === o && this.state.inFSharpPipelineDirectBody) return e;
					const a = this.startNodeAt(t, n);
					a.left = e, a.operator = o, "**" !== o || "UnaryExpression" !== e.type || !this.options.createParenthesizedExpressions && e.extra && e.extra.parenthesized || this.raise(e.argument.start, "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.");
					const c = this.state.type;
					if (c === u.pipeline ? (this.expectPlugin("pipelineOperator"), this.state.inPipeline = !0, this.checkPipelineAtInfixOperator(e, t)) : c === u.nullishCoalescing && this.expectPlugin("nullishCoalescingOperator"), this.next(), c === u.pipeline && "minimal" === this.getPluginOption("pipelineOperator", "proposal") && this.match(u.name) && "await" === this.state.value && this.scope.inAsync) throw this.raise(this.state.start, 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal');
					return a.right = this.parseExprOpRightExpr(c, s, i), this.finishNode(a, c === u.logicalOR || c === u.logicalAND || c === u.nullishCoalescing ? "LogicalExpression" : "BinaryExpression"), this.parseExprOp(a, t, n, r, i)
				}
				return e
			}
			parseExprOpRightExpr(e, t, n) {
				const r = this.state.start,
					i = this.state.startLoc;
				switch (e) {
					case u.pipeline:
						switch (this.getPluginOption("pipelineOperator", "proposal")) {
							case "smart":
								return this.withTopicPermittingContext(() => this.parseSmartPipelineBody(this.parseExprOpBaseRightExpr(e, t, n), r, i));
							case "fsharp":
								return this.withSoloAwaitPermittingContext(() => this.parseFSharpPipelineBody(t, n))
						}
					default:
						return this.parseExprOpBaseRightExpr(e, t, n)
				}
			}
			parseExprOpBaseRightExpr(e, t, n) {
				const r = this.state.start,
					i = this.state.startLoc;
				return this.parseExprOp(this.parseMaybeUnary(), r, i, e.rightAssociative ? t - 1 : t, n)
			}
			parseMaybeUnary(e) {
				if (this.isContextual("await") && (this.scope.inAsync || !this.scope.inFunction && this.options.allowAwaitOutsideFunction)) return this.parseAwait();
				if (this.state.type.prefix) {
					const t = this.startNode(),
						n = this.match(u.incDec);
					if (t.operator = this.state.value, t.prefix = !0, "throw" === t.operator && this.expectPlugin("throwExpressions"), this.next(), t.argument = this.parseMaybeUnary(), e && e.start && this.unexpected(e.start), n) this.checkLVal(t.argument, void 0, void 0, "prefix operation");
					else if (this.state.strict && "delete" === t.operator) {
						const e = t.argument;
						"Identifier" === e.type ? this.raise(t.start, "Deleting local variable in strict mode") : "MemberExpression" === e.type && "PrivateName" === e.property.type && this.raise(t.start, "Deleting a private field is not allowed")
					}
					return this.finishNode(t, n ? "UpdateExpression" : "UnaryExpression")
				}
				const t = this.state.start,
					n = this.state.startLoc;
				let r = this.parseExprSubscripts(e);
				if (e && e.start) return r;
				for (; this.state.type.postfix && !this.canInsertSemicolon();) {
					const e = this.startNodeAt(t, n);
					e.operator = this.state.value, e.prefix = !1, e.argument = r, this.checkLVal(r, void 0, void 0, "postfix operation"), this.next(), r = this.finishNode(e, "UpdateExpression")
				}
				return r
			}
			parseExprSubscripts(e) {
				const t = this.state.start,
					n = this.state.startLoc,
					r = this.state.potentialArrowAt,
					i = this.parseExprAtom(e);
				return "ArrowFunctionExpression" === i.type && i.start === r ? i : e && e.start ? i : this.parseSubscripts(i, t, n)
			}
			parseSubscripts(e, t, n, r) {
				const i = this.atPossibleAsync(e),
					s = {
						optionalChainMember: !1,
						stop: !1
					};
				do {
					e = this.parseSubscript(e, t, n, r, s, i)
				} while (!s.stop);
				return e
			}
			parseSubscript(e, t, n, r, i, s) {
				if (!r && this.eat(u.doubleColon)) {
					const s = this.startNodeAt(t, n);
					return s.object = e, s.callee = this.parseNoCallExpr(), i.stop = !0, this.parseSubscripts(this.finishNode(s, "BindExpression"), t, n, r)
				}
				if (this.match(u.questionDot)) {
					if (this.expectPlugin("optionalChaining"), i.optionalChainMember = !0, r && this.lookahead().type === u.parenL) return i.stop = !0, e;
					this.next();
					const s = this.startNodeAt(t, n);
					return this.eat(u.bracketL) ? (s.object = e, s.property = this.parseExpression(), s.computed = !0, s.optional = !0, this.expect(u.bracketR), this.finishNode(s, "OptionalMemberExpression")) : this.eat(u.parenL) ? (s.callee = e, s.arguments = this.parseCallExpressionArguments(u.parenR, !1), s.optional = !0, this.finishNode(s, "OptionalCallExpression")) : (s.object = e, s.property = this.parseIdentifier(!0), s.computed = !1, s.optional = !0, this.finishNode(s, "OptionalMemberExpression"))
				}
				if (this.eat(u.dot)) {
					const r = this.startNodeAt(t, n);
					return r.object = e, r.property = this.parseMaybePrivateName(), r.computed = !1, i.optionalChainMember ? (r.optional = !1, this.finishNode(r, "OptionalMemberExpression")) : this.finishNode(r, "MemberExpression")
				}
				if (this.eat(u.bracketL)) {
					const r = this.startNodeAt(t, n);
					return r.object = e, r.property = this.parseExpression(), r.computed = !0, this.expect(u.bracketR), i.optionalChainMember ? (r.optional = !1, this.finishNode(r, "OptionalMemberExpression")) : this.finishNode(r, "MemberExpression")
				}
				if (!r && this.match(u.parenL)) {
					const r = this.state.maybeInArrowParameters,
						o = this.state.yieldPos,
						a = this.state.awaitPos;
					this.state.maybeInArrowParameters = !0, this.state.yieldPos = 0, this.state.awaitPos = 0, this.next();
					let c = this.startNodeAt(t, n);
					c.callee = e;
					const l = this.state.commaAfterSpreadAt;
					return this.state.commaAfterSpreadAt = -1, c.arguments = this.parseCallExpressionArguments(u.parenR, s, "Import" === e.type, "Super" !== e.type), i.optionalChainMember ? this.finishOptionalCallExpression(c) : this.finishCallExpression(c), s && this.shouldParseAsyncArrow() ? (i.stop = !0, this.checkCommaAfterRestFromSpread(), c = this.parseAsyncArrowFromCallExpression(this.startNodeAt(t, n), c), this.checkYieldAwaitInDefaultParams(), this.state.yieldPos = o, this.state.awaitPos = a) : (this.toReferencedListDeep(c.arguments), this.state.yieldPos = o || this.state.yieldPos, this.state.awaitPos = a || this.state.awaitPos), this.state.maybeInArrowParameters = r, this.state.commaAfterSpreadAt = l, c
				}
				return this.match(u.backQuote) ? this.parseTaggedTemplateExpression(t, n, e, i) : (i.stop = !0, e)
			}
			parseTaggedTemplateExpression(e, t, n, r, i) {
				const s = this.startNodeAt(e, t);
				return s.tag = n, s.quasi = this.parseTemplate(!0), i && (s.typeParameters = i), r.optionalChainMember && this.raise(e, "Tagged Template Literals are not allowed in optionalChain"), this.finishNode(s, "TaggedTemplateExpression")
			}
			atPossibleAsync(e) {
				return "Identifier" === e.type && "async" === e.name && this.state.lastTokEnd === e.end && !this.canInsertSemicolon() && "async" === this.input.slice(e.start, e.end)
			}
			finishCallExpression(e) {
				if ("Import" === e.callee.type) {
					1 !== e.arguments.length && this.raise(e.start, "import() requires exactly one argument");
					const t = e.arguments[0];
					t && "SpreadElement" === t.type && this.raise(t.start, "... is not allowed in import()")
				}
				return this.finishNode(e, "CallExpression")
			}
			finishOptionalCallExpression(e) {
				if ("Import" === e.callee.type) {
					1 !== e.arguments.length && this.raise(e.start, "import() requires exactly one argument");
					const t = e.arguments[0];
					t && "SpreadElement" === t.type && this.raise(t.start, "... is not allowed in import()")
				}
				return this.finishNode(e, "OptionalCallExpression")
			}
			parseCallExpressionArguments(e, t, n, r) {
				const i = [];
				let s, o = !0;
				const a = this.state.inFSharpPipelineDirectBody;
				for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(e);) {
					if (o) o = !1;
					else if (this.expect(u.comma), this.eat(e)) {
						n && this.raise(this.state.lastTokStart, "Trailing comma is disallowed inside import(...) arguments");
						break
					}
					this.match(u.parenL) && !s && (s = this.state.start), i.push(this.parseExprListItem(!1, t ? {
						start: 0
					} : void 0, t ? {
						start: 0
					} : void 0, r))
				}
				return t && s && this.shouldParseAsyncArrow() && this.unexpected(), this.state.inFSharpPipelineDirectBody = a, i
			}
			shouldParseAsyncArrow() {
				return this.match(u.arrow) && !this.canInsertSemicolon()
			}
			parseAsyncArrowFromCallExpression(e, t) {
				return this.expect(u.arrow), this.parseArrowExpression(e, t.arguments, !0), e
			}
			parseNoCallExpr() {
				const e = this.state.start,
					t = this.state.startLoc;
				return this.parseSubscripts(this.parseExprAtom(), e, t, !0)
			}
			parseExprAtom(e) {
				this.state.type === u.slash && this.readRegexp();
				const t = this.state.potentialArrowAt === this.state.start;
				let n;
				switch (this.state.type) {
					case u._super:
						return this.scope.allowSuper || this.options.allowSuperOutsideMethod || this.raise(this.state.start, "super is only allowed in object methods and classes"), n = this.startNode(), this.next(), !this.match(u.parenL) || this.scope.allowDirectSuper || this.options.allowSuperOutsideMethod || this.raise(n.start, "super() is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?"), this.match(u.parenL) || this.match(u.bracketL) || this.match(u.dot) || this.unexpected(), this.finishNode(n, "Super");
					case u._import:
						return n = this.startNode(), this.next(), this.match(u.dot) ? this.parseImportMetaProperty(n) : (this.expectPlugin("dynamicImport", n.start), this.match(u.parenL) || this.unexpected(null, u.parenL), this.finishNode(n, "Import"));
					case u._this:
						return n = this.startNode(), this.next(), this.finishNode(n, "ThisExpression");
					case u.name:
						{
							n = this.startNode();
							const e = this.state.containsEsc,
								r = this.parseIdentifier();
							if (!e && "async" === r.name && this.match(u._function) && !this.canInsertSemicolon()) return this.next(), this.parseFunction(n, void 0, !0);
							if (t && !e && "async" === r.name && this.match(u.name) && !this.canInsertSemicolon()) {
								const e = [this.parseIdentifier()];
								return this.expect(u.arrow), this.parseArrowExpression(n, e, !0), n
							}
							return t && this.match(u.arrow) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(n, [r], !1), n) : r
						}
					case u._do:
						{
							this.expectPlugin("doExpressions");
							const e = this.startNode();this.next();
							const t = this.state.labels;
							return this.state.labels = [],
							e.body = this.parseBlock(),
							this.state.labels = t,
							this.finishNode(e, "DoExpression")
						}
					case u.regexp:
						{
							const e = this.state.value;
							return (n = this.parseLiteral(e.value, "RegExpLiteral")).pattern = e.pattern,
							n.flags = e.flags,
							n
						}
					case u.num:
						return this.parseLiteral(this.state.value, "NumericLiteral");
					case u.bigint:
						return this.parseLiteral(this.state.value, "BigIntLiteral");
					case u.string:
						return this.parseLiteral(this.state.value, "StringLiteral");
					case u._null:
						return n = this.startNode(), this.next(), this.finishNode(n, "NullLiteral");
					case u._true:
					case u._false:
						return this.parseBooleanLiteral();
					case u.parenL:
						return this.parseParenAndDistinguishExpression(t);
					case u.bracketL:
						{
							const t = this.state.inFSharpPipelineDirectBody;
							return this.state.inFSharpPipelineDirectBody = !1,
							n = this.startNode(),
							this.next(),
							n.elements = this.parseExprList(u.bracketR, !0, e),
							this.state.maybeInArrowParameters || this.toReferencedList(n.elements),
							this.state.inFSharpPipelineDirectBody = t,
							this.finishNode(n, "ArrayExpression")
						}
					case u.braceL:
						{
							const t = this.state.inFSharpPipelineDirectBody;this.state.inFSharpPipelineDirectBody = !1;
							const n = this.parseObj(!1, e);
							return this.state.inFSharpPipelineDirectBody = t,
							n
						}
					case u._function:
						return this.parseFunctionExpression();
					case u.at:
						this.parseDecorators();
					case u._class:
						return n = this.startNode(), this.takeDecorators(n), this.parseClass(n, !1);
					case u._new:
						return this.parseNew();
					case u.backQuote:
						return this.parseTemplate(!1);
					case u.doubleColon:
						{
							n = this.startNode(),
							this.next(),
							n.object = null;
							const e = n.callee = this.parseNoCallExpr();
							if ("MemberExpression" === e.type) return this.finishNode(n, "BindExpression");
							throw this.raise(e.start, "Binding should be performed on object property.")
						}
					case u.hash:
						if (this.state.inPipeline) {
							if (n = this.startNode(), "smart" !== this.getPluginOption("pipelineOperator", "proposal") && this.raise(n.start, "Primary Topic Reference found but pipelineOperator not passed 'smart' for 'proposal' option."), this.next(), this.primaryTopicReferenceIsAllowedInCurrentTopicContext()) return this.registerTopicReference(), this.finishNode(n, "PipelinePrimaryTopicReference");
							throw this.raise(n.start, "Topic reference was used in a lexical context without topic binding")
						}
					default:
						throw this.unexpected()
				}
			}
			parseBooleanLiteral() {
				const e = this.startNode();
				return e.value = this.match(u._true), this.next(), this.finishNode(e, "BooleanLiteral")
			}
			parseMaybePrivateName() {
				if (this.match(u.hash)) {
					this.expectOnePlugin(["classPrivateProperties", "classPrivateMethods"]);
					const e = this.startNode();
					return this.next(), this.assertNoSpace("Unexpected space between # and identifier"), e.id = this.parseIdentifier(!0), this.finishNode(e, "PrivateName")
				}
				return this.parseIdentifier(!0)
			}
			parseFunctionExpression() {
				const e = this.startNode();
				let t = this.startNode();
				return this.next(), t = this.createIdentifier(t, "function"), this.scope.inGenerator && this.eat(u.dot) ? this.parseMetaProperty(e, t, "sent") : this.parseFunction(e)
			}
			parseMetaProperty(e, t, n) {
				e.meta = t, "function" === t.name && "sent" === n && (this.isContextual(n) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected());
				const r = this.state.containsEsc;
				return e.property = this.parseIdentifier(!0), (e.property.name !== n || r) && this.raise(e.property.start, `The only valid meta property for ${t.name} is ${t.name}.${n}`), this.finishNode(e, "MetaProperty")
			}
			parseImportMetaProperty(e) {
				const t = this.createIdentifier(this.startNodeAtNode(e), "import");
				return this.expect(u.dot), this.isContextual("meta") ? this.expectPlugin("importMeta") : this.hasPlugin("importMeta") || this.raise(t.start, "Dynamic imports require a parameter: import('a.js')"), this.inModule || this.raise(t.start, "import.meta may appear only with 'sourceType: \"module\"'", {
					code: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
				}), this.sawUnambiguousESM = !0, this.parseMetaProperty(e, t, "meta")
			}
			parseLiteral(e, t, n, r) {
				n = n || this.state.start, r = r || this.state.startLoc;
				const i = this.startNodeAt(n, r);
				return this.addExtra(i, "rawValue", e), this.addExtra(i, "raw", this.input.slice(n, this.state.end)), i.value = e, this.next(), this.finishNode(i, t)
			}
			parseParenAndDistinguishExpression(e) {
				const t = this.state.start,
					n = this.state.startLoc;
				let r;
				this.expect(u.parenL);
				const i = this.state.maybeInArrowParameters,
					s = this.state.yieldPos,
					o = this.state.awaitPos,
					a = this.state.inFSharpPipelineDirectBody;
				this.state.maybeInArrowParameters = !0, this.state.yieldPos = 0, this.state.awaitPos = 0, this.state.inFSharpPipelineDirectBody = !1;
				const c = this.state.start,
					l = this.state.startLoc,
					p = [],
					h = {
						start: 0
					},
					f = {
						start: 0
					};
				let d, y, m = !0;
				for (; !this.match(u.parenR);) {
					if (m) m = !1;
					else if (this.expect(u.comma, f.start || null), this.match(u.parenR)) {
						y = this.state.start;
						break
					}
					if (this.match(u.ellipsis)) {
						const e = this.state.start,
							t = this.state.startLoc;
						d = this.state.start, p.push(this.parseParenItem(this.parseRestBinding(), e, t)), this.checkCommaAfterRest();
						break
					}
					p.push(this.parseMaybeAssign(!1, h, this.parseParenItem, f))
				}
				const g = this.state.start,
					E = this.state.startLoc;
				this.expect(u.parenR), this.state.maybeInArrowParameters = i, this.state.inFSharpPipelineDirectBody = a;
				let T = this.startNodeAt(t, n);
				if (e && this.shouldParseArrow() && (T = this.parseArrow(T))) {
					this.checkYieldAwaitInDefaultParams(), this.state.yieldPos = s, this.state.awaitPos = o;
					for (let e = 0; e < p.length; e++) {
						const t = p[e];
						t.extra && t.extra.parenthesized && this.unexpected(t.extra.parenStart)
					}
					return this.parseArrowExpression(T, p, !1), T
				}
				if (this.state.yieldPos = s || this.state.yieldPos, this.state.awaitPos = o || this.state.awaitPos, p.length || this.unexpected(this.state.lastTokStart), y && this.unexpected(y), d && this.unexpected(d), h.start && this.unexpected(h.start), f.start && this.unexpected(f.start), this.toReferencedListDeep(p, !0), p.length > 1 ? ((r = this.startNodeAt(c, l)).expressions = p, this.finishNodeAt(r, "SequenceExpression", g, E)) : r = p[0], !this.options.createParenthesizedExpressions) return this.addExtra(r, "parenthesized", !0), this.addExtra(r, "parenStart", t), r;
				const A = this.startNodeAt(t, n);
				return A.expression = r, this.finishNode(A, "ParenthesizedExpression"), A
			}
			shouldParseArrow() {
				return !this.canInsertSemicolon()
			}
			parseArrow(e) {
				if (this.eat(u.arrow)) return e
			}
			parseParenItem(e, t, n) {
				return e
			}
			parseNew() {
				const e = this.startNode(),
					t = this.parseIdentifier(!0);
				if (this.eat(u.dot)) {
					const n = this.parseMetaProperty(e, t, "target");
					if (!this.scope.inNonArrowFunction && !this.state.inClassProperty) {
						let e = "new.target can only be used in functions";
						this.hasPlugin("classProperties") && (e += " or class properties"), this.raise(n.start, e)
					}
					return n
				}
				return e.callee = this.parseNoCallExpr(), "Import" === e.callee.type ? this.raise(e.callee.start, "Cannot use new with import(...)") : "OptionalMemberExpression" === e.callee.type || "OptionalCallExpression" === e.callee.type ? this.raise(this.state.lastTokEnd, "constructors in/after an Optional Chain are not allowed") : this.eat(u.questionDot) && this.raise(this.state.start, "constructors in/after an Optional Chain are not allowed"), this.parseNewArguments(e), this.finishNode(e, "NewExpression")
			}
			parseNewArguments(e) {
				if (this.eat(u.parenL)) {
					const t = this.parseExprList(u.parenR);
					this.toReferencedList(t), e.arguments = t
				} else e.arguments = []
			}
			parseTemplateElement(e) {
				const t = this.startNode();
				return null === this.state.value && (e ? this.state.invalidTemplateEscapePosition = null : this.raise(this.state.invalidTemplateEscapePosition || 0, "Invalid escape sequence in template")), t.value = {
					raw: this.input.slice(this.state.start, this.state.end).replace(/\r\n?/g, "\n"),
					cooked: this.state.value
				}, this.next(), t.tail = this.match(u.backQuote), this.finishNode(t, "TemplateElement")
			}
			parseTemplate(e) {
				const t = this.startNode();
				this.next(), t.expressions = [];
				let n = this.parseTemplateElement(e);
				for (t.quasis = [n]; !n.tail;) this.expect(u.dollarBraceL), t.expressions.push(this.parseExpression()), this.expect(u.braceR), t.quasis.push(n = this.parseTemplateElement(e));
				return this.next(), this.finishNode(t, "TemplateLiteral")
			}
			parseObj(e, t) {
				const n = Object.create(null);
				let r = !0;
				const i = this.startNode();
				for (i.properties = [], this.next(); !this.eat(u.braceR);) {
					if (r) r = !1;
					else if (this.expect(u.comma), this.eat(u.braceR)) break;
					const s = this.parseObjectMember(e, t);
					e || this.checkPropClash(s, n), s.shorthand && this.addExtra(s, "shorthand", !0), i.properties.push(s)
				}
				return this.finishNode(i, e ? "ObjectPattern" : "ObjectExpression")
			}
			isAsyncProp(e) {
				return !e.computed && "Identifier" === e.key.type && "async" === e.key.name && (this.match(u.name) || this.match(u.num) || this.match(u.string) || this.match(u.bracketL) || this.state.type.keyword || this.match(u.star)) && !this.hasPrecedingLineBreak()
			}
			parseObjectMember(e, t) {
				let n = [];
				if (this.match(u.at))
					if (this.hasPlugin("decorators")) this.raise(this.state.start, "Stage 2 decorators disallow object literal property decorators");
					else
						for (; this.match(u.at);) n.push(this.parseDecorator());
				const r = this.startNode();
				let i, s, o = !1,
					a = !1;
				if (this.match(u.ellipsis)) return n.length && this.unexpected(), e ? (this.next(), r.argument = this.parseIdentifier(), this.checkCommaAfterRest(), this.finishNode(r, "RestElement")) : this.parseSpread();
				n.length && (r.decorators = n, n = []), r.method = !1, (e || t) && (i = this.state.start, s = this.state.startLoc), e || (o = this.eat(u.star));
				const c = this.state.containsEsc;
				return this.parsePropertyName(r), e || c || o || !this.isAsyncProp(r) ? a = !1 : (a = !0, o = this.eat(u.star), this.parsePropertyName(r)), this.parseObjPropValue(r, i, s, o, a, e, t, c), r
			}
			isGetterOrSetterMethod(e, t) {
				return !t && !e.computed && "Identifier" === e.key.type && ("get" === e.key.name || "set" === e.key.name) && (this.match(u.string) || this.match(u.num) || this.match(u.bracketL) || this.match(u.name) || !!this.state.type.keyword)
			}
			getGetterSetterExpectedParamCount(e) {
				return "get" === e.kind ? 0 : 1
			}
			checkGetterSetterParams(e) {
				const t = this.getGetterSetterExpectedParamCount(e),
					n = e.start;
				e.params.length !== t && ("get" === e.kind ? this.raise(n, "getter must not have any formal parameters") : this.raise(n, "setter must have exactly one formal parameter")), "set" === e.kind && "RestElement" === e.params[e.params.length - 1].type && this.raise(n, "setter function argument must not be a rest parameter")
			}
			parseObjectMethod(e, t, n, r, i) {
				return n || t || this.match(u.parenL) ? (r && this.unexpected(), e.kind = "method", e.method = !0, this.parseMethod(e, t, n, !1, !1, "ObjectMethod")) : !i && this.isGetterOrSetterMethod(e, r) ? ((t || n) && this.unexpected(), e.kind = e.key.name, this.parsePropertyName(e), this.parseMethod(e, !1, !1, !1, !1, "ObjectMethod"), this.checkGetterSetterParams(e), e) : void 0
			}
			parseObjectProperty(e, t, n, r, i) {
				return e.shorthand = !1, this.eat(u.colon) ? (e.value = r ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssign(!1, i), this.finishNode(e, "ObjectProperty")) : e.computed || "Identifier" !== e.key.type ? void 0 : (this.checkReservedWord(e.key.name, e.key.start, !0, !0), r ? e.value = this.parseMaybeDefault(t, n, e.key.__clone()) : this.match(u.eq) && i ? (i.start || (i.start = this.state.start), e.value = this.parseMaybeDefault(t, n, e.key.__clone())) : e.value = e.key.__clone(), e.shorthand = !0, this.finishNode(e, "ObjectProperty"))
			}
			parseObjPropValue(e, t, n, r, i, s, o, a) {
				const u = this.parseObjectMethod(e, r, i, s, a) || this.parseObjectProperty(e, t, n, s, o);
				return u || this.unexpected(), u
			}
			parsePropertyName(e) {
				if (this.eat(u.bracketL)) e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(u.bracketR);
				else {
					const t = this.state.inPropertyName;
					this.state.inPropertyName = !0, e.key = this.match(u.num) || this.match(u.string) ? this.parseExprAtom() : this.parseMaybePrivateName(), "PrivateName" !== e.key.type && (e.computed = !1), this.state.inPropertyName = t
				}
				return e.key
			}
			initFunction(e, t) {
				e.id = null, e.generator = !1, e.async = !!t
			}
			parseMethod(e, t, n, r, i, s, o = !1) {
				const a = this.state.yieldPos,
					u = this.state.awaitPos;
				this.state.yieldPos = 0, this.state.awaitPos = 0, this.initFunction(e, n), e.generator = !!t;
				const c = r;
				return this.scope.enter(A(n, e.generator) | m | (o ? E : 0) | (i ? g : 0)), this.parseFunctionParams(e, c), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBodyAndFinish(e, s, !0), this.scope.exit(), this.state.yieldPos = a, this.state.awaitPos = u, e
			}
			parseArrowExpression(e, t, n) {
				this.scope.enter(A(n, !1) | d), this.initFunction(e, n);
				const r = this.state.maybeInArrowParameters,
					i = this.state.yieldPos,
					s = this.state.awaitPos;
				return this.state.maybeInArrowParameters = !1, this.state.yieldPos = 0, this.state.awaitPos = 0, t && this.setArrowFunctionParameters(e, t), this.parseFunctionBody(e, !0), this.scope.exit(), this.state.maybeInArrowParameters = r, this.state.yieldPos = i, this.state.awaitPos = s, this.finishNode(e, "ArrowFunctionExpression")
			}
			setArrowFunctionParameters(e, t) {
				e.params = this.toAssignableList(t, !0, "arrow function parameters")
			}
			isStrictBody(e) {
				if ("BlockStatement" === e.body.type && e.body.directives.length)
					for (let t = 0, n = e.body.directives; t < n.length; t++) {
						if ("use strict" === n[t].value.value) return !0
					}
				return !1
			}
			parseFunctionBodyAndFinish(e, t, n = !1) {
				this.parseFunctionBody(e, !1, n), this.finishNode(e, t)
			}
			parseFunctionBody(e, t, n = !1) {
				const r = t && !this.match(u.braceL),
					i = this.state.strict;
				let s = !1;
				const o = this.state.inParameters;
				if (this.state.inParameters = !1, r) e.body = this.parseMaybeAssign(), this.checkParams(e, !1, t);
				else {
					const r = !this.isSimpleParamList(e.params);
					if ((!i || r) && (s = this.strictDirective(this.state.end)) && r) {
						const t = "method" !== e.kind && "constructor" !== e.kind || !e.key ? e.start : e.key.end;
						this.raise(t, "Illegal 'use strict' directive in function with non-simple parameter list")
					}
					const o = this.state.labels;
					this.state.labels = [], s && (this.state.strict = !0), this.checkParams(e, !(i || s || t || n || r), t), e.body = this.parseBlock(!0, !1), this.state.labels = o
				}
				this.state.inParameters = o, this.state.strict && e.id && this.checkLVal(e.id, R, void 0, "function name"), this.state.strict = i
			}
			isSimpleParamList(e) {
				for (let t = 0, n = e.length; t < n; t++)
					if ("Identifier" !== e[t].type) return !1;
				return !0
			}
			checkParams(e, t, n) {
				const r = Object.create(null);
				for (let n = 0; n < e.params.length; n++) this.checkLVal(e.params[n], N, t ? null : r, "function paramter list")
			}
			parseExprList(e, t, n) {
				const r = [];
				let i = !0;
				for (; !this.eat(e);) {
					if (i) i = !1;
					else if (this.expect(u.comma), this.eat(e)) break;
					r.push(this.parseExprListItem(t, n))
				}
				return r
			}
			parseExprListItem(e, t, n, r) {
				let i;
				if (e && this.match(u.comma)) i = null;
				else if (this.match(u.ellipsis)) {
					const e = this.state.start,
						r = this.state.startLoc;
					i = this.parseParenItem(this.parseSpread(t, n), e, r)
				} else if (this.match(u.question)) {
					this.expectPlugin("partialApplication"), r || this.raise(this.state.start, "Unexpected argument placeholder");
					const e = this.startNode();
					this.next(), i = this.finishNode(e, "ArgumentPlaceholder")
				} else i = this.parseMaybeAssign(!1, t, this.parseParenItem, n);
				return i
			}
			parseIdentifier(e) {
				const t = this.startNode(),
					n = this.parseIdentifierName(t.start, e);
				return this.createIdentifier(t, n)
			}
			createIdentifier(e, t) {
				return e.name = t, e.loc.identifierName = t, this.finishNode(e, "Identifier")
			}
			parseIdentifierName(e, t) {
				let n;
				if (this.match(u.name)) n = this.state.value;
				else {
					if (!this.state.type.keyword) throw this.unexpected();
					"class" !== (n = this.state.type.keyword) && "function" !== n || this.state.lastTokEnd === this.state.lastTokStart + 1 && 46 === this.input.charCodeAt(this.state.lastTokStart) || this.state.context.pop()
				}
				return t || this.checkReservedWord(n, this.state.start, !!this.state.type.keyword, !1), this.next(), n
			}
			checkReservedWord(e, t, n, r) {
				this.scope.inGenerator && "yield" === e && this.raise(t, "Can not use 'yield' as identifier inside a generator"), this.scope.inAsync && "await" === e && this.raise(t, "Can not use 'await' as identifier inside an async function"), this.state.inClassProperty && "arguments" === e && this.raise(t, "'arguments' is not allowed in class field initializer"), n && function (e) {
					return s.has(e)
				}(e) && this.raise(t, `Unexpected keyword '${e}'`), (this.state.strict ? r ? te : ee : Z)(e, this.inModule) && (this.scope.inAsync || "await" !== e || this.raise(t, "Can not use keyword 'await' outside an async function"), this.raise(t, `Unexpected reserved word '${e}'`))
			}
			parseAwait() {
				this.state.awaitPos || (this.state.awaitPos = this.state.start);
				const e = this.startNode();
				return this.next(), this.state.inParameters && this.raise(e.start, "await is not allowed in async function parameters"), this.match(u.star) && this.raise(e.start, "await* has been removed from the async functions proposal. Use Promise.all() instead."), this.state.soloAwait || (e.argument = this.parseMaybeUnary()), this.finishNode(e, "AwaitExpression")
			}
			parseYield(e) {
				this.state.yieldPos || (this.state.yieldPos = this.state.start);
				const t = this.startNode();
				return this.state.inParameters && this.raise(t.start, "yield is not allowed in generator parameters"), this.next(), this.match(u.semi) || !this.match(u.star) && !this.state.type.startsExpr || this.canInsertSemicolon() ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(u.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression")
			}
			checkPipelineAtInfixOperator(e, t) {
				if ("smart" === this.getPluginOption("pipelineOperator", "proposal") && "SequenceExpression" === e.type) throw this.raise(t, "Pipeline head should not be a comma-separated sequence expression")
			}
			parseSmartPipelineBody(e, t, n) {
				const r = this.checkSmartPipelineBodyStyle(e);
				return this.checkSmartPipelineBodyEarlyErrors(e, r, t), this.parseSmartPipelineBodyInStyle(e, r, t, n)
			}
			checkSmartPipelineBodyEarlyErrors(e, t, n) {
				if (this.match(u.arrow)) throw this.raise(this.state.start, 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized');
				if ("PipelineTopicExpression" === t && "SequenceExpression" === e.type) throw this.raise(n, "Pipeline body may not be a comma-separated sequence expression")
			}
			parseSmartPipelineBodyInStyle(e, t, n, r) {
				const i = this.startNodeAt(n, r);
				switch (t) {
					case "PipelineBareFunction":
						i.callee = e;
						break;
					case "PipelineBareConstructor":
						i.callee = e.callee;
						break;
					case "PipelineBareAwaitedFunction":
						i.callee = e.argument;
						break;
					case "PipelineTopicExpression":
						if (!this.topicReferenceWasUsedInCurrentTopicContext()) throw this.raise(n, "Pipeline is in topic style but does not use topic reference");
						i.expression = e;
						break;
					default:
						throw this.raise(n, `Unknown pipeline style ${t}`)
				}
				return this.finishNode(i, t)
			}
			checkSmartPipelineBodyStyle(e) {
				return e.type, this.isSimpleReference(e) ? "PipelineBareFunction" : "PipelineTopicExpression"
			}
			isSimpleReference(e) {
				switch (e.type) {
					case "MemberExpression":
						return !e.computed && this.isSimpleReference(e.object);
					case "Identifier":
						return !0;
					default:
						return !1
				}
			}
			withTopicPermittingContext(e) {
				const t = this.state.topicContext;
				this.state.topicContext = {
					maxNumOfResolvableTopics: 1,
					maxTopicIndex: null
				};
				try {
					return e()
				} finally {
					this.state.topicContext = t
				}
			}
			withTopicForbiddingContext(e) {
				const t = this.state.topicContext;
				this.state.topicContext = {
					maxNumOfResolvableTopics: 0,
					maxTopicIndex: null
				};
				try {
					return e()
				} finally {
					this.state.topicContext = t
				}
			}
			withSoloAwaitPermittingContext(e) {
				const t = this.state.soloAwait;
				this.state.soloAwait = !0;
				try {
					return e()
				} finally {
					this.state.soloAwait = t
				}
			}
			registerTopicReference() {
				this.state.topicContext.maxTopicIndex = 0
			}
			primaryTopicReferenceIsAllowedInCurrentTopicContext() {
				return this.state.topicContext.maxNumOfResolvableTopics >= 1
			}
			topicReferenceWasUsedInCurrentTopicContext() {
				return null != this.state.topicContext.maxTopicIndex && this.state.topicContext.maxTopicIndex >= 0
			}
			parseFSharpPipelineBody(e, t) {
				const n = this.state.start,
					r = this.state.startLoc;
				this.state.potentialArrowAt = this.state.start;
				const i = this.state.inFSharpPipelineDirectBody;
				this.state.inFSharpPipelineDirectBody = !0;
				const s = this.parseExprOp(this.parseMaybeUnary(), n, r, e, t);
				return this.state.inFSharpPipelineDirectBody = i, s
			}
		}
		const et = {
				kind: "loop"
			},
			tt = {
				kind: "switch"
			},
			nt = 0,
			rt = 1,
			it = 2,
			st = 4;
		class ot extends Ze {
			parseTopLevel(e, t) {
				if (t.sourceType = this.options.sourceType, t.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(t, !0, !0, u.eof), this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0)
					for (let e = 0, t = Array.from(this.scope.undefinedExports); e < t.length; e++) {
						const [n] = t[e], r = this.scope.undefinedExports.get(n);
						this.raise(r, `Export '${n}' is not defined`)
					}
				return e.program = this.finishNode(t, "Program"), e.comments = this.state.comments, this.options.tokens && (e.tokens = this.state.tokens), this.finishNode(e, "File")
			}
			stmtToDirective(e) {
				const t = e.expression,
					n = this.startNodeAt(t.start, t.loc.start),
					r = this.startNodeAt(e.start, e.loc.start),
					i = this.input.slice(t.start, t.end),
					s = n.value = i.slice(1, -1);
				return this.addExtra(n, "raw", i), this.addExtra(n, "rawValue", s), r.value = this.finishNodeAt(n, "DirectiveLiteral", t.end, t.loc.end), this.finishNodeAt(r, "Directive", e.end, e.loc.end)
			}
			parseInterpreterDirective() {
				if (!this.match(u.interpreterDirective)) return null;
				const e = this.startNode();
				return e.value = this.state.value, this.next(), this.finishNode(e, "InterpreterDirective")
			}
			isLet(e) {
				if (!this.isContextual("let")) return !1;
				q.lastIndex = this.state.pos;
				const t = q.exec(this.input),
					n = this.state.pos + t[0].length,
					r = this.input.charCodeAt(n);
				if (91 === r) return !0;
				if (e) return !1;
				if (123 === r) return !0;
				if (le(r)) {
					let e = n + 1;
					for (; pe(this.input.charCodeAt(e));) ++e;
					const t = this.input.slice(n, e);
					if (!ne.test(t)) return !0
				}
				return !1
			}
			parseStatement(e, t) {
				return this.match(u.at) && this.parseDecorators(!0), this.parseStatementContent(e, t)
			}
			parseStatementContent(e, t) {
				let n = this.state.type;
				const r = this.startNode();
				let i;
				switch (this.isLet(e) && (n = u._var, i = "let"), n) {
					case u._break:
					case u._continue:
						return this.parseBreakContinueStatement(r, n.keyword);
					case u._debugger:
						return this.parseDebuggerStatement(r);
					case u._do:
						return this.parseDoStatement(r);
					case u._for:
						return this.parseForStatement(r);
					case u._function:
						if (this.lookahead().type === u.dot) break;
						return e && (this.state.strict ? this.raise(this.state.start, "In strict mode code, functions can only be declared at top level or inside a block") : "if" !== e && "label" !== e && this.raise(this.state.start, "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement")), this.parseFunctionStatement(r, !1, !e);
					case u._class:
						return e && this.unexpected(), this.parseClass(r, !0);
					case u._if:
						return this.parseIfStatement(r);
					case u._return:
						return this.parseReturnStatement(r);
					case u._switch:
						return this.parseSwitchStatement(r);
					case u._throw:
						return this.parseThrowStatement(r);
					case u._try:
						return this.parseTryStatement(r);
					case u._const:
					case u._var:
						return i = i || this.state.value, e && "var" !== i && this.unexpected(this.state.start, "Lexical declaration cannot appear in a single-statement context"), this.parseVarStatement(r, i);
					case u._while:
						return this.parseWhileStatement(r);
					case u._with:
						return this.parseWithStatement(r);
					case u.braceL:
						return this.parseBlock();
					case u.semi:
						return this.parseEmptyStatement(r);
					case u._export:
					case u._import:
						{
							const e = this.lookahead();
							if (e.type === u.parenL || e.type === u.dot) break;
							let i;
							return this.options.allowImportExportEverywhere || t || this.raise(this.state.start, "'import' and 'export' may only appear at the top level"),
							this.next(),
							n === u._import ? "ImportDeclaration" !== (i = this.parseImport(r)).type || i.importKind && "value" !== i.importKind || (this.sawUnambiguousESM = !0) : ("ExportNamedDeclaration" !== (i = this.parseExport(r)).type || i.exportKind && "value" !== i.exportKind) && ("ExportAllDeclaration" !== i.type || i.exportKind && "value" !== i.exportKind) && "ExportDefaultDeclaration" !== i.type || (this.sawUnambiguousESM = !0),
							this.assertModuleNodeAllowed(r),
							i
						}
					default:
						if (this.isAsyncFunction()) return e && this.unexpected(null, "Async functions can only be declared at the top level or inside a block"), this.next(), this.parseFunctionStatement(r, !0, !e)
				}
				const s = this.state.value,
					o = this.parseExpression();
				return n === u.name && "Identifier" === o.type && this.eat(u.colon) ? this.parseLabeledStatement(r, s, o, e) : this.parseExpressionStatement(r, o)
			}
			assertModuleNodeAllowed(e) {
				this.options.allowImportExportEverywhere || this.inModule || this.raise(e.start, "'import' and 'export' may appear only with 'sourceType: \"module\"'", {
					code: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
				})
			}
			takeDecorators(e) {
				const t = this.state.decoratorStack[this.state.decoratorStack.length - 1];
				t.length && (e.decorators = t, this.resetStartLocationFromNode(e, t[0]), this.state.decoratorStack[this.state.decoratorStack.length - 1] = [])
			}
			canHaveLeadingDecorator() {
				return this.match(u._class)
			}
			parseDecorators(e) {
				const t = this.state.decoratorStack[this.state.decoratorStack.length - 1];
				for (; this.match(u.at);) {
					const e = this.parseDecorator();
					t.push(e)
				}
				this.match(u._export) ? (e || this.unexpected(), this.hasPlugin("decorators") && !this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(this.state.start, "Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead.")) : this.canHaveLeadingDecorator() || this.raise(this.state.start, "Leading decorators must be attached to a class declaration")
			}
			parseDecorator() {
				this.expectOnePlugin(["decorators-legacy", "decorators"]);
				const e = this.startNode();
				if (this.next(), this.hasPlugin("decorators")) {
					this.state.decoratorStack.push([]);
					const t = this.state.start,
						n = this.state.startLoc;
					let r;
					if (this.eat(u.parenL)) r = this.parseExpression(), this.expect(u.parenR);
					else
						for (r = this.parseIdentifier(!1); this.eat(u.dot);) {
							const e = this.startNodeAt(t, n);
							e.object = r, e.property = this.parseIdentifier(!0), e.computed = !1, r = this.finishNode(e, "MemberExpression")
						}
					e.expression = this.parseMaybeDecoratorArguments(r), this.state.decoratorStack.pop()
				} else e.expression = this.parseExprSubscripts();
				return this.finishNode(e, "Decorator")
			}
			parseMaybeDecoratorArguments(e) {
				if (this.eat(u.parenL)) {
					const t = this.startNodeAtNode(e);
					return t.callee = e, t.arguments = this.parseCallExpressionArguments(u.parenR, !1), this.toReferencedList(t.arguments), this.finishNode(t, "CallExpression")
				}
				return e
			}
			parseBreakContinueStatement(e, t) {
				const n = "break" === t;
				return this.next(), this.isLineTerminator() ? e.label = null : (e.label = this.parseIdentifier(), this.semicolon()), this.verifyBreakContinue(e, t), this.finishNode(e, n ? "BreakStatement" : "ContinueStatement")
			}
			verifyBreakContinue(e, t) {
				const n = "break" === t;
				let r;
				for (r = 0; r < this.state.labels.length; ++r) {
					const t = this.state.labels[r];
					if (null == e.label || t.name === e.label.name) {
						if (null != t.kind && (n || "loop" === t.kind)) break;
						if (e.label && n) break
					}
				}
				r === this.state.labels.length && this.raise(e.start, "Unsyntactic " + t)
			}
			parseDebuggerStatement(e) {
				return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement")
			}
			parseHeaderExpression() {
				this.expect(u.parenL);
				const e = this.parseExpression();
				return this.expect(u.parenR), e
			}
			parseDoStatement(e) {
				return this.next(), this.state.labels.push(et), e.body = this.withTopicForbiddingContext(() => this.parseStatement("do")), this.state.labels.pop(), this.expect(u._while), e.test = this.parseHeaderExpression(), this.eat(u.semi), this.finishNode(e, "DoWhileStatement")
			}
			parseForStatement(e) {
				this.next(), this.state.labels.push(et);
				let t = -1;
				if ((this.scope.inAsync || !this.scope.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") && (t = this.state.lastTokStart), this.scope.enter(c), this.expect(u.parenL), this.match(u.semi)) return t > -1 && this.unexpected(t), this.parseFor(e, null);
				const n = this.isLet();
				if (this.match(u._var) || this.match(u._const) || n) {
					const r = this.startNode(),
						i = n ? "let" : this.state.value;
					return this.next(), this.parseVar(r, !0, i), this.finishNode(r, "VariableDeclaration"), (this.match(u._in) || this.isContextual("of")) && 1 === r.declarations.length ? this.parseForIn(e, r, t) : (t > -1 && this.unexpected(t), this.parseFor(e, r))
				}
				const r = {
						start: 0
					},
					i = this.parseExpression(!0, r);
				if (this.match(u._in) || this.isContextual("of")) {
					const n = this.isContextual("of") ? "for-of statement" : "for-in statement";
					return this.toAssignable(i, void 0, n), this.checkLVal(i, void 0, void 0, n), this.parseForIn(e, i, t)
				}
				return r.start && this.unexpected(r.start), t > -1 && this.unexpected(t), this.parseFor(e, i)
			}
			parseFunctionStatement(e, t, n) {
				return this.next(), this.parseFunction(e, rt | (n ? 0 : it), t)
			}
			parseIfStatement(e) {
				return this.next(), e.test = this.parseHeaderExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(u._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement")
			}
			parseReturnStatement(e) {
				return this.scope.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.state.start, "'return' outside of function"), this.next(), this.isLineTerminator() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement")
			}
			parseSwitchStatement(e) {
				this.next(), e.discriminant = this.parseHeaderExpression();
				const t = e.cases = [];
				let n, r;
				for (this.expect(u.braceL), this.state.labels.push(tt), this.scope.enter(c); !this.match(u.braceR);)
					if (this.match(u._case) || this.match(u._default)) {
						const e = this.match(u._case);
						n && this.finishNode(n, "SwitchCase"), t.push(n = this.startNode()), n.consequent = [], this.next(), e ? n.test = this.parseExpression() : (r && this.raise(this.state.lastTokStart, "Multiple default clauses"), r = !0, n.test = null), this.expect(u.colon)
					} else n ? n.consequent.push(this.parseStatement(null)) : this.unexpected();
				return this.scope.exit(), n && this.finishNode(n, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(e, "SwitchStatement")
			}
			parseThrowStatement(e) {
				return this.next(), W.test(this.input.slice(this.state.lastTokEnd, this.state.start)) && this.raise(this.state.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement")
			}
			parseTryStatement(e) {
				if (this.next(), e.block = this.parseBlock(), e.handler = null, this.match(u._catch)) {
					const t = this.startNode();
					if (this.next(), this.match(u.parenL)) {
						this.expect(u.parenL), t.param = this.parseBindingAtom();
						const e = "Identifier" === t.param.type;
						this.scope.enter(e ? y : 0), this.checkLVal(t.param, _, null, "catch clause"), this.expect(u.parenR)
					} else t.param = null, this.scope.enter(c);
					t.body = this.withTopicForbiddingContext(() => this.parseBlock(!1, !1)), this.scope.exit(), e.handler = this.finishNode(t, "CatchClause")
				}
				return e.finalizer = this.eat(u._finally) ? this.parseBlock() : null, e.handler || e.finalizer || this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement")
			}
			parseVarStatement(e, t) {
				return this.next(), this.parseVar(e, !1, t), this.semicolon(), this.finishNode(e, "VariableDeclaration")
			}
			parseWhileStatement(e) {
				return this.next(), e.test = this.parseHeaderExpression(), this.state.labels.push(et), e.body = this.withTopicForbiddingContext(() => this.parseStatement("while")), this.state.labels.pop(), this.finishNode(e, "WhileStatement")
			}
			parseWithStatement(e) {
				return this.state.strict && this.raise(this.state.start, "'with' in strict mode"), this.next(), e.object = this.parseHeaderExpression(), e.body = this.withTopicForbiddingContext(() => this.parseStatement("with")), this.finishNode(e, "WithStatement")
			}
			parseEmptyStatement(e) {
				return this.next(), this.finishNode(e, "EmptyStatement")
			}
			parseLabeledStatement(e, t, n, r) {
				for (let e = 0, r = this.state.labels; e < r.length; e++) {
					r[e].name === t && this.raise(n.start, `Label '${t}' is already declared`)
				}
				const i = this.state.type.isLoop ? "loop" : this.match(u._switch) ? "switch" : null;
				for (let t = this.state.labels.length - 1; t >= 0; t--) {
					const n = this.state.labels[t];
					if (n.statementStart !== e.start) break;
					n.statementStart = this.state.start, n.kind = i
				}
				return this.state.labels.push({
					name: t,
					kind: i,
					statementStart: this.state.start
				}), e.body = this.parseStatement(r ? -1 === r.indexOf("label") ? r + "label" : r : "label"), this.state.labels.pop(), e.label = n, this.finishNode(e, "LabeledStatement")
			}
			parseExpressionStatement(e, t) {
				return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement")
			}
			parseBlock(e = !1, t = !0) {
				const n = this.startNode();
				return this.expect(u.braceL), t && this.scope.enter(c), this.parseBlockBody(n, e, !1, u.braceR), t && this.scope.exit(), this.finishNode(n, "BlockStatement")
			}
			isValidDirective(e) {
				return "ExpressionStatement" === e.type && "StringLiteral" === e.expression.type && !e.expression.extra.parenthesized
			}
			parseBlockBody(e, t, n, r) {
				const i = e.body = [],
					s = e.directives = [];
				this.parseBlockOrModuleBlockBody(i, t ? s : void 0, n, r)
			}
			parseBlockOrModuleBlockBody(e, t, n, r) {
				let i, s, o = !1;
				for (; !this.eat(r);) {
					o || !this.state.containsOctal || s || (s = this.state.octalPosition);
					const r = this.parseStatement(null, n);
					if (t && !o && this.isValidDirective(r)) {
						const e = this.stmtToDirective(r);
						t.push(e), void 0 === i && "use strict" === e.value.value && (i = this.state.strict, this.setStrict(!0), s && this.raise(s, "Octal literal in strict mode"))
					} else o = !0, e.push(r)
				}!1 === i && this.setStrict(!1)
			}
			parseFor(e, t) {
				return e.init = t, this.expect(u.semi), e.test = this.match(u.semi) ? null : this.parseExpression(), this.expect(u.semi), e.update = this.match(u.parenR) ? null : this.parseExpression(), this.expect(u.parenR), e.body = this.withTopicForbiddingContext(() => this.parseStatement("for")), this.scope.exit(), this.state.labels.pop(), this.finishNode(e, "ForStatement")
			}
			parseForIn(e, t, n) {
				const r = this.match(u._in);
				return this.next(), r ? n > -1 && this.unexpected(n) : e.await = n > -1, "VariableDeclaration" !== t.type || null == t.declarations[0].init || r && !this.state.strict && "var" === t.kind && "Identifier" === t.declarations[0].id.type ? "AssignmentPattern" === t.type && this.raise(t.start, "Invalid left-hand side in for-loop") : this.raise(t.start, `${r?"for-in":"for-of"} loop variable declaration may not have an initializer`), e.left = t, e.right = r ? this.parseExpression() : this.parseMaybeAssign(), this.expect(u.parenR), e.body = this.withTopicForbiddingContext(() => this.parseStatement("for")), this.scope.exit(), this.state.labels.pop(), this.finishNode(e, r ? "ForInStatement" : "ForOfStatement")
			}
			parseVar(e, t, n) {
				const r = e.declarations = [],
					i = this.hasPlugin("typescript");
				for (e.kind = n;;) {
					const e = this.startNode();
					if (this.parseVarId(e, n), this.eat(u.eq) ? e.init = this.parseMaybeAssign(t) : ("const" !== n || this.match(u._in) || this.isContextual("of") ? "Identifier" === e.id.type || t && (this.match(u._in) || this.isContextual("of")) || this.raise(this.state.lastTokEnd, "Complex binding patterns require an initialization value") : i || this.unexpected(), e.init = null), r.push(this.finishNode(e, "VariableDeclarator")), !this.eat(u.comma)) break
				}
				return e
			}
			parseVarId(e, t) {
				e.id = this.parseBindingAtom(), this.checkLVal(e.id, "var" === t ? N : _, void 0, "variable declaration")
			}
			parseFunction(e, t = nt, n = !1) {
				const r = t & rt,
					i = t & it,
					s = !(!r || t & st);
				this.initFunction(e, n), this.match(u.star) && i && this.unexpected(this.state.start, "Generators can only be declared at the top level or inside a block"), e.generator = this.eat(u.star), r && (e.id = this.parseFunctionId(s));
				const o = this.state.inClassProperty,
					a = this.state.yieldPos,
					c = this.state.awaitPos;
				return this.state.inClassProperty = !1, this.state.yieldPos = 0, this.state.awaitPos = 0, this.scope.enter(A(e.async, e.generator)), r || (e.id = this.parseFunctionId()), this.parseFunctionParams(e), this.withTopicForbiddingContext(() => {
					this.parseFunctionBodyAndFinish(e, r ? "FunctionDeclaration" : "FunctionExpression")
				}), this.scope.exit(), r && !i && this.checkFunctionStatementId(e), this.state.inClassProperty = o, this.state.yieldPos = a, this.state.awaitPos = c, e
			}
			parseFunctionId(e) {
				return e || this.match(u.name) ? this.parseIdentifier() : null
			}
			parseFunctionParams(e, t) {
				const n = this.state.inParameters;
				this.state.inParameters = !0, this.expect(u.parenL), e.params = this.parseBindingList(u.parenR, !1, t), this.state.inParameters = n, this.checkYieldAwaitInDefaultParams()
			}
			checkFunctionStatementId(e) {
				e.id && this.checkLVal(e.id, this.state.strict || e.generator || e.async ? this.scope.treatFunctionsAsVar ? N : _ : I, null, "function name")
			}
			parseClass(e, t, n) {
				this.next(), this.takeDecorators(e);
				const r = this.state.strict;
				return this.state.strict = !0, this.parseClassId(e, t, n), this.parseClassSuper(e), e.body = this.parseClassBody(!!e.superClass), this.state.strict = r, this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression")
			}
			isClassProperty() {
				return this.match(u.eq) || this.match(u.semi) || this.match(u.braceR)
			}
			isClassMethod() {
				return this.match(u.parenL)
			}
			isNonstaticConstructor(e) {
				return !(e.computed || e.static || "constructor" !== e.key.name && "constructor" !== e.key.value)
			}
			parseClassBody(e) {
				this.state.classLevel++;
				const t = {
					hadConstructor: !1
				};
				let n = [];
				const r = this.startNode();
				return r.body = [], this.expect(u.braceL), this.withTopicForbiddingContext(() => {
					for (; !this.eat(u.braceR);) {
						if (this.eat(u.semi)) {
							n.length > 0 && this.raise(this.state.lastTokEnd, "Decorators must not be followed by a semicolon");
							continue
						}
						if (this.match(u.at)) {
							n.push(this.parseDecorator());
							continue
						}
						const i = this.startNode();
						n.length && (i.decorators = n, this.resetStartLocationFromNode(i, n[0]), n = []), this.parseClassMember(r, i, t, e), "constructor" === i.kind && i.decorators && i.decorators.length > 0 && this.raise(i.start, "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?")
					}
				}), n.length && this.raise(this.state.start, "You have trailing decorators with no method"), this.state.classLevel--, this.finishNode(r, "ClassBody")
			}
			parseClassMember(e, t, n, r) {
				let i = !1;
				const s = this.state.containsEsc;
				if (this.match(u.name) && "static" === this.state.value) {
					const n = this.parseIdentifier(!0);
					if (this.isClassMethod()) {
						const r = t;
						return r.kind = "method", r.computed = !1, r.key = n, r.static = !1, void this.pushClassMethod(e, r, !1, !1, !1, !1)
					}
					if (this.isClassProperty()) {
						const r = t;
						return r.computed = !1, r.key = n, r.static = !1, void e.body.push(this.parseClassProperty(r))
					}
					if (s) throw this.unexpected();
					i = !0
				}
				this.parseClassMemberWithIsStatic(e, t, n, i, r)
			}
			parseClassMemberWithIsStatic(e, t, n, r, i) {
				const s = t,
					o = t,
					a = t,
					c = t,
					l = s,
					p = s;
				if (t.static = r, this.eat(u.star)) return l.kind = "method", this.parseClassPropertyName(l), "PrivateName" === l.key.type ? void this.pushClassPrivateMethod(e, o, !0, !1) : (this.isNonstaticConstructor(s) && this.raise(s.key.start, "Constructor can't be a generator"), void this.pushClassMethod(e, s, !0, !1, !1, !1));
				const h = this.state.containsEsc,
					f = this.parseClassPropertyName(t),
					d = "PrivateName" === f.type,
					y = "Identifier" === f.type;
				if (this.parsePostMemberNameModifiers(p), this.isClassMethod()) {
					if (l.kind = "method", d) return void this.pushClassPrivateMethod(e, o, !1, !1);
					const t = this.isNonstaticConstructor(s);
					let r = !1;
					t && (s.kind = "constructor", s.decorators && this.raise(s.start, "You can't attach decorators to a class constructor"), n.hadConstructor && !this.hasPlugin("typescript") && this.raise(f.start, "Duplicate constructor in the same class"), n.hadConstructor = !0, r = i), this.pushClassMethod(e, s, !1, !1, t, r)
				} else if (this.isClassProperty()) d ? this.pushClassPrivateProperty(e, c) : this.pushClassProperty(e, a);
				else if (!y || "async" !== f.name || h || this.isLineTerminator()) !y || "get" !== f.name && "set" !== f.name || h || this.match(u.star) && this.isLineTerminator() ? this.isLineTerminator() ? d ? this.pushClassPrivateProperty(e, c) : this.pushClassProperty(e, a) : this.unexpected() : (l.kind = f.name, this.parseClassPropertyName(s), "PrivateName" === l.key.type ? this.pushClassPrivateMethod(e, o, !1, !1) : (this.isNonstaticConstructor(s) && this.raise(s.key.start, "Constructor can't have get/set modifier"), this.pushClassMethod(e, s, !1, !1, !1, !1)), this.checkGetterSetterParams(s));
				else {
					const t = this.eat(u.star);
					l.kind = "method", this.parseClassPropertyName(l), "PrivateName" === l.key.type ? this.pushClassPrivateMethod(e, o, t, !0) : (this.isNonstaticConstructor(s) && this.raise(s.key.start, "Constructor can't be an async function"), this.pushClassMethod(e, s, t, !0, !1, !1))
				}
			}
			parseClassPropertyName(e) {
				const t = this.parsePropertyName(e);
				return e.computed || !e.static || "prototype" !== t.name && "prototype" !== t.value || this.raise(t.start, "Classes may not have static property named prototype"), "PrivateName" === t.type && "constructor" === t.id.name && this.raise(t.start, "Classes may not have a private field named '#constructor'"), t
			}
			pushClassProperty(e, t) {
				this.isNonstaticConstructor(t) && this.raise(t.key.start, "Classes may not have a non-static field named 'constructor'"), e.body.push(this.parseClassProperty(t))
			}
			pushClassPrivateProperty(e, t) {
				this.expectPlugin("classPrivateProperties", t.key.start), e.body.push(this.parseClassPrivateProperty(t))
			}
			pushClassMethod(e, t, n, r, i, s) {
				e.body.push(this.parseMethod(t, n, r, i, s, "ClassMethod", !0))
			}
			pushClassPrivateMethod(e, t, n, r) {
				this.expectPlugin("classPrivateMethods", t.key.start), e.body.push(this.parseMethod(t, n, r, !1, !1, "ClassPrivateMethod", !0))
			}
			parsePostMemberNameModifiers(e) {}
			parseAccessModifier() {}
			parseClassPrivateProperty(e) {
				return this.state.inClassProperty = !0, this.scope.enter(E | m), e.value = this.eat(u.eq) ? this.parseMaybeAssign() : null, this.semicolon(), this.state.inClassProperty = !1, this.scope.exit(), this.finishNode(e, "ClassPrivateProperty")
			}
			parseClassProperty(e) {
				return e.typeAnnotation || this.expectPlugin("classProperties"), this.state.inClassProperty = !0, this.scope.enter(E | m), this.match(u.eq) ? (this.expectPlugin("classProperties"), this.next(), e.value = this.parseMaybeAssign()) : e.value = null, this.semicolon(), this.state.inClassProperty = !1, this.scope.exit(), this.finishNode(e, "ClassProperty")
			}
			parseClassId(e, t, n) {
				this.match(u.name) ? (e.id = this.parseIdentifier(), t && this.checkLVal(e.id, F, void 0, "class name")) : n || !t ? e.id = null : this.unexpected(null, "A class name is required")
			}
			parseClassSuper(e) {
				e.superClass = this.eat(u._extends) ? this.parseExprSubscripts() : null
			}
			parseExport(e) {
				const t = this.maybeParseExportDefaultSpecifier(e),
					n = !t || this.eat(u.comma),
					r = n && this.eatExportStar(e),
					i = r && this.maybeParseExportNamespaceSpecifier(e),
					s = n && (!i || this.eat(u.comma)),
					o = t || r;
				if (r && !i) return t && this.unexpected(), this.parseExportFrom(e, !0), this.finishNode(e, "ExportAllDeclaration");
				const a = this.maybeParseExportNamedSpecifiers(e);
				if (t && n && !r && !a || i && s && !a) throw this.unexpected(null, u.braceL);
				let c;
				if (o || a ? (c = !1, this.parseExportFrom(e, o)) : c = this.maybeParseExportDeclaration(e), o || a || c) return this.checkExport(e, !0, !1, !!e.source), this.finishNode(e, "ExportNamedDeclaration");
				if (this.eat(u._default)) return e.declaration = this.parseExportDefaultExpression(), this.checkExport(e, !0, !0), this.finishNode(e, "ExportDefaultDeclaration");
				throw this.unexpected(null, u.braceL)
			}
			eatExportStar(e) {
				return this.eat(u.star)
			}
			maybeParseExportDefaultSpecifier(e) {
				if (this.isExportDefaultSpecifier()) {
					this.expectPlugin("exportDefaultFrom");
					const t = this.startNode();
					return t.exported = this.parseIdentifier(!0), e.specifiers = [this.finishNode(t, "ExportDefaultSpecifier")], !0
				}
				return !1
			}
			maybeParseExportNamespaceSpecifier(e) {
				if (this.isContextual("as")) {
					e.specifiers || (e.specifiers = []), this.expectPlugin("exportNamespaceFrom");
					const t = this.startNodeAt(this.state.lastTokStart, this.state.lastTokStartLoc);
					return this.next(), t.exported = this.parseIdentifier(!0), e.specifiers.push(this.finishNode(t, "ExportNamespaceSpecifier")), !0
				}
				return !1
			}
			maybeParseExportNamedSpecifiers(e) {
				return !!this.match(u.braceL) && (e.specifiers || (e.specifiers = []), e.specifiers.push(...this.parseExportSpecifiers()), e.source = null, e.declaration = null, !0)
			}
			maybeParseExportDeclaration(e) {
				if (this.shouldParseExportDeclaration()) {
					if (this.isContextual("async")) {
						const e = this.lookahead();
						e.type !== u._function && this.unexpected(e.start, 'Unexpected token, expected "function"')
					}
					return e.specifiers = [], e.source = null, e.declaration = this.parseExportDeclaration(e), !0
				}
				return !1
			}
			isAsyncFunction() {
				if (!this.isContextual("async")) return !1;
				const {
					pos: e
				} = this.state;
				q.lastIndex = e;
				const t = q.exec(this.input);
				if (!t || !t.length) return !1;
				const n = e + t[0].length;
				return !(W.test(this.input.slice(e, n)) || "function" !== this.input.slice(n, n + 8) || n + 8 !== this.length && pe(this.input.charCodeAt(n + 8)))
			}
			parseExportDefaultExpression() {
				const e = this.startNode(),
					t = this.isAsyncFunction();
				if (this.match(u._function) || t) return this.next(), t && this.next(), this.parseFunction(e, rt | st, t);
				if (this.match(u._class)) return this.parseClass(e, !0, !0);
				if (this.match(u.at)) return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") && this.unexpected(this.state.start, "Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax"), this.parseDecorators(!1), this.parseClass(e, !0, !0);
				if (this.match(u._const) || this.match(u._var) || this.isLet()) return this.raise(this.state.start, "Only expressions, functions or classes are allowed as the `default` export."); {
					const e = this.parseMaybeAssign();
					return this.semicolon(), e
				}
			}
			parseExportDeclaration(e) {
				return this.parseStatement(null)
			}
			isExportDefaultSpecifier() {
				if (this.match(u.name)) return "async" !== this.state.value && "let" !== this.state.value;
				if (!this.match(u._default)) return !1;
				const e = this.lookahead();
				return e.type === u.comma || e.type === u.name && "from" === e.value
			}
			parseExportFrom(e, t) {
				this.eatContextual("from") ? (e.source = this.parseImportSource(), this.checkExport(e)) : t ? this.unexpected() : e.source = null, this.semicolon()
			}
			shouldParseExportDeclaration() {
				if (this.match(u.at) && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators"))) {
					if (!this.getPluginOption("decorators", "decoratorsBeforeExport")) return !0;
					this.unexpected(this.state.start, "Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax")
				}
				return "var" === this.state.type.keyword || "const" === this.state.type.keyword || "function" === this.state.type.keyword || "class" === this.state.type.keyword || this.isLet() || this.isAsyncFunction()
			}
			checkExport(e, t, n, r) {
				if (t)
					if (n) this.checkDuplicateExports(e, "default");
					else if (e.specifiers && e.specifiers.length)
					for (let t = 0, n = e.specifiers; t < n.length; t++) {
						const e = n[t];
						this.checkDuplicateExports(e, e.exported.name), !r && e.local && (this.checkReservedWord(e.local.name, e.local.start, !0, !1), this.scope.checkLocalExport(e.local))
					} else if (e.declaration)
						if ("FunctionDeclaration" === e.declaration.type || "ClassDeclaration" === e.declaration.type) {
							const t = e.declaration.id;
							if (!t) throw new Error("Assertion failure");
							this.checkDuplicateExports(e, t.name)
						} else if ("VariableDeclaration" === e.declaration.type)
					for (let t = 0, n = e.declaration.declarations; t < n.length; t++) {
						const e = n[t];
						this.checkDeclaration(e.id)
					}
				if (this.state.decoratorStack[this.state.decoratorStack.length - 1].length) {
					const t = e.declaration && ("ClassDeclaration" === e.declaration.type || "ClassExpression" === e.declaration.type);
					if (!e.declaration || !t) throw this.raise(e.start, "You can only use decorators on an export when exporting a class");
					this.takeDecorators(e.declaration)
				}
			}
			checkDeclaration(e) {
				if ("Identifier" === e.type) this.checkDuplicateExports(e, e.name);
				else if ("ObjectPattern" === e.type)
					for (let t = 0, n = e.properties; t < n.length; t++) {
						const e = n[t];
						this.checkDeclaration(e)
					} else if ("ArrayPattern" === e.type)
						for (let t = 0, n = e.elements; t < n.length; t++) {
							const e = n[t];
							e && this.checkDeclaration(e)
						} else "ObjectProperty" === e.type ? this.checkDeclaration(e.value) : "RestElement" === e.type ? this.checkDeclaration(e.argument) : "AssignmentPattern" === e.type && this.checkDeclaration(e.left)
			}
			checkDuplicateExports(e, t) {
				if (this.state.exportedIdentifiers.indexOf(t) > -1) throw this.raise(e.start, "default" === t ? "Only one default export allowed per module." : `\`${t}\` has already been exported. Exported identifiers must be unique.`);
				this.state.exportedIdentifiers.push(t)
			}
			parseExportSpecifiers() {
				const e = [];
				let t = !0;
				for (this.expect(u.braceL); !this.eat(u.braceR);) {
					if (t) t = !1;
					else if (this.expect(u.comma), this.eat(u.braceR)) break;
					const n = this.startNode();
					n.local = this.parseIdentifier(!0), n.exported = this.eatContextual("as") ? this.parseIdentifier(!0) : n.local.__clone(), e.push(this.finishNode(n, "ExportSpecifier"))
				}
				return e
			}
			parseImport(e) {
				if (e.specifiers = [], !this.match(u.string)) {
					const t = !this.maybeParseDefaultImportSpecifier(e) || this.eat(u.comma),
						n = t && this.maybeParseStarImportSpecifier(e);
					t && !n && this.parseNamedImportSpecifiers(e), this.expectContextual("from")
				}
				return e.source = this.parseImportSource(), this.semicolon(), this.finishNode(e, "ImportDeclaration")
			}
			parseImportSource() {
				return this.match(u.string) || this.unexpected(), this.parseExprAtom()
			}
			shouldParseDefaultImport(e) {
				return this.match(u.name)
			}
			parseImportSpecifierLocal(e, t, n, r) {
				t.local = this.parseIdentifier(), this.checkLVal(t.local, _, void 0, r), e.specifiers.push(this.finishNode(t, n))
			}
			maybeParseDefaultImportSpecifier(e) {
				return !!this.shouldParseDefaultImport(e) && (this.parseImportSpecifierLocal(e, this.startNode(), "ImportDefaultSpecifier", "default import specifier"), !0)
			}
			maybeParseStarImportSpecifier(e) {
				if (this.match(u.star)) {
					const t = this.startNode();
					return this.next(), this.expectContextual("as"), this.parseImportSpecifierLocal(e, t, "ImportNamespaceSpecifier", "import namespace specifier"), !0
				}
				return !1
			}
			parseNamedImportSpecifiers(e) {
				let t = !0;
				for (this.expect(u.braceL); !this.eat(u.braceR);) {
					if (t) t = !1;
					else if (this.eat(u.colon) && this.unexpected(null, "ES2015 named imports do not destructure. Use another statement for destructuring after the import."), this.expect(u.comma), this.eat(u.braceR)) break;
					this.parseImportSpecifier(e)
				}
			}
			parseImportSpecifier(e) {
				const t = this.startNode();
				t.imported = this.parseIdentifier(!0), this.eatContextual("as") ? t.local = this.parseIdentifier() : (this.checkReservedWord(t.imported.name, t.start, !0, !0), t.local = t.imported.__clone()), this.checkLVal(t.local, _, void 0, "import specifier"), e.specifiers.push(this.finishNode(t, "ImportSpecifier"))
			}
		}
		class at extends ot {
			constructor(e, t) {
				super(e = function (e) {
					const t = {};
					for (let n = 0, r = Object.keys(Ie); n < r.length; n++) {
						const i = r[n];
						t[i] = e && null != e[i] ? e[i] : Ie[i]
					}
					return t
				}(e), t);
				const n = this.getScopeHandler();
				this.options = e, this.inModule = "module" === this.options.sourceType, this.scope = new n(this.raise.bind(this), this.inModule), this.plugins = function (e) {
					const t = new Map;
					for (let n = 0; n < e.length; n++) {
						const r = e[n],
							[i, s] = Array.isArray(r) ? r : [r, {}];
						t.has(i) || t.set(i, s || {})
					}
					return t
				}(this.options.plugins), this.filename = e.sourceFilename
			}
			getScopeHandler() {
				return xe
			}
			parse() {
				this.scope.enter(l);
				const e = this.startNode(),
					t = this.startNode();
				return this.nextToken(), this.parseTopLevel(e, t)
			}
		}

		function ut(e, t) {
			let n = at;
			return e && e.plugins && (! function (e) {
				if (Oe(e, "decorators")) {
					if (Oe(e, "decorators-legacy")) throw new Error("Cannot use the decorators and decorators-legacy plugin together");
					const t = we(e, "decorators", "decoratorsBeforeExport");
					if (null == t) throw new Error("The 'decorators' plugin requires a 'decoratorsBeforeExport' option, whose value must be a boolean. If you are migrating from Babylon/Babel 6 or want to use the old decorators proposal, you should use the 'decorators-legacy' plugin instead of 'decorators'.");
					if ("boolean" != typeof t) throw new Error("'decoratorsBeforeExport' must be a boolean.")
				}
				if (Oe(e, "flow") && Oe(e, "typescript")) throw new Error("Cannot combine flow and typescript plugins.");
				if (Oe(e, "pipelineOperator") && !Fe.includes(we(e, "pipelineOperator", "proposal"))) throw new Error("'pipelineOperator' requires 'proposal' option whose value should be one of: " + Fe.map(e => `'${e}'`).join(", "))
			}(e.plugins), n = function (e) {
				const t = Ne.filter(t => Oe(e, t)),
					n = t.join("/");
				let r = ct[n];
				if (!r) {
					r = at;
					for (let e = 0; e < t.length; e++) {
						const n = t[e];
						r = _e[n](r)
					}
					ct[n] = r
				}
				return r
			}(e.plugins)), new n(e, t)
		}
		const ct = {};
		t.parse = function (e, t) {
			if (!t || "unambiguous" !== t.sourceType) return ut(t, e).parse();
			t = Object.assign({}, t);
			try {
				t.sourceType = "module";
				const n = ut(t, e),
					r = n.parse();
				return n.sawUnambiguousESM || (r.program.sourceType = "script"), r
			} catch (n) {
				try {
					return t.sourceType = "script", ut(t, e).parse()
				} catch (e) {}
				throw n
			}
		}, t.parseExpression = function (e, t) {
			const n = ut(t, e);
			return n.options.strictMode && (n.state.strict = !0), n.getExpression()
		}, t.tokTypes = u
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			const n = Object.keys(t);
			for (const r of n)
				if (e[r] !== t[r]) return !1;
			return !0
		}
	}, function (e, t, n) {
		var r = n(9)(n(5), "Map");
		e.exports = r
	}, function (e, t) {
		var n;
		n = function () {
			return this
		}();
		try {
			n = n || Function("return this")() || (0, eval)("this")
		} catch (e) {
			"object" == typeof window && (n = window)
		}
		e.exports = n
	}, function (e, t) {
		var n = Object.prototype;
		e.exports = function (e) {
			var t = e && e.constructor;
			return e === ("function" == typeof t && t.prototype || n)
		}
	}, function (e, t, n) {
		var r = n(64),
			i = n(160),
			s = n(29);
		e.exports = function (e) {
			return s(e) ? r(e, !0) : i(e)
		}
	}, function (e, t, n) {
		var r = n(165),
			i = n(69),
			s = Object.prototype.propertyIsEnumerable,
			o = Object.getOwnPropertySymbols,
			a = o ? function (e) {
				return null == e ? [] : (e = Object(e), r(o(e), function (t) {
					return s.call(e, t)
				}))
			} : i;
		e.exports = a
	}, function (e, t, n) {
		var r = n(68)(Object.getPrototypeOf, Object);
		e.exports = r
	}, function (e, t, n) {
		var r = n(169),
			i = n(34),
			s = n(170),
			o = n(73),
			a = n(171),
			u = n(8),
			c = n(59),
			l = c(r),
			p = c(i),
			h = c(s),
			f = c(o),
			d = c(a),
			y = u;
		(r && "[object DataView]" != y(new r(new ArrayBuffer(1))) || i && "[object Map]" != y(new i) || s && "[object Promise]" != y(s.resolve()) || o && "[object Set]" != y(new o) || a && "[object WeakMap]" != y(new a)) && (y = function (e) {
			var t = u(e),
				n = "[object Object]" == t ? e.constructor : void 0,
				r = n ? c(n) : "";
			if (r) switch (r) {
				case l:
					return "[object DataView]";
				case p:
					return "[object Map]";
				case h:
					return "[object Promise]";
				case f:
					return "[object Set]";
				case d:
					return "[object WeakMap]"
			}
			return t
		}), e.exports = y
	}, function (e, t, n) {
		var r = n(174);
		e.exports = function (e) {
			var t = new e.constructor(e.byteLength);
			return new r(t).set(new r(e)), t
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.patternLikeCommon = t.functionDeclarationCommon = t.functionTypeAnnotationCommon = t.functionCommon = void 0;
		var r = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(15)),
			i = n(11),
			s = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(7));
		(0, s.default)("ArrayExpression", {
			fields: {
				elements: {
					validate: (0, s.chain)((0, s.assertValueType)("array"), (0, s.assertEach)((0, s.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
					default: []
				}
			},
			visitor: ["elements"],
			aliases: ["Expression"]
		}), (0, s.default)("AssignmentExpression", {
			fields: {
				operator: {
					validate: (0, s.assertValueType)("string")
				},
				left: {
					validate: (0, s.assertNodeType)("LVal")
				},
				right: {
					validate: (0, s.assertNodeType)("Expression")
				}
			},
			builder: ["operator", "left", "right"],
			visitor: ["left", "right"],
			aliases: ["Expression"]
		}), (0, s.default)("BinaryExpression", {
			builder: ["operator", "left", "right"],
			fields: {
				operator: {
					validate: (0, s.assertOneOf)(...i.BINARY_OPERATORS)
				},
				left: {
					validate: (0, s.assertNodeType)("Expression")
				},
				right: {
					validate: (0, s.assertNodeType)("Expression")
				}
			},
			visitor: ["left", "right"],
			aliases: ["Binary", "Expression"]
		}), (0, s.default)("InterpreterDirective", {
			builder: ["value"],
			fields: {
				value: {
					validate: (0, s.assertValueType)("string")
				}
			}
		}), (0, s.default)("Directive", {
			visitor: ["value"],
			fields: {
				value: {
					validate: (0, s.assertNodeType)("DirectiveLiteral")
				}
			}
		}), (0, s.default)("DirectiveLiteral", {
			builder: ["value"],
			fields: {
				value: {
					validate: (0, s.assertValueType)("string")
				}
			}
		}), (0, s.default)("BlockStatement", {
			builder: ["body", "directives"],
			visitor: ["directives", "body"],
			fields: {
				directives: {
					validate: (0, s.chain)((0, s.assertValueType)("array"), (0, s.assertEach)((0, s.assertNodeType)("Directive"))),
					default: []
				},
				body: {
					validate: (0, s.chain)((0, s.assertValueType)("array"), (0, s.assertEach)((0, s.assertNodeType)("Statement")))
				}
			},
			aliases: ["Scopable", "BlockParent", "Block", "Statement"]
		}), (0, s.default)("BreakStatement", {
			visitor: ["label"],
			fields: {
				label: {
					validate: (0, s.assertNodeType)("Identifier"),
					optional: !0
				}
			},
			aliases: ["Statement", "Terminatorless", "CompletionStatement"]
		}), (0, s.default)("CallExpression", {
			visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
			builder: ["callee", "arguments"],
			aliases: ["Expression"],
			fields: {
				callee: {
					validate: (0, s.assertNodeType)("Expression")
				},
				arguments: {
					validate: (0, s.chain)((0, s.assertValueType)("array"), (0, s.assertEach)((0, s.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
				},
				optional: {
					validate: (0, s.assertOneOf)(!0, !1),
					optional: !0
				},
				typeArguments: {
					validate: (0, s.assertNodeType)("TypeParameterInstantiation"),
					optional: !0
				},
				typeParameters: {
					validate: (0, s.assertNodeType)("TSTypeParameterInstantiation"),
					optional: !0
				}
			}
		}), (0, s.default)("CatchClause", {
			visitor: ["param", "body"],
			fields: {
				param: {
					validate: (0, s.assertNodeType)("Identifier"),
					optional: !0
				},
				body: {
					validate: (0, s.assertNodeType)("BlockStatement")
				}
			},
			aliases: ["Scopable", "BlockParent"]
		}), (0, s.default)("ConditionalExpression", {
			visitor: ["test", "consequent", "alternate"],
			fields: {
				test: {
					validate: (0, s.assertNodeType)("Expression")
				},
				consequent: {
					validate: (0, s.assertNodeType)("Expression")
				},
				alternate: {
					validate: (0, s.assertNodeType)("Expression")
				}
			},
			aliases: ["Expression", "Conditional"]
		}), (0, s.default)("ContinueStatement", {
			visitor: ["label"],
			fields: {
				label: {
					validate: (0, s.assertNodeType)("Identifier"),
					optional: !0
				}
			},
			aliases: ["Statement", "Terminatorless", "CompletionStatement"]
		}), (0, s.default)("DebuggerStatement", {
			aliases: ["Statement"]
		}), (0, s.default)("DoWhileStatement", {
			visitor: ["test", "body"],
			fields: {
				test: {
					validate: (0, s.assertNodeType)("Expression")
				},
				body: {
					validate: (0, s.assertNodeType)("Statement")
				}
			},
			aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
		}), (0, s.default)("EmptyStatement", {
			aliases: ["Statement"]
		}), (0, s.default)("ExpressionStatement", {
			visitor: ["expression"],
			fields: {
				expression: {
					validate: (0, s.assertNodeType)("Expression")
				}
			},
			aliases: ["Statement", "ExpressionWrapper"]
		}), (0, s.default)("File", {
			builder: ["program", "comments", "tokens"],
			visitor: ["program"],
			fields: {
				program: {
					validate: (0, s.assertNodeType)("Program")
				}
			}
		}), (0, s.default)("ForInStatement", {
			visitor: ["left", "right", "body"],
			aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
			fields: {
				left: {
					validate: (0, s.assertNodeType)("VariableDeclaration", "LVal")
				},
				right: {
					validate: (0, s.assertNodeType)("Expression")
				},
				body: {
					validate: (0, s.assertNodeType)("Statement")
				}
			}
		}), (0, s.default)("ForStatement", {
			visitor: ["init", "test", "update", "body"],
			aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
			fields: {
				init: {
					validate: (0, s.assertNodeType)("VariableDeclaration", "Expression"),
					optional: !0
				},
				test: {
					validate: (0, s.assertNodeType)("Expression"),
					optional: !0
				},
				update: {
					validate: (0, s.assertNodeType)("Expression"),
					optional: !0
				},
				body: {
					validate: (0, s.assertNodeType)("Statement")
				}
			}
		});
		const o = {
			params: {
				validate: (0, s.chain)((0, s.assertValueType)("array"), (0, s.assertEach)((0, s.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
			},
			generator: {
				default: !1,
				validate: (0, s.assertValueType)("boolean")
			},
			async: {
				validate: (0, s.assertValueType)("boolean"),
				default: !1
			}
		};
		t.functionCommon = o;
		const a = {
			returnType: {
				validate: (0, s.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
				optional: !0
			},
			typeParameters: {
				validate: (0, s.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
				optional: !0
			}
		};
		t.functionTypeAnnotationCommon = a;
		const u = Object.assign({}, o, {
			declare: {
				validate: (0, s.assertValueType)("boolean"),
				optional: !0
			},
			id: {
				validate: (0, s.assertNodeType)("Identifier"),
				optional: !0
			}
		});
		t.functionDeclarationCommon = u, (0, s.default)("FunctionDeclaration", {
			builder: ["id", "params", "body", "generator", "async"],
			visitor: ["id", "params", "body", "returnType", "typeParameters"],
			fields: Object.assign({}, u, a, {
				body: {
					validate: (0, s.assertNodeType)("BlockStatement")
				}
			}),
			aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"]
		}), (0, s.default)("FunctionExpression", {
			inherits: "FunctionDeclaration",
			aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
			fields: Object.assign({}, o, a, {
				id: {
					validate: (0, s.assertNodeType)("Identifier"),
					optional: !0
				},
				body: {
					validate: (0, s.assertNodeType)("BlockStatement")
				}
			})
		});
		const c = {
			typeAnnotation: {
				validate: (0, s.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
				optional: !0
			},
			decorators: {
				validate: (0, s.chain)((0, s.assertValueType)("array"), (0, s.assertEach)((0, s.assertNodeType)("Decorator")))
			}
		};
		t.patternLikeCommon = c, (0, s.default)("Identifier", {
			builder: ["name"],
			visitor: ["typeAnnotation", "decorators"],
			aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
			fields: Object.assign({}, c, {
				name: {
					validate: (0, s.chain)(function (e, t, n) {
						(0, r.default)(n)
					}, (0, s.assertValueType)("string"))
				},
				optional: {
					validate: (0, s.assertValueType)("boolean"),
					optional: !0
				}
			})
		}), (0, s.default)("IfStatement", {
			visitor: ["test", "consequent", "alternate"],
			aliases: ["Statement", "Conditional"],
			fields: {
				test: {
					validate: (0, s.assertNodeType)("Expression")
				},
				consequent: {
					validate: (0, s.assertNodeType)("Statement")
				},
				alternate: {
					optional: !0,
					validate: (0, s.assertNodeType)("Statement")
				}
			}
		}), (0, s.default)("LabeledStatement", {
			visitor: ["label", "body"],
			aliases: ["Statement"],
			fields: {
				label: {
					validate: (0, s.assertNodeType)("Identifier")
				},
				body: {
					validate: (0, s.assertNodeType)("Statement")
				}
			}
		}), (0, s.default)("StringLiteral", {
			builder: ["value"],
			fields: {
				value: {
					validate: (0, s.assertValueType)("string")
				}
			},
			aliases: ["Expression", "Pureish", "Literal", "Immutable"]
		}), (0, s.default)("NumericLiteral", {
			builder: ["value"],
			deprecatedAlias: "NumberLiteral",
			fields: {
				value: {
					validate: (0, s.assertValueType)("number")
				}
			},
			aliases: ["Expression", "Pureish", "Literal", "Immutable"]
		}), (0, s.default)("NullLiteral", {
			aliases: ["Expression", "Pureish", "Literal", "Immutable"]
		}), (0, s.default)("BooleanLiteral", {
			builder: ["value"],
			fields: {
				value: {
					validate: (0, s.assertValueType)("boolean")
				}
			},
			aliases: ["Expression", "Pureish", "Literal", "Immutable"]
		}), (0, s.default)("RegExpLiteral", {
			builder: ["pattern", "flags"],
			deprecatedAlias: "RegexLiteral",
			aliases: ["Expression", "Literal"],
			fields: {
				pattern: {
					validate: (0, s.assertValueType)("string")
				},
				flags: {
					validate: (0, s.assertValueType)("string"),
					default: ""
				}
			}
		}), (0, s.default)("LogicalExpression", {
			builder: ["operator", "left", "right"],
			visitor: ["left", "right"],
			aliases: ["Binary", "Expression"],
			fields: {
				operator: {
					validate: (0, s.assertOneOf)(...i.LOGICAL_OPERATORS)
				},
				left: {
					validate: (0, s.assertNodeType)("Expression")
				},
				right: {
					validate: (0, s.assertNodeType)("Expression")
				}
			}
		}), (0, s.default)("MemberExpression", {
			builder: ["object", "property", "computed", "optional"],
			visitor: ["object", "property"],
			aliases: ["Expression", "LVal"],
			fields: {
				object: {
					validate: (0, s.assertNodeType)("Expression")
				},
				property: {
					validate: function () {
						const e = (0, s.assertNodeType)("Identifier", "PrivateName"),
							t = (0, s.assertNodeType)("Expression");
						return function (n, r, i) {
							(n.computed ? t : e)(n, r, i)
						}
					}()
				},
				computed: {
					default: !1
				},
				optional: {
					validate: (0, s.assertOneOf)(!0, !1),
					optional: !0
				}
			}
		}), (0, s.default)("NewExpression", {
			inherits: "CallExpression"
		}), (0, s.default)("Program", {
			visitor: ["directives", "body"],
			builder: ["body", "directives", "sourceType", "interpreter"],
			fields: {
				sourceFile: {
					validate: (0, s.assertValueType)("string")
				},
				sourceType: {
					validate: (0, s.assertOneOf)("script", "module"),
					default: "script"
				},
				interpreter: {
					validate: (0, s.assertNodeType)("InterpreterDirective"),
					default: null,
					optional: !0
				},
				directives: {
					validate: (0, s.chain)((0, s.assertValueType)("array"), (0, s.assertEach)((0, s.assertNodeType)("Directive"))),
					default: []
				},
				body: {
					validate: (0, s.chain)((0, s.assertValueType)("array"), (0, s.assertEach)((0, s.assertNodeType)("Statement")))
				}
			},
			aliases: ["Scopable", "BlockParent", "Block"]
		}), (0, s.default)("ObjectExpression", {
			visitor: ["properties"],
			aliases: ["Expression"],
			fields: {
				properties: {
					validate: (0, s.chain)((0, s.assertValueType)("array"), (0, s.assertEach)((0, s.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
				}
			}
		}), (0, s.default)("ObjectMethod", {
			builder: ["kind", "key", "params", "body", "computed"],
			fields: Object.assign({}, o, a, {
				kind: {
					validate: (0, s.chain)((0, s.assertValueType)("string"), (0, s.assertOneOf)("method", "get", "set")),
					default: "method"
				},
				computed: {
					validate: (0, s.assertValueType)("boolean"),
					default: !1
				},
				key: {
					validate: function () {
						const e = (0, s.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral"),
							t = (0, s.assertNodeType)("Expression");
						return function (n, r, i) {
							(n.computed ? t : e)(n, r, i)
						}
					}()
				},
				decorators: {
					validate: (0, s.chain)((0, s.assertValueType)("array"), (0, s.assertEach)((0, s.assertNodeType)("Decorator")))
				},
				body: {
					validate: (0, s.assertNodeType)("BlockStatement")
				}
			}),
			visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
			aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
		}), (0, s.default)("ObjectProperty", {
			builder: ["key", "value", "computed", "shorthand", "decorators"],
			fields: {
				computed: {
					validate: (0, s.assertValueType)("boolean"),
					default: !1
				},
				key: {
					validate: function () {
						const e = (0, s.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral"),
							t = (0, s.assertNodeType)("Expression");
						return function (n, r, i) {
							(n.computed ? t : e)(n, r, i)
						}
					}()
				},
				value: {
					validate: (0, s.assertNodeType)("Expression", "PatternLike")
				},
				shorthand: {
					validate: (0, s.assertValueType)("boolean"),
					default: !1
				},
				decorators: {
					validate: (0, s.chain)((0, s.assertValueType)("array"), (0, s.assertEach)((0, s.assertNodeType)("Decorator"))),
					optional: !0
				}
			},
			visitor: ["key", "value", "decorators"],
			aliases: ["UserWhitespacable", "Property", "ObjectMember"]
		}), (0, s.default)("RestElement", {
			visitor: ["argument", "typeAnnotation"],
			builder: ["argument"],
			aliases: ["LVal", "PatternLike"],
			deprecatedAlias: "RestProperty",
			fields: Object.assign({}, c, {
				argument: {
					validate: (0, s.assertNodeType)("LVal")
				}
			})
		}), (0, s.default)("ReturnStatement", {
			visitor: ["argument"],
			aliases: ["Statement", "Terminatorless", "CompletionStatement"],
			fields: {
				argument: {
					validate: (0, s.assertNodeType)("Expression"),
					optional: !0
				}
			}
		}), (0, s.default)("SequenceExpression", {
			visitor: ["expressions"],
			fields: {
				expressions: {
					validate: (0, s.chain)((0, s.assertValueType)("array"), (0, s.assertEach)((0, s.assertNodeType)("Expression")))
				}
			},
			aliases: ["Expression"]
		}), (0, s.default)("ParenthesizedExpression", {
			visitor: ["expression"],
			aliases: ["Expression", "ExpressionWrapper"],
			fields: {
				expression: {
					validate: (0, s.assertNodeType)("Expression")
				}
			}
		}), (0, s.default)("SwitchCase", {
			visitor: ["test", "consequent"],
			fields: {
				test: {
					validate: (0, s.assertNodeType)("Expression"),
					optional: !0
				},
				consequent: {
					validate: (0, s.chain)((0, s.assertValueType)("array"), (0, s.assertEach)((0, s.assertNodeType)("Statement")))
				}
			}
		}), (0, s.default)("SwitchStatement", {
			visitor: ["discriminant", "cases"],
			aliases: ["Statement", "BlockParent", "Scopable"],
			fields: {
				discriminant: {
					validate: (0, s.assertNodeType)("Expression")
				},
				cases: {
					validate: (0, s.chain)((0, s.assertValueType)("array"), (0, s.assertEach)((0, s.assertNodeType)("SwitchCase")))
				}
			}
		}), (0, s.default)("ThisExpression", {
			aliases: ["Expression"]
		}), (0, s.default)("ThrowStatement", {
			visitor: ["argument"],
			aliases: ["Statement", "Terminatorless", "CompletionStatement"],
			fields: {
				argument: {
					validate: (0, s.assertNodeType)("Expression")
				}
			}
		}), (0, s.default)("TryStatement", {
			visitor: ["block", "handler", "finalizer"],
			aliases: ["Statement"],
			fields: {
				block: {
					validate: (0, s.assertNodeType)("BlockStatement")
				},
				handler: {
					optional: !0,
					validate: (0, s.assertNodeType)("CatchClause")
				},
				finalizer: {
					optional: !0,
					validate: (0, s.assertNodeType)("BlockStatement")
				}
			}
		}), (0, s.default)("UnaryExpression", {
			builder: ["operator", "argument", "prefix"],
			fields: {
				prefix: {
					default: !0
				},
				argument: {
					validate: (0, s.assertNodeType)("Expression")
				},
				operator: {
					validate: (0, s.assertOneOf)(...i.UNARY_OPERATORS)
				}
			},
			visitor: ["argument"],
			aliases: ["UnaryLike", "Expression"]
		}), (0, s.default)("UpdateExpression", {
			builder: ["operator", "argument", "prefix"],
			fields: {
				prefix: {
					default: !1
				},
				argument: {
					validate: (0, s.assertNodeType)("Expression")
				},
				operator: {
					validate: (0, s.assertOneOf)(...i.UPDATE_OPERATORS)
				}
			},
			visitor: ["argument"],
			aliases: ["Expression"]
		}), (0, s.default)("VariableDeclaration", {
			builder: ["kind", "declarations"],
			visitor: ["declarations"],
			aliases: ["Statement", "Declaration"],
			fields: {
				declare: {
					validate: (0, s.assertValueType)("boolean"),
					optional: !0
				},
				kind: {
					validate: (0, s.chain)((0, s.assertValueType)("string"), (0, s.assertOneOf)("var", "let", "const"))
				},
				declarations: {
					validate: (0, s.chain)((0, s.assertValueType)("array"), (0, s.assertEach)((0, s.assertNodeType)("VariableDeclarator")))
				}
			}
		}), (0, s.default)("VariableDeclarator", {
			visitor: ["id", "init"],
			fields: {
				id: {
					validate: (0, s.assertNodeType)("LVal")
				},
				definite: {
					optional: !0,
					validate: (0, s.assertValueType)("boolean")
				},
				init: {
					optional: !0,
					validate: (0, s.assertNodeType)("Expression")
				}
			}
		}), (0, s.default)("WhileStatement", {
			visitor: ["test", "body"],
			aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
			fields: {
				test: {
					validate: (0, s.assertNodeType)("Expression")
				},
				body: {
					validate: (0, s.assertNodeType)("BlockStatement", "Statement")
				}
			}
		}), (0, s.default)("WithStatement", {
			visitor: ["object", "body"],
			aliases: ["Statement"],
			fields: {
				object: {
					validate: (0, s.assertNodeType)("Expression")
				},
				body: {
					validate: (0, s.assertNodeType)("BlockStatement", "Statement")
				}
			}
		})
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t, n) {
			if (!t) return !1;
			if (!(0, i.default)(t.type, e)) return !n && "Placeholder" === t.type && e in o.FLIPPED_ALIAS_KEYS && (0, s.default)(t.expectedNode, e);
			return void 0 === n || (0, r.default)(t, n)
		};
		var r = a(n(33)),
			i = a(n(44)),
			s = a(n(76)),
			o = n(3);

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			if (e === t) return !0;
			if (r.ALIAS_KEYS[t]) return !1;
			const n = r.FLIPPED_ALIAS_KEYS[t];
			if (n) {
				if (n[0] === e) return !0;
				for (const t of n)
					if (e === t) return !0
			}
			return !1
		};
		var r = n(3)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t, n) {
			if (!e) return;
			const s = r.NODE_FIELDS[e.type];
			if (!s) return;
			const o = s[t];
			i(e, t, n, o)
		}, t.validateField = i;
		var r = n(3);

		function i(e, t, n, r) {
			r && r.validate && (r.optional && null == n || r.validate(e, t, n))
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.classMethodOrDeclareMethodCommon = t.classMethodOrPropertyCommon = void 0;
		var r = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(7)),
			i = n(42);
		(0, r.default)("AssignmentPattern", {
			visitor: ["left", "right", "decorators"],
			builder: ["left", "right"],
			aliases: ["Pattern", "PatternLike", "LVal"],
			fields: Object.assign({}, i.patternLikeCommon, {
				left: {
					validate: (0, r.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression")
				},
				right: {
					validate: (0, r.assertNodeType)("Expression")
				},
				decorators: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("Decorator")))
				}
			})
		}), (0, r.default)("ArrayPattern", {
			visitor: ["elements", "typeAnnotation"],
			builder: ["elements"],
			aliases: ["Pattern", "PatternLike", "LVal"],
			fields: Object.assign({}, i.patternLikeCommon, {
				elements: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("PatternLike")))
				},
				decorators: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("Decorator")))
				}
			})
		}), (0, r.default)("ArrowFunctionExpression", {
			builder: ["params", "body", "async"],
			visitor: ["params", "body", "returnType", "typeParameters"],
			aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
			fields: Object.assign({}, i.functionCommon, i.functionTypeAnnotationCommon, {
				expression: {
					validate: (0, r.assertValueType)("boolean")
				},
				body: {
					validate: (0, r.assertNodeType)("BlockStatement", "Expression")
				}
			})
		}), (0, r.default)("ClassBody", {
			visitor: ["body"],
			fields: {
				body: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "TSDeclareMethod", "TSIndexSignature")))
				}
			}
		});
		const s = {
			typeParameters: {
				validate: (0, r.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
				optional: !0
			},
			body: {
				validate: (0, r.assertNodeType)("ClassBody")
			},
			superClass: {
				optional: !0,
				validate: (0, r.assertNodeType)("Expression")
			},
			superTypeParameters: {
				validate: (0, r.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
				optional: !0
			},
			implements: {
				validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
				optional: !0
			}
		};
		(0, r.default)("ClassDeclaration", {
			builder: ["id", "superClass", "body", "decorators"],
			visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
			aliases: ["Scopable", "Class", "Statement", "Declaration", "Pureish"],
			fields: Object.assign({}, s, {
				declare: {
					validate: (0, r.assertValueType)("boolean"),
					optional: !0
				},
				abstract: {
					validate: (0, r.assertValueType)("boolean"),
					optional: !0
				},
				id: {
					validate: (0, r.assertNodeType)("Identifier"),
					optional: !0
				},
				decorators: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("Decorator"))),
					optional: !0
				}
			})
		}), (0, r.default)("ClassExpression", {
			inherits: "ClassDeclaration",
			aliases: ["Scopable", "Class", "Expression", "Pureish"],
			fields: Object.assign({}, s, {
				id: {
					optional: !0,
					validate: (0, r.assertNodeType)("Identifier")
				},
				body: {
					validate: (0, r.assertNodeType)("ClassBody")
				},
				superClass: {
					optional: !0,
					validate: (0, r.assertNodeType)("Expression")
				},
				decorators: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("Decorator"))),
					optional: !0
				}
			})
		}), (0, r.default)("ExportAllDeclaration", {
			visitor: ["source"],
			aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
			fields: {
				source: {
					validate: (0, r.assertNodeType)("StringLiteral")
				}
			}
		}), (0, r.default)("ExportDefaultDeclaration", {
			visitor: ["declaration"],
			aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
			fields: {
				declaration: {
					validate: (0, r.assertNodeType)("FunctionDeclaration", "TSDeclareFunction", "ClassDeclaration", "Expression")
				}
			}
		}), (0, r.default)("ExportNamedDeclaration", {
			visitor: ["declaration", "specifiers", "source"],
			aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
			fields: {
				declaration: {
					validate: (0, r.assertNodeType)("Declaration"),
					optional: !0
				},
				specifiers: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier")))
				},
				source: {
					validate: (0, r.assertNodeType)("StringLiteral"),
					optional: !0
				},
				exportKind: (0, r.validateOptional)((0, r.assertOneOf)("type", "value"))
			}
		}), (0, r.default)("ExportSpecifier", {
			visitor: ["local", "exported"],
			aliases: ["ModuleSpecifier"],
			fields: {
				local: {
					validate: (0, r.assertNodeType)("Identifier")
				},
				exported: {
					validate: (0, r.assertNodeType)("Identifier")
				}
			}
		}), (0, r.default)("ForOfStatement", {
			visitor: ["left", "right", "body"],
			aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
			fields: {
				left: {
					validate: (0, r.assertNodeType)("VariableDeclaration", "LVal")
				},
				right: {
					validate: (0, r.assertNodeType)("Expression")
				},
				body: {
					validate: (0, r.assertNodeType)("Statement")
				},
				await: {
					default: !1,
					validate: (0, r.assertValueType)("boolean")
				}
			}
		}), (0, r.default)("ImportDeclaration", {
			visitor: ["specifiers", "source"],
			aliases: ["Statement", "Declaration", "ModuleDeclaration"],
			fields: {
				specifiers: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
				},
				source: {
					validate: (0, r.assertNodeType)("StringLiteral")
				},
				importKind: {
					validate: (0, r.assertOneOf)("type", "typeof", "value"),
					optional: !0
				}
			}
		}), (0, r.default)("ImportDefaultSpecifier", {
			visitor: ["local"],
			aliases: ["ModuleSpecifier"],
			fields: {
				local: {
					validate: (0, r.assertNodeType)("Identifier")
				}
			}
		}), (0, r.default)("ImportNamespaceSpecifier", {
			visitor: ["local"],
			aliases: ["ModuleSpecifier"],
			fields: {
				local: {
					validate: (0, r.assertNodeType)("Identifier")
				}
			}
		}), (0, r.default)("ImportSpecifier", {
			visitor: ["local", "imported"],
			aliases: ["ModuleSpecifier"],
			fields: {
				local: {
					validate: (0, r.assertNodeType)("Identifier")
				},
				imported: {
					validate: (0, r.assertNodeType)("Identifier")
				},
				importKind: {
					validate: (0, r.assertOneOf)("type", "typeof"),
					optional: !0
				}
			}
		}), (0, r.default)("MetaProperty", {
			visitor: ["meta", "property"],
			aliases: ["Expression"],
			fields: {
				meta: {
					validate: (0, r.assertNodeType)("Identifier")
				},
				property: {
					validate: (0, r.assertNodeType)("Identifier")
				}
			}
		});
		const o = {
			abstract: {
				validate: (0, r.assertValueType)("boolean"),
				optional: !0
			},
			accessibility: {
				validate: (0, r.chain)((0, r.assertValueType)("string"), (0, r.assertOneOf)("public", "private", "protected")),
				optional: !0
			},
			static: {
				validate: (0, r.assertValueType)("boolean"),
				optional: !0
			},
			computed: {
				default: !1,
				validate: (0, r.assertValueType)("boolean")
			},
			optional: {
				validate: (0, r.assertValueType)("boolean"),
				optional: !0
			},
			key: {
				validate: (0, r.chain)(function () {
					const e = (0, r.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral"),
						t = (0, r.assertNodeType)("Expression");
					return function (n, r, i) {
						(n.computed ? t : e)(n, r, i)
					}
				}(), (0, r.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "Expression"))
			}
		};
		t.classMethodOrPropertyCommon = o;
		const a = Object.assign({}, i.functionCommon, o, {
			kind: {
				validate: (0, r.chain)((0, r.assertValueType)("string"), (0, r.assertOneOf)("get", "set", "method", "constructor")),
				default: "method"
			},
			access: {
				validate: (0, r.chain)((0, r.assertValueType)("string"), (0, r.assertOneOf)("public", "private", "protected")),
				optional: !0
			},
			decorators: {
				validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("Decorator"))),
				optional: !0
			}
		});
		t.classMethodOrDeclareMethodCommon = a, (0, r.default)("ClassMethod", {
			aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
			builder: ["kind", "key", "params", "body", "computed", "static"],
			visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
			fields: Object.assign({}, a, i.functionTypeAnnotationCommon, {
				body: {
					validate: (0, r.assertNodeType)("BlockStatement")
				}
			})
		}), (0, r.default)("ObjectPattern", {
			visitor: ["properties", "typeAnnotation", "decorators"],
			builder: ["properties"],
			aliases: ["Pattern", "PatternLike", "LVal"],
			fields: Object.assign({}, i.patternLikeCommon, {
				properties: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("RestElement", "ObjectProperty")))
				}
			})
		}), (0, r.default)("SpreadElement", {
			visitor: ["argument"],
			aliases: ["UnaryLike"],
			deprecatedAlias: "SpreadProperty",
			fields: {
				argument: {
					validate: (0, r.assertNodeType)("Expression")
				}
			}
		}), (0, r.default)("Super", {
			aliases: ["Expression"]
		}), (0, r.default)("TaggedTemplateExpression", {
			visitor: ["tag", "quasi"],
			aliases: ["Expression"],
			fields: {
				tag: {
					validate: (0, r.assertNodeType)("Expression")
				},
				quasi: {
					validate: (0, r.assertNodeType)("TemplateLiteral")
				},
				typeParameters: {
					validate: (0, r.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
					optional: !0
				}
			}
		}), (0, r.default)("TemplateElement", {
			builder: ["value", "tail"],
			fields: {
				value: {
					validate: (0, r.assertShape)({
						raw: {
							validate: (0, r.assertValueType)("string")
						},
						cooked: {
							validate: (0, r.assertValueType)("string"),
							optional: !0
						}
					})
				},
				tail: {
					validate: (0, r.assertValueType)("boolean"),
					default: !1
				}
			}
		}), (0, r.default)("TemplateLiteral", {
			visitor: ["quasis", "expressions"],
			aliases: ["Expression", "Literal"],
			fields: {
				quasis: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("TemplateElement")))
				},
				expressions: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("Expression")))
				}
			}
		}), (0, r.default)("YieldExpression", {
			builder: ["argument", "delegate"],
			visitor: ["argument"],
			aliases: ["Expression", "Terminatorless"],
			fields: {
				delegate: {
					validate: (0, r.assertValueType)("boolean"),
					default: !1
				},
				argument: {
					optional: !0,
					validate: (0, r.assertNodeType)("Expression")
				}
			}
		})
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(200));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t, n) {
			t && n && (t[e] = (0, r().default)([].concat(t[e], n[e]).filter(Boolean)))
		}
	}, function (e, t) {
		var n, r, i = e.exports = {};

		function s() {
			throw new Error("setTimeout has not been defined")
		}

		function o() {
			throw new Error("clearTimeout has not been defined")
		}

		function a(e) {
			if (n === setTimeout) return setTimeout(e, 0);
			if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
			try {
				return n(e, 0)
			} catch (t) {
				try {
					return n.call(null, e, 0)
				} catch (t) {
					return n.call(this, e, 0)
				}
			}
		}! function () {
			try {
				n = "function" == typeof setTimeout ? setTimeout : s
			} catch (e) {
				n = s
			}
			try {
				r = "function" == typeof clearTimeout ? clearTimeout : o
			} catch (e) {
				r = o
			}
		}();
		var u, c = [],
			l = !1,
			p = -1;

		function h() {
			l && u && (l = !1, u.length ? c = u.concat(c) : p = -1, c.length && f())
		}

		function f() {
			if (!l) {
				var e = a(h);
				l = !0;
				for (var t = c.length; t;) {
					for (u = c, c = []; ++p < t;) u && u[p].run();
					p = -1, t = c.length
				}
				u = null, l = !1,
					function (e) {
						if (r === clearTimeout) return clearTimeout(e);
						if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
						try {
							r(e)
						} catch (t) {
							try {
								return r.call(null, e)
							} catch (t) {
								return r.call(this, e)
							}
						}
					}(e)
			}
		}

		function d(e, t) {
			this.fun = e, this.array = t
		}

		function y() {}
		i.nextTick = function (e) {
			var t = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
			c.push(new d(e, t)), 1 !== c.length || l || a(f)
		}, d.prototype.run = function () {
			this.fun.apply(null, this.array)
		}, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = y, i.addListener = y, i.once = y, i.off = y, i.removeListener = y, i.removeAllListeners = y, i.emit = y, i.prependListener = y, i.prependOnceListener = y, i.listeners = function (e) {
			return []
		}, i.binding = function (e) {
			throw new Error("process.binding is not supported")
		}, i.cwd = function () {
			return "/"
		}, i.chdir = function (e) {
			throw new Error("process.chdir is not supported")
		}, i.umask = function () {
			return 0
		}
	}, function (e, t, n) {
		var r = n(83),
			i = n(29),
			s = n(244),
			o = n(50),
			a = n(247),
			u = Math.max;
		e.exports = function (e, t, n, c) {
			e = i(e) ? e : a(e), n = n && !c ? o(n) : 0;
			var l = e.length;
			return n < 0 && (n = u(l + n, 0)), s(e) ? n <= l && e.indexOf(t, n) > -1 : !!l && r(e, t, n) > -1
		}
	}, function (e, t, n) {
		var r = n(245);
		e.exports = function (e) {
			var t = r(e),
				n = t % 1;
			return t == t ? n ? t - n : t : 0
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.merge = function (e, t) {
			const {
				placeholderWhitelist: n = e.placeholderWhitelist,
				placeholderPattern: r = e.placeholderPattern,
				preserveComments: i = e.preserveComments,
				syntacticPlaceholders: s = e.syntacticPlaceholders
			} = t;
			return {
				parser: Object.assign({}, e.parser, t.parser),
				placeholderWhitelist: n,
				placeholderPattern: r,
				preserveComments: i,
				syntacticPlaceholders: s
			}
		}, t.validate = function (e) {
			if (null != e && "object" != typeof e) throw new Error("Unknown template options.");
			const t = e || {},
				{
					placeholderWhitelist: n,
					placeholderPattern: r,
					preserveComments: i,
					syntacticPlaceholders: s
				} = t,
				o = function (e, t) {
					if (null == e) return {};
					var n, r, i = {},
						s = Object.keys(e);
					for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
					return i
				}(t, ["placeholderWhitelist", "placeholderPattern", "preserveComments", "syntacticPlaceholders"]);
			if (null != n && !(n instanceof Set)) throw new Error("'.placeholderWhitelist' must be a Set, null, or undefined");
			if (null != r && !(r instanceof RegExp) && !1 !== r) throw new Error("'.placeholderPattern' must be a RegExp, false, null, or undefined");
			if (null != i && "boolean" != typeof i) throw new Error("'.preserveComments' must be a boolean, null, or undefined");
			if (null != s && "boolean" != typeof s) throw new Error("'.syntacticPlaceholders' must be a boolean, null, or undefined");
			if (!0 === s && (null != n || null != r)) throw new Error("'.placeholderWhitelist' and '.placeholderPattern' aren't compatible with '.syntacticPlaceholders: true'");
			return {
				parser: o,
				placeholderWhitelist: n || void 0,
				placeholderPattern: null == r ? void 0 : r,
				preserveComments: null != i && i,
				syntacticPlaceholders: null == s ? void 0 : s
			}
		}, t.normalizeReplacements = function (e) {
			if (Array.isArray(e)) return e.reduce((e, t, n) => (e["$" + n] = t, e), {});
			if ("object" == typeof e || null == e) return e || void 0;
			throw new Error("Template replacements must be an array, object, null, or undefined")
		}
	}, function (e, t) {
		(e.exports = function e(t, n) {
			var r;
			if (null !== t && void 0 !== t) return n = (n || "").replace(/[^&"<>\']/g, ""), r = "([&\"<>'])".replace(new RegExp("[" + n + "]", "g"), ""), t.replace(new RegExp(r, "g"), function (t, n) {
				return e.map[n]
			})
		}).map = {
			">": "&gt;",
			"<": "&lt;",
			"'": "&apos;",
			'"': "&quot;",
			"&": "&amp;"
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.ForAwaitStatement = t.NumericLiteralTypeAnnotation = t.ExistentialTypeParam = t.SpreadProperty = t.RestProperty = t.Flow = t.Pure = t.Generated = t.User = t.Var = t.BlockScoped = t.Referenced = t.Scope = t.Expression = t.Statement = t.BindingIdentifier = t.ReferencedMemberExpression = t.ReferencedIdentifier = void 0;
		const i = {
			types: ["Identifier", "JSXIdentifier"],
			checkPath(e, t) {
				const {
					node: n,
					parent: i
				} = e;
				if (!r().isIdentifier(n, t) && !r().isJSXMemberExpression(i, t)) {
					if (!r().isJSXIdentifier(n, t)) return !1;
					if (r().react.isCompatTag(n.name)) return !1
				}
				return r().isReferenced(n, i, e.parentPath.parent)
			}
		};
		t.ReferencedIdentifier = i;
		const s = {
			types: ["MemberExpression"],
			checkPath: ({
				node: e,
				parent: t
			}) => r().isMemberExpression(e) && r().isReferenced(e, t)
		};
		t.ReferencedMemberExpression = s;
		const o = {
			types: ["Identifier"],
			checkPath(e) {
				const {
					node: t,
					parent: n
				} = e, i = e.parentPath.parent;
				return r().isIdentifier(t) && r().isBinding(t, n, i)
			}
		};
		t.BindingIdentifier = o;
		const a = {
			types: ["Statement"],
			checkPath({
				node: e,
				parent: t
			}) {
				if (r().isStatement(e)) {
					if (r().isVariableDeclaration(e)) {
						if (r().isForXStatement(t, {
								left: e
							})) return !1;
						if (r().isForStatement(t, {
								init: e
							})) return !1
					}
					return !0
				}
				return !1
			}
		};
		t.Statement = a;
		const u = {
			types: ["Expression"],
			checkPath: e => e.isIdentifier() ? e.isReferencedIdentifier() : r().isExpression(e.node)
		};
		t.Expression = u;
		const c = {
			types: ["Scopable"],
			checkPath: e => r().isScope(e.node, e.parent)
		};
		t.Scope = c;
		const l = {
			checkPath: e => r().isReferenced(e.node, e.parent)
		};
		t.Referenced = l;
		const p = {
			checkPath: e => r().isBlockScoped(e.node)
		};
		t.BlockScoped = p;
		const h = {
			types: ["VariableDeclaration"],
			checkPath: e => r().isVar(e.node)
		};
		t.Var = h;
		const f = {
			checkPath: e => e.node && !!e.node.loc
		};
		t.User = f;
		const d = {
			checkPath: e => !e.isUser()
		};
		t.Generated = d;
		const y = {
			checkPath: (e, t) => e.scope.isPure(e.node, t)
		};
		t.Pure = y;
		const m = {
			types: ["Flow", "ImportDeclaration", "ExportDeclaration", "ImportSpecifier"],
			checkPath: ({
				node: e
			}) => !!r().isFlow(e) || (r().isImportDeclaration(e) ? "type" === e.importKind || "typeof" === e.importKind : r().isExportDeclaration(e) ? "type" === e.exportKind : !!r().isImportSpecifier(e) && ("type" === e.importKind || "typeof" === e.importKind))
		};
		t.Flow = m;
		const g = {
			types: ["RestElement"],
			checkPath: e => e.parentPath && e.parentPath.isObjectPattern()
		};
		t.RestProperty = g;
		const E = {
			types: ["RestElement"],
			checkPath: e => e.parentPath && e.parentPath.isObjectExpression()
		};
		t.SpreadProperty = E;
		t.ExistentialTypeParam = {
			types: ["ExistsTypeAnnotation"]
		};
		t.NumericLiteralTypeAnnotation = {
			types: ["NumberLiteralTypeAnnotation"]
		};
		const T = {
			types: ["ForOfStatement"],
			checkPath: ({
				node: e
			}) => !0 === e.await
		};
		t.ForAwaitStatement = T
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			const n = e.split(".");
			return e => (0, r.default)(e, n, t)
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(55))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t, n) {
			if (!(0, r.isMemberExpression)(e)) return !1;
			const i = Array.isArray(t) ? t : t.split("."),
				s = [];
			let o;
			for (o = e;
				(0, r.isMemberExpression)(o); o = o.object) s.push(o.property);
			if (s.push(o), s.length < i.length) return !1;
			if (!n && s.length > i.length) return !1;
			for (let e = 0, t = s.length - 1; e < i.length; e++, t--) {
				const n = s[t];
				let o;
				if ((0, r.isIdentifier)(n)) o = n.name;
				else {
					if (!(0, r.isStringLiteral)(n)) return !1;
					o = n.value
				}
				if (i[e] !== o) return !1
			}
			return !0
		};
		var r = n(2)
	}, function (e, t, n) {
		var r = n(119),
			i = 4;
		e.exports = function (e) {
			return r(e, i)
		}
	}, function (e, t, n) {
		var r = n(8),
			i = n(10),
			s = "[object AsyncFunction]",
			o = "[object Function]",
			a = "[object GeneratorFunction]",
			u = "[object Proxy]";
		e.exports = function (e) {
			if (!i(e)) return !1;
			var t = r(e);
			return t == o || t == a || t == s || t == u
		}
	}, function (e, t, n) {
		(function (t) {
			var n = "object" == typeof t && t && t.Object === Object && t;
			e.exports = n
		}).call(this, n(35))
	}, function (e, t) {
		var n = Function.prototype.toString;
		e.exports = function (e) {
			if (null != e) {
				try {
					return n.call(e)
				} catch (e) {}
				try {
					return e + ""
				} catch (e) {}
			}
			return ""
		}
	}, function (e, t, n) {
		var r = n(137),
			i = n(144),
			s = n(146),
			o = n(147),
			a = n(148);

		function u(e) {
			var t = -1,
				n = null == e ? 0 : e.length;
			for (this.clear(); ++t < n;) {
				var r = e[t];
				this.set(r[0], r[1])
			}
		}
		u.prototype.clear = r, u.prototype.delete = i, u.prototype.get = s, u.prototype.has = o, u.prototype.set = a, e.exports = u
	}, function (e, t, n) {
		var r = n(62),
			i = n(20),
			s = Object.prototype.hasOwnProperty;
		e.exports = function (e, t, n) {
			var o = e[t];
			s.call(e, t) && i(o, n) && (void 0 !== n || t in e) || r(e, t, n)
		}
	}, function (e, t, n) {
		var r = n(63);
		e.exports = function (e, t, n) {
			"__proto__" == t && r ? r(e, t, {
				configurable: !0,
				enumerable: !0,
				value: n,
				writable: !0
			}) : e[t] = n
		}
	}, function (e, t, n) {
		var r = n(9),
			i = function () {
				try {
					var e = r(Object, "defineProperty");
					return e({}, "", {}), e
				} catch (e) {}
			}();
		e.exports = i
	}, function (e, t, n) {
		var r = n(151),
			i = n(152),
			s = n(14),
			o = n(65),
			a = n(66),
			u = n(155),
			c = Object.prototype.hasOwnProperty;
		e.exports = function (e, t) {
			var n = s(e),
				l = !n && i(e),
				p = !n && !l && o(e),
				h = !n && !l && !p && u(e),
				f = n || l || p || h,
				d = f ? r(e.length, String) : [],
				y = d.length;
			for (var m in e) !t && !c.call(e, m) || f && ("length" == m || p && ("offset" == m || "parent" == m) || h && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || a(m, y)) || d.push(m);
			return d
		}
	}, function (e, t, n) {
		(function (e) {
			var r = n(5),
				i = n(154),
				s = "object" == typeof t && t && !t.nodeType && t,
				o = s && "object" == typeof e && e && !e.nodeType && e,
				a = o && o.exports === s ? r.Buffer : void 0,
				u = (a ? a.isBuffer : void 0) || i;
			e.exports = u
		}).call(this, n(26)(e))
	}, function (e, t) {
		var n = 9007199254740991,
			r = /^(?:0|[1-9]\d*)$/;
		e.exports = function (e, t) {
			var i = typeof e;
			return !!(t = null == t ? n : t) && ("number" == i || "symbol" != i && r.test(e)) && e > -1 && e % 1 == 0 && e < t
		}
	}, function (e, t) {
		var n = 9007199254740991;
		e.exports = function (e) {
			return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
		}
	}, function (e, t) {
		e.exports = function (e, t) {
			return function (n) {
				return e(t(n))
			}
		}
	}, function (e, t) {
		e.exports = function () {
			return []
		}
	}, function (e, t, n) {
		var r = n(71),
			i = n(39),
			s = n(38),
			o = n(69),
			a = Object.getOwnPropertySymbols ? function (e) {
				for (var t = []; e;) r(t, s(e)), e = i(e);
				return t
			} : o;
		e.exports = a
	}, function (e, t) {
		e.exports = function (e, t) {
			for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
			return e
		}
	}, function (e, t, n) {
		var r = n(71),
			i = n(14);
		e.exports = function (e, t, n) {
			var s = t(e);
			return i(e) ? s : r(s, n(e))
		}
	}, function (e, t, n) {
		var r = n(9)(n(5), "Set");
		e.exports = r
	}, function (e, t, n) {
		! function () {
			"use strict";
			t.ast = n(186), t.code = n(75), t.keyword = n(187)
		}()
	}, function (e, t) {
		! function () {
			"use strict";
			var t, n, r, i, s, o;

			function a(e) {
				return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296) + String.fromCharCode((e - 65536) % 1024 + 56320)
			}
			for (n = {
					NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
					NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
				}, t = {
					NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,
					NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
				}, r = [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279], i = new Array(128), o = 0; o < 128; ++o) i[o] = o >= 97 && o <= 122 || o >= 65 && o <= 90 || 36 === o || 95 === o;
			for (s = new Array(128), o = 0; o < 128; ++o) s[o] = o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || 36 === o || 95 === o;
			e.exports = {
				isDecimalDigit: function (e) {
					return 48 <= e && e <= 57
				},
				isHexDigit: function (e) {
					return 48 <= e && e <= 57 || 97 <= e && e <= 102 || 65 <= e && e <= 70
				},
				isOctalDigit: function (e) {
					return e >= 48 && e <= 55
				},
				isWhiteSpace: function (e) {
					return 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || e >= 5760 && r.indexOf(e) >= 0
				},
				isLineTerminator: function (e) {
					return 10 === e || 13 === e || 8232 === e || 8233 === e
				},
				isIdentifierStartES5: function (e) {
					return e < 128 ? i[e] : n.NonAsciiIdentifierStart.test(a(e))
				},
				isIdentifierPartES5: function (e) {
					return e < 128 ? s[e] : n.NonAsciiIdentifierPart.test(a(e))
				},
				isIdentifierStartES6: function (e) {
					return e < 128 ? i[e] : t.NonAsciiIdentifierStart.test(a(e))
				},
				isIdentifierPartES6: function (e) {
					return e < 128 ? s[e] : t.NonAsciiIdentifierPart.test(a(e))
				}
			}
		}()
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			if (e === t) return !0;
			const n = r.PLACEHOLDERS_ALIAS[e];
			if (n)
				for (const e of n)
					if (t === e) return !0;
			return !1
		};
		var r = n(3)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.PLACEHOLDERS_FLIPPED_ALIAS = t.PLACEHOLDERS_ALIAS = t.PLACEHOLDERS = void 0;
		var r = n(7);
		const i = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
		t.PLACEHOLDERS = i;
		const s = {
			Declaration: ["Statement"],
			Pattern: ["PatternLike", "LVal"]
		};
		t.PLACEHOLDERS_ALIAS = s;
		for (const e of i) {
			const t = r.ALIAS_KEYS[e];
			t && t.length && (s[e] = t)
		}
		const o = {};
		t.PLACEHOLDERS_FLIPPED_ALIAS = o, Object.keys(s).forEach(e => {
			s[e].forEach(t => {
				Object.hasOwnProperty.call(o, t) || (o[t] = []), o[t].push(e)
			})
		})
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			return !(!e || !r.VISITOR_KEYS[e.type])
		};
		var r = n(3)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function e(t) {
			const n = {};
			const i = {};
			const s = [];
			const o = [];
			for (let a = 0; a < t.length; a++) {
				const u = t[a];
				if (u && !(o.indexOf(u) >= 0)) {
					if ((0, r.isAnyTypeAnnotation)(u)) return [u];
					if ((0, r.isFlowBaseAnnotation)(u)) i[u.type] = u;
					else if ((0, r.isUnionTypeAnnotation)(u)) s.indexOf(u.types) < 0 && (t = t.concat(u.types), s.push(u.types));
					else if ((0, r.isGenericTypeAnnotation)(u)) {
						const t = u.id.name;
						if (n[t]) {
							let r = n[t];
							r.typeParameters ? u.typeParameters && (r.typeParameters.params = e(r.typeParameters.params.concat(u.typeParameters.params))) : r = u.typeParameters
						} else n[t] = u
					} else o.push(u)
				}
			}
			for (const e of Object.keys(i)) o.push(i[e]);
			for (const e of Object.keys(n)) o.push(n[e]);
			return o
		};
		var r = n(2)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			return (0, r.default)(e, !1)
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(16))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t, n) {
			if (!n || !e) return e;
			const r = `${t}Comments`;
			e[r] ? e[r] = "leading" === t ? n.concat(e[r]) : e[r].concat(n) : e[r] = n;
			return e
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			(0, r.default)("innerComments", e, t)
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(47))
	}, function (e, t, n) {
		var r = n(206),
			i = n(207),
			s = n(208);
		e.exports = function (e, t, n) {
			return t == t ? s(e, t, n) : r(e, i, n)
		}
	}, function (e, t) {
		e.exports = function (e) {
			var t = -1,
				n = Array(e.size);
			return e.forEach(function (e) {
				n[++t] = e
			}), n
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			(0, r.default)("leadingComments", e, t)
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(47))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			return (0, r.default)(e, t), (0, i.default)(e, t), (0, s.default)(e, t), e
		};
		var r = o(n(87)),
			i = o(n(85)),
			s = o(n(82));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			(0, r.default)("trailingComments", e, t)
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(47))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			if ((0, r.isBlockStatement)(e)) return e;
			let n = [];
			(0, r.isEmptyStatement)(e) ? n = []: ((0, r.isStatement)(e) || (e = (0, r.isFunction)(t) ? (0, i.returnStatement)(e) : (0, i.expressionStatement)(e)), n = [e]);
			return (0, i.blockStatement)(n)
		};
		var r = n(2),
			i = n(4)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			e = (e = (e = (e += "").replace(/[^a-zA-Z0-9$_]/g, "-")).replace(/^[-0-9]+/, "")).replace(/[-\s]+(.)?/g, function (e, t) {
				return t ? t.toUpperCase() : ""
			}), (0, r.default)(e) || (e = `_${e}`);
			return e || "_"
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(15))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			return (0, r.default)(e, i.default, t), e
		};
		var r = s(n(91)),
			i = s(n(92));

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function e(t, n, i) {
			if (!t) return;
			const s = r.VISITOR_KEYS[t.type];
			if (!s) return;
			i = i || {};
			n(t, i);
			for (const r of s) {
				const s = t[r];
				if (Array.isArray(s))
					for (const t of s) e(t, n, i);
				else e(s, n, i)
			}
		};
		var r = n(3)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t = {}) {
			const n = t.preserveComments ? r : i;
			for (const t of n) null != e[t] && (e[t] = void 0);
			for (const t of Object.keys(e)) "_" === t[0] && null != e[t] && (e[t] = void 0);
			const s = Object.getOwnPropertySymbols(e);
			for (const t of s) e[t] = null
		};
		const r = ["tokens", "start", "end", "loc", "raw", "rawValue"],
			i = n(11).COMMENT_KEYS.concat(["comments"]).concat(r)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			return (0, r.isVariableDeclaration)(e) && ("var" !== e.kind || e[i.BLOCK_SCOPED_SYMBOL])
		};
		var r = n(2),
			i = n(11)
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = h(n(49));
			return r = function () {
				return e
			}, e
		}

		function i() {
			const e = h(n(97));
			return i = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var s = h(n(252)),
			o = h(n(13));

		function a() {
			const e = h(n(254));
			return a = function () {
				return e
			}, e
		}
		var u = h(n(99));

		function c() {
			const e = h(n(262));
			return c = function () {
				return e
			}, e
		}

		function l() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return l = function () {
				return e
			}, e
		}
		var p = n(31);

		function h(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		const f = {
			For(e) {
				for (const t of l().FOR_INIT_KEYS) {
					const n = e.get(t);
					if (n.isVar()) {
						(e.scope.getFunctionParent() || e.scope.getProgramParent()).registerBinding("var", n)
					}
				}
			},
			Declaration(e) {
				if (e.isBlockScoped()) return;
				if (e.isExportDeclaration() && e.get("declaration").isDeclaration()) return;
				(e.scope.getFunctionParent() || e.scope.getProgramParent()).registerDeclaration(e)
			},
			ReferencedIdentifier(e, t) {
				t.references.push(e)
			},
			ForXStatement(e, t) {
				const n = e.get("left");
				(n.isPattern() || n.isIdentifier()) && t.constantViolations.push(e)
			},
			ExportDeclaration: {
				exit(e) {
					const {
						node: t,
						scope: n
					} = e, r = t.declaration;
					if (l().isClassDeclaration(r) || l().isFunctionDeclaration(r)) {
						const t = r.id;
						if (!t) return;
						const i = n.getBinding(t.name);
						i && i.reference(e)
					} else if (l().isVariableDeclaration(r))
						for (const t of r.declarations)
							for (const r of Object.keys(l().getBindingIdentifiers(t))) {
								const t = n.getBinding(r);
								t && t.reference(e)
							}
				}
			},
			LabeledStatement(e) {
				e.scope.getProgramParent().addGlobal(e.node), e.scope.getBlockParent().registerDeclaration(e)
			},
			AssignmentExpression(e, t) {
				t.assignments.push(e)
			},
			UpdateExpression(e, t) {
				t.constantViolations.push(e)
			},
			UnaryExpression(e, t) {
				"delete" === e.node.operator && t.constantViolations.push(e)
			},
			BlockScoped(e) {
				let t = e.scope;
				t.path === e && (t = t.parent), t.getBlockParent().registerDeclaration(e)
			},
			ClassDeclaration(e) {
				const t = e.node.id;
				if (!t) return;
				const n = t.name;
				e.scope.bindings[n] = e.scope.getBinding(n)
			},
			Block(e) {
				const t = e.get("body");
				for (const n of t) n.isFunctionDeclaration() && e.scope.getBlockParent().registerDeclaration(n)
			}
		};
		let d = 0;
		class y {
			constructor(e) {
				const {
					node: t
				} = e, n = p.scope.get(t);
				if (n && n.path === e) return n;
				p.scope.set(t, this), this.uid = d++, this.block = t, this.path = e, this.labels = new Map
			}
			get parent() {
				const e = this.path.findParent(e => e.isScope());
				return e && e.scope
			}
			get parentBlock() {
				return this.path.parent
			}
			get hub() {
				return this.path.hub
			}
			traverse(e, t, n) {
				(0, o.default)(e, t, this, n, this.path)
			}
			generateDeclaredUidIdentifier(e) {
				const t = this.generateUidIdentifier(e);
				return this.push({
					id: t
				}), l().cloneNode(t)
			}
			generateUidIdentifier(e) {
				return l().identifier(this.generateUid(e))
			}
			generateUid(e = "temp") {
				let t;
				e = l().toIdentifier(e).replace(/^_+/, "").replace(/[0-9]+$/g, "");
				let n = 0;
				do {
					t = this._generateUid(e, n), n++
				} while (this.hasLabel(t) || this.hasBinding(t) || this.hasGlobal(t) || this.hasReference(t));
				const r = this.getProgramParent();
				return r.references[t] = !0, r.uids[t] = !0, t
			}
			_generateUid(e, t) {
				let n = e;
				return t > 1 && (n += t), `_${n}`
			}
			generateUidBasedOnNode(e, t) {
				let n = e;
				l().isAssignmentExpression(e) ? n = e.left : l().isVariableDeclarator(e) ? n = e.id : (l().isObjectProperty(n) || l().isObjectMethod(n)) && (n = n.key);
				const r = [];
				! function e(t, n) {
					if (l().isModuleDeclaration(t))
						if (t.source) e(t.source, n);
						else if (t.specifiers && t.specifiers.length)
						for (const r of t.specifiers) e(r, n);
					else t.declaration && e(t.declaration, n);
					else if (l().isModuleSpecifier(t)) e(t.local, n);
					else if (l().isMemberExpression(t)) e(t.object, n), e(t.property, n);
					else if (l().isIdentifier(t)) n.push(t.name);
					else if (l().isLiteral(t)) n.push(t.value);
					else if (l().isCallExpression(t)) e(t.callee, n);
					else if (l().isObjectExpression(t) || l().isObjectPattern(t))
						for (const r of t.properties) e(r.key || r.argument, n);
					else l().isPrivateName(t) ? e(t.id, n) : l().isThisExpression(t) ? n.push("this") : l().isSuper(t) && n.push("super")
				}(n, r);
				let i = r.join("$");
				return i = i.replace(/^_/, "") || t || "ref", this.generateUid(i.slice(0, 20))
			}
			generateUidIdentifierBasedOnNode(e, t) {
				return l().identifier(this.generateUidBasedOnNode(e, t))
			}
			isStatic(e) {
				if (l().isThisExpression(e) || l().isSuper(e)) return !0;
				if (l().isIdentifier(e)) {
					const t = this.getBinding(e.name);
					return t ? t.constant : this.hasBinding(e.name)
				}
				return !1
			}
			maybeGenerateMemoised(e, t) {
				if (this.isStatic(e)) return null; {
					const n = this.generateUidIdentifierBasedOnNode(e);
					return t ? n : (this.push({
						id: n
					}), l().cloneNode(n))
				}
			}
			checkBlockScopedCollisions(e, t, n, r) {
				if ("param" === t) return;
				if ("local" === e.kind) return;
				if ("let" === t || "let" === e.kind || "const" === e.kind || "module" === e.kind || "param" === e.kind && ("let" === t || "const" === t)) throw this.hub.buildError(r, `Duplicate declaration "${n}"`, TypeError)
			}
			rename(e, t, n) {
				const r = this.getBinding(e);
				if (r) return t = t || this.generateUidIdentifier(e).name, new s.default(r, e, t).rename(n)
			}
			_renameFromMap(e, t, n, r) {
				e[t] && (e[n] = r, e[t] = null)
			}
			dump() {
				const e = (0, i().default)("-", 60);
				console.log(e);
				let t = this;
				do {
					console.log("#", t.block.type);
					for (const e of Object.keys(t.bindings)) {
						const n = t.bindings[e];
						console.log(" -", e, {
							constant: n.constant,
							references: n.references,
							violations: n.constantViolations.length,
							kind: n.kind
						})
					}
				} while (t = t.parent);
				console.log(e)
			}
			toArray(e, t) {
				if (l().isIdentifier(e)) {
					const t = this.getBinding(e.name);
					if (t && t.constant && t.path.isGenericType("Array")) return e
				}
				if (l().isArrayExpression(e)) return e;
				if (l().isIdentifier(e, {
						name: "arguments"
					})) return l().callExpression(l().memberExpression(l().memberExpression(l().memberExpression(l().identifier("Array"), l().identifier("prototype")), l().identifier("slice")), l().identifier("call")), [e]);
				let n;
				const r = [e];
				return !0 === t ? n = "toConsumableArray" : t ? (r.push(l().numericLiteral(t)), n = "slicedToArray") : n = "toArray", l().callExpression(this.hub.addHelper(n), r)
			}
			hasLabel(e) {
				return !!this.getLabel(e)
			}
			getLabel(e) {
				return this.labels.get(e)
			}
			registerLabel(e) {
				this.labels.set(e.node.label.name, e)
			}
			registerDeclaration(e) {
				if (e.isLabeledStatement()) this.registerLabel(e);
				else if (e.isFunctionDeclaration()) this.registerBinding("hoisted", e.get("id"), e);
				else if (e.isVariableDeclaration()) {
					const t = e.get("declarations");
					for (const n of t) this.registerBinding(e.node.kind, n)
				} else if (e.isClassDeclaration()) this.registerBinding("let", e);
				else if (e.isImportDeclaration()) {
					const t = e.get("specifiers");
					for (const e of t) this.registerBinding("module", e)
				} else if (e.isExportDeclaration()) {
					const t = e.get("declaration");
					(t.isClassDeclaration() || t.isFunctionDeclaration() || t.isVariableDeclaration()) && this.registerDeclaration(t)
				} else this.registerBinding("unknown", e)
			}
			buildUndefinedNode() {
				return this.hasBinding("undefined") ? l().unaryExpression("void", l().numericLiteral(0), !0) : l().identifier("undefined")
			}
			registerConstantViolation(e) {
				const t = e.getBindingIdentifiers();
				for (const n of Object.keys(t)) {
					const t = this.getBinding(n);
					t && t.reassign(e)
				}
			}
			registerBinding(e, t, n = t) {
				if (!e) throw new ReferenceError("no `kind`");
				if (t.isVariableDeclaration()) {
					const n = t.get("declarations");
					for (const t of n) this.registerBinding(e, t);
					return
				}
				const r = this.getProgramParent(),
					i = t.getOuterBindingIdentifiers(!0);
				for (const t of Object.keys(i))
					for (const s of i[t]) {
						const i = this.getOwnBinding(t);
						if (i) {
							if (i.identifier === s) continue;
							this.checkBlockScopedCollisions(i, e, t, s)
						}
						r.references[t] = !0, i ? this.registerConstantViolation(n) : this.bindings[t] = new u.default({
							identifier: s,
							scope: this,
							path: n,
							kind: e
						})
					}
			}
			addGlobal(e) {
				this.globals[e.name] = e
			}
			hasUid(e) {
				let t = this;
				do {
					if (t.uids[e]) return !0
				} while (t = t.parent);
				return !1
			}
			hasGlobal(e) {
				let t = this;
				do {
					if (t.globals[e]) return !0
				} while (t = t.parent);
				return !1
			}
			hasReference(e) {
				let t = this;
				do {
					if (t.references[e]) return !0
				} while (t = t.parent);
				return !1
			}
			isPure(e, t) {
				if (l().isIdentifier(e)) {
					const n = this.getBinding(e.name);
					return !!n && (!t || n.constant)
				}
				if (l().isClass(e)) return !(e.superClass && !this.isPure(e.superClass, t)) && this.isPure(e.body, t);
				if (l().isClassBody(e)) {
					for (const n of e.body)
						if (!this.isPure(n, t)) return !1;
					return !0
				}
				if (l().isBinary(e)) return this.isPure(e.left, t) && this.isPure(e.right, t);
				if (l().isArrayExpression(e)) {
					for (const n of e.elements)
						if (!this.isPure(n, t)) return !1;
					return !0
				}
				if (l().isObjectExpression(e)) {
					for (const n of e.properties)
						if (!this.isPure(n, t)) return !1;
					return !0
				}
				if (l().isClassMethod(e)) return !(e.computed && !this.isPure(e.key, t)) && ("get" !== e.kind && "set" !== e.kind);
				if (l().isProperty(e)) return !(e.computed && !this.isPure(e.key, t)) && this.isPure(e.value, t);
				if (l().isUnaryExpression(e)) return this.isPure(e.argument, t);
				if (l().isTaggedTemplateExpression(e)) return l().matchesPattern(e.tag, "String.raw") && !this.hasBinding("String", !0) && this.isPure(e.quasi, t);
				if (l().isTemplateLiteral(e)) {
					for (const n of e.expressions)
						if (!this.isPure(n, t)) return !1;
					return !0
				}
				return l().isPureish(e)
			}
			setData(e, t) {
				return this.data[e] = t
			}
			getData(e) {
				let t = this;
				do {
					const n = t.data[e];
					if (null != n) return n
				} while (t = t.parent)
			}
			removeData(e) {
				let t = this;
				do {
					null != t.data[e] && (t.data[e] = null)
				} while (t = t.parent)
			}
			init() {
				this.references || this.crawl()
			}
			crawl() {
				const e = this.path;
				if (this.references = Object.create(null), this.bindings = Object.create(null), this.globals = Object.create(null), this.uids = Object.create(null), this.data = Object.create(null), e.isLoop())
					for (const t of l().FOR_INIT_KEYS) {
						const n = e.get(t);
						n.isBlockScoped() && this.registerBinding(n.node.kind, n)
					}
				if (e.isFunctionExpression() && e.has("id") && (e.get("id").node[l().NOT_LOCAL_BINDING] || this.registerBinding("local", e.get("id"), e)), e.isClassExpression() && e.has("id") && (e.get("id").node[l().NOT_LOCAL_BINDING] || this.registerBinding("local", e)), e.isFunction()) {
					const t = e.get("params");
					for (const e of t) this.registerBinding("param", e)
				}
				if (e.isCatchClause() && this.registerBinding("let", e), this.getProgramParent().crawling) return;
				const t = {
					references: [],
					constantViolations: [],
					assignments: []
				};
				this.crawling = !0, e.traverse(f, t), this.crawling = !1;
				for (const e of t.assignments) {
					const t = e.getBindingIdentifiers();
					let n;
					for (const r of Object.keys(t)) e.scope.getBinding(r) || (n = n || e.scope.getProgramParent()).addGlobal(t[r]);
					e.scope.registerConstantViolation(e)
				}
				for (const e of t.references) {
					const t = e.scope.getBinding(e.node.name);
					t ? t.reference(e) : e.scope.getProgramParent().addGlobal(e.node)
				}
				for (const e of t.constantViolations) e.scope.registerConstantViolation(e)
			}
			push(e) {
				let t = this.path;
				t.isBlockStatement() || t.isProgram() || (t = this.getBlockParent().path), t.isSwitchStatement() && (t = (this.getFunctionParent() || this.getProgramParent()).path), (t.isLoop() || t.isCatchClause() || t.isFunction()) && (t.ensureBlock(), t = t.get("body"));
				const n = e.unique,
					r = e.kind || "var",
					i = null == e._blockHoist ? 2 : e._blockHoist,
					s = `declaration:${r}:${i}`;
				let o = !n && t.getData(s);
				if (!o) {
					const e = l().variableDeclaration(r, []);
					e._blockHoist = i, [o] = t.unshiftContainer("body", [e]), n || t.setData(s, o)
				}
				const a = l().variableDeclarator(e.id, e.init);
				o.node.declarations.push(a), this.registerBinding(r, o.get("declarations").pop())
			}
			getProgramParent() {
				let e = this;
				do {
					if (e.path.isProgram()) return e
				} while (e = e.parent);
				throw new Error("Couldn't find a Program")
			}
			getFunctionParent() {
				let e = this;
				do {
					if (e.path.isFunctionParent()) return e
				} while (e = e.parent);
				return null
			}
			getBlockParent() {
				let e = this;
				do {
					if (e.path.isBlockParent()) return e
				} while (e = e.parent);
				throw new Error("We couldn't find a BlockStatement, For, Switch, Function, Loop or Program...")
			}
			getAllBindings() {
				const e = Object.create(null);
				let t = this;
				do {
					(0, a().default)(e, t.bindings), t = t.parent
				} while (t);
				return e
			}
			getAllBindingsOfKind() {
				const e = Object.create(null);
				for (const t of arguments) {
					let n = this;
					do {
						for (const r of Object.keys(n.bindings)) {
							const i = n.bindings[r];
							i.kind === t && (e[r] = i)
						}
						n = n.parent
					} while (n)
				}
				return e
			}
			bindingIdentifierEquals(e, t) {
				return this.getBindingIdentifier(e) === t
			}
			getBinding(e) {
				let t = this;
				do {
					const n = t.getOwnBinding(e);
					if (n) return n
				} while (t = t.parent)
			}
			getOwnBinding(e) {
				return this.bindings[e]
			}
			getBindingIdentifier(e) {
				const t = this.getBinding(e);
				return t && t.identifier
			}
			getOwnBindingIdentifier(e) {
				const t = this.bindings[e];
				return t && t.identifier
			}
			hasOwnBinding(e) {
				return !!this.getOwnBinding(e)
			}
			hasBinding(e, t) {
				return !!e && (!!this.hasOwnBinding(e) || (!!this.parentHasBinding(e, t) || (!!this.hasUid(e) || (!(t || !(0, r().default)(y.globals, e)) || !(t || !(0, r().default)(y.contextVariables, e))))))
			}
			parentHasBinding(e, t) {
				return this.parent && this.parent.hasBinding(e, t)
			}
			moveBindingTo(e, t) {
				const n = this.getBinding(e);
				n && (n.scope.removeOwnBinding(e), n.scope = t, t.bindings[e] = n)
			}
			removeOwnBinding(e) {
				delete this.bindings[e]
			}
			removeBinding(e) {
				const t = this.getBinding(e);
				t && t.scope.removeOwnBinding(e);
				let n = this;
				do {
					n.uids[e] && (n.uids[e] = !1)
				} while (n = n.parent)
			}
		}
		t.default = y, y.globals = Object.keys(c().default.builtin), y.contextVariables = ["arguments", "undefined", "Infinity", "NaN"]
	}, function (e, t, n) {
		var r = n(8),
			i = n(6),
			s = "[object Symbol]";
		e.exports = function (e) {
			return "symbol" == typeof e || i(e) && r(e) == s
		}
	}, function (e, t) {
		e.exports = function (e, t) {
			for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
			return i
		}
	}, function (e, t, n) {
		var r = n(249),
			i = n(98),
			s = n(50),
			o = n(250);
		e.exports = function (e, t, n) {
			return t = (n ? i(e, t, n) : void 0 === t) ? 1 : s(t), r(o(e), t)
		}
	}, function (e, t, n) {
		var r = n(20),
			i = n(29),
			s = n(66),
			o = n(10);
		e.exports = function (e, t, n) {
			if (!o(n)) return !1;
			var a = typeof t;
			return !!("number" == a ? i(n) && s(t, n.length) : "string" == a && t in n) && r(n[t], e)
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		t.default = class {
			constructor({
				identifier: e,
				scope: t,
				path: n,
				kind: r
			}) {
				this.identifier = e, this.scope = t, this.path = n, this.kind = r, this.constantViolations = [], this.constant = !0, this.referencePaths = [], this.referenced = !1, this.references = 0, this.clearValue()
			}
			deoptValue() {
				this.clearValue(), this.hasDeoptedValue = !0
			}
			setValue(e) {
				this.hasDeoptedValue || (this.hasValue = !0, this.value = e)
			}
			clearValue() {
				this.hasDeoptedValue = !1, this.hasValue = !1, this.value = null
			}
			reassign(e) {
				this.constant = !1, -1 === this.constantViolations.indexOf(e) && this.constantViolations.push(e)
			}
			reference(e) {
				-1 === this.referencePaths.indexOf(e) && (this.referenced = !0, this.references++, this.referencePaths.push(e))
			}
			dereference() {
				this.references--, this.referenced = !!this.references
			}
		}
	}, function (e, t) {
		e.exports = function (e) {
			return e
		}
	}, function (e, t, n) {
		var r = n(102),
			i = n(17),
			s = n(103).ArraySet,
			o = n(267).MappingList;

		function a(e) {
			e || (e = {}), this._file = i.getArg(e, "file", null), this._sourceRoot = i.getArg(e, "sourceRoot", null), this._skipValidation = i.getArg(e, "skipValidation", !1), this._sources = new s, this._names = new s, this._mappings = new o, this._sourcesContents = null
		}
		a.prototype._version = 3, a.fromSourceMap = function (e) {
			var t = e.sourceRoot,
				n = new a({
					file: e.file,
					sourceRoot: t
				});
			return e.eachMapping(function (e) {
				var r = {
					generated: {
						line: e.generatedLine,
						column: e.generatedColumn
					}
				};
				null != e.source && (r.source = e.source, null != t && (r.source = i.relative(t, r.source)), r.original = {
					line: e.originalLine,
					column: e.originalColumn
				}, null != e.name && (r.name = e.name)), n.addMapping(r)
			}), e.sources.forEach(function (t) {
				var r = e.sourceContentFor(t);
				null != r && n.setSourceContent(t, r)
			}), n
		}, a.prototype.addMapping = function (e) {
			var t = i.getArg(e, "generated"),
				n = i.getArg(e, "original", null),
				r = i.getArg(e, "source", null),
				s = i.getArg(e, "name", null);
			this._skipValidation || this._validateMapping(t, n, r, s), null != r && (r = String(r), this._sources.has(r) || this._sources.add(r)), null != s && (s = String(s), this._names.has(s) || this._names.add(s)), this._mappings.add({
				generatedLine: t.line,
				generatedColumn: t.column,
				originalLine: null != n && n.line,
				originalColumn: null != n && n.column,
				source: r,
				name: s
			})
		}, a.prototype.setSourceContent = function (e, t) {
			var n = e;
			null != this._sourceRoot && (n = i.relative(this._sourceRoot, n)), null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[i.toSetString(n)] = t) : this._sourcesContents && (delete this._sourcesContents[i.toSetString(n)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null))
		}, a.prototype.applySourceMap = function (e, t, n) {
			var r = t;
			if (null == t) {
				if (null == e.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
				r = e.file
			}
			var o = this._sourceRoot;
			null != o && (r = i.relative(o, r));
			var a = new s,
				u = new s;
			this._mappings.unsortedForEach(function (t) {
				if (t.source === r && null != t.originalLine) {
					var s = e.originalPositionFor({
						line: t.originalLine,
						column: t.originalColumn
					});
					null != s.source && (t.source = s.source, null != n && (t.source = i.join(n, t.source)), null != o && (t.source = i.relative(o, t.source)), t.originalLine = s.line, t.originalColumn = s.column, null != s.name && (t.name = s.name))
				}
				var c = t.source;
				null == c || a.has(c) || a.add(c);
				var l = t.name;
				null == l || u.has(l) || u.add(l)
			}, this), this._sources = a, this._names = u, e.sources.forEach(function (t) {
				var r = e.sourceContentFor(t);
				null != r && (null != n && (t = i.join(n, t)), null != o && (t = i.relative(o, t)), this.setSourceContent(t, r))
			}, this)
		}, a.prototype._validateMapping = function (e, t, n, r) {
			if ((!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0) || t || n || r) && !(e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && n)) throw new Error("Invalid mapping: " + JSON.stringify({
				generated: e,
				source: n,
				original: t,
				name: r
			}))
		}, a.prototype._serializeMappings = function () {
			for (var e, t, n, s, o = 0, a = 1, u = 0, c = 0, l = 0, p = 0, h = "", f = this._mappings.toArray(), d = 0, y = f.length; d < y; d++) {
				if (e = "", (t = f[d]).generatedLine !== a)
					for (o = 0; t.generatedLine !== a;) e += ";", a++;
				else if (d > 0) {
					if (!i.compareByGeneratedPositionsInflated(t, f[d - 1])) continue;
					e += ","
				}
				e += r.encode(t.generatedColumn - o), o = t.generatedColumn, null != t.source && (s = this._sources.indexOf(t.source), e += r.encode(s - p), p = s, e += r.encode(t.originalLine - 1 - c), c = t.originalLine - 1, e += r.encode(t.originalColumn - u), u = t.originalColumn, null != t.name && (n = this._names.indexOf(t.name), e += r.encode(n - l), l = n)), h += e
			}
			return h
		}, a.prototype._generateSourcesContent = function (e, t) {
			return e.map(function (e) {
				if (!this._sourcesContents) return null;
				null != t && (e = i.relative(t, e));
				var n = i.toSetString(e);
				return Object.prototype.hasOwnProperty.call(this._sourcesContents, n) ? this._sourcesContents[n] : null
			}, this)
		}, a.prototype.toJSON = function () {
			var e = {
				version: this._version,
				sources: this._sources.toArray(),
				names: this._names.toArray(),
				mappings: this._serializeMappings()
			};
			return null != this._file && (e.file = this._file), null != this._sourceRoot && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e
		}, a.prototype.toString = function () {
			return JSON.stringify(this.toJSON())
		}, t.SourceMapGenerator = a
	}, function (e, t, n) {
		var r = n(266);
		t.encode = function (e) {
			var t, n = "",
				i = function (e) {
					return e < 0 ? 1 + (-e << 1) : 0 + (e << 1)
				}(e);
			do {
				t = 31 & i, (i >>>= 5) > 0 && (t |= 32), n += r.encode(t)
			} while (i > 0);
			return n
		}, t.decode = function (e, t, n) {
			var i, s, o = e.length,
				a = 0,
				u = 0;
			do {
				if (t >= o) throw new Error("Expected more digits in base 64 VLQ value.");
				if (-1 === (s = r.decode(e.charCodeAt(t++)))) throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
				i = !!(32 & s), a += (s &= 31) << u, u += 5
			} while (i);
			n.value = function (e) {
				var t = e >> 1;
				return 1 == (1 & e) ? -t : t
			}(a), n.rest = t
		}
	}, function (e, t, n) {
		var r = n(17),
			i = Object.prototype.hasOwnProperty;

		function s() {
			this._array = [], this._set = Object.create(null)
		}
		s.fromArray = function (e, t) {
			for (var n = new s, r = 0, i = e.length; r < i; r++) n.add(e[r], t);
			return n
		}, s.prototype.size = function () {
			return Object.getOwnPropertyNames(this._set).length
		}, s.prototype.add = function (e, t) {
			var n = r.toSetString(e),
				s = i.call(this._set, n),
				o = this._array.length;
			s && !t || this._array.push(e), s || (this._set[n] = o)
		}, s.prototype.has = function (e) {
			var t = r.toSetString(e);
			return i.call(this._set, t)
		}, s.prototype.indexOf = function (e) {
			var t = r.toSetString(e);
			if (i.call(this._set, t)) return this._set[t];
			throw new Error('"' + e + '" is not in the set.')
		}, s.prototype.at = function (e) {
			if (e >= 0 && e < this._array.length) return this._array[e];
			throw new Error("No element indexed by " + e)
		}, s.prototype.toArray = function () {
			return this._array.slice()
		}, t.ArraySet = s
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.needsWhitespace = p, t.needsWhitespaceBefore = function (e, t) {
			return p(e, t, "before")
		}, t.needsWhitespaceAfter = function (e, t) {
			return p(e, t, "after")
		}, t.needsParens = function (e, t, n) {
			if (!t) return !1;
			if (i().isNewExpression(t) && t.callee === e && function e(t) {
					if (i().isCallExpression(t)) return !0;
					return !!i().isMemberExpression(t) && (e(t.object) || !t.computed && e(t.property))
				}(e)) return !0;
			return l(a, e, t, n)
		};
		var r = s(n(276));

		function i() {
			const e = s(n(0));
			return i = function () {
				return e
			}, e
		}

		function s(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e)
					if (Object.prototype.hasOwnProperty.call(e, n)) {
						var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
						r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
					}
			return t.default = e, t
		}

		function o(e) {
			const t = {};

			function n(e, n) {
				const r = t[e];
				t[e] = r ? function (e, t, i) {
					const s = r(e, t, i);
					return null == s ? n(e, t, i) : s
				} : n
			}
			for (const t of Object.keys(e)) {
				const r = i().FLIPPED_ALIAS_KEYS[t];
				if (r)
					for (const i of r) n(i, e[t]);
				else n(t, e[t])
			}
			return t
		}
		const a = o(s(n(277))),
			u = o(r.nodes),
			c = o(r.list);

		function l(e, t, n, r) {
			const i = e[t.type];
			return i ? i(t, n, r) : null
		}

		function p(e, t, n) {
			if (!e) return 0;
			i().isExpressionStatement(e) && (e = e.expression);
			let r = l(u, e, t);
			if (!r) {
				const i = l(c, e, t);
				if (i)
					for (let t = 0; t < i.length && !(r = p(i[t], e, n)); t++);
			}
			return "object" == typeof r && null !== r && r[n] || 0
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}

		function i(e) {
			if (e.declaration) {
				const t = e.declaration;
				this.print(t, e), r().isStatement(t) || this.semicolon()
			} else {
				"type" === e.exportKind && (this.word("type"), this.space());
				const t = e.specifiers.slice(0);
				let n = !1;
				for (;;) {
					const i = t[0];
					if (!r().isExportDefaultSpecifier(i) && !r().isExportNamespaceSpecifier(i)) break;
					n = !0, this.print(t.shift(), e), t.length && (this.token(","), this.space())
				}(t.length || !t.length && !n) && (this.token("{"), t.length && (this.space(), this.printList(t, e), this.space()), this.token("}")), e.source && (this.space(), this.word("from"), this.space(), this.print(e.source, e)), this.semicolon()
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.ImportSpecifier = function (e) {
			"type" !== e.importKind && "typeof" !== e.importKind || (this.word(e.importKind), this.space());
			this.print(e.imported, e), e.local && e.local.name !== e.imported.name && (this.space(), this.word("as"), this.space(), this.print(e.local, e))
		}, t.ImportDefaultSpecifier = function (e) {
			this.print(e.local, e)
		}, t.ExportDefaultSpecifier = function (e) {
			this.print(e.exported, e)
		}, t.ExportSpecifier = function (e) {
			this.print(e.local, e), e.exported && e.local.name !== e.exported.name && (this.space(), this.word("as"), this.space(), this.print(e.exported, e))
		}, t.ExportNamespaceSpecifier = function (e) {
			this.token("*"), this.space(), this.word("as"), this.space(), this.print(e.exported, e)
		}, t.ExportAllDeclaration = function (e) {
			this.word("export"), this.space(), "type" === e.exportKind && (this.word("type"), this.space());
			this.token("*"), this.space(), this.word("from"), this.space(), this.print(e.source, e), this.semicolon()
		}, t.ExportNamedDeclaration = function (e) {
			this.format.decoratorsBeforeExport && r().isClassDeclaration(e.declaration) && this.printJoin(e.declaration.decorators, e);
			this.word("export"), this.space(), i.apply(this, arguments)
		}, t.ExportDefaultDeclaration = function (e) {
			this.format.decoratorsBeforeExport && r().isClassDeclaration(e.declaration) && this.printJoin(e.declaration.decorators, e);
			this.word("export"), this.space(), this.word("default"), this.space(), i.apply(this, arguments)
		}, t.ImportDeclaration = function (e) {
			this.word("import"), this.space(), ("type" === e.importKind || "typeof" === e.importKind) && (this.word(e.importKind), this.space());
			const t = e.specifiers.slice(0);
			if (t && t.length) {
				for (;;) {
					const n = t[0];
					if (!r().isImportDefaultSpecifier(n) && !r().isImportNamespaceSpecifier(n)) break;
					this.print(t.shift(), e), t.length && (this.token(","), this.space())
				}
				t.length && (this.token("{"), this.space(), this.printList(t, e), this.space(), this.token("}")), this.space(), this.word("from"), this.space()
			}
			this.print(e.source, e), this.semicolon()
		}, t.ImportNamespaceSpecifier = function (e) {
			this.token("*"), this.space(), this.word("as"), this.space(), this.print(e.local, e)
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}

		function i() {
			const e = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(284));
			return i = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.Identifier = function (e) {
			this.exactSource(e.loc, () => {
				this.word(e.name)
			})
		}, t.ArgumentPlaceholder = function () {
			this.token("?")
		}, t.SpreadElement = t.RestElement = function (e) {
			this.token("..."), this.print(e.argument, e)
		}, t.ObjectPattern = t.ObjectExpression = function (e) {
			const t = e.properties;
			this.token("{"), this.printInnerComments(e), t.length && (this.space(), this.printList(t, e, {
				indent: !0,
				statement: !0
			}), this.space());
			this.token("}")
		}, t.ObjectMethod = function (e) {
			this.printJoin(e.decorators, e), this._methodHead(e), this.space(), this.print(e.body, e)
		}, t.ObjectProperty = function (e) {
			if (this.printJoin(e.decorators, e), e.computed) this.token("["), this.print(e.key, e), this.token("]");
			else {
				if (r().isAssignmentPattern(e.value) && r().isIdentifier(e.key) && e.key.name === e.value.left.name) return void this.print(e.value, e);
				if (this.print(e.key, e), e.shorthand && r().isIdentifier(e.key) && r().isIdentifier(e.value) && e.key.name === e.value.name) return
			}
			this.token(":"), this.space(), this.print(e.value, e)
		}, t.ArrayPattern = t.ArrayExpression = function (e) {
			const t = e.elements,
				n = t.length;
			this.token("["), this.printInnerComments(e);
			for (let r = 0; r < t.length; r++) {
				const i = t[r];
				i ? (r > 0 && this.space(), this.print(i, e), r < n - 1 && this.token(",")) : this.token(",")
			}
			this.token("]")
		}, t.RegExpLiteral = function (e) {
			this.word(`/${e.pattern}/${e.flags}`)
		}, t.BooleanLiteral = function (e) {
			this.word(e.value ? "true" : "false")
		}, t.NullLiteral = function () {
			this.word("null")
		}, t.NumericLiteral = function (e) {
			const t = this.getPossibleRaw(e),
				n = e.value + "";
			null == t ? this.number(n) : this.format.minified ? this.number(t.length < n.length ? t : n) : this.number(t)
		}, t.StringLiteral = function (e) {
			const t = this.getPossibleRaw(e);
			if (!this.format.minified && null != t) return void this.token(t);
			const n = this.format.jsescOption;
			this.format.jsonCompatibleStrings && (n.json = !0);
			const r = (0, i().default)(e.value, n);
			return this.token(r)
		}, t.BigIntLiteral = function (e) {
			const t = this.getPossibleRaw(e);
			if (!this.format.minified && null != t) return void this.token(t);
			this.token(e.value)
		}, t.PipelineTopicExpression = function (e) {
			this.print(e.expression, e)
		}, t.PipelineBareFunction = function (e) {
			this.print(e.callee, e)
		}, t.PipelinePrimaryTopicReference = function () {
			this.token("#")
		}
	}, function (e, t, n) {
		"use strict";
		(function (e) {
			function r() {
				const e = function (e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e)
							if (Object.prototype.hasOwnProperty.call(e, n)) {
								var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
								r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
							}
					return t.default = e, t
				}(n(298));
				return r = function () {
					return e
				}, e
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.codeFrameColumns = o, t.default = function (t, n, r, s = {}) {
				if (!i) {
					i = !0;
					const t = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
					if (e.emitWarning) e.emitWarning(t, "DeprecationWarning");
					else {
						const e = new Error(t);
						e.name = "DeprecationWarning", console.warn(new Error(t))
					}
				}
				return r = Math.max(r, 0), o(t, {
					start: {
						column: r,
						line: n
					}
				}, s)
			};
			let i = !1;
			const s = /\r\n|[\n\r\u2028\u2029]/;

			function o(e, t, n = {}) {
				const i = (n.highlightCode || n.forceColor) && (0, r().shouldHighlight)(n),
					o = (0, r().getChalk)(n),
					a = function (e) {
						return {
							gutter: e.grey,
							marker: e.red.bold,
							message: e.red.bold
						}
					}(o),
					u = (e, t) => i ? e(t) : t,
					c = e.split(s),
					{
						start: l,
						end: p,
						markerLines: h
					} = function (e, t, n) {
						const r = Object.assign({
								column: 0,
								line: -1
							}, e.start),
							i = Object.assign({}, r, e.end),
							{
								linesAbove: s = 2,
								linesBelow: o = 3
							} = n || {},
							a = r.line,
							u = r.column,
							c = i.line,
							l = i.column;
						let p = Math.max(a - (s + 1), 0),
							h = Math.min(t.length, c + o); - 1 === a && (p = 0), -1 === c && (h = t.length);
						const f = c - a,
							d = {};
						if (f)
							for (let e = 0; e <= f; e++) {
								const n = e + a;
								if (u)
									if (0 === e) {
										const e = t[n - 1].length;
										d[n] = [u, e - u + 1]
									} else if (e === f) d[n] = [0, l];
								else {
									const r = t[n - e].length;
									d[n] = [0, r]
								} else d[n] = !0
							} else d[a] = u === l ? !u || [u, 0] : [u, l - u];
						return {
							start: p,
							end: h,
							markerLines: d
						}
					}(t, c, n),
					f = t.start && "number" == typeof t.start.column,
					d = String(p).length;
				let y = (i ? (0, r().default)(e, n) : e).split(s).slice(l, p).map((e, t) => {
					const r = l + 1 + t,
						i = ` ${` ${r}`.slice(-d)} | `,
						s = h[r],
						o = !h[r + 1];
					if (s) {
						let t = "";
						if (Array.isArray(s)) {
							const r = e.slice(0, Math.max(s[0] - 1, 0)).replace(/[^\t]/g, " "),
								c = s[1] || 1;
							t = ["\n ", u(a.gutter, i.replace(/\d/g, " ")), r, u(a.marker, "^").repeat(c)].join(""), o && n.message && (t += " " + u(a.message, n.message))
						}
						return [u(a.marker, ">"), u(a.gutter, i), e, t].join("")
					}
					return ` ${u(a.gutter,i)}${e}`
				}).join("\n");
				return n.message && !f && (y = `${" ".repeat(d+1)}${n.message}\n${y}`), i ? o.reset(y) : y
			}
		}).call(this, n(48))
	}, function (e, t, n) {
		var r = n(304),
			i = {};
		for (var s in r) r.hasOwnProperty(s) && (i[r[s]] = s);
		var o = e.exports = {
			rgb: {
				channels: 3,
				labels: "rgb"
			},
			hsl: {
				channels: 3,
				labels: "hsl"
			},
			hsv: {
				channels: 3,
				labels: "hsv"
			},
			hwb: {
				channels: 3,
				labels: "hwb"
			},
			cmyk: {
				channels: 4,
				labels: "cmyk"
			},
			xyz: {
				channels: 3,
				labels: "xyz"
			},
			lab: {
				channels: 3,
				labels: "lab"
			},
			lch: {
				channels: 3,
				labels: "lch"
			},
			hex: {
				channels: 1,
				labels: ["hex"]
			},
			keyword: {
				channels: 1,
				labels: ["keyword"]
			},
			ansi16: {
				channels: 1,
				labels: ["ansi16"]
			},
			ansi256: {
				channels: 1,
				labels: ["ansi256"]
			},
			hcg: {
				channels: 3,
				labels: ["h", "c", "g"]
			},
			apple: {
				channels: 3,
				labels: ["r16", "g16", "b16"]
			},
			gray: {
				channels: 1,
				labels: ["gray"]
			}
		};
		for (var a in o)
			if (o.hasOwnProperty(a)) {
				if (!("channels" in o[a])) throw new Error("missing channels property: " + a);
				if (!("labels" in o[a])) throw new Error("missing channel labels property: " + a);
				if (o[a].labels.length !== o[a].channels) throw new Error("channel and label counts mismatch: " + a);
				var u = o[a].channels,
					c = o[a].labels;
				delete o[a].channels, delete o[a].labels, Object.defineProperty(o[a], "channels", {
					value: u
				}), Object.defineProperty(o[a], "labels", {
					value: c
				})
			}
		function l(e, t) {
			return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2) + Math.pow(e[2] - t[2], 2)
		}
		o.rgb.hsl = function (e) {
			var t, n, r = e[0] / 255,
				i = e[1] / 255,
				s = e[2] / 255,
				o = Math.min(r, i, s),
				a = Math.max(r, i, s),
				u = a - o;
			return a === o ? t = 0 : r === a ? t = (i - s) / u : i === a ? t = 2 + (s - r) / u : s === a && (t = 4 + (r - i) / u), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (o + a) / 2, [t, 100 * (a === o ? 0 : n <= .5 ? u / (a + o) : u / (2 - a - o)), 100 * n]
		}, o.rgb.hsv = function (e) {
			var t, n, r = e[0],
				i = e[1],
				s = e[2],
				o = Math.min(r, i, s),
				a = Math.max(r, i, s),
				u = a - o;
			return n = 0 === a ? 0 : u / a * 1e3 / 10, a === o ? t = 0 : r === a ? t = (i - s) / u : i === a ? t = 2 + (s - r) / u : s === a && (t = 4 + (r - i) / u), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, n, a / 255 * 1e3 / 10]
		}, o.rgb.hwb = function (e) {
			var t = e[0],
				n = e[1],
				r = e[2];
			return [o.rgb.hsl(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, r))), 100 * (r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)))]
		}, o.rgb.cmyk = function (e) {
			var t, n = e[0] / 255,
				r = e[1] / 255,
				i = e[2] / 255;
			return [100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - i))) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * t]
		}, o.rgb.keyword = function (e) {
			var t = i[e];
			if (t) return t;
			var n, s = 1 / 0;
			for (var o in r)
				if (r.hasOwnProperty(o)) {
					var a = l(e, r[o]);
					a < s && (s = a, n = o)
				}
			return n
		}, o.keyword.rgb = function (e) {
			return r[e]
		}, o.rgb.xyz = function (e) {
			var t = e[0] / 255,
				n = e[1] / 255,
				r = e[2] / 255;
			return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)]
		}, o.rgb.lab = function (e) {
			var t = o.rgb.xyz(e),
				n = t[0],
				r = t[1],
				i = t[2];
			return r /= 100, i /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (n - r), 200 * (r - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
		}, o.hsl.rgb = function (e) {
			var t, n, r, i, s, o = e[0] / 360,
				a = e[1] / 100,
				u = e[2] / 100;
			if (0 === a) return [s = 255 * u, s, s];
			t = 2 * u - (n = u < .5 ? u * (1 + a) : u + a - u * a), i = [0, 0, 0];
			for (var c = 0; c < 3; c++)(r = o + 1 / 3 * -(c - 1)) < 0 && r++, r > 1 && r--, s = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, i[c] = 255 * s;
			return i
		}, o.hsl.hsv = function (e) {
			var t = e[0],
				n = e[1] / 100,
				r = e[2] / 100,
				i = n,
				s = Math.max(r, .01);
			return n *= (r *= 2) <= 1 ? r : 2 - r, i *= s <= 1 ? s : 2 - s, [t, 100 * (0 === r ? 2 * i / (s + i) : 2 * n / (r + n)), 100 * ((r + n) / 2)]
		}, o.hsv.rgb = function (e) {
			var t = e[0] / 60,
				n = e[1] / 100,
				r = e[2] / 100,
				i = Math.floor(t) % 6,
				s = t - Math.floor(t),
				o = 255 * r * (1 - n),
				a = 255 * r * (1 - n * s),
				u = 255 * r * (1 - n * (1 - s));
			switch (r *= 255, i) {
				case 0:
					return [r, u, o];
				case 1:
					return [a, r, o];
				case 2:
					return [o, r, u];
				case 3:
					return [o, a, r];
				case 4:
					return [u, o, r];
				case 5:
					return [r, o, a]
			}
		}, o.hsv.hsl = function (e) {
			var t, n, r, i = e[0],
				s = e[1] / 100,
				o = e[2] / 100,
				a = Math.max(o, .01);
			return r = (2 - s) * o, n = s * a, [i, 100 * (n = (n /= (t = (2 - s) * a) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)]
		}, o.hwb.rgb = function (e) {
			var t, n, r, i, s, o, a, u = e[0] / 360,
				c = e[1] / 100,
				l = e[2] / 100,
				p = c + l;
			switch (p > 1 && (c /= p, l /= p), n = 1 - l, r = 6 * u - (t = Math.floor(6 * u)), 0 != (1 & t) && (r = 1 - r), i = c + r * (n - c), t) {
				default:
					case 6:
					case 0:
					s = n,
				o = i,
				a = c;
				break;
				case 1:
						s = i,
					o = n,
					a = c;
					break;
				case 2:
						s = c,
					o = n,
					a = i;
					break;
				case 3:
						s = c,
					o = i,
					a = n;
					break;
				case 4:
						s = i,
					o = c,
					a = n;
					break;
				case 5:
						s = n,
					o = c,
					a = i
			}
			return [255 * s, 255 * o, 255 * a]
		}, o.cmyk.rgb = function (e) {
			var t = e[0] / 100,
				n = e[1] / 100,
				r = e[2] / 100,
				i = e[3] / 100;
			return [255 * (1 - Math.min(1, t * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i)), 255 * (1 - Math.min(1, r * (1 - i) + i))]
		}, o.xyz.rgb = function (e) {
			var t, n, r, i = e[0] / 100,
				s = e[1] / 100,
				o = e[2] / 100;
			return n = -.9689 * i + 1.8758 * s + .0415 * o, r = .0557 * i + -.204 * s + 1.057 * o, t = (t = 3.2406 * i + -1.5372 * s + -.4986 * o) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))]
		}, o.xyz.lab = function (e) {
			var t = e[0],
				n = e[1],
				r = e[2];
			return n /= 100, r /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
		}, o.lab.xyz = function (e) {
			var t, n, r, i = e[0],
				s = e[1],
				o = e[2];
			t = s / 500 + (n = (i + 16) / 116), r = n - o / 200;
			var a = Math.pow(n, 3),
				u = Math.pow(t, 3),
				c = Math.pow(r, 3);
			return n = a > .008856 ? a : (n - 16 / 116) / 7.787, t = u > .008856 ? u : (t - 16 / 116) / 7.787, r = c > .008856 ? c : (r - 16 / 116) / 7.787, [t *= 95.047, n *= 100, r *= 108.883]
		}, o.lab.lch = function (e) {
			var t, n = e[0],
				r = e[1],
				i = e[2];
			return (t = 360 * Math.atan2(i, r) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(r * r + i * i), t]
		}, o.lch.lab = function (e) {
			var t, n = e[0],
				r = e[1];
			return t = e[2] / 360 * 2 * Math.PI, [n, r * Math.cos(t), r * Math.sin(t)]
		}, o.rgb.ansi16 = function (e) {
			var t = e[0],
				n = e[1],
				r = e[2],
				i = 1 in arguments ? arguments[1] : o.rgb.hsv(e)[2];
			if (0 === (i = Math.round(i / 50))) return 30;
			var s = 30 + (Math.round(r / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));
			return 2 === i && (s += 60), s
		}, o.hsv.ansi16 = function (e) {
			return o.rgb.ansi16(o.hsv.rgb(e), e[2])
		}, o.rgb.ansi256 = function (e) {
			var t = e[0],
				n = e[1],
				r = e[2];
			return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
		}, o.ansi16.rgb = function (e) {
			var t = e % 10;
			if (0 === t || 7 === t) return e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t];
			var n = .5 * (1 + ~~(e > 50));
			return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255]
		}, o.ansi256.rgb = function (e) {
			if (e >= 232) {
				var t = 10 * (e - 232) + 8;
				return [t, t, t]
			}
			var n;
			return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
		}, o.rgb.hex = function (e) {
			var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
			return "000000".substring(t.length) + t
		}, o.hex.rgb = function (e) {
			var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
			if (!t) return [0, 0, 0];
			var n = t[0];
			3 === t[0].length && (n = n.split("").map(function (e) {
				return e + e
			}).join(""));
			var r = parseInt(n, 16);
			return [r >> 16 & 255, r >> 8 & 255, 255 & r]
		}, o.rgb.hcg = function (e) {
			var t, n, r = e[0] / 255,
				i = e[1] / 255,
				s = e[2] / 255,
				o = Math.max(Math.max(r, i), s),
				a = Math.min(Math.min(r, i), s),
				u = o - a;
			return t = u < 1 ? a / (1 - u) : 0, n = u <= 0 ? 0 : o === r ? (i - s) / u % 6 : o === i ? 2 + (s - r) / u : 4 + (r - i) / u + 4, n /= 6, [360 * (n %= 1), 100 * u, 100 * t]
		}, o.hsl.hcg = function (e) {
			var t = e[1] / 100,
				n = e[2] / 100,
				r = 1,
				i = 0;
			return (r = n < .5 ? 2 * t * n : 2 * t * (1 - n)) < 1 && (i = (n - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * i]
		}, o.hsv.hcg = function (e) {
			var t = e[1] / 100,
				n = e[2] / 100,
				r = t * n,
				i = 0;
			return r < 1 && (i = (n - r) / (1 - r)), [e[0], 100 * r, 100 * i]
		}, o.hcg.rgb = function (e) {
			var t = e[0] / 360,
				n = e[1] / 100,
				r = e[2] / 100;
			if (0 === n) return [255 * r, 255 * r, 255 * r];
			var i, s = [0, 0, 0],
				o = t % 1 * 6,
				a = o % 1,
				u = 1 - a;
			switch (Math.floor(o)) {
				case 0:
					s[0] = 1, s[1] = a, s[2] = 0;
					break;
				case 1:
					s[0] = u, s[1] = 1, s[2] = 0;
					break;
				case 2:
					s[0] = 0, s[1] = 1, s[2] = a;
					break;
				case 3:
					s[0] = 0, s[1] = u, s[2] = 1;
					break;
				case 4:
					s[0] = a, s[1] = 0, s[2] = 1;
					break;
				default:
					s[0] = 1, s[1] = 0, s[2] = u
			}
			return i = (1 - n) * r, [255 * (n * s[0] + i), 255 * (n * s[1] + i), 255 * (n * s[2] + i)]
		}, o.hcg.hsv = function (e) {
			var t = e[1] / 100,
				n = t + e[2] / 100 * (1 - t),
				r = 0;
			return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n]
		}, o.hcg.hsl = function (e) {
			var t = e[1] / 100,
				n = e[2] / 100 * (1 - t) + .5 * t,
				r = 0;
			return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n]
		}, o.hcg.hwb = function (e) {
			var t = e[1] / 100,
				n = t + e[2] / 100 * (1 - t);
			return [e[0], 100 * (n - t), 100 * (1 - n)]
		}, o.hwb.hcg = function (e) {
			var t = e[1] / 100,
				n = 1 - e[2] / 100,
				r = n - t,
				i = 0;
			return r < 1 && (i = (n - r) / (1 - r)), [e[0], 100 * r, 100 * i]
		}, o.apple.rgb = function (e) {
			return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]
		}, o.rgb.apple = function (e) {
			return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]
		}, o.gray.rgb = function (e) {
			return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]
		}, o.gray.hsl = o.gray.hsv = function (e) {
			return [0, 0, e[0]]
		}, o.gray.hwb = function (e) {
			return [0, 100, e[0]]
		}, o.gray.cmyk = function (e) {
			return [0, 0, 0, e[0]]
		}, o.gray.lab = function (e) {
			return [e[0], 0, 0]
		}, o.gray.hex = function (e) {
			var t = 255 & Math.round(e[0] / 100 * 255),
				n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
			return "000000".substring(n.length) + n
		}, o.rgb.gray = function (e) {
			return [(e[0] + e[1] + e[2]) / 3 / 255 * 100]
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}

		function i() {
			const e = n(32);
			return i = function () {
				return e
			}, e
		}

		function s() {
			const e = n(107);
			return s = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t, n) {
			const o = function (e, t) {
					t = Object.assign({
						allowReturnOutsideFunction: !0,
						allowSuperOutsideMethod: !0,
						sourceType: "module"
					}, t, {
						plugins: (t.plugins || []).concat("placeholders")
					});
					try {
						return (0, i().parse)(e, t)
					} catch (t) {
						const n = t.loc;
						throw n && (t.message += "\n" + (0, s().codeFrameColumns)(e, {
							start: n
						}), t.code = "BABEL_TEMPLATE_PARSE_ERROR"), t
					}
				}(t, n.parser),
				{
					placeholderWhitelist: u,
					placeholderPattern: c,
					preserveComments: l,
					syntacticPlaceholders: p
				} = n;
			r().removePropertiesDeep(o, {
				preserveComments: l
			}), e.validate(o);
			const h = {
					placeholders: [],
					placeholderNames: new Set
				},
				f = {
					placeholders: [],
					placeholderNames: new Set
				},
				d = {
					value: void 0
				};
			return r().traverse(o, a, {
				syntactic: h,
				legacy: f,
				isLegacyRef: d,
				placeholderWhitelist: u,
				placeholderPattern: c,
				syntacticPlaceholders: p
			}), Object.assign({
				ast: o
			}, d.value ? f : h)
		};
		const o = /^[_$A-Z0-9]+$/;

		function a(e, t, n) {
			let i;
			if (r().isPlaceholder(e)) {
				if (!1 === n.syntacticPlaceholders) throw new Error("%%foo%%-style placeholders can't be used when '.syntacticPlaceholders' is false.");
				i = e.name.name, n.isLegacyRef.value = !1
			} else {
				if (!1 === n.isLegacyRef.value || n.syntacticPlaceholders) return;
				if (r().isIdentifier(e) || r().isJSXIdentifier(e)) i = e.name, n.isLegacyRef.value = !0;
				else {
					if (!r().isStringLiteral(e)) return;
					i = e.value, n.isLegacyRef.value = !0
				}
			}
			if (!n.isLegacyRef.value && (null != n.placeholderPattern || null != n.placeholderWhitelist)) throw new Error("'.placeholderWhitelist' and '.placeholderPattern' aren't compatible with '.syntacticPlaceholders: true'");
			if (n.isLegacyRef.value && (!1 === n.placeholderPattern || !(n.placeholderPattern || o).test(i)) && (!n.placeholderWhitelist || !n.placeholderWhitelist.has(i))) return;
			t = t.slice();
			const {
				node: s,
				key: a
			} = t[t.length - 1];
			let u;
			r().isStringLiteral(e) || r().isPlaceholder(e, {
				expectedNode: "StringLiteral"
			}) ? u = "string" : r().isNewExpression(s) && "arguments" === a || r().isCallExpression(s) && "arguments" === a || r().isFunction(s) && "params" === a ? u = "param" : r().isExpressionStatement(s) && !r().isPlaceholder(e) ? (u = "statement", t = t.slice(0, -1)) : u = r().isStatement(e) && r().isPlaceholder(e) ? "statement" : "other";
			const {
				placeholders: c,
				placeholderNames: l
			} = n.isLegacyRef.value ? n.legacy : n.syntactic;
			c.push({
				name: i,
				type: u,
				resolve: e => (function (e, t) {
					let n = e;
					for (let e = 0; e < t.length - 1; e++) {
						const {
							key: r,
							index: i
						} = t[e];
						n = void 0 === i ? n[r] : n[r][i]
					}
					const {
						key: r,
						index: i
					} = t[t.length - 1];
					return {
						parent: n,
						key: r,
						index: i
					}
				})(e, t),
				isDuplicate: l.has(i)
			}), l.add(i)
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			const n = r().cloneNode(e.ast);
			t && (e.placeholders.forEach(e => {
				if (!Object.prototype.hasOwnProperty.call(t, e.name)) {
					const t = e.name;
					throw new Error(`Error: No substitution given for "${t}". If this is not meant to be a\n            placeholder you may want to consider passing one of the following options to @babel/template:\n            - { placeholderPattern: false, placeholderWhitelist: new Set(['${t}'])}\n            - { placeholderPattern: /^${t}$/ }`)
				}
			}), Object.keys(t).forEach(t => {
				if (!e.placeholderNames.has(t)) throw new Error(`Unknown substitution "${t}" given`)
			}));
			return e.placeholders.slice().reverse().forEach(e => {
				try {
					! function (e, t, n) {
						e.isDuplicate && (Array.isArray(n) ? n = n.map(e => r().cloneNode(e)) : "object" == typeof n && (n = r().cloneNode(n)));
						const {
							parent: i,
							key: s,
							index: o
						} = e.resolve(t);
						if ("string" === e.type) {
							if ("string" == typeof n && (n = r().stringLiteral(n)), !n || !r().isStringLiteral(n)) throw new Error("Expected string substitution")
						} else if ("statement" === e.type) void 0 === o ? n ? Array.isArray(n) ? n = r().blockStatement(n) : "string" == typeof n ? n = r().expressionStatement(r().identifier(n)) : r().isStatement(n) || (n = r().expressionStatement(n)) : n = r().emptyStatement() : n && !Array.isArray(n) && ("string" == typeof n && (n = r().identifier(n)), r().isStatement(n) || (n = r().expressionStatement(n)));
						else if ("param" === e.type) {
							if ("string" == typeof n && (n = r().identifier(n)), void 0 === o) throw new Error("Assertion failure.")
						} else if ("string" == typeof n && (n = r().identifier(n)), Array.isArray(n)) throw new Error("Cannot replace single expression with an array.");
						if (void 0 === o) r().validate(i, s, n), i[s] = n;
						else {
							const t = i[s].slice();
							"statement" === e.type || "param" === e.type ? null == n ? t.splice(o, 1) : Array.isArray(n) ? t.splice(o, 1, ...n) : t[o] = n : t[o] = n, r().validate(i, s, t), i[s] = t
						}
					}(e, n, t && t[e.name] || null)
				} catch (t) {
					throw t.message = `@babel/template placeholder "${e.name}": ${t.message}`, t
				}
			}), n
		}
	}, function (e, t, n) {
		"use strict";
		var r = function (e) {
			return function (e) {
				return !!e && "object" == typeof e
			}(e) && function (e) {
				var t = Object.prototype.toString.call(e);
				return "[object RegExp]" !== t && "[object Date]" !== t
			}(e)
		};

		function i(e, t) {
			return t && !0 === t.clone && r(e) ? o(function (e) {
				return Array.isArray(e) ? [] : {}
			}(e), e, t) : e
		}

		function s(e, t, n) {
			var s = e.slice();
			return t.forEach(function (t, a) {
				void 0 === s[a] ? s[a] = i(t, n) : r(t) ? s[a] = o(e[a], t, n) : -1 === e.indexOf(t) && s.push(i(t, n))
			}), s
		}

		function o(e, t, n) {
			var a = Array.isArray(t);
			return a === Array.isArray(e) ? a ? ((n || {
				arrayMerge: s
			}).arrayMerge || s)(e, t, n) : function (e, t, n) {
				var s = {};
				return r(e) && Object.keys(e).forEach(function (t) {
					s[t] = i(e[t], n)
				}), Object.keys(t).forEach(function (a) {
					r(t[a]) && e[a] ? s[a] = o(e[a], t[a], n) : s[a] = i(t[a], n)
				}), s
			}(e, t, n) : i(t, n)
		}
		o.all = function (e, t) {
			if (!Array.isArray(e) || e.length < 2) throw new Error("first argument should be an array with at least two elements");
			return e.reduce(function (e, n) {
				return o(e, n, t)
			})
		};
		var a = o;
		e.exports = a
	}, function (e, t, n) {
		"use strict";
		const r = n(327),
			i = n(329);
		e.exports = (e => {
			if ("string" != typeof e || 0 === e.length) return 0;
			e = r(e);
			let t = 0;
			for (let n = 0; n < e.length; n++) {
				const r = e.codePointAt(n);
				r <= 31 || r >= 127 && r <= 159 || (r >= 768 && r <= 879 || (r > 65535 && n++, t += i(r) ? 2 : 1))
			}
			return t
		})
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(12));

		function i() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return i = function () {
				return e
			}, e
		}
		const s = !1;
		t.default = class {
			constructor(e, t, n, r) {
				this.queue = null, this.parentPath = r, this.scope = e, this.state = n, this.opts = t
			}
			shouldVisit(e) {
				const t = this.opts;
				if (t.enter || t.exit) return !0;
				if (t[e.type]) return !0;
				const n = i().VISITOR_KEYS[e.type];
				if (!n || !n.length) return !1;
				for (const t of n)
					if (e[t]) return !0;
				return !1
			}
			create(e, t, n, i) {
				return r.default.get({
					parentPath: this.parentPath,
					parent: e,
					container: t,
					key: n,
					listKey: i
				})
			}
			maybeQueue(e, t) {
				if (this.trap) throw new Error("Infinite cycle detected");
				this.queue && (t ? this.queue.push(e) : this.priorityQueue.push(e))
			}
			visitMultiple(e, t, n) {
				if (0 === e.length) return !1;
				const r = [];
				for (let i = 0; i < e.length; i++) {
					const s = e[i];
					s && this.shouldVisit(s) && r.push(this.create(t, e, i, n))
				}
				return this.visitQueue(r)
			}
			visitSingle(e, t) {
				return !!this.shouldVisit(e[t]) && this.visitQueue([this.create(e, e, t)])
			}
			visitQueue(e) {
				this.queue = e, this.priorityQueue = [];
				const t = [];
				let n = !1;
				for (const r of e)
					if (r.resync(), 0 !== r.contexts.length && r.contexts[r.contexts.length - 1] === this || r.pushContext(this), null !== r.key && (s && e.length >= 1e4 && (this.trap = !0), !(t.indexOf(r.node) >= 0))) {
						if (t.push(r.node), r.visit()) {
							n = !0;
							break
						}
						if (this.priorityQueue.length && (n = this.visitQueue(this.priorityQueue), this.priorityQueue = [], this.queue = e, n)) break
					}
				for (const t of e) t.popContext();
				return this.queue = null, n
			}
			visit(e, t) {
				const n = e[t];
				return !!n && (Array.isArray(n) ? this.visitMultiple(n, e, t) : this.visitSingle(e, t))
			}
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var r = (0, function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(54)).default)("React.Component");
		t.default = r
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			return !!e && /^[a-z]/.test(e)
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			const t = [];
			for (let n = 0; n < e.children.length; n++) {
				let s = e.children[n];
				(0, r.isJSXText)(s) ? (0, i.default)(s, t) : ((0, r.isJSXExpressionContainer)(s) && (s = s.expression), (0, r.isJSXEmptyExpression)(s) || t.push(s))
			}
			return t
		};
		var r = n(2),
			i = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(117))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			const n = e.value.split(/\r\n|\n|\r/);
			let i = 0;
			for (let e = 0; e < n.length; e++) n[e].match(/[^ \t]/) && (i = e);
			let s = "";
			for (let e = 0; e < n.length; e++) {
				const t = n[e],
					r = 0 === e,
					o = e === n.length - 1,
					a = e === i;
				let u = t.replace(/\t/g, " ");
				r || (u = u.replace(/^[ ]+/, "")), o || (u = u.replace(/[ ]+$/, "")), u && (a || (u += " "), s += u)
			}
			s && t.push((0, r.stringLiteral)(s))
		};
		var r = n(4)
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = o(n(56));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, ...t) {
			const n = i.BUILDER_KEYS[e],
				o = t.length;
			if (o > n.length) throw new Error(`${e}: Too many arguments passed. Received ${o} but can receive no more than ${n.length}`);
			const a = {
				type: e
			};
			let u = 0;
			n.forEach(n => {
				const s = i.NODE_FIELDS[e][n];
				let c;
				u < o && (c = t[u]), void 0 === c && (c = (0, r().default)(s.default)), a[n] = c, u++
			});
			for (const e of Object.keys(a))(0, s.default)(a, e, a[e]);
			return a
		};
		var i = n(3),
			s = o(n(45));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
	}, function (e, t, n) {
		var r = n(120),
			i = n(149),
			s = n(61),
			o = n(150),
			a = n(159),
			u = n(162),
			c = n(163),
			l = n(164),
			p = n(166),
			h = n(167),
			f = n(168),
			d = n(40),
			y = n(172),
			m = n(173),
			g = n(179),
			E = n(14),
			T = n(65),
			A = n(181),
			S = n(10),
			b = n(183),
			x = n(25),
			P = 1,
			v = 2,
			D = 4,
			C = "[object Arguments]",
			O = "[object Function]",
			w = "[object GeneratorFunction]",
			F = "[object Object]",
			_ = {};
		_[C] = _["[object Array]"] = _["[object ArrayBuffer]"] = _["[object DataView]"] = _["[object Boolean]"] = _["[object Date]"] = _["[object Float32Array]"] = _["[object Float64Array]"] = _["[object Int8Array]"] = _["[object Int16Array]"] = _["[object Int32Array]"] = _["[object Map]"] = _["[object Number]"] = _[F] = _["[object RegExp]"] = _["[object Set]"] = _["[object String]"] = _["[object Symbol]"] = _["[object Uint8Array]"] = _["[object Uint8ClampedArray]"] = _["[object Uint16Array]"] = _["[object Uint32Array]"] = !0, _["[object Error]"] = _[O] = _["[object WeakMap]"] = !1, e.exports = function e(t, n, N, I, k, B) {
			var L, M = n & P,
				j = n & v,
				R = n & D;
			if (N && (L = k ? N(t, I, k, B) : N(t)), void 0 !== L) return L;
			if (!S(t)) return t;
			var U = E(t);
			if (U) {
				if (L = y(t), !M) return c(t, L)
			} else {
				var V = d(t),
					X = V == O || V == w;
				if (T(t)) return u(t, M);
				if (V == F || V == C || X && !k) {
					if (L = j || X ? {} : g(t), !M) return j ? p(t, a(L, t)) : l(t, o(L, t))
				} else {
					if (!_[V]) return k ? t : {};
					L = m(t, V, M)
				}
			}
			B || (B = new r);
			var W = B.get(t);
			if (W) return W;
			B.set(t, L), b(t) ? t.forEach(function (r) {
				L.add(e(r, n, N, r, t, B))
			}) : A(t) && t.forEach(function (r, i) {
				L.set(i, e(r, n, N, i, t, B))
			});
			var Y = R ? j ? f : h : j ? keysIn : x,
				K = U ? void 0 : Y(t);
			return i(K || t, function (r, i) {
				K && (r = t[i = r]), s(L, i, e(r, n, N, i, t, B))
			}), L
		}
	}, function (e, t, n) {
		var r = n(18),
			i = n(126),
			s = n(127),
			o = n(128),
			a = n(129),
			u = n(130);

		function c(e) {
			var t = this.__data__ = new r(e);
			this.size = t.size
		}
		c.prototype.clear = i, c.prototype.delete = s, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, e.exports = c
	}, function (e, t) {
		e.exports = function () {
			this.__data__ = [], this.size = 0
		}
	}, function (e, t, n) {
		var r = n(19),
			i = Array.prototype.splice;
		e.exports = function (e) {
			var t = this.__data__,
				n = r(t, e);
			return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0))
		}
	}, function (e, t, n) {
		var r = n(19);
		e.exports = function (e) {
			var t = this.__data__,
				n = r(t, e);
			return n < 0 ? void 0 : t[n][1]
		}
	}, function (e, t, n) {
		var r = n(19);
		e.exports = function (e) {
			return r(this.__data__, e) > -1
		}
	}, function (e, t, n) {
		var r = n(19);
		e.exports = function (e, t) {
			var n = this.__data__,
				i = r(n, e);
			return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
		}
	}, function (e, t, n) {
		var r = n(18);
		e.exports = function () {
			this.__data__ = new r, this.size = 0
		}
	}, function (e, t) {
		e.exports = function (e) {
			var t = this.__data__,
				n = t.delete(e);
			return this.size = t.size, n
		}
	}, function (e, t) {
		e.exports = function (e) {
			return this.__data__.get(e)
		}
	}, function (e, t) {
		e.exports = function (e) {
			return this.__data__.has(e)
		}
	}, function (e, t, n) {
		var r = n(18),
			i = n(34),
			s = n(60),
			o = 200;
		e.exports = function (e, t) {
			var n = this.__data__;
			if (n instanceof r) {
				var a = n.__data__;
				if (!i || a.length < o - 1) return a.push([e, t]), this.size = ++n.size, this;
				n = this.__data__ = new s(a)
			}
			return n.set(e, t), this.size = n.size, this
		}
	}, function (e, t, n) {
		var r = n(57),
			i = n(134),
			s = n(10),
			o = n(59),
			a = /^\[object .+?Constructor\]$/,
			u = Function.prototype,
			c = Object.prototype,
			l = u.toString,
			p = c.hasOwnProperty,
			h = RegExp("^" + l.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
		e.exports = function (e) {
			return !(!s(e) || i(e)) && (r(e) ? h : a).test(o(e))
		}
	}, function (e, t, n) {
		var r = n(21),
			i = Object.prototype,
			s = i.hasOwnProperty,
			o = i.toString,
			a = r ? r.toStringTag : void 0;
		e.exports = function (e) {
			var t = s.call(e, a),
				n = e[a];
			try {
				e[a] = void 0;
				var r = !0
			} catch (e) {}
			var i = o.call(e);
			return r && (t ? e[a] = n : delete e[a]), i
		}
	}, function (e, t) {
		var n = Object.prototype.toString;
		e.exports = function (e) {
			return n.call(e)
		}
	}, function (e, t, n) {
		var r = n(135),
			i = function () {
				var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
				return e ? "Symbol(src)_1." + e : ""
			}();
		e.exports = function (e) {
			return !!i && i in e
		}
	}, function (e, t, n) {
		var r = n(5)["__core-js_shared__"];
		e.exports = r
	}, function (e, t) {
		e.exports = function (e, t) {
			return null == e ? void 0 : e[t]
		}
	}, function (e, t, n) {
		var r = n(138),
			i = n(18),
			s = n(34);
		e.exports = function () {
			this.size = 0, this.__data__ = {
				hash: new r,
				map: new(s || i),
				string: new r
			}
		}
	}, function (e, t, n) {
		var r = n(139),
			i = n(140),
			s = n(141),
			o = n(142),
			a = n(143);

		function u(e) {
			var t = -1,
				n = null == e ? 0 : e.length;
			for (this.clear(); ++t < n;) {
				var r = e[t];
				this.set(r[0], r[1])
			}
		}
		u.prototype.clear = r, u.prototype.delete = i, u.prototype.get = s, u.prototype.has = o, u.prototype.set = a, e.exports = u
	}, function (e, t, n) {
		var r = n(22);
		e.exports = function () {
			this.__data__ = r ? r(null) : {}, this.size = 0
		}
	}, function (e, t) {
		e.exports = function (e) {
			var t = this.has(e) && delete this.__data__[e];
			return this.size -= t ? 1 : 0, t
		}
	}, function (e, t, n) {
		var r = n(22),
			i = "__lodash_hash_undefined__",
			s = Object.prototype.hasOwnProperty;
		e.exports = function (e) {
			var t = this.__data__;
			if (r) {
				var n = t[e];
				return n === i ? void 0 : n
			}
			return s.call(t, e) ? t[e] : void 0
		}
	}, function (e, t, n) {
		var r = n(22),
			i = Object.prototype.hasOwnProperty;
		e.exports = function (e) {
			var t = this.__data__;
			return r ? void 0 !== t[e] : i.call(t, e)
		}
	}, function (e, t, n) {
		var r = n(22),
			i = "__lodash_hash_undefined__";
		e.exports = function (e, t) {
			var n = this.__data__;
			return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? i : t, this
		}
	}, function (e, t, n) {
		var r = n(23);
		e.exports = function (e) {
			var t = r(this, e).delete(e);
			return this.size -= t ? 1 : 0, t
		}
	}, function (e, t) {
		e.exports = function (e) {
			var t = typeof e;
			return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
		}
	}, function (e, t, n) {
		var r = n(23);
		e.exports = function (e) {
			return r(this, e).get(e)
		}
	}, function (e, t, n) {
		var r = n(23);
		e.exports = function (e) {
			return r(this, e).has(e)
		}
	}, function (e, t, n) {
		var r = n(23);
		e.exports = function (e, t) {
			var n = r(this, e),
				i = n.size;
			return n.set(e, t), this.size += n.size == i ? 0 : 1, this
		}
	}, function (e, t) {
		e.exports = function (e, t) {
			for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
			return e
		}
	}, function (e, t, n) {
		var r = n(24),
			i = n(25);
		e.exports = function (e, t) {
			return e && r(t, i(t), e)
		}
	}, function (e, t) {
		e.exports = function (e, t) {
			for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
			return r
		}
	}, function (e, t, n) {
		var r = n(153),
			i = n(6),
			s = Object.prototype,
			o = s.hasOwnProperty,
			a = s.propertyIsEnumerable,
			u = r(function () {
				return arguments
			}()) ? r : function (e) {
				return i(e) && o.call(e, "callee") && !a.call(e, "callee")
			};
		e.exports = u
	}, function (e, t, n) {
		var r = n(8),
			i = n(6),
			s = "[object Arguments]";
		e.exports = function (e) {
			return i(e) && r(e) == s
		}
	}, function (e, t) {
		e.exports = function () {
			return !1
		}
	}, function (e, t, n) {
		var r = n(156),
			i = n(27),
			s = n(28),
			o = s && s.isTypedArray,
			a = o ? i(o) : r;
		e.exports = a
	}, function (e, t, n) {
		var r = n(8),
			i = n(67),
			s = n(6),
			o = {};
		o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1, e.exports = function (e) {
			return s(e) && i(e.length) && !!o[r(e)]
		}
	}, function (e, t, n) {
		var r = n(36),
			i = n(158),
			s = Object.prototype.hasOwnProperty;
		e.exports = function (e) {
			if (!r(e)) return i(e);
			var t = [];
			for (var n in Object(e)) s.call(e, n) && "constructor" != n && t.push(n);
			return t
		}
	}, function (e, t, n) {
		var r = n(68)(Object.keys, Object);
		e.exports = r
	}, function (e, t, n) {
		var r = n(24),
			i = n(37);
		e.exports = function (e, t) {
			return e && r(t, i(t), e)
		}
	}, function (e, t, n) {
		var r = n(10),
			i = n(36),
			s = n(161),
			o = Object.prototype.hasOwnProperty;
		e.exports = function (e) {
			if (!r(e)) return s(e);
			var t = i(e),
				n = [];
			for (var a in e)("constructor" != a || !t && o.call(e, a)) && n.push(a);
			return n
		}
	}, function (e, t) {
		e.exports = function (e) {
			var t = [];
			if (null != e)
				for (var n in Object(e)) t.push(n);
			return t
		}
	}, function (e, t, n) {
		(function (e) {
			var r = n(5),
				i = "object" == typeof t && t && !t.nodeType && t,
				s = i && "object" == typeof e && e && !e.nodeType && e,
				o = s && s.exports === i ? r.Buffer : void 0,
				a = o ? o.allocUnsafe : void 0;
			e.exports = function (e, t) {
				if (t) return e.slice();
				var n = e.length,
					r = a ? a(n) : new e.constructor(n);
				return e.copy(r), r
			}
		}).call(this, n(26)(e))
	}, function (e, t) {
		e.exports = function (e, t) {
			var n = -1,
				r = e.length;
			for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
			return t
		}
	}, function (e, t, n) {
		var r = n(24),
			i = n(38);
		e.exports = function (e, t) {
			return r(e, i(e), t)
		}
	}, function (e, t) {
		e.exports = function (e, t) {
			for (var n = -1, r = null == e ? 0 : e.length, i = 0, s = []; ++n < r;) {
				var o = e[n];
				t(o, n, e) && (s[i++] = o)
			}
			return s
		}
	}, function (e, t, n) {
		var r = n(24),
			i = n(70);
		e.exports = function (e, t) {
			return r(e, i(e), t)
		}
	}, function (e, t, n) {
		var r = n(72),
			i = n(38),
			s = n(25);
		e.exports = function (e) {
			return r(e, s, i)
		}
	}, function (e, t, n) {
		var r = n(72),
			i = n(70),
			s = n(37);
		e.exports = function (e) {
			return r(e, s, i)
		}
	}, function (e, t, n) {
		var r = n(9)(n(5), "DataView");
		e.exports = r
	}, function (e, t, n) {
		var r = n(9)(n(5), "Promise");
		e.exports = r
	}, function (e, t, n) {
		var r = n(9)(n(5), "WeakMap");
		e.exports = r
	}, function (e, t) {
		var n = Object.prototype.hasOwnProperty;
		e.exports = function (e) {
			var t = e.length,
				r = new e.constructor(t);
			return t && "string" == typeof e[0] && n.call(e, "index") && (r.index = e.index, r.input = e.input), r
		}
	}, function (e, t, n) {
		var r = n(41),
			i = n(175),
			s = n(176),
			o = n(177),
			a = n(178),
			u = "[object Boolean]",
			c = "[object Date]",
			l = "[object Map]",
			p = "[object Number]",
			h = "[object RegExp]",
			f = "[object Set]",
			d = "[object String]",
			y = "[object Symbol]",
			m = "[object ArrayBuffer]",
			g = "[object DataView]",
			E = "[object Float32Array]",
			T = "[object Float64Array]",
			A = "[object Int8Array]",
			S = "[object Int16Array]",
			b = "[object Int32Array]",
			x = "[object Uint8Array]",
			P = "[object Uint8ClampedArray]",
			v = "[object Uint16Array]",
			D = "[object Uint32Array]";
		e.exports = function (e, t, n) {
			var C = e.constructor;
			switch (t) {
				case m:
					return r(e);
				case u:
				case c:
					return new C(+e);
				case g:
					return i(e, n);
				case E:
				case T:
				case A:
				case S:
				case b:
				case x:
				case P:
				case v:
				case D:
					return a(e, n);
				case l:
					return new C;
				case p:
				case d:
					return new C(e);
				case h:
					return s(e);
				case f:
					return new C;
				case y:
					return o(e)
			}
		}
	}, function (e, t, n) {
		var r = n(5).Uint8Array;
		e.exports = r
	}, function (e, t, n) {
		var r = n(41);
		e.exports = function (e, t) {
			var n = t ? r(e.buffer) : e.buffer;
			return new e.constructor(n, e.byteOffset, e.byteLength)
		}
	}, function (e, t) {
		var n = /\w*$/;
		e.exports = function (e) {
			var t = new e.constructor(e.source, n.exec(e));
			return t.lastIndex = e.lastIndex, t
		}
	}, function (e, t, n) {
		var r = n(21),
			i = r ? r.prototype : void 0,
			s = i ? i.valueOf : void 0;
		e.exports = function (e) {
			return s ? Object(s.call(e)) : {}
		}
	}, function (e, t, n) {
		var r = n(41);
		e.exports = function (e, t) {
			var n = t ? r(e.buffer) : e.buffer;
			return new e.constructor(n, e.byteOffset, e.length)
		}
	}, function (e, t, n) {
		var r = n(180),
			i = n(39),
			s = n(36);
		e.exports = function (e) {
			return "function" != typeof e.constructor || s(e) ? {} : r(i(e))
		}
	}, function (e, t, n) {
		var r = n(10),
			i = Object.create,
			s = function () {
				function e() {}
				return function (t) {
					if (!r(t)) return {};
					if (i) return i(t);
					e.prototype = t;
					var n = new e;
					return e.prototype = void 0, n
				}
			}();
		e.exports = s
	}, function (e, t, n) {
		var r = n(182),
			i = n(27),
			s = n(28),
			o = s && s.isMap,
			a = o ? i(o) : r;
		e.exports = a
	}, function (e, t, n) {
		var r = n(40),
			i = n(6),
			s = "[object Map]";
		e.exports = function (e) {
			return i(e) && r(e) == s
		}
	}, function (e, t, n) {
		var r = n(184),
			i = n(27),
			s = n(28),
			o = s && s.isSet,
			a = o ? i(o) : r;
		e.exports = a
	}, function (e, t, n) {
		var r = n(40),
			i = n(6),
			s = "[object Set]";
		e.exports = function (e) {
			return i(e) && r(e) == s
		}
	}, function (e, t, n) {
		"use strict";
		let r = null;

		function i(e) {
			if (null !== r && (r.property, 1)) {
				const e = r;
				return r = i.prototype = null, e
			}
			return r = i.prototype = null == e ? Object.create(null) : e, new i
		}
		i(), e.exports = function (e) {
			return i(e)
		}
	}, function (e, t) {
		! function () {
			"use strict";

			function t(e) {
				if (null == e) return !1;
				switch (e.type) {
					case "BlockStatement":
					case "BreakStatement":
					case "ContinueStatement":
					case "DebuggerStatement":
					case "DoWhileStatement":
					case "EmptyStatement":
					case "ExpressionStatement":
					case "ForInStatement":
					case "ForStatement":
					case "IfStatement":
					case "LabeledStatement":
					case "ReturnStatement":
					case "SwitchStatement":
					case "ThrowStatement":
					case "TryStatement":
					case "VariableDeclaration":
					case "WhileStatement":
					case "WithStatement":
						return !0
				}
				return !1
			}

			function n(e) {
				switch (e.type) {
					case "IfStatement":
						return null != e.alternate ? e.alternate : e.consequent;
					case "LabeledStatement":
					case "ForStatement":
					case "ForInStatement":
					case "WhileStatement":
					case "WithStatement":
						return e.body
				}
				return null
			}
			e.exports = {
				isExpression: function (e) {
					if (null == e) return !1;
					switch (e.type) {
						case "ArrayExpression":
						case "AssignmentExpression":
						case "BinaryExpression":
						case "CallExpression":
						case "ConditionalExpression":
						case "FunctionExpression":
						case "Identifier":
						case "Literal":
						case "LogicalExpression":
						case "MemberExpression":
						case "NewExpression":
						case "ObjectExpression":
						case "SequenceExpression":
						case "ThisExpression":
						case "UnaryExpression":
						case "UpdateExpression":
							return !0
					}
					return !1
				},
				isStatement: t,
				isIterationStatement: function (e) {
					if (null == e) return !1;
					switch (e.type) {
						case "DoWhileStatement":
						case "ForInStatement":
						case "ForStatement":
						case "WhileStatement":
							return !0
					}
					return !1
				},
				isSourceElement: function (e) {
					return t(e) || null != e && "FunctionDeclaration" === e.type
				},
				isProblematicIfStatement: function (e) {
					var t;
					if ("IfStatement" !== e.type) return !1;
					if (null == e.alternate) return !1;
					t = e.consequent;
					do {
						if ("IfStatement" === t.type && null == t.alternate) return !0;
						t = n(t)
					} while (t);
					return !1
				},
				trailingStatement: n
			}
		}()
	}, function (e, t, n) {
		! function () {
			"use strict";
			var t = n(75);

			function r(e, t) {
				return !(!t && "yield" === e) && i(e, t)
			}

			function i(e, t) {
				if (t && function (e) {
						switch (e) {
							case "implements":
							case "interface":
							case "package":
							case "private":
							case "protected":
							case "public":
							case "static":
							case "let":
								return !0;
							default:
								return !1
						}
					}(e)) return !0;
				switch (e.length) {
					case 2:
						return "if" === e || "in" === e || "do" === e;
					case 3:
						return "var" === e || "for" === e || "new" === e || "try" === e;
					case 4:
						return "this" === e || "else" === e || "case" === e || "void" === e || "with" === e || "enum" === e;
					case 5:
						return "while" === e || "break" === e || "catch" === e || "throw" === e || "const" === e || "yield" === e || "class" === e || "super" === e;
					case 6:
						return "return" === e || "typeof" === e || "delete" === e || "switch" === e || "export" === e || "import" === e;
					case 7:
						return "default" === e || "finally" === e || "extends" === e;
					case 8:
						return "function" === e || "continue" === e || "debugger" === e;
					case 10:
						return "instanceof" === e;
					default:
						return !1
				}
			}

			function s(e, t) {
				return "null" === e || "true" === e || "false" === e || r(e, t)
			}

			function o(e, t) {
				return "null" === e || "true" === e || "false" === e || i(e, t)
			}

			function a(e) {
				var n, r, i;
				if (0 === e.length) return !1;
				if (i = e.charCodeAt(0), !t.isIdentifierStartES5(i)) return !1;
				for (n = 1, r = e.length; n < r; ++n)
					if (i = e.charCodeAt(n), !t.isIdentifierPartES5(i)) return !1;
				return !0
			}

			function u(e, t) {
				return 1024 * (e - 55296) + (t - 56320) + 65536
			}

			function c(e) {
				var n, r, i, s, o;
				if (0 === e.length) return !1;
				for (o = t.isIdentifierStartES6, n = 0, r = e.length; n < r; ++n) {
					if (55296 <= (i = e.charCodeAt(n)) && i <= 56319) {
						if (++n >= r) return !1;
						if (!(56320 <= (s = e.charCodeAt(n)) && s <= 57343)) return !1;
						i = u(i, s)
					}
					if (!o(i)) return !1;
					o = t.isIdentifierPartES6
				}
				return !0
			}
			e.exports = {
				isKeywordES5: r,
				isKeywordES6: i,
				isReservedWordES5: s,
				isReservedWordES6: o,
				isRestrictedWord: function (e) {
					return "eval" === e || "arguments" === e
				},
				isIdentifierNameES5: a,
				isIdentifierNameES6: c,
				isIdentifierES5: function (e, t) {
					return a(e) && !s(e, t)
				},
				isIdentifierES6: function (e, t) {
					return c(e) && !o(e, t)
				}
			}
		}()
	}, function (e, t, n) {
		"use strict";
		var r = function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e)
					if (Object.prototype.hasOwnProperty.call(e, n)) {
						var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
						r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
					}
			return t.default = e, t
		}(n(7));
		const i = (e, t = "TypeParameterDeclaration") => {
			(0, r.default)(e, {
				builder: ["id", "typeParameters", "extends", "body"],
				visitor: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
				aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
				fields: {
					id: (0, r.validateType)("Identifier"),
					typeParameters: (0, r.validateOptionalType)(t),
					extends: (0, r.validateOptional)((0, r.arrayOfType)("InterfaceExtends")),
					mixins: (0, r.validateOptional)((0, r.arrayOfType)("InterfaceExtends")),
					implements: (0, r.validateOptional)((0, r.arrayOfType)("ClassImplements")),
					body: (0, r.validateType)("ObjectTypeAnnotation")
				}
			})
		};
		(0, r.default)("AnyTypeAnnotation", {
			aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
		}), (0, r.default)("ArrayTypeAnnotation", {
			visitor: ["elementType"],
			aliases: ["Flow", "FlowType"],
			fields: {
				elementType: (0, r.validateType)("FlowType")
			}
		}), (0, r.default)("BooleanTypeAnnotation", {
			aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
		}), (0, r.default)("BooleanLiteralTypeAnnotation", {
			builder: ["value"],
			aliases: ["Flow", "FlowType"],
			fields: {
				value: (0, r.validate)((0, r.assertValueType)("boolean"))
			}
		}), (0, r.default)("NullLiteralTypeAnnotation", {
			aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
		}), (0, r.default)("ClassImplements", {
			visitor: ["id", "typeParameters"],
			aliases: ["Flow"],
			fields: {
				id: (0, r.validateType)("Identifier"),
				typeParameters: (0, r.validateOptionalType)("TypeParameterInstantiation")
			}
		}), i("DeclareClass"), (0, r.default)("DeclareFunction", {
			visitor: ["id"],
			aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
			fields: {
				id: (0, r.validateType)("Identifier"),
				predicate: (0, r.validateOptionalType)("DeclaredPredicate")
			}
		}), i("DeclareInterface"), (0, r.default)("DeclareModule", {
			builder: ["id", "body", "kind"],
			visitor: ["id", "body"],
			aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
			fields: {
				id: (0, r.validateType)(["Identifier", "StringLiteral"]),
				body: (0, r.validateType)("BlockStatement"),
				kind: (0, r.validateOptional)((0, r.assertOneOf)("CommonJS", "ES"))
			}
		}), (0, r.default)("DeclareModuleExports", {
			visitor: ["typeAnnotation"],
			aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
			fields: {
				typeAnnotation: (0, r.validateType)("TypeAnnotation")
			}
		}), (0, r.default)("DeclareTypeAlias", {
			visitor: ["id", "typeParameters", "right"],
			aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
			fields: {
				id: (0, r.validateType)("Identifier"),
				typeParameters: (0, r.validateOptionalType)("TypeParameterDeclaration"),
				right: (0, r.validateType)("FlowType")
			}
		}), (0, r.default)("DeclareOpaqueType", {
			visitor: ["id", "typeParameters", "supertype"],
			aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
			fields: {
				id: (0, r.validateType)("Identifier"),
				typeParameters: (0, r.validateOptionalType)("TypeParameterDeclaration"),
				supertype: (0, r.validateOptionalType)("FlowType")
			}
		}), (0, r.default)("DeclareVariable", {
			visitor: ["id"],
			aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
			fields: {
				id: (0, r.validateType)("Identifier")
			}
		}), (0, r.default)("DeclareExportDeclaration", {
			visitor: ["declaration", "specifiers", "source"],
			aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
			fields: {
				declaration: (0, r.validateOptionalType)("Flow"),
				specifiers: (0, r.validateOptional)((0, r.arrayOfType)(["ExportSpecifier", "ExportNamespaceSpecifier"])),
				source: (0, r.validateOptionalType)("StringLiteral"),
				default: (0, r.validateOptional)((0, r.assertValueType)("boolean"))
			}
		}), (0, r.default)("DeclareExportAllDeclaration", {
			visitor: ["source"],
			aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
			fields: {
				source: (0, r.validateType)("StringLiteral"),
				exportKind: (0, r.validateOptional)((0, r.assertOneOf)("type", "value"))
			}
		}), (0, r.default)("DeclaredPredicate", {
			visitor: ["value"],
			aliases: ["Flow", "FlowPredicate"],
			fields: {
				value: (0, r.validateType)("Flow")
			}
		}), (0, r.default)("ExistsTypeAnnotation", {
			aliases: ["Flow", "FlowType"]
		}), (0, r.default)("FunctionTypeAnnotation", {
			visitor: ["typeParameters", "params", "rest", "returnType"],
			aliases: ["Flow", "FlowType"],
			fields: {
				typeParameters: (0, r.validateOptionalType)("TypeParameterDeclaration"),
				params: (0, r.validate)((0, r.arrayOfType)("FunctionTypeParam")),
				rest: (0, r.validateOptionalType)("FunctionTypeParam"),
				returnType: (0, r.validateType)("FlowType")
			}
		}), (0, r.default)("FunctionTypeParam", {
			visitor: ["name", "typeAnnotation"],
			aliases: ["Flow"],
			fields: {
				name: (0, r.validateOptionalType)("Identifier"),
				typeAnnotation: (0, r.validateType)("FlowType"),
				optional: (0, r.validateOptional)((0, r.assertValueType)("boolean"))
			}
		}), (0, r.default)("GenericTypeAnnotation", {
			visitor: ["id", "typeParameters"],
			aliases: ["Flow", "FlowType"],
			fields: {
				id: (0, r.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
				typeParameters: (0, r.validateOptionalType)("TypeParameterInstantiation")
			}
		}), (0, r.default)("InferredPredicate", {
			aliases: ["Flow", "FlowPredicate"]
		}), (0, r.default)("InterfaceExtends", {
			visitor: ["id", "typeParameters"],
			aliases: ["Flow"],
			fields: {
				id: (0, r.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
				typeParameters: (0, r.validateOptionalType)("TypeParameterInstantiation")
			}
		}), i("InterfaceDeclaration"), (0, r.default)("InterfaceTypeAnnotation", {
			visitor: ["extends", "body"],
			aliases: ["Flow", "FlowType"],
			fields: {
				extends: (0, r.validateOptional)((0, r.arrayOfType)("InterfaceExtends")),
				body: (0, r.validateType)("ObjectTypeAnnotation")
			}
		}), (0, r.default)("IntersectionTypeAnnotation", {
			visitor: ["types"],
			aliases: ["Flow", "FlowType"],
			fields: {
				types: (0, r.validate)((0, r.arrayOfType)("FlowType"))
			}
		}), (0, r.default)("MixedTypeAnnotation", {
			aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
		}), (0, r.default)("EmptyTypeAnnotation", {
			aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
		}), (0, r.default)("NullableTypeAnnotation", {
			visitor: ["typeAnnotation"],
			aliases: ["Flow", "FlowType"],
			fields: {
				typeAnnotation: (0, r.validateType)("FlowType")
			}
		}), (0, r.default)("NumberLiteralTypeAnnotation", {
			builder: ["value"],
			aliases: ["Flow", "FlowType"],
			fields: {
				value: (0, r.validate)((0, r.assertValueType)("number"))
			}
		}), (0, r.default)("NumberTypeAnnotation", {
			aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
		}), (0, r.default)("ObjectTypeAnnotation", {
			visitor: ["properties", "indexers", "callProperties", "internalSlots"],
			aliases: ["Flow", "FlowType"],
			builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
			fields: {
				properties: (0, r.validate)((0, r.arrayOfType)(["ObjectTypeProperty", "ObjectTypeSpreadProperty"])),
				indexers: (0, r.validateOptional)((0, r.arrayOfType)("ObjectTypeIndexer")),
				callProperties: (0, r.validateOptional)((0, r.arrayOfType)("ObjectTypeCallProperty")),
				internalSlots: (0, r.validateOptional)((0, r.arrayOfType)("ObjectTypeInternalSlot")),
				exact: {
					validate: (0, r.assertValueType)("boolean"),
					default: !1
				},
				inexact: (0, r.validateOptional)((0, r.assertValueType)("boolean"))
			}
		}), (0, r.default)("ObjectTypeInternalSlot", {
			visitor: ["id", "value", "optional", "static", "method"],
			aliases: ["Flow", "UserWhitespacable"],
			fields: {
				id: (0, r.validateType)("Identifier"),
				value: (0, r.validateType)("FlowType"),
				optional: (0, r.validate)((0, r.assertValueType)("boolean")),
				static: (0, r.validate)((0, r.assertValueType)("boolean")),
				method: (0, r.validate)((0, r.assertValueType)("boolean"))
			}
		}), (0, r.default)("ObjectTypeCallProperty", {
			visitor: ["value"],
			aliases: ["Flow", "UserWhitespacable"],
			fields: {
				value: (0, r.validateType)("FlowType"),
				static: (0, r.validate)((0, r.assertValueType)("boolean"))
			}
		}), (0, r.default)("ObjectTypeIndexer", {
			visitor: ["id", "key", "value", "variance"],
			aliases: ["Flow", "UserWhitespacable"],
			fields: {
				id: (0, r.validateOptionalType)("Identifier"),
				key: (0, r.validateType)("FlowType"),
				value: (0, r.validateType)("FlowType"),
				static: (0, r.validate)((0, r.assertValueType)("boolean")),
				variance: (0, r.validateOptionalType)("Variance")
			}
		}), (0, r.default)("ObjectTypeProperty", {
			visitor: ["key", "value", "variance"],
			aliases: ["Flow", "UserWhitespacable"],
			fields: {
				key: (0, r.validateType)(["Identifier", "StringLiteral"]),
				value: (0, r.validateType)("FlowType"),
				kind: (0, r.validate)((0, r.assertOneOf)("init", "get", "set")),
				static: (0, r.validate)((0, r.assertValueType)("boolean")),
				proto: (0, r.validate)((0, r.assertValueType)("boolean")),
				optional: (0, r.validate)((0, r.assertValueType)("boolean")),
				variance: (0, r.validateOptionalType)("Variance")
			}
		}), (0, r.default)("ObjectTypeSpreadProperty", {
			visitor: ["argument"],
			aliases: ["Flow", "UserWhitespacable"],
			fields: {
				argument: (0, r.validateType)("FlowType")
			}
		}), (0, r.default)("OpaqueType", {
			visitor: ["id", "typeParameters", "supertype", "impltype"],
			aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
			fields: {
				id: (0, r.validateType)("Identifier"),
				typeParameters: (0, r.validateOptionalType)("TypeParameterDeclaration"),
				supertype: (0, r.validateOptionalType)("FlowType"),
				impltype: (0, r.validateType)("FlowType")
			}
		}), (0, r.default)("QualifiedTypeIdentifier", {
			visitor: ["id", "qualification"],
			aliases: ["Flow"],
			fields: {
				id: (0, r.validateType)("Identifier"),
				qualification: (0, r.validateType)(["Identifier", "QualifiedTypeIdentifier"])
			}
		}), (0, r.default)("StringLiteralTypeAnnotation", {
			builder: ["value"],
			aliases: ["Flow", "FlowType"],
			fields: {
				value: (0, r.validate)((0, r.assertValueType)("string"))
			}
		}), (0, r.default)("StringTypeAnnotation", {
			aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
		}), (0, r.default)("ThisTypeAnnotation", {
			aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
		}), (0, r.default)("TupleTypeAnnotation", {
			visitor: ["types"],
			aliases: ["Flow", "FlowType"],
			fields: {
				types: (0, r.validate)((0, r.arrayOfType)("FlowType"))
			}
		}), (0, r.default)("TypeofTypeAnnotation", {
			visitor: ["argument"],
			aliases: ["Flow", "FlowType"],
			fields: {
				argument: (0, r.validateType)("FlowType")
			}
		}), (0, r.default)("TypeAlias", {
			visitor: ["id", "typeParameters", "right"],
			aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
			fields: {
				id: (0, r.validateType)("Identifier"),
				typeParameters: (0, r.validateOptionalType)("TypeParameterDeclaration"),
				right: (0, r.validateType)("FlowType")
			}
		}), (0, r.default)("TypeAnnotation", {
			aliases: ["Flow"],
			visitor: ["typeAnnotation"],
			fields: {
				typeAnnotation: (0, r.validateType)("FlowType")
			}
		}), (0, r.default)("TypeCastExpression", {
			visitor: ["expression", "typeAnnotation"],
			aliases: ["Flow", "ExpressionWrapper", "Expression"],
			fields: {
				expression: (0, r.validateType)("Expression"),
				typeAnnotation: (0, r.validateType)("TypeAnnotation")
			}
		}), (0, r.default)("TypeParameter", {
			aliases: ["Flow"],
			visitor: ["bound", "default", "variance"],
			fields: {
				name: (0, r.validate)((0, r.assertValueType)("string")),
				bound: (0, r.validateOptionalType)("TypeAnnotation"),
				default: (0, r.validateOptionalType)("FlowType"),
				variance: (0, r.validateOptionalType)("Variance")
			}
		}), (0, r.default)("TypeParameterDeclaration", {
			aliases: ["Flow"],
			visitor: ["params"],
			fields: {
				params: (0, r.validate)((0, r.arrayOfType)("TypeParameter"))
			}
		}), (0, r.default)("TypeParameterInstantiation", {
			aliases: ["Flow"],
			visitor: ["params"],
			fields: {
				params: (0, r.validate)((0, r.arrayOfType)("FlowType"))
			}
		}), (0, r.default)("UnionTypeAnnotation", {
			visitor: ["types"],
			aliases: ["Flow", "FlowType"],
			fields: {
				types: (0, r.validate)((0, r.arrayOfType)("FlowType"))
			}
		}), (0, r.default)("Variance", {
			aliases: ["Flow"],
			builder: ["kind"],
			fields: {
				kind: (0, r.validate)((0, r.assertOneOf)("minus", "plus"))
			}
		}), (0, r.default)("VoidTypeAnnotation", {
			aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
		})
	}, function (e, t, n) {
		"use strict";
		var r = function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e)
					if (Object.prototype.hasOwnProperty.call(e, n)) {
						var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
						r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
					}
			return t.default = e, t
		}(n(7));
		(0, r.default)("JSXAttribute", {
			visitor: ["name", "value"],
			aliases: ["JSX", "Immutable"],
			fields: {
				name: {
					validate: (0, r.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
				},
				value: {
					optional: !0,
					validate: (0, r.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
				}
			}
		}), (0, r.default)("JSXClosingElement", {
			visitor: ["name"],
			aliases: ["JSX", "Immutable"],
			fields: {
				name: {
					validate: (0, r.assertNodeType)("JSXIdentifier", "JSXMemberExpression")
				}
			}
		}), (0, r.default)("JSXElement", {
			builder: ["openingElement", "closingElement", "children", "selfClosing"],
			visitor: ["openingElement", "children", "closingElement"],
			aliases: ["JSX", "Immutable", "Expression"],
			fields: {
				openingElement: {
					validate: (0, r.assertNodeType)("JSXOpeningElement")
				},
				closingElement: {
					optional: !0,
					validate: (0, r.assertNodeType)("JSXClosingElement")
				},
				children: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
				}
			}
		}), (0, r.default)("JSXEmptyExpression", {
			aliases: ["JSX"]
		}), (0, r.default)("JSXExpressionContainer", {
			visitor: ["expression"],
			aliases: ["JSX", "Immutable"],
			fields: {
				expression: {
					validate: (0, r.assertNodeType)("Expression", "JSXEmptyExpression")
				}
			}
		}), (0, r.default)("JSXSpreadChild", {
			visitor: ["expression"],
			aliases: ["JSX", "Immutable"],
			fields: {
				expression: {
					validate: (0, r.assertNodeType)("Expression")
				}
			}
		}), (0, r.default)("JSXIdentifier", {
			builder: ["name"],
			aliases: ["JSX"],
			fields: {
				name: {
					validate: (0, r.assertValueType)("string")
				}
			}
		}), (0, r.default)("JSXMemberExpression", {
			visitor: ["object", "property"],
			aliases: ["JSX"],
			fields: {
				object: {
					validate: (0, r.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
				},
				property: {
					validate: (0, r.assertNodeType)("JSXIdentifier")
				}
			}
		}), (0, r.default)("JSXNamespacedName", {
			visitor: ["namespace", "name"],
			aliases: ["JSX"],
			fields: {
				namespace: {
					validate: (0, r.assertNodeType)("JSXIdentifier")
				},
				name: {
					validate: (0, r.assertNodeType)("JSXIdentifier")
				}
			}
		}), (0, r.default)("JSXOpeningElement", {
			builder: ["name", "attributes", "selfClosing"],
			visitor: ["name", "attributes"],
			aliases: ["JSX", "Immutable"],
			fields: {
				name: {
					validate: (0, r.assertNodeType)("JSXIdentifier", "JSXMemberExpression")
				},
				selfClosing: {
					default: !1,
					validate: (0, r.assertValueType)("boolean")
				},
				attributes: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
				},
				typeParameters: {
					validate: (0, r.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
					optional: !0
				}
			}
		}), (0, r.default)("JSXSpreadAttribute", {
			visitor: ["argument"],
			aliases: ["JSX"],
			fields: {
				argument: {
					validate: (0, r.assertNodeType)("Expression")
				}
			}
		}), (0, r.default)("JSXText", {
			aliases: ["JSX", "Immutable"],
			builder: ["value"],
			fields: {
				value: {
					validate: (0, r.assertValueType)("string")
				}
			}
		}), (0, r.default)("JSXFragment", {
			builder: ["openingFragment", "closingFragment", "children"],
			visitor: ["openingFragment", "children", "closingFragment"],
			aliases: ["JSX", "Immutable", "Expression"],
			fields: {
				openingFragment: {
					validate: (0, r.assertNodeType)("JSXOpeningFragment")
				},
				closingFragment: {
					validate: (0, r.assertNodeType)("JSXClosingFragment")
				},
				children: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
				}
			}
		}), (0, r.default)("JSXOpeningFragment", {
			aliases: ["JSX", "Immutable"]
		}), (0, r.default)("JSXClosingFragment", {
			aliases: ["JSX", "Immutable"]
		})
	}, function (e, t, n) {
		"use strict";
		var r = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(7)),
			i = n(77);
		(0, r.default)("Noop", {
			visitor: []
		}), (0, r.default)("Placeholder", {
			visitor: [],
			builder: ["expectedNode", "name"],
			fields: {
				name: {
					validate: (0, r.assertNodeType)("Identifier")
				},
				expectedNode: {
					validate: (0, r.assertOneOf)(...i.PLACEHOLDERS)
				}
			}
		})
	}, function (e, t, n) {
		"use strict";
		var r = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(7)),
			i = n(46);
		(0, r.default)("ArgumentPlaceholder", {}), (0, r.default)("AwaitExpression", {
			builder: ["argument"],
			visitor: ["argument"],
			aliases: ["Expression", "Terminatorless"],
			fields: {
				argument: {
					validate: (0, r.assertNodeType)("Expression")
				}
			}
		}), (0, r.default)("BindExpression", {
			visitor: ["object", "callee"],
			aliases: ["Expression"],
			fields: {}
		}), (0, r.default)("ClassProperty", {
			visitor: ["key", "value", "typeAnnotation", "decorators"],
			builder: ["key", "value", "typeAnnotation", "decorators", "computed"],
			aliases: ["Property"],
			fields: Object.assign({}, i.classMethodOrPropertyCommon, {
				value: {
					validate: (0, r.assertNodeType)("Expression"),
					optional: !0
				},
				definite: {
					validate: (0, r.assertValueType)("boolean"),
					optional: !0
				},
				typeAnnotation: {
					validate: (0, r.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
					optional: !0
				},
				decorators: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("Decorator"))),
					optional: !0
				},
				readonly: {
					validate: (0, r.assertValueType)("boolean"),
					optional: !0
				}
			})
		}), (0, r.default)("OptionalMemberExpression", {
			builder: ["object", "property", "computed", "optional"],
			visitor: ["object", "property"],
			aliases: ["Expression"],
			fields: {
				object: {
					validate: (0, r.assertNodeType)("Expression")
				},
				property: {
					validate: function () {
						const e = (0, r.assertNodeType)("Identifier"),
							t = (0, r.assertNodeType)("Expression");
						return function (n, r, i) {
							(n.computed ? t : e)(n, r, i)
						}
					}()
				},
				computed: {
					default: !1
				},
				optional: {
					validate: (0, r.assertValueType)("boolean")
				}
			}
		}), (0, r.default)("PipelineTopicExpression", {
			builder: ["expression"],
			visitor: ["expression"],
			fields: {
				expression: {
					validate: (0, r.assertNodeType)("Expression")
				}
			}
		}), (0, r.default)("PipelineBareFunction", {
			builder: ["callee"],
			visitor: ["callee"],
			fields: {
				callee: {
					validate: (0, r.assertNodeType)("Expression")
				}
			}
		}), (0, r.default)("PipelinePrimaryTopicReference", {
			aliases: ["Expression"]
		}), (0, r.default)("OptionalCallExpression", {
			visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
			builder: ["callee", "arguments", "optional"],
			aliases: ["Expression"],
			fields: {
				callee: {
					validate: (0, r.assertNodeType)("Expression")
				},
				arguments: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName")))
				},
				optional: {
					validate: (0, r.assertValueType)("boolean")
				},
				typeArguments: {
					validate: (0, r.assertNodeType)("TypeParameterInstantiation"),
					optional: !0
				},
				typeParameters: {
					validate: (0, r.assertNodeType)("TSTypeParameterInstantiation"),
					optional: !0
				}
			}
		}), (0, r.default)("ClassPrivateProperty", {
			visitor: ["key", "value"],
			builder: ["key", "value"],
			aliases: ["Property", "Private"],
			fields: {
				key: {
					validate: (0, r.assertNodeType)("PrivateName")
				},
				value: {
					validate: (0, r.assertNodeType)("Expression"),
					optional: !0
				}
			}
		}), (0, r.default)("ClassPrivateMethod", {
			builder: ["kind", "key", "params", "body", "static"],
			visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
			aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
			fields: Object.assign({}, i.classMethodOrDeclareMethodCommon, {
				key: {
					validate: (0, r.assertNodeType)("PrivateName")
				},
				body: {
					validate: (0, r.assertNodeType)("BlockStatement")
				}
			})
		}), (0, r.default)("Import", {
			aliases: ["Expression"]
		}), (0, r.default)("Decorator", {
			visitor: ["expression"],
			fields: {
				expression: {
					validate: (0, r.assertNodeType)("Expression")
				}
			}
		}), (0, r.default)("DoExpression", {
			visitor: ["body"],
			aliases: ["Expression"],
			fields: {
				body: {
					validate: (0, r.assertNodeType)("BlockStatement")
				}
			}
		}), (0, r.default)("ExportDefaultSpecifier", {
			visitor: ["exported"],
			aliases: ["ModuleSpecifier"],
			fields: {
				exported: {
					validate: (0, r.assertNodeType)("Identifier")
				}
			}
		}), (0, r.default)("ExportNamespaceSpecifier", {
			visitor: ["exported"],
			aliases: ["ModuleSpecifier"],
			fields: {
				exported: {
					validate: (0, r.assertNodeType)("Identifier")
				}
			}
		}), (0, r.default)("PrivateName", {
			visitor: ["id"],
			aliases: ["Private"],
			fields: {
				id: {
					validate: (0, r.assertNodeType)("Identifier")
				}
			}
		}), (0, r.default)("BigIntLiteral", {
			builder: ["value"],
			fields: {
				value: {
					validate: (0, r.assertValueType)("string")
				}
			},
			aliases: ["Expression", "Pureish", "Literal", "Immutable"]
		})
	}, function (e, t, n) {
		"use strict";
		var r = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(7)),
			i = n(42),
			s = n(46);
		const o = (0, r.assertValueType)("boolean"),
			a = {
				returnType: {
					validate: (0, r.assertNodeType)("TSTypeAnnotation", "Noop"),
					optional: !0
				},
				typeParameters: {
					validate: (0, r.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
					optional: !0
				}
			};
		(0, r.default)("TSParameterProperty", {
			aliases: ["LVal"],
			visitor: ["parameter"],
			fields: {
				accessibility: {
					validate: (0, r.assertOneOf)("public", "private", "protected"),
					optional: !0
				},
				readonly: {
					validate: (0, r.assertValueType)("boolean"),
					optional: !0
				},
				parameter: {
					validate: (0, r.assertNodeType)("Identifier", "AssignmentPattern")
				}
			}
		}), (0, r.default)("TSDeclareFunction", {
			aliases: ["Statement", "Declaration"],
			visitor: ["id", "typeParameters", "params", "returnType"],
			fields: Object.assign({}, i.functionDeclarationCommon, a)
		}), (0, r.default)("TSDeclareMethod", {
			visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
			fields: Object.assign({}, s.classMethodOrDeclareMethodCommon, a)
		}), (0, r.default)("TSQualifiedName", {
			aliases: ["TSEntityName"],
			visitor: ["left", "right"],
			fields: {
				left: (0, r.validateType)("TSEntityName"),
				right: (0, r.validateType)("Identifier")
			}
		});
		const u = {
				typeParameters: (0, r.validateOptionalType)("TSTypeParameterDeclaration"),
				parameters: (0, r.validateArrayOfType)(["Identifier", "RestElement"]),
				typeAnnotation: (0, r.validateOptionalType)("TSTypeAnnotation")
			},
			c = {
				aliases: ["TSTypeElement"],
				visitor: ["typeParameters", "parameters", "typeAnnotation"],
				fields: u
			};
		(0, r.default)("TSCallSignatureDeclaration", c), (0, r.default)("TSConstructSignatureDeclaration", c);
		const l = {
			key: (0, r.validateType)("Expression"),
			computed: (0, r.validate)(o),
			optional: (0, r.validateOptional)(o)
		};
		(0, r.default)("TSPropertySignature", {
			aliases: ["TSTypeElement"],
			visitor: ["key", "typeAnnotation", "initializer"],
			fields: Object.assign({}, l, {
				readonly: (0, r.validateOptional)(o),
				typeAnnotation: (0, r.validateOptionalType)("TSTypeAnnotation"),
				initializer: (0, r.validateOptionalType)("Expression")
			})
		}), (0, r.default)("TSMethodSignature", {
			aliases: ["TSTypeElement"],
			visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
			fields: Object.assign({}, u, l)
		}), (0, r.default)("TSIndexSignature", {
			aliases: ["TSTypeElement"],
			visitor: ["parameters", "typeAnnotation"],
			fields: {
				readonly: (0, r.validateOptional)(o),
				parameters: (0, r.validateArrayOfType)("Identifier"),
				typeAnnotation: (0, r.validateOptionalType)("TSTypeAnnotation")
			}
		});
		const p = ["TSAnyKeyword", "TSUnknownKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSBooleanKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSVoidKeyword", "TSUndefinedKeyword", "TSNullKeyword", "TSNeverKeyword"];
		for (const e of p)(0, r.default)(e, {
			aliases: ["TSType"],
			visitor: [],
			fields: {}
		});
		(0, r.default)("TSThisType", {
			aliases: ["TSType"],
			visitor: [],
			fields: {}
		});
		const h = {
			aliases: ["TSType"],
			visitor: ["typeParameters", "parameters", "typeAnnotation"],
			fields: u
		};
		(0, r.default)("TSFunctionType", h), (0, r.default)("TSConstructorType", h), (0, r.default)("TSTypeReference", {
			aliases: ["TSType"],
			visitor: ["typeName", "typeParameters"],
			fields: {
				typeName: (0, r.validateType)("TSEntityName"),
				typeParameters: (0, r.validateOptionalType)("TSTypeParameterInstantiation")
			}
		}), (0, r.default)("TSTypePredicate", {
			aliases: ["TSType"],
			visitor: ["parameterName", "typeAnnotation"],
			fields: {
				parameterName: (0, r.validateType)(["Identifier", "TSThisType"]),
				typeAnnotation: (0, r.validateType)("TSTypeAnnotation")
			}
		}), (0, r.default)("TSTypeQuery", {
			aliases: ["TSType"],
			visitor: ["exprName"],
			fields: {
				exprName: (0, r.validateType)(["TSEntityName", "TSImportType"])
			}
		}), (0, r.default)("TSTypeLiteral", {
			aliases: ["TSType"],
			visitor: ["members"],
			fields: {
				members: (0, r.validateArrayOfType)("TSTypeElement")
			}
		}), (0, r.default)("TSArrayType", {
			aliases: ["TSType"],
			visitor: ["elementType"],
			fields: {
				elementType: (0, r.validateType)("TSType")
			}
		}), (0, r.default)("TSTupleType", {
			aliases: ["TSType"],
			visitor: ["elementTypes"],
			fields: {
				elementTypes: (0, r.validateArrayOfType)("TSType")
			}
		}), (0, r.default)("TSOptionalType", {
			aliases: ["TSType"],
			visitor: ["typeAnnotation"],
			fields: {
				typeAnnotation: (0, r.validateType)("TSType")
			}
		}), (0, r.default)("TSRestType", {
			aliases: ["TSType"],
			visitor: ["typeAnnotation"],
			fields: {
				typeAnnotation: (0, r.validateType)("TSType")
			}
		});
		const f = {
			aliases: ["TSType"],
			visitor: ["types"],
			fields: {
				types: (0, r.validateArrayOfType)("TSType")
			}
		};
		(0, r.default)("TSUnionType", f), (0, r.default)("TSIntersectionType", f), (0, r.default)("TSConditionalType", {
			aliases: ["TSType"],
			visitor: ["checkType", "extendsType", "trueType", "falseType"],
			fields: {
				checkType: (0, r.validateType)("TSType"),
				extendsType: (0, r.validateType)("TSType"),
				trueType: (0, r.validateType)("TSType"),
				falseType: (0, r.validateType)("TSType")
			}
		}), (0, r.default)("TSInferType", {
			aliases: ["TSType"],
			visitor: ["typeParameter"],
			fields: {
				typeParameter: (0, r.validateType)("TSTypeParameter")
			}
		}), (0, r.default)("TSParenthesizedType", {
			aliases: ["TSType"],
			visitor: ["typeAnnotation"],
			fields: {
				typeAnnotation: (0, r.validateType)("TSType")
			}
		}), (0, r.default)("TSTypeOperator", {
			aliases: ["TSType"],
			visitor: ["typeAnnotation"],
			fields: {
				operator: (0, r.validate)((0, r.assertValueType)("string")),
				typeAnnotation: (0, r.validateType)("TSType")
			}
		}), (0, r.default)("TSIndexedAccessType", {
			aliases: ["TSType"],
			visitor: ["objectType", "indexType"],
			fields: {
				objectType: (0, r.validateType)("TSType"),
				indexType: (0, r.validateType)("TSType")
			}
		}), (0, r.default)("TSMappedType", {
			aliases: ["TSType"],
			visitor: ["typeParameter", "typeAnnotation"],
			fields: {
				readonly: (0, r.validateOptional)(o),
				typeParameter: (0, r.validateType)("TSTypeParameter"),
				optional: (0, r.validateOptional)(o),
				typeAnnotation: (0, r.validateOptionalType)("TSType")
			}
		}), (0, r.default)("TSLiteralType", {
			aliases: ["TSType"],
			visitor: ["literal"],
			fields: {
				literal: (0, r.validateType)(["NumericLiteral", "StringLiteral", "BooleanLiteral"])
			}
		}), (0, r.default)("TSExpressionWithTypeArguments", {
			aliases: ["TSType"],
			visitor: ["expression", "typeParameters"],
			fields: {
				expression: (0, r.validateType)("TSEntityName"),
				typeParameters: (0, r.validateOptionalType)("TSTypeParameterInstantiation")
			}
		}), (0, r.default)("TSInterfaceDeclaration", {
			aliases: ["Statement", "Declaration"],
			visitor: ["id", "typeParameters", "extends", "body"],
			fields: {
				declare: (0, r.validateOptional)(o),
				id: (0, r.validateType)("Identifier"),
				typeParameters: (0, r.validateOptionalType)("TSTypeParameterDeclaration"),
				extends: (0, r.validateOptional)((0, r.arrayOfType)("TSExpressionWithTypeArguments")),
				body: (0, r.validateType)("TSInterfaceBody")
			}
		}), (0, r.default)("TSInterfaceBody", {
			visitor: ["body"],
			fields: {
				body: (0, r.validateArrayOfType)("TSTypeElement")
			}
		}), (0, r.default)("TSTypeAliasDeclaration", {
			aliases: ["Statement", "Declaration"],
			visitor: ["id", "typeParameters", "typeAnnotation"],
			fields: {
				declare: (0, r.validateOptional)(o),
				id: (0, r.validateType)("Identifier"),
				typeParameters: (0, r.validateOptionalType)("TSTypeParameterDeclaration"),
				typeAnnotation: (0, r.validateType)("TSType")
			}
		}), (0, r.default)("TSAsExpression", {
			aliases: ["Expression"],
			visitor: ["expression", "typeAnnotation"],
			fields: {
				expression: (0, r.validateType)("Expression"),
				typeAnnotation: (0, r.validateType)("TSType")
			}
		}), (0, r.default)("TSTypeAssertion", {
			aliases: ["Expression"],
			visitor: ["typeAnnotation", "expression"],
			fields: {
				typeAnnotation: (0, r.validateType)("TSType"),
				expression: (0, r.validateType)("Expression")
			}
		}), (0, r.default)("TSEnumDeclaration", {
			aliases: ["Statement", "Declaration"],
			visitor: ["id", "members"],
			fields: {
				declare: (0, r.validateOptional)(o),
				const: (0, r.validateOptional)(o),
				id: (0, r.validateType)("Identifier"),
				members: (0, r.validateArrayOfType)("TSEnumMember"),
				initializer: (0, r.validateOptionalType)("Expression")
			}
		}), (0, r.default)("TSEnumMember", {
			visitor: ["id", "initializer"],
			fields: {
				id: (0, r.validateType)(["Identifier", "StringLiteral"]),
				initializer: (0, r.validateOptionalType)("Expression")
			}
		}), (0, r.default)("TSModuleDeclaration", {
			aliases: ["Statement", "Declaration"],
			visitor: ["id", "body"],
			fields: {
				declare: (0, r.validateOptional)(o),
				global: (0, r.validateOptional)(o),
				id: (0, r.validateType)(["Identifier", "StringLiteral"]),
				body: (0, r.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
			}
		}), (0, r.default)("TSModuleBlock", {
			aliases: ["Scopable", "Block", "BlockParent"],
			visitor: ["body"],
			fields: {
				body: (0, r.validateArrayOfType)("Statement")
			}
		}), (0, r.default)("TSImportType", {
			aliases: ["TSType"],
			visitor: ["argument", "qualifier", "typeParameters"],
			fields: {
				argument: (0, r.validateType)("StringLiteral"),
				qualifier: (0, r.validateOptionalType)("TSEntityName"),
				typeParameters: (0, r.validateOptionalType)("TSTypeParameterInstantiation")
			}
		}), (0, r.default)("TSImportEqualsDeclaration", {
			aliases: ["Statement"],
			visitor: ["id", "moduleReference"],
			fields: {
				isExport: (0, r.validate)(o),
				id: (0, r.validateType)("Identifier"),
				moduleReference: (0, r.validateType)(["TSEntityName", "TSExternalModuleReference"])
			}
		}), (0, r.default)("TSExternalModuleReference", {
			visitor: ["expression"],
			fields: {
				expression: (0, r.validateType)("StringLiteral")
			}
		}), (0, r.default)("TSNonNullExpression", {
			aliases: ["Expression"],
			visitor: ["expression"],
			fields: {
				expression: (0, r.validateType)("Expression")
			}
		}), (0, r.default)("TSExportAssignment", {
			aliases: ["Statement"],
			visitor: ["expression"],
			fields: {
				expression: (0, r.validateType)("Expression")
			}
		}), (0, r.default)("TSNamespaceExportDeclaration", {
			aliases: ["Statement"],
			visitor: ["id"],
			fields: {
				id: (0, r.validateType)("Identifier")
			}
		}), (0, r.default)("TSTypeAnnotation", {
			visitor: ["typeAnnotation"],
			fields: {
				typeAnnotation: {
					validate: (0, r.assertNodeType)("TSType")
				}
			}
		}), (0, r.default)("TSTypeParameterInstantiation", {
			visitor: ["params"],
			fields: {
				params: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("TSType")))
				}
			}
		}), (0, r.default)("TSTypeParameterDeclaration", {
			visitor: ["params"],
			fields: {
				params: {
					validate: (0, r.chain)((0, r.assertValueType)("array"), (0, r.assertEach)((0, r.assertNodeType)("TSTypeParameter")))
				}
			}
		}), (0, r.default)("TSTypeParameter", {
			visitor: ["constraint", "default"],
			fields: {
				name: {
					validate: (0, r.assertValueType)("string")
				},
				constraint: {
					validate: (0, r.assertNodeType)("TSType"),
					optional: !0
				},
				default: {
					validate: (0, r.assertNodeType)("TSType"),
					optional: !0
				}
			}
		})
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			if (!(0, r.default)(e)) {
				const t = e && e.type || JSON.stringify(e);
				throw new TypeError(`Not a valid node of type "${t}"`)
			}
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(78))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.assertArrayExpression = function (e, t = {}) {
			i("ArrayExpression", e, t)
		}, t.assertAssignmentExpression = function (e, t = {}) {
			i("AssignmentExpression", e, t)
		}, t.assertBinaryExpression = function (e, t = {}) {
			i("BinaryExpression", e, t)
		}, t.assertInterpreterDirective = function (e, t = {}) {
			i("InterpreterDirective", e, t)
		}, t.assertDirective = function (e, t = {}) {
			i("Directive", e, t)
		}, t.assertDirectiveLiteral = function (e, t = {}) {
			i("DirectiveLiteral", e, t)
		}, t.assertBlockStatement = function (e, t = {}) {
			i("BlockStatement", e, t)
		}, t.assertBreakStatement = function (e, t = {}) {
			i("BreakStatement", e, t)
		}, t.assertCallExpression = function (e, t = {}) {
			i("CallExpression", e, t)
		}, t.assertCatchClause = function (e, t = {}) {
			i("CatchClause", e, t)
		}, t.assertConditionalExpression = function (e, t = {}) {
			i("ConditionalExpression", e, t)
		}, t.assertContinueStatement = function (e, t = {}) {
			i("ContinueStatement", e, t)
		}, t.assertDebuggerStatement = function (e, t = {}) {
			i("DebuggerStatement", e, t)
		}, t.assertDoWhileStatement = function (e, t = {}) {
			i("DoWhileStatement", e, t)
		}, t.assertEmptyStatement = function (e, t = {}) {
			i("EmptyStatement", e, t)
		}, t.assertExpressionStatement = function (e, t = {}) {
			i("ExpressionStatement", e, t)
		}, t.assertFile = function (e, t = {}) {
			i("File", e, t)
		}, t.assertForInStatement = function (e, t = {}) {
			i("ForInStatement", e, t)
		}, t.assertForStatement = function (e, t = {}) {
			i("ForStatement", e, t)
		}, t.assertFunctionDeclaration = function (e, t = {}) {
			i("FunctionDeclaration", e, t)
		}, t.assertFunctionExpression = function (e, t = {}) {
			i("FunctionExpression", e, t)
		}, t.assertIdentifier = function (e, t = {}) {
			i("Identifier", e, t)
		}, t.assertIfStatement = function (e, t = {}) {
			i("IfStatement", e, t)
		}, t.assertLabeledStatement = function (e, t = {}) {
			i("LabeledStatement", e, t)
		}, t.assertStringLiteral = function (e, t = {}) {
			i("StringLiteral", e, t)
		}, t.assertNumericLiteral = function (e, t = {}) {
			i("NumericLiteral", e, t)
		}, t.assertNullLiteral = function (e, t = {}) {
			i("NullLiteral", e, t)
		}, t.assertBooleanLiteral = function (e, t = {}) {
			i("BooleanLiteral", e, t)
		}, t.assertRegExpLiteral = function (e, t = {}) {
			i("RegExpLiteral", e, t)
		}, t.assertLogicalExpression = function (e, t = {}) {
			i("LogicalExpression", e, t)
		}, t.assertMemberExpression = function (e, t = {}) {
			i("MemberExpression", e, t)
		}, t.assertNewExpression = function (e, t = {}) {
			i("NewExpression", e, t)
		}, t.assertProgram = function (e, t = {}) {
			i("Program", e, t)
		}, t.assertObjectExpression = function (e, t = {}) {
			i("ObjectExpression", e, t)
		}, t.assertObjectMethod = function (e, t = {}) {
			i("ObjectMethod", e, t)
		}, t.assertObjectProperty = function (e, t = {}) {
			i("ObjectProperty", e, t)
		}, t.assertRestElement = function (e, t = {}) {
			i("RestElement", e, t)
		}, t.assertReturnStatement = function (e, t = {}) {
			i("ReturnStatement", e, t)
		}, t.assertSequenceExpression = function (e, t = {}) {
			i("SequenceExpression", e, t)
		}, t.assertParenthesizedExpression = function (e, t = {}) {
			i("ParenthesizedExpression", e, t)
		}, t.assertSwitchCase = function (e, t = {}) {
			i("SwitchCase", e, t)
		}, t.assertSwitchStatement = function (e, t = {}) {
			i("SwitchStatement", e, t)
		}, t.assertThisExpression = function (e, t = {}) {
			i("ThisExpression", e, t)
		}, t.assertThrowStatement = function (e, t = {}) {
			i("ThrowStatement", e, t)
		}, t.assertTryStatement = function (e, t = {}) {
			i("TryStatement", e, t)
		}, t.assertUnaryExpression = function (e, t = {}) {
			i("UnaryExpression", e, t)
		}, t.assertUpdateExpression = function (e, t = {}) {
			i("UpdateExpression", e, t)
		}, t.assertVariableDeclaration = function (e, t = {}) {
			i("VariableDeclaration", e, t)
		}, t.assertVariableDeclarator = function (e, t = {}) {
			i("VariableDeclarator", e, t)
		}, t.assertWhileStatement = function (e, t = {}) {
			i("WhileStatement", e, t)
		}, t.assertWithStatement = function (e, t = {}) {
			i("WithStatement", e, t)
		}, t.assertAssignmentPattern = function (e, t = {}) {
			i("AssignmentPattern", e, t)
		}, t.assertArrayPattern = function (e, t = {}) {
			i("ArrayPattern", e, t)
		}, t.assertArrowFunctionExpression = function (e, t = {}) {
			i("ArrowFunctionExpression", e, t)
		}, t.assertClassBody = function (e, t = {}) {
			i("ClassBody", e, t)
		}, t.assertClassDeclaration = function (e, t = {}) {
			i("ClassDeclaration", e, t)
		}, t.assertClassExpression = function (e, t = {}) {
			i("ClassExpression", e, t)
		}, t.assertExportAllDeclaration = function (e, t = {}) {
			i("ExportAllDeclaration", e, t)
		}, t.assertExportDefaultDeclaration = function (e, t = {}) {
			i("ExportDefaultDeclaration", e, t)
		}, t.assertExportNamedDeclaration = function (e, t = {}) {
			i("ExportNamedDeclaration", e, t)
		}, t.assertExportSpecifier = function (e, t = {}) {
			i("ExportSpecifier", e, t)
		}, t.assertForOfStatement = function (e, t = {}) {
			i("ForOfStatement", e, t)
		}, t.assertImportDeclaration = function (e, t = {}) {
			i("ImportDeclaration", e, t)
		}, t.assertImportDefaultSpecifier = function (e, t = {}) {
			i("ImportDefaultSpecifier", e, t)
		}, t.assertImportNamespaceSpecifier = function (e, t = {}) {
			i("ImportNamespaceSpecifier", e, t)
		}, t.assertImportSpecifier = function (e, t = {}) {
			i("ImportSpecifier", e, t)
		}, t.assertMetaProperty = function (e, t = {}) {
			i("MetaProperty", e, t)
		}, t.assertClassMethod = function (e, t = {}) {
			i("ClassMethod", e, t)
		}, t.assertObjectPattern = function (e, t = {}) {
			i("ObjectPattern", e, t)
		}, t.assertSpreadElement = function (e, t = {}) {
			i("SpreadElement", e, t)
		}, t.assertSuper = function (e, t = {}) {
			i("Super", e, t)
		}, t.assertTaggedTemplateExpression = function (e, t = {}) {
			i("TaggedTemplateExpression", e, t)
		}, t.assertTemplateElement = function (e, t = {}) {
			i("TemplateElement", e, t)
		}, t.assertTemplateLiteral = function (e, t = {}) {
			i("TemplateLiteral", e, t)
		}, t.assertYieldExpression = function (e, t = {}) {
			i("YieldExpression", e, t)
		}, t.assertAnyTypeAnnotation = function (e, t = {}) {
			i("AnyTypeAnnotation", e, t)
		}, t.assertArrayTypeAnnotation = function (e, t = {}) {
			i("ArrayTypeAnnotation", e, t)
		}, t.assertBooleanTypeAnnotation = function (e, t = {}) {
			i("BooleanTypeAnnotation", e, t)
		}, t.assertBooleanLiteralTypeAnnotation = function (e, t = {}) {
			i("BooleanLiteralTypeAnnotation", e, t)
		}, t.assertNullLiteralTypeAnnotation = function (e, t = {}) {
			i("NullLiteralTypeAnnotation", e, t)
		}, t.assertClassImplements = function (e, t = {}) {
			i("ClassImplements", e, t)
		}, t.assertDeclareClass = function (e, t = {}) {
			i("DeclareClass", e, t)
		}, t.assertDeclareFunction = function (e, t = {}) {
			i("DeclareFunction", e, t)
		}, t.assertDeclareInterface = function (e, t = {}) {
			i("DeclareInterface", e, t)
		}, t.assertDeclareModule = function (e, t = {}) {
			i("DeclareModule", e, t)
		}, t.assertDeclareModuleExports = function (e, t = {}) {
			i("DeclareModuleExports", e, t)
		}, t.assertDeclareTypeAlias = function (e, t = {}) {
			i("DeclareTypeAlias", e, t)
		}, t.assertDeclareOpaqueType = function (e, t = {}) {
			i("DeclareOpaqueType", e, t)
		}, t.assertDeclareVariable = function (e, t = {}) {
			i("DeclareVariable", e, t)
		}, t.assertDeclareExportDeclaration = function (e, t = {}) {
			i("DeclareExportDeclaration", e, t)
		}, t.assertDeclareExportAllDeclaration = function (e, t = {}) {
			i("DeclareExportAllDeclaration", e, t)
		}, t.assertDeclaredPredicate = function (e, t = {}) {
			i("DeclaredPredicate", e, t)
		}, t.assertExistsTypeAnnotation = function (e, t = {}) {
			i("ExistsTypeAnnotation", e, t)
		}, t.assertFunctionTypeAnnotation = function (e, t = {}) {
			i("FunctionTypeAnnotation", e, t)
		}, t.assertFunctionTypeParam = function (e, t = {}) {
			i("FunctionTypeParam", e, t)
		}, t.assertGenericTypeAnnotation = function (e, t = {}) {
			i("GenericTypeAnnotation", e, t)
		}, t.assertInferredPredicate = function (e, t = {}) {
			i("InferredPredicate", e, t)
		}, t.assertInterfaceExtends = function (e, t = {}) {
			i("InterfaceExtends", e, t)
		}, t.assertInterfaceDeclaration = function (e, t = {}) {
			i("InterfaceDeclaration", e, t)
		}, t.assertInterfaceTypeAnnotation = function (e, t = {}) {
			i("InterfaceTypeAnnotation", e, t)
		}, t.assertIntersectionTypeAnnotation = function (e, t = {}) {
			i("IntersectionTypeAnnotation", e, t)
		}, t.assertMixedTypeAnnotation = function (e, t = {}) {
			i("MixedTypeAnnotation", e, t)
		}, t.assertEmptyTypeAnnotation = function (e, t = {}) {
			i("EmptyTypeAnnotation", e, t)
		}, t.assertNullableTypeAnnotation = function (e, t = {}) {
			i("NullableTypeAnnotation", e, t)
		}, t.assertNumberLiteralTypeAnnotation = function (e, t = {}) {
			i("NumberLiteralTypeAnnotation", e, t)
		}, t.assertNumberTypeAnnotation = function (e, t = {}) {
			i("NumberTypeAnnotation", e, t)
		}, t.assertObjectTypeAnnotation = function (e, t = {}) {
			i("ObjectTypeAnnotation", e, t)
		}, t.assertObjectTypeInternalSlot = function (e, t = {}) {
			i("ObjectTypeInternalSlot", e, t)
		}, t.assertObjectTypeCallProperty = function (e, t = {}) {
			i("ObjectTypeCallProperty", e, t)
		}, t.assertObjectTypeIndexer = function (e, t = {}) {
			i("ObjectTypeIndexer", e, t)
		}, t.assertObjectTypeProperty = function (e, t = {}) {
			i("ObjectTypeProperty", e, t)
		}, t.assertObjectTypeSpreadProperty = function (e, t = {}) {
			i("ObjectTypeSpreadProperty", e, t)
		}, t.assertOpaqueType = function (e, t = {}) {
			i("OpaqueType", e, t)
		}, t.assertQualifiedTypeIdentifier = function (e, t = {}) {
			i("QualifiedTypeIdentifier", e, t)
		}, t.assertStringLiteralTypeAnnotation = function (e, t = {}) {
			i("StringLiteralTypeAnnotation", e, t)
		}, t.assertStringTypeAnnotation = function (e, t = {}) {
			i("StringTypeAnnotation", e, t)
		}, t.assertThisTypeAnnotation = function (e, t = {}) {
			i("ThisTypeAnnotation", e, t)
		}, t.assertTupleTypeAnnotation = function (e, t = {}) {
			i("TupleTypeAnnotation", e, t)
		}, t.assertTypeofTypeAnnotation = function (e, t = {}) {
			i("TypeofTypeAnnotation", e, t)
		}, t.assertTypeAlias = function (e, t = {}) {
			i("TypeAlias", e, t)
		}, t.assertTypeAnnotation = function (e, t = {}) {
			i("TypeAnnotation", e, t)
		}, t.assertTypeCastExpression = function (e, t = {}) {
			i("TypeCastExpression", e, t)
		}, t.assertTypeParameter = function (e, t = {}) {
			i("TypeParameter", e, t)
		}, t.assertTypeParameterDeclaration = function (e, t = {}) {
			i("TypeParameterDeclaration", e, t)
		}, t.assertTypeParameterInstantiation = function (e, t = {}) {
			i("TypeParameterInstantiation", e, t)
		}, t.assertUnionTypeAnnotation = function (e, t = {}) {
			i("UnionTypeAnnotation", e, t)
		}, t.assertVariance = function (e, t = {}) {
			i("Variance", e, t)
		}, t.assertVoidTypeAnnotation = function (e, t = {}) {
			i("VoidTypeAnnotation", e, t)
		}, t.assertJSXAttribute = function (e, t = {}) {
			i("JSXAttribute", e, t)
		}, t.assertJSXClosingElement = function (e, t = {}) {
			i("JSXClosingElement", e, t)
		}, t.assertJSXElement = function (e, t = {}) {
			i("JSXElement", e, t)
		}, t.assertJSXEmptyExpression = function (e, t = {}) {
			i("JSXEmptyExpression", e, t)
		}, t.assertJSXExpressionContainer = function (e, t = {}) {
			i("JSXExpressionContainer", e, t)
		}, t.assertJSXSpreadChild = function (e, t = {}) {
			i("JSXSpreadChild", e, t)
		}, t.assertJSXIdentifier = function (e, t = {}) {
			i("JSXIdentifier", e, t)
		}, t.assertJSXMemberExpression = function (e, t = {}) {
			i("JSXMemberExpression", e, t)
		}, t.assertJSXNamespacedName = function (e, t = {}) {
			i("JSXNamespacedName", e, t)
		}, t.assertJSXOpeningElement = function (e, t = {}) {
			i("JSXOpeningElement", e, t)
		}, t.assertJSXSpreadAttribute = function (e, t = {}) {
			i("JSXSpreadAttribute", e, t)
		}, t.assertJSXText = function (e, t = {}) {
			i("JSXText", e, t)
		}, t.assertJSXFragment = function (e, t = {}) {
			i("JSXFragment", e, t)
		}, t.assertJSXOpeningFragment = function (e, t = {}) {
			i("JSXOpeningFragment", e, t)
		}, t.assertJSXClosingFragment = function (e, t = {}) {
			i("JSXClosingFragment", e, t)
		}, t.assertNoop = function (e, t = {}) {
			i("Noop", e, t)
		}, t.assertPlaceholder = function (e, t = {}) {
			i("Placeholder", e, t)
		}, t.assertArgumentPlaceholder = function (e, t = {}) {
			i("ArgumentPlaceholder", e, t)
		}, t.assertAwaitExpression = function (e, t = {}) {
			i("AwaitExpression", e, t)
		}, t.assertBindExpression = function (e, t = {}) {
			i("BindExpression", e, t)
		}, t.assertClassProperty = function (e, t = {}) {
			i("ClassProperty", e, t)
		}, t.assertOptionalMemberExpression = function (e, t = {}) {
			i("OptionalMemberExpression", e, t)
		}, t.assertPipelineTopicExpression = function (e, t = {}) {
			i("PipelineTopicExpression", e, t)
		}, t.assertPipelineBareFunction = function (e, t = {}) {
			i("PipelineBareFunction", e, t)
		}, t.assertPipelinePrimaryTopicReference = function (e, t = {}) {
			i("PipelinePrimaryTopicReference", e, t)
		}, t.assertOptionalCallExpression = function (e, t = {}) {
			i("OptionalCallExpression", e, t)
		}, t.assertClassPrivateProperty = function (e, t = {}) {
			i("ClassPrivateProperty", e, t)
		}, t.assertClassPrivateMethod = function (e, t = {}) {
			i("ClassPrivateMethod", e, t)
		}, t.assertImport = function (e, t = {}) {
			i("Import", e, t)
		}, t.assertDecorator = function (e, t = {}) {
			i("Decorator", e, t)
		}, t.assertDoExpression = function (e, t = {}) {
			i("DoExpression", e, t)
		}, t.assertExportDefaultSpecifier = function (e, t = {}) {
			i("ExportDefaultSpecifier", e, t)
		}, t.assertExportNamespaceSpecifier = function (e, t = {}) {
			i("ExportNamespaceSpecifier", e, t)
		}, t.assertPrivateName = function (e, t = {}) {
			i("PrivateName", e, t)
		}, t.assertBigIntLiteral = function (e, t = {}) {
			i("BigIntLiteral", e, t)
		}, t.assertTSParameterProperty = function (e, t = {}) {
			i("TSParameterProperty", e, t)
		}, t.assertTSDeclareFunction = function (e, t = {}) {
			i("TSDeclareFunction", e, t)
		}, t.assertTSDeclareMethod = function (e, t = {}) {
			i("TSDeclareMethod", e, t)
		}, t.assertTSQualifiedName = function (e, t = {}) {
			i("TSQualifiedName", e, t)
		}, t.assertTSCallSignatureDeclaration = function (e, t = {}) {
			i("TSCallSignatureDeclaration", e, t)
		}, t.assertTSConstructSignatureDeclaration = function (e, t = {}) {
			i("TSConstructSignatureDeclaration", e, t)
		}, t.assertTSPropertySignature = function (e, t = {}) {
			i("TSPropertySignature", e, t)
		}, t.assertTSMethodSignature = function (e, t = {}) {
			i("TSMethodSignature", e, t)
		}, t.assertTSIndexSignature = function (e, t = {}) {
			i("TSIndexSignature", e, t)
		}, t.assertTSAnyKeyword = function (e, t = {}) {
			i("TSAnyKeyword", e, t)
		}, t.assertTSUnknownKeyword = function (e, t = {}) {
			i("TSUnknownKeyword", e, t)
		}, t.assertTSNumberKeyword = function (e, t = {}) {
			i("TSNumberKeyword", e, t)
		}, t.assertTSObjectKeyword = function (e, t = {}) {
			i("TSObjectKeyword", e, t)
		}, t.assertTSBooleanKeyword = function (e, t = {}) {
			i("TSBooleanKeyword", e, t)
		}, t.assertTSStringKeyword = function (e, t = {}) {
			i("TSStringKeyword", e, t)
		}, t.assertTSSymbolKeyword = function (e, t = {}) {
			i("TSSymbolKeyword", e, t)
		}, t.assertTSVoidKeyword = function (e, t = {}) {
			i("TSVoidKeyword", e, t)
		}, t.assertTSUndefinedKeyword = function (e, t = {}) {
			i("TSUndefinedKeyword", e, t)
		}, t.assertTSNullKeyword = function (e, t = {}) {
			i("TSNullKeyword", e, t)
		}, t.assertTSNeverKeyword = function (e, t = {}) {
			i("TSNeverKeyword", e, t)
		}, t.assertTSThisType = function (e, t = {}) {
			i("TSThisType", e, t)
		}, t.assertTSFunctionType = function (e, t = {}) {
			i("TSFunctionType", e, t)
		}, t.assertTSConstructorType = function (e, t = {}) {
			i("TSConstructorType", e, t)
		}, t.assertTSTypeReference = function (e, t = {}) {
			i("TSTypeReference", e, t)
		}, t.assertTSTypePredicate = function (e, t = {}) {
			i("TSTypePredicate", e, t)
		}, t.assertTSTypeQuery = function (e, t = {}) {
			i("TSTypeQuery", e, t)
		}, t.assertTSTypeLiteral = function (e, t = {}) {
			i("TSTypeLiteral", e, t)
		}, t.assertTSArrayType = function (e, t = {}) {
			i("TSArrayType", e, t)
		}, t.assertTSTupleType = function (e, t = {}) {
			i("TSTupleType", e, t)
		}, t.assertTSOptionalType = function (e, t = {}) {
			i("TSOptionalType", e, t)
		}, t.assertTSRestType = function (e, t = {}) {
			i("TSRestType", e, t)
		}, t.assertTSUnionType = function (e, t = {}) {
			i("TSUnionType", e, t)
		}, t.assertTSIntersectionType = function (e, t = {}) {
			i("TSIntersectionType", e, t)
		}, t.assertTSConditionalType = function (e, t = {}) {
			i("TSConditionalType", e, t)
		}, t.assertTSInferType = function (e, t = {}) {
			i("TSInferType", e, t)
		}, t.assertTSParenthesizedType = function (e, t = {}) {
			i("TSParenthesizedType", e, t)
		}, t.assertTSTypeOperator = function (e, t = {}) {
			i("TSTypeOperator", e, t)
		}, t.assertTSIndexedAccessType = function (e, t = {}) {
			i("TSIndexedAccessType", e, t)
		}, t.assertTSMappedType = function (e, t = {}) {
			i("TSMappedType", e, t)
		}, t.assertTSLiteralType = function (e, t = {}) {
			i("TSLiteralType", e, t)
		}, t.assertTSExpressionWithTypeArguments = function (e, t = {}) {
			i("TSExpressionWithTypeArguments", e, t)
		}, t.assertTSInterfaceDeclaration = function (e, t = {}) {
			i("TSInterfaceDeclaration", e, t)
		}, t.assertTSInterfaceBody = function (e, t = {}) {
			i("TSInterfaceBody", e, t)
		}, t.assertTSTypeAliasDeclaration = function (e, t = {}) {
			i("TSTypeAliasDeclaration", e, t)
		}, t.assertTSAsExpression = function (e, t = {}) {
			i("TSAsExpression", e, t)
		}, t.assertTSTypeAssertion = function (e, t = {}) {
			i("TSTypeAssertion", e, t)
		}, t.assertTSEnumDeclaration = function (e, t = {}) {
			i("TSEnumDeclaration", e, t)
		}, t.assertTSEnumMember = function (e, t = {}) {
			i("TSEnumMember", e, t)
		}, t.assertTSModuleDeclaration = function (e, t = {}) {
			i("TSModuleDeclaration", e, t)
		}, t.assertTSModuleBlock = function (e, t = {}) {
			i("TSModuleBlock", e, t)
		}, t.assertTSImportType = function (e, t = {}) {
			i("TSImportType", e, t)
		}, t.assertTSImportEqualsDeclaration = function (e, t = {}) {
			i("TSImportEqualsDeclaration", e, t)
		}, t.assertTSExternalModuleReference = function (e, t = {}) {
			i("TSExternalModuleReference", e, t)
		}, t.assertTSNonNullExpression = function (e, t = {}) {
			i("TSNonNullExpression", e, t)
		}, t.assertTSExportAssignment = function (e, t = {}) {
			i("TSExportAssignment", e, t)
		}, t.assertTSNamespaceExportDeclaration = function (e, t = {}) {
			i("TSNamespaceExportDeclaration", e, t)
		}, t.assertTSTypeAnnotation = function (e, t = {}) {
			i("TSTypeAnnotation", e, t)
		}, t.assertTSTypeParameterInstantiation = function (e, t = {}) {
			i("TSTypeParameterInstantiation", e, t)
		}, t.assertTSTypeParameterDeclaration = function (e, t = {}) {
			i("TSTypeParameterDeclaration", e, t)
		}, t.assertTSTypeParameter = function (e, t = {}) {
			i("TSTypeParameter", e, t)
		}, t.assertExpression = function (e, t = {}) {
			i("Expression", e, t)
		}, t.assertBinary = function (e, t = {}) {
			i("Binary", e, t)
		}, t.assertScopable = function (e, t = {}) {
			i("Scopable", e, t)
		}, t.assertBlockParent = function (e, t = {}) {
			i("BlockParent", e, t)
		}, t.assertBlock = function (e, t = {}) {
			i("Block", e, t)
		}, t.assertStatement = function (e, t = {}) {
			i("Statement", e, t)
		}, t.assertTerminatorless = function (e, t = {}) {
			i("Terminatorless", e, t)
		}, t.assertCompletionStatement = function (e, t = {}) {
			i("CompletionStatement", e, t)
		}, t.assertConditional = function (e, t = {}) {
			i("Conditional", e, t)
		}, t.assertLoop = function (e, t = {}) {
			i("Loop", e, t)
		}, t.assertWhile = function (e, t = {}) {
			i("While", e, t)
		}, t.assertExpressionWrapper = function (e, t = {}) {
			i("ExpressionWrapper", e, t)
		}, t.assertFor = function (e, t = {}) {
			i("For", e, t)
		}, t.assertForXStatement = function (e, t = {}) {
			i("ForXStatement", e, t)
		}, t.assertFunction = function (e, t = {}) {
			i("Function", e, t)
		}, t.assertFunctionParent = function (e, t = {}) {
			i("FunctionParent", e, t)
		}, t.assertPureish = function (e, t = {}) {
			i("Pureish", e, t)
		}, t.assertDeclaration = function (e, t = {}) {
			i("Declaration", e, t)
		}, t.assertPatternLike = function (e, t = {}) {
			i("PatternLike", e, t)
		}, t.assertLVal = function (e, t = {}) {
			i("LVal", e, t)
		}, t.assertTSEntityName = function (e, t = {}) {
			i("TSEntityName", e, t)
		}, t.assertLiteral = function (e, t = {}) {
			i("Literal", e, t)
		}, t.assertImmutable = function (e, t = {}) {
			i("Immutable", e, t)
		}, t.assertUserWhitespacable = function (e, t = {}) {
			i("UserWhitespacable", e, t)
		}, t.assertMethod = function (e, t = {}) {
			i("Method", e, t)
		}, t.assertObjectMember = function (e, t = {}) {
			i("ObjectMember", e, t)
		}, t.assertProperty = function (e, t = {}) {
			i("Property", e, t)
		}, t.assertUnaryLike = function (e, t = {}) {
			i("UnaryLike", e, t)
		}, t.assertPattern = function (e, t = {}) {
			i("Pattern", e, t)
		}, t.assertClass = function (e, t = {}) {
			i("Class", e, t)
		}, t.assertModuleDeclaration = function (e, t = {}) {
			i("ModuleDeclaration", e, t)
		}, t.assertExportDeclaration = function (e, t = {}) {
			i("ExportDeclaration", e, t)
		}, t.assertModuleSpecifier = function (e, t = {}) {
			i("ModuleSpecifier", e, t)
		}, t.assertFlow = function (e, t = {}) {
			i("Flow", e, t)
		}, t.assertFlowType = function (e, t = {}) {
			i("FlowType", e, t)
		}, t.assertFlowBaseAnnotation = function (e, t = {}) {
			i("FlowBaseAnnotation", e, t)
		}, t.assertFlowDeclaration = function (e, t = {}) {
			i("FlowDeclaration", e, t)
		}, t.assertFlowPredicate = function (e, t = {}) {
			i("FlowPredicate", e, t)
		}, t.assertJSX = function (e, t = {}) {
			i("JSX", e, t)
		}, t.assertPrivate = function (e, t = {}) {
			i("Private", e, t)
		}, t.assertTSTypeElement = function (e, t = {}) {
			i("TSTypeElement", e, t)
		}, t.assertTSType = function (e, t = {}) {
			i("TSType", e, t)
		}, t.assertNumberLiteral = function (e, t) {
			console.trace("The node type NumberLiteral has been renamed to NumericLiteral"), i("NumberLiteral", e, t)
		}, t.assertRegexLiteral = function (e, t) {
			console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"), i("RegexLiteral", e, t)
		}, t.assertRestProperty = function (e, t) {
			console.trace("The node type RestProperty has been renamed to RestElement"), i("RestProperty", e, t)
		}, t.assertSpreadProperty = function (e, t) {
			console.trace("The node type SpreadProperty has been renamed to SpreadElement"), i("SpreadProperty", e, t)
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(43));

		function i(e, t, n) {
			if (!(0, r.default)(e, t, n)) throw new Error(`Expected type "${e}" with option ${JSON.stringify(n)}, but instead got "${t.type}".`)
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			if ("string" === e) return (0, r.stringTypeAnnotation)();
			if ("number" === e) return (0, r.numberTypeAnnotation)();
			if ("undefined" === e) return (0, r.voidTypeAnnotation)();
			if ("boolean" === e) return (0, r.booleanTypeAnnotation)();
			if ("function" === e) return (0, r.genericTypeAnnotation)((0, r.identifier)("Function"));
			if ("object" === e) return (0, r.genericTypeAnnotation)((0, r.identifier)("Object"));
			if ("symbol" === e) return (0, r.genericTypeAnnotation)((0, r.identifier)("Symbol"));
			throw new Error("Invalid typeof value")
		};
		var r = n(4)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			const t = (0, i.default)(e);
			return 1 === t.length ? t[0] : (0, r.unionTypeAnnotation)(t)
		};
		var r = n(4),
			i = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(79))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			return (0, r.default)(e)
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(16))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			const t = (0, r.default)(e);
			return t.loc = null, t
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(80))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t, n, i) {
			return (0, r.default)(e, t, [{
				type: i ? "CommentLine" : "CommentBlock",
				value: n
			}])
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(81))
	}, function (e, t, n) {
		var r = n(201);
		e.exports = function (e) {
			return e && e.length ? r(e) : []
		}
	}, function (e, t, n) {
		var r = n(202),
			i = n(205),
			s = n(209),
			o = n(210),
			a = n(211),
			u = n(84),
			c = 200;
		e.exports = function (e, t, n) {
			var l = -1,
				p = i,
				h = e.length,
				f = !0,
				d = [],
				y = d;
			if (n) f = !1, p = s;
			else if (h >= c) {
				var m = t ? null : a(e);
				if (m) return u(m);
				f = !1, p = o, y = new r
			} else y = t ? [] : d;
			e: for (; ++l < h;) {
				var g = e[l],
					E = t ? t(g) : g;
				if (g = n || 0 !== g ? g : 0, f && E == E) {
					for (var T = y.length; T--;)
						if (y[T] === E) continue e;
					t && y.push(E), d.push(g)
				} else p(y, E, n) || (y !== d && y.push(E), d.push(g))
			}
			return d
		}
	}, function (e, t, n) {
		var r = n(60),
			i = n(203),
			s = n(204);

		function o(e) {
			var t = -1,
				n = null == e ? 0 : e.length;
			for (this.__data__ = new r; ++t < n;) this.add(e[t])
		}
		o.prototype.add = o.prototype.push = i, o.prototype.has = s, e.exports = o
	}, function (e, t) {
		var n = "__lodash_hash_undefined__";
		e.exports = function (e) {
			return this.__data__.set(e, n), this
		}
	}, function (e, t) {
		e.exports = function (e) {
			return this.__data__.has(e)
		}
	}, function (e, t, n) {
		var r = n(83);
		e.exports = function (e, t) {
			return !(null == e || !e.length) && r(e, t, 0) > -1
		}
	}, function (e, t) {
		e.exports = function (e, t, n, r) {
			for (var i = e.length, s = n + (r ? 1 : -1); r ? s-- : ++s < i;)
				if (t(e[s], s, e)) return s;
			return -1
		}
	}, function (e, t) {
		e.exports = function (e) {
			return e != e
		}
	}, function (e, t) {
		e.exports = function (e, t, n) {
			for (var r = n - 1, i = e.length; ++r < i;)
				if (e[r] === t) return r;
			return -1
		}
	}, function (e, t) {
		e.exports = function (e, t, n) {
			for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
				if (n(t, e[r])) return !0;
			return !1
		}
	}, function (e, t) {
		e.exports = function (e, t) {
			return e.has(t)
		}
	}, function (e, t, n) {
		var r = n(73),
			i = n(212),
			s = n(84),
			o = r && 1 / s(new r([, -0]))[1] == 1 / 0 ? function (e) {
				return new r(e)
			} : i;
		e.exports = o
	}, function (e, t) {
		e.exports = function () {}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			return r.COMMENT_KEYS.forEach(t => {
				e[t] = null
			}), e
		};
		var r = n(11)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.TSTYPE_TYPES = t.TSTYPEELEMENT_TYPES = t.PRIVATE_TYPES = t.JSX_TYPES = t.FLOWPREDICATE_TYPES = t.FLOWDECLARATION_TYPES = t.FLOWBASEANNOTATION_TYPES = t.FLOWTYPE_TYPES = t.FLOW_TYPES = t.MODULESPECIFIER_TYPES = t.EXPORTDECLARATION_TYPES = t.MODULEDECLARATION_TYPES = t.CLASS_TYPES = t.PATTERN_TYPES = t.UNARYLIKE_TYPES = t.PROPERTY_TYPES = t.OBJECTMEMBER_TYPES = t.METHOD_TYPES = t.USERWHITESPACABLE_TYPES = t.IMMUTABLE_TYPES = t.LITERAL_TYPES = t.TSENTITYNAME_TYPES = t.LVAL_TYPES = t.PATTERNLIKE_TYPES = t.DECLARATION_TYPES = t.PUREISH_TYPES = t.FUNCTIONPARENT_TYPES = t.FUNCTION_TYPES = t.FORXSTATEMENT_TYPES = t.FOR_TYPES = t.EXPRESSIONWRAPPER_TYPES = t.WHILE_TYPES = t.LOOP_TYPES = t.CONDITIONAL_TYPES = t.COMPLETIONSTATEMENT_TYPES = t.TERMINATORLESS_TYPES = t.STATEMENT_TYPES = t.BLOCK_TYPES = t.BLOCKPARENT_TYPES = t.SCOPABLE_TYPES = t.BINARY_TYPES = t.EXPRESSION_TYPES = void 0;
		var r = n(3);
		const i = r.FLIPPED_ALIAS_KEYS.Expression;
		t.EXPRESSION_TYPES = i;
		const s = r.FLIPPED_ALIAS_KEYS.Binary;
		t.BINARY_TYPES = s;
		const o = r.FLIPPED_ALIAS_KEYS.Scopable;
		t.SCOPABLE_TYPES = o;
		const a = r.FLIPPED_ALIAS_KEYS.BlockParent;
		t.BLOCKPARENT_TYPES = a;
		const u = r.FLIPPED_ALIAS_KEYS.Block;
		t.BLOCK_TYPES = u;
		const c = r.FLIPPED_ALIAS_KEYS.Statement;
		t.STATEMENT_TYPES = c;
		const l = r.FLIPPED_ALIAS_KEYS.Terminatorless;
		t.TERMINATORLESS_TYPES = l;
		const p = r.FLIPPED_ALIAS_KEYS.CompletionStatement;
		t.COMPLETIONSTATEMENT_TYPES = p;
		const h = r.FLIPPED_ALIAS_KEYS.Conditional;
		t.CONDITIONAL_TYPES = h;
		const f = r.FLIPPED_ALIAS_KEYS.Loop;
		t.LOOP_TYPES = f;
		const d = r.FLIPPED_ALIAS_KEYS.While;
		t.WHILE_TYPES = d;
		const y = r.FLIPPED_ALIAS_KEYS.ExpressionWrapper;
		t.EXPRESSIONWRAPPER_TYPES = y;
		const m = r.FLIPPED_ALIAS_KEYS.For;
		t.FOR_TYPES = m;
		const g = r.FLIPPED_ALIAS_KEYS.ForXStatement;
		t.FORXSTATEMENT_TYPES = g;
		const E = r.FLIPPED_ALIAS_KEYS.Function;
		t.FUNCTION_TYPES = E;
		const T = r.FLIPPED_ALIAS_KEYS.FunctionParent;
		t.FUNCTIONPARENT_TYPES = T;
		const A = r.FLIPPED_ALIAS_KEYS.Pureish;
		t.PUREISH_TYPES = A;
		const S = r.FLIPPED_ALIAS_KEYS.Declaration;
		t.DECLARATION_TYPES = S;
		const b = r.FLIPPED_ALIAS_KEYS.PatternLike;
		t.PATTERNLIKE_TYPES = b;
		const x = r.FLIPPED_ALIAS_KEYS.LVal;
		t.LVAL_TYPES = x;
		const P = r.FLIPPED_ALIAS_KEYS.TSEntityName;
		t.TSENTITYNAME_TYPES = P;
		const v = r.FLIPPED_ALIAS_KEYS.Literal;
		t.LITERAL_TYPES = v;
		const D = r.FLIPPED_ALIAS_KEYS.Immutable;
		t.IMMUTABLE_TYPES = D;
		const C = r.FLIPPED_ALIAS_KEYS.UserWhitespacable;
		t.USERWHITESPACABLE_TYPES = C;
		const O = r.FLIPPED_ALIAS_KEYS.Method;
		t.METHOD_TYPES = O;
		const w = r.FLIPPED_ALIAS_KEYS.ObjectMember;
		t.OBJECTMEMBER_TYPES = w;
		const F = r.FLIPPED_ALIAS_KEYS.Property;
		t.PROPERTY_TYPES = F;
		const _ = r.FLIPPED_ALIAS_KEYS.UnaryLike;
		t.UNARYLIKE_TYPES = _;
		const N = r.FLIPPED_ALIAS_KEYS.Pattern;
		t.PATTERN_TYPES = N;
		const I = r.FLIPPED_ALIAS_KEYS.Class;
		t.CLASS_TYPES = I;
		const k = r.FLIPPED_ALIAS_KEYS.ModuleDeclaration;
		t.MODULEDECLARATION_TYPES = k;
		const B = r.FLIPPED_ALIAS_KEYS.ExportDeclaration;
		t.EXPORTDECLARATION_TYPES = B;
		const L = r.FLIPPED_ALIAS_KEYS.ModuleSpecifier;
		t.MODULESPECIFIER_TYPES = L;
		const M = r.FLIPPED_ALIAS_KEYS.Flow;
		t.FLOW_TYPES = M;
		const j = r.FLIPPED_ALIAS_KEYS.FlowType;
		t.FLOWTYPE_TYPES = j;
		const R = r.FLIPPED_ALIAS_KEYS.FlowBaseAnnotation;
		t.FLOWBASEANNOTATION_TYPES = R;
		const U = r.FLIPPED_ALIAS_KEYS.FlowDeclaration;
		t.FLOWDECLARATION_TYPES = U;
		const V = r.FLIPPED_ALIAS_KEYS.FlowPredicate;
		t.FLOWPREDICATE_TYPES = V;
		const X = r.FLIPPED_ALIAS_KEYS.JSX;
		t.JSX_TYPES = X;
		const W = r.FLIPPED_ALIAS_KEYS.Private;
		t.PRIVATE_TYPES = W;
		const Y = r.FLIPPED_ALIAS_KEYS.TSTypeElement;
		t.TSTYPEELEMENT_TYPES = Y;
		const K = r.FLIPPED_ALIAS_KEYS.TSType;
		t.TSTYPE_TYPES = K
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t = "body") {
			return e[t] = (0, r.default)(e[t], e)
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(88))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			"eval" !== (e = (0, r.default)(e)) && "arguments" !== e || (e = "_" + e);
			return e
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(89))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t = e.key || e.property) {
			!e.computed && (0, r.isIdentifier)(t) && (t = (0, i.stringLiteral)(t.name));
			return t
		};
		var r = n(2),
			i = n(4)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			(0, r.isExpressionStatement)(e) && (e = e.expression);
			if ((0, r.isExpression)(e)) return e;
			(0, r.isClass)(e) ? e.type = "ClassExpression": (0, r.isFunction)(e) && (e.type = "FunctionExpression");
			if (!(0, r.isExpression)(e)) throw new Error(`cannot turn ${e.type} to an expression`);
			return e
		};
		var r = n(2)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = a;
		var r = n(2),
			i = o(n(16)),
			s = o(n(90));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function a(e, t = e.key) {
			let n;
			return "method" === e.kind ? a.increment() + "" : (n = (0, r.isIdentifier)(t) ? t.name : (0, r.isStringLiteral)(t) ? JSON.stringify(t.value) : JSON.stringify((0, s.default)((0, i.default)(t))), e.computed && (n = `[${n}]`), e.static && (n = `static:${n}`), n)
		}
		a.uid = 0, a.increment = function () {
			return a.uid >= Number.MAX_SAFE_INTEGER ? a.uid = 0 : a.uid++
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			if (!e || !e.length) return;
			const n = [],
				i = (0, r.default)(e, t, n);
			if (!i) return;
			for (const e of n) t.push(e);
			return i
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(221))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function e(t, n, a) {
			const u = [];
			let c = !0;
			for (const l of t)
				if (c = !1, (0, i.isExpression)(l)) u.push(l);
				else if ((0, i.isExpressionStatement)(l)) u.push(l.expression);
			else if ((0, i.isVariableDeclaration)(l)) {
				if ("var" !== l.kind) return;
				for (const e of l.declarations) {
					const t = (0, r.default)(e);
					for (const e of Object.keys(t)) a.push({
						kind: l.kind,
						id: (0, o.default)(t[e])
					});
					e.init && u.push((0, s.assignmentExpression)("=", e.id, e.init))
				}
				c = !0
			} else if ((0, i.isIfStatement)(l)) {
				const t = l.consequent ? e([l.consequent], n, a) : n.buildUndefinedNode(),
					r = l.alternate ? e([l.alternate], n, a) : n.buildUndefinedNode();
				if (!t || !r) return;
				u.push((0, s.conditionalExpression)(l.test, t, r))
			} else if ((0, i.isBlockStatement)(l)) {
				const t = e(l.body, n, a);
				if (!t) return;
				u.push(t)
			} else {
				if (!(0, i.isEmptyStatement)(l)) return;
				c = !0
			}
			c && u.push(n.buildUndefinedNode());
			return 1 === u.length ? u[0] : (0, s.sequenceExpression)(u)
		};
		var r = a(n(30)),
			i = n(2),
			s = n(4),
			o = a(n(16));

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			if ((0, r.isStatement)(e)) return e;
			let n, s = !1;
			if ((0, r.isClass)(e)) s = !0, n = "ClassDeclaration";
			else if ((0, r.isFunction)(e)) s = !0, n = "FunctionDeclaration";
			else if ((0, r.isAssignmentExpression)(e)) return (0, i.expressionStatement)(e);
			s && !e.id && (n = !1);
			if (!n) {
				if (t) return !1;
				throw new Error(`cannot turn ${e.type} to a statement`)
			}
			return e.type = n, e
		};
		var r = n(2),
			i = n(4)
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = a(n(224));
			return r = function () {
				return e
			}, e
		}

		function i() {
			const e = a(n(225));
			return i = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function e(t) {
			if (void 0 === t) return (0, o.identifier)("undefined");
			if (!0 === t || !1 === t) return (0, o.booleanLiteral)(t);
			if (null === t) return (0, o.nullLiteral)();
			if ("string" == typeof t) return (0, o.stringLiteral)(t);
			if ("number" == typeof t) {
				let e;
				if (Number.isFinite(t)) e = (0, o.numericLiteral)(Math.abs(t));
				else {
					let n;
					n = Number.isNaN(t) ? (0, o.numericLiteral)(0) : (0, o.numericLiteral)(1), e = (0, o.binaryExpression)("/", n, (0, o.numericLiteral)(0))
				}
				return (t < 0 || Object.is(t, -0)) && (e = (0, o.unaryExpression)("-", e)), e
			}
			if ((0, i().default)(t)) {
				const e = t.source,
					n = t.toString().match(/\/([a-z]+|)$/)[1];
				return (0, o.regExpLiteral)(e, n)
			}
			if (Array.isArray(t)) return (0, o.arrayExpression)(t.map(e));
			if ((0, r().default)(t)) {
				const n = [];
				for (const r of Object.keys(t)) {
					let i;
					i = (0, s.default)(r) ? (0, o.identifier)(r) : (0, o.stringLiteral)(r), n.push((0, o.objectProperty)(i, e(t[r])))
				}
				return (0, o.objectExpression)(n)
			}
			throw new Error("don't know how to turn this value into a node")
		};
		var s = a(n(15)),
			o = n(4);

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
	}, function (e, t, n) {
		var r = n(8),
			i = n(39),
			s = n(6),
			o = "[object Object]",
			a = Function.prototype,
			u = Object.prototype,
			c = a.toString,
			l = u.hasOwnProperty,
			p = c.call(Object);
		e.exports = function (e) {
			if (!s(e) || r(e) != o) return !1;
			var t = i(e);
			if (null === t) return !0;
			var n = l.call(t, "constructor") && t.constructor;
			return "function" == typeof n && n instanceof n && c.call(n) == p
		}
	}, function (e, t, n) {
		var r = n(226),
			i = n(27),
			s = n(28),
			o = s && s.isRegExp,
			a = o ? i(o) : r;
		e.exports = a
	}, function (e, t, n) {
		var r = n(8),
			i = n(6),
			s = "[object RegExp]";
		e.exports = function (e) {
			return i(e) && r(e) == s
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t, n = !1) {
			return e.object = (0, r.memberExpression)(e.object, e.property, e.computed), e.property = t, e.computed = !!n, e
		};
		var r = n(4)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			if (!e || !t) return e;
			for (const n of r.INHERIT_KEYS.optional) null == e[n] && (e[n] = t[n]);
			for (const n of Object.keys(t)) "_" === n[0] && "__clone" !== n && (e[n] = t[n]);
			for (const n of r.INHERIT_KEYS.force) e[n] = t[n];
			return (0, i.default)(e, t), e
		};
		var r = n(11),
			i = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(86))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			return e.object = (0, r.memberExpression)(t, e.object), e
		};
		var r = n(4)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			return (0, r.default)(e, t, !0)
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(30))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t, n) {
			"function" == typeof t && (t = {
				enter: t
			});
			const {
				enter: i,
				exit: s
			} = t;
			! function e(t, n, i, s, o) {
				const a = r.VISITOR_KEYS[t.type];
				if (!a) return;
				n && n(t, o, s);
				for (const r of a) {
					const a = t[r];
					if (Array.isArray(a))
						for (let u = 0; u < a.length; u++) {
							const c = a[u];
							c && (o.push({
								node: t,
								key: r,
								index: u
							}), e(c, n, i, s, o), o.pop())
						} else a && (o.push({
							node: t,
							key: r
						}), e(a, n, i, s, o), o.pop())
				}
				i && i(t, o, s)
			}(e, i, s, n, [])
		};
		var r = n(3)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t, n) {
			if (n && "Identifier" === e.type && "ObjectProperty" === t.type && "ObjectExpression" === n.type) return !1;
			const i = r.default.keys[t.type];
			if (i)
				for (let n = 0; n < i.length; n++) {
					const r = i[n],
						s = t[r];
					if (Array.isArray(s)) {
						if (s.indexOf(e) >= 0) return !0
					} else if (s === e) return !0
				}
			return !1
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(30))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			return (0, r.isFunctionDeclaration)(e) || (0, r.isClassDeclaration)(e) || (0, i.default)(e)
		};
		var r = n(2),
			i = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(93))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			if ((0, r.default)(e.type, "Immutable")) return !0;
			if ((0, i.isIdentifier)(e)) return "undefined" === e.name;
			return !1
		};
		var r = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(44)),
			i = n(2)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function e(t, n) {
			if ("object" != typeof t || "object" != typeof n || null == t || null == n) return t === n;
			if (t.type !== n.type) return !1;
			const i = Object.keys(r.NODE_FIELDS[t.type] || t.type);
			const s = r.VISITOR_KEYS[t.type];
			for (const r of i) {
				if (typeof t[r] != typeof n[r]) return !1;
				if (null != t[r] || null != n[r]) {
					if (null == t[r] || null == n[r]) return !1;
					if (Array.isArray(t[r])) {
						if (!Array.isArray(n[r])) return !1;
						if (t[r].length !== n[r].length) return !1;
						for (let i = 0; i < t[r].length; i++)
							if (!e(t[r][i], n[r][i])) return !1
					} else if ("object" != typeof t[r] || s && s.includes(r)) {
						if (!e(t[r], n[r])) return !1
					} else
						for (const e of Object.keys(t[r]))
							if (t[r][e] !== n[r][e]) return !1
				}
			}
			return !0
		};
		var r = n(3)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t, n) {
			switch (t.type) {
				case "MemberExpression":
				case "JSXMemberExpression":
				case "OptionalMemberExpression":
					return t.property === e ? !!t.computed : t.object === e;
				case "VariableDeclarator":
					return t.init === e;
				case "ArrowFunctionExpression":
					return t.body === e;
				case "ExportSpecifier":
					return !t.source && t.local === e;
				case "PrivateName":
					return !1;
				case "ObjectProperty":
				case "ClassProperty":
				case "ClassPrivateProperty":
				case "ClassMethod":
				case "ClassPrivateMethod":
				case "ObjectMethod":
					return t.key === e ? !!t.computed : t.value !== e || (!n || "ObjectPattern" !== n.type);
				case "ClassDeclaration":
				case "ClassExpression":
					return t.superClass === e;
				case "AssignmentExpression":
				case "AssignmentPattern":
					return t.right === e;
				case "LabeledStatement":
				case "CatchClause":
				case "RestElement":
					return !1;
				case "BreakStatement":
				case "ContinueStatement":
					return !1;
				case "FunctionDeclaration":
				case "FunctionExpression":
					return !1;
				case "ExportNamespaceSpecifier":
				case "ExportDefaultSpecifier":
					return !1;
				case "ImportDefaultSpecifier":
				case "ImportNamespaceSpecifier":
				case "ImportSpecifier":
				case "JSXAttribute":
					return !1;
				case "ObjectPattern":
				case "ArrayPattern":
				case "MetaProperty":
					return !1;
				case "ObjectTypeProperty":
					return t.key !== e;
				case "TSEnumMember":
					return t.id !== e;
				case "TSPropertySignature":
					return t.key !== e || !!t.computed
			}
			return !0
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t) {
			if ((0, r.isBlockStatement)(e) && (0, r.isFunction)(t, {
					body: e
				})) return !1;
			if ((0, r.isBlockStatement)(e) && (0, r.isCatchClause)(t, {
					body: e
				})) return !1;
			return (0, r.isScopable)(e)
		};
		var r = n(2)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			return (0, r.isImportDefaultSpecifier)(e) || (0, r.isIdentifier)(e.imported || e.exported, {
				name: "default"
			})
		};
		var r = n(2)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			return (0, r.default)(e) && !i.has(e)
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(15));
		const i = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"])
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			return (0, r.isVariableDeclaration)(e, {
				kind: "var"
			}) && !e[i.BLOCK_SCOPED_SYMBOL]
		};
		var r = n(2),
			i = n(11)
	}, function (e, t, n) {
		(function (r) {
			function i() {
				var e;
				try {
					e = t.storage.debug
				} catch (e) {}
				return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e
			}(t = e.exports = n(242)).log = function () {
				return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
			}, t.formatArgs = function (e) {
				var n = this.useColors;
				if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
				var r = "color: " + this.color;
				e.splice(1, 0, r, "color: inherit");
				var i = 0,
					s = 0;
				e[0].replace(/%[a-zA-Z%]/g, function (e) {
					"%%" !== e && "%c" === e && (s = ++i)
				}), e.splice(s, 0, r)
			}, t.save = function (e) {
				try {
					null == e ? t.storage.removeItem("debug") : t.storage.debug = e
				} catch (e) {}
			}, t.load = i, t.useColors = function () {
				if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
				return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
			}, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
				try {
					return window.localStorage
				} catch (e) {}
			}(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function (e) {
				try {
					return JSON.stringify(e)
				} catch (e) {
					return "[UnexpectedJSONParseError]: " + e.message
				}
			}, t.enable(i())
		}).call(this, n(48))
	}, function (e, t, n) {
		var r;

		function i(e) {
			function n() {
				if (n.enabled) {
					var e = n,
						i = +new Date,
						s = i - (r || i);
					e.diff = s, e.prev = r, e.curr = i, r = i;
					for (var o = new Array(arguments.length), a = 0; a < o.length; a++) o[a] = arguments[a];
					o[0] = t.coerce(o[0]), "string" != typeof o[0] && o.unshift("%O");
					var u = 0;
					o[0] = o[0].replace(/%([a-zA-Z%])/g, function (n, r) {
						if ("%%" === n) return n;
						u++;
						var i = t.formatters[r];
						if ("function" == typeof i) {
							var s = o[u];
							n = i.call(e, s), o.splice(u, 1), u--
						}
						return n
					}), t.formatArgs.call(e, o), (n.log || t.log || console.log.bind(console)).apply(e, o)
				}
			}
			return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = function (e) {
				var n, r = 0;
				for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
				return t.colors[Math.abs(r) % t.colors.length]
			}(e), "function" == typeof t.init && t.init(n), n
		}(t = e.exports = i.debug = i.default = i).coerce = function (e) {
			return e instanceof Error ? e.stack || e.message : e
		}, t.disable = function () {
			t.enable("")
		}, t.enable = function (e) {
			t.save(e), t.names = [], t.skips = [];
			for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && ("-" === (e = n[i].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
		}, t.enabled = function (e) {
			var n, r;
			for (n = 0, r = t.skips.length; n < r; n++)
				if (t.skips[n].test(e)) return !1;
			for (n = 0, r = t.names.length; n < r; n++)
				if (t.names[n].test(e)) return !0;
			return !1
		}, t.humanize = n(243), t.names = [], t.skips = [], t.formatters = {}
	}, function (e, t) {
		var n = 1e3,
			r = 60 * n,
			i = 60 * r,
			s = 24 * i,
			o = 365.25 * s;

		function a(e, t, n) {
			if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
		}
		e.exports = function (e, t) {
			t = t || {};
			var u = typeof e;
			if ("string" === u && e.length > 0) return function (e) {
				if ((e = String(e)).length > 100) return;
				var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
				if (!t) return;
				var a = parseFloat(t[1]);
				switch ((t[2] || "ms").toLowerCase()) {
					case "years":
					case "year":
					case "yrs":
					case "yr":
					case "y":
						return a * o;
					case "days":
					case "day":
					case "d":
						return a * s;
					case "hours":
					case "hour":
					case "hrs":
					case "hr":
					case "h":
						return a * i;
					case "minutes":
					case "minute":
					case "mins":
					case "min":
					case "m":
						return a * r;
					case "seconds":
					case "second":
					case "secs":
					case "sec":
					case "s":
						return a * n;
					case "milliseconds":
					case "millisecond":
					case "msecs":
					case "msec":
					case "ms":
						return a;
					default:
						return
				}
			}(e);
			if ("number" === u && !1 === isNaN(e)) return t.long ? function (e) {
				return a(e, s, "day") || a(e, i, "hour") || a(e, r, "minute") || a(e, n, "second") || e + " ms"
			}(e) : function (e) {
				if (e >= s) return Math.round(e / s) + "d";
				if (e >= i) return Math.round(e / i) + "h";
				if (e >= r) return Math.round(e / r) + "m";
				if (e >= n) return Math.round(e / n) + "s";
				return e + "ms"
			}(e);
			throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
		}
	}, function (e, t, n) {
		var r = n(8),
			i = n(14),
			s = n(6),
			o = "[object String]";
		e.exports = function (e) {
			return "string" == typeof e || !i(e) && s(e) && r(e) == o
		}
	}, function (e, t, n) {
		var r = n(246),
			i = 1 / 0,
			s = 1.7976931348623157e308;
		e.exports = function (e) {
			return e ? (e = r(e)) === i || e === -i ? (e < 0 ? -1 : 1) * s : e == e ? e : 0 : 0 === e ? e : 0
		}
	}, function (e, t, n) {
		var r = n(10),
			i = n(95),
			s = NaN,
			o = /^\s+|\s+$/g,
			a = /^[-+]0x[0-9a-f]+$/i,
			u = /^0b[01]+$/i,
			c = /^0o[0-7]+$/i,
			l = parseInt;
		e.exports = function (e) {
			if ("number" == typeof e) return e;
			if (i(e)) return s;
			if (r(e)) {
				var t = "function" == typeof e.valueOf ? e.valueOf() : e;
				e = r(t) ? t + "" : t
			}
			if ("string" != typeof e) return 0 === e ? e : +e;
			e = e.replace(o, "");
			var n = u.test(e);
			return n || c.test(e) ? l(e.slice(2), n ? 2 : 8) : a.test(e) ? s : +e
		}
	}, function (e, t, n) {
		var r = n(248),
			i = n(25);
		e.exports = function (e) {
			return null == e ? [] : r(e, i(e))
		}
	}, function (e, t, n) {
		var r = n(96);
		e.exports = function (e, t) {
			return r(t, function (t) {
				return e[t]
			})
		}
	}, function (e, t) {
		var n = 9007199254740991,
			r = Math.floor;
		e.exports = function (e, t) {
			var i = "";
			if (!e || t < 1 || t > n) return i;
			do {
				t % 2 && (i += e), (t = r(t / 2)) && (e += e)
			} while (t);
			return i
		}
	}, function (e, t, n) {
		var r = n(251);
		e.exports = function (e) {
			return null == e ? "" : r(e)
		}
	}, function (e, t, n) {
		var r = n(21),
			i = n(96),
			s = n(14),
			o = n(95),
			a = 1 / 0,
			u = r ? r.prototype : void 0,
			c = u ? u.toString : void 0;
		e.exports = function e(t) {
			if ("string" == typeof t) return t;
			if (s(t)) return i(t, e) + "";
			if (o(t)) return c ? c.call(t) : "";
			var n = t + "";
			return "0" == n && 1 / t == -a ? "-0" : n
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		i(n(99));

		function r() {
			const e = i(n(253));
			return r = function () {
				return e
			}, e
		}

		function i(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		const s = {
			ReferencedIdentifier({
				node: e
			}, t) {
				e.name === t.oldName && (e.name = t.newName)
			},
			Scope(e, t) {
				e.scope.bindingIdentifierEquals(t.oldName, t.binding.identifier) || e.skip()
			},
			"AssignmentExpression|Declaration" (e, t) {
				const n = e.getOuterBindingIdentifiers();
				for (const e in n) e === t.oldName && (n[e].name = t.newName)
			}
		};
		t.default = class {
			constructor(e, t, n) {
				this.newName = n, this.oldName = t, this.binding = e
			}
			maybeConvertFromExportDeclaration(e) {
				const t = e.parentPath;
				t.isExportDeclaration() && (t.isExportDefaultDeclaration() && !t.get("declaration").node.id || (0, r().default)(t))
			}
			maybeConvertFromClassFunctionDeclaration(e) {}
			maybeConvertFromClassFunctionExpression(e) {}
			rename(e) {
				const {
					binding: t,
					oldName: n,
					newName: r
				} = this, {
					scope: i,
					path: o
				} = t, a = o.find(e => e.isDeclaration() || e.isFunctionExpression() || e.isClassExpression());
				a && a.getOuterBindingIdentifiers()[n] === t.identifier && this.maybeConvertFromExportDeclaration(a), i.traverse(e || i.block, s, this), e || (i.removeOwnBinding(n), i.bindings[r] = t, this.binding.identifier.name = r), t.type, a && (this.maybeConvertFromClassFunctionDeclaration(a), this.maybeConvertFromClassFunctionExpression(a))
			}
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			if (!e.isExportDeclaration()) throw new Error("Only export declarations can be splitted.");
			const t = e.isExportDefaultDeclaration(),
				n = e.get("declaration"),
				i = n.isClassDeclaration();
			if (t) {
				const t = n.isFunctionDeclaration() || i,
					s = n.isScope() ? n.scope.parent : n.scope;
				let o = n.node.id,
					a = !1;
				o || (a = !0, o = s.generateUidIdentifier("default"), (t || n.isFunctionExpression() || n.isClassExpression()) && (n.node.id = r().cloneNode(o)));
				const u = t ? n : r().variableDeclaration("var", [r().variableDeclarator(r().cloneNode(o), n.node)]),
					c = r().exportNamedDeclaration(null, [r().exportSpecifier(r().cloneNode(o), r().identifier("default"))]);
				return e.insertAfter(c), e.replaceWith(u), a && s.registerDeclaration(e), e
			}
			if (e.get("specifiers").length > 0) throw new Error("It doesn't make sense to split exported specifiers.");
			const s = n.getOuterBindingIdentifiers(),
				o = Object.keys(s).map(e => r().exportSpecifier(r().identifier(e), r().identifier(e))),
				a = r().exportNamedDeclaration(null, o);
			return e.insertAfter(a), e.replaceWith(n.node), e
		}
	}, function (e, t, n) {
		var r = n(255),
			i = n(20),
			s = n(98),
			o = n(37),
			a = Object.prototype,
			u = a.hasOwnProperty,
			c = r(function (e, t) {
				e = Object(e);
				var n = -1,
					r = t.length,
					c = r > 2 ? t[2] : void 0;
				for (c && s(t[0], t[1], c) && (r = 1); ++n < r;)
					for (var l = t[n], p = o(l), h = -1, f = p.length; ++h < f;) {
						var d = p[h],
							y = e[d];
						(void 0 === y || i(y, a[d]) && !u.call(e, d)) && (e[d] = l[d])
					}
				return e
			});
		e.exports = c
	}, function (e, t, n) {
		var r = n(100),
			i = n(256),
			s = n(258);
		e.exports = function (e, t) {
			return s(i(e, t, r), e + "")
		}
	}, function (e, t, n) {
		var r = n(257),
			i = Math.max;
		e.exports = function (e, t, n) {
			return t = i(void 0 === t ? e.length - 1 : t, 0),
				function () {
					for (var s = arguments, o = -1, a = i(s.length - t, 0), u = Array(a); ++o < a;) u[o] = s[t + o];
					o = -1;
					for (var c = Array(t + 1); ++o < t;) c[o] = s[o];
					return c[t] = n(u), r(e, this, c)
				}
		}
	}, function (e, t) {
		e.exports = function (e, t, n) {
			switch (n.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, n[0]);
				case 2:
					return e.call(t, n[0], n[1]);
				case 3:
					return e.call(t, n[0], n[1], n[2])
			}
			return e.apply(t, n)
		}
	}, function (e, t, n) {
		var r = n(259),
			i = n(261)(r);
		e.exports = i
	}, function (e, t, n) {
		var r = n(260),
			i = n(63),
			s = n(100),
			o = i ? function (e, t) {
				return i(e, "toString", {
					configurable: !0,
					enumerable: !1,
					value: r(t),
					writable: !0
				})
			} : s;
		e.exports = o
	}, function (e, t) {
		e.exports = function (e) {
			return function () {
				return e
			}
		}
	}, function (e, t) {
		var n = 800,
			r = 16,
			i = Date.now;
		e.exports = function (e) {
			var t = 0,
				s = 0;
			return function () {
				var o = i(),
					a = r - (o - s);
				if (s = o, a > 0) {
					if (++t >= n) return arguments[0]
				} else t = 0;
				return e.apply(void 0, arguments)
			}
		}
	}, function (e, t, n) {
		"use strict";
		e.exports = n(263)
	}, function (e) {
		e.exports = {
			builtin: {
				Array: !1,
				ArrayBuffer: !1,
				Atomics: !1,
				BigInt: !1,
				BigInt64Array: !1,
				BigUint64Array: !1,
				Boolean: !1,
				constructor: !1,
				DataView: !1,
				Date: !1,
				decodeURI: !1,
				decodeURIComponent: !1,
				encodeURI: !1,
				encodeURIComponent: !1,
				Error: !1,
				escape: !1,
				eval: !1,
				EvalError: !1,
				Float32Array: !1,
				Float64Array: !1,
				Function: !1,
				globalThis: !1,
				hasOwnProperty: !1,
				Infinity: !1,
				Int16Array: !1,
				Int32Array: !1,
				Int8Array: !1,
				isFinite: !1,
				isNaN: !1,
				isPrototypeOf: !1,
				JSON: !1,
				Map: !1,
				Math: !1,
				NaN: !1,
				Number: !1,
				Object: !1,
				parseFloat: !1,
				parseInt: !1,
				Promise: !1,
				propertyIsEnumerable: !1,
				Proxy: !1,
				RangeError: !1,
				ReferenceError: !1,
				Reflect: !1,
				RegExp: !1,
				Set: !1,
				SharedArrayBuffer: !1,
				String: !1,
				Symbol: !1,
				SyntaxError: !1,
				toLocaleString: !1,
				toString: !1,
				TypeError: !1,
				Uint16Array: !1,
				Uint32Array: !1,
				Uint8Array: !1,
				Uint8ClampedArray: !1,
				undefined: !1,
				unescape: !1,
				URIError: !1,
				valueOf: !1,
				WeakMap: !1,
				WeakSet: !1
			},
			es5: {
				Array: !1,
				Boolean: !1,
				constructor: !1,
				Date: !1,
				decodeURI: !1,
				decodeURIComponent: !1,
				encodeURI: !1,
				encodeURIComponent: !1,
				Error: !1,
				escape: !1,
				eval: !1,
				EvalError: !1,
				Function: !1,
				hasOwnProperty: !1,
				Infinity: !1,
				isFinite: !1,
				isNaN: !1,
				isPrototypeOf: !1,
				JSON: !1,
				Math: !1,
				NaN: !1,
				Number: !1,
				Object: !1,
				parseFloat: !1,
				parseInt: !1,
				propertyIsEnumerable: !1,
				RangeError: !1,
				ReferenceError: !1,
				RegExp: !1,
				String: !1,
				SyntaxError: !1,
				toLocaleString: !1,
				toString: !1,
				TypeError: !1,
				undefined: !1,
				unescape: !1,
				URIError: !1,
				valueOf: !1
			},
			es2015: {
				Array: !1,
				ArrayBuffer: !1,
				Boolean: !1,
				constructor: !1,
				DataView: !1,
				Date: !1,
				decodeURI: !1,
				decodeURIComponent: !1,
				encodeURI: !1,
				encodeURIComponent: !1,
				Error: !1,
				escape: !1,
				eval: !1,
				EvalError: !1,
				Float32Array: !1,
				Float64Array: !1,
				Function: !1,
				hasOwnProperty: !1,
				Infinity: !1,
				Int16Array: !1,
				Int32Array: !1,
				Int8Array: !1,
				isFinite: !1,
				isNaN: !1,
				isPrototypeOf: !1,
				JSON: !1,
				Map: !1,
				Math: !1,
				NaN: !1,
				Number: !1,
				Object: !1,
				parseFloat: !1,
				parseInt: !1,
				Promise: !1,
				propertyIsEnumerable: !1,
				Proxy: !1,
				RangeError: !1,
				ReferenceError: !1,
				Reflect: !1,
				RegExp: !1,
				Set: !1,
				String: !1,
				Symbol: !1,
				SyntaxError: !1,
				toLocaleString: !1,
				toString: !1,
				TypeError: !1,
				Uint16Array: !1,
				Uint32Array: !1,
				Uint8Array: !1,
				Uint8ClampedArray: !1,
				undefined: !1,
				unescape: !1,
				URIError: !1,
				valueOf: !1,
				WeakMap: !1,
				WeakSet: !1
			},
			es2017: {
				Array: !1,
				ArrayBuffer: !1,
				Atomics: !1,
				Boolean: !1,
				constructor: !1,
				DataView: !1,
				Date: !1,
				decodeURI: !1,
				decodeURIComponent: !1,
				encodeURI: !1,
				encodeURIComponent: !1,
				Error: !1,
				escape: !1,
				eval: !1,
				EvalError: !1,
				Float32Array: !1,
				Float64Array: !1,
				Function: !1,
				hasOwnProperty: !1,
				Infinity: !1,
				Int16Array: !1,
				Int32Array: !1,
				Int8Array: !1,
				isFinite: !1,
				isNaN: !1,
				isPrototypeOf: !1,
				JSON: !1,
				Map: !1,
				Math: !1,
				NaN: !1,
				Number: !1,
				Object: !1,
				parseFloat: !1,
				parseInt: !1,
				Promise: !1,
				propertyIsEnumerable: !1,
				Proxy: !1,
				RangeError: !1,
				ReferenceError: !1,
				Reflect: !1,
				RegExp: !1,
				Set: !1,
				SharedArrayBuffer: !1,
				String: !1,
				Symbol: !1,
				SyntaxError: !1,
				toLocaleString: !1,
				toString: !1,
				TypeError: !1,
				Uint16Array: !1,
				Uint32Array: !1,
				Uint8Array: !1,
				Uint8ClampedArray: !1,
				undefined: !1,
				unescape: !1,
				URIError: !1,
				valueOf: !1,
				WeakMap: !1,
				WeakSet: !1
			},
			browser: {
				AbortController: !1,
				AbortSignal: !1,
				addEventListener: !1,
				alert: !1,
				AnalyserNode: !1,
				Animation: !1,
				AnimationEffectReadOnly: !1,
				AnimationEffectTiming: !1,
				AnimationEffectTimingReadOnly: !1,
				AnimationEvent: !1,
				AnimationPlaybackEvent: !1,
				AnimationTimeline: !1,
				applicationCache: !1,
				ApplicationCache: !1,
				ApplicationCacheErrorEvent: !1,
				atob: !1,
				Attr: !1,
				Audio: !1,
				AudioBuffer: !1,
				AudioBufferSourceNode: !1,
				AudioContext: !1,
				AudioDestinationNode: !1,
				AudioListener: !1,
				AudioNode: !1,
				AudioParam: !1,
				AudioProcessingEvent: !1,
				AudioScheduledSourceNode: !1,
				"AudioWorkletGlobalScope ": !1,
				AudioWorkletNode: !1,
				AudioWorkletProcessor: !1,
				BarProp: !1,
				BaseAudioContext: !1,
				BatteryManager: !1,
				BeforeUnloadEvent: !1,
				BiquadFilterNode: !1,
				Blob: !1,
				BlobEvent: !1,
				blur: !1,
				BroadcastChannel: !1,
				btoa: !1,
				BudgetService: !1,
				ByteLengthQueuingStrategy: !1,
				Cache: !1,
				caches: !1,
				CacheStorage: !1,
				cancelAnimationFrame: !1,
				cancelIdleCallback: !1,
				CanvasCaptureMediaStreamTrack: !1,
				CanvasGradient: !1,
				CanvasPattern: !1,
				CanvasRenderingContext2D: !1,
				ChannelMergerNode: !1,
				ChannelSplitterNode: !1,
				CharacterData: !1,
				clearInterval: !1,
				clearTimeout: !1,
				clientInformation: !1,
				ClipboardEvent: !1,
				close: !1,
				closed: !1,
				CloseEvent: !1,
				Comment: !1,
				CompositionEvent: !1,
				confirm: !1,
				console: !1,
				ConstantSourceNode: !1,
				ConvolverNode: !1,
				CountQueuingStrategy: !1,
				createImageBitmap: !1,
				Credential: !1,
				CredentialsContainer: !1,
				crypto: !1,
				Crypto: !1,
				CryptoKey: !1,
				CSS: !1,
				CSSConditionRule: !1,
				CSSFontFaceRule: !1,
				CSSGroupingRule: !1,
				CSSImportRule: !1,
				CSSKeyframeRule: !1,
				CSSKeyframesRule: !1,
				CSSMediaRule: !1,
				CSSNamespaceRule: !1,
				CSSPageRule: !1,
				CSSRule: !1,
				CSSRuleList: !1,
				CSSStyleDeclaration: !1,
				CSSStyleRule: !1,
				CSSStyleSheet: !1,
				CSSSupportsRule: !1,
				CustomElementRegistry: !1,
				customElements: !1,
				CustomEvent: !1,
				DataTransfer: !1,
				DataTransferItem: !1,
				DataTransferItemList: !1,
				defaultstatus: !1,
				defaultStatus: !1,
				DelayNode: !1,
				DeviceMotionEvent: !1,
				DeviceOrientationEvent: !1,
				devicePixelRatio: !1,
				dispatchEvent: !1,
				document: !1,
				Document: !1,
				DocumentFragment: !1,
				DocumentType: !1,
				DOMError: !1,
				DOMException: !1,
				DOMImplementation: !1,
				DOMMatrix: !1,
				DOMMatrixReadOnly: !1,
				DOMParser: !1,
				DOMPoint: !1,
				DOMPointReadOnly: !1,
				DOMQuad: !1,
				DOMRect: !1,
				DOMRectReadOnly: !1,
				DOMStringList: !1,
				DOMStringMap: !1,
				DOMTokenList: !1,
				DragEvent: !1,
				DynamicsCompressorNode: !1,
				Element: !1,
				ErrorEvent: !1,
				event: !1,
				Event: !1,
				EventSource: !1,
				EventTarget: !1,
				external: !1,
				fetch: !1,
				File: !1,
				FileList: !1,
				FileReader: !1,
				find: !1,
				focus: !1,
				FocusEvent: !1,
				FontFace: !1,
				FontFaceSetLoadEvent: !1,
				FormData: !1,
				frameElement: !1,
				frames: !1,
				GainNode: !1,
				Gamepad: !1,
				GamepadButton: !1,
				GamepadEvent: !1,
				getComputedStyle: !1,
				getSelection: !1,
				HashChangeEvent: !1,
				Headers: !1,
				history: !1,
				History: !1,
				HTMLAllCollection: !1,
				HTMLAnchorElement: !1,
				HTMLAreaElement: !1,
				HTMLAudioElement: !1,
				HTMLBaseElement: !1,
				HTMLBodyElement: !1,
				HTMLBRElement: !1,
				HTMLButtonElement: !1,
				HTMLCanvasElement: !1,
				HTMLCollection: !1,
				HTMLContentElement: !1,
				HTMLDataElement: !1,
				HTMLDataListElement: !1,
				HTMLDetailsElement: !1,
				HTMLDialogElement: !1,
				HTMLDirectoryElement: !1,
				HTMLDivElement: !1,
				HTMLDListElement: !1,
				HTMLDocument: !1,
				HTMLElement: !1,
				HTMLEmbedElement: !1,
				HTMLFieldSetElement: !1,
				HTMLFontElement: !1,
				HTMLFormControlsCollection: !1,
				HTMLFormElement: !1,
				HTMLFrameElement: !1,
				HTMLFrameSetElement: !1,
				HTMLHeadElement: !1,
				HTMLHeadingElement: !1,
				HTMLHRElement: !1,
				HTMLHtmlElement: !1,
				HTMLIFrameElement: !1,
				HTMLImageElement: !1,
				HTMLInputElement: !1,
				HTMLLabelElement: !1,
				HTMLLegendElement: !1,
				HTMLLIElement: !1,
				HTMLLinkElement: !1,
				HTMLMapElement: !1,
				HTMLMarqueeElement: !1,
				HTMLMediaElement: !1,
				HTMLMenuElement: !1,
				HTMLMetaElement: !1,
				HTMLMeterElement: !1,
				HTMLModElement: !1,
				HTMLObjectElement: !1,
				HTMLOListElement: !1,
				HTMLOptGroupElement: !1,
				HTMLOptionElement: !1,
				HTMLOptionsCollection: !1,
				HTMLOutputElement: !1,
				HTMLParagraphElement: !1,
				HTMLParamElement: !1,
				HTMLPictureElement: !1,
				HTMLPreElement: !1,
				HTMLProgressElement: !1,
				HTMLQuoteElement: !1,
				HTMLScriptElement: !1,
				HTMLSelectElement: !1,
				HTMLShadowElement: !1,
				HTMLSlotElement: !1,
				HTMLSourceElement: !1,
				HTMLSpanElement: !1,
				HTMLStyleElement: !1,
				HTMLTableCaptionElement: !1,
				HTMLTableCellElement: !1,
				HTMLTableColElement: !1,
				HTMLTableElement: !1,
				HTMLTableRowElement: !1,
				HTMLTableSectionElement: !1,
				HTMLTemplateElement: !1,
				HTMLTextAreaElement: !1,
				HTMLTimeElement: !1,
				HTMLTitleElement: !1,
				HTMLTrackElement: !1,
				HTMLUListElement: !1,
				HTMLUnknownElement: !1,
				HTMLVideoElement: !1,
				IDBCursor: !1,
				IDBCursorWithValue: !1,
				IDBDatabase: !1,
				IDBFactory: !1,
				IDBIndex: !1,
				IDBKeyRange: !1,
				IDBObjectStore: !1,
				IDBOpenDBRequest: !1,
				IDBRequest: !1,
				IDBTransaction: !1,
				IDBVersionChangeEvent: !1,
				IdleDeadline: !1,
				IIRFilterNode: !1,
				Image: !1,
				ImageBitmap: !1,
				ImageBitmapRenderingContext: !1,
				ImageCapture: !1,
				ImageData: !1,
				indexedDB: !1,
				innerHeight: !1,
				innerWidth: !1,
				InputEvent: !1,
				IntersectionObserver: !1,
				IntersectionObserverEntry: !1,
				Intl: !1,
				isSecureContext: !1,
				KeyboardEvent: !1,
				KeyframeEffect: !1,
				KeyframeEffectReadOnly: !1,
				length: !1,
				localStorage: !1,
				location: !0,
				Location: !1,
				locationbar: !1,
				matchMedia: !1,
				MediaDeviceInfo: !1,
				MediaDevices: !1,
				MediaElementAudioSourceNode: !1,
				MediaEncryptedEvent: !1,
				MediaError: !1,
				MediaKeyMessageEvent: !1,
				MediaKeySession: !1,
				MediaKeyStatusMap: !1,
				MediaKeySystemAccess: !1,
				MediaList: !1,
				MediaQueryList: !1,
				MediaQueryListEvent: !1,
				MediaRecorder: !1,
				MediaSettingsRange: !1,
				MediaSource: !1,
				MediaStream: !1,
				MediaStreamAudioDestinationNode: !1,
				MediaStreamAudioSourceNode: !1,
				MediaStreamEvent: !1,
				MediaStreamTrack: !1,
				MediaStreamTrackEvent: !1,
				menubar: !1,
				MessageChannel: !1,
				MessageEvent: !1,
				MessagePort: !1,
				MIDIAccess: !1,
				MIDIConnectionEvent: !1,
				MIDIInput: !1,
				MIDIInputMap: !1,
				MIDIMessageEvent: !1,
				MIDIOutput: !1,
				MIDIOutputMap: !1,
				MIDIPort: !1,
				MimeType: !1,
				MimeTypeArray: !1,
				MouseEvent: !1,
				moveBy: !1,
				moveTo: !1,
				MutationEvent: !1,
				MutationObserver: !1,
				MutationRecord: !1,
				name: !1,
				NamedNodeMap: !1,
				NavigationPreloadManager: !1,
				navigator: !1,
				Navigator: !1,
				NetworkInformation: !1,
				Node: !1,
				NodeFilter: !1,
				NodeIterator: !1,
				NodeList: !1,
				Notification: !1,
				OfflineAudioCompletionEvent: !1,
				OfflineAudioContext: !1,
				offscreenBuffering: !1,
				OffscreenCanvas: !0,
				onabort: !0,
				onafterprint: !0,
				onanimationend: !0,
				onanimationiteration: !0,
				onanimationstart: !0,
				onappinstalled: !0,
				onauxclick: !0,
				onbeforeinstallprompt: !0,
				onbeforeprint: !0,
				onbeforeunload: !0,
				onblur: !0,
				oncancel: !0,
				oncanplay: !0,
				oncanplaythrough: !0,
				onchange: !0,
				onclick: !0,
				onclose: !0,
				oncontextmenu: !0,
				oncuechange: !0,
				ondblclick: !0,
				ondevicemotion: !0,
				ondeviceorientation: !0,
				ondeviceorientationabsolute: !0,
				ondrag: !0,
				ondragend: !0,
				ondragenter: !0,
				ondragleave: !0,
				ondragover: !0,
				ondragstart: !0,
				ondrop: !0,
				ondurationchange: !0,
				onemptied: !0,
				onended: !0,
				onerror: !0,
				onfocus: !0,
				ongotpointercapture: !0,
				onhashchange: !0,
				oninput: !0,
				oninvalid: !0,
				onkeydown: !0,
				onkeypress: !0,
				onkeyup: !0,
				onlanguagechange: !0,
				onload: !0,
				onloadeddata: !0,
				onloadedmetadata: !0,
				onloadstart: !0,
				onlostpointercapture: !0,
				onmessage: !0,
				onmessageerror: !0,
				onmousedown: !0,
				onmouseenter: !0,
				onmouseleave: !0,
				onmousemove: !0,
				onmouseout: !0,
				onmouseover: !0,
				onmouseup: !0,
				onmousewheel: !0,
				onoffline: !0,
				ononline: !0,
				onpagehide: !0,
				onpageshow: !0,
				onpause: !0,
				onplay: !0,
				onplaying: !0,
				onpointercancel: !0,
				onpointerdown: !0,
				onpointerenter: !0,
				onpointerleave: !0,
				onpointermove: !0,
				onpointerout: !0,
				onpointerover: !0,
				onpointerup: !0,
				onpopstate: !0,
				onprogress: !0,
				onratechange: !0,
				onrejectionhandled: !0,
				onreset: !0,
				onresize: !0,
				onscroll: !0,
				onsearch: !0,
				onseeked: !0,
				onseeking: !0,
				onselect: !0,
				onstalled: !0,
				onstorage: !0,
				onsubmit: !0,
				onsuspend: !0,
				ontimeupdate: !0,
				ontoggle: !0,
				ontransitionend: !0,
				onunhandledrejection: !0,
				onunload: !0,
				onvolumechange: !0,
				onwaiting: !0,
				onwheel: !0,
				open: !1,
				openDatabase: !1,
				opener: !1,
				Option: !1,
				origin: !1,
				OscillatorNode: !1,
				outerHeight: !1,
				outerWidth: !1,
				PageTransitionEvent: !1,
				pageXOffset: !1,
				pageYOffset: !1,
				PannerNode: !1,
				parent: !1,
				Path2D: !1,
				PaymentAddress: !1,
				PaymentRequest: !1,
				PaymentRequestUpdateEvent: !1,
				PaymentResponse: !1,
				performance: !1,
				Performance: !1,
				PerformanceEntry: !1,
				PerformanceLongTaskTiming: !1,
				PerformanceMark: !1,
				PerformanceMeasure: !1,
				PerformanceNavigation: !1,
				PerformanceNavigationTiming: !1,
				PerformanceObserver: !1,
				PerformanceObserverEntryList: !1,
				PerformancePaintTiming: !1,
				PerformanceResourceTiming: !1,
				PerformanceTiming: !1,
				PeriodicWave: !1,
				Permissions: !1,
				PermissionStatus: !1,
				personalbar: !1,
				PhotoCapabilities: !1,
				Plugin: !1,
				PluginArray: !1,
				PointerEvent: !1,
				PopStateEvent: !1,
				postMessage: !1,
				Presentation: !1,
				PresentationAvailability: !1,
				PresentationConnection: !1,
				PresentationConnectionAvailableEvent: !1,
				PresentationConnectionCloseEvent: !1,
				PresentationConnectionList: !1,
				PresentationReceiver: !1,
				PresentationRequest: !1,
				print: !1,
				ProcessingInstruction: !1,
				ProgressEvent: !1,
				PromiseRejectionEvent: !1,
				prompt: !1,
				PushManager: !1,
				PushSubscription: !1,
				PushSubscriptionOptions: !1,
				queueMicrotask: !1,
				RadioNodeList: !1,
				Range: !1,
				ReadableStream: !1,
				registerProcessor: !1,
				RemotePlayback: !1,
				removeEventListener: !1,
				Request: !1,
				requestAnimationFrame: !1,
				requestIdleCallback: !1,
				resizeBy: !1,
				ResizeObserver: !1,
				ResizeObserverEntry: !1,
				resizeTo: !1,
				Response: !1,
				RTCCertificate: !1,
				RTCDataChannel: !1,
				RTCDataChannelEvent: !1,
				RTCDtlsTransport: !1,
				RTCIceCandidate: !1,
				RTCIceGatherer: !1,
				RTCIceTransport: !1,
				RTCPeerConnection: !1,
				RTCPeerConnectionIceEvent: !1,
				RTCRtpContributingSource: !1,
				RTCRtpReceiver: !1,
				RTCRtpSender: !1,
				RTCSctpTransport: !1,
				RTCSessionDescription: !1,
				RTCStatsReport: !1,
				RTCTrackEvent: !1,
				screen: !1,
				Screen: !1,
				screenLeft: !1,
				ScreenOrientation: !1,
				screenTop: !1,
				screenX: !1,
				screenY: !1,
				ScriptProcessorNode: !1,
				scroll: !1,
				scrollbars: !1,
				scrollBy: !1,
				scrollTo: !1,
				scrollX: !1,
				scrollY: !1,
				SecurityPolicyViolationEvent: !1,
				Selection: !1,
				self: !1,
				ServiceWorker: !1,
				ServiceWorkerContainer: !1,
				ServiceWorkerRegistration: !1,
				sessionStorage: !1,
				setInterval: !1,
				setTimeout: !1,
				ShadowRoot: !1,
				SharedWorker: !1,
				SourceBuffer: !1,
				SourceBufferList: !1,
				speechSynthesis: !1,
				SpeechSynthesisEvent: !1,
				SpeechSynthesisUtterance: !1,
				StaticRange: !1,
				status: !1,
				statusbar: !1,
				StereoPannerNode: !1,
				stop: !1,
				Storage: !1,
				StorageEvent: !1,
				StorageManager: !1,
				styleMedia: !1,
				StyleSheet: !1,
				StyleSheetList: !1,
				SubtleCrypto: !1,
				SVGAElement: !1,
				SVGAngle: !1,
				SVGAnimatedAngle: !1,
				SVGAnimatedBoolean: !1,
				SVGAnimatedEnumeration: !1,
				SVGAnimatedInteger: !1,
				SVGAnimatedLength: !1,
				SVGAnimatedLengthList: !1,
				SVGAnimatedNumber: !1,
				SVGAnimatedNumberList: !1,
				SVGAnimatedPreserveAspectRatio: !1,
				SVGAnimatedRect: !1,
				SVGAnimatedString: !1,
				SVGAnimatedTransformList: !1,
				SVGAnimateElement: !1,
				SVGAnimateMotionElement: !1,
				SVGAnimateTransformElement: !1,
				SVGAnimationElement: !1,
				SVGCircleElement: !1,
				SVGClipPathElement: !1,
				SVGComponentTransferFunctionElement: !1,
				SVGDefsElement: !1,
				SVGDescElement: !1,
				SVGDiscardElement: !1,
				SVGElement: !1,
				SVGEllipseElement: !1,
				SVGFEBlendElement: !1,
				SVGFEColorMatrixElement: !1,
				SVGFEComponentTransferElement: !1,
				SVGFECompositeElement: !1,
				SVGFEConvolveMatrixElement: !1,
				SVGFEDiffuseLightingElement: !1,
				SVGFEDisplacementMapElement: !1,
				SVGFEDistantLightElement: !1,
				SVGFEDropShadowElement: !1,
				SVGFEFloodElement: !1,
				SVGFEFuncAElement: !1,
				SVGFEFuncBElement: !1,
				SVGFEFuncGElement: !1,
				SVGFEFuncRElement: !1,
				SVGFEGaussianBlurElement: !1,
				SVGFEImageElement: !1,
				SVGFEMergeElement: !1,
				SVGFEMergeNodeElement: !1,
				SVGFEMorphologyElement: !1,
				SVGFEOffsetElement: !1,
				SVGFEPointLightElement: !1,
				SVGFESpecularLightingElement: !1,
				SVGFESpotLightElement: !1,
				SVGFETileElement: !1,
				SVGFETurbulenceElement: !1,
				SVGFilterElement: !1,
				SVGForeignObjectElement: !1,
				SVGGElement: !1,
				SVGGeometryElement: !1,
				SVGGradientElement: !1,
				SVGGraphicsElement: !1,
				SVGImageElement: !1,
				SVGLength: !1,
				SVGLengthList: !1,
				SVGLinearGradientElement: !1,
				SVGLineElement: !1,
				SVGMarkerElement: !1,
				SVGMaskElement: !1,
				SVGMatrix: !1,
				SVGMetadataElement: !1,
				SVGMPathElement: !1,
				SVGNumber: !1,
				SVGNumberList: !1,
				SVGPathElement: !1,
				SVGPatternElement: !1,
				SVGPoint: !1,
				SVGPointList: !1,
				SVGPolygonElement: !1,
				SVGPolylineElement: !1,
				SVGPreserveAspectRatio: !1,
				SVGRadialGradientElement: !1,
				SVGRect: !1,
				SVGRectElement: !1,
				SVGScriptElement: !1,
				SVGSetElement: !1,
				SVGStopElement: !1,
				SVGStringList: !1,
				SVGStyleElement: !1,
				SVGSVGElement: !1,
				SVGSwitchElement: !1,
				SVGSymbolElement: !1,
				SVGTextContentElement: !1,
				SVGTextElement: !1,
				SVGTextPathElement: !1,
				SVGTextPositioningElement: !1,
				SVGTitleElement: !1,
				SVGTransform: !1,
				SVGTransformList: !1,
				SVGTSpanElement: !1,
				SVGUnitTypes: !1,
				SVGUseElement: !1,
				SVGViewElement: !1,
				TaskAttributionTiming: !1,
				Text: !1,
				TextDecoder: !1,
				TextEncoder: !1,
				TextEvent: !1,
				TextMetrics: !1,
				TextTrack: !1,
				TextTrackCue: !1,
				TextTrackCueList: !1,
				TextTrackList: !1,
				TimeRanges: !1,
				toolbar: !1,
				top: !1,
				Touch: !1,
				TouchEvent: !1,
				TouchList: !1,
				TrackEvent: !1,
				TransitionEvent: !1,
				TreeWalker: !1,
				UIEvent: !1,
				URL: !1,
				URLSearchParams: !1,
				ValidityState: !1,
				visualViewport: !1,
				VisualViewport: !1,
				VTTCue: !1,
				WaveShaperNode: !1,
				WebAssembly: !1,
				WebGL2RenderingContext: !1,
				WebGLActiveInfo: !1,
				WebGLBuffer: !1,
				WebGLContextEvent: !1,
				WebGLFramebuffer: !1,
				WebGLProgram: !1,
				WebGLQuery: !1,
				WebGLRenderbuffer: !1,
				WebGLRenderingContext: !1,
				WebGLSampler: !1,
				WebGLShader: !1,
				WebGLShaderPrecisionFormat: !1,
				WebGLSync: !1,
				WebGLTexture: !1,
				WebGLTransformFeedback: !1,
				WebGLUniformLocation: !1,
				WebGLVertexArrayObject: !1,
				WebSocket: !1,
				WheelEvent: !1,
				window: !1,
				Window: !1,
				Worker: !1,
				WritableStream: !1,
				XMLDocument: !1,
				XMLHttpRequest: !1,
				XMLHttpRequestEventTarget: !1,
				XMLHttpRequestUpload: !1,
				XMLSerializer: !1,
				XPathEvaluator: !1,
				XPathExpression: !1,
				XPathResult: !1,
				XSLTProcessor: !1
			},
			worker: {
				addEventListener: !1,
				applicationCache: !1,
				atob: !1,
				Blob: !1,
				BroadcastChannel: !1,
				btoa: !1,
				Cache: !1,
				caches: !1,
				clearInterval: !1,
				clearTimeout: !1,
				close: !0,
				console: !1,
				fetch: !1,
				FileReaderSync: !1,
				FormData: !1,
				Headers: !1,
				IDBCursor: !1,
				IDBCursorWithValue: !1,
				IDBDatabase: !1,
				IDBFactory: !1,
				IDBIndex: !1,
				IDBKeyRange: !1,
				IDBObjectStore: !1,
				IDBOpenDBRequest: !1,
				IDBRequest: !1,
				IDBTransaction: !1,
				IDBVersionChangeEvent: !1,
				ImageData: !1,
				importScripts: !0,
				indexedDB: !1,
				location: !1,
				MessageChannel: !1,
				MessagePort: !1,
				name: !1,
				navigator: !1,
				Notification: !1,
				onclose: !0,
				onconnect: !0,
				onerror: !0,
				onlanguagechange: !0,
				onmessage: !0,
				onoffline: !0,
				ononline: !0,
				onrejectionhandled: !0,
				onunhandledrejection: !0,
				performance: !1,
				Performance: !1,
				PerformanceEntry: !1,
				PerformanceMark: !1,
				PerformanceMeasure: !1,
				PerformanceNavigation: !1,
				PerformanceResourceTiming: !1,
				PerformanceTiming: !1,
				postMessage: !0,
				Promise: !1,
				queueMicrotask: !1,
				removeEventListener: !1,
				Request: !1,
				Response: !1,
				self: !0,
				ServiceWorkerRegistration: !1,
				setInterval: !1,
				setTimeout: !1,
				TextDecoder: !1,
				TextEncoder: !1,
				URL: !1,
				URLSearchParams: !1,
				WebSocket: !1,
				Worker: !1,
				WorkerGlobalScope: !1,
				XMLHttpRequest: !1
			},
			node: {
				__dirname: !1,
				__filename: !1,
				Buffer: !1,
				clearImmediate: !1,
				clearInterval: !1,
				clearTimeout: !1,
				console: !1,
				exports: !0,
				global: !1,
				Intl: !1,
				module: !1,
				process: !1,
				queueMicrotask: !1,
				require: !1,
				setImmediate: !1,
				setInterval: !1,
				setTimeout: !1,
				TextDecoder: !1,
				TextEncoder: !1,
				URL: !1,
				URLSearchParams: !1
			},
			commonjs: {
				exports: !0,
				global: !1,
				module: !1,
				require: !1
			},
			amd: {
				define: !1,
				require: !1
			},
			mocha: {
				after: !1,
				afterEach: !1,
				before: !1,
				beforeEach: !1,
				context: !1,
				describe: !1,
				it: !1,
				mocha: !1,
				run: !1,
				setup: !1,
				specify: !1,
				suite: !1,
				suiteSetup: !1,
				suiteTeardown: !1,
				teardown: !1,
				test: !1,
				xcontext: !1,
				xdescribe: !1,
				xit: !1,
				xspecify: !1
			},
			jasmine: {
				afterAll: !1,
				afterEach: !1,
				beforeAll: !1,
				beforeEach: !1,
				describe: !1,
				expect: !1,
				fail: !1,
				fdescribe: !1,
				fit: !1,
				it: !1,
				jasmine: !1,
				pending: !1,
				runs: !1,
				spyOn: !1,
				spyOnProperty: !1,
				waits: !1,
				waitsFor: !1,
				xdescribe: !1,
				xit: !1
			},
			jest: {
				afterAll: !1,
				afterEach: !1,
				beforeAll: !1,
				beforeEach: !1,
				describe: !1,
				expect: !1,
				fdescribe: !1,
				fit: !1,
				it: !1,
				jest: !1,
				pit: !1,
				require: !1,
				test: !1,
				xdescribe: !1,
				xit: !1,
				xtest: !1
			},
			qunit: {
				asyncTest: !1,
				deepEqual: !1,
				equal: !1,
				expect: !1,
				module: !1,
				notDeepEqual: !1,
				notEqual: !1,
				notOk: !1,
				notPropEqual: !1,
				notStrictEqual: !1,
				ok: !1,
				propEqual: !1,
				QUnit: !1,
				raises: !1,
				start: !1,
				stop: !1,
				strictEqual: !1,
				test: !1,
				throws: !1
			},
			phantomjs: {
				console: !0,
				exports: !0,
				phantom: !0,
				require: !0,
				WebPage: !0
			},
			couch: {
				emit: !1,
				exports: !1,
				getRow: !1,
				log: !1,
				module: !1,
				provides: !1,
				require: !1,
				respond: !1,
				send: !1,
				start: !1,
				sum: !1
			},
			rhino: {
				defineClass: !1,
				deserialize: !1,
				gc: !1,
				help: !1,
				importClass: !1,
				importPackage: !1,
				java: !1,
				load: !1,
				loadClass: !1,
				Packages: !1,
				print: !1,
				quit: !1,
				readFile: !1,
				readUrl: !1,
				runCommand: !1,
				seal: !1,
				serialize: !1,
				spawn: !1,
				sync: !1,
				toint32: !1,
				version: !1
			},
			nashorn: {
				__DIR__: !1,
				__FILE__: !1,
				__LINE__: !1,
				com: !1,
				edu: !1,
				exit: !1,
				java: !1,
				Java: !1,
				javafx: !1,
				JavaImporter: !1,
				javax: !1,
				JSAdapter: !1,
				load: !1,
				loadWithNewGlobal: !1,
				org: !1,
				Packages: !1,
				print: !1,
				quit: !1
			},
			wsh: {
				ActiveXObject: !0,
				Enumerator: !0,
				GetObject: !0,
				ScriptEngine: !0,
				ScriptEngineBuildVersion: !0,
				ScriptEngineMajorVersion: !0,
				ScriptEngineMinorVersion: !0,
				VBArray: !0,
				WScript: !0,
				WSH: !0,
				XDomainRequest: !0
			},
			jquery: {
				$: !1,
				jQuery: !1
			},
			yui: {
				YAHOO: !1,
				YAHOO_config: !1,
				YUI: !1,
				YUI_config: !1
			},
			shelljs: {
				cat: !1,
				cd: !1,
				chmod: !1,
				config: !1,
				cp: !1,
				dirs: !1,
				echo: !1,
				env: !1,
				error: !1,
				exec: !1,
				exit: !1,
				find: !1,
				grep: !1,
				ln: !1,
				ls: !1,
				mkdir: !1,
				mv: !1,
				popd: !1,
				pushd: !1,
				pwd: !1,
				rm: !1,
				sed: !1,
				set: !1,
				target: !1,
				tempdir: !1,
				test: !1,
				touch: !1,
				which: !1
			},
			prototypejs: {
				$: !1,
				$$: !1,
				$A: !1,
				$break: !1,
				$continue: !1,
				$F: !1,
				$H: !1,
				$R: !1,
				$w: !1,
				Abstract: !1,
				Ajax: !1,
				Autocompleter: !1,
				Builder: !1,
				Class: !1,
				Control: !1,
				Draggable: !1,
				Draggables: !1,
				Droppables: !1,
				Effect: !1,
				Element: !1,
				Enumerable: !1,
				Event: !1,
				Field: !1,
				Form: !1,
				Hash: !1,
				Insertion: !1,
				ObjectRange: !1,
				PeriodicalExecuter: !1,
				Position: !1,
				Prototype: !1,
				Scriptaculous: !1,
				Selector: !1,
				Sortable: !1,
				SortableObserver: !1,
				Sound: !1,
				Template: !1,
				Toggle: !1,
				Try: !1
			},
			meteor: {
				_: !1,
				$: !1,
				Accounts: !1,
				AccountsClient: !1,
				AccountsCommon: !1,
				AccountsServer: !1,
				App: !1,
				Assets: !1,
				Blaze: !1,
				check: !1,
				Cordova: !1,
				DDP: !1,
				DDPRateLimiter: !1,
				DDPServer: !1,
				Deps: !1,
				EJSON: !1,
				Email: !1,
				HTTP: !1,
				Log: !1,
				Match: !1,
				Meteor: !1,
				Mongo: !1,
				MongoInternals: !1,
				Npm: !1,
				Package: !1,
				Plugin: !1,
				process: !1,
				Random: !1,
				ReactiveDict: !1,
				ReactiveVar: !1,
				Router: !1,
				ServiceConfiguration: !1,
				Session: !1,
				share: !1,
				Spacebars: !1,
				Template: !1,
				Tinytest: !1,
				Tracker: !1,
				UI: !1,
				Utils: !1,
				WebApp: !1,
				WebAppInternals: !1
			},
			mongo: {
				_isWindows: !1,
				_rand: !1,
				BulkWriteResult: !1,
				cat: !1,
				cd: !1,
				connect: !1,
				db: !1,
				getHostName: !1,
				getMemInfo: !1,
				hostname: !1,
				ISODate: !1,
				listFiles: !1,
				load: !1,
				ls: !1,
				md5sumFile: !1,
				mkdir: !1,
				Mongo: !1,
				NumberInt: !1,
				NumberLong: !1,
				ObjectId: !1,
				PlanCache: !1,
				print: !1,
				printjson: !1,
				pwd: !1,
				quit: !1,
				removeFile: !1,
				rs: !1,
				sh: !1,
				UUID: !1,
				version: !1,
				WriteResult: !1
			},
			applescript: {
				$: !1,
				Application: !1,
				Automation: !1,
				console: !1,
				delay: !1,
				Library: !1,
				ObjC: !1,
				ObjectSpecifier: !1,
				Path: !1,
				Progress: !1,
				Ref: !1
			},
			serviceworker: {
				addEventListener: !1,
				applicationCache: !1,
				atob: !1,
				Blob: !1,
				BroadcastChannel: !1,
				btoa: !1,
				Cache: !1,
				caches: !1,
				CacheStorage: !1,
				clearInterval: !1,
				clearTimeout: !1,
				Client: !1,
				clients: !1,
				Clients: !1,
				close: !0,
				console: !1,
				ExtendableEvent: !1,
				ExtendableMessageEvent: !1,
				fetch: !1,
				FetchEvent: !1,
				FileReaderSync: !1,
				FormData: !1,
				Headers: !1,
				IDBCursor: !1,
				IDBCursorWithValue: !1,
				IDBDatabase: !1,
				IDBFactory: !1,
				IDBIndex: !1,
				IDBKeyRange: !1,
				IDBObjectStore: !1,
				IDBOpenDBRequest: !1,
				IDBRequest: !1,
				IDBTransaction: !1,
				IDBVersionChangeEvent: !1,
				ImageData: !1,
				importScripts: !1,
				indexedDB: !1,
				location: !1,
				MessageChannel: !1,
				MessagePort: !1,
				name: !1,
				navigator: !1,
				Notification: !1,
				onclose: !0,
				onconnect: !0,
				onerror: !0,
				onfetch: !0,
				oninstall: !0,
				onlanguagechange: !0,
				onmessage: !0,
				onmessageerror: !0,
				onnotificationclick: !0,
				onnotificationclose: !0,
				onoffline: !0,
				ononline: !0,
				onpush: !0,
				onpushsubscriptionchange: !0,
				onrejectionhandled: !0,
				onsync: !0,
				onunhandledrejection: !0,
				performance: !1,
				Performance: !1,
				PerformanceEntry: !1,
				PerformanceMark: !1,
				PerformanceMeasure: !1,
				PerformanceNavigation: !1,
				PerformanceResourceTiming: !1,
				PerformanceTiming: !1,
				postMessage: !0,
				Promise: !1,
				queueMicrotask: !1,
				registration: !1,
				removeEventListener: !1,
				Request: !1,
				Response: !1,
				self: !1,
				ServiceWorker: !1,
				ServiceWorkerContainer: !1,
				ServiceWorkerGlobalScope: !1,
				ServiceWorkerMessageEvent: !1,
				ServiceWorkerRegistration: !1,
				setInterval: !1,
				setTimeout: !1,
				skipWaiting: !1,
				TextDecoder: !1,
				TextEncoder: !1,
				URL: !1,
				URLSearchParams: !1,
				WebSocket: !1,
				WindowClient: !1,
				Worker: !1,
				WorkerGlobalScope: !1,
				XMLHttpRequest: !1
			},
			atomtest: {
				advanceClock: !1,
				fakeClearInterval: !1,
				fakeClearTimeout: !1,
				fakeSetInterval: !1,
				fakeSetTimeout: !1,
				resetTimeouts: !1,
				waitsForPromise: !1
			},
			embertest: {
				andThen: !1,
				click: !1,
				currentPath: !1,
				currentRouteName: !1,
				currentURL: !1,
				fillIn: !1,
				find: !1,
				findAll: !1,
				findWithAssert: !1,
				keyEvent: !1,
				pauseTest: !1,
				resumeTest: !1,
				triggerEvent: !1,
				visit: !1,
				wait: !1
			},
			protractor: {
				$: !1,
				$$: !1,
				browser: !1,
				by: !1,
				By: !1,
				DartObject: !1,
				element: !1,
				protractor: !1
			},
			"shared-node-browser": {
				clearInterval: !1,
				clearTimeout: !1,
				console: !1,
				setInterval: !1,
				setTimeout: !1,
				URL: !1,
				URLSearchParams: !1
			},
			webextensions: {
				browser: !1,
				chrome: !1,
				opr: !1
			},
			greasemonkey: {
				cloneInto: !1,
				createObjectIn: !1,
				exportFunction: !1,
				GM: !1,
				GM_addStyle: !1,
				GM_deleteValue: !1,
				GM_getResourceText: !1,
				GM_getResourceURL: !1,
				GM_getValue: !1,
				GM_info: !1,
				GM_listValues: !1,
				GM_log: !1,
				GM_openInTab: !1,
				GM_registerMenuCommand: !1,
				GM_setClipboard: !1,
				GM_setValue: !1,
				GM_xmlhttpRequest: !1,
				unsafeWindow: !1
			},
			devtools: {
				$: !1,
				$_: !1,
				$$: !1,
				$0: !1,
				$1: !1,
				$2: !1,
				$3: !1,
				$4: !1,
				$x: !1,
				chrome: !1,
				clear: !1,
				copy: !1,
				debug: !1,
				dir: !1,
				dirxml: !1,
				getEventListeners: !1,
				inspect: !1,
				keys: !1,
				monitor: !1,
				monitorEvents: !1,
				profile: !1,
				profileEnd: !1,
				queryObjects: !1,
				table: !1,
				undebug: !1,
				unmonitor: !1,
				unmonitorEvents: !1,
				values: !1
			}
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(265));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		t.default = class {
			constructor(e, t) {
				this._cachedMap = null, this._code = t, this._opts = e, this._rawMappings = []
			}
			get() {
				if (!this._cachedMap) {
					const e = this._cachedMap = new(r().default.SourceMapGenerator)({
							sourceRoot: this._opts.sourceRoot
						}),
						t = this._code;
					"string" == typeof t ? e.setSourceContent(this._opts.sourceFileName, t) : "object" == typeof t && Object.keys(t).forEach(n => {
						e.setSourceContent(n, t[n])
					}), this._rawMappings.forEach(e.addMapping, e)
				}
				return this._cachedMap.toJSON()
			}
			getRawMappings() {
				return this._rawMappings.slice()
			}
			mark(e, t, n, r, i, s, o) {
				this._lastGenLine !== e && null === n || (o || this._lastGenLine !== e || this._lastSourceLine !== n || this._lastSourceColumn !== r) && (this._cachedMap = null, this._lastGenLine = e, this._lastSourceLine = n, this._lastSourceColumn = r, this._rawMappings.push({
					name: i || void 0,
					generated: {
						line: e,
						column: t
					},
					source: null == n ? void 0 : s || this._opts.sourceFileName,
					original: null == n ? void 0 : {
						line: n,
						column: r
					}
				}))
			}
		}
	}, function (e, t, n) {
		t.SourceMapGenerator = n(101).SourceMapGenerator, t.SourceMapConsumer = n(268).SourceMapConsumer, t.SourceNode = n(271).SourceNode
	}, function (e, t) {
		var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
		t.encode = function (e) {
			if (0 <= e && e < n.length) return n[e];
			throw new TypeError("Must be between 0 and 63: " + e)
		}, t.decode = function (e) {
			return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1
		}
	}, function (e, t, n) {
		var r = n(17);

		function i() {
			this._array = [], this._sorted = !0, this._last = {
				generatedLine: -1,
				generatedColumn: 0
			}
		}
		i.prototype.unsortedForEach = function (e, t) {
			this._array.forEach(e, t)
		}, i.prototype.add = function (e) {
			! function (e, t) {
				var n = e.generatedLine,
					i = t.generatedLine,
					s = e.generatedColumn,
					o = t.generatedColumn;
				return i > n || i == n && o >= s || r.compareByGeneratedPositionsInflated(e, t) <= 0
			}(this._last, e) ? (this._sorted = !1, this._array.push(e)) : (this._last = e, this._array.push(e))
		}, i.prototype.toArray = function () {
			return this._sorted || (this._array.sort(r.compareByGeneratedPositionsInflated), this._sorted = !0), this._array
		}, t.MappingList = i
	}, function (e, t, n) {
		var r = n(17),
			i = n(269),
			s = n(103).ArraySet,
			o = n(102),
			a = n(270).quickSort;

		function u(e) {
			var t = e;
			return "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, ""))), null != t.sections ? new p(t) : new c(t)
		}

		function c(e) {
			var t = e;
			"string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
			var n = r.getArg(t, "version"),
				i = r.getArg(t, "sources"),
				o = r.getArg(t, "names", []),
				a = r.getArg(t, "sourceRoot", null),
				u = r.getArg(t, "sourcesContent", null),
				c = r.getArg(t, "mappings"),
				l = r.getArg(t, "file", null);
			if (n != this._version) throw new Error("Unsupported version: " + n);
			i = i.map(String).map(r.normalize).map(function (e) {
				return a && r.isAbsolute(a) && r.isAbsolute(e) ? r.relative(a, e) : e
			}), this._names = s.fromArray(o.map(String), !0), this._sources = s.fromArray(i, !0), this.sourceRoot = a, this.sourcesContent = u, this._mappings = c, this.file = l
		}

		function l() {
			this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null
		}

		function p(e) {
			var t = e;
			"string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
			var n = r.getArg(t, "version"),
				i = r.getArg(t, "sections");
			if (n != this._version) throw new Error("Unsupported version: " + n);
			this._sources = new s, this._names = new s;
			var o = {
				line: -1,
				column: 0
			};
			this._sections = i.map(function (e) {
				if (e.url) throw new Error("Support for url field in sections not implemented.");
				var t = r.getArg(e, "offset"),
					n = r.getArg(t, "line"),
					i = r.getArg(t, "column");
				if (n < o.line || n === o.line && i < o.column) throw new Error("Section offsets must be ordered and non-overlapping.");
				return o = t, {
					generatedOffset: {
						generatedLine: n + 1,
						generatedColumn: i + 1
					},
					consumer: new u(r.getArg(e, "map"))
				}
			})
		}
		u.fromSourceMap = function (e) {
			return c.fromSourceMap(e)
		}, u.prototype._version = 3, u.prototype.__generatedMappings = null, Object.defineProperty(u.prototype, "_generatedMappings", {
			get: function () {
				return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings
			}
		}), u.prototype.__originalMappings = null, Object.defineProperty(u.prototype, "_originalMappings", {
			get: function () {
				return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings
			}
		}), u.prototype._charIsMappingSeparator = function (e, t) {
			var n = e.charAt(t);
			return ";" === n || "," === n
		}, u.prototype._parseMappings = function (e, t) {
			throw new Error("Subclasses must implement _parseMappings")
		}, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function (e, t, n) {
			var i, s = t || null;
			switch (n || u.GENERATED_ORDER) {
				case u.GENERATED_ORDER:
					i = this._generatedMappings;
					break;
				case u.ORIGINAL_ORDER:
					i = this._originalMappings;
					break;
				default:
					throw new Error("Unknown order of iteration.")
			}
			var o = this.sourceRoot;
			i.map(function (e) {
				var t = null === e.source ? null : this._sources.at(e.source);
				return null != t && null != o && (t = r.join(o, t)), {
					source: t,
					generatedLine: e.generatedLine,
					generatedColumn: e.generatedColumn,
					originalLine: e.originalLine,
					originalColumn: e.originalColumn,
					name: null === e.name ? null : this._names.at(e.name)
				}
			}, this).forEach(e, s)
		}, u.prototype.allGeneratedPositionsFor = function (e) {
			var t = r.getArg(e, "line"),
				n = {
					source: r.getArg(e, "source"),
					originalLine: t,
					originalColumn: r.getArg(e, "column", 0)
				};
			if (null != this.sourceRoot && (n.source = r.relative(this.sourceRoot, n.source)), !this._sources.has(n.source)) return [];
			n.source = this._sources.indexOf(n.source);
			var s = [],
				o = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, i.LEAST_UPPER_BOUND);
			if (o >= 0) {
				var a = this._originalMappings[o];
				if (void 0 === e.column)
					for (var u = a.originalLine; a && a.originalLine === u;) s.push({
						line: r.getArg(a, "generatedLine", null),
						column: r.getArg(a, "generatedColumn", null),
						lastColumn: r.getArg(a, "lastGeneratedColumn", null)
					}), a = this._originalMappings[++o];
				else
					for (var c = a.originalColumn; a && a.originalLine === t && a.originalColumn == c;) s.push({
						line: r.getArg(a, "generatedLine", null),
						column: r.getArg(a, "generatedColumn", null),
						lastColumn: r.getArg(a, "lastGeneratedColumn", null)
					}), a = this._originalMappings[++o]
			}
			return s
		}, t.SourceMapConsumer = u, c.prototype = Object.create(u.prototype), c.prototype.consumer = u, c.fromSourceMap = function (e) {
			var t = Object.create(c.prototype),
				n = t._names = s.fromArray(e._names.toArray(), !0),
				i = t._sources = s.fromArray(e._sources.toArray(), !0);
			t.sourceRoot = e._sourceRoot, t.sourcesContent = e._generateSourcesContent(t._sources.toArray(), t.sourceRoot), t.file = e._file;
			for (var o = e._mappings.toArray().slice(), u = t.__generatedMappings = [], p = t.__originalMappings = [], h = 0, f = o.length; h < f; h++) {
				var d = o[h],
					y = new l;
				y.generatedLine = d.generatedLine, y.generatedColumn = d.generatedColumn, d.source && (y.source = i.indexOf(d.source), y.originalLine = d.originalLine, y.originalColumn = d.originalColumn, d.name && (y.name = n.indexOf(d.name)), p.push(y)), u.push(y)
			}
			return a(t.__originalMappings, r.compareByOriginalPositions), t
		}, c.prototype._version = 3, Object.defineProperty(c.prototype, "sources", {
			get: function () {
				return this._sources.toArray().map(function (e) {
					return null != this.sourceRoot ? r.join(this.sourceRoot, e) : e
				}, this)
			}
		}), c.prototype._parseMappings = function (e, t) {
			for (var n, i, s, u, c, p = 1, h = 0, f = 0, d = 0, y = 0, m = 0, g = e.length, E = 0, T = {}, A = {}, S = [], b = []; E < g;)
				if (";" === e.charAt(E)) p++, E++, h = 0;
				else if ("," === e.charAt(E)) E++;
			else {
				for ((n = new l).generatedLine = p, u = E; u < g && !this._charIsMappingSeparator(e, u); u++);
				if (s = T[i = e.slice(E, u)]) E += i.length;
				else {
					for (s = []; E < u;) o.decode(e, E, A), c = A.value, E = A.rest, s.push(c);
					if (2 === s.length) throw new Error("Found a source, but no line and column");
					if (3 === s.length) throw new Error("Found a source and line, but no column");
					T[i] = s
				}
				n.generatedColumn = h + s[0], h = n.generatedColumn, s.length > 1 && (n.source = y + s[1], y += s[1], n.originalLine = f + s[2], f = n.originalLine, n.originalLine += 1, n.originalColumn = d + s[3], d = n.originalColumn, s.length > 4 && (n.name = m + s[4], m += s[4])), b.push(n), "number" == typeof n.originalLine && S.push(n)
			}
			a(b, r.compareByGeneratedPositionsDeflated), this.__generatedMappings = b, a(S, r.compareByOriginalPositions), this.__originalMappings = S
		}, c.prototype._findMapping = function (e, t, n, r, s, o) {
			if (e[n] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + e[n]);
			if (e[r] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + e[r]);
			return i.search(e, t, s, o)
		}, c.prototype.computeColumnSpans = function () {
			for (var e = 0; e < this._generatedMappings.length; ++e) {
				var t = this._generatedMappings[e];
				if (e + 1 < this._generatedMappings.length) {
					var n = this._generatedMappings[e + 1];
					if (t.generatedLine === n.generatedLine) {
						t.lastGeneratedColumn = n.generatedColumn - 1;
						continue
					}
				}
				t.lastGeneratedColumn = 1 / 0
			}
		}, c.prototype.originalPositionFor = function (e) {
			var t = {
					generatedLine: r.getArg(e, "line"),
					generatedColumn: r.getArg(e, "column")
				},
				n = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", r.compareByGeneratedPositionsDeflated, r.getArg(e, "bias", u.GREATEST_LOWER_BOUND));
			if (n >= 0) {
				var i = this._generatedMappings[n];
				if (i.generatedLine === t.generatedLine) {
					var s = r.getArg(i, "source", null);
					null !== s && (s = this._sources.at(s), null != this.sourceRoot && (s = r.join(this.sourceRoot, s)));
					var o = r.getArg(i, "name", null);
					return null !== o && (o = this._names.at(o)), {
						source: s,
						line: r.getArg(i, "originalLine", null),
						column: r.getArg(i, "originalColumn", null),
						name: o
					}
				}
			}
			return {
				source: null,
				line: null,
				column: null,
				name: null
			}
		}, c.prototype.hasContentsOfAllSources = function () {
			return !!this.sourcesContent && (this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (e) {
				return null == e
			}))
		}, c.prototype.sourceContentFor = function (e, t) {
			if (!this.sourcesContent) return null;
			if (null != this.sourceRoot && (e = r.relative(this.sourceRoot, e)), this._sources.has(e)) return this.sourcesContent[this._sources.indexOf(e)];
			var n;
			if (null != this.sourceRoot && (n = r.urlParse(this.sourceRoot))) {
				var i = e.replace(/^file:\/\//, "");
				if ("file" == n.scheme && this._sources.has(i)) return this.sourcesContent[this._sources.indexOf(i)];
				if ((!n.path || "/" == n.path) && this._sources.has("/" + e)) return this.sourcesContent[this._sources.indexOf("/" + e)]
			}
			if (t) return null;
			throw new Error('"' + e + '" is not in the SourceMap.')
		}, c.prototype.generatedPositionFor = function (e) {
			var t = r.getArg(e, "source");
			if (null != this.sourceRoot && (t = r.relative(this.sourceRoot, t)), !this._sources.has(t)) return {
				line: null,
				column: null,
				lastColumn: null
			};
			var n = {
					source: t = this._sources.indexOf(t),
					originalLine: r.getArg(e, "line"),
					originalColumn: r.getArg(e, "column")
				},
				i = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, r.getArg(e, "bias", u.GREATEST_LOWER_BOUND));
			if (i >= 0) {
				var s = this._originalMappings[i];
				if (s.source === n.source) return {
					line: r.getArg(s, "generatedLine", null),
					column: r.getArg(s, "generatedColumn", null),
					lastColumn: r.getArg(s, "lastGeneratedColumn", null)
				}
			}
			return {
				line: null,
				column: null,
				lastColumn: null
			}
		}, t.BasicSourceMapConsumer = c, p.prototype = Object.create(u.prototype), p.prototype.constructor = u, p.prototype._version = 3, Object.defineProperty(p.prototype, "sources", {
			get: function () {
				for (var e = [], t = 0; t < this._sections.length; t++)
					for (var n = 0; n < this._sections[t].consumer.sources.length; n++) e.push(this._sections[t].consumer.sources[n]);
				return e
			}
		}), p.prototype.originalPositionFor = function (e) {
			var t = {
					generatedLine: r.getArg(e, "line"),
					generatedColumn: r.getArg(e, "column")
				},
				n = i.search(t, this._sections, function (e, t) {
					var n = e.generatedLine - t.generatedOffset.generatedLine;
					return n || e.generatedColumn - t.generatedOffset.generatedColumn
				}),
				s = this._sections[n];
			return s ? s.consumer.originalPositionFor({
				line: t.generatedLine - (s.generatedOffset.generatedLine - 1),
				column: t.generatedColumn - (s.generatedOffset.generatedLine === t.generatedLine ? s.generatedOffset.generatedColumn - 1 : 0),
				bias: e.bias
			}) : {
				source: null,
				line: null,
				column: null,
				name: null
			}
		}, p.prototype.hasContentsOfAllSources = function () {
			return this._sections.every(function (e) {
				return e.consumer.hasContentsOfAllSources()
			})
		}, p.prototype.sourceContentFor = function (e, t) {
			for (var n = 0; n < this._sections.length; n++) {
				var r = this._sections[n].consumer.sourceContentFor(e, !0);
				if (r) return r
			}
			if (t) return null;
			throw new Error('"' + e + '" is not in the SourceMap.')
		}, p.prototype.generatedPositionFor = function (e) {
			for (var t = 0; t < this._sections.length; t++) {
				var n = this._sections[t];
				if (-1 !== n.consumer.sources.indexOf(r.getArg(e, "source"))) {
					var i = n.consumer.generatedPositionFor(e);
					if (i) return {
						line: i.line + (n.generatedOffset.generatedLine - 1),
						column: i.column + (n.generatedOffset.generatedLine === i.line ? n.generatedOffset.generatedColumn - 1 : 0)
					}
				}
			}
			return {
				line: null,
				column: null
			}
		}, p.prototype._parseMappings = function (e, t) {
			this.__generatedMappings = [], this.__originalMappings = [];
			for (var n = 0; n < this._sections.length; n++)
				for (var i = this._sections[n], s = i.consumer._generatedMappings, o = 0; o < s.length; o++) {
					var u = s[o],
						c = i.consumer._sources.at(u.source);
					null !== i.consumer.sourceRoot && (c = r.join(i.consumer.sourceRoot, c)), this._sources.add(c), c = this._sources.indexOf(c);
					var l = i.consumer._names.at(u.name);
					this._names.add(l), l = this._names.indexOf(l);
					var p = {
						source: c,
						generatedLine: u.generatedLine + (i.generatedOffset.generatedLine - 1),
						generatedColumn: u.generatedColumn + (i.generatedOffset.generatedLine === u.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0),
						originalLine: u.originalLine,
						originalColumn: u.originalColumn,
						name: l
					};
					this.__generatedMappings.push(p), "number" == typeof p.originalLine && this.__originalMappings.push(p)
				}
			a(this.__generatedMappings, r.compareByGeneratedPositionsDeflated), a(this.__originalMappings, r.compareByOriginalPositions)
		}, t.IndexedSourceMapConsumer = p
	}, function (e, t) {
		t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2, t.search = function (e, n, r, i) {
			if (0 === n.length) return -1;
			var s = function e(n, r, i, s, o, a) {
				var u = Math.floor((r - n) / 2) + n,
					c = o(i, s[u], !0);
				return 0 === c ? u : c > 0 ? r - u > 1 ? e(u, r, i, s, o, a) : a == t.LEAST_UPPER_BOUND ? r < s.length ? r : -1 : u : u - n > 1 ? e(n, u, i, s, o, a) : a == t.LEAST_UPPER_BOUND ? u : n < 0 ? -1 : n
			}(-1, n.length, e, n, r, i || t.GREATEST_LOWER_BOUND);
			if (s < 0) return -1;
			for (; s - 1 >= 0 && 0 === r(n[s], n[s - 1], !0);) --s;
			return s
		}
	}, function (e, t) {
		function n(e, t, n) {
			var r = e[t];
			e[t] = e[n], e[n] = r
		}

		function r(e, t, i, s) {
			if (i < s) {
				var o = i - 1;
				n(e, function (e, t) {
					return Math.round(e + Math.random() * (t - e))
				}(i, s), s);
				for (var a = e[s], u = i; u < s; u++) t(e[u], a) <= 0 && n(e, o += 1, u);
				n(e, o + 1, u);
				var c = o + 1;
				r(e, t, i, c - 1), r(e, t, c + 1, s)
			}
		}
		t.quickSort = function (e, t) {
			r(e, t, 0, e.length - 1)
		}
	}, function (e, t, n) {
		var r = n(101).SourceMapGenerator,
			i = n(17),
			s = /(\r?\n)/,
			o = "$$$isSourceNode$$$";

		function a(e, t, n, r, i) {
			this.children = [], this.sourceContents = {}, this.line = null == e ? null : e, this.column = null == t ? null : t, this.source = null == n ? null : n, this.name = null == i ? null : i, this[o] = !0, null != r && this.add(r)
		}
		a.fromStringWithSourceMap = function (e, t, n) {
			var r = new a,
				o = e.split(s),
				u = function () {
					return o.shift() + (o.shift() || "")
				},
				c = 1,
				l = 0,
				p = null;
			return t.eachMapping(function (e) {
				if (null !== p) {
					if (!(c < e.generatedLine)) {
						var t = (n = o[0]).substr(0, e.generatedColumn - l);
						return o[0] = n.substr(e.generatedColumn - l), l = e.generatedColumn, h(p, t), void(p = e)
					}
					h(p, u()), c++, l = 0
				}
				for (; c < e.generatedLine;) r.add(u()), c++;
				if (l < e.generatedColumn) {
					var n = o[0];
					r.add(n.substr(0, e.generatedColumn)), o[0] = n.substr(e.generatedColumn), l = e.generatedColumn
				}
				p = e
			}, this), o.length > 0 && (p && h(p, u()), r.add(o.join(""))), t.sources.forEach(function (e) {
				var s = t.sourceContentFor(e);
				null != s && (null != n && (e = i.join(n, e)), r.setSourceContent(e, s))
			}), r;

			function h(e, t) {
				if (null === e || void 0 === e.source) r.add(t);
				else {
					var s = n ? i.join(n, e.source) : e.source;
					r.add(new a(e.originalLine, e.originalColumn, s, t, e.name))
				}
			}
		}, a.prototype.add = function (e) {
			if (Array.isArray(e)) e.forEach(function (e) {
				this.add(e)
			}, this);
			else {
				if (!e[o] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
				e && this.children.push(e)
			}
			return this
		}, a.prototype.prepend = function (e) {
			if (Array.isArray(e))
				for (var t = e.length - 1; t >= 0; t--) this.prepend(e[t]);
			else {
				if (!e[o] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
				this.children.unshift(e)
			}
			return this
		}, a.prototype.walk = function (e) {
			for (var t, n = 0, r = this.children.length; n < r; n++)(t = this.children[n])[o] ? t.walk(e) : "" !== t && e(t, {
				source: this.source,
				line: this.line,
				column: this.column,
				name: this.name
			})
		}, a.prototype.join = function (e) {
			var t, n, r = this.children.length;
			if (r > 0) {
				for (t = [], n = 0; n < r - 1; n++) t.push(this.children[n]), t.push(e);
				t.push(this.children[n]), this.children = t
			}
			return this
		}, a.prototype.replaceRight = function (e, t) {
			var n = this.children[this.children.length - 1];
			return n[o] ? n.replaceRight(e, t) : "string" == typeof n ? this.children[this.children.length - 1] = n.replace(e, t) : this.children.push("".replace(e, t)), this
		}, a.prototype.setSourceContent = function (e, t) {
			this.sourceContents[i.toSetString(e)] = t
		}, a.prototype.walkSourceContents = function (e) {
			for (var t = 0, n = this.children.length; t < n; t++) this.children[t][o] && this.children[t].walkSourceContents(e);
			var r = Object.keys(this.sourceContents);
			for (t = 0, n = r.length; t < n; t++) e(i.fromSetString(r[t]), this.sourceContents[r[t]])
		}, a.prototype.toString = function () {
			var e = "";
			return this.walk(function (t) {
				e += t
			}), e
		}, a.prototype.toStringWithSourceMap = function (e) {
			var t = {
					code: "",
					line: 1,
					column: 0
				},
				n = new r(e),
				i = !1,
				s = null,
				o = null,
				a = null,
				u = null;
			return this.walk(function (e, r) {
				t.code += e, null !== r.source && null !== r.line && null !== r.column ? (s === r.source && o === r.line && a === r.column && u === r.name || n.addMapping({
					source: r.source,
					original: {
						line: r.line,
						column: r.column
					},
					generated: {
						line: t.line,
						column: t.column
					},
					name: r.name
				}), s = r.source, o = r.line, a = r.column, u = r.name, i = !0) : i && (n.addMapping({
					generated: {
						line: t.line,
						column: t.column
					}
				}), s = null, i = !1);
				for (var c = 0, l = e.length; c < l; c++) 10 === e.charCodeAt(c) ? (t.line++, t.column = 0, c + 1 === l ? (s = null, i = !1) : i && n.addMapping({
					source: r.source,
					original: {
						line: r.line,
						column: r.column
					},
					generated: {
						line: t.line,
						column: t.column
					},
					name: r.name
				})) : t.column++
			}), this.walkSourceContents(function (e, t) {
				n.setSourceContent(e, t)
			}), {
				code: t.code,
				map: n
			}
		}, t.SourceNode = a
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = l(n(273));
			return r = function () {
				return e
			}, e
		}

		function i() {
			const e = l(n(97));
			return i = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var s = l(n(274)),
			o = c(n(104));

		function a() {
			const e = c(n(0));
			return a = function () {
				return e
			}, e
		}
		var u = c(n(278));

		function c(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e)
					if (Object.prototype.hasOwnProperty.call(e, n)) {
						var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
						r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
					}
			return t.default = e, t
		}

		function l(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		const p = /e/i,
			h = /\.0+$/,
			f = /^0[box]/;
		class d {
			constructor(e, t) {
				this.inForStatementInitCounter = 0, this._printStack = [], this._indent = 0, this._insideAux = !1, this._printedCommentStarts = {}, this._parenPushNewlineState = null, this._noLineTerminator = !1, this._printAuxAfterOnNextUserNode = !1, this._printedComments = new WeakSet, this._endsWithInteger = !1, this._endsWithWord = !1, this.format = e || {}, this._buf = new s.default(t)
			}
			generate(e) {
				return this.print(e), this._maybeAddAuxComment(), this._buf.get()
			}
			indent() {
				this.format.compact || this.format.concise || this._indent++
			}
			dedent() {
				this.format.compact || this.format.concise || this._indent--
			}
			semicolon(e = !1) {
				this._maybeAddAuxComment(), this._append(";", !e)
			}
			rightBrace() {
				this.format.minified && this._buf.removeLastSemicolon(), this.token("}")
			}
			space(e = !1) {
				this.format.compact || (this._buf.hasContent() && !this.endsWith(" ") && !this.endsWith("\n") || e) && this._space()
			}
			word(e) {
				(this._endsWithWord || this.endsWith("/") && 0 === e.indexOf("/")) && this._space(), this._maybeAddAuxComment(), this._append(e), this._endsWithWord = !0
			}
			number(e) {
				this.word(e), this._endsWithInteger = (0, r().default)(+e) && !f.test(e) && !p.test(e) && !h.test(e) && "." !== e[e.length - 1]
			}
			token(e) {
				("--" === e && this.endsWith("!") || "+" === e[0] && this.endsWith("+") || "-" === e[0] && this.endsWith("-") || "." === e[0] && this._endsWithInteger) && this._space(), this._maybeAddAuxComment(), this._append(e)
			}
			newline(e) {
				if (!this.format.retainLines && !this.format.compact)
					if (this.format.concise) this.space();
					else if (!(this.endsWith("\n\n") || ("number" != typeof e && (e = 1), e = Math.min(2, e), (this.endsWith("{\n") || this.endsWith(":\n")) && e--, e <= 0)))
					for (let t = 0; t < e; t++) this._newline()
			}
			endsWith(e) {
				return this._buf.endsWith(e)
			}
			removeTrailingNewline() {
				this._buf.removeTrailingNewline()
			}
			exactSource(e, t) {
				this._catchUp("start", e), this._buf.exactSource(e, t)
			}
			source(e, t) {
				this._catchUp(e, t), this._buf.source(e, t)
			}
			withSource(e, t, n) {
				this._catchUp(e, t), this._buf.withSource(e, t, n)
			}
			_space() {
				this._append(" ", !0)
			}
			_newline() {
				this._append("\n", !0)
			}
			_append(e, t = !1) {
				this._maybeAddParen(e), this._maybeIndent(e), t ? this._buf.queue(e) : this._buf.append(e), this._endsWithWord = !1, this._endsWithInteger = !1
			}
			_maybeIndent(e) {
				this._indent && this.endsWith("\n") && "\n" !== e[0] && this._buf.queue(this._getIndent())
			}
			_maybeAddParen(e) {
				const t = this._parenPushNewlineState;
				if (!t) return;
				let n;
				for (this._parenPushNewlineState = null, n = 0; n < e.length && " " === e[n]; n++) continue;
				if (n === e.length) return;
				const r = e[n];
				if ("\n" !== r) {
					if ("/" !== r) return;
					if (n + 1 === e.length) return;
					const t = e[n + 1];
					if ("/" !== t && "*" !== t) return
				}
				this.token("("), this.indent(), t.printed = !0
			}
			_catchUp(e, t) {
				if (!this.format.retainLines) return;
				const n = t ? t[e] : null;
				if (n && null !== n.line) {
					const e = n.line - this._buf.getCurrentLine();
					for (let t = 0; t < e; t++) this._newline()
				}
			}
			_getIndent() {
				return (0, i().default)(this.format.indent.style, this._indent)
			}
			startTerminatorless(e = !1) {
				return e ? (this._noLineTerminator = !0, null) : this._parenPushNewlineState = {
					printed: !1
				}
			}
			endTerminatorless(e) {
				this._noLineTerminator = !1, e && e.printed && (this.dedent(), this.newline(), this.token(")"))
			}
			print(e, t) {
				if (!e) return;
				const n = this.format.concise;
				e._compact && (this.format.concise = !0);
				const r = this[e.type];
				if (!r) throw new ReferenceError(`unknown node of type ${JSON.stringify(e.type)} with constructor ${JSON.stringify(e&&e.constructor.name)}`);
				this._printStack.push(e);
				const i = this._insideAux;
				this._insideAux = !e.loc, this._maybeAddAuxComment(this._insideAux && !i);
				let s = o.needsParens(e, t, this._printStack);
				this.format.retainFunctionParens && "FunctionExpression" === e.type && e.extra && e.extra.parenthesized && (s = !0), s && this.token("("), this._printLeadingComments(e);
				const u = a().isProgram(e) || a().isFile(e) ? null : e.loc;
				this.withSource("start", u, () => {
					r.call(this, e, t)
				}), this._printTrailingComments(e), s && this.token(")"), this._printStack.pop(), this.format.concise = n, this._insideAux = i
			}
			_maybeAddAuxComment(e) {
				e && this._printAuxBeforeComment(), this._insideAux || this._printAuxAfterComment()
			}
			_printAuxBeforeComment() {
				if (this._printAuxAfterOnNextUserNode) return;
				this._printAuxAfterOnNextUserNode = !0;
				const e = this.format.auxiliaryCommentBefore;
				e && this._printComment({
					type: "CommentBlock",
					value: e
				})
			}
			_printAuxAfterComment() {
				if (!this._printAuxAfterOnNextUserNode) return;
				this._printAuxAfterOnNextUserNode = !1;
				const e = this.format.auxiliaryCommentAfter;
				e && this._printComment({
					type: "CommentBlock",
					value: e
				})
			}
			getPossibleRaw(e) {
				const t = e.extra;
				if (t && null != t.raw && null != t.rawValue && e.value === t.rawValue) return t.raw
			}
			printJoin(e, t, n = {}) {
				if (!e || !e.length) return;
				n.indent && this.indent();
				const r = {
					addNewlines: n.addNewlines
				};
				for (let i = 0; i < e.length; i++) {
					const s = e[i];
					s && (n.statement && this._printNewline(!0, s, t, r), this.print(s, t), n.iterator && n.iterator(s, i), n.separator && i < e.length - 1 && n.separator.call(this), n.statement && this._printNewline(!1, s, t, r))
				}
				n.indent && this.dedent()
			}
			printAndIndentOnComments(e, t) {
				const n = e.leadingComments && e.leadingComments.length > 0;
				n && this.indent(), this.print(e, t), n && this.dedent()
			}
			printBlock(e) {
				const t = e.body;
				a().isEmptyStatement(t) || this.space(), this.print(t, e)
			}
			_printTrailingComments(e) {
				this._printComments(this._getComments(!1, e))
			}
			_printLeadingComments(e) {
				this._printComments(this._getComments(!0, e))
			}
			printInnerComments(e, t = !0) {
				e.innerComments && e.innerComments.length && (t && this.indent(), this._printComments(e.innerComments), t && this.dedent())
			}
			printSequence(e, t, n = {}) {
				return n.statement = !0, this.printJoin(e, t, n)
			}
			printList(e, t, n = {}) {
				return null == n.separator && (n.separator = y), this.printJoin(e, t, n)
			}
			_printNewline(e, t, n, r) {
				if (this.format.retainLines || this.format.compact) return;
				if (this.format.concise) return void this.space();
				let i = 0;
				if (this._buf.hasContent()) {
					e || i++, r.addNewlines && (i += r.addNewlines(e, t) || 0), (e ? o.needsWhitespaceBefore : o.needsWhitespaceAfter)(t, n) && i++
				}
				this.newline(i)
			}
			_getComments(e, t) {
				return t && (e ? t.leadingComments : t.trailingComments) || []
			}
			_printComment(e) {
				if (!this.format.shouldPrintComment(e.value)) return;
				if (e.ignore) return;
				if (this._printedComments.has(e)) return;
				if (this._printedComments.add(e), null != e.start) {
					if (this._printedCommentStarts[e.start]) return;
					this._printedCommentStarts[e.start] = !0
				}
				const t = "CommentBlock" === e.type;
				this.newline(this._buf.hasContent() && !this._noLineTerminator && t ? 1 : 0), this.endsWith("[") || this.endsWith("{") || this.space();
				let n = t || this._noLineTerminator ? `/*${e.value}*/` : `//${e.value}\n`;
				if (t && this.format.indent.adjustMultilineComment) {
					const t = e.loc && e.loc.start.column;
					if (t) {
						const e = new RegExp("\\n\\s{1," + t + "}", "g");
						n = n.replace(e, "\n")
					}
					const r = Math.max(this._getIndent().length, this._buf.getCurrentColumn());
					n = n.replace(/\n(?!$)/g, `\n${(0,i().default)(" ",r)}`)
				}
				this.endsWith("/") && this._space(), this.withSource("start", e.loc, () => {
					this._append(n)
				}), this.newline(t && !this._noLineTerminator ? 1 : 0)
			}
			_printComments(e) {
				if (e && e.length)
					for (const t of e) this._printComment(t)
			}
		}

		function y() {
			this.token(","), this.space()
		}
		t.default = d, Object.assign(d.prototype, u)
	}, function (e, t, n) {
		var r = n(50);
		e.exports = function (e) {
			return "number" == typeof e && e == r(e)
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(275));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		const i = /^[ \t]+$/;
		t.default = class {
			constructor(e) {
				this._map = null, this._buf = [], this._last = "", this._queue = [], this._position = {
					line: 1,
					column: 0
				}, this._sourcePosition = {
					identifierName: null,
					line: null,
					column: null,
					filename: null
				}, this._disallowedPop = null, this._map = e
			}
			get() {
				this._flush();
				const e = this._map,
					t = {
						code: (0, r().default)(this._buf.join("")),
						map: null,
						rawMappings: e && e.getRawMappings()
					};
				return e && Object.defineProperty(t, "map", {
					configurable: !0,
					enumerable: !0,
					get() {
						return this.map = e.get()
					},
					set(e) {
						Object.defineProperty(this, "map", {
							value: e,
							writable: !0
						})
					}
				}), t
			}
			append(e) {
				this._flush();
				const {
					line: t,
					column: n,
					filename: r,
					identifierName: i,
					force: s
				} = this._sourcePosition;
				this._append(e, t, n, i, r, s)
			}
			queue(e) {
				if ("\n" === e)
					for (; this._queue.length > 0 && i.test(this._queue[0][0]);) this._queue.shift();
				const {
					line: t,
					column: n,
					filename: r,
					identifierName: s,
					force: o
				} = this._sourcePosition;
				this._queue.unshift([e, t, n, s, r, o])
			}
			_flush() {
				let e;
				for (; e = this._queue.pop();) this._append(...e)
			}
			_append(e, t, n, r, i, s) {
				this._map && "\n" !== e[0] && this._map.mark(this._position.line, this._position.column, t, n, r, i, s), this._buf.push(e), this._last = e[e.length - 1];
				for (let t = 0; t < e.length; t++) "\n" === e[t] ? (this._position.line++, this._position.column = 0) : this._position.column++
			}
			removeTrailingNewline() {
				this._queue.length > 0 && "\n" === this._queue[0][0] && this._queue.shift()
			}
			removeLastSemicolon() {
				this._queue.length > 0 && ";" === this._queue[0][0] && this._queue.shift()
			}
			endsWith(e) {
				if (1 === e.length) {
					let t;
					if (this._queue.length > 0) {
						const e = this._queue[0][0];
						t = e[e.length - 1]
					} else t = this._last;
					return t === e
				}
				const t = this._last + this._queue.reduce((e, t) => t[0] + e, "");
				return e.length <= t.length && t.slice(-e.length) === e
			}
			hasContent() {
				return this._queue.length > 0 || !!this._last
			}
			exactSource(e, t) {
				this.source("start", e, !0), t(), this.source("end", e), this._disallowPop("start", e)
			}
			source(e, t, n) {
				e && !t || this._normalizePosition(e, t, this._sourcePosition, n)
			}
			withSource(e, t, n) {
				if (!this._map) return n();
				const r = this._sourcePosition.line,
					i = this._sourcePosition.column,
					s = this._sourcePosition.filename,
					o = this._sourcePosition.identifierName;
				this.source(e, t), n(), this._sourcePosition.force && this._sourcePosition.line === r && this._sourcePosition.column === i && this._sourcePosition.filename === s || this._disallowedPop && this._disallowedPop.line === r && this._disallowedPop.column === i && this._disallowedPop.filename === s || (this._sourcePosition.line = r, this._sourcePosition.column = i, this._sourcePosition.filename = s, this._sourcePosition.identifierName = o, this._sourcePosition.force = !1, this._disallowedPop = null)
			}
			_disallowPop(e, t) {
				e && !t || (this._disallowedPop = this._normalizePosition(e, t))
			}
			_normalizePosition(e, t, n, r) {
				const i = t ? t[e] : null;
				void 0 === n && (n = {
					identifierName: null,
					line: null,
					column: null,
					filename: null,
					force: !1
				});
				const s = n.line,
					o = n.column,
					a = n.filename;
				return n.identifierName = "start" === e && t && t.identifierName || null, n.line = i ? i.line : null, n.column = i ? i.column : null, n.filename = t && t.filename || null, (r || n.line !== s || n.column !== o || n.filename !== a) && (n.force = r), n
			}
			getCurrentColumn() {
				const e = this._queue.reduce((e, t) => t[0] + e, ""),
					t = e.lastIndexOf("\n");
				return -1 === t ? this._position.column + e.length : e.length - 1 - t
			}
			getCurrentLine() {
				const e = this._queue.reduce((e, t) => t[0] + e, "");
				let t = 0;
				for (let n = 0; n < e.length; n++) "\n" === e[n] && t++;
				return this._position.line + t
			}
		}
	}, function (e, t, n) {
		"use strict";
		e.exports = function (e) {
			for (var t = e.length;
				/[\s\uFEFF\u00A0]/.test(e[t - 1]);) t--;
			return e.slice(0, t)
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}

		function i(e, t = {}) {
			return r().isMemberExpression(e) ? (i(e.object, t), e.computed && i(e.property, t)) : r().isBinary(e) || r().isAssignmentExpression(e) ? (i(e.left, t), i(e.right, t)) : r().isCallExpression(e) ? (t.hasCall = !0, i(e.callee, t)) : r().isFunction(e) ? t.hasFunction = !0 : r().isIdentifier(e) && (t.hasHelper = t.hasHelper || s(e.callee)), t
		}

		function s(e) {
			return r().isMemberExpression(e) ? s(e.object) || s(e.property) : r().isIdentifier(e) ? "require" === e.name || "_" === e.name[0] : r().isCallExpression(e) ? s(e.callee) : !(!r().isBinary(e) && !r().isAssignmentExpression(e)) && (r().isIdentifier(e.left) && s(e.left) || s(e.right))
		}

		function o(e) {
			return r().isLiteral(e) || r().isObjectExpression(e) || r().isArrayExpression(e) || r().isIdentifier(e) || r().isMemberExpression(e)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.list = t.nodes = void 0;
		const a = {
			AssignmentExpression(e) {
				const t = i(e.right);
				if (t.hasCall && t.hasHelper || t.hasFunction) return {
					before: t.hasFunction,
					after: !0
				}
			},
			SwitchCase: (e, t) => ({
				before: e.consequent.length || t.cases[0] === e,
				after: !e.consequent.length && t.cases[t.cases.length - 1] === e
			}),
			LogicalExpression(e) {
				if (r().isFunction(e.left) || r().isFunction(e.right)) return {
					after: !0
				}
			},
			Literal(e) {
				if ("use strict" === e.value) return {
					after: !0
				}
			},
			CallExpression(e) {
				if (r().isFunction(e.callee) || s(e)) return {
					before: !0,
					after: !0
				}
			},
			VariableDeclaration(e) {
				for (let t = 0; t < e.declarations.length; t++) {
					const n = e.declarations[t];
					let r = s(n.id) && !o(n.init);
					if (!r) {
						const e = i(n.init);
						r = s(n.init) && e.hasCall || e.hasFunction
					}
					if (r) return {
						before: !0,
						after: !0
					}
				}
			},
			IfStatement(e) {
				if (r().isBlockStatement(e.consequent)) return {
					before: !0,
					after: !0
				}
			}
		};
		t.nodes = a, a.ObjectProperty = a.ObjectTypeProperty = a.ObjectMethod = function (e, t) {
			if (t.properties[0] === e) return {
				before: !0
			}
		}, a.ObjectTypeCallProperty = function (e, t) {
			if (!(t.callProperties[0] !== e || t.properties && t.properties.length)) return {
				before: !0
			}
		}, a.ObjectTypeIndexer = function (e, t) {
			if (!(t.indexers[0] !== e || t.properties && t.properties.length || t.callProperties && t.callProperties.length)) return {
				before: !0
			}
		}, a.ObjectTypeInternalSlot = function (e, t) {
			if (!(t.internalSlots[0] !== e || t.properties && t.properties.length || t.callProperties && t.callProperties.length || t.indexers && t.indexers.length)) return {
				before: !0
			}
		};
		const u = {
			VariableDeclaration: e => e.declarations.map(e => e.init),
			ArrayExpression: e => e.elements,
			ObjectExpression: e => e.properties
		};
		t.list = u, [
			["Function", !0],
			["Class", !0],
			["Loop", !0],
			["LabeledStatement", !0],
			["SwitchStatement", !0],
			["TryStatement", !0]
		].forEach(function ([e, t]) {
			"boolean" == typeof t && (t = {
				after: t,
				before: t
			}), [e].concat(r().FLIPPED_ALIAS_KEYS[e] || []).forEach(function (e) {
				a[e] = function () {
					return t
				}
			})
		})
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.NullableTypeAnnotation = function (e, t) {
			return r().isArrayTypeAnnotation(t)
		}, t.FunctionTypeAnnotation = function (e, t) {
			return r().isUnionTypeAnnotation(t) || r().isIntersectionTypeAnnotation(t) || r().isArrayTypeAnnotation(t)
		}, t.UpdateExpression = function (e, t) {
			return r().isMemberExpression(t, {
				object: e
			}) || r().isCallExpression(t, {
				callee: e
			}) || r().isNewExpression(t, {
				callee: e
			}) || s(e, t)
		}, t.ObjectExpression = function (e, t, n) {
			return u(n, {
				considerArrow: !0
			})
		}, t.DoExpression = function (e, t, n) {
			return u(n)
		}, t.Binary = function (e, t) {
			if ("**" === e.operator && r().isBinaryExpression(t, {
					operator: "**"
				})) return t.left === e;
			if (s(e, t)) return !0;
			if ((r().isCallExpression(t) || r().isNewExpression(t)) && t.callee === e || r().isUnaryLike(t) || r().isMemberExpression(t) && t.object === e || r().isAwaitExpression(t)) return !0;
			if (r().isBinary(t)) {
				const n = t.operator,
					s = i[n],
					o = e.operator,
					a = i[o];
				if (s === a && t.right === e && !r().isLogicalExpression(t) || s > a) return !0
			}
			return !1
		}, t.IntersectionTypeAnnotation = t.UnionTypeAnnotation = function (e, t) {
			return r().isArrayTypeAnnotation(t) || r().isNullableTypeAnnotation(t) || r().isIntersectionTypeAnnotation(t) || r().isUnionTypeAnnotation(t)
		}, t.TSAsExpression = function () {
			return !0
		}, t.TSTypeAssertion = function () {
			return !0
		}, t.TSIntersectionType = t.TSUnionType = function (e, t) {
			return r().isTSArrayType(t) || r().isTSOptionalType(t) || r().isTSIntersectionType(t) || r().isTSUnionType(t) || r().isTSRestType(t)
		}, t.BinaryExpression = function (e, t) {
			return "in" === e.operator && (r().isVariableDeclarator(t) || r().isFor(t))
		}, t.SequenceExpression = function (e, t) {
			if (r().isForStatement(t) || r().isThrowStatement(t) || r().isReturnStatement(t) || r().isIfStatement(t) && t.test === e || r().isWhileStatement(t) && t.test === e || r().isForInStatement(t) && t.right === e || r().isSwitchStatement(t) && t.discriminant === e || r().isExpressionStatement(t) && t.expression === e) return !1;
			return !0
		}, t.AwaitExpression = t.YieldExpression = function (e, t) {
			return r().isBinary(t) || r().isUnaryLike(t) || r().isCallExpression(t) || r().isMemberExpression(t) || r().isNewExpression(t) || r().isAwaitExpression(t) && r().isYieldExpression(e) || r().isConditionalExpression(t) && e === t.test || s(e, t)
		}, t.ClassExpression = function (e, t, n) {
			return u(n, {
				considerDefaultExports: !0
			})
		}, t.UnaryLike = o, t.FunctionExpression = function (e, t, n) {
			return u(n, {
				considerDefaultExports: !0
			})
		}, t.ArrowFunctionExpression = function (e, t) {
			return r().isExportDeclaration(t) || a(e, t)
		}, t.ConditionalExpression = a, t.OptionalMemberExpression = function (e, t) {
			return r().isCallExpression(t) || r().isMemberExpression(t)
		}, t.AssignmentExpression = function (e) {
			return !!r().isObjectPattern(e.left) || a(...arguments)
		}, t.NewExpression = function (e, t) {
			return s(e, t)
		};
		const i = {
				"||": 0,
				"&&": 1,
				"|": 2,
				"^": 3,
				"&": 4,
				"==": 5,
				"===": 5,
				"!=": 5,
				"!==": 5,
				"<": 6,
				">": 6,
				"<=": 6,
				">=": 6,
				in: 6,
				instanceof: 6,
				">>": 7,
				"<<": 7,
				">>>": 7,
				"+": 8,
				"-": 8,
				"*": 9,
				"/": 9,
				"%": 9,
				"**": 10
			},
			s = (e, t) => (r().isClassDeclaration(t) || r().isClassExpression(t)) && t.superClass === e;

		function o(e, t) {
			return r().isMemberExpression(t, {
				object: e
			}) || r().isCallExpression(t, {
				callee: e
			}) || r().isNewExpression(t, {
				callee: e
			}) || r().isBinaryExpression(t, {
				operator: "**",
				left: e
			}) || s(e, t)
		}

		function a(e, t) {
			return !!(r().isUnaryLike(t) || r().isBinary(t) || r().isConditionalExpression(t, {
				test: e
			}) || r().isAwaitExpression(t) || r().isOptionalMemberExpression(t) || r().isTaggedTemplateExpression(t) || r().isTSTypeAssertion(t) || r().isTSAsExpression(t)) || o(e, t)
		}

		function u(e, {
			considerArrow: t = !1,
			considerDefaultExports: n = !1
		} = {}) {
			let i = e.length - 1,
				s = e[i],
				o = e[--i];
			for (; i > 0;) {
				if (r().isExpressionStatement(o, {
						expression: s
					}) || r().isTaggedTemplateExpression(o) || n && r().isExportDefaultDeclaration(o, {
						declaration: s
					}) || t && r().isArrowFunctionExpression(o, {
						body: s
					})) return !0;
				if (!(r().isCallExpression(o, {
						callee: s
					}) || r().isSequenceExpression(o) && o.expressions[0] === s || r().isMemberExpression(o, {
						object: s
					}) || r().isConditional(o, {
						test: s
					}) || r().isBinary(o, {
						left: s
					}) || r().isAssignmentExpression(o, {
						left: s
					}))) return !1;
				s = o, o = e[--i]
			}
			return !1
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(279);
		Object.keys(r).forEach(function (e) {
			"default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return r[e]
				}
			})
		});
		var i = n(280);
		Object.keys(i).forEach(function (e) {
			"default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return i[e]
				}
			})
		});
		var s = n(281);
		Object.keys(s).forEach(function (e) {
			"default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return s[e]
				}
			})
		});
		var o = n(282);
		Object.keys(o).forEach(function (e) {
			"default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return o[e]
				}
			})
		});
		var a = n(283);
		Object.keys(a).forEach(function (e) {
			"default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return a[e]
				}
			})
		});
		var u = n(105);
		Object.keys(u).forEach(function (e) {
			"default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return u[e]
				}
			})
		});
		var c = n(106);
		Object.keys(c).forEach(function (e) {
			"default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return c[e]
				}
			})
		});
		var l = n(289);
		Object.keys(l).forEach(function (e) {
			"default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return l[e]
				}
			})
		});
		var p = n(290);
		Object.keys(p).forEach(function (e) {
			"default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return p[e]
				}
			})
		});
		var h = n(291);
		Object.keys(h).forEach(function (e) {
			"default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return h[e]
				}
			})
		});
		var f = n(292);
		Object.keys(f).forEach(function (e) {
			"default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
				enumerable: !0,
				get: function () {
					return f[e]
				}
			})
		})
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.TaggedTemplateExpression = function (e) {
			this.print(e.tag, e), this.print(e.typeParameters, e), this.print(e.quasi, e)
		}, t.TemplateElement = function (e, t) {
			const n = t.quasis[0] === e,
				r = t.quasis[t.quasis.length - 1] === e,
				i = (n ? "`" : "}") + e.value.raw + (r ? "`" : "${");
			this.token(i)
		}, t.TemplateLiteral = function (e) {
			const t = e.quasis;
			for (let n = 0; n < t.length; n++) this.print(t[n], e), n + 1 < t.length && this.print(e.expressions[n], e)
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = s(n(0));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.UnaryExpression = function (e) {
			"void" === e.operator || "delete" === e.operator || "typeof" === e.operator || "throw" === e.operator ? (this.word(e.operator), this.space()) : this.token(e.operator);
			this.print(e.argument, e)
		}, t.DoExpression = function (e) {
			this.word("do"), this.space(), this.print(e.body, e)
		}, t.ParenthesizedExpression = function (e) {
			this.token("("), this.print(e.expression, e), this.token(")")
		}, t.UpdateExpression = function (e) {
			e.prefix ? (this.token(e.operator), this.print(e.argument, e)) : (this.startTerminatorless(!0), this.print(e.argument, e), this.endTerminatorless(), this.token(e.operator))
		}, t.ConditionalExpression = function (e) {
			this.print(e.test, e), this.space(), this.token("?"), this.space(), this.print(e.consequent, e), this.space(), this.token(":"), this.space(), this.print(e.alternate, e)
		}, t.NewExpression = function (e, t) {
			if (this.word("new"), this.space(), this.print(e.callee, e), this.format.minified && 0 === e.arguments.length && !e.optional && !r().isCallExpression(t, {
					callee: e
				}) && !r().isMemberExpression(t) && !r().isNewExpression(t)) return;
			this.print(e.typeArguments, e), this.print(e.typeParameters, e), e.optional && this.token("?.");
			this.token("("), this.printList(e.arguments, e), this.token(")")
		}, t.SequenceExpression = function (e) {
			this.printList(e.expressions, e)
		}, t.ThisExpression = function () {
			this.word("this")
		}, t.Super = function () {
			this.word("super")
		}, t.Decorator = function (e) {
			this.token("@"), this.print(e.expression, e), this.newline()
		}, t.OptionalMemberExpression = function (e) {
			if (this.print(e.object, e), !e.computed && r().isMemberExpression(e.property)) throw new TypeError("Got a MemberExpression for MemberExpression property");
			let t = e.computed;
			r().isLiteral(e.property) && "number" == typeof e.property.value && (t = !0);
			e.optional && this.token("?.");
			t ? (this.token("["), this.print(e.property, e), this.token("]")) : (e.optional || this.token("."), this.print(e.property, e))
		}, t.OptionalCallExpression = function (e) {
			this.print(e.callee, e), this.print(e.typeArguments, e), this.print(e.typeParameters, e), e.optional && this.token("?.");
			this.token("("), this.printList(e.arguments, e), this.token(")")
		}, t.CallExpression = function (e) {
			this.print(e.callee, e), this.print(e.typeArguments, e), this.print(e.typeParameters, e), this.token("("), this.printList(e.arguments, e), this.token(")")
		}, t.Import = function () {
			this.word("import")
		}, t.EmptyStatement = function () {
			this.semicolon(!0)
		}, t.ExpressionStatement = function (e) {
			this.print(e.expression, e), this.semicolon()
		}, t.AssignmentPattern = function (e) {
			this.print(e.left, e), e.left.optional && this.token("?");
			this.print(e.left.typeAnnotation, e), this.space(), this.token("="), this.space(), this.print(e.right, e)
		}, t.LogicalExpression = t.BinaryExpression = t.AssignmentExpression = function (e, t) {
			const n = this.inForStatementInitCounter && "in" === e.operator && !i.needsParens(e, t);
			n && this.token("(");
			this.print(e.left, e), this.space(), "in" === e.operator || "instanceof" === e.operator ? this.word(e.operator) : this.token(e.operator);
			this.space(), this.print(e.right, e), n && this.token(")")
		}, t.BindExpression = function (e) {
			this.print(e.object, e), this.token("::"), this.print(e.callee, e)
		}, t.MemberExpression = function (e) {
			if (this.print(e.object, e), !e.computed && r().isMemberExpression(e.property)) throw new TypeError("Got a MemberExpression for MemberExpression property");
			let t = e.computed;
			r().isLiteral(e.property) && "number" == typeof e.property.value && (t = !0);
			t ? (this.token("["), this.print(e.property, e), this.token("]")) : (this.token("."), this.print(e.property, e))
		}, t.MetaProperty = function (e) {
			this.print(e.meta, e), this.token("."), this.print(e.property, e)
		}, t.PrivateName = function (e) {
			this.token("#"), this.print(e.id, e)
		}, t.AwaitExpression = t.YieldExpression = void 0;
		var i = s(n(104));

		function s(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e)
					if (Object.prototype.hasOwnProperty.call(e, n)) {
						var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
						r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
					}
			return t.default = e, t
		}

		function o(e) {
			return function (t) {
				if (this.word(e), t.delegate && this.token("*"), t.argument) {
					this.space();
					const e = this.startTerminatorless();
					this.print(t.argument, t), this.endTerminatorless(e)
				}
			}
		}
		const a = o("yield");
		t.YieldExpression = a;
		const u = o("await");
		t.AwaitExpression = u
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.WithStatement = function (e) {
			this.word("with"), this.space(), this.token("("), this.print(e.object, e), this.token(")"), this.printBlock(e)
		}, t.IfStatement = function (e) {
			this.word("if"), this.space(), this.token("("), this.print(e.test, e), this.token(")"), this.space();
			const t = e.alternate && r().isIfStatement(function e(t) {
				if (!r().isStatement(t.body)) return t;
				return e(t.body)
			}(e.consequent));
			t && (this.token("{"), this.newline(), this.indent());
			this.printAndIndentOnComments(e.consequent, e), t && (this.dedent(), this.newline(), this.token("}"));
			e.alternate && (this.endsWith("}") && this.space(), this.word("else"), this.space(), this.printAndIndentOnComments(e.alternate, e))
		}, t.ForStatement = function (e) {
			this.word("for"), this.space(), this.token("("), this.inForStatementInitCounter++, this.print(e.init, e), this.inForStatementInitCounter--, this.token(";"), e.test && (this.space(), this.print(e.test, e));
			this.token(";"), e.update && (this.space(), this.print(e.update, e));
			this.token(")"), this.printBlock(e)
		}, t.WhileStatement = function (e) {
			this.word("while"), this.space(), this.token("("), this.print(e.test, e), this.token(")"), this.printBlock(e)
		}, t.DoWhileStatement = function (e) {
			this.word("do"), this.space(), this.print(e.body, e), this.space(), this.word("while"), this.space(), this.token("("), this.print(e.test, e), this.token(")"), this.semicolon()
		}, t.LabeledStatement = function (e) {
			this.print(e.label, e), this.token(":"), this.space(), this.print(e.body, e)
		}, t.TryStatement = function (e) {
			this.word("try"), this.space(), this.print(e.block, e), this.space(), e.handlers ? this.print(e.handlers[0], e) : this.print(e.handler, e);
			e.finalizer && (this.space(), this.word("finally"), this.space(), this.print(e.finalizer, e))
		}, t.CatchClause = function (e) {
			this.word("catch"), this.space(), e.param && (this.token("("), this.print(e.param, e), this.token(")"), this.space());
			this.print(e.body, e)
		}, t.SwitchStatement = function (e) {
			this.word("switch"), this.space(), this.token("("), this.print(e.discriminant, e), this.token(")"), this.space(), this.token("{"), this.printSequence(e.cases, e, {
				indent: !0,
				addNewlines(t, n) {
					if (!t && e.cases[e.cases.length - 1] === n) return -1
				}
			}), this.token("}")
		}, t.SwitchCase = function (e) {
			e.test ? (this.word("case"), this.space(), this.print(e.test, e), this.token(":")) : (this.word("default"), this.token(":"));
			e.consequent.length && (this.newline(), this.printSequence(e.consequent, e, {
				indent: !0
			}))
		}, t.DebuggerStatement = function () {
			this.word("debugger"), this.semicolon()
		}, t.VariableDeclaration = function (e, t) {
			e.declare && (this.word("declare"), this.space());
			this.word(e.kind), this.space();
			let n, i = !1;
			if (!r().isFor(t))
				for (const t of e.declarations) t.init && (i = !0);
			i && (n = "const" === e.kind ? f : h);
			if (this.printList(e.declarations, e, {
					separator: n
				}), r().isFor(t) && (t.left === e || t.init === e)) return;
			this.semicolon()
		}, t.VariableDeclarator = function (e) {
			this.print(e.id, e), e.definite && this.token("!");
			this.print(e.id.typeAnnotation, e), e.init && (this.space(), this.token("="), this.space(), this.print(e.init, e))
		}, t.ThrowStatement = t.BreakStatement = t.ReturnStatement = t.ContinueStatement = t.ForOfStatement = t.ForInStatement = void 0;
		const i = function (e) {
				return function (t) {
					this.word("for"), this.space(), "of" === e && t.await && (this.word("await"), this.space()), this.token("("), this.print(t.left, t), this.space(), this.word(e), this.space(), this.print(t.right, t), this.token(")"), this.printBlock(t)
				}
			},
			s = i("in");
		t.ForInStatement = s;
		const o = i("of");

		function a(e, t = "label") {
			return function (n) {
				this.word(e);
				const r = n[t];
				if (r) {
					this.space();
					const e = "label" == t,
						i = this.startTerminatorless(e);
					this.print(r, n), this.endTerminatorless(i)
				}
				this.semicolon()
			}
		}
		t.ForOfStatement = o;
		const u = a("continue");
		t.ContinueStatement = u;
		const c = a("return", "argument");
		t.ReturnStatement = c;
		const l = a("break");
		t.BreakStatement = l;
		const p = a("throw", "argument");

		function h() {
			if (this.token(","), this.newline(), this.endsWith("\n"))
				for (let e = 0; e < 4; e++) this.space(!0)
		}

		function f() {
			if (this.token(","), this.newline(), this.endsWith("\n"))
				for (let e = 0; e < 6; e++) this.space(!0)
		}
		t.ThrowStatement = p
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.ClassExpression = t.ClassDeclaration = function (e, t) {
			this.format.decoratorsBeforeExport && (r().isExportDefaultDeclaration(t) || r().isExportNamedDeclaration(t)) || this.printJoin(e.decorators, e);
			e.declare && (this.word("declare"), this.space());
			e.abstract && (this.word("abstract"), this.space());
			this.word("class"), e.id && (this.space(), this.print(e.id, e));
			this.print(e.typeParameters, e), e.superClass && (this.space(), this.word("extends"), this.space(), this.print(e.superClass, e), this.print(e.superTypeParameters, e));
			e.implements && (this.space(), this.word("implements"), this.space(), this.printList(e.implements, e));
			this.space(), this.print(e.body, e)
		}, t.ClassBody = function (e) {
			this.token("{"), this.printInnerComments(e), 0 === e.body.length ? this.token("}") : (this.newline(), this.indent(), this.printSequence(e.body, e), this.dedent(), this.endsWith("\n") || this.newline(), this.rightBrace())
		}, t.ClassProperty = function (e) {
			this.printJoin(e.decorators, e), e.accessibility && (this.word(e.accessibility), this.space());
			e.static && (this.word("static"), this.space());
			e.abstract && (this.word("abstract"), this.space());
			e.readonly && (this.word("readonly"), this.space());
			e.computed ? (this.token("["), this.print(e.key, e), this.token("]")) : (this._variance(e), this.print(e.key, e));
			e.optional && this.token("?");
			e.definite && this.token("!");
			this.print(e.typeAnnotation, e), e.value && (this.space(), this.token("="), this.space(), this.print(e.value, e));
			this.semicolon()
		}, t.ClassPrivateProperty = function (e) {
			e.static && (this.word("static"), this.space());
			this.print(e.key, e), this.print(e.typeAnnotation, e), e.value && (this.space(), this.token("="), this.space(), this.print(e.value, e));
			this.semicolon()
		}, t.ClassMethod = function (e) {
			this._classMethodHead(e), this.space(), this.print(e.body, e)
		}, t.ClassPrivateMethod = function (e) {
			this._classMethodHead(e), this.space(), this.print(e.body, e)
		}, t._classMethodHead = function (e) {
			this.printJoin(e.decorators, e), e.accessibility && (this.word(e.accessibility), this.space());
			e.abstract && (this.word("abstract"), this.space());
			e.static && (this.word("static"), this.space());
			this._methodHead(e)
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t._params = function (e) {
			this.print(e.typeParameters, e), this.token("("), this._parameters(e.params, e), this.token(")"), this.print(e.returnType, e)
		}, t._parameters = function (e, t) {
			for (let n = 0; n < e.length; n++) this._param(e[n], t), n < e.length - 1 && (this.token(","), this.space())
		}, t._param = function (e, t) {
			this.printJoin(e.decorators, e), this.print(e, t), e.optional && this.token("?");
			this.print(e.typeAnnotation, e)
		}, t._methodHead = function (e) {
			const t = e.kind,
				n = e.key;
			"get" !== t && "set" !== t || (this.word(t), this.space());
			e.async && (this.word("async"), this.space());
			"method" !== t && "init" !== t || e.generator && this.token("*");
			e.computed ? (this.token("["), this.print(n, e), this.token("]")) : this.print(n, e);
			e.optional && this.token("?");
			this._params(e)
		}, t._predicate = function (e) {
			e.predicate && (e.returnType || this.token(":"), this.space(), this.print(e.predicate, e))
		}, t._functionHead = function (e) {
			e.async && (this.word("async"), this.space());
			this.word("function"), e.generator && this.token("*");
			this.space(), e.id && this.print(e.id, e);
			this._params(e), this._predicate(e)
		}, t.FunctionDeclaration = t.FunctionExpression = function (e) {
			this._functionHead(e), this.space(), this.print(e.body, e)
		}, t.ArrowFunctionExpression = function (e) {
			e.async && (this.word("async"), this.space());
			const t = e.params[0];
			1 === e.params.length && r().isIdentifier(t) && ! function (e, t) {
				return e.typeParameters || e.returnType || t.typeAnnotation || t.optional || t.trailingComments
			}(e, t) ? this.format.retainLines && e.loc && e.body.loc && e.loc.start.line < e.body.loc.start.line ? (this.token("("), t.loc && t.loc.start.line > e.loc.start.line ? (this.indent(), this.print(t, e), this.dedent(), this._catchUp("start", e.body.loc)) : this.print(t, e), this.token(")")) : this.print(t, e) : this._params(e);
			this._predicate(e), this.space(), this.token("=>"), this.space(), this.print(e.body, e)
		}
	}, function (e, t, n) {
		"use strict";
		(function (t) {
			const n = {},
				r = n.hasOwnProperty,
				i = (e, t) => {
					for (const n in e) r.call(e, n) && t(n, e[n])
				},
				s = n.toString,
				o = Array.isArray,
				a = t.isBuffer,
				u = {
					'"': '\\"',
					"'": "\\'",
					"\\": "\\\\",
					"\b": "\\b",
					"\f": "\\f",
					"\n": "\\n",
					"\r": "\\r",
					"\t": "\\t"
				},
				c = /["'\\\b\f\n\r\t]/,
				l = /[0-9]/,
				p = /[ !#-&\(-\[\]-~]/,
				h = (e, t) => {
					const n = () => {
							E = g, ++t.indentLevel, g = t.indent.repeat(t.indentLevel)
						},
						r = {
							escapeEverything: !1,
							minimal: !1,
							isScriptContext: !1,
							quotes: "single",
							wrap: !1,
							es6: !1,
							json: !1,
							compact: !0,
							lowercaseHex: !1,
							numbers: "decimal",
							indent: "\t",
							indentLevel: 0,
							__inline1__: !1,
							__inline2__: !1
						},
						f = t && t.json;
					f && (r.quotes = "double", r.wrap = !0), "single" != (t = ((e, t) => t ? (i(t, (t, n) => {
						e[t] = n
					}), e) : e)(r, t)).quotes && "double" != t.quotes && "backtick" != t.quotes && (t.quotes = "single");
					const d = "double" == t.quotes ? '"' : "backtick" == t.quotes ? "`" : "'",
						y = t.compact,
						m = t.lowercaseHex;
					let g = t.indent.repeat(t.indentLevel),
						E = "";
					const T = t.__inline1__,
						A = t.__inline2__,
						S = y ? "" : "\n";
					let b, x = !0;
					const P = "binary" == t.numbers,
						v = "octal" == t.numbers,
						D = "decimal" == t.numbers,
						C = "hexadecimal" == t.numbers;
					if (f && e && (e => "function" == typeof e)(e.toJSON) && (e = e.toJSON()), !(e => "string" == typeof e || "[object String]" == s.call(e))(e)) {
						if ((e => "[object Map]" == s.call(e))(e)) return 0 == e.size ? "new Map()" : (y || (t.__inline1__ = !0, t.__inline2__ = !1), "new Map(" + h(Array.from(e), t) + ")");
						if ((e => "[object Set]" == s.call(e))(e)) return 0 == e.size ? "new Set()" : "new Set(" + h(Array.from(e), t) + ")";
						if (a(e)) return 0 == e.length ? "Buffer.from([])" : "Buffer.from(" + h(Array.from(e), t) + ")";
						if (o(e)) return b = [], t.wrap = !0, T && (t.__inline1__ = !1, t.__inline2__ = !0), A || n(), ((e, t) => {
							const n = e.length;
							let r = -1;
							for (; ++r < n;) t(e[r])
						})(e, e => {
							x = !1, A && (t.__inline2__ = !1), b.push((y || A ? "" : g) + h(e, t))
						}), x ? "[]" : A ? "[" + b.join(", ") + "]" : "[" + S + b.join("," + S) + S + (y ? "" : E) + "]";
						if (!(e => "number" == typeof e || "[object Number]" == s.call(e))(e)) return (e => "[object Object]" == s.call(e))(e) ? (b = [], t.wrap = !0, n(), i(e, (e, n) => {
							x = !1, b.push((y ? "" : g) + h(e, t) + ":" + (y ? "" : " ") + h(n, t))
						}), x ? "{}" : "{" + S + b.join("," + S) + S + (y ? "" : E) + "}") : f ? JSON.stringify(e) || "null" : String(e);
						if (f) return JSON.stringify(e);
						if (D) return String(e);
						if (C) {
							let t = e.toString(16);
							return m || (t = t.toUpperCase()), "0x" + t
						}
						if (P) return "0b" + e.toString(2);
						if (v) return "0o" + e.toString(8)
					}
					const O = e;
					let w = -1;
					const F = O.length;
					for (b = ""; ++w < F;) {
						const e = O.charAt(w);
						if (t.es6) {
							const e = O.charCodeAt(w);
							if (e >= 55296 && e <= 56319 && F > w + 1) {
								const t = O.charCodeAt(w + 1);
								if (t >= 56320 && t <= 57343) {
									let n = (1024 * (e - 55296) + t - 56320 + 65536).toString(16);
									m || (n = n.toUpperCase()), b += "\\u{" + n + "}", ++w;
									continue
								}
							}
						}
						if (!t.escapeEverything) {
							if (p.test(e)) {
								b += e;
								continue
							}
							if ('"' == e) {
								b += d == e ? '\\"' : e;
								continue
							}
							if ("`" == e) {
								b += d == e ? "\\`" : e;
								continue
							}
							if ("'" == e) {
								b += d == e ? "\\'" : e;
								continue
							}
						}
						if ("\0" == e && !f && !l.test(O.charAt(w + 1))) {
							b += "\\0";
							continue
						}
						if (c.test(e)) {
							b += u[e];
							continue
						}
						const n = e.charCodeAt(0);
						if (t.minimal && 8232 != n && 8233 != n) {
							b += e;
							continue
						}
						let r = n.toString(16);
						m || (r = r.toUpperCase());
						const i = r.length > 2 || f,
							s = "\\" + (i ? "u" : "x") + ("0000" + r).slice(i ? -4 : -2);
						b += s
					}
					return t.wrap && (b = d + b + d), "`" == d && (b = b.replace(/\$\{/g, "\\${")), t.isScriptContext ? b.replace(/<\/(script|style)/gi, "<\\/$1").replace(/<!--/g, f ? "\\u003C!--" : "\\x3C!--") : b
				};
			h.version = "2.5.1", e.exports = h
		}).call(this, n(285).Buffer)
	}, function (e, t, n) {
		"use strict";
		(function (e) {
			/*!
			 * The buffer module from node.js, for the browser.
			 *
			 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
			 * @license  MIT
			 */
			var r = n(286),
				i = n(287),
				s = n(288);

			function o() {
				return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
			}

			function a(e, t) {
				if (o() < t) throw new RangeError("Invalid typed array length");
				return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t), e
			}

			function u(e, t, n) {
				if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, n);
				if ("number" == typeof e) {
					if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
					return p(this, e)
				}
				return c(this, e, t, n)
			}

			function c(e, t, n, r) {
				if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
				return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, r) {
					if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
					if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
					t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
					u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = h(e, t);
					return e
				}(e, t, n, r) : "string" == typeof t ? function (e, t, n) {
					"string" == typeof n && "" !== n || (n = "utf8");
					if (!u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
					var r = 0 | d(t, n),
						i = (e = a(e, r)).write(t, n);
					i !== r && (e = e.slice(0, i));
					return e
				}(e, t, n) : function (e, t) {
					if (u.isBuffer(t)) {
						var n = 0 | f(t.length);
						return 0 === (e = a(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
					}
					if (t) {
						if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || function (e) {
							return e != e
						}(t.length) ? a(e, 0) : h(e, t);
						if ("Buffer" === t.type && s(t.data)) return h(e, t.data)
					}
					throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
				}(e, t)
			}

			function l(e) {
				if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
				if (e < 0) throw new RangeError('"size" argument must not be negative')
			}

			function p(e, t) {
				if (l(t), e = a(e, t < 0 ? 0 : 0 | f(t)), !u.TYPED_ARRAY_SUPPORT)
					for (var n = 0; n < t; ++n) e[n] = 0;
				return e
			}

			function h(e, t) {
				var n = t.length < 0 ? 0 : 0 | f(t.length);
				e = a(e, n);
				for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
				return e
			}

			function f(e) {
				if (e >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
				return 0 | e
			}

			function d(e, t) {
				if (u.isBuffer(e)) return e.length;
				if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
				"string" != typeof e && (e = "" + e);
				var n = e.length;
				if (0 === n) return 0;
				for (var r = !1;;) switch (t) {
					case "ascii":
					case "latin1":
					case "binary":
						return n;
					case "utf8":
					case "utf-8":
					case void 0:
						return U(e).length;
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return 2 * n;
					case "hex":
						return n >>> 1;
					case "base64":
						return V(e).length;
					default:
						if (r) return U(e).length;
						t = ("" + t).toLowerCase(), r = !0
				}
			}

			function y(e, t, n) {
				var r = e[t];
				e[t] = e[n], e[n] = r
			}

			function m(e, t, n, r, i) {
				if (0 === e.length) return -1;
				if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
					if (i) return -1;
					n = e.length - 1
				} else if (n < 0) {
					if (!i) return -1;
					n = 0
				}
				if ("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t)) return 0 === t.length ? -1 : g(e, t, n, r, i);
				if ("number" == typeof t) return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : g(e, [t], n, r, i);
				throw new TypeError("val must be string, number or Buffer")
			}

			function g(e, t, n, r, i) {
				var s, o = 1,
					a = e.length,
					u = t.length;
				if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
					if (e.length < 2 || t.length < 2) return -1;
					o = 2, a /= 2, u /= 2, n /= 2
				}

				function c(e, t) {
					return 1 === o ? e[t] : e.readUInt16BE(t * o)
				}
				if (i) {
					var l = -1;
					for (s = n; s < a; s++)
						if (c(e, s) === c(t, -1 === l ? 0 : s - l)) {
							if (-1 === l && (l = s), s - l + 1 === u) return l * o
						} else -1 !== l && (s -= s - l), l = -1
				} else
					for (n + u > a && (n = a - u), s = n; s >= 0; s--) {
						for (var p = !0, h = 0; h < u; h++)
							if (c(e, s + h) !== c(t, h)) {
								p = !1;
								break
							}
						if (p) return s
					}
				return -1
			}

			function E(e, t, n, r) {
				n = Number(n) || 0;
				var i = e.length - n;
				r ? (r = Number(r)) > i && (r = i) : r = i;
				var s = t.length;
				if (s % 2 != 0) throw new TypeError("Invalid hex string");
				r > s / 2 && (r = s / 2);
				for (var o = 0; o < r; ++o) {
					var a = parseInt(t.substr(2 * o, 2), 16);
					if (isNaN(a)) return o;
					e[n + o] = a
				}
				return o
			}

			function T(e, t, n, r) {
				return X(U(t, e.length - n), e, n, r)
			}

			function A(e, t, n, r) {
				return X(function (e) {
					for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
					return t
				}(t), e, n, r)
			}

			function S(e, t, n, r) {
				return A(e, t, n, r)
			}

			function b(e, t, n, r) {
				return X(V(t), e, n, r)
			}

			function x(e, t, n, r) {
				return X(function (e, t) {
					for (var n, r, i, s = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, s.push(i), s.push(r);
					return s
				}(t, e.length - n), e, n, r)
			}

			function P(e, t, n) {
				return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
			}

			function v(e, t, n) {
				n = Math.min(e.length, n);
				for (var r = [], i = t; i < n;) {
					var s, o, a, u, c = e[i],
						l = null,
						p = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
					if (i + p <= n) switch (p) {
						case 1:
							c < 128 && (l = c);
							break;
						case 2:
							128 == (192 & (s = e[i + 1])) && (u = (31 & c) << 6 | 63 & s) > 127 && (l = u);
							break;
						case 3:
							s = e[i + 1], o = e[i + 2], 128 == (192 & s) && 128 == (192 & o) && (u = (15 & c) << 12 | (63 & s) << 6 | 63 & o) > 2047 && (u < 55296 || u > 57343) && (l = u);
							break;
						case 4:
							s = e[i + 1], o = e[i + 2], a = e[i + 3], 128 == (192 & s) && 128 == (192 & o) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u)
					}
					null === l ? (l = 65533, p = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += p
				}
				return function (e) {
					var t = e.length;
					if (t <= D) return String.fromCharCode.apply(String, e);
					var n = "",
						r = 0;
					for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += D));
					return n
				}(r)
			}
			t.Buffer = u, t.SlowBuffer = function (e) {
				+e != e && (e = 0);
				return u.alloc(+e)
			}, t.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
				try {
					var e = new Uint8Array(1);
					return e.__proto__ = {
						__proto__: Uint8Array.prototype,
						foo: function () {
							return 42
						}
					}, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
				} catch (e) {
					return !1
				}
			}(), t.kMaxLength = o(), u.poolSize = 8192, u._augment = function (e) {
				return e.__proto__ = u.prototype, e
			}, u.from = function (e, t, n) {
				return c(null, e, t, n)
			}, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
				value: null,
				configurable: !0
			})), u.alloc = function (e, t, n) {
				return function (e, t, n, r) {
					return l(t), t <= 0 ? a(e, t) : void 0 !== n ? "string" == typeof r ? a(e, t).fill(n, r) : a(e, t).fill(n) : a(e, t)
				}(null, e, t, n)
			}, u.allocUnsafe = function (e) {
				return p(null, e)
			}, u.allocUnsafeSlow = function (e) {
				return p(null, e)
			}, u.isBuffer = function (e) {
				return !(null == e || !e._isBuffer)
			}, u.compare = function (e, t) {
				if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
				if (e === t) return 0;
				for (var n = e.length, r = t.length, i = 0, s = Math.min(n, r); i < s; ++i)
					if (e[i] !== t[i]) {
						n = e[i], r = t[i];
						break
					}
				return n < r ? -1 : r < n ? 1 : 0
			}, u.isEncoding = function (e) {
				switch (String(e).toLowerCase()) {
					case "hex":
					case "utf8":
					case "utf-8":
					case "ascii":
					case "latin1":
					case "binary":
					case "base64":
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return !0;
					default:
						return !1
				}
			}, u.concat = function (e, t) {
				if (!s(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return u.alloc(0);
				var n;
				if (void 0 === t)
					for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
				var r = u.allocUnsafe(t),
					i = 0;
				for (n = 0; n < e.length; ++n) {
					var o = e[n];
					if (!u.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
					o.copy(r, i), i += o.length
				}
				return r
			}, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
				var e = this.length;
				if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
				for (var t = 0; t < e; t += 2) y(this, t, t + 1);
				return this
			}, u.prototype.swap32 = function () {
				var e = this.length;
				if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
				for (var t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
				return this
			}, u.prototype.swap64 = function () {
				var e = this.length;
				if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
				for (var t = 0; t < e; t += 8) y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
				return this
			}, u.prototype.toString = function () {
				var e = 0 | this.length;
				return 0 === e ? "" : 0 === arguments.length ? v(this, 0, e) : function (e, t, n) {
					var r = !1;
					if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
					if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
					if ((n >>>= 0) <= (t >>>= 0)) return "";
					for (e || (e = "utf8");;) switch (e) {
						case "hex":
							return w(this, t, n);
						case "utf8":
						case "utf-8":
							return v(this, t, n);
						case "ascii":
							return C(this, t, n);
						case "latin1":
						case "binary":
							return O(this, t, n);
						case "base64":
							return P(this, t, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return F(this, t, n);
						default:
							if (r) throw new TypeError("Unknown encoding: " + e);
							e = (e + "").toLowerCase(), r = !0
					}
				}.apply(this, arguments)
			}, u.prototype.equals = function (e) {
				if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
				return this === e || 0 === u.compare(this, e)
			}, u.prototype.inspect = function () {
				var e = "",
					n = t.INSPECT_MAX_BYTES;
				return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
			}, u.prototype.compare = function (e, t, n, r, i) {
				if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
				if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
				if (r >= i && t >= n) return 0;
				if (r >= i) return -1;
				if (t >= n) return 1;
				if (t >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === e) return 0;
				for (var s = i - r, o = n - t, a = Math.min(s, o), c = this.slice(r, i), l = e.slice(t, n), p = 0; p < a; ++p)
					if (c[p] !== l[p]) {
						s = c[p], o = l[p];
						break
					}
				return s < o ? -1 : o < s ? 1 : 0
			}, u.prototype.includes = function (e, t, n) {
				return -1 !== this.indexOf(e, t, n)
			}, u.prototype.indexOf = function (e, t, n) {
				return m(this, e, t, n, !0)
			}, u.prototype.lastIndexOf = function (e, t, n) {
				return m(this, e, t, n, !1)
			}, u.prototype.write = function (e, t, n, r) {
				if (void 0 === t) r = "utf8", n = this.length, t = 0;
				else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
				else {
					if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
					t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
				}
				var i = this.length - t;
				if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				r || (r = "utf8");
				for (var s = !1;;) switch (r) {
					case "hex":
						return E(this, e, t, n);
					case "utf8":
					case "utf-8":
						return T(this, e, t, n);
					case "ascii":
						return A(this, e, t, n);
					case "latin1":
					case "binary":
						return S(this, e, t, n);
					case "base64":
						return b(this, e, t, n);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return x(this, e, t, n);
					default:
						if (s) throw new TypeError("Unknown encoding: " + r);
						r = ("" + r).toLowerCase(), s = !0
				}
			}, u.prototype.toJSON = function () {
				return {
					type: "Buffer",
					data: Array.prototype.slice.call(this._arr || this, 0)
				}
			};
			var D = 4096;

			function C(e, t, n) {
				var r = "";
				n = Math.min(e.length, n);
				for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
				return r
			}

			function O(e, t, n) {
				var r = "";
				n = Math.min(e.length, n);
				for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
				return r
			}

			function w(e, t, n) {
				var r = e.length;
				(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
				for (var i = "", s = t; s < n; ++s) i += R(e[s]);
				return i
			}

			function F(e, t, n) {
				for (var r = e.slice(t, n), i = "", s = 0; s < r.length; s += 2) i += String.fromCharCode(r[s] + 256 * r[s + 1]);
				return i
			}

			function _(e, t, n) {
				if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
				if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
			}

			function N(e, t, n, r, i, s) {
				if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
				if (t > i || t < s) throw new RangeError('"value" argument is out of bounds');
				if (n + r > e.length) throw new RangeError("Index out of range")
			}

			function I(e, t, n, r) {
				t < 0 && (t = 65535 + t + 1);
				for (var i = 0, s = Math.min(e.length - n, 2); i < s; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
			}

			function k(e, t, n, r) {
				t < 0 && (t = 4294967295 + t + 1);
				for (var i = 0, s = Math.min(e.length - n, 4); i < s; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
			}

			function B(e, t, n, r, i, s) {
				if (n + r > e.length) throw new RangeError("Index out of range");
				if (n < 0) throw new RangeError("Index out of range")
			}

			function L(e, t, n, r, s) {
				return s || B(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
			}

			function M(e, t, n, r, s) {
				return s || B(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
			}
			u.prototype.slice = function (e, t) {
				var n, r = this.length;
				if (e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), u.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = u.prototype;
				else {
					var i = t - e;
					n = new u(i, void 0);
					for (var s = 0; s < i; ++s) n[s] = this[s + e]
				}
				return n
			}, u.prototype.readUIntLE = function (e, t, n) {
				e |= 0, t |= 0, n || _(e, t, this.length);
				for (var r = this[e], i = 1, s = 0; ++s < t && (i *= 256);) r += this[e + s] * i;
				return r
			}, u.prototype.readUIntBE = function (e, t, n) {
				e |= 0, t |= 0, n || _(e, t, this.length);
				for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
				return r
			}, u.prototype.readUInt8 = function (e, t) {
				return t || _(e, 1, this.length), this[e]
			}, u.prototype.readUInt16LE = function (e, t) {
				return t || _(e, 2, this.length), this[e] | this[e + 1] << 8
			}, u.prototype.readUInt16BE = function (e, t) {
				return t || _(e, 2, this.length), this[e] << 8 | this[e + 1]
			}, u.prototype.readUInt32LE = function (e, t) {
				return t || _(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
			}, u.prototype.readUInt32BE = function (e, t) {
				return t || _(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
			}, u.prototype.readIntLE = function (e, t, n) {
				e |= 0, t |= 0, n || _(e, t, this.length);
				for (var r = this[e], i = 1, s = 0; ++s < t && (i *= 256);) r += this[e + s] * i;
				return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
			}, u.prototype.readIntBE = function (e, t, n) {
				e |= 0, t |= 0, n || _(e, t, this.length);
				for (var r = t, i = 1, s = this[e + --r]; r > 0 && (i *= 256);) s += this[e + --r] * i;
				return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)), s
			}, u.prototype.readInt8 = function (e, t) {
				return t || _(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
			}, u.prototype.readInt16LE = function (e, t) {
				t || _(e, 2, this.length);
				var n = this[e] | this[e + 1] << 8;
				return 32768 & n ? 4294901760 | n : n
			}, u.prototype.readInt16BE = function (e, t) {
				t || _(e, 2, this.length);
				var n = this[e + 1] | this[e] << 8;
				return 32768 & n ? 4294901760 | n : n
			}, u.prototype.readInt32LE = function (e, t) {
				return t || _(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
			}, u.prototype.readInt32BE = function (e, t) {
				return t || _(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
			}, u.prototype.readFloatLE = function (e, t) {
				return t || _(e, 4, this.length), i.read(this, e, !0, 23, 4)
			}, u.prototype.readFloatBE = function (e, t) {
				return t || _(e, 4, this.length), i.read(this, e, !1, 23, 4)
			}, u.prototype.readDoubleLE = function (e, t) {
				return t || _(e, 8, this.length), i.read(this, e, !0, 52, 8)
			}, u.prototype.readDoubleBE = function (e, t) {
				return t || _(e, 8, this.length), i.read(this, e, !1, 52, 8)
			}, u.prototype.writeUIntLE = function (e, t, n, r) {
				(e = +e, t |= 0, n |= 0, r) || N(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
				var i = 1,
					s = 0;
				for (this[t] = 255 & e; ++s < n && (i *= 256);) this[t + s] = e / i & 255;
				return t + n
			}, u.prototype.writeUIntBE = function (e, t, n, r) {
				(e = +e, t |= 0, n |= 0, r) || N(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
				var i = n - 1,
					s = 1;
				for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) this[t + i] = e / s & 255;
				return t + n
			}, u.prototype.writeUInt8 = function (e, t, n) {
				return e = +e, t |= 0, n || N(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
			}, u.prototype.writeUInt16LE = function (e, t, n) {
				return e = +e, t |= 0, n || N(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : I(this, e, t, !0), t + 2
			}, u.prototype.writeUInt16BE = function (e, t, n) {
				return e = +e, t |= 0, n || N(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : I(this, e, t, !1), t + 2
			}, u.prototype.writeUInt32LE = function (e, t, n) {
				return e = +e, t |= 0, n || N(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : k(this, e, t, !0), t + 4
			}, u.prototype.writeUInt32BE = function (e, t, n) {
				return e = +e, t |= 0, n || N(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : k(this, e, t, !1), t + 4
			}, u.prototype.writeIntLE = function (e, t, n, r) {
				if (e = +e, t |= 0, !r) {
					var i = Math.pow(2, 8 * n - 1);
					N(this, e, t, n, i - 1, -i)
				}
				var s = 0,
					o = 1,
					a = 0;
				for (this[t] = 255 & e; ++s < n && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1), this[t + s] = (e / o >> 0) - a & 255;
				return t + n
			}, u.prototype.writeIntBE = function (e, t, n, r) {
				if (e = +e, t |= 0, !r) {
					var i = Math.pow(2, 8 * n - 1);
					N(this, e, t, n, i - 1, -i)
				}
				var s = n - 1,
					o = 1,
					a = 0;
				for (this[t + s] = 255 & e; --s >= 0 && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1), this[t + s] = (e / o >> 0) - a & 255;
				return t + n
			}, u.prototype.writeInt8 = function (e, t, n) {
				return e = +e, t |= 0, n || N(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
			}, u.prototype.writeInt16LE = function (e, t, n) {
				return e = +e, t |= 0, n || N(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : I(this, e, t, !0), t + 2
			}, u.prototype.writeInt16BE = function (e, t, n) {
				return e = +e, t |= 0, n || N(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : I(this, e, t, !1), t + 2
			}, u.prototype.writeInt32LE = function (e, t, n) {
				return e = +e, t |= 0, n || N(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : k(this, e, t, !0), t + 4
			}, u.prototype.writeInt32BE = function (e, t, n) {
				return e = +e, t |= 0, n || N(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : k(this, e, t, !1), t + 4
			}, u.prototype.writeFloatLE = function (e, t, n) {
				return L(this, e, t, !0, n)
			}, u.prototype.writeFloatBE = function (e, t, n) {
				return L(this, e, t, !1, n)
			}, u.prototype.writeDoubleLE = function (e, t, n) {
				return M(this, e, t, !0, n)
			}, u.prototype.writeDoubleBE = function (e, t, n) {
				return M(this, e, t, !1, n)
			}, u.prototype.copy = function (e, t, n, r) {
				if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
				if (r < 0) throw new RangeError("sourceEnd out of bounds");
				r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
				var i, s = r - n;
				if (this === e && n < t && t < r)
					for (i = s - 1; i >= 0; --i) e[i + t] = this[i + n];
				else if (s < 1e3 || !u.TYPED_ARRAY_SUPPORT)
					for (i = 0; i < s; ++i) e[i + t] = this[i + n];
				else Uint8Array.prototype.set.call(e, this.subarray(n, n + s), t);
				return s
			}, u.prototype.fill = function (e, t, n, r) {
				if ("string" == typeof e) {
					if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
						var i = e.charCodeAt(0);
						i < 256 && (e = i)
					}
					if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
					if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
				} else "number" == typeof e && (e &= 255);
				if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
				if (n <= t) return this;
				var s;
				if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
					for (s = t; s < n; ++s) this[s] = e;
				else {
					var o = u.isBuffer(e) ? e : U(new u(e, r).toString()),
						a = o.length;
					for (s = 0; s < n - t; ++s) this[s + t] = o[s % a]
				}
				return this
			};
			var j = /[^+\/0-9A-Za-z-_]/g;

			function R(e) {
				return e < 16 ? "0" + e.toString(16) : e.toString(16)
			}

			function U(e, t) {
				var n;
				t = t || 1 / 0;
				for (var r = e.length, i = null, s = [], o = 0; o < r; ++o) {
					if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
						if (!i) {
							if (n > 56319) {
								(t -= 3) > -1 && s.push(239, 191, 189);
								continue
							}
							if (o + 1 === r) {
								(t -= 3) > -1 && s.push(239, 191, 189);
								continue
							}
							i = n;
							continue
						}
						if (n < 56320) {
							(t -= 3) > -1 && s.push(239, 191, 189), i = n;
							continue
						}
						n = 65536 + (i - 55296 << 10 | n - 56320)
					} else i && (t -= 3) > -1 && s.push(239, 191, 189);
					if (i = null, n < 128) {
						if ((t -= 1) < 0) break;
						s.push(n)
					} else if (n < 2048) {
						if ((t -= 2) < 0) break;
						s.push(n >> 6 | 192, 63 & n | 128)
					} else if (n < 65536) {
						if ((t -= 3) < 0) break;
						s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
					} else {
						if (!(n < 1114112)) throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
					}
				}
				return s
			}

			function V(e) {
				return r.toByteArray(function (e) {
					if ((e = function (e) {
							return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
						}(e).replace(j, "")).length < 2) return "";
					for (; e.length % 4 != 0;) e += "=";
					return e
				}(e))
			}

			function X(e, t, n, r) {
				for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
				return i
			}
		}).call(this, n(35))
	}, function (e, t, n) {
		"use strict";
		t.byteLength = function (e) {
			return 3 * e.length / 4 - c(e)
		}, t.toByteArray = function (e) {
			var t, n, r, o, a, u = e.length;
			o = c(e), a = new s(3 * u / 4 - o), n = o > 0 ? u - 4 : u;
			var l = 0;
			for (t = 0; t < n; t += 4) r = i[e.charCodeAt(t)] << 18 | i[e.charCodeAt(t + 1)] << 12 | i[e.charCodeAt(t + 2)] << 6 | i[e.charCodeAt(t + 3)], a[l++] = r >> 16 & 255, a[l++] = r >> 8 & 255, a[l++] = 255 & r;
			2 === o ? (r = i[e.charCodeAt(t)] << 2 | i[e.charCodeAt(t + 1)] >> 4, a[l++] = 255 & r) : 1 === o && (r = i[e.charCodeAt(t)] << 10 | i[e.charCodeAt(t + 1)] << 4 | i[e.charCodeAt(t + 2)] >> 2, a[l++] = r >> 8 & 255, a[l++] = 255 & r);
			return a
		}, t.fromByteArray = function (e) {
			for (var t, n = e.length, i = n % 3, s = "", o = [], a = 0, u = n - i; a < u; a += 16383) o.push(p(e, a, a + 16383 > u ? u : a + 16383));
			1 === i ? (t = e[n - 1], s += r[t >> 2], s += r[t << 4 & 63], s += "==") : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], s += r[t >> 10], s += r[t >> 4 & 63], s += r[t << 2 & 63], s += "=");
			return o.push(s), o.join("")
		};
		for (var r = [], i = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = o.length; a < u; ++a) r[a] = o[a], i[o.charCodeAt(a)] = a;

		function c(e) {
			var t = e.length;
			if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
			return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
		}

		function l(e) {
			return r[e >> 18 & 63] + r[e >> 12 & 63] + r[e >> 6 & 63] + r[63 & e]
		}

		function p(e, t, n) {
			for (var r, i = [], s = t; s < n; s += 3) r = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2], i.push(l(r));
			return i.join("")
		}
		i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
	}, function (e, t) {
		t.read = function (e, t, n, r, i) {
			var s, o, a = 8 * i - r - 1,
				u = (1 << a) - 1,
				c = u >> 1,
				l = -7,
				p = n ? i - 1 : 0,
				h = n ? -1 : 1,
				f = e[t + p];
			for (p += h, s = f & (1 << -l) - 1, f >>= -l, l += a; l > 0; s = 256 * s + e[t + p], p += h, l -= 8);
			for (o = s & (1 << -l) - 1, s >>= -l, l += r; l > 0; o = 256 * o + e[t + p], p += h, l -= 8);
			if (0 === s) s = 1 - c;
			else {
				if (s === u) return o ? NaN : 1 / 0 * (f ? -1 : 1);
				o += Math.pow(2, r), s -= c
			}
			return (f ? -1 : 1) * o * Math.pow(2, s - r)
		}, t.write = function (e, t, n, r, i, s) {
			var o, a, u, c = 8 * s - i - 1,
				l = (1 << c) - 1,
				p = l >> 1,
				h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
				f = r ? 0 : s - 1,
				d = r ? 1 : -1,
				y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
			for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = l) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), (t += o + p >= 1 ? h / u : h * Math.pow(2, 1 - p)) * u >= 2 && (o++, u /= 2), o + p >= l ? (a = 0, o = l) : o + p >= 1 ? (a = (t * u - 1) * Math.pow(2, i), o += p) : (a = t * Math.pow(2, p - 1) * Math.pow(2, i), o = 0)); i >= 8; e[n + f] = 255 & a, f += d, a /= 256, i -= 8);
			for (o = o << i | a, c += i; c > 0; e[n + f] = 255 & o, f += d, o /= 256, c -= 8);
			e[n + f - d] |= 128 * y
		}
	}, function (e, t) {
		var n = {}.toString;
		e.exports = Array.isArray || function (e) {
			return "[object Array]" == n.call(e)
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.AnyTypeAnnotation = function () {
			this.word("any")
		}, t.ArrayTypeAnnotation = function (e) {
			this.print(e.elementType, e), this.token("["), this.token("]")
		}, t.BooleanTypeAnnotation = function () {
			this.word("boolean")
		}, t.BooleanLiteralTypeAnnotation = function (e) {
			this.word(e.value ? "true" : "false")
		}, t.NullLiteralTypeAnnotation = function () {
			this.word("null")
		}, t.DeclareClass = function (e, t) {
			r().isDeclareExportDeclaration(t) || (this.word("declare"), this.space());
			this.word("class"), this.space(), this._interfaceish(e)
		}, t.DeclareFunction = function (e, t) {
			r().isDeclareExportDeclaration(t) || (this.word("declare"), this.space());
			this.word("function"), this.space(), this.print(e.id, e), this.print(e.id.typeAnnotation.typeAnnotation, e), e.predicate && (this.space(), this.print(e.predicate, e));
			this.semicolon()
		}, t.InferredPredicate = function () {
			this.token("%"), this.word("checks")
		}, t.DeclaredPredicate = function (e) {
			this.token("%"), this.word("checks"), this.token("("), this.print(e.value, e), this.token(")")
		}, t.DeclareInterface = function (e) {
			this.word("declare"), this.space(), this.InterfaceDeclaration(e)
		}, t.DeclareModule = function (e) {
			this.word("declare"), this.space(), this.word("module"), this.space(), this.print(e.id, e), this.space(), this.print(e.body, e)
		}, t.DeclareModuleExports = function (e) {
			this.word("declare"), this.space(), this.word("module"), this.token("."), this.word("exports"), this.print(e.typeAnnotation, e)
		}, t.DeclareTypeAlias = function (e) {
			this.word("declare"), this.space(), this.TypeAlias(e)
		}, t.DeclareOpaqueType = function (e, t) {
			r().isDeclareExportDeclaration(t) || (this.word("declare"), this.space());
			this.OpaqueType(e)
		}, t.DeclareVariable = function (e, t) {
			r().isDeclareExportDeclaration(t) || (this.word("declare"), this.space());
			this.word("var"), this.space(), this.print(e.id, e), this.print(e.id.typeAnnotation, e), this.semicolon()
		}, t.DeclareExportDeclaration = function (e) {
			this.word("declare"), this.space(), this.word("export"), this.space(), e.default && (this.word("default"), this.space());
			(function (e) {
				if (e.declaration) {
					const t = e.declaration;
					this.print(t, e), r().isStatement(t) || this.semicolon()
				} else this.token("{"), e.specifiers.length && (this.space(), this.printList(e.specifiers, e), this.space()), this.token("}"), e.source && (this.space(), this.word("from"), this.space(), this.print(e.source, e)), this.semicolon()
			}).apply(this, arguments)
		}, t.DeclareExportAllDeclaration = function () {
			this.word("declare"), this.space(), i.ExportAllDeclaration.apply(this, arguments)
		}, t.ExistsTypeAnnotation = function () {
			this.token("*")
		}, t.FunctionTypeAnnotation = function (e, t) {
			this.print(e.typeParameters, e), this.token("("), this.printList(e.params, e), e.rest && (e.params.length && (this.token(","), this.space()), this.token("..."), this.print(e.rest, e));
			this.token(")"), "ObjectTypeCallProperty" === t.type || "DeclareFunction" === t.type || "ObjectTypeProperty" === t.type && t.method ? this.token(":") : (this.space(), this.token("=>"));
			this.space(), this.print(e.returnType, e)
		}, t.FunctionTypeParam = function (e) {
			this.print(e.name, e), e.optional && this.token("?");
			e.name && (this.token(":"), this.space());
			this.print(e.typeAnnotation, e)
		}, t.GenericTypeAnnotation = t.ClassImplements = t.InterfaceExtends = function (e) {
			this.print(e.id, e), this.print(e.typeParameters, e)
		}, t._interfaceish = function (e) {
			this.print(e.id, e), this.print(e.typeParameters, e), e.extends.length && (this.space(), this.word("extends"), this.space(), this.printList(e.extends, e));
			e.mixins && e.mixins.length && (this.space(), this.word("mixins"), this.space(), this.printList(e.mixins, e));
			e.implements && e.implements.length && (this.space(), this.word("implements"), this.space(), this.printList(e.implements, e));
			this.space(), this.print(e.body, e)
		}, t._variance = function (e) {
			e.variance && ("plus" === e.variance.kind ? this.token("+") : "minus" === e.variance.kind && this.token("-"))
		}, t.InterfaceDeclaration = function (e) {
			this.word("interface"), this.space(), this._interfaceish(e)
		}, t.InterfaceTypeAnnotation = function (e) {
			this.word("interface"), e.extends && e.extends.length && (this.space(), this.word("extends"), this.space(), this.printList(e.extends, e));
			this.space(), this.print(e.body, e)
		}, t.IntersectionTypeAnnotation = function (e) {
			this.printJoin(e.types, e, {
				separator: o
			})
		}, t.MixedTypeAnnotation = function () {
			this.word("mixed")
		}, t.EmptyTypeAnnotation = function () {
			this.word("empty")
		}, t.NullableTypeAnnotation = function (e) {
			this.token("?"), this.print(e.typeAnnotation, e)
		}, t.NumberTypeAnnotation = function () {
			this.word("number")
		}, t.StringTypeAnnotation = function () {
			this.word("string")
		}, t.ThisTypeAnnotation = function () {
			this.word("this")
		}, t.TupleTypeAnnotation = function (e) {
			this.token("["), this.printList(e.types, e), this.token("]")
		}, t.TypeofTypeAnnotation = function (e) {
			this.word("typeof"), this.space(), this.print(e.argument, e)
		}, t.TypeAlias = function (e) {
			this.word("type"), this.space(), this.print(e.id, e), this.print(e.typeParameters, e), this.space(), this.token("="), this.space(), this.print(e.right, e), this.semicolon()
		}, t.TypeAnnotation = function (e) {
			this.token(":"), this.space(), e.optional && this.token("?");
			this.print(e.typeAnnotation, e)
		}, t.TypeParameterDeclaration = t.TypeParameterInstantiation = function (e) {
			this.token("<"), this.printList(e.params, e, {}), this.token(">")
		}, t.TypeParameter = function (e) {
			this._variance(e), this.word(e.name), e.bound && this.print(e.bound, e);
			e.default && (this.space(), this.token("="), this.space(), this.print(e.default, e))
		}, t.OpaqueType = function (e) {
			this.word("opaque"), this.space(), this.word("type"), this.space(), this.print(e.id, e), this.print(e.typeParameters, e), e.supertype && (this.token(":"), this.space(), this.print(e.supertype, e));
			e.impltype && (this.space(), this.token("="), this.space(), this.print(e.impltype, e));
			this.semicolon()
		}, t.ObjectTypeAnnotation = function (e) {
			e.exact ? this.token("{|") : this.token("{");
			const t = e.properties.concat(e.callProperties || [], e.indexers || [], e.internalSlots || []);
			t.length && (this.space(), this.printJoin(t, e, {
				addNewlines(e) {
					if (e && !t[0]) return 1
				},
				indent: !0,
				statement: !0,
				iterator: () => {
					(1 !== t.length || e.inexact) && (this.token(","), this.space())
				}
			}), this.space());
			e.inexact && (this.indent(), this.token("..."), t.length && this.newline(), this.dedent());
			e.exact ? this.token("|}") : this.token("}")
		}, t.ObjectTypeInternalSlot = function (e) {
			e.static && (this.word("static"), this.space());
			this.token("["), this.token("["), this.print(e.id, e), this.token("]"), this.token("]"), e.optional && this.token("?");
			e.method || (this.token(":"), this.space());
			this.print(e.value, e)
		}, t.ObjectTypeCallProperty = function (e) {
			e.static && (this.word("static"), this.space());
			this.print(e.value, e)
		}, t.ObjectTypeIndexer = function (e) {
			e.static && (this.word("static"), this.space());
			this._variance(e), this.token("["), e.id && (this.print(e.id, e), this.token(":"), this.space());
			this.print(e.key, e), this.token("]"), this.token(":"), this.space(), this.print(e.value, e)
		}, t.ObjectTypeProperty = function (e) {
			e.proto && (this.word("proto"), this.space());
			e.static && (this.word("static"), this.space());
			this._variance(e), this.print(e.key, e), e.optional && this.token("?");
			e.method || (this.token(":"), this.space());
			this.print(e.value, e)
		}, t.ObjectTypeSpreadProperty = function (e) {
			this.token("..."), this.print(e.argument, e)
		}, t.QualifiedTypeIdentifier = function (e) {
			this.print(e.qualification, e), this.token("."), this.print(e.id, e)
		}, t.UnionTypeAnnotation = function (e) {
			this.printJoin(e.types, e, {
				separator: a
			})
		}, t.TypeCastExpression = function (e) {
			this.token("("), this.print(e.expression, e), this.print(e.typeAnnotation, e), this.token(")")
		}, t.Variance = function (e) {
			"plus" === e.kind ? this.token("+") : this.token("-")
		}, t.VoidTypeAnnotation = function () {
			this.word("void")
		}, Object.defineProperty(t, "NumberLiteralTypeAnnotation", {
			enumerable: !0,
			get: function () {
				return s.NumericLiteral
			}
		}), Object.defineProperty(t, "StringLiteralTypeAnnotation", {
			enumerable: !0,
			get: function () {
				return s.StringLiteral
			}
		});
		var i = n(105),
			s = n(106);

		function o() {
			this.space(), this.token("&"), this.space()
		}

		function a() {
			this.space(), this.token("|"), this.space()
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.File = function (e) {
			e.program && this.print(e.program.interpreter, e);
			this.print(e.program, e)
		}, t.Program = function (e) {
			this.printInnerComments(e, !1), this.printSequence(e.directives, e), e.directives && e.directives.length && this.newline();
			this.printSequence(e.body, e)
		}, t.BlockStatement = function (e) {
			this.token("{"), this.printInnerComments(e);
			const t = e.directives && e.directives.length;
			e.body.length || t ? (this.newline(), this.printSequence(e.directives, e, {
				indent: !0
			}), t && this.newline(), this.printSequence(e.body, e, {
				indent: !0
			}), this.removeTrailingNewline(), this.source("end", e.loc), this.endsWith("\n") || this.newline(), this.rightBrace()) : (this.source("end", e.loc), this.token("}"))
		}, t.Noop = function () {}, t.Directive = function (e) {
			this.print(e.value, e), this.semicolon()
		}, t.DirectiveLiteral = function (e) {
			const t = this.getPossibleRaw(e);
			if (null != t) return void this.token(t);
			const {
				value: n
			} = e;
			if (i.test(n)) {
				if (r.test(n)) throw new Error("Malformed AST: it is not possible to print a directive containing both unescaped single and double quotes.");
				this.token(`'${n}'`)
			} else this.token(`"${n}"`)
		}, t.InterpreterDirective = function (e) {
			this.token(`#!${e.value}\n`)
		}, t.Placeholder = function (e) {
			this.token("%%"), this.print(e.name), this.token("%%"), "Statement" === e.expectedNode && this.semicolon()
		};
		const r = /(?:^|[^\\])(?:\\\\)*'/,
			i = /(?:^|[^\\])(?:\\\\)*"/
	}, function (e, t, n) {
		"use strict";

		function r() {
			this.space()
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.JSXAttribute = function (e) {
			this.print(e.name, e), e.value && (this.token("="), this.print(e.value, e))
		}, t.JSXIdentifier = function (e) {
			this.word(e.name)
		}, t.JSXNamespacedName = function (e) {
			this.print(e.namespace, e), this.token(":"), this.print(e.name, e)
		}, t.JSXMemberExpression = function (e) {
			this.print(e.object, e), this.token("."), this.print(e.property, e)
		}, t.JSXSpreadAttribute = function (e) {
			this.token("{"), this.token("..."), this.print(e.argument, e), this.token("}")
		}, t.JSXExpressionContainer = function (e) {
			this.token("{"), this.print(e.expression, e), this.token("}")
		}, t.JSXSpreadChild = function (e) {
			this.token("{"), this.token("..."), this.print(e.expression, e), this.token("}")
		}, t.JSXText = function (e) {
			const t = this.getPossibleRaw(e);
			null != t ? this.token(t) : this.token(e.value)
		}, t.JSXElement = function (e) {
			const t = e.openingElement;
			if (this.print(t, e), t.selfClosing) return;
			this.indent();
			for (const t of e.children) this.print(t, e);
			this.dedent(), this.print(e.closingElement, e)
		}, t.JSXOpeningElement = function (e) {
			this.token("<"), this.print(e.name, e), this.print(e.typeParameters, e), e.attributes.length > 0 && (this.space(), this.printJoin(e.attributes, e, {
				separator: r
			}));
			e.selfClosing ? (this.space(), this.token("/>")) : this.token(">")
		}, t.JSXClosingElement = function (e) {
			this.token("</"), this.print(e.name, e), this.token(">")
		}, t.JSXEmptyExpression = function (e) {
			this.printInnerComments(e)
		}, t.JSXFragment = function (e) {
			this.print(e.openingFragment, e), this.indent();
			for (const t of e.children) this.print(t, e);
			this.dedent(), this.print(e.closingFragment, e)
		}, t.JSXOpeningFragment = function () {
			this.token("<"), this.token(">")
		}, t.JSXClosingFragment = function () {
			this.token("</"), this.token(">")
		}
	}, function (e, t, n) {
		"use strict";

		function r(e, t) {
			!0 !== t && e.token(t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.TSTypeAnnotation = function (e) {
			this.token(":"), this.space(), e.optional && this.token("?");
			this.print(e.typeAnnotation, e)
		}, t.TSTypeParameterDeclaration = t.TSTypeParameterInstantiation = function (e) {
			this.token("<"), this.printList(e.params, e, {}), this.token(">")
		}, t.TSTypeParameter = function (e) {
			this.word(e.name), e.constraint && (this.space(), this.word("extends"), this.space(), this.print(e.constraint, e));
			e.default && (this.space(), this.token("="), this.space(), this.print(e.default, e))
		}, t.TSParameterProperty = function (e) {
			e.accessibility && (this.word(e.accessibility), this.space());
			e.readonly && (this.word("readonly"), this.space());
			this._param(e.parameter)
		}, t.TSDeclareFunction = function (e) {
			e.declare && (this.word("declare"), this.space());
			this._functionHead(e), this.token(";")
		}, t.TSDeclareMethod = function (e) {
			this._classMethodHead(e), this.token(";")
		}, t.TSQualifiedName = function (e) {
			this.print(e.left, e), this.token("."), this.print(e.right, e)
		}, t.TSCallSignatureDeclaration = function (e) {
			this.tsPrintSignatureDeclarationBase(e)
		}, t.TSConstructSignatureDeclaration = function (e) {
			this.word("new"), this.space(), this.tsPrintSignatureDeclarationBase(e)
		}, t.TSPropertySignature = function (e) {
			const {
				readonly: t,
				initializer: n
			} = e;
			t && (this.word("readonly"), this.space());
			this.tsPrintPropertyOrMethodName(e), this.print(e.typeAnnotation, e), n && (this.space(), this.token("="), this.space(), this.print(n, e));
			this.token(";")
		}, t.tsPrintPropertyOrMethodName = function (e) {
			e.computed && this.token("[");
			this.print(e.key, e), e.computed && this.token("]");
			e.optional && this.token("?")
		}, t.TSMethodSignature = function (e) {
			this.tsPrintPropertyOrMethodName(e), this.tsPrintSignatureDeclarationBase(e), this.token(";")
		}, t.TSIndexSignature = function (e) {
			const {
				readonly: t
			} = e;
			t && (this.word("readonly"), this.space());
			this.token("["), this._parameters(e.parameters, e), this.token("]"), this.print(e.typeAnnotation, e), this.token(";")
		}, t.TSAnyKeyword = function () {
			this.word("any")
		}, t.TSUnknownKeyword = function () {
			this.word("unknown")
		}, t.TSNumberKeyword = function () {
			this.word("number")
		}, t.TSObjectKeyword = function () {
			this.word("object")
		}, t.TSBooleanKeyword = function () {
			this.word("boolean")
		}, t.TSStringKeyword = function () {
			this.word("string")
		}, t.TSSymbolKeyword = function () {
			this.word("symbol")
		}, t.TSVoidKeyword = function () {
			this.word("void")
		}, t.TSUndefinedKeyword = function () {
			this.word("undefined")
		}, t.TSNullKeyword = function () {
			this.word("null")
		}, t.TSNeverKeyword = function () {
			this.word("never")
		}, t.TSThisType = function () {
			this.word("this")
		}, t.TSFunctionType = function (e) {
			this.tsPrintFunctionOrConstructorType(e)
		}, t.TSConstructorType = function (e) {
			this.word("new"), this.space(), this.tsPrintFunctionOrConstructorType(e)
		}, t.tsPrintFunctionOrConstructorType = function (e) {
			const {
				typeParameters: t,
				parameters: n
			} = e;
			this.print(t, e), this.token("("), this._parameters(n, e), this.token(")"), this.space(), this.token("=>"), this.space(), this.print(e.typeAnnotation.typeAnnotation, e)
		}, t.TSTypeReference = function (e) {
			this.print(e.typeName, e), this.print(e.typeParameters, e)
		}, t.TSTypePredicate = function (e) {
			this.print(e.parameterName), this.space(), this.word("is"), this.space(), this.print(e.typeAnnotation.typeAnnotation)
		}, t.TSTypeQuery = function (e) {
			this.word("typeof"), this.space(), this.print(e.exprName)
		}, t.TSTypeLiteral = function (e) {
			this.tsPrintTypeLiteralOrInterfaceBody(e.members, e)
		}, t.tsPrintTypeLiteralOrInterfaceBody = function (e, t) {
			this.tsPrintBraced(e, t)
		}, t.tsPrintBraced = function (e, t) {
			if (this.token("{"), e.length) {
				this.indent(), this.newline();
				for (const n of e) this.print(n, t), this.newline();
				this.dedent(), this.rightBrace()
			} else this.token("}")
		}, t.TSArrayType = function (e) {
			this.print(e.elementType, e), this.token("[]")
		}, t.TSTupleType = function (e) {
			this.token("["), this.printList(e.elementTypes, e), this.token("]")
		}, t.TSOptionalType = function (e) {
			this.print(e.typeAnnotation, e), this.token("?")
		}, t.TSRestType = function (e) {
			this.token("..."), this.print(e.typeAnnotation, e)
		}, t.TSUnionType = function (e) {
			this.tsPrintUnionOrIntersectionType(e, "|")
		}, t.TSIntersectionType = function (e) {
			this.tsPrintUnionOrIntersectionType(e, "&")
		}, t.tsPrintUnionOrIntersectionType = function (e, t) {
			this.printJoin(e.types, e, {
				separator() {
					this.space(), this.token(t), this.space()
				}
			})
		}, t.TSConditionalType = function (e) {
			this.print(e.checkType), this.space(), this.word("extends"), this.space(), this.print(e.extendsType), this.space(), this.token("?"), this.space(), this.print(e.trueType), this.space(), this.token(":"), this.space(), this.print(e.falseType)
		}, t.TSInferType = function (e) {
			this.token("infer"), this.space(), this.print(e.typeParameter)
		}, t.TSParenthesizedType = function (e) {
			this.token("("), this.print(e.typeAnnotation, e), this.token(")")
		}, t.TSTypeOperator = function (e) {
			this.token(e.operator), this.space(), this.print(e.typeAnnotation, e)
		}, t.TSIndexedAccessType = function (e) {
			this.print(e.objectType, e), this.token("["), this.print(e.indexType, e), this.token("]")
		}, t.TSMappedType = function (e) {
			const {
				readonly: t,
				typeParameter: n,
				optional: i
			} = e;
			this.token("{"), this.space(), t && (r(this, t), this.word("readonly"), this.space());
			this.token("["), this.word(n.name), this.space(), this.word("in"), this.space(), this.print(n.constraint, n), this.token("]"), i && (r(this, i), this.token("?"));
			this.token(":"), this.space(), this.print(e.typeAnnotation, e), this.space(), this.token("}")
		}, t.TSLiteralType = function (e) {
			this.print(e.literal, e)
		}, t.TSExpressionWithTypeArguments = function (e) {
			this.print(e.expression, e), this.print(e.typeParameters, e)
		}, t.TSInterfaceDeclaration = function (e) {
			const {
				declare: t,
				id: n,
				typeParameters: r,
				extends: i,
				body: s
			} = e;
			t && (this.word("declare"), this.space());
			this.word("interface"), this.space(), this.print(n, e), this.print(r, e), i && (this.space(), this.word("extends"), this.space(), this.printList(i, e));
			this.space(), this.print(s, e)
		}, t.TSInterfaceBody = function (e) {
			this.tsPrintTypeLiteralOrInterfaceBody(e.body, e)
		}, t.TSTypeAliasDeclaration = function (e) {
			const {
				declare: t,
				id: n,
				typeParameters: r,
				typeAnnotation: i
			} = e;
			t && (this.word("declare"), this.space());
			this.word("type"), this.space(), this.print(n, e), this.print(r, e), this.space(), this.token("="), this.space(), this.print(i, e), this.token(";")
		}, t.TSAsExpression = function (e) {
			const {
				expression: t,
				typeAnnotation: n
			} = e;
			this.print(t, e), this.space(), this.word("as"), this.space(), this.print(n, e)
		}, t.TSTypeAssertion = function (e) {
			const {
				typeAnnotation: t,
				expression: n
			} = e;
			this.token("<"), this.print(t, e), this.token(">"), this.space(), this.print(n, e)
		}, t.TSEnumDeclaration = function (e) {
			const {
				declare: t,
				const: n,
				id: r,
				members: i
			} = e;
			t && (this.word("declare"), this.space());
			n && (this.word("const"), this.space());
			this.word("enum"), this.space(), this.print(r, e), this.space(), this.tsPrintBraced(i, e)
		}, t.TSEnumMember = function (e) {
			const {
				id: t,
				initializer: n
			} = e;
			this.print(t, e), n && (this.space(), this.token("="), this.space(), this.print(n, e));
			this.token(",")
		}, t.TSModuleDeclaration = function (e) {
			const {
				declare: t,
				id: n
			} = e;
			t && (this.word("declare"), this.space());
			e.global || (this.word("Identifier" === n.type ? "namespace" : "module"), this.space());
			if (this.print(n, e), !e.body) return void this.token(";");
			let r = e.body;
			for (;
				"TSModuleDeclaration" === r.type;) this.token("."), this.print(r.id, r), r = r.body;
			this.space(), this.print(r, e)
		}, t.TSModuleBlock = function (e) {
			this.tsPrintBraced(e.body, e)
		}, t.TSImportType = function (e) {
			const {
				argument: t,
				qualifier: n,
				typeParameters: r
			} = e;
			this.word("import"), this.token("("), this.print(t, e), this.token(")"), n && (this.token("."), this.print(n, e));
			r && this.print(r, e)
		}, t.TSImportEqualsDeclaration = function (e) {
			const {
				isExport: t,
				id: n,
				moduleReference: r
			} = e;
			t && (this.word("export"), this.space());
			this.word("import"), this.space(), this.print(n, e), this.space(), this.token("="), this.space(), this.print(r, e), this.token(";")
		}, t.TSExternalModuleReference = function (e) {
			this.token("require("), this.print(e.expression, e), this.token(")")
		}, t.TSNonNullExpression = function (e) {
			this.print(e.expression, e), this.token("!")
		}, t.TSExportAssignment = function (e) {
			this.word("export"), this.space(), this.token("="), this.space(), this.print(e.expression, e), this.token(";")
		}, t.TSNamespaceExportDeclaration = function (e) {
			this.word("export"), this.space(), this.word("as"), this.space(), this.word("namespace"), this.space(), this.print(e.id, e)
		}, t.tsPrintSignatureDeclarationBase = function (e) {
			const {
				typeParameters: t,
				parameters: n
			} = e;
			this.print(t, e), this.token("("), this._parameters(n, e), this.token(")"), this.print(e.typeAnnotation, e)
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.findParent = function (e) {
			let t = this;
			for (; t = t.parentPath;)
				if (e(t)) return t;
			return null
		}, t.find = function (e) {
			let t = this;
			do {
				if (e(t)) return t
			} while (t = t.parentPath);
			return null
		}, t.getFunctionParent = function () {
			return this.findParent(e => e.isFunction())
		}, t.getStatementParent = function () {
			let e = this;
			do {
				if (!e.parentPath || Array.isArray(e.container) && e.isStatement()) break;
				e = e.parentPath
			} while (e);
			if (e && (e.isProgram() || e.isFile())) throw new Error("File/Program node, we can't possibly find a statement parent to this");
			return e
		}, t.getEarliestCommonAncestorFrom = function (e) {
			return this.getDeepestCommonAncestorFrom(e, function (e, t, n) {
				let i;
				const s = r().VISITOR_KEYS[e.type];
				for (const e of n) {
					const n = e[t + 1];
					if (!i) {
						i = n;
						continue
					}
					if (n.listKey && i.listKey === n.listKey && n.key < i.key) {
						i = n;
						continue
					}
					const r = s.indexOf(i.parentKey),
						o = s.indexOf(n.parentKey);
					r > o && (i = n)
				}
				return i
			})
		}, t.getDeepestCommonAncestorFrom = function (e, t) {
			if (!e.length) return this;
			if (1 === e.length) return e[0];
			let n, r, i = 1 / 0;
			const s = e.map(e => {
					const t = [];
					do {
						t.unshift(e)
					} while ((e = e.parentPath) && e !== this);
					return t.length < i && (i = t.length), t
				}),
				o = s[0];
			e: for (let e = 0; e < i; e++) {
				const t = o[e];
				for (const n of s)
					if (n[e] !== t) break e;
				n = e, r = t
			}
			if (r) return t ? t(r, n, s) : r;
			throw new Error("Couldn't find intersection")
		}, t.getAncestry = function () {
			let e = this;
			const t = [];
			do {
				t.push(e)
			} while (e = e.parentPath);
			return t
		}, t.isAncestor = function (e) {
			return e.isDescendant(this)
		}, t.isDescendant = function (e) {
			return !!this.findParent(t => t === e)
		}, t.inType = function () {
			let e = this;
			for (; e;) {
				for (const t of arguments)
					if (e.node.type === t) return !0;
				e = e.parentPath
			}
			return !1
		};
		! function (e) {
			e && e.__esModule
		}(n(12))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.getTypeAnnotation = function () {
			if (this.typeAnnotation) return this.typeAnnotation;
			let e = this._getTypeAnnotation() || i().anyTypeAnnotation();
			i().isTypeAnnotation(e) && (e = e.typeAnnotation);
			return this.typeAnnotation = e
		}, t._getTypeAnnotation = function () {
			const e = this.node;
			if (!e) {
				if ("init" === this.key && this.parentPath.isVariableDeclarator()) {
					const e = this.parentPath.parentPath,
						t = e.parentPath;
					return "left" === e.key && t.isForInStatement() ? i().stringTypeAnnotation() : "left" === e.key && t.isForOfStatement() ? i().anyTypeAnnotation() : i().voidTypeAnnotation()
				}
				return
			}
			if (e.typeAnnotation) return e.typeAnnotation;
			let t = r[e.type];
			if (t) return t.call(this, e);
			if ((t = r[this.parentPath.type]) && t.validParent) return this.parentPath.getTypeAnnotation()
		}, t.isBaseType = function (e, t) {
			return o(e, this.getTypeAnnotation(), t)
		}, t.couldBeBaseType = function (e) {
			const t = this.getTypeAnnotation();
			if (i().isAnyTypeAnnotation(t)) return !0;
			if (i().isUnionTypeAnnotation(t)) {
				for (const n of t.types)
					if (i().isAnyTypeAnnotation(n) || o(e, n, !0)) return !0;
				return !1
			}
			return o(e, t, !0)
		}, t.baseTypeStrictlyMatches = function (e) {
			const t = this.getTypeAnnotation();
			if (e = e.getTypeAnnotation(), !i().isAnyTypeAnnotation(t) && i().isFlowBaseAnnotation(t)) return e.type === t.type
		}, t.isGenericType = function (e) {
			const t = this.getTypeAnnotation();
			return i().isGenericTypeAnnotation(t) && i().isIdentifier(t.id, {
				name: e
			})
		};
		var r = s(n(295));

		function i() {
			const e = s(n(0));
			return i = function () {
				return e
			}, e
		}

		function s(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e)
					if (Object.prototype.hasOwnProperty.call(e, n)) {
						var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
						r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
					}
			return t.default = e, t
		}

		function o(e, t, n) {
			if ("string" === e) return i().isStringTypeAnnotation(t);
			if ("number" === e) return i().isNumberTypeAnnotation(t);
			if ("boolean" === e) return i().isBooleanTypeAnnotation(t);
			if ("any" === e) return i().isAnyTypeAnnotation(t);
			if ("mixed" === e) return i().isMixedTypeAnnotation(t);
			if ("empty" === e) return i().isEmptyTypeAnnotation(t);
			if ("void" === e) return i().isVoidTypeAnnotation(t);
			if (n) return !1;
			throw new Error(`Unknown base type ${e}`)
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.VariableDeclarator = function () {
			if (!this.get("id").isIdentifier()) return;
			const e = this.get("init");
			let t = e.getTypeAnnotation();
			t && "AnyTypeAnnotation" === t.type && e.isCallExpression() && e.get("callee").isIdentifier({
				name: "Array"
			}) && !e.scope.hasBinding("Array", !0) && (t = o());
			return t
		}, t.TypeCastExpression = s, t.NewExpression = function (e) {
			if (this.get("callee").isIdentifier()) return r().genericTypeAnnotation(e.callee)
		}, t.TemplateLiteral = function () {
			return r().stringTypeAnnotation()
		}, t.UnaryExpression = function (e) {
			const t = e.operator;
			if ("void" === t) return r().voidTypeAnnotation();
			if (r().NUMBER_UNARY_OPERATORS.indexOf(t) >= 0) return r().numberTypeAnnotation();
			if (r().STRING_UNARY_OPERATORS.indexOf(t) >= 0) return r().stringTypeAnnotation();
			if (r().BOOLEAN_UNARY_OPERATORS.indexOf(t) >= 0) return r().booleanTypeAnnotation()
		}, t.BinaryExpression = function (e) {
			const t = e.operator;
			if (r().NUMBER_BINARY_OPERATORS.indexOf(t) >= 0) return r().numberTypeAnnotation();
			if (r().BOOLEAN_BINARY_OPERATORS.indexOf(t) >= 0) return r().booleanTypeAnnotation();
			if ("+" === t) {
				const e = this.get("right"),
					t = this.get("left");
				return t.isBaseType("number") && e.isBaseType("number") ? r().numberTypeAnnotation() : t.isBaseType("string") || e.isBaseType("string") ? r().stringTypeAnnotation() : r().unionTypeAnnotation([r().stringTypeAnnotation(), r().numberTypeAnnotation()])
			}
		}, t.LogicalExpression = function () {
			return r().createUnionTypeAnnotation([this.get("left").getTypeAnnotation(), this.get("right").getTypeAnnotation()])
		}, t.ConditionalExpression = function () {
			return r().createUnionTypeAnnotation([this.get("consequent").getTypeAnnotation(), this.get("alternate").getTypeAnnotation()])
		}, t.SequenceExpression = function () {
			return this.get("expressions").pop().getTypeAnnotation()
		}, t.ParenthesizedExpression = function () {
			return this.get("expression").getTypeAnnotation()
		}, t.AssignmentExpression = function () {
			return this.get("right").getTypeAnnotation()
		}, t.UpdateExpression = function (e) {
			const t = e.operator;
			if ("++" === t || "--" === t) return r().numberTypeAnnotation()
		}, t.StringLiteral = function () {
			return r().stringTypeAnnotation()
		}, t.NumericLiteral = function () {
			return r().numberTypeAnnotation()
		}, t.BooleanLiteral = function () {
			return r().booleanTypeAnnotation()
		}, t.NullLiteral = function () {
			return r().nullLiteralTypeAnnotation()
		}, t.RegExpLiteral = function () {
			return r().genericTypeAnnotation(r().identifier("RegExp"))
		}, t.ObjectExpression = function () {
			return r().genericTypeAnnotation(r().identifier("Object"))
		}, t.ArrayExpression = o, t.RestElement = a, t.ClassDeclaration = t.ClassExpression = t.FunctionDeclaration = t.ArrowFunctionExpression = t.FunctionExpression = function () {
			return r().genericTypeAnnotation(r().identifier("Function"))
		}, t.CallExpression = function () {
			const {
				callee: e
			} = this.node;
			if (c(e)) return r().arrayTypeAnnotation(r().stringTypeAnnotation());
			if (u(e) || l(e)) return r().arrayTypeAnnotation(r().anyTypeAnnotation());
			if (p(e)) return r().arrayTypeAnnotation(r().tupleTypeAnnotation([r().stringTypeAnnotation(), r().anyTypeAnnotation()]));
			return h(this.get("callee"))
		}, t.TaggedTemplateExpression = function () {
			return h(this.get("tag"))
		}, Object.defineProperty(t, "Identifier", {
			enumerable: !0,
			get: function () {
				return i.default
			}
		});
		var i = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(296));

		function s(e) {
			return e.typeAnnotation
		}

		function o() {
			return r().genericTypeAnnotation(r().identifier("Array"))
		}

		function a() {
			return o()
		}
		s.validParent = !0, a.validParent = !0;
		const u = r().buildMatchMemberExpression("Array.from"),
			c = r().buildMatchMemberExpression("Object.keys"),
			l = r().buildMatchMemberExpression("Object.values"),
			p = r().buildMatchMemberExpression("Object.entries");

		function h(e) {
			if ((e = e.resolve()).isFunction()) {
				if (e.is("async")) return e.is("generator") ? r().genericTypeAnnotation(r().identifier("AsyncIterator")) : r().genericTypeAnnotation(r().identifier("Promise"));
				if (e.node.returnType) return e.node.returnType
			}
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}

		function i(e, t, n) {
			const r = e.constantViolations.slice();
			return r.unshift(e.path), r.filter(e => {
				const r = (e = e.resolve())._guessExecutionStatusRelativeTo(t);
				return n && "function" === r && n.push(e), "before" === r
			})
		}

		function s(e, t) {
			const n = t.node.operator,
				i = t.get("right").resolve(),
				s = t.get("left").resolve();
			let o, a, u;
			if (s.isIdentifier({
					name: e
				}) ? o = i : i.isIdentifier({
					name: e
				}) && (o = s), o) return "===" === n ? o.getTypeAnnotation() : r().BOOLEAN_NUMBER_BINARY_OPERATORS.indexOf(n) >= 0 ? r().numberTypeAnnotation() : void 0;
			if ("===" !== n && "==" !== n) return;
			if (s.isUnaryExpression({
					operator: "typeof"
				}) ? (a = s, u = i) : i.isUnaryExpression({
					operator: "typeof"
				}) && (a = i, u = s), !a) return;
			if (!a.get("argument").isIdentifier({
					name: e
				})) return;
			if (!(u = u.resolve()).isLiteral()) return;
			const c = u.node.value;
			return "string" == typeof c ? r().createTypeAnnotationBasedOnTypeof(c) : void 0
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			if (!this.isReferenced()) return;
			const t = this.scope.getBinding(e.name);
			if (t) return t.identifier.typeAnnotation ? t.identifier.typeAnnotation : function (e, t, n) {
				const o = [],
					a = [];
				let u = i(e, t, a);
				const c = function e(t, n, i) {
					const o = function (e, t, n) {
						let r;
						for (; r = t.parentPath;) {
							if (r.isIfStatement() || r.isConditionalExpression()) {
								if ("test" === t.key) return;
								return r
							}
							if (r.isFunction() && r.parentPath.scope.getBinding(n) !== e) return;
							t = r
						}
					}(t, n, i);
					if (!o) return;
					const a = o.get("test");
					const u = [a];
					const c = [];
					for (let e = 0; e < u.length; e++) {
						const t = u[e];
						if (t.isLogicalExpression()) "&&" === t.node.operator && (u.push(t.get("left")), u.push(t.get("right")));
						else if (t.isBinaryExpression()) {
							const e = s(i, t);
							e && c.push(e)
						}
					}
					if (c.length) return {
						typeAnnotation: r().createUnionTypeAnnotation(c),
						ifStatement: o
					};
					return e(o, i)
				}(e, t, n);
				if (c) {
					const t = i(e, c.ifStatement);
					u = u.filter(e => t.indexOf(e) < 0), o.push(c.typeAnnotation)
				}
				if (u.length) {
					u = u.concat(a);
					for (const e of u) o.push(e.getTypeAnnotation())
				}
				if (o.length) return r().createUnionTypeAnnotation(o)
			}(t, this, e.name);
			if ("undefined" === e.name) return r().voidTypeAnnotation();
			if ("NaN" === e.name || "Infinity" === e.name) return r().numberTypeAnnotation();
			e.name
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = n(107);
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.replaceWithMultiple = function (e) {
			this.resync(), e = this._verifyNodeList(e), a().inheritLeadingComments(e[0], this.node), a().inheritTrailingComments(e[e.length - 1], this.node), this.node = this.container[this.key] = null;
			const t = this.insertAfter(e);
			this.node ? this.requeue() : this.remove();
			return t
		}, t.replaceWithSourceString = function (e) {
			this.resync();
			try {
				e = `(${e})`, e = (0, o().parse)(e)
			} catch (t) {
				const n = t.loc;
				throw n && (t.message += " - make sure this is an expression.\n" + (0, r().codeFrameColumns)(e, {
					start: {
						line: n.line,
						column: n.column + 1
					}
				}), t.code = "BABEL_REPLACE_SOURCE_ERROR"), t
			}
			return e = e.program.body[0].expression, i.default.removeProperties(e), this.replaceWith(e)
		}, t.replaceWith = function (e) {
			if (this.resync(), this.removed) throw new Error("You can't replace this node, we've already removed it");
			e instanceof s.default && (e = e.node);
			if (!e) throw new Error("You passed `path.replaceWith()` a falsy node, use `path.remove()` instead");
			if (this.node === e) return [this];
			if (this.isProgram() && !a().isProgram(e)) throw new Error("You can only replace a Program root node with another Program node");
			if (Array.isArray(e)) throw new Error("Don't use `path.replaceWith()` with an array of nodes, use `path.replaceWithMultiple()`");
			if ("string" == typeof e) throw new Error("Don't use `path.replaceWith()` with a source string, use `path.replaceWithSourceString()`");
			let t = "";
			this.isNodeType("Statement") && a().isExpression(e) && (this.canHaveVariableDeclarationOrExpression() || this.canSwapBetweenExpressionAndStatement(e) || this.parentPath.isExportDefaultDeclaration() || (e = a().expressionStatement(e), t = "expression"));
			if (this.isNodeType("Expression") && a().isStatement(e) && !this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(e)) return this.replaceExpressionWithStatements([e]);
			const n = this.node;
			n && (a().inheritsComments(e, n), a().removeComments(n));
			return this._replaceWith(e), this.type = e.type, this.setScope(), this.requeue(), [t ? this.get(t) : this]
		}, t._replaceWith = function (e) {
			if (!this.container) throw new ReferenceError("Container is falsy");
			this.inList ? a().validate(this.parent, this.key, [e]) : a().validate(this.parent, this.key, e);
			this.debug(`Replace with ${e&&e.type}`), this.node = this.container[this.key] = e
		}, t.replaceExpressionWithStatements = function (e) {
			this.resync();
			const t = a().toSequenceExpression(e, this.scope);
			if (t) return this.replaceWith(t)[0].get("expressions");
			const n = this.getFunctionParent(),
				r = n && n.is("async"),
				s = a().arrowFunctionExpression([], a().blockStatement(e));
			this.replaceWith(a().callExpression(s, [])), this.traverse(c);
			const o = this.get("callee").getCompletionRecords();
			for (const e of o) {
				if (!e.isExpressionStatement()) continue;
				const t = e.findParent(e => e.isLoop());
				if (t) {
					let n = t.getData("expressionReplacementReturnUid");
					if (n) n = a().identifier(n.name);
					else {
						const e = this.get("callee");
						n = e.scope.generateDeclaredUidIdentifier("ret"), e.get("body").pushContainer("body", a().returnStatement(a().cloneNode(n))), t.setData("expressionReplacementReturnUid", n)
					}
					e.get("expression").replaceWith(a().assignmentExpression("=", a().cloneNode(n), e.node.expression))
				} else e.replaceWith(a().returnStatement(e.node.expression))
			}
			const u = this.get("callee");
			u.arrowFunctionToExpression(), r && i.default.hasType(this.get("callee.body").node, "AwaitExpression", a().FUNCTION_TYPES) && (u.set("async", !0), this.replaceWith(a().awaitExpression(this.node)));
			return u.get("body.body")
		}, t.replaceInline = function (e) {
			if (this.resync(), Array.isArray(e)) {
				if (Array.isArray(this.container)) {
					e = this._verifyNodeList(e);
					const t = this._containerInsertAfter(e);
					return this.remove(), t
				}
				return this.replaceWithMultiple(e)
			}
			return this.replaceWith(e)
		};
		var i = u(n(13)),
			s = u(n(12));

		function o() {
			const e = n(32);
			return o = function () {
				return e
			}, e
		}

		function a() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return a = function () {
				return e
			}, e
		}

		function u(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		const c = {
			Function(e) {
				e.skip()
			},
			VariableDeclaration(e) {
				if ("var" !== e.node.kind) return;
				const t = e.getBindingIdentifiers();
				for (const n of Object.keys(t)) e.scope.push({
					id: t[n]
				});
				const n = [];
				for (const t of e.node.declarations) t.init && n.push(a().expressionStatement(a().assignmentExpression("=", t.id, t.init)));
				e.replaceWithMultiple(n)
			}
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(299));
			return r = function () {
				return e
			}, e
		}

		function i() {
			const e = o(n(74));
			return i = function () {
				return e
			}, e
		}

		function s() {
			const e = o(n(300));
			return s = function () {
				return e
			}, e
		}

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.shouldHighlight = l, t.getChalk = p, t.default = function (e, t = {}) {
			if (l(t)) {
				const n = p(t),
					s = function (e) {
						return {
							keyword: e.cyan,
							capitalized: e.yellow,
							jsx_tag: e.yellow,
							punctuator: e.yellow,
							number: e.magenta,
							string: e.green,
							regex: e.magenta,
							comment: e.grey,
							invalid: e.white.bgRed.bold
						}
					}(n);
				return function (e, t) {
					return t.replace(r().default, function (...t) {
						const n = function (e) {
								const [t, n] = e.slice(-2), s = (0, r().matchToToken)(e);
								if ("name" === s.type) {
									if (i().default.keyword.isReservedWordES6(s.value)) return "keyword";
									if (u.test(s.value) && ("<" === n[t - 1] || "</" == n.substr(t - 2, 2))) return "jsx_tag";
									if (s.value[0] !== s.value[0].toLowerCase()) return "capitalized"
								}
								if ("punctuator" === s.type && c.test(s.value)) return "bracket";
								if ("invalid" === s.type && ("@" === s.value || "#" === s.value)) return "punctuator";
								return s.type
							}(t),
							s = e[n];
						return s ? t[0].split(a).map(e => s(e)).join("\n") : t[0]
					})
				}(s, e)
			}
			return e
		};
		const a = /\r\n|[\n\r\u2028\u2029]/,
			u = /^[a-z][\w-]*$/i,
			c = /^[()[\]{}]$/;

		function l(e) {
			return s().default.supportsColor || e.forceColor
		}

		function p(e) {
			let t = s().default;
			return e.forceColor && (t = new(s().default.constructor)({
				enabled: !0,
				level: 1
			})), t
		}
	}, function (e, t) {
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g, t.matchToToken = function (e) {
			var t = {
				type: "invalid",
				value: e[0]
			};
			return e[1] ? (t.type = "string", t.closed = !(!e[3] && !e[4])) : e[5] ? t.type = "comment" : e[6] ? (t.type = "comment", t.closed = !!e[7]) : e[8] ? t.type = "regex" : e[9] ? t.type = "number" : e[10] ? t.type = "name" : e[11] ? t.type = "punctuator" : e[12] && (t.type = "whitespace"), t
		}
	}, function (e, t, n) {
		"use strict";
		(function (t) {
			const r = n(301),
				i = n(302),
				s = n(306).stdout,
				o = n(307),
				a = "win32" === t.platform && !(t.env.TERM || "").toLowerCase().startsWith("xterm"),
				u = ["ansi", "ansi", "ansi256", "ansi16m"],
				c = new Set(["gray"]),
				l = Object.create(null);

			function p(e, t) {
				t = t || {};
				const n = s ? s.level : 0;
				e.level = void 0 === t.level ? n : t.level, e.enabled = "enabled" in t ? t.enabled : e.level > 0
			}

			function h(e) {
				if (!this || !(this instanceof h) || this.template) {
					const t = {};
					return p(t, e), t.template = function () {
						const e = [].slice.call(arguments);
						return function (e, t) {
							if (!Array.isArray(t)) return [].slice.call(arguments, 1).join(" ");
							const n = [].slice.call(arguments, 2),
								r = [t.raw[0]];
							for (let e = 1; e < t.length; e++) r.push(String(n[e - 1]).replace(/[{}\\]/g, "\\$&")), r.push(String(t.raw[e]));
							return o(e, r.join(""))
						}.apply(null, [t.template].concat(e))
					}, Object.setPrototypeOf(t, h.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = h, t.template
				}
				p(this, e)
			}
			a && (i.blue.open = "[94m");
			for (const e of Object.keys(i)) i[e].closeRe = new RegExp(r(i[e].close), "g"), l[e] = {
				get() {
					const t = i[e];
					return d.call(this, this._styles ? this._styles.concat(t) : [t], this._empty, e)
				}
			};
			l.visible = {
				get() {
					return d.call(this, this._styles || [], !0, "visible")
				}
			}, i.color.closeRe = new RegExp(r(i.color.close), "g");
			for (const e of Object.keys(i.color.ansi)) c.has(e) || (l[e] = {
				get() {
					const t = this.level;
					return function () {
						const n = {
							open: i.color[u[t]][e].apply(null, arguments),
							close: i.color.close,
							closeRe: i.color.closeRe
						};
						return d.call(this, this._styles ? this._styles.concat(n) : [n], this._empty, e)
					}
				}
			});
			i.bgColor.closeRe = new RegExp(r(i.bgColor.close), "g");
			for (const e of Object.keys(i.bgColor.ansi)) {
				if (c.has(e)) continue;
				l["bg" + e[0].toUpperCase() + e.slice(1)] = {
					get() {
						const t = this.level;
						return function () {
							const n = {
								open: i.bgColor[u[t]][e].apply(null, arguments),
								close: i.bgColor.close,
								closeRe: i.bgColor.closeRe
							};
							return d.call(this, this._styles ? this._styles.concat(n) : [n], this._empty, e)
						}
					}
				}
			}
			const f = Object.defineProperties(() => {}, l);

			function d(e, t, n) {
				const r = function () {
					return function () {
						const e = arguments,
							t = e.length;
						let n = String(arguments[0]);
						if (0 === t) return "";
						if (t > 1)
							for (let r = 1; r < t; r++) n += " " + e[r];
						if (!this.enabled || this.level <= 0 || !n) return this._empty ? "" : n;
						const r = i.dim.open;
						a && this.hasGrey && (i.dim.open = "");
						for (const e of this._styles.slice().reverse()) n = (n = e.open + n.replace(e.closeRe, e.open) + e.close).replace(/\r?\n/g, `${e.close}$&${e.open}`);
						return i.dim.open = r, n
					}.apply(r, arguments)
				};
				r._styles = e, r._empty = t;
				const s = this;
				return Object.defineProperty(r, "level", {
					enumerable: !0,
					get: () => s.level,
					set(e) {
						s.level = e
					}
				}), Object.defineProperty(r, "enabled", {
					enumerable: !0,
					get: () => s.enabled,
					set(e) {
						s.enabled = e
					}
				}), r.hasGrey = this.hasGrey || "gray" === n || "grey" === n, r.__proto__ = f, r
			}
			Object.defineProperties(h.prototype, l), e.exports = h(), e.exports.supportsColor = s, e.exports.default = e.exports
		}).call(this, n(48))
	}, function (e, t, n) {
		"use strict";
		var r = /[|\\{}()[\]^$+*?.]/g;
		e.exports = function (e) {
			if ("string" != typeof e) throw new TypeError("Expected a string");
			return e.replace(r, "\\$&")
		}
	}, function (e, t, n) {
		"use strict";
		(function (e) {
			const t = n(303),
				r = (e, n) => (function () {
					return `[${e.apply(t,arguments)+n}m`
				}),
				i = (e, n) => (function () {
					const r = e.apply(t, arguments);
					return `[${38+n};5;${r}m`
				}),
				s = (e, n) => (function () {
					const r = e.apply(t, arguments);
					return `[${38+n};2;${r[0]};${r[1]};${r[2]}m`
				});
			Object.defineProperty(e, "exports", {
				enumerable: !0,
				get: function () {
					const e = new Map,
						n = {
							modifier: {
								reset: [0, 0],
								bold: [1, 22],
								dim: [2, 22],
								italic: [3, 23],
								underline: [4, 24],
								inverse: [7, 27],
								hidden: [8, 28],
								strikethrough: [9, 29]
							},
							color: {
								black: [30, 39],
								red: [31, 39],
								green: [32, 39],
								yellow: [33, 39],
								blue: [34, 39],
								magenta: [35, 39],
								cyan: [36, 39],
								white: [37, 39],
								gray: [90, 39],
								redBright: [91, 39],
								greenBright: [92, 39],
								yellowBright: [93, 39],
								blueBright: [94, 39],
								magentaBright: [95, 39],
								cyanBright: [96, 39],
								whiteBright: [97, 39]
							},
							bgColor: {
								bgBlack: [40, 49],
								bgRed: [41, 49],
								bgGreen: [42, 49],
								bgYellow: [43, 49],
								bgBlue: [44, 49],
								bgMagenta: [45, 49],
								bgCyan: [46, 49],
								bgWhite: [47, 49],
								bgBlackBright: [100, 49],
								bgRedBright: [101, 49],
								bgGreenBright: [102, 49],
								bgYellowBright: [103, 49],
								bgBlueBright: [104, 49],
								bgMagentaBright: [105, 49],
								bgCyanBright: [106, 49],
								bgWhiteBright: [107, 49]
							}
						};
					n.color.grey = n.color.gray;
					for (const t of Object.keys(n)) {
						const r = n[t];
						for (const t of Object.keys(r)) {
							const i = r[t];
							n[t] = {
								open: `[${i[0]}m`,
								close: `[${i[1]}m`
							}, r[t] = n[t], e.set(i[0], i[1])
						}
						Object.defineProperty(n, t, {
							value: r,
							enumerable: !1
						}), Object.defineProperty(n, "codes", {
							value: e,
							enumerable: !1
						})
					}
					const o = e => e,
						a = (e, t, n) => [e, t, n];
					n.color.close = "[39m", n.bgColor.close = "[49m", n.color.ansi = {
						ansi: r(o, 0)
					}, n.color.ansi256 = {
						ansi256: i(o, 0)
					}, n.color.ansi16m = {
						rgb: s(a, 0)
					}, n.bgColor.ansi = {
						ansi: r(o, 10)
					}, n.bgColor.ansi256 = {
						ansi256: i(o, 10)
					}, n.bgColor.ansi16m = {
						rgb: s(a, 10)
					};
					for (let e of Object.keys(t)) {
						if ("object" != typeof t[e]) continue;
						const o = t[e];
						"ansi16" === e && (e = "ansi"), "ansi16" in o && (n.color.ansi[e] = r(o.ansi16, 0), n.bgColor.ansi[e] = r(o.ansi16, 10)), "ansi256" in o && (n.color.ansi256[e] = i(o.ansi256, 0), n.bgColor.ansi256[e] = i(o.ansi256, 10)), "rgb" in o && (n.color.ansi16m[e] = s(o.rgb, 0), n.bgColor.ansi16m[e] = s(o.rgb, 10))
					}
					return n
				}
			})
		}).call(this, n(26)(e))
	}, function (e, t, n) {
		var r = n(108),
			i = n(305),
			s = {};
		Object.keys(r).forEach(function (e) {
			s[e] = {}, Object.defineProperty(s[e], "channels", {
				value: r[e].channels
			}), Object.defineProperty(s[e], "labels", {
				value: r[e].labels
			});
			var t = i(e);
			Object.keys(t).forEach(function (n) {
				var r = t[n];
				s[e][n] = function (e) {
					var t = function (t) {
						if (void 0 === t || null === t) return t;
						arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
						var n = e(t);
						if ("object" == typeof n)
							for (var r = n.length, i = 0; i < r; i++) n[i] = Math.round(n[i]);
						return n
					};
					return "conversion" in e && (t.conversion = e.conversion), t
				}(r), s[e][n].raw = function (e) {
					var t = function (t) {
						return void 0 === t || null === t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), e(t))
					};
					return "conversion" in e && (t.conversion = e.conversion), t
				}(r)
			})
		}), e.exports = s
	}, function (e, t, n) {
		"use strict";
		e.exports = {
			aliceblue: [240, 248, 255],
			antiquewhite: [250, 235, 215],
			aqua: [0, 255, 255],
			aquamarine: [127, 255, 212],
			azure: [240, 255, 255],
			beige: [245, 245, 220],
			bisque: [255, 228, 196],
			black: [0, 0, 0],
			blanchedalmond: [255, 235, 205],
			blue: [0, 0, 255],
			blueviolet: [138, 43, 226],
			brown: [165, 42, 42],
			burlywood: [222, 184, 135],
			cadetblue: [95, 158, 160],
			chartreuse: [127, 255, 0],
			chocolate: [210, 105, 30],
			coral: [255, 127, 80],
			cornflowerblue: [100, 149, 237],
			cornsilk: [255, 248, 220],
			crimson: [220, 20, 60],
			cyan: [0, 255, 255],
			darkblue: [0, 0, 139],
			darkcyan: [0, 139, 139],
			darkgoldenrod: [184, 134, 11],
			darkgray: [169, 169, 169],
			darkgreen: [0, 100, 0],
			darkgrey: [169, 169, 169],
			darkkhaki: [189, 183, 107],
			darkmagenta: [139, 0, 139],
			darkolivegreen: [85, 107, 47],
			darkorange: [255, 140, 0],
			darkorchid: [153, 50, 204],
			darkred: [139, 0, 0],
			darksalmon: [233, 150, 122],
			darkseagreen: [143, 188, 143],
			darkslateblue: [72, 61, 139],
			darkslategray: [47, 79, 79],
			darkslategrey: [47, 79, 79],
			darkturquoise: [0, 206, 209],
			darkviolet: [148, 0, 211],
			deeppink: [255, 20, 147],
			deepskyblue: [0, 191, 255],
			dimgray: [105, 105, 105],
			dimgrey: [105, 105, 105],
			dodgerblue: [30, 144, 255],
			firebrick: [178, 34, 34],
			floralwhite: [255, 250, 240],
			forestgreen: [34, 139, 34],
			fuchsia: [255, 0, 255],
			gainsboro: [220, 220, 220],
			ghostwhite: [248, 248, 255],
			gold: [255, 215, 0],
			goldenrod: [218, 165, 32],
			gray: [128, 128, 128],
			green: [0, 128, 0],
			greenyellow: [173, 255, 47],
			grey: [128, 128, 128],
			honeydew: [240, 255, 240],
			hotpink: [255, 105, 180],
			indianred: [205, 92, 92],
			indigo: [75, 0, 130],
			ivory: [255, 255, 240],
			khaki: [240, 230, 140],
			lavender: [230, 230, 250],
			lavenderblush: [255, 240, 245],
			lawngreen: [124, 252, 0],
			lemonchiffon: [255, 250, 205],
			lightblue: [173, 216, 230],
			lightcoral: [240, 128, 128],
			lightcyan: [224, 255, 255],
			lightgoldenrodyellow: [250, 250, 210],
			lightgray: [211, 211, 211],
			lightgreen: [144, 238, 144],
			lightgrey: [211, 211, 211],
			lightpink: [255, 182, 193],
			lightsalmon: [255, 160, 122],
			lightseagreen: [32, 178, 170],
			lightskyblue: [135, 206, 250],
			lightslategray: [119, 136, 153],
			lightslategrey: [119, 136, 153],
			lightsteelblue: [176, 196, 222],
			lightyellow: [255, 255, 224],
			lime: [0, 255, 0],
			limegreen: [50, 205, 50],
			linen: [250, 240, 230],
			magenta: [255, 0, 255],
			maroon: [128, 0, 0],
			mediumaquamarine: [102, 205, 170],
			mediumblue: [0, 0, 205],
			mediumorchid: [186, 85, 211],
			mediumpurple: [147, 112, 219],
			mediumseagreen: [60, 179, 113],
			mediumslateblue: [123, 104, 238],
			mediumspringgreen: [0, 250, 154],
			mediumturquoise: [72, 209, 204],
			mediumvioletred: [199, 21, 133],
			midnightblue: [25, 25, 112],
			mintcream: [245, 255, 250],
			mistyrose: [255, 228, 225],
			moccasin: [255, 228, 181],
			navajowhite: [255, 222, 173],
			navy: [0, 0, 128],
			oldlace: [253, 245, 230],
			olive: [128, 128, 0],
			olivedrab: [107, 142, 35],
			orange: [255, 165, 0],
			orangered: [255, 69, 0],
			orchid: [218, 112, 214],
			palegoldenrod: [238, 232, 170],
			palegreen: [152, 251, 152],
			paleturquoise: [175, 238, 238],
			palevioletred: [219, 112, 147],
			papayawhip: [255, 239, 213],
			peachpuff: [255, 218, 185],
			peru: [205, 133, 63],
			pink: [255, 192, 203],
			plum: [221, 160, 221],
			powderblue: [176, 224, 230],
			purple: [128, 0, 128],
			rebeccapurple: [102, 51, 153],
			red: [255, 0, 0],
			rosybrown: [188, 143, 143],
			royalblue: [65, 105, 225],
			saddlebrown: [139, 69, 19],
			salmon: [250, 128, 114],
			sandybrown: [244, 164, 96],
			seagreen: [46, 139, 87],
			seashell: [255, 245, 238],
			sienna: [160, 82, 45],
			silver: [192, 192, 192],
			skyblue: [135, 206, 235],
			slateblue: [106, 90, 205],
			slategray: [112, 128, 144],
			slategrey: [112, 128, 144],
			snow: [255, 250, 250],
			springgreen: [0, 255, 127],
			steelblue: [70, 130, 180],
			tan: [210, 180, 140],
			teal: [0, 128, 128],
			thistle: [216, 191, 216],
			tomato: [255, 99, 71],
			turquoise: [64, 224, 208],
			violet: [238, 130, 238],
			wheat: [245, 222, 179],
			white: [255, 255, 255],
			whitesmoke: [245, 245, 245],
			yellow: [255, 255, 0],
			yellowgreen: [154, 205, 50]
		}
	}, function (e, t, n) {
		var r = n(108);

		function i(e) {
			var t = function () {
					for (var e = {}, t = Object.keys(r), n = t.length, i = 0; i < n; i++) e[t[i]] = {
						distance: -1,
						parent: null
					};
					return e
				}(),
				n = [e];
			for (t[e].distance = 0; n.length;)
				for (var i = n.pop(), s = Object.keys(r[i]), o = s.length, a = 0; a < o; a++) {
					var u = s[a],
						c = t[u]; - 1 === c.distance && (c.distance = t[i].distance + 1, c.parent = i, n.unshift(u))
				}
			return t
		}

		function s(e, t) {
			return function (n) {
				return t(e(n))
			}
		}

		function o(e, t) {
			for (var n = [t[e].parent, e], i = r[t[e].parent][e], o = t[e].parent; t[o].parent;) n.unshift(t[o].parent), i = s(r[t[o].parent][o], i), o = t[o].parent;
			return i.conversion = n, i
		}
		e.exports = function (e) {
			for (var t = i(e), n = {}, r = Object.keys(t), s = r.length, a = 0; a < s; a++) {
				var u = r[a];
				null !== t[u].parent && (n[u] = o(u, t))
			}
			return n
		}
	}, function (e, t, n) {
		"use strict";
		e.exports = {
			stdout: !1,
			stderr: !1
		}
	}, function (e, t, n) {
		"use strict";
		const r = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
			i = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
			s = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
			o = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,
			a = new Map([
				["n", "\n"],
				["r", "\r"],
				["t", "\t"],
				["b", "\b"],
				["f", "\f"],
				["v", "\v"],
				["0", "\0"],
				["\\", "\\"],
				["e", ""],
				["a", ""]
			]);

		function u(e) {
			return "u" === e[0] && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : a.get(e) || e
		}

		function c(e, t) {
			const n = [],
				r = t.trim().split(/\s*,\s*/g);
			let i;
			for (const t of r)
				if (isNaN(t)) {
					if (!(i = t.match(s))) throw new Error(`Invalid Chalk template style argument: ${t} (in style '${e}')`);
					n.push(i[2].replace(o, (e, t, n) => t ? u(t) : n))
				} else n.push(Number(t));
			return n
		}

		function l(e, t) {
			const n = {};
			for (const e of t)
				for (const t of e.styles) n[t[0]] = e.inverse ? null : t.slice(1);
			let r = e;
			for (const e of Object.keys(n))
				if (Array.isArray(n[e])) {
					if (!(e in r)) throw new Error(`Unknown Chalk style: ${e}`);
					r = n[e].length > 0 ? r[e].apply(r, n[e]) : r[e]
				}
			return r
		}
		e.exports = ((e, t) => {
			const n = [],
				s = [];
			let o = [];
			if (t.replace(r, (t, r, a, p, h, f) => {
					if (r) o.push(u(r));
					else if (p) {
						const t = o.join("");
						o = [], s.push(0 === n.length ? t : l(e, n)(t)), n.push({
							inverse: a,
							styles: function (e) {
								i.lastIndex = 0;
								const t = [];
								let n;
								for (; null !== (n = i.exec(e));) {
									const e = n[1];
									if (n[2]) {
										const r = c(e, n[2]);
										t.push([e].concat(r))
									} else t.push([e])
								}
								return t
							}(p)
						})
					} else if (h) {
						if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");
						s.push(l(e, n)(o.join(""))), o = [], n.pop()
					} else o.push(f)
				}), s.push(o.join("")), n.length > 0) {
				const e = `Chalk template literal is missing ${n.length} closing bracket${1===n.length?"":"s"} (\`}\`)`;
				throw new Error(e)
			}
			return s.join("")
		})
	}, function (e, t, n) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.evaluateTruthy = function () {
				const e = this.evaluate();
				if (e.confident) return !!e.value
			}, t.evaluate = function () {
				const e = {
					confident: !0,
					deoptPath: null,
					seen: new Map
				};
				let t = s(this, e);
				e.confident || (t = void 0);
				return {
					confident: e.confident,
					deopt: e.deoptPath,
					value: t
				}
			};
			const n = ["String", "Number", "Math"],
				r = ["random"];

			function i(e, t) {
				t.confident && (t.deoptPath = e, t.confident = !1)
			}

			function s(t, a) {
				const {
					node: u
				} = t, {
					seen: c
				} = a;
				if (c.has(u)) {
					const e = c.get(u);
					return e.resolved ? e.value : void i(t, a)
				} {
					const l = {
						resolved: !1
					};
					c.set(u, l);
					const p = function (t, a) {
						if (!a.confident) return;
						const {
							node: u
						} = t;
						if (t.isSequenceExpression()) {
							const e = t.get("expressions");
							return s(e[e.length - 1], a)
						}
						if (t.isStringLiteral() || t.isNumericLiteral() || t.isBooleanLiteral()) return u.value;
						if (t.isNullLiteral()) return null;
						if (t.isTemplateLiteral()) return o(t, u.quasis, a);
						if (t.isTaggedTemplateExpression() && t.get("tag").isMemberExpression()) {
							const e = t.get("tag.object"),
								{
									node: {
										name: n
									}
								} = e,
								r = t.get("tag.property");
							if (e.isIdentifier() && "String" === n && !t.scope.getBinding(n, !0) && r.isIdentifier && "raw" === r.node.name) return o(t, u.quasi.quasis, a, !0)
						}
						if (t.isConditionalExpression()) {
							const e = s(t.get("test"), a);
							if (!a.confident) return;
							return s(e ? t.get("consequent") : t.get("alternate"), a)
						}
						if (t.isExpressionWrapper()) return s(t.get("expression"), a);
						if (t.isMemberExpression() && !t.parentPath.isCallExpression({
								callee: u
							})) {
							const e = t.get("property"),
								n = t.get("object");
							if (n.isLiteral() && e.isIdentifier()) {
								const t = n.node.value,
									r = typeof t;
								if ("number" === r || "string" === r) return t[e.node.name]
							}
						}
						if (t.isReferencedIdentifier()) {
							const e = t.scope.getBinding(u.name);
							if (e && e.constantViolations.length > 0) return i(e.path, a);
							if (e && t.node.start < e.path.node.end) return i(e.path, a);
							if (e && e.hasValue) return e.value; {
								if ("undefined" === u.name) return e ? i(e.path, a) : void 0;
								if ("Infinity" === u.name) return e ? i(e.path, a) : 1 / 0;
								if ("NaN" === u.name) return e ? i(e.path, a) : NaN;
								const n = t.resolve();
								return n === t ? i(t, a) : s(n, a)
							}
						}
						if (t.isUnaryExpression({
								prefix: !0
							})) {
							if ("void" === u.operator) return;
							const e = t.get("argument");
							if ("typeof" === u.operator && (e.isFunction() || e.isClass())) return "function";
							const n = s(e, a);
							if (!a.confident) return;
							switch (u.operator) {
								case "!":
									return !n;
								case "+":
									return +n;
								case "-":
									return -n;
								case "~":
									return ~n;
								case "typeof":
									return typeof n
							}
						}
						if (t.isArrayExpression()) {
							const e = [],
								n = t.get("elements");
							for (const t of n) {
								const n = t.evaluate();
								if (!n.confident) return i(t, a);
								e.push(n.value)
							}
							return e
						}
						if (t.isObjectExpression()) {
							const e = {},
								n = t.get("properties");
							for (const t of n) {
								if (t.isObjectMethod() || t.isSpreadElement()) return i(t, a);
								const n = t.get("key");
								let r = n;
								if (t.node.computed) {
									if (!(r = r.evaluate()).confident) return i(n, a);
									r = r.value
								} else r = r.isIdentifier() ? r.node.name : r.node.value;
								const s = t.get("value");
								let o = s.evaluate();
								if (!o.confident) return i(s, a);
								o = o.value, e[r] = o
							}
							return e
						}
						if (t.isLogicalExpression()) {
							const e = a.confident,
								n = s(t.get("left"), a),
								r = a.confident;
							a.confident = e;
							const i = s(t.get("right"), a),
								o = a.confident;
							switch (u.operator) {
								case "||":
									if (a.confident = r && (!!n || o), !a.confident) return;
									return n || i;
								case "&&":
									if (a.confident = r && (!n || o), !a.confident) return;
									return n && i
							}
						}
						if (t.isBinaryExpression()) {
							const e = s(t.get("left"), a);
							if (!a.confident) return;
							const n = s(t.get("right"), a);
							if (!a.confident) return;
							switch (u.operator) {
								case "-":
									return e - n;
								case "+":
									return e + n;
								case "/":
									return e / n;
								case "*":
									return e * n;
								case "%":
									return e % n;
								case "**":
									return Math.pow(e, n);
								case "<":
									return e < n;
								case ">":
									return e > n;
								case "<=":
									return e <= n;
								case ">=":
									return e >= n;
								case "==":
									return e == n;
								case "!=":
									return e != n;
								case "===":
									return e === n;
								case "!==":
									return e !== n;
								case "|":
									return e | n;
								case "&":
									return e & n;
								case "^":
									return e ^ n;
								case "<<":
									return e << n;
								case ">>":
									return e >> n;
								case ">>>":
									return e >>> n
							}
						}
						if (t.isCallExpression()) {
							const i = t.get("callee");
							let o, c;
							if (i.isIdentifier() && !t.scope.getBinding(i.node.name, !0) && n.indexOf(i.node.name) >= 0 && (c = e[u.callee.name]), i.isMemberExpression()) {
								const t = i.get("object"),
									s = i.get("property");
								if (t.isIdentifier() && s.isIdentifier() && n.indexOf(t.node.name) >= 0 && r.indexOf(s.node.name) < 0 && (o = e[t.node.name], c = o[s.node.name]), t.isLiteral() && s.isIdentifier()) {
									const e = typeof t.node.value;
									"string" !== e && "number" !== e || (o = t.node.value, c = o[s.node.name])
								}
							}
							if (c) {
								const e = t.get("arguments").map(e => s(e, a));
								if (!a.confident) return;
								return c.apply(o, e)
							}
						}
						i(t, a)
					}(t, a);
					return a.confident && (l.resolved = !0, l.value = p), p
				}
			}

			function o(e, t, n, r = !1) {
				let i = "",
					o = 0;
				const a = e.get("expressions");
				for (const e of t) {
					if (!n.confident) break;
					i += r ? e.value.raw : e.value.cooked;
					const t = a[o++];
					t && (i += String(s(t, n)))
				}
				if (n.confident) return i
			}
		}).call(this, n(35))
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}

		function i() {
			const e = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(310));
			return i = function () {
				return e
			}, e
		}

		function s(e, t = !1, n = !0) {
			const i = e.findParent(e => e.isFunction() && !e.isArrowFunctionExpression() || e.isProgram() || e.isClassProperty({
					static: !1
				})),
				s = i && "constructor" === i.node.kind;
			if (i.isClassProperty()) throw e.buildCodeFrameError("Unable to transform arrow inside class property");
			const {
				thisPaths: u,
				argumentsPaths: c,
				newTargetPaths: l,
				superProps: p,
				superCalls: h
			} = function (e) {
				const t = [],
					n = [],
					r = [],
					i = [],
					s = [];
				return e.traverse({
					ClassProperty(e) {
						e.skip()
					},
					Function(e) {
						e.isArrowFunctionExpression() || e.skip()
					},
					ThisExpression(e) {
						t.push(e)
					},
					JSXIdentifier(e) {
						"this" === e.node.name && (e.parentPath.isJSXMemberExpression({
							object: e.node
						}) || e.parentPath.isJSXOpeningElement({
							name: e.node
						})) && t.push(e)
					},
					CallExpression(e) {
						e.get("callee").isSuper() && s.push(e)
					},
					MemberExpression(e) {
						e.get("object").isSuper() && i.push(e)
					},
					ReferencedIdentifier(e) {
						"arguments" === e.node.name && n.push(e)
					},
					MetaProperty(e) {
						e.get("meta").isIdentifier({
							name: "new"
						}) && e.get("property").isIdentifier({
							name: "target"
						}) && r.push(e)
					}
				}), {
					thisPaths: t,
					argumentsPaths: n,
					newTargetPaths: r,
					superProps: i,
					superCalls: s
				}
			}(e);
			if (s && h.length > 0) {
				if (!n) throw h[0].buildCodeFrameError("Unable to handle nested super() usage in arrow");
				const e = [];
				i.traverse({
					Function(e) {
						e.isArrowFunctionExpression() || e.skip()
					},
					ClassProperty(e) {
						e.skip()
					},
					CallExpression(t) {
						t.get("callee").isSuper() && e.push(t)
					}
				});
				const t = function (e) {
					return a(e, "supercall", () => {
						const t = e.scope.generateUidIdentifier("args");
						return r().arrowFunctionExpression([r().restElement(t)], r().callExpression(r().super(), [r().spreadElement(r().identifier(t.name))]))
					})
				}(i);
				e.forEach(e => {
					const n = r().identifier(t);
					n.loc = e.node.callee.loc, e.get("callee").replaceWith(n)
				})
			}
			let f;
			if ((u.length > 0 || t) && (f = function (e, t) {
					return a(e, "this", n => {
						if (!t || !o(e)) return r().thisExpression();
						const i = new WeakSet;
						e.traverse({
							Function(e) {
								e.isArrowFunctionExpression() || e.skip()
							},
							ClassProperty(e) {
								e.skip()
							},
							CallExpression(e) {
								e.get("callee").isSuper() && (i.has(e.node) || (i.add(e.node), e.replaceWithMultiple([e.node, r().assignmentExpression("=", r().identifier(n), r().identifier("this"))])))
							}
						})
					})
				}(i, s), (!t || s && o(i)) && (u.forEach(e => {
					const t = e.isJSX() ? r().jsxIdentifier(f) : r().identifier(f);
					t.loc = e.node.loc, e.replaceWith(t)
				}), t && (f = null))), c.length > 0) {
				const e = a(i, "arguments", () => r().identifier("arguments"));
				c.forEach(t => {
					const n = r().identifier(e);
					n.loc = t.node.loc, t.replaceWith(n)
				})
			}
			if (l.length > 0) {
				const e = a(i, "newtarget", () => r().metaProperty(r().identifier("new"), r().identifier("target")));
				l.forEach(t => {
					const n = r().identifier(e);
					n.loc = t.node.loc, t.replaceWith(n)
				})
			}
			if (p.length > 0) {
				if (!n) throw p[0].buildCodeFrameError("Unable to handle nested super.prop usage");
				p.reduce((e, t) => e.concat(function (e) {
					if (e.parentPath.isAssignmentExpression() && "=" !== e.parentPath.node.operator) {
						const t = e.parentPath,
							n = t.node.operator.slice(0, -1),
							i = t.node.right;
						if (t.node.operator = "=", e.node.computed) {
							const s = e.scope.generateDeclaredUidIdentifier("tmp");
							t.get("left").replaceWith(r().memberExpression(e.node.object, r().assignmentExpression("=", s, e.node.property), !0)), t.get("right").replaceWith(r().binaryExpression(n, r().memberExpression(e.node.object, r().identifier(s.name), !0), i))
						} else t.get("left").replaceWith(r().memberExpression(e.node.object, e.node.property)), t.get("right").replaceWith(r().binaryExpression(n, r().memberExpression(e.node.object, r().identifier(e.node.property.name)), i));
						return [t.get("left"), t.get("right").get("left")]
					}
					if (e.parentPath.isUpdateExpression()) {
						const t = e.parentPath,
							n = e.scope.generateDeclaredUidIdentifier("tmp"),
							i = e.node.computed ? e.scope.generateDeclaredUidIdentifier("prop") : null,
							s = [r().assignmentExpression("=", n, r().memberExpression(e.node.object, i ? r().assignmentExpression("=", i, e.node.property) : e.node.property, e.node.computed)), r().assignmentExpression("=", r().memberExpression(e.node.object, i ? r().identifier(i.name) : e.node.property, e.node.computed), r().binaryExpression("+", r().identifier(n.name), r().numericLiteral(1)))];
						e.parentPath.node.prefix || s.push(r().identifier(n.name)), t.replaceWith(r().sequenceExpression(s));
						const o = t.get("expressions.0.right"),
							a = t.get("expressions.1.left");
						return [o, a]
					}
					return [e]
				}(t)), []).forEach(e => {
					const t = e.node.computed ? "" : e.get("property").node.name;
					if (e.parentPath.isCallExpression({
							callee: e.node
						})) {
						const n = function (e, t) {
							return a(e, `superprop_call:${t||""}`, () => {
								const n = e.scope.generateUidIdentifier("args"),
									i = [r().restElement(n)];
								let s;
								if (t) s = r().callExpression(r().memberExpression(r().super(), r().identifier(t)), [r().spreadElement(r().identifier(n.name))]);
								else {
									const t = e.scope.generateUidIdentifier("prop");
									i.unshift(t), s = r().callExpression(r().memberExpression(r().super(), r().identifier(t.name), !0), [r().spreadElement(r().identifier(n.name))])
								}
								return r().arrowFunctionExpression(i, s)
							})
						}(i, t);
						if (e.node.computed) {
							const t = e.get("property").node;
							e.replaceWith(r().identifier(n)), e.parentPath.node.arguments.unshift(t)
						} else e.replaceWith(r().identifier(n))
					} else {
						const n = e.parentPath.isAssignmentExpression({
								left: e.node
							}),
							s = function (e, t, n) {
								return a(e, `superprop_${t?"set":"get"}:${n||""}`, () => {
									const i = [];
									let s;
									if (n) s = r().memberExpression(r().super(), r().identifier(n));
									else {
										const t = e.scope.generateUidIdentifier("prop");
										i.unshift(t), s = r().memberExpression(r().super(), r().identifier(t.name), !0)
									}
									if (t) {
										const t = e.scope.generateUidIdentifier("value");
										i.push(t), s = r().assignmentExpression("=", s, r().identifier(t.name))
									}
									return r().arrowFunctionExpression(i, s)
								})
							}(i, n, t),
							o = [];
						if (e.node.computed && o.push(e.get("property").node), n) {
							const t = e.parentPath.node.right;
							o.push(t), e.parentPath.replaceWith(r().callExpression(r().identifier(s), o))
						} else e.replaceWith(r().callExpression(r().identifier(s), o))
					}
				})
			}
			return f
		}

		function o(e) {
			return e.isClassMethod() && !!e.parentPath.parentPath.node.superClass
		}

		function a(e, t, n) {
			const r = "binding:" + t;
			let i = e.getData(r);
			if (!i) {
				const s = e.scope.generateUidIdentifier(t);
				i = s.name, e.setData(r, i), e.scope.push({
					id: s,
					init: n(i)
				})
			}
			return i
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.toComputedKey = function () {
			const e = this.node;
			let t;
			if (this.isMemberExpression()) t = e.property;
			else {
				if (!this.isProperty() && !this.isMethod()) throw new ReferenceError("todo");
				t = e.key
			}
			e.computed || r().isIdentifier(t) && (t = r().stringLiteral(t.name));
			return t
		}, t.ensureBlock = function () {
			const e = this.get("body"),
				t = e.node;
			if (Array.isArray(e)) throw new Error("Can't convert array path to a block statement");
			if (!t) throw new Error("Can't convert node without a body");
			if (e.isBlockStatement()) return t;
			const n = [];
			let i, s, o = "body";
			e.isStatement() ? (s = "body", i = 0, n.push(e.node)) : (o += ".body.0", this.isFunction() ? (i = "argument", n.push(r().returnStatement(e.node))) : (i = "expression", n.push(r().expressionStatement(e.node))));
			this.node.body = r().blockStatement(n);
			const a = this.get(o);
			return e.setup(a, s ? a.node[s] : a.node, s, i), this.node
		}, t.arrowFunctionToShadowed = function () {
			if (!this.isArrowFunctionExpression()) return;
			this.arrowFunctionToExpression()
		}, t.unwrapFunctionEnvironment = function () {
			if (!this.isArrowFunctionExpression() && !this.isFunctionExpression() && !this.isFunctionDeclaration()) throw this.buildCodeFrameError("Can only unwrap the environment of a function.");
			s(this)
		}, t.arrowFunctionToExpression = function ({
			allowInsertArrow: e = !0,
			specCompliant: t = !1
		} = {}) {
			if (!this.isArrowFunctionExpression()) throw this.buildCodeFrameError("Cannot convert non-arrow function to a function expression.");
			const n = s(this, t, e);
			if (this.ensureBlock(), this.node.type = "FunctionExpression", t) {
				const e = n ? null : this.parentPath.scope.generateUidIdentifier("arrowCheckId");
				e && this.parentPath.scope.push({
					id: e,
					init: r().objectExpression([])
				}), this.get("body").unshiftContainer("body", r().expressionStatement(r().callExpression(this.hub.addHelper("newArrowCheck"), [r().thisExpression(), e ? r().identifier(e.name) : r().identifier(n)]))), this.replaceWith(r().callExpression(r().memberExpression((0, i().default)(this, !0) || this.node, r().identifier("bind")), [e ? r().identifier(e.name) : r().thisExpression()]))
			}
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = o(n(311));
			return r = function () {
				return e
			}, e
		}

		function i() {
			const e = o(n(312));
			return i = function () {
				return e
			}, e
		}

		function s() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return s = function () {
				return e
			}, e
		}

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function ({
			node: e,
			parent: t,
			scope: n,
			id: i
		}, o = !1) {
			if (e.id) return;
			if (!s().isObjectProperty(t) && !s().isObjectMethod(t, {
					kind: "method"
				}) || t.computed && !s().isLiteral(t.key)) {
				if (s().isVariableDeclarator(t)) {
					if (i = t.id, s().isIdentifier(i) && !o) {
						const t = n.parent.getBinding(i.name);
						if (t && t.constant && n.getBinding(i.name) === t) return e.id = s().cloneNode(i), void(e.id[s().NOT_LOCAL_BINDING] = !0)
					}
				} else if (s().isAssignmentExpression(t)) i = t.left;
				else if (!i) return
			} else i = t.key;
			let l;
			i && s().isLiteral(i) ? l = function (e) {
				if (s().isNullLiteral(e)) return "null";
				if (s().isRegExpLiteral(e)) return `_${e.pattern}_${e.flags}`;
				if (s().isTemplateLiteral(e)) return e.quasis.map(e => e.value.raw).join("");
				if (void 0 !== e.value) return e.value + "";
				return ""
			}(i) : i && s().isIdentifier(i) && (l = i.name);
			if (void 0 === l) return;
			return l = s().toBindingIdentifierName(l), (i = s().identifier(l))[s().NOT_LOCAL_BINDING] = !0,
				function (e, t, n, i) {
					if (e.selfReference) {
						if (!i.hasBinding(n.name) || i.hasGlobal(n.name)) {
							if (!s().isFunction(t)) return;
							let e = a;
							t.generator && (e = u);
							const o = e({
									FUNCTION: t,
									FUNCTION_ID: n,
									FUNCTION_KEY: i.generateUidIdentifier(n.name)
								}).expression,
								c = o.callee.body.body[0].params;
							for (let e = 0, n = (0, r().default)(t); e < n; e++) c.push(i.generateUidIdentifier("x"));
							return o
						}
						i.rename(n.name)
					}
					t.id = n, i.getProgramParent().references[n.name] = !0
				}(function (e, t, n) {
					const r = {
							selfAssignment: !1,
							selfReference: !1,
							outerDeclar: n.getBindingIdentifier(t),
							references: [],
							name: t
						},
						i = n.getOwnBinding(t);
					return i ? "param" === i.kind && (r.selfReference = !0) : (r.outerDeclar || n.hasGlobal(t)) && n.traverse(e, c, r), r
				}(e, l, n), e, i, n) || e
		};
		const a = (0, i().default)("\n  (function (FUNCTION_KEY) {\n    function FUNCTION_ID() {\n      return FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    }\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),
			u = (0, i().default)("\n  (function (FUNCTION_KEY) {\n    function* FUNCTION_ID() {\n      return yield* FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    };\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),
			c = {
				"ReferencedIdentifier|BindingIdentifier" (e, t) {
					if (e.node.name !== t.name) return;
					e.scope.getBindingIdentifier(t.name) === t.outerDeclar && (t.selfReference = !0, e.stop())
				}
			}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e) {
			const t = e.params;
			for (let e = 0; e < t.length; e++) {
				const n = t[e];
				if (r().isAssignmentPattern(n) || r().isRestElement(n)) return e
			}
			return t.length
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = t.program = t.expression = t.statements = t.statement = t.smart = void 0;
		var r = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(313)),
			i = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(314));
		const s = (0, i.default)(r.smart);
		t.smart = s;
		const o = (0, i.default)(r.statement);
		t.statement = o;
		const a = (0, i.default)(r.statements);
		t.statements = a;
		const u = (0, i.default)(r.expression);
		t.expression = u;
		const c = (0, i.default)(r.program);
		t.program = c;
		var l = Object.assign(s.bind(void 0), {
			smart: s,
			statement: o,
			statements: a,
			expression: u,
			program: c,
			ast: s.ast
		});
		t.default = l
	}, function (e, t, n) {
		"use strict";

		function r(e) {
			return {
				code: e => `/* @babel/template */;\n${e}`,
				validate: () => {},
				unwrap: t => e(t.program.body.slice(1))
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.program = t.expression = t.statement = t.statements = t.smart = void 0;
		const i = r(e => e.length > 1 ? e : e[0]);
		t.smart = i;
		const s = r(e => e);
		t.statements = s;
		const o = r(e => {
			if (0 === e.length) throw new Error("Found nothing to return.");
			if (e.length > 1) throw new Error("Found multiple statements but wanted one");
			return e[0]
		});
		t.statement = o;
		const a = {
			code: e => `(\n${e}\n)`,
			validate: ({
				program: e
			}) => {
				if (e.body.length > 1) throw new Error("Found multiple statements but wanted one");
				if (0 === e.body[0].expression.start) throw new Error("Parse result included parens.")
			},
			unwrap: e => e.program.body[0].expression
		};
		t.expression = a;
		t.program = {
			code: e => e,
			validate: () => {},
			unwrap: e => e.program
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function e(t, n) {
			const o = new WeakMap;
			const c = new WeakMap;
			const l = n || (0, r.validate)(null);
			return Object.assign((n, ...a) => {
				if ("string" == typeof n) {
					if (a.length > 1) throw new Error("Unexpected extra params.");
					return u((0, i.default)(t, n, (0, r.merge)(l, (0, r.validate)(a[0]))))
				}
				if (Array.isArray(n)) {
					let e = o.get(n);
					return e || (e = (0, s.default)(t, n, l), o.set(n, e)), u(e(a))
				}
				if ("object" == typeof n && n) {
					if (a.length > 0) throw new Error("Unexpected extra params.");
					return e(t, (0, r.merge)(l, (0, r.validate)(n)))
				}
				throw new Error(`Unexpected template param ${typeof n}`)
			}, {
				ast: (e, ...n) => {
					if ("string" == typeof e) {
						if (n.length > 1) throw new Error("Unexpected extra params.");
						return (0, i.default)(t, e, (0, r.merge)((0, r.merge)(l, (0, r.validate)(n[0])), a))()
					}
					if (Array.isArray(e)) {
						let i = c.get(e);
						return i || (i = (0, s.default)(t, e, (0, r.merge)(l, a)), c.set(e, i)), i(n)()
					}
					throw new Error(`Unexpected template param ${typeof e}`)
				}
			})
		};
		var r = n(51),
			i = o(n(315)),
			s = o(n(316));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		const a = (0, r.validate)({
			placeholderPattern: !1
		});

		function u(e) {
			let t = "";
			try {
				throw new Error
			} catch (e) {
				e.stack && (t = e.stack.split("\n").slice(3).join("\n"))
			}
			return n => {
				try {
					return e(n)
				} catch (e) {
					throw e.stack += `\n    =============\n${t}`, e
				}
			}
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t, n) {
			let o;
			return t = e.code(t), a => {
				const u = (0, r.normalizeReplacements)(a);
				return o || (o = (0, i.default)(e, t, n)), e.unwrap((0, s.default)(o, u))
			}
		};
		var r = n(51),
			i = o(n(109)),
			s = o(n(110));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function (e, t, n) {
			const {
				metadata: o,
				names: u
			} = function (e, t, n) {
				let r, s, o, u = "";
				do {
					const c = a(t, u += "$");
					r = c.names, s = new Set(r), o = (0, i.default)(e, e.code(c.code), {
						parser: n.parser,
						placeholderWhitelist: new Set(c.names.concat(n.placeholderWhitelist ? Array.from(n.placeholderWhitelist) : [])),
						placeholderPattern: n.placeholderPattern,
						preserveComments: n.preserveComments,
						syntacticPlaceholders: n.syntacticPlaceholders
					})
				} while (o.placeholders.some(e => e.isDuplicate && s.has(e.name)));
				return {
					metadata: o,
					names: r
				}
			}(e, t, n);
			return t => {
				const n = t.reduce((e, t, n) => (e[u[n]] = t, e), {});
				return t => {
					const i = (0, r.normalizeReplacements)(t);
					return i && Object.keys(i).forEach(e => {
						if (Object.prototype.hasOwnProperty.call(n, e)) throw new Error("Unexpected replacement overlap.")
					}), e.unwrap((0, s.default)(o, i ? Object.assign(i, n) : n))
				}
			}
		};
		var r = n(51),
			i = o(n(109)),
			s = o(n(110));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function a(e, t) {
			const n = [];
			let r = e[0];
			for (let i = 1; i < e.length; i++) {
				const s = `${t}${i-1}`;
				n.push(s), r += s + e[i]
			}
			return {
				names: n,
				code: r
			}
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(49));
			return r = function () {
				return e
			}, e
		}

		function i() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return i = function () {
				return e
			}, e
		}

		function s(e) {
			const t = this.node && this.node[e];
			return t && Array.isArray(t) ? !!t.length : !!t
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.matchesPattern = function (e, t) {
			return i().matchesPattern(this.node, e, t)
		}, t.has = s, t.isStatic = function () {
			return this.scope.isStatic(this.node)
		}, t.isnt = function (e) {
			return !this.has(e)
		}, t.equals = function (e, t) {
			return this.node[e] === t
		}, t.isNodeType = function (e) {
			return i().isType(this.type, e)
		}, t.canHaveVariableDeclarationOrExpression = function () {
			return ("init" === this.key || "left" === this.key) && this.parentPath.isFor()
		}, t.canSwapBetweenExpressionAndStatement = function (e) {
			if ("body" !== this.key || !this.parentPath.isArrowFunctionExpression()) return !1;
			if (this.isExpression()) return i().isBlockStatement(e);
			if (this.isBlockStatement()) return i().isExpression(e);
			return !1
		}, t.isCompletionRecord = function (e) {
			let t = this,
				n = !0;
			do {
				const r = t.container;
				if (t.isFunction() && !n) return !!e;
				if (n = !1, Array.isArray(r) && t.key !== r.length - 1) return !1
			} while ((t = t.parentPath) && !t.isProgram());
			return !0
		}, t.isStatementOrBlock = function () {
			return !this.parentPath.isLabeledStatement() && !i().isBlockStatement(this.container) && (0, r().default)(i().STATEMENT_OR_BLOCK_KEYS, this.key)
		}, t.referencesImport = function (e, t) {
			if (!this.isReferencedIdentifier()) return !1;
			const n = this.scope.getBinding(this.node.name);
			if (!n || "module" !== n.kind) return !1;
			const r = n.path,
				i = r.parentPath;
			if (!i.isImportDeclaration()) return !1;
			if (i.node.source.value !== e) return !1;
			if (!t) return !0;
			if (r.isImportDefaultSpecifier() && "default" === t) return !0;
			if (r.isImportNamespaceSpecifier() && "*" === t) return !0;
			if (r.isImportSpecifier() && r.node.imported.name === t) return !0;
			return !1
		}, t.getSource = function () {
			const e = this.node;
			if (e.end) {
				const t = this.hub.getCode();
				if (t) return t.slice(e.start, e.end)
			}
			return ""
		}, t.willIMaybeExecuteBefore = function (e) {
			return "after" !== this._guessExecutionStatusRelativeTo(e)
		}, t._guessExecutionStatusRelativeTo = function (e) {
			const t = e.scope.getFunctionParent() || e.scope.getProgramParent(),
				n = this.scope.getFunctionParent() || e.scope.getProgramParent();
			if (t.node !== n.node) {
				const n = this._guessExecutionStatusRelativeToDifferentFunctions(t);
				if (n) return n;
				e = t.path
			}
			const r = e.getAncestry();
			if (r.indexOf(this) >= 0) return "after";
			const s = this.getAncestry();
			let o, a, u;
			for (u = 0; u < s.length; u++) {
				const e = s[u];
				if ((a = r.indexOf(e)) >= 0) {
					o = e;
					break
				}
			}
			if (!o) return "before";
			const c = r[a - 1],
				l = s[u - 1];
			if (!c || !l) return "before";
			if (c.listKey && c.container === l.container) return c.key > l.key ? "before" : "after";
			const p = i().VISITOR_KEYS[o.type],
				h = p.indexOf(c.key),
				f = p.indexOf(l.key);
			return h > f ? "before" : "after"
		}, t._guessExecutionStatusRelativeToDifferentFunctions = function (e) {
			const t = e.path;
			if (!t.isFunctionDeclaration()) return;
			const n = t.scope.getBinding(t.node.id.name);
			if (!n.references) return "before";
			const r = n.referencePaths;
			for (const e of r)
				if ("callee" !== e.key || !e.parentPath.isCallExpression()) return;
			let i;
			for (const e of r) {
				const n = !!e.find(e => e.node === t.node);
				if (n) continue;
				const r = this._guessExecutionStatusRelativeTo(e);
				if (i) {
					if (i !== r) return
				} else i = r
			}
			return i
		}, t.resolve = function (e, t) {
			return this._resolve(e, t) || this
		}, t._resolve = function (e, t) {
			if (t && t.indexOf(this) >= 0) return;
			if ((t = t || []).push(this), this.isVariableDeclarator()) {
				if (this.get("id").isIdentifier()) return this.get("init").resolve(e, t)
			} else if (this.isReferencedIdentifier()) {
				const n = this.scope.getBinding(this.node.name);
				if (!n) return;
				if (!n.constant) return;
				if ("module" === n.kind) return;
				if (n.path !== this) {
					const r = n.path.resolve(e, t);
					if (this.find(e => e.node === r.node)) return;
					return r
				}
			} else {
				if (this.isTypeCastExpression()) return this.get("expression").resolve(e, t);
				if (e && this.isMemberExpression()) {
					const n = this.toComputedKey();
					if (!i().isLiteral(n)) return;
					const r = n.value,
						s = this.get("object").resolve(e, t);
					if (s.isObjectExpression()) {
						const n = s.get("properties");
						for (const i of n) {
							if (!i.isProperty()) continue;
							const n = i.get("key");
							let s = i.isnt("computed") && n.isIdentifier({
								name: r
							});
							if (s = s || n.isLiteral({
									value: r
								})) return i.get("value").resolve(e, t)
						}
					} else if (s.isArrayExpression() && !isNaN(+r)) {
						const n = s.get("elements"),
							i = n[r];
						if (i) return i.resolve(e, t)
					}
				}
			}
		}, t.isConstantExpression = function () {
			if (this.isIdentifier()) {
				const e = this.scope.getBinding(this.node.name);
				return !!e && e.constant
			}
			if (this.isLiteral()) return !this.isRegExpLiteral() && (!this.isTemplateLiteral() || this.get("expressions").every(e => e.isConstantExpression()));
			if (this.isUnaryExpression()) return "void" === this.get("operator").node && this.get("argument").isConstantExpression();
			if (this.isBinaryExpression()) return this.get("left").isConstantExpression() && this.get("right").isConstantExpression();
			return !1
		}, t.isInStrictMode = function () {
			return !!(this.isProgram() ? this : this.parentPath).find(e => {
				if (e.isProgram({
						sourceType: "module"
					})) return !0;
				if (e.isClass()) return !0;
				if (!e.isProgram() && !e.isFunction()) return !1;
				if (e.isArrowFunctionExpression() && !e.get("body").isBlockStatement()) return !1;
				let {
					node: t
				} = e;
				e.isFunction() && (t = t.body);
				for (const e of t.directives)
					if ("use strict" === e.value.value) return !0
			})
		}, t.is = void 0;
		const o = s;
		t.is = o
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.call = function (e) {
			const t = this.opts;
			if (this.debug(e), this.node && this._call(t[e])) return !0;
			if (this.node) return this._call(t[this.node.type] && t[this.node.type][e]);
			return !1
		}, t._call = function (e) {
			if (!e) return !1;
			for (const t of e) {
				if (!t) continue;
				const e = this.node;
				if (!e) return !0;
				const n = t.call(this.state, this, this.state);
				if (n && "object" == typeof n && "function" == typeof n.then) throw new Error("You appear to be using a plugin with an async traversal visitor, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");
				if (n) throw new Error(`Unexpected return value from visitor method ${t}`);
				if (this.node !== e) return !0;
				if (this.shouldStop || this.shouldSkip || this.removed) return !0
			}
			return !1
		}, t.isBlacklisted = function () {
			const e = this.opts.blacklist;
			return e && e.indexOf(this.node.type) > -1
		}, t.visit = function () {
			if (!this.node) return !1;
			if (this.isBlacklisted()) return !1;
			if (this.opts.shouldSkip && this.opts.shouldSkip(this)) return !1;
			if (this.call("enter") || this.shouldSkip) return this.debug("Skip..."), this.shouldStop;
			return this.debug("Recursing into..."), r.default.node(this.node, this.opts, this.scope, this.state, this, this.skipKeys), this.call("exit"), this.shouldStop
		}, t.skip = function () {
			this.shouldSkip = !0
		}, t.skipKey = function (e) {
			this.skipKeys[e] = !0
		}, t.stop = function () {
			this.shouldStop = !0, this.shouldSkip = !0
		}, t.setScope = function () {
			if (this.opts && this.opts.noScope) return;
			let e, t = this.parentPath;
			for (; t && !e;) {
				if (t.opts && t.opts.noScope) return;
				e = t.scope, t = t.parentPath
			}
			this.scope = this.getScope(e), this.scope && this.scope.init()
		}, t.setContext = function (e) {
			this.shouldSkip = !1, this.shouldStop = !1, this.removed = !1, this.skipKeys = {}, e && (this.context = e, this.state = e.state, this.opts = e.opts);
			return this.setScope(), this
		}, t.resync = function () {
			if (this.removed) return;
			this._resyncParent(), this._resyncList(), this._resyncKey()
		}, t._resyncParent = function () {
			this.parentPath && (this.parent = this.parentPath.node)
		}, t._resyncKey = function () {
			if (!this.container) return;
			if (this.node === this.container[this.key]) return;
			if (Array.isArray(this.container)) {
				for (let e = 0; e < this.container.length; e++)
					if (this.container[e] === this.node) return this.setKey(e)
			} else
				for (const e of Object.keys(this.container))
					if (this.container[e] === this.node) return this.setKey(e);
			this.key = null
		}, t._resyncList = function () {
			if (!this.parent || !this.inList) return;
			const e = this.parent[this.listKey];
			if (this.container === e) return;
			this.container = e || null
		}, t._resyncRemoved = function () {
			null != this.key && this.container && this.container[this.key] === this.node || this._markRemoved()
		}, t.popContext = function () {
			this.contexts.pop(), this.contexts.length > 0 ? this.setContext(this.contexts[this.contexts.length - 1]) : this.setContext(void 0)
		}, t.pushContext = function (e) {
			this.contexts.push(e), this.setContext(e)
		}, t.setup = function (e, t, n, r) {
			this.inList = !!n, this.listKey = n, this.parentKey = n || r, this.container = t, this.parentPath = e || this.parentPath, this.setKey(r)
		}, t.setKey = function (e) {
			this.key = e, this.node = this.container[this.key], this.type = this.node && this.node.type
		}, t.requeue = function (e = this) {
			if (e.removed) return;
			const t = this.contexts;
			for (const n of t) n.maybeQueue(e)
		}, t._getQueueContexts = function () {
			let e = this,
				t = this.contexts;
			for (; !t.length && (e = e.parentPath);) t = e.contexts;
			return t
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(13))
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.remove = function () {
			if (this._assertUnremoved(), this.resync(), this._removeFromScope(), this._callRemovalHooks()) return void this._markRemoved();
			this.shareCommentsWithSiblings(), this._remove(), this._markRemoved()
		}, t._removeFromScope = function () {
			const e = this.getBindingIdentifiers();
			Object.keys(e).forEach(e => this.scope.removeBinding(e))
		}, t._callRemovalHooks = function () {
			for (const e of r.hooks)
				if (e(this, this.parentPath)) return !0
		}, t._remove = function () {
			Array.isArray(this.container) ? (this.container.splice(this.key, 1), this.updateSiblingKeys(this.key, -1)) : this._replaceWith(null)
		}, t._markRemoved = function () {
			this.shouldSkip = !0, this.removed = !0, this.node = null
		}, t._assertUnremoved = function () {
			if (this.removed) throw this.buildCodeFrameError("NodePath has been removed so is read-only.")
		};
		var r = n(320)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.hooks = void 0;
		t.hooks = [function (e, t) {
			if ("test" === e.key && (t.isWhile() || t.isSwitchCase()) || "declaration" === e.key && t.isExportDeclaration() || "body" === e.key && t.isLabeledStatement() || "declarations" === e.listKey && t.isVariableDeclaration() && 1 === t.node.declarations.length || "expression" === e.key && t.isExpressionStatement()) return t.remove(), !0
		}, function (e, t) {
			if (t.isSequenceExpression() && 1 === t.node.expressions.length) return t.replaceWith(t.node.expressions[0]), !0
		}, function (e, t) {
			if (t.isBinary()) return "left" === e.key ? t.replaceWith(t.node.right) : t.replaceWith(t.node.left), !0
		}, function (e, t) {
			if (t.isIfStatement() && ("consequent" === e.key || "alternate" === e.key) || "body" === e.key && (t.isLoop() || t.isArrowFunctionExpression())) return e.replaceWith({
				type: "BlockStatement",
				body: []
			}), !0
		}]
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.insertBefore = function (e) {
			this._assertUnremoved(), e = this._verifyNodeList(e);
			const {
				parentPath: t
			} = this;
			if (t.isExpressionStatement() || t.isLabeledStatement() || t.isExportNamedDeclaration() || t.isExportDefaultDeclaration() && this.isDeclaration()) return t.insertBefore(e);
			if (this.isNodeType("Expression") && !this.isJSXElement() || t.isForStatement() && "init" === this.key) return this.node && e.push(this.node), this.replaceExpressionWithStatements(e);
			if (Array.isArray(this.container)) return this._containerInsertBefore(e);
			if (this.isStatementOrBlock()) {
				const t = this.node && (!this.isExpressionStatement() || null != this.node.expression);
				return this.replaceWith(o().blockStatement(t ? [this.node] : [])), this.unshiftContainer("body", e)
			}
			throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?")
		}, t._containerInsert = function (e, t) {
			this.updateSiblingKeys(e, t.length);
			const n = [];
			this.container.splice(e, 0, ...t);
			for (let r = 0; r < t.length; r++) {
				const t = e + r,
					i = this.getSibling(t);
				n.push(i), this.context && this.context.queue && i.pushContext(this.context)
			}
			const r = this._getQueueContexts();
			for (const e of n) {
				e.setScope(), e.debug("Inserted.");
				for (const t of r) t.maybeQueue(e, !0)
			}
			return n
		}, t._containerInsertBefore = function (e) {
			return this._containerInsert(this.key, e)
		}, t._containerInsertAfter = function (e) {
			return this._containerInsert(this.key + 1, e)
		}, t.insertAfter = function (e) {
			this._assertUnremoved(), e = this._verifyNodeList(e);
			const {
				parentPath: t
			} = this;
			if (t.isExpressionStatement() || t.isLabeledStatement() || t.isExportNamedDeclaration() || t.isExportDefaultDeclaration() && this.isDeclaration()) return t.insertAfter(e.map(e => o().isExpression(e) ? o().expressionStatement(e) : e));
			if (this.isNodeType("Expression") && !this.isJSXElement() || t.isForStatement() && "init" === this.key) {
				if (this.node) {
					let {
						scope: n
					} = this;
					t.isMethod({
						computed: !0,
						key: this.node
					}) && (n = n.parent);
					const r = n.generateDeclaredUidIdentifier();
					e.unshift(o().expressionStatement(o().assignmentExpression("=", o().cloneNode(r), this.node))), e.push(o().expressionStatement(o().cloneNode(r)))
				}
				return this.replaceExpressionWithStatements(e)
			}
			if (Array.isArray(this.container)) return this._containerInsertAfter(e);
			if (this.isStatementOrBlock()) {
				const t = this.node && (!this.isExpressionStatement() || null != this.node.expression);
				return this.replaceWith(o().blockStatement(t ? [this.node] : [])), this.pushContainer("body", e)
			}
			throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?")
		}, t.updateSiblingKeys = function (e, t) {
			if (!this.parent) return;
			const n = r.path.get(this.parent);
			for (let r = 0; r < n.length; r++) {
				const i = n[r];
				i.key >= e && (i.key += t)
			}
		}, t._verifyNodeList = function (e) {
			if (!e) return [];
			e.constructor !== Array && (e = [e]);
			for (let t = 0; t < e.length; t++) {
				const n = e[t];
				let r;
				if (n ? "object" != typeof n ? r = "contains a non-object node" : n.type ? n instanceof s.default && (r = "has a NodePath when it expected a raw object") : r = "without a type" : r = "has falsy node", r) {
					const e = Array.isArray(n) ? "array" : typeof n;
					throw new Error(`Node list ${r} with the index of ${t} and type of ${e}`)
				}
			}
			return e
		}, t.unshiftContainer = function (e, t) {
			return this._assertUnremoved(), t = this._verifyNodeList(t), s.default.get({
				parentPath: this,
				parent: this.node,
				container: this.node[e],
				listKey: e,
				key: 0
			})._containerInsertBefore(t)
		}, t.pushContainer = function (e, t) {
			this._assertUnremoved(), t = this._verifyNodeList(t);
			const n = this.node[e];
			return s.default.get({
				parentPath: this,
				parent: this.node,
				container: n,
				listKey: e,
				key: n.length
			}).replaceWithMultiple(t)
		}, t.hoist = function (e = this.scope) {
			return new i.default(this, e).run()
		};
		var r = n(31),
			i = a(n(322)),
			s = a(n(12));

		function o() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return o = function () {
				return e
			}, e
		}

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		const i = {
			ReferencedIdentifier(e, t) {
				if (e.isJSXIdentifier() && r().react.isCompatTag(e.node.name) && !e.parentPath.isJSXMemberExpression()) return;
				if ("this" === e.node.name) {
					let n = e.scope;
					do {
						if (n.path.isFunction() && !n.path.isArrowFunctionExpression()) break
					} while (n = n.parent);
					n && t.breakOnScopePaths.push(n.path)
				}
				const n = e.scope.getBinding(e.node.name);
				n && n === t.scope.getBinding(e.node.name) && (t.bindings[e.node.name] = n)
			}
		};
		t.default = class {
			constructor(e, t) {
				this.breakOnScopePaths = [], this.bindings = {}, this.scopes = [], this.scope = t, this.path = e, this.attachAfter = !1
			}
			isCompatibleScope(e) {
				for (const t of Object.keys(this.bindings)) {
					const n = this.bindings[t];
					if (!e.bindingIdentifierEquals(t, n.identifier)) return !1
				}
				return !0
			}
			getCompatibleScopes() {
				let e = this.path.scope;
				do {
					if (!this.isCompatibleScope(e)) break;
					if (this.scopes.push(e), this.breakOnScopePaths.indexOf(e.path) >= 0) break
				} while (e = e.parent)
			}
			getAttachmentPath() {
				let e = this._getAttachmentPath();
				if (!e) return;
				let t = e.scope;
				if (t.path === e && (t = e.scope.parent), t.path.isProgram() || t.path.isFunction())
					for (const n of Object.keys(this.bindings)) {
						if (!t.hasOwnBinding(n)) continue;
						const r = this.bindings[n];
						if ("param" !== r.kind && "params" !== r.path.parentKey && this.getAttachmentParentForPath(r.path).key >= e.key) {
							this.attachAfter = !0, e = r.path;
							for (const t of r.constantViolations) this.getAttachmentParentForPath(t).key > e.key && (e = t)
						}
					}
				return e
			}
			_getAttachmentPath() {
				const e = this.scopes.pop();
				if (e)
					if (e.path.isFunction()) {
						if (!this.hasOwnParamBindings(e)) return this.getNextScopeAttachmentParent(); {
							if (this.scope === e) return;
							const t = e.path.get("body").get("body");
							for (let e = 0; e < t.length; e++)
								if (!t[e].node._blockHoist) return t[e]
						}
					} else if (e.path.isProgram()) return this.getNextScopeAttachmentParent()
			}
			getNextScopeAttachmentParent() {
				const e = this.scopes.pop();
				if (e) return this.getAttachmentParentForPath(e.path)
			}
			getAttachmentParentForPath(e) {
				do {
					if (!e.parentPath || Array.isArray(e.container) && e.isStatement()) return e
				} while (e = e.parentPath)
			}
			hasOwnParamBindings(e) {
				for (const t of Object.keys(this.bindings)) {
					if (!e.hasOwnBinding(t)) continue;
					const n = this.bindings[t];
					if ("param" === n.kind && n.constant) return !0
				}
				return !1
			}
			run() {
				this.path.traverse(i, this), this.getCompatibleScopes();
				const e = this.getAttachmentPath();
				if (!e) return;
				if (e.getFunctionParent() === this.path.getFunctionParent()) return;
				let t = e.scope.generateUidIdentifier("ref");
				const n = r().variableDeclarator(t, this.path.node),
					s = this.attachAfter ? "insertAfter" : "insertBefore",
					[o] = e[s]([e.isVariableDeclarator() ? n : r().variableDeclaration("var", [n])]),
					a = this.path.parentPath;
				return a.isJSXElement() && this.path.container === a.node.children && (t = r().JSXExpressionContainer(t)), this.path.replaceWith(r().cloneNode(t)), e.isVariableDeclarator() ? o.get("init") : o.get("declarations.0.init")
			}
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.getOpposite = function () {
			if ("left" === this.key) return this.getSibling("right");
			if ("right" === this.key) return this.getSibling("left")
		}, t.getCompletionRecords = function () {
			let e = [];
			if (this.isIfStatement()) e = s(this.get("consequent"), e), e = s(this.get("alternate"), e);
			else if (this.isDoExpression() || this.isFor() || this.isWhile()) e = s(this.get("body"), e);
			else if (this.isProgram() || this.isBlockStatement()) e = s(this.get("body").pop(), e);
			else {
				if (this.isFunction()) return this.get("body").getCompletionRecords();
				this.isTryStatement() ? (e = s(this.get("block"), e), e = s(this.get("handler"), e), e = s(this.get("finalizer"), e)) : this.isCatchClause() ? e = s(this.get("body"), e) : e.push(this)
			}
			return e
		}, t.getSibling = function (e) {
			return r.default.get({
				parentPath: this.parentPath,
				parent: this.parent,
				container: this.container,
				listKey: this.listKey,
				key: e
			})
		}, t.getPrevSibling = function () {
			return this.getSibling(this.key - 1)
		}, t.getNextSibling = function () {
			return this.getSibling(this.key + 1)
		}, t.getAllNextSiblings = function () {
			let e = this.key,
				t = this.getSibling(++e);
			const n = [];
			for (; t.node;) n.push(t), t = this.getSibling(++e);
			return n
		}, t.getAllPrevSiblings = function () {
			let e = this.key,
				t = this.getSibling(--e);
			const n = [];
			for (; t.node;) n.push(t), t = this.getSibling(--e);
			return n
		}, t.get = function (e, t) {
			!0 === t && (t = this.context);
			const n = e.split(".");
			return 1 === n.length ? this._getKey(e, t) : this._getPattern(n, t)
		}, t._getKey = function (e, t) {
			const n = this.node,
				i = n[e];
			return Array.isArray(i) ? i.map((s, o) => r.default.get({
				listKey: e,
				parentPath: this,
				parent: n,
				container: i,
				key: o
			}).setContext(t)) : r.default.get({
				parentPath: this,
				parent: n,
				container: n,
				key: e
			}).setContext(t)
		}, t._getPattern = function (e, t) {
			let n = this;
			for (const r of e) n = "." === r ? n.parentPath : Array.isArray(n) ? n[r] : n.get(r, t);
			return n
		}, t.getBindingIdentifiers = function (e) {
			return i().getBindingIdentifiers(this.node, e)
		}, t.getOuterBindingIdentifiers = function (e) {
			return i().getOuterBindingIdentifiers(this.node, e)
		}, t.getBindingIdentifierPaths = function (e = !1, t = !1) {
			let n = [].concat(this);
			const r = Object.create(null);
			for (; n.length;) {
				const s = n.shift();
				if (!s) continue;
				if (!s.node) continue;
				const o = i().getBindingIdentifiers.keys[s.node.type];
				if (s.isIdentifier())
					if (e) {
						const e = r[s.node.name] = r[s.node.name] || [];
						e.push(s)
					} else r[s.node.name] = s;
				else if (s.isExportDeclaration()) {
					const e = s.get("declaration");
					e.isDeclaration() && n.push(e)
				} else {
					if (t) {
						if (s.isFunctionDeclaration()) {
							n.push(s.get("id"));
							continue
						}
						if (s.isFunctionExpression()) continue
					}
					if (o)
						for (let e = 0; e < o.length; e++) {
							const t = o[e],
								r = s.get(t);
							(Array.isArray(r) || r.node) && (n = n.concat(r))
						}
				}
			}
			return r
		}, t.getOuterBindingIdentifierPaths = function (e) {
			return this.getBindingIdentifierPaths(e, !0)
		};
		var r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(12));

		function i() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return i = function () {
				return e
			}, e
		}

		function s(e, t) {
			return e ? t.concat(e.getCompletionRecords()) : t
		}
	}, function (e, t, n) {
		"use strict";

		function r() {
			const e = function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e)
						if (Object.prototype.hasOwnProperty.call(e, n)) {
							var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
							r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
						}
				return t.default = e, t
			}(n(0));
			return r = function () {
				return e
			}, e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.shareCommentsWithSiblings = function () {
			if ("string" == typeof this.key) return;
			const e = this.node;
			if (!e) return;
			const t = e.trailingComments,
				n = e.leadingComments;
			if (!t && !n) return;
			const r = this.getSibling(this.key - 1),
				i = this.getSibling(this.key + 1),
				s = Boolean(r.node),
				o = Boolean(i.node);
			s && o || (s ? r.addComments("trailing", t) : o && i.addComments("leading", n))
		}, t.addComment = function (e, t, n) {
			r().addComment(this.node, e, t, n)
		}, t.addComments = function (e, t) {
			r().addComments(this.node, e, t)
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.explode = a, t.verify = u, t.merge = function (e, t = [], n) {
			const r = {};
			for (let i = 0; i < e.length; i++) {
				const s = e[i],
					o = t[i];
				a(s);
				for (const e of Object.keys(s)) {
					let t = s[e];
					(o || n) && (t = l(t, o, n));
					const i = r[e] = r[e] || {};
					d(i, t)
				}
			}
			return r
		};
		var r = o(n(53));

		function i() {
			const e = o(n(0));
			return i = function () {
				return e
			}, e
		}

		function s() {
			const e = function (e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n(56));
			return s = function () {
				return e
			}, e
		}

		function o(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e)
					if (Object.prototype.hasOwnProperty.call(e, n)) {
						var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
						r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
					}
			return t.default = e, t
		}

		function a(e) {
			if (e._exploded) return e;
			e._exploded = !0;
			for (const t of Object.keys(e)) {
				if (f(t)) continue;
				const n = t.split("|");
				if (1 === n.length) continue;
				const r = e[t];
				delete e[t];
				for (const t of n) e[t] = r
			}
			u(e), delete e.__esModule,
				function (e) {
					for (const t of Object.keys(e)) {
						if (f(t)) continue;
						const n = e[t];
						"function" == typeof n && (e[t] = {
							enter: n
						})
					}
				}(e), p(e);
			for (const t of Object.keys(e)) {
				if (f(t)) continue;
				const n = r[t];
				if (!n) continue;
				const i = e[t];
				for (const e of Object.keys(i)) i[e] = h(n, i[e]);
				if (delete e[t], n.types)
					for (const t of n.types) e[t] ? d(e[t], i) : e[t] = i;
				else d(e, i)
			}
			for (const t of Object.keys(e)) {
				if (f(t)) continue;
				const n = e[t];
				let r = i().FLIPPED_ALIAS_KEYS[t];
				const o = i().DEPRECATED_KEYS[t];
				if (o && (console.trace(`Visitor defined for ${t} but it has been renamed to ${o}`), r = [o]), r) {
					delete e[t];
					for (const t of r) {
						const r = e[t];
						r ? d(r, n) : e[t] = (0, s().default)(n)
					}
				}
			}
			for (const t of Object.keys(e)) f(t) || p(e[t]);
			return e
		}

		function u(e) {
			if (!e._verified) {
				if ("function" == typeof e) throw new Error("You passed `traverse()` a function when it expected a visitor object, are you sure you didn't mean `{ enter: Function }`?");
				for (const t of Object.keys(e)) {
					if ("enter" !== t && "exit" !== t || c(t, e[t]), f(t)) continue;
					if (i().TYPES.indexOf(t) < 0) throw new Error(`You gave us a visitor for the node type ${t} but it's not a valid type`);
					const n = e[t];
					if ("object" == typeof n)
						for (const e of Object.keys(n)) {
							if ("enter" !== e && "exit" !== e) throw new Error("You passed `traverse()` a visitor object with the property " + `${t} that has the invalid property ${e}`);
							c(`${t}.${e}`, n[e])
						}
				}
				e._verified = !0
			}
		}

		function c(e, t) {
			const n = [].concat(t);
			for (const t of n)
				if ("function" != typeof t) throw new TypeError(`Non-function found defined in ${e} with type ${typeof t}`)
		}

		function l(e, t, n) {
			const r = {};
			for (const i of Object.keys(e)) {
				let s = e[i];
				Array.isArray(s) && (s = s.map(function (e) {
					let r = e;
					return t && (r = function (n) {
						return e.call(t, n, t)
					}), n && (r = n(t.key, i, r)), r
				}), r[i] = s)
			}
			return r
		}

		function p(e) {
			e.enter && !Array.isArray(e.enter) && (e.enter = [e.enter]), e.exit && !Array.isArray(e.exit) && (e.exit = [e.exit])
		}

		function h(e, t) {
			const n = function (n) {
				if (e.checkPath(n)) return t.apply(this, arguments)
			};
			return n.toString = (() => t.toString()), n
		}

		function f(e) {
			return "_" === e[0] || ("enter" === e || "exit" === e || "shouldSkip" === e || ("blacklist" === e || "noScope" === e || "skipKeys" === e))
		}

		function d(e, t) {
			for (const n of Object.keys(t)) e[n] = [].concat(e[n] || [], t[n])
		}
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		t.default = class {
			getCode() {}
			getScope() {}
			addHelper() {
				throw new Error("Helpers are not supported by the default hub.")
			}
			buildError(e, t, n = TypeError) {
				return new n(t)
			}
		}
	}, function (e, t, n) {
		"use strict";
		var r = n(328)();
		e.exports = function (e) {
			return "string" == typeof e ? e.replace(r, "") : e
		}
	}, function (e, t, n) {
		"use strict";
		e.exports = function () {
			return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g
		}
	}, function (e, t, n) {
		"use strict";
		e.exports = (e => !Number.isNaN(e) && (e >= 4352 && (e <= 4447 || 9001 === e || 9002 === e || 11904 <= e && e <= 12871 && 12351 !== e || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141)))
	}, function (e, t, n) {
		"use strict";
		n.r(t);
		var r, i = n(13),
			s = n.n(i),
			o = {
				FUNCTION: "Function",
				FUNCTION_EXPRESSION: "FunctionExpression",
				FUNCTION_DECLARATION: "FunctionDeclaration",
				VARIABLE_DECLARATOR: "VariableDeclarator",
				ASSIGNMENT_EXPRESSION: "AssignmentExpression",
				MEMBER_EXPRESSION: "MemberExpression",
				VARIABLE_DECLARATION: "VariableDeclaration",
				UPDATE_EXPRESSION: "UpdateExpression",
				CALL_EXPRESSION: "CallExpression",
				NEW_EXPRESSION: "NewExpression",
				LOOP: "Loop",
				FOR_IN_STATEMENT: "ForInStatement",
				FOR_STATEMENT: "ForStatement",
				WHILE_STATEMENT: "WhileStatement",
				DO_WHILE_STATEMENT: "DoWhileStatement",
				CONTINUE: "ContinueStatement",
				CONDITIONAL: "Conditional",
				SWITCH_CASE: "SwitchCase",
				SWITCH_STATEMENT: "SwitchStatement",
				PROGRAM: "Program",
				RETURN: "ReturnStatement",
				BREAK: "BreakStatement",
				TRY_STATEMENT: "TryStatement",
				CATCH_CLAUSE: "CatchClause",
				WITH_STATEMENT: "WithStatement",
				THROW_STATEMENT: "ThrowStatement",
				DEBUGGER_STATEMENT: "DebuggerStatement",
				IDENTIFIER: "Identifier",
				ARRAY_EXPRESSION: "ArrayExpression",
				OBJECT_EXPRESSION: "ObjectExpression",
				OBJECT_PROPERTY: "ObjectProperty",
				OBJECT_METHOD: "ObjectMethod",
				BINARY_EXPRESSION: "BinaryExpression",
				EXPRESSION_STATEMENT: "ExpressionStatement",
				UNARY_EXPRESSION: "UnaryExpression",
				CONDITIONAL_EXPRESSION: "ConditionalExpression",
				STRING_LITERAL: "StringLiteral",
				NUMERIC_LITERAL: "NumericLiteral",
				THIS_EXPRESSION: "ThisExpression",
				LOGICAL_EXPRESSION: "LogicalExpression",
				ARROW_FUNCTION_EXPRESSION: "ArrowFunctionExpression",
				IMPORT_DECLARATION: "ImportDeclaration",
				IMPORT_DEFAULT_SPECIFIER: "ImportDefaultSpecifier",
				IMPORT_SPECIFIER: "ImportSpecifier",
				EXPORT_NAMED_DECLARATION: "ExportNamedDeclaration",
				EXPORT_DEFAULT_DECLARATION: "ExportDefaultDeclaration",
				CLASS_DECLARATION: "ClassDeclaration",
				CLASS_METHOD: "ClassMethod",
				FOR_OF_STATEMENT: "ForOfStatement",
				SPREAD_ELEMENT: "SpreadElement",
				SPREAD_PROPERTY: "SpreadProperty",
				REST_PROPERTY: "RestProperty",
				OBJECT_PATTERN: "ObjectPattern",
				ARRAY_PATTERN: "ArrayPattern",
				ASSIGNMENT_PATTERN: "AssignmentPattern"
			},
			a = {
				BODY: "body",
				PROGRAM: "program",
				CONSEQUENT: "consequent",
				ALTERNATE: "alternate",
				TEST: "test"
			},
			u = "RIGHT",
			c = "LEFT",
			l = "DOWN",
			p = "constructor",
			h = {
				DESTRUCTED: "DESTRUCTED",
				CUSTOM: "CUSTOM"
			},
			f = n(1),
			d = n.n(f),
			y = function (e) {
				return d()(e.node).code
			},
			m = function (e) {
				var t = e.parent;
				if (!t || t.type !== o.VARIABLE_DECLARATOR && t.type !== o.ASSIGNMENT_EXPRESSION && t.type !== o.OBJECT_PROPERTY) return "";
				if (t.left) return d()(t.left).code + " = ";
				var n = t.id;
				return n ? n.name + " = " : ""
			},
			g = function (e) {
				return "(".concat(e.map(function (e) {
					return e.name ? e.name : d()(e).code
				}).join(", "), ")")
			},
			E = function (e) {
				return e.map(function (e) {
					return T({
						node: e
					})
				}).join(", ")
			},
			T = function (e) {
				var t = e.node,
					n = e.parent && e.parent.kind || "";
				if (t.init && (v(t.init) || t.init.type === o.CONDITIONAL_EXPRESSION)) return "".concat(n, " ").concat(t.id.name, " = ");
				var r = "";
				return r = t.id.type === o.OBJECT_PATTERN ? "{...}" : t.id.type === o.ARRAY_PATTERN ? "[...]" : t.id.name, t.init && [o.CALL_EXPRESSION, o.NEW_EXPRESSION].includes(t.init.type) ? "".concat(n, " ").concat(r, " = ") + S({
					node: t.init
				}) : t.init && t.init.type === o.OBJECT_EXPRESSION ? "".concat(n, " ").concat(r, " = ").concat(x()) : t.id && t.id.type === o.OBJECT_PATTERN ? "".concat(n, " {...} = ").concat(t.init.name) : t.id && t.id.type === o.ARRAY_PATTERN ? "".concat(n, " [...] = ").concat(t.init.name) : n + " " + d()(t).code
			},
			A = function (e) {
				return e.name ? e.name : d()(e).code
			},
			S = function (e) {
				var t = e.node,
					n = "";
				t.arguments && t.arguments.length && (n = t.arguments.map(b).join(", "));
				var r = t.callee;
				return r.type === o.MEMBER_EXPRESSION && r.object.type === o.CALL_EXPRESSION ? {
					name: ".".concat(r.property.name, "(").concat(n, ")"),
					chain: !0
				} : n ? "".concat(d()(t.callee).code, "(").concat(n, ")") : d()(t).code
			},
			b = function (e) {
				return v(e) ? "*()" : e.type === o.OBJECT_EXPRESSION ? x() : e.name ? e.name : e.value ? e.type === o.STRING_LITERAL ? "'".concat(e.value, "'") : e.value : d()(e).code
			},
			x = function (e) {
				return e ? {
					name: "{*}",
					pathParentType: e.parent.type
				} : "{*}"
			},
			P = function (e) {
				return [o.FUNCTION_EXPRESSION, o.FUNCTION, o.ARROW_FUNCTION_EXPRESSION, o.FUNCTION_DECLARATION].includes(e)
			},
			v = function (e) {
				var t = [o.ARROW_FUNCTION_EXPRESSION, o.FUNCTION_EXPRESSION];
				return e && -1 !== t.indexOf(e.type)
			},
			D = function (e) {
				var t = e.declaration,
					n = e.specifiers;
				return t ? " " + C(t) : n ? "" : d()(n).code
			},
			C = function (e) {
				return -1 !== [o.FUNCTION_DECLARATION, o.ARROW_FUNCTION_EXPRESSION].indexOf(e.type) ? e.id ? e.id.name : "function" : e.type === o.VARIABLE_DECLARATION ? e.declarations[0].id.name : e.type === o.IDENTIFIER ? e.name : e.type === o.ASSIGNMENT_EXPRESSION ? e.left.name : void 0
			};

		function O(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var w = function (e) {
				var t = e.getStatementParent(),
					n = e.parent || {};
				return ![a.CONSEQUENT, a.ALTERNATE].includes(e.key) && (["params"].includes(e.listKey) || t.isReturnStatement() && "body" !== e.key || (t.isLoop() || t.isConditional() || n.type === o.CONDITIONAL_EXPRESSION) && ["test", "left", "right"].includes(e.parentKey) || [o.RETURN, o.CALL_EXPRESSION, o.BINARY_EXPRESSION, o.UPDATE_EXPRESSION, o.ASSIGNMENT_EXPRESSION, o.LOGICAL_EXPRESSION, o.VARIABLE_DECLARATOR, o.MEMBER_EXPRESSION, o.NEW_EXPRESSION, o.FUNCTION_DECLARATION, o.FUNCTION_EXPRESSION, o.ARROW_FUNCTION_EXPRESSION, o.FUNCTION, o.OBJECT_PROPERTY, o.ASSIGNMENT_PATTERN, o.REST_PROPERTY, o.SPREAD_ELEMENT, o.ARRAY_EXPRESSION, o.UNARY_EXPRESSION, o.IMPORT_DEFAULT_SPECIFIER, o.IMPORT_SPECIFIER, o.IMPORT_DECLARATION, o.EXPORT_DEFAULT_DECLARATION, o.EXPORT_NAMED_DECLARATION, o.CLASS_DECLARATION, o.CLASS_METHOD, o.SWITCH_STATEMENT, o.SWITCH_CASE].includes(n.type) && (!n.body || n.body.type !== e.node.type))
			},
			F = (O(r = {}, o.FUNCTION, {
				type: o.FUNCTION,
				getName: function (e) {
					var t = e.node,
						n = g(t.params);
					return {
						name: t.id ? m(e) + "function " + t.id.name + n : t.type === o.ARROW_FUNCTION_EXPRESSION ? m(e) + n + " =>" : t.type === o.CLASS_METHOD || t.type === o.OBJECT_METHOD ? t.kind === p ? "constructor" + n : t.key.name + n : m(e) + "function" + n,
						pathParentType: e.parent.type
					}
				},
				body: !0
			}), O(r, o.RETURN, {
				type: o.RETURN,
				getName: function (e) {
					var t = e.node;
					return t.argument && ([o.CONDITIONAL_EXPRESSION, o.OBJECT_EXPRESSION].includes(t.argument.type) || P(t.argument.type)) ? "return" : e.node.argument ? "return ".concat(d()(e.node.argument).code) : "return"
				},
				body: !0
			}), O(r, o.VARIABLE_DECLARATOR, {
				type: o.VARIABLE_DECLARATOR,
				body: !0,
				getName: T,
				ignore: function (e) {
					var t = e.getStatementParent();
					return !e.node.init || v(e.node.init) || t.isLoop()
				}
			}), O(r, o.ASSIGNMENT_EXPRESSION, {
				type: o.ASSIGNMENT_EXPRESSION,
				body: !0,
				getName: function (e) {
					var t = e.node;
					return v(t.right) || t.right.type === o.CONDITIONAL_EXPRESSION ? "".concat(A(t.left), " ").concat(t.operator, " ") : t.right.type === o.OBJECT_EXPRESSION ? "".concat(A(t.left), " ").concat(t.operator, " ").concat(x()) : [o.CALL_EXPRESSION, o.NEW_EXPRESSION].includes(t.right.type) ? "".concat(A(t.left), " ").concat(t.operator, " ").concat(S({
						node: t.right
					})) : d()(t).code
				},
				ignore: function (e) {
					var t = e.getStatementParent();
					return t.isVariableDeclaration() || e.parent.type === o.LOGICAL_EXPRESSION || t.isConditional() && e.key === a.TEST || v(e.node.right)
				}
			}), O(r, o.CALL_EXPRESSION, {
				type: o.CALL_EXPRESSION,
				body: !1,
				reversed: !0,
				getName: S,
				ignore: function (e) {
					var t = e.getStatementParent(),
						n = e.parent || {};
					return n.type !== o.ARROW_FUNCTION_EXPRESSION && (t.isVariableDeclaration() || [o.RETURN, o.CALL_EXPRESSION, o.NEW_EXPRESSION, o.UNARY_EXPRESSION, o.BINARY_EXPRESSION].includes(n.type) || t.isConditional() && n.test && n.test.type === o.CALL_EXPRESSION || e.parent.type === o.ASSIGNMENT_EXPRESSION)
				}
			}), O(r, o.UPDATE_EXPRESSION, {
				type: o.UPDATE_EXPRESSION,
				getName: y,
				ignore: function (e) {
					return e.getStatementParent().isVariableDeclaration()
				}
			}), O(r, o.NEW_EXPRESSION, {
				type: o.NEW_EXPRESSION,
				getName: y,
				ignore: function (e) {
					return e.getStatementParent().isVariableDeclaration() || e.parent.type === o.ASSIGNMENT_EXPRESSION || e.parent.type === o.THROW_STATEMENT
				}
			}), O(r, o.LOOP, {
				type: o.LOOP,
				getName: function (e) {
					var t = e.node;
					if (t.test) return d()(t.test).code;
					if (t.left && t.right) {
						var n = t.type === o.FOR_OF_STATEMENT ? "of" : "in",
							r = t.left.type === o.VARIABLE_DECLARATION ? E(t.left.declarations) : d()(t.left).code;
						return "".concat(r, " ").concat(n, " ").concat(d()(t.right).code)
					}
				},
				body: !0
			}), O(r, o.CONTINUE, {
				type: o.CONTINUE,
				getName: function (e) {
					return e.node.label ? "continue ".concat(d()(e.node.label).code) : "continue"
				},
				body: !0
			}), O(r, o.CONDITIONAL, {
				type: o.CONDITIONAL,
				getName: function (e) {
					return "(".concat(d()(e.node.test).code, ")")
				},
				body: !0
			}), O(r, o.SWITCH_STATEMENT, {
				type: o.SWITCH_STATEMENT,
				getName: function (e) {
					return "switch (".concat(d()(e.node.discriminant).code, ")")
				},
				body: !0
			}), O(r, o.SWITCH_CASE, {
				type: o.SWITCH_CASE,
				getName: function (e) {
					return e.node.test ? "case ".concat(d()(e.node.test).code, ":") : "default:"
				},
				body: !0
			}), O(r, o.BREAK, {
				type: o.BREAK,
				getName: function (e) {
					return e.node.label ? "break ".concat(d()(e.node.label).code, ":") : "break"
				},
				body: !0
			}), O(r, o.TRY_STATEMENT, {
				type: o.TRY_STATEMENT,
				getName: function (e) {
					return "try"
				},
				body: !0
			}), O(r, o.CATCH_CLAUSE, {
				type: o.CATCH_CLAUSE,
				getName: function (e) {
					return e.node.param ? "catch (".concat(d()(e.node.param).code, ")") : "*catchConverter*"
				},
				body: !0
			}), O(r, o.WITH_STATEMENT, {
				type: o.WITH_STATEMENT,
				getName: function (e) {
					return "with (".concat(d()(e.node.object).code, ")")
				},
				body: !0
			}), O(r, o.PROGRAM, {
				type: o.PROGRAM,
				getName: function (e) {
					return "".concat(e.node.type, ": source ").concat(e.node.sourceType)
				},
				body: !0
			}), O(r, o.THROW_STATEMENT, {
				type: o.THROW_STATEMENT,
				getName: function (e) {
					return "throw ".concat(d()(e.node.argument).code)
				},
				body: !0
			}), O(r, o.DEBUGGER_STATEMENT, {
				type: o.DEBUGGER_STATEMENT,
				getName: function (e) {
					return "debugger"
				},
				body: !0
			}), O(r, o.BINARY_EXPRESSION, {
				type: o.BINARY_EXPRESSION,
				getName: y,
				ignore: w
			}), O(r, o.IDENTIFIER, {
				type: o.IDENTIFIER,
				getName: function (e) {
					return e.parent.type === o.SPREAD_PROPERTY ? "..." + y(e) : y(e)
				},
				ignore: w
			}), O(r, o.STRING_LITERAL, {
				type: o.STRING_LITERAL,
				getName: y,
				ignore: w
			}), O(r, o.NUMERIC_LITERAL, {
				type: o.NUMERIC_LITERAL,
				getName: y,
				ignore: w
			}), O(r, o.OBJECT_EXPRESSION, {
				type: o.OBJECT_EXPRESSION,
				getName: x,
				ignore: function (e) {
					var t = e.node;
					return !(!t.properties || t.properties.length) || [o.OBJECT_PROPERTY, o.ASSIGNMENT_EXPRESSION, o.VARIABLE_DECLARATOR].includes(e.parent.type)
				},
				body: !0
			}), O(r, o.OBJECT_PROPERTY, {
				type: o.OBJECT_PROPERTY,
				getName: function (e) {
					var t = e.node;
					return t.value && P(t.value.type) ? t.key.name + ": " : t.value && t.value.type === o.OBJECT_EXPRESSION ? t.key.name + ": " + x() : d()(t).code
				},
				ignore: function (e) {
					var t = e.parentPath;
					return ["params", "left"].includes(t.parentKey)
				},
				body: !0
			}), O(r, o.IMPORT_DECLARATION, {
				type: o.IMPORT_DECLARATION,
				getName: function (e) {
					var t = e.node;
					return "import from" + d()(t.source).code
				},
				body: !0
			}), O(r, o.IMPORT_DEFAULT_SPECIFIER, {
				type: o.IMPORT_DEFAULT_SPECIFIER,
				getName: y
			}), O(r, o.IMPORT_SPECIFIER, {
				type: o.IMPORT_SPECIFIER,
				getName: y
			}), O(r, o.EXPORT_DEFAULT_DECLARATION, {
				type: o.EXPORT_DEFAULT_DECLARATION,
				getName: function (e) {
					var t = e.node;
					return "export default ".concat(D(t))
				},
				body: !0
			}), O(r, o.EXPORT_NAMED_DECLARATION, {
				type: o.EXPORT_NAMED_DECLARATION,
				getName: function (e) {
					var t = e.node;
					return "export".concat(D(t))
				},
				body: !0
			}), O(r, o.CLASS_DECLARATION, {
				type: o.CLASS_DECLARATION,
				getName: function (e) {
					var t = e.node;
					return "class ".concat(d()(t.id).code, " ").concat(t.superClass ? " extends ".concat(d()(t.superClass).code) : "")
				},
				body: !0
			}), O(r, o.OBJECT_PATTERN, {
				type: o.OBJECT_PATTERN,
				getName: function () {
					return "{...}"
				},
				ignore: function (e) {
					return "params" === e.listKey || [o.VARIABLE_DECLARATOR, o.ASSIGNMENT_PATTERN].includes(e.parent.type)
				},
				body: !0
			}), O(r, o.ARRAY_PATTERN, {
				type: o.ARRAY_PATTERN,
				getName: function () {
					return "[...]"
				},
				ignore: function (e) {
					return "params" === e.listKey || [o.VARIABLE_DECLARATOR, o.ASSIGNMENT_PATTERN].includes(e.parent.type)
				},
				body: !0
			}), r),
			_ = Object.keys(F).map(function (e) {
				return F[e]
			}),
			N = n(32),
			I = n(111),
			k = n.n(I);

		function B(e) {
			return function (e) {
				if (Array.isArray(e)) {
					for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
					return n
				}
			}(e) || function (e) {
				if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
			}(e) || function () {
				throw new TypeError("Invalid attempt to spread non-iterable instance")
			}()
		}
		var L = function (e, t) {
				return Object.assign.apply(null, [{
					state: e
				}].concat(B(t.map(function (t) {
					return t(e)
				}))))
			},
			M = function (e, t) {
				return k()(e, t)
			},
			j = function (e) {
				return {
					list: e ? [e] : [],
					getCurrent: function () {
						if (this.list.length) return this.list[this.list.length - 1]
					},
					stepIn: function (e) {
						this.list.push(e)
					},
					stepOut: function () {
						this.list.pop()
					}
				}
			},
			R = function (e) {
				console.error(e)
			},
			U = {
				sourceType: "module",
				plugins: ["objectRestSpread", "jsx", "typescript", "classProperties", "asyncGenerators", "dynamicImport", "exportDefaultFrom", "exportNamespaceFrom"]
			};

		function V(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function X(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? V(n, !0).forEach(function (t) {
					W(e, t, n[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V(n).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				})
			}
			return e
		}

		function W(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var Y = function (e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = [];
				try {
					n = N.parse(e, M(U, t))
				} catch (e) {
					throw R("Error at parseCodeToAST: " + e.message, e.loc, e.stack), e
				}
				return n
			},
			K = function (e, t) {
				return function (n, r) {
					if (!e.ignore || !e.ignore(n)) {
						var i = X({}, $(e, n));
						r && r(i) || G(t, i)
					}
				}
			},
			q = function (e, t) {
				return function (n, r) {
					if (!e.ignore || !e.ignore(n)) {
						var i = J(e, t, n, r);
						t.stepIn(i)
					}
				}
			},
			J = function (e, t, n, r) {
				var i = X({}, $(e, n), {
					body: []
				});
				return r && r(i) || G(t, i), i
			},
			G = function (e, t) {
				var n = e.getCurrent();
				t.parent = n, (n.body || n).push(t)
			},
			H = function (e, t) {
				return function (n) {
					e.ignore && e.ignore(n) || t.stepOut()
				}
			},
			$ = function (e, t) {
				var n = e.getName(t),
					r = X({}, "string" == typeof n ? {
						name: n
					} : n, {
						type: e.type,
						key: function (e) {
							return (e.find(function (e) {
								return e.parentKey === a.PROGRAM || e.isStatementOrBlock()
							}) || {}).key
						}(t),
						isBodyEntry: t.key === a.BODY
					});
				return r.name || (r.name = ""), e.type !== t.node.type && (r.subType = t.node.type), r
			};

		function z(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function Q(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? z(n, !0).forEach(function (t) {
					Z(e, t, n[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(n).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				})
			}
			return e
		}

		function Z(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var ee = function () {
			var e = F[o.FUNCTION];
			return Q({}, e, {
				getName: function (t) {
					var n = e.getName(t);
					return t.parent.type === o.OBJECT_PROPERTY && t.parent.key && (n = Q({}, n, {
						name: t.parent.key.name + ": " + n.name
					})), n
				},
				ignore: function (t) {
					return e.ignore && e.ignore(t) || t.parent.type === o.CALL_EXPRESSION
				}
			})
		};

		function te(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function ne(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? te(n, !0).forEach(function (t) {
					re(e, t, n[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(n).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				})
			}
			return e
		}

		function re(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var ie = function (e) {
			return e && e.type === o.CALL_EXPRESSION
		};

		function se(e) {
			return (se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
				return typeof e
			} : function (e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function oe(e) {
			return function (e) {
				if (Array.isArray(e)) {
					for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
					return n
				}
			}(e) || function (e) {
				if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
			}(e) || function () {
				throw new TypeError("Invalid attempt to spread non-iterable instance")
			}()
		}
		var ae = {
			FUNCTION: {
				defined: [],
				custom: [ee()]
			},
			FUNCTION_DEPENDENCIES: {
				defined: [o.CALL_EXPRESSION],
				custom: [ee(), function () {
					var e = F[o.ASSIGNMENT_EXPRESSION];
					return ne({}, e, {
						getName: function (e) {
							var t = e.node;
							return S({
								node: t.right
							})
						},
						ignore: function (t) {
							return e.ignore(t) || !ie(t.node.right)
						}
					})
				}(), function () {
					var e = F[o.VARIABLE_DECLARATOR];
					return ne({}, e, {
						getName: function (e) {
							var t = e.node;
							return S({
								node: t.init
							})
						},
						ignore: function (t) {
							return e.ignore(t) || !ie(t.node.init)
						}
					})
				}()]
			},
			CLASS: [o.CLASS_DECLARATION],
			IMPORT: [o.IMPORT_DECLARATION, o.IMPORT_SPECIFIER, o.IMPORT_DEFAULT_SPECIFIER],
			EXPORT: [o.EXPORT_NAMED_DECLARATION, o.EXPORT_DEFAULT_DECLARATION]
		};

		function ue(e) {
			return function (e) {
				if (Array.isArray(e)) {
					for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
					return n
				}
			}(e) || function (e) {
				if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
			}(e) || function () {
				throw new TypeError("Invalid attempt to spread non-iterable instance")
			}()
		}
		var ce = function (e, t) {
				for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function (e) {
						return e.body
					}, r = [].concat(e); r.length;) {
					var i = r.shift();
					t(i);
					var s = n(i);
					s && (r = [].concat(ue(r), ue(s)))
				}
			},
			le = function (e, t) {
				return "function" == typeof e ? e(t) : e
			},
			pe = {
				name: function (e, t) {
					e.name = le(t, e)
				},
				prefixName: function (e, t) {
					e.prefixName = le(t, e)
				},
				type: function (e, t) {
					e.type = le(t, e)
				},
				body: function (e, t) {
					e.body = le(t, e)
				},
				parent: function (e, t) {
					e.parent = le(t, e)
				}
			},
			he = function (e, t) {
				var n = function (e, t) {
					var n = [];
					return ce(e, function (e) {
						t(e) && n.push(e)
					}), n
				}(e, t.test);
				if (n.length) {
					var r = Object.keys(t.updates || {});
					r.filter(function (e) {
						return "subTreeUpdate" !== e
					}).forEach(function (e) {
						n.forEach(function (n) {
							pe[e](n, t.updates[e])
						})
					}), r.includes("subTreeUpdate") && t.updates.subTreeUpdate(n, e)
				}
			};

		function fe(e) {
			return function (e) {
				if (Array.isArray(e)) {
					for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
					return n
				}
			}(e) || function (e) {
				if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
			}(e) || function () {
				throw new TypeError("Invalid attempt to spread non-iterable instance")
			}()
		}
		var de = function (e, t) {
				var n = e.name.split(".".concat(t, "("))[0];
				return n.includes("=") ? n.split("=") : [n]
			},
			ye = function (e, t) {
				return e.name.includes(".".concat(t, "("))
			},
			me = {
				forEach: {
					test: function (e) {
						return ye(e, "forEach")
					},
					updates: {
						name: function (e) {
							return "each in  ".concat(de(e, "forEach")[0])
						},
						type: o.LOOP,
						body: function (e) {
							return fe(e.body[0].body)
						}
					}
				},
				filter: {
					test: function (e) {
						return ye(e, "filter")
					},
					updates: {
						name: function (e) {
							return "in ".concat(de(e, "filter")[1], " to ").concat(de(e, "filter")[0])
						},
						prefixName: "filter",
						type: o.LOOP
					}
				},
				map: {
					test: function (e) {
						return ye(e, "map")
					},
					updates: {
						name: function (e) {
							return "from ".concat(de(e, "map")[1], " to ").concat(de(e, "map")[0])
						},
						prefixName: "map",
						type: o.LOOP
					}
				}
			},
			ge = {
				es5ArrayIterators: [me.forEach, me.filter, me.map]
			};

		function Ee(e) {
			return function (e) {
				if (Array.isArray(e)) {
					for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
					return n
				}
			}(e) || function (e) {
				if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
			}(e) || function () {
				throw new TypeError("Invalid attempt to spread non-iterable instance")
			}()
		}

		function Te(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function Ae(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Te(n, !0).forEach(function (t) {
					Se(e, t, n[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Te(n).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				})
			}
			return e
		}

		function Se(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var be = function (e, t) {
				var n = [];
				s()(e, function (e, t) {
					var n = e.definitionsMap,
						r = e.globalIgnore,
						i = j(t),
						s = function (e) {
							return function (t) {
								return e(t, r)
							}
						};
					return n.reduce(function (e, t) {
						return t.body ? e[t.type] = {
							enter: s(q(t, i)),
							exit: s(H(t, i))
						} : e[t.type] = t.reversed ? {
							exit: s(K(t, i))
						} : s(K(t, i)), e
					}, {})
				}(t, n));
				var r = n.length && n[0] || {};
				return r.type === o.PROGRAM ? r : {
					name: "Root",
					type: o.PROGRAM,
					body: n
				}
			},
			xe = function () {
				var e = function () {
					var e = [];
					return {
						addModifier: function (t) {
							[].concat(t).forEach(function (t) {
								return e.push(t)
							})
						},
						create: function (e, t) {
							this.addModifier({
								test: e,
								updates: t
							})
						},
						runModifier: function (e, t) {
							he(e, t)
						},
						applyTo: function (t) {
							var n = this;
							e.forEach(function (e) {
								return n.runModifier(t, e)
							})
						}
					}
				}();
				return {
					setModifier: function (t) {
						e.addModifier(t)
					},
					registerNewModifier: function (t, n) {
						e.create(t, n)
					},
					destructNodeTree: function (e, t) {
						this.setModifier(function (e, t) {
							return {
								test: e,
								updates: {
									name: t,
									body: [],
									type: h.DESTRUCTED
								}
							}
						}(e, t))
					},
					applyToFlowTree: function (t) {
						return e.applyTo(t), t
					}
				}
			},
			Pe = function () {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = e.astParser,
					n = void 0 === t ? {} : t,
					r = e.astVisitor,
					i = void 0 === r ? {} : r,
					s = Ae({}, n),
					a = Ae({
						definitionsMap: Ee(_),
						globalIgnore: null
					}, i),
					u = xe();
				return u.setModifier({
					test: function (e) {
						return e.pathParentType === o.CALL_EXPRESSION
					},
					updates: {
						subTreeUpdate: function (e) {
							e.forEach(function (e) {
								for (var t = e.parent.body, n = t.indexOf(e) + 1; n < t.length; n++) {
									var r = t[n];
									if (r && r.type === o.CALL_EXPRESSION) return e.parent.body = t.filter(function (t) {
										return t !== e
									}), void(r.body = [].concat(fe(r.body || []), [e]))
								}
							})
						}
					}
				}), u.setModifier({
					test: function (e) {
						return e.isBodyEntry && e.parent && e.parent.subType === o.ARROW_FUNCTION_EXPRESSION
					},
					updates: {
						name: function (e) {
							return "return " + e.name
						},
						type: o.RETURN
					}
				}), {
					setAbstractionLevel: function (e) {
						a.definitionsMap = function (e) {
							var t = [o.PROGRAM],
								n = [];
							return [].concat(e).forEach(function (e) {
								return "string" == typeof e ? t.push(e) : Array.isArray(e) ? t = t.concat(oe(e)) : void("object" === se(e) && (t = t.concat(oe(e.defined || [])), n = n.concat(oe(e.custom || []))))
							}), _.filter(function (e) {
								return -1 !== t.indexOf(e.type)
							}).concat(n)
						}(e)
					},
					resetAbstractionLevelToNormal: function () {
						a.definitionsMap = Ee(_)
					},
					setIgnoreFilter: function (e) {
						a.globalIgnore = e
					},
					build: function (e) {
						var t = this.buildAst(e);
						return this.buildFlowTreeFromAst(t)
					},
					buildAst: function (e) {
						return Y(e, s)
					},
					buildFlowTreeFromAst: function (e) {
						var t = [];
						try {
							t = be(e, a), u.applyToFlowTree(t)
						} catch (e) {
							throw R("Error at buildFlowTreeFromAst" + e.message, e.stack), e
						}
						return t
					}
				}
			};

		function ve(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function De(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? ve(n, !0).forEach(function (t) {
					Ce(e, t, n[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ve(n).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				})
			}
			return e
		}

		function Ce(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var Oe = {
				strokeColor: "#3C4E67",
				defaultFillColor: "#fff",
				textColor: "#0D1431",
				arrowFillColor: "#333",
				rectangleFillColor: "#fee196",
				rectangleDotFillColor: "#ede7f6",
				functionFillColor: "#f9c3d8",
				rootCircleFillColor: "#b8fb9d",
				loopFillColor: "#96feea",
				conditionFillColor: "#fea996",
				destructedNodeFillColor: "#ffcc80",
				classFillColor: "#80cbc4",
				debuggerFillColor: "#EF5350",
				exportFillColor: "#81d4fa",
				throwFillColor: "#ef9a9a",
				tryFillColor: "#FFE082",
				objectFillColor: "#9fa8da",
				callFillColor: "#C5E1A5",
				debugModeFillColor: "#666"
			},
			we = function (e) {
				var t = {
					strokeColor: e.strokeColor,
					strokeWidth: 2,
					fillColor: e.defaultFillColor,
					textColor: e.textColor,
					fontFamily: "monospace",
					fontSize: 14,
					lineHeight: 5,
					symbolHeight: 10,
					symbolWidth: 7.8,
					horizontalPadding: 15,
					verticalPadding: 10,
					childOffset: 37,
					margin: 10,
					roundBorder: 5,
					complexTypeExtraSpace: 15,
					debugFontSize: 8,
					debugTextColor: e.debugModeFillColor
				};
				return {
					BaseShape: t,
					ConnectionArrow: {
						arrow: {
							size: {
								x: 8,
								y: 6
							},
							fillColor: e.arrowFillColor
						},
						line: {
							strokeColor: e.strokeColor,
							strokeWidth: 2,
							curveTurnRadius: 4
						},
						lineTurnOffset: 20
					},
					Shape: De({}, t),
					Rectangle: De({}, t, {
						fillColor: e.rectangleFillColor,
						dot: De({}, t, {
							offset: 4,
							radius: 2,
							fillColor: e.rectangleDotFillColor
						}),
						roundBorder: 3
					}),
					VerticalEdgedRectangle: De({}, t, {
						fillColor: e.functionFillColor,
						edgeOffset: 10
					}),
					RootCircle: De({}, t, {
						radius: 15,
						padding: 3,
						fillColor: e.rootCircleFillColor
					}),
					LoopRhombus: De({}, t, {
						fillColor: e.loopFillColor,
						thinPartOffset: 15,
						rhombusSize: 50,
						roundBorder: 3,
						doubleLayerOffsetA: 4,
						doubleLayerOffsetB: 8,
						childOffset: 20,
						positionTopShift: 20
					}),
					ConditionRhombus: De({}, t, {
						fillColor: e.conditionFillColor,
						thinPartOffset: 15,
						roundBorder: 3,
						childOffset: 20,
						alternateBranchOffset: 40,
						markOffset: {
							x: 15,
							y: 5
						},
						margin: 20
					}),
					RootStartPoint: {
						center: {
							x: 25,
							y: 25
						},
						childOffset: {
							x: 25,
							y: 65
						}
					},
					ReturnStatement: De({}, t, {
						roundBorder: 3,
						fillColor: e.rectangleFillColor,
						arrow: De({}, t, {
							handlerLength: 5,
							sizeX: 16,
							sizeY: 22,
							fillColor: e.functionFillColor
						})
					}),
					DestructedNode: De({}, t, {
						fillColor: e.destructedNodeFillColor,
						roundBorder: 2,
						suffix: De({}, t, {
							roundBorder: 2,
							fillColor: e.destructedNodeFillColor,
							width: 8,
							space: 4
						})
					}),
					ClassDeclaration: De({}, t, {
						fillColor: e.classFillColor,
						edgeOffset: 10
					}),
					DebuggerStatement: De({}, t, {
						fillColor: e.debuggerFillColor,
						roundBorder: 2
					}),
					ExportDeclaration: De({}, t, {
						roundBorder: 3,
						fillColor: e.exportFillColor,
						arrow: De({}, t, {
							handlerLength: 5,
							sizeX: 20,
							sizeY: 28,
							fillColor: e.defaultFillColor
						})
					}),
					ImportDeclaration: De({}, t, {
						fillColor: e.defaultFillColor,
						edgeOffset: 5
					}),
					ImportSpecifier: De({}, t, {
						fillColor: e.exportFillColor
					}),
					ThrowStatement: De({}, t, {
						fillColor: e.throwFillColor
					}),
					TryStatement: De({}, t, {
						fillColor: e.tryFillColor
					}),
					CatchClause: De({}, t, {
						fillColor: e.throwFillColor,
						arrow: De({}, t, {
							handlerLength: 2,
							sizeX: 16,
							sizeY: 28,
							fillColor: e.throwFillColor
						})
					}),
					SwitchStatement: De({}, t, {
						fillColor: e.conditionFillColor,
						thinPartOffset: 15,
						roundBorder: 3,
						childOffset: 20,
						alternateBranchOffset: 40,
						markOffset: {
							x: 15,
							y: 5
						},
						margin: 20
					}),
					BreakStatement: De({}, t, {
						fillColor: e.rectangleFillColor,
						arrow: De({}, t, {
							handlerLength: 5,
							sizeX: 16,
							sizeY: 28,
							fillColor: e.conditionFillColor
						})
					}),
					SwitchCase: De({}, t, {
						fillColor: e.conditionFillColor
					}),
					ContinueStatement: De({}, t, {
						fillColor: e.rectangleFillColor,
						arrow: De({}, t, {
							handlerLength: 5,
							sizeX: 16,
							sizeY: 28,
							fillColor: e.loopFillColor
						})
					}),
					ObjectProperty: De({}, t, {
						fillColor: e.rectangleFillColor
					}),
					CallExpression: De({}, t, {
						dot: De({}, t, {
							offset: 6,
							radius: 4,
							fillColor: e.rectangleDotFillColor
						}),
						fillColor: e.callFillColor
					})
				}
			},
			Fe = we(Oe);

		function _e(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function Ne(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var Ie, ke = function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? _e(n, !0).forEach(function (t) {
						Ne(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _e(n).forEach(function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}({}, function (e, t) {
				var n = De({}, e);
				return Object.keys(n).forEach(function (e) {
					n[e] = t
				}), n
			}(Oe, "#A6A6A6"), {
				strokeColor: "#333",
				defaultFillColor: "#A6A6A6",
				textColor: "#333",
				arrowFillColor: "#333"
			}),
			Be = we(ke),
			Le = we({
				strokeColor: "#ccc",
				defaultFillColor: "#fff",
				textColor: "#ccc",
				arrowFillColor: "#ccc",
				rectangleFillColor: "#ede7f6",
				rectangleDotFillColor: "#ede7f6",
				functionFillColor: "#f1f8e9",
				rootCircleFillColor: "#fffde7",
				loopFillColor: "#e3f2fd",
				conditionFillColor: "#f3e5f5",
				destructedNodeFillColor: "#fff8e1",
				classFillColor: "#e0f2f1",
				debuggerFillColor: "#ffebee",
				exportFillColor: "#e1f5fe",
				throwFillColor: "#fce4ec",
				tryFillColor: "#fff8e1",
				objectFillColor: "#f9fbe7",
				callFillColor: "#f9fbe7",
				debugModeFillColor: "#666"
			}),
			Me = we({
				strokeColor: "#555",
				defaultFillColor: "#fff",
				textColor: "#333",
				arrowFillColor: "#444",
				rectangleFillColor: "#bbdefb",
				rectangleDotFillColor: "#ede7f6",
				functionFillColor: "#c8e6c9",
				rootCircleFillColor: "#fff9c4",
				loopFillColor: "#d1c4e9",
				conditionFillColor: "#e1bee7",
				destructedNodeFillColor: "#ffecb3",
				classFillColor: "#b2dfdb",
				debuggerFillColor: "#ffcdd2",
				exportFillColor: "#b3e5fc",
				throwFillColor: "#ffccbc",
				tryFillColor: "#FFE082",
				objectFillColor: "#d1c4e9",
				callFillColor: "#dcedc8",
				debugModeFillColor: "#666"
			});

		function je(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var Re = "DEFAULT",
			Ue = "BLACK_AND_WHITE",
			Ve = "BLURRED",
			Xe = "LIGHT",
			We = (je(Ie = {}, Re, Fe), je(Ie, Ue, Be), je(Ie, Ve, Le), je(Ie, Xe, Me), Ie),
			Ye = function (e) {
				return !We[e] === e === Re ? We.DEFAULT : Je(Fe, We[e])
			},
			Ke = function () {
				return Ye(Re)
			},
			qe = function () {
				return Ye(Ve)
			},
			Je = function (e, t) {
				return M(e, t)
			},
			Ge = function (e, t, n, r, i, s) {
				var o = j(),
					a = t;
				! function e(t, n, r, i) {
					var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
						o = s.getBody || function (e) {
							return e.body
						};
					n(t), o(t).forEach(function (t) {
						r(t), o(t) && e(t, n, r, i, s)
					}), i(t)
				}(e, function (e) {
					o.stepIn(a), n(e, o.getCurrent())
				}, function (e) {
					a = r(e, o.getCurrent())
				}, function (e) {
					o.getCurrent() && i(e, o.getCurrent()), o.stepOut()
				}, s)
			},
			He = function (e) {
				if (!e || !e.length) throw new Error("List is not specified.");
				var t = e[0],
					n = t.min.x,
					r = t.max.x,
					i = t.min.y,
					s = t.max.y;
				return e.forEach(function (e) {
					var t = e.min,
						o = e.max;
					t.x < n && (n = t.x), t.y < i && (i = t.y), o.x > r && (r = o.x), o.y > s && (s = o.y)
				}), {
					min: {
						x: n,
						y: i
					},
					max: {
						x: r,
						y: s
					}
				}
			},
			$e = function (e, t) {
				return [].concat(e).map(function (e) {
					return {
						x: e.x + t.x,
						y: e.y + t.y
					}
				})
			},
			ze = [{
				from: "fillColor",
				to: "fill"
			}, {
				from: "strokeColor",
				to: "stroke"
			}, {
				from: "strokeWidth",
				to: "stroke-width"
			}, {
				from: "fillOpacity",
				to: "fill-opacity"
			}, {
				from: "strokeOpacity",
				to: "stroke-opacity"
			}],
			Qe = function (e) {
				return ze.map(function (t) {
					return e[t.from] ? "".concat(t.to, ":").concat(e[t.from]) : null
				}).filter(function (e) {
					return e
				}).join("; ")
			},
			Ze = function (e, t, n, r, i) {
				return '<polygon points="'.concat(e, ",").concat(t + r / 2, " ").concat(e + n / 2, ",").concat(t, " ").concat(e + n, ",").concat(t + r / 2, " ").concat(e + n / 2, ",").concat(t + r, '"\n            style="').concat(Qe(i), '" />')
			},
			et = function (e, t, n, r, i) {
				return '<rect x="'.concat(e, '" y="').concat(t, '"\n            width="').concat(n, '" height="').concat(r, '"\n            rx="').concat(i.roundBorder, '" ry="').concat(i.roundBorder, '"\n            style="').concat(Qe(i), '" />')
			},
			tt = function (e, t, n, r, i) {
				return '<rect x="'.concat(e, '" y="').concat(t, '"\n            width="').concat(n, '" height="').concat(r, '"\n            style="').concat(Qe(i), '" />')
			},
			nt = function (e, t, n, r, i) {
				return '<line x1="'.concat(e, '" y1="').concat(t, '" x2="').concat(n, '" y2="').concat(r, '"\n                style="').concat(Qe(i), '" />')
			},
			rt = function (e, t, n, r) {
				return '<circle cx="'.concat(e, '" cy="').concat(t, '" r="').concat(n, '"\n        style="').concat(Qe(r), '" />')
			},
			it = function (e, t, n, r) {
				return '<text x="'.concat(e, '" y="').concat(t, '"\n        font-family="').concat(n.fontFamily, '" font-size="').concat(n.fontSize, '" fill="').concat(n.textColor, '">').concat(r, "</text>")
			},
			st = function (e, t) {
				var n = e.map(function (e, t) {
					return t ? "L".concat(e.x, ", ").concat(e.y) : "M".concat(e.x, ", ").concat(e.y)
				}).join(" ");
				return '<path d="'.concat(n, ' Z" \n        ').concat(function (e) {
					return ze.map(function (t) {
						return e[t.from] ? "".concat(t.to, '="').concat(e[t.from], '"') : null
					}).filter(function (e) {
						return e
					}).join(" ")
				}(t), " />")
			},
			ot = function (e, t, n) {
				return e.x === t.x ? "L".concat(e.x, " ").concat(at(e.y, t.y, n)) : e.y === t.y ? "L".concat(at(e.x, t.x, n), " ").concat(e.y, " ") : void 0
			},
			at = function (e, t, n) {
				return e > t ? e - n : e + n
			},
			ut = function (e, t, n) {
				return e.x === t.x ? "".concat(t.x, " ").concat(ct(e.y, t.y, n)) : e.y === t.y ? "".concat(ct(e.x, t.x, n), " ").concat(t.y) : void 0
			},
			ct = function (e, t, n) {
				return e > t ? t + n : t - n
			},
			lt = n(52),
			pt = n.n(lt),
			ht = n(112),
			ft = n.n(ht),
			dt = function e(t) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function (e) {
						return e.body
					},
					r = [];
				return [].concat(t).forEach(function (t) {
					var i = n(t);
					i && i.length ? r = r.concat(t, e(i, n)) : r.push(t)
				}), r
			},
			yt = ["||", "&&", "=", "?", ":", "<==", ">==", "<", ">", "===", "==", ",", ".", "("];

		function mt(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function gt(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? mt(n, !0).forEach(function (t) {
					Et(e, t, n[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mt(n).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				})
			}
			return e
		}

		function Et(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var Tt = function (e, t) {
				function n(n, r, i) {
					return e(At(n, r, i, t))
				}
				return n.getThemeFieldName = function () {
					return t
				}, n
			},
			At = function (e, t, n, r) {
				var i = t.x,
					s = t.y,
					o = function (e, t, n) {
						var r = e.length;
						return r <= t ? [e] : [e.slice(0, t) + "..."]
					}(e.name, 50, function (e) {}(yt)),
					a = o.length,
					u = function (e) {
						return e.reduce(function (e, t) {
							var n = ft()(t);
							return n >= e ? n : e
						}, 0)
					}(o);
				return {
					id: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
						var t = 16 * Math.random() | 0;
						return ("x" === e ? t : 3 & t | 8).toString(16)
					}),
					nodePathId: function (e) {
						for (var t = [e], n = "node-id:|".concat(e.name, "|"); t.length;) {
							var r = t.shift();
							r && (n += r.name ? r.name[0] : "-", r.parent && t.push(r.parent))
						}
						return n.replace(/\s/g, "").toUpperCase()
					}(e),
					type: r,
					body: [],
					theme: n,
					originalTheme: n,
					node: e,
					name: e.name,
					prefixName: e.prefixName,
					nameParts: o,
					totalNamePartsNumber: a,
					maxNamePartLength: u,
					initialPosition: {
						x: i,
						y: s
					}
				}
			},
			St = function (e) {
				return {
					fromPoint: Ft(e),
					toPoint: _t(e),
					backPoint: Nt(e),
					childOffsetPoint: It(e),
					boundaries: kt(e)
				}
			},
			bt = function (e) {
				return gt({}, e, {
					position: wt(e),
					dimensions: Ot(e)
				})
			},
			xt = function (e) {
				return {
					getBody: function () {
						return e.body
					},
					getBoundaries: function () {
						return e.boundaries
					},
					getBackPoint: function () {
						return e.backPoint
					},
					getAssignedConnectionArrow: function () {
						return e.connectionArrow
					},
					getChildOffsetPoint: function () {
						return e.childOffsetPoint
					},
					getDimensions: function () {
						return e.dimensions
					},
					getId: function () {
						return e.id
					},
					getFromPoint: function () {
						return e.fromPoint
					},
					getMargin: function () {
						return e.theme.margin
					},
					getName: function () {
						return e.name
					},
					getNode: function () {
						return e.node
					},
					getNodeType: function () {
						return e.node.type
					},
					getNodePathId: function () {
						return e.nodePathId
					},
					getNodeKey: function () {
						return e.node.key
					},
					getParent: function () {
						return e.parent
					},
					getPosition: function () {
						return e.position
					},
					getToPoint: function () {
						return e.toPoint
					},
					getShapeType: function () {
						return e.type
					}
				}
			},
			Pt = function (e) {
				return Object.assign({}, function (e) {
					return {
						printName: function (t) {
							var n = e.position,
								r = e.theme,
								i = e.nameParts,
								s = t || n,
								o = s.x,
								a = s.y,
								u = i.map(function (e, t) {
									return '<tspan x="'.concat(o + r.horizontalPadding, '" y="').concat(a + 2 * r.verticalPadding * (t + 1), '">').concat(pt()(e), "</tspan>")
								}).join("");
							return "".concat(i[0].length <= e.name.length + 3 ? "<title>".concat(pt()(e.name), "</title>") : "", '\n            <text x="').concat(o + r.horizontalPadding, '" y="').concat(a + 2 * r.verticalPadding, '"\n                font-family="').concat(r.fontFamily, '" font-size="').concat(r.fontSize, '" fill="').concat(r.textColor, '">\n                ').concat(u, "\n            </text>")
						},
						printDebugInfo: function () {
							if (!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).debug) return "";
							var t = e.position,
								n = e.dimensions,
								r = e.theme,
								i = e.nodePathId;
							return '<text x="'.concat(t.x + 3 * r.horizontalPadding, '" y="').concat(t.y + n.h + r.verticalPadding, '"\n                font-family="').concat(r.fontFamily, '" font-size="').concat(r.debugFontSize, '" fill="').concat(r.debugTextColor, '">\n                ').concat(i, "\n            </text>")
						}
					}
				}(e), function (e) {
					return {
						getChildBoundaries: function (t) {
							var n = e.body,
								r = e.boundaries;
							if (!n.length) return r;
							var i = dt({
								getBody: function () {
									return t ? n.filter(t) : n
								},
								getBoundaries: function () {
									return r
								}
							}, function (e) {
								return e.getBody()
							});
							return He(i.map(function (e) {
								return e.getBoundaries()
							}))
						}
					}
				}(e), function (e) {
					return {
						addChild: function (t) {
							e.body.push(t)
						},
						setParent: function (t) {
							e.parent = t
						},
						connectChild: function (e) {
							this.addChild(e), e.setParent(this)
						},
						updateTheme: function (t) {
							e.theme = M(e.theme, t)
						},
						assignConnectionArrow: function (t) {
							e.connectionArrow = t
						}
					}
				}(e))
			},
			vt = function (e) {
				return e.maxNamePartLength * e.theme.symbolWidth
			},
			Dt = function (e) {
				return 2 * e.theme.horizontalPadding + vt(e)
			},
			Ct = function (e) {
				return 2 * e.theme.verticalPadding + function (e) {
					var t = e.totalNamePartsNumber,
						n = e.theme;
					return t * n.symbolHeight + (t - 1) * n.lineHeight
				}(e)
			},
			Ot = function (e) {
				return {
					w: Dt(e),
					h: Ct(e)
				}
			},
			wt = function (e) {
				return gt({}, e.initialPosition)
			},
			Ft = function (e) {
				var t = e.position,
					n = e.dimensions,
					r = e.theme;
				return {
					x: t.x + r.childOffset / 2,
					y: t.y + n.h
				}
			},
			_t = function (e) {
				var t = e.position,
					n = e.dimensions;
				return {
					x: t.x,
					y: t.y + n.h / 2
				}
			},
			Nt = function (e) {
				var t = e.position,
					n = e.dimensions;
				return {
					x: t.x + n.w,
					y: t.y + n.h / 2
				}
			},
			It = function (e) {
				var t = e.theme,
					n = e.dimensions;
				return {
					x: t.childOffset,
					y: n.h + t.childOffset / 2
				}
			},
			kt = function (e) {
				var t = e.position,
					n = e.dimensions;
				return {
					min: {
						x: t.x,
						y: t.y
					},
					max: {
						x: t.x + n.w,
						y: t.y + n.h
					}
				}
			};

		function Bt(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function Lt(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Bt(n, !0).forEach(function (t) {
					Mt(e, t, n[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bt(n).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				})
			}
			return e
		}

		function Mt(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var jt = function (e) {
				return {
					print: function (t) {
						var n = e.theme,
							r = e.position,
							i = r.x,
							s = r.y,
							o = e.dimensions,
							a = o.w,
							u = o.h,
							c = {
								x: i + n.edgeOffset,
								y: s
							};
						return "\n            <g>\n                ".concat(tt(i, s, a, u, n), "\n                    \n                ").concat(nt(i + n.edgeOffset, s, i + n.edgeOffset, s + u, n), "\n                ").concat(nt(i + a - n.edgeOffset, s, i + a - n.edgeOffset, s + u, n), "\n             \n                ").concat(this.printName(c), "\n                ").concat(this.printDebugInfo(t), "\n            </g>")
					}
				}
			},
			Rt = function (e) {
				return {
					w: function (e) {
						return 2 * (e.theme.horizontalPadding + e.theme.edgeOffset) + vt(e)
					}(e),
					h: Ct(e)
				}
			},
			Ut = function (e) {
				var t = function (e) {
					return Lt({}, e, {
						position: wt(e),
						dimensions: Rt(e)
					})
				}(e);
				return t = Lt({}, t, {}, St(t)), L(t, [xt, Pt, jt])
			},
			Vt = Tt(Ut, "VerticalEdgedRectangle"),
			Xt = function (e) {
				return {
					print: function () {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							n = e.theme,
							r = n.dot,
							i = e.position,
							s = i.x,
							o = i.y,
							a = e.dimensions,
							u = a.w,
							c = a.h,
							l = e.node;
						return "\n                <g>\n                   ".concat(et(s, o, u, c, n), "\n                   ").concat(this.printName(), "\n                   ").concat(l.chain ? rt(s + r.offset, o + c - r.offset, r.radius, r) : "", "\n                   ").concat(this.printDebugInfo(t), "\n                </g>")
					}
				}
			},
			Wt = function (e) {
				var t = function (e) {
					var t = bt(e);
					return gt({}, t, {}, St(t))
				}(e);
				return L(t, [xt, Pt, Xt])
			},
			Yt = Tt(Wt, "Rectangle"),
			Kt = function (e) {
				return {
					w: qt(e),
					h: Jt(e)
				}
			},
			qt = function (e) {
				return Jt(e) + Dt(e)
			},
			Jt = function (e) {
				return 2 * e.theme.thinPartOffset + Ct(e)
			},
			Gt = function (e) {
				var t = e.position,
					n = e.dimensions;
				return {
					x: t.x + n.h / 2,
					y: t.y + n.h
				}
			},
			Ht = function (e) {
				var t = e.dimensions,
					n = e.theme;
				return {
					x: t.h / 2 + n.childOffset,
					y: t.h + n.childOffset / 2
				}
			};

		function $t(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function zt(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? $t(n, !0).forEach(function (t) {
					Qt(e, t, n[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $t(n).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				})
			}
			return e
		}

		function Qt(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var Zt, en = function (e) {
				return {
					getAlternateFromPoint: function () {
						return e.alternateFromPoint
					}
				}
			},
			tn = function (e) {
				return {
					getConsequentBranchChildBoundary: function () {
						return this.getChildBoundaries(function (e) {
							return e.state.node.key === a.CONSEQUENT
						})
					},
					getAlternativeBranchChildOffsetPoint: function () {
						var t = e.theme,
							n = {};
						n.y = e.position.y + e.childOffsetPoint.y, n.x = this.getConsequentBranchChildBoundary().max.x, n.x += t.alternateBranchOffset;
						var r = e.position.x + e.dimensions.w + t.childOffset;
						return n.x <= r && (n.x = r), n
					},
					checkIfChildExist: function (t) {
						return e.body.filter(function (e) {
							return e.getNodeKey() === t
						}).length
					},
					printConditionMarks: function () {
						var t = e.theme,
							n = e.position,
							r = n.x,
							i = n.y,
							s = e.dimensions.h,
							u = e.dimensions.w,
							c = e.node.subType === o.CONDITIONAL_EXPRESSION ? "?" : "if";
						return "".concat(it(r + s / 2 - c.length * t.symbolWidth / 2, i + s / 2 + t.symbolHeight / 2, t, c), " ").concat(it(r + s / 2 + t.symbolWidth, i + s + t.symbolWidth / 4, t, "+"), " ").concat(this.checkIfChildExist(a.ALTERNATE) ? it(r + u + t.symbolWidth / 2, i + s / 2 - t.symbolWidth / 4, t, "-") : "")
					},
					print: function (t) {
						var n = e.theme,
							r = e.position,
							i = r.x,
							s = r.y,
							o = e.dimensions,
							a = o.w,
							u = o.h,
							c = u,
							l = u - 2 * n.thinPartOffset,
							p = {
								x: i + c,
								y: s + l / 2
							};
						return "<g>\n            ".concat(et(i + u / 2, s + u / 4, a - c / 2, l, n), "                \n            ").concat(Ze(i, s, c, c, n), "\n            ").concat(this.printName(p), "\n            ").concat(this.printDebugInfo(t), "\n            ").concat(this.printConditionMarks(), "\n        </g>")
					}
				}
			},
			nn = function (e) {
				var t = function (e) {
					return zt({}, e, {
						position: wt(e),
						dimensions: Kt(e)
					})
				}(e);
				return t = zt({}, t, {}, function (e) {
					return {
						fromPoint: Gt(e),
						childOffsetPoint: Ht(e),
						toPoint: function (e) {
							var t = e.position,
								n = e.dimensions;
							return {
								x: t.x,
								y: t.y + n.h / 2
							}
						}(e),
						backPoint: Nt(e),
						boundaries: kt(e),
						alternateFromPoint: function (e) {
							var t = e.position,
								n = e.dimensions;
							return {
								x: t.x + n.w,
								y: t.y + n.h / 2
							}
						}(e)
					}
				}(t)), L(t, [xt, en, Pt, tn])
			},
			rn = Tt(nn, "ConditionRhombus");

		function sn(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function on(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? sn(n, !0).forEach(function (t) {
					an(e, t, n[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sn(n).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				})
			}
			return e
		}

		function an(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var un = (an(Zt = {}, o.FOR_OF_STATEMENT, "for"), an(Zt, o.FOR_IN_STATEMENT, "for"), an(Zt, o.FOR_STATEMENT, "for"), an(Zt, o.WHILE_STATEMENT, "while"), an(Zt, o.DO_WHILE_STATEMENT, "while"), Zt),
			cn = function (e) {
				return {
					getMidPoint: function () {
						return e.midPoint
					},
					getLoopedConnectionArrow: function () {
						return e.loopedConnectionArrow
					}
				}
			},
			ln = function (e) {
				return {
					assignLoopedConnectionArrow: function (t) {
						e.loopedConnectionArrow = t
					},
					printConditionMarks: function () {
						var t = e.theme,
							n = e.position,
							r = n.x,
							i = n.y,
							s = e.dimensions.h,
							o = e.prefixName || un[e.node.subType] || "for";
						return it(r + s / 2 - o.length * t.symbolWidth / 2, i + s / 2 + t.symbolHeight / 2, t, o)
					},
					print: function (t) {
						var n = e.theme,
							r = e.position,
							i = r.x,
							s = r.y,
							o = e.dimensions,
							a = o.w,
							u = o.h,
							c = u,
							l = u - 2 * n.thinPartOffset,
							p = {
								x: i + c,
								y: s + l / 2
							};
						return "<g>\n\n            ".concat(et(i + u / 2, s + u / 4, a - c / 2, l, n), "\n            ").concat(Ze(i, s, c, c, n), "\n                \n            ").concat(this.printName(p), "\n            ").concat(this.printDebugInfo(t), "\n            ").concat(this.printConditionMarks(), "\n        </g>")
					}
				}
			},
			pn = Tt(function (e) {
				var t = function (e) {
					return on({}, e, {
						position: function (e) {
							var t = e.initialPosition,
								n = e.theme;
							return {
								x: t.x,
								y: t.y + n.positionTopShift
							}
						}(e),
						dimensions: Kt(e)
					})
				}(e);
				return t = on({}, t, {}, function (e) {
					return {
						fromPoint: Gt(e),
						childOffsetPoint: Ht(e),
						toPoint: _t(e),
						backPoint: Nt(e),
						boundaries: kt(e),
						midPoint: function (e) {
							var t = e.position,
								n = e.dimensions;
							return {
								x: t.x + n.h / 2,
								y: t.y
							}
						}(e)
					}
				}(t)), L(t, [xt, cn, Pt, ln])
			}, "LoopRhombus");

		function hn(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function fn(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var dn = function (e) {
				return {
					print: function () {
						var t = e.theme,
							n = e.position,
							r = n.x,
							i = n.y,
							s = e.dimensions,
							o = s.w,
							a = s.h,
							u = t.radius,
							c = {
								x: r + u,
								y: i - u
							};
						return "\n            <g>\n               ".concat(tt(r, i - u + u / 4, o + u, a - 2 * t.padding, t), "\n               ").concat(rt(r, i, u, t), "\n               ").concat(this.printName(c), "\n            </g>")
					},
					setChildOffsetPoint: function (t) {
						e.childOffsetPoint = t
					}
				}
			},
			yn = Tt(function (e) {
				var t = bt(e);
				return t = function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? hn(n, !0).forEach(function (t) {
							fn(e, t, n[t])
						}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hn(n).forEach(function (t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						})
					}
					return e
				}({}, t, {}, function (e) {
					return {
						fromPoint: function (e) {
							var t = e.position,
								n = e.theme.radius;
							return {
								x: t.x,
								y: t.y + n
							}
						}(e),
						boundaries: kt(e)
					}
				}(t)), L(t, [xt, Pt, dn])
			}, "RootCircle");

		function mn(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function gn(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? mn(n, !0).forEach(function (t) {
					En(e, t, n[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mn(n).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				})
			}
			return e
		}

		function En(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var Tn = function (e) {
				return {
					print: function (t) {
						var n = e.theme,
							r = n.arrow,
							i = e.position,
							s = i.x,
							o = i.y,
							a = e.dimensions.h,
							u = e.dimensions.w - r.handlerLength - r.sizeX,
							c = {
								x: s,
								y: o
							},
							l = {
								x: r.sizeX,
								y: r.sizeY
							},
							p = st($e([{
								x: 0,
								y: 0
							}, {
								x: l.x,
								y: l.y / 2
							}, {
								x: 0,
								y: l.y
							}], {
								x: s + u + r.handlerLength,
								y: o + a / 2 - l.y / 2
							}), r);
						return "\n            <g>\n                ".concat(et(s, o, u, a, n), "\n                \n                ").concat(nt(s + u, o + a / 2 - r.handlerLength, s + u + r.handlerLength, o + a / 2 - r.handlerLength, r), "\n                \n                ").concat(nt(s + u, o + a / 2 + r.handlerLength, s + u + r.handlerLength, o + a / 2 + r.handlerLength, r), "\n\n                ").concat(p, "\n                             \n                ").concat(this.printName(c), "\n                ").concat(this.printDebugInfo(t), "\n            </g>")
					}
				}
			},
			An = function (e) {
				return {
					w: function (e) {
						var t = e.theme,
							n = t.arrow;
						return 2 * t.horizontalPadding + n.handlerLength + n.sizeX + vt(e)
					}(e),
					h: Ct(e)
				}
			},
			Sn = function (e) {
				var t = function (e) {
					return gn({}, e, {
						position: wt(e),
						dimensions: An(e)
					})
				}(e);
				return t = gn({}, t, {}, St(t)), L(t, [xt, Pt, Tn])
			},
			bn = Tt(Sn, "ReturnStatement");

		function xn(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function Pn(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? xn(n, !0).forEach(function (t) {
					vn(e, t, n[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xn(n).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				})
			}
			return e
		}

		function vn(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var Dn = function (e) {
				return {
					print: function (t) {
						var n = e.theme,
							r = n.suffix,
							i = e.position,
							s = i.x,
							o = i.y,
							a = e.dimensions.h,
							u = e.dimensions.w - 2 * (r.width + r.space),
							c = {
								x: s,
								y: o
							},
							l = et(s + u + r.space, o, r.width, a, r),
							p = et(s + u + 2 * r.space + r.width, o, r.width, a, r);
						return "\n            <g>\n                ".concat(et(s, o, u, a, n), "\n                \n                ").concat(l, "\n                ").concat(p, "\n                             \n                ").concat(this.printName(c), "\n                ").concat(this.printDebugInfo(t), "\n            </g>")
					}
				}
			},
			Cn = function (e) {
				return {
					w: function (e) {
						var t = e.theme,
							n = t.suffix;
						return 2 * t.horizontalPadding + 2 * (n.width + +n.space) + vt(e)
					}(e),
					h: Ct(e)
				}
			},
			On = Tt(function (e) {
				var t = function (e) {
					return Pn({}, e, {
						position: wt(e),
						dimensions: Cn(e)
					})
				}(e);
				return t = Pn({}, t, {}, St(t)), L(t, [xt, Pt, Dn])
			}, "DestructedNode"),
			wn = Tt(Ut, "ClassDeclaration"),
			Fn = Tt(Wt, "DebuggerStatement"),
			_n = Tt(Sn, "ExportDeclaration"),
			Nn = Tt(Ut, "ImportDeclaration"),
			In = Tt(Wt, "ImportSpecifier"),
			kn = Tt(Wt, "ThrowStatement"),
			Bn = Tt(Wt, "TryStatement"),
			Ln = Tt(Sn, "CatchClause"),
			Mn = Tt(nn, "SwitchStatement"),
			jn = Tt(Sn, "BreakStatement"),
			Rn = Tt(Wt, "SwitchCase"),
			Un = Tt(Sn, "ContinueStatement"),
			Vn = Tt(Wt, "CallExpression"),
			Xn = Tt(Wt, "ObjectProperty"),
			Wn = function (e) {
				switch (e.type) {
					case o.FUNCTION:
						return Vt;
					case o.LOOP:
						return pn;
					case o.CONDITIONAL:
						return rn;
					case o.RETURN:
						return bn;
					case h.DESTRUCTED:
						return On;
					case o.CLASS_DECLARATION:
						return wn;
					case o.DEBUGGER_STATEMENT:
						return Fn;
					case o.EXPORT_DEFAULT_DECLARATION:
					case o.EXPORT_NAMED_DECLARATION:
						return _n;
					case o.IMPORT_DECLARATION:
						return Nn;
					case o.IMPORT_DEFAULT_SPECIFIER:
					case o.IMPORT_SPECIFIER:
						return In;
					case o.THROW_STATEMENT:
						return kn;
					case o.PROGRAM:
						return yn;
					case o.TRY_STATEMENT:
						return Bn;
					case o.CATCH_CLAUSE:
						return Ln;
					case o.SWITCH_STATEMENT:
						return Mn;
					case o.BREAK:
						return jn;
					case o.SWITCH_CASE:
						return Rn;
					case o.CONTINUE:
						return Un;
					case o.OBJECT_PROPERTY:
						return Xn;
					case o.CALL_EXPRESSION:
						return Vn;
					default:
						return Yt
				}
			},
			Yn = function () {
				return "ConnectionArrow"
			},
			Kn = function (e) {
				return {
					getFieldName: Yn
				}
			},
			qn = function (e) {
				return {
					updateTheme: function (t) {
						e.theme = M(e.theme, t)
					}
				}
			},
			Jn = function (e) {
				return {
					printLine: function (t) {
						return function (e, t) {
							var n = e.map(function (n, r) {
								if (!r) return "M".concat(n.x, ", ").concat(n.y);
								var i = e[r - 1];
								return r <= 1 ? ot(n, i, t.curveTurnRadius) : "Q".concat(i.x, " ").concat(i.y, "\n                ").concat(ut(n, i, t.curveTurnRadius), "\n                ").concat(ot(n, i, 2 * t.curveTurnRadius))
							}).join(" ");
							return '<path d="'.concat(n, '"\n        style="fill:none; ').concat(Qe(t), '" />')
						}(t, e.theme.line)
					},
					printArrow: function (t, n) {
						return st($e(n, t), e.theme.arrow)
					},
					printArrowByType: function (t, n) {
						var r, i = n.x,
							s = n.y,
							o = e.theme.arrow.size;
						switch (t) {
							case u:
								return r = {
									x: i - o.x,
									y: s - o.y / 2
								}, this.printArrow(r, [{
									x: 0,
									y: 0
								}, {
									x: o.x,
									y: o.y / 2
								}, {
									x: 0,
									y: o.y
								}]);
							case c:
								return r = {
									x: i,
									y: s - o.y / 2
								}, this.printArrow(r, [{
									x: 0,
									y: o.y / 2
								}, {
									x: o.x,
									y: 0
								}, {
									x: o.x,
									y: o.y
								}]);
							case l:
								return r = {
									x: i - o.y / 2,
									y: s - o.x
								}, this.printArrow(r, [{
									x: 0,
									y: 0
								}, {
									x: o.y / 2,
									y: o.x
								}, {
									x: o.y,
									y: 0
								}]);
							default:
								return ""
						}
					},
					print: function () {
						var t = e.config,
							n = t.linePoints,
							r = t.arrowPoint,
							i = t.arrowType,
							s = t.noArrow;
						return s && (n[n.length - 1].x += e.theme.arrow.size.x), "\n            <g>\n               ".concat(this.printLine(n), "\n               ").concat(!s && this.printArrowByType(i, r), "\n            </g>")
					}
				}
			},
			Gn = function (e, t) {
				return function (e) {
					return L(e, [qn, Jn, Kn])
				}({
					config: e,
					theme: t,
					originalTheme: t
				})
			};

		function Hn(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function $n(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Hn(n, !0).forEach(function (t) {
					zn(e, t, n[t])
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hn(n).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				})
			}
			return e
		}

		function zn(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var Qn = function (e, t) {
			var n = e.startPoint,
				r = e.endPoint,
				i = e.boundaryPoint,
				s = e.arrowType,
				o = {
					linePoints: [],
					arrowPoint: {
						x: r.x,
						y: r.y
					}
				};
			switch (s) {
				case u:
					o.linePoints = [{
						x: n.x,
						y: n.y
					}], o.linePoints = i ? o.linePoints.concat([{
						x: i.x,
						y: n.y
					}, {
						x: i.x,
						y: r.y
					}, {
						x: r.x,
						y: r.y
					}]) : o.linePoints.concat([{
						x: n.x,
						y: r.y
					}, {
						x: r.x,
						y: r.y
					}]);
					break;
				case c:
					o.linePoints = [{
						x: n.x,
						y: n.y
					}, {
						x: i.x + t.lineTurnOffset,
						y: n.y
					}, {
						x: i.x + t.lineTurnOffset,
						y: r.y
					}, {
						x: r.x - t.lineTurnOffset,
						y: r.y
					}];
					break;
				case l:
					o.linePoints = [{
						x: n.x,
						y: n.y
					}, {
						x: i.x + t.lineTurnOffset,
						y: n.y
					}, {
						x: i.x + t.lineTurnOffset,
						y: r.y - t.lineTurnOffset
					}, {
						x: r.x,
						y: r.y - t.lineTurnOffset
					}, {
						x: r.x,
						y: r.y
					}]
			}
			return o
		};

		function Zn(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				})), n.push.apply(n, r)
			}
			return n
		}

		function er(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var tr = function (e, t) {
				var n = function () {
						var e = {
							shapes: [],
							arrowConnections: []
						};
						return {
							getShapes: function () {
								return e.shapes
							},
							addShapes: function (t) {
								return e.shapes = e.shapes.concat(t), this
							},
							addArrowConnections: function (t) {
								return e.arrowConnections = e.arrowConnections.concat(t), this
							},
							printChildren: function (t) {
								var n = "";
								return [].concat(e.shapes, e.arrowConnections).forEach(function (e) {
									n += e.print(t)
								}), n
							},
							calculateDimensions: function () {
								var t = He(e.shapes.map(function (e) {
									return e.getBoundaries()
								}));
								return {
									w: Math.ceil(t.max.x) + 25,
									h: Math.ceil(t.max.y) + 25
								}
							},
							print: function (e) {
								var t = this.calculateDimensions(),
									n = t.w,
									r = t.h;
								return '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" \n                width="'.concat(n, '" height="').concat(r, '" shape-rendering="optimizeSpeed">\n                ').concat(this.printChildren(e), "\n            </svg>")
							}
						}
					}(),
					r = nr(e, t),
					i = ir(r.root, t);
				return n.addShapes(r.list).addShapes(r.root), n.addArrowConnections(i), n
			},
			nr = function (e, t) {
				var n, r = function (e, t) {
						var n = Wn(e),
							r = t[n.getThemeFieldName()],
							i = $n({}, t.RootStartPoint),
							s = i.center,
							o = i.childOffset,
							a = n(e, s, r);
						return a.setChildOffsetPoint(o), a
					}(e, t),
					i = function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {};
							t % 2 ? Zn(n, !0).forEach(function (t) {
								er(e, t, n[t])
							}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zn(n).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
							})
						}
						return e
					}({}, r.getChildOffsetPoint()),
					s = [];
				return Ge(e, r, function (e, t) {
					i.x += t.getChildOffsetPoint().x
				}, function (e, r) {
					if (i.y += rr(t, e, n), r.getNodeType() === o.CONDITIONAL && e.key === a.ALTERNATE && !r.checkIfChildExist(a.ALTERNATE)) {
						var u = r.getAlternativeBranchChildOffsetPoint();
						i.x = u.x + r.getMargin(), i.y = u.y
					}
					var c = function (e, t, n) {
						var r = Wn(e);
						return r(e, t, n[r.getThemeFieldName()])
					}(e, {
						x: i.x,
						y: i.y
					}, t);
					return i.x = c.getPosition().x, i.y = c.getPosition().y, s.push(c), r.connectChild(c), i.y += c.getChildOffsetPoint().y, n = e, c
				}, function (e, t) {
					e.type === o.CONDITIONAL && (i.y = t.getChildBoundaries().max.y + t.getMargin()), i.x = t.getPosition().x
				}), {
					list: s,
					root: r
				}
			},
			rr = function (e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					r = [o.FUNCTION, o.FUNCTION_DECLARATION, o.FUNCTION_EXPRESSION, o.ARROW_FUNCTION_EXPRESSION, o.CLASS_DECLARATION, o.IMPORT_DECLARATION, o.EXPORT_NAMED_DECLARATION, o.EXPORT_DEFAULT_DECLARATION];
				return r.includes(t.type) && !r.includes(n.type) && t.pathParentType !== o.CALL_EXPRESSION ? e.BaseShape.complexTypeExtraSpace : 0
			},
			ir = function (e, t) {
				var n = [],
					r = function (e) {
						var r = function (e, t) {
							var n = t.ConnectionArrow,
								r = Qn(e, n);
							return Gn($n({}, e, {}, r), n)
						}(e, t);
						return n.push(r), r
					},
					i = null;
				return Ge(e, e, function (e) {}, function (e, t) {
					i = e;
					var n = sr(e, t),
						s = r(n);
					return e.assignConnectionArrow(s), e
				}, function (e) {
					if (e, e.getNodeType() === o.LOOP) {
						var t = e.getChildBoundaries().max;
						e.assignLoopedConnectionArrow(r({
							startPoint: i.getBackPoint(),
							endPoint: e.getMidPoint(),
							boundaryPoint: {
								x: t.x
							},
							arrowType: l
						}))
					}
				}, {
					getBody: function (e) {
						return e.getBody()
					}
				}), n
			},
			sr = function (e, t) {
				var n = {
					endPoint: e.getToPoint(),
					arrowType: u,
					noArrow: function (e, t) {
						return !![o.IMPORT_SPECIFIER, o.IMPORT_DEFAULT_SPECIFIER, o.OBJECT_PROPERTY].includes(e.getNodeType()) || !(![o.FUNCTION_DECLARATION, o.FUNCTION_EXPRESSION, o.FUNCTION, o.ARROW_FUNCTION_EXPRESSION].includes(e.getNodeType()) || ![o.CALL_EXPRESSION, o.VARIABLE_DECLARATOR, o.ASSIGNMENT_EXPRESSION, o.NEW_EXPRESSION].includes(t.getNodeType())) || void 0
					}(e, t)
				};
				if (e.getNodeKey() === a.ALTERNATE && t.getAlternativeBranchChildOffsetPoint) {
					var r = t.getAlternativeBranchChildOffsetPoint();
					n.startPoint = t.getAlternateFromPoint(), n.boundaryPoint = {
						x: r.x
					}
				} else n.startPoint = t.getFromPoint();
				return n
			},
			or = function () {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = Je(Ke(), e);
				return {
					buildShapesTree: function (e) {
						var n = [];
						try {
							n = tr(e, t)
						} catch (e) {
							throw R("Error at buildShapesTree" + e.message, e.stack), e
						}
						return n
					},
					applyTheme: function (e) {
						t = Je(t, e)
					},
					applyDefaultTheme: function () {
						this.applyTheme(Ke())
					},
					applyBlackAndWhiteTheme: function () {
						this.applyTheme(Ye(Ue))
					},
					applyBlurredTheme: function () {
						this.applyTheme(qe())
					},
					applyLightTheme: function () {
						this.applyTheme(Ye(Xe))
					},
					applyColorBasedTheme: function (e) {
						this.applyTheme(function (e) {
							return we(e)
						}(e))
					}
				}
			},
			ar = function (e) {
				var t = Pe();
				return t.setAbstractionLevel(e),
					function (e) {
						return t.buildFlowTreeFromAst(e)
					}
			},
			ur = ar(ae.EXPORT),
			cr = ar([ae.EXPORT, ae.IMPORT]),
			lr = ar([ae.EXPORT, ae.IMPORT, ae.CLASS, ae.FUNCTION]),
			pr = ar([ae.EXPORT, ae.IMPORT, ae.CLASS, ae.FUNCTION, ae.FUNCTION_DEPENDENCIES]);
		n.d(t, "createFlowTreeBuilder", function () {
			return hr
		}), n.d(t, "createFlowTreeModifier", function () {
			return fr
		}), n.d(t, "createSVGRender", function () {
			return dr
		}), n.d(t, "createShapesTreeEditor", function () {
			return yr
		}), n.d(t, "createPresentationGenerator", function () {
			return mr
		}), n.d(t, "convertCodeToSvg", function () {
			return gr
		}), n.d(t, "convertCodeToFlowTree", function () {
			return Er
		}), n.d(t, "convertFlowTreeToSvg", function () {
			return Tr
		}), n.d(t, "ABSTRACTION_LEVELS", function () {
			return ae
		}), n.d(t, "DEFINED_MODIFIERS", function () {
			return me
		}), n.d(t, "MODIFIER_PRESETS", function () {
			return ge
		}), n.d(t, "TOKEN_TYPES", function () {
			return o
		}), n.d(t, "MODIFIED_TYPES", function () {
			return h
		});
		var hr = Pe,
			fr = xe,
			dr = or,
			yr = function (e) {
				var t = function (e, t, n) {
					t && e.updateTheme(t), n && (e.getAssignedConnectionArrow().updateTheme(n), e.getLoopedConnectionArrow && e.getLoopedConnectionArrow().updateTheme(n))
				};
				return {
					findShape: function (t) {
						var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
						return e.getShapes().filter(function (e, r) {
							return r >= n && t(e)
						})
					},
					applyShapeStyles: function (e, n, r) {
						this.findShape(e).forEach(function (e) {
							t(e, n, r)
						})
					},
					blur: function (e) {
						var n = qe();
						this.findShape(e).forEach(function (e) {
							var r = e.getAssignedConnectionArrow();
							t(e, n[e.getShapeType()], r ? n[r.getFieldName()] : null)
						})
					},
					focus: function (e) {
						this.blur(function (t) {
							return !e(t)
						})
					},
					blurShapeBranch: function (e) {
						var n = qe();
						this.findShape(e).forEach(function (e) {
							return ce(e, function (e) {
								var r = e.getAssignedConnectionArrow();
								t(e, n[e.getShapeType()], r ? n[r.getFieldName()] : null)
							}, function (e) {
								return e.state.body
							})
						})
					},
					focusShapeBranch: function (n) {
						var r = this,
							i = qe();
						[].concat(n).forEach(function (n, s) {
							r.findShape(n).forEach(function (n) {
								var o = dt(n, function (e) {
										return e.state.body
									}),
									a = e.getShapes().indexOf(n);
								r.findShape(function (e) {
									return !o.includes(e)
								}, s > 0 ? a : 0).forEach(function (e) {
									var n = e.getAssignedConnectionArrow();
									t(e, i[e.getShapeType()], n ? i[n.getFieldName()] : null)
								})
							})
						})
					},
					print: function (t) {
						return e && e.print(t)
					}
				}
			},
			mr = function (e) {
				return {
					buildSlides: function () {
						var t = or(),
							n = Y(e);
						return [ur(n), cr(n), lr(n), pr(n), function (e) {
							return Pe().buildFlowTreeFromAst(e)
						}(n)].filter(function (e) {
							return e.body.length
						}).map(t.buildShapesTree).map(function (e) {
							return e.print()
						})
					}
				}
			},
			gr = function (e, t) {
				return Tr(Er(e), t)
			},
			Er = function (e) {
				return hr().build(e)
			},
			Tr = function (e, t) {
				return dr().buildShapesTree(e).print(t)
			}
	}])
});
//# sourceMappingURL=js2flowchart.js.map