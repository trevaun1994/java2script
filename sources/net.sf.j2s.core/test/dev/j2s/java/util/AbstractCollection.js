Clazz.load (["java.util.Collection"], "java.util.AbstractCollection", ["java.lang.StringBuilder", "$.UnsupportedOperationException"], function () {
;
(function(){var C$ = Clazz.decorateAsClass (function () {
Clazz.newInstance$ (this, arguments);
}, java.util, "AbstractCollection", null, java.util.Collection);

Clazz.newMethod$(C$, '$init$', function () {
}, 1);

Clazz.newMethod$(C$, 'construct', function () {
}, 1);

Clazz.newMethod$(C$, 'add$TE', function (object) {
throw Clazz.$new(UnsupportedOperationException.construct,[]);
});

Clazz.newMethod$(C$, 'addAll$java_util_Collection', function (collection) {
var result = false;
var it = collection.iterator ();
while (it.hasNext ()) {
if (this.add$TE (it.next ())) {
result = true;
}}
return result;
});

Clazz.newMethod$(C$, 'clear', function () {
var it = this.iterator ();
while (it.hasNext ()) {
it.next ();
it.remove ();
}
});

Clazz.newMethod$(C$, 'contains$O', function (object) {
var it = this.iterator ();
if (object != null) {
while (it.hasNext ()) {
if (object.equals$O (it.next ())) {
return true;
}}
} else {
while (it.hasNext ()) {
if (it.next () == null) {
return true;
}}
}return false;
});

Clazz.newMethod$(C$, 'containsAll$java_util_Collection', function (collection) {
var it = collection.iterator ();
while (it.hasNext ()) {
if (!this.contains$O (it.next ())) {
return false;
}}
return true;
});

Clazz.newMethod$(C$, 'isEmpty', function () {
return this.size () == 0;
});

Clazz.newMethod$(C$, 'remove$O', function (object) {
var it = this.iterator ();
if (object != null) {
while (it.hasNext ()) {
if (object.equals$O (it.next ())) {
it.remove ();
return true;
}}
} else {
while (it.hasNext ()) {
if (it.next () == null) {
it.remove ();
return true;
}}
}return false;
});

Clazz.newMethod$(C$, 'removeAll$java_util_Collection', function (collection) {
var result = false;
var it = this.iterator ();
while (it.hasNext ()) {
if (collection.contains$O (it.next ())) {
it.remove ();
result = true;
}}
return result;
});

Clazz.newMethod$(C$, 'retainAll$java_util_Collection', function (collection) {
var result = false;
var it = this.iterator ();
while (it.hasNext ()) {
if (!collection.contains$O (it.next ())) {
it.remove ();
result = true;
}}
return result;
});

Clazz.newMethod$(C$, 'toArray', function () {
var size = this.size ();
var index = 0;
var it = this.iterator ();
var array =  Clazz.newArray$('OA', 1, [size]);
while (index < size) {
array[index++] = it.next ();
}
return array;
});

Clazz.newMethod$(C$, 'toArray$TTA', function (contents) {
var size = this.size ();
var index = 0;
if (size > contents.length) {
var ct = contents.getClass ().getComponentType ();
contents = Clazz.newArray$ (ct, size);
}for (var entry, $entry = this.iterator (); $entry.hasNext () && ((entry = $entry.next ()) || true);) {
contents[index++] = entry;
}
if (index < contents.length) {
contents[index] = null;
}return contents;
});

Clazz.newMethod$(C$, 'toString', function () {
if (this.isEmpty ()) {
return "[]";
}var buffer = Clazz.$new(StringBuilder.construct$I,[this.size () * 16]);
buffer.append$C ('[');
var it = this.iterator ();
while (it.hasNext ()) {
var next = it.next ();
if (next !== this) {
buffer.append$O (next);
} else {
buffer.append$S ("(this Collection)");
}if (it.hasNext ()) {
buffer.append$S (", ");
}}
buffer.append$C (']');
return buffer.toString ();
});
})()
});

//Created 2017-08-17 10:33:15
