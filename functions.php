<?php 

    function university_files() {
        wp_enqueue_script('javascript', get_theme_file_uri('/js/index.js'), NULL, '1.0', true);
        wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Muli&display=swap');
        wp_enqueue_style('magazine_styles', get_stylesheet_uri());
    }

    function university_features() {
        add_theme_support('title-tag');
    }
    function wpb_hook_javascript() {
        ?>
            <script>
              // your javscript code goes
            </script>
        <?php
    }
    
    function show_tags() {
        $post_tags = get_the_tags();
        $separator = ' | ';
        if (!empty($post_tags)) {
            foreach ($post_tags as $tag) {
                $output .= '<a href="' . get_tag_link($tag->term_id) . '">' . $tag->name . '</a>' . $separator;
            }
            return trim($output, $separator);
        }
    }

    add_action('show_tags', 'show_tags');

    add_action('wp_head', 'wpb_hook_javascript');
    add_action('wp_enqueue_scripts', 'university_files');
    add_action('after_setup_theme', 'university_features');
?>