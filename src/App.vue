<script setup>

   import { Authenticator } from "@aws-amplify/ui-vue";
   import "@aws-amplify/ui-vue/styles.css";
   import { Amplify } from 'aws-amplify';
   import { defineComponent } from "vue";
   import awsconfig from './aws-exports';
  
   Amplify.configure(awsconfig);
   
    
</script>

<template>
  <authenticator>
    <template>
        <header>
        <a href="#" class="logo">GymTimer</a>
       
        
        
        <nav class="navigation">
           <a href="#Home">HOME</a>
           <a href="#features">FEATURES</a>
           <a href="#contact">CONTACT</a>
           <a href="#Profile ">PROFILE</a>
         </nav>

    </header>

    <section class="main" id="Home">
        <div>
            <h2>Your Workout.<br><span>Your Day.</span> </h2>
            <h3>Get your daily dose of movement from home<br> or on the
                go with over 500 workouts for your level & goals.</h3>
            <a href="#projects" class="main-btn-up">Sign up</a>
            <a href="#projects" class="main-btn-in">Sign in</a>
            <button id="btn" class="btn_create">create user</button>
            <section id="text" class="texts">
                <ol id="list" class="lists">  
                </ol>  
              </section>
            
        </div> 
    </section>

    <section class="page2" id="features">

        <h2 class="titel">improve your own workout plan with GymTimer </h2>

        <div class="content">
            <div class="card">
            </div>   
            <div class="icon">
                <i class="fa-solid fa-dumbbell"></i>
            </div>      
            <div class="info">
                <h3>Personalized Workouts</h3>
                <p>Create a customized workout plan in minutes</p>

            </div>

        </div>
                <div class="card">
                <div class="icon">
                    <i class="fa-solid fa-brain"></i>                    
                </div>      
                <div class="info">
                    <h3>Find Your Training Style</h3>
                    <p>Discover the perfect training method for you</p>
                </div>
    
            </div>

        <div class="card">
                <div class="icon">
                    <i class="fa-solid fa-heart-pulse"></i>
                </div>  

                <div class="info">
                    <h3>Track Your Progress</h3>
                    <p>Stay on top of your fitness journey and track all your workouts</p>
    
                </div>

            </div>

            </section>
            <footer class="footer" id="contact">

                    <p class="footer-title"> Copyright © 2023. All rights reserved <span>GYMTIMER</span> </p>
                   <div class="social-icons">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    <a href="#"><i class="fa-brands fa-google"></i></a>
                   </div>
                
            
            
            </footer>
    </template>
  </authenticator>
</template>

<style scoped>

</style>