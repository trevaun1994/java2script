Clazz.load (["java.lang.CharacterData"], "java.lang.CharacterData0E", null, function () {
;
(function(){var C$ = Clazz.decorateAsClass (function () {
Clazz.newInstance$ (this, arguments);
}, java.lang, "CharacterData0E", CharacterData);

Clazz.newMethod$(C$, '$init$', function () {
}, 1);

Clazz.newMethod$(C$, 'getProperties', function (ch) {
var offset = String.fromCharCode (ch);
var props = CharacterData0E.A[(CharacterData0E.Y[(CharacterData0E.X[offset.charCodeAt (0) >> 5]).charCodeAt (0) | ((offset.charCodeAt (0) >> 1) & 0xF)]).charCodeAt (0) | (offset.charCodeAt (0) & 0x1)];
return props;
});

Clazz.newMethod$(C$, 'getType', function (ch) {
var props = this.getProperties (ch);
return (props & 0x1F);
});

Clazz.newMethod$(C$, 'isJavaIdentifierStart', function (ch) {
var props = this.getProperties (ch);
return ((props & 0x00007000) >= 0x00005000);
});

Clazz.newMethod$(C$, 'isJavaIdentifierPart', function (ch) {
var props = this.getProperties (ch);
return ((props & 0x00003000) != 0);
});

Clazz.newMethod$(C$, 'isUnicodeIdentifierStart', function (ch) {
var props = this.getProperties (ch);
return ((props & 0x00007000) == 0x00007000);
});

Clazz.newMethod$(C$, 'isUnicodeIdentifierPart', function (ch) {
var props = this.getProperties (ch);
return ((props & 0x00001000) != 0);
});

Clazz.newMethod$(C$, 'isIdentifierIgnorable', function (ch) {
var props = this.getProperties (ch);
return ((props & 0x00007000) == 0x00001000);
});

Clazz.newMethod$(C$, 'toLowerCase', function (ch) {
var mapChar = ch;
var val = this.getProperties (ch);
if ((val & 0x00020000) != 0) {
var offset = val << 5 >> (23);
mapChar = ch + offset;
}return mapChar;
});

Clazz.newMethod$(C$, 'toUpperCase', function (ch) {
var mapChar = ch;
var val = this.getProperties (ch);
if ((val & 0x00010000) != 0) {
var offset = val << 5 >> (23);
mapChar = ch - offset;
}return mapChar;
});

Clazz.newMethod$(C$, 'toTitleCase', function (ch) {
var mapChar = ch;
var val = this.getProperties (ch);
if ((val & 0x00008000) != 0) {
if ((val & 0x00010000) == 0) {
mapChar = ch + 1;
} else if ((val & 0x00020000) == 0) {
mapChar = ch - 1;
}} else if ((val & 0x00010000) != 0) {
mapChar = this.toUpperCase (ch);
}return mapChar;
});

Clazz.newMethod$(C$, 'digit', function (ch, radix) {
var value = -1;
if (radix >= 2 && radix <= 36) {
var val = this.getProperties (ch);
var kind = val & 0x1F;
if (kind == 9) {
value = ch + ((val & 0x3E0) >> 5) & 0x1F;
} else if ((val & 0xC00) == 0x00000C00) {
value = (ch + ((val & 0x3E0) >> 5) & 0x1F) + 10;
}}return (value < radix) ? value : -1;
});

Clazz.newMethod$(C$, 'getNumericValue', function (ch) {
var val = this.getProperties (ch);
var retval = -1;
switch (val & 0xC00) {
default:
case (0x00000000):
retval = -1;
break;
case (0x00000400):
retval = ch + ((val & 0x3E0) >> 5) & 0x1F;
break;
case (0x00000800):
retval = -2;
break;
case (0x00000C00):
retval = (ch + ((val & 0x3E0) >> 5) & 0x1F) + 10;
break;
}
return retval;
});

Clazz.newMethod$(C$, 'isWhitespace', function (ch) {
var props = this.getProperties (ch);
return ((props & 0x00007000) == 0x00004000);
});

Clazz.newMethod$(C$, 'getDirectionality', function (ch) {
var val = this.getProperties (ch);
var directionality = ((val & 0x78000000) >> 27);
if (directionality == 0xF) {
directionality = -1;
}return directionality;
});

Clazz.newMethod$(C$, 'isMirrored', function (ch) {
var props = this.getProperties (ch);
return ((props & 0x80000000) != 0);
});

Clazz.newMethod$(C$, 'construct', function () {
Clazz.super$(C$, this);
C$.$init$.apply(this);
}, 1);
Clazz.defineStatics (C$,
"instance", Clazz.$new(CharacterData0E.construct,[]),
"X", String.fromCharCode (("\u0000\u0010\u0010\u0010    0000000@                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ").toCharArray ()),
"Y", String.fromCharCode (("\u0000\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0004\u0004\u0004\u0004\u0004\u0004\u0004\u0004\u0004\u0004\u0004\u0004\u0004\u0004\u0004\u0004\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0006\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002").toCharArray ()),
"A",  Clazz.newArray$('IA', 1, [8]),
"A_DATA", "\u7800\u0000\u4800\u1010\u7800\u0000\u7800\u0000\u4800\u1010\u4800\u1010\u4000\u3006\u4000\u3006");
{
{
var data = "\u7800\u0000\u4800\u1010\u7800\u0000\u7800\u0000\u4800\u1010\u4800\u1010\u4000\u3006\u4000\u3006".toCharArray ();
var i = 0;
var j = 0;
while (i < (16)) {
var entry = (data[i++]).charCodeAt (0) << 16;
CharacterData0E.A[j++] = entry | (data[i++]).charCodeAt (0);
}
}}
})()
});

//Created 2017-08-17 10:33:13
