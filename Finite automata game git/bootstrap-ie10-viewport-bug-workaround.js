/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

// Immediately invoked function expression (IIFE) to encapsulate the code
(function () {
  'use strict';

  // Check if the user agent matches the specified pattern for Internet Explorer Mobile 10.0
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    // Create a new <style> element to override the default viewport width for IE Mobile 10.0
    var msViewportStyle = document.createElement('style');

    // Add CSS rules to the <style> element to set the viewport width to 'auto'
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    );

    // Append the <style> element to the <head> section of the document
    document.querySelector('head').appendChild(msViewportStyle);
  }

})();

