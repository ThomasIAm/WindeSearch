'use strict'

chrome.omnibox.setDefaultSuggestion({
	description: 'Zoek met WindeSearch'
});

chrome.omnibox.onInputEntered.addListener(
	function (text) {
		searchCurrentTab(text);
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
		searchNewTab(info.selectionText);
	}
});

function searchCurrentTab(query) {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		var tab = tabs[0];
		chrome.tabs.update(tab.id, { url: 'https://windesheim.summon.serialssolutions.com/search?q=' + query });
	});
}

function searchNewTab(query) {
	chrome.tabs.create({ url: 'https://windesheim.summon.serialssolutions.com/search?q=' + query });
}
