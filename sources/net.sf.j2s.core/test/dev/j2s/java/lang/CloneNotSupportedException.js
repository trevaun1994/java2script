Clazz.load (["java.lang.Exception"], "java.lang.CloneNotSupportedException", null, function () {
;
(function(){var C$ = Clazz.decorateAsClass (function () {
Clazz.newInstance$ (this, arguments);
}, java.lang, "CloneNotSupportedException", Exception);

Clazz.newMethod$(C$, '$init$', function () {
}, 1);

Clazz.newMethod$(C$, 'construct', function () {
C$.superClazz.construct.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMethod$(C$, 'construct$S', function (detailMessage) {
C$.superClazz.construct$S.apply(this, [detailMessage]);
C$.$init$.apply(this);
}, 1);
})()
});

//Created 2017-08-17 10:33:13
