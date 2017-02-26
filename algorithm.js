function runProgram(cityName, countryName, normFeel) 
{
    var link = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName +"," +countryName + "&appid=004a87eeec98aaa0d73962e75d3e0a94";
    
    $.ajax
    (
        {
            url: link,
        }
    )
    
  .done(function( response ) 
    {
        temperature = response.main.temp*(9/5)-459.67;
        windspeed = response.wind.speed;
        humidity = response.main.humidity; 
        
        console.log(""+temperature+"-"+windspeed+"-"+humidity);
        
        pickOutfit(temperature, windspeed, humidity, normFeel)
  });
    
};

jQuery("#stylebutton").click(function(){
    var city=jQuery("#city").val();
    var country=jQuery("#country").val();
    var normFeel=jQuery("#choice").children(":selected").text();
    
    runProgram(city,country,normFeel);
})



//Start of actually deciding whats going to popup 

function pickOutfit(temperature, windspeed, humidity, normFeel)
{
    
    if(temperature>85)
    {
        outfit=1;
    }

    if(temperature>75&&temperature<=85)
    {
        outfit=2;
    }

    if(temperature>50&&temperature<=75)
    {
        outfit=3;
    }

    if(temperature>32&&temperature<=50)
    {
        outfit=4;
    }

    if(temperature<32)
    {
        
        outfit=5;
    }

    if(normFeel=="hot"&&outfit>1)
    {
        outfit--;
    }

    if(normFeel=="cold"&&outfit<5)
    {
        outfit++;
    }

    if(windspeed>10&&outfit<5)
    {
        outfit++;
    }

    if(windspeed>30&&outfit<5)
    {
        outfit++;
    }

    if(humidity>=45&&outfit>1)
    {
        outfit--;
    }
    console.log(outfit);
    printPicture(outfit);
}

// This method picks the picture we are going to put on the website The pictures go through the outfits and then adds an umbrella if needed. 
function printPicture(outfit)
{
    //first outfit this is a tanktop and shorts 
    if(outfit==1)
    {
        var img1 = new Image();
        var div = document.getElementById('outfitDiv');
        
        img1.src = 'Picture1.png';
        img1.onload = function()
        {
            div.removeChild(div.firstChild);
            div.appendChild(img1);
            
        };
        
        
    }
    
    //this is the second out fit that consists of a tshit and shorts 
    if(outfit==2)
    {
        var img2 = new Image();
        var div = document.getElementById('outfitDiv');
        
        img2.src = 'Picture2.png';
        img2.onload = function()
        {
            div.removeChild(div.firstChild);
            div.appendChild(img2);
            
        };
        
        
    }
    
    //this is the thrid outfit it includes 
    if(outfit==3)
    {
        var img3 = new Image();
        var div = document.getElementById('outfitDiv');
        
        img3.src = 'Picture3.png';
        img3.onload = function()
        {
            div.removeChild(div.firstChild);
            div.appendChild(img3);
            
        };
        
        
    }
    
    //this is the fourth image it is a long sleve shirt and pants 
    if(outfit==4)
    {
        var img4 = new Image();
        var div = document.getElementById('outfitDiv');
        
        img4.src = 'Picture4.png';
        img4.onload = function()
        {
            div.removeChild(div.firstChild);
            div.appendChild(img4);
            
        };
        
        
    }
    
    //this is the fifth image and this is every possible layer know to man 
    if(outfit==5)
    {
        var img5 = new Image();
        var div = document.getElementById('outfitDiv');
        
        img5.src = 'Picture5.png';
        img5.onload = function()
        {
            div.removeChild(div.firstChild);
            div.appendChild(img5);
            
        };
        
        
    }
}