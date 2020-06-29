<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="<?php bloginfo('charset') ?>">
    <meta name="viewport" content="width = device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body>
<div class="content">
      <header>
          <img src="">
          <svg id="menu-btn" viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
          <nav id="nav">
          <ul>
              <li>
                  <a class="link-transition" href="<?php echo site_url('/about') ?>">
                  About
                  </a>
              </li>
              <li>
                  <a class="link-transition" href="<?php echo site_url('/category/projects') ?>">
                  Work
                  </a>
              </li>
              <!-- <li>
                  <a class="link-transition" href="#skills" >
                  Skills
                  </a>
              </li> -->
              <li>
                  <a href="https://learn.co/concurrent-compressor-4752/resume" >
                  Resume
                  </a>
              </li>
          </ul>
        </nav>
      </header>
    
