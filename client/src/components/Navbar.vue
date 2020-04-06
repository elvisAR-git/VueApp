<template>
    <div>
        <div class="nav col-md-12 navbar navbar-expand-lg justify-content-between">
            <h1 class="title" style="flex:3">Arnet
                <img src="../assets/global.svg" alt="" class="logo">
            </h1>
            <div style="flex:7"></div>
            <ul class="navbar-nav mr-auto my-2 my-lg-0"  style="flex:1">
                <li class="nav-item"><button class="btn btn-outline-primary nav-link"><img src="../assets/product.svg" alt="" width="40">Products</button></li>
                <li class="nav-item"><button class="btn btn-outline-primary nav-link"><img src="../assets/support.svg" alt="" width="40">Services</button></li>
                <li class="nav-item"><button class="btn btn-outline-primary nav-link"><img src="../assets/team.svg" alt="" width="40">Team</button></li>
                <li class="nav-item"><button class="btn btn-outline-primary nav-link"><img src="../assets/question.svg" alt="" width="40">About</button></li>
                <li class="nav-item"><button class="btn btn-outline-primary nav-link"><img src="../assets/login.svg" alt="" width="40">Account</button></li>
                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.nav{
    /* background: rgba(71, 71, 219, 0.952); */
    position: absolute;
    top: 0;
    z-index: 1;
    padding: .4%;
    box-shadow: 1px 2px 5px gray;
}
.logo{
    width: 30px;
}
*{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: blue;
}

.nav-item{
    margin-right: 5px;
}

.btn-outline-primary{
    border-bottom: 1px rgb(211, 211, 255) solid;
    color: black;
    width: 150px;
}

</style>