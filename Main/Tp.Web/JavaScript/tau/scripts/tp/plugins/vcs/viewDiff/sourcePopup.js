define(["tp/codemirror/lib/codemirror","jQuery","tau/ui/behaviour/common/ui.behaviour.progressIndicator","tp/popup","tp/codemirror/mode/diff/diff","tp/codemirror/mode/clike/clike","tp/codemirror/mode/css/css","tp/codemirror/mode/htmlmixed/htmlmixed","tp/codemirror/mode/javascript/javascript","tp/codemirror/mode/perl/perl","tp/codemirror/mode/php/php","tp/codemirror/mode/python/python","tp/codemirror/mode/ruby/ruby","tp/codemirror/mode/xml/xml"],function(e,t,o){var r=function(){this._ctor()};return r.prototype={emptyText:"No data to display",_ctor:function(){this.placeholder=t('<div class="_viewSourcePopup viewSourcePopup" />'),this.codeViewer=e(this.placeholder[0],{readOnly:!0,lineNumbers:!0})},resizeCodeViewer:function(){var e=t("._viewSourcePopup"),o=e.height(),r=e.width();t(".CodeMirror-scroll").css({height:o,width:r})},_createPopup:function(){if(!this.popup){var e=t.proxy(this.resizeCodeViewer,this);this.popup=this.placeholder.popup({autoOpen:!1,minWidth:300,parentClassName:"vcsSource",open:e,resize:e})}},openPopup:function(e,t){this.codeViewer.setValue(t),this._createPopup(),this.popup.popup("option","title",e),this.popup.popup("open"),this.codeViewer.refresh()},view:function(e,t,r){t=t||this.emptyText;var i="File: "+r+'<br /><span class="subTitle">Revision: '+e+"</span>";this.placeholder.removeClass("_refreshing"),o.get(this.placeholder).hide(),this._setModeByFileExtension(r),this.openPopup(i,t)},loading:function(){this.placeholder.addClass("_refreshing"),o.get(this.placeholder).show(),this.openPopup("","")},_getExtension:function(e){return e.substr(e.lastIndexOf(".")+1)},_setModeByFileExtension:function(e){var t=this._getExtension(e),o="clike";switch(t){case"css":o="text/css";break;case"cs":o="text/x-csharp";break;case"c":case"h":o="text/x-csrc";break;case"cpp":o="text/x-c++src";break;case"html":case"htm":case"shtml":o="text/html";break;case"js":o="text/javascript";break;case"java":o="text/x-java";break;case"perl":o="text/x-perl";break;case"php":case"phtml":case"phl":o="application/x-httpd-php";break;case"py":o="text/x-python";break;case"rb":o="text/x-ruby";break;case"xml":case"config":o="application/xml";break;default:o="null"}this.codeViewer.setOption("mode",o)}},new r});