<template>
    <div class="navbar">
        <div class="container-fluid">
            <div class="logo">
                <a href="#" class="nav">
                    <span class="text">B1ubberLip</span>
                </a>
            </div>
            <div class="nav justify-content-end">
                <div class="search nav-link">
                    <a href="#">
                        <font-awesome-icon
                            alt="검색"
                            icon="magnifying-glass" 
                            size="10px"/>
                    </a>
                </div>
                <div class="basket nav-link">
                    <a href="#">
                        <font-awesome-icon
                            alt="장바구니"
                            icon="bag-shopping" 
                            size="10px"/>
                    </a>
                </div>
                <div class="profile nav-link dropdown">
                    <a href="#" id="dropdownMenu" aria-expanded="false">
                        <font-awesome-icon 
                            alt="프로필"
                            icon="user" 
                            size="10px"/>
                    </a>
                    <ul
                        v-for="nav in navigations"
                        :key="nav.name"
                        class="dropdown-menu" 
                        aria-labelledby="dropdownMenu">
                        <li>
                            <router-link
                                :to="nav.href"
                                class="dropdown-item">
                                {{ nav.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navigations: [
                {
                    name: 'login',
                    href: '/login'
                },
                {
                    name: 'favorite',
                    href: '/favorite'
                },
                {
                    name: 'order',
                    href: '/order'
                },
                {
                    name: 'basket',
                    href: '/basket'
                }
            ]
        }
    },
};
</script>

<style lang="scss" scoped>
.navbar {
    padding: 12px 24px;
    margin-bottom: 40px;
    border-bottom: 1px solid $section-color;
}
.container-fluid {
    padding: 0rem 10rem;
    margin-bottom: 10px;

    a {
        color: $color001;
        font-size: 14px;
    }
    .logo {
        .text {
            font-family: Helvetica, sans-serif;
            font-size: 20px;
        }
    }
    .nav-link {
        padding: .4rem .6rem;
        a {
            &:hover {
                transition: .2s;
                color: $color002;
            }
        }
    }

    @include media-breakpoint-down(sm) {
        .container-fluid {
            font-size: 100px;
            .navbar {
                padding: 4px 8px;
            }
        }
    }
}
</style>