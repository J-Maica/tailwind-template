class Header extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        // Determine the current active page based on the URL
        const currentActivePage = window.location.pathname;

        this.innerHTML = `
            <header class="w-full py-4 px-8 md:px-32">
                <nav class="md:flex md:justify-between">
                    <div class="flex justify-between">
                        <a href="home.html" class="font-bold text-xl lg:text-4xl ">Logo</a>
                        <button type="button" class="md:hidden inline-flex items-center" id="toggleBtn" onclick="toggleNavbar()">
                            <i class="fa-solid fa-bars text-xl lg:text-xl" id="toggleIcon"></i>
                        </button>
                    </div>
    
                    <div class="hidden md:block md:w-auto" id="navbar">
                        <ul class="navItem h-full items-center grid md:flex text-base lg:text-xl gap-4 md:gap-8 font-semibold text-center lg:text-end mt-4 md:mt-0">
                            <li ${currentActivePage === '/' ? 'class="active"' : ''}><a href="/">Home</a></li>
                            <li ${currentActivePage === '/about.html' ? 'class="active"' : ''}><a href="about.html">About</a></li>
                            <li ${currentActivePage === '/contact.html' ? 'class="active"' : ''}><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                
                </nav>
            </header>
        `;
    }
}

customElements.define("header-component", Header);
