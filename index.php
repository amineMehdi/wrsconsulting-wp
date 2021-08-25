<?php

get_header();
 ?>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
<!-- example react component -->
<div id="render-react-example-here"></div>
<!-- end example react component -->

<?php if (have_posts()) {
  while(have_posts()) {
    the_post(); ?>
    <div>
    </div>
  <?php }
}

get_footer();