'use strict'

chrome.omnibox.onInputEntered.addListener(
	function (text) {
		search(text);
	});

chrome.runtime.onInstalled.addListener(function () {
	chrome.contextMenus.create({
		id: 'search',
		contexts: ['selection'],
		title: 'Zoeken met WindeSearch'
	});
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
	if (info.menuItemId == "search") {
		search(info.selectionText);
	}
});

function search(query) {
	chrome.tabs.create({ url: 'https://windesheim.summon.serialssolutions.com/search?q=' + query });
}
