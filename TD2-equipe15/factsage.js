//Done 


function clearData() {
    document.getElementById("REACT1").value = "";
    document.getElementById("REACT2").value = "";
    document.getElementById("react2n").value = "";
}



function default_values() {
    document.getElementById("myForm").reset();
}



//TODO : fetch stuff 

let url = "https://lodcalhost:8080/";


function setup() {
    noCanvas();
    var buttonSubmit = document.getElementById("submitButton");
    buttonSubmit.addEventListener("click", function() {
            var myForm = document.getElementById("myForm");
            var data = new URLSearchParams(new FormData(myForm));

            fetch(url, {
                    method: 'POST',
                    headers: new Headers(),
                    body: JSON.stringify(data)
                })
                .then((response) => response.json())
                .then(function(response) {})
                .catch(error => {
                        console.log('Error: ', error.message))
                })
    })
}
/*

                        $("#loading").show();

                        setTimeout(() => http.send(), 3000);



                        $("#loading").hide();



                        window.onload = function() {
                            

                                //var img = $("<img src = 'loader.gif'/> ");
                                //$("#result").append(img);


                                fetch('http://localhost:8080/', {
                                        method: 'post',
                                        body: data
                                    })
                                    .then((response) => response.json())
                                    .then(function(response) {
                                        $("#result").empty();
                                        console.log(data);
                                        //GenerateOutput(data);
                                    })
                                    
                            })

                        }
                        function getData() {
                            return fetch("https://localhost:8080/")
                                .then(response => response.json())
                                .then(posts => console.log(posts))
                        }
                        const newPost => {
                            const options = {
                                method: 'POST',
                                headers: new Headers,
                                body: JSON.stringify(form.serializeArray()),
                                }
                        })
                        function sendData(url, data) {
                            var formData = new FormData();

                            for (var name in data) {
                                formData.append(name, data[name]);
                            }

                            function postData() {
                                event.preventDefault();
                            }
                        }
                        //document.getElementById("submit").addEventListener('submit', setup);
                        var form = document.getElementById("form");
                        function setup(event) {
                            noCanvas();

                            event.preventDefault();
                            fetch(url, {
                                    method: 'POST',
                                    body: JSON.stringify(form.serializeArray()),
                                    headers: {
                                        "Content-Type": 'application/json'
                                    }
                                }).then((response) => response.json())
                                .then((data) => console.log(data))
                                .catch(error => console.error('Error: ${error} '))
                        }
                        function postData(event) {
                            event.preventDefault();

                            fetch('https://jsonplaceholder.typicode.com/posts', {
                                    method: 'POST',
                                    headers: new Headers(),
                                    body: JSON.stringify({ tittle: tittle, body: body })
                                }).then((res) => res.json())
                                .then((data) => console.log(data))
                                .catch((err) => console.log(err))
                        }
*/