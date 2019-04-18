=== Woo Align Buttons ===
Contributors: 320up
Donate link: https://320up.com
Tags: woocommerce, align, buttons
Requires at least: 4.7
Tested up to: 5.1
Stable tag: 3.5.8
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A plugin that aligns WooCommerce "Add to cart" buttons.

== Description ==

This lightweight plugin will automatically align your WooCommerce "Add to cart" buttons.

Nothing looks worse than visiting a WooCommerce shop page to find the "Add to cart" buttons scattered all over the place like a dog's breakfast.

This simple plugin solves that problem with a little javascript, and without modifying any core files or templates.

This version will also align your Product Titles thus allowing longer titles or larger fonts.

It will also compact excessive white space on small screens for better viewing. (Set to 420px wide.)

== Installation ==

* Upload `woo-align-buttons.zip` through the "Plugins" menu in WordPress
* Else upload unzipped `woo-align-buttons` folder to the `/wp-content/plugins/` directory
* Activate the plugin through the "Plugins" menu in WordPress
* Select another version from the bottom of the page [Here](https://wordpress.org/plugins/woo-align-buttons/advanced/).

== Frequently Asked Questions ==

= How does it work? =

It hooks a wrapper `<div>` around the product information above the "Add to cart" buttons.
Javascript then measures the height of that wrapper and adjusts the height to automatically align the buttons.

= Will it work on all themes? =

No. It is designed to work on **unmodified** WooCommerce files. If your theme has modified any WooCommerce product templates or added hooks that affect those templates or files, this plugin may not work.

It is assumed that if the theme developer has hacked, hooked, or modified any WooCommerce files, they should have already fixed the problem with aligning the buttons.

If it is not working on your theme chances are your theme has been modified or hacked, and this plugin will NOT work.

You can either choose another theme, or contact your theme developer and ask them to fix their theme.

= Can I incorporate it into my own theme? =

Yes. However, the hook in your theme's `functions.php` file will need to be modified slightly.
A sample child-theme can be found here on [GitHub](https://github.com/Aquafortis/woo-align-child).

= Will it work on mobile? =

Yes. Every time the screen is resized, it will re-adjust the buttons.

= Will it work on older versions? =

Don't know. Try it for yourself. It's Free.

= Troubleshooting =

If you are having issues with this version, revert back to version 3.5.8.
Version 3.5.8 can be downloaded from the bottom of the page [Here](https://wordpress.org/plugins/woo-align-buttons/advanced/).
If you are having issues with a modified theme, try using version 3.5.7.
Version 3.5.7 can be downloaded from the bottom of the page [Here](https://wordpress.org/plugins/woo-align-buttons/advanced/).
Note: As mentioned above, if your theme has been heavily modified and the buttons are outside of the original scope, you may have to consider using another theme.

== Screenshots ==

1. Writer Theme.
2. Storefront Theme.
3. Twenty Seventeen Theme.

== Changelog ==

= 100.5.1 =
* Custom version - Use with caution
* This version is designed only for OceanWP Theme
* Report any issues in support section

= 100.5.0 =
* Custom version - Use with caution
* This version is designed to aid modified themes
* There is no guarantee it will work

= 3.6.0 =
* Beta version - Use with caution
* Revert back to version 3.5.8 if you have any issues
* See Troubleshooting section for instructions
* This version also aligns your product titles
* Uses new technology that may not work on all devices
* Disables script on small screens for compact viewing
* Tested on WooCommerce version 3.5.6

= 3.5.8 =
* Stable version
* Global script can now be called within other Plugins
* Tested on WooCommerce version 3.5.6

= 3.5.7 =
* Custom version for modified themes
* Do not use unless you have issues with your theme
* This version has additional event triggers
* Global folder has been removed
* Tested on WooCommerce version 3.5.6

= 3.5.6 =
* Updated alternate script in global folder
* See Troubleshooting section for usage
* Tested on WooCommerce version 3.5.6

= 3.5.5 =
* Tested on WP version 5.1
* Tested on WooCommerce version 3.5.5

= 3.5.3 =
* Tested on WP version 5.0.2
* Tested on WooCommerce version 3.5.3
* Added global script folder

= 3.4.5 =
* Tested on WP version 4.9.8
* Tested on WooCommerce version 3.4.5
* Added document change function
* Optional scroll function in `wooalign-public.js` file

= 3.4.4 =
* Tested on WP version 4.9.8
* Tested on WooCommerce version 3.4.4

= 3.3.5 =
* Tested on WP version 4.9.5

= 3.1.1 =
* Updated install folder name

= 3.1.0 =
* Initial release

== Upgrade Notice ==

= 3.5.7 =
* No need to upgrade

= 3.3.5 =
* Upgrade to remove WC version warning.

= 3.1.1 =
* No need to upgrade