<template>
    <div class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <div class="logo">
                <a href="#" class="nav-link">로고</a>
            </div>
            <div class="nav justify-content-end">
                <div class="search">
                    <a href="#" class="nav-link">
                        <font-awesome-icon 
                            icon="magnifying-glass" 
                            size="10px"/>
                        <span>검색</span>
                    </a>
                </div>
                <div class="profile dropdown">
                    <a href="#" class="nav-link" id="dropdownMenu" aria-expanded="false">프로필</a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                        <li><a href="#" class="dropdown-item">로그인</a></li>
                        <li><a href="#" class="dropdown-item">찜목록</a></li>
                        <li><a href="#" class="dropdown-item">배송</a></li>
                        <li><a href="#" class="dropdown-item">장바구니</a></li>
                    </ul>
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
export default {
    
};
</script>

<style lang="scss" scoped>
.container-fluid {
    .search {
        .fa-magnifying-glass {
            padding-bottom: 2px;
            margin-right: 4px;
        }
    }
    .nav-link {
        &:hover {
            transition: .2s;
            color: orange;
        }
        color: white;
        text-decoration: none;
    }
}
</style>