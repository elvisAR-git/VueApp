<template>
    <div>
    <div class="main">
        <div class="carousel">
            <h2 class="title">
                Why ARnet over Hiring freelancers?
            </h2>
            <div class="line">
            </div>
            <p class="submain">
                We offer high quality and consistency across our services.
                Our Team of dedicated Developers and Writters are accountable and are
                selectively picked
            </p>
            <button class="btn btn-primary">Learn More</button>
            <p></p>
        </div>
    </div>    
    </div>
</template>

<script>
export default {
    name: "Carousel",
    props: ['carouselTitle']
}
</script>

<style scoped>

.line{
    background: red;
    width: 100%;
    height: 1%;
}
.main{
  background: url('../assets/main3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
  margin-top: 70px;
}
.carousel{
    padding: 5%;
    padding-top: 10%;
    height: 100%;
    text-align: left;
    position: relative;
    color: white;
    background: rgba(0, 0, 0, 0.411);
}

.submain{
    font-size: 120%;
}

</style>