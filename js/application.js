(function(){var t,e,s,i=function(t,e){return function(){return t.apply(e,arguments)}};t=function(){function t(t){this.el=t,this.paste_listener=i(this.paste_listener,this),this.blur_listener=i(this.blur_listener,this),this.focus_listener=i(this.focus_listener,this),this.keydown_listener=i(this.keydown_listener,this),this.keypress_listener=i(this.keypress_listener,this),this.el.className=""+this.base_class+" focus",this.el.onpaste=this.paste_listener,this.cursor=new e(this.el),window.onkeypress=this.keypress_listener,window.onkeydown=this.keydown_listener,window.onkeyup=this.keyup_listener,window.onfocus=this.focus_listener,window.onblur=this.blur_listener}return t.prototype.base_class="canvas transition",t.prototype.keypress_listener=function(t){var e;return t.which!==13&&t.which!==32?(e=String.fromCharCode(t.which),this.cursor.type(e)):void 0},t.prototype.keydown_listener=function(t){switch(t.which){case 8:return this.cursor["delete"](t);case 9:return this.cursor.tab(t);case 13:return this.cursor.enter();case 32:return this.cursor.spacebar();case 37:return this.cursor.move_left();case 38:return this.cursor.move_up();case 39:return this.cursor.move_right();case 40:return this.cursor.move_down()}},t.prototype.focus_listener=function(){return this.el.className=""+this.base_class+" focus"},t.prototype.blur_listener=function(){return this.el.className=this.base_class},t.prototype.paste_listener=function(t){var e,s,i,r,n;for(s=t.clipboardData.getData("text/plain"),n=[],e=i=0,r=s.length;r>=0?r>i:i>r;e=r>=0?++i:--i)s[e]===" "?n.push(this.cursor.spacebar()):n.push(this.cursor.type(s[e]));return n},t}(),e=function(){function t(t){this.canvas=t,this.get_cursor_pos=i(this.get_cursor_pos,this),this.get_col_els=i(this.get_col_els,this),this.get_char_height=i(this.get_char_height,this),this.error=i(this.error,this),this.move_up=i(this.move_up,this),this.move_down=i(this.move_down,this),this.move_right=i(this.move_right,this),this.move_left=i(this.move_left,this),this["delete"]=i(this["delete"],this),this.enter=i(this.enter,this),this.spacebar=i(this.spacebar,this),this.tab=i(this.tab,this),this.type=i(this.type,this),this.el=document.createElement("div"),this.el.className="cursor",this.el.style.height=this.get_char_height()+"px",this.canvas.appendChild(this.el)}return t.prototype.pos=0,t.prototype.tab_size=4,t.prototype.type=function(t){var e;return window.getSelection().collapse(),e=document.createElement("div"),e.className="character",e.innerHTML=t,this.canvas.insertBefore(e,this.el),this.pos+=1},t.prototype.tab=function(t){var e,s,i,r;for(t.preventDefault(),window.getSelection().collapse(),r=[],e=s=0,i=this.tab_size;i>=0?i>s:s>i;e=i>=0?++s:--s)r.push(this.spacebar());return r},t.prototype.spacebar=function(){return this.type("&nbsp;")},t.prototype.enter=function(){var t;return window.getSelection().collapse(),this.pos+=1,t=document.createElement("br"),t.className="newline",this.canvas.insertBefore(t,this.el)},t.prototype["delete"]=function(t){var e,s,i,r,n,o,h,a,c,l;if(t.preventDefault(),a=window.getSelection(),a.toString().length===0)return e=this.canvas.children[this.pos-1],e?(this.pos-=1,this.canvas.removeChild(e)):this.error();for(n=a.getRangeAt(0),o=n.startContainer.parentNode,h=n.endContainer.parentNode,h!==this.canvas&&(this.canvas.insertBefore(this.el,h),this.pos=this.get_cursor_pos(),this.move_right()),s=Array.prototype.slice.call(this.canvas.children),i=s.indexOf(o),c=this.pos-i,e=this.canvas.children[this.pos-1],r=l=1;c>=1?c>=l:l>=c;r=c>=1?++l:--l)this.pos-=1,this.canvas.removeChild(e),e=this.canvas.children[this.pos-1];return a.collapse()},t.prototype.move_left=function(){var t;return window.getSelection().collapse(),this.pos>0?(t=this.canvas.children[this.pos-1],this.pos-=1,this.canvas.insertBefore(this.el,t)):this.error()},t.prototype.move_right=function(){var t,e;return window.getSelection().collapse(),this.pos<=this.canvas.children.length-2?(t=this.pos===this.canvas.children.length-2,e=this.canvas.children[this.pos+2],this.pos+=1,t?this.canvas.appendChild(this.el):this.canvas.insertBefore(this.el,e)):this.error()},t.prototype.move_down=function(){var t,e;return window.getSelection().collapse(),e=this.get_col_els(),t=e.indexOf(this.el),e[t+1]?e[t+1].offsetTop===this.el.offsetTop?e[t+2]?this.canvas.insertBefore(this.el,e[t+2]):this.canvas.appendChild(this.el):this.canvas.insertBefore(this.el,e[t+1]):this.canvas.appendChild(this.el),this.pos=this.get_cursor_pos()},t.prototype.move_up=function(){var t,e;return window.getSelection().collapse(),e=this.get_col_els(),t=e.indexOf(this.el),e[t-1]?this.canvas.insertBefore(this.el,e[t-1]):this.canvas.children[0]&&this.canvas.insertBefore(this.el,this.canvas.children[0]),this.pos=this.get_cursor_pos()},t.prototype.error=function(){var t;return this.el.className="cursor error",t=this.el,setTimeout(function(){return t.className="cursor"},500)},t.prototype.get_char_height=function(){var t,e;return t=document.createElement("div"),t.className="character",t.innerHTML="&nbsp;",this.canvas.appendChild(t),e=t.offsetHeight,this.canvas.removeChild(t),e},t.prototype.get_col_els=function(){var t,e,s,i,r,n;for(t=[],e=this.el.offsetLeft,n=this.canvas.children,i=0,r=n.length;r>i;i++)s=n[i],s.offsetLeft===e&&t.push(s);return t},t.prototype.get_cursor_pos=function(){var t;return t=Array.prototype.slice.call(this.canvas.children),t.indexOf(this.el)},t}(),s=document.querySelector(".canvas"),s=new t(s)}).call(this);