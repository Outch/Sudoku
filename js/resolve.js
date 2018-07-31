'use strict';

function checkLine(pos, n)
{
	var i = parseInt(pos / 9);

	for (var j = 0; j < 9; j++)
	{
		if (tab[i][j] == n)
			return false;
	}
	return true;
}

function checkColumn(pos, n)
{
	var j = pos % 9;
	for (var i = 0; i < 9; i++)
	{
		if (tab[i][j] == n)
			return false;
	}
	return true;
}

function checkCube(pos, n, i, j)
{
	var x = i - (i % 3);
	var y = j - (j % 3);

	for (i = x; i < (x + 3); i++)
	{
		for (j = y; j < (y + 3); j++)
		{
			if (tab[i][j] == n)
				return false;
		}
	}
	return true;
}

function resolveGrid(pos)
{
	var i = parseInt(pos / 9);
	var j = parseInt(pos % 9);


	if (pos == 81)
		return true;
	if (tab[i][j] != 0)
		return resolveGrid(pos + 1);
	for (var n = 1; n <= 9; n++)
	{
		if (checkLine(pos, n) && checkColumn(pos, n) && checkCube(pos, n, i, j))
		{
			tab[i][j] = n;
			if (resolveGrid(pos + 1))
				return true;
		}
	}
	tab[i][j] = 0;
	return false;
}