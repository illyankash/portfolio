document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 要素がビューポートに入ったらブラー効果を徐々に解除
                entry.target.style.filter = 'blur(0px)';
                // 要素を監視から解除
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // 10%の要素が見えたらトリガー
    });

    // 監視対象の要素を追加
    document.querySelectorAll('.introduction').forEach(element => {
        observer.observe(element);
    });

    // 画像をクリックしたときにモーダルを開く
    document.getElementById('profile-image').addEventListener('click', function() {
      document.getElementById('myModal').style.display = "block";
      document.getElementById('modalImg').src = this.src;
    });

    // クローズボタンをクリックしたときにモーダルを閉じる
    document.querySelector('.close').addEventListener('click', function() {
      document.getElementById('myModal').style.display = "none";
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.navigation a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});