<template>
    <div class="container-fluid">
        계절별 BEST 상품
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
    padding: 0px 30px;
}
.navbar {
        color: $color001;
        background-color: $color003;
        a {
            color: white;
        }
    }
</style>