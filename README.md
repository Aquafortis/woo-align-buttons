# Woo Align Buttons
[Resolved] woocommerce align add to cart buttons

A plugin that aligns WooCommerce 'Add to cart' buttons.

### Description

This lightweight plugin will automatically align your WooCommerce 'Add to cart' buttons.

Nothing looks worse than visiting a WooCommerce shop page to find the 'Add to cart' buttons scattered all over the place like a dog's breakfast.

This simple plugin solves that problem with a little javascript, and without modifying any core files or templates.

### Download

You can download the latest version from [WordPress.org](https://wordpress.org/plugins/woo-align-buttons/ "WordPress.org"),
and if you like it, please rate it there.

### Installation

* Upload `woo-align-buttons.zip` through the 'Plugins' menu in WordPress
* Or upload unzipped `woo-align-buttons` folder to the `/wp-content/plugins/` directory
* Activate the plugin through the 'Plugins' menu in WordPress

### Frequently Asked Questions

#### How does it work?

It hooks a wrapper `<div>` around the product information above the 'Add to cart' buttons.
Javascript then measures the height of that wrapper and adjusts the height to automatically align the buttons.

#### Will it work on all themes?

That depends. It is designed to work on **unmodified** WooCommerce files. If your theme has modified any WooCommerce product templates or added hooks that affect those templates or files, this plugin may not work.

It is assumed that if the theme developer has hacked, hooked, or modified any WooCommerce files, they should have already fixed the problem with aligning the buttons.

If it is not working on your theme chances are your theme has been modified or hacked, and this plugin will NOT work.

You can either choose another theme, or contact your theme developer and ask them to fix their theme.

#### Can I incorporate it into my own theme?

Yes. However, the hook in your theme's `functions.php` file will need to be modified slightly.
Instructions on how to do this can be found on our website.

#### Will it work on mobile?

Yes. Every time the screen is resized, it will re-adjust the buttons.

#### Will it work on older versions?

Don't know. Try it for yourself. It's Free.

### Screenshots

[Writer Theme](https://mythemeshop.com/themes/writer/?ref=ian322 "Writer Theme")
![Writer Theme](https://ps.w.org/woo-align-buttons/assets/screenshot-1.png "Writer Theme")

[Storefront Theme](https://wordpress.org/themes/storefront/ "Storefront Theme")
![Storefront Theme](https://ps.w.org/woo-align-buttons/assets/screenshot-2.png "Storefront Theme")

[Twenty Seventeen Theme](https://wordpress.org/themes/twentyseventeen/ "Twenty Seventeen Theme")
![Twenty Seventeen Theme](https://ps.w.org/woo-align-buttons/assets/screenshot-3.png "Twenty Seventeen Theme")

### Credits

Plugin core based on the
[WordPress-Plugin-Boilerplate](https://github.com/DevinVinson/WordPress-Plugin-Boilerplate "WordPress-Plugin-Boilerplate")

### Plugin Header

- Contributors: 320up, Aquafortis
- Donate link: https://320up.com
- Tags: woocommerce, align, buttons
- Requires at least: 4.7
- Tested up to: 4.9.8
- Stable tag: 3.4.4
- License: GPLv2 or later
- License URI: http://www.gnu.org/licenses/gpl-2.0.html

### Changelog

- 3.4.4
- Tested on WP version 4.9.8
- Tested on WooCommerce version 3.4.4

- 3.3.5
- Tested on WP version 4.9.5

- 3.1.1
- Updated install folder name

- 3.1.0
- Initial release for WordPress as a Plugin


- 1.0.0
- First designed in 2014 to be used in a theme
