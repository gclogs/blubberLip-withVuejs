<template>
    <div class="navbar">
        <div class="container-fluid">
            <div class="logo">
                <a href="#" class="nav">
                    <span class="text">B1ubberLip</span>
                </a>
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
    }
};
</script>

<style lang="scss" scoped>
.navbar {
    padding: 12px 24px;
    margin-bottom: 40px;
    border-bottom: 1px solid $section-color;
}
.container-fluid {
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
    .search {
        .fa-magnifying-glass {
            padding-bottom: 2px;
            margin-right: 4px;
        }
    }
    .nav-link {
        padding: 6px 12px;
        &:hover {
            transition: .2s;
            color: $color002;
        }

    }

    @include media-breakpoint-down(sm) {
        .navbar {
            padding: 4px 8px;
        }
    }
}
</style>