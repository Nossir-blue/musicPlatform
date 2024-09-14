document.addEventListener('DOMContentLoaded', () => {
    const playBtns = document.querySelectorAll('.play-btn');
    const likeBtns = document.querySelectorAll('.like-btn');
    const commentBtns = document.querySelectorAll('.comment-btn');
    const closeCommentBtns = document.querySelectorAll('.close-btn');
    const commentPopup = document.querySelector('.comment-popup');
    const progress = document.querySelector('.progress');

    playBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('playing');
            if (this.classList.contains('playing')) {
                let width = 0;
                const interval = setInterval(() => {
                    if (width >= 100) {
                        clearInterval(interval);
                    } else {
                        width++;
                        progress.style.width = width + '%';
                    }
                }, 100);
            } else {
                progress.style.width = '0';
            }
        });
    });

    likeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    commentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            commentPopup.classList.remove('hidden');
        });
    });

    closeCommentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            commentPopup.classList.add('hidden');
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === commentPopup) {
            commentPopup.classList.add('hidden');
        }
    });
});
