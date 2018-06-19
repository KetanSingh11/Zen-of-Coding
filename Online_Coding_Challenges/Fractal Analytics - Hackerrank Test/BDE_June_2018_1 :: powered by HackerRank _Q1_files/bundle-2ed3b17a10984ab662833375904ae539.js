!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.EditorCustomInput=t(require("react")):e.EditorCustomInput=t(e.React)}(this,function(e){return function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};return t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=12)}([function(t,a){t.exports=e},function(e,t,a){"use strict";var n=a(0),r=a(3),s=a(7);a(10),a(11);var i={INTEGER:/^[+-]?[0-9]+$/,FLOAT:/^[+-]?([0-9]*[.])?[0-9]+$/,LONG_INTEGER:/^[+-]?[0-9]+$/,STRING:/.*?$/,CHARACTER:/^.$/},o={INTEGER_ARRAY:"INTEGER",LONG_INTEGER_ARRAY:"LONG_INTEGER",FLOAT_ARRAY:"FLOAT",STRING_ARRAY:"STRING",INTEGER_SINGLY_LINKED_LIST:"INTEGER",FLOAT_SINGLY_LINKED_LIST:"FLOAT",STRING_SINGLY_LINKED_LIST:"STRING",CHARACTER_SINGLY_LINKED_LIST:"CHARACTER",INTEGER_DOUBLY_LINKED_LIST:"INTEGER",FLOAT_DOUBLY_LINKED_LIST:"FLOAT",STRING_DOUBLY_LINKED_LIST:"STRING",CHARACTER_DOUBLY_LINKED_LIST:"CHARACTER"},l=n.createClass({displayName:"Main",getDefaultProps:function(){return{currentData:"",datatypes:null,modifiedTestcase:null,onChange:function(){}}},getInitialState:function(){return{currentComponent:this.props.Config.default_view,currentData:this.props.currentData,datatypes:this.props.datatypes,modifiedTestcase:this.props.modifiedTestcase,errorMap:{}}},getValue:function(){return this.state.currentData},getCurrentComponent:function(){return this.state.currentComponent},componentWillMount:function(){this.showDatatypes()},validateDatatype:function(e,t){return i[e].test(t)},handleRawInput:function(e){for(var t=this.state.datatypes,a=e.split("\n"),n=[],r={},s=0,i=0;i<t.length;i++){var o=t[i].type,l=[];if(o.match(/ARRAY/)||o.match(/LINKED_LIST/)){var u=o.replace("_"," ").toLowerCase();if(a[s]){var p=Number(a[s]);if(s++,isNaN(p)||0>p)r[t[i].name+"_size"]="Invalid size for "+u+" "+t[i].name,l[0]=0;else{for(var c=0,d=0;p>d&&null!=a[s+d];d++)c++,l[d+1]=a[s+d],(o.match(/INTEGER/)||o.match(/FLOAT/)||o.match(/CHARACTER/))&&(r=this.checkValidationMultiLineDatatype(l[d+1],r,t[i],d));s+=d,p>c&&(r[t[i].name+"_ele"]="Only "+c+"/"+p+" values have been entered for "+u+" "+t[i].name),p>=0&&(l[0]=c)}}else s++}else a[s]&&(l=[a[s]]),s++,l.length&&(this.validateDatatype(o,l)||(r[t[i].name]="Enter valid data for "+o.replace("_"," ").toLowerCase()+" "+t[i].name));n[i]={type:o,value:l}}s<a.length&&(r.data_overflow="Data entered is more than required"),this.setState({errorMap:r,currentData:e,modifiedTestcase:n}),this.props.onChange(e)},handleVisualInput:function(e,t){var a=!1,n=this.state,r=(n.modifiedTestcase,n.errorMap,n.datatypes,Object.assign({},this.state.modifiedTestcase)),s=Object.assign({},this.state.errorMap);null==r&&(r=[]);var i=Object.assign({},this.state.datatypes[e]);if(t.length&&(i.type.match(/ARRAY/)||i.type.match(/LINKED_LIST/))){if(i.type.replace("_"," ").toLowerCase(),delete s[i.name+"_size"],r[e]&&r[e].value)for(var o=r[e].value,l=0;l<o[0];l++)delete s[i.name+"_invalid_element"+l];for(var l=0;l<t[0];l++)(i.type.match(/INTEGER/)||i.type.match(/FLOAT/)||i.type.match(/CHARACTER/))&&(s=this.checkValidationMultiLineDatatype(t[l+1],s,i,l));delete s[i.name+"_ele"]}else t.length&&!this.validateDatatype(i.type,t)&&(a=!0,s[i.name]||(s[i.name]="Enter valid data for "+i.type.replace("_"," ").toLowerCase()+" "+i.name));a||delete s[i.name],r[e].value=t,this.setState({modifiedTestcase:r});for(var u=this.state.modifiedTestcase,p=Object.keys(u).map(function(e){return u[e]}),c=[],d=0;d<p.length;d++)r[d].value.length>1?c[d]=p[d].value.join("\n"):c[d]=p[d].value;var h=c.join("\n").trimRight();this.setState({errorMap:s}),this.setState({currentData:h}),this.props.onChange(c)},checkValidationMultiLineDatatype:function(e,t,a,n){var r=o[a.type];return this.validateDatatype(r,e)&&""!=e?(delete t[a.name+"_invalid_element"+n],t):(t[a.name+"_invalid_element"+n]="Enter valid data for "+a.type.split("_").join(" ").toLowerCase()+" "+a.name+" ["+n+"]",t)},showDatatypes:function(){for(var e=this.props.Config.arguments.length,t=[],a=0;e>a;a++)t[a]={type:this.props.Config.arguments[a].type,name:this.props.Config.arguments[a].name};this.setState({datatypes:t});for(var n=[],a=0;a<t.length;a++)n[a]={type:t[a].type,value:[]},this.setState({modifiedTestcase:n})},setCurrentCompState:function(e,t){if(t.preventDefault(),this.setState({currentComponent:e}),"visual"==e){for(var a=this.state.modifiedTestcase,n=Object.keys(a).map(function(e){return a[e]}),r=[],s=0;s<n.length;s++)n[s].value.length>1?r[s]=n[s].value.join("\n"):r[s]=n[s].value;var i=r.join("\n").trimRight(),o=this.state,l=o.errorMap,u=o.datatypes;delete l.data_overflow;for(var s=0;s<u.length;s++)delete l[u[s].name+"_size"],delete l[u[s].name+"_ele"];this.setState({currentData:i,errorMap:l})}},render:function(){var e=null,t=null,a=this.state.errorMap;if(Object.keys(a).length){var i=[];for(var o in a)i.push(n.createElement("li",null,a[o]));e=n.createElement("div",{className:"error"},"Error: ",n.createElement("ul",null,i)),t=n.createElement("div",{className:"error"},"Error: ",n.createElement("ul",null,i))}var l=this.state,u=l.currentData,p=l.datatypes,c=l.modifiedTestcase,d="",h="";return h=n.createElement("div",{className:"msT nav "},n.createElement("a",{href:"#","data-analytics":"raw-format",onClick:this.setCurrentCompState.bind(this,"raw"),className:"links "+("raw"===this.state.currentComponent?"link-active":"link-unactive")},"Raw Format"),n.createElement("a",{href:"#","data-analytics":"visual-format",onClick:this.setCurrentCompState.bind(this,"visual"),className:"links "+("visual"===this.state.currentComponent?"link-active":"link-unactive")},"Visual Format"),n.createElement("span",{className:"quick_badge fnt-sz-small red","data-placement":"right"},"beta")),d="raw"===this.state.currentComponent?n.createElement("div",{className:"outer-border"},n.createElement("div",{className:"old-format",id:"old"},n.createElement(r,{data:u,onNewText:this.handleRawInput,show_error:this.state.errorMap})),e):n.createElement("div",{className:"outer-border"},n.createElement("div",{className:"new-format",id:"new"},n.createElement(s,{data:c,onNewText:this.handleVisualInput,show_error:this.state.errorMap,functionName:this.props.Config.function_name,datatypes:p}),n.createElement("br",null)),t),n.createElement("div",{className:"customInputV2"},n.createElement("div",{className:"container-fluid"},n.createElement("div",{className:"visual-div"},h,d)))}});e.exports=l},function(e,t,a){"use strict";var n=a(0),r=a(9),s=n.createClass({displayName:"ArrayNewFormat",getDefaultProps:function(){},getInitialState:function(){return{tag:"",data:[],inputProps:{className:"react-tagsinput-input",placeholder:""}}},handleChange:function(e){this.setState({data:e},function(){this.onChange()})},onChange:function(){var e=this.state.data,t=e.length||0,e=[t].concat(e);this.props.onTextChange(this.props.index,e)},render:function(){var e=this.props,t=e.data,a=e.name,s=e.show_error,i=e.arrayType,o=t[0]>=0?t[0]:0,l=t.slice(1),u=i.toLowerCase().split("_").join(" "),p=Object.keys(s),c=!0;return p.forEach(function(e,t){e.split("_")[0]===a&&(c=!1)}),n.createElement("div",{className:"inner-div "},n.createElement("label",{className:"func-type"},n.createElement("span",{className:"array-type"},u),n.createElement("span",{className:"func-params"},"\xa0",a),n.createElement("span",{className:"array-params"},"Length: ",o)),n.createElement("div",{className:c?"":"red-array"},n.createElement(r,{value:l,onChange:this.handleChange,inputValue:this.state.tag,onChangeInput:this.handleChangeInput,inputProps:this.state.inputProps,preventSubmit:!1}),n.createElement("span",{className:"disappear func-name"},"Press enter to add elements")))}});e.exports=s},function(e,t,a){"use strict";var n=a(0),r=n.createClass({displayName:"CurrentFormat",onTextChange:function(e){var t=e.target.value;this.props.onNewText(t)},render:function(){var e=this.props.data,t=e;e||(t="");var a=Object.keys(this.props.show_error).length;return n.createElement("div",{className:"msB"},n.createElement("textarea",{className:a?"red":"",value:t,onChange:this.onTextChange,placeholder:"Enter the raw STDIN input"}))}});e.exports=r},function(e,t,a){"use strict";var n=a(0),r=n.createClass({displayName:"FloatNewFormat",onChange:function(e){var t=[e.target.value];this.props.onTextChange(this.props.index,t)},render:function(){var e=this.props.data,t=this.props.name,a=e[0]||"",r=this.props.show_error,s=!1;return r[t]&&(s=!0),n.createElement("div",{className:"inner-div-single"},n.createElement("div",{className:"params"},n.createElement("label",{className:"func-type float-left"},"Float ",n.createElement("span",{className:"func-params"},t))),n.createElement("input",{type:"text",className:"text-width "+(s?"red":""),value:a,onChange:this.onChange}))}});e.exports=r},function(e,t,a){"use strict";var n=a(0),r=n.createClass({displayName:"IntegerNewFormat",onChange:function(e){var t=[e.target.value];this.props.onTextChange(this.props.index,t)},render:function(){var e=this.props.data,t=this.props.name,a=e[0]||"",r=this.props.show_error,s=!1;return r[t]&&(s=!0),n.createElement("div",{className:"inner-div-single"},n.createElement("div",{className:"params"},n.createElement("label",{className:"func-type float-left"},"Integer ",n.createElement("span",{className:"func-params"},t))),n.createElement("input",{type:"text",className:"text-width "+(s?"red":""),value:a,onChange:this.onChange}))}});e.exports=r},function(e,t,a){"use strict";var n=a(0),r=n.createClass({displayName:"LongIntegerNewFormat",onChange:function(e){var t=[e.target.value];this.props.onTextChange(this.props.index,t)},render:function(){var e=this.props.data,t=this.props.name,a=e[0]||"",r=this.props.show_error,s=!1;return r[t]&&(s=!0),n.createElement("div",{className:"inner-div-single"},n.createElement("div",{className:"params"},n.createElement("label",{className:"func-type float-left"},"Long Integer ",n.createElement("span",{className:"func-params"},t))),n.createElement("input",{type:"text",className:"text-width "+(s?"red":""),value:a,onChange:this.onChange}))}});e.exports=r},function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var r=a(0),s=a(5),i=a(8),o=a(4),l=a(6),u=a(2),p=r.createClass({displayName:"NewVisualFormat",handleNewText:function(e,t){this.props.onNewText(e,t)},render:function(){var e=this.props,t=e.data,a=e.datatypes,p=e.show_error,c=[],d=this;return null!=a?a.forEach(function(e,a){"INTEGER"===e.type?c.push(r.createElement(s,{name:e.name,key:a,data:t[a].value,index:a,onTextChange:d.handleNewText,show_error:p})):"STRING"===e.type?c.push(r.createElement(i,{name:e.name,key:a,data:t[a].value,index:a,onTextChange:d.handleNewText,show_error:p})):"FLOAT"===e.type?c.push(r.createElement(o,{name:e.name,key:a,data:t[a].value,index:a,onTextChange:d.handleNewText,show_error:p})):"LONG_INTEGER"===e.type?c.push(r.createElement(l,{name:e.name,key:a,data:t[a].value,index:a,onTextChange:d.handleNewText,show_error:p})):(e.type.match(/ARRAY/)||e.type.match(/LINKED_LIST/))&&c.push(r.createElement(u,{name:e.name,key:a,data:t[a].value,index:a,onTextChange:d.handleNewText,show_error:p,arrayType:e.type}))}):c.push(r.createElement("div",n({key:"no-daat",className:"no-data-div alert-box secondary"},"key","comma"+index),"No Datatypes have been added")),r.createElement("div",{key:"div",className:"fname msB"},r.createElement("i",{className:"icon-info-circled fnt-sz-small"}),r.createElement("label",null,"Debug function",r.createElement("span",{className:"func-name"},this.props.functionName),"with your own input"),r.createElement("div",{id:"parameters"},c))}});e.exports=p},function(e,t,a){"use strict";var n=a(0),r=n.createClass({displayName:"StringNewFormat",onChange:function(e){var t=[e.target.value];this.props.onTextChange(this.props.index,t)},render:function(){var e=this.props.data,t=this.props.name,a=e[0]||"",r=this.props.show_error,s=!1;return r[t]&&(s=!0),n.createElement("div",{className:"inner-div-single"},n.createElement("div",{className:"params"},n.createElement("label",{className:"func-type float-left"},"String ",n.createElement("span",{className:"func-params"},t))),n.createElement("input",{type:"text",className:"text-width "+(s?"red":""),value:a,onChange:this.onChange}))}});e.exports=r},function(e,t,a){var n,r,s,n,r,s;!function(i,o){r=[e,t,a(0)],n=o,void 0!==(s="function"==typeof n?n.apply(t,r):n)&&(e.exports=s)}(0,function(e,t){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(i,o){r=[e,t,a(0)],n=o,void 0!==(s="function"==typeof n?n.apply(t,r):n)&&(e.exports=s)}(0,function(e,t,a){function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":i(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":i(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function p(e){for(var t=[],a=0;a<e.length;a++)-1===t.indexOf(e[a])&&t.push(e[a]);return t}function c(e){return window.clipboardData?window.clipboardData.getData("Text"):e.clipboardData?e.clipboardData.getData("text/plain"):""}function d(e){var t=e.tag,a=e.key,n=e.disabled,r=e.onRemove,s=e.classNameRemove,i=e.getTagDisplayValue,o=u(e,["tag","key","disabled","onRemove","classNameRemove","getTagDisplayValue"]);return v["default"].createElement("span",y({key:a},o),i(t),!n&&v["default"].createElement("a",{className:s,onClick:function(e){return r(a)}}))}function h(e){var t=(e.addTag,u(e,["addTag"])),a=t.onChange,n=t.value,r=u(t,["onChange","value"]);return v["default"].createElement("input",y({type:"text",onChange:a,value:n},r))}function m(e,t){return v["default"].createElement("span",null,e,t)}function f(e){return e.split(" ").map(function(e){return e.trim()})}Object.defineProperty(t,"__esModule",{value:!0});var v=n(a),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},N={className:"react-tagsinput-input",placeholder:"Add a tag"},E=function(e){function t(){s(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={tag:"",isFocused:!1},e.focus=e.focus.bind(e),e.blur=e.blur.bind(e),e}return l(t,e),g(t,[{key:"_getTagDisplayValue",value:function(e){var t=this.props.tagDisplayProp;return t?e[t]:e}},{key:"_makeTag",value:function(e){var t=this.props.tagDisplayProp;return t?r({},t,e):e}},{key:"_removeTag",value:function(e){var t=this.props.value.concat([]);if(e>-1&&e<t.length){var a=t.splice(e,1);this.props.onChange(t,a,[e])}}},{key:"_clearInput",value:function(){this.hasControlledInput()?this.props.onChangeInput(""):this.setState({tag:""})}},{key:"_tag",value:function(){return this.hasControlledInput()?this.props.inputValue:this.state.tag}},{key:"_addTags",value:function(e){var t=this,a=this.props,n=a.validationRegex,r=a.onChange,s=a.onValidationReject,i=a.onlyUnique,o=a.maxTags,l=a.value;i&&(e=p(e),e=e.filter(function(e){return l.every(function(a){return t._getTagDisplayValue(a)!==t._getTagDisplayValue(e)})}));var u=e.filter(function(e){return!n.test(t._getTagDisplayValue(e))});if(e=e.filter(function(e){return n.test(t._getTagDisplayValue(e))}),e=e.filter(function(e){var a=t._getTagDisplayValue(e);return"function"==typeof a.trim?a.trim().length>0:a}),o>=0){var c=Math.max(o-l.length,0);e=e.slice(0,c)}if(s&&u.length>0&&s(u),e.length>0){for(var d=l.concat(e),h=[],m=0;m<e.length;m++)h.push(l.length+m);return r(d,e,h),this._clearInput(),!0}return!(u.length>0||(this._clearInput(),1))}},{key:"_shouldPreventDefaultEventOnAdd",value:function(e,t,a){return!!e||13===a&&(this.props.preventSubmit||!this.props.preventSubmit&&!t)}},{key:"focus",value:function(){this.input&&"function"==typeof this.input.focus&&this.input.focus(),this.handleOnFocus()}},{key:"blur",value:function(){this.input&&"function"==typeof this.input.blur&&this.input.blur(),this.handleOnBlur()}},{key:"accept",value:function(){var e=this._tag();return""!==e&&(e=this._makeTag(e),this._addTags([e]))}},{key:"addTag",value:function(e){return this._addTags([e])}},{key:"clearInput",value:function(){this._clearInput()}},{key:"handlePaste",value:function(e){var t=this,a=this.props,n=a.addOnPaste,r=a.pasteSplit;if(n){e.preventDefault();var s=c(e),i=r(s).map(function(e){return t._makeTag(e)});this._addTags(i)}}},{key:"handleKeyDown",value:function(e){if(!e.defaultPrevented){var t=this.props,a=t.value,n=t.removeKeys,r=t.addKeys,s=this._tag(),i=""===s,o=e.keyCode,l=-1!==r.indexOf(o),u=-1!==n.indexOf(o);if(l){var p=this.accept();this._shouldPreventDefaultEventOnAdd(p,i,o)&&e.preventDefault()}u&&a.length>0&&i&&(e.preventDefault(),this._removeTag(a.length-1))}}},{key:"handleClick",value:function(e){e.target===this.div&&this.focus()}},{key:"handleChange",value:function(e){var t=this.props.onChangeInput,a=this.props.inputProps.onChange,n=e.target.value;a&&a(e),this.hasControlledInput()?t(n):this.setState({tag:n})}},{key:"handleOnFocus",value:function(e){var t=this.props.inputProps.onFocus;t&&t(e),this.setState({isFocused:!0})}},{key:"handleOnBlur",value:function(e){var t=this.props.inputProps.onBlur;if(this.setState({isFocused:!1}),null!=e&&(t&&t(e),this.props.addOnBlur)){var a=this._makeTag(e.target.value);this._addTags([a])}}},{key:"handleRemove",value:function(e){this._removeTag(e)}},{key:"inputProps",value:function(){var e=this.props.inputProps,t=(e.onChange,e.onFocus,e.onBlur,u(e,["onChange","onFocus","onBlur"])),a=y({},N,t);return this.props.disabled&&(a.disabled=!0),a}},{key:"inputValue",value:function(e){return e.currentValue||e.inputValue||""}},{key:"hasControlledInput",value:function(){var e=this.props,t=e.inputValue;return"function"==typeof e.onChangeInput&&"string"==typeof t}},{key:"componentDidMount",value:function(){this.hasControlledInput()||this.setState({tag:this.inputValue(this.props)})}},{key:"componentWillReceiveProps",value:function(e){this.hasControlledInput()||this.inputValue(e)&&this.setState({tag:this.inputValue(e)})}},{key:"render",value:function(){var e=this,t=this.props,a=t.value,n=(t.onChange,t.tagProps),r=t.renderLayout,s=t.renderTag,i=t.renderInput,o=(t.addKeys,t.removeKeys,t.className),l=t.focusedClassName,p=(t.addOnBlur,t.addOnPaste,t.inputProps,t.pasteSplit,t.onlyUnique,t.maxTags,t.validationRegex,t.disabled);t.tagDisplayProp,t.inputValue,t.onChangeInput,u(t,["value","onChange","tagProps","renderLayout","renderTag","renderInput","addKeys","removeKeys","className","focusedClassName","addOnBlur","addOnPaste","inputProps","pasteSplit","onlyUnique","maxTags","validationRegex","disabled","tagDisplayProp","inputValue","onChangeInput"]),this.state.isFocused&&(o+=" "+l);var c=a.map(function(t,a){return s(y({key:a,tag:t,onRemove:e.handleRemove.bind(e),disabled:p,getTagDisplayValue:e._getTagDisplayValue.bind(e)},n))}),d=i(y({ref:function(t){e.input=t},value:this._tag(),onPaste:this.handlePaste.bind(this),onKeyDown:this.handleKeyDown.bind(this),onChange:this.handleChange.bind(this),onFocus:this.handleOnFocus.bind(this),onBlur:this.handleOnBlur.bind(this),addTag:this.addTag.bind(this)},this.inputProps()));return v["default"].createElement("div",{ref:function(t){e.div=t},onClick:this.handleClick.bind(this),className:o},r(c,d))}}]),t}(v["default"].Component);E.defaultProps={className:"react-tagsinput",focusedClassName:"react-tagsinput--focused",addKeys:[9,13],addOnBlur:!1,addOnPaste:!1,inputProps:{},removeKeys:[8],renderInput:h,renderTag:d,renderLayout:m,pasteSplit:f,tagProps:{className:"react-tagsinput-tag",classNameRemove:"react-tagsinput-remove"},onlyUnique:!1,maxTags:-1,validationRegex:/.*/,disabled:!1,tagDisplayProp:null,preventSubmit:!0},t["default"]=E,e.exports=t["default"]})})},function(e,t){},function(e,t){},function(e,t,a){e.exports=a(1)}])});
//# sourceMappingURL=https://staging.hackerrank.net/assets/sourcemaps/bundle-81b5eb81ed64974504f9e7ef2041df32.js.map