<?php 
    get_header();
    while(have_posts()) {
        the_post(); ?>

<h2><?php the_title(); ?></h2>
        <?php the_content();?>
        <div class="tags">
            <?php echo show_tags() ?> 
        </div>
<?php
    };
    get_footer();
?>