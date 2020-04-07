<template>
    <div>
        <div class="nav col-md-12 navbar navbar-expand-lg justify-content-between">
            <h1 class="title" style="flex:3">Arnet
                <img src="../assets/global.svg" alt="" class="logo">
            </h1>
            <div class="products-info hide">
                <a href="#">Half-link url shortener</a>
                <a href="#">Onspot Music</a>
                <a href="#">Concat&Tm</a>
            </div>
            <div style="flex:7"></div>
            <ul class="navbar-nav mr-auto my-2 my-lg-0"  style="flex:1">
                <li class="nav-item products"><button class="btn btn-outline-primary nav-link"><img src="../assets/product.svg" alt="" width="40">Products</button></li>
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
    position: fixed;
    top: 0;
    z-index: 1;
    padding: 1%;
    box-shadow: 1px 2px 5px gray;
    background: white;
}
.logo{
    width: 30px;
}

.nav-item{
    margin-right: 5px;
}

.btn-outline-primary{
    border-bottom: 1px rgb(211, 211, 255) solid;
    color: black;
    width: 150px;
}
.products-info{
    position: absolute;
    top: 85px;
    border-radius: 10px;
    background: rgb(62, 62, 247);
    padding: 1%;
    left: 540px;
}

.products-info a{
    display: block;
    color: rgb(223, 223, 223);
}



</style>