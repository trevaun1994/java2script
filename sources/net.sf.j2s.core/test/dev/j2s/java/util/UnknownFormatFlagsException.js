Clazz.load (["java.util.IllegalFormatException"], "java.util.UnknownFormatFlagsException", ["java.lang.NullPointerException"], function () {
;
(function(){var C$ = Clazz.decorateAsClass (function () {
Clazz.newInstance$ (this, arguments);
}, java.util, "UnknownFormatFlagsException", java.util.IllegalFormatException);

Clazz.newMethod$(C$, '$init$', function () {
this.flags = null;
}, 1);

Clazz.newMethod$(C$, 'construct$S', function (f) {
Clazz.super$(C$, this);
C$.$init$.apply(this);
if (null == f) {
throw Clazz.$new(NullPointerException.construct,[]);
}this.flags = f;
}, 1);

Clazz.newMethod$(C$, 'getFlags', function () {
return this.flags;
});

Clazz.newMethod$(C$, 'getMessage', function () {
return "The flags are " + this.flags;
});

Clazz.newMethod$(C$, 'construct', function () {Clazz.super$(C$, this);
C$.$init$.apply(this);
}, 1);
})()
});

//Created 2017-08-17 10:33:18
