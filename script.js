
    $('#firstname').keyup(function(){
        if(validationOfFirstName()){
            $('#firsname_error').text('Username validated');
            $('#firsname_error').css('color', 'blue');
            $('.input1').css('border-bottom', '1px solid blue')
        }else{
            $('#firsname_error').text('Please use a valid Name');
            $('#firsname_error').css('color', 'red');
                $('.input1').css('border-bottom', '1px solid red')
        }
    })
    $('#lastname').keyup(function(){
        if(validationOfLastName()){
            $('#wrong_name').text('Username validated');
            $('#wrong_name').css('color', 'blue');
            $('.input2').css('border-bottom', '1px solid blue')
            // $('.input1').css('border-bottom', '1px solid blue')
        }else{
            $('#wrong_name').text('Please use a valid Name');
            $('#wrong_name').css('color', 'red');
                $('.input2').css('border-bottom', '1px solid red')
        }
    })

    

    $('#second').keyup(function(){
        if($('#first').val() === $('#second').val()){
            $('#confirm_password_error').text('we are ready to go')
            $('#confirm_password_error').css('color', 'blue')
            $('.input6').css('border-bottom', '1px solid blue')
        }
        else{
            $('#confirm_password_error').text('your passwords do not match please check them again')
            $('#confirm_password_error').css('color', 'red')
              $('.input6').css('border-bottom', '1px solid red')
        }
    })

    $('#phone').keyup(function(){

        if(validationOfPhone()){
            $('#phone_error').text('we are not ready to go')
            $('#phone_error').css('color', 'blue')
            $('.input4').css('border-bottom', '1px solid blue')
    }else{
        $('#phone_error').text('please enter a valid phone number')
        $('#phone_error').css('color', 'red')
        $('.input4').css('border-bottom', '1px solid red')
    }
})


    $('#email').keyup(function(){
        if(ValidationOfEmail()){
            $('#email_error').text('We are ready to go')
            $('#email_error').css('color', 'blue');
            $('.input3').css('border-bottom', '1px solid blue')
        } else{
            $('#email_error').text('yes we are ready to go');
            $('#email_error').css('color', 'red');
            $('.input3').css('border-bottom', '1px solid red')
        }
    })

    $('#first').keyup(function(){
        let firstpassword =$('#fist').val()
        if(validationOfPassword()){
            $('#password_error').text('fairly strong')
            $('#password_error').css('color', 'blue');
            $('.input5').css('border-bottom', '1px solid blue')
        }else{
            $('#password_error').text('your password needs to morethan 8')
            $('#password_error').css('color', 'red')
             $('.input5').css('border-bottom', '1px solid red')
        }
    })

    function ValidationOfEmail(){
          let email = $('#email').val();
          let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w)*$/
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