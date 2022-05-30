<template>
    <div class="container-fluid"> 
        <img 
            src="https://mblogthumb-phinf.pstatic.net/20160122_174/cofls2016_1453454595191q983f_GIF/%28DFSD1%29.gif?type=w2"
            class="img-fluid"
            alt="모델" 
        /> 
    </div>

    <div class="navbar justify-content-center">
        <a href="#">
        <div class="text">
            <span>민혁이가 대머리라는 사실을 알고 계셨나요? 궁금하시다면 클릭해보세요!</span>
        </div>
        <div class="arrow-icon">
            <font-awesome-icon 
                icon="fa-arrow-right" 
                size="10px"/>
        </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<style lang="scss" scoped>
.container-fluid {
}
.navbar {
        color: $color001;
        background-color: $color003;
        a {
            color: black;
        }
    }
</style>