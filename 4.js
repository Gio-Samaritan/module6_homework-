              /* Задание 4*/

              function sum(a, b) {
                let first = a; 
                   setTimeout(function go() {
                   console.log(first);
                   if(first < b){
                     setTimeout(go, 1000);
                   }
                   first++;
                   }, 1000);
                }
                sum(1, 2);