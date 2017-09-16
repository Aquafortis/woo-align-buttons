/*! @preserve
 * Plugin Name:       Woo Align Buttons
 * Plugin URI:        https://wordpress.org/plugins/woo-align-buttons
 * Description:       A lightweight plugin to align WooCommerce 'Add to cart' buttons.
 * Version:           3.1.1
 * Author:            320up
 * Author URI:        https://320up.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */
!function($){"use strict";if($("ul.products").length){var i=function(){$("ul.products").each(function(){var i=[],n=[],o=$(this).children("li");o.each(function(t){"none"!==$(this).css("clear")&&0!==t&&(i.push(n),n=[]),n.push(this),o.length===t+1&&i.push(n)}),$.each(i,function(){var i=0;$.each(this,function(){$(this).find("#woo-height").css({"min-height":"","padding-bottom":""});var n=$(this).find("#woo-height").height(),o=10,t=n+10;t>i&&(i=t)}),$.each(this,function(){$(this).find("#woo-height").css("min-height",i)})})})};i(),$(window).on("load",function(){$(window).on("hold-your-horses",function(){i()})}),window.onload=i}var n;$(window).resize(function(){clearTimeout(n),n=setTimeout(function(){$(window).trigger("hold-your-horses")},250)})}(jQuery);
