class Footer extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <footer class="w-100 py-4 px-8 md:px-32">
        <div class="mt-2 flex justify-between">
            <a href="" class="font-bold text-xl lg:text-2xl ">Logo</a>
            <div class="flex gap-4">
                <i class="fa-brands fa-facebook text-xl lg:text-xl"></i>
                <i class="fa-brands fa-x-twitter text-xl lg:text-xl"></i>
                <i class="fa-brands fa-instagram text-xl lg:text-xl"></i>         
                </div>
            </div>
        <div class="grid lg:flex lg:justify-between gap-4 m-4 lg:mt-8">
            <ul>
                <li><a href="">Lorem ipsum</a></li>
                <li><a href="">Lorem ipsum</a></li>
                <li><a href="">Lorem ipsum</a></li>
                <li><a href="">Lorem ipsum</a></li>
            </ul>

            <ul>
                <li><a href="">Lorem ipsum</a></li>
                <li><a href="">Lorem ipsum</a></li>
                <li><a href="">Lorem ipsum</a></li>
                <li><a href="">Lorem ipsum</a></li>
            </ul>

            <ul>
                <li><a href="">Lorem ipsum</a></li>
                <li><a href="">Lorem ipsum</a></li>
                <li><a href="">Lorem ipsum</a></li>
                <li><a href="">Lorem ipsum</a></li>
            </ul>
        </div>
    </footer>
        `;
    }
}

customElements.define('footer-component', Footer);