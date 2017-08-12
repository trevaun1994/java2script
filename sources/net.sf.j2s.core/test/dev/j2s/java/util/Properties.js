Clazz.load (["java.util.Hashtable"], "java.util.Properties", ["java.lang.NullPointerException", "$.StringBuffer"], function () {
;
(function(){var C$ = Clazz.decorateAsClass (function () {
Clazz.newInstance$ (this, arguments);
}, java.util, "Properties", java.util.Hashtable);

Clazz.newMethod$(C$, '$init$', function () {
this.builder = null;
this.defaults = null;
}, 1);

Clazz.newMethod$ (C$, 'construct', function () {
C$.superClazz.construct.apply(this);
C$.$init$.apply(this);
}, 1);

Clazz.newMethod$ (C$, 'construct$java_util_Properties', function (properties) {
Clazz.super$(C$, this);
C$.$init$.apply(this);
this.defaults = properties;
}, 1);

Clazz.newMethod$ (C$, 'dumpString$StringBuilder$S$b', function (buffer, string, key) {
var i = 0;
if (!key && i < string.length && string.charAt (i) == ' ') {
buffer.append ("\\ ");
i++;
}for (; i < string.length; i++) {
var ch = string.charAt (i);
switch (ch) {
case '\t':
buffer.append ("\\t");
break;
case '\n':
buffer.append ("\\n");
break;
case '\f':
buffer.append ("\\f");
break;
case '\r':
buffer.append ("\\r");
break;
default:
if ("\\#!=:".indexOf (ch) >= 0 || (key && ch == ' ')) {
buffer.append ('\\');
}if (ch >= ' ' && ch <= '~') {
buffer.append (ch);
} else {
var hex = Integer.toHexString (ch.charCodeAt (0));
buffer.append ("\\u");
for (var j = 0; j < 4 - hex.length; j++) {
buffer.append ("0");
}
buffer.append (hex);
}}
}
});

Clazz.newMethod$ (C$, 'getProperty$S', function (name) {
var result = this.get$O (name);
var property = Clazz.instanceOf (result, String) ? result : null;
if (property == null && this.defaults != null) {
property = this.defaults.getProperty$S (name);
}return property;
});

Clazz.newMethod$ (C$, 'getProperty$S$S', function (name, defaultValue) {
var result = this.get$O (name);
var property = Clazz.instanceOf (result, String) ? result : null;
if (property == null && this.defaults != null) {
property = this.defaults.getProperty$S (name);
}if (property == null) {
return defaultValue;
}return property;
});

Clazz.newMethod$ (C$, 'list$java_io_PrintStream', function (out) {
if (out == null) {
throw Clazz.$new(NullPointerException.construct);
}var buffer = Clazz.$new(StringBuffer.construct,[80]);
var keys = this.propertyNames ();
while (keys.hasMoreElements ()) {
var key = keys.nextElement ();
buffer.append (key);
buffer.append ('=');
var property = this.get$O (key);
var def = this.defaults;
while (property == null) {
property = def.get$O (key);
def = def.defaults;
}
if (property.length > 40) {
buffer.append (property.substring (0, 37));
buffer.append ("...");
} else {
buffer.append (property);
}out.println$S (buffer.toString ());
buffer.setLength (0);
}
});

Clazz.newMethod$ (C$, 'list$java_io_PrintWriter', function (writer) {
if (writer == null) {
throw Clazz.$new(NullPointerException.construct);
}var buffer = Clazz.$new(StringBuffer.construct,[80]);
var keys = this.propertyNames ();
while (keys.hasMoreElements ()) {
var key = keys.nextElement ();
buffer.append (key);
buffer.append ('=');
var property = this.get$O (key);
var def = this.defaults;
while (property == null) {
property = def.get$O (key);
def = def.defaults;
}
if (property.length > 40) {
buffer.append (property.substring (0, 37));
buffer.append ("...");
} else {
buffer.append (property);
}writer.println$S (buffer.toString ());
buffer.setLength (0);
}
});

Clazz.newMethod$ (C$, 'load$java_io_InputStream', function ($in) {

});

Clazz.newMethod$ (C$, 'propertyNames', function () {
if (this.defaults == null) {
return this.keys ();
}var set = Clazz.$new(java.util.Hashtable.construct$I,[this.defaults.size () + this.size ()]);
var keys = this.defaults.propertyNames ();
while (keys.hasMoreElements ()) {
set.put$O$O (keys.nextElement (), set);
}
keys = this.keys ();
while (keys.hasMoreElements ()) {
set.put$O$O (keys.nextElement (), set);
}
return set.keys ();
});

Clazz.newMethod$ (C$, 'save$java_io_OutputStream$S', function (out, comment) {
try {
this.store$java_io_OutputStream$S (out, comment);
} catch (e) {
if (Clazz.exceptionOf (e, java.io.IOException)) {
} else {
throw e;
}
}
});

Clazz.newMethod$ (C$, 'setProperty$S$S', function (name, value) {
return this.put$O$O (name, value);
});

Clazz.newMethod$ (C$, 'store$java_io_OutputStream$S', function (out, comment) {

});

Clazz.newMethod$ (C$, 'loadFromXML$java_io_InputStream', function ($in) {

});

Clazz.newMethod$ (C$, 'storeToXML$java_io_OutputStream$S', function (os, comment) {

});

Clazz.newMethod$ (C$, 'storeToXML$java_io_OutputStream$S$S', function (os, comment, encoding) {

});

Clazz.newMethod$ (C$, 'substitutePredefinedEntries$S', function (s) {
return s.replaceAll ("&", "&amp;").replaceAll ("<", "&lt;").replaceAll (">", "&gt;").replaceAll ("\u0027", "&apos;").replaceAll ("\"", "&quot;");
});
Clazz.defineStatics (C$,
"PROP_DTD_NAME", "http://java.sun.com/dtd/properties.dtd",
"PROP_DTD", "<?xml version=\"1.0\" encoding=\"UTF-8\"?>    <!ELEMENT properties (comment?, entry*) >    <!ATTLIST properties version CDATA #FIXED \"1.0\" >    <!ELEMENT comment (#PCDATA) >    <!ELEMENT entry (#PCDATA) >    <!ATTLIST entry key CDATA #REQUIRED >",
"NONE", 0,
"SLASH", 1,
"UNICODE", 2,
"CONTINUE", 3,
"KEY_DONE", 4,
"IGNORE", 5,
"lineSeparator", null);
})()
});

//Created 2017-08-08 06:13:48