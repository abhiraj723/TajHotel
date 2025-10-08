let clr = document.getElementById('clr');
        let nbtn = document.getElementById('n-btn');
        let a = true;
        nbtn.addEventListener('click', () => {
            if (a == true) {
                a = false;
                clr.style.backgroundColor = "black"
                nbtn.style.backgroundColor = "white"
            }
            else {
                a = true;
                clr.style.backgroundColor = "transparent"
                nbtn.style.backgroundColor = ""
            }
            console.log(a);

        })