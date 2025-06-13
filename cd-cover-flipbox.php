<?php
/**
 * Plugin Name: CD Cover Flipbox
 * Description: A Gutenberg block that displays an image which flips on hover to show scrollable info text.
 * Version: 1.3.0
 * Author: Sven Hinse
 * Text Domain: cd-cover-flipbox
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register the block and its assets.
 */
function cd_cover_flipbox_register_block() {
    // Register the block using block.json
   register_block_type_from_metadata(plugin_dir_path(__FILE__) . 'build');

}
add_action('init', 'cd_cover_flipbox_register_block');

/**
 * Enqueue frontend scripts and styles
 */
function cd_cover_flipbox_enqueue_assets() {
    // Only enqueue if the block is used on the page
    if (has_block('cd-cover-flipbox/block')) {
        wp_enqueue_style(
            'cd-cover-flipbox-style',
            plugins_url('src/style-index.css', __FILE__),
            array(),
            filemtime(plugin_dir_path(__FILE__) . 'src/style-index.css')
        );
    }
}
add_action('wp_enqueue_scripts', 'cd_cover_flipbox_enqueue_assets');

/**
 * Enqueue editor scripts and styles
 * This ensures the frontend styles are also loaded in the editor
 */
function cd_cover_flipbox_enqueue_editor_assets() {
    wp_enqueue_style(
        'cd-cover-flipbox-editor-style',
        plugins_url('src/style-index.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'src/style-index.css')
    );
}
add_action('enqueue_block_editor_assets', 'cd_cover_flipbox_enqueue_editor_assets');

/**
 * Plugin activation hook
 */
function cd_cover_flipbox_activate() {
    // Activation tasks if needed
}
register_activation_hook(__FILE__, 'cd_cover_flipbox_activate');
