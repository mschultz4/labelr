//need to fix if applied twice
// test style addition
// class label
//create new branch

(function UMD(name,context,definition){
    if (typeof define === "function" && define.amd) { define(definition); }
    else if (typeof module !== "undefined" && module.exports) { module.exports = definition(); }
    else { context[name] = definition(name,context); }
})("labelr",this,function DEF(name,context){
    
    "use strict";
    var attribute = 'title';
    //var effect = '';
    var styles = {
            label:{
                bottom: 0,
                width: '100%',
                position: 'absolute',
                boxSizing: 'border-box',
                backgroundColor: 'black',
                color: 'white',
                padding: '3px',
                opacity: .8, 
                fontFamily: 'sans-serif'
            },
            wrapper:{
                display: 'inline-block',
                position: 'relative',
                overflow: 'hidden',
                margin: 'tbd',
                padding: 'tbd'
            }        
    };
    
    function labelr(selector, settings){
        //set settings    
        if(settings){
            if(settings.style){
                for(var x in settings.style){
                    styles.label[x] = settings[x];
                }
            }
            if(settings.attribute){
                attribute = settings.attribute;
            }
        }

        // get all pictures
        var pictures = document.querySelectorAll(selector);
        [].forEach.call(pictures, addLabel);
    }
    
    function createLabel(text, styles){
        var label = document.createElement('div');
        label.innerText = text;
        assign(label.style, styles);
        
        return label;
    }
    
    function createWrapper(styles){
        var wrapper = document.createElement('div');
        wrapper.classList.add('labelr-wrapper');
        assign(wrapper.style, styles); 
        
        return wrapper;
    }
    
    function addLabel(pic){
        // get alt text
        var labelText = pic.getAttribute(attribute);
        
        if(labelText){
            // set height and width;
            styles.wrapper.height = pic.offsetHeight;
            styles.wrapper.width = pic.offsetWidth;
            
            // create the wrapper and label
            var wrapper = createWrapper(styles.wrapper);
            var label = createLabel(labelText, styles.label);
            
            // append and insert the elements
            if(!pic.parentNode.classList.contains('labelr-wrapper')){
                pic.parentNode.replaceChild(wrapper, pic);
            }else{
                pic.parentNode.parentNode.replaceChild(wrapper, pic.parentNode);
                console.log(pic.parentNode.parentNode);
            }
            wrapper.appendChild(pic);
            wrapper.appendChild(label);
        }
    }
    
    //Object.assign polyfill for making css assignments prettier in IE
    function assign(obj, props){
        if(typeof Object.assign === 'function'){
            Object.assign(obj, props);
        } else {
            (function(target, source) {
                'use strict';
                if (target == null) {
                  throw new TypeError('Cannot convert undefined or null to object');
                }
                target = Object(target);
                
                  if (source != null) {
                    for (var key in source) {
                      if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                      }
                    }
                  }
                return target;
            })(obj, props);
        }
    }
    
    return labelr;
});
