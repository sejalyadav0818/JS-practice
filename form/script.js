
                    // // for first name and last name 
                     function validation()
                     {
                        //forms property returns a collection of all <form> elements in a document.
                        //.value stores the user input




                             let username=document.forms["form"]["username"].value;
                             
                          
                             if(username=="")
                            {
                               alert("please Enter Username");
                                
                                return false;
                           }
                           if (!isNaN(username))
                           {
                            alert("Only character Allow !");
                            return false;
                           }

                        if ((username.length <=2 )|| (username.length>20))
                           {
                            alert("Please enter Full name ");
                            return false;
                           }

                           
                    //for password 
                    let pass=document.forms["form"]["pass"].value;
                    
                                    
                                if (pass.length < 8) {
                                    alert("Your password must be at least 8 characters"); 
                                    return false;

                                }
                                if (pass.search(/[a-z]/i) < 0) {
                                    alert("Your password must contain at least one letter.");
                                    return false;
                                }
                                if (pass.search(/[0-9]/) < 0) {
                                    alert("Your password must contain at least one digit."); 
                                    return false;
                                }
                           
                    
                                //for Email id 
                    let email=document.forms["form"]["email"].value;

                                let mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                                    if(email.value.match(mailformat))
                                    {
                                    //document.form1.text1.focus();
                                    return true;
                                    }
                                    else
                                    {
                                    alert("Invalid email address.");
                                    //document.form1.text1.focus();
                                    return false;
                                    }

                                }

          