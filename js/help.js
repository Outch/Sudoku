'use strict';

function complete()
{
	for (var i = 0; i < 81; i++)
	{
		if (tab[parseInt(i / 9)][i % 9] == 0)
			return false;
	}
	return true;
}

function randomHelp()
{
	if (complete())
		return;
	do {
		var pos = generateRandom(0, 80);
	} while (tab[parseInt(pos / 9)][pos % 9] != 0)

	tab[parseInt(pos / 9)][pos % 9] = backUpTab[parseInt(pos / 9)][pos % 9];
	displayGrid();
	checkEverythingYouVeGot();
}