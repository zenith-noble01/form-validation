       //validation of firstname
    $('#firstname').keyup(function(){
        if(validationOfFirstName()){
            $('#firsname_error').text('Username validated');
            $('#firsname_error').css('color', '#00ff00');
            $('.input1').css('border-bottom', '1px solid #00ff00')
        }else{
            $('#firsname_error').text('Please use a valid Name');
            $('#firsname_error').css('color', '#ff0000');
                $('.input1').css('border-bottom', '1px solid #ff0000')
        }
    })

    //validation of secondname
    $('#lastname').keyup(function(){
        if(validationOfLastName()){
            $('#wrong_name').text('Username validated');
            $('#wrong_name').css('color', '#00ff00');
            $('.input2').css('border-bottom', '1px solid #00ff00')
            // $('.input1').css('border-bottom', '1px solid #00ff00')
        }else{
            $('#wrong_name').text('Please use a valid Name');
            $('#wrong_name').css('color', '#ff0000');
                $('.input2').css('border-bottom', '1px solid #ff0000')
        }
    })


          //validation if email
      $('#email').keyup(function(){
        if(ValidationOfEmail()){
            $('#email_error').text('Email Validated')
            $('#email_error').css('color', '#00ff00');
            $('.input3').css('border-bottom', '1px solid #00ff00')
        } else{
            $('#email_error').text('Please use a valid Email');
            $('#email_error').css('color', '#ff0000');
            $('.input3').css('border-bottom', '1px solid #ff0000')
        }
    })

          //validation of phonenumber
    $('#phone').keyup(function(){
        if(validationOfPhone()){
            $('#phone_error').text('Phone number validated')
            $('#phone_error').css('color', '#00ff00')
            $('.input4').css('border-bottom', '1px solid #00ff00')
    }else{
        $('#phone_error').text('please enter a valid phone number')
        $('#phone_error').css('color', '#ff0000')
        $('.input4').css('border-bottom', '1px solid #ff0000')
    }
})


        //  validation of first password
        $('#first').keyup(function(){
        let firstpassword =$('#fist').val()
        if(validationOfPassword()){
            $('#password_error').text('Password Validated')
            $('#password_error').css('color', '#00ff00');
            $('.input5').css('border-bottom', '1px solid #00ff00')
        }else{
            $('#password_error').text('your password needs to morethan 8')
            $('#password_error').css('color', '#ff0000')
             $('.input5').css('border-bottom', '1px solid #ff0000')
        }
    })


    //validation of second password
    $('#second').keyup(function(){
        if(validationOfConfirmPass()){
             $('#confirm_password_error').text('your passwords do not match please check them againmmm')
            $('#confirm_password_error').css('color', '#ff0000')
              $('.input6').css('border-bottom', '1px solid #ff0000')
        }else{
        if($('#first').val() === $('#second').val()){
            $('#confirm_password_error').text('Passwords Match')
            $('#confirm_password_error').css('color', '#00ff00')
            $('.input6').css('border-bottom', '1px solid #00ff00')
        }
        else{
            $('#confirm_password_error').text('your passwords do not match please check them again')
            $('#confirm_password_error').css('color', '#ff0000')
              $('.input6').css('border-bottom', '1px solid #ff0000')
        }}
    })



    function ValidationOfEmail(){
          let email = $('#email').val();
          let reg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
          if (reg.test(email)){
              return true
          }else{
              return false
          }
        }
        
       

        function validationOfPassword(){
            let firstpassword = $('#first').val();
            if(firstpassword.length > 7){
                return true;
            }else{
                return false;
            }
        }
        function validationOfConfirmPass (){
            let confirmPassword = $('#second').val();
            if(confirmPassword.length > 7){
                return true
            }else{
                return false
            }
        }

    function validationOfFirstName(){
        let firstName = $('#firstname').val();
        let namepattern = /^[a-zA-Z ]+$/;
        if(namepattern.test(firstName)){
            return true;
        }else{
            return false;
        }
    }
    function validationOfLastName(){
        let lastname = $('#lastname').val();
        let namepattern = /^[a-zA-Z ]+$/;
        if(namepattern.test(lastname)){
            return true;
        }else{
            return false;
        }
    }


    function validationOfPhone(){
        let phone = $('#phone').val();
        let phonepattern = /^[0-9 ]+$/
        if(phonepattern.test(phone)){
            return true;
        }
        else{
            return false;
        }
    }
// }
// 




        //   let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w)*$/