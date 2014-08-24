/**
 * Insert widget DOM elements
 *
 * @param {String} afterSelector insert the widget after this selector
 * @param {String} contentSelector select the content to serve releated content for
 */
var insertWidgetDOMElements = function(afterSelector, contentSelector) {
	// Get element for afterSelector
	var afterElement = document.querySelector(afterSelector);

	if (!afterElement) return;

	// Get our reference to the widget elem
	var widget = document.createElement('div');
	widget.className = 'custom-blendle-widget';

	// Insert the html snippet
	var divHtml = '<div class="blendle-widget" data-widget-selector="' + contentSelector + '" data-widget-type="related" data-widget-item-template="<div{{if:image}} class=image{{endif}}>{{item:image}}<h2>{{item:title}}</h2><div class=snippet>{{item:snippet}}</div> <span class=read-on>Lees verder in {{item:provider}}</span> <span class=price>({{item:price}})</span></div>" data-widget-title="true" data-widget-footer="false" data-widget-count="2" data-widget-image-width="470" data-widget-image-height="300"></div>';
	widget.innerHTML = divHtml;

	// Insert behind afterEl if it has a next sibling
	if (afterElement.nextSibling) {
		afterElement.parentNode.insertBefore(widget, afterElement.nextSibling);
	} else {
		afterElement.parentNode.appendChild(widget);
	}

	// Fetch and run!
	fetchAndRunWidgetJavascript();
};

/**
 * Insert widget JS script elem
 */
var fetchAndRunWidgetJavascript = function(environment) {
	// Set up the correct url to the widget
	var widgetUrl = 'https://widgets.blendle.nl/widget.js';
	var scriptTag = document.createElement('script');
	scriptTag.id = 'blendle-widgetjs';
	scriptTag.src = widgetUrl;

	document.getElementsByTagName('body')[0].appendChild(scriptTag);
};

/**
 * Insert the widget with the passed DOM elements
 */
insertWidgetDOMElements('', '');



