<?php

/**
 * Plugin Name:          Woo Align Buttons
 * Plugin URI:           https://wordpress.org/plugins/woo-align-buttons
 * Description:          A lightweight plugin to align WooCommerce "Add to cart" buttons.
 * Version:              3.7.0
 * Author:               320up
 * Author URI:           https://320up.com
 * License:              GPL-2.0+
 * License URI:          http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:          wooalign
 */

function wooalign_enqueue_scripts() {

	// Enqueue a style sheet
	wp_enqueue_style('wooalign_style', plugin_dir_url(__FILE__) . 'css/woo-align-public.css');

	// Enqueue the wooalign-public.js for Woo Align Buttons
	wp_enqueue_script('wooalign_script', plugin_dir_url(__FILE__) . 'js/woo-align-public.js', array('jquery'), '3.7.0', true);
}

add_action( 'wp_enqueue_scripts', 'wooalign_enqueue_scripts' );

// Add wrapper for Woo Align Buttons

add_action( 'woocommerce_before_shop_loop_item', 'wooalign_product_link_before' );

function wooalign_product_link_before() {
    echo '<div class="woo-height">';
}

add_action( 'woocommerce_after_shop_loop_item', 'wooalign_product_link_after' );

function wooalign_product_link_after() {
    echo '</div>';
}
