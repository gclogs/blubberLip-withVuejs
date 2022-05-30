<template>
    <footer>
        <div class="container-fluid">
            <p class="copyright">
                블러버립 
                <br>
                대표자: 남경찬 / 사업자등록번호: 
                <br>
                통신판매업 신고번호 2021-서울... <u><a href="#">(사업자정보확인) </a></u>
                <br>
                개인정보보호책임자: 이민혁 / 호스팅 서비스: netlify
                <br>
                메일문의 <u><a href="#">woig9874@naver.com</a></u>
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
footer {
    margin-top: 40px;
    padding: 8px 16px;
    p.copyright {
        font-size: 12px;
    }
    @include media-breakpoint-down(sm) {
        p.copyright {
            text-align: center;
            justify-content: center;
        }
    }
}
</style>