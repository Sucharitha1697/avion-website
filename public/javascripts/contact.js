 $(document).ready(function() {
            var from, to, subject, text;
            $("#send_email").click(function() {
                 to = "avionbitmesra@gmail.com";
                subject = $("#subject").val();
                text = $("#content").val();
                $("#message").text("Sending E-mail...Please wait");
                $.get("/send", {
                    to: to,
                    subject: subject,
                    text: text
                }, function(data) {
                    if (data == "sent") {
                        $("#message").empty().html(
                            "Email has been sent at " + to + ".Please check inbox! ");
                    }

                });
            });
        });