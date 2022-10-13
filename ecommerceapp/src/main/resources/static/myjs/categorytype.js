	$(document).ready(function(){
            //1. hide error section
            $("#nameError").hide();
            $("#noteError").hide();
            
            //2. error variable
            var nameError = false;
            var noteError = false;

            //3. define validate function
            function validate_nameError() {
                var val = $("#name").val();
                var exp = /^[A-Z]{4,15}$/;
                if(val==='') {
                    $("#nameError").show();
                    $("#nameError").html("*Enter Category Type Name");
                    $("#nameError").css('color','red');
                    nameError = false;
                } else if(!exp.test(val)) {
                    $("#nameError").show();
                    $("#nameError").html("*Name Must be 4-15 chars only");
                    $("#nameError").css('color','red');
                    nameError = false;
                }  else {
                    $("#nameError").hide();
                    nameError = true;
                }
                return nameError;
            }
            function validate_noteError() {
                var val = $("#note").val();
                var exp = /^[a-zA-Z0-9\.\:\;\,\-\#\s]{10,200}$/
                if(val==='') {
                    $("#noteError").show();
                    $("#noteError").html("*Enter Category Type Note");
                    $("#noteError").css('color','red');
                    noteError = false;
                } else if(!exp.test(val)) {
                    $("#noteError").show();
                    $("#noteError").html("*Must be 10-200 Chars (allowed: space , . - #)");
                    $("#noteError").css('color','red');
                    noteError = false;
                } else {
                    $("#noteError").hide();
                    noteError = true;
                }
                return noteError;
            }
            //4. link with action event
            $("#name").keyup(function(){
                $(this).val($(this).val().toUpperCase());
                validate_nameError();
            })
            $("#note").keyup(function(){
                validate_noteError();
            })

            //5. on submit
            $("#myCategoryTypeForm").submit(function(){
                validate_nameError();
                validate_noteError();

                if(nameError && noteError) return true;
                else return false;
            })
        })