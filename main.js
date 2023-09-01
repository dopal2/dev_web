// 예제: 내비게이션 메뉴 클릭 시 부드러운 스크롤
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});