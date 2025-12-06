document.addEventListener('DOMContentLoaded', function() {
    // Menu items data
    const menuItems = [
        {
            id: 1,
            name: "Classic Burger",
            description: "Juicy beef patty with lettuce, tomato, onion, and special sauce",
            price: "$9.99",
            image: "images/burger.jpg"
        },
        {
            id: 2,
            name: "Margherita Pizza",
            description: "Classic pizza with tomato sauce, mozzarella, and basil",
            price: "$12.99",
            image: "images/pizza.jpg"
        },
        {
            id: 3,
            name: "Caesar Salad",
            description: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan",
            price: "$8.99",
            image: "images/salad.jpg"
        },
        {
            id: 4,
            name: "Pasta Carbonara",
            description: "Spaghetti with creamy egg sauce, pancetta, and parmesan",
            price: "$11.99",
            image: "images/pasta.jpg"
        },
        {
            id: 5,
            name: "Chocolate Lava Cake",
            description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
            price: "$6.99",
            image: "images/dessert.jpg"
        },
        {
            id: 6,
            name: "Iced Coffee",
            description: "Cold brewed coffee with milk and sweetener of your choice",
            price: "$3.99",
            image: "images/coffee.jpg"
        }
    ];

    // Render menu items
    const menuContainer = document.getElementById('menu-items');
    
    menuItems.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        col.innerHTML = `
            <div class="card menu-card h-100 shadow-sm">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text text-muted">${item.description}</p>
                    <p class="price">${item.price}</p>
                </div>
            </div>
        `;
        menuContainer.appendChild(col);
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Scroll spy for active nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let fromTop = window.scrollY + 100;
        
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});