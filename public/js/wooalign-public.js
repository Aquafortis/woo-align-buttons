/*! @preserve
 * Plugin Name:       Woo Align Buttons
 * Plugin URI:        https://wordpress.org/plugins/woo-align-buttons
 * Description:       A lightweight plugin to align WooCommerce "Add to cart" buttons.
 * Version:           3.5.6
 * Author:            320up
 * Author URI:        https://320up.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */
(function($) {
  "use strict";
  if ($("ul.products").length) {
    var wooAlignButtons = function() {
      $("ul.products").each(function() {
        var gridRows = [];
        var tempRow = [];
        var wooGridElements = $(this).children("li");
        wooGridElements.each(function(index) {
          if ($(this).css("clear") !== "none" && index !== 0) {
            gridRows.push(tempRow);
            tempRow = [];
          }
          tempRow.push(this);
          if (wooGridElements.length === index + 1) {
            gridRows.push(tempRow);
          }
        });
        $(gridRows).each(function() {
          var wooheight = "#woo-height";
          var tallestWooInfo = 0;
          $(this).each(function() {
            $(this).find(wooheight).css({
              "min-height": "",
              "padding-bottom": ""
            });
            var wooInfoHeight = $(this).find(wooheight).height();
            var wooSpacing = 10;
            var totalHeight = wooInfoHeight + wooSpacing;
            if (totalHeight > tallestWooInfo) {
              tallestWooInfo = totalHeight;
            }
          });
          $(this).each(function() {
            $(this).find(wooheight).css("min-height", tallestWooInfo);
          });
        });
      });
    };
    wooAlignButtons();
    $(window).on("load", function() {
      wooAlignButtons();
      $(window).on("hold-your-horses", function() {
        wooAlignButtons();
      });
    });
  }
  var resizeTimer;
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      $(window).trigger("hold-your-horses");
    }, 250);
  });
})(jQuery);
