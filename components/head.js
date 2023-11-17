class Head extends HTMLElement {
    constructor() {
        super();
    }

    connecterCallback() {
        this.innerHTML = `
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="description" content="Simple Template using HTML, CSS, Tailwind and JavaScript
                                            By: Jean Maica del Remedio">
            <!-- tailwind framework -->
            <script src="https://cdn.tailwindcss.com"></script>
            <!-- font awesome -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
            <!-- components -->
            <script src="components/header.js"></script>
            <script src="components/footer.js"></script>
            <!-- css -->
            <link rel="stylesheet" href="style.css">
            <title>Template</title>
        </head>
                `
    }
}

customElements.define("Head", Head)