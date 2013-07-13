define("core/DOM", function () {

        var DOM = O.DOM = {
            /**
             * Create a DOM Element
             * @param tagname The tagname of the element to create. Defaults to a 'div'.
             * @param attrs Attributes for this element
             * @param attrs.content The contents of the element, can be a single DOM node, an array of DOM Nodes, a string
             * @returns {HTMLElement}
             */
            create: function (tagname, attrs) {
                tagname = tagname || 'div';

                // create element
                var el = document.createElement(tagname);

                // add attributes
                for (var key in attrs) {
                    if (attrs[key]) {

                        if (key === 'className') {
                            el.className = attrs[key];
                        } else if (key === 'text') {
                            el.textContent = attrs[key];
                        } else if (key === 'html') {
                            el.innerHTML = attrs[key];
                        } else if (key !== 'content') {
                        el.setAttribute(key, attrs[key]);
                    }
                }
            }

            // add content if passed
            if (attrs && attrs.content) {

                // single DOM node
                if (_.isElement(attrs.content)) {
                    el.appendChild(attrs.content);
                }

                // string
                else if (_.isString(attrs.content)) {
                    el.textContent = attrs.content;
                }

                // array
                else if (_.isArray(attrs.content)) {
                    attrs.content.forEach(function (child) {
                        el.appendChild(child);
                    });

                }
            }

            return el;
        }
    };

    return DOM;

});