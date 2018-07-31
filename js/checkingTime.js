'use strict';

function checkingLine(pos, n)
{
	var i = parseInt(pos / 9);
	for (var j = 0; j < 9; j++)
	{
		if (tab[i][j] == n && j != pos % 9 || tab[i][j] == 0)
			return false;
	}
	return true;
}

function checkingColumn(pos, n)
{
	var j = pos % 9;
	for (var i = 0; i < 9; i++)
	{
		if (tab[i][j] == n && i != parseInt(pos / 9) || tab[i][j] == 0)
			return false;
	}
	return true;
}

function checkingingCube(pos, n, i, j)
{
	var x = i - (i % 3);
	var y = j - (j % 3);

	for (i = x; i < (x + 3); i++)
	{
		for (j = y; j < (y + 3); j++)
		{
			if (tab[i][j] == n && i != parseInt(pos / 9) && j != parseInt(pos % 9) || tab[i][j] == 0)
				return false;
		}
	}
	return true;
}

function completeTab()
{
	for (var pos = 0; pos < 81; pos++)
	{
		var i = parseInt(pos / 9);
		var j = pos % 9;
		var n = document.getElementById('c' + (pos + 1)).value;
		tab[i][j] = n;
	}
}

function checkEverythingYouVeGot()
{
	var i;
	var j;
	completeTab();

	for (var pos = 0; pos < 81; pos++)
	{
		i = parseInt(pos / 9);
		j = pos % 9;
		if (!checkingLine(pos, tab[i][j]) && !checkingColumn(pos, tab[i][j]) && !checkCube(pos, tab[i][j], i, j))
		{
			console.log('wrong');
			return document.getElementById('isOk').innerHTML = 'Wrong';
		}
	}
	document.getElementById('isOk').innerHTML = 'Correct !';
}