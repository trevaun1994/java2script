﻿$_L(["$wt.events.TypedEvent"],"$wt.custom.TextChangingEvent",null,function(){
c$=$_C(function(){
this.start=0;
this.newText=null;
this.replaceCharCount=0;
this.newCharCount=0;
this.replaceLineCount=0;
this.newLineCount=0;
$_Z(this,arguments);
},$wt.custom,"TextChangingEvent",$wt.events.TypedEvent);
$_K(c$,
function(source,e){
$_R(this,$wt.custom.TextChangingEvent,[source]);
this.start=e.start;
this.replaceCharCount=e.replaceCharCount;
this.newCharCount=e.newCharCount;
this.replaceLineCount=e.replaceLineCount;
this.newLineCount=e.newLineCount;
this.newText=e.text;
},"$wt.custom.StyledTextContent,$wt.custom.StyledTextEvent");
});
