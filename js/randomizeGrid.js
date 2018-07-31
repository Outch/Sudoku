'use strict';

function generateRandom(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomSupp()
{
	do {
		var pos = generateRandom(0, 80);
	} while (tab[parseInt(pos / 9)][parseInt(pos % 9)] == '')
	tab[parseInt(pos / 9)][pos % 9] = '';
}

function randomizeGrid()
{
	for (var i = 0; i < 40; i++)
		randomSupp();
}