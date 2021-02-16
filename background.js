'use strict'

chrome.omnibox.onInputEntered.addListener(
	function (text) {
		chrome.tabs.create({ url: 'https://windesheim.summon.serialssolutions.com/search?q=' + text })
	}
);