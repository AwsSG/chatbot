    var answerList = {
        "I need help with my bill": ["My bill amount is incorrect", "My bill did not arrive yet"],
            "My bill amount is incorrect": ["Higher than expected","Lower than expected"],
                "Higher than expected": ["Yes","No"],
                    "Yes": ["Ok, since this is your first bill.<br>It is normal for the first bill to be higher than usual. This is because the bill is calculated for the first month in addition to the days you recieved the service, so that first bill is for more than just the first month. <br>First bill may include: <br>* Activation fees. <br>* Installation fees. <br>* Par period charges. <br><br>Unless aditional usage charges are incurred, your next bill should be the amount that you would expect. <br>Aditional usage charges are incurred when you exceed the monthly allowence."],
                    "No": ["So, higher than usual bill can mean one of two things.<br> Either aditional usage charges were incurred because you exceeded the monthly allowence. Or, you recently added another service/add-on.<br>If you believe that this bill is incorrect, you can talk to an agent by calling 1111 from Monday to Friday between 09:00 and 20:00."],
                "Lower than expected": ["I cancelled a service","I recieved a credit to my account"],
                    "I cancelled a service": ["So here is what usually happns in this case.<br> When you cancel one of our service, you will no longer be billed for that service. Therefore, your total bill will not include the charges for the cancelled service."],
                    "I recieved a credit to my account": ["Here is what this means,<br> When your account gets credited, this will be reflected on your bill by bringing the billed amount down by the amount you were credited. Meaning that the billing is the same as usual, but the amount for this bill is lowered because of the credit you received."],
            "My bill did not arrive yet": ["By post","By email"],
                "By post":["I asked for paperless bill","I did not"],
                    "I asked for paperless bill":["Dear customer,<br> When you ask to change the way you receive your bill, make sure that you provided your email accurately. If there is any typos, your bill may have been sent to the wrong email.<br> Alternatively, you can see your bill by logging in your MyEir account at any time."],
                    "I did not":["Dear customer,<br> Getting your bill by post might get delayed from the post service, we suggest that you wait few more days for the bill to arrive. <br>If the bill did not arrive and it has been more than 14 days, we suggest that  you talk to an agent by calling 1111 from Monday to Friday between 09:00 and 20:00."],
                "By email": ["I asked to get paper bill","No, I didn't"],
                    "I asked to get paper bill": ["Dear customer,<br> When you ask to change the way you receive your bill, make sure that you provided your address details accurately. If there is any typos, your bill may have been sent to the wrong address.<br> Alternatively, you can see your bill by logging in your account at any time."],
                    "No, I didn't": ["Dear customer,<br> You may have already received your bill by email, however it might have been deleted by mistake. Try to check your deleted emails, or check  the spam folder as it may have been placed there.<br> If your still can't find your bill email, you can see your bill by logging in your account at any time."],
        "I have a technical problem": ["The service is down", "Equipment is not working"],
            "The service is down": ["Sorry to hear that!<br>You can check if the service is down in your area on our website. If the service is down, the website will also show details of how long it is expected to be down. Please be aware that any down time in the service will NOT be charged."],
            "Equipment is not working": ["I am sorry that you are going through such inconvenience.<br>You can Either talk to one of our agent in technical support on 0005, or you can bring it in to one of our shops."],
        "I have a question about a product I am interested in": ["You can talk to one of our sales agents on 0002 between 09:00 and 17:00 from Monday to Friday."]
    };

   var questionsList = {
        "I need help with my bill": "Ok, how can I help you with your bill?",
            "My bill amount is incorrect":"Alright, is your bill higher or lower than what you expected?",
                "Higher than expected":"I see, is it your first bill?",
                "Lower than expected":"That is usually a good thing! Did you cancel any services?",
            "My bill did not arrive yet": "Hmmm ... How do you usually get your bill?",
                "By post":"Ok, can you tell me if you changed (or asked) to get your bill by email instead of post?",
                "By email":"Well, did you change (or asked) to get your bill by post instead of email?",
        "I have a technical problem": "Oh those are annoying, as a bot I know that very well.<br>What technical problem are you having?",
        "I have a question about a product I am interested in": "In that case, let me direct you to where you can get answers"
    };
