var dict = {
        l1 : 'sudo docker images',
        l2 : 'sudo docker ps -a',
        l3 : 'sudo docker ps',
        l4 : 'docker run -it ',
        l5 : 'sudo docker exec -it',
        l6 : 'sudo systemctl start docker',
        l7 : 'sudo systemctl stop docker',
        l8 : 'sudo systemctl status docker',
        "" : "type some thing"
    };
function run(){
        x = document.getElementById('p1');
        cmd = document.getElementById('int1').value;
        var xhr = new XMLHttpRequest();
        xhr.open("GET","http://192.168.43.51/cgi-bin/js.py?x=" +"sudo "+cmd,false);
        xhr.send();
        var output = xhr.responseText;
        output1 = '<b><h2>Successfully done</h2></b>';
        x.innerHTML = output+"\n"+output1;
         }

function fun1(){
        cmd = document.getElementById('id2').value;
        des = document.getElementById('id3').value;
        alert('hii');
        if (cmd == "" || des == ""){
            alert('both must be filled');
        }
        else{
        var x = document.getElementById("cmd");
        var option = document.createElement("option");
        option.text = des;
        option.value = des;
        x.add(option);
        dict[des]=cmd;
        alert('added');

        }
    }
function fun(){
        x = document.getElementById('p1');
        j = document.getElementById('cmd');
        z = document.getElementById('id3');
        var xhr = new XMLHttpRequest();

        if (j.value == 'l4'){
            var name = window.prompt("Enter your name os: ");
            var image = window.prompt("Enter image name: ");
            var i  = 'sudo docker run --name '+name+" "+image
            alert(i)
            xhr.open("GET","http://192.168..43.51/cgi-bin/js.py?x=" + i,false);
            xhr.send();
            var output = xhr.responseText;
            x.innerHTML = output;
        }
        else if(j.value == 'l5'){
            var os = window.prompt("Enter os name or os id : ");
            var i = 'sudo docker exec'+" "+os;
            alert(i)
            xhr.open("GET","http://192.168..43.51/cgi-bin/js.py?x=" + i,false);
            xhr.send();
            var output = xhr.responseText;
            x.innerHTML = output;
        }
        else if(j.value == 'l9'){
            var image = window.prompt("Enter the image name : ");
            var i = dict[j.value]+" "+os;
            alert(i)
            xhr.open("GET","http://192.168..43.51/cgi-bin/js.py?x=" + i,false);
            xhr.send();
            var output = xhr.responseText;
            x.innerHTML = output;
        }
        else if(j.value == z.value){
            z =  document.getElementById('id4').value;
            if(z == ""){
            var i  = dict[j.value];
            alert(i)
            xhr.open("GET","http://192.168..43.51/cgi-bin/js.py?x=" + i,false);
            xhr.send();
            var output = xhr.responseText;
            output1 = '<b><h2>Successfully done</h2></b>';
            x.innerHTML = output+"\n"+output1;
            }
            else{
                var i = dict[j.value];
                var items =  window.prompt(`Enter the ${z} : `);
                i =i+" "+items;
                dict[j.value] = i;
                alert(i)
                xhr.open("GET","http://192.168..43.51/cgi-bin/js.py?x=" + i,false);
                xhr.send();
                var output = xhr.responseText;
                output1 = '<b><h2>Successfully done</h2></b>';
                x.innerHTML = output+"\n"+output1;
            }
        }
        else{
            var i  = dict[j.value];
            alert(i)
            xhr.open("GET","http://192.168..43.51/cgi-bin/js.py?x=" + i,false);
            xhr.send();
            var output = xhr.responseText;
            output1 = '<b><h2>Successfully done</h2></b>';
            x.innerHTML = output+"\n"+output1;
         }
    }
