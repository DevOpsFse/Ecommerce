$(document).ready(function(){
            //1. hide error sections
            $("#shipTypeError").hide();
            $("#shipCodeError").hide();
            $("#shipNameError").hide();
            $("#noteError").hide();
            
            //2. define error variable
            var shipTypeError = false;
            var shipCodeError = false;
            var shipNameError = false;
            var noteError = false;

            //3. define validate function
            function validate_shipType() {
                var val = $('input[type="radio"][name="shipType"]:checked').length;
                if(val==0) {
                    $("#shipTypeError").show();
                    $("#shipTypeError").html("*Please Choose one Type");
                    $("#shipTypeError").css('color','red');
                    shipTypeError = false;
                } else {
                    $("#shipTypeError").hide();
                    shipTypeError = true;
                }
                return shipTypeError;
            }

            function validate_shipCode() {
                var val = $("#shipCode").val();
                var exp = /^[A-Z]{4,10}$/;
                if(val=='') {
                    $("#shipCodeError").show();
                    $("#shipCodeError").html("*Please enter any code");
                    $("#shipCodeError").css('color','red');
                    shipCodeError = false;
                } else if(!exp.test(val)) {
                    $("#shipCodeError").show();
                    $("#shipCodeError").html("*Must be 4-10 Chars only");
                    $("#shipCodeError").css('color','red');
                    shipCodeError = false;
                } else {
                    $("#shipCodeError").hide();
                    shipCodeError = true;
                }
                return shipCodeError;
            }

            function validate_shipName() {
                var val = $("#shipName").val();
                if(val=='') {
                    $("#shipNameError").show();
                    $("#shipNameError").html("*Please enter Name");
                    $("#shipNameError").css('color','red');
                    shipNameError = false;
                } else {
                    $("#shipNameError").hide();
                    shipNameError = true;
                }
                return shipNameError;
            }

            function validate_note() {
                var val = $("#note").val();
                if(val=='') {
                    $("#noteError").show();
                    $("#noteError").html("*Please enter note");
                    $("#noteError").css('color','red');
                    noteError = false;
                } else {
                    $("#noteError").hide();
                    noteError = true;
                }
                return noteError;
            }

            //4. link action-event 
            $('input[type="radio"][name="shipType"]').click(function(){
                validate_shipType();
            })

            $("#shipCode").keyup(function(){
                $(this).val($(this).val().toUpperCase());
                validate_shipCode();
            })

            $("#shipName").keyup(function(){
                $(this).val($(this).val().toUpperCase());
                validate_shipName();
            })

            $("#note").keyup(function(){
                validate_note();
            })


            //5. on submit validate all
            $("#myshippingForm").submit(function(){
                validate_shipType();
                validate_shipCode();
                validate_shipName();
                validate_note();

                if(shipTypeError && shipCodeError
                 && validate_shipName && noteError) return true;
                else return false;
            })
        })
