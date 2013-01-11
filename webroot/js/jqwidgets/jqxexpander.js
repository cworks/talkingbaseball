/*
jQWidgets v2.5.5 (2012-Nov-28)
Copyright (c) 2011-2012 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxExpander","",{});a.extend(a.jqx._jqxExpander.prototype,{defineInstance:function(){this.expandAnimationDuration=350,this.collapseAnimationDuration=400,this.expanded=true;this.disabled=false;this.animationType="slide";this.headerPosition="top";this.toggleMode="click";this.arrowPosition="right";this.showArrow=true;this.height="auto";this.width="auto";this._content=null;this.enableHover=true;this.toggleBehaviour="header";this._header=null;this._triggerMethod=undefined;this._contentResizeMethod=undefined;this._firstSlideExpand=true;this._events=["expanding","expanded","collapsing","collapsed"];this._directions={left:"right",right:"left",top:"bottom",bottom:"top"};this._invalidArgumentExceptions={invalidExpandAnimationDuration:"The duration of the expanding animation is invalid.",invalidCollapseAnimationDuration:"The duration of the collapsing animation is invalid.",invalidAnimationType:"The animation type is invalid.",invalidHeaderPosition:"The header position is invalid.",invalidToggleMode:"The toggle mode is invalid.",invalidArrowPosition:"The arrow position is invalid.",invalidExpanderSize:"This size is not valid.",invalidExpanderStructure:"Please add 2 sub div elements to your html that will represent the expander header and content."}},createInstance:function(b){this.host.addClass(this.toThemeProperty("jqx-widget"));this.host.addClass(this.toThemeProperty("jqx-expander"));this.host.css("visibility","hidden");this._header=this.host.children("."+this.toThemeProperty("jqx-expander-header",true));this._content=this.host.children("."+this.toThemeProperty("jqx-expander-content",true));this._setExpanderSize();var f=this.host.children("div");if(f.length>0){if(this._header.length==0){this._header=a(f[0]);this._header.addClass(this.toThemeProperty("jqx-widget-header"));this._header.addClass(this.toThemeProperty("jqx-expander-header"))}if(this._content.length==0&&f.length>1){this._content=a(f[1]);this._content.addClass(this.toThemeProperty("jqx-widget-content"));this._content.addClass(this.toThemeProperty("jqx-expander-content"))}}try{if(this._header==null||this._content==null){throw this._invalidArgumentExceptions.invalidExpanderStructure}}catch(c){alert(c.Data)}this._createExpander();var e=this;if(this.expanded){this._header.addClass(this.toThemeProperty("jqx-expander-header-expanded"));this._content.addClass(this.toThemeProperty("jqx-expander-content-expanded"));this._header.addClass(this.toThemeProperty("jqx-fill-state-pressed"));var d=this.host.find(".jqx-expander-arrow");d.addClass(this.toThemeProperty("jqx-expander-arrow-expanded"))}this.host.css("visibility","visible")},_setExpanderSize:function(){if(this.width!=null&&this.width.toString().indexOf("px")!=-1){this.host.width(this.width)}else{if(this.width!=undefined&&!isNaN(this.width)){this.host.width(this.width)}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){this.host.height(this.height)}else{if(this.height!=undefined&&!isNaN(this.height)){this.host.height(this.height)}}},_createExpander:function(){var c=this._content[0];a.data(c,"isAnimating",false);this._firstSlideExpand=true;this._validateProperties();this._render(true);this._applyTheme();this._performLayout();this._addEventHandlers();if(!this.expanded){this._absoluteCollapse()}var b=this},_absoluteCollapse:function(b){var b=b||this;if(b.animationType!=="none"){b._content.css("visibility","hidden")}if(b.animationType==="slide"){b._slideCollapse(0)}else{if(b.animationType==="fade"){b._fadeCollapse(0)}else{if(b.animationType==="none"){b._toggleCollapse()}}}if((!b.height||b.height==="auto")&&b.animationType!=="none"){b._content.height(0)}this._header.removeClass(this.toThemeProperty("jqx-expander-header-expanded"));this._content.removeClass(this.toThemeProperty("jqx-expander-content-expanded"));b._raiseEvent(3)},_validateProperties:function(){try{if(this.expandAnimationDuration<=0){throw this._invalidArgumentExceptions.invalidExpandAnimationDuration}if(this.collapseAnimationDuration<=0){throw this._invalidArgumentExceptions.invalidCollapseAnimationDuration}if((parseInt(this.width)<=0||parseInt(this.height)<=0)&&(this.width!="auto"&&this.height!="auto"||this.width!=undefined&&this.height!=undefined)){throw this._invalidArgumentExceptions.invalidExpanderSize}if(this.animationType!="slide"&&this.animationType!="fade"&&this.animationType!="none"){throw this._invalidArgumentExceptions.invalidAnimationType}if(this.headerPosition!="top"&&this.headerPosition!="bottom"){throw this._invalidArgumentExceptions.invalidHeaderPosition}if(this.toggleMode!="click"&&this.toggleMode!="none"&&this.toggleMode!="dblclick"&&this.toggleMode!="mouseenter"){throw this._invalidArgumentExceptions.invalidToggleMode}if(this.arrowPosition!="left"&&this.arrowPosition!="right"){throw this._invalidArgumentExceptions.invalidArrowPosition}}catch(b){alert(b)}},_addEventHandlers:function(b){var c=this;var g=this._content;var f=this._header.children(this.toThemeProperty(".jqx-expander-arrow",true));if(this.toggleBehaviour!="arrow"){this.removeHandler(this._header,"click");this.removeHandler(this._header,"dblclick");this.removeHandler(this._header,"mouseover")}else{this.removeHandler(f,"click");this.removeHandler(f,"dblclick");this.removeHandler(f,"mouseover")}if(b!=undefined&&b!=this.toggleBehavior){if(b=="arrow"){this.removeHandler(f,"click");this.removeHandler(f,"dblclick");this.removeHandler(f,"mouseover")}else{this.removeHandler(this._header,"click");this.removeHandler(this._header,"dblclick");this.removeHandler(this._header,"mouseover")}}this.removeHandler(this._header,"mouseenter");this.removeHandler(this._header,"mouseleave");this.removeHandler(this._header,"mousedown");this.removeHandler(this._header,"mouseup");this.removeHandler(this._header,"selectstart");if(this._triggerMethod===undefined){c._triggerMethod=function(h){c._expanderTrigger(c);return false}}var e=this.toggleBehaviour=="arrow"?f:this._header;this.addHandler(this._header,"mousedown",function(){return false});this.addHandler(this._header,"mouseup",function(){return false});this.addHandler(this._header,"selectstart",function(){return false});switch(this.toggleMode){case"click":this.addHandler(e,"click",this._triggerMethod);this._header.removeClass(this.toThemeProperty("jqx-expander-header-toggle-none"));break;case"dblclick":this.addHandler(e,"dblclick",this._triggerMethod);this._header.removeClass(this.toThemeProperty("jqx-expander-header-toggle-none"));break;case"mouseenter":this.addHandler(e,"mouseover",this._triggerMethod);this._header.removeClass(this.toThemeProperty("jqx-expander-header-toggle-none"));break;case"none":this._header.addClass(this.toThemeProperty("jqx-expander-header-toggle-none"));break}this.removeHandler(a(window),"resize.expander"+this.element.id);this.addHandler(a(window),"resize.expander"+this.element.id,function(){if(a.data(g,"isAnimating")==false){c._performLayout()}});var d=a.jqx.mobile.isTouchDevice();this.addHandler(this._header,"mouseenter",function(){if(!c.disabled&&c.enableHover&&!d){c._header.addClass(c.toThemeProperty("jqx-expander-header-hover"));c._header.addClass(c.toThemeProperty("jqx-fill-state-hover"))}});this.addHandler(this._header,"mouseleave",function(){if(!c.disabled&&c.enableHover&&!d){c._header.removeClass(c.toThemeProperty("jqx-expander-header-hover"));c._header.removeClass(c.toThemeProperty("jqx-fill-state-hover"))}})},_expanderTrigger:function(b){if(!b.disabled){if(b.expanded){b.collapse()}else{b.expand()}}},_render:function(b){if(b){this._headerRender()}switch(this.headerPosition){case"top":this._header.detach();this._content.detach();this._header.appendTo(this.host);this._content.appendTo(this.host);break;case"bottom":this._header.detach();this._content.detach();this._content.appendTo(this.host);this._header.appendTo(this.host);break}this._content.wrap('<div class="jqx-expander-contentWrapper" style="background-color: transparent; margin: 0; padding: 0; position: relative; overflow: hidden;">');this.$contentWrapper=this._content.closest(".jqx-expander-contentWrapper")},_performLayout:function(){if(!a.data(this._content[0],"isAnimating")){var b=this.host.width();this._headerPerformLayout();if(this.height&&this.height!=="auto"){this.host.height(parseInt(this.height)+"px");var c=parseInt(this._content.css("border-top-width"))+parseInt(this._content.css("border-bottom-width"))+parseInt(this._content.css("padding-bottom"))+parseInt(this._content.css("padding-top"));this._content.height(parseInt(this.host.innerHeight())-parseInt(this._header.outerHeight())-c);a.data(this._content,"contentHeight",this._content.height())}else{this._header.height("auto");this._content.height("auto");this.host.height("auto");a.data(this._content,"contentHeight","auto")}if(this.width){if(this.width=="auto"&&a.browser.msie&&a.browser.version<8){this.host.width(b)}else{this.host.width(this.width)}}else{this.host.width("100%")}return}},_headerRender:function(){var c=a('<div class="'+this.toThemeProperty("jqx-expander-arrow")+'"></div>');var b=a('<div class="'+this.toThemeProperty("jqx-expander-header-content")+'"></div>');b.html(this._header.html());this._header.empty();c.appendTo(this._header);b.appendTo(this._header);if(this.showArrow){var e="jqx-expander-arrow-"+((this.expanded)?(this._directions[this.headerPosition]):(this.headerPosition));var d=e;c.addClass(this.toThemeProperty(d))}},_headerPerformLayout:function(){var g=this._header.children(this.toThemeProperty(".jqx-expander-arrow",true));var f=this._header.children(this.toThemeProperty(".jqx-expander-header-content",true));var c=g.outerWidth();var e=this._header.innerWidth();switch(this.arrowPosition){case"left":g.removeClass(this.toThemeProperty("jqx-expander-arrow-align-right"));g.addClass(this.toThemeProperty("jqx-expander-arrow-align-left"));g.css("float","left");break;case"right":g.removeClass(this.toThemeProperty("jqx-expander-arrow-align-left"));g.addClass(this.toThemeProperty("jqx-expander-arrow-align-right"));g.css("float","right");break}this._fitContent(this,g,f);var b=this._header.height();var d=parseInt(b)/2-parseInt(f.height())/2;f.css("margin-top",d+"px");var d=parseInt(b)/2-parseInt(g.height())/2;g.css("margin-top",d+"px")},_fitContent:function(d,c,b){},_showSpecificArrowDirection:function(b){this._header.children(this.toThemeProperty(".jqx-expander-arrow",true)).removeClass(this.toThemeProperty("jqx-expander-arrow-"+this._directions[b]));this._header.children(this.toThemeProperty(".jqx-expander-arrow",true)).addClass(this.toThemeProperty("jqx-expander-arrow-"+b))},_applyTheme:function(){if(this.disabled){this.host.addClass(this.toThemeProperty("jqx-expander-disabled"));this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"));this._header.addClass(this.toThemeProperty("jqx-expander-header-disabled"));this._content.addClass(this.toThemeProperty("jqx-expander-content-disabled"))}switch(this.headerPosition){case"top":this._header.removeClass(this.toThemeProperty("jqx-expander-header-bottom"));this._content.removeClass(this.toThemeProperty("jqx-expander-content-top"));this._header.addClass(this.toThemeProperty("jqx-expander-header-top"));this._content.addClass(this.toThemeProperty("jqx-expander-content-bottom"));break;case"bottom":this._header.removeClass(this.toThemeProperty("jqx-expander-header-top"));this._content.removeClass(this.toThemeProperty("jqx-expander-content-bottom"));this._header.addClass(this.toThemeProperty("jqx-expander-header-bottom"));this._content.addClass(this.toThemeProperty("jqx-expander-content-top"));break}},destroy:function(){this.host.removeClass()},_raiseEvent:function(g,c){if(c==undefined){c={owner:null}}var d=this._events[g];args=c;args.owner=this;var f=false;if(g==1){if(this.showArrow){this._showSpecificArrowDirection(this._directions[this.headerPosition])}this.expanded=true}if(g==3){if(this.showArrow){this._showSpecificArrowDirection(this.headerPosition)}this.expanded=false}var e=new jQuery.Event(d);e.owner=this;e.cancel=f;var b=this.host.trigger(e);if(!e.cancel){if(g==0){if(this.showArrow){this._showSpecificArrowDirection(this._directions[this.headerPosition])}return e.cancel}if(g==2){if(this.showArrow){this._showSpecificArrowDirection(this.headerPosition)}return e.cancel}}return b},collapse:function(){var b=this._raiseEvent(2);if(b){return}if(this.element!=null){if(this.animationType!="none"){a.data(this._content[0],"isAnimating",true);this._content.css("visibility","visible");if(!this.height||this.height==="auto"){this._content.height(a.data(this._content,"contentHeight"))}this._content.stop();if(this.animationType=="slide"){this._slideCollapse(this.collapseAnimationDuration,true)}else{if(this.animationType=="fade"){this._fadeCollapse(this.collapseAnimationDuration,true)}}}else{this._toggleCollapse(true)}}this._header.removeClass(this.toThemeProperty("jqx-expander-header-expanded"));this._header.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));this._content.removeClass(this.toThemeProperty("jqx-expander-content-expanded"));var c=this.host.find(".jqx-expander-arrow");c.removeClass(this.toThemeProperty("jqx-expander-arrow-expanded"))},_toggleCollapse:function(c){var b=this;a(b._content).hide(0,function(){b._collapseCallback(b,c)})},_fadeCollapse:function(d,c){var b=this;if(!this.height||this.height==="auto"){a(b._content).fadeOut(d,function(){b._collapseCallback(b,c)})}else{a(b._content).fadeTo(d,0.01,function(){b._collapseCallback(b,c)})}},_collapseCallback:function(c,b){a.data(c._content[0],"isAnimating",false);if(b){c._raiseEvent(3);c._content.css("height","0");c._content.css("visibility","hidden")}},_slideCollapse:function(g,f){var d=this;var e=d._content;var c=a(d._header);var b=Math.max(2,parseInt(c.css("border-bottom-width"))+parseInt(c.css("border-top-width")));if(isNaN(b)){b=0}if(a.browser.mozilla){b=1}e.stop();switch(this.headerPosition){case"top":if(g==0){a(e).css({"margin-top":-parseInt(e.height())-b+"px"})}else{a(e).animate({"margin-top":-parseInt(e.height())-b+"px"},g,"easeInOutSine",function(){d._collapseCallback(d,f)})}break;case"bottom":if(this.height&&this.height!=="auto"){a(e).animate({bottom:-parseInt(e.height())+"px"},g,"linear",function(){d._collapseCallback(d,f)})}else{a(e).animate({"margin-bottom":-parseInt(e.height())+"px"},g,"easeInOutSine",function(){d._collapseCallback(d,f)})}break}},expand:function(){this._raiseEvent(0);if(this.element!=null){if(this.animationType!="none"){this._content.css("display","block");a.data(this._content[0],"isAnimating",true);this._content.css("visibility","visible");if((!this.height||this.height==="auto")){this._content.height(a.data(this._content,"contentHeight"))}else{if(this._content.height()==0){this._content.height(this._content.height(a.data(this._content,"contentHeight")))}}this._content.stop();if(this.animationType=="slide"){this._slideExpand(this.expandAnimationDuration,true)}else{if(this.animationType=="fade"){this._fadeExpand(this.expandAnimationDuration,true)}}}else{this._content.css("display","none");this._toggleExpand(true)}}this._header.addClass(this.toThemeProperty("jqx-expander-header-expanded"));this._header.addClass(this.toThemeProperty("jqx-fill-state-pressed"));this._content.addClass(this.toThemeProperty("jqx-expander-content-expanded"));var b=this.host.find(".jqx-expander-arrow");b.addClass(this.toThemeProperty("jqx-expander-arrow-expanded"))},_toggleExpand:function(c){var b=this;this._content.css("visibility","visible");if((!this.height||this.height==="auto")){this._content.height(a.data(this._content,"contentHeight"))}else{if(this._content.height()==0){this._content.height(this._content.height(a.data(this._content,"contentHeight")))}}a(b._content).show(0,function(){b._expandCallback(b,c)})},_fadeExpand:function(d,c){var b=this;if(!this.height||this.height==="auto"){a(b._content).fadeIn(d,function(){b._expandCallback(b,c)})}else{a(b._content).fadeTo(d,1,function(){b._expandCallback(b,c)})}},_expandCallback:function(c,b){a.data(c._content[0],"isAnimating",false);if(b){c._raiseEvent(1)}},_slideExpand:function(e,d){if(this._firstSlideExpand){this._slideCollapse(0,false);this._firstSlideExpand=false}var b=this;var c=this._content;c.stop();switch(this.headerPosition){case"top":if(e==0){a(c).css({"margin-top":"0px"})}else{a(c).animate({"margin-top":"0px"},e,"easeInOutSine",function(){b._expandCallback(b,d)})}break;case"bottom":if(this.height&&this.height!=="auto"){a(c).animate({bottom:"0px"},e,"linear",function(){b._expandCallback(b,d)})}else{a(c).animate({"margin-bottom":"0px"},e,"easeInOutSine",function(){b._expandCallback(b,d)})}break}},setContentHeight:function(b){this._content.height(b);a.data(this._content,"contentHeight",b);if(b==="auto"){this._content.css("minHeight",0)}if(!this.expanded){this._absoluteCollapse()}},disable:function(){this.disabled=true;this._applyTheme()},enable:function(){this.disabled=false;this.host.removeClass(this.toThemeProperty("jqx-expander-disabled"));this._header.removeClass(this.toThemeProperty("jqx-expander-header-disabled"));this._content.removeClass(this.toThemeProperty("jqx-expander-content-disabled"))},setHeaderContent:function(c){if(c){var b=this._header.children(this.toThemeProperty(".jqx-expander-header-content",true));b.html(c);this._performLayout()}},setContent:function(b){if(b){this._content.html(b);this._performLayout()}},getContent:function(){if(this._content!=null){return this._content.html()}return null},getHeaderContent:function(){return this._header.children(this.toThemeProperty(".jqx-expander-header-content",true)).html()},propertyChangedHandler:function(g,r,f,o){if(this.isInitialized==undefined||this.isInitialized==false){return}if(r=="theme"){this.host.removeClass();this.host.addClass(this.toThemeProperty("jqx-widget"));this.host.addClass(this.toThemeProperty("jqx-expander"));this._header.removeClass();this._header.addClass(this.toThemeProperty("jqx-widget-header"));this._header.addClass(this.toThemeProperty("jqx-expander-header"));this._content.removeClass();this._content.addClass(this.toThemeProperty("jqx-widget-content"));this._content.addClass(this.toThemeProperty("jqx-expander-content"));var q=this.host.find(".jqx-expander-arrow");var m=this.host.find(".jqx-expander-header-content");q.removeClass();q.addClass(this.toThemeProperty("jqx-expander-arrow"));m.addClass(this.toThemeProperty("jqx-expander-header-content"));this._applyTheme();if(this.showArrow){var k="jqx-expander-arrow-"+((this.expanded)?(this._directions[this.headerPosition]):(this.headerPosition));var e=k;q.addClass(this.toThemeProperty(e))}this._headerPerformLayout()}if(r=="showArrow"){var p=this.host.find("."+this.toThemeProperty("jqx-expander-arrow",true));if(o){p.css("visibility","visible")}else{p.css("visibility","hidden")}}else{if(r=="arrowPosition"){this._headerPerformLayout()}else{if(r=="toggleMode"){this._addEventHandlers()}else{if(r=="toggleBehavior"){this._addEventHandlers(f)}else{if(r=="disabled"){this.disabled=o;if(o){this.host.addClass(this.toThemeProperty("jqx-expander-disabled"));this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"));this._header.addClass(this.toThemeProperty("jqx-expander-header-disabled"));this._content.addClass(this.toThemeProperty("jqx-expander-content-disabled"))}else{this.host.removeClass(this.toThemeProperty("jqx-expander-disabled"));this.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled"));this._header.removeClass(this.toThemeProperty("jqx-expander-header-disabled"));this._content.removeClass(this.toThemeProperty("jqx-expander-content-disabled"))}}else{if(r=="expanded"&&!o){var s=this.expandAnimationDuration;var b=this.collapseAnimationDuration;this.collapseAnimationDuration=0;this.expandAnimationDuration=0;this.collapse();this.expandAnimationDuration=s;this.collapseAnimationDuration=b}else{if(r=="expanded"&&o){var d=undefined;if(r=="expanded"&&o){d=this._content.height()}if(d){this._content.height(d);a.data(this._content,"contentHeight",d)}var s=this.expandAnimationDuration;var b=this.collapseAnimationDuration;this.collapseAnimationDuration=0;this.expandAnimationDuration=0;this.expand();this.expandAnimationDuration=s;this.collapseAnimationDuration=b}else{if(r=="headerPosition"){var j=a("<div></div>").html(this._header.children(this.toThemeProperty(".jqx-expander-header-content",true)).html());var l=a("<div></div>").html(this._content.html());var c=this._header.attr("class").split(/\s+/);var n=this._content.attr("class").split(/\s+/);var d=undefined;if(r=="expanded"&&o){d=this._content.height()}this.$contentWrapper.detach();this._content.detach();this._header.detach();this._content=l;this._header=j;this._header.addClass(this.toThemeProperty("jqx-widget-header"));this._header.addClass(this.toThemeProperty("jqx-expander-header"));this._content.addClass(this.toThemeProperty("jqx-widget-content"));this._content.addClass(this.toThemeProperty("jqx-expander-content"));for(var h=0;h<c.length;h++){this._header.addClass(c[h])}for(var h=0;h<n.length;h++){this._content.addClass(n[h])}this._createExpander();if(d){this._content.height(d);a.data(this._content,"contentHeight",d)}}}}}}}}}}})})(jQuery);