euadditem();
function euadditem() {
    var new_div=document.createElement("div");
    var div=document.getElementById("eu_div1");
    var data=`
    <div>
    <label for="username">Course Name :</label>
    <input type="text" id="lname" name="lname" required>

    <label for="username">Board Name :</label>
    <input type="text" id="lname" name="lname" required>

    <label for="username">Passing year:</label>
    <input type="text" id="lname" name="lname" required>

    <label for="username"> Percentage:</label>
    <input type="text" id="lname" name="lname" required></div>
</fieldset></div> <br><br>
    `;
    new_div.innerHTML=data;
    div.appendChild(new_div);
}

// function removeitem(e) {

                    
//     e.parentElement.parentElement.remove(new_div);
// }


wedadditem();
function wedadditem() {
    var new_div=document.createElement("div");
    var div=document.getElementById("wed_div1");
    var data=`
    <div>
    <label for="companyname">Company Name :</label>
    <input type="text" id="cname" name="cname" required>



    <label for="desi">Designation :</label>
    <input type="text" id="desi" name="desi" required>



    <label for="from">From</label>
    <input type="date" id="startdate" name="startdate" required>



    <label for="to"> To </label>
    <input type="date" id="enddate" name="enddate" required></div>
</fieldset></div> <br><br>
    `;
    new_div.innerHTML=data;
    div.appendChild(new_div);
}



rcadditem();
function rcadditem() {
    var new_div=document.createElement("div");
    var div=document.getElementById("rc_div1");
    var data=`
    <div>
    <label for="companyname">Company Name :</label>
    <input type="text" id="cname" name="cname" required>



    <label for="desi">Designation :</label>
    <input type="text" id="desi" name="desi" required>



    <label for="from">From</label>
    <input type="date" id="startdate" name="startdate" required>



    <label for="to"> To </label>
    <input type="date" id="enddate" name="enddate" required></div>
</fieldset></div> <br><br>
    `;
    new_div.innerHTML=data;
    div.appendChild(new_div);
}


wedadditem();
function wedadditem() {
    var new_div=document.createElement("div");
    var div=document.getElementById("wed_div1");
    var data=`
    <div>
    <label for="companyname">Company Name :</label>
    <input type="text" id="cname" name="cname" required>



    <label for="desi">Designation :</label>
    <input type="text" id="desi" name="desi" required>



    <label for="from">From</label>
    <input type="date" id="startdate" name="startdate" required>



    <label for="to"> To </label>
    <input type="date" id="enddate" name="enddate" required></div>
</fieldset></div> <br><br>
    `;
    new_div.innerHTML=data;
    div.appendChild(new_div);
}



lkadditem();
function lkadditem() {
    var new_div=document.createElement("div");
    var div=document.getElementById("fs2");
    var data=`
    <div>

    

    <div id="fs2"> 
         <label for="hindi"> Language : </label>
        <input type="text" id="hindi" name="hindi" value="hindi">
    
        <input type="checkbox" id="read" name="read" value="read">
        <label for="read"> read</label>
        
        <input type="checkbox" id="write" name="write" value="write">
        <label for="read"> write </label>
        
        <input type="checkbox" id="speak" name="speak" value="speak">
        <label for="speak"> speak</label>
        
    </div>

</fieldset></div> <br><br>
    `;
    new_div.innerHTML=data;
    div.appendChild(new_div);
}



tadditem();
function tadditem() {
    var new_div=document.createElement("div");
    var div=document.getElementById("fs1");
    var data=`
    <div>

    

    <div id="fs2"> 
         <label for="php"> Technology name :  </label>
        <input type="text" id="php" name="php" value="php">
    
        <input type="radio" id="b" name="b" value="b">
        <label for="b"> Beginer :</label>
        
        <input type="radio" id="m" name="m" value="m">
        <label for="m"> Mideator </label>
        
        <input type="radio" id="e" name="e" value="e">
        <label for="e"> Expert</label>
        
    </div>

</fieldset></div> <br><br>
    `;
    new_div.innerHTML=data;
    div.appendChild(new_div);
}
