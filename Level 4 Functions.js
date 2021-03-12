function getRandomInteger(lower, upper)
{
	var multiplier = upper - (lower - 1);
	var rnd = parseInt(Math.random() * multiplier) + lower;
		
	return rnd;
}

function display()
{
	scoreMSG = ("Score: " + timesClicked);
	clickOut.innerHTML = scoreMSG; 
	NumberCorrect = ("Number Correct: " + correctIMGcount);
	displayCorrect.innerHTML = NumberCorrect;
	endmsg.innerHTML = "";
	if (correctIMGcount == 16)
	{
		endmsg.innerHTML = "Congrats! You solved the puzzle!";	
	}
}
		
function chooseTwo(img)
{
	if(gameStart && !gameEnd)
	{
		if (imgsChosen == 0)
		{
			image1Num = img;
			source1 = img.src;
			imgsChosen = 1;
			image1Num.style.border = "solid red";
		}
		else{
		if (imgsChosen == 1)
		{
			image2Num = img;
			source2 = img.src;
			if (source2 != source1)
			{
				image1Num.src = source2;
				image2Num.src = source1;
				imgsChosen = 0;
				clickScore();
				image1Num.style.border = "none";
			}
		}
		}
		checkSources();
	}
}
			
function clickScore()
{ 
	timesClicked = timesClicked + 1;
	display();
}
	
function checkSources() //u were checking each source but it's not working properly
{
	correctIMGcount = 0;	 
	for(var i=0; i < 16; i++)
	{
		if (imgArray[i].src == imgArray[i].OGsrc)
		{
			correctIMGcount = correctIMGcount + 1;  //img 7 and 11 are swapped somehow, fix asap, ur pretty close
		}
	}
	if (correctIMGcount == 16)
	{
		gameEnd = true;
	}
	display();
}
		
function restart()
{
	gameEnd = false;
	initialize();
	image1Num.style.border = "none";
}
				
