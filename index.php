<?php 
    get_header();
?>
      <section id="landing">
        <div class="landing">
          <div class="landing-card">
            <div class="card-text">
                <h3>
                  Christian Kastner
                </h3>
                <p>Frontend Software Engineer <br/> Specializing in React, Javascript, and Ruby on Rails</p>
                <span>
                  Based in Seattle, Washington 
                </span>
            </div>
          </div> 
          <img src="<?php echo get_theme_file_uri("./public/portrait.png") ?>" alt="line portrait"/> 
        </div>
      </section>
      <section class="about" id="about">
        <img src="<?php echo get_theme_file_uri('./public/perlin.png') ?>" alt="flowing line art"/>
        
        <div class="about-card" id="about-card">
            <h3>About</h3>
            <div class="text-card" id="text-card">
  
            </div>
        </div>
      </section>
  
      <section class="projects" id="projects">
        <ul id="project-list">
          
        </ul>
      </section>
  
      <section class="skills" id="skills" >
        <ul id="skill-list">
  
        </ul>
      </section>

<?php
    get_footer();
?>