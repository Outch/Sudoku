'use strict';

function checkRandNumber(nbr, index)
{
	for (var i = 0; i <= index; i++)
	{
		if (nbr == tab[0][i])
			return false;
	}
	return true;
}

function generateRandom(min, max, index)
{
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (!checkRandNumber(num, index)) ? generateRandom(min, max, index) : num;
}

function randomizeFirstLine()
{
	for (var i = 0; i < 9; i++)
	{
		tab[0][i] = generateRandom(1, 9, i);
	}
}

function displayGrid()
{
	var idi = 1;
	for (var i = 0; i < 9; i++)
	{
		for (var j = 0; j < 9; j++)
		{
			document.getElementById('c' + idi).value = tab[i][j];
			idi++;
		}
	}
}

function createGrid()
{
	for (var i = 0; i < 9; i++)
	{
		tab[i] = [];
		for (var j = 0; j < 9; j++)
		{
			tab[i][j] = 0;
		}
	}
	randomizeFirstLine();
	resolveGrid(0);
	backUpTab = JSON.parse(JSON.stringify(tab));
	randomizeGrid();
	displayGrid();
}