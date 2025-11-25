// JavaScript для интерактивных элементов сайта

document.addEventListener('DOMContentLoaded', function() {
    // Убедимся, что страница открывается в начале при загрузке
    window.scrollTo(0, 0);
    
    // Плавный скролл для навигации
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Добавляем класс активной секции при скролле
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Добавляем функцию для увеличения изображений при клике
    const images = document.querySelectorAll('.image-container img');
    
    images.forEach(img => {
        img.addEventListener('click', function() {
            // Создаем модальное окно для увеличенного изображения
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.zIndex = '1000';
            modal.style.cursor = 'pointer';
            
            const enlargedImg = document.createElement('img');
            enlargedImg.src = this.src;
            enlargedImg.style.maxWidth = '90%';
            enlargedImg.style.maxHeight = '90%';
            enlargedImg.style.objectFit = 'contain';
            
            modal.appendChild(enlargedImg);
            
            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            document.body.appendChild(modal);
        });
    });
});