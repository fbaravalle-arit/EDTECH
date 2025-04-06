
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.classList.add('md:hidden', 'text-gray-600', 'hover:text-blue-600');
    mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
    
    const nav = document.querySelector('nav .container .flex');
    nav.appendChild(mobileMenuButton);
    
    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mobile-menu', 'hidden', 'absolute', 'top-16', 'left-0', 'w-full', 'bg-white', 'shadow-md', 'py-4', 'px-6');
    mobileMenu.innerHTML = `
        <div class="flex flex-col space-y-4">
            <a href="#how-it-works" class="text-gray-600 hover:text-blue-600">How It Works</a>
            <a href="#benefits" class="text-gray-600 hover:text-blue-600">Benefits</a>
            <a href="#testimonials" class="text-gray-600 hover:text-blue-600">Testimonials</a>
            <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full">
                Get Demo
            </button>
        </div>
    `;
    
    document.querySelector('nav .container').appendChild(mobileMenu);
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                mobileMenu.classList.add('hidden');
            }
        });
    });
    
    const demoButtons = document.querySelectorAll('button:not(.mobile-menu button)');
    
    demoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50');
            
            modal.innerHTML = `
                <div class="bg-white p-8 rounded-lg max-w-md w-full">
                    <h3 class="text-2xl font-bold mb-4">Request a Demo</h3>
                    <form id="demo-form" class="space-y-4">
                        <div>
                            <label class="block text-gray-700 mb-2">Name</label>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded" required>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Email</label>
                            <input type="email" class="w-full p-2 border border-gray-300 rounded" required>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Company</label>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded" required>
                        </div>
                        <div class="flex justify-end space-x-4">
                            <button type="button" id="cancel-demo" class="px-4 py-2 border border-gray-300 rounded">Cancel</button>
                            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
                        </div>
                    </form>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            document.getElementById('demo-form').addEventListener('submit', function(e) {
                e.preventDefault();
                
                modal.innerHTML = `
                    <div class="bg-white p-8 rounded-lg max-w-md w-full text-center">
                        <i class="fas fa-check-circle text-green-500 text-5xl mb-4"></i>
                        <h3 class="text-2xl font-bold mb-4">Thank You!</h3>
                        <p class="mb-6">We've received your demo request and will contact you shortly.</p>
                        <button id="close-success" class="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    </div>
                `;
                
                document.getElementById('close-success').addEventListener('click', function() {
                    modal.remove();
                });
            });
            
            document.getElementById('cancel-demo').addEventListener('click', function() {
                modal.remove();
            });
        });
    });
    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };
    
    document.querySelectorAll('section > div > h2').forEach(heading => {
        heading.classList.add('animate-on-scroll');
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});
